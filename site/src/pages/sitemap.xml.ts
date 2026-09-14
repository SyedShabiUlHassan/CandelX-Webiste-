/* sitemap.xml — generated at build time from the real route list, so it can
   never drift out of step with the pages that actually exist.

   Written by hand rather than via @astrojs/sitemap so the build stays
   dependency-free and the priorities can reflect what matters commercially:
   the catalogue and the quote form above the supporting pages.
   Audit 2026-09-14, finding H-04. */
import type { APIRoute } from "astro";
import { families } from "../data/catalogue.ts";

/** Static routes, with the weight each one carries for us. */
const PAGES: [path: string, priority: string, changefreq: string][] = [
  ["/", "1.0", "monthly"],
  ["/catalogue", "0.9", "weekly"],
  ["/quote", "0.8", "monthly"],
  ["/faq", "0.7", "monthly"],
  ["/quality", "0.7", "monthly"],
  ["/capabilities", "0.7", "monthly"],
  ["/support", "0.6", "monthly"],
];

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("astro.config.mjs is missing `site` — the sitemap needs it.");

  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = [
    ...PAGES.map(([path, priority, changefreq]) => ({
      loc: new URL(path, site).href.replace(/\/$/, "") || site.href,
      priority,
      changefreq,
    })),
    ...families.map((f) => ({
      loc: new URL(`/catalogue/${f.slug}`, site).href,
      priority: "0.8",
      changefreq: "monthly",
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
