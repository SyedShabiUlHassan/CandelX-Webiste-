// Catalogue data — verbatim from the supplied website kit (CX_PRODUCTS).
export type Product = {
  sku: string; name: string; dims: string; mass: string;
  stock: "ok" | "warn"; stockLabel: string; tags: string[];
};

export const products: Product[] = [
  { sku: "CX-DIN-1121", name: "DIN 1/1 perforated tray", dims: "480 × 250 × 50 mm", mass: "1.84 kg", stock: "ok", stockLabel: "In stock", tags: ["DIN 1/1", "Perforated base"] },
  { sku: "CX-DIN-0812", name: "DIN 1/2 perforated tray", dims: "270 × 250 × 50 mm", mass: "1.06 kg", stock: "ok", stockLabel: "In stock", tags: ["DIN 1/2", "Perforated base"] },
  { sku: "CX-DIN-1140", name: "DIN 1/1 container, solid lid", dims: "580 × 280 × 135 mm", mass: "3.42 kg", stock: "warn", stockLabel: "Lead 6 wk", tags: ["DIN 1/1", "Filter lid"] },
  { sku: "CX-MB-2404", name: "Micro-instrument tray", dims: "240 × 120 × 25 mm", mass: "0.41 kg", stock: "ok", stockLabel: "In stock", tags: ["Custom", "Silicone holders"] },
  { sku: "CX-DIN-0940", name: "DIN 3/4 container, filter lid", dims: "430 × 280 × 135 mm", mass: "2.88 kg", stock: "ok", stockLabel: "In stock", tags: ["DIN 3/4", "Filter lid"] },
  { sku: "CX-ACC-0110", name: "Silicone instrument holder set", dims: "10 posts · 3 heights", mass: "0.22 kg", stock: "warn", stockLabel: "Lead 4 wk", tags: ["Accessory", "Silicone holders"] },
];

export const filters = ["DIN 1/1", "DIN 3/4", "DIN 1/2", "Perforated base", "Filter lid", "Silicone holders", "Custom"];
