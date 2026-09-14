// One-time importer: catalogue/data/*.json  ->  site/src/data/catalogue.ts (+ copies images).
// After the first run, site/src/data/catalogue.ts is the EDITABLE source of truth — edit it directly.
// Re-run only for a full re-import from the PDF extraction:  node scripts/gen-catalogue.mjs
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const rd = (p) => JSON.parse(fs.readFileSync(path.join(ROOT, p), "utf8"));

const cat = rd("catalogue/data/catalog-data.json");
const man = rd("catalogue/data/image-manifest.json");

// ---- page -> {section, headings, specs, notes}
const pageInfo = {};
for (const s of cat.sections) for (const pp of s.product_pages || []) {
  pageInfo[pp.page] = { section: s.name, headings: pp.headings || [], specs: pp.specs || {}, notes: pp.notes || [] };
}

// ---- page -> images (best first)
const rank = (im) => (im.role === "product_photo" ? 0 : im.role === "detail" ? 1 : 2) * 10 +
  (im.flag === "ok" ? 0 : im.flag === "low_res" ? 1 : 2);
const pageImgs = {};
for (const im of man.images) (pageImgs[im.page] ||= []).push(im);
for (const k in pageImgs) pageImgs[k].sort((a, b) => rank(a) - rank(b));

// ---- image copy
const PUB = "site/public/catalogue/img";
fs.mkdirSync(path.join(ROOT, PUB), { recursive: true });
const copied = new Set();
function toPublic(file) {
  // file like "images/p08/p08-....png"
  const rel = file.replace(/^images\//, "");
  const src = path.join(ROOT, "images", rel);
  const dst = path.join(ROOT, PUB, rel);
  if (!copied.has(rel)) {
    if (fs.existsSync(src)) {
      fs.mkdirSync(path.dirname(dst), { recursive: true });
      fs.copyFileSync(src, dst);
      copied.add(rel);
    } else {
      return null;
    }
  }
  return "/catalogue/img/" + rel;
}

const CAT = cat.meta.candelx_scheme.category_codes;
const catName = (letter) => (CAT[letter] || "Product").replace(/s$/, "").replace(/ system$/, "");

// ---- group all_skus by (section, prefix)
const groups = new Map();
for (const sku of cat.all_skus) {
  const key = sku.section + "|" + sku.candelx_prefix;
  if (!groups.has(key)) groups.set(key, { section: sku.section, prefix: sku.candelx_prefix, skus: [], pages: new Set() });
  const g = groups.get(key);
  g.skus.push(sku);
  g.pages.add(sku.page);
}

const lowq = [];
const families = [];
for (const g of groups.values()) {
  const pages = [...g.pages].sort((a, b) => a - b);
  const specs = {};
  const headings = new Set();
  const notes = new Set();
  for (const p of pages) {
    const pi = pageInfo[p];
    if (!pi) continue;
    for (const [k, v] of Object.entries(pi.specs)) if (v && !specs[k]) specs[k] = v;
    for (const h of pi.headings) headings.add(h);
    for (const n of pi.notes) notes.add(n.replace(/\s+/g, " ").trim());
  }
  const H = [...headings];

  // hero + detail images across the family's pages
  let hero = null;
  const details = [];
  const vectors = [];
  for (const p of pages) for (const im of pageImgs[p] || []) {
    if (im.role === "product_photo" && !hero) hero = im;
    else if (im.role === "vector_diagram_render") vectors.push(im);
    else details.push(im);
  }
  if (!hero) hero = details.shift() || vectors.shift() || null;

  const heroSrc = hero ? toPublic(hero.file) : null;
  if (hero && hero.flag && hero.flag !== "ok") {
    lowq.push({ family: g.prefix, section: g.section, page: hero.page, file: hero.file, flag: hero.flag, use: "family hero" });
  }
  const detailOut = [];
  for (const d of details.slice(0, 4)) {
    const src = toPublic(d.file);
    if (!src) continue;
    detailOut.push({ src, flag: d.flag });
    if (d.flag && d.flag !== "ok") lowq.push({ family: g.prefix, section: g.section, page: d.page, file: d.file, flag: d.flag, use: "detail" });
  }

  // name: "<Category> · <PREFIX>" ; subtitle = a descriptive heading line
  const name = `${catName(g.prefix[2])} · ${g.prefix}`;
  const subtitle =
    H.find((h) => h.length > 6 && h.length < 76 && /[a-z]/.test(h) && !/^\d/.test(h) && h !== g.section) || "";

  families.push({
    slug: g.prefix.toLowerCase(),
    prefix: g.prefix,
    section: g.section,
    name,
    subtitle,
    summary: "", // <- EDIT ME: a sentence or two about this family
    headings: H,
    notes: [...notes],
    specs,
    image: heroSrc,
    imageFlag: hero ? hero.flag || null : null,
    details: detailOut,
    sourcePages: pages,
    sizes: g.skus.map((s) => ({
      sku: s.candelx_sku,
      L: s.L ?? null, W: s.W ?? null, H: s.H ?? null,
      sizeText: s.size_text ?? null,
      raw: s.raw_dimensions ?? null,
      lid: s.lid ?? null,
      note: s.note ?? null,
      needsReview: !!s.needs_review,
    })),
  });
}

families.sort((a, b) => a.section.localeCompare(b.section) || a.prefix.localeCompare(b.prefix));

// unique slugs (a few prefixes appear in two sections, e.g. CXCC / CXUTD / CXUTM)
const slugSeen = new Map();
for (const f of families) {
  let base = f.prefix.toLowerCase();
  const n = (slugSeen.get(base) || 0) + 1;
  slugSeen.set(base, n);
  f.slug = n === 1 ? base : `${base}-${n}`;
}

const sections = cat.sections.map((s) => s.name);

// ---- emit catalogue.ts
const banner = `// Candelx catalogue data.
// Generated ONCE from catalogue/data/*.json by scripts/gen-catalogue.mjs, then hand-editable.
// Edit this file directly — names, subtitles, the 'summary' field, specs, image paths, size rows.
// Re-running the generator OVERWRITES this file (only do that for a fresh full re-import).
// ${families.length} families · ${families.reduce((n, f) => n + f.sizes.length, 0)} article numbers · ${sections.length} sections.
`;
const ts = `${banner}
export type CatSize = {
  sku: string;
  L: string | null; W: string | null; H: string | null;
  sizeText: string | null; raw: string | null;
  lid: string | null; note: string | null; needsReview: boolean;
};
export type CatFamily = {
  slug: string; prefix: string; section: string;
  name: string; subtitle: string; summary: string;
  headings: string[]; notes: string[];
  specs: Record<string, string>;
  image: string | null; imageFlag: string | null;
  details: { src: string; flag: string }[];
  sourcePages: number[];
  sizes: CatSize[];
};

export const sections: string[] = ${JSON.stringify(sections, null, 2)};

export const families: CatFamily[] = ${JSON.stringify(families, null, 2)};
`;
fs.writeFileSync(path.join(ROOT, "site/src/data/catalogue.ts"), ts);

// ---- emit low-quality image report
const byFlag = { low_res: [], heavily_compressed: [], other: [] };
for (const r of lowq) (byFlag[r.flag] || byFlag.other).push(r);
const seen = new Set();
const uniq = lowq.filter((r) => (seen.has(r.file) ? false : seen.add(r.file)));
const md = `# Low-quality catalogue images — replace before launch

The prototype uses photos extracted from \`Steritrays-2022_compressed.pdf\`. The ones below are flagged
by the extractor as too soft or too compressed for web/print. Shoot or supply clean replacements; drop them
in \`site/public/catalogue/img/<same path>\` (same filename) and they'll pick up automatically, or point the
family's \`image\` field in \`site/src/data/catalogue.ts\` at the new file.

- **low_res** = short side 120–199 px (a detail/swatch crop, too small for a main photo)
- **heavily_compressed** = visible JPEG artefacts

Total flagged in use: **${uniq.length}** files.

| Family | Section | Catalogue page | Flag | Used as | File |
|---|---|---|---|---|---|
${uniq.map((r) => `| ${r.family} | ${r.section} | p${r.page} | ${r.flag} | ${r.use} | \`${r.file}\` |`).join("\n")}

## Families with NO photo yet (need one)
${families.filter((f) => !f.image).map((f) => `- **${f.prefix}** — ${f.name} (${f.section}, p${f.sourcePages.join("/")}) — source photo missing from \`images/\``).join("\n") || "- (none)"}

## Extractor's own "replace with client original" list
${(man.meta.flagged_for_replacement || []).map((f) => `- \`${f}\``).join("\n")}
`;
fs.writeFileSync(path.join(ROOT, "LOW-QUALITY-IMAGES.md"), md);

console.log(`families: ${families.length}`);
console.log(`article numbers: ${families.reduce((n, f) => n + f.sizes.length, 0)}`);
console.log(`images copied: ${copied.size}`);
console.log(`low-quality images in use: ${uniq.length}`);
