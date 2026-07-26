import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { treatments, getTreatment } from "@/lib/treatments";
import Shape from "@/components/Shape";
import FaqAccordion from "@/components/FaqAccordion";
import CtaBanner from "@/components/CtaBanner";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatment(slug);
  if (!treatment) return {};
  return {
    title: treatment.name,
    description: treatment.description,
  };
}

export default async function TreatmentPage({ params }: Props) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <Link
          href="/treatments"
          className="text-sm font-medium text-rhone-600 hover:text-rhone-800"
        >
          ← All treatments
        </Link>

        <div className="mt-6 grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h1 className="font-display text-4xl text-rhone-900 sm:text-5xl">
              {treatment.name}
            </h1>
            <p className="mt-3 text-xl text-rhone-700">{treatment.tagline}</p>
            <p className="mt-5 max-w-2xl text-rhone-700">
              {treatment.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/get-started"
                className="rounded-full bg-rhone-600 px-7 py-3.5 text-base font-semibold text-rhone-50 shadow-md shadow-rhone-600/20 transition hover:bg-rhone-700"
              >
                Start your visit
              </Link>
              <span className="text-sm font-semibold text-rhone-800">
                From {treatment.price} {treatment.cadence}
              </span>
            </div>
          </div>
          <Shape kind={treatment.shape} className="hidden h-40 w-40 md:block" />
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {treatment.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-2xl border border-rhone-200 bg-rhone-50 px-5 py-4 text-sm text-rhone-800"
            >
              <span className="mt-0.5 text-rhone-500">✓</span>
              {b}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-rhone-100/60 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-display text-3xl text-rhone-900">
            How it works
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-4">
            {treatment.how.map((step, i) => (
              <div key={step.title}>
                <span className="font-display text-3xl text-rhone-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-rhone-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-rhone-700">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="font-display text-3xl text-rhone-900">
          Frequently asked questions
        </h2>
        <div className="mt-8">
          <FaqAccordion items={treatment.faqs} />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
