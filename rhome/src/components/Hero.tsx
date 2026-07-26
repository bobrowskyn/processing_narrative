import Link from "next/link";
import Shape from "./Shape";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <span className="inline-flex items-center rounded-full bg-rhome-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-rhome-700">
            Licensed clinicians · Compounded by U.S. pharmacies
          </span>
          <h1 className="font-display mt-6 text-4xl leading-[1.1] text-rhome-900 sm:text-5xl md:text-6xl">
            Peptide therapy,{" "}
            <span className="italic text-rhome-600">clinically guided.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-rhome-700">
            RHOME connects you with licensed clinicians for compounded
            peptide therapy — GLP-1 weight loss, recovery, longevity, and
            wellness essentials — prepared by licensed U.S. pharmacies and
            shipped to your door.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/get-started"
              className="rounded-full bg-rhome-600 px-7 py-3.5 text-base font-semibold text-rhome-50 shadow-md shadow-rhome-600/20 transition hover:bg-rhome-700"
            >
              Get started
            </Link>
            <Link
              href="/how-it-works"
              className="text-base font-semibold text-rhome-800 underline decoration-rhome-300 decoration-2 underline-offset-4 transition hover:text-rhome-900"
            >
              See how it works
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-rhome-200 pt-8">
            <div>
              <dt className="sr-only">Peptides available</dt>
              <dd className="font-display text-2xl text-rhome-900">11</dd>
              <p className="text-xs text-rhome-600">peptides available</p>
            </div>
            <div>
              <dt className="sr-only">Average clinician response</dt>
              <dd className="font-display text-2xl text-rhome-900">
                &lt;24hrs
              </dd>
              <p className="text-xs text-rhome-600">clinician response</p>
            </div>
            <div>
              <dt className="sr-only">Member rating</dt>
              <dd className="font-display text-2xl text-rhome-900">4.8/5</dd>
              <p className="text-xs text-rhome-600">member rating</p>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto hidden h-[420px] w-full max-w-md md:block">
          <Shape kind="circle" className="absolute right-4 top-0 h-64 w-64" />
          <Shape kind="petal" className="absolute left-0 top-20 h-40 w-40" />
          <Shape
            kind="arch"
            className="absolute bottom-0 right-10 h-56 w-44"
          />
          <Shape
            kind="leaf"
            className="absolute bottom-10 left-10 h-32 w-32"
          />
        </div>
      </div>
    </section>
  );
}
