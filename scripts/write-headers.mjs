/* Write the server configuration into the build.
 *
 * Runs after `astro build` (see site/package.json). Emits BOTH formats so the
 * same dist/ works wherever it lands:
 *
 *   dist/_headers    Netlify / Cloudflare Pages
 *   dist/_redirects  Netlify / Cloudflare Pages
 *   dist/.htaccess   Hostinger and anything else running Apache
 *   site/vercel.json Vercel — and this one is COMMITTED, not built (see below)
 *
 * It is generated rather than hand-written because the Content-Security-Policy
 * has to know two things that live in src/data/site.ts and change over time:
 * where the quote form posts, and whether Google Tag Manager is switched on.
 * A CSP written by hand goes stale the day either of those changes, and a stale
 * CSP fails silently — the browser blocks the request and shows nothing.
 *
 * Vercel reads none of the other three. It reads vercel.json, and it reads it
 * from the REPOSITORY at deploy time, not from the build output — so unlike its
 * siblings this file has to be committed. The script still writes it, so the CSP
 * cannot drift; if the file changes, the run says so and you commit it.
 *
 * Audit 2026-09-14, Phase 1. Vercel output added 2026-09-14 when Hassan deployed.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const DIST = path.join(ROOT, "site/dist");
const SITE_TS = path.join(ROOT, "site/src/data/site.ts");

if (!fs.existsSync(DIST)) {
  console.error("no site/dist — run `npm run build` first");
  process.exit(1);
}

/* ── read the constants the policy depends on ───────────────────────────── */
const src = fs.readFileSync(SITE_TS, "utf8");
const constant = (name) =>
  (src.match(new RegExp(`export const ${name}\\s*=\\s*["']([^"']*)["']`)) || [, ""])[1];

const FORM_ENDPOINT = constant("FORM_ENDPOINT");
const GTM_ID = constant("GTM_ID");
const CANONICAL = "candelxsurgicals.com";

/** The origin a URL belongs to, or null for a same-site path like "/". */
function originOf(u) {
  if (!u || !/^https?:\/\//i.test(u)) return null;
  try { return new URL(u).origin; } catch { return null; }
}

const formOrigin = originOf(FORM_ENDPOINT);
const gtm = GTM_ID
  ? {
      script: ["https://www.googletagmanager.com"],
      img: ["https://www.googletagmanager.com", "https://www.google-analytics.com"],
      connect: ["https://www.google-analytics.com", "https://analytics.google.com",
                "https://*.google-analytics.com", "https://*.analytics.google.com"],
      frame: ["https://www.googletagmanager.com"],
    }
  : { script: [], img: [], connect: [], frame: [] };

/* ── Content-Security-Policy ────────────────────────────────────────────── */
/* 'unsafe-inline' on script-src is deliberate and documented, not an oversight:
   Astro inlines the page scripts, and GTM requires it. Everything else is
   locked to our own origin, so an injected <script src="evil.com"> is still
   blocked — which is the attack this actually prevents. Tighten to hashes only
   if the inline scripts are ever externalised. */
const csp = [
  `default-src 'self'`,
  `script-src 'self' 'unsafe-inline'${gtm.script.map((s) => " " + s).join("")}`,
  `style-src 'self' 'unsafe-inline'`,
  `img-src 'self' data: blob:${gtm.img.map((s) => " " + s).join("")}`,
  `font-src 'self'`,
  `connect-src 'self'${formOrigin ? " " + formOrigin : ""}${gtm.connect.map((s) => " " + s).join("")}`,
  gtm.frame.length ? `frame-src ${gtm.frame.join(" ")}` : `frame-src 'none'`,
  `frame-ancestors 'none'`,
  `base-uri 'self'`,
  `form-action 'self'${formOrigin ? " " + formOrigin : ""}`,
  `object-src 'none'`,
  `upgrade-insecure-requests`,
].join("; ");

const SECURITY = [
  ["Content-Security-Policy", csp],
  /* Start short. Raise to 31536000 once you are certain HTTPS is solid on every
     subdomain — HSTS is hard to undo, because browsers cache it. */
  ["Strict-Transport-Security", "max-age=86400; includeSubDomains"],
  ["X-Content-Type-Options", "nosniff"],
  ["Referrer-Policy", "strict-origin-when-cross-origin"],
  ["X-Frame-Options", "SAMEORIGIN"],
  ["Permissions-Policy", "camera=(), microphone=(), geolocation=(), interest-cohort=()"],
  ["Cross-Origin-Opener-Policy", "same-origin"],
];

/* ── caching ────────────────────────────────────────────────────────────── */
/* Only /_astro/* carries a content hash in its filename, so only it is safe to
   freeze for a year. The fonts are named by family+weight+subset and change
   only when the script regenerates them; a month is the honest compromise.
   HTML must always revalidate or a deploy never reaches anyone. */
const CACHE = [
  ["/_astro/*", "public, max-age=31536000, immutable"],
  ["/fonts/*", "public, max-age=2592000"],
  ["/hero/*", "public, max-age=2592000"],
  ["/catalogue/img/*", "public, max-age=2592000"],
  ["/brand/*", "public, max-age=2592000"],
  ["/certifications/*", "public, max-age=2592000"],
  ["/*.html", "public, max-age=0, must-revalidate"],
];

/* ── dist/_headers  (Netlify, Cloudflare Pages) ─────────────────────────── */
const headers = [
  `# GENERATED by scripts/write-headers.mjs — do not edit by hand.`,
  `# Netlify and Cloudflare Pages read this file. Apache reads .htaccess.`,
  ``,
  `/*`,
  ...SECURITY.map(([k, v]) => `  ${k}: ${v}`),
  ``,
  ...CACHE.flatMap(([p, v]) => [p, `  Cache-Control: ${v}`, ``]),
].join("\n");
fs.writeFileSync(path.join(DIST, "_headers"), headers);

/* ── dist/_redirects ────────────────────────────────────────────────────── */
const redirects = [
  `# GENERATED by scripts/write-headers.mjs — do not edit by hand.`,
  `# One canonical host, so a page is never indexed at four addresses.`,
  `https://www.${CANONICAL}/*   https://${CANONICAL}/:splat   301!`,
  `http://www.${CANONICAL}/*    https://${CANONICAL}/:splat   301!`,
  `http://${CANONICAL}/*        https://${CANONICAL}/:splat   301!`,
  ``,
  `# Astro emits 404.html; this serves it with a real 404 status.`,
  `/*  /404.html  404`,
  ``,
].join("\n");
fs.writeFileSync(path.join(DIST, "_redirects"), redirects);

/* ── dist/.htaccess  (Hostinger / Apache) ───────────────────────────────── */
const htaccess = `# GENERATED by scripts/write-headers.mjs — do not edit by hand.
# Hostinger and other Apache hosts read this. Netlify/Cloudflare read _headers.

Options -Indexes
ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # One canonical host: https://${CANONICAL}
  RewriteCond %{HTTPS} !=on
  RewriteRule ^(.*)$ https://${CANONICAL}/$1 [R=301,L]

  RewriteCond %{HTTP_HOST} ^www\\.${CANONICAL.replace(/\./g, "\\.")}$ [NC]
  RewriteRule ^(.*)$ https://${CANONICAL}/$1 [R=301,L]
</IfModule>

<IfModule mod_headers.c>
${SECURITY.map(([k, v]) => `  Header always set ${k} "${v.replace(/"/g, '\\"')}"`).join("\n")}
</IfModule>

<IfModule mod_expires.c>
  ExpiresActive On
  # Content-hashed by Astro — safe to freeze.
  <FilesMatch "\\.(css|js)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <FilesMatch "\\.(webp|png|jpe?g|svg|ico|woff2)$">
    Header set Cache-Control "public, max-age=2592000"
  </FilesMatch>
  <FilesMatch "\\.html$">
    Header set Cache-Control "public, max-age=0, must-revalidate"
  </FilesMatch>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml application/xml
</IfModule>

# WebP and woff2 are not in every default mime.types.
<IfModule mod_mime.c>
  AddType image/webp .webp
  AddType font/woff2 .woff2
</IfModule>
`;
fs.writeFileSync(path.join(DIST, ".htaccess"), htaccess);

/* ── site/vercel.json  (Vercel) ─────────────────────────────────────────── */
/* Committed, not built — Vercel reads this from the repo, not from dist/.

   Caching is deliberately split: the catch-all carries the security headers
   ONLY, and the long-cache rules name the asset paths. HTML is left to Vercel's
   own default (public, max-age=0, must-revalidate), which is exactly what we
   want — that way nothing depends on which rule "wins" when two match.

   The www -> non-www redirect is NOT here. On Vercel that is a domain setting,
   configured when the custom domain is added, not a rewrite in this file. */
const vercelPath = path.join(ROOT, "site/vercel.json");
const vercel = {
  $schema: "https://openapi.vercel.sh/vercel.json",
  /* Canonical tags are emitted without a trailing slash (see layouts/Site.astro),
     so the server should agree rather than serve the page at both addresses. */
  trailingSlash: false,
  headers: [
    { source: "/(.*)", headers: SECURITY.map(([key, value]) => ({ key, value })) },
    ...CACHE
      .filter(([p]) => p !== "/*.html")
      .map(([p, value]) => ({
        source: p.replace(/\/\*$/, "/(.*)"),
        headers: [{ key: "Cache-Control", value }],
      })),
  ],
};
const vercelJson = JSON.stringify(vercel, null, 2) + "\n";
const vercelChanged =
  !fs.existsSync(vercelPath) || fs.readFileSync(vercelPath, "utf8") !== vercelJson;
fs.writeFileSync(vercelPath, vercelJson);

console.log(`headers written:`);
console.log(`  dist/_headers      ${SECURITY.length} security headers, ${CACHE.length} cache rules`);
console.log(`  dist/_redirects    canonical host -> https://${CANONICAL}`);
console.log(`  dist/.htaccess     same, for Apache`);
console.log(`  site/vercel.json   same, for Vercel${vercelChanged ? "  ** CHANGED — git add site/vercel.json **" : ""}`);
console.log(`  CSP form-action    ${formOrigin || "'self' only (FORM_ENDPOINT not set)"}`);
console.log(`  CSP analytics      ${GTM_ID ? `allowed for ${GTM_ID}` : "not allowed (GTM_ID not set)"}`);
