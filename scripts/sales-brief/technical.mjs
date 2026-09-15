/* The written content of the technical knowledge book.
 *
 * Separate from content.mjs (the sales brief). This one carries NO article
 * numbers and NO product photos — Hassan already knows his range; what he
 * wanted was the physics, the chemistry, the standards and the numbers, so he
 * can answer a technical customer at an exhibition.
 *
 * Every number in here was checked against a published source in September
 * 2026. SOURCES at the bottom of the file; they are printed in the PDF.
 * If you change a number, change the source with it.
 */

/* The memory anchors. Big type, one page, learn these and most questions
   resolve to one of them. */
export const NUMBERS = [
  { n: "134 °C", u: "for 3–3.5 min", l: "The fast steam cycle", c: "steam" },
  { n: "121 °C", u: "for 15–20 min", l: "The slow steam cycle", c: "steam" },
  { n: "134 °C", u: "for 18 min", l: "Prion cycle (CJD)", c: "steam" },
  { n: "200 °C", u: "continuous", l: "Silicone service limit", c: "sil" },
  { n: "500+", u: "cycles at 134 °C", l: "Good platinum-cured silicone", c: "sil" },
  { n: "18 / 8", u: "Cr / Ni %", l: "What 304 is", c: "steel" },
  { n: "2–3 %", u: "molybdenum", l: "What 316 adds", c: "steel" },
  { n: "~20 vs ~26", u: "PREN", l: "304 vs 316 pitting resistance", c: "steel" },
  { n: "A₀ 600", u: "= 90 °C, 1 min", l: "Disinfection, surgical instruments", c: "wash" },
  { n: "A₀ 3000", u: "= 90 °C, 5 min", l: "German requirement", c: "wash" },
  { n: "480 × 250", u: "mm", l: "DIN 1/1 basket", c: "dim" },
  { n: "25 lb", u: "11.3 kg", l: "Max tray + contents (AAMI)", c: "dim" },
  { n: "0.1 mg/l", u: "chloride", l: "Steam condensate limit, EN 285", c: "water" },
  { n: "1.6 / 2.35", u: "mm", l: "FG / RA bur shank diameter", c: "dim" },
  { n: "10 ml", u: "no anticoagulant", l: "PRF blood tube", c: "prf" },
  { n: "0.8–1.2", u: "mm", l: "Your sheet gauge", c: "own" },
];

export const PARTS = [
  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 1",
    title: "The steel",
    lede: "Four out of five technical questions end up here. Learn this part and you can improvise the rest.",
    diagram: "passive",
    qa: [
      {
        q: "What is stainless steel actually made of?",
        a: "**304** is roughly **18 % chromium, 8 % nickel**, balance iron — the standard austenitic grade. **316** is about **17 % chromium, 10 % nickel** plus **2–3 % molybdenum**. Those three elements each do one job: chromium makes the protective film, nickel keeps the structure austenitic and tough, molybdenum resists chloride attack.",
        why: "Say the grade and the composition, never “surgical grade” — that phrase has no legal definition and buyers who know the trade distrust it.",
      },
      {
        q: "Why does stainless steel not rust?",
        a: "It is not the iron that protects it. Chromium reacts with oxygen to form a **chromium-oxide film a few atoms thick**, invisible, and **self-repairing** — scratch it and it re-forms, *provided oxygen can reach the surface*.",
        why: "This single fact explains every corrosion question. Stainless fails exactly where oxygen cannot get: under deposits, in crevices, under trapped saline.",
      },
      {
        q: "So when is 316 actually worth the money?",
        a: "Where **chlorides** sit on the surface — saline, blood, high-chloride tap water, some disinfectants. Molybdenum specifically resists **pitting** and **crevice corrosion**. For a tray that is washed, rinsed and dried properly, **304 is entirely correct** and is what most of this trade uses.",
        why: "Do not let a customer be sold 316 they do not need — but do explain why the mirrors are 316: there, the finish *is* the product.",
      },
      {
        q: "Is there a number for that?",
        a: "Yes, and it is worth knowing. **PREN** = %Cr + 3.3 × %Mo + 16 × %N. **304 ≈ 18–22. 316 ≈ 23–30.** A higher PREN means more resistance to chloride pitting.",
        why: "Quoting PREN in a technical conversation moves you from salesperson to someone who knows the material.",
        tag: "advanced",
      },
      {
        q: "What does the L in 316L mean, and does it matter?",
        a: "**Low carbon — maximum 0.03 %.** It matters at **welds**. Welding heat can make chromium combine with carbon at the grain boundaries, robbing the neighbouring metal of chromium. That is **sensitisation**, and it causes corrosion in a line along the weld. Low carbon prevents it.",
        why: "For anything welded — a mesh frame, a basket — 316L is a real engineering choice, not marketing.",
      },
      {
        q: "A customer's magnet sticks to the tray. Is it fake?",
        a: "No. Austenitic steels are non-magnetic **when annealed**, but **cold working** — deep drawing a bowl, rolling a rim, pressing a corner — converts some austenite to martensite, which *is* magnetic.",
        why: "Slight magnetism at the base of a drawn bowl is normal and expected. The honest answer to a magnet test is a **material certificate**, not an argument.",
      },
      {
        q: "What is passivation, and why should I care?",
        a: "An acid treatment after forming and welding that **dissolves free iron** left on the surface by tooling, and lets the chromium-oxide film form evenly. The standard is **ASTM A967**, which permits **nitric acid** or **citric acid** — citric performs comparably and is far safer to handle and dispose of.",
        why: "Free iron left from tooling is a classic cause of a brand-new tray showing orange spots on its very first cycle. Ask your factory which method they use.",
      },
      {
        q: "What is electropolishing?",
        a: "An electrochemical process that removes a thin surface layer, preferentially taking off the peaks. Result: a **smoother, brighter surface with fewer crevices**, and usually a chromium-enriched film.",
        why: "Smoother means less to clean and fewer places for soil to lodge. It is a premium finish and a legitimate upsell if your factory can do it.",
        tag: "advanced",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 2",
    title: "Silicone",
    lede: "Your example question, answered properly — plus the follow-up that catches people out.",
    diagram: "temp",
    qa: [
      {
        q: "How much temperature can the silicone take in the autoclave?",
        a: "Medical-grade silicone has a **continuous service temperature around 200 °C**, with a usable range of roughly **−60 °C to 200 °C** (some grades to 230 °C). The autoclave runs at **121–134 °C**. You have **65–80 °C of headroom**. Temperature is simply not the limiting factor.",
        why: "This is the answer. Then give the number that actually matters — the next question.",
        big: "200 °C vs 134 °C",
      },
      {
        q: "Then how many autoclave cycles does it survive?",
        a: "That is the real question. Good **platinum-cured** silicone has been shown to withstand **500+ steam cycles at 134 °C** with minimal compression set. Independent testing of platinum-cured samples through 25 cycles at 121 °C and 132 °C found **no significant change in physical properties**.",
        why: "Silicone does not fail from heat. It fails from **compression set** — losing its springiness — and from **tearing**. That is a cure-system and quality question, not a temperature one.",
      },
      {
        q: "Platinum-cured or peroxide-cured — what is the difference?",
        a: "The **catalyst** used to cure the rubber. **Platinum-cured** leaves no by-products, so it is cleaner, clearer, lower odour, better compression set, and is the normal choice for medical use. **Peroxide-cured** is cheaper and leaves cure residues that require post-curing.",
        why: "If a customer asks “is it platinum-cured?” they know what they are talking about. Find out your answer before you are asked.",
        tag: "ask factory",
      },
      {
        q: "What does “medical grade” mean for silicone?",
        a: "Usually that it meets **USP Class VI** or **ISO 10993** biocompatibility testing. Class VI is the most demanding of the USP plastics classes and covers implant-level testing.",
        why: "“Medical grade” on its own is marketing. **USP Class VI** or **ISO 10993** is a claim with a document behind it — so only make it if the document exists.",
      },
      {
        q: "Why does silicone go cloudy or chalky?",
        a: "Usually **water deposits or detergent residue**, not degradation. Aggressive alkaline detergents and long wet contact will eventually attack it; so will some solvents and strong oxidisers. Heat alone will not.",
        why: "Same story as the steel — the washer chemistry is harsher on materials than the autoclave is.",
      },
      {
        q: "Why is the silicone colour-coded?",
        a: "So a practice can identify **which set is which at a glance** — hygiene, restorative, surgical — and instantly spot an instrument returned to the wrong cassette. It is a workflow tool, not decoration.",
        why: "Colour coding is often what actually sells a cassette system, because it solves a daily annoyance.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 3",
    title: "Sterilization — how it really works",
    lede: "If you understand why air is the enemy, you understand why your products have holes in them.",
    diagram: "loop",
    qa: [
      {
        q: "How does steam actually sterilize?",
        a: "Steam **condenses** on a cold surface and releases its **latent heat** into it. That energy is what destroys microorganisms. It is not the temperature of the air — it is the phase change on the surface itself.",
        why: "Which means steam must physically touch every surface. Anything that blocks it — trapped air, a solid lid, an overlapping instrument — is a sterilization failure.",
      },
      {
        q: "So why does trapped air matter so much?",
        a: "Air **displaces steam**. A pocket of trapped air is a pocket where steam never condenses, so that surface is never sterilized — even though the chamber gauge reads 134 °C.",
        why: "This is the single most important idea in the whole field, and it is why your perforated and mesh products exist.",
        big: "No steam contact = not sterile",
      },
      {
        q: "What are the two standard cycles?",
        a: "**134 °C for 3–3.5 minutes** and **121 °C for 15–20 minutes**. Higher temperature, shorter hold. Both are far below anything that troubles stainless steel or silicone.",
        why: "Memorise both. They come up constantly.",
      },
      {
        q: "What is the 18-minute cycle I sometimes hear about?",
        a: "**134 °C for 18 minutes** — the **prion** cycle, for CJD risk. Prions resist normal sterilization; 18 minutes at 134 °C has been shown to reduce infectivity by a factor of at least **10⁶**.",
        why: "Rare, but if a hospital buyer mentions prions and you know this number, your credibility jumps.",
        tag: "advanced",
      },
      {
        q: "Gravity or pre-vacuum — what is the difference?",
        a: "**Gravity displacement** lets incoming steam push air out — fine for simple, open, unwrapped loads. **Pre-vacuum** pulls a vacuum first, actively removing air — required for **wrapped packs, porous loads and hollow items**.",
        why: "A perforated tray works in either. A wrapped, densely packed set really needs pre-vacuum.",
      },
      {
        q: "A dentist mentions “Class B”. What does that mean?",
        a: "**EN 13060** classes small sterilizers (under 60 litres). **N** = naked solid instruments only. **S** = a specific manufacturer-defined list of loads. **B** = pre-vacuum, handles everything — wrapped, porous, hollow.",
        why: "Class B is mandatory in many EU countries for dental handpieces. Knowing N/S/B tells a dental customer immediately that you understand their surgery.",
        big: "N = naked · S = specified · B = big",
      },
      {
        q: "What is a wet pack, and whose fault is it?",
        a: "A load that comes out damp. It has **failed** — moisture wicks contamination straight through a wrap. Causes: **overloading**, poor drainage, trays stacked flat so water sits, heavy items on top of light ones, or too short a drying phase.",
        why: "Good drainage is a genuine selling point for perforated and mesh over solid. Loading advice costs you nothing and makes you useful.",
      },
      {
        q: "Is there a weight limit on a tray?",
        a: "Yes, and it is a good number to have. **AAMI ST79** sets **25 lb / 11.3 kg** as the maximum for a containment device **including its contents**. Above that, sterilization and drying may be compromised — and staff get injured.",
        why: "A hospital buyer will respect that you know this. It is also a reason to sell two trays rather than one.",
        big: "25 lb = 11.3 kg",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 4",
    title: "Washing and disinfection",
    lede: "Most of a tray's hard life happens before it ever reaches the autoclave.",
    diagram: "a0",
    qa: [
      {
        q: "What happens inside a washer-disinfector?",
        a: "**Cold pre-rinse** to shift protein (hot water would cook it on), **wash at ~55 °C** with alkaline detergent, **neutralising rinse**, **thermal disinfection at ~90 °C**, then **hot-air drying**.",
        why: "The chemistry here is far more aggressive than the autoclave. This is where materials get found out.",
      },
      {
        q: "What is an A₀ value?",
        a: "A way of expressing thermal disinfection as a single number that trades **time against temperature**. **A₀ 600** is the requirement for surgical instruments under **ISO 15883-2** — equivalent to **90 °C for 1 minute**. Germany commonly requires **A₀ 3000** = **90 °C for 5 minutes**, or 93 °C for 2½ minutes.",
        why: "If a CSSD buyer says “we run A₀ 3000” and you nod knowingly, you are in a different conversation from the one most salespeople have.",
        big: "A₀ 600 = 90 °C, 1 min",
      },
      {
        q: "Can everything go through a washer-disinfector?",
        a: "Stainless steel, yes. **Unanodised aluminium, no** — standard **alkaline** washer detergents attack it: it dulls, greys and eventually pits.",
        why: "This matters if you offer an aluminium option. Aluminium is fine for transport and storage; steel is the answer for anything reprocessed. Say so before they find out.",
        big: "Alkaline detergent eats aluminium",
      },
      {
        q: "Why cold water first?",
        a: "Protein **coagulates** above about 45 °C. A hot first rinse bakes blood onto the instrument and makes it far harder to remove.",
        why: "A small fact that shows you understand the process rather than just the product.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 5",
    title: "Corrosion — diagnosing “it rusted”",
    lede: "The most common after-sale complaint in this trade, and usually not the tray's fault. Diagnose before you apologise.",
    diagram: "rust",
    qa: [
      {
        q: "Orange spots that wipe off with a cloth.",
        a: "**Deposited rust**, not corrosion. Someone else's iron: a **carbon-steel or chrome-plated instrument** in the same load, **iron particles in the water**, a worn washer rack, or a rusting autoclave chamber upstream.",
        why: "If it wipes off and the metal underneath is clean and unpitted, your tray never corroded. Say that calmly, with the reason.",
      },
      {
        q: "Small, deep, dark holes.",
        a: "**Pitting** — real chloride attack. Saline or blood **left to dry**, instruments not rinsed before sterilizing, high-chloride tap water on the final rinse, or disinfectant left in contact too long.",
        why: "Sterilizing a wet, salty tray is the fastest way to pit stainless there is — evaporation concentrates the chloride.",
      },
      {
        q: "Brown or blue staining across a whole surface.",
        a: "Usually **water, not steel** — hard-water deposits or silicate carry-over from the steam supply. Alarming to look at, cosmetic in effect.",
        why: "A demineralised final rinse fixes it. Free advice that saves the relationship.",
      },
      {
        q: "A rust line along a weld.",
        a: "The one that points back at manufacturing — **sensitisation**, weld contamination, or inadequate passivation.",
        why: "Do not handle this one yourself. Photographs, then escalate to the factory.",
      },
      {
        q: "What water quality should they actually use?",
        a: "**EN 285** limits **chloride in steam condensate to 0.1 mg/litre**. For the final rinse, demineralised or RO water. Ordinary tap water can carry tens of mg/l of chloride.",
        why: "A hard number beats “use good water”. It also quietly shifts the cause away from your product.",
        big: "≤ 0.1 mg/l chloride",
      },
      {
        q: "What is the prevention advice?",
        a: "Rinse before reprocessing · never let saline or blood dry on · **demineralised final rinse** · dry fully before storage · keep **carbon steel and plated instruments** out of the load · no chlorine-based disinfectants · never steel wool.",
        why: "Standard reprocessing advice, free to give, and it makes you the person who helps rather than the person who sold them a tray.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 6",
    title: "Trays, containers and sizes",
    lede: "Get the vocabulary right. A hospital buyer uses these words precisely and will notice instantly if you do not.",
    diagram: "din",
    qa: [
      {
        q: "What is a “rigid sterilization container”?",
        a: "A sealed box with a **gasketed lid**, a **filter or valve system** that admits steam and blocks microorganisms afterwards, and a **tamper-evident seal**. It **replaces the wrap**. Reusable containers have their own standard — **EN 868-8**.",
        why: "A tray or basket is *not* this. A tray goes **inside** a wrap or inside someone else's container. Confusing the two in front of a CSSD buyer ends the conversation.",
        big: "Container ≠ tray",
      },
      {
        q: "What is a sterile barrier system?",
        a: "The packaging that maintains sterility until the point of use. Governed by **ISO 11607** (parts 1 and 2) and the **EN 868** series. Sterility is **event-related**, not purely time-related — a pack is sterile until something compromises it.",
        why: "This is why the wrap or container matters more than the tray for sterility. Useful for placing your product honestly in the chain.",
        tag: "advanced",
      },
      {
        q: "What are DIN basket sizes?",
        a: "The European CSSD module. **1/1 = 480 × 250 mm**. **3/4 = 360 × 250**. **1/2 = 240 × 250**. **1/4 = 120 × 250**. Heights vary — 50, 60, 80, 100 mm are common.",
        why: "If a buyer asks for “1/1 baskets”, this is what they mean. Knowing the fractions instantly is worth a lot at an exhibition.",
        big: "1/1 = 480 × 250 mm",
      },
      {
        q: "Why is the sheet gauge on a spec sheet?",
        a: "**Thicker** = stiffer, harder to deform, longer life — but **more mass**, so it takes longer to heat and longer to dry, and it eats into the weight limit. **Thinner** = faster turnaround, less robust.",
        why: "There is no “best” gauge; there is a trade-off, and saying so makes you credible. Your range runs **0.8–1.2 mm** (transportation baskets 1.5 mm).",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 7",
    title: "Regulation, in plain language",
    lede: "You do not need to be a regulatory specialist. You do need to not say something untrue.",
    diagram: "reg",
    qa: [
      {
        q: "What is ISO 13485?",
        a: "The **quality management system** standard for medical devices. It says the *company* is organised and controlled — documented processes, traceability, complaint handling, change control.",
        why: "It is about the factory, **not** about any individual product. Do not describe it as a product approval.",
      },
      {
        q: "What is CE marking, really?",
        a: "A declaration that the device meets EU requirements — under **MDR 2017/745** since 2021. For most **Class I** devices the manufacturer **self-declares**. Higher classes need a **Notified Body**, whose four-digit number then appears beside the CE mark.",
        why: "“Do you have CE?” and “who is your Notified Body?” are different questions. Know which answer you have.",
      },
      {
        q: "What is Class Ir?",
        a: "**Class I reusable surgical instruments.** Under MDR these still need a **Notified Body** — but only to assess the **reprocessing** side: cleaning, disinfection, sterilization, maintenance and the instructions for use. Everything else stays self-declared.",
        why: "Whether a *tray* counts as a reusable surgical instrument is a question for a regulatory consultant, not for you on a stand. Know the term; do not improvise the answer.",
        tag: "ask a specialist",
      },
      {
        q: "What is a UDI?",
        a: "**Unique Device Identification** — a machine-readable code plus a database entry, so a device can be traced. Increasingly expected in the EU and US.",
        why: "A distributor may need it before they can list you. Find out whether you have one.",
        tag: "ask factory",
      },
      {
        q: "What is an IFU?",
        a: "**Instructions For Use.** For reusable devices it must cover **validated reprocessing**: how to clean, disinfect, sterilize, how many times, and what not to do.",
        why: "A hospital will expect a written IFU. “Wash it normally” is not an acceptable answer at that level.",
        tag: "ask factory",
      },
      {
        q: "Which standards should I be able to name?",
        a: "**ISO 13485** quality system · **MDR 2017/745** EU market · **EN 285** large steam sterilizers · **EN 13060** small sterilizers (the N/S/B classes) · **ISO 17665** steam sterilization validation · **ISO 15883** washer-disinfectors (A₀) · **ISO 11607 / EN 868** packaging · **ASTM A240** the steel · **ASTM A967** passivation.",
        why: "You will not be examined on them. Recognising the number when a buyer says it is what matters.",
      },
    ],
  },

  /* ─────────────────────────────────────────────────────────────────────── */
  {
    kicker: "Part 8",
    title: "Numbers that decide whether it fits",
    lede: "Compatibility questions. Getting these wrong means a returned order.",
    diagram: "shank",
    qa: [
      {
        q: "What diameter are dental bur shanks?",
        a: "**ISO 1797**. **FG** (friction grip, high-speed turbine) = **1.6 mm**, about 19 mm long. **RA** (right angle / contra-angle) = **2.35 mm**, about 20 mm. **HP** (straight handpiece, lab) = **2.35 mm**, roughly twice the RA length.",
        why: "A bur block must match the shank. If someone asks “will it take my burs?”, this is the question you answer with.",
        big: "FG 1.6 · RA 2.35 · HP 2.35",
      },
      {
        q: "What tubes does a PRF rack need to hold?",
        a: "**10 ml** blood tubes, drawn **without anticoagulant** — that is the whole point, the blood must be allowed to clot. Classic protocol spins at **2700 rpm for 12 min**; the A-PRF protocol at **1300 rpm for 8 min**.",
        why: "“It holds tubes” is not an answer. Knowing the volume and the protocol tells a dentist you understand what they are doing.",
      },
      {
        q: "Why does a cassette's height matter more than people think?",
        a: "Height is the constraint everyone forgets. **Shallower = less mass to heat and dry = faster turnaround.** But it must close over the **tallest instrument in the set**.",
        why: "When someone changes cassette, ask what their tallest instrument is. It prevents the most common wrong order.",
      },
      {
        q: "What will a dental customer's autoclave actually take?",
        a: "Benchtop dental sterilizers are **small** — typically under 60 litres, which is why EN 13060 exists. A 540 mm tray will not go in one.",
        why: "Ask for the **chamber dimensions or the model** before quoting. Finding out afterwards costs you the order and the freight.",
      },
    ],
  },
];

/* ── The exhibition round: short, fast, no preamble ─────────────────────── */
export const QUICKFIRE = [
  ["What grade is it?", "304 to ASTM for most of the range; 316 where the finish is the product."],
  ["Why not 316 everywhere?", "Molybdenum costs money and buys chloride resistance you do not need on a properly rinsed tray."],
  ["Is it magnetic?", "Slightly, where it has been cold-formed. Normal. The certificate is the proof, not the magnet."],
  ["Will it rust?", "Not if it is rinsed, dried and kept away from carbon steel. Most 'rust' is deposited from elsewhere."],
  ["What temperature does it take?", "Steel is untroubled by 134 °C. The silicone is rated to about 200 °C continuous."],
  ["How many autoclave cycles?", "Platinum-cured silicone has shown 500+ at 134 °C. Steel outlives the practice."],
  ["Does it fit a Class B autoclave?", "Yes — but ask for the chamber size, because dental benchtops are small."],
  ["Is it a sterilization container?", "No. These are trays, baskets and cassettes. A container has a gasket and a filter."],
  ["Do you do DIN sizes?", "1/1 is 480 × 250. We make to order, so tell me the size you need."],
  ["Washer-disinfector safe?", "Steel yes. Avoid alkaline detergents on unanodised aluminium."],
  ["What is your A₀?", "A₀ is the washer's process, not the tray's property — the tray just has to survive it and drain."],
  ["Do you have CE?", "Answer only from the certificate in your hand. Never from memory."],
  ["Do you have FDA?", "No. Say it plainly."],
  ["Can you make my size?", "Yes — most of the range is made to order. Send the drawing or the instrument set."],
  ["Why cheaper than Germany?", "Cost base, not a different material. Same grades, same standards. Here is a sample."],
  ["What is the weight limit?", "AAMI says 25 lb / 11.3 kg including contents, or drying suffers."],
  ["Square or round perforation?", "Square drains faster; round is gentler on fine instrument tips."],
  ["Why double frame?", "Stiffness. For long baskets, heavy sets and high-turnover departments."],
  ["Is the silicone medical grade?", "Check whether you hold USP Class VI or ISO 10993 documentation before saying yes."],
  ["Can I get a material certificate?", "Find out whether mill certificates are kept and traceable. It is a strong answer if yes."],
];

export const ASK_BACK = [
  ["What are you using now, and what is wrong with it?", "Gets you to the real requirement in one question."],
  ["Chamber dimensions, or the autoclave model?", "Prevents the most common wrong order."],
  ["Do you run a washer-disinfector, and what detergent?", "Decides steel vs aluminium, and flags any corrosion risk."],
  ["How many instruments, and what is the tallest?", "Decides the cassette size and height."],
  ["Do you wrap, or use rigid containers?", "Tells you instantly which market you are in."],
  ["Is there a size nobody makes for you?", "You make to order. This is where you win the account."],
];

export const SOURCES = [
  ["EN 13060 sterilizer classes N / S / B", "des3tech.com · euronda · BSI", "https://des3tech.com/blog/choosing-the-right-autoclave-understanding-the-differences-between-class-b-s-and-n-for-dental-practices/"],
  ["Silicone autoclave performance, 500+ cycles at 134 °C; platinum vs peroxide cure", "TBL Plastics", "https://tblplastics.com/sterilize-platinum-peroxide-cured-silicone/"],
  ["Medical-grade silicone −60 °C to 200 °C, USP Class VI", "Vicone Rubber", "https://viconerubber.com/en/resources/the-ultimate-guide-to-silicone-tubing-for-medical-usage"],
  ["A₀ 600 = 90 °C/1 min; A₀ 3000 = 90 °C/5 min (ISO 15883-2)", "STERIS · Nelson Labs", "https://www.steris.co.jp/wp/wp-content/uploads/644995.pdf"],
  ["EN 285 steam condensate chloride ≤ 0.1 mg/l", "SHTM 2031 (NHS Scotland)", "https://www.nss.nhs.scot/media/1785/shtm-2031-part-1-v20-jun-2001.pdf"],
  ["MDR 2017/745 Class Ir — Notified Body for reprocessing aspects only", "Artixio", "https://www.artixio.com/post/regulation-of-reusable-medical-devices-under-eu-mdr"],
  ["DIN basket modules 1/1, 3/4, 1/2, 1/4", "Surgical Holdings · Interlock Medizintechnik", "https://www.surgicalholdings.co.uk/bespoke-basket-solutions.html"],
  ["ISO 1797 bur shanks — FG 1.6 mm, RA / HP 2.35 mm", "Burdental · Dentaltix", "https://www.burdental.com/blog/differences-between-three-main-types-of-shanks-for-the-bur"],
  ["PRF protocols — 10 ml tubes, no anticoagulant; 2700 rpm/12 min, A-PRF 1300 rpm/8 min", "NIH PMC", "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9002533/"],
  ["PREN formula; 304 ≈ 18–22, 316 ≈ 23–30 (ASTM A240)", "MakerStage · Rolled Alloys", "https://www.makerstage.com/resources/stainless-steel-304-vs-316"],
  ["Prion cycle 134 °C / 18 min, ≥10⁶ reduction", "Journal of Hospital Infection · PubMed", "https://pubmed.ncbi.nlm.nih.gov/16895739/"],
  ["ASTM A967 passivation — nitric or citric, comparable passive layer", "ChemPoint · Armoloy · NIH PMC", "https://armoloy.com/plating-specifications/astm-a967/"],
  ["EN 868-8 reusable sterilization containers; ISO 11607 sterile barrier systems", "Sterile Barrier Association · Measurlabs", "https://sterilebarrier.org/for-manufacturers/validation-process/relevant-test-methods/"],
  ["AAMI ST79 — 25 lb / 11.3 kg maximum including contents", "Healthcare Purchasing News · OR Manager", "https://www.hpnonline.com/sterile-processing/article/21250180/lighten-instrument-set-loads-for-processing-success-staff-safety"],
];
