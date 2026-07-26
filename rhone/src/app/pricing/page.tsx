import type { Metadata } from "next";
import Link from "next/link";
import { treatments } from "@/lib/treatments";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent, flat-rate pricing for every Rhone treatment plan. No insurance required.",
};

export default function PricingPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl text-rhone-900 sm:text-5xl">
            Pricing that fits on one line.
          </h1>
          <p className="mt-4 text-lg text-rhone-700">
            Every plan is priced flat-rate and shown before you check out. No
            insurance required, no surprise billing.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-rhone-200">
          <table className="w-full text-left">
            <thead className="bg-rhone-100">
              <tr>
                <th className="px-6 py-4 text-sm font-semibold text-rhone-800">
                  Treatment
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-rhone-800">
                  Starting price
                </th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody className="divide-y divide-rhone-200 bg-rhone-50">
              {treatments.map((t) => (
                <tr key={t.slug}>
                  <td className="px-6 py-5">
                    <span className="font-semibold text-rhone-900">
                      {t.name}
                    </span>
                    <p className="mt-1 text-sm text-rhone-600">
                      {t.tagline}
                    </p>
                  </td>
                  <td className="px-6 py-5 text-rhone-800">
                    {t.price}
                    <span className="block text-xs text-rhone-500">
                      {t.cadence}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <Link
                      href={`/treatments/${t.slug}`}
                      className="text-sm font-semibold text-rhone-600 hover:text-rhone-800"
                    >
                      Learn more →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-rhone-500">
          Pricing shown reflects the starting cost of the most common plan
          for each category. Your exact price depends on the treatment your
          clinician prescribes and is always confirmed before you&apos;re
          charged.
        </p>
      </section>

      <CtaBanner />
    </>
  );
}
