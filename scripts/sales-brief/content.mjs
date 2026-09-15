/* The written half of the product knowledge brief.
 *
 * Everything in here is hand-written. The product facts, sizes and article
 * numbers come from src/data/catalogue.ts at build time — see build.mjs.
 *
 * THREE KINDS OF STATEMENT, and they are tagged differently in the PDF:
 *
 *   fact()    — traceable to the CandelX catalogue data. Safe to say.
 *   bg()      — general industry background. True of the product category,
 *               not a claim about CandelX specifically. Safe to say as
 *               background; do not turn it into a promise about your goods.
 *   check()   — DO NOT SAY until someone at the factory confirms it.
 *
 * If you add to this file, keep to those three. The whole value of the
 * document is that Hassan can tell which is which while he is on a call.
 */

export const TO_CONFIRM = [
  {
    q: "Can you email an ISO 13485 certificate today?",
    why: "src/data/catalogue — certifications.ts lists ISO 13485, ISO 9001:2015, CE and cGMP, and the Quality page states all four. Every one has `document: null`: no certificate scan has ever been supplied. The website makes the claim; nothing on file backs it.",
    risk: "highest",
    note: "This is close to the first question a serious distributor or hospital buyer asks. Get the PDFs, check the expiry dates and the scope on each one, and put them in site/public/certifications/.",
  },
  {
    q: "What is the CE route — self-declaration or a Notified Body?",
    why: "Non-sterile, reusable instrument trays are usually Class I. Class I self-certified and Class I with a Notified Body number are different conversations, and a European importer will ask which.",
    risk: "highest",
    note: "If there is a Notified Body number, learn it. If it is self-declared, say so plainly — that is normal for this class and not a weakness.",
  },
  {
    q: "What autoclave cycle are the products rated for?",
    why: "23 of 79 products carry 'Sterilization: Steam autoclave' and nothing more. No temperature, no hold time, no cycle type.",
    risk: "high",
    note: "You want a sentence like '134 °C for 3.5 minutes, pre-vacuum' or '121 °C for 20 minutes, gravity'. Ask whether anyone has actually run a validation, or whether it is just 'it is stainless steel, it will be fine'.",
  },
  {
    q: "What are the load ratings and the mass of each tray?",
    why: "Every product page on the site says 'Mass, load ratings, validation reports and material certificates are available on request'. None of it is in the data.",
    risk: "high",
    note: "A CSSD buyer works to a maximum load per basket. If you cannot answer, you cannot sell to a hospital.",
  },
  { q: "MOQ — per article number, or per order?", why: "Not recorded anywhere.", risk: "high", note: "Distributors ask this in the first email. Get the number, and get to know whether it is negotiable on a first order." },
  { q: "Lead time — for stock items, and for made-to-order?", why: "Not recorded. 49 of 79 products are 'sizes on request', which implies made-to-order.", risk: "high", note: "Two numbers: normal, and what you can do if someone is desperate." },
  { q: "Price list, and what the price breaks are.", why: "Nothing on the site or in the data — the whole site is quote-only.", risk: "high", note: "Even if you never publish it, you need to know it to hold a conversation." },
  { q: "Incoterms and payment terms.", why: "Not recorded.", risk: "medium", note: "EXW / FOB / CIF, and whether you take LC, TT, or ask for a deposit." },
  { q: "Warranty, and what happens with a corrosion complaint.", why: "Not recorded.", risk: "medium", note: "Corrosion complaints are the most common after-sale issue in this trade. Know the policy before the first one arrives." },
  { q: "Packaging — how does it ship, and what is on the carton?", why: "Not recorded.", risk: "medium", note: "Individually poly-bagged? Carton quantity? Barcode or article number printed? Distributors need this for their warehouse." },
  { q: "HS code and country of origin for the export documents.", why: "Not recorded.", risk: "medium", note: "Usually HS 9018 for medical instruments, but confirm the exact sub-heading your freight agent uses — do not guess on a customs form." },
  { q: "Can you private-label / OEM, and at what quantity?", why: "Not recorded. The Capabilities page describes manufacturing but says nothing about branding.", risk: "medium", note: "Laser-marked logo? Custom article numbers? Custom carton? This is often what a distributor is really asking about." },
  { q: "Is there a UDI / traceability system on the product?", why: "Not recorded.", risk: "medium", note: "Lot marking, batch traceability back to the steel certificate. Hospitals increasingly require it; distributors in the EU will ask about UDI." },
  { q: "Do you make rigid sterilization containers with filters and valves?", why: "Reading the catalogue, the answer looks like no — the range is trays, baskets, cassettes and boxes. See 'The one thing you must not get wrong' in Part 1.", risk: "high", note: "Confirm it, because getting this wrong in front of a hospital buyer ends the conversation." },
];

export const NEVER_SAY = [
  {
    claim: "FDA approved / FDA registered / FDA cleared",
    why: "FDA and CBI were deliberately removed from the site on your own instruction (2026-09-12) and the data file carries a note saying they must not be reintroduced. Unless something has changed since, you have no FDA claim to make. Saying it to a US buyer is a serious problem, not a small exaggeration.",
  },
  {
    claim: "Sterile / supplied sterile",
    why: "These are reusable devices supplied non-sterile, for the customer to clean and sterilize. 'Sterilization tray' means a tray you sterilize things in, not a tray that arrives sterile. Confusing the two is the classic new-seller mistake.",
  },
  {
    claim: "Medical grade / surgical grade steel (used as if it means something specific)",
    why: "It has no legal definition. Say the grade: 304 to ASTM, or 316. Buyers who know the trade will trust the number and distrust the adjective.",
  },
  {
    claim: "Same as Aesculap / identical to a German brand",
    why: "A comparison you cannot evidence, and it invites a dimensional-compatibility claim you have not tested. Compete on what you can show.",
  },
  {
    claim: "Any specific autoclave temperature or cycle time",
    why: "Until someone confirms the validated cycle, you do not have one to quote. See the confirm list.",
  },
  {
    claim: "Lifetime warranty / it will never rust",
    why: "Stainless steel does corrode under the wrong conditions, and most corrosion complaints in this trade come from water quality, detergent or contact with carbon-steel instruments. Promising it cannot happen guarantees you will be wrong in front of a customer.",
  },
];

/* ─────────────────────── Part 2: the technical core ─────────────────────── */

export const KNOWLEDGE = [
  {
    id: "steel",
    title: "Stainless steel: 304, 316, and what the numbers buy",
    lede: "Almost every technical question you get will come back to the steel. If you understand this section you can hold your end of most conversations.",
    blocks: [
      { t: "fact", h: "What you actually sell", p: "78 of your 79 products carry a Material spec. The great majority are <b>304 (ASTM)</b>. The steel mirrors — both the orthodontic set of 7 and the intraoral photo mirrors — are <b>316 (ASTM)</b>. The silicone holding system is <b>medical-grade silicone</b>, and one mirror range is <b>glass</b>. The Quality page states 304 and 316L to ASTM, at 0.8–1.2 mm sheet gauge. Transportation baskets are 1.5 mm sheet, and are offered in steel or in an optional aluminium version (CXUT vs CXUTA)." },
      { t: "bg", h: "What 304 is", p: "304 is the default austenitic stainless: roughly 18% chromium, 8% nickel. The chromium is the part that matters — it reacts with oxygen to form an invisible, self-repairing chromium-oxide layer a few atoms thick. That layer, not the bulk metal, is what resists corrosion. Scratch it and it re-forms, provided oxygen can reach the surface. This is why stainless rusts in crevices, under deposits and under trapped saline: those are the places oxygen cannot get to." },
      { t: "bg", h: "What 316 adds, and when it is worth it", p: "316 adds about 2–3% molybdenum. Molybdenum specifically resists <i>pitting</i> and <i>crevice corrosion</i> caused by chlorides — saline, blood, tap water with high chloride, some disinfectants. That is the whole difference. For a tray that gets washed, rinsed and dried properly, 304 is entirely appropriate and is what most of this trade uses. 316 earns its extra cost where chlorides sit on the surface, or where the finish itself is the product — which is exactly why the mirrors are 316." },
      { t: "bg", h: "And 316L", p: "The L is low carbon (max 0.03%). Low carbon matters at welds: in ordinary 316 the heat of welding can precipitate chromium carbides at the grain boundaries, which robs the neighbouring metal of chromium and leaves it vulnerable — 'sensitisation', and the resulting failure is intergranular corrosion along the weld line. 316L avoids it. For a welded mesh frame it is a meaningful choice, not marketing." },
      { t: "bg", h: "The magnet question", p: "A customer will sometimes test a sample with a magnet and tell you it is not real stainless because it sticks a little. Austenitic steels like 304 and 316 are non-magnetic when annealed, but cold working — deep drawing a bowl, forming a rim, pressing a corner — can transform some austenite to martensite and make the formed areas slightly magnetic. A drawn bowl showing slight magnetism at the base is normal and is not evidence of the wrong grade. The honest answer to the magnet test is a material certificate, not an argument." },
      { t: "bg", h: "Passivation", p: "After forming and welding, parts are usually cleaned and passivated — an acid treatment (citric or nitric) that removes free iron and other contamination from the surface and lets the chromium-oxide layer form cleanly and evenly. Free iron left on the surface from tooling is one of the classic causes of a brand-new tray developing orange spots on its first cycle." },
      { t: "check", h: "Ask your factory", p: "Is the steel 304 or 316L where the Quality page says 316L? Do you get mill certificates with the coil, and can you trace a finished tray back to one? Are parts passivated after welding, and with what? These three answers turn a corrosion conversation from defensive into confident." },
    ],
  },
  {
    id: "rust",
    title: "“It rusted” — the complaint you will get most",
    lede: "This is worth its own section because it is the single most common after-sale issue in this trade, and because the tray is usually not the cause. Handle it well and you keep the customer.",
    blocks: [
      { t: "bg", h: "Orange spots that wipe off", p: "Almost always <b>deposited</b> rust, not corrosion of the tray. Sources: a carbon-steel or chrome-plated instrument in the same load shedding iron; iron particles in the water supply; a worn washer-disinfector rack or a rusty autoclave chamber upstream. Test: wipe with a soft cloth. If it comes off and the metal underneath is clean and unpitted, the tray never corroded — it caught someone else's rust." },
      { t: "bg", h: "Pitting — small deep dark holes", p: "Real chloride attack. Causes: saline or blood left to dry on the surface, instruments not rinsed before sterilizing, tap water high in chloride used for the final rinse, or a disinfectant left in contact too long. Sterilizing a wet salty tray is the fastest way to pit stainless steel there is — the concentration rises as the water evaporates." },
      { t: "bg", h: "Brown or blue staining across a whole surface", p: "Usually water, not steel. Deposits from hard water, or silicate carry-over from the steam supply. It looks alarming and is cosmetic. Demineralised final rinse fixes it." },
      { t: "bg", h: "Rust along a weld", p: "The one that points back at manufacturing — sensitisation, or weld contamination, or inadequate passivation. Escalate this one to the factory with photographs rather than handling it yourself." },
      { t: "fact", h: "What to say", p: "Ask for a photograph before you say anything. Then: “Thank you — let me look at whether this is deposited rust or pitting, because they have completely different causes and I want to give you a real answer rather than a quick one.” That sentence buys you a day, costs you nothing in credibility, and is true." },
      { t: "bg", h: "The prevention advice that actually works", p: "Rinse instruments before they go in; do not let saline or blood dry on anything; use demineralised water for the final rinse; dry fully before storage; keep carbon-steel and plated instruments out of the same load; do not use chlorine-based disinfectants or steel wool on stainless. This is standard reprocessing advice and you can give it freely." },
    ],
  },
  {
    id: "holes",
    title: "Perforation, mesh and why the holes are the product",
    lede: "A customer asking “why is this one square and that one round?” is really asking what the tray is for. The holes are not decoration and they are not weight saving.",
    blocks: [
      { t: "bg", h: "What perforation is for", p: "Three jobs, in order. <b>Steam contact</b> — steam has to reach every surface of every instrument; a solid box shields its contents. <b>Condensate drainage</b> — steam condenses on cold metal and that water has to get out, or you finish the cycle with a wet pack, which is a failed load. <b>Drying</b> — air has to circulate at the end of the cycle. The same three jobs apply in the washer-disinfector, with water and detergent instead of steam." },
      { t: "fact", h: "What you actually make", p: "<b>Square pattern:</b> 6.4 × 6.4 mm on lid and bottom, 4.8 × 4.8 mm on the sides (CXPS round-corner / CXPT chamfer-corner). <b>Round pattern:</b> 8.0 mm and 4.8 mm diameter (CXPR round-corner / CXPU chamfer-corner). Both come in 20 sizes from 250 to 540 mm long, so the range is the same tray in two hole patterns and two corner styles — 40 article numbers each." },
      { t: "bg", h: "Round versus square, honestly", p: "Square gives more open area for the same pitch, so a square-perforated tray drains and dries a little faster and is the usual choice where the load is bulky. Round is gentler on fine instruments — a delicate tip is less likely to catch on a round edge than on a corner — and the smaller 4.8 mm holes stop small items falling through. Your own product copy says exactly this: the round-pattern page describes it as the pattern to ask for when the load is fine instruments that catch and bend in a square grid. That is a real, defensible answer to the question." },
      { t: "bg", h: "Wire mesh", p: "Mesh is the extreme of the same idea: the highest open area of all, so the best drainage and drying, and the most gentle on instrument tips because the wires are round in section. The trade-off is stiffness — hence the frame. Your single-frame and double-frame ranges are the same mesh basket with one or two welded frames; double frame is what you offer when the basket is long, heavily loaded, or handled hard. The mesh spec you publish is a woven 5.5 × 5.5 mm at 1.0 mm wire." },
      { t: "bg", h: "Solid, and when it is right", p: "Hollow ware — bowls, gallipots, kidney dishes, drums — is solid because it has to hold liquid or keep contents clean in transit, not because someone forgot the holes. A solid instrument box takes longer to heat, longer to dry, and needs to be sterilized open or with the lid ajar unless it is designed otherwise." },
      { t: "check", h: "Worth knowing", p: "What is the open area percentage of each pattern? It is a number CSSD buyers occasionally ask for and you do not currently have it." },
    ],
  },
  {
    id: "cycle",
    title: "How steam sterilization actually works",
    lede: "You do not need to be a technician, but you should not be lost when a customer talks about pre-vacuum, wet packs or 134 for 3.",
    blocks: [
      { t: "bg", h: "The two common cycles", p: "<b>121 °C for 15–20 minutes</b> and <b>134 °C for 3–4 minutes</b> are the two standard steam cycles. Higher temperature, shorter hold. Both are far below anything that troubles stainless steel — which is why 'it is stainless, it is fine' is <i>usually</i> true and still not a substitute for a validated statement." },
      { t: "bg", h: "Why air is the enemy", p: "Steam sterilizes by condensing on a surface and giving up its latent heat. Air trapped in a load stops steam reaching the surface, so trapped air means unsterilized instruments. <b>Gravity displacement</b> sterilizers push air out with incoming steam and work for simple open loads. <b>Pre-vacuum</b> sterilizers pull a vacuum first and are what you need for wrapped packs, hollow items and anything with a lumen. This is precisely why a perforated tray sterilizes more reliably than a solid box: air can leave and steam can enter." },
      { t: "bg", h: "Wet packs", p: "A load that comes out damp has failed — moisture wicks contamination straight through a wrap. Causes include overloading, poor drainage, stacking trays flat so water sits, and putting a heavy solid item on top of a light one. A tray that drains well and is loaded on a rack rather than flat is part of the fix, and it is a genuine selling point for perforated and mesh over solid." },
      { t: "bg", h: "Where your products sit in the workflow", p: "Dirty instruments → wash (manual or washer-disinfector) → dry → inspect and set up in a tray or cassette → wrap the tray, or place it in a rigid container → sterilize → store → open at the point of use. Your trays, baskets and cassettes are the thing the instruments sit in through the middle of that chain. Knowing the chain lets you ask a customer where their problem actually is." },
    ],
  },
  {
    id: "containers",
    title: "The one thing you must not get wrong",
    lede: "Trays and baskets are not the same product as rigid sterilization containers, and a hospital buyer uses the words precisely.",
    blocks: [
      { t: "bg", h: "What a rigid sterilization container means in a hospital", p: "In central sterile services, a 'sterilization container' usually means a sealed rigid box with a gasketed lid, a <b>filter or valve system</b> that lets steam in and keeps microorganisms out afterwards, and a tamper-evident seal. It replaces the wrap. It is a regulated, tested system and the filters are consumables." },
      { t: "fact", h: "What your catalogue appears to contain", p: "Reading the 79 products: trays, baskets, cassettes, boxes, mesh, hollow ware and holders. Lids are described as hinged, loose, perforated, framed or integral — never as gasketed or filtered. Nothing in the data mentions filters, valves or seals. On the evidence of the catalogue, these are trays and baskets that go <i>inside</i> a wrap or inside someone else's container." },
      { t: "check", h: "Confirm this before you need it", p: "Ask the factory directly whether any product is intended as a filtered rigid container. If the answer is no — which is what the catalogue suggests — that is completely fine and is a large, healthy market. But you must not let a CSSD buyer believe otherwise, and you must not answer a tender for rigid containers with a basket catalogue." },
      { t: "bg", h: "DIN sizes, while you are here", p: "European CSSD works in DIN basket modules: a <b>DIN 1/1</b> basket is about 480 × 250 mm, a <b>1/2</b> about 240 × 250 mm, with quarter and three-quarter sizes in between. If a buyer asks for '1/1 baskets', that is what they mean. Your wire mesh and perforated ranges run through those regions — for example the perforated trays at 540 × 240 and the transportation baskets up to 480 mm — so you can usually offer something close. Whether any product is dimensionally certified to DIN is a separate question you have not answered yet." },
    ],
  },
  {
    id: "washer",
    title: "The washer-disinfector, and why it matters to a tray",
    lede: "Most of a tray's hard life happens before sterilization, not during it.",
    blocks: [
      { t: "bg", h: "What happens in there", p: "A cold-water pre-rinse to shift protein, then a wash at around 55 °C with an alkaline detergent, a neutralising rinse, a thermal disinfection rinse at roughly 90 °C, then hot-air drying. The chemistry is far more aggressive than the autoclave, and it is where materials get found out." },
      { t: "bg", h: "Aluminium and alkaline detergent", p: "Standard alkaline washer detergents attack unanodised aluminium — it dulls, greys and eventually pits. This matters to you directly: transportation baskets are offered in an optional aluminium version (CXUTA). Aluminium is lighter and cheaper, and it is genuinely fine for transport and storage, but if a customer intends to run it through a washer-disinfector with alkaline chemistry they should be told, or they will come back unhappy. Steel (CXUT) is the answer for anything reprocessed." },
      { t: "bg", h: "Drainage and orientation", p: "Water has to leave. A tray that holds a puddle in a corner comes out wet and stains. This is another place where perforation pattern and a slightly raised base earn their keep, and it is worth asking a customer how they load their racks." },
    ],
  },
  {
    id: "cassettes",
    title: "Cassettes: the biggest part of your range",
    lede: "20 products and 172 article numbers — more than a quarter of everything you sell. Worth understanding properly.",
    blocks: [
      { t: "bg", h: "Why a practice buys cassettes at all", p: "A cassette holds a set of instruments in a fixed arrangement from the moment they leave the patient until they are opened at the next one. Three real benefits, and they are the ones to sell on: <b>instrument accountability</b> — you can see at a glance that a set is complete; <b>fewer sharps injuries</b> — nobody handles loose scalers and probes during cleaning; and <b>faster turnaround</b> — the set is washed, sterilized and stored as one unit and never has to be sorted." },
      { t: "fact", h: "What you make", p: "Your cassette range is organised largely by <b>lock type and hinge</b>: light pattern (button lock and detachable hinges), bracket-lock, four lock types in one range, round-click-lock, single-lock, double-lock, twin, UnionJack, double-hinge, square pattern, elongated, round-bottom, plus dedicated implant, endodontic and orthodontic-plier cassettes. Capacities run from 5 instruments up to 20, with accessory areas on some. Light pattern cassettes are 30 mm high; several ranges sit at 22–32 mm." },
      { t: "bg", h: "What a customer is really choosing", p: "Instrument count first (5, 7, 10, 20 — the sizes you publish), then height, then lock preference. Lock preference is largely habit and one-handed opening; most practices have a strong opinion and no technical reason. Do not fight it, just match it." },
      { t: "bg", h: "The 30 mm question", p: "Height is the constraint people forget. A shallower cassette has less mass to heat and dry, so it turns round faster — which is exactly what your own light-pattern copy says — but it will not close over bulky instruments. If someone is upgrading from a deeper cassette, ask what the tallest instrument in the set is." },
      { t: "bg", h: "Silicone holders", p: "The silicone bars and clips are what stop instruments moving. Colour coding is not cosmetic: practices use colour to identify which set is which at a glance (hygiene / restorative / surgical), and to spot an instrument returned to the wrong cassette. You sell 24 colour-code article numbers and 16 strip and part-set numbers, in medical-grade silicone." },
    ],
  },
  {
    id: "mirrors",
    title: "Steel mirrors and the glass alternative",
    lede: "A small range, but the one where you have a genuinely technical story.",
    blocks: [
      { t: "fact", h: "What you make", p: "Three ranges under CXVM: an <b>orthodontic set of 7</b> in 316, <b>intraoral photographic mirrors in 316 stainless</b> (9 article numbers — lingual, buccal, occlusal adult, occlusal XL adult, occlusal medium), and a <b>two-sided glass</b> range (8 article numbers). Your own copy on the steel range puts it well: 316, no glass edge to chip and no coating to lift after repeated autoclaving." },
      { t: "bg", h: "Why anyone uses steel instead of glass", p: "Photographic mirrors live a brutal life: heated, cooled, handled wet, knocked against teeth and other instruments. A glass mirror is front-surface coated so the image has no double reflection, and that coating is thin and vulnerable — it lifts, it clouds, the edges chip. A polished 316 mirror has no coating and no edge to chip, so it survives autoclaving far longer. The trade-off is optical: glass front-surface gives a slightly better image when it is new and perfect." },
      { t: "bg", h: "Why 316 here and 304 elsewhere", p: "Because the finish <i>is</i> the product. A pit or a stain on a tray is cosmetic; on a mirror it is in the photograph. Chloride resistance matters more when the surface has to stay optically perfect through hundreds of cycles." },
      { t: "bg", h: "What the sizes mean", p: "The names describe the view: <b>lingual</b> and <b>buccal</b> mirrors for the inner and cheek-side surfaces, <b>occlusal</b> for the biting surface, in adult, XL adult and medium. Orthodontists and cosmetic dentists buy them in sets because a documented case needs the same set of views every time." },
    ],
  },
  {
    id: "prf",
    title: "PRF and GRF — what the protocol is",
    lede: "A small section, four products, but it is the one where a customer is most likely to test whether you know what you are selling.",
    blocks: [
      { t: "bg", h: "The procedure in one paragraph", p: "PRF is platelet-rich fibrin and GRF is growth-factor rich fibrin. Blood is drawn from the patient at the chairside, spun in a centrifuge, and separates into layers. The fibrin clot layer — rich in platelets and growth factors — is lifted out, and is then either used as a membrane or compressed into plugs and placed in the surgical site to accelerate healing. It is common in implant placement, extraction socket preservation and sinus lifts." },
      { t: "bg", h: "Why the kit matters", p: "The blood is the patient's own and it is being put straight back into a surgical site. Everything it touches has to be sterile and it has to be ready <i>before</i> the draw, because the clot forms within minutes and you cannot pause the procedure to look for an instrument. That is exactly why the kit ships as a complete, sterilizable box." },
      { t: "fact", h: "What you make", p: "<b>PRF &amp; GRF boxes</b> (CXGK — three: a professional box, a student box and a GRF system box), <b>racks and dishes</b> (CXGH/CXGK — tube racks in 3-tier, 2-piece and single, plus a dish, an instrument tray and a bowl), <b>PRF cassettes</b>, and a <b>seven-piece surgical set</b> (CXGK-9902 through 9914, plus Goldman-Fox scissors and a PRF tweezer). The tube racks hold the centrifuge tubes upright; the dishes and bowls are for handling the membrane once it is lifted." },
      { t: "check", h: "Worth asking", p: "Do the tube racks fit a particular centrifuge tube diameter or a particular centrifuge brand? A customer running a specific PRF system will ask, and 'it holds tubes' is not an answer." },
    ],
  },
  {
    id: "hollow",
    title: "Hollow ware, bur holders and the rest",
    lede: "19 hollow-ware products and 3 implantology products. Lower value each, but they are what gets a distributor to add you to an existing order.",
    blocks: [
      { t: "fact", h: "Hollow ware", p: "Instrument trays, vomit bowls, lotion bowls, gallipots, kidney dishes, forceps jars, dressing containers, sterilizing and dressing drums, scaler trays, male and female urinals, catheter trays, cotton dispensers, medical boxes, needle boxes, bedpans (standard and slipper), and a surgical bowl. Mostly 304, drawn or pressed, polished; the bedpans are called out as seamless-interior polished and the surgical bowl as mirror polished." },
      { t: "bg", h: "Why seamless matters on a bedpan", p: "A seam is a crevice, a crevice holds soil, and soil is what you are trying to remove. Seamless drawn hollow ware cleans properly and does not develop a corrosion line along a weld. It is a real quality difference and it is visible in the hand — worth showing rather than describing." },
      { t: "bg", h: "The dressing drum", p: "An older-style cylindrical container with sliding vents around the side, used for sterilizing gauze and dressings. The vents are opened for the cycle and closed after it. They are still widely used outside Europe and North America, and they are a steady seller — nine article numbers in your range." },
      { t: "fact", h: "Bur holders and implantology", p: "An implant and surgical box (CXBB/CXBH), a bur-holder range in four families (CXBH/CXBC/CXBG, 23 article numbers), and a dental bur holder with colour-coded silicone wells and a folding wire frame. The wells hold burs upright by shank diameter so they can be counted, cleaned and sterilized without rolling loose." },
    ],
  },
];

/* ─────────────── Part 4: the questions, by who asks them ─────────────── */

export const QUESTIONS = [
  {
    who: "Distributors and importers",
    intro: "They are buying to resell. They care about money, reliability and paperwork — usually in that order — and almost never about perforation geometry.",
    items: [
      { q: "What is your MOQ?", a: "CONFIRM the number first. Then answer it straight and immediately say what you can do on a first order. Never invent flexibility you do not have." },
      { q: "Send me your price list.", a: "CONFIRM. The site is deliberately quote-only. Decide with the factory whether you send a list at all, or always quote against a specific basket of article numbers. Quoting against their list is usually better — it starts a conversation instead of a comparison." },
      { q: "What is your lead time?", a: "CONFIRM — and get two numbers, one for items you hold and one for made-to-order. 49 of 79 products are 'sizes on request', so most of the range is made to order." },
      { q: "Can you do private label / our brand?", a: "CONFIRM. What they usually mean: our logo laser-marked on the product, our article numbers, our carton. Find out which of the three you can do and at what quantity." },
      { q: "Do you have ISO 13485 and CE?", a: "The site claims ISO 13485, ISO 9001:2015, CE and cGMP. No certificate scan exists on file. Get them before you answer this. If asked today and you do not have them, say you will send them rather than confirming from memory." },
      { q: "Do you have FDA?", a: "No. FDA was removed from the site deliberately. Say no clearly. If they need US market access, that is a conversation about what would be required, not a claim you can make." },
      { q: "Give me exclusivity for my country.", a: "CONFIRM the policy. Do not agree to exclusivity on a first order — it is the easiest thing to give away and the hardest to take back. A sensible answer is that exclusivity follows volume, and you are happy to discuss it once there is a track record." },
      { q: "What are your terms — FOB? LC?", a: "CONFIRM Incoterms and payment terms before quoting anything." },
      { q: "How is it packed, and what is the carton quantity?", a: "CONFIRM. They need it for their warehouse and their own catalogue." },
      { q: "Send free samples.", a: "Normal in this trade and not an insult — but qualify first. Ask which article numbers and what the order would look like if the sample is good. A reasonable position is that samples are free and freight is theirs, or that sample cost is credited against a first order. CONFIRM what you are actually allowed to offer." },
      { q: "Why are you cheaper than the German brands?", a: "Do not be defensive and do not rubbish them. Manufacturing cost base, not a materially different product: the same 304 and 316 to ASTM, the same forming and welding. Then move to what you can evidence — material certificates, the range, made-to-order sizes — and offer a sample. If the honest answer includes 'and we do not carry a Notified Body certificate', say that when asked rather than waiting to be found out." },
    ],
  },
  {
    who: "Dental clinics and practices",
    intro: "Small orders, and the buyer is often the dentist or the practice manager. They care whether it fits their autoclave and their workflow.",
    items: [
      { q: "Will it fit my autoclave?", a: "Ask for the chamber dimensions, or the make and model. Then work from your published sizes. A benchtop dental autoclave is typically small — a 540 mm tray will not go in one, and it is far better to find that out before you quote." },
      { q: "How many instruments does it hold?", a: "For cassettes you can answer from the data: 5, 7, 10 and 20 are the capacities you publish. For trays and baskets, answer in dimensions and let them judge — do not guess an instrument count." },
      { q: "Which lock should I choose?", a: "Mostly preference and one-handed opening habit. Ask what they use now and match it. You make bracket-lock, round-click, single, double, button and four-lock ranges." },
      { q: "What is the colour coding for?", a: "Identifying which set is which at a glance, and spotting an instrument returned to the wrong cassette. 24 colour-code article numbers in medical-grade silicone." },
      { q: "Can I put it in my washer-disinfector?", a: "Stainless, yes. If they are looking at the aluminium transportation basket (CXUTA), warn them that alkaline detergents attack unanodised aluminium and point them at the steel version." },
      { q: "How long will it last?", a: "Do not give a number. Talk about what determines it — rinsing, water quality, drying, not mixing carbon steel — and offer the care advice. A promise here will be quoted back at you." },
      { q: "Do you have something for PRF?", a: "Yes — boxes, tube racks, dishes and a seven-piece surgical set. Read the PRF section so you can talk about the protocol, not just the box." },
    ],
  },
  {
    who: "Hospital CSSD and sterile services",
    intro: "The most technical buyer you will meet, and the one most likely to catch you out. They run a validated process and they will ask questions in the language of that process.",
    items: [
      { q: "Do you supply rigid containers with filters?", a: "On the evidence of the catalogue, no — you make trays, baskets, cassettes and boxes that go inside a wrap or someone else's container. CONFIRM this with the factory, then say it clearly. Do not let them assume otherwise." },
      { q: "Do you do DIN 1/1 and 1/2 baskets?", a: "DIN 1/1 is about 480 × 250 mm and 1/2 about 240 × 250 mm. Your ranges run through those regions, and you make to order. Whether anything is certified to DIN is a separate question — CONFIRM before claiming compliance rather than approximate size." },
      { q: "What is the maximum load per basket?", a: "You do not have this. The website offers it on request. Get it." },
      { q: "What is the mass of the empty tray?", a: "Same — offered on request, not recorded. A CSSD works to a total load mass including the basket." },
      { q: "What cycle is it validated for?", a: "CONFIRM. 'Steam autoclave' with no temperature or hold time will not satisfy this buyer." },
      { q: "Can you trace this tray back to a steel certificate?", a: "CONFIRM whether mill certificates are kept and whether finished goods carry a lot number. If yes, this is a strong answer and worth leading with." },
      { q: "Is there a UDI?", a: "CONFIRM. EU buyers increasingly need it." },
      { q: "What are your cleaning and reprocessing instructions?", a: "CONFIRM whether a written IFU exists. A hospital will expect one, and 'wash it normally' is not an acceptable answer at this level." },
    ],
  },
];

export const ASK_THEM = [
  "What are you using at the moment, and what is wrong with it? — the fastest route to the real requirement.",
  "Is this for a dental practice, a hospital sterile services department, or resale?",
  "What are the internal dimensions of your autoclave chamber, or the make and model?",
  "Do you run a washer-disinfector, and what detergent chemistry?",
  "How many instruments are in the set, and what is the tallest one?",
  "Do you wrap, or do you use rigid containers?",
  "What quantity are we talking about, and how often would you reorder?",
  "Is there a size in your current range that nothing on the market fits? — you make to order, and this is where you win.",
];

export const OBJECTIONS = [
  { o: "“I have never heard of CandelX.”", a: "Do not oversell. Agree, then move to evidence: the range, material certificates, samples, and a small first order. New suppliers get in by being easy to test." },
  { o: "“Send me your best price.”", a: "Ask what they are comparing against and on what quantity. A price with no basket and no volume is a number you can only lose on." },
  { o: "“Your competitor gives 90 days credit.”", a: "Terms are a factory decision, not yours to invent. Say you will come back on it — and then actually come back." },
  { o: "“We only buy German / Japanese.”", a: "Do not argue with it. Ask if there is a size or a variant their current supplier does not make, and offer to make that. A made-to-order item is the crack in the door." },
  { o: "“Can you match this drawing?”", a: "Good news — most of the range is made to order already. Take the drawing, do not quote a price or a lead time on the spot, and pass it to the factory." },
  { o: "“It arrived scratched / dented.”", a: "Photographs first, then escalate. Do not discuss fault on the call. This is a packaging question as much as a quality one — see the confirm list." },
  { o: "You do not know the answer.", a: "Say so, say when you will come back, and come back then. In technical B2B, a fast honest 'I will find out and call you at four' outperforms a confident guess every single time. Guessing once with a CSSD buyer costs you the account." },
];
