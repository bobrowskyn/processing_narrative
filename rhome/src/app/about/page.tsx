import type { Metadata } from "next";
import Shape from "@/components/Shape";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rhone is building telehealth that treats people like people — licensed clinicians, real plans, no waiting rooms.",
};

const values = [
  {
    title: "Clinician-led, always",
    body: "Every plan is reviewed and approved by a licensed clinician — never an algorithm making a prescribing decision on its own.",
  },
  {
    title: "Plain about what we are",
    body: "Rhone facilitates access to independent clinicians. We're clear about what we can and can't do, and we say no when something isn't a fit.",
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
            <h1 className="font-display text-4xl text-rhone-900 sm:text-5xl">
              We started Rhone because care shouldn&apos;t require a day off.
            </h1>
            <p className="mt-5 text-lg text-rhone-700">
              Millions of people put off ordinary health concerns — hair,
              skin, weight, mood, everyday symptoms — simply because getting
              seen takes too long. Rhone exists to close that gap with
              licensed clinicians, transparent pricing, and treatment that
              shows up at your door.
            </p>
          </div>
          <Shape kind="leaf" className="hidden h-40 w-40 md:block" />
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-rhone-200 bg-rhone-50 p-7"
            >
              <h2 className="text-lg font-semibold text-rhone-900">
                {v.title}
              </h2>
              <p className="mt-2 text-sm text-rhone-700">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
