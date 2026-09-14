# Candelx Design System

Converted from `CandelxDesignSystem.json` (source of truth for all tokens below). Every value here is carried over unchanged — this file adds no new tokens, only Markdown structure and, at the end, the catalog layout/data rules.

---

## Brand

### Clear space & minimum size

- **Clear space rule:** Clear space on all four sides equals the cap height of the C in the wordmark.
- **Clear space example:** reference mark height `52px` → clear space `26px`.
- **Minimum size:** digital minimum height `22px`.
- **Note:** No standalone X mark exists — the X overlaps the L in the supplied artwork. Use the full lockup, or set "Candelx" in Archivo 800 where a mark alone is needed.

### Reverse lockup

| Field | Value |
|---|---|
| Usage | White wordmark on navy 700 — dark sections only |
| Asset | `assets/logo-candelx-reverse.png` |
| Background color | `--navy-700` / `#003249` |
| Mark color | `#ffffff` |
| Example render height | 78px |
| Container height | 138px |
| Container padding | `0 28` |

### Primary lockup

| Field | Value |
|---|---|
| Usage | Full-colour wordmark on white — the default |
| Asset | `assets/logo-candelx.png` |
| Background color | `#ffffff` |
| Wordmark color | `#007ea7` — brand teal — applies to CANDEL + "Surgicals" |
| Mark color | `#003249` — brand navy — applies to the X |
| Example render height | 78px |
| Container height | 138px |
| Container padding-left | 6px |

---

## Colors

### Brand core

| Token | Hex | Name | Usage |
|---|---|---|---|
| `--brand-teal` | `#007ea7` | Brand teal | CANDEL wordmark + "Surgicals" |
| `--brand-navy` | `#003249` | Brand navy | the X |
| `--white` | `#ffffff` | White | dominant background |

### Teal ramp

| Token | Hex | Note |
|---|---|---|
| `--teal-50` | `#f1f8fa` | |
| `--teal-100` | `#daecf2` | |
| `--teal-200` | `#cbe5ed` | |
| `--teal-300` | `#9bcfde` | |
| `--teal-400` | `#5dadc7` | |
| `--teal-500` | `#2c94b6` | |
| `--teal-600` | `#007ea7` | equals `--brand-teal` |
| `--teal-700` | `#006485` | |
| `--teal-800` | `#004b64` | |
| `--teal-900` | `#003249` | equals `--brand-navy` |

### Navy ramp

| Token | Hex | Note |
|---|---|---|
| `--navy-500` | `#0a4f6e` | |
| `--navy-600` | `#00415d` | |
| `--navy-700` | `#003249` | equals `--brand-navy` |
| `--navy-800` | `#002536` | |
| `--navy-900` | `#001923` | |

### Neutrals

| Token | Hex |
|---|---|
| `--white` | `#ffffff` |
| `--n-25` | `#fbfcfd` |
| `--n-50` | `#f6f8f9` |
| `--n-100` | `#eef1f3` |
| `--n-200` | `#e2e7ea` |
| `--n-300` | `#ccd4d9` |
| `--n-400` | `#a3b0b8` |
| `--n-500` | `#78878f` |
| `--n-600` | `#55646c` |
| `--n-700` | `#3a474e` |
| `--n-800` | `#232d33` |
| `--n-900` | `#121a1f` |

### Semantic status

| State | Foreground token | Foreground hex | Surface token | Surface hex |
|---|---|---|---|---|
| ok | `--status-ok` | `#1f7a5c` | `--status-ok-surface` | `#eef6f2` |
| warn | `--status-warn` | `#8a6320` | `--status-warn-surface` | `#faf4e8` |
| alert | `--status-alert` | `#9a3535` | `--status-alert-surface` | `#faf0f0` |
| info | `--status-info` | `#006485` | `--status-info-surface` | `#f1f8fa` |

### Surface aliases

| Token | Maps to | Hex |
|---|---|---|
| `--surface-page` | `--n-25` | `#fbfcfd` |
| `--surface-card` | `--white` | `#ffffff` |
| `--surface-sunken` | `--n-50` | `#f6f8f9` |
| `--surface-subtle` | `--n-100` | `#eef1f3` |
| `--surface-accent` | `--teal-50` | `#f1f8fa` |
| `--surface-inverse` | `--navy-700` | `#003249` |
| `--surface-inverse-deep` | `--navy-900` | `#001923` |

### Text aliases

| Token | Maps to | Hex |
|---|---|---|
| `--text-strong` | `--navy-700` | `#003249` |
| `--text-body` | `--n-700` | `#3a474e` |
| `--text-muted` | `--n-500` | `#78878f` |
| `--text-faint` | `--n-400` | `#a3b0b8` |
| `--text-invert` | `--white` | `#ffffff` |
| `--text-accent` | `--brand-teal` | `#007ea7` |
| `--text-link` | `--teal-700` | `#006485` |
| `--text-link-hover` | `--navy-700` | `#003249` |

### Border aliases

| Token | Maps to / Value | Hex |
|---|---|---|
| `--border-hairline` | `--n-200` | `#e2e7ea` |
| `--border-default` | `--n-300` | `#ccd4d9` |
| `--border-strong` | `--n-400` | `#a3b0b8` |
| `--border-accent` | `--brand-teal` | `#007ea7` |
| `--border-inverse` | — | `rgba(255,255,255,.16)` |

### Action aliases

| Token | Maps to / Value | Hex |
|---|---|---|
| `--action-primary` | `--brand-teal` | `#007ea7` |
| `--action-primary-hover` | `--teal-700` | `#006485` |
| `--action-primary-press` | `--teal-800` | `#004b64` |
| `--action-secondary` | `--navy-700` | `#003249` |
| `--action-secondary-hover` | `--navy-800` | `#002536` |
| `--focus-ring` | — | `rgba(0,126,167,.38)` |

---

## Elevation

### Shadow ladder

| Token | Value |
|---|---|
| `--shadow-0` | `none` |
| `--shadow-1` | `0 1px 2px rgba(0,50,73,.06),0 0 0 1px rgba(0,50,73,.05)` |
| `--shadow-2` | `0 2px 6px rgba(0,50,73,.07),0 0 0 1px rgba(0,50,73,.04)` |
| `--shadow-3` | `0 6px 18px rgba(0,50,73,.09),0 1px 2px rgba(0,50,73,.05)` |
| `--shadow-4` | `0 16px 40px rgba(0,50,73,.12),0 2px 6px rgba(0,50,73,.05)` |
| `--shadow-inset` | `inset 0 1px 0 rgba(0,50,73,.05)` |
| `--shadow-focus` | `0 0 0 3px var(--focus-ring)` → resolves to `0 0 0 3px rgba(0,126,167,.38)` |

### Motion

**Durations**

| Token | Value | Usage |
|---|---|---|
| `--dur-1` | 110ms | control colour |
| `--dur-2` | 180ms | fades, focus ring |
| `--dur-3` | 260ms | card lift, panels |
| `--dur-4` | 420ms | full-panel reveal |

**Easings**

| Token | Value |
|---|---|
| `--ease-standard` | `cubic-bezier(.2,.6,.25,1)` |
| `--ease-out` | `cubic-bezier(.16,1,.3,1)` |
| `--ease-in` | `cubic-bezier(.6,0,.9,.4)` |

**Composite transitions**

- `--transition-control`: `background-color var(--dur-1) var(--ease-standard),color var(--dur-1) var(--ease-standard),border-color var(--dur-1) var(--ease-standard),box-shadow var(--dur-2) var(--ease-standard)`
  Resolved: `background-color 110ms cubic-bezier(.2,.6,.25,1),color 110ms cubic-bezier(.2,.6,.25,1),border-color 110ms cubic-bezier(.2,.6,.25,1),box-shadow 180ms cubic-bezier(.2,.6,.25,1)`

---

## Portal

There is no "Portal" tokens section in this design system — Portal (Distributor portal) is one of the two UI kits (`ui_kits/portal/`), which is a full click-through screen composition consuming the tokens/components above, not a distinct token set. It introduces no colors, type, or spacing values beyond what is listed in this file.

Structural specs used in that kit:
- Sidebar width: `248px`
- Sidebar background: `--surface-inverse`
- Active nav item inset marker: `inset 3px 0 0 var(--brand-teal)`
- Top bar height: `64px`
- Top bar background: `--surface-card` with 1px `--border-hairline` bottom border

---

## Spacing

### Borders & rules

**Widths**

| Token | Value | Usage |
|---|---|---|
| `--bw-hair` | 1px | |
| `--bw-thick` | 2px | |
| `--rule-accent-width` | 3px | teal accent rule — top edge on featured cards, left edge on toasts |

**Colors**

| Token | Hex / Value |
|---|---|
| `--border-hairline` | `#e2e7ea` |
| `--border-default` | `#ccd4d9` |
| `--border-strong` | `#a3b0b8` |
| `--border-accent` | `#007ea7` |
| `--border-inverse` | `rgba(255,255,255,.16)` |

### Layout widths

| Token | Value | Usage |
|---|---|---|
| `--container-max` | 1200px | max page container width |
| `--container-narrow` | 720px | prose measure |
| `--gutter` | 32px | container side padding |
| `--field-h` | 44px | default form field height |
| `--field-h-sm` | 36px | small form field height |
| `--field-h-lg` | 52px | large form field height |

### Corner radii

| Token | Value | Usage |
|---|---|---|
| `--r-0` | 0px | full-bleed panels, rules |
| `--r-1` | 2px | tags, checkboxes, switch |
| `--r-2` | 3px | cards & controls (default) |
| `--r-3` | 4px | rare, large surfaces |
| `--r-4` | 6px | |
| `--r-pill` | 999px | dots only — never buttons |
| `--radius-card` | `var(--r-2)` → 3px | |
| `--radius-control` | `var(--r-2)` → 3px | |
| `--radius-tag` | `var(--r-1)` → 2px | |

### Section rhythm

| Token | Value | Usage |
|---|---|---|
| `--space-section` | 96px | default vertical space between sections |
| `--space-section-lg` | 128px | large section rhythm |
| `--space-block` | 32px | vertical space between blocks within a section |

### Spacing scale

| Token | Value |
|---|---|
| `--s-1` | 4px |
| `--s-2` | 8px |
| `--s-3` | 12px |
| `--s-4` | 16px |
| `--s-5` | 20px |
| `--s-6` | 24px |
| `--s-8` | 32px |
| `--s-10` | 40px |
| `--s-12` | 48px |
| `--s-16` | 64px |
| `--s-20` | 80px |
| `--s-24` | 96px |
| `--s-32` | 128px |

---

## Type

### Families

| Token | Family | Weights available | Fallback stack | Usage | Source |
|---|---|---|---|---|---|
| `--font-display` | Archivo | 400, 500, 600, 700, 800 | `"Archivo", "Helvetica Neue", Arial, sans-serif` | display and headings | Google Fonts (substitution — no vendor font files supplied) |
| `--font-sans` | IBM Plex Sans | 400, 500, 600 | `"IBM Plex Sans", "Helvetica Neue", Arial, sans-serif` | body, labels, UI | |
| `--font-mono` | IBM Plex Mono | 400, 500 | `"IBM Plex Mono", ui-monospace, monospace` | catalogue numbers, dimensions, cycle data | |

### Font weight tokens

| Token | Value |
|---|---|
| `--fw-regular` | 400 |
| `--fw-medium` | 500 |
| `--fw-semibold` | 600 |
| `--fw-bold` | 700 |
| `--fw-black` | 800 |

### Letter spacing tokens

| Token | Value |
|---|---|
| `--ls-tight` | -.02em |
| `--ls-normal` | 0 |
| `--ls-wide` | .06em |
| `--ls-label` | .18em |

### Display scale

| Step | Size | Line height | Letter spacing |
|---|---|---|---|
| display-1 | `--t-display-1-size` 64px | `--t-display-1-lh` 1.02 | `--t-display-1-ls` -.028em |
| display-2 | `--t-display-2-size` 48px | `--t-display-2-lh` 1.06 | `--t-display-2-ls` -.024em |
| display-3 | `--t-display-3-size` 36px | `--t-display-3-lh` 1.12 | `--t-display-3-ls` -.02em |
| h1 | `--t-h1-size` 28px | `--t-h1-lh` 1.2 | `--t-h1-ls` -.016em |
| h2 | `--t-h2-size` 22px | `--t-h2-lh` 1.28 | `--t-h2-ls` -.012em |
| h3 | `--t-h3-size` 18px | `--t-h3-lh` 1.36 | `--t-h3-ls` -.008em |

### Body scale

| Step | Size | Line height | Letter spacing |
|---|---|---|---|
| body-lg | `--t-body-lg-size` 18px | `--t-body-lg-lh` 1.62 | — |
| body | `--t-body-size` 15px | `--t-body-lh` 1.65 | — |
| body-sm | `--t-body-sm-size` 13px | `--t-body-sm-lh` 1.55 | — |
| label | `--t-label-size` 11px | `--t-label-lh` 1.2 | `--t-label-ls` .18em |
| label-lg | `--t-label-lg-size` 13px | `--t-label-lg-lh` 1.2 | `--t-label-lg-ls` .14em |
| mono | `--t-mono-size` 13px | `--t-mono-lh` 1.5 | `--t-mono-ls` .01em |

---

# Layout & Data Rules

Rules for rebuilding the 86-page SteriTrays catalog (`catalog-data.json`, 2022, 311+ SKUs across `sections[]` → `divider_pages` / `key_features` / `product_pages[].skus[]`) on this design system. These rules govern page generation; no pages are generated yet.

## Section 1: Page Archetypes

| Archetype | Description | Required `catalog-data.json` fields |
|---|---|---|
| **Section Divider** | A colour-block page carrying only the section (and sometimes sub-category) title — no product data. E.g. p6 "General Sterilization Trays", p18 "Micro Mesh Trays / Super fine Mesh Trays / Ultra fine Mesh Trays". | `sections[].divider_pages[].page`, `.title` |
| **Key Features** | A bullet-list page of manufacturing/spec claims for the section ahead, sometimes spanning two consecutive pages (e.g. p7 then continuing on p11 for a sub-category). No SKU table. | `sections[].key_features[].page`, `.bullets[]` |
| **Single-Product Grid** | One product family, one table. `product_pages[]` entry with exactly **one** `art_prefix` in `art_prefixes_on_page`. | `product_pages[].page`, `.headings[]`, `.specs`, `.skus[]`, `.notes[]` |
| **Dual-Variant Product Grid** | Two named variants of the same product (e.g. p8 "Round Corner" vs "Chamfer Corner") sharing one page, distinguished by heading labels and (usually) two `art_prefixes_on_page`, but printed as one continuous SKU list. | `product_pages[].headings[]` (to split by variant label), `.art_prefixes_on_page`, `.skus[].art_prefix` |
| **Multi-Product Catalog Grid** | Several small, unrelated items on one page — **3 or more** distinct `art_prefixes_on_page`. E.g. p76/77 Hollow Wares (5–6 prefixes each), p51 Cassette Trays (4 prefixes). | `product_pages[].art_prefixes_on_page`, `.skus[]` grouped by `art_prefix` |
| **Technical Diagram Page** | Dimensioned line-drawing page with no photographic image — source PDF has no image XObject on these pages (per `EXTRACTION-RULES.md` §1: p72–74 mirrors, p81–83 silicone). Renders from vector/diagram artwork, not `image-manifest.json`. | `product_pages[].page`, `.headings[]`, `.specs`, `.skus[]`; **absence** of a matching entry in `image-manifest.json` for that page confirms diagram-only |
| **Quote/Inspirational Page** | Large pull-quote, no product data, no SKU table. E.g. p79 "THERE IS NO POWER FOR CHANGE, GREATER THAN A COMMUNITY DISCOVERING WHAT IT CARES ABOUT". Identified by `sku_count: 0` and `headings[]` reading as prose rather than labels. | `product_pages[].page`, `.headings[]` (as quote text), `.sku_count == 0` |
| **Compliance Page** | Certification badges only. E.g. p85 "Compliance..!". No SKU table, no product photos. | `front_matter`/`back_matter` entry for that page (`.text`) — badge artwork is supplied separately, not present as structured data in `catalog-data.json` |
| **CEO/Intro Page** | Founder photo + bio copy. E.g. p2 "Haleem A.Malik (CEO)" letter. | `front_matter[].page`, `.text` |
| **Back Cover** | Contact details + full-bleed brand graphic. E.g. p86. | `contact.tel[]`, `.email[]`, `.website[]`, `.address`; also mirrored in `back_matter[].text` |

## Section 2: Conditional Layout Rules

**Single vs. dual-table layout**
- IF a `product_pages[]` entry's `art_prefixes_on_page` contains **exactly 1** prefix → render **Single-Product Grid** (one table).
- IF it contains **exactly 2** prefixes AND the two prefixes correspond to two named variant labels in `headings[]` (e.g. "Round Corner" / "Chamfer Corner", "Single Frame" / "Double Frame Protection") → render **Dual-Variant Product Grid**: split `skus[]` by `art_prefix` into two side-by-side tables, one heading label per table.
- IF it contains **3 or more** prefixes → render **Multi-Product Catalog Grid**: group `skus[]` by `art_prefix`, one small table per prefix, laid out in a grid rather than side-by-side pairs.

**Callout/feature thumbnail count**
- Minimum **1**, maximum **4** feature thumbnails per product page.
- Count = number of distinguishing construction/feature labels present in `product_pages[].headings[]` for that product (e.g. "Easy locking System", "Handles", "Round Corner", "Chamfer Corner" each count as one), capped at 4. IF more than 4 such labels are present, show the 4 most specific (variant/corner/lock-style labels take priority over generic marketing lines already covered by the section's Key Features page) and fold the rest into table notes.
- IF zero distinguishing labels are present beyond the product name itself → show 1 thumbnail (the product photo only, no callouts).

**Optional-accessory sub-block ("LIDs (optional)" style)**
- Trigger: `product_pages[].headings[]` contains a label matching the pattern `"<Item> (optional)"` (e.g. "LIDs (optional)") **AND** there is a distinct `art_prefix` in `skus[]` whose rows have `H: null` (no height — accessory items are flat) while the page's main product rows have `H` populated.
- IF triggered → render a light-surface (`--surface-subtle` / `--n-100`) strip below the main table, titled with the matched label, containing its own mini-table for just that accessory `art_prefix`'s SKUs.
- IF not triggered → no accessory strip; all SKUs on the page render in the main table(s) only.

**Table columns by product type**
- IF SKU rows have `L`, `W`, and `H` all non-null → columns: `Art. No. | L | W | H` (mm).
- IF SKU rows have `L` and `W` non-null but `H` is null (accessory/lid items, e.g. SWL rows) → columns: `Art. No. | L | W` only — omit the H column entirely, do not show it blank.
- IF a page's `specs` includes a `lid` value on individual SKUs (`sku.lid` = "Yes"/"No", as on p20) → columns: `Art. No. | L | W | H | Lid`.
- IF `size_text` is non-null for a row (printed size didn't parse to clean L×W×H, e.g. imperial/capacity sizes) → columns: `Art. No. | Size` for that row, with `size_text` verbatim in place of L/W/H, and a footnote referencing `sku.note` if present.
- IF `needs_review: true` on a row → render normally but flag the row (small marker) for manual verification before final print — do not alter the value.

## Section 3: Compliance & Certification Placement

Certification/compliance badges (ISO, CE, FDA, etc.) appear **only** on the one dedicated Compliance page (p85-equivalent) — **never** on individual product pages, even where compliance-adjacent data exists in a product's fields (material/ASTM grade, etc.). Material/grade specs (e.g. "304 (ASTM)", "316 (ASTM)") stay in the product table's spec line; they are not compliance badges and are not moved.

## Section 4: Missing Data Handling

- Any missing text/spec field renders as an em dash (**—**) in its table cell — never left as blank whitespace and never an omitted row. Applies to any `null` value in `skus[]` (e.g. `size_text: null`, `note: null`) that would otherwise occupy a shown column.
- Any missing/unmapped image renders as a labeled placeholder box reading **"IMAGE MISSING: [product code]"** (using the page's `art_no` or, for diagram-only pages, the `art_prefix`) rather than being silently skipped. Cross-check against `image-manifest.json`: any product page with SKUs but no corresponding kept entry (`role`/`out_*`) in the manifest, and not already classified as a Technical Diagram Page, triggers this placeholder.

## Section 5: Branding Lock

All pages must use the current Candelx logo/branding as defined in the locked header/footer file (Primary lockup / Reverse lockup, per **Brand** above). Original source branding — any SteriTrays/Yarsons watermark, logo, or maker's mark visible inside extracted product images (`images/`) or printed in source text (`meta.company`, `contact.*`, `back_matter`) — must never be reintroduced or referenced, even incidentally (including inside cropped photos, diagram captions, or footer contact details).

## Section 6: Marketing Copy Policy

Descriptive/marketing paragraphs beyond what exists in the source PDF are **not allowed** on product pages. Product pages render only fields present in `catalog-data.json` — `headings[]`, `specs`, `skus[]`, `notes[]` — verbatim or table-formatted. No invented copy, no rephrased benefit statements, no added claims. (Section-level Key Features pages are the one place bullet-style claims appear, and those bullets already exist verbatim in `sections[].key_features[].bullets[]` — they are not new copy.)
