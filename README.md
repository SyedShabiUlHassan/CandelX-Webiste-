# CandelX Website — working folder

Marketing + catalogue site for CandelX Surgicals (sterilisation trays and surgical instruments).
Brochure and enquiry only — no e-commerce.

**Last updated 2026-09-12.** Full decision history: **[`DESIGN-DECISIONS.md`](DESIGN-DECISIONS.md)**.

---

## Run it

```bash
cd ~/Documents/Website/site && npx astro dev --background
```

→ http://localhost:4321 · manage with `npx astro dev status` / `stop` / `logs`.

> If a CSS or data change doesn't show, the dev server is serving a stale module graph —
> `npx astro dev stop && npx astro dev --background`. Check uptime with `status` first.

Production build: `cd site && npm run build` → `site/dist/` (86 pages).

---

## Current state

**Built and live locally:** header, home hero, "Customize your tray" scroll section, the full
catalogue (**79 products · 598 article numbers · 9 sections**), product detail pages, quote form,
and the Capabilities / Quality / Support pages.

| | |
|---|---|
| Products | **79** — 47 from the printed catalogue, 32 derived from competitor research |
| Descriptions | **79 / 79**, 14–26 words each |
| Photography | 47 real · **32 on placeholder photos that must be reshot** (see `LOW-QUALITY-IMAGES.md`) |
| Dimensions | present for the 47 printed products; **the 32 new ones have none — never invent them** |

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

- **Product pages are pure white**; every other page is `--surface-page` `#fbfcfd`.
- **A photo area always matches the colour of whatever contains it** — the product photos carry
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
| `scripts/` | `build-catalogue.mjs` — the catalogue generator |
| `research/chaplet/` | Competitor research + the split pipeline. See its `PROVENANCE.md` |
| `research/_labs-archive/` | Decision labs and retired pages, kept out of the site so they never upload |

---

## Still open

- **Quote form backend** — `/quote` collects everything but cannot send. Wiring it to Hostinger
  (or any form service) is the last functional gap; see `DESIGN-DECISIONS.md`.
- **Photography** — 32 products are on competitor reference images. **They must never ship on
  candelx.com** (`research/chaplet/PROVENANCE.md`); 34 of the real photos are also under 340×250.
- **Dimensions** for the 43 new article numbers.
- Certificate PDFs for the Quality page, and a telephone + email for Support (currently `—`).
- Mobile nav hamburger (below 680px the nav is hidden), real quote-form backend, self-hosted fonts.
- `site/src/pages/audit.astro` is an internal review sheet — delete once signed off.
