import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "See how a RHOME visit works, from online intake to compounded peptide therapy delivered to your door.",
};

const details = [
  {
    title: "Who reviews my visit?",
    body: "Every intake is reviewed by a licensed clinician in your state — physicians or nurse practitioners, depending on the peptide and your history.",
  },
  {
    title: "What if a peptide isn't a fit for me?",
    body: "Not everyone qualifies for every peptide. If your clinician determines something isn't appropriate, they'll explain why and suggest alternatives.",
  },
  {
    title: "Are these peptides FDA approved?",
    body: "Compounded peptides are not independently reviewed by the FDA for safety, effectiveness, or quality the way approved drugs are. Some peptides on RHOME were recently recommended by an FDA advisory committee for compounding eligibility — that's a recommendation about which substances pharmacies may compound, not FDA approval of a drug product.",
  },
  {
    title: "Where is my peptide compounded?",
    body: "Prescriptions are compounded by licensed 503A or 503B pharmacies in our network and shipped in discreet, temperature-appropriate packaging.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
            From question to compounded prescription, in four steps.
          </h1>
          <p className="mt-4 text-lg text-rhome-700">
            RHOME was built to bring licensed, clinician-guided peptide
            therapy to people without the friction of a specialty clinic.
          </p>
        </div>
      </section>

      <HowItWorks />

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-3xl text-rhome-900">The details</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {details.map((d) => (
            <div key={d.title}>
              <h3 className="text-lg font-semibold text-rhome-900">
                {d.title}
              </h3>
              <p className="mt-2 text-sm text-rhome-700">{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
