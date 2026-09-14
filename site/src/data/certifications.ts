/* Certifications — the single source of truth for the whole site.
 *
 * Source: the printed catalogue's "Certifications & Compliance" page, CandelX page 66
 * (`catalogue/page-html/page-85.html`). Names and scope lines are verbatim from it.
 *
 * FDA and CBI were removed on Hassan's instruction (2026-09-12) and must not be reintroduced.
 * Nothing may be added here that is not printed in the catalogue — the footer and the Quality
 * page both read this list, so an invention here becomes a compliance claim in two places.
 * (That is exactly how "ISO 17665-1" ended up in the footer: it was hardcoded, unsourced,
 *  and contradicted the Quality page. Hence this file.)
 *
 * Design system rule §3: certification marks appear on the Quality page only — never on a
 * product page. The footer carries the names as a legal line, not the marks.
 */
export type Certification = {
  /** Mark artwork, served from site/public/certifications/ */
  mark: string;
  name: string;
  scope: string;
  /** Path to the scanned certificate once supplied, e.g. "/certifications/iso-13485.pdf".
   *  null = not attached yet; the Quality card stays inert and says "Certificate to follow". */
  document: string | null;
};

export const certifications: Certification[] = [
  {
    mark: "/certifications/cert-iso13485.png",
    name: "ISO 13485",
    scope: "Medical device quality management systems",
    document: null,
  },
  {
    mark: "/certifications/cert-iso9001.png",
    name: "ISO 9001:2015",
    scope: "Quality management systems",
    document: null,
  },
  {
    mark: "/certifications/cert-ce.png",
    name: "CE",
    scope: "European Union conformity",
    document: null,
  },
  {
    mark: "/certifications/cert-cgmp.png",
    name: "cGMP",
    scope: "Current Good Manufacturing Practice",
    document: null,
  },
];

/** The footer's legal line. Derived, so it can never drift from the Quality page again. */
export const certificationLine = certifications.map((c) => c.name).join(" · ");
