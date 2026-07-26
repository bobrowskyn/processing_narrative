import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about how Rhome works.",
};

const general = [
  {
    q: "Is Rhome a replacement for my regular doctor?",
    a: "No. Rhome is best for focused, ongoing concerns and everyday care. We recommend keeping a primary care relationship for annual physicals and complex or emergency needs.",
  },
  {
    q: "Which states does Rhome operate in?",
    a: "Rhome's clinician network covers all 50 states, though availability of specific treatments can vary by state regulation.",
  },
  {
    q: "How do I cancel my plan?",
    a: "Go to Account > Plans and select cancel. There are no cancellation fees and no long-term contracts.",
  },
  {
    q: "Does Rhome accept insurance?",
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
