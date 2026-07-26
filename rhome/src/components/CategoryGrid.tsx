import Link from "next/link";
import { treatments } from "@/lib/treatments";
import Shape from "./Shape";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-rhone-900 sm:text-4xl">
          Care for whatever brought you here.
        </h2>
        <p className="mt-4 text-rhone-700">
          Every plan starts with a licensed clinician reviewing your case —
          not an algorithm.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <Link
            key={t.slug}
            href={`/treatments/${t.slug}`}
            className="group flex flex-col justify-between rounded-3xl border border-rhone-200 bg-rhone-50 p-7 transition hover:-translate-y-1 hover:border-rhone-400 hover:shadow-lg hover:shadow-rhone-900/5"
          >
            <div>
              <Shape kind={t.shape} className="h-14 w-14" />
              <h3 className="font-display mt-5 text-xl text-rhone-900">
                {t.name}
              </h3>
              <p className="mt-2 text-sm text-rhone-700">{t.tagline}</p>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="font-semibold text-rhone-800">
                From {t.price}
              </span>
              <span className="font-semibold text-rhone-600 transition group-hover:translate-x-1">
                Explore →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
