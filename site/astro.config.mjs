// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  /* THE ONE PLACE THE DOMAIN IS WRITTEN.
     Canonical tags, og:url, the sitemap and the JSON-LD all read this via
     Astro.site. Hassan, 2026-09-14: candelxsurgicals.com is final.

     Non-www is the canonical host. Once hosting is live, add a permanent 301
     from www.candelxsurgicals.com to this one (and from http:// to https://)
     in the host's redirect config — see DESIGN-DECISIONS.md. */
  site: 'https://candelxsurgicals.com',

  /* Astro writes /page/index.html and links to /page/ — keep the two in step so
     a canonical URL and the URL a crawler actually follows never disagree. */
  trailingSlash: 'ignore',

  build: {
    /* /quote/index.html rather than /quote.html — matches the trailing-slash
       links in the header, footer and every product page. */
    format: 'directory',
  },
});
