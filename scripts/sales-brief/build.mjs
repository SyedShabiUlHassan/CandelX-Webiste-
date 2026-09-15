/* Builds the CandelX product knowledge brief as a PDF.
 *
 *   node scripts/sales-brief/build.mjs
 *
 * Product facts, sizes, article numbers and photos come from
 * site/src/data/catalogue.ts — the same file the website is built from — so the
 * brief cannot drift from the site. Re-run it whenever the catalogue changes.
 *
 * The written knowledge lives in ./content.mjs.
 *
 * PDF is produced by headless Chrome (no Homebrew, no wkhtmltopdf on this Mac).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");
const PUBLIC = path.join(ROOT, "site/public");
const OUT_HTML = path.join(HERE, ".brief.html");
const OUT_PDF = path.join(ROOT, "CandelX-Product-Knowledge-Brief.pdf");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/* catalogue.ts is TypeScript; strip the annotations so node can import it. */
function loadCatalogue() {
  let s = fs.readFileSync(path.join(ROOT, "site/src/data/catalogue.ts"), "utf8");
  s = s.replace(/export type [\s\S]*?\n};\n/g, "").replace(/export type .*?;\n/g, "");
  s = s.replace(/export const (\w+)(: [^=]+)? =/g, "export const $1 =");
  const tmp = path.join(HERE, ".catalogue.mjs");
  fs.writeFileSync(tmp, s);
  return import(tmp + "?v=" + Date.now()).finally(() => fs.unlinkSync(tmp));
}

const { families, sections } = await loadCatalogue();
const C = await import("./content.mjs");

/* ── helpers ────────────────────────────────────────────────────────────── */
const esc = (x) => String(x ?? "").replace(/&(?!#?\w+;)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
/* Photos are referenced as file:// URLs — Chrome reads them straight off disk,
   which keeps the HTML small. Missing files just render as an empty frame.

   They are downscaled first. The catalogue photos are full web resolution and
   Chrome embeds them at that size, which produced a 30 MB PDF nobody can
   email; at 420px wide they are still sharper than the 33mm frame they print
   into, and the file comes in around a tenth of that. */
const THUMBS = path.join(HERE, ".thumbs");
const wanted = [];
const thumbOf = (src) => {
  if (!src) return null;
  const abs = path.join(PUBLIC, src);
  if (!fs.existsSync(abs)) return null;
  const dst = path.join(THUMBS, src.replace(/[\\/]/g, "_").replace(/\.\w+$/, ".jpg"));
  wanted.push([abs, dst]);
  return dst;
};
function renderThumbs() {
  if (!wanted.length) return;
  fs.mkdirSync(THUMBS, { recursive: true });
  execFileSync("python3", ["-c", `
import sys, json
from PIL import Image
for src, dst in json.load(sys.stdin):
    im = Image.open(src)
    if im.mode in ("RGBA", "LA", "P"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        im = im.convert("RGBA")
        bg.paste(im, mask=im.split()[3]); im = bg
    else:
        im = im.convert("RGB")
    if im.width > 420:
        im = im.resize((420, max(1, round(im.height * 420 / im.width))), Image.LANCZOS)
    im.save(dst, "JPEG", quality=82, optimize=True)
`], { input: JSON.stringify(wanted), stdio: ["pipe", "ignore", "pipe"] });
}
const img = (src) => { const t = thumbOf(src); return t ? "file://" + t : null; };

const dimsOf = (s) => {
  if (s.L && s.W && s.H) return `${s.L} × ${s.W} × ${s.H}`;
  if (s.L && s.W) return `${s.L} × ${s.W}`;
  return s.sizeText || null;
};

function sizeLine(f) {
  const withDims = f.sizes.filter((s) => s.L);
  if (!withDims.length) return "Sizes made to order";
  const L = withDims.map((s) => +s.L);
  const n = new Set(f.sizes.map(dimsOf).filter(Boolean)).size;
  return `${n} size${n === 1 ? "" : "s"}, ${Math.min(...L)}–${Math.max(...L)} mm long`;
}

const TAG = {
  fact: ["FROM YOUR CATALOGUE", "t-fact"],
  bg: ["INDUSTRY BACKGROUND", "t-bg"],
  check: ["CONFIRM BEFORE YOU SAY IT", "t-check"],
};

/* ── document ───────────────────────────────────────────────────────────── */
const today = new Date().toISOString().slice(0, 10);
const totalSkus = families.reduce((n, f) => n + f.sizes.length, 0);
const P = [];
const push = (...x) => P.push(...x);

push(`<!doctype html><meta charset="utf-8"><title>CandelX Product Knowledge Brief</title><style>
@page { size: A4; margin: 17mm 15mm 16mm; }
* { box-sizing: border-box; }
body { margin:0; font: 10.5pt/1.55 "Helvetica Neue", Helvetica, Arial, sans-serif; color:#16242c; }
h1,h2,h3,h4 { margin:0; font-weight:700; color:#062b3d; letter-spacing:-.01em; }
p { margin:0 0 8px; }
b { color:#062b3d; }
a { color:#00658a; }
.page-break { break-before: page; }
.avoid { break-inside: avoid; }

/* cover */
.cover { height: 250mm; display:flex; flex-direction:column; justify-content:center; }
.cover h1 { font-size:34pt; line-height:1.08; }
.cover .sub { font-size:13pt; color:#4a5b66; margin-top:14px; }
.cover .meta { margin-top:40px; font-size:9.5pt; color:#6b7b85; border-top:2px solid #007ea7; padding-top:14px; }
.cover .rule { width:64px; height:5px; background:#007ea7; margin-bottom:26px; }

/* structure */
.part { break-before: page; border-top:3px solid #007ea7; padding-top:12px; margin-bottom:22px; }
.part .kicker { font-size:8.5pt; letter-spacing:.16em; text-transform:uppercase; color:#007ea7; font-weight:700; }
.part h2 { font-size:21pt; margin-top:6px; }
.part .lede { font-size:11pt; color:#4a5b66; margin-top:8px; max-width:150mm; }

h3.sec { font-size:14pt; margin:22px 0 4px; break-after:avoid; }
h3.sec + .lede { color:#55666f; font-size:10pt; margin-bottom:10px; font-style:italic; }

/* tagged knowledge blocks */
.blk { break-inside:avoid; margin:0 0 11px; padding:9px 12px 10px; border-radius:3px; border-left:3px solid; }
.blk h4 { font-size:10.5pt; margin-bottom:3px; }
.blk p { margin:0; }
.tag { display:inline-block; font-size:7pt; letter-spacing:.12em; font-weight:700; padding:1px 5px; border-radius:2px; vertical-align:2px; margin-right:7px; }
.t-fact { background:#f2f8f4; border-color:#2e7d52; }
.t-fact .tag { background:#2e7d52; color:#fff; }
.t-bg { background:#f3f6fa; border-color:#4a72a8; }
.t-bg .tag { background:#4a72a8; color:#fff; }
.t-check { background:#fdf6ec; border-color:#c07c1b; }
.t-check .tag { background:#c07c1b; color:#fff; }

/* tables */
table { width:100%; border-collapse:collapse; font-size:9pt; margin:10px 0 14px; }
th { text-align:left; background:#f2f5f7; color:#062b3d; font-size:7.5pt; letter-spacing:.09em; text-transform:uppercase; padding:6px 8px; border-bottom:1.5px solid #cfd8dd; }
td { padding:6px 8px; border-bottom:1px solid #e6ebee; vertical-align:top; }
tr { break-inside:avoid; }
.mono { font-family:"SF Mono", Menlo, monospace; font-size:8.5pt; white-space:nowrap; }

/* product cards */
.prod { display:flex; gap:11px; break-inside:avoid; border:1px solid #e0e6ea; border-radius:4px; padding:10px; margin-bottom:9px; }
.prod .ph { flex:0 0 33mm; height:26mm; display:flex; align-items:center; justify-content:center; background:#fff; border:1px solid #edf1f3; border-radius:3px; }
.prod .ph img { max-width:100%; max-height:100%; }
.prod .body { flex:1 1 auto; min-width:0; }
.prod h4 { font-size:10.5pt; }
.prod .codes { font-family:"SF Mono", Menlo, monospace; font-size:8pt; color:#6b7b85; margin:2px 0 4px; }
.prod p { font-size:9pt; margin:0 0 4px; color:#33454f; }
.prod .specs { font-size:8pt; color:#55666f; }
.prod .specs span { display:inline-block; margin-right:12px; }

/* Q&A */
.qa { break-inside:avoid; margin-bottom:10px; padding-bottom:9px; border-bottom:1px solid #e9eef1; }
.qa .q { font-weight:700; color:#062b3d; font-size:10pt; margin-bottom:3px; }
.qa .a { font-size:9.5pt; color:#33454f; }
.who { background:#062b3d; color:#fff; padding:8px 12px; border-radius:3px; font-size:12pt; font-weight:700; margin:20px 0 4px; break-after:avoid; }
.who + .intro { font-size:9.5pt; color:#55666f; font-style:italic; margin-bottom:12px; }

/* confirm list */
.cf { break-inside:avoid; border-left:3px solid #c07c1b; background:#fdf6ec; padding:9px 12px; margin-bottom:9px; border-radius:3px; }
.cf .q { font-weight:700; font-size:10.5pt; color:#062b3d; }
.cf .why { font-size:9pt; color:#55666f; margin:3px 0; }
.cf .note { font-size:9pt; color:#8a5a08; }
.cf.hi { border-left-width:6px; }
.never { break-inside:avoid; border-left:3px solid #b3261e; background:#fdf0ef; padding:9px 12px; margin-bottom:9px; border-radius:3px; }
.never .c { font-weight:700; color:#8c1d18; font-size:10.5pt; }
.never .w { font-size:9pt; color:#55666f; margin-top:3px; }

ul.clean { margin:0 0 12px; padding-left:18px; font-size:9.5pt; }
ul.clean li { margin-bottom:5px; }
.note-box { background:#f2f5f7; border-radius:4px; padding:11px 14px; font-size:9.5pt; margin:12px 0; break-inside:avoid; }
.idx { column-count:3; column-gap:9mm; font-size:8pt; }
.idx div { break-inside:avoid; margin-bottom:2px; }
.idx .h { font-weight:700; color:#062b3d; margin:7px 0 2px; font-family:inherit; font-size:8.5pt; }
</style>`);

/* ── cover ──────────────────────────────────────────────────────────────── */
push(`<div class="cover">
<div class="rule"></div>
<h1>Product Knowledge Brief</h1>
<div class="sub">Everything you need to hold a technical conversation about the CandelX range — and a clear list of what you must not claim until someone confirms it.</div>
<div class="meta">
CandelX Surgicals · prepared ${today}<br>
${families.length} products · ${totalSkus} article numbers · ${sections.length} sections<br><br>
Generated from <span class="mono">site/src/data/catalogue.ts</span>, the same data the website is built from.<br>
Regenerate after any catalogue change: <span class="mono">node scripts/sales-brief/build.mjs</span>
</div></div>`);

/* ── how to use ─────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Read this first</div><h2>How to use this, and how to tell what is safe to say</h2>
<div class="lede">The most dangerous thing a new salesperson can do is repeat a confident-sounding fact that nobody checked. So every statement in this document is tagged.</div></div>`);
push(`<div class="blk t-fact"><h4><span class="tag">FROM YOUR CATALOGUE</span>Traceable to your own data</h4><p>Pulled from the catalogue that builds your website — materials, sizes, article numbers, construction. Say it freely.</p></div>`);
push(`<div class="blk t-bg"><h4><span class="tag">INDUSTRY BACKGROUND</span>True of the product category</h4><p>How steam sterilization works, what 316 does, why cassettes exist. Safe to explain as background. Do not turn it into a promise about your specific goods.</p></div>`);
push(`<div class="blk t-check"><h4><span class="tag">CONFIRM BEFORE YOU SAY IT</span>Not established</h4><p>Nobody has confirmed this. Do not say it to a customer until someone at the factory does.</p></div>`);
push(`<div class="note-box"><b>The honest position on this document.</b> Roughly half of what a customer will ask you — price, MOQ, lead time, load ratings, certificates, warranty, packaging — is not recorded anywhere in your business that I could find. I have not invented any of it. Part 6 is a worksheet of those gaps. Filling it in will do more for your first ten sales calls than memorising the rest of this document.</div>`);

/* ── Part 1 ─────────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Part 1</div><h2>The range in ten minutes</h2>
<div class="lede">Nine sections, ${families.length} products. Nobody memorises ${totalSkus} article numbers. What you need is to hear a customer's problem and know which section to reach for.</div></div>`);

push(`<h3 class="sec">The nine sections</h3><table><thead><tr><th>Section</th><th>Products</th><th>Article nos.</th><th>What it is for</th></tr></thead><tbody>`);
const SECTION_LINE = {
  "Wire Mesh Trays": "Highest drainage and drying, gentlest on fine tips. Single or double welded frame.",
  "Perforated Trays": "The workhorse. Square or round hole pattern, round or chamfer corners, 20 sizes.",
  "Universal Trays": "Transport and storage as much as sterilization. Includes the aluminium option.",
  "Cassette Trays": "Instrument sets held in a fixed arrangement, cleaned and sterilized as one unit.",
  "PRF & GRF System": "Chairside blood-concentrate protocol — boxes, tube racks, dishes, surgical set.",
  "Implantology / Bur Holders": "Burs held upright by shank in colour-coded wells so they can be counted.",
  "IntraOral / Orthodontic Steel Mirrors": "Photographic mirrors — 316 steel with no coating to lift, or two-sided glass.",
  "Hollow Wares": "Bowls, dishes, drums, bedpans. Solid, drawn, polished.",
  "Trays Accessories / Silicon Holding System": "Silicone bars, strips and colour codes that stop instruments moving.",
};
for (const s of sections) {
  const fs_ = families.filter((f) => f.section === s);
  push(`<tr><td><b>${esc(s)}</b></td><td>${fs_.length}</td><td class="mono">${fs_.reduce((n, f) => n + f.sizes.length, 0)}</td><td>${esc(SECTION_LINE[s] || "")}</td></tr>`);
}
push(`</tbody></table>`);

push(`<h3 class="sec">Customer says… you reach for…</h3><table><thead><tr><th style="width:44%">They say</th><th>You reach for</th></tr></thead><tbody>`);
for (const [a, b] of [
  ["“My instruments come out wet.”", "Perforated or wire mesh, over a solid box. Ask how they load the rack."],
  ["“Delicate microsurgical / ophthalmic instruments.”", "Round-pattern perforated (CXPR / CXPU) or wire mesh. Round holes and round wire do not catch tips."],
  ["“I want the whole set to stay together.”", "Cassette trays — 20 products, capacities 5 / 7 / 10 / 20."],
  ["“Something for my hygienist's set.”", "Light pattern cassettes (CXCL), 30 mm, plus silicone colour codes."],
  ["“We do implant surgery.”", "Implant &amp; surgical box, bur holders, implant cassette."],
  ["“We are starting PRF.”", "PRF &amp; GRF boxes, tube racks and dishes, the seven-piece surgical set."],
  ["“I need to photograph cases.”", "Steel mirrors (316) or the two-sided glass range."],
  ["“Just to carry things between rooms.”", "Universal / transportation baskets. Steel if it gets reprocessed."],
  ["“Bowls, dishes, a dressing drum.”", "Hollow ware — 19 products."],
  ["“Nothing on the market fits my set.”", "Made to order. 49 of 79 products are already sizes-on-request. This is where you win."],
]) push(`<tr><td>${a}</td><td>${b}</td></tr>`);
push(`</tbody></table>`);

push(`<h3 class="sec">How the article numbers work</h3>
<p>Every code is <span class="mono">CX</span> + two or three letters for the family + a number. The letters are the fastest way to place a code you have never seen. The main ones:</p><table><thead><tr><th>Prefix</th><th>Family</th></tr></thead><tbody>`);
const prefixMap = {};
for (const f of families) for (const p of (f.prefixes?.length ? f.prefixes : [f.prefix])) (prefixMap[p] ||= new Set()).add(f.section);
const GROUPS = [["CXM", "Wire mesh — CXMT tray, CXML lid, CXMB basket"], ["CXP", "Perforated — CXPR/CXPU round pattern, CXPS/CXPT square pattern, CXPL lid"], ["CXU", "Universal &amp; transportation — CXUT steel, CXUTA aluminium, CXUB/CXUBS baskets"], ["CXC", "Cassettes — the largest group, one or two letters per lock/hinge type"], ["CXG", "PRF &amp; GRF — CXGK boxes and instruments, CXGH racks"], ["CXB", "Implantology and bur holders"], ["CXV", "Steel and glass mirrors (CXVM)"], ["CXW", "Hollow ware — CXWB bowl, CXWK kidney dish, CXWD drum, CXWBP bedpan…"], ["CXA", "Accessories — CXAH silicone holding system, CXAR rack, CXAL test-tube rack"]];
for (const [p, d] of GROUPS) {
  const n = Object.keys(prefixMap).filter((k) => k.startsWith(p)).length;
  push(`<tr><td class="mono"><b>${p}…</b></td><td>${d} <span style="color:#8b98a0">(${n} prefixes)</span></td></tr>`);
}
push(`</tbody></table>`);

const withDims = families.filter((f) => f.sizes.some((s) => s.L)).length;
push(`<div class="note-box"><b>A number to keep in your head.</b> Only <b>${withDims} of ${families.length}</b> products publish measured dimensions. The other ${families.length - withDims} are sizes-on-request. That is not a gap in the catalogue — it is the business model. When someone asks for a size you do not list, the answer is “we make to order, send me the drawing or the instrument set”, not “we do not have it”.</div>`);

/* ── Part 2 ─────────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Part 2</div><h2>The technical core</h2>
<div class="lede">Nearly every hard question resolves to one of these. Read this part twice; the rest you can look up.</div></div>`);
for (const k of C.KNOWLEDGE) {
  push(`<h3 class="sec">${esc(k.title)}</h3><div class="lede">${esc(k.lede)}</div>`);
  for (const b of k.blocks) {
    const [label, cls] = TAG[b.t];
    push(`<div class="blk ${cls}"><h4><span class="tag">${label}</span>${esc(b.h)}</h4><p>${b.p}</p></div>`);
  }
}

/* ── Part 3 ─────────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Part 3</div><h2>Every product, section by section</h2>
<div class="lede">All ${families.length} products with photograph, what it is, the specs you publish and the size range. Use it to look things up, not to memorise.</div></div>`);
for (const s of sections) {
  const fs_ = families.filter((f) => f.section === s);
  if (!fs_.length) continue;
  push(`<h3 class="sec">${esc(s)} <span style="font-weight:400;color:#8b98a0;font-size:10pt">· ${fs_.length} products · ${fs_.reduce((n, f) => n + f.sizes.length, 0)} article numbers</span></h3>`);
  push(`<div class="lede">${esc(SECTION_LINE[s] || "")}</div>`);
  for (const f of fs_) {
    const src = img(f.image);
    const specs = Object.entries(f.specs).slice(0, 5).map(([k2, v]) => `<span><b>${esc(k2)}:</b> ${esc(String(v).replace(/&times;/g, "×"))}</span>`).join("");
    push(`<div class="prod">
      <div class="ph">${src ? `<img src="${src}">` : ""}</div>
      <div class="body">
        <h4>${esc(f.name)}</h4>
        <div class="codes">${esc(f.prefix)} · ${f.sizes.length} article no${f.sizes.length === 1 ? "" : "s"} · ${esc(sizeLine(f))}</div>
        <p>${esc(f.summary || f.subtitle || "")}</p>
        <div class="specs">${specs}</div>
      </div></div>`);
  }
}

/* ── Part 4 ─────────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Part 4</div><h2>The questions you will be asked</h2>
<div class="lede">Grouped by who asks them, because the same product gets three completely different conversations. Where an answer says CONFIRM, it is in the Part 6 worksheet.</div></div>`);
for (const g of C.QUESTIONS) {
  push(`<div class="who">${esc(g.who)}</div><div class="intro">${esc(g.intro)}</div>`);
  for (const it of g.items) push(`<div class="qa"><div class="q">${esc(it.q)}</div><div class="a">${esc(it.a)}</div></div>`);
}
push(`<h3 class="sec">And what you should ask them</h3>
<p>A new seller answers questions. A good one asks them. These eight will tell you more in two minutes than a price list ever will:</p><ul class="clean">`);
for (const a of C.ASK_THEM) push(`<li>${a}</li>`);
push(`</ul>`);

/* ── Part 5 ─────────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Part 5</div><h2>Objections, and things you must never say</h2>
<div class="lede">The second list matters more than the first.</div></div>`);
push(`<h3 class="sec">Handling the common ones</h3>`);
for (const o of C.OBJECTIONS) push(`<div class="qa"><div class="q">${esc(o.o)}</div><div class="a">${esc(o.a)}</div></div>`);
push(`<h3 class="sec">Never say these</h3><p>Each one of these is either untrue, unevidenced, or means something different from what you think it means.</p>`);
for (const n of C.NEVER_SAY) push(`<div class="never"><div class="c">✕ &nbsp;${esc(n.claim)}</div><div class="w">${esc(n.why)}</div></div>`);

/* ── Part 6 ─────────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Part 6</div><h2>What nobody has answered yet</h2>
<div class="lede">This is the most valuable page in the document. Take it to whoever runs the factory and come back with answers written in the margin. Until then, every one of these is a question you cannot answer on a call.</div></div>`);
const order = { highest: 0, high: 1, medium: 2 };
for (const c of [...C.TO_CONFIRM].sort((a, b) => order[a.risk] - order[b.risk])) {
  push(`<div class="cf ${c.risk === "highest" ? "hi" : ""}"><div class="q">${c.risk === "highest" ? "★ " : ""}${esc(c.q)}</div><div class="why">${esc(c.why)}</div><div class="note"><b>→</b> ${esc(c.note)}</div></div>`);
}

/* ── Appendix ───────────────────────────────────────────────────────────── */
push(`<div class="part"><div class="kicker">Appendix</div><h2>Article number index</h2>
<div class="lede">All ${totalSkus} article numbers, by product. For looking up a code a customer quotes at you.</div></div><div class="idx">`);
for (const s of sections) {
  for (const f of families.filter((x) => x.section === s)) {
    push(`<div class="h">${esc(f.name)}</div>`);
    for (const sz of f.sizes) {
      const d = dimsOf(sz);
      push(`<div><span class="mono">${esc(sz.sku)}</span>${d ? ` &nbsp;${esc(d)}` : ""}${sz.note ? ` &nbsp;<span style="color:#8b98a0">${esc(sz.note)}</span>` : ""}</div>`);
    }
  }
}
push(`</div>`);

renderThumbs();
fs.writeFileSync(OUT_HTML, P.join("\n"));
execFileSync(CHROME, [
  "--headless", "--disable-gpu", "--no-sandbox", "--no-pdf-header-footer",
  "--allow-file-access-from-files",
  `--print-to-pdf=${OUT_PDF}`, "file://" + OUT_HTML,
], { stdio: ["ignore", "ignore", "pipe"] });
if (!process.env.KEEP_HTML) fs.rmSync(THUMBS, { recursive: true, force: true });
/* Kept: it is the fastest way to check a layout change without re-reading the
   PDF. Open scripts/sales-brief/.brief.html in a browser. */

const kb = Math.round(fs.statSync(OUT_PDF).size / 1024);
console.log(`${path.relative(ROOT, OUT_PDF)} — ${kb} KB · ${families.length} products · ${totalSkus} article numbers`);
