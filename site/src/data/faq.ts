/* FAQ content.
 *
 * HOW THIS FILE WORKS
 * -------------------
 * An entry with a non-empty `a` is published. An entry with `a: ""` is NOT —
 * it renders only on the dev server, marked "needs your answer", and is absent
 * from the production build and from the FAQPage structured data.
 *
 * That is deliberate. The 2026-09-14 audit found three pages printing internal
 * placeholder notes to customers (finding B-03); this makes the same mistake
 * impossible here rather than relying on remembering.
 *
 * `need` is the note to Hassan about what the answer has to contain. It is
 * never rendered anywhere, in dev or in production.
 *
 * WRITING ANSWERS
 * ---------------
 * - Plain sentences. One or two short paragraphs is plenty.
 * - Never state a figure you could not evidence to a buyer who asks — the same
 *   rule as the homepage stats (audit B-05).
 * - Answers already written below are drawn ONLY from facts the site already
 *   publishes (the capabilities page, product specs, the catalogue data).
 *   Nothing here is invented.
 */

export type FaqItem = {
  /** The question, phrased the way a buyer would ask it. */
  q: string;
  /** The answer. Empty string = not written yet; not published. */
  a: string;
  /** What the answer needs to cover. Internal only — never rendered. */
  need?: string;
};

export type FaqGroup = {
  id: string;
  title: string;
  blurb: string;
  items: FaqItem[];
};

export const faq: FaqGroup[] = [
  {
    id: "ordering",
    title: "Ordering and lead times",
    blurb: "How an enquiry becomes a shipment.",
    items: [
      {
        q: "How do I place an order?",
        a: "Start with the quote form. Pick the products you need, add the article numbers and quantities, and send it — we come back with a quotation, a lead time and the packing detail. If you already have a list, you can send that instead; the article numbers in our catalogue are all we need.",
      },
      {
        q: "What is your minimum order quantity?",
        a: "",
        need: "Your actual MOQ. Say whether it differs for catalogue items vs custom footprints, and whether it is per article number or per order value. If there is no MOQ, say so — that is a selling point.",
      },
      {
        q: "How long does an order take?",
        a: "",
        need: "Lead time for catalogue items in stock, for catalogue items made to order, and for a custom footprint. Give ranges in working days and say what the clock starts from (order confirmation, or receipt of deposit).",
      },
      {
        q: "Can I get a sample before placing a full order?",
        a: "",
        need: "Whether you send samples, whether they are free or charged, who pays the freight, and whether the cost is credited against a first order.",
      },
      {
        q: "Do you supply article numbers that are not in the catalogue?",
        a: "Often, yes. The catalogue is what we print and stock as standard, not the limit of what we make — the same families are produced in sizes outside the listed range. Send us the dimensions you need and we will tell you whether it is a stock size, a made-to-order size, or a new tool.",
      },
    ],
  },

  {
    id: "custom",
    title: "Custom trays and inserts",
    blurb: "Made to your instrument set rather than to a catalogue page.",
    items: [
      {
        q: "Can you make a tray to my own dimensions?",
        a: "Yes. Custom footprints are made from a drawing. Send a dimensioned sketch — length, width and depth, and the perforation and corner treatment you want — and we will quote against it. A photograph of the existing tray with a rule beside it is usually enough to start the conversation.",
      },
      {
        q: "What do you need from me to quote a custom tray?",
        a: "The internal dimensions, the material grade (304 or 316L), the sheet gauge if you have a preference, the perforation pattern, and how the lid should fasten. If the tray is holding a specific instrument set, a photograph of that set laid out is more useful than a list — it tells us where the silicone has to sit.",
      },
      {
        q: "Can you fit silicone holders to my instrument set?",
        a: "Yes. Silicone and stainless holders are positioned to your set and fixed at the base, so nothing shifts in transit. The silicone is colour-coded, which is how most departments tell one set from another on the shelf.",
      },
      {
        q: "Can you laser-mark our hospital or distributor name?",
        a: "",
        need: "Confirm you offer laser marking (the site already shows laser-marked bases), what can be marked — name, logo, asset number, set ID — any minimum quantity for marked goods, and whether it adds to the lead time.",
      },
    ],
  },

  {
    id: "materials",
    title: "Materials and specifications",
    blurb: "What the products are made of, and to what.",
    items: [
      {
        q: "What is the difference between 304 and 316L?",
        a: "Both are stainless steels and both autoclave without trouble. 316L adds molybdenum, which makes it more resistant to pitting from chlorides — the salts in saline, some detergents and hard water. If your trays see saline regularly, or your water is hard, 316L lasts longer. For general instrument handling, 304 is the normal choice and the more economical one.",
      },
      {
        q: "What sheet thickness do you use?",
        a: "Between 0.8 and 1.2 mm, depending on the product and the load it carries. The gauge for each article number is printed on its product page, and it is confirmed on the order.",
      },
      {
        q: "What perforation patterns are available?",
        a: "Square perforation at 6.4 × 6.4 mm, and a round pattern, on the lid, the bottom and the sides. Each pattern has its own article series, so you can order the same tray size in either. Wire mesh is a separate range again, in single frame and double frame protection.",
      },
      {
        q: "Do your containers fit DIN baskets?",
        a: "Yes — full, three-quarter, half and quarter DIN are standard sizes across the range. If you are matching an existing set of baskets, send us the internal dimensions and we will confirm the fit before you order rather than after.",
      },
      {
        q: "What sterilization cycles are they built for?",
        a: "The containers are dimensioned and gasketed for the two programmes almost every department runs: 134 °C for 18 minutes, and 121 °C for 30 minutes. The filter discs are single-use and rated to 134 °C.",
      },
      {
        q: "How do I know which size I am ordering?",
        a: "Every product page lists its article numbers in full, with dimensions where we publish them. Where a product is made in one size only, or is identified by a printed label rather than a measurement, the page says so and the size is confirmed on the quotation.",
      },
    ],
  },

  {
    id: "quality",
    title: "Quality and compliance",
    blurb: "The documents a procurement department will ask you for.",
    items: [
      {
        q: "What certifications do you hold?",
        a: "ISO 13485 for medical device quality management, ISO 9001:2015, CE, and cGMP. They are listed together on our quality page, and the certificates are available on request.",
      },
      {
        q: "Can you provide material certificates?",
        a: "Yes. Mill certificates and batch marking are available on request — ask for them with the order rather than after shipment, so they travel with the paperwork.",
      },
      {
        q: "Can I sell these in the EU / my country?",
        a: "",
        need: "This one is regulatory and must be your words, not mine. State precisely what you hold and for which products — whether the CE mark covers these goods, under which regulation, and who the registered manufacturer and any EU authorised representative are. Do not imply CE marking on a product that is not CE marked.",
      },
      {
        q: "Do you provide sterilization validation reports?",
        a: "",
        need: "Whether you hold validation reports, for which products, what they cover (cycle, load pattern, laboratory), and whether a customer can be sent a copy. If validation is the hospital's responsibility rather than yours, say that plainly — it is a perfectly normal answer.",
      },
    ],
  },

  {
    id: "shipping",
    title: "Shipping, payment and documents",
    blurb: "Everything between the quotation and the goods arriving.",
    items: [
      {
        q: "Which countries do you ship to?",
        a: "We currently ship to 14 countries, and we are happy to quote for markets we have not served yet. Tell us the destination country and port with your enquiry and we will include the freight in the quotation.",
      },
      {
        q: "What Incoterms do you work on?",
        a: "",
        need: "The terms you actually quote — EXW, FOB Karachi, CIF, DAP. Say which is your default, and which you can do on request.",
      },
      {
        q: "What are your payment terms?",
        a: "",
        need: "Deposit percentage, balance trigger, accepted methods (T/T, L/C, other), and the currency you invoice in. Say whether terms differ for a first order vs a repeat customer.",
      },
      {
        q: "How are the goods packed?",
        a: "",
        need: "Inner and outer packing, whether items are individually wrapped, carton or pallet, and whether you can pack to a distributor's own labelling scheme.",
      },
      {
        q: "What export documents do you provide?",
        a: "",
        need: "Commercial invoice, packing list, certificate of origin, and anything market-specific your buyers commonly need. Note which are standard and which are on request.",
      },
    ],
  },

  {
    id: "aftersales",
    title: "After the order",
    blurb: "Consumables, replacements and what happens if something is wrong.",
    items: [
      {
        q: "Do you supply replacement gaskets and filter discs?",
        a: "Yes — the silicone gasket in a perforated lid is replaceable, and the filter discs are single-use consumables meant to be reordered. Quote the article number of the container and we will send the matching parts.",
      },
      {
        q: "What warranty do you offer?",
        a: "",
        need: "The period, what it covers (manufacturing defects, welds, hinges, latches), and what it excludes (wear, damage from incorrect chemicals or cycles). Keep it to what you will actually honour.",
      },
      {
        q: "What happens if something arrives damaged or incorrect?",
        a: "",
        need: "Who to contact, what you need from them (photographs, article numbers, the packing list), how long they have to report it, and whether you replace or credit.",
      },
    ],
  },
];

/** Everything a customer will actually see. */
export const answered = faq
  .map((g) => ({ ...g, items: g.items.filter((i) => i.a.trim()) }))
  .filter((g) => g.items.length > 0);

/** Still waiting on Hassan. Used by the dev-only panel and the build report. */
export const unanswered = faq.flatMap((g) =>
  g.items.filter((i) => !i.a.trim()).map((i) => ({ group: g.title, ...i })),
);

export const answeredCount = faq.reduce((n, g) => n + g.items.filter((i) => i.a.trim()).length, 0);
export const totalCount = faq.reduce((n, g) => n + g.items.length, 0);
