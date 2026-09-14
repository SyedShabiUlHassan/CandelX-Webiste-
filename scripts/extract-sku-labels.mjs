/* Some products have no dimensions at all — mirrors, silicone strips, bur holders.
   What distinguishes their article numbers is printed in a "Position" (or similar)
   column in the catalogue, which the main generator drops. Pull those out so a
   size list never renders as a row of blank dashes. */
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const PAGES = path.join(ROOT, 'catalogue/page-html');
const OUT = path.join(ROOT, 'catalogue/sku-labels.json');

const strip = (s) => s.replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/&[a-z]+;/g, '')
  .replace(/\s+/g, ' ').trim();

const LABEL_COL = /^(position|type|pattern|description|for|variant|configuration)$/i;
const SKU = /^CX[A-Z]+-\d+[A-Z]?$/;

const labels = {};
let pages = 0;
for (const file of fs.readdirSync(PAGES).filter((f) => f.endsWith('.html')).sort()) {
  const html = fs.readFileSync(path.join(PAGES, file), 'utf8');
  let used = false;
  for (const table of html.match(/<table[\s\S]*?<\/table>/g) || []) {
    const rows = (table.match(/<tr[\s\S]*?<\/tr>/g) || [])
      .map((r) => (r.match(/<t[dh][\s\S]*?<\/t[dh]>/g) || []).map(strip));
    if (rows.length < 2) continue;
    const head = rows[0].map((h) => h.toLowerCase());
    const li = head.findIndex((h) => LABEL_COL.test(h));
    const si = head.findIndex((h) => /art\.?\s*no|article/i.test(h));
    if (li < 0 || si < 0) continue;
    for (const r of rows.slice(1)) {
      const sku = (r[si] || '').trim(), label = (r[li] || '').trim();
      /* a ref letter like "A" is not a description on its own */
      if (SKU.test(sku) && label && label.length > 1 && !/^\d+$/.test(label)) {
        labels[sku] = label; used = true;
      }
    }
  }
  if (used) pages++;
}
fs.writeFileSync(OUT, JSON.stringify(labels, null, 1));
console.log(`sku labels: ${Object.keys(labels).length} article numbers from ${pages} pages -> ${path.relative(ROOT, OUT)}`);
const sample = Object.entries(labels).slice(0, 6);
for (const [k, v] of sample) console.log(`   ${k}  ${v}`);
