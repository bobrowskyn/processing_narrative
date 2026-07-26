import type { Metadata } from "next";
import Link from "next/link";
import { treatments } from "@/lib/treatments";
import Shape from "@/components/Shape";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Explore Rhone's treatment categories — hair loss, skincare, sexual health, weight management, mental health, and primary care.",
};

export default function TreatmentsPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-rhone-900 sm:text-5xl">
            Every plan starts with a real clinician.
          </h1>
          <p className="mt-4 text-lg text-rhone-700">
            Choose a category to see how the visit works, what it costs, and
            what to expect from your care team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <Link
              key={t.slug}
              href={`/treatments/${t.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-rhone-200 bg-rhone-50 p-7 transition hover:-translate-y-1 hover:border-rhone-400 hover:shadow-lg hover:shadow-rhone-900/5"
            >
              <div>
                <Shape kind={t.shape} className="h-14 w-14" />
                <h2 className="font-display mt-5 text-xl text-rhone-900">
                  {t.name}
                </h2>
                <p className="mt-2 text-sm text-rhone-700">{t.description}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="font-semibold text-rhone-800">
                  From {t.price} {t.cadence}
                </span>
                <span className="font-semibold text-rhone-600 transition group-hover:translate-x-1">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
