## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Before calling anything done, build it — `npx astro build` — and check the built output, not
just the dev server. The build is what ships.

Anything placed in `public/` **is published**, including scratch and review files. Delete
throwaway harnesses once their decision is made; check `dist/` afterwards to confirm they are
gone.

## Catalogue data — GENERATED, never hand-edit

`src/data/catalogue.ts` is written by `../scripts/build-catalogue.mjs`. Editing it directly is lost
on the next run.

```
catalogue/page-html/*.html          ─┐
research/chaplet/data/split-proposal.json ─→ scripts/apply_split.py ─→ catalogue/extras/extras.json ─┤
                                     └→ node scripts/build-catalogue.mjs → src/data/catalogue.ts
```

- Correct a printed product → the `PRODUCTS` table in `scripts/build-catalogue.mjs`.
- Correct a Chaplet-derived product (name, description, specs, grouping) → `split-proposal.json`,
  then re-run `apply_split.py` and the generator.
- `research/chaplet/scripts/make_extras.py` is **superseded** — running it undoes the product split.

## Styles

`src/styles/system.css` is the only stylesheet the site loads (`layouts/Site.astro` imports it).
`src/styles/tokens.css` is a reference copy and is **not imported** — a token added only there
silently does nothing. Add to system.css, mirror into tokens.css.

### Mobile

The site-wide mobile breakpoint is **820px**, in the block near the bottom of `system.css`.
Page-specific mobile rules live in that page's own scoped `<style>`, not in system.css.
Four rules every change must keep (they are all measured, not preferences):

- nothing scrolls sideways, at 360 / 390 / 430 / 768px
- every tap target is at least **44px**
- no visible text below **12px**
- every `input` / `select` / `textarea` is at least **16px**, or iOS zooms the whole page on focus

Two traps that have already cost time:

- **Scoped CSS never reaches elements built in JavaScript.** `document.createElement` produces
  no `data-astro-cid-*` attribute, so a page's scoped rules silently skip it. Render such
  elements in markup (see the hero callouts in `pages/index.astro`), or the styles vanish with
  no error.
- **Inline `style="font-size:…"` outranks every media query.** Two home-page stat labels were
  stuck at 11px on phones for exactly this reason. Use a class.

## Hero

`pages/index.astro` holds a pinned scroll-explode hero driven by 144 WebP frames in
`public/hero/`. The frames are a pure-white ground plus `mix-blend-mode: multiply`, so white
reads as transparent with no second mask file. Tunables are the `--hero-*` custom properties at
the top of the hero CSS block; `--hero-travel: 0` below 820px holds the tray still so a phone
goes straight into the explode. Part labels are positioned from the artwork's real silhouette,
measured once off the last frame — do not replace that with a fixed offset.
Regenerate frames with `../scripts/hero-frames/`. Rationale for every setting is in
`../DESIGN-DECISIONS.md`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
