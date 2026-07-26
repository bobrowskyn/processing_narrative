import Link from "next/link";
import { categories, peptidesByCategory } from "@/lib/peptides";
import Shape from "./Shape";

export default function CategoryGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-rhome-900 sm:text-4xl">
          Peptide therapy, organized around your goals.
        </h2>
        <p className="mt-4 text-rhome-700">
          Every plan starts with a licensed clinician reviewing your case —
          not an algorithm.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {categories.map((c) => {
          const count = peptidesByCategory(c.slug).length;
          return (
            <Link
              key={c.slug}
              href={`/peptides#${c.slug}`}
              className="group flex flex-col justify-between rounded-3xl border border-rhome-200 bg-rhome-50 p-7 transition hover:-translate-y-1 hover:border-rhome-400 hover:shadow-lg hover:shadow-rhome-900/5"
            >
              <div>
                <Shape kind={c.shape} className="h-14 w-14" />
                <h3 className="font-display mt-5 text-xl text-rhome-900">
                  {c.name}
                </h3>
                <p className="mt-2 text-sm text-rhome-700">{c.tagline}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="font-semibold text-rhome-800">
                  {count} peptide{count === 1 ? "" : "s"}
                </span>
                <span className="font-semibold text-rhome-600 transition group-hover:translate-x-1">
                  Explore →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
