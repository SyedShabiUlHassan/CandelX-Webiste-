/* Single source of truth for everything that names or locates the site.
   Hassan, 2026-09-14: the domain is candelxsurgicals.com and the brand is
   written "CandelX" (capital X, matching the logo mark).

   CHANGE THE DOMAIN IN ONE PLACE: astro.config.mjs `site`. Everything here
   derives from Astro.site at build time, so this file never hardcodes a host. */

/** Brand name in running text. Capital X — see DESIGN-DECISIONS.md. */
export const BRAND = "CandelX";

/** Full legal-ish name, used in titles on the six non-product pages. */
export const BRAND_FULL = "CandelX Surgicals";

/** Title suffix. Product pages use the short form so titles stay under the
    ~60 characters Google shows before truncating. */
export const TITLE_SUFFIX = ` — ${BRAND_FULL}`;
export const TITLE_SUFFIX_SHORT = ` — ${BRAND}`;

/** Default description. Deliberately does NOT assert a certification —
    certification claims live only on /quality, where the documents go. */
export const DEFAULT_DESCRIPTION =
  "Stainless steel sterilization containers, instrument trays and cassettes for hospitals, dental clinics and surgical distributors. 79 product families, 598 article numbers.";

/** Contact details. Hassan supplies these once the domain and hosting land.
    An em dash means "not held yet" — never invent one. When the real values
    arrive, fill them in here and every page that uses them updates at once. */
export const CONTACT = {
  telephone: "" as string,
  email: "" as string,
  whatsapp: "" as string,
  addressLocality: "Sialkot",
  addressCountry: "PK",
  streetAddress: "" as string,
  postalCode: "" as string,
};

/** Year the company began manufacturing. Hassan, 2026-09-14: 2010. */
export const FOUNDED = "2010";

/** Export markets. Hassan, 2026-09-14: 14 countries. */
export const COUNTRIES = "14";

/** Catalogue scale — measured from src/data/catalogue.ts, not asserted. */
export const PRODUCT_FAMILIES = "79";
export const ARTICLE_NUMBERS = "598";

/** The downloadable PDF catalogue, once Hassan supplies it.
    Empty string = no link. The header shows the "Catalogue" item only when this
    is set, so we never ship a nav link that goes nowhere (audit H-12).
    When the PDF lands: drop it in public/ and set this to "/catalogue.pdf". */
export const CATALOGUE_PDF = "";

/** WHERE THE QUOTE FORM POSTS.
 *
 *  Empty = the form cannot send, and says so honestly instead of pretending.
 *  Fill this in and the form starts working — nothing else to change.
 *
 *  Options that need no backend of your own:
 *    Netlify Forms   — deploy on Netlify, set this to "/" and add
 *                      data-netlify="true" to the <form> in quote.astro
 *    Formspree       — "https://formspree.io/f/xxxxxxxx"
 *    Web3Forms       — "https://api.web3forms.com/submit" (+ an access_key field)
 *  On Hostinger, point it at a small PHP handler that mails CONTACT.email.
 *
 *  Audit 2026-09-14, B-01 — the site's only conversion path. */
export const FORM_ENDPOINT = "";

/** Social / Open Graph share image. 1200x630. */
export const OG_IMAGE = "/brand/og-candelx.png";
