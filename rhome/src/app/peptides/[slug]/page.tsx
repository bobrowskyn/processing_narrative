import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { peptides, getPeptide } from "@/lib/peptides";
import Shape from "@/components/Shape";
import ComplianceBadge from "@/components/ComplianceBadge";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return peptides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const peptide = getPeptide(slug);
  if (!peptide) return {};
  return {
    title: peptide.name,
    description: peptide.summary,
  };
}

export default async function PeptidePage({ params }: Props) {
  const { slug } = await params;
  const peptide = getPeptide(slug);

  if (!peptide) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/peptides"
          className="text-sm font-medium text-rhome-600 hover:text-rhome-800"
        >
          ← All peptides
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            {peptide.newlyRecommended && (
              <div className="mb-4">
                <ComplianceBadge />
              </div>
            )}
            <h1 className="font-display text-4xl text-rhome-900 sm:text-5xl">
              {peptide.name}
            </h1>
            <p className="mt-3 text-xl text-rhome-700">{peptide.tagline}</p>
            <p className="mt-5 max-w-2xl text-rhome-700">{peptide.about}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-started"
                className="rounded-full bg-rhome-600 px-7 py-3.5 text-base font-semibold text-rhome-50 shadow-md shadow-rhome-600/20 transition hover:bg-rhome-700"
              >
                Start your visit
              </Link>
              <span className="text-sm font-semibold text-rhome-800">
                {peptide.price} {peptide.cadence}
              </span>
              <span className="text-sm text-rhome-500">
                {peptide.format}
              </span>
            </div>
          </div>
          <Shape kind={peptide.shape} className="hidden h-40 w-40 md:block" />
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {peptide.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-2xl border border-rhome-200 bg-rhome-50 px-5 py-4 text-sm text-rhome-800"
            >
              <span className="mt-0.5 text-rhome-500">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-3xl text-rhome-900">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <FaqAccordion items={peptide.faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
