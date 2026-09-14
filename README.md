# CandelX Website — working folder

Marketing + catalogue site for CandelX Surgicals (sterilization trays and surgical instruments).
Brochure and enquiry only — no e-commerce.

**Last updated 2026-09-14.** Full decision history: **[`DESIGN-DECISIONS.md`](DESIGN-DECISIONS.md)**.

---

## Run it

```bash
cd ~/Documents/Website/site && npx astro dev --background
```

→ http://localhost:4321 · manage with `npx astro dev status` / `stop` / `logs`.

> If a CSS or data change doesn't show, the dev server is serving a stale module graph —
> `npx astro dev stop && npx astro dev --background`. Check uptime with `status` first.

Production build: `cd site && npm run build` → `site/dist/` (**87 pages, 13 MB**).

---

## Current state

**Built and live locally:** header, home hero, "Customize your tray" scroll section, the full
catalogue (**79 products · 598 article numbers · 9 sections**), product detail pages, quote form,
and the Capabilities / Quality / Support pages.

| | |
|---|---|
| Products | **79** — 47 from the printed catalogue, 32 derived from competitor research |
| Descriptions | **79 / 79**, 14–26 words each |
| Photography | 47 real · **32 Chaplet reference images, shipping as-is by Hassan's decision** (`LOW-QUALITY-IMAGES.md`) |
| Dimensions | 32 products publish none. Their size column is now **dropped**, not filled with dashes — the page says "Sizes on request" instead. Never invent one. |

---

## The catalogue is GENERATED — never hand-edit `site/src/data/catalogue.ts`

```
catalogue/page-html/*.html ──────────────────────────┐
catalogue/summaries.json  (all product copy) ────────┤
research/chaplet/data/split-proposal.json            │
        └→ scripts/apply_split.py                    │
              └→ catalogue/extras/extras.json ───────┤
                                                     └→ node scripts/build-catalogue.mjs
                                                          └→ site/src/data/catalogue.ts
```

| To change | Edit | Then |
|---|---|---|
| A product description | `catalogue/summaries.json` | `node scripts/build-catalogue.mjs` |
| A printed product (name, grouping, photos) | the `PRODUCTS` table in `scripts/build-catalogue.mjs` | same |
| A competitor-derived product | `research/chaplet/data/split-proposal.json` | `python3 research/chaplet/scripts/apply_split.py`, then the generator |

Re-running the pipeline from source reproduces `catalogue.ts` byte for byte.

⚠️ `research/chaplet/scripts/make_extras.py` is **superseded** — running it undoes the product split.

---

## Design system

Tokens live in **`site/src/styles/system.css`** `:root` — the **only** stylesheet the site loads.
`site/src/styles/tokens.css` is a reference copy and is **not imported**; a token added only there
silently does nothing.

Locked-in choices (all recorded in `DESIGN-DECISIONS.md`):

- **American spelling throughout** (Hassan, 2026-09-14). The printed catalogue and the scraped
  `page-html` keep their British forms — they are the record of what is printed — and
  `build-catalogue.mjs` normalizes on the way out, so a re-scrape can't reintroduce a mix.
- **Product pages are pure white**; every other page is `--surface-page` `#fbfcfd`.
- **A photo area always matches the color of whatever contains it** — the product photos carry
  their own white, so any tint draws a visible box around them.
- **`--border-photo: var(--teal-200)` `#cbe5ed`** — the 1px line around all product photography.
  Change the line once, there.
- **Sizes panel**: beside the photo, 3 rows, "Show all N", scrolls inside a fixed height when open.
- **Quote button** stays at the bottom of the right column; it clears an 800px fold on 77 of 79 pages.

---

## Folders

| Folder | Contents |
|---|---|
| `site/` | The Astro app — the deploy target |
| `brand/` | Design system source, logos, header/footer masters |
| `catalogue/` | The PDF, per-page HTML, extracted data, `summaries.json`, `extras/` |
| `images/` | Product photography `p01`–`p85`, category heroes, dividers |
| `scripts/` | `build-catalogue.mjs` (catalogue), `optimise-images.py` (WebP), `fetch-fonts.py` (webfonts) |
| `research/chaplet/` | Competitor research + the split pipeline. See its `PROVENANCE.md` |
| `research/_labs-archive/` | Decision labs and retired pages, kept out of the site so they never upload |

---

## The image pipeline (added 2026-09-14)

Catalogue photos ship as WebP — 19.3 MB of PNG/JPEG became 5.8 MB, and the whole
build went 28 MB → 13 MB.

```bash
node    scripts/build-catalogue.mjs   # copies the masters into site/public
python3 scripts/optimise-images.py    # fills site/.image-cache with .webp
node    scripts/build-catalogue.mjs   # emits .webp paths, prunes the originals
```

The cache persists, so after that first pass one generator run is enough.
Replaced a master photo? `python3 scripts/optimise-images.py --force`.
**The masters in `images/` are never touched** — only the deploy copy is pruned.

Fonts are self-hosted in `site/public/fonts`; regenerate with
`python3 scripts/fetch-fonts.py`. The site now loads **nothing** from a third party.

---

## Still open

**Two constants in `site/src/data/site.ts` unblock everything else:**

| Constant | What it turns on |
|---|---|
| `FORM_ENDPOINT` | The quote form actually sends. Empty = it says so honestly instead of pretending. |
| `CONTACT` | Phone, email and address appear on /support, in the footer and in the structured data. |

- **Quote form backend** — set `FORM_ENDPOINT`. Netlify Forms, Formspree, Web3Forms, or a PHP
  handler on Hostinger; the form posts a normal `FormData`, so anything works.
- **Photography** — 32 products still use the Chaplet reference images. **Hassan decided on
  2026-09-14 to ship them as they are**; see `research/chaplet/PROVENANCE.md` for what they are
  and the exposure that carries. 34 of the real photos are also under 340×250 — those no longer
  offer "click to enlarge", since enlarging them showed nothing more.
- **Dimensions** for the 43 new article numbers.
- Certificate PDFs for the Quality page — drop the path into `document` in `src/data/certifications.ts`
  and the card becomes a link on its own. Hassan holds all four; scans to follow.
