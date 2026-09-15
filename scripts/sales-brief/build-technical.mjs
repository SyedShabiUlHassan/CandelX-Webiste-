/* Builds the CandelX technical knowledge book as a PDF.
 *
 *   node scripts/sales-brief/build-technical.mjs
 *
 * Deliberately carries NO article numbers and NO product photographs — Hassan
 * knows his range; what he asked for was the physics, the chemistry, the
 * standards and the numbers, laid out so he can re-read it in a month and
 * remember it. Diagrams are inline SVG, drawn here, not sourced.
 *
 * Content: ./technical.mjs. PDF via headless Chrome.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import { NUMBERS, PARTS, QUICKFIRE, ASK_BACK, SOURCES } from "./technical.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");
const OUT_HTML = path.join(HERE, ".technical.html");
const OUT_PDF = path.join(ROOT, "CandelX-Technical-Knowledge.pdf");
const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

/* **bold** → <b>, because the content file is easier to write and read in
   markdown than in tags. Nothing else is interpreted. */
const md = (s) => String(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<i>$1</i>");

/* ── diagrams ───────────────────────────────────────────────────────────── */
const INK = "#062b3d", TEAL = "#007ea7", MUT = "#7d8b94";
const D = {};

D.passive = () => `
<svg viewBox="0 0 640 210" class="dia">
  <text x="0" y="13" class="dt">The passive layer — why stainless does not rust</text>
  <rect x="30" y="96" width="330" height="72" fill="#c9d3d9"/>
  <rect x="30" y="86" width="330" height="10" fill="${TEAL}"/>
  <text x="195" y="136" class="dl" fill="#3c4c55" text-anchor="middle">bulk steel — iron, chromium, nickel</text>
  <text x="370" y="92" class="dl" fill="${TEAL}">chromium-oxide film</text>
  <text x="370" y="106" class="ds">a few atoms thick · invisible · self-repairing</text>
  <path d="M120 70 l0 12 m-5 -5 l5 5 5 -5" stroke="${MUT}" fill="none" stroke-width="1.4"/>
  <path d="M200 70 l0 12 m-5 -5 l5 5 5 -5" stroke="${MUT}" fill="none" stroke-width="1.4"/>
  <path d="M280 70 l0 12 m-5 -5 l5 5 5 -5" stroke="${MUT}" fill="none" stroke-width="1.4"/>
  <text x="195" y="62" class="ds" text-anchor="middle">oxygen from the air</text>
  <g>
    <path d="M60 86 l16 10 -16 10" fill="none" stroke="#b3261e" stroke-width="2"/>
    <text x="52" y="188" class="ds" fill="#b3261e">scratch → re-forms</text>
  </g>
  <rect x="418" y="140" width="200" height="46" rx="3" fill="#fdf0ef"/>
  <text x="430" y="158" class="dl" fill="#8c1d18">No oxygen = no film.</text>
  <text x="430" y="174" class="ds" fill="#8c1d18">Crevices, deposits, trapped saline.</text>
</svg>`;

D.temp = () => {
  const scale = (c) => 40 + (c / 250) * 540;
  const mark = (c, label, color, up) => `
    <line x1="${scale(c)}" y1="${up ? 62 : 86}" x2="${scale(c)}" y2="74" stroke="${color}" stroke-width="2"/>
    <text x="${scale(c)}" y="${up ? 54 : 102}" class="dl" fill="${color}" text-anchor="middle">${label}</text>`;
  return `
<svg viewBox="0 0 640 150" class="dia">
  <text x="0" y="13" class="dt">Where the autoclave sits, and how much headroom you have</text>
  <line x1="40" y1="74" x2="600" y2="74" stroke="#d5dde2" stroke-width="6" stroke-linecap="round"/>
  <line x1="${scale(121)}" y1="74" x2="${scale(134)}" y2="74" stroke="${TEAL}" stroke-width="6"/>
  <line x1="${scale(134)}" y1="74" x2="${scale(200)}" y2="74" stroke="#2e7d52" stroke-width="6"/>
  ${mark(121, "121 °C", TEAL, true)}
  ${mark(134, "134 °C", TEAL, false)}
  ${mark(200, "200 °C", "#2e7d52", true)}
  <text x="${scale(167)}" y="126" class="ds" fill="#2e7d52" text-anchor="middle">66 °C of headroom</text>
  <text x="40" y="140" class="ds">0 °C</text>
  <text x="600" y="140" class="ds" text-anchor="end">250 °C</text>
  <text x="${scale(200)}" y="38" class="ds" fill="#2e7d52" text-anchor="middle">silicone continuous limit</text>
  <text x="${scale(127)}" y="118" class="ds" fill="${TEAL}" text-anchor="middle">the two steam cycles</text>
</svg>`;
};

D.loop = () => {
  const steps = ["Point of use", "Clean / wash", "Dry", "Inspect &amp; set up", "Pack or wrap", "Sterilize", "Store"];
  /* cy sits well below the title: the 12 o'clock label is drawn at cy - r - 22,
     and at the first attempt that landed on top of the heading. */
  const cx = 320, cy = 150, r = 86;
  let out = `<svg viewBox="0 0 640 300" class="dia"><text x="0" y="13" class="dt">The reprocessing cycle — your products live in the middle of it</text>`;
  out += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#dde4e8" stroke-width="1.5" stroke-dasharray="3 4"/>`;
  steps.forEach((s, i) => {
    const a = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
    const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r;
    const hot = i === 3 || i === 4;
    out += `<circle cx="${x}" cy="${y}" r="7" fill="${hot ? TEAL : "#c4ced4"}"/>`;
    const tx = cx + Math.cos(a) * (r + 22), ty = cy + Math.sin(a) * (r + 22) + 4;
    const anchor = Math.abs(Math.cos(a)) < 0.3 ? "middle" : Math.cos(a) > 0 ? "start" : "end";
    out += `<text x="${tx}" y="${ty}" class="dl" fill="${hot ? INK : "#5b6b74"}" text-anchor="${anchor}">${s}</text>`;
  });
  out += `<text x="${cx}" y="${cy - 4}" class="dl" fill="${TEAL}" text-anchor="middle">trays · baskets</text>`;
  out += `<text x="${cx}" y="${cy + 12}" class="dl" fill="${TEAL}" text-anchor="middle">cassettes</text>`;
  out += `</svg>`;
  return out;
};

D.a0 = () => {
  const rows = [["80 °C", "50 min", 3000], ["90 °C", "5 min", 3000], ["93 °C", "2.5 min", 3000], ["90 °C", "1 min", 600]];
  let out = `<svg viewBox="0 0 640 176" class="dia"><text x="0" y="13" class="dt">A₀ — the same disinfection, traded between time and temperature</text>`;
  rows.forEach((r, i) => {
    const y = 40 + i * 30;
    const is600 = r[2] === 600;
    out += `<rect x="0" y="${y - 14}" width="640" height="24" rx="3" fill="${is600 ? "#eef6fa" : "#f4f7f9"}"/>`;
    out += `<text x="12" y="${y + 2}" class="dl" fill="${INK}">${r[0]}</text>`;
    out += `<text x="90" y="${y + 2}" class="dl" fill="#5b6b74">for ${r[1]}</text>`;
    out += `<text x="210" y="${y + 2}" class="ds">→</text>`;
    out += `<text x="240" y="${y + 2}" class="dl" fill="${is600 ? TEAL : "#4a72a8"}">A₀ ${r[2]}</text>`;
    out += `<text x="320" y="${y + 2}" class="ds">${is600 ? "ISO 15883-2 minimum for surgical instruments" : "the German requirement"}</text>`;
  });
  out += `<text x="0" y="168" class="ds">Ten times the time = ten times the A₀. Every 10 °C roughly multiplies it by ten.</text></svg>`;
  return out;
};

D.rust = () => `
<svg viewBox="0 0 640 230" class="dia">
  <text x="0" y="13" class="dt">Diagnose before you apologise</text>
  <rect x="210" y="26" width="220" height="30" rx="4" fill="${INK}"/>
  <text x="320" y="46" class="dl" fill="#fff" text-anchor="middle">Wipe it with a soft cloth</text>
  <path d="M260 56 L150 80 M380 56 L490 80" stroke="#c4ced4" stroke-width="1.5" fill="none"/>
  <rect x="20" y="80" width="270" height="54" rx="4" fill="#f2f8f4" stroke="#2e7d52"/>
  <text x="34" y="100" class="dl" fill="#1d6640">It wipes off →  deposited rust</text>
  <text x="34" y="116" class="ds" fill="#3c5c4a">Someone else's iron. Not your tray.</text>
  <text x="34" y="128" class="ds" fill="#3c5c4a">Carbon-steel instruments · water · worn rack</text>
  <rect x="350" y="80" width="270" height="54" rx="4" fill="#fdf0ef" stroke="#b3261e"/>
  <text x="364" y="100" class="dl" fill="#8c1d18">It stays, metal is pitted →  chloride attack</text>
  <text x="364" y="116" class="ds" fill="#7a3a35">Saline dried on · no rinse · tap-water rinse</text>
  <text x="364" y="128" class="ds" fill="#7a3a35">Sterilized while wet and salty</text>
  <rect x="20" y="152" width="270" height="44" rx="4" fill="#f4f7f9"/>
  <text x="34" y="170" class="dl" fill="#3c4c55">Whole surface brown or blue</text>
  <text x="34" y="186" class="ds">Water deposits or steam silicate. Cosmetic.</text>
  <rect x="350" y="152" width="270" height="44" rx="4" fill="#fdf6ec" stroke="#c07c1b"/>
  <text x="364" y="170" class="dl" fill="#8a5a08">A line along a weld</text>
  <text x="364" y="186" class="ds" fill="#8a5a08">Escalate to the factory. Photos first.</text>
</svg>`;

D.din = () => {
  /* Proportional bars on their own rows, not boxes side by side: four boxes to
     scale come to 1140px of a 640px canvas, and the 1/4 label will not fit
     inside a 54px box at any readable size. */
  const rows = [["1/1", 480], ["3/4", 360], ["1/2", 240], ["1/4", 120]];
  const px = (mm) => (mm / 480) * 380;
  let out = `<svg viewBox="0 0 640 196" class="dia"><text x="0" y="13" class="dt">DIN basket modules — every one 250 mm deep</text>`;
  rows.forEach(([label, w], i) => {
    const y = 34 + i * 32;
    out += `<text x="0" y="${y + 17}" class="dn" fill="${TEAL}">${label}</text>`;
    out += `<rect x="52" y="${y}" width="${px(w)}" height="24" rx="3" fill="#eef6fa" stroke="${TEAL}" stroke-width="1.3"/>`;
    out += `<text x="${52 + px(w) + 12}" y="${y + 17}" class="dl" fill="#3c4c55">${w} × 250 mm</text>`;
  });
  out += `<text x="0" y="176" class="ds">Heights vary — 50 · 60 · 80 · 100 mm are the common ones.</text>`;
  out += `<text x="0" y="190" class="ds">If a buyer says “1/1”, say “480 by 250” back. That one exchange tells them you know the trade.</text>`;
  out += `</svg>`;
  return out;
};

D.reg = () => `
<svg viewBox="0 0 640 200" class="dia">
  <text x="0" y="13" class="dt">Who checks what</text>
  <rect x="0" y="30" width="200" height="64" rx="4" fill="#f4f7f9" stroke="#cfd8dd"/>
  <text x="14" y="52" class="dl" fill="${INK}">ISO 13485</text>
  <text x="14" y="70" class="ds">The FACTORY is controlled.</text>
  <text x="14" y="84" class="ds">Not a product approval.</text>
  <rect x="220" y="30" width="200" height="64" rx="4" fill="#eef6fa" stroke="${TEAL}"/>
  <text x="234" y="52" class="dl" fill="${TEAL}">CE / MDR 2017/745</text>
  <text x="234" y="70" class="ds">The PRODUCT may be sold</text>
  <text x="234" y="84" class="ds">in the EU.</text>
  <rect x="440" y="30" width="200" height="64" rx="4" fill="#fdf6ec" stroke="#c07c1b"/>
  <text x="454" y="52" class="dl" fill="#8a5a08">Notified Body</text>
  <text x="454" y="70" class="ds" fill="#8a5a08">Needed above Class I —</text>
  <text x="454" y="84" class="ds" fill="#8a5a08">and for Class Ir reprocessing.</text>
  <text x="0" y="128" class="dl" fill="${INK}">Class I  →  self-declared</text>
  <text x="0" y="146" class="ds">Most non-sterile, non-measuring instruments and accessories.</text>
  <text x="330" y="128" class="dl" fill="#8a5a08">Class Ir  →  Notified Body, reprocessing only</text>
  <text x="330" y="146" class="ds">Cleaning, disinfection, sterilization, maintenance, the IFU.</text>
  <text x="0" y="180" class="ds" fill="#8a5a08">Whether a tray is “Ir” is a question for a regulatory consultant. Know the term; do not improvise the answer.</text>
</svg>`;

D.shank = () => `
<svg viewBox="0 0 640 170" class="dia">
  <text x="0" y="13" class="dt">Bur shanks — ISO 1797</text>
  <g>
    <rect x="30" y="44" width="150" height="7" rx="2" fill="#b9c4cb"/>
    <rect x="180" y="38" width="26" height="19" rx="3" fill="${TEAL}"/>
    <text x="30" y="32" class="dl" fill="${INK}">FG — friction grip, high-speed turbine</text>
    <text x="30" y="74" class="dn" fill="${TEAL}">1.6 mm</text>
    <text x="110" y="74" class="ds">≈ 19 mm long</text>
  </g>
  <g transform="translate(330,0)">
    <rect x="0" y="42" width="165" height="11" rx="3" fill="#b9c4cb"/>
    <rect x="165" y="36" width="26" height="23" rx="3" fill="${TEAL}"/>
    <text x="0" y="32" class="dl" fill="${INK}">RA — contra-angle</text>
    <text x="0" y="74" class="dn" fill="${TEAL}">2.35 mm</text>
    <text x="90" y="74" class="ds">≈ 20 mm long</text>
  </g>
  <g transform="translate(0,66)">
    <rect x="30" y="42" width="230" height="11" rx="3" fill="#b9c4cb"/>
    <rect x="260" y="36" width="26" height="23" rx="3" fill="${TEAL}"/>
    <text x="30" y="32" class="dl" fill="${INK}">HP — straight handpiece, laboratory</text>
    <text x="30" y="74" class="dn" fill="${TEAL}">2.35 mm</text>
    <text x="120" y="74" class="ds">roughly twice the RA length</text>
  </g>
</svg>`;

/* ── document ───────────────────────────────────────────────────────────── */
const today = new Date().toISOString().slice(0, 10);
const P = [];
const push = (...x) => P.push(...x);

push(`<!doctype html><meta charset="utf-8"><title>CandelX Technical Knowledge</title><style>
@page { size:A4; margin:16mm 14mm 15mm; }
*{box-sizing:border-box}
body{margin:0;font:10.5pt/1.6 "Helvetica Neue",Helvetica,Arial,sans-serif;color:#22323b}
h1,h2,h3,h4{margin:0;font-weight:700;color:#062b3d;letter-spacing:-.015em}
p{margin:0}
b{color:#062b3d;font-weight:700}

/* cover */
.cover{height:252mm;display:flex;flex-direction:column;justify-content:center}
.cover .rule{width:70px;height:6px;background:#007ea7;margin-bottom:28px}
.cover h1{font-size:38pt;line-height:1.05}
.cover .sub{font-size:13.5pt;color:#4a5b66;margin-top:16px;max-width:140mm;line-height:1.5}
.cover .meta{margin-top:46px;padding-top:15px;border-top:2px solid #007ea7;font-size:9.5pt;color:#6b7b85}

/* numbers page */
.numgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:14px}
.num{border-radius:4px;padding:11px 10px 12px;break-inside:avoid}
.num .v{font-size:15pt;font-weight:700;line-height:1.1;letter-spacing:-.02em}
.num .u{font-size:8pt;margin-top:1px;opacity:.75}
.num .l{font-size:8.5pt;margin-top:6px;line-height:1.3;color:#44555f}
.c-steam{background:#eef6fa} .c-steam .v{color:#00658a}
.c-sil{background:#f2f8f4} .c-sil .v{color:#1d6640}
.c-steel{background:#f4f4f8} .c-steel .v{color:#4a4a8a}
.c-wash{background:#fdf6ec} .c-wash .v{color:#8a5a08}
.c-dim{background:#f4f7f9} .c-dim .v{color:#3c4c55}
.c-water{background:#fdf0ef} .c-water .v{color:#8c1d18}
.c-prf{background:#f7f2fa} .c-prf .v{color:#6b3a8a}
.c-own{background:#062b3d} .c-own .v{color:#fff} .c-own .u,.c-own .l{color:#a9bdc8}

/* parts */
.part{break-before:page;border-top:4px solid #007ea7;padding-top:13px;margin-bottom:18px}
.part .kicker{font-size:8.5pt;letter-spacing:.18em;text-transform:uppercase;color:#007ea7;font-weight:700}
.part h2{font-size:24pt;margin-top:5px}
.part .lede{font-size:11.5pt;color:#4a5b66;margin-top:9px;max-width:150mm;line-height:1.45}

/* Q&A card */
.qa{break-inside:avoid;margin-bottom:13px;border-left:3px solid #d7e2e8;padding:2px 0 2px 13px}
.qa .q{font-size:11.5pt;font-weight:700;color:#062b3d;margin-bottom:5px;line-height:1.3}
.qa .a{font-size:10.5pt;line-height:1.6;color:#22323b}
.qa .why{font-size:9.5pt;color:#5b6b74;margin-top:6px;padding-left:12px;border-left:2px solid #e6ebee;line-height:1.45}
.qa .why::before{content:"WHY IT MATTERS  ";font-size:7pt;letter-spacing:.12em;font-weight:700;color:#9aa8b0}
.tagp{display:inline-block;font-size:6.5pt;letter-spacing:.12em;text-transform:uppercase;font-weight:700;padding:1px 5px;border-radius:2px;background:#eceff1;color:#6b7b85;vertical-align:2px;margin-left:7px}
.big{display:block;margin:8px 0 2px;padding:7px 12px;background:#062b3d;color:#fff;border-radius:3px;font-size:12pt;font-weight:700;letter-spacing:-.01em}

/* diagrams */
.dia{width:100%;height:auto;margin:6px 0 18px;break-inside:avoid}
.dt{font:700 9pt "Helvetica Neue",Helvetica,Arial;fill:#062b3d;letter-spacing:.02em}
.dl{font:700 8.5pt "Helvetica Neue",Helvetica,Arial}
.dn{font:700 13pt "Helvetica Neue",Helvetica,Arial;letter-spacing:-.02em}
.ds{font:8pt "Helvetica Neue",Helvetica,Arial;fill:#7d8b94}

/* quickfire */
.qf{display:grid;grid-template-columns:1fr;gap:0}
.qf div{display:grid;grid-template-columns:40% 1fr;gap:14px;padding:7px 0;border-bottom:1px solid #eceff1;break-inside:avoid;font-size:9.5pt}
.qf div span:first-child{font-weight:700;color:#062b3d}
.qf div span:last-child{color:#3c4c55}
.ab{break-inside:avoid;padding:9px 12px;background:#f4f7f9;border-radius:3px;margin-bottom:7px}
.ab .q{font-weight:700;color:#062b3d;font-size:10pt}
.ab .n{font-size:9pt;color:#5b6b74;margin-top:2px}

.src{font-size:8pt;color:#6b7b85;break-inside:avoid;margin-bottom:6px;padding-bottom:5px;border-bottom:1px solid #eceff1}
.src b{font-size:8.5pt}
.src span{color:#9aa8b0}
.note{background:#f4f7f9;border-radius:4px;padding:12px 15px;font-size:9.5pt;margin:14px 0;break-inside:avoid;line-height:1.55}
h3.s{font-size:15pt;margin:24px 0 10px;break-after:avoid}
</style>`);

/* cover */
push(`<div class="cover"><div class="rule"></div>
<h1>Technical<br>Knowledge</h1>
<div class="sub">The physics, the chemistry, the standards and the numbers behind sterilization containers — so you can answer a technical customer without reaching for anything.</div>
<div class="meta">CandelX Surgicals · ${today}<br>No article numbers. No product photographs. Knowledge only.<br><br>
Every figure checked against a published source, September 2026. Sources at the back.</div></div>`);

/* numbers */
push(`<div class="part"><div class="kicker">Start here</div><h2>Sixteen numbers worth memorising</h2>
<div class="lede">Learn this page and most questions collapse into one of these. Everything after it is the explanation.</div></div>`);
push(`<div class="numgrid">`);
for (const n of NUMBERS) push(`<div class="num c-${n.c}"><div class="v">${n.n}</div><div class="u">${n.u}</div><div class="l">${n.l}</div></div>`);
push(`</div>`);
push(`<div class="note"><b>How to use this book.</b> Each part is a set of real questions with short answers. The <b>dark bar</b> under an answer is the one line to remember. The grey line underneath tells you <i>why</i> it matters, which is what makes it stick. Nothing here is padding — if you read one part a day you will have it in a fortnight.</div>`);

/* parts */
for (const part of PARTS) {
  push(`<div class="part"><div class="kicker">${part.kicker}</div><h2>${part.title}</h2><div class="lede">${part.lede}</div></div>`);
  if (part.diagram && D[part.diagram]) push(D[part.diagram]());
  for (const item of part.qa) {
    push(`<div class="qa"><div class="q">${md(item.q)}${item.tag ? `<span class="tagp">${item.tag}</span>` : ""}</div>`);
    push(`<div class="a">${md(item.a)}</div>`);
    if (item.big) push(`<span class="big">${md(item.big)}</span>`);
    if (item.why) push(`<div class="why">${md(item.why)}</div>`);
    push(`</div>`);
  }
}

/* quickfire */
push(`<div class="part"><div class="kicker">Part 9</div><h2>The exhibition round</h2>
<div class="lede">Twenty questions you will be asked standing up, with an answer short enough to actually say. No preamble, no hedging.</div></div>`);
push(`<div class="qf">`);
for (const [q, a] of QUICKFIRE) push(`<div><span>${md(q)}</span><span>${md(a)}</span></div>`);
push(`</div>`);

push(`<h3 class="s">And six to ask them</h3>`);
push(`<div class="note" style="margin-top:0">A new seller answers questions. A good one asks them — you learn the real requirement, and you stop guessing at what to quote.</div>`);
for (const [q, n] of ASK_BACK) push(`<div class="ab"><div class="q">${md(q)}</div><div class="n">${md(n)}</div></div>`);

/* sources */
push(`<div class="part"><div class="kicker">References</div><h2>Where these numbers came from</h2>
<div class="lede">Checked September 2026. If you change a number in this book, change its source with it.</div></div>`);
for (const [what, who, url] of SOURCES) push(`<div class="src"><b>${what}</b><br><span>${who} — ${url}</span></div>`);
push(`<div class="note"><b>One caution.</b> These are industry standards and published figures — they describe the product <i>category</i>. They are not claims about CandelX goods specifically. Anything you assert about your own products — certificates, validated cycles, load ratings, material certificates — has to come from your own factory and your own documents.</div>`);

fs.writeFileSync(OUT_HTML, P.join("\n"));
execFileSync(CHROME, ["--headless", "--disable-gpu", "--no-sandbox", "--no-pdf-header-footer",
  `--print-to-pdf=${OUT_PDF}`, "file://" + OUT_HTML], { stdio: ["ignore", "ignore", "pipe"] });
if (!process.env.KEEP_HTML) fs.unlinkSync(OUT_HTML);

console.log(`${path.relative(ROOT, OUT_PDF)} — ${Math.round(fs.statSync(OUT_PDF).size / 1024)} KB`);
