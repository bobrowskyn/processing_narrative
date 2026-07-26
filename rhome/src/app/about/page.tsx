import type { Metadata } from "next";
import Shape from "@/components/Shape";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "RHOME connects people with licensed clinicians for compounded peptide therapy — plain about what's approved, what's recommended, and what's not.",
};

const values = [
  {
    title: "Clinician-led, always",
    body: "Every plan is reviewed and approved by a licensed clinician — never an algorithm making a prescribing decision on its own.",
  },
  {
    title: "Plain about regulatory status",
    body: "We say clearly which peptides are FDA-approved active ingredients, which are newly recommended for compounding, and which have no such recommendation at all. No dressing up a committee vote as an approval.",
  },
  {
    title: "Built for follow-through",
    body: "A prescription that ships once isn't care. Ongoing check-ins and messaging are part of every plan, not an upsell.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
              We started RHOME because peptide therapy deserved a clinician,
              not just a checkout page.
            </h1>
            <p className="mt-5 text-lg text-rhome-700">
              Interest in peptides — from GLP-1s to recovery and longevity
              compounds — has outpaced access to clinicians who can
              prescribe and monitor them responsibly. RHOME exists to close
              that gap: licensed clinicians, compounding by licensed U.S.
              pharmacies, and transparent pricing and regulatory status for
              every peptide we offer.
            </p>
          </div>
          <Shape kind="leaf" className="hidden h-40 w-40 md:block" />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-rhome-200 bg-rhome-50 p-7"
            >
              <h2 className="text-lg font-semibold text-rhome-900">
                {v.title}
              </h2>
              <p className="mt-2 text-sm text-rhome-700">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
