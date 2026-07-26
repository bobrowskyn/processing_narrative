export type Treatment = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: string;
  cadence: string;
  shape: "circle" | "arch" | "leaf" | "wave" | "diamond" | "petal";
  bullets: string[];
  how: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const treatments: Treatment[] = [
  {
    slug: "hair",
    name: "Hair Loss",
    tagline: "Keep the hair you have. Regrow what you've lost.",
    description:
      "A clinician-guided plan built around the two ingredients with the most clinical evidence behind them, plus a topical routine that fits into thirty seconds of your morning.",
    price: "$26",
    cadence: "per month, billed quarterly",
    shape: "arch",
    bullets: [
      "Free online visit with a licensed clinician",
      "Prescription treatment shipped to your door",
      "Unlimited messaging with your care team",
      "Adjust or cancel any time, no fees",
    ],
    how: [
      {
        title: "Tell us what's going on",
        body: "A short intake covers your history and goals so your clinician understands your hairline, not just a checklist.",
      },
      {
        title: "Get matched with a clinician",
        body: "A licensed provider reviews your intake and, if appropriate, sends a personalized treatment plan — usually within a day.",
      },
      {
        title: "Treatment arrives, discreetly",
        body: "Your plan ships in plain, unmarked packaging on a schedule you control.",
      },
      {
        title: "Check in as you go",
        body: "Message your care team any time. Most people see visible results within three to six months.",
      },
    ],
    faqs: [
      {
        q: "How fast will I see results?",
        a: "Most patients notice less shedding within 2-3 months and visible regrowth by month 4-6. Hair growth is a slow biological process — consistency matters more than speed.",
      },
      {
        q: "Is this a prescription?",
        a: "Yes. After your online visit, a licensed clinician determines whether a prescription treatment is appropriate for you.",
      },
      {
        q: "Can I cancel any time?",
        a: "Yes, there's no contract. Pause or cancel your plan from your account whenever you'd like.",
      },
    ],
  },
  {
    slug: "skin",
    name: "Skincare",
    tagline: "Prescription-strength routines, tailored to your skin.",
    description:
      "Skip the guesswork of the skincare aisle. A dermatology-informed routine formulated for your specific concerns — acne, fine lines, or both.",
    price: "$25",
    cadence: "per month, billed quarterly",
    shape: "petal",
    bullets: [
      "Personalized formula, mixed for your skin",
      "Ships free in discreet packaging",
      "Ongoing support from your care team",
      "Backed by dermatology research",
    ],
    how: [
      {
        title: "Share a few photos",
        body: "A quick photo-based intake helps your clinician see exactly what you're working with.",
      },
      {
        title: "Your formula gets built",
        body: "A licensed provider selects active ingredients suited to your skin and goals.",
      },
      {
        title: "It shows up at your door",
        body: "Your custom routine ships on a recurring schedule so you never run out.",
      },
      {
        title: "Refine over time",
        body: "Your care team adjusts your formula as your skin responds.",
      },
    ],
    faqs: [
      {
        q: "What's actually in my formula?",
        a: "Your clinician selects from evidence-backed actives such as tretinoin, azelaic acid, niacinamide, and clindamycin, based on your skin and goals.",
      },
      {
        q: "Will it work with my current routine?",
        a: "Your care team will walk you through how to layer your new routine with what you're already using.",
      },
    ],
  },
  {
    slug: "sexual-health",
    name: "Sexual Health",
    tagline: "Confidential care, straightforward answers.",
    description:
      "Talk to a licensed clinician about performance, stamina, or libido without sitting in a waiting room. Treatment ships the same week, if prescribed.",
    price: "$2",
    cadence: "per dose, plans from $20/mo",
    shape: "wave",
    bullets: [
      "100% online, judgment-free visits",
      "Generic and brand options available",
      "Ships in unmarked packaging",
      "Message a clinician whenever you need to",
    ],
    how: [
      {
        title: "Complete a private intake",
        body: "Answer questions about your health history from wherever you are, on your own time.",
      },
      {
        title: "A clinician reviews your case",
        body: "If treatment is appropriate, your clinician sends a prescription to be filled and shipped.",
      },
      {
        title: "Discreet delivery",
        body: "Your order arrives in plain packaging with no reference to the contents.",
      },
      {
        title: "Reorder in a couple taps",
        body: "Refill from your dashboard — no repeat visits needed for maintenance care.",
      },
    ],
    faqs: [
      {
        q: "Is my information kept private?",
        a: "Yes. Your intake and visit are confidential and protected the same way any medical record would be.",
      },
      {
        q: "What if it isn't right for me?",
        a: "Your clinician will recommend alternatives, including non-prescription options, if a given treatment isn't a fit.",
      },
    ],
  },
  {
    slug: "weight",
    name: "Weight Management",
    tagline: "A metabolic plan built with a clinician, not an app.",
    description:
      "Structured, physician-guided weight care that pairs medication (when appropriate) with nutrition and habit coaching for results that last.",
    price: "$129",
    cadence: "per month, plans vary",
    shape: "circle",
    bullets: [
      "Comprehensive intake with a licensed provider",
      "Medication options reviewed case-by-case",
      "Nutrition and habit-building guidance included",
      "Regular check-ins to track progress",
    ],
    how: [
      {
        title: "Complete your health profile",
        body: "Share your history, goals, and current habits so your care team can build a realistic plan.",
      },
      {
        title: "Meet your care team",
        body: "A physician reviews your case and discusses options, including medication if it's a fit.",
      },
      {
        title: "Start your plan",
        body: "Get your first shipment (if prescribed) along with a habit-based nutrition guide.",
      },
      {
        title: "Adjust monthly",
        body: "Regular check-ins keep your plan calibrated to how your body responds.",
      },
    ],
    faqs: [
      {
        q: "Do I need medication to join?",
        a: "No. Some members follow a nutrition-and-coaching-only plan; others combine it with medication their clinician prescribes.",
      },
      {
        q: "How is this different from an app?",
        a: "You're paired with a licensed physician who reviews labs and history, not just a calorie tracker.",
      },
    ],
  },
  {
    slug: "mental-health",
    name: "Mental Health",
    tagline: "Support for anxiety and low mood, from home.",
    description:
      "Connect with a licensed provider for an evaluation and, if appropriate, an ongoing treatment plan that may include medication, therapy referrals, or both.",
    price: "$85",
    cadence: "per month for medication management",
    shape: "leaf",
    bullets: [
      "Licensed psychiatric clinicians",
      "Medication management when appropriate",
      "Therapy referral network",
      "Recurring check-ins built into your plan",
    ],
    how: [
      {
        title: "Complete a clinical assessment",
        body: "A validated screening helps your clinician understand what you're experiencing.",
      },
      {
        title: "Meet your clinician",
        body: "A licensed provider discusses your assessment and options during a video or messaging visit.",
      },
      {
        title: "Start your plan",
        body: "If appropriate, medication ships to your door; therapy referrals are provided either way.",
      },
      {
        title: "Ongoing support",
        body: "Regular follow-ups make sure your plan is still the right one as things change.",
      },
    ],
    faqs: [
      {
        q: "Is this a crisis service?",
        a: "No. If you're in crisis, please contact 988 (Suicide & Crisis Lifeline) or emergency services immediately.",
      },
      {
        q: "Can I get therapy, not just medication?",
        a: "Yes. Your clinician can refer you to a therapist in our network alongside or instead of medication.",
      },
    ],
  },
  {
    slug: "primary-care",
    name: "Primary Care",
    tagline: "Everyday care, without the everyday wait.",
    description:
      "General wellness visits for the things that come up between annual physicals — from allergies and UTIs to lab reviews and preventive guidance.",
    price: "$39",
    cadence: "per visit",
    shape: "diamond",
    bullets: [
      "Same-day availability, most days",
      "Lab orders and prescriptions when needed",
      "Visit summaries added to your record",
      "No membership required",
    ],
    how: [
      {
        title: "Describe what's going on",
        body: "Tell us your symptoms and we'll match you with the right type of visit.",
      },
      {
        title: "See a clinician",
        body: "Meet by video or message with a licensed provider, usually the same day.",
      },
      {
        title: "Get a plan",
        body: "Receive a diagnosis, prescription, or lab order as needed, plus clear next steps.",
      },
      {
        title: "Keep your history in one place",
        body: "Every visit is saved to your Rhone record for the next time you need care.",
      },
    ],
    faqs: [
      {
        q: "Can you treat urgent issues?",
        a: "We handle a wide range of common, non-emergency issues. For anything life-threatening, call 911 or go to the nearest ER.",
      },
      {
        q: "Do I need insurance?",
        a: "No — visits are priced flat-rate and don't require insurance, though we can provide a receipt for reimbursement.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug);
}
