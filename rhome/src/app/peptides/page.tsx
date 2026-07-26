import type { Metadata } from "next";
import Link from "next/link";
import { categories, peptidesByCategory } from "@/lib/peptides";
import Shape from "@/components/Shape";
import ComplianceBadge from "@/components/ComplianceBadge";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Peptides",
  description:
    "Explore RHOME's peptide catalog — GLP-1 weight loss, recovery and repair, longevity and cognitive, and wellness essentials.",
};

export default function PeptidesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
            Every plan starts with a real clinician.
          </h1>
          <p className="mt-4 text-lg text-rhome-700">
            Choose a peptide to see how it works, what it costs, and what to
            expect from your care team. Compounded peptides are prepared by
            licensed U.S. pharmacies from your clinician&apos;s prescription.
          </p>
        </div>

        {categories.map((category) => (
          <div key={category.slug} id={category.slug} className="scroll-mt-24 mt-16 first:mt-12">
            <div className="flex items-center gap-3">
              <Shape kind={category.shape} className="h-10 w-10" />
              <div>
                <h2 className="font-display text-2xl text-rhome-900">
                  {category.name}
                </h2>
                <p className="text-sm text-rhome-600">{category.tagline}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {peptidesByCategory(category.slug).map((p) => (
                <Link
                  key={p.slug}
                  href={`/peptides/${p.slug}`}
                  className="group flex flex-col justify-between rounded-3xl border border-rhome-200 bg-rhome-50 p-7 transition hover:-translate-y-1 hover:border-rhome-400 hover:shadow-lg hover:shadow-rhome-900/5"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <Shape kind={p.shape} className="h-12 w-12" />
                      {p.newlyRecommended && <ComplianceBadge />}
                    </div>
                    <h3 className="font-display mt-5 text-xl text-rhome-900">
                      {p.name}
                    </h3>
                    <p className="mt-2 text-sm text-rhome-700">{p.summary}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="font-semibold text-rhome-800">
                      {p.price} {p.cadence}
                    </span>
                    <span className="font-semibold text-rhome-600 transition group-hover:translate-x-1">
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <CtaBanner />
    </>
  );
}
