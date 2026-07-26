import type { Metadata } from "next";
import Link from "next/link";
import { categories, peptidesByCategory } from "@/lib/peptides";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flat-rate pricing for every RHOME peptide. No insurance required.",
};

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
            Pricing that fits on one line.
          </h1>
          <p className="mt-4 text-lg text-rhome-700">
            Every peptide is priced flat-rate and shown before you check
            out. No insurance required, no surprise billing.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {categories.map((category) => (
            <div key={category.slug}>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-rhome-600">
                {category.name}
              </h2>
              <div className="mt-3 overflow-hidden rounded-3xl border border-rhome-200">
                <table className="w-full text-left">
                  <thead className="bg-rhome-100">
                    <tr>
                      <th className="px-6 py-4 text-sm font-semibold text-rhome-800">
                        Peptide
                      </th>
                      <th className="px-6 py-4 text-sm font-semibold text-rhome-800">
                        Price
                      </th>
                      <th className="px-6 py-4" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-rhome-200 bg-rhome-50">
                    {peptidesByCategory(category.slug).map((p) => (
                      <tr key={p.slug}>
                        <td className="px-6 py-5">
                          <span className="font-semibold text-rhome-900">
                            {p.name}
                          </span>
                          <p className="mt-1 text-sm text-rhome-600">
                            {p.tagline}
                          </p>
                        </td>
                        <td className="px-6 py-5 text-rhome-800">
                          {p.price}
                          <span className="block text-xs text-rhome-500">
                            {p.cadence}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-right">
                          <Link
                            href={`/peptides/${p.slug}`}
                            className="text-sm font-semibold text-rhome-600 hover:text-rhome-800"
                          >
                            Learn more →
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-rhome-500">
          Pricing shown reflects the starting cost of the most common plan
          for each peptide. Your exact price depends on the dose your
          clinician prescribes and is always confirmed before you&apos;re
          charged. Compounded peptides are typically self-pay; an itemized
          receipt is available for FSA/HSA reimbursement.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
