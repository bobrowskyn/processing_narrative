import type { Metadata } from "next";
import HowItWorks from "@/components/HowItWorks";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "See how a Rhome visit works, from online intake to a treatment plan delivered to your door.",
};

const details = [
  {
    title: "Who reviews my visit?",
    body: "Every intake is reviewed by a licensed clinician in your state — physicians, nurse practitioners, or physician assistants, depending on the type of care.",
  },
  {
    title: "What if I'm not a fit for treatment?",
    body: "Not everyone qualifies for every treatment. If your clinician determines something isn't appropriate, they'll explain why and suggest alternatives, including seeing a doctor in person when needed.",
  },
  {
    title: "How is this priced?",
    body: "Plans are priced flat-rate per month or per visit, shown up front before you check out. No insurance is required, though itemized receipts are available for reimbursement.",
  },
  {
    title: "Where does treatment ship from?",
    body: "Prescriptions are filled by licensed pharmacies in our network and shipped in plain, unmarked packaging.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
            From question to treatment, in four steps.
          </h1>
          <p className="mt-4 text-lg text-rhome-700">
            Rhome was built to remove the friction between noticing something
            and doing something about it.
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
