#!/usr/bin/env node
// Pre-launch gate: fails while competitor placeholder photography is still in the site.
// Run:  node scripts/check-placeholders.mjs
// These images came from a Chaplet International listing and are REFERENCE ONLY.
// They must be replaced with CandelX studio photography before candelx.com goes live.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = '/Users/Hassan/Documents/Website';
const EXTRAS = path.join(ROOT, 'catalogue/extras/extras.json');
const IMGDIR = path.join(ROOT, 'site/public/catalogue/img/extras');

if (!fs.existsSync(EXTRAS)) { console.log('✓ no extras declared — nothing to check'); process.exit(0); }
const extras = JSON.parse(fs.readFileSync(EXTRAS, 'utf8'));
const onDisk = fs.existsSync(IMGDIR) ? fs.readdirSync(IMGDIR).filter(f => /\.(jpg|png|webp)$/i.test(f)) : [];

const flagged = extras.filter(f => f.imageFlag === 'placeholder');
const skus = extras.flatMap(f => (f.groups?.length ? f.groups.map(g => g.code) : f.sizes.map(s => s.sku)));

console.log(`placeholder families : ${flagged.length}`);
console.log(`article numbers      : ${skus.length}`);
console.log(`placeholder images   : ${onDisk.length}  (${IMGDIR.replace(ROOT + '/', '')})`);

if (onDisk.length) {
  console.log('\nStill using competitor photography. Replace before launch:');
  for (const f of flagged) console.log(`   ${f.prefix.padEnd(7)} ${f.name}`);
  console.log('\nTo clear: put CandelX shots in catalogue/extras-img/ using the same');
  console.log('filenames (<sku>.jpg), set "imageFlag" to "own" in extras.json, re-run');
  console.log('node scripts/build-catalogue.mjs, then run this check again.');
  process.exit(1);
}
console.log('\n✓ no placeholder images in the site');
