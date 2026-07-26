import type { ShapeKind } from "@/components/Shape";

export type CategorySlug = "glp1" | "recovery" | "longevity" | "wellness";

export type Category = {
  slug: CategorySlug;
  name: string;
  tagline: string;
  shape: ShapeKind;
};

export const categories: Category[] = [
  {
    slug: "glp1",
    name: "GLP-1 Weight Loss",
    tagline: "Compounded semaglutide and tirzepatide, clinician-managed.",
    shape: "wave",
  },
  {
    slug: "recovery",
    name: "Recovery & Repair",
    tagline: "Peptides for tissue repair, recovery, and inflammation.",
    shape: "leaf",
  },
  {
    slug: "longevity",
    name: "Longevity & Cognitive",
    tagline: "Peptides for sleep, focus, and long-term healthspan.",
    shape: "arch",
  },
  {
    slug: "wellness",
    name: "Wellness Essentials",
    tagline: "Foundational injectables trusted for decades.",
    shape: "diamond",
  },
];

export type Peptide = {
  slug: string;
  name: string;
  category: CategorySlug;
  tagline: string;
  summary: string;
  about: string;
  format: string;
  price: string;
  cadence: string;
  shape: ShapeKind;
  newlyRecommended?: boolean;
  bullets: string[];
  faqs: { q: string; a: string }[];
};

export const NEWLY_RECOMMENDED_NOTE =
  "On July 23-24, 2026, the FDA's Pharmacy Compounding Advisory Committee voted to recommend this peptide for inclusion on the 503A bulk drug compounding list. That is a compounding-eligibility recommendation, not FDA approval of a drug product — the peptide has not been evaluated by the FDA for safety, effectiveness, or quality the way an approved drug is, and the FDA has not yet finalized the list.";

export const peptides: Peptide[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    category: "glp1",
    tagline: "Steady, sustainable weight loss with clinical support.",
    summary:
      "A GLP-1 receptor agonist compounded to your prescribed dose, with monthly clinician check-ins.",
    about:
      "Semaglutide is the active ingredient behind Ozempic and Wegovy. RHOME's compounded semaglutide is prepared by a licensed 503A pharmacy from your clinician's prescription, dosed and titrated specifically for you.",
    format: "Weekly subcutaneous injection",
    price: "$325",
    cadence: "per month",
    shape: "circle",
    bullets: [
      "Clinician-supervised dose titration",
      "Compounded by licensed U.S. pharmacies",
      "Nutrition and habit coaching included",
      "Monthly check-ins to track progress",
    ],
    faqs: [
      {
        q: "Is compounded semaglutide the same as Ozempic or Wegovy?",
        a: "It uses the same active ingredient, compounded by a licensed pharmacy from your prescription rather than manufactured by the brand-name maker. Compounded medications are not independently FDA-approved as finished drug products.",
      },
      {
        q: "How is my dose determined?",
        a: "Your clinician starts you on a low dose and titrates upward on a schedule based on how you respond, consistent with standard GLP-1 protocols.",
      },
    ],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    category: "glp1",
    tagline: "Dual-action GLP-1/GIP support for weight management.",
    summary:
      "A compounded dual-incretin peptide, titrated with your clinician for appetite and metabolic support.",
    about:
      "Tirzepatide is the active ingredient behind Mounjaro and Zepbound, acting on both GLP-1 and GIP receptors. RHOME's compounded version is prepared to your clinician's prescription by a licensed 503A pharmacy.",
    format: "Weekly subcutaneous injection",
    price: "$399",
    cadence: "per month",
    shape: "wave",
    bullets: [
      "Dual GLP-1/GIP mechanism",
      "Clinician-managed titration schedule",
      "Compounded by licensed U.S. pharmacies",
      "Ongoing monitoring and support",
    ],
    faqs: [
      {
        q: "Why would I choose tirzepatide over semaglutide?",
        a: "Some patients respond better to dual GLP-1/GIP activity. Your clinician will discuss which mechanism fits your history and goals.",
      },
      {
        q: "Is this covered by insurance?",
        a: "Compounded peptides are typically self-pay. We provide an itemized receipt you can submit for potential FSA/HSA reimbursement.",
      },
    ],
  },
  {
    slug: "bpc-157",
    name: "BPC-157",
    category: "recovery",
    tagline: "A stable peptide fragment studied for tissue repair.",
    summary:
      "Compounded BPC-157, prescribed for recovery support alongside a supervised protocol.",
    about:
      "BPC-157 is a synthetic peptide fragment derived from a protein found in gastric juice, studied for its role in tissue repair pathways. It was recommended by the FDA's Pharmacy Compounding Advisory Committee for the 503A bulk drug list in 2026.",
    format: "Daily subcutaneous injection",
    price: "$150",
    cadence: "per month",
    shape: "leaf",
    newlyRecommended: true,
    bullets: [
      "Clinician-guided recovery protocol",
      "Compounded by licensed U.S. pharmacies",
      "Typically prescribed in 4-8 week courses",
      "Progress check-ins built into your plan",
    ],
    faqs: [
      {
        q: "Is BPC-157 FDA approved?",
        a: NEWLY_RECOMMENDED_NOTE,
      },
      {
        q: "How long is a typical course?",
        a: "Most protocols run 4-8 weeks, with your clinician reassessing before any renewal.",
      },
    ],
  },
  {
    slug: "tb-500",
    name: "TB-500",
    category: "recovery",
    tagline: "A synthetic peptide studied for healing support.",
    summary:
      "Compounded TB-500, often paired with BPC-157 in clinician-designed recovery protocols.",
    about:
      "TB-500 is a synthetic version of a fragment of thymosin beta-4, studied for its potential role in cell migration and healing. It was recommended by the FDA's Pharmacy Compounding Advisory Committee for the 503A bulk drug list in 2026.",
    format: "Twice-weekly subcutaneous injection",
    price: "$180",
    cadence: "per month",
    shape: "petal",
    newlyRecommended: true,
    bullets: [
      "Often combined with BPC-157",
      "Compounded by licensed U.S. pharmacies",
      "Clinician-designed dosing schedule",
      "Adjust or cancel any time",
    ],
    faqs: [
      {
        q: "Is TB-500 FDA approved?",
        a: NEWLY_RECOMMENDED_NOTE,
      },
      {
        q: "Can I take this with BPC-157?",
        a: "Yes, this is a common combination in recovery protocols. Your clinician will confirm it's appropriate for you.",
      },
    ],
  },
  {
    slug: "kpv",
    name: "KPV",
    category: "recovery",
    tagline: "A tripeptide studied for its anti-inflammatory profile.",
    summary:
      "Compounded KPV, prescribed for inflammatory and gut-health support.",
    about:
      "KPV is a short tripeptide fragment of alpha-MSH studied for anti-inflammatory activity, including gut-related applications. It was recommended by the FDA's Pharmacy Compounding Advisory Committee for the 503A bulk drug list in 2026.",
    format: "Daily subcutaneous injection or capsule",
    price: "$120",
    cadence: "per month",
    shape: "diamond",
    newlyRecommended: true,
    bullets: [
      "Injectable or oral capsule options",
      "Compounded by licensed U.S. pharmacies",
      "Clinician review before every renewal",
      "Message your care team any time",
    ],
    faqs: [
      {
        q: "Is KPV FDA approved?",
        a: NEWLY_RECOMMENDED_NOTE,
      },
      {
        q: "Injection or capsule — which is better?",
        a: "Your clinician will recommend a format based on your goals and preference; both are available through RHOME.",
      },
    ],
  },
  {
    slug: "mots-c",
    name: "MOTS-c",
    category: "longevity",
    tagline: "A mitochondrial-derived peptide studied for metabolic health.",
    summary:
      "Compounded MOTS-c, prescribed to support metabolic and exercise-adaptation goals.",
    about:
      "MOTS-c is a mitochondrial-derived peptide studied for its role in metabolic regulation. It was recommended by the FDA's Pharmacy Compounding Advisory Committee for the 503A bulk drug list in 2026.",
    format: "Twice-weekly subcutaneous injection",
    price: "$160",
    cadence: "per month",
    shape: "circle",
    newlyRecommended: true,
    bullets: [
      "Clinician-guided metabolic protocol",
      "Compounded by licensed U.S. pharmacies",
      "Paired with lifestyle guidance",
      "Reviewed monthly with your care team",
    ],
    faqs: [
      {
        q: "Is MOTS-c FDA approved?",
        a: NEWLY_RECOMMENDED_NOTE,
      },
    ],
  },
  {
    slug: "epitalon",
    name: "Epitalon",
    category: "longevity",
    tagline: "A peptide studied for sleep and longevity support.",
    summary:
      "Compounded Epitalon, prescribed in short courses for sleep and long-term wellness goals.",
    about:
      "Epitalon is a synthetic peptide studied for potential effects on the pineal gland and sleep regulation. It received a narrow (7-5) committee vote recommending it for the FDA's 503A bulk drug list in 2026.",
    format: "Daily subcutaneous injection",
    price: "$140",
    cadence: "per 10-day course",
    shape: "arch",
    newlyRecommended: true,
    bullets: [
      "Typically prescribed in short, defined courses",
      "Compounded by licensed U.S. pharmacies",
      "Clinician review before each course",
      "Often revisited seasonally",
    ],
    faqs: [
      {
        q: "Is Epitalon FDA approved?",
        a: NEWLY_RECOMMENDED_NOTE,
      },
    ],
  },
  {
    slug: "semax",
    name: "Semax",
    category: "longevity",
    tagline: "A peptide studied for focus and cognitive support.",
    summary:
      "Compounded Semax, prescribed for clinician-supervised cognitive support.",
    about:
      "Semax is a synthetic peptide studied for potential cognitive and neuroprotective effects. It was recommended by the FDA's Pharmacy Compounding Advisory Committee for the 503A bulk drug list in 2026, with an 8-5 vote.",
    format: "Intranasal spray",
    price: "$110",
    cadence: "per month",
    shape: "petal",
    newlyRecommended: true,
    bullets: [
      "Simple intranasal dosing",
      "Compounded by licensed U.S. pharmacies",
      "Clinician review before every renewal",
      "Message your care team any time",
    ],
    faqs: [
      {
        q: "Is Semax FDA approved?",
        a: NEWLY_RECOMMENDED_NOTE,
      },
    ],
  },
  {
    slug: "glutathione",
    name: "Glutathione",
    category: "wellness",
    tagline: "The body's master antioxidant, replenished.",
    summary:
      "A long-established compounded antioxidant injectable for cellular and immune support.",
    about:
      "Glutathione is a naturally occurring antioxidant produced by the body. Compounded glutathione injections are a long-standing offering at wellness and IV therapy clinics, prepared by licensed pharmacies from a clinician's prescription.",
    format: "Weekly intramuscular injection",
    price: "$89",
    cadence: "per month",
    shape: "diamond",
    bullets: [
      "Simple weekly injection",
      "Compounded by licensed U.S. pharmacies",
      "Often paired with B12",
      "No long-term contract",
    ],
    faqs: [
      {
        q: "What is glutathione used for?",
        a: "It's commonly used for general antioxidant and immune support. Your clinician can discuss whether it fits your goals.",
      },
    ],
  },
  {
    slug: "b12",
    name: "Vitamin B12",
    category: "wellness",
    tagline: "A foundational energy and nervous-system nutrient.",
    summary:
      "Compounded methylcobalamin B12, prescribed for energy and nervous-system support.",
    about:
      "Vitamin B12 (methylcobalamin) is an essential nutrient involved in energy metabolism and nervous-system function. It's one of the most widely prescribed injectables at wellness clinics nationwide.",
    format: "Weekly intramuscular injection",
    price: "$35",
    cadence: "per month",
    shape: "circle",
    bullets: [
      "Simple weekly injection",
      "Compounded by licensed U.S. pharmacies",
      "Often paired with glutathione",
      "No long-term contract",
    ],
    faqs: [
      {
        q: "How is this different from oral B12?",
        a: "Injectable B12 bypasses digestive absorption, which some patients find more effective, particularly with certain absorption conditions.",
      },
    ],
  },
  {
    slug: "sermorelin",
    name: "Sermorelin",
    category: "wellness",
    tagline: "A growth-hormone-releasing peptide for healthy aging.",
    summary:
      "Compounded Sermorelin, prescribed to support the body's natural growth-hormone rhythm.",
    about:
      "Sermorelin is a growth-hormone-releasing hormone (GHRH) analog that has been compounded by U.S. pharmacies for over a decade, used to support the body's own growth-hormone production rather than replacing it directly.",
    format: "Nightly subcutaneous injection",
    price: "$199",
    cadence: "per month",
    shape: "arch",
    bullets: [
      "Supports your body's natural GH rhythm",
      "Compounded by licensed U.S. pharmacies",
      "Clinician-guided dosing",
      "Reviewed regularly with your care team",
    ],
    faqs: [
      {
        q: "Is Sermorelin the same as HGH?",
        a: "No. Sermorelin signals your pituitary gland to release its own growth hormone, rather than introducing growth hormone directly.",
      },
    ],
  },
];

export function getPeptide(slug: string) {
  return peptides.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function peptidesByCategory(categorySlug: CategorySlug) {
  return peptides.filter((p) => p.category === categorySlug);
}
