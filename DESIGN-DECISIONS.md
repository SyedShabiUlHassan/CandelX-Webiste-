# Candelx Surgicals — design decisions log

Running record of choices Hassan has confirmed, and where each one lives in the code.
When a new choice is confirmed it gets implemented in the site files **and** added here.

Site: `site/` (Astro). Design tokens: `site/src/styles/system.css` `:root` (verbatim from `brand/tokens.css`).
Tuning labs (served by the dev server, safe to delete): `site/public/_*.html`.
Run: `cd site && npx astro dev --background` → localhost:4321 (`astro dev status` / `stop` / `logs`).

---

## Open / pending — NOT yet done (as of 2026-09-10)

- **"Customize your tray" scroll section** — Hassan said it has "a few mistakes" in the scroll behaviour;
  he hasn't said what. Get specifics next session before touching it.
- **Full catalogue** — names, photos and structure are DONE (see the 2026-09-12 entries at the end).
  Still open: `summary` text for the **47 original** families (the 32 Chaplet-derived ones now have
  descriptions), real dimensions for the 43 new article numbers, and a decision on
  `/catalogue/<slug>` vs `/products/<slug>` URLs.
- **Deferred build items** — mobile nav hamburger (<680px the nav is `display:none`, no toggle); footer still
  has Products / Quality / Support columns and the stub pages `capabilities` / `quality` / `support` still
  exist (unlinked from the header now); "Download line card" + doc-download links not wired; quote form has
  no backend; fonts loaded from Google Fonts (self-host later).

---

## Header  — `site/src/components/Header.astro` + `system.css` (`.cx-header*`)

| Setting | Value | Where |
|---|---|---|
| Bar height | **46px** | `.cx-header { --bar: 46px }` |
| Logo height | **27px** | `.cx-header { --logo-h: 27px }` |
| Logo file | `/brand/logo-candelx.svg` (fixed — see below) | `Header.astro` |
| Layout | logo left · nav absolutely centred · actions right | `.cx-header__inner`, `.cx-header nav`, `.cx-header__right` |
| Nav items | **Products, Catalogue** only (Capabilities / Quality / Support removed) | `Header.astro` `links[]` |
| Search | **removed** entirely | — |
| Sticky | yes, always visible | `.cx-header { position: sticky }` |
| Mobile ≤680px | nav hidden (no hamburger yet — deferred), actions gap tightened | `@media (max-width: 680px)` |

Open: **Products and Catalogue both link to `/catalogue`** — final destination for Catalogue still undecided
(PDF line card `catalogue/Candelx Vol 1.pdf`? its own page?).

---

## "Request a quote" button  — `.cx-qbtn` in `system.css`, markup in `Header.astro`

Ported from a React/Tailwind/shadcn `motion-button.tsx` Hassan supplied → rebuilt as plain CSS (no deps).
Behaviour: teal circle sits left at rest; on hover/focus it expands to fill the pill, the arrow nudges right,
the label flips navy → white.

| Setting | Value | Where |
|---|---|---|
| Colour | **teal-400 `#5dadc7`** | `.cx-qbtn { --qbtn: var(--teal-400) }` |
| Circle diameter | **30px** (→ 38px tall button) | `.cx-qbtn { --circle: 30px }` |
| Arrow icon | **shown** (Hassan wants it despite the frontend-design "AI-tell" flag — his call) | `Header.astro` inline SVG |
| Label | **"Request a quote"** | `Header.astro` |
| Motion | width + transform, `var(--ease-out)`, disabled under `prefers-reduced-motion` | `.cx-qbtn*` |
| Mobile ≤680px | circle 26px, smaller label | `@media` |

---

## Nav links (Products / Catalogue) — "glass button" treatment  — `.cx-header nav a` in `system.css`

Ported from a React/Tailwind/CVA/shadcn `glass-button.tsx` Hassan supplied → rebuilt as plain CSS.
A frosted teal-tint pill with a soft halo, revealed on hover; the current page shows it persistently.

| Setting | Value | Where |
|---|---|---|
| Border / rim | **halo** — no rim, soft glow only | `.cx-header nav a:hover { box-shadow }` |
| Glow colour | **neutral** `rgba(255,255,255,.6)` | same |
| Fill | **teal tint** `rgba(0,126,167,.09)` | `.cx-header nav a::before { background }` |
| Trigger | **on hover** (+ persistent on the active page) | `:hover` / `[aria-current="page"]` |
| Padding | **4px / 18px** | `.cx-header nav a { padding }` |
| Radius | **999px** (pill) | same |
| Glow size | **4px** | `box-shadow: 0 0 4px …` |
| Font size | **14px** | same |
| Backdrop blur | **3px** | `::before { backdrop-filter }` |
| Letter-spacing | -0.03em (tracking-tighter, from the source component) | same |

Note: the neutral (white) glow is barely visible on the white header — the visible cue on hover is the tint pill.
Switch `box-shadow` colour to a teal if a visible glow is wanted later.

Lab for re-tuning: `site/public/_nav-lab.html` (5 border modes × 5 glow colours × fill × trigger + sliders + a
12-cell ready-made board).

---

## Home hero  — `site/src/pages/index.astro` (`.hero-*` + `is:global` `.hero-sec` block)

Left text column / right video, video **blends into the white ground** (no panel, no frame, no card —
Hassan: "video will be in white background and it will blend in it, i don't add any background on it").
Depth comes from one thing only: a very faint navy dot grid. Chosen in `_hero-lab.html`.

| Setting | Value |
|---|---|
| Blue blend | **none** — pure white ground (`.cx-dotfield`) |
| Text column width | **42%** (`.hero-grid { grid-template-columns: 42% 1fr }`) |
| Dot grid | **on** — via `.cx-dotfield` (see below) |
| Blueprint grid / seam / chevrons / tribar / headline accent | all **off** / none |
| Video panel | **none** — the scroll-explode sequence sits on the white ground with no frame or card (see below) |

### Clean left side  (chosen in `_hero-copy-lab.html`)

Stripped right back so focus goes to the scroll video. **No eyebrow, no body paragraph, no buttons, no ISO badges.**
Just three things:

| | |
|---|---|
| Headline | **"Trays that survive / the cycle count"** — `.hero-title`, 54px (42px ≤960px), navy, `<br>` forces the 2-line break |
| Sub-line (one) | "316L containers that stay flat and sealed after years of daily autoclave cycles." — `.hero-sub`, 17px, max 40ch |
| Link (one, no button) | **"See the range" → `/catalogue`** (the Products/Catalogue page) — `.hero-link`, teal, thin underline |

Copy = lab option #1 (customer pain: trays warp / fail after repeated autoclave cycles).
ISO badges removed from the hero; the info still lives in the footer legal line (`.cx-footer__legal`).

Lab for re-tuning: `site/public/_hero-lab.html` (blue blend / dots / blueprint grid / seam / chevrons / tribar / accent / video-panel + sliders).

### Scroll-explode hero — built 2026-09-13  (`.hero-pin` / `.hero-stage` / `.hero-vis` in `index.astro`)

The hero is **pinned**: it holds for 2.4 screen-heights while the headline fades out, the tray
travels to centre, 144 frames of the explode scrub past, and the last frame holds before release.
Chosen in `_hero-scroll-lab.html` (since deleted — the lab's sliders are now the CSS vars below).

| Setting | Value | CSS var |
|---|---|---|
| Pinned length | **2.4** screen-heights | `--hero-pin` |
| Headline fade + centring ends at | **0.22** of the run | `FADE_END` in the script |
| Explode ends at | **0.82**, then holds | `BLOW_END` in the script |
| Tray height at rest | **90vh** | `--hero-rest` |
| Tray height centred | **79vh** — it *shrinks* as it centres, Hassan's choice | `--hero-big` |
| Resting nudge x / y | **0 / 0** | `--hero-x`, `--hero-y` |
| Frames | **144** (all of them), WebP, 560×1002, **3.3 MB** | `/public/hero/f000..f143.webp` |
| Lid colour | **brand teal `#007ea7`** (was red in the source video) | baked into the frames |

**Transparency without an alpha mask.** The frames have a pure-white background and the layer
uses `mix-blend-mode: multiply`, so white reads as transparent — the dot grid shows through the
tray *and* through the holes in the mesh basket, with no second file per frame to download.
A true cut-out (colour + alpha mask) looked identical but cost 12.8 MB against 3.3 MB.
Measured difference between the two: 0.7 of 255 — invisible.
**This only works on a white / very light ground.** On a dark section the tray would darken with
it. Don't reuse the sequence elsewhere without re-checking.

**Why the dot field moved.** It is on `.hero-stage` (the sticky element), not on `.hero-pin`.
On the tall wrapper the grid scrolls while the stage stays put, so the dots visibly drift
under a tray that isn't moving.

**Lid recolour.** Done in CIELAB: each pixel keeps its lightness and only the hue/chroma rotate,
so every highlight, shadow and perforation survives. The lid is the only saturated object in the
shot, so nothing else is touched — the steel measures exactly neutral afterwards. The red measured
L 48.2 / C 32.9 and brand teal is L 49.1 / C 33.1, so the swap cost no lightness or saturation.

**Loading.** Frame 0 ships as a `<img>` poster so the hero is correct instantly; scrubbing arms
after 16 frames and the rest stream in behind. Before the set is ready the scrub falls back to
the newest frame that has arrived, so it degrades rather than stalling.

**Reduced motion** drops the pin entirely: a still hero with the headline visible. (The scroll
maths alone would have faded the `h1` to zero opacity there — guarded explicitly.)

Regenerate the frames with `scripts/hero-frames/` (see its README). Masters kept in
`assets-src/frames-720-master/`, outside `public/` so they never ship.

### Dot-field — reusable  (`.cx-dotfield` in `system.css`)

The faint navy dot grid is a shared class: `position:relative; background:var(--surface-card); overflow:hidden`
+ a `::before` `radial-gradient(circle, rgba(0,50,73,.16) 1.4px, transparent 1.9px) / 16px` at `opacity .34`
+ `> .cx-container { z-index:1 }`. Add `class="cx-dotfield"` to any `<Section>`.
It's in `system.css` (not a page `<style>`) so it reaches the `<section>` that `Section.astro` renders.
**Applied on:** home hero (`index.astro`), catalogue / "Products" page (`catalogue.astro`).
**Header:** no dots — Hassan reviewed and declined (`_header-dots.html`, since deleted).

## "Customize your tray" scroll section  — `site/src/pages/index.astro` (`.tsteps*`, directly below the hero)

5 steps (Select your tray · Define dimensions · Choose material · Refine the details · Approve & confirm) on a
centre spine, alternating left/right. **Variant B — focus:** the step nearest the viewport centre is full
size + opacity; the others recede (scale .93, lower opacity). Reveal is **scroll-linked and reverses** — a step
below the viewport is `opacity 0` (nothing ahead is shown), fades/scales in as you scroll to it, fades back out
as you scroll past or scroll up. Chosen in `_tray-steps.html` → `_tray-steps-v2.html` (variant B) → `_tray-b-colours.html` (colours).

| Part | Value |
|---|---|
| Layout | centre spine, alternating; text `clamp(26px,4.2vw,38px)`, body 18px; step gap `clamp(168px,38vh,352px)` (one step at a time) |
| Colour template | **"Teal line"** — titles navy (`--text-strong`), body `--text-muted`, kicker `--brand-teal` |
| Number nodes | rest: `--border-default` ring, `--text-faint` digit; **focused: `--brand-teal` ring + digit**, scale 1.05 |
| Connecting line | **`--brand-teal`, NO track** — the line only exists where you've scrolled (`.tsteps__spine` height 0→100% driven by scroll; nothing drawn ahead) |
| Motion | scroll-linked (rAF on scroll), `translateY(p·24px)` + scale; `prefers-reduced-motion` → all shown, spine full |
| Mobile ≤680px | collapses to a left spine (12px), smaller nodes/text, keeps the scroll-linked reveal |

Copy in the 5 `<p>` lines is placeholder — Hassan can edit. Section markup + scoped `<style>` + scoped `<script>`
all live in `index.astro` (not a DS component yet).

## Logo asset fix  — `site/public/brand/logo-candelx.svg`

The original SVG had a baked-in white background `<rect>` and ~32% empty space below the artwork in its
viewBox (this was the "white line below" Hassan spotted).

- Removed the white `<rect>` → transparent
- viewBox `-10 0 700 260` → **`8 10 666 180`** (even 12px margins, artwork fills its box)
- Original backed up at `brand/_backup/logo-candelx.orig.svg`

---

## Full catalogue  — BUILT 2026-09-10, PENDING HASSAN'S REVIEW (not yet confirmed)

Replaced the 6 demo products with the real extraction (`catalogue/data/catalog-data.json` + `image-manifest.json`).

- **Data:** `site/src/data/catalogue.ts` — **54 product families**, **613 article numbers**, 10 sections.
  Generated once by `scripts/gen-catalogue.mjs`, now the **hand-editable source of truth** (re-running the
  script overwrites it). Families = grouped by (section, CandelX prefix). Each family has: name
  (`"<Category> · <PREFIX>"` — rename freely), `subtitle` (from a catalogue heading), empty `summary`
  (**write these**), real page `specs` (material / steel sheet / perforation / mesh), `image`, `details[]`,
  `sourcePages[]`, and `sizes[]` (every article no. with L×W×H / sizeText / lid / note / needsReview).
- **Pages:** `catalogue.astro` rewritten — 54 family cards, filter by the 10 sections + search (matches name,
  prefix, subtitle, **or any article number**). `catalogue/[slug].astro` (new) — per-family page: hero + detail
  thumbs, real Specification table, full **Sizes** table, "Mass, load ratings, validation reports and material
  certificates available on request" line, source-page note. Old `products/[sku].astro` removed.
- **Images:** 118 copied into `site/public/catalogue/img/pNN/…` (per catalogue page, not per SKU). All family
  **heroes are flag "ok"**; 30 low-res files are only used as detail thumbs. **`LOW-QUALITY-IMAGES.md`** at repo
  root lists every flagged file + the 2 families with no photo (CXEB / CXET — source files missing from `images/`).
  Hassan to supply clean product photography.
- Build green, 60 pages. Backups of the old catalogue/product files + `products.ts` in
  `research/pre-full-catalogue/`. **Do not treat as final** until Hassan reviews.

## "Customize your tray" scroll section — spacing + reveal fix (2026-09-11)

- **Head → step-1 gap:** was 56px (too tight — title and "Select your tray" read as almost touching).
  Shown as 5 fixed samples (`site/public/_tsteps-gap-samples.html`, A=56/B=96/C=130/D=168/E=200) —
  Hassan picked **Option B, 96px**. Locked into `site/src/pages/index.astro`,
  `.tsteps__track { margin: 96px auto 0; }` (was `56px`).
- **Step-1 reveal bug fixed:** the scroll script always marked *some* step "hot" (forced to opacity 1)
  by picking whichever step's midpoint was numerically closest to viewport-centre — with no cutoff. Since
  step 1 ("Select your tray") is topmost, it was always "closest of the five" even while the whole section
  sat below the fold, so it snapped to full opacity before the user had scrolled anywhere near it, while
  steps 2–5 correctly faded in. Fix in `index.astro`'s inline `<script>`: a step only counts as "hot" if
  it's actually inside the reveal window (`best > vh * 0.5` → `hot = -1`, matching the existing `a` cutoff).
  Now all 5 steps start at opacity 0 and fade in identically on scroll. Verified via computed
  `style.opacity`/`.is-hot` at scroll-top and at centre.
- Lab files used: `_tsteps-gap-lab.html` (slider, superseded — hard to recall the landed value) and
  `_tsteps-gap-samples.html` (lettered fixed options — worked, keep this pattern for future spacing calls
  instead of an open slider).

## "Customize your tray" — step-to-step gap reduced (2026-09-11)

- Was `clamp(168px, 38vh, 352px)` (computed ~240px on Hassan's screen — the long spine he flagged between
  e.g. "Define dimensions" and "Choose material"). Shown as 5 lettered static samples
  (`_tsteps-stepgap-samples.html`, A=240/B=190/C=160/D=130/E=100), then as a live scroll-test lab with a
  real toggle between the two finalists (`_tsteps-scroll-lab.html`, full 5-step section + the actual
  reveal-engine script, switch B/C without losing scroll position). **Hassan picked B, 190px** (scroll-tested,
  not just eyeballed static).
- Locked into `site/src/pages/index.astro`: `.tstep { padding-bottom: clamp(132px, 30vh, 280px); }` (was
  `clamp(168px, 38vh, 352px)`) — same fluid shape, scaled down by the 190/240 ratio so it stays responsive.
  Also scaled the ≤680px mobile clamp proportionally: `clamp(101px, 25vh, 190px)` (was
  `clamp(128px, 32vh, 240px)`) — **not shown to Hassan directly, extrapolated from the desktop ratio** to
  keep mobile consistent; worth a glance on a phone next review.
- Build green, 60 pages. Live-verified computed `padding-bottom` = 190px.

## Catalogue restructure — sections, merges, real names & photos (2026-09-12)

Hassan's review of the overnight catalogue: the same photo appeared on several cards, and products that
are one item were split across cards. **Root cause:** `scripts/gen-catalogue.mjs` grouped by article-number
prefix and pulled images from `catalogue/data/image-manifest.json`, which maps images **per PDF page**, so
every prefix on a page inherited that page's photo. It ignored `catalogue/page-html/*.html`, where an
earlier pass had already matched each photo to its product by inspection ("Photo-to-product match by
inspection"). That HTML is now the source of truth for **names and images**.

- **New generator `scripts/build-catalogue.mjs`** (old `gen-catalogue.mjs` superseded — do not run it).
  Reads names/photos from `catalogue/page-html/`, size rows from the pristine snapshot
  `research/pre-restructure/catalogue.ts` (so it is re-runnable and never re-reads `catalog-data.json`),
  writes `site/src/data/catalogue.ts` and copies only the referenced images into
  `site/public/catalogue/img/`. The editable table is `FAMILIES` **in the script**, not in the data file.
- **Result:** 51 families → **48**, 559 article numbers preserved, 9 sections, 146 images. Build green, 55 pages.
- **Section order (Hassan, website only — the PDF is unchanged):** 1 Wire Mesh Trays · 2 Perforated Trays ·
  3 Universal Trays · 4 Cassette Trays · 5 PRF & GRF System · 6 Implantology / Bur Holders ·
  7 IntraOral / Orthodontic Steel Mirrors · 8 Hollow Wares · 9 Trays Accessories / Silicon Holding System.
  "General Sterilization Trays" no longer exists — split into 1 and 2.
- **Merges — only true variants.** `CXMT + CXML` → *Wire mesh tray* (CXML is the optional **lid**, not a
  separate tray). `CXPS + CXPT` → *Perforated tray — square pattern*. `CXPR + CXPU` → *Perforated tray —
  round pattern*. Page 8/9 label these exactly: CXPS/CXPR = round corner, CXPT/CXPU = chamfer corner.
- **NOT merged:** hollow wares. Five shared one photo but are five different products — proved by the size
  notes (CXWK rows literally read "Kidney Dish"). All 11 now carry their real name and their own photo:
  CXWT tray · CXWV vomit bowl · CXWB lotion bowl · CXWG gallipot · CXWK kidney dish · CXWF forceps jar ·
  CXWC dressing container · CXWD drum · CXWS scaler tray · CXWUM / CXWUF urinals.
- **Same prefix ≠ same product.** CXCC, CXUTD and CXUTM each name different products on different pages, so
  block matching in the generator is **restricted to a family's own source pages**. CXUTM mesh cassette moved
  to Wire Mesh Trays (Hassan); the page-25 aluminium tray of the same prefix stays in Universal Trays.
- **Sizes table (`catalogue/[slug].astro`) — moved up, directly under the product**, specs now sit in the
  right-hand column beside the photo. `LIMIT = 12` rows then a "Show all N sizes" button
  (`[data-sizes]:not(.is-open) .pd-row--extra{display:none}`). Merged families **pivot**: one row per
  physical size with an article-number column per variant — cuts perforated from 40 rows to 15. Pivot is
  automatic (≥50% of dimensions shared between variants), otherwise one table per variant (wire mesh:
  "Tray" 98 / "Lid (optional)" 18). Article numbers printed under a "LIDs" heading in the catalogue are
  split into their own table so a heightless row never sits next to its tray like a duplicate.
- **`/audit`** (`site/src/pages/audit.astro`) — internal review sheet, all 48 products with photo, thumbs,
  name, section and slug; 23 amber-outlined where the photo came from a shared page or the name may be a
  duplicate. Not linked from the site. **Delete once the catalogue is signed off.**
- Backup of the pre-restructure state: `research/pre-restructure/` (data + both page files).

## Catalogue v2 — products are PDF sub-categories, not prefixes (2026-09-12, same day)

Hassan's review of the restructure above found the grouping model itself was wrong: "wire mesh have 2
categories single frame and double frame", "make sub categories in main category", "this issue keeps
repeating in many products". **Grouping by article-number prefix was the error all along** — it split one
printed product across cards and merged unrelated ones.

- **A product = one sub-category of the printed catalogue**, i.e. one PDF page's `cx-title` + `cx-subtitle`
  ("Light Pattern Cassettes — High quality, button lock & detachable hinges"). The `PRODUCTS` table in
  `scripts/build-catalogue.mjs` is keyed by **`pages: [n]`**, and size rows are attached by matching the
  article numbers printed on those pages (`class="art-no"` → 542 of 559 map; PRF pages 40–42 print none, so
  those three use `fromSlug` against the snapshot).
- **Exception:** a page that prints several products in a grid, each with its own photo and table — hollow
  wares (p76/p77) and bur holders (p69). Those carry `only: ['CXWG']` + `blockScoped: true` and become one
  product per prefix. That is why the gallipot and the kidney dish stay separate.
- **Wire mesh is two products** — p16 *single frame*, p17 *double frame protection* (58 article numbers each,
  CXMT tray + CXML lid columns). Cassette Trays went from 14 prefix-cards to **15 real sub-categories**
  (Light pattern · Instruments Plus · Twin · Bracket-lock · Four lock types · Round-bottom · Square pattern ·
  Elongated ×4 · UnionJack · Double-hinge · Orthodontic pliers · Hand piece & small parts).
- **Images, derived from the page markup — no more guessing:**
  - a `<figure>` **with** a `<figcaption>` is a captioned detail shot → thumbnail strip, **caption shown**
    ("Single Frame protection — Round Corners", "Easy to lock"). Hassan: the thumbs had no descriptions.
  - a page with **no captioned figures gets no thumbnail strip at all** (light pattern cassettes, gallipot) —
    Hassan: "not every product have this small photo section… if provided in pdf".
  - uncaptioned images are main product shots, kept in **catalogue order** (sorting by pixel size picked the
    chamfer tray over the round one). First = hero; a second becomes **`imageAlt`**, shown behind a
    "View the other size" button (`.pd-swap`, `[data-swap]`) rather than dumped into the thumbnails.
  - `p08` overrides `hero`/`heroAlt` explicitly because page 8 prints the chamfer variant first.
- **Removed from the website on Hassan's instruction:** page 25 "Universal Trays — Aluminium" (CXUTM,
  3 article numbers — CXUTM-2900/2901/2110). Still present in `research/pre-restructure/catalogue.ts` if it
  needs to come back; just add a `PRODUCTS` entry for `pages: [25]`.
- **48 products · 555 article numbers · 99 images · 55 pages, build green.** Only 3 article numbers are not
  shown and they are the deliberate removal — the generator prints a "NOT SHOWN" list on every run, so
  anything silently dropped in future is visible immediately.
- `/audit` now also prints each card's PDF title and page so it can be checked against the catalogue directly.

## Catalogue v3 — real page numbers, sub-sections, photo slider (2026-09-12)

Hassan checked `/audit` ("looks good soo far") and gave four corrections.

- **PAGE NUMBERS WERE THE WRONG CATALOGUE.** The `page-html` FILE names follow the old *SteriTrays* PDF;
  the CandelX page is printed in each file's `.page-chip` (`page-16.html` = **CandelX page 10**). The site
  was quoting SteriTrays numbers. The generator now reads `page-chip` and `sourcePages` holds the CandelX
  number. Wire mesh = p10/p11, perforated = p6/p7, transportation baskets = p14, bur holders = p50.
  **Never quote the `page-NN.html` filename as a page number.**
- **Product names are now the PDF page titles verbatim**, Title Case as printed — "Light Pattern Cassettes",
  "Transportation Baskets", "Universal Trays & Sterilization Boxes", "Elongated Round-Click-Lock Cassette
  Trays". Hassan: "on each page top its category is mentioned, check it and update accordingly."
- **`groups: true`** — a new config flag for pages that print each variant as its own block with its own
  photos *and* its own table. Those render as **separate sections** on the product page (heading + own photo
  slider + own size table), never combined. Applied to **Transportation Baskets** (Steel — CXUT / Aluminium
  — CXUTA, catalogue p14) and **Implantology & Burr Holders** (four holder families, p50 — Hassan: "make one
  category, if someone opens, each is shown differently not combined"). The three separate bur-holder cards
  are gone. Groups come from the page's `<h3>` blocks; `CatGroup = { label, images[], sizes[] }`.
  Hassan: "this issue keeps repeating in many products" — so every page whose `<h3>` blocks carry their own
  photos was swept, giving **9 grouped products**: Transportation Baskets (p14) · Universal Trays, deep /
  shallow (p16) · Instruments Plus, CXCP / CXCC series (p30) · Cassettes for Orthodontic Pliers (p43–44) ·
  PRF System Cassettes (p25) · Implantology & Burr Holders (p50) · Steel Mirrors, intraoral / with handle
  (p54) · Silicon colour codes (p62–63) · Silicon strips & part sets (p64).
- **PRF pages fixed too** (Hassan: "do whatever feels good, i'll edit it later"). They were never missing
  article numbers — they print them as **plain text instead of in a table cell**, so the generator now also
  scans for the `CX[A-Z]+-\d+` pattern anywhere on a page (repeats dropped per block). That recovered:
  p22 *PRF & GRF Boxes* → 3 groups (For Professional / For Student / GRF System Box); p23 *Racks & Dishes*
  → **6 groups** (tube rack 3-tier, tube rack, dish, tube rack 2-piece, instrument tray, bowl — previously
  one lump); and a **new product**, p24 *PRF System — Preparation Instruments* (7 article numbers that were
  not on the site at all). `fromSlug` is now unused by any product but the code path remains.
- **Duplicate group labels are combined** (Hassan: "yes make it combined"). The same heading printed on two
  pages merges into one section, keeping both photos and all sizes — silicon "Colour E — Blue" was on p62
  *and* p63 and is now a single group with 8 sizes and 2 photos. Silicon colour codes: 6 sections → 5.
- **Final: 47 products · 555 article numbers · 144 images · 54 pages**, build green, 0 flagged.
- **Main photo is a slider, not a toggle button.** `.pd-slider` / `[data-slider]` with prev-next arrows and
  dots; `[data-shot]` images toggled by `hidden`. Where the catalogue prints two equal main shots they both
  belong here — the same tray in two sizes (wire mesh p10) or the two corner patterns (perforated p6:
  CXPS round corner + CXPT chamfer corner). Group sections reuse the same slider at `--sm` (1:1 ratio).
- **46 products · 555 article numbers · 108 images · 53 pages**, build green, 0 flagged for review.
  The only article numbers not shown are the 3 deliberate page-15 CXUTM removals.

## Adding a new button later

Two established button patterns, both pure CSS driven by `system.css` tokens — reuse, don't reinvent:

1. **`.cx-qbtn`** — animated pill (expanding circle + sliding icon + label colour flip). Primary CTA style.
2. **`.cx-header nav a`** glass treatment — frosted tint pill + halo on hover. Quiet / navigation style.
3. **`.cx-btn` / `.cx-btn--*`** — the original kit buttons (solid teal, outline) still used on body pages.

Colour comes from the teal ramp in `system.css`: `--teal-400 #5dadc7` (chosen accent) · `--teal-500 #2c94b6`
· `--teal-600 #007ea7` (brand) · `--brand-navy #003249`. Motion uses `--ease-out`. Always add a
`prefers-reduced-motion` guard. Show a lab (`site/public/_*.html`) for approval before wiring into components.

## PRF Surgical Set — a page of seven separate products (2026-09-12)

Hassan, looking at `/catalogue/prf-preparation-instruments`: *"those are separate products not same, each one
is different, so place them differently in same major category PRF GRF System."* He then named it: **"all
these are called PRF Surgical Set — make them appear as one card, but each has its own block if someone
clicks."* On naming: *"only codes, and names are also available of some, so write what's available."*

Catalogue page 24 prints **seven instruments**, each with its own photo and article number. The generator was
reading them as captioned `<figure>`s — i.e. detail shots of one product — so they collapsed into a thumbnail
strip under one hero photo. Wrong: they are seven products.

- **New generator flag `figureGroups: true`** (`scripts/build-catalogue.mjs`) — a page whose captioned figures
  are each a separate product. One group per figure; no thumbnail strip at all. The old `groups: true` flag
  (one block per `<h3>` heading) is unchanged and still drives Boxes / Racks & Dishes / Cassettes.
- **Slug renamed** `prf-preparation-instruments` → **`prf-surgical-set`**, name **"PRF Surgical Set"**.
  One card in the PRF & GRF System section, as before.
- **Nothing is invented.** `splitCaption()` reads the figcaption exactly as printed: the part that starts with
  a letter is the name, the rest is the spec line. Result: 9902 / 9904 / 9906 / 9908 → article number only;
  9910 → "Goldman fox scissors · TC · 13 cm"; 9912 → article number + "1 × 2 teeth · 12.5 cm";
  9914 → "PRF tweezer · 16 cm". Real names for the four unnamed ones are still owed by Hassan — add them to
  `page-42.html`'s figcaptions and re-run; no code change needed.
- **`CatGroup` gains `code` and `note`**; `CatFamily` gains **`groupLayout: "instruments" | null`**.
- **New layout in `site/src/pages/catalogue/[slug].astro`.** When `groupLayout === "instruments"`: no big hero
  photo (the instruments are the picture) — intro column only, `.pd-grid--intro`, max 62ch — then
  `.pd-inst__grid`, `repeat(auto-fit, minmax(120px, 1fr))` so a set of seven sits in **one row across** the
  way the catalogue prints it (auto-**fit**, not auto-fill: the spare eighth track collapses). Each block is a
  hairline card: upright 3/8 frame on `--surface-sunken`, then name (display 13.5px) / article no. (mono) /
  spec (12px muted). 4-up under 860px, 2-up under 520px. No size table — these rows carry no L/W/H.
- Verified at 1280px (7 in one row, 147px columns) and at 305px (2-up). Build green, **47 products · 555
  article numbers · 54 pages · 0 flagged**.

---

## 2026-09-12 — Capabilities / Quality / Support built to the design-system archetypes

Hassan reviewed `design-system-review.html` (the DS audit + full rebuild) and chose to apply **only the three
new pages**: *"capabilities, qualities, support add these pages in web rest remains same."* Home, catalogue,
product detail and quote are **deliberately untouched** — the token/type pass proposed for them was not taken.

### Why these three
They were 15-line placeholder stubs. Each maps onto a page archetype the design system already defines in
**`brand/CandelxDesignSystem.md` → Layout & Data Rules §1**, so nothing about their structure is invented.

| Page | Archetype | Rule it satisfies |
|---|---|---|
| `capabilities.astro` | Key Features | §1 — the one archetype where bullet claims are allowed |
| `quality.astro` | Compliance | §1 + **§3** — certification marks live here and nowhere else |
| `support.astro` | Back Cover | §1 + **§5** — CandelX contact details only, never the source brand's |

### New classes in `system.css`
Your tokens existed with no component class to reach them. Added, nothing invented:
- **`.cx-display-2`** (`--t-display-2-*`, 48px), **`.cx-h1`** (28px), **`.cx-h2`** (22px), **`.cx-body-sm`** (13px)
- **`.cx-status`** + `--ok/--warn/--alert/--info` — the first component to actually use the semantic status
  ramp. Before this only `--status-ok` ever rendered, in the quote toast.
- **`.cx-note`** — left accent rule on a status surface.

### Quality page — unconfirmed certifications
`certs` is a data array carrying **`confirmed: boolean`**. `ISO 13485`, `CE marking` and `EN 868-2` are set
**`confirmed: false`**: they carried over from the supplied website kit and are **not** backed by anything in
`catalog-data.json`. They render with an amber `.cx-status--warn` **"Unconfirmed"** marker plus a page-level
warning, so no unverified compliance claim reads as fact. Only `ASTM material` (304/316L) is `true` — that
grade is printed in the catalogue.
**To confirm one: set `confirmed: true` in that page's `certs` list. To drop it: delete the row.**
Note the footer still hardcodes `ISO 13485` in two places (description + legal line) — inherited from the kit,
not yet reconciled with this.

### Rule §4 — missing data
`quality.astro` (`Mill certificate`, `Batch marking`) and `support.astro` (`Telephone`, `Email`) render **`—`**,
never a blank cell and never an omitted row. Hassan still owes the real telephone/email.

### Footer wiring (`Footer.astro`)
Only change: `cols` now carries `[label, href]` pairs instead of bare labels, because the new pages were
otherwise unreachable (header nav stays **Products + Catalogue** only, unchanged). **10 links now live**,
2 remain `#` (`Validation reports`, `Documentation`) because no page carries that content yet. No design change.

### Verified
`npm run build` green, **54 pages**. All three pages: **zero hardcoded `font-size` px** — every size comes from
a `.cx-*` class or a `--t-*` token. Quality renders exactly **3** unconfirmed markers. Checked at 1440px.

### 2026-09-12 (cont.) — real certifications wired, FDA + CBI removed, "Traceable to batch" dropped

**Source of truth found:** `catalogue/page-html/page-85.html` = the catalogue's *Certifications & Compliance*
page, **CandelX page 66**. It printed six marks, all with real artwork in `images/p85/`.

**Hassan: remove FDA and CBI entirely.** Done in both places:
- `site/src/pages/quality.astro` — now lists the remaining **four**: ISO 13485, ISO 9001:2015, CE, cGMP.
- `catalogue/page-html/page-85.html` — both `.p85-cert` blocks deleted, grid `repeat(3,1fr)` → `repeat(2,1fr)`
  so four marks stay balanced. **Backup: `catalogue/_backup/page-85.orig.html`.**
- **`EN 868-2` is gone too** — it was never in the catalogue; I had invented it. So was the old
  "ASTM material" card (that grade is a product spec, not a certification — rule §3).

**Marks are now the real artwork**, copied to `site/public/certifications/`:
`cert-iso13485.png`, `cert-iso9001.png`, `cert-ce.png`, `cert-cgmp.png`. Names and scope lines are verbatim
from the catalogue page. The letter-circle placeholders are gone.

**Certificates become clickable when supplied.** Each entry has a **`document: string | null`** field.
- `null` → card is inert, shows a muted mono "Certificate to follow" line. Deliberately *not* interactive.
- set to a path → card becomes an `<a target="_blank">`, gains a teal "View certificate" affordance,
  hover tint and focus ring.
**To attach one:** drop the file in `site/public/certifications/` and set
`document: "/certifications/iso-13485.pdf"`. No other change needed; the page-level note hides itself once
every certificate has a document.
The earlier `confirmed:boolean` + amber "Unconfirmed" marker is **removed** — these marks come from Hassan's
own catalogue, so the claim is sourced. What's outstanding is the *document*, not the claim.

**Home page:** `"Traceable to batch"` capability removed from `index.astro` (`capabilities` array + its
`shield-check` icon). `.cap-grid` `repeat(4,1fr)` → **`repeat(3,1fr)`** so the remaining three sit as equal
columns instead of leaving a dead fourth cell. Verified at 1440px: three 378px tracks.

⚠️ **Footer still hardcodes `ISO 13485` (description) and `ISO 13485 · ISO 17665-1` (legal line).**
ISO 17665-1 appears nowhere in the catalogue — likely another kit leftover. Not touched; needs a decision.

**Dev-server gotcha:** a background `astro dev` had been up 18,456s and was serving a **stale module graph** —
edited CSS did not appear even after a hard reload, while `dist/` was correct. Fix: `npx astro dev stop` then
`npx astro dev --background`. Check with `npx astro dev status` before trusting what the browser shows.

### 2026-09-12 (cont.) — footer certifications fixed; one source of truth

The footer's legal line read **`ISO 13485 · ISO 17665-1`**. **ISO 17665-1 appears nowhere in the catalogue** —
a leftover from the supplied website kit — and the line contradicted the Quality page, which lists four
different marks. Removed.

**Root cause was duplication, so the fix is structural.** New **`site/src/data/certifications.ts`** is now the
only place a certification is declared:
- `certifications[]` — the four sourced marks (ISO 13485, ISO 9001:2015, CE, cGMP) with `mark`, `name`,
  `scope`, `document`.
- `certificationLine` — derived, `names.join(" · ")`, for the footer.

Both consumers import it: `pages/quality.astro` (cards) and `components/Footer.astro` (legal line). They can
no longer drift. **Adding, removing, or attaching a certificate is a one-file edit.**

- Footer legal line is now a **link to `/quality`** — `.cx-footer__certs` in system.css: mono, 12px,
  `rgba(255,255,255,.4)`, brightening to `.78` on hover. Overrides the generic `.cx-footer a` block rule.
- `.cx-footer__legal` gained `gap: var(--s-5)` + `flex-wrap` so four names can't collide with the copyright.
- Footer description keeps its prose "manufactured under ISO 13485" — sourced (CandelX page 66), and carries
  a comment marking it as the one deliberate mention outside the data file.
- Footer description `font-size:13px` → **`.cx-body-sm`** (token).

**Verified** across `/`, `/quality`, `/support`, `/catalogue`: identical line
`ISO 13485 · ISO 9001:2015 · CE · cGMP`, href `/quality`, **zero occurrences of 17665**, and the footer line
matches the Quality page cards exactly (asserted programmatically). Single line at 1280px (19.8px tall),
copyright left / certs right, no overflow. Build green, 54 pages.

---

## 2026-09-12 — Product page rebuilt: pure white, compact sizes panel, teal photo line

Four things Hassan confirmed in one sitting, each from a sample he picked from.

### 1. The "two different whites" — fixed everywhere
He kept seeing a faint box around product photos. Two causes:
- page was `--surface-page` #fbfcfd while the photo area was `--surface-sunken` #f6f8f9;
- **his own catalogue photos are cut out (transparent PNG), but the Chaplet-derived photos are
  JPEGs with pure white baked in** — so on any tint they draw a white rectangle.

**Rule now: a photo area is always the same colour as whatever contains it.**
- `site/src/pages/catalogue/[slug].astro` — `<style is:global>body{background:var(--surface-card)}</style>`,
  and `.pd-figure` / `.pd-thumb img` / `.pd-inst__frame` use `--surface-card`.
- `site/src/pages/catalogue.astro` — `.cat-card__ph` was `--surface-sunken` inside a white card
  (a third shade); now `--surface-card`.
- `site/src/styles/system.css` — `.cx-photo` placeholder was `--n-100`; now `--surface-card`.

**Product detail pages are pure white. Every other page keeps `--surface-page` #fbfcfd** —
Hassan explicitly refused a site-wide white ("dont make it all white keep rest same").

I tried cutting the white out of the 48 JPEGs to alpha (border flood-fill). **It failed and was
thrown away** — white shadow wedges survived, and the fill could not reach enclosed areas such as
the bur-holder frame window. Do not retry without real matting. Proof: `_photo-border-options.html`.

### 2. Sizes panel — small, beside the photo, three rows
Was a full-width table below the fold, 12 rows. Now `.pd-panel` in the right column above the
quote button: three rows, one "Show all N sizes", and `max-height:176px; overflow-y:auto` when open
so the page never grows a tall table. `LIMIT = 3` in `[slug].astro`.

**Watch this:** the limit is counted **across the whole panel**, not per table (`panelTables[].offset`,
`panelRows`). A family with a tray table *and* a lid table was showing six rows. A table whose rows are
all hidden gets `pd-row--extra` itself, or its `<thead>` keeps drawing.

### 3. Spacing: "Roomy", and ONE quote button at the bottom
Picked from `site/public/_spec-sheet-final.html` (A Roomy / B Balanced / C Tight).
`.pd-title` 34px, `--gap` 18–22px, spec rows 9px (scoped via `.pd-specs :global(.cx-spec dt/dd)` —
`.cx-spec` is shared with the quote page, never change it globally).

The button stays **at the bottom in its original order**; the requirement was only that it be visible
without scrolling. Measured at 1280×800: **77 of 79 pages clear the fold.** The two that don't
(`implant-cassette` 819, `wire-mesh-double-frame` 809) have the longest names, wrapping to three lines.

`.pd-summary` sits **under the photo in the left column**, not beside the specs — once every product
had a description, prose in the right column pushed the button below the fold on 14 of 79 pages.

### 4. Photo border — `teal-200` #cbe5ed
Chosen from ten options in `site/public/_border-colours.html`.
New alias **`--border-photo: var(--teal-200)`** — an alias, not a new colour value.
Applied to `.pd-figure` (1px, `--r-2`, 22px pad), `.pd-thumb img` (1px, `--r-1`, 8px pad),
`.pd-slider--sm .pd-figure`, the `.cat-card__ph` bottom rule, and the `.cx-photo` placeholder (dashed).
**Change the line once at `--border-photo`.**

> ⚠️ **`site/src/styles/system.css` is the only stylesheet the site loads** (`Site.astro` imports it).
> **`site/src/styles/tokens.css` is NOT imported anywhere** — it is the reference copy.
> A token added only to `tokens.css` silently renders as `border-width: 0`. Add to system.css,
> mirror into tokens.css.

---

## 2026-09-12 — Chaplet products split into separate products

Hassan: *"they all are different… I told u to place them seperately"*, and the pages carried
no description or specs.

**20 combined families → 32 separate products. 79 products · 86 pages.**
`groupLayout:"instruments"` now belongs to **`prf-surgical-set`** alone — that one really is a set.

Every new product has a **description and specs**, and **no dimensions** — Hassan's standing rule is
that a dimension is never invented. Sizes tables list article numbers only until he supplies real ones.

**Pipeline (re-runnable):**
`research/chaplet/data/split-proposal.json` → `research/chaplet/scripts/apply_split.py`
→ `catalogue/extras/extras.json` → `node scripts/build-catalogue.mjs` → `site/src/data/catalogue.ts`.
Correct a name, a description or a grouping in **split-proposal.json**, never in the generated data file.
`research/chaplet/scripts/make_extras.py` is **superseded** and marked so in its own header — running it
rebuilds the combined families and undoes this.

**Model change:** `CatFamily.images?: string[]`. `image`/`imageAlt` capped a slider at two photos and
Dental Implant Cassette has seven. `[slug].astro` uses `images` when present, else the old pair, still
guarded on `startsWith("/")`.

**Layout fix:** `.pd-inst__grid` was `repeat(auto-fit, minmax(120px, 1fr))`, so two items each stretched
to half the page — 560px towers with the photo stranded in grey. Now `minmax(120px, 190px)` +
`justify-content: start`.

**Three items deliberately NOT published** (the `HOLD` set in `apply_split.py`, printed on every run;
Hassan: *"just leave them"*):
| id | why |
|---|---|
| `kidney-dish` (3 photos) | duplicates his existing Kidney dish `CXWK` |
| `gallipot-set` | duplicates his existing Gallipot `CXWG` |
| `assorted-trays` | one photograph containing four different trays — cannot be one product page |

Nothing is deleted; publish any of them by removing its id from `HOLD`.


---

## 2026-09-12 — Product copy: `catalogue/summaries.json`

Hassan's brief: *"not generic, plus not too long — highlight the core pain points of the customer,
what does he want and what does he require in that product."*

**All 79 products have a description. 14–26 words, average 20.** Each names the buyer's problem
rather than describing the object — who buys this (CSSD manager, practice owner, ward sister,
distributor) and what they are afraid of: sets coming back wet, trays bending in transit, burs lost in
a tray, a jar that cannot be validated, small parts going missing.

**All product copy now lives in one file: `catalogue/summaries.json`**, keyed by slug and applied by
`scripts/build-catalogue.mjs`. It overrides the summaries in `split-proposal.json`, so that is the only
place to edit copy. The generator reports how many were applied, any key matching no product, and any
product still without a description.

Grounded in the printed catalogue's own sub-lines (`cx-subtitle` in `catalogue/page-html/*.html`) plus
standard CSSD practice — not researched per product on the web.

The 32 Chaplet-derived descriptions were **rewritten** at the same time; they were two sentences and up
to 46 words, and described the object. The site now reads in one voice.

**Layout note:** `.pd-summary` renders under the photo in the left column, and — because the
`instruments` layout has no photo column — also in the intro block on that layout. Without the second
placement `prf-surgical-set` silently had no description.


---

## 2026-09-13 — Quote page rebuilt as a step-by-step configurator

Hassan rejected two earlier attempts — a picker keyed on article numbers (*"nobody remember the
codes"*) and three category/photo flows (*"None of them is good im telling u what to build exactly"*).
He then dictated the sequence. This is built to that spec, not to a pattern.

**`site/src/pages/quote.astro`** — the old page was a mock with invented values ("St. Anne's Hospital",
"Reference QR-40128"); archived to `research/_labs-archive/quote-skupicker.astro.txt`.

**The sequence**
1. **Product family** — Trays · PRF & GRF · Implantology / Bur Holders · Mirrors · Hollow Wares · Accessories
2. **If Trays → type** — Wire mesh · Perforated · Cassette · Universal · **Aluminium**
   (Aluminium is not in the catalogue — *"i can build so put it there"*. It asks **Anodised / Not
   anodised** and skips the product step, going to a custom size.)
3. **Product** — photo cards. No article number is ever shown.
4. **Size** — the step picks its own mode per product: real dimensions (31 products), the position
   label printed in the catalogue (16), a photo per article number (8), or custom size only (27).
5. **Lid** · 6. **Surface finish** (Brush / Mirror / Sand) · 7. **Colour** (None / Teflon / Titanium Nitride)
8. **Quantity, free-text instructions, and image attachment**

**Rules he set**
- Steps 5–7 appear **only where they apply** — no lid question on a mirror, no finish on silicone.
- **Nothing after the product is required.** Choosing auto-advances; when nothing is chosen the button
  reads *"Continue without choosing"*. There is no separate skip link.
- The rail renumbers to the steps actually shown (a mirror has 4, a tray 8).

**Entry from a product page.** `/quote?add=<slug>` (optionally `&sku=`) fills in family, type and
product and **opens at the size question** — it does not drop the product into the basket. Hassan:
*"if someone directly chooses product from section u ask same questions"*. The URL is then cleaned.

**No backend yet.** Submit says so plainly and offers *"Copy the list instead"*. It never fakes a sent
confirmation or a reference number. Hostinger comes later — that is the only wiring left.

**Watch:** the page's `<style>` is **`is:global`**. The form is built by its own script, and
JS-injected markup never carries Astro's `data-astro-cid` attribute, so scoped rules silently miss it.
Every class is `q-` prefixed.

### Hero locked + full mobile pass — 2026-09-14

**Desktop hero, locked by Hassan in `_hero-options.html`:** headline **64px**, text column
**42%**, colour **two-tone** (line 1 `--navy-700`, line 2 `--brand-teal`), part callouts **on**,
scroll rail **on**, resting cue **on**, proof figures **off**.

At 64px/42% the headline needs 540px against a 477px column, so "Trays that survive" breaks to
three ragged lines. That is deliberate — Hassan chose it seeing the warning. Changing `--col`
to 48% gives two clean lines if he ever wants them.

**Callouts — style 1, "measured leaders".** Chosen from three styles in `_callout-styles.html`.
The previous build pinned every label to a fixed 86% of the frame box, which put the lid label
**50px inside the lid**, the base 43px and the basket 32px — the four parts are simply not the
same width. Each label is now placed past that part's real silhouette edge, read once off the
last frame's pixels (`buildSil` / `edges` in `index.astro`). Verified 16px clearance on all four.

The `.call` elements are rendered in markup, not built with `createElement`: elements created in
JS get no `data-astro-cid` attribute, so Astro's scoped CSS skips them and the labels silently
lose `position: absolute`. This cost a debugging round — do not move them back into JS.

**Mobile hero — idea A, "stacked, explodes in place"** (approved in `_mobile-review.html`).
`--hero-travel: 0` below 820px holds the tray in its resting slot, so scrolling goes straight
into the explode with no travel-to-centre — Hassan's explicit instruction. Hold drops 2.4 → 1.5
screens. Tray is 40vh, not 52, because the side labels need room: at 360px each needs ~100px of
margin. On a phone the spec line is dropped and the name wraps at the 12px floor.

**Catalogue — idea B, "index rows"** below 820px. 79 photo cards at ~355px each ran
33,958px (43.5 phone screens); rows with a 56px thumbnail run ~8,300px. **76% shorter.**

**Header.** Nav was `display: none` below 680px with nothing replacing it, which is why Products
and Catalogue vanished on a phone. It now sits in the bar in normal flow; the bar grows to 56px
(nothing can reach a 44px target inside 46px) and the quote button drops to its 44px circle,
because at 360px the labelled version needs ~333px of the 328px available.
"Products" and "Catalogue" are now two separate destinations — Catalogue becomes the PDF when
Hassan supplies it; `CATALOGUE_PDF` in `Header.astro` is the single line to change.

**Verification.** `public/_audit.html` loads all 7 pages at 360/390/430/768 and measures
sideways scroll, tap targets under 44px, text under 12px and inputs under 16px (iOS zoom).
**All 28 combinations clean.** Page heights after: catalogue 10.7 screens (was 43.5), home 7.0,
quality 4.1, capabilities 3.2, product 2.9, quote 2.7, support 2.2.

### Mobile rail + header alignment — 2026-09-14 (same day, after review)

**"Customize your tray" step numbers.** The phone rail positioned each node with `left: -44px`
against the step's padding box, which put the badges at **x = −12** — physically off the left
edge of the screen — and **39px away from the spine** they are meant to sit on. Everything now
derives from `--railx` on `.tsteps__track`, so node, line and text indent cannot drift apart.
The node is centred with `margin-left`, never `transform`: the scroll script writes `transform`
on it and would overwrite any positioning done that way.
Step gaps were `clamp(101px, 25vh, 190px)`, which made the section **1,827px** tall on a phone
for five short items. Now `clamp(48px, 8vh, 72px)` → **976px**, a 46% cut.

**Header nav** moved out of the absolute centre to sit with the quote button on the right
(Hassan's call). `margin-left: auto` on the nav takes the slack after the logo; the right-hand
group follows on a fixed 22px gap instead of its own `auto`. On a phone the nav needs an explicit
12px gap from the logo, paid for out of the link padding — verified fitting at 360px with the
button ending at 358 of 360.

**Mobile headline — idea B, "bigger, three lines".** Locked by Hassan 2026-09-14 from
`_hero-text.html`. At 34px the first line was **287px inside a 294px column — 7px of air**,
which is why it read as crammed, and the lines ended 287 vs 247 so the rag looked accidental.
On a phone it is now **38px over three lines**: "Trays that / survive the / cycle count",
widest line **211 of 296px**.

This needs a different break *and* a different colour boundary from desktop — desktop is
"Trays that survive / the cycle count" with "the cycle count" teal, the phone is three lines with
only "cycle count" teal. So the headline is four spans with two sets of `<br>` switched by media
query. The space that follows each `<br>` is stripped when it starts a line and separates the
words when that `<br>` is hidden, so a single `<h1>` serves both and still reads as one sentence
to a screen reader. Desktop output verified unchanged.

**Lab files deleted** now every decision is locked: `_hero-options`, `_mobile-review`,
`_mobile-all`, `_callout-styles`, `_mv/`, `_hero-text`, `_audit`. A copy of the audit harness is
kept in the session scratchpad; it loads all 7 pages at 360/390/430/768 and checks sideways
scroll, 44px tap targets, the 12px text floor and the 16px input floor.
Final run: **28/28 clean.** Home is now **6.0 phone screens**, down from 8.0 at the start.

---

## 2026-09-14 — Pre-launch audit, fixes applied

Full findings report: https://claude.ai/code/artifact/a0dcbf78-deac-47b9-bd0b-478dbce0c4f2
36 findings (6 blockers, 12 high, 13 medium, 5 housekeeping). What changed, and why.

### Decisions Hassan made this session

| Question | Decision |
|---|---|
| Domain | **candelxsurgicals.com**, non-www canonical. One place: `site` in `astro.config.mjs` |
| Brand in text | **CandelX** (capital X, matching the logo mark) |
| Homepage figures | **2010** manufacturing since · **14** countries. The "2× rated-load" and "14 d lead time" claims were **removed** — not evidenced |
| Certifications | Holds **all four** (ISO 13485, ISO 9001:2015, CE, cGMP); scans to follow. Page and footer unchanged |
| Competitor photography | **Ship the 32 as they are.** Raised twice, decided twice — do not re-raise |
| Spelling | **American everywhere.** Normalized on output by the generator, not in the scraped sources |
| Products with no sizes | **Drop the dimension column entirely** and say "Sizes on request" — not a column of dashes |

### Structural things worth not rediscovering

- **`src/data/site.ts` is the new single source of truth** for brand, domain, contact, the form
  endpoint and the PDF link. Two empty constants gate real functionality:
  `FORM_ENDPOINT` (the quote form sends) and `CONTACT` (phone/email appear everywhere at once).
  Empty is deliberate — the form says it cannot send rather than pretending.

- **`current` is no longer passed to `<Site>` for nav state.** `Header.astro` derives it from
  `Astro.url.pathname`. It was hand-passed from seven files and was wrong on 80 pages.

- **`min-width: 0` on every grid child** in `[slug].astro`. A grid item defaults to
  `min-width: auto`, so the sizes table grew its own track past the container — 24 of 79 product
  pages scrolled sideways at 375px. `.pd-grid`, `.pd-group__grid`, `.pd-thumbs` and
  `.pd-inst__grid` ALL need it; fixing only `.pd-grid` left 3 pages broken.

- **`--text-faint` was 2.16:1** and used as real reading text in 16 places. New `--n-450 #647580`
  (4.65:1). `--text-muted` moved to `--n-600` (5.97:1). Mirrored into `tokens.css`.

- **The image pipeline needs the generator run TWICE the first time** — see README. The generator
  wipes `site/public/catalogue/img`, so the WebP lives in `site/.image-cache/` and is restored
  after the copy step, then the originals are pruned from the deploy copy only.

- **Google serves VARIABLE Archivo *and* IBM Plex Sans** — all weights share one URL. Deduplicate
  font downloads on URL, not on weight, or the CSS points at files that were never written.
  IBM Plex Mono is still static, one file per weight.

- **Hero frames load in three stages**: 16 to arm the scrub, plus the last frame (the silhouette is
  read off it specifically), then the remaining ~127 on idle — and on scroll only when
  `navigator.connection` reports saveData or 2g/3g. Critical path: 3.3 MB → ~216 KB.

- **"Click to enlarge" is now graded at runtime** against `naturalWidth` vs the rendered box
  (1.25× threshold). 34 products have photos smaller than the box they are drawn in.

### Verified, not assumed

0 of 79 product pages overflow at 375px (was 24) · 87/87 unique meta descriptions · 87/87 canonical,
og and icons · 0 third-party requests · 0 broken links across 179 hrefs · 0 missing assets ·
build 28 MB → 13 MB · 0 British spellings · em-dash cells 227 → 84 (the rest are variant columns,
where a dash means "not made in that variant" and IS information).

### The trap that nearly cost time again

Measuring 79 pages by writing HTML into an iframe with `document.write` **silently lies in dev
mode** — Vite injects scoped CSS via JS modules that do not run on a written document, and every
page reported an identical +107px. Use `iframe.src` (a real navigation) or navigate the tab.

---

## 2026-09-14 — Phase 1 + 3 wired up (dormant until the accounts exist)

Everything here is built, tested and **switched off**, gated on a constant in
`site/src/data/site.ts`. Nothing loads, nothing is set, nothing is claimed until
Hassan fills the constant in.

| Constant | Empty today means | Set it and |
|---|---|---|
| `FORM_ENDPOINT` | form says it cannot send | form posts for real; CSP allows that host |
| `CONTACT` | em dashes on /support | phone/email appear on /support, footer and JSON-LD |
| `GTM_ID` | no tag, no cookie, **no banner** | Consent Mode v2 + banner + GTM, in that order |
| `CATALOGUE_PDF` | no "Catalogue" nav item | the PDF link appears in the header |

### Consent ordering is load-bearing — do not "add the banner later"
`src/components/Consent.astro` renders, in this order and in one place:
1. Consent Mode v2 defaults, **all denied**, pushed to `dataLayer`
2. a previously stored choice replayed as a `consent update`
3. **then** `gtm.js`
4. the banner, which calls `consent update` on a click and pushes a `cx_consent`
   event for GTM triggers to hang off

Verified: fresh visitor sees the banner with everything denied; Accept stores and
grants; a returning granted visitor gets the update replayed **before** GTM and no
banner; a declined visitor gets no update at all. Installing GTM first and adding a
banner afterwards means every EU visitor in between was tracked unlawfully.

**GA4 goes inside GTM, not on the page.** Installing both tags directly double-counts
every pageview — the most common setup mistake. `GA4_ID` exists only so the privacy
page can name the measurement ID.

### The privacy page reads `GTM_ID` itself
`/privacy` renders a different "Cookies and analytics" section depending on whether
analytics is configured, so it cannot describe the wrong thing. A privacy notice that
is out of date is worse than none.

### Headers are GENERATED, not hand-written
`scripts/write-headers.mjs` runs after `astro build` (chained in `site/package.json`)
and emits `dist/_headers` + `dist/_redirects` (Netlify / Cloudflare Pages) **and**
`dist/.htaccess` (Hostinger / Apache), so the same `dist/` works either place.

Generated because the CSP depends on two things that change: the form endpoint's
origin and whether GTM is on. A hand-written CSP goes stale the day either moves, and
**a stale CSP fails silently** — the browser blocks the request and shows nothing.

- `script-src` carries `'unsafe-inline'` deliberately: Astro inlines page scripts and
  GTM requires it. Everything else is locked to our own origin, so an injected
  `<script src="evil.com">` is still blocked — which is the attack this prevents.
  Tighten to hashes only if the inline scripts are ever externalised.
- **HSTS starts at `max-age=86400`, not a year.** Raise it once HTTPS is proven on
  every subdomain; browsers cache HSTS, so it is hard to undo.
- Only `/_astro/*` is content-hashed, so only it is frozen for a year. Fonts and
  images get 30 days; HTML must always revalidate or a deploy never reaches anyone.

Verified against the built site: 0 external scripts, 0 external images, 0 iframes,
0 `object`/`embed`, 0 `javascript:` hrefs, 0 `@import`, 0 `data:` URIs in CSS. The
87 external `<link>`s are `rel="canonical"`, which is not a resource load. Nothing
the CSP would block.

---

## 2026-09-14 — Home section order, and the footer cut from 407px to 153px

### Capabilities now sits above "Customize your tray"
Hassan's call. Homepage order is hero → Capabilities → Customize your tray → Proof.
Both bands use `--surface-card`, so they were already adjacent on the same white and
the swap needed no CSS. The step animation binds by selector
(`document.querySelectorAll(".tsteps")`), not by position, so it moved with the section.

### Footer: "colophon", chosen from three rounds
The old footer was **407px** — a four-column sitemap with the brand blurb, five
catalogue sections, three company links and two contact links. On an 87-page site that
is 407px of nothing, repeated 87 times.

**Round 1 was rejected, and the reason is the useful part.** Three sizes were offered
(145 / 225 / 306px) and Hassan rejected all three: *"they gave same info that is already
in header"*. He was right. Audit H-10 had moved Quality, Capabilities and Contact into
the header; the footer had never been revisited, so by then it was the header again in
a darker bar. **Height was never the real problem — duplication was.** A footer variant
is only worth drawing if it carries something the header cannot.

Round 2 offered three at A's size, built only from what the header does not have:

| | | |
|---|---|---|
| **A1 Colophon** | 153px | What is made, where, since when, how many countries. No nav. |
| A2 Catalogue index | 129px | The five `?section=` filtered views — URLs that exist nowhere else. |
| A3 Credentials | 132px | The four certification names as the closing statement. |

**Hassan chose A1** ("good for now" — so this is a floor, not a monument).

What that costs, knowingly: the five filtered-catalogue deep links are now unreachable
below the fold, and the footer contributes no internal linking. If that ever matters for
SEO, **A2 is the variant to bring back** — it was 129px, smaller than A1.

Rules the replacement keeps:
- Facts come from `src/data/site.ts`, the certification line from
  `src/data/certifications.ts`. Nothing in `Footer.astro` is hand-written, so it still
  cannot contradict the Quality page.
- Design-system §3 holds: certification **names** in the footer, mark artwork only on
  `/quality`. A3 was drawn to respect this too.
- 44px tap targets at ≤820px — now on the logo link as well, which is new: the old
  footer's logo was an image, not a link.

### Two traps this cost time on
- **Astro trims whitespace at a line break before `{`.** Writing
  `manufactured in\n{CONTACT.addressLocality}` renders "manufactured inSialkot".
  Keep the expression on the same line as the word before it. There is a comment in
  `Footer.astro` saying so.
- **Headless Chrome screenshots lie about text width.** `--headless --screenshot` did not
  load the local webfont, fell back to a wider face, and made the footer's fact line look
  like it was overflowing the right edge at 360/390px. It is not: measured in a real
  browser the paragraph is 326px inside a 326px box and `documentElement.scrollWidth`
  equals the viewport at every width. Use headless for composition, a real browser for
  anything measured.
- A third, already in the README: the **Vite dev module graph serves stale CSS**. It
  served round-1's stylesheet against round-2's markup — correct HTML, wrong CSS, no
  error. `astro dev stop && rm -rf node_modules/.vite` before believing a CSS change.

---

## 2026-09-14 — Phone menu: "M1 · sheet + blur"

Hassan: the burger panel *"doesn't look classy"*, and — asked directly — yes, blur
the page behind it. Four were drawn (sheet+blur, full-screen navy, frosted glass,
side drawer); **M1 is locked for phones.**

### What was actually wrong with the old one
Not only the looks. It was `display: none` → `display: flex`: no transition could
ever run on it, there was no backdrop, and **the page scrolled freely behind the
open panel** — the tell that a menu is a box rather than a mode.

### How it opens now
`visibility` + `opacity` + `transform`, not `display`. Two reasons, both load-bearing:
`display: none` cannot transition, and `visibility: hidden` still takes the links out
of the accessibility tree **and** the tab order — which is the whole job the old
`display: none` was doing. Rows stagger in at 40ms apart on open only; on close the
sheet leaves in one piece, which reads faster when you have changed your mind.

### The blur, and the one thing that makes or breaks it
`backdrop-filter` on an overlay — **never `filter` on the page**. Filtering an
ancestor creates a containing block for fixed descendants, which would break the
sticky header itself.

**The scrim sits at `z-index: 29`, under the header's 30, on purpose.** The first
pass covered the whole viewport and blurred the bar too: the logo went soft and the
burger — the thing you tap to close — went with it. Header sharp, everything else
blurred.

- `-webkit-backdrop-filter` is required for iOS Safari; both are set.
- A browser too old for either still gets the 34% navy dim. Clean degrade, no fallback code.
- It is GPU work across the viewport. If a cheap Android ever stutters on the open,
  the fix is to drop the blur and keep the dim, not to remove the scrim.

### Scroll lock
`position: fixed` on `<body>` with the offset stored and restored. `overflow: hidden`
on `html`/`body` does nothing on iOS Safari — this is the only approach it honours.
Restoring the offset is what stops the page jumping to the top on close.

### Kept, not broken
- **No-JS fallback intact.** Every new rule is gated on `[data-js]`, which the header
  script sets. With JavaScript off there is no burger, no scrim, no panel — the nav
  stays in the bar and all four links work, exactly as before.
- The panel carries a labelled "Request a quote" because the bar's quote button
  collapses to a bare circle under 820px. Same destination, not a second action.
- Measured after: rows 56px, CTA 50px, burger 44×44, text 16px, no horizontal scroll,
  scroll position restored exactly. Desktop is untouched — burger, scrim, chevrons and
  panel CTA are all `display: none` above 820px.

### A CSS trap worth remembering
`[data-js] .cx-header nav a` carries **two type selectors**, so `.cx-nav__cta` on its
own loses to it and the button label sat left-aligned under the inherited
`space-between`. Qualifying it as `nav a.cx-nav__cta` wins. Specificity counts types
after classes — a class alone does not beat a class plus two elements.

---

## 2026-09-15 — Product pages: one screen, the right photo first, and a catalogue drawer

Four things Hassan asked for, off four screenshots.

### 1. The whole product block fits one screen — measured, not eyeballed
**Target: 1440 × 780**, which is the window in Hassan's own screenshots. Confirmed with
him before touching anything: the hero photo had to shrink for this to be possible.

Before, **47 of 79 pages** pushed something below the fold — usually the description
and the captioned detail strip, sometimes the quote button. After, **0 of 79**; the
tallest page (`implant-cassette`) ends at 761px. Measured by loading every product page
into a 1440×780 iframe and reading the bottom of `.pd-grid`.

Where the height came from:

| lever | before | after |
| --- | --- | --- |
| `<Section pad>` on the product page | 56 | 40 |
| `.pd-grid` margin-top / gap | 28 / 56 | 20 / 48 |
| `.pd-figure` height | uncapped (up to 650px) | `min(57vh, 452px)` |
| …on a page that also has a detail strip | — | `min(45vh, 360px)` |
| spec row padding | 9px | 6px |
| sizes-panel row padding | 9px | 6px |
| detail thumbs | 4 tracks, 4:3, wraps to 2 rows | 5 tracks, fixed 76px, always 1 row |
| "Mass, load ratings…" fine print | stacked under the quote button | **beside** it |

**`vh`, not a flat pixel cap.** A 900px-tall window gets a bigger photo; the px ceiling
stops it becoming a billboard on a 27" display. Nothing is cropped — the image is still
`object-fit: contain` inside a shorter box.

**The detail strip is five tracks whatever the page carries.** Five captioned shots used
to wrap onto a second row (`wire-mesh-double-frame`), which alone cost 118px. Fixed tracks
also mean the strip costs the same on every page, so it can be budgeted against the fold.
Captions clamp to two lines.

**The fine print moved beside the quote button.** Stacked, it was the last ~30px that kept
`implant-cassette` over the line. It reads better there too.

### 2. Lead with the open box, not the lid
`scripts/build-catalogue.mjs` gained a **`promote`** option: source files listed there move
to the front of whatever list they belong to — the hero pool *and* the group blocks —
everything else keeping the catalogue's own printed order.

Used on `prf-grf-boxes` (p40), which prints all three boxes closed-lid-first:
`-02` professional, `-05` student, `-09` GRF system box. Hassan pointed at two of those;
the third is the same picture in the same position and was changed with them.

This also fixes the **catalogue card** and the `og:image` for that product, which were
showing the closed lid.

### 3. The catalogue drawer — `site/src/components/CatalogueDrawer.astro`
"if i open a product i want a slider option at left side, 3 lines — if someone clicks it
it shows the products category page." Nine sections, each opening in place to the products
inside it, so you can get from one product to another without a trip back to `/catalogue`.

- The section you are in **opens with the drawer**, and the product you are on is marked
  teal with a left bar. Otherwise you land on nine closed rows with no clue where you are.
- **Above 820px** the button is a 40×62 tab flush to the left edge, vertically centred,
  fixed — it stays put as the page scrolls. Hovering widens it to show the word "Products".
- **Below 820px** a pinned tab would sit on the photo on a 390px screen, so the same button
  becomes an inline "☰ Products" pill beside "← Catalogue". One button, two positions,
  no second copy in the markup.
- Scrim is the phone menu's recipe — `backdrop-filter` on an overlay, never `filter` on the
  page — at `z-index: 40/41`, i.e. **over** the header, because this drawer is modal and the
  reference covers the bar.
- Scroll lock is the same `position: fixed` on `<body>` with the offset restored.
- Escape closes and returns focus to the tab; Tab loops inside the panel while it is open.
- Sections collapse with `display: none`, **not** the `hidden` attribute: system.css sets
  `display` on several of these element types and a `display` rule beats `[hidden]`.
- Everything is in markup, not `createElement` — scoped styles never reach a created node.

Measured at 360/390/430/768: no horizontal scroll, rows 44px, section buttons 52px, close
44px, nothing under 12px.

### 4. Repeated photos on multi-block pages — REVIEWED and removed
The big photo at the top of a multi-block page was the first block's photo shown again:
**10 of the 11** such pages did this. Hassan reviewed the sheet and said remove.

**Not** by deleting the hero wholesale. Anything a block below already carries comes out
of the hero, and whatever is left stays — the steel-mirror page has ten shots up top and
only **one** was a repeat; the other nine exist nowhere else on the site and are still
there. Where nothing unique is left (PRF & GRF boxes, universal trays + silicon, PRF
cassettes…) the page drops to the single-column `pd-grid--intro` the instrument sets
already use, and the blocks carry every photo.

Verified across all 79: zero heroes repeat a block photo.

---

## 2026-09-15 (later) — data corrections, the sizes panel, and the product-page footer

### Nothing had been pushed
Hassan was checking the live Vercel site and seeing none of the above, because every change
was sitting uncommitted on the Mac. **Vercel builds from `origin/main`; local edits are
invisible to it.** Commit and push, every time, or the work does not exist as far as he is
concerned.

### "Sizes 40" was counting article numbers
A perforated tray is **20 sizes in two corner patterns**, not 40 sizes. A light pattern
cassette is **4 sizes in four lock types**, not 18. **34 of 79 products** overstated it.

The panel header now counts distinct measurements and names the article-number total
beside it — `Sizes 20 · 40 article numbers`. The expander does the same: "Show all 16
sizes" became "Show all 16 article numbers" wherever the row count is not the size count.

### Light Pattern Cassettes — two article numbers deleted
Hassan: "there are only four sizes 5, 7, 10, 20 — these are the only sizes available."
`CXCL-1108` (08 + accessory area) and `CXCL-1116` (16 + accessory area) are printed on
p46 but not made. The generator gained a **`drop`** option; they are gone from the site
and the generator reports them under NOT SHOWN, so they are not silently lost.

### The sizes panel opens fully — no scrollbox
Two rules capped each sub-table at 176px with its own scrollbar, so the Tray list and the
Lid list ran into each other and you scrolled two boxes inside one panel. Both rules are
gone: expanded means the whole list, one vertical run. The sub-headings ("Tray",
"Lid (optional)") are now banded on `--surface-sunken` with a hairline under them, so it
is obvious where one list ends. Every row is **numbered down the left** (`.pd-idx`), the
header cell labelled for screen readers only.

### PRF Surgical Set — the card was one instrument
`fam.image` was a single elevator, so the card and the share image made a seven-piece set
look like one tool. Composed from the seven printed shots — alpha flattened onto white,
white margins trimmed, all scaled to one height, 34px apart —
`images/p42/p42-prf-surgical-set-all-791x680.png` (+ a WebP in `site/.image-cache`), set as
that product's `hero`. The per-instrument blocks on the page are untouched.

### Perforated Trays — Square Pattern
Hero swapped to `-02`; the old comment said "page 8 prints the chamfer variant first, lead
with the round-corner tray", but Hassan pointed at the second shot and asked for that one.

### Product pages end on related products, not the footer
`Site.astro` gained a `footer` prop (default `true`); `[slug].astro` passes `footer={false}`
and renders `components/RelatedProducts.astro` instead. **Hassan chose full removal** — no
contact/privacy/copyright bar on the 79 product pages — when offered a slim footer under
the strip.

Related = the other products in the same printed section, which is the relationship the
catalogue itself asserts. A thin section is topped up from the neighbouring sections in
printed order rather than showing two cards and a lot of white. Eight cards, 4 / 3 / 2
across at 1020 / 820px, sunken band so it reads as the end of the page.

### Re-verified after all of it
All 79 product pages still fit 1440×780 (tallest 761px), no hero repeats a block photo,
no empty photo frames, slider dots match photo counts, the drawer is on every page.
