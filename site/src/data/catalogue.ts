// CandelX catalogue data — GENERATED, do not hand-edit.
// Source: scripts/build-catalogue.mjs + catalogue/page-html/*.html.
// A product here = one SUB-CATEGORY of the printed catalogue (a PDF page's
// title/subtitle), except pages that print several products in a grid.
// Edit the PRODUCTS table in the script, then re-run it.
// 79 products · 598 article numbers · 9 sections.

export type CatSize = {
  sku: string;
  L: string | null; W: string | null; H: string | null;
  sizeText: string | null; raw: string | null;
  lid: string | null; note: string | null; needsReview: boolean;
  variant: string; isLid: boolean;
  /* set only where a product has one picture per article number (the mirrors) */
  image?: string;
};
export type CatVariant = { code: string; label: string };
export type CatDetail = { src: string; caption: string; flag: string };
/** A page that prints each variant as its own block with its own photos and
 *  table — rendered as separate sections, never combined into one table. */
export type CatGroup = {
  label: string; images: string[]; sizes: CatSize[];
  /** Set on "instruments" layouts: the article number and the printed spec
   *  line, kept apart so each member can be labelled on its own. */
  code: string | null; note: string | null;
};
export type CatFamily = {
  slug: string; prefix: string; prefixes: string[]; section: string;
  name: string; subtitle: string; summary: string; catalogueTitle: string;
  variants: CatVariant[]; needsReview: boolean;
  notes: string[];
  specs: Record<string, string>;
  image: string | null; imageAlt: string | null; imageFlag: string;
  /* Optional full photo set. The old image/imageAlt pair caps a slider at two
     shots; products with more (a cassette range, a basket range) list them here. */
  images?: string[];
  /* true width/height of the hero photo, so the frame can follow it */
  imageAspect?: number;
  details: CatDetail[];
  groups: CatGroup[];
  groupLayout: "instruments" | null;
  sourcePages: number[];
  sizes: CatSize[];
};

export const sections: string[] = [
  "Wire Mesh Trays",
  "Perforated Trays",
  "Universal Trays",
  "Cassette Trays",
  "PRF & GRF System",
  "Implantology / Bur Holders",
  "IntraOral / Orthodontic Steel Mirrors",
  "Hollow Wares",
  "Trays Accessories / Silicon Holding System"
];

export const families: CatFamily[] = [
  {
    "slug": "wire-mesh-single-frame",
    "prefix": "CXMT / CXML",
    "prefixes": [
      "CXMT",
      "CXML"
    ],
    "section": "Wire Mesh Trays",
    "name": "Wire Mesh Trays — Single Frame",
    "subtitle": "Single Frame",
    "summary": "Open mesh drains and dries inside the same cycle, so sets don't come back from the washer wet. Grips fold flat, so loaded trays still stack.",
    "catalogueTitle": "Wire Mesh Trays",
    "variants": [
      {
        "code": "CXMT",
        "label": "Tray"
      },
      {
        "code": "CXML",
        "label": "Lid (optional)"
      }
    ],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304(ASTM)",
      "Steel sheet": "1.0mm",
      "Mesh type": "Woven 5.5 x 5.5 x 1.0mm"
    },
    "image": "/catalogue/img/p16/p16-wire-mesh-trays-01-538x324.png",
    "imageAlt": "/catalogue/img/p16/p16-wire-mesh-trays-02-370x285.png",
    "imageFlag": "ok",
    "details": [
      {
        "src": "/catalogue/img/p16/p16-wire-mesh-trays-03-177x139.png",
        "caption": "Single Frame protection — Round Corners",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p16/p16-wire-mesh-trays-04-163x126.jpg",
        "caption": "Mesh Type : Woven — 5.5 x 5.5 x 1.0mm",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p16/p16-wire-mesh-trays-05-163x133.png",
        "caption": "Easy to lock",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p16/p16-wire-mesh-trays-06-164x133.jpg",
        "caption": "Pull up & Stackable — Handles",
        "flag": "low_res"
      }
    ],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      10
    ],
    "sizes": [
      {
        "sku": "CXMT-8010",
        "L": "540",
        "W": "255",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 255 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8070",
        "L": "255",
        "W": "245",
        "H": "50",
        "sizeText": null,
        "raw": "255 x 245 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8904",
        "L": "500",
        "W": "150",
        "H": "100",
        "sizeText": null,
        "raw": "500 x 150 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8014",
        "L": "540",
        "W": "255",
        "H": "70",
        "sizeText": null,
        "raw": "540 x 255 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8072",
        "L": "255",
        "W": "245",
        "H": "60",
        "sizeText": null,
        "raw": "255 x 245 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8907",
        "L": "850",
        "W": "200",
        "H": "100",
        "sizeText": null,
        "raw": "850 x 200 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8015",
        "L": "540",
        "W": "255",
        "H": "100",
        "sizeText": null,
        "raw": "540 x 255 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8074",
        "L": "255",
        "W": "245",
        "H": "70",
        "sizeText": null,
        "raw": "255 x 245 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8919",
        "L": "355",
        "W": "100",
        "H": "90",
        "sizeText": null,
        "raw": "355 x 100 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8020",
        "L": "485",
        "W": "255",
        "H": "50",
        "sizeText": null,
        "raw": "485 x 255 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8075",
        "L": "255",
        "W": "245",
        "H": "100",
        "sizeText": null,
        "raw": "255 x 245 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8925",
        "L": "440",
        "W": "110",
        "H": "45",
        "sizeText": null,
        "raw": "440 x 110 x 45",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8022",
        "L": "485",
        "W": "255",
        "H": "60",
        "sizeText": null,
        "raw": "485 x 255 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8062",
        "L": "300",
        "W": "240",
        "H": "60",
        "sizeText": null,
        "raw": "300 x 240 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8926",
        "L": "440",
        "W": "110",
        "H": "65",
        "sizeText": null,
        "raw": "440 x 110 x 65",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8024",
        "L": "485",
        "W": "255",
        "H": "70",
        "sizeText": null,
        "raw": "485 x 255 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8090",
        "L": "255",
        "W": "120",
        "H": "50",
        "sizeText": null,
        "raw": "255 x 120 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8909",
        "L": "355",
        "W": "100",
        "H": "90",
        "sizeText": null,
        "raw": "355 x 100 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8025",
        "L": "485",
        "W": "255",
        "H": "100",
        "sizeText": null,
        "raw": "485 x 255 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8092",
        "L": "255",
        "W": "120",
        "H": "60",
        "sizeText": null,
        "raw": "255 x 120 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8906",
        "L": "410",
        "W": "260",
        "H": "110",
        "sizeText": null,
        "raw": "410 x 260 x 110",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8202",
        "L": "480",
        "W": "300",
        "H": "65",
        "sizeText": null,
        "raw": "480 x 300 x 65",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8094",
        "L": "255",
        "W": "120",
        "H": "70",
        "sizeText": null,
        "raw": "255 x 120 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8901",
        "L": "350",
        "W": "160",
        "H": "50",
        "sizeText": null,
        "raw": "350 x 160 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8040",
        "L": "405",
        "W": "255",
        "H": "50",
        "sizeText": null,
        "raw": "405 x 255 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8095",
        "L": "255",
        "W": "120",
        "H": "100",
        "sizeText": null,
        "raw": "255 x 120 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8902",
        "L": "260",
        "W": "190",
        "H": "50",
        "sizeText": null,
        "raw": "260 x 190 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8044",
        "L": "405",
        "W": "255",
        "H": "70",
        "sizeText": null,
        "raw": "405 x 255 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8900",
        "L": "300",
        "W": "120",
        "H": "64",
        "sizeText": null,
        "raw": "300 x 120 x 64",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8050",
        "L": "380",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "380 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8045",
        "L": "405",
        "W": "255",
        "H": "100",
        "sizeText": null,
        "raw": "405 x 255 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8914",
        "L": "400",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "400 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8903",
        "L": "380",
        "W": "190",
        "H": "85",
        "sizeText": null,
        "raw": "380 x 190 x 85",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8905",
        "L": "5",
        "W": "40",
        "H": "250",
        "sizeText": null,
        "raw": "5 x 40 x 250",
        "lid": null,
        "note": "50",
        "needsReview": true,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8921",
        "L": "400",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "400 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8923",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8908",
        "L": "480",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8912",
        "L": "400",
        "W": "300",
        "H": "50",
        "sizeText": null,
        "raw": "400 x 300 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8922",
        "L": "250",
        "W": "190",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 190 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8913",
        "L": "480",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "480 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8911",
        "L": "400",
        "W": "370",
        "H": "50",
        "sizeText": null,
        "raw": "400 x 370 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8920",
        "L": "300",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "300 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8916",
        "L": "480",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "480 x 250 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8915",
        "L": "450",
        "W": "220",
        "H": "50",
        "sizeText": null,
        "raw": "450 x 220 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8927",
        "L": "650",
        "W": "650",
        "H": "30",
        "sizeText": null,
        "raw": "650 x 650 x 30",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8910",
        "L": "480",
        "W": "300",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 300 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8918",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8917",
        "L": "480",
        "W": "250",
        "H": "60",
        "sizeText": null,
        "raw": "480 x 250 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-8924",
        "L": "250",
        "W": "240",
        "H": "60",
        "sizeText": null,
        "raw": "250 x 240 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXML-8900",
        "L": "540",
        "W": "255",
        "H": null,
        "sizeText": null,
        "raw": "540 x 255",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8902",
        "L": "405",
        "W": "255",
        "H": null,
        "sizeText": null,
        "raw": "405 x 255",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8901",
        "L": "485",
        "W": "255",
        "H": null,
        "sizeText": null,
        "raw": "485 x 255",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8908",
        "L": "380",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "380 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8905",
        "L": "480",
        "W": "370",
        "H": null,
        "sizeText": null,
        "raw": "480 x 370",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8904",
        "L": "255",
        "W": "120",
        "H": null,
        "sizeText": null,
        "raw": "255 x 120",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8906",
        "L": "480",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "480 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8903",
        "L": "255",
        "W": "245",
        "H": null,
        "sizeText": null,
        "raw": "255 x 245",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8907",
        "L": "250",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "250 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      }
    ],
    "imageAspect": 1.6605
  },
  {
    "slug": "wire-mesh-double-frame",
    "prefix": "CXMT / CXML",
    "prefixes": [
      "CXMT",
      "CXML"
    ],
    "section": "Wire Mesh Trays",
    "name": "Wire Mesh Trays — Double Frame Protection",
    "subtitle": "Double Frame Protection",
    "summary": "The second frame takes the knocks a single frame doesn't survive — for heavy sets and high-turnover CSSDs where trays are stacked and dropped all day.",
    "catalogueTitle": "Wire Mesh Trays",
    "variants": [
      {
        "code": "CXMT",
        "label": "Tray"
      },
      {
        "code": "CXML",
        "label": "Lid (optional)"
      }
    ],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304(ASTM)",
      "Steel sheet": "1.0mm",
      "Mesh type": "Woven 5.5 x 5.5 x 1.0mm"
    },
    "image": "/catalogue/img/p17/p17-5-5-x-5-5-x-01-441x295.png",
    "imageAlt": "/catalogue/img/p17/p17-5-5-x-5-5-x-02-482x286.png",
    "imageFlag": "ok",
    "details": [
      {
        "src": "/catalogue/img/p17/p17-5-5-x-5-5-x-04-137x133.png",
        "caption": "Double Frame protection — Round Corners",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p17/p17-5-5-x-5-5-x-05-163x133.png",
        "caption": "Mesh Type : Woven — 5.5 x 5.5 x 1.0mm",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p17/p17-5-5-x-5-5-x-03-177x139.png",
        "caption": "Easy to lock",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p17/p17-5-5-x-5-5-x-06-163x134.png",
        "caption": "Pull up & Stackable — Handles",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p17/p17-5-5-x-5-5-x-07-283x167.png",
        "caption": "LIDs (optional)",
        "flag": "ok"
      }
    ],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      11
    ],
    "sizes": [
      {
        "sku": "CXMT-7010",
        "L": "540",
        "W": "255",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 255 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7070",
        "L": "255",
        "W": "245",
        "H": "50",
        "sizeText": null,
        "raw": "255 x 245 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7929",
        "L": "500",
        "W": "150",
        "H": "100",
        "sizeText": null,
        "raw": "500 x 150 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7014",
        "L": "540",
        "W": "255",
        "H": "70",
        "sizeText": null,
        "raw": "540 x 255 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7072",
        "L": "255",
        "W": "245",
        "H": "60",
        "sizeText": null,
        "raw": "255 x 245 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7930",
        "L": "850",
        "W": "200",
        "H": "100",
        "sizeText": null,
        "raw": "850 x 200 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7015",
        "L": "540",
        "W": "255",
        "H": "100",
        "sizeText": null,
        "raw": "540 x 255 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7074",
        "L": "255",
        "W": "245",
        "H": "70",
        "sizeText": null,
        "raw": "255 x 245 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7931",
        "L": "355",
        "W": "100",
        "H": "90",
        "sizeText": null,
        "raw": "355 x 100 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7020",
        "L": "485",
        "W": "255",
        "H": "50",
        "sizeText": null,
        "raw": "485 x 255 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7075",
        "L": "255",
        "W": "245",
        "H": "100",
        "sizeText": null,
        "raw": "255 x 245 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7932",
        "L": "440",
        "W": "110",
        "H": "45",
        "sizeText": null,
        "raw": "440 x 110 x 45",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7022",
        "L": "485",
        "W": "255",
        "H": "60",
        "sizeText": null,
        "raw": "485 x 255 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7062",
        "L": "300",
        "W": "240",
        "H": "60",
        "sizeText": null,
        "raw": "300 x 240 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7933",
        "L": "440",
        "W": "110",
        "H": "65",
        "sizeText": null,
        "raw": "440 x 110 x 65",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7024",
        "L": "485",
        "W": "255",
        "H": "70",
        "sizeText": null,
        "raw": "485 x 255 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7090",
        "L": "255",
        "W": "120",
        "H": "50",
        "sizeText": null,
        "raw": "255 x 120 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7025",
        "L": "485",
        "W": "255",
        "H": "100",
        "sizeText": null,
        "raw": "485 x 255 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7092",
        "L": "255",
        "W": "120",
        "H": "60",
        "sizeText": null,
        "raw": "255 x 120 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7202",
        "L": "480",
        "W": "300",
        "H": "65",
        "sizeText": null,
        "raw": "480 x 300 x 65",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7094",
        "L": "255",
        "W": "120",
        "H": "70",
        "sizeText": null,
        "raw": "255 x 120 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7040",
        "L": "405",
        "W": "255",
        "H": "50",
        "sizeText": null,
        "raw": "405 x 255 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7095",
        "L": "255",
        "W": "120",
        "H": "100",
        "sizeText": null,
        "raw": "255 x 120 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7044",
        "L": "405",
        "W": "255",
        "H": "70",
        "sizeText": null,
        "raw": "405 x 255 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7928",
        "L": "300",
        "W": "120",
        "H": "64",
        "sizeText": null,
        "raw": "300 x 120 x 64",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-7045",
        "L": "405",
        "W": "255",
        "H": "100",
        "sizeText": null,
        "raw": "405 x 255 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9944",
        "L": "400",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "400 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9936",
        "L": "380",
        "W": "190",
        "H": "85",
        "sizeText": null,
        "raw": "380 x 190 x 85",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9010",
        "L": "540",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9950",
        "L": "400",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "400 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9952",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9938",
        "L": "480",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9942",
        "L": "400",
        "W": "300",
        "H": "50",
        "sizeText": null,
        "raw": "400 x 300 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9951",
        "L": "250",
        "W": "190",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 190 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9943",
        "L": "480",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "480 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9941",
        "L": "400",
        "W": "370",
        "H": "50",
        "sizeText": null,
        "raw": "400 x 370 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9949",
        "L": "300",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "300 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9946",
        "L": "480",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "480 x 250 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9945",
        "L": "450",
        "W": "220",
        "H": "50",
        "sizeText": null,
        "raw": "450 x 220 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9954",
        "L": "650",
        "W": "650",
        "H": "30",
        "sizeText": null,
        "raw": "650 x 650 x 30",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9940",
        "L": "480",
        "W": "300",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 300 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9948",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9947",
        "L": "480",
        "W": "250",
        "H": "60",
        "sizeText": null,
        "raw": "480 x 250 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9953",
        "L": "250",
        "W": "240",
        "H": "60",
        "sizeText": null,
        "raw": "250 x 240 x 60",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9939",
        "L": "355",
        "W": "100",
        "H": "90",
        "sizeText": null,
        "raw": "355 x 100 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9937",
        "L": "410",
        "W": "260",
        "H": "110",
        "sizeText": null,
        "raw": "410 x 260 x 110",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9934",
        "L": "350",
        "W": "160",
        "H": "50",
        "sizeText": null,
        "raw": "350 x 160 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9935",
        "L": "260",
        "W": "190",
        "H": "50",
        "sizeText": null,
        "raw": "260 x 190 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXMT-9050",
        "L": "380",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "380 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXMT",
        "isLid": false
      },
      {
        "sku": "CXML-8909",
        "L": "540",
        "W": "255",
        "H": null,
        "sizeText": null,
        "raw": "540 x 255",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8910",
        "L": "485",
        "W": "255",
        "H": null,
        "sizeText": null,
        "raw": "485 x 255",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8914",
        "L": "480",
        "W": "370",
        "H": null,
        "sizeText": null,
        "raw": "480 x 370",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8915",
        "L": "480",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "480 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8911",
        "L": "405",
        "W": "255",
        "H": null,
        "sizeText": null,
        "raw": "405 x 255",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8917",
        "L": "380",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "380 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8913",
        "L": "255",
        "W": "120",
        "H": null,
        "sizeText": null,
        "raw": "255 x 120",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8912",
        "L": "255",
        "W": "245",
        "H": null,
        "sizeText": null,
        "raw": "255 x 245",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      },
      {
        "sku": "CXML-8916",
        "L": "250",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "250 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXML",
        "isLid": false
      }
    ],
    "imageAspect": 1.4949
  },
  {
    "slug": "mesh-cassette-trays",
    "prefix": "CXUTM / CXCC",
    "prefixes": [
      "CXUTM",
      "CXCC"
    ],
    "section": "Wire Mesh Trays",
    "name": "Mesh Cassette Trays",
    "subtitle": "Mesh-base instrument cassettes",
    "summary": "A mesh cassette for sets that must stay shut from washer to shelf, held to 32 mm so it still drops into a standard container.",
    "catalogueTitle": "Mesh Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "32 mm"
    },
    "image": "/catalogue/img/p60/p60-mesh-cassette-01-370x228.png",
    "imageAlt": "/catalogue/img/p60/p60-mesh-cassette-02-327x188.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      42
    ],
    "sizes": [
      {
        "sku": "CXUTM-3902",
        "L": "195",
        "W": "80",
        "H": "32",
        "sizeText": null,
        "raw": "195 x 80 x 32",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3903",
        "L": "195",
        "W": "105",
        "H": "32",
        "sizeText": null,
        "raw": "195 x 105 x 32",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3904",
        "L": "195",
        "W": "140",
        "H": "32",
        "sizeText": null,
        "raw": "195 x 140 x 32",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-2905",
        "L": "280",
        "W": "195",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 195 x 32",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXCC-9902",
        "L": "190",
        "W": "70",
        "H": "32",
        "sizeText": null,
        "raw": "190 x 70 x 32",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9903",
        "L": "190",
        "W": "102",
        "H": "32",
        "sizeText": null,
        "raw": "190 x 102 x 32",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9904",
        "L": "190",
        "W": "135",
        "H": "32",
        "sizeText": null,
        "raw": "190 x 135 x 32",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.6228
  },
  {
    "slug": "mesh-basket-lidded",
    "prefix": "CXMB",
    "prefixes": [
      "CXMB"
    ],
    "section": "Wire Mesh Trays",
    "name": "Wire Mesh Sterilization Basket",
    "subtitle": "Lidded, fine mesh",
    "summary": "A latched mesh lid means small items can't work their way out in the washer — the basket for sets you daren't count twice.",
    "catalogueTitle": "Wire Mesh Sterilization Basket",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Woven wire mesh, welded frame",
      "Lid": "Hinged, full length",
      "Closure": "Centre latch",
      "Handling": "Drop handle",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxmb-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxmb-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXMB-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXMB",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "perforated-tray-square",
    "prefix": "CXPT / CXPS",
    "prefixes": [
      "CXPT",
      "CXPS"
    ],
    "section": "Perforated Trays",
    "name": "Perforated Trays — Square Pattern",
    "subtitle": "",
    "summary": "Square perforation gives steam a straight path to every instrument and lets condensate run out — so loads pass the dryness check first time.",
    "catalogueTitle": "Perforated Trays (Punching processed)",
    "variants": [
      {
        "code": "CXPS",
        "label": "Round corner"
      },
      {
        "code": "CXPT",
        "label": "Chamfer corner"
      }
    ],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304(ASTM)",
      "Steel sheet": "1.0mm",
      "Perforation": "Square pattern Lid & bottom : 6.4 x 6.4mm",
      "Side": "4.8 x 4.8mm"
    },
    "image": "/catalogue/img/p08/p08-perforated-trays-punching-processed-01-466x294.png",
    "imageAlt": "/catalogue/img/p08/p08-perforated-trays-punching-processed-02-495x272.png",
    "imageFlag": "ok",
    "details": [
      {
        "src": "/catalogue/img/p08/p08-perforated-trays-punching-processed-recovered-chamfercorner-163x110.png",
        "caption": "Chamfer Corner",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p08/p08-perforated-trays-punching-processed-03-164x133.png",
        "caption": "Easy locking System",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p08/p08-perforated-trays-punching-processed-04-163x133.png",
        "caption": "Pull up & Stackable Handles",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p08/p08-perforated-trays-punching-processed-05-164x123.png",
        "caption": "Round Corner",
        "flag": "low_res"
      }
    ],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      6
    ],
    "sizes": [
      {
        "sku": "CXPT-2010",
        "L": "540",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2014",
        "L": "540",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "540 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2018",
        "L": "540",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "540 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2030",
        "L": "480",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2034",
        "L": "480",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "480 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2038",
        "L": "480",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "480 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2050",
        "L": "380",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "380 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2054",
        "L": "380",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "380 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2058",
        "L": "380",
        "W": "250",
        "H": "90",
        "sizeText": null,
        "raw": "380 x 250 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2080",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2088",
        "L": "250",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2100",
        "L": "250",
        "W": "120",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 120 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2104",
        "L": "250",
        "W": "120",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 120 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPT-2108",
        "L": "250",
        "W": "120",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 120 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": false
      },
      {
        "sku": "CXPS-2010",
        "L": "540",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2014",
        "L": "540",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "540 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2018",
        "L": "540",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "540 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2030",
        "L": "480",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2034",
        "L": "480",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "480 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2038",
        "L": "480",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "480 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2050",
        "L": "380",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "380 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2054",
        "L": "380",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "380 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2058",
        "L": "380",
        "W": "250",
        "H": "90",
        "sizeText": null,
        "raw": "380 x 250 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2080",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2088",
        "L": "250",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2100",
        "L": "250",
        "W": "120",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 120 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2104",
        "L": "250",
        "W": "120",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 120 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPS-2108",
        "L": "250",
        "W": "120",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 120 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": false
      },
      {
        "sku": "CXPT-2011",
        "L": "540",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "540 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": true
      },
      {
        "sku": "CXPT-2031",
        "L": "480",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "480 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": true
      },
      {
        "sku": "CXPT-2051",
        "L": "380",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "380 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": true
      },
      {
        "sku": "CXPT-2081",
        "L": "250",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "250 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": true
      },
      {
        "sku": "CXPT-2101",
        "L": "250",
        "W": "120",
        "H": null,
        "sizeText": null,
        "raw": "250 x 120",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPT",
        "isLid": true
      },
      {
        "sku": "CXPS-2011",
        "L": "540",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "540 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": true
      },
      {
        "sku": "CXPS-2031",
        "L": "480",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "480 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": true
      },
      {
        "sku": "CXPS-2051",
        "L": "380",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "380 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": true
      },
      {
        "sku": "CXPS-2081",
        "L": "250",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "250 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": true
      },
      {
        "sku": "CXPS-2101",
        "L": "250",
        "W": "120",
        "H": null,
        "sizeText": null,
        "raw": "250 x 120",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPS",
        "isLid": true
      }
    ],
    "imageAspect": 1.585
  },
  {
    "slug": "perforated-tray-round",
    "prefix": "CXPU / CXPR",
    "prefixes": [
      "CXPU",
      "CXPR"
    ],
    "section": "Perforated Trays",
    "name": "Perforated Trays — Round Pattern",
    "subtitle": "",
    "summary": "Round perforation in two hole sizes: the pattern to ask for when the load is fine instruments that catch and bend in a square grid.",
    "catalogueTitle": "Perforated Trays (Round pattern)",
    "variants": [
      {
        "code": "CXPR",
        "label": "Round corner"
      },
      {
        "code": "CXPU",
        "label": "Chamfer corner"
      }
    ],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304(ASTM)",
      "Steel sheet": "1.0mm",
      "Perforation": "Round pattern 8.0mm & 4.8mm dia."
    },
    "image": "/catalogue/img/p09/p09-perforated-trays-punching-processed-01-270x325.png",
    "imageAlt": "/catalogue/img/p09/p09-perforated-trays-punching-processed-02-319x247.png",
    "imageFlag": "ok",
    "details": [
      {
        "src": "/catalogue/img/p09/p09-perforated-trays-punching-processed-04-163x133.jpg",
        "caption": "Round / Chamfer Corner — with easy locking system",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p09/p09-perforated-trays-punching-processed-05-163x133.png",
        "caption": "Round-pattern perforation — 8.0 & 4.8 mm dia.",
        "flag": "low_res"
      },
      {
        "src": "/catalogue/img/p09/p09-perforated-trays-punching-processed-06-276x183.png",
        "caption": "LIDs (optional)",
        "flag": "ok"
      }
    ],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      7
    ],
    "sizes": [
      {
        "sku": "CXPU-2010",
        "L": "540",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2014",
        "L": "540",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "540 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2018",
        "L": "540",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "540 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2030",
        "L": "480",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2034",
        "L": "480",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "480 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2038",
        "L": "480",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "480 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2050",
        "L": "380",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "380 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2054",
        "L": "380",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "380 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2058",
        "L": "380",
        "W": "250",
        "H": "90",
        "sizeText": null,
        "raw": "380 x 250 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2080",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2088",
        "L": "250",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2100",
        "L": "250",
        "W": "120",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 120 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2104",
        "L": "250",
        "W": "120",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 120 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2108",
        "L": "250",
        "W": "120",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 120 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPR-2010",
        "L": "540",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "540 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2014",
        "L": "540",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "540 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2018",
        "L": "540",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "540 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2030",
        "L": "480",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "480 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2034",
        "L": "480",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "480 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2038",
        "L": "480",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "480 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2050",
        "L": "380",
        "W": "250",
        "H": "50",
        "sizeText": null,
        "raw": "380 x 250 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2054",
        "L": "380",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "380 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2058",
        "L": "380",
        "W": "250",
        "H": "90",
        "sizeText": null,
        "raw": "380 x 250 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2080",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2088",
        "L": "250",
        "W": "240",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 240 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2100",
        "L": "250",
        "W": "120",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 120 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2104",
        "L": "250",
        "W": "120",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 120 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2108",
        "L": "250",
        "W": "120",
        "H": "90",
        "sizeText": null,
        "raw": "250 x 120 x 90",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPU-2011",
        "L": "540",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "540 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2031",
        "L": "480",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "480 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2051",
        "L": "380",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "380 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2081",
        "L": "250",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "250 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPU-2101",
        "L": "250",
        "W": "120",
        "H": null,
        "sizeText": null,
        "raw": "250 x 120",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPU",
        "isLid": false
      },
      {
        "sku": "CXPR-2011",
        "L": "540",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "540 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2031",
        "L": "480",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "480 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2051",
        "L": "380",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "380 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2081",
        "L": "250",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "250 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      },
      {
        "sku": "CXPR-2101",
        "L": "250",
        "W": "120",
        "H": null,
        "sizeText": null,
        "raw": "250 x 120",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXPR",
        "isLid": false
      }
    ],
    "imageAspect": 0.8308
  },
  {
    "slug": "dental-ster-tray",
    "prefix": "CXPD",
    "prefixes": [
      "CXPD"
    ],
    "section": "Perforated Trays",
    "name": "Dental Sterilization Tray",
    "subtitle": "Shallow, divided",
    "summary": "Shallow and divided, so a dental set lies in order and lifts out at the chairside without hunting.",
    "catalogueTitle": "Dental Sterilization Tray",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "Fine round",
      "Interior": "Fixed divider",
      "Walls": "Shallow",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpd-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpd-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPD-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "instrument-ster-tray",
    "prefix": "CXPI",
    "prefixes": [
      "CXPI"
    ],
    "section": "Perforated Trays",
    "name": "Instrument Sterilization Tray",
    "subtitle": "Wide round perforation",
    "summary": "Wide perforation and a rolled rim: the plain bench tray that drains, cleans easily and has no edge to catch a glove.",
    "catalogueTitle": "Instrument Sterilization Tray",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "Wide round, base only",
      "Corners": "Drawn, radiused",
      "Rim": "Rolled",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpi-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpi-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPI-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPI",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "surgical-instrument-box",
    "prefix": "CXPX",
    "prefixes": [
      "CXPX"
    ],
    "section": "Perforated Trays",
    "name": "Surgical Instrument Box",
    "subtitle": "Perforated, lidded",
    "summary": "Perforated on every face, so steam reaches the set from all sides and the box is sterilised and stored as one unit.",
    "catalogueTitle": "Surgical Instrument Box",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "All faces, round",
      "Lid": "Loose, perforated",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpx-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpx-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPX-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPX",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "surgical-ster-tray-rect",
    "prefix": "CXPY",
    "prefixes": [
      "CXPY"
    ],
    "section": "Perforated Trays",
    "name": "Surgical Sterilization Tray",
    "subtitle": "Rectangular, drop handles",
    "summary": "Drop handles at both ends, because loaded surgical trays get carried wet — the point where a light tray bends.",
    "catalogueTitle": "Surgical Sterilization Tray",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "Base and sides",
      "Handles": "Drop, both ends",
      "Rim": "Reinforced",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpy-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpy-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPY-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPY",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "surgical-ster-tray-chamfer",
    "prefix": "CXPY",
    "prefixes": [
      "CXPY"
    ],
    "section": "Perforated Trays",
    "name": "Surgical Sterilization Tray — Chamfered",
    "subtitle": "Cut-corner, drop handles",
    "summary": "The cut-corner body, for when the tray has to sit inside an angled container or clear a fixed corner.",
    "catalogueTitle": "Surgical Sterilization Tray — Chamfered",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Body": "Chamfered corners",
      "Perforation": "Base and sides",
      "Handles": "Drop",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpy-1002.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpy-1002.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPY-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPY",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "ophthalmic-case",
    "prefix": "CXPO",
    "prefixes": [
      "CXPO"
    ],
    "section": "Perforated Trays",
    "name": "Ophthalmic Instrument Case",
    "subtitle": "Silicone retaining bars",
    "summary": "Silicone bars hold microsurgical instruments apart so delicate tips never touch — the single most expensive thing to get wrong.",
    "catalogueTitle": "Ophthalmic Instrument Case",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Retention": "Silicone bars",
      "Lid": "Hinged, perforated",
      "Intended for": "Microsurgical and ophthalmic instruments",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpo-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpo-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPO-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPO",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "ophthalmic-basket",
    "prefix": "CXPO",
    "prefixes": [
      "CXPO"
    ],
    "section": "Perforated Trays",
    "name": "Ophthalmic Sterilization Basket",
    "subtitle": "Lidded, fine perforation",
    "summary": "Fine perforation with interior holders, so an ophthalmic set is processed and stored without being re-laid by hand.",
    "catalogueTitle": "Ophthalmic Sterilization Basket",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "Fine, all faces",
      "Interior": "Instrument holders",
      "Lid": "Integral",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpo-1002.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpo-1002.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPO-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPO",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "perf-basket",
    "prefix": "CXPB",
    "prefixes": [
      "CXPB"
    ],
    "section": "Perforated Trays",
    "name": "Perforated Sterilization Basket",
    "subtitle": "Open, mesh base",
    "summary": "Open basket with a mesh base for free drainage — for washer-disinfector loads that must come out dry.",
    "catalogueTitle": "Perforated Sterilization Basket",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Base": "Fine mesh",
      "Walls": "Perforated",
      "Rim": "Rolled, reinforced",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpb-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpb-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPB-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPB",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "perf-box-frame",
    "prefix": "CXPB",
    "prefixes": [
      "CXPB"
    ],
    "section": "Perforated Trays",
    "name": "Perforated Sterilization Box",
    "subtitle": "Framed lid, latched",
    "summary": "A rigid framed lid stays flat under stacking load, so the box below isn't crushed and the set stays shut.",
    "catalogueTitle": "Perforated Sterilization Box",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Lid": "Framed, hinged",
      "Closure": "Side latches",
      "Body": "Fine mesh",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpb-1002.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpb-1002.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPB-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPB",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "micro-cases",
    "prefix": "CXPB",
    "prefixes": [
      "CXPB"
    ],
    "section": "Perforated Trays",
    "name": "Micro Instrument Cases",
    "subtitle": "Slim, perforated, latched",
    "summary": "Single instruments and small sets go missing in a big tray. Each case latches and carries its own contents through the cycle.",
    "catalogueTitle": "Micro Instrument Cases",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "All faces",
      "Closure": "Sliding latch",
      "Profile": "Slim",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxpb-1003.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpb-1003.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPB-1003",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPB",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "basket-lid",
    "prefix": "CXPL",
    "prefixes": [
      "CXPL"
    ],
    "section": "Perforated Trays",
    "name": "Sterilization Basket Lid",
    "subtitle": "Perforated, retaining clips",
    "summary": "Turns an open basket into a closed unit — ordered to match the basket you already run.",
    "catalogueTitle": "Sterilization Basket Lid",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Perforation": "Fine round",
      "Retention": "Sprung clips",
      "Supplied": "Separately, matched to basket"
    },
    "image": "/catalogue/img/extras/cxpl-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxpl-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXPL-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXPL",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "transportation-baskets",
    "prefix": "CXUT / CXUTA",
    "prefixes": [
      "CXUT",
      "CXUTA"
    ],
    "section": "Universal Trays",
    "name": "Transportation Baskets",
    "subtitle": "Stackable transport baskets — steel & aluminium",
    "summary": "1.5 mm sheet, heavier than a sterilisation tray, because transport is where trays get bent — for sets carried loaded and wet between departments.",
    "catalogueTitle": "Transportation Baskets",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Sheet": "1.5 mm"
    },
    "image": "/catalogue/img/p24/p24-transportation-baskets-01-478x350.png",
    "imageAlt": "/catalogue/img/p24/p24-transportation-baskets-02-408x260.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Steel — CXUT",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p24/p24-transportation-baskets-01-478x350.png",
          "/catalogue/img/p24/p24-transportation-baskets-02-408x260.png"
        ],
        "sizes": [
          {
            "sku": "CXUT-2025",
            "L": "480",
            "W": "250",
            "H": "100",
            "sizeText": null,
            "raw": "480 x 250 x 100",
            "lid": null,
            "note": "(3 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          },
          {
            "sku": "CXUT-2900",
            "L": "400",
            "W": "200",
            "H": "100",
            "sizeText": null,
            "raw": "400 x 200 x 100",
            "lid": null,
            "note": "(3 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          },
          {
            "sku": "CXUT-2901",
            "L": "450",
            "W": "250",
            "H": "100",
            "sizeText": null,
            "raw": "450 x 250 x 100",
            "lid": null,
            "note": "(3 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          },
          {
            "sku": "CXUT-2114",
            "L": "300",
            "W": "200",
            "H": "70",
            "sizeText": null,
            "raw": "300 x 200 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          },
          {
            "sku": "CXUT-2124",
            "L": "350",
            "W": "250",
            "H": "70",
            "sizeText": null,
            "raw": "350 x 250 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          },
          {
            "sku": "CXUT-2084",
            "L": "250",
            "W": "240",
            "H": "70",
            "sizeText": null,
            "raw": "250 x 240 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          },
          {
            "sku": "CXUT-2902",
            "L": "250",
            "W": "200",
            "H": "70",
            "sizeText": null,
            "raw": "250 x 200 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUT",
            "isLid": false
          }
        ]
      },
      {
        "label": "Aluminium — CXUTA · optional",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p24/p24-transportation-baskets-03-566x434.png",
          "/catalogue/img/p24/p24-transportation-baskets-04-400x242.png"
        ],
        "sizes": [
          {
            "sku": "CXUTA-2025",
            "L": "480",
            "W": "250",
            "H": "100",
            "sizeText": null,
            "raw": "480 x 250 x 100",
            "lid": null,
            "note": "(3 layers)",
            "needsReview": false,
            "variant": "CXUTA",
            "isLid": false
          },
          {
            "sku": "CXUTA-2900",
            "L": "400",
            "W": "200",
            "H": "100",
            "sizeText": null,
            "raw": "400 x 200 x 100",
            "lid": null,
            "note": "(3 layers)",
            "needsReview": false,
            "variant": "CXUTA",
            "isLid": false
          },
          {
            "sku": "CXUTA-2901",
            "L": "450",
            "W": "250",
            "H": "100",
            "sizeText": null,
            "raw": "450 x 250 x 100",
            "lid": null,
            "note": "(3 layers)",
            "needsReview": false,
            "variant": "CXUTA",
            "isLid": false
          },
          {
            "sku": "CXUTA-2114",
            "L": "300",
            "W": "200",
            "H": "70",
            "sizeText": null,
            "raw": "300 x 200 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTA",
            "isLid": false
          },
          {
            "sku": "CXUTA-2084",
            "L": "250",
            "W": "240",
            "H": "70",
            "sizeText": null,
            "raw": "250 x 240 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTA",
            "isLid": false
          },
          {
            "sku": "CXUTA-2902",
            "L": "250",
            "W": "200",
            "H": "70",
            "sizeText": null,
            "raw": "250 x 200 x 70",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTA",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      14
    ],
    "sizes": [
      {
        "sku": "CXUT-2025",
        "L": "480",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "480 x 250 x 100",
        "lid": null,
        "note": "(3 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUT-2900",
        "L": "400",
        "W": "200",
        "H": "100",
        "sizeText": null,
        "raw": "400 x 200 x 100",
        "lid": null,
        "note": "(3 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUT-2901",
        "L": "450",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "450 x 250 x 100",
        "lid": null,
        "note": "(3 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUT-2114",
        "L": "300",
        "W": "200",
        "H": "70",
        "sizeText": null,
        "raw": "300 x 200 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUT-2124",
        "L": "350",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "350 x 250 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUT-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUT-2902",
        "L": "250",
        "W": "200",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 200 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUT",
        "isLid": false
      },
      {
        "sku": "CXUTA-2025",
        "L": "480",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "480 x 250 x 100",
        "lid": null,
        "note": "(3 layers)",
        "needsReview": false,
        "variant": "CXUTA",
        "isLid": false
      },
      {
        "sku": "CXUTA-2900",
        "L": "400",
        "W": "200",
        "H": "100",
        "sizeText": null,
        "raw": "400 x 200 x 100",
        "lid": null,
        "note": "(3 layers)",
        "needsReview": false,
        "variant": "CXUTA",
        "isLid": false
      },
      {
        "sku": "CXUTA-2901",
        "L": "450",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "450 x 250 x 100",
        "lid": null,
        "note": "(3 layers)",
        "needsReview": false,
        "variant": "CXUTA",
        "isLid": false
      },
      {
        "sku": "CXUTA-2114",
        "L": "300",
        "W": "200",
        "H": "70",
        "sizeText": null,
        "raw": "300 x 200 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTA",
        "isLid": false
      },
      {
        "sku": "CXUTA-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTA",
        "isLid": false
      },
      {
        "sku": "CXUTA-2902",
        "L": "250",
        "W": "200",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 200 x 70",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTA",
        "isLid": false
      }
    ],
    "imageAspect": 1.3657
  },
  {
    "slug": "universal-trays-silicon",
    "prefix": "CXUTD",
    "prefixes": [
      "CXUTD"
    ],
    "section": "Universal Trays",
    "name": "Universal Trays",
    "subtitle": "For surgical, orthopaedic & ophthalmic sets — silicon-strip fitted",
    "summary": "Silicone strips hold surgical, orthopaedic and ophthalmic sets in sequence: no tips touching, and nothing to re-sort at the count.",
    "catalogueTitle": "Universal Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p27/p27-suitable-for-surgical-sets-01-438x438.png",
    "imageAlt": "/catalogue/img/p27/p27-suitable-for-surgical-sets-02-439x324.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Deep trays — CXUTD · silicon strips fitted, optional",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p27/p27-suitable-for-surgical-sets-01-438x438.png",
          "/catalogue/img/p27/p27-suitable-for-surgical-sets-02-439x324.png"
        ],
        "sizes": [
          {
            "sku": "CXUTD-2900",
            "L": "500",
            "W": "250",
            "H": "100",
            "sizeText": null,
            "raw": "500 x 250 x 100",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          },
          {
            "sku": "CXUTD-2901",
            "L": "400",
            "W": "200",
            "H": "100",
            "sizeText": null,
            "raw": "400 x 200 x 100",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          },
          {
            "sku": "CXUTD-2122",
            "L": "350",
            "W": "250",
            "H": "60",
            "sizeText": null,
            "raw": "350 x 250 x 60",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          },
          {
            "sku": "CXUTD-2125",
            "L": "350",
            "W": "250",
            "H": "100",
            "sizeText": null,
            "raw": "350 x 250 x 100",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          },
          {
            "sku": "CXUTD-2082",
            "L": "250",
            "W": "240",
            "H": "60",
            "sizeText": null,
            "raw": "250 x 240 x 60",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          }
        ]
      },
      {
        "label": "Shallow trays — CXUTD",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p27/p27-suitable-for-surgical-sets-03-383x430.png",
          "/catalogue/img/p27/p27-suitable-for-surgical-sets-04-479x277.png"
        ],
        "sizes": [
          {
            "sku": "CXUTD-2902",
            "L": "250",
            "W": "150",
            "H": "22",
            "sizeText": null,
            "raw": "250 x 150 x 22",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          },
          {
            "sku": "CXUTD-2903",
            "L": "250",
            "W": "150",
            "H": "32",
            "sizeText": null,
            "raw": "250 x 150 x 32",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          },
          {
            "sku": "CXUTD-2110",
            "L": "300",
            "W": "200",
            "H": "52",
            "sizeText": null,
            "raw": "300 x 200 x 52",
            "lid": null,
            "note": "(2 layers)",
            "needsReview": false,
            "variant": "CXUTD",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      16
    ],
    "sizes": [
      {
        "sku": "CXUTD-2900",
        "L": "500",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "500 x 250 x 100",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2901",
        "L": "400",
        "W": "200",
        "H": "100",
        "sizeText": null,
        "raw": "400 x 200 x 100",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2122",
        "L": "350",
        "W": "250",
        "H": "60",
        "sizeText": null,
        "raw": "350 x 250 x 60",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2125",
        "L": "350",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "350 x 250 x 100",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2082",
        "L": "250",
        "W": "240",
        "H": "60",
        "sizeText": null,
        "raw": "250 x 240 x 60",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2902",
        "L": "250",
        "W": "150",
        "H": "22",
        "sizeText": null,
        "raw": "250 x 150 x 22",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2903",
        "L": "250",
        "W": "150",
        "H": "32",
        "sizeText": null,
        "raw": "250 x 150 x 32",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2110",
        "L": "300",
        "W": "200",
        "H": "52",
        "sizeText": null,
        "raw": "300 x 200 x 52",
        "lid": null,
        "note": "(2 layers)",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "universal-trays-boxes",
    "prefix": "CXUB / CXCC / CXUTO",
    "prefixes": [
      "CXUB",
      "CXCC",
      "CXUTO"
    ],
    "section": "Universal Trays",
    "name": "Universal Trays & Sterilization Boxes",
    "subtitle": "Needle box, laryngoscope tray & universal trays",
    "summary": "Tray and lidded box in one range, so a set can be sterilised open and stored closed without ever being moved into a second container.",
    "catalogueTitle": "Universal Trays & Sterilization Boxes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p28/p28-suitable-for-surgical-sets-01-342x172.png",
    "imageAlt": "/catalogue/img/p28/p28-suitable-for-surgical-sets-03-402x203.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      17
    ],
    "sizes": [
      {
        "sku": "CXUB-3900",
        "L": "150",
        "W": "90",
        "H": "16",
        "sizeText": null,
        "raw": "150 x 90 x 16",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUB",
        "isLid": false
      },
      {
        "sku": "CXUB-2901",
        "L": "220",
        "W": "110",
        "H": "20",
        "sizeText": null,
        "raw": "220 x 110 x 20",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUB",
        "isLid": false
      },
      {
        "sku": "CXCC-8765",
        "L": "218",
        "W": "188",
        "H": "36",
        "sizeText": null,
        "raw": "218 x 188 x 36",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXUTO-2025",
        "L": "480",
        "W": "250",
        "H": "100",
        "sizeText": null,
        "raw": "480 x 250 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTO",
        "isLid": false
      },
      {
        "sku": "CXUTO-2044",
        "L": "400",
        "W": "250",
        "H": "70",
        "sizeText": null,
        "raw": "400 x 250 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTO",
        "isLid": false
      },
      {
        "sku": "CXUTO-2110",
        "L": "300",
        "W": "200",
        "H": "50",
        "sizeText": null,
        "raw": "300 x 200 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTO",
        "isLid": false
      },
      {
        "sku": "CXUTO-2080",
        "L": "250",
        "W": "240",
        "H": "50",
        "sizeText": null,
        "raw": "250 x 240 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTO",
        "isLid": false
      },
      {
        "sku": "CXUTO-2084",
        "L": "250",
        "W": "240",
        "H": "70",
        "sizeText": null,
        "raw": "250 x 240 x 70",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTO",
        "isLid": false
      }
    ],
    "imageAspect": 1.9884
  },
  {
    "slug": "dilator-set-boxes",
    "prefix": "CXUTD",
    "prefixes": [
      "CXUTD"
    ],
    "section": "Universal Trays",
    "name": "Universal Trays — Boxes for Dilator Sets",
    "subtitle": "Boxes for dilator sets",
    "summary": "Dilators are long, graduated and easy to put back in the wrong order — each size keeps its own place through the cycle.",
    "catalogueTitle": "Universal Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p29/p29-universal-trays-01-326x406.png",
    "imageAlt": "/catalogue/img/p29/p29-universal-trays-02-305x258.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      18
    ],
    "sizes": [
      {
        "sku": "CXUTD-2904",
        "L": "225",
        "W": "150",
        "H": "30",
        "sizeText": null,
        "raw": "225 x 150 x 30",
        "lid": null,
        "note": "for 8-pcs double ended",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-3905",
        "L": "210",
        "W": "152",
        "H": "56",
        "sizeText": null,
        "raw": "210 x 152 x 56",
        "lid": null,
        "note": "for 13-pcs double ended",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-3906",
        "L": "201",
        "W": "110",
        "H": "47",
        "sizeText": null,
        "raw": "201 x 110 x 47",
        "lid": null,
        "note": "for 14-pcs double ended",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-3907",
        "L": "202",
        "W": "110",
        "H": "47",
        "sizeText": null,
        "raw": "202 x 110 x 47",
        "lid": null,
        "note": "for 14-pcs single ended",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2908",
        "L": "307",
        "W": "204",
        "H": "63",
        "sizeText": null,
        "raw": "307 x 204 x 63",
        "lid": null,
        "note": "for 26-pcs single ended",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-2909",
        "L": "308",
        "W": "246",
        "H": "54",
        "sizeText": null,
        "raw": "308 x 246 x 54",
        "lid": null,
        "note": "for 29-pcs single ended curved",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      }
    ],
    "imageAspect": 0.803
  },
  {
    "slug": "transport-trays-racks",
    "prefix": "CXUTT / CXUTF / CXUR",
    "prefixes": [
      "CXUTT",
      "CXUTF",
      "CXUR"
    ],
    "section": "Universal Trays",
    "name": "Universal / Transportation Trays & Racks",
    "subtitle": "Large transport trays, tube racks & bottle-feeder racks",
    "summary": "Large transport trays with tube and bottle-feeder racks, for moving volume between CSSD, theatre and ward without repacking on the way.",
    "catalogueTitle": "Universal / Transportation Trays & Racks",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p30/p30-universal-transportation-trays-01-274x255.png",
    "imageAlt": "/catalogue/img/p30/p30-universal-transportation-trays-02-420x199.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      19
    ],
    "sizes": [
      {
        "sku": "CXUTT-2215",
        "L": "400",
        "W": "300",
        "H": "100",
        "sizeText": null,
        "raw": "400 x 300 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2219",
        "L": "400",
        "W": "300",
        "H": "150",
        "sizeText": null,
        "raw": "400 x 300 x 150",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2902",
        "L": "500",
        "W": "300",
        "H": "100",
        "sizeText": null,
        "raw": "500 x 300 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2903",
        "L": "500",
        "W": "300",
        "H": "200",
        "sizeText": null,
        "raw": "500 x 300 x 200",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2904",
        "L": "600",
        "W": "300",
        "H": "250",
        "sizeText": null,
        "raw": "600 x 300 x 250",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2905",
        "L": "600",
        "W": "300",
        "H": "300",
        "sizeText": null,
        "raw": "600 x 300 x 300",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2907",
        "L": "570",
        "W": "178",
        "H": "135",
        "sizeText": null,
        "raw": "570 x 178 x 135",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2908",
        "L": "650",
        "W": "178",
        "H": "135",
        "sizeText": null,
        "raw": "650 x 178 x 135",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2900",
        "L": "470",
        "W": "250",
        "H": null,
        "sizeText": null,
        "raw": "470 x 250",
        "lid": null,
        "note": "70/82",
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2901",
        "L": "470",
        "W": "330",
        "H": null,
        "sizeText": null,
        "raw": "470 x 330",
        "lid": null,
        "note": "70/82",
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTT-2906",
        "L": "530",
        "W": "300",
        "H": null,
        "sizeText": null,
        "raw": "530 x 300",
        "lid": null,
        "note": "70/82",
        "needsReview": false,
        "variant": "CXUTT",
        "isLid": false
      },
      {
        "sku": "CXUTF-2900",
        "L": "415",
        "W": "220",
        "H": "110",
        "sizeText": null,
        "raw": "415 x 220 x 110",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTF",
        "isLid": false
      },
      {
        "sku": "CXUR-3900",
        "L": "170",
        "W": "115",
        "H": "100",
        "sizeText": null,
        "raw": "170 x 115 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUR",
        "isLid": false
      }
    ],
    "imageAspect": 1.0745
  },
  {
    "slug": "univ-basket-square",
    "prefix": "CXUBS",
    "prefixes": [
      "CXUBS"
    ],
    "section": "Universal Trays",
    "name": "Universal Wire Basket — Square Mesh",
    "subtitle": "Welded square weave",
    "summary": "Close square weave: maximum open area for drying, minimum flat surface for soil to sit on.",
    "catalogueTitle": "Universal Wire Basket — Square Mesh",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Welded square wire mesh",
      "Rim": "Reinforced",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxubs-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxubs-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXUBS-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXUBS",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "univ-basket-open",
    "prefix": "CXUBS",
    "prefixes": [
      "CXUBS"
    ],
    "section": "Universal Trays",
    "name": "Universal Wire Basket — Open Weave",
    "subtitle": "Wide grid, footed",
    "summary": "Wide grid on a raised foot, for bulky loads that have to drain fast rather than sit in their own condensate.",
    "catalogueTitle": "Universal Wire Basket — Open Weave",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Wide welded grid",
      "Base": "Raised foot frame",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxubs-1002.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxubs-1002.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXUBS-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXUBS",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "univ-basket-lidded",
    "prefix": "CXUBS",
    "prefixes": [
      "CXUBS"
    ],
    "section": "Universal Trays",
    "name": "Universal Mesh Basket — Lidded",
    "subtitle": "Fine mesh, latched lid",
    "summary": "Fine mesh with a latched lid, so a set goes washer to shelf without ever being opened or repacked.",
    "catalogueTitle": "Universal Mesh Basket — Lidded",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Fine woven mesh",
      "Lid": "Hinged",
      "Closure": "Centre latch",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxubs-1003.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxubs-1003.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXUBS-1003",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXUBS",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "univ-basket-deep",
    "prefix": "CXUBS",
    "prefixes": [
      "CXUBS"
    ],
    "section": "Universal Trays",
    "name": "Universal Wire Mesh Basket — Deep",
    "subtitle": "Deep wall, open top",
    "summary": "Full-depth walls with reinforced corners — volume loads without the basket splaying under weight.",
    "catalogueTitle": "Universal Wire Mesh Basket — Deep",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Welded mesh",
      "Walls": "Full depth",
      "Corners": "Reinforced posts",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxubs-1004.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxubs-1004.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXUBS-1004",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXUBS",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "light-pattern-cassettes",
    "prefix": "CXCL",
    "prefixes": [
      "CXCL"
    ],
    "section": "Cassette Trays",
    "name": "Light Pattern Cassettes",
    "subtitle": "High quality — button lock & detachable hinges",
    "summary": "A light 30 mm cassette for practices running several sets a day — less mass to heat and dry means a faster turnaround per cycle.",
    "catalogueTitle": "Light Pattern Cassettes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "30 mm"
    },
    "image": "/catalogue/img/p46/p46-cassette-trays-01-381x269.png",
    "imageAlt": "/catalogue/img/p46/p46-cassette-trays-02-379x266.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      28,
      29
    ],
    "sizes": [
      {
        "sku": "CXCL-1105",
        "L": "205",
        "W": "78",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 78 x 30",
        "lid": null,
        "note": "05 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1107",
        "L": "205",
        "W": "104",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 104 x 30",
        "lid": null,
        "note": "07 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1108",
        "L": "205",
        "W": "142",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 142 x 30",
        "lid": null,
        "note": "08 instruments + accessory area",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1110",
        "L": "205",
        "W": "142",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 142 x 30",
        "lid": null,
        "note": "10 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1116",
        "L": "282",
        "W": "205",
        "H": "30",
        "sizeText": null,
        "raw": "282 x 205 x 30",
        "lid": null,
        "note": "16 instruments + accessory area",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1120",
        "L": "282",
        "W": "205",
        "H": "30",
        "sizeText": null,
        "raw": "282 x 205 x 30",
        "lid": null,
        "note": "20 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1125",
        "L": "205",
        "W": "78",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 78 x 30",
        "lid": null,
        "note": "05 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1127",
        "L": "205",
        "W": "104",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 104 x 30",
        "lid": null,
        "note": "07 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1130",
        "L": "205",
        "W": "142",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 142 x 30",
        "lid": null,
        "note": "10 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1140",
        "L": "282",
        "W": "205",
        "H": "30",
        "sizeText": null,
        "raw": "282 x 205 x 30",
        "lid": null,
        "note": "20 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1145",
        "L": "205",
        "W": "78",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 78 x 30",
        "lid": null,
        "note": "05 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1147",
        "L": "205",
        "W": "104",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 104 x 30",
        "lid": null,
        "note": "07 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1150",
        "L": "205",
        "W": "142",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 142 x 30",
        "lid": null,
        "note": "10 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1160",
        "L": "282",
        "W": "205",
        "H": "30",
        "sizeText": null,
        "raw": "282 x 205 x 30",
        "lid": null,
        "note": "20 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1165",
        "L": "205",
        "W": "78",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 78 x 30",
        "lid": null,
        "note": "05 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1167",
        "L": "205",
        "W": "104",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 104 x 30",
        "lid": null,
        "note": "07 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1170",
        "L": "205",
        "W": "142",
        "H": "30",
        "sizeText": null,
        "raw": "205 x 142 x 30",
        "lid": null,
        "note": "10 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      },
      {
        "sku": "CXCL-1180",
        "L": "282",
        "W": "205",
        "H": "30",
        "sizeText": null,
        "raw": "282 x 205 x 30",
        "lid": null,
        "note": "20 instruments",
        "needsReview": false,
        "variant": "CXCL",
        "isLid": false
      }
    ],
    "imageAspect": 1.4164
  },
  {
    "slug": "instruments-plus-cassettes",
    "prefix": "CXCP / CXCC",
    "prefixes": [
      "CXCP",
      "CXCC"
    ],
    "section": "Cassette Trays",
    "name": "Instruments Plus Cassette Trays",
    "subtitle": "With adjustable driver & detachable hinges — button lock",
    "summary": "Adjustable driver and detachable hinges, so you reconfigure the cassette when the set changes instead of buying another one.",
    "catalogueTitle": "Instruments Plus Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "32 mm (all sizes)"
    },
    "image": "/catalogue/img/p48/p48-08-plus-instruments-01-438x236.png",
    "imageAlt": "/catalogue/img/p48/p48-08-plus-instruments-02-344x188.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Instruments Plus — CXCP series",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p48/p48-08-plus-instruments-01-438x236.png",
          "/catalogue/img/p48/p48-08-plus-instruments-02-344x188.png"
        ],
        "sizes": [
          {
            "sku": "CXCP-2205",
            "L": "202",
            "W": "130",
            "H": "32",
            "sizeText": null,
            "raw": "202 x 130 x 32",
            "lid": null,
            "note": "05 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2208",
            "L": "202",
            "W": "140",
            "H": "32",
            "sizeText": null,
            "raw": "202 x 140 x 32",
            "lid": null,
            "note": "08 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2210",
            "L": "202",
            "W": "195",
            "H": "32",
            "sizeText": null,
            "raw": "202 x 195 x 32",
            "lid": null,
            "note": "10 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2212",
            "L": "267",
            "W": "165",
            "H": "32",
            "sizeText": null,
            "raw": "267 x 165 x 32",
            "lid": null,
            "note": "12 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2215",
            "L": "280",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "280 x 202 x 32",
            "lid": null,
            "note": "15 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2216",
            "L": "280",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "280 x 202 x 32",
            "lid": null,
            "note": "16 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2214",
            "L": "370",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "370 x 202 x 32",
            "lid": null,
            "note": "4 elevator + 10 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          },
          {
            "sku": "CXCP-2220",
            "L": "370",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "370 x 202 x 32",
            "lid": null,
            "note": "20 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCP",
            "isLid": false
          }
        ]
      },
      {
        "label": "Instruments Plus — CXCC series",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p48/p48-08-plus-instruments-03-501x243.png",
          "/catalogue/img/p48/p48-08-plus-instruments-04-291x176.png"
        ],
        "sizes": [
          {
            "sku": "CXCC-2205",
            "L": "202",
            "W": "130",
            "H": "32",
            "sizeText": null,
            "raw": "202 x 130 x 32",
            "lid": null,
            "note": "05 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2208",
            "L": "202",
            "W": "140",
            "H": "32",
            "sizeText": null,
            "raw": "202 x 140 x 32",
            "lid": null,
            "note": "08 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2210",
            "L": "202",
            "W": "195",
            "H": "32",
            "sizeText": null,
            "raw": "202 x 195 x 32",
            "lid": null,
            "note": "10 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2212",
            "L": "267",
            "W": "165",
            "H": "32",
            "sizeText": null,
            "raw": "267 x 165 x 32",
            "lid": null,
            "note": "12 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2215",
            "L": "280",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "280 x 202 x 32",
            "lid": null,
            "note": "15 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2216",
            "L": "280",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "280 x 202 x 32",
            "lid": null,
            "note": "16 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2214",
            "L": "370",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "370 x 202 x 32",
            "lid": null,
            "note": "4 elevator + 10 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          },
          {
            "sku": "CXCC-2220",
            "L": "370",
            "W": "202",
            "H": "32",
            "sizeText": null,
            "raw": "370 x 202 x 32",
            "lid": null,
            "note": "20 instruments + accessory area",
            "needsReview": true,
            "variant": "CXCC",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      30
    ],
    "sizes": [
      {
        "sku": "CXCP-2205",
        "L": "202",
        "W": "130",
        "H": "32",
        "sizeText": null,
        "raw": "202 x 130 x 32",
        "lid": null,
        "note": "05 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2208",
        "L": "202",
        "W": "140",
        "H": "32",
        "sizeText": null,
        "raw": "202 x 140 x 32",
        "lid": null,
        "note": "08 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2210",
        "L": "202",
        "W": "195",
        "H": "32",
        "sizeText": null,
        "raw": "202 x 195 x 32",
        "lid": null,
        "note": "10 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2212",
        "L": "267",
        "W": "165",
        "H": "32",
        "sizeText": null,
        "raw": "267 x 165 x 32",
        "lid": null,
        "note": "12 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2215",
        "L": "280",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 202 x 32",
        "lid": null,
        "note": "15 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2216",
        "L": "280",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 202 x 32",
        "lid": null,
        "note": "16 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2214",
        "L": "370",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "370 x 202 x 32",
        "lid": null,
        "note": "4 elevator + 10 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-2220",
        "L": "370",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "370 x 202 x 32",
        "lid": null,
        "note": "20 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCC-2205",
        "L": "202",
        "W": "130",
        "H": "32",
        "sizeText": null,
        "raw": "202 x 130 x 32",
        "lid": null,
        "note": "05 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2208",
        "L": "202",
        "W": "140",
        "H": "32",
        "sizeText": null,
        "raw": "202 x 140 x 32",
        "lid": null,
        "note": "08 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2210",
        "L": "202",
        "W": "195",
        "H": "32",
        "sizeText": null,
        "raw": "202 x 195 x 32",
        "lid": null,
        "note": "10 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2212",
        "L": "267",
        "W": "165",
        "H": "32",
        "sizeText": null,
        "raw": "267 x 165 x 32",
        "lid": null,
        "note": "12 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2215",
        "L": "280",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 202 x 32",
        "lid": null,
        "note": "15 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2216",
        "L": "280",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 202 x 32",
        "lid": null,
        "note": "16 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2214",
        "L": "370",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "370 x 202 x 32",
        "lid": null,
        "note": "4 elevator + 10 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2220",
        "L": "370",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "370 x 202 x 32",
        "lid": null,
        "note": "20 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.8559
  },
  {
    "slug": "twin-cassette-trays",
    "prefix": "CXCC / CXCP",
    "prefixes": [
      "CXCC",
      "CXCP"
    ],
    "section": "Cassette Trays",
    "name": "Twin Cassette Trays",
    "subtitle": "Button lock — also available with hinges or detachable hinges",
    "summary": "Two sets in one cassette, for the practice running procedures back to back and short of autoclave space.",
    "catalogueTitle": "Twin Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p49/p49-for-osteotome-set-01-567x285.png",
    "imageAlt": "/catalogue/img/p49/p49-for-osteotome-set-02-427x246.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      31
    ],
    "sizes": [
      {
        "sku": "CXCC-1910",
        "L": "200",
        "W": "85",
        "H": "44",
        "sizeText": null,
        "raw": "200 x 85 x 44",
        "lid": null,
        "note": "10 instr · detachable",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1920",
        "L": "200",
        "W": "140",
        "H": "44",
        "sizeText": null,
        "raw": "200 x 140 x 44",
        "lid": null,
        "note": "20 instr · detachable",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCP-1910",
        "L": "200",
        "W": "85",
        "H": "44",
        "sizeText": null,
        "raw": "200 x 85 x 44",
        "lid": null,
        "note": "10 instr · hinges",
        "needsReview": false,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCP-1920",
        "L": "200",
        "W": "140",
        "H": "44",
        "sizeText": null,
        "raw": "200 x 140 x 44",
        "lid": null,
        "note": "20 instr · hinges",
        "needsReview": false,
        "variant": "CXCP",
        "isLid": false
      },
      {
        "sku": "CXCC-9810",
        "L": "200",
        "W": "182",
        "H": "34",
        "sizeText": null,
        "raw": "200 x 182 x 34",
        "lid": null,
        "note": "osteotome set",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9813",
        "L": "200",
        "W": "200",
        "H": "34",
        "sizeText": null,
        "raw": "200 x 200 x 34",
        "lid": null,
        "note": "osteotome set with hammer",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.9895
  },
  {
    "slug": "bracket-lock-cassettes",
    "prefix": "CXCC / CXCK / CXCH",
    "prefixes": [
      "CXCC",
      "CXCK",
      "CXCH"
    ],
    "section": "Cassette Trays",
    "name": "Bracket-Lock Cassette Trays",
    "subtitle": "Bracket-lock instrument cassettes with silicone stringers",
    "summary": "Silicone stringers hold 5 to 20 instruments apart by the shank, so working ends never touch and the count is readable at a glance.",
    "catalogueTitle": "Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "23 mm (all sizes)",
      "Capacity": "5 / 7 / 10 / 20 instruments"
    },
    "image": "/catalogue/img/p50/p50-07-instruments-01-359x264.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [
      {
        "src": "/catalogue/img/p50/p50-07-instruments-02-437x235.png",
        "caption": "Silicone instrument stringers",
        "flag": "ok"
      }
    ],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      32
    ],
    "sizes": [
      {
        "sku": "CXCC-1505",
        "L": "180",
        "W": "82",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 82 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1507",
        "L": "180",
        "W": "105",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 105 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1510",
        "L": "180",
        "W": "135",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 135 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1520",
        "L": "265",
        "W": "180",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 180 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCK-1505",
        "L": "190",
        "W": "70",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 70 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCK-1507",
        "L": "190",
        "W": "96",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 96 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCK-1510",
        "L": "190",
        "W": "132",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 132 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCK-1520",
        "L": "265",
        "W": "190",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 190 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCH-1505",
        "L": "190",
        "W": "82",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 82 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-1507",
        "L": "190",
        "W": "105",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 105 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-1510",
        "L": "190",
        "W": "135",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 135 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-1520",
        "L": "265",
        "W": "190",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 190 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      }
    ],
    "imageAspect": 1.3598
  },
  {
    "slug": "four-lock-cassettes",
    "prefix": "CXCG / CXCJ / CXCQ / CXCA",
    "prefixes": [
      "CXCG",
      "CXCJ",
      "CXCQ",
      "CXCA"
    ],
    "section": "Cassette Trays",
    "name": "Cassette Trays — Four Lock Types",
    "subtitle": "Capsule click lock & strip lock — common footprints",
    "summary": "The same 22 mm tray in four lock types, so you can match the catch your staff already open one-handed, gloved.",
    "catalogueTitle": "Cassette Trays — Four Lock Types",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "22 mm"
    },
    "image": "/catalogue/img/p51/p51-strip-lock-01-446x236.png",
    "imageAlt": "/catalogue/img/p51/p51-strip-lock-02-456x252.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      33
    ],
    "sizes": [
      {
        "sku": "CXCG-1005",
        "L": "180",
        "W": "80",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 80 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCG",
        "isLid": false
      },
      {
        "sku": "CXCG-1007",
        "L": "180",
        "W": "105",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 105 x 22",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCG",
        "isLid": false
      },
      {
        "sku": "CXCG-1010",
        "L": "180",
        "W": "132",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 132 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCG",
        "isLid": false
      },
      {
        "sku": "CXCG-1020",
        "L": "260",
        "W": "180",
        "H": "22",
        "sizeText": null,
        "raw": "260 x 180 x 22",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCG",
        "isLid": false
      },
      {
        "sku": "CXCJ-1005",
        "L": "180",
        "W": "80",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 80 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCJ",
        "isLid": false
      },
      {
        "sku": "CXCJ-1007",
        "L": "180",
        "W": "105",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 105 x 22",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCJ",
        "isLid": false
      },
      {
        "sku": "CXCJ-1010",
        "L": "180",
        "W": "130",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 130 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCJ",
        "isLid": false
      },
      {
        "sku": "CXCJ-1020",
        "L": "260",
        "W": "180",
        "H": "22",
        "sizeText": null,
        "raw": "260 x 180 x 22",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCJ",
        "isLid": false
      },
      {
        "sku": "CXCQ-1005",
        "L": "180",
        "W": "80",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 80 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCQ-1007",
        "L": "180",
        "W": "105",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 105 x 22",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCQ-1010",
        "L": "180",
        "W": "130",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 130 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCQ-1020",
        "L": "260",
        "W": "180",
        "H": "22",
        "sizeText": null,
        "raw": "260 x 180 x 22",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCA-1005",
        "L": "180",
        "W": "80",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 80 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCA",
        "isLid": false
      },
      {
        "sku": "CXCA-1007",
        "L": "180",
        "W": "105",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 105 x 22",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCA",
        "isLid": false
      },
      {
        "sku": "CXCA-1010",
        "L": "180",
        "W": "130",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 130 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCA",
        "isLid": false
      },
      {
        "sku": "CXCA-1020",
        "L": "260",
        "W": "180",
        "H": "22",
        "sizeText": null,
        "raw": "260 x 180 x 22",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCA",
        "isLid": false
      }
    ],
    "imageAspect": 1.8898
  },
  {
    "slug": "round-bottom-cassettes",
    "prefix": "CXCK / CXCQ / CXCC / CXCS",
    "prefixes": [
      "CXCK",
      "CXCQ",
      "CXCC",
      "CXCS"
    ],
    "section": "Cassette Trays",
    "name": "Round-Bottom Cassette Trays",
    "subtitle": "Strip lock, capsule click lock, round bottom & full lid",
    "summary": "A round bottom leaves no square internal corner for soil to sit in — the cassette to specify where cleaning is validated and audited.",
    "catalogueTitle": "Round-Bottom Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "23 mm"
    },
    "image": "/catalogue/img/p52/p52-strip-lock-01-387x209.png",
    "imageAlt": "/catalogue/img/p52/p52-strip-lock-02-451x234.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      34
    ],
    "sizes": [
      {
        "sku": "CXCK-2105",
        "L": "185",
        "W": "90",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 90 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCQ-2105",
        "L": "185",
        "W": "90",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 90 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCC-2105",
        "L": "185",
        "W": "90",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 90 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCS-2105",
        "L": "185",
        "W": "90",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 90 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCS",
        "isLid": false
      },
      {
        "sku": "CXCK-2107",
        "L": "185",
        "W": "112",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 112 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCQ-2107",
        "L": "185",
        "W": "112",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 112 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCC-2107",
        "L": "185",
        "W": "112",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 112 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCS-2107",
        "L": "185",
        "W": "112",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 112 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCS",
        "isLid": false
      },
      {
        "sku": "CXCK-2110",
        "L": "185",
        "W": "145",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 145 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCQ-2110",
        "L": "185",
        "W": "145",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 145 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCC-2110",
        "L": "185",
        "W": "145",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 145 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCS-2110",
        "L": "185",
        "W": "145",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 145 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCS",
        "isLid": false
      },
      {
        "sku": "CXCK-2120",
        "L": "265",
        "W": "185",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 185 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCK",
        "isLid": false
      },
      {
        "sku": "CXCQ-2120",
        "L": "265",
        "W": "185",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 185 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCQ",
        "isLid": false
      },
      {
        "sku": "CXCC-2120",
        "L": "265",
        "W": "185",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 185 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCS-2120",
        "L": "265",
        "W": "185",
        "H": "23",
        "sizeText": null,
        "raw": "265 x 185 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCS",
        "isLid": false
      }
    ],
    "imageAspect": 1.8517
  },
  {
    "slug": "square-pattern-cassettes",
    "prefix": "CXCC",
    "prefixes": [
      "CXCC"
    ],
    "section": "Cassette Trays",
    "name": "Square Pattern Cassette Trays",
    "subtitle": "Round click-lock & hinged — flat and round-bottom",
    "summary": "Square perforation through lid and base for full steam contact, in a cassette that still stays closed through handling.",
    "catalogueTitle": "Square Pattern Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p53/p53-square-pattern-01-339x252.png",
    "imageAlt": "/catalogue/img/p53/p53-square-pattern-02-351x188.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      35
    ],
    "sizes": [
      {
        "sku": "CXCC-1205",
        "L": "180",
        "W": "70",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 70 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1207",
        "L": "180",
        "W": "95",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 95 x 22",
        "lid": null,
        "note": "07 Instrument",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1210",
        "L": "180",
        "W": "130",
        "H": "22",
        "sizeText": null,
        "raw": "180 x 130 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1220",
        "L": "260",
        "W": "180",
        "H": "22",
        "sizeText": null,
        "raw": "260 x 180 x 22",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9920",
        "L": "185",
        "W": "90",
        "H": "24",
        "sizeText": null,
        "raw": "185 x 90 x 24",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9921",
        "L": "185",
        "W": "112",
        "H": "24",
        "sizeText": null,
        "raw": "185 x 112 x 24",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9922",
        "L": "185",
        "W": "145",
        "H": "24",
        "sizeText": null,
        "raw": "185 x 145 x 24",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-9923",
        "L": "265",
        "W": "185",
        "H": "24",
        "sizeText": null,
        "raw": "265 x 185 x 24",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.3452
  },
  {
    "slug": "elongated-cassettes",
    "prefix": "CXCC",
    "prefixes": [
      "CXCC"
    ],
    "section": "Cassette Trays",
    "name": "Elongated Cassette Trays",
    "subtitle": "Button lock & detachable hinges",
    "summary": "For instruments too long for a standard cassette — forceps, scissors, elevators — carried flat instead of wedged in at an angle.",
    "catalogueTitle": "Elongated Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p54/p54-elongated-01-348x193.png",
    "imageAlt": "/catalogue/img/p54/p54-elongated-02-458x249.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      36
    ],
    "sizes": [
      {
        "sku": "CXCC-2305",
        "L": "190",
        "W": "76",
        "H": "30",
        "sizeText": null,
        "raw": "190 x 76 x 30",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2307",
        "L": "190",
        "W": "102",
        "H": "30",
        "sizeText": null,
        "raw": "190 x 102 x 30",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2308",
        "L": "190",
        "W": "115",
        "H": "30",
        "sizeText": null,
        "raw": "190 x 115 x 30",
        "lid": null,
        "note": "08 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2310",
        "L": "190",
        "W": "142",
        "H": "30",
        "sizeText": null,
        "raw": "190 x 142 x 30",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2320",
        "L": "270",
        "W": "190",
        "H": "30",
        "sizeText": null,
        "raw": "270 x 190 x 30",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2216",
        "L": "280",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 202 x 32",
        "lid": null,
        "note": "16 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1605",
        "L": "200",
        "W": "80",
        "H": "35",
        "sizeText": null,
        "raw": "200 x 80 x 35",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1607",
        "L": "200",
        "W": "105",
        "H": "35",
        "sizeText": null,
        "raw": "200 x 105 x 35",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1610",
        "L": "200",
        "W": "145",
        "H": "35",
        "sizeText": null,
        "raw": "200 x 145 x 35",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1615",
        "L": "200",
        "W": "208",
        "H": "35",
        "sizeText": null,
        "raw": "200 x 208 x 35",
        "lid": null,
        "note": "15 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1620",
        "L": "280",
        "W": "200",
        "H": "35",
        "sizeText": null,
        "raw": "280 x 200 x 35",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.8031
  },
  {
    "slug": "elongated-single-lock",
    "prefix": "CXCY / CXCC",
    "prefixes": [
      "CXCY",
      "CXCC"
    ],
    "section": "Cassette Trays",
    "name": "Elongated Single-Lock Cassette Trays",
    "subtitle": "Button lock & detachable hinges",
    "summary": "One catch, opened one-handed: the long cassette for chairside sets that are opened and closed all day.",
    "catalogueTitle": "Elongated Single-Lock Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p55/p55-elongated-single-lock-01-529x307.png",
    "imageAlt": "/catalogue/img/p55/p55-elongated-single-lock-02-434x253.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      37
    ],
    "sizes": [
      {
        "sku": "CXCY-2705",
        "L": "222",
        "W": "95",
        "H": "22",
        "sizeText": null,
        "raw": "222 x 95 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2706",
        "L": "222",
        "W": "110",
        "H": "22",
        "sizeText": null,
        "raw": "222 x 110 x 22",
        "lid": null,
        "note": "06 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2707",
        "L": "222",
        "W": "126",
        "H": "22",
        "sizeText": null,
        "raw": "222 x 126 x 22",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2708",
        "L": "222",
        "W": "142",
        "H": "22",
        "sizeText": null,
        "raw": "222 x 142 x 22",
        "lid": null,
        "note": "08 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2710",
        "L": "222",
        "W": "174",
        "H": "22",
        "sizeText": null,
        "raw": "222 x 174 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2712",
        "L": "222",
        "W": "205",
        "H": "22",
        "sizeText": null,
        "raw": "222 x 205 x 22",
        "lid": null,
        "note": "12 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2720",
        "L": "370",
        "W": "230",
        "H": "32",
        "sizeText": null,
        "raw": "370 x 230 x 32",
        "lid": null,
        "note": "20 Instruments Plus",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCC-2005",
        "L": "182",
        "W": "78",
        "H": "32",
        "sizeText": null,
        "raw": "182 x 78 x 32",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2007",
        "L": "182",
        "W": "102",
        "H": "32",
        "sizeText": null,
        "raw": "182 x 102 x 32",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2010",
        "L": "182",
        "W": "142",
        "H": "32",
        "sizeText": null,
        "raw": "182 x 142 x 32",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-2020",
        "L": "270",
        "W": "182",
        "H": "32",
        "sizeText": null,
        "raw": "270 x 182 x 32",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.7231
  },
  {
    "slug": "elongated-double-lock",
    "prefix": "CXCH / CXCC",
    "prefixes": [
      "CXCH",
      "CXCC"
    ],
    "section": "Cassette Trays",
    "name": "Elongated Double-Lock Cassette Trays",
    "subtitle": "Button lock & detachable hinges",
    "summary": "Two catches so a long lid can't spring open at one end in transit — for heavier long sets.",
    "catalogueTitle": "Elongated Double-Lock Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p56/p56-elongated-double-lock-01-315x197.png",
    "imageAlt": "/catalogue/img/p56/p56-elongated-double-lock-02-304x150.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      38
    ],
    "sizes": [
      {
        "sku": "CXCH-2003",
        "L": "203",
        "W": "50",
        "H": "32",
        "sizeText": null,
        "raw": "203 x 50 x 32",
        "lid": null,
        "note": "03 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-2005",
        "L": "203",
        "W": "76",
        "H": "32",
        "sizeText": null,
        "raw": "203 x 76 x 32",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-2007",
        "L": "203",
        "W": "102",
        "H": "32",
        "sizeText": null,
        "raw": "203 x 102 x 32",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-2008",
        "L": "203",
        "W": "142",
        "H": "32",
        "sizeText": null,
        "raw": "203 x 142 x 32",
        "lid": null,
        "note": "08 Instruments + accessory area",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-2010",
        "L": "203",
        "W": "142",
        "H": "32",
        "sizeText": null,
        "raw": "203 x 142 x 32",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCH-2012",
        "L": "265",
        "W": "165",
        "H": "32",
        "sizeText": null,
        "raw": "265 x 165 x 32",
        "lid": null,
        "note": "12 Instruments + accessory area",
        "needsReview": false,
        "variant": "CXCH",
        "isLid": false
      },
      {
        "sku": "CXCC-2216",
        "L": "280",
        "W": "202",
        "H": "32",
        "sizeText": null,
        "raw": "280 x 202 x 32",
        "lid": null,
        "note": "16 instruments + accessory area",
        "needsReview": true,
        "variant": "CXCC",
        "isLid": false
      }
    ],
    "imageAspect": 1.599
  },
  {
    "slug": "elongated-round-click-lock",
    "prefix": "CXCC / CXCY",
    "prefixes": [
      "CXCC",
      "CXCY"
    ],
    "section": "Cassette Trays",
    "name": "Elongated Round-Click-Lock Cassette Trays",
    "subtitle": "Round click-lock & hinged",
    "summary": "The round click-lock closes audibly, so staff know the cassette is actually shut before it leaves the bench.",
    "catalogueTitle": "Elongated Round-Click-Lock Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p57/p57-elongated-01-411x213.png",
    "imageAlt": "/catalogue/img/p57/p57-elongated-02-352x183.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      39
    ],
    "sizes": [
      {
        "sku": "CXCC-1403",
        "L": "180",
        "W": "55",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 55 x 23",
        "lid": null,
        "note": "03 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1405",
        "L": "180",
        "W": "70",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 70 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1407",
        "L": "180",
        "W": "95",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 95 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1410",
        "L": "180",
        "W": "130",
        "H": "23",
        "sizeText": null,
        "raw": "180 x 130 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1420",
        "L": "260",
        "W": "180",
        "H": "23",
        "sizeText": null,
        "raw": "260 x 180 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCY-1403",
        "L": "190",
        "W": "55",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 55 x 23",
        "lid": null,
        "note": "03 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-1405",
        "L": "190",
        "W": "70",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 70 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-1407",
        "L": "190",
        "W": "95",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 95 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-1410",
        "L": "190",
        "W": "130",
        "H": "23",
        "sizeText": null,
        "raw": "190 x 130 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-1420",
        "L": "260",
        "W": "190",
        "H": "23",
        "sizeText": null,
        "raw": "260 x 190 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      }
    ],
    "imageAspect": 1.9296
  },
  {
    "slug": "unionjack-cassettes",
    "prefix": "CXCC / CXCY",
    "prefixes": [
      "CXCC",
      "CXCY"
    ],
    "section": "Cassette Trays",
    "name": "UnionJack Cassette Trays",
    "subtitle": "Round click-lock & hinged — with steel fittings",
    "summary": "Round click-lock or hinged, with steel fittings — the parts that fail first on a cassette opened a dozen times a day.",
    "catalogueTitle": "UnionJack Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p58/p58-unionjack-01-335x351.png",
    "imageAlt": "/catalogue/img/p58/p58-unionjack-02-357x231.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      40
    ],
    "sizes": [
      {
        "sku": "CXCC-1805",
        "L": "185",
        "W": "70",
        "H": "22",
        "sizeText": null,
        "raw": "185 x 70 x 22",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1807",
        "L": "188",
        "W": "95",
        "H": "22",
        "sizeText": null,
        "raw": "188 x 95 x 22",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1810",
        "L": "185",
        "W": "130",
        "H": "22",
        "sizeText": null,
        "raw": "185 x 130 x 22",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCC-1820",
        "L": "260",
        "W": "185",
        "H": "22",
        "sizeText": null,
        "raw": "260 x 185 x 22",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCC",
        "isLid": false
      },
      {
        "sku": "CXCY-3105",
        "L": "185",
        "W": "80",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 80 x 23",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-3107",
        "L": "185",
        "W": "100",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 100 x 23",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-3110",
        "L": "185",
        "W": "135",
        "H": "23",
        "sizeText": null,
        "raw": "185 x 135 x 23",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-3120",
        "L": "275",
        "W": "185",
        "H": "23",
        "sizeText": null,
        "raw": "275 x 185 x 23",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      }
    ],
    "imageAspect": 0.9544
  },
  {
    "slug": "double-hinge-cassettes",
    "prefix": "CXUTD / CXCY",
    "prefixes": [
      "CXUTD",
      "CXCY"
    ],
    "section": "Cassette Trays",
    "name": "Double-Hinge Cassette Trays",
    "subtitle": "Push lock & double hinges — for straight instruments & photographic mirrors",
    "summary": "Push lock and double hinges hold the lid clear of the contents — for straight instruments and photographic mirrors that mark if anything closes onto them.",
    "catalogueTitle": "Double-Hinge Cassette Trays",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "34 mm"
    },
    "image": "/catalogue/img/p59/p59-double-hinge-cassette-trays-01-397x234.png",
    "imageAlt": "/catalogue/img/p59/p59-double-hinge-cassette-trays-02-330x219.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      41
    ],
    "sizes": [
      {
        "sku": "CXUTD-3910",
        "L": "202",
        "W": "82",
        "H": "34",
        "sizeText": null,
        "raw": "202 x 82 x 34",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-3911",
        "L": "202",
        "W": "90",
        "H": "34",
        "sizeText": null,
        "raw": "202 x 90 x 34",
        "lid": null,
        "note": "06 Instruments",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-3912",
        "L": "202",
        "W": "104",
        "H": "34",
        "sizeText": null,
        "raw": "202 x 104 x 34",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXUTD-3913",
        "L": "202",
        "W": "142",
        "H": "34",
        "sizeText": null,
        "raw": "202 x 142 x 34",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXUTD",
        "isLid": false
      },
      {
        "sku": "CXCY-2765",
        "L": "275",
        "W": "202",
        "H": "34",
        "sizeText": null,
        "raw": "275 x 202 x 34",
        "lid": null,
        "note": "15 Instruments & accessaries area",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      },
      {
        "sku": "CXCY-2770",
        "L": "300",
        "W": "202",
        "H": "34",
        "sizeText": null,
        "raw": "300 x 202 x 34",
        "lid": null,
        "note": "16 Instruments & accessaries area",
        "needsReview": false,
        "variant": "CXCY",
        "isLid": false
      }
    ],
    "imageAspect": 1.6966
  },
  {
    "slug": "orthodontic-plier-cassettes",
    "prefix": "CXCB / CXCX",
    "prefixes": [
      "CXCB",
      "CXCX"
    ],
    "section": "Cassette Trays",
    "name": "Cassettes for Orthodontic Pliers",
    "subtitle": "Round click-lock plier cassettes",
    "summary": "Pliers are heavy and their joints mark easily. These carry 5, 10 or a full 12-piece extracting set flat and apart.",
    "catalogueTitle": "Cassettes for Orthodontic Pliers",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Height": "24 mm"
    },
    "image": "/catalogue/img/p61/p61-cassettes-for-orthodontic-pliers-04-332x345.png",
    "imageAlt": "/catalogue/img/p61/p61-cassettes-for-orthodontic-pliers-05-395x242.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "CXCB — orthodontic plier cassettes",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p61/p61-cassettes-for-orthodontic-pliers-04-332x345.png",
          "/catalogue/img/p61/p61-cassettes-for-orthodontic-pliers-05-395x242.png"
        ],
        "sizes": [
          {
            "sku": "CXCB-1218",
            "L": "203",
            "W": "178",
            "H": "24",
            "sizeText": null,
            "raw": "203 x 178 x 24",
            "lid": null,
            "note": "4-Pliers & 4-Instruments",
            "needsReview": false,
            "variant": "CXCB",
            "isLid": false
          },
          {
            "sku": "CXCB-1220",
            "L": "203",
            "W": "240",
            "H": "24",
            "sizeText": null,
            "raw": "203 x 240 x 24",
            "lid": null,
            "note": "6-Pliers & 4-Instruments",
            "needsReview": false,
            "variant": "CXCB",
            "isLid": false
          }
        ]
      },
      {
        "label": "Orthodontic plier cassette — CXCB",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-01-450x353.png",
          "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-02-374x292.png"
        ],
        "sizes": [
          {
            "sku": "CXCB-1210",
            "L": "187",
            "W": "150",
            "H": "70",
            "sizeText": null,
            "raw": "187 x 150 x 70",
            "lid": null,
            "note": "for 10 Pliers",
            "needsReview": false,
            "variant": "CXCB",
            "isLid": false
          },
          {
            "sku": "CXCB-1212",
            "L": "104",
            "W": "150",
            "H": "70",
            "sizeText": null,
            "raw": "104 x 150 x 70",
            "lid": null,
            "note": "for 05 Pliers",
            "needsReview": false,
            "variant": "CXCB",
            "isLid": false
          }
        ]
      },
      {
        "label": "Extracting plier cassette — CXCX",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-03-383x342.png",
          "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-04-433x259.png"
        ],
        "sizes": [
          {
            "sku": "CXCX-1220",
            "L": "380",
            "W": "230",
            "H": "40",
            "sizeText": null,
            "raw": "380 x 230 x 40",
            "lid": null,
            "note": "12-Pcs Extracting Pliers",
            "needsReview": false,
            "variant": "CXCX",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      43,
      44
    ],
    "sizes": [
      {
        "sku": "CXCB-1218",
        "L": "203",
        "W": "178",
        "H": "24",
        "sizeText": null,
        "raw": "203 x 178 x 24",
        "lid": null,
        "note": "4-Pliers & 4-Instruments",
        "needsReview": false,
        "variant": "CXCB",
        "isLid": false
      },
      {
        "sku": "CXCB-1220",
        "L": "203",
        "W": "240",
        "H": "24",
        "sizeText": null,
        "raw": "203 x 240 x 24",
        "lid": null,
        "note": "6-Pliers & 4-Instruments",
        "needsReview": false,
        "variant": "CXCB",
        "isLid": false
      },
      {
        "sku": "CXCB-1210",
        "L": "187",
        "W": "150",
        "H": "70",
        "sizeText": null,
        "raw": "187 x 150 x 70",
        "lid": null,
        "note": "for 10 Pliers",
        "needsReview": false,
        "variant": "CXCB",
        "isLid": false
      },
      {
        "sku": "CXCB-1212",
        "L": "104",
        "W": "150",
        "H": "70",
        "sizeText": null,
        "raw": "104 x 150 x 70",
        "lid": null,
        "note": "for 05 Pliers",
        "needsReview": false,
        "variant": "CXCB",
        "isLid": false
      },
      {
        "sku": "CXCX-1220",
        "L": "380",
        "W": "230",
        "H": "40",
        "sizeText": null,
        "raw": "380 x 230 x 40",
        "lid": null,
        "note": "12-Pcs Extracting Pliers",
        "needsReview": false,
        "variant": "CXCX",
        "isLid": false
      }
    ],
    "imageAspect": 0.9623
  },
  {
    "slug": "handpiece-small-parts-trays",
    "prefix": "CXUTM",
    "prefixes": [
      "CXUTM"
    ],
    "section": "Cassette Trays",
    "name": "Trays for Hand Piece & Small Parts",
    "subtitle": "Round click-lock & hinged",
    "summary": "Small parts are what goes missing. A click-lock cassette on one 150 × 40 × 30 mm footprint keeps handpieces and fittings together through the cycle.",
    "catalogueTitle": "Trays for Hand Piece & Small Parts",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)",
      "Size": "150 &times; 40 &times; 30 mm (all)"
    },
    "image": "/catalogue/img/p63/p63-round-click-lock-01-275x220.png",
    "imageAlt": "/catalogue/img/p63/p63-round-click-lock-02-311x187.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      45,
      46
    ],
    "sizes": [
      {
        "sku": "CXUTM-3906",
        "L": "80",
        "W": "40",
        "H": "20",
        "sizeText": null,
        "raw": "80 x 40 x 20",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3909",
        "L": "80",
        "W": "40",
        "H": "20",
        "sizeText": null,
        "raw": "80 x 40 x 20",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3907",
        "L": "80",
        "W": "60",
        "H": "25",
        "sizeText": null,
        "raw": "80 x 60 x 25",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3910",
        "L": "80",
        "W": "60",
        "H": "25",
        "sizeText": null,
        "raw": "80 x 60 x 25",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3908",
        "L": "100",
        "W": "60",
        "H": "25",
        "sizeText": null,
        "raw": "100 x 60 x 25",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3911",
        "L": "100",
        "W": "60",
        "H": "25",
        "sizeText": null,
        "raw": "100 x 60 x 25",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3912",
        "L": "150",
        "W": "40",
        "H": "30",
        "sizeText": null,
        "raw": "150 x 40 x 30",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3913",
        "L": "150",
        "W": "40",
        "H": "30",
        "sizeText": null,
        "raw": "150 x 40 x 30",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      },
      {
        "sku": "CXUTM-3914",
        "L": "150",
        "W": "40",
        "H": "30",
        "sizeText": null,
        "raw": "150 x 40 x 30",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXUTM",
        "isLid": false
      }
    ],
    "imageAspect": 1.25
  },
  {
    "slug": "implant-cassette",
    "prefix": "CXCD",
    "prefixes": [
      "CXCD"
    ],
    "section": "Cassette Trays",
    "name": "Dental Implant Cassette",
    "subtitle": "Hinged, colour-coded bur wells",
    "summary": "Colour-coded wells and rails lay the implant sequence out left to right, so it is read off the cassette rather than remembered.",
    "catalogueTitle": "Dental Implant Cassette",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch.",
      "7 photos — one product, several configurations. Split further if these are separate lines for you."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Inserts": "Silicone, colour-coded",
      "Lid": "Hinged, slotted",
      "Interior": "Bur wells, instrument rails, open tray",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxcd-1004.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxcd-1004.jpg",
      "/catalogue/img/extras/cxcd-1005.jpg",
      "/catalogue/img/extras/cxcd-1006.jpg",
      "/catalogue/img/extras/cxcd-1007.jpg",
      "/catalogue/img/extras/cxcd-1008.jpg",
      "/catalogue/img/extras/cxcd-1010.jpg",
      "/catalogue/img/extras/cxcd-1011.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXCD-1004",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1005",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1006",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1007",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1008",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1010",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1011",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "instrument-cassette-rack",
    "prefix": "CXCD",
    "prefixes": [
      "CXCD"
    ],
    "section": "Cassette Trays",
    "name": "Dental Instrument Cassette",
    "subtitle": "Hinged, open instrument rack",
    "summary": "Clips and an open tray, no bur wells — for hand instruments, where wells just waste the space.",
    "catalogueTitle": "Dental Instrument Cassette",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Interior": "Instrument clips, open tray",
      "Lid": "Hinged, slotted",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxcd-1009.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxcd-1009.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXCD-1009",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "endo-block",
    "prefix": "CXCD",
    "prefixes": [
      "CXCD"
    ],
    "section": "Cassette Trays",
    "name": "Endodontic Cassette Block",
    "subtitle": "Upright, silicone mat",
    "summary": "Stands upright at working height with a measured silicone mat, so files are picked by length without leaving the bench.",
    "catalogueTitle": "Endodontic Cassette Block",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Insert": "Silicone file mat",
      "Format": "Upright block",
      "Lid": "Hinged, slotted",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxcd-1012.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxcd-1012.jpg",
      "/catalogue/img/extras/cxcd-1013.jpg",
      "/catalogue/img/extras/cxcd-1015.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXCD-1012",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1013",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1015",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "perf-instrument-box-flat",
    "prefix": "CXCD",
    "prefixes": [
      "CXCD"
    ],
    "section": "Cassette Trays",
    "name": "Perforated Instrument Box",
    "subtitle": "Flat, latched",
    "summary": "Low enough for drawer and cabinet storage, latched so a small set stays together between cycles.",
    "catalogueTitle": "Perforated Instrument Box",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Lid": "Punched or slotted, hinged",
      "Closure": "Single latch",
      "Profile": "Flat",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxcd-1002.jpg",
    "imageAlt": "/catalogue/img/extras/cxcd-1014.jpg",
    "images": [
      "/catalogue/img/extras/cxcd-1002.jpg",
      "/catalogue/img/extras/cxcd-1014.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXCD-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1014",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "mesh-instrument-box",
    "prefix": "CXCD",
    "prefixes": [
      "CXCD"
    ],
    "section": "Cassette Trays",
    "name": "Mesh Instrument Box",
    "subtitle": "Fine mesh, lidded",
    "summary": "Full steam contact through woven mesh, with a latch so nothing small escapes into the washer.",
    "catalogueTitle": "Mesh Instrument Box",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch.",
      "Close to your Wire Mesh Sterilization Basket (CXMB) — check you want both."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Woven mesh, welded frame",
      "Lid": "Hinged mesh",
      "Closure": "Latch",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxcd-1001.jpg",
    "imageAlt": "/catalogue/img/extras/cxcd-1003.jpg",
    "images": [
      "/catalogue/img/extras/cxcd-1001.jpg",
      "/catalogue/img/extras/cxcd-1003.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXCD-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      },
      {
        "sku": "CXCD-1003",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXCD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "prf-grf-boxes",
    "prefix": "CXGK",
    "prefixes": [
      "CXGK"
    ],
    "section": "PRF & GRF System",
    "name": "PRF & GRF Boxes",
    "subtitle": "Perforated sterilization boxes for the PRF / GRF protocol",
    "summary": "Perforated boxes for the PRF / GRF protocol, where the kit has to be sterile, complete and at the chairside before the draw is taken.",
    "catalogueTitle": "PRF & GRF Boxes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p40/p40-for-professional-01-302x187.png",
    "imageAlt": "/catalogue/img/p40/p40-for-professional-02-305x221.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "For Professional — CXGK-9876",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p40/p40-for-professional-01-302x187.png",
          "/catalogue/img/p40/p40-for-professional-02-305x221.png",
          "/catalogue/img/p40/p40-for-professional-03-263x175.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9876",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "For Student — CXGK-9878",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p40/p40-for-professional-04-317x209.png",
          "/catalogue/img/p40/p40-for-professional-05-319x230.png",
          "/catalogue/img/p40/p40-for-professional-06-273x182.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9878",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "GRF System Box — CXGK-9874",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p40/p40-for-professional-07-289x250.png",
          "/catalogue/img/p40/p40-for-professional-08-399x324.png",
          "/catalogue/img/p40/p40-for-professional-09-287x215.png",
          "/catalogue/img/p40/p40-for-professional-10-272x268.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9874",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      22
    ],
    "sizes": [
      {
        "sku": "CXGK-9876",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9878",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9874",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      }
    ],
    "imageAspect": 1.615
  },
  {
    "slug": "prf-racks-dishes",
    "prefix": "CXGH / CXGK",
    "prefixes": [
      "CXGH",
      "CXGK"
    ],
    "section": "PRF & GRF System",
    "name": "PRF System — Racks & Dishes",
    "subtitle": "Centrifuge-tube racks, dishes, trays & bowls",
    "summary": "Centrifuge-tube racks, dishes and bowls for the PRF bench — tubes upright, membranes handled once.",
    "catalogueTitle": "PRF System — Racks & Dishes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p41/p41-68-x-60-x-20mm-01-311x320.png",
    "imageAlt": "/catalogue/img/p41/p41-68-x-60-x-20mm-02-290x248.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Tube rack — 3 tier",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p41/p41-68-x-60-x-20mm-01-311x320.png"
        ],
        "sizes": [
          {
            "sku": "CXGH-9880",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "09 Holes",
            "needsReview": false,
            "variant": "CXGH",
            "isLid": false
          },
          {
            "sku": "CXGH-9881",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXGH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Tube rack",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p41/p41-68-x-60-x-20mm-02-290x248.png"
        ],
        "sizes": [
          {
            "sku": "CXGH-9883",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXGH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Dish",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p41/p41-68-x-60-x-20mm-04-202x143.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9888",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "Tube rack — 2 piece",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p41/p41-68-x-60-x-20mm-03-291x250.png"
        ],
        "sizes": [
          {
            "sku": "CXGH-9885",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXGH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Instrument tray",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p41/p41-68-x-60-x-20mm-05-301x168.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9890",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "Bowl",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p41/p41-68-x-60-x-20mm-06-187x149.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9892",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      23
    ],
    "sizes": [
      {
        "sku": "CXGH-9880",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "09 Holes",
        "needsReview": false,
        "variant": "CXGH",
        "isLid": false
      },
      {
        "sku": "CXGH-9881",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXGH",
        "isLid": false
      },
      {
        "sku": "CXGH-9883",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXGH",
        "isLid": false
      },
      {
        "sku": "CXGK-9888",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGH-9885",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXGH",
        "isLid": false
      },
      {
        "sku": "CXGK-9890",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9892",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      }
    ],
    "imageAspect": 0.9719
  },
  {
    "slug": "prf-surgical-set",
    "prefix": "CXGK",
    "prefixes": [
      "CXGK"
    ],
    "section": "PRF & GRF System",
    "name": "PRF Surgical Set",
    "subtitle": "Instruments for the PRF / GRF protocol",
    "summary": "The seven instruments a PRF procedure actually uses. Quote them individually or as the complete set.",
    "catalogueTitle": "PRF System",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {},
    "image": "/catalogue/img/p42/p42-prf-system-recovered-srf9902-28x494.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "CXGK-9902",
        "code": "CXGK-9902",
        "note": null,
        "images": [
          "/catalogue/img/p42/p42-prf-system-recovered-srf9902-28x494.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9902",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "CXGK-9904",
        "code": "CXGK-9904",
        "note": null,
        "images": [
          "/catalogue/img/p42/p42-prf-system-recovered-srf9904-26x494.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9904",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "CXGK-9906",
        "code": "CXGK-9906",
        "note": null,
        "images": [
          "/catalogue/img/p42/p42-prf-system-recovered-srf9906-28x494.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9906",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "CXGK-9908",
        "code": "CXGK-9908",
        "note": null,
        "images": [
          "/catalogue/img/p42/p42-prf-system-recovered-srf9908-29x494.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9908",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "Goldman fox scissors",
        "code": "CXGK-9910",
        "note": "TC · 13 cm",
        "images": [
          "/catalogue/img/p42/p42-goldman-fox-01-144x388.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9910",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "CXGK-9912",
        "code": "CXGK-9912",
        "note": "1 × 2 teeth · 12.5 cm",
        "images": [
          "/catalogue/img/p42/p42-prf-system-recovered-srf9912-32x411.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9912",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      },
      {
        "label": "PRF tweezer",
        "code": "CXGK-9914",
        "note": "16 cm",
        "images": [
          "/catalogue/img/p42/p42-prf-system-recovered-srf9914-87x485.png"
        ],
        "sizes": [
          {
            "sku": "CXGK-9914",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGK",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": "instruments",
    "sourcePages": [
      24
    ],
    "sizes": [
      {
        "sku": "CXGK-9902",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9904",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9906",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9908",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9910",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9912",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      },
      {
        "sku": "CXGK-9914",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGK",
        "isLid": false
      }
    ],
    "imageAspect": 0.0567
  },
  {
    "slug": "prf-cassettes",
    "prefix": "CXGC",
    "prefixes": [
      "CXGC"
    ],
    "section": "PRF & GRF System",
    "name": "PRF System Cassettes",
    "subtitle": "Cassettes for PRF / GRF instruments",
    "summary": "Slim single row for seven instruments, or the full set with its accessory bowl — the PRF kit stored the way it is used.",
    "catalogueTitle": "PRF System Cassettes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-01-514x284.png",
    "imageAlt": "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-04-449x406.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Cassette for 7 instruments — CXGC",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-01-514x284.png"
        ],
        "sizes": [
          {
            "sku": "CXGC-9920",
            "L": "220",
            "W": "125",
            "H": "25",
            "sizeText": null,
            "raw": "220 x 125 x 25",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGC",
            "isLid": false
          }
        ]
      },
      {
        "label": "Cassette for PRF instruments set — CXGC",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-04-449x406.png",
          "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-05-467x340.png",
          "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-02-163x133.jpg",
          "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-03-163x133.png"
        ],
        "sizes": [
          {
            "sku": "CXGC-9922",
            "L": "220",
            "W": "200",
            "H": "34",
            "sizeText": null,
            "raw": "220 x 200 x 34",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXGC",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      25
    ],
    "sizes": [
      {
        "sku": "CXGC-9920",
        "L": "220",
        "W": "125",
        "H": "25",
        "sizeText": null,
        "raw": "220 x 125 x 25",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGC",
        "isLid": false
      },
      {
        "sku": "CXGC-9922",
        "L": "220",
        "W": "200",
        "H": "34",
        "sizeText": null,
        "raw": "220 x 200 x 34",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXGC",
        "isLid": false
      }
    ],
    "imageAspect": 1.8099
  },
  {
    "slug": "implant-surgical-box",
    "prefix": "CXBB / CXBH",
    "prefixes": [
      "CXBB",
      "CXBH"
    ],
    "section": "Implantology / Bur Holders",
    "name": "Implant & Surgical Box",
    "subtitle": "Perforated implant / surgical boxes",
    "summary": "Implant surgery is sequence-critical. The box holds drills and instruments in order, so the sequence is read off the tray, not remembered.",
    "catalogueTitle": "Implant & Surgical Box",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p68/p68-implant-surgical-box-01-256x264.png",
    "imageAlt": "/catalogue/img/p68/p68-implant-surgical-box-02-198x165.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      49
    ],
    "sizes": [
      {
        "sku": "CXBB-3900",
        "L": "100",
        "W": "80",
        "H": "48",
        "sizeText": null,
        "raw": "100 x 80 x 48",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXBB",
        "isLid": false
      },
      {
        "sku": "CXBB-3901",
        "L": "180",
        "W": "120",
        "H": "52",
        "sizeText": null,
        "raw": "180 x 120 x 52",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXBB",
        "isLid": false
      },
      {
        "sku": "CXBB-3902",
        "L": "154",
        "W": "94",
        "H": "52",
        "sizeText": null,
        "raw": "154 x 94 x 52",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXBB",
        "isLid": false
      },
      {
        "sku": "CXBB-3903",
        "L": "180",
        "W": "120",
        "H": "52",
        "sizeText": null,
        "raw": "180 x 120 x 52",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXBB",
        "isLid": false
      },
      {
        "sku": "CXBH-1009",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "1+8 Fittings",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      }
    ],
    "imageAspect": 0.9697
  },
  {
    "slug": "implantology-bur-holders",
    "prefix": "CXBH / CXBC / CXBG",
    "prefixes": [
      "CXBH",
      "CXBC",
      "CXBG"
    ],
    "section": "Implantology / Bur Holders",
    "name": "Implantology & Burr Holders",
    "subtitle": "Autoclavable bur & drill holders — four holder families",
    "summary": "Burs are small, costly and easily lost in a tray. These keep them upright, separated and identifiable right through sterilisation.",
    "catalogueTitle": "Implantology & Burr Holders",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p69/p69-bur-holders-03-244x227.png",
    "imageAlt": "/catalogue/img/p69/p69-bur-holders-04-273x245.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Bur Holders — CXBH series",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p69/p69-bur-holders-03-244x227.png",
          "/catalogue/img/p69/p69-bur-holders-04-273x245.png",
          "/catalogue/img/p69/p69-bur-holders-17-224x217.png"
        ],
        "sizes": [
          {
            "sku": "CXBH-1004",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "04 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1005",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1006",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "06 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1008",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "08 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1010",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1012",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1016",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "16 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1061",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "06 Holes with Rachet",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Bur Holders / Endo Box — CXBH 11xx",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p69/p69-bur-holders-06-216x216.png",
          "/catalogue/img/p69/p69-bur-holders-11-204x227.png",
          "/catalogue/img/p69/p69-bur-holders-16-240x226.png"
        ],
        "sizes": [
          {
            "sku": "CXBH-1106",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1107",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "09 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1112",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          },
          {
            "sku": "CXBH-1115",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "15 Holes",
            "needsReview": false,
            "variant": "CXBH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Bur Holders — CXBC series",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p69/p69-bur-holders-02-197x169.png",
          "/catalogue/img/p69/p69-bur-holders-07-182x197.png",
          "/catalogue/img/p69/p69-bur-holders-12-196x193.png"
        ],
        "sizes": [
          {
            "sku": "CXBC-1004",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "04 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          },
          {
            "sku": "CXBC-1005",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          },
          {
            "sku": "CXBC-1006",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "06 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          },
          {
            "sku": "CXBC-1008",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "08 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          },
          {
            "sku": "CXBC-1010",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          },
          {
            "sku": "CXBC-1012",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          },
          {
            "sku": "CXBC-1016",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "16 Holes",
            "needsReview": false,
            "variant": "CXBC",
            "isLid": false
          }
        ]
      },
      {
        "label": "Bur Holders — CXBG series",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p69/p69-bur-holders-01-141x155.png",
          "/catalogue/img/p69/p69-bur-holders-08-189x191.png",
          "/catalogue/img/p69/p69-bur-holders-13-192x179.png",
          "/catalogue/img/p69/p69-bur-holders-18-227x180.png"
        ],
        "sizes": [
          {
            "sku": "CXBG-1006",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "06 Holes",
            "needsReview": false,
            "variant": "CXBG",
            "isLid": false
          },
          {
            "sku": "CXBG-1008",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "08 Holes",
            "needsReview": false,
            "variant": "CXBG",
            "isLid": false
          },
          {
            "sku": "CXBG-1012",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "12 Holes",
            "needsReview": false,
            "variant": "CXBG",
            "isLid": false
          },
          {
            "sku": "CXBG-1016",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "16 Holes",
            "needsReview": false,
            "variant": "CXBG",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      50
    ],
    "sizes": [
      {
        "sku": "CXBH-1004",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "04 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1005",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1006",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "06 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1008",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "08 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1010",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1012",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1016",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "16 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1061",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "06 Holes with Rachet",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1106",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1107",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "09 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1112",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBH-1115",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "15 Holes",
        "needsReview": false,
        "variant": "CXBH",
        "isLid": false
      },
      {
        "sku": "CXBC-1004",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "04 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBC-1005",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBC-1006",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "06 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBC-1008",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "08 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBC-1010",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBC-1012",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBC-1016",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "16 Holes",
        "needsReview": false,
        "variant": "CXBC",
        "isLid": false
      },
      {
        "sku": "CXBG-1006",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "06 Holes",
        "needsReview": false,
        "variant": "CXBG",
        "isLid": false
      },
      {
        "sku": "CXBG-1008",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "08 Holes",
        "needsReview": false,
        "variant": "CXBG",
        "isLid": false
      },
      {
        "sku": "CXBG-1012",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12 Holes",
        "needsReview": false,
        "variant": "CXBG",
        "isLid": false
      },
      {
        "sku": "CXBG-1016",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "16 Holes",
        "needsReview": false,
        "variant": "CXBG",
        "isLid": false
      }
    ],
    "imageAspect": 1.0749
  },
  {
    "slug": "bur-holder-frame",
    "prefix": "CXBD",
    "prefixes": [
      "CXBD"
    ],
    "section": "Implantology / Bur Holders",
    "name": "Dental Bur Holder",
    "subtitle": "Frame handle, silicone wells",
    "summary": "Colour-coded wells and a folding carry frame keep burs upright, separated and identifiable through the cycle.",
    "catalogueTitle": "Dental Bur Holder",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Wells": "Silicone, colour-coded",
      "Handle": "Folding wire frame",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxbd-1001.jpg",
    "imageAlt": "/catalogue/img/extras/cxbd-1002.jpg",
    "images": [
      "/catalogue/img/extras/cxbd-1001.jpg",
      "/catalogue/img/extras/cxbd-1002.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXBD-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXBD",
        "isLid": false
      },
      {
        "sku": "CXBD-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXBD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "orthodontic-mirror-set",
    "prefix": "CXVM",
    "prefixes": [
      "CXVM"
    ],
    "section": "IntraOral / Orthodontic Steel Mirrors",
    "name": "Steel Mirrors — Orthodontic Set of 7",
    "subtitle": "Orthodontics S. Steel Mirrors — Set of 7, front-side reflection",
    "summary": "Seven front-surface mirrors in 316 steel — front reflection avoids the ghost double image that ruins a clinical photograph.",
    "catalogueTitle": "Steel Mirrors",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "316 (ASTM)"
    },
    "image": "/catalogue/img/p72/p72-orthodontics-ss-mirrors-set-of-7-vectorrender-2437x4261.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      53
    ],
    "sizes": [
      {
        "sku": "CXVM-0107",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Adult Occlusal / child Occlusal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-1.png"
      },
      {
        "sku": "CXVM-0207",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-3.png"
      },
      {
        "sku": "CXVM-0307",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Adult Occlusal / child Occlusal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-2.png"
      },
      {
        "sku": "CXVM-0407",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Adult Occlusal / Adult Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-4.png"
      },
      {
        "sku": "CXVM-0507",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Lingual Upper / Lingual Lower",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-5.png"
      },
      {
        "sku": "CXVM-0607",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Adult Buccal / Child Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-6.png"
      },
      {
        "sku": "CXVM-0707",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Child Occlusal / Child Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p72-7.png"
      }
    ],
    "images": [
      "/catalogue/img/p72/p72-orthodontics-ss-mirrors-set-of-7-vectorrender-2437x4261.png",
      "/catalogue/img/mirrors/p72-1.png",
      "/catalogue/img/mirrors/p72-3.png",
      "/catalogue/img/mirrors/p72-2.png",
      "/catalogue/img/mirrors/p72-4.png",
      "/catalogue/img/mirrors/p72-5.png",
      "/catalogue/img/mirrors/p72-6.png",
      "/catalogue/img/mirrors/p72-7.png"
    ],
    "imageAspect": 0.5719
  },
  {
    "slug": "intraoral-photo-mirrors-steel",
    "prefix": "CXVM",
    "prefixes": [
      "CXVM"
    ],
    "section": "IntraOral / Orthodontic Steel Mirrors",
    "name": "Steel Mirrors — IntraOral Photo, Stainless Steel",
    "subtitle": "IntraOral photo mirrors — Stainless Steel",
    "summary": "Steel photographic mirrors in 316: no glass edge to chip and no coating to lift after repeated autoclaving.",
    "catalogueTitle": "Steel Mirrors",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "316 (ASTM)"
    },
    "image": "/catalogue/img/p73/p73-intraoral-photo-mirrors-vectorrender-3120x2188.png",
    "imageAlt": "/catalogue/img/p73/p73-photography-mirrors-with-handle-vectorrender-2133x1852.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "IntraOral Photo Mirrors — Stainless Steel",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p73/p73-intraoral-photo-mirrors-vectorrender-3120x2188.png"
        ],
        "sizes": [
          {
            "sku": "CXVM-0105",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Lingual",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73a-1.png"
          },
          {
            "sku": "CXVM-0205",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Buccal",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73a-2.png"
          },
          {
            "sku": "CXVM-0305",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Occlusal-Adult",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73a-3.png"
          },
          {
            "sku": "CXVM-0405",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Occlusal XL-Adult",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73a-4.png"
          },
          {
            "sku": "CXVM-0505",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Occlusal Medium",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73a-5.png"
          }
        ]
      },
      {
        "label": "Photography Mirrors with handle — Stainless Steel",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p73/p73-photography-mirrors-with-handle-vectorrender-2133x1852.png"
        ],
        "sizes": [
          {
            "sku": "CXVM-0104",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Occlusal-Large",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73b-1.png"
          },
          {
            "sku": "CXVM-0204",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Occlusal-Medium",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73b-2.png"
          },
          {
            "sku": "CXVM-0304",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Occlusal-Small",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73b-3.png"
          },
          {
            "sku": "CXVM-0404",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "Lateral",
            "needsReview": false,
            "variant": "CXVM",
            "isLid": false,
            "image": "/catalogue/img/mirrors/p73b-4.png"
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      54
    ],
    "sizes": [
      {
        "sku": "CXVM-0105",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Lingual",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73a-1.png"
      },
      {
        "sku": "CXVM-0205",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73a-2.png"
      },
      {
        "sku": "CXVM-0305",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal-Adult",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73a-3.png"
      },
      {
        "sku": "CXVM-0405",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal XL-Adult",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73a-4.png"
      },
      {
        "sku": "CXVM-0505",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal Medium",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73a-5.png"
      },
      {
        "sku": "CXVM-0104",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal-Large",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73b-1.png"
      },
      {
        "sku": "CXVM-0204",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal-Medium",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73b-2.png"
      },
      {
        "sku": "CXVM-0304",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal-Small",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73b-3.png"
      },
      {
        "sku": "CXVM-0404",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Lateral",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p73b-4.png"
      }
    ],
    "images": [
      "/catalogue/img/p73/p73-intraoral-photo-mirrors-vectorrender-3120x2188.png",
      "/catalogue/img/mirrors/p73a-1.png",
      "/catalogue/img/mirrors/p73a-2.png",
      "/catalogue/img/mirrors/p73a-3.png",
      "/catalogue/img/mirrors/p73a-4.png",
      "/catalogue/img/mirrors/p73a-5.png",
      "/catalogue/img/mirrors/p73b-1.png",
      "/catalogue/img/mirrors/p73b-2.png",
      "/catalogue/img/mirrors/p73b-3.png",
      "/catalogue/img/mirrors/p73b-4.png"
    ],
    "imageAspect": 1.426
  },
  {
    "slug": "intraoral-photo-mirrors-glass",
    "prefix": "CXVM",
    "prefixes": [
      "CXVM"
    ],
    "section": "IntraOral / Orthodontic Steel Mirrors",
    "name": "Steel Mirrors — IntraOral Photo, Glass Two-Sided",
    "subtitle": "IntraOral photo mirrors — glass, two-sided",
    "summary": "Two-sided glass for the brightest, widest reflection — when image quality matters more than how many cycles the mirror survives.",
    "catalogueTitle": "Steel Mirrors",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "Glass"
    },
    "image": "/catalogue/img/p74/p74-glass-two-sided-orthodontic-mirror-vectorrender-2775x4198.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      55
    ],
    "sizes": [
      {
        "sku": "CXVM-0108",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-1.png"
      },
      {
        "sku": "CXVM-0208",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Buccal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-2.png"
      },
      {
        "sku": "CXVM-0308",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Lingual",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-3.png"
      },
      {
        "sku": "CXVM-0408",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Lingual",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-4.png"
      },
      {
        "sku": "CXVM-0508",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-5.png"
      },
      {
        "sku": "CXVM-0608",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-6.png"
      },
      {
        "sku": "CXVM-0708",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Occlusal — Child",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-8.png"
      },
      {
        "sku": "CXVM-0808",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Contrast",
        "needsReview": false,
        "variant": "CXVM",
        "isLid": false,
        "image": "/catalogue/img/mirrors/p74-7.png"
      }
    ],
    "images": [
      "/catalogue/img/p74/p74-glass-two-sided-orthodontic-mirror-vectorrender-2775x4198.png",
      "/catalogue/img/mirrors/p74-1.png",
      "/catalogue/img/mirrors/p74-2.png",
      "/catalogue/img/mirrors/p74-3.png",
      "/catalogue/img/mirrors/p74-4.png",
      "/catalogue/img/mirrors/p74-5.png",
      "/catalogue/img/mirrors/p74-6.png",
      "/catalogue/img/mirrors/p74-8.png",
      "/catalogue/img/mirrors/p74-7.png"
    ],
    "imageAspect": 0.661
  },
  {
    "slug": "instruments-tray",
    "prefix": "CXWT",
    "prefixes": [
      "CXWT"
    ],
    "section": "Hollow Wares",
    "name": "Instruments tray",
    "subtitle": "Instrument trays, vomit & lotion bowls, gallipots, kidney dishes",
    "summary": "The everyday ward and chairside tray: seamless drawn body, so there is no joint for soil to lodge in.",
    "catalogueTitle": "Hollow Wares — Trays, Bowls & Dishes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p76/p76-instruments-trays-01-252x181.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      58
    ],
    "sizes": [
      {
        "sku": "CXWT-2015",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "8” x 6” x 1-1/2”",
        "needsReview": false,
        "variant": "CXWT",
        "isLid": false
      },
      {
        "sku": "CXWT-2515",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10” x 6” x 1-1/2”",
        "needsReview": false,
        "variant": "CXWT",
        "isLid": false
      },
      {
        "sku": "CXWT-3020",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "12” x 8” x 2”",
        "needsReview": false,
        "variant": "CXWT",
        "isLid": false
      },
      {
        "sku": "CXWT-3625",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "14” x 10” x 2”",
        "needsReview": false,
        "variant": "CXWT",
        "isLid": false
      },
      {
        "sku": "CXWT-4125",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "16” x 10” x 3”",
        "needsReview": false,
        "variant": "CXWT",
        "isLid": false
      }
    ],
    "imageAspect": 1.3923
  },
  {
    "slug": "vomit-bowl",
    "prefix": "CXWV",
    "prefixes": [
      "CXWV"
    ],
    "section": "Hollow Wares",
    "name": "Vomit bowl",
    "subtitle": "Instrument trays, vomit & lotion bowls, gallipots, kidney dishes",
    "summary": "Held to the patient, emptied and cleaned many times a day — seamless with a rolled rim, so there is no crevice and no sharp edge.",
    "catalogueTitle": "Hollow Wares — Trays, Bowls & Dishes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p76/p76-instruments-trays-02-265x167.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      58
    ],
    "sizes": [
      {
        "sku": "CXWV-1505",
        "L": "150",
        "W": "50",
        "H": null,
        "sizeText": null,
        "raw": "150 x 50",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWV",
        "isLid": false
      }
    ],
    "imageAspect": 1.5868
  },
  {
    "slug": "lotion-bowl",
    "prefix": "CXWB",
    "prefixes": [
      "CXWB"
    ],
    "section": "Hollow Wares",
    "name": "Lotion bowl",
    "subtitle": "Instrument trays, vomit & lotion bowls, gallipots, kidney dishes",
    "summary": "For solutions at the sterile field, in a seamless body that can be cleaned back to a validated state rather than replaced.",
    "catalogueTitle": "Hollow Wares — Trays, Bowls & Dishes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p76/p76-instruments-trays-03-244x177.jpg",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      58
    ],
    "sizes": [
      {
        "sku": "CXWB-0125",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": "125 / 0.4 Ltr.",
        "raw": "",
        "lid": null,
        "note": "/ 0.4 Ltr.",
        "needsReview": false,
        "variant": "CXWB",
        "isLid": false
      },
      {
        "sku": "CXWB-0150",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": "150 / 0.75 Ltr.",
        "raw": "",
        "lid": null,
        "note": "/ 0.75 Ltr.",
        "needsReview": false,
        "variant": "CXWB",
        "isLid": false
      },
      {
        "sku": "CXWB-0205",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": "205 / 2 Ltr.",
        "raw": "",
        "lid": null,
        "note": "/ 2 Ltr.",
        "needsReview": false,
        "variant": "CXWB",
        "isLid": false
      }
    ],
    "imageAspect": 1.3785
  },
  {
    "slug": "gallipot",
    "prefix": "CXWG",
    "prefixes": [
      "CXWG"
    ],
    "section": "Hollow Wares",
    "name": "Gallipot",
    "subtitle": "Instrument trays, vomit & lotion bowls, gallipots, kidney dishes",
    "summary": "Small, seamless and nesting for storage — the pot that holds antiseptic without staining or pitting.",
    "catalogueTitle": "Hollow Wares — Trays, Bowls & Dishes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p76/p76-instruments-trays-04-217x178.jpg",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      58
    ],
    "sizes": [
      {
        "sku": "CXWG-0050",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "2 oz (50ml)",
        "needsReview": false,
        "variant": "CXWG",
        "isLid": false
      },
      {
        "sku": "CXWG-0100",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "4 oz (100ml)",
        "needsReview": false,
        "variant": "CXWG",
        "isLid": false
      },
      {
        "sku": "CXWG-0150",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "6 oz (150ml)",
        "needsReview": false,
        "variant": "CXWG",
        "isLid": false
      },
      {
        "sku": "CXWG-0200",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "8 oz (200ml)",
        "needsReview": false,
        "variant": "CXWG",
        "isLid": false
      }
    ],
    "imageAspect": 1.2191
  },
  {
    "slug": "kidney-dish",
    "prefix": "CXWK",
    "prefixes": [
      "CXWK"
    ],
    "section": "Hollow Wares",
    "name": "Kidney dish",
    "subtitle": "Instrument trays, vomit & lotion bowls, gallipots, kidney dishes",
    "summary": "The shape that sits against the patient and pours without spilling, seamless so it cleans back to a validated state.",
    "catalogueTitle": "Hollow Wares — Trays, Bowls & Dishes",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p76/p76-instruments-trays-05-227x208.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      58
    ],
    "sizes": [
      {
        "sku": "CXWK-1500",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Kidney Dish - 6”",
        "needsReview": false,
        "variant": "CXWK",
        "isLid": false
      },
      {
        "sku": "CXWK-2000",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Kidney Dish - 8”",
        "needsReview": false,
        "variant": "CXWK",
        "isLid": false
      },
      {
        "sku": "CXWK-2500",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Kidney Dish - 10”",
        "needsReview": false,
        "variant": "CXWK",
        "isLid": false
      },
      {
        "sku": "CXWK-3000",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "Kidney Dish - 12”",
        "needsReview": false,
        "variant": "CXWK",
        "isLid": false
      }
    ],
    "imageAspect": 1.0913
  },
  {
    "slug": "forceps-jar",
    "prefix": "CXWF",
    "prefixes": [
      "CXWF"
    ],
    "section": "Hollow Wares",
    "name": "Forceps jar",
    "subtitle": "Containers, jars, trays, urinals & dressing drums",
    "summary": "Holds forceps upright with the tips clear of the base — the detail that decides whether the jar can be validated at all.",
    "catalogueTitle": "Hollow Wares",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p77/p77-dressing-container-01-174x225.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      59
    ],
    "sizes": [
      {
        "sku": "CXWF-0513",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "2” x 5”",
        "needsReview": false,
        "variant": "CXWF",
        "isLid": false
      },
      {
        "sku": "CXWF-0520",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "2” x 8”",
        "needsReview": false,
        "variant": "CXWF",
        "isLid": false
      }
    ],
    "imageAspect": 0.7733
  },
  {
    "slug": "dressing-container",
    "prefix": "CXWC",
    "prefixes": [
      "CXWC"
    ],
    "section": "Hollow Wares",
    "name": "Dressing container",
    "subtitle": "Containers, jars, trays, urinals & dressing drums",
    "summary": "Dressings stay covered and dry between rounds, in a container that takes the same cycle the dressings do.",
    "catalogueTitle": "Hollow Wares",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p77/p77-dressing-container-02-230x230.jpg",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      59
    ],
    "sizes": [
      {
        "sku": "CXWC-1317",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "5” x 6-1/2”",
        "needsReview": false,
        "variant": "CXWC",
        "isLid": false
      },
      {
        "sku": "CXWC-1313",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "5” x 5”",
        "needsReview": false,
        "variant": "CXWC",
        "isLid": false
      },
      {
        "sku": "CXWC-1013",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "4” x 5”",
        "needsReview": false,
        "variant": "CXWC",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "dressing-drum",
    "prefix": "CXWD",
    "prefixes": [
      "CXWD"
    ],
    "section": "Hollow Wares",
    "name": "Sterilizing / dressing drum",
    "subtitle": "Containers, jars, trays, urinals & dressing drums",
    "summary": "Sterilise and store in one vessel: vents open in the autoclave and close on the shelf, so the pack is never opened to move it.",
    "catalogueTitle": "Hollow Wares",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p77/p77-dressing-container-06-217x276.jpg",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      59
    ],
    "sizes": [
      {
        "sku": "CXWD-1510",
        "L": "150",
        "W": "100",
        "H": null,
        "sizeText": null,
        "raw": "150 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-1515",
        "L": "150",
        "W": "150",
        "H": null,
        "sizeText": null,
        "raw": "150 x 150",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-1919",
        "L": "190",
        "W": "190",
        "H": null,
        "sizeText": null,
        "raw": "190 x 190",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-1924",
        "L": "190",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "190 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-2419",
        "L": "240",
        "W": "190",
        "H": null,
        "sizeText": null,
        "raw": "240 x 190",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-2424",
        "L": "240",
        "W": "240",
        "H": null,
        "sizeText": null,
        "raw": "240 x 240",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-2439",
        "L": "240",
        "W": "390",
        "H": null,
        "sizeText": null,
        "raw": "240 x 390",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-2434",
        "L": "240",
        "W": "340",
        "H": null,
        "sizeText": null,
        "raw": "240 x 340",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      },
      {
        "sku": "CXWD-2915",
        "L": "290",
        "W": "150",
        "H": null,
        "sizeText": null,
        "raw": "290 x 150",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWD",
        "isLid": false
      }
    ],
    "imageAspect": 0.7862
  },
  {
    "slug": "scaler-tray",
    "prefix": "CXWS",
    "prefixes": [
      "CXWS"
    ],
    "section": "Hollow Wares",
    "name": "Scaler tray",
    "subtitle": "Containers, jars, trays, urinals & dressing drums",
    "summary": "A narrow tray sized for scalers, so fine tips lie in a row instead of stacked against each other.",
    "catalogueTitle": "Hollow Wares",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p77/p77-dressing-container-03-278x129.png",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      59
    ],
    "sizes": [
      {
        "sku": "CXWS-1910",
        "L": "190",
        "W": "100",
        "H": null,
        "sizeText": null,
        "raw": "190 x 100",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXWS",
        "isLid": false
      }
    ],
    "imageAspect": 2.155
  },
  {
    "slug": "male-urinal",
    "prefix": "CXWUM",
    "prefixes": [
      "CXWUM"
    ],
    "section": "Hollow Wares",
    "name": "Male urinal",
    "subtitle": "Containers, jars, trays, urinals & dressing drums",
    "summary": "Stainless where plastic stains, cracks and has to be thrown away — seamless, and it takes ward disinfection indefinitely.",
    "catalogueTitle": "Hollow Wares",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p77/p77-dressing-container-04-249x211.jpg",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      59
    ],
    "sizes": [
      {
        "sku": "CXWUM-0750",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "750ml",
        "needsReview": false,
        "variant": "CXWUM",
        "isLid": false
      }
    ],
    "imageAspect": 1.1801
  },
  {
    "slug": "female-urinal",
    "prefix": "CXWUF",
    "prefixes": [
      "CXWUF"
    ],
    "section": "Hollow Wares",
    "name": "Female urinal",
    "subtitle": "Containers, jars, trays, urinals & dressing drums",
    "summary": "The anatomical form, in seamless stainless that survives ward disinfection without staining or crazing like plastic.",
    "catalogueTitle": "Hollow Wares",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "304 (ASTM)"
    },
    "image": "/catalogue/img/p77/p77-dressing-container-05-253x202.jpg",
    "imageAlt": null,
    "imageFlag": "ok",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [
      59
    ],
    "sizes": [
      {
        "sku": "CXWUF-0750",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "750ml",
        "needsReview": false,
        "variant": "CXWUF",
        "isLid": false
      }
    ],
    "imageAspect": 1.2525
  },
  {
    "slug": "instrument-tray-lid",
    "prefix": "CXWDT",
    "prefixes": [
      "CXWDT"
    ],
    "section": "Hollow Wares",
    "name": "Instrument Tray with Lid",
    "subtitle": "Solid, loose lid",
    "summary": "A lift-off lid keeps a prepared set covered at the bedside — set up early without leaving it exposed.",
    "catalogueTitle": "Instrument Tray with Lid",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch.",
      "Overlaps your existing Instruments tray (CXWT) — merge or keep separate?"
    ],
    "specs": {
      "Material": "Stainless steel",
      "Lid": "Loose, centre grip",
      "Body": "Solid, drawn",
      "Finish": "Polished"
    },
    "image": "/catalogue/img/extras/cxwdt-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwdt-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWDT-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWDT",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "catheter-tray",
    "prefix": "CXWCT",
    "prefixes": [
      "CXWCT"
    ],
    "section": "Hollow Wares",
    "name": "Catheter Tray",
    "subtitle": "Long, lidded",
    "summary": "Long, narrow and lidded, so catheters stay covered and straight between preparation and use.",
    "catalogueTitle": "Catheter Tray",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Lid": "Loose, knob grip",
      "Form": "Long, narrow",
      "Finish": "Polished"
    },
    "image": "/catalogue/img/extras/cxwct-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwct-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWCT-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWCT",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "cotton-dispenser",
    "prefix": "CXWCD",
    "prefixes": [
      "CXWCD"
    ],
    "section": "Hollow Wares",
    "name": "Cotton Dispenser",
    "subtitle": "Cylindrical, sprung base",
    "summary": "Presents one roll at a time and keeps the rest covered — no hand going into the stock.",
    "catalogueTitle": "Cotton Dispenser",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Dispensing": "Top aperture, sprung follower",
      "Form": "Cylindrical",
      "Finish": "Polished"
    },
    "image": "/catalogue/img/extras/cxwcd-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwcd-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWCD-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWCD",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "medical-box",
    "prefix": "CXWMB",
    "prefixes": [
      "CXWMB"
    ],
    "section": "Hollow Wares",
    "name": "Medical Box",
    "subtitle": "Solid, lidded",
    "summary": "Dressings and consumables kept covered on the ward, in a box that takes the same cycle they do.",
    "catalogueTitle": "Medical Box",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Lid": "Loose, recessed panel",
      "Body": "Solid, drawn",
      "Finish": "Polished"
    },
    "image": "/catalogue/img/extras/cxwmb-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwmb-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWMB-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWMB",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "needle-box",
    "prefix": "CXWNB",
    "prefixes": [
      "CXWNB"
    ],
    "section": "Hollow Wares",
    "name": "Needle Box",
    "subtitle": "Compartmented, hinged lid",
    "summary": "Fixed compartments separate suture needles by size, so one can be lifted without disturbing the rest.",
    "catalogueTitle": "Needle Box",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Interior": "Fixed compartments",
      "Lid": "Hinged",
      "Finish": "Polished"
    },
    "image": "/catalogue/img/extras/cxwnb-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwnb-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWNB-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWNB",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "bedpan-standard",
    "prefix": "CXWBP",
    "prefixes": [
      "CXWBP"
    ],
    "section": "Hollow Wares",
    "name": "Bedpan",
    "subtitle": "Standard, lidded",
    "summary": "The standard lidded pan — fitted lid so it is carried covered, seamless so it cleans back to a validated state.",
    "catalogueTitle": "Bedpan",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Lid": "Fitted, knob grip",
      "Form": "Full oval",
      "Finish": "Polished, seamless interior"
    },
    "image": "/catalogue/img/extras/cxwbp-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwbp-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWBP-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWBP",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "bedpan-slipper",
    "prefix": "CXWBP",
    "prefixes": [
      "CXWBP"
    ],
    "section": "Hollow Wares",
    "name": "Slipper Bedpan",
    "subtitle": "Low-entry, handled",
    "summary": "Low tapered entry and a rear handle, for patients who cannot be lifted onto a standard pan.",
    "catalogueTitle": "Slipper Bedpan",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch.",
      "You asked for the two bedpans to slide together as one product. They're actually different products — your call."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Form": "Wedge, low tapered entry",
      "Handle": "Rear",
      "Finish": "Polished, seamless interior"
    },
    "image": "/catalogue/img/extras/cxwbp-1002.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwbp-1002.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWBP-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWBP",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "surgical-bowl",
    "prefix": "CXWSB",
    "prefixes": [
      "CXWSB"
    ],
    "section": "Hollow Wares",
    "name": "Surgical Bowl",
    "subtitle": "Deep, wide rim",
    "summary": "Seamless drawn body with a rolled rim — no joint to trap soil at the sterile field.",
    "catalogueTitle": "Surgical Bowl",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Body": "Seamless drawn",
      "Rim": "Rolled",
      "Finish": "Mirror polished"
    },
    "image": "/catalogue/img/extras/cxwsb-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxwsb-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXWSB-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXWSB",
        "isLid": false
      }
    ],
    "imageAspect": 1.0882
  },
  {
    "slug": "silicon-colour-codes",
    "prefix": "CXAH",
    "prefixes": [
      "CXAH"
    ],
    "section": "Trays Accessories / Silicon Holding System",
    "name": "Silicon Holding System — Colour Codes",
    "subtitle": "Silicon Color Codes",
    "summary": "Colour-coded silicone lets a set be recognised by its colour on the tray — fewer wrong sets pulled when theatre is running late.",
    "catalogueTitle": "Silicon Holding System",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "Silicon Medical Grade"
    },
    "image": "/catalogue/img/p81/p81-silicon-strip-group-1-vectorrender-2344x201.png",
    "imageAlt": "/catalogue/img/p81/p81-silicon-strip-group-2-vectorrender-2344x201.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "Colour E — Blue",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p81/p81-silicon-strip-group-1-vectorrender-2344x201.png",
          "/catalogue/img/p82/p82-silicon-strip-group-2-vectorrender-2476x230.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1002",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1005",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1008",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1010",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1042",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1045",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1048",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1050",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Colour C — Green",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p81/p81-silicon-strip-group-2-vectorrender-2344x201.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1012",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1015",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1018",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1020",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Colour A — Red",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p81/p81-silicon-strip-group-3-vectorrender-2350x158.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1022",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1025",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1028",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1030",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Colour D — Navy",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p82/p82-silicon-strip-group-1-vectorrender-2350x146.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1032",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1035",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1038",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1040",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      },
      {
        "label": "Colour F — Orange",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p82/p82-silicon-strip-group-3-vectorrender-2856x145.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1052",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1055",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "07 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1058",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1060",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      62,
      63
    ],
    "sizes": [
      {
        "sku": "CXAH-1002",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1005",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1008",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1010",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1012",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1015",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1018",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1020",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1022",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1025",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1028",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1030",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1032",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1035",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1038",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1040",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1042",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1045",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1048",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1050",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1052",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1055",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "07 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1058",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1060",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      }
    ],
    "imageAspect": 11.6617
  },
  {
    "slug": "silicon-strips-parts",
    "prefix": "CXAH",
    "prefixes": [
      "CXAH"
    ],
    "section": "Trays Accessories / Silicon Holding System",
    "name": "Silicon Holding System — Strips & Part Sets",
    "subtitle": "Single strips & numbered part sets",
    "summary": "Strips and part sets that turn a plain tray into a held layout, without buying a new tray to get it.",
    "catalogueTitle": "Silicon Holding System",
    "variants": [],
    "needsReview": false,
    "notes": [],
    "specs": {
      "Material": "Silicon Medical Grade"
    },
    "image": "/catalogue/img/p83/p83-strip-endoscope-left-vectorrender-989x170.png",
    "imageAlt": "/catalogue/img/p83/p83-strip-endoscope-right-vectorrender-1182x142.png",
    "imageFlag": "ok",
    "details": [],
    "groups": [
      {
        "label": "For Endo Scope Baskets",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p83/p83-endoscope-baskets-parts-vectorrender-2011x292.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1122",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "04",
            "needsReview": true,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1024",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05",
            "needsReview": true,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1026",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "06",
            "needsReview": true,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1028",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1030",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1032",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      },
      {
        "label": "For Implants & Burr Holder",
        "code": null,
        "note": null,
        "images": [
          "/catalogue/img/p83/p83-implants-burrholder-parts-vectorrender-2722x255.png"
        ],
        "sizes": [
          {
            "sku": "CXAH-1151",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "04",
            "needsReview": true,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1054",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "05",
            "needsReview": true,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1056",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "06",
            "needsReview": true,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1058",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1060",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "20 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1070",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": null,
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          },
          {
            "sku": "CXAH-1028",
            "L": null,
            "W": null,
            "H": null,
            "sizeText": null,
            "raw": "",
            "lid": null,
            "note": "10 Instruments",
            "needsReview": false,
            "variant": "CXAH",
            "isLid": false
          }
        ]
      }
    ],
    "groupLayout": null,
    "sourcePages": [
      64
    ],
    "sizes": [
      {
        "sku": "CXAH-1103",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1107",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "for Laryngoscope",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1112",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "for Fixation Rack",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1118",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "for Elevators",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1122",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "04",
        "needsReview": true,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1024",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05",
        "needsReview": true,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1026",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "06",
        "needsReview": true,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1028",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1030",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1032",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1151",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "04",
        "needsReview": true,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1054",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "05",
        "needsReview": true,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1056",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "06",
        "needsReview": true,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1058",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "10 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1060",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": "20 Instruments",
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      },
      {
        "sku": "CXAH-1070",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": "",
        "lid": null,
        "note": null,
        "needsReview": false,
        "variant": "CXAH",
        "isLid": false
      }
    ],
    "imageAspect": 5.8176
  },
  {
    "slug": "instrument-rack",
    "prefix": "CXAR",
    "prefixes": [
      "CXAR"
    ],
    "section": "Trays Accessories / Silicon Holding System",
    "name": "Instrument Rack",
    "subtitle": "Colour-coded, clip-on",
    "summary": "Clips onto the tray wall to hold instruments apart and in sequence, colour-coded so the set is identified at a glance.",
    "catalogueTitle": "Instrument Rack",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Strip": "Silicone, colour-coded",
      "Mounting": "Clip-on to tray wall",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxar-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxar-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXAR-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXAR",
        "isLid": false
      }
    ],
    "imageAspect": 1
  },
  {
    "slug": "test-tube-rack",
    "prefix": "CXAL",
    "prefixes": [
      "CXAL"
    ],
    "section": "Trays Accessories / Silicon Holding System",
    "name": "Laboratory Test-Tube Rack",
    "subtitle": "Two-tier, open frame",
    "summary": "Holds tubes upright through a punched plate, in stainless that takes the autoclave as well as the bench.",
    "catalogueTitle": "Laboratory Test-Tube Rack",
    "variants": [],
    "needsReview": true,
    "notes": [
      "Placeholder photography — replace with CandelX studio shots before launch."
    ],
    "specs": {
      "Material": "Stainless steel",
      "Construction": "Two-tier open frame",
      "Top plate": "Punched apertures",
      "Sterilization": "Steam autoclave"
    },
    "image": "/catalogue/img/extras/cxal-1001.jpg",
    "imageAlt": null,
    "images": [
      "/catalogue/img/extras/cxal-1001.jpg"
    ],
    "imageFlag": "placeholder",
    "details": [],
    "groups": [],
    "groupLayout": null,
    "sourcePages": [],
    "sizes": [
      {
        "sku": "CXAL-1001",
        "L": null,
        "W": null,
        "H": null,
        "sizeText": null,
        "raw": null,
        "lid": null,
        "note": null,
        "needsReview": true,
        "variant": "CXAL",
        "isLid": false
      }
    ],
    "imageAspect": 1
  }
];

/** Real pixel size of every image the site renders, keyed by its public path.
 *  Read straight from each file's own header — filenames are not trusted.
 *  Templates use this to set width/height on <img> so nothing shifts as photos
 *  load. Audit 2026-09-14, M-06. */
export const imageDims: Record<string, [number, number]> = {
  "/catalogue/img/p16/p16-wire-mesh-trays-01-538x324.png": [
    538,
    324
  ],
  "/catalogue/img/p16/p16-wire-mesh-trays-02-370x285.png": [
    370,
    285
  ],
  "/catalogue/img/p16/p16-wire-mesh-trays-03-177x139.png": [
    177,
    139
  ],
  "/catalogue/img/p16/p16-wire-mesh-trays-04-163x126.jpg": [
    163,
    126
  ],
  "/catalogue/img/p16/p16-wire-mesh-trays-05-163x133.png": [
    163,
    133
  ],
  "/catalogue/img/p16/p16-wire-mesh-trays-06-164x133.jpg": [
    164,
    133
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-01-441x295.png": [
    441,
    295
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-02-482x286.png": [
    482,
    286
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-04-137x133.png": [
    137,
    133
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-05-163x133.png": [
    163,
    133
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-03-177x139.png": [
    177,
    139
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-06-163x134.png": [
    163,
    134
  ],
  "/catalogue/img/p17/p17-5-5-x-5-5-x-07-283x167.png": [
    283,
    167
  ],
  "/catalogue/img/p60/p60-mesh-cassette-01-370x228.png": [
    370,
    228
  ],
  "/catalogue/img/p60/p60-mesh-cassette-02-327x188.png": [
    327,
    188
  ],
  "/catalogue/img/extras/cxmb-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/p08/p08-perforated-trays-punching-processed-01-466x294.png": [
    466,
    294
  ],
  "/catalogue/img/p08/p08-perforated-trays-punching-processed-02-495x272.png": [
    495,
    272
  ],
  "/catalogue/img/p08/p08-perforated-trays-punching-processed-recovered-chamfercorner-163x110.png": [
    163,
    110
  ],
  "/catalogue/img/p08/p08-perforated-trays-punching-processed-03-164x133.png": [
    164,
    133
  ],
  "/catalogue/img/p08/p08-perforated-trays-punching-processed-04-163x133.png": [
    163,
    133
  ],
  "/catalogue/img/p08/p08-perforated-trays-punching-processed-05-164x123.png": [
    164,
    123
  ],
  "/catalogue/img/p09/p09-perforated-trays-punching-processed-01-270x325.png": [
    270,
    325
  ],
  "/catalogue/img/p09/p09-perforated-trays-punching-processed-02-319x247.png": [
    319,
    247
  ],
  "/catalogue/img/p09/p09-perforated-trays-punching-processed-04-163x133.jpg": [
    163,
    133
  ],
  "/catalogue/img/p09/p09-perforated-trays-punching-processed-05-163x133.png": [
    163,
    133
  ],
  "/catalogue/img/p09/p09-perforated-trays-punching-processed-06-276x183.png": [
    276,
    183
  ],
  "/catalogue/img/extras/cxpd-1001.jpg": [
    1311,
    1311
  ],
  "/catalogue/img/extras/cxpi-1001.jpg": [
    1238,
    1238
  ],
  "/catalogue/img/extras/cxpx-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpy-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpy-1002.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpo-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpo-1002.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpb-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpb-1002.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpb-1003.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxpl-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/p24/p24-transportation-baskets-01-478x350.png": [
    478,
    350
  ],
  "/catalogue/img/p24/p24-transportation-baskets-02-408x260.png": [
    408,
    260
  ],
  "/catalogue/img/p24/p24-transportation-baskets-03-566x434.png": [
    566,
    434
  ],
  "/catalogue/img/p24/p24-transportation-baskets-04-400x242.png": [
    400,
    242
  ],
  "/catalogue/img/p27/p27-suitable-for-surgical-sets-01-438x438.png": [
    438,
    438
  ],
  "/catalogue/img/p27/p27-suitable-for-surgical-sets-02-439x324.png": [
    439,
    324
  ],
  "/catalogue/img/p27/p27-suitable-for-surgical-sets-03-383x430.png": [
    383,
    430
  ],
  "/catalogue/img/p27/p27-suitable-for-surgical-sets-04-479x277.png": [
    479,
    277
  ],
  "/catalogue/img/p28/p28-suitable-for-surgical-sets-01-342x172.png": [
    342,
    172
  ],
  "/catalogue/img/p28/p28-suitable-for-surgical-sets-03-402x203.png": [
    402,
    203
  ],
  "/catalogue/img/p29/p29-universal-trays-01-326x406.png": [
    326,
    406
  ],
  "/catalogue/img/p29/p29-universal-trays-02-305x258.png": [
    305,
    258
  ],
  "/catalogue/img/p30/p30-universal-transportation-trays-01-274x255.png": [
    274,
    255
  ],
  "/catalogue/img/p30/p30-universal-transportation-trays-02-420x199.png": [
    420,
    199
  ],
  "/catalogue/img/extras/cxubs-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxubs-1002.jpg": [
    755,
    755
  ],
  "/catalogue/img/extras/cxubs-1003.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxubs-1004.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/p46/p46-cassette-trays-01-381x269.png": [
    381,
    269
  ],
  "/catalogue/img/p46/p46-cassette-trays-02-379x266.png": [
    379,
    266
  ],
  "/catalogue/img/p48/p48-08-plus-instruments-01-438x236.png": [
    438,
    236
  ],
  "/catalogue/img/p48/p48-08-plus-instruments-02-344x188.png": [
    344,
    188
  ],
  "/catalogue/img/p48/p48-08-plus-instruments-03-501x243.png": [
    501,
    243
  ],
  "/catalogue/img/p48/p48-08-plus-instruments-04-291x176.png": [
    291,
    176
  ],
  "/catalogue/img/p49/p49-for-osteotome-set-01-567x285.png": [
    567,
    285
  ],
  "/catalogue/img/p49/p49-for-osteotome-set-02-427x246.png": [
    427,
    246
  ],
  "/catalogue/img/p50/p50-07-instruments-01-359x264.png": [
    359,
    264
  ],
  "/catalogue/img/p50/p50-07-instruments-02-437x235.png": [
    437,
    235
  ],
  "/catalogue/img/p51/p51-strip-lock-01-446x236.png": [
    446,
    236
  ],
  "/catalogue/img/p51/p51-strip-lock-02-456x252.png": [
    456,
    252
  ],
  "/catalogue/img/p52/p52-strip-lock-01-387x209.png": [
    387,
    209
  ],
  "/catalogue/img/p52/p52-strip-lock-02-451x234.png": [
    451,
    234
  ],
  "/catalogue/img/p53/p53-square-pattern-01-339x252.png": [
    339,
    252
  ],
  "/catalogue/img/p53/p53-square-pattern-02-351x188.png": [
    351,
    188
  ],
  "/catalogue/img/p54/p54-elongated-01-348x193.png": [
    348,
    193
  ],
  "/catalogue/img/p54/p54-elongated-02-458x249.png": [
    458,
    249
  ],
  "/catalogue/img/p55/p55-elongated-single-lock-01-529x307.png": [
    529,
    307
  ],
  "/catalogue/img/p55/p55-elongated-single-lock-02-434x253.png": [
    434,
    253
  ],
  "/catalogue/img/p56/p56-elongated-double-lock-01-315x197.png": [
    315,
    197
  ],
  "/catalogue/img/p56/p56-elongated-double-lock-02-304x150.png": [
    304,
    150
  ],
  "/catalogue/img/p57/p57-elongated-01-411x213.png": [
    411,
    213
  ],
  "/catalogue/img/p57/p57-elongated-02-352x183.png": [
    352,
    183
  ],
  "/catalogue/img/p58/p58-unionjack-01-335x351.png": [
    335,
    351
  ],
  "/catalogue/img/p58/p58-unionjack-02-357x231.png": [
    357,
    231
  ],
  "/catalogue/img/p59/p59-double-hinge-cassette-trays-01-397x234.png": [
    397,
    234
  ],
  "/catalogue/img/p59/p59-double-hinge-cassette-trays-02-330x219.png": [
    330,
    219
  ],
  "/catalogue/img/p61/p61-cassettes-for-orthodontic-pliers-04-332x345.png": [
    332,
    345
  ],
  "/catalogue/img/p61/p61-cassettes-for-orthodontic-pliers-05-395x242.png": [
    395,
    242
  ],
  "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-01-450x353.png": [
    450,
    353
  ],
  "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-02-374x292.png": [
    374,
    292
  ],
  "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-03-383x342.png": [
    383,
    342
  ],
  "/catalogue/img/p62/p62-cassettes-for-orthodontic-pliers-04-433x259.png": [
    433,
    259
  ],
  "/catalogue/img/p63/p63-round-click-lock-01-275x220.png": [
    275,
    220
  ],
  "/catalogue/img/p63/p63-round-click-lock-02-311x187.png": [
    311,
    187
  ],
  "/catalogue/img/extras/cxcd-1004.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1005.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1006.jpg": [
    872,
    872
  ],
  "/catalogue/img/extras/cxcd-1007.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1008.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1010.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1011.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1009.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1012.jpg": [
    901,
    901
  ],
  "/catalogue/img/extras/cxcd-1013.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1015.jpg": [
    905,
    905
  ],
  "/catalogue/img/extras/cxcd-1002.jpg": [
    1319,
    1319
  ],
  "/catalogue/img/extras/cxcd-1014.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxcd-1003.jpg": [
    1352,
    1352
  ],
  "/catalogue/img/p40/p40-for-professional-01-302x187.png": [
    302,
    187
  ],
  "/catalogue/img/p40/p40-for-professional-02-305x221.png": [
    305,
    221
  ],
  "/catalogue/img/p40/p40-for-professional-03-263x175.png": [
    263,
    175
  ],
  "/catalogue/img/p40/p40-for-professional-04-317x209.png": [
    317,
    209
  ],
  "/catalogue/img/p40/p40-for-professional-05-319x230.png": [
    319,
    230
  ],
  "/catalogue/img/p40/p40-for-professional-06-273x182.png": [
    273,
    182
  ],
  "/catalogue/img/p40/p40-for-professional-07-289x250.png": [
    289,
    250
  ],
  "/catalogue/img/p40/p40-for-professional-08-399x324.png": [
    399,
    324
  ],
  "/catalogue/img/p40/p40-for-professional-09-287x215.png": [
    287,
    215
  ],
  "/catalogue/img/p40/p40-for-professional-10-272x268.png": [
    272,
    268
  ],
  "/catalogue/img/p41/p41-68-x-60-x-20mm-01-311x320.png": [
    311,
    320
  ],
  "/catalogue/img/p41/p41-68-x-60-x-20mm-02-290x248.png": [
    290,
    248
  ],
  "/catalogue/img/p41/p41-68-x-60-x-20mm-04-202x143.png": [
    202,
    143
  ],
  "/catalogue/img/p41/p41-68-x-60-x-20mm-03-291x250.png": [
    291,
    250
  ],
  "/catalogue/img/p41/p41-68-x-60-x-20mm-05-301x168.png": [
    301,
    168
  ],
  "/catalogue/img/p41/p41-68-x-60-x-20mm-06-187x149.png": [
    187,
    149
  ],
  "/catalogue/img/p42/p42-prf-system-recovered-srf9902-28x494.png": [
    28,
    494
  ],
  "/catalogue/img/p42/p42-prf-system-recovered-srf9904-26x494.png": [
    26,
    494
  ],
  "/catalogue/img/p42/p42-prf-system-recovered-srf9906-28x494.png": [
    28,
    494
  ],
  "/catalogue/img/p42/p42-prf-system-recovered-srf9908-29x494.png": [
    29,
    494
  ],
  "/catalogue/img/p42/p42-goldman-fox-01-144x388.png": [
    144,
    388
  ],
  "/catalogue/img/p42/p42-prf-system-recovered-srf9912-32x411.png": [
    32,
    411
  ],
  "/catalogue/img/p42/p42-prf-system-recovered-srf9914-87x485.png": [
    87,
    485
  ],
  "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-01-514x284.png": [
    514,
    284
  ],
  "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-04-449x406.png": [
    449,
    406
  ],
  "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-05-467x340.png": [
    467,
    340
  ],
  "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-02-163x133.jpg": [
    163,
    133
  ],
  "/catalogue/img/p43/p43-cassette-for-prf-instruments-set-03-163x133.png": [
    163,
    133
  ],
  "/catalogue/img/p68/p68-implant-surgical-box-01-256x264.png": [
    256,
    264
  ],
  "/catalogue/img/p68/p68-implant-surgical-box-02-198x165.png": [
    198,
    165
  ],
  "/catalogue/img/p69/p69-bur-holders-03-244x227.png": [
    244,
    227
  ],
  "/catalogue/img/p69/p69-bur-holders-04-273x245.png": [
    273,
    245
  ],
  "/catalogue/img/p69/p69-bur-holders-17-224x217.png": [
    224,
    217
  ],
  "/catalogue/img/p69/p69-bur-holders-06-216x216.png": [
    216,
    216
  ],
  "/catalogue/img/p69/p69-bur-holders-11-204x227.png": [
    204,
    227
  ],
  "/catalogue/img/p69/p69-bur-holders-16-240x226.png": [
    240,
    226
  ],
  "/catalogue/img/p69/p69-bur-holders-02-197x169.png": [
    197,
    169
  ],
  "/catalogue/img/p69/p69-bur-holders-07-182x197.png": [
    182,
    197
  ],
  "/catalogue/img/p69/p69-bur-holders-12-196x193.png": [
    196,
    193
  ],
  "/catalogue/img/p69/p69-bur-holders-01-141x155.png": [
    141,
    155
  ],
  "/catalogue/img/p69/p69-bur-holders-08-189x191.png": [
    189,
    191
  ],
  "/catalogue/img/p69/p69-bur-holders-13-192x179.png": [
    192,
    179
  ],
  "/catalogue/img/p69/p69-bur-holders-18-227x180.png": [
    227,
    180
  ],
  "/catalogue/img/extras/cxbd-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxbd-1002.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/p72/p72-orthodontics-ss-mirrors-set-of-7-vectorrender-2437x4261.png": [
    2437,
    4261
  ],
  "/catalogue/img/mirrors/p72-1.png": [
    414,
    1173
  ],
  "/catalogue/img/mirrors/p72-3.png": [
    418,
    1215
  ],
  "/catalogue/img/mirrors/p72-2.png": [
    273,
    1075
  ],
  "/catalogue/img/mirrors/p72-4.png": [
    424,
    1221
  ],
  "/catalogue/img/mirrors/p72-5.png": [
    338,
    1224
  ],
  "/catalogue/img/mirrors/p72-6.png": [
    368,
    1231
  ],
  "/catalogue/img/mirrors/p72-7.png": [
    372,
    1009
  ],
  "/catalogue/img/p73/p73-intraoral-photo-mirrors-vectorrender-3120x2188.png": [
    3120,
    2188
  ],
  "/catalogue/img/p73/p73-photography-mirrors-with-handle-vectorrender-2133x1852.png": [
    2133,
    1852
  ],
  "/catalogue/img/mirrors/p73a-1.png": [
    581,
    1070
  ],
  "/catalogue/img/mirrors/p73a-2.png": [
    497,
    1056
  ],
  "/catalogue/img/mirrors/p73a-3.png": [
    620,
    710
  ],
  "/catalogue/img/mirrors/p73a-4.png": [
    708,
    859
  ],
  "/catalogue/img/mirrors/p73a-5.png": [
    661,
    860
  ],
  "/catalogue/img/mirrors/p73b-1.png": [
    586,
    903
  ],
  "/catalogue/img/mirrors/p73b-2.png": [
    531,
    862
  ],
  "/catalogue/img/mirrors/p73b-3.png": [
    459,
    860
  ],
  "/catalogue/img/mirrors/p73b-4.png": [
    376,
    858
  ],
  "/catalogue/img/p74/p74-glass-two-sided-orthodontic-mirror-vectorrender-2775x4198.png": [
    2775,
    4198
  ],
  "/catalogue/img/mirrors/p74-1.png": [
    227,
    644
  ],
  "/catalogue/img/mirrors/p74-2.png": [
    248,
    682
  ],
  "/catalogue/img/mirrors/p74-3.png": [
    307,
    742
  ],
  "/catalogue/img/mirrors/p74-4.png": [
    244,
    683
  ],
  "/catalogue/img/mirrors/p74-5.png": [
    361,
    556
  ],
  "/catalogue/img/mirrors/p74-6.png": [
    353,
    609
  ],
  "/catalogue/img/mirrors/p74-8.png": [
    292,
    411
  ],
  "/catalogue/img/mirrors/p74-7.png": [
    806,
    1267
  ],
  "/catalogue/img/p76/p76-instruments-trays-01-252x181.png": [
    252,
    181
  ],
  "/catalogue/img/p76/p76-instruments-trays-02-265x167.png": [
    265,
    167
  ],
  "/catalogue/img/p76/p76-instruments-trays-03-244x177.jpg": [
    244,
    177
  ],
  "/catalogue/img/p76/p76-instruments-trays-04-217x178.jpg": [
    217,
    178
  ],
  "/catalogue/img/p76/p76-instruments-trays-05-227x208.png": [
    227,
    208
  ],
  "/catalogue/img/p77/p77-dressing-container-01-174x225.png": [
    174,
    225
  ],
  "/catalogue/img/p77/p77-dressing-container-02-230x230.jpg": [
    230,
    230
  ],
  "/catalogue/img/p77/p77-dressing-container-06-217x276.jpg": [
    217,
    276
  ],
  "/catalogue/img/p77/p77-dressing-container-03-278x129.png": [
    278,
    129
  ],
  "/catalogue/img/p77/p77-dressing-container-04-249x211.jpg": [
    249,
    211
  ],
  "/catalogue/img/p77/p77-dressing-container-05-253x202.jpg": [
    253,
    202
  ],
  "/catalogue/img/extras/cxwdt-1001.jpg": [
    834,
    834
  ],
  "/catalogue/img/extras/cxwct-1001.jpg": [
    1317,
    1317
  ],
  "/catalogue/img/extras/cxwcd-1001.jpg": [
    1491,
    1491
  ],
  "/catalogue/img/extras/cxwmb-1001.jpg": [
    863,
    863
  ],
  "/catalogue/img/extras/cxwnb-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxwbp-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxwbp-1002.jpg": [
    936,
    936
  ],
  "/catalogue/img/extras/cxwsb-1001.jpg": [
    555,
    510
  ],
  "/catalogue/img/p81/p81-silicon-strip-group-1-vectorrender-2344x201.png": [
    2344,
    201
  ],
  "/catalogue/img/p81/p81-silicon-strip-group-2-vectorrender-2344x201.png": [
    2344,
    201
  ],
  "/catalogue/img/p82/p82-silicon-strip-group-2-vectorrender-2476x230.png": [
    2476,
    230
  ],
  "/catalogue/img/p81/p81-silicon-strip-group-3-vectorrender-2350x158.png": [
    2350,
    158
  ],
  "/catalogue/img/p82/p82-silicon-strip-group-1-vectorrender-2350x146.png": [
    2350,
    146
  ],
  "/catalogue/img/p82/p82-silicon-strip-group-3-vectorrender-2856x145.png": [
    2856,
    145
  ],
  "/catalogue/img/p83/p83-strip-endoscope-left-vectorrender-989x170.png": [
    989,
    170
  ],
  "/catalogue/img/p83/p83-strip-endoscope-right-vectorrender-1182x142.png": [
    1182,
    142
  ],
  "/catalogue/img/p83/p83-endoscope-baskets-parts-vectorrender-2011x292.png": [
    2011,
    292
  ],
  "/catalogue/img/p83/p83-implants-burrholder-parts-vectorrender-2722x255.png": [
    2722,
    255
  ],
  "/catalogue/img/extras/cxar-1001.jpg": [
    1500,
    1500
  ],
  "/catalogue/img/extras/cxal-1001.jpg": [
    878,
    878
  ]
};
