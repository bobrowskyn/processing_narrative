import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about how RHOME works.",
};

const general = [
  {
    q: "Is RHOME a replacement for my regular doctor?",
    a: "No. RHOME is best for focused peptide therapy. We recommend keeping a primary care relationship for annual physicals and complex or emergency needs.",
  },
  {
    q: "Are RHOME's peptides FDA approved?",
    a: "It depends on the peptide. Semaglutide and tirzepatide are FDA-approved active ingredients in brand-name drugs; RHOME's versions are compounded by licensed pharmacies rather than manufactured by the brand. BPC-157, TB-500, KPV, MOTS-c, Epitalon, and Semax were recommended by an FDA advisory committee in July 2026 for inclusion on the 503A bulk drug compounding list — that is a compounding-eligibility recommendation, not FDA approval of a drug product. Glutathione, B12, and Sermorelin are long-standing compounded offerings. Every product page states this clearly.",
  },
  {
    q: "Which states does RHOME operate in?",
    a: "RHOME's clinician network covers most states, though availability of specific peptides can vary by state regulation.",
  },
  {
    q: "How do I cancel my plan?",
    a: "Go to Account > Plans and select cancel. There are no cancellation fees and no long-term contracts.",
  },
  {
    q: "Does RHOME accept insurance?",
    a: "Plans are priced flat-rate and don't require insurance. We provide an itemized receipt you can submit to your insurer or FSA/HSA for potential reimbursement.",
  },
  {
    q: "Is my information secure?",
    a: "Yes. All visits and records are handled in accordance with HIPAA and stored using encrypted, access-controlled systems.",
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
          Frequently asked questions
        </h1>
        <div className="mt-10">
          <FaqAccordion items={general} />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
