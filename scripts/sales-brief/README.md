# Sales-brief generators

Two PDFs, both for Hassan's own use. Neither is published on the website.

| Command | Output | What it is |
| --- | --- | --- |
| `node scripts/sales-brief/build.mjs` | `CandelX-Product-Knowledge-Brief.pdf` (~39pp) | **The range.** Every product with a photograph, the questions distributors / clinics / CSSD each ask, objection handling, and a worksheet of everything nobody at the factory has answered yet. |
| `node scripts/sales-brief/build-technical.mjs` | `CandelX-Technical-Knowledge.pdf` (~19pp) | **The knowledge.** No article numbers, no product photos. Steel, silicone, sterilization, washing, corrosion, standards, compatibility numbers — with diagrams. For exhibitions and technical buyers. |

Content lives apart from layout so either can be edited without touching the other:

- `content.mjs` — the sales brief's written half
- `technical.mjs` — the technical book's written half, plus its source list

## Rules for editing

**The product brief tags every statement** as `fact` (traceable to `site/src/data/catalogue.ts`),
`bg` (general industry background) or `check` (do not say it until the factory confirms). Keep to
those three — being able to tell them apart mid-call is the whole point of the document.

**The technical book cites a source for every number.** `SOURCES` at the bottom of `technical.mjs`
is printed in the PDF. If you change a number, change its source with it.

## How the PDFs are made

Headless Chrome (`--print-to-pdf`). There is no Homebrew, wkhtmltopdf, weasyprint or reportlab on
this Mac, and Chrome is the only thing here that renders CSS print layout properly.

`build.mjs` downscales the catalogue photos to 420px through Pillow before embedding them —
at full web resolution the PDF came out at 30 MB, which is not emailable.

Both PDFs are gitignored (`*.pdf` in the repo root `.gitignore`). Regenerate rather than commit.
`KEEP_HTML=1` keeps the intermediate HTML next to the script for debugging a layout change.
