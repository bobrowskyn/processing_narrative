import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-3xl bg-rhome-900 px-8 py-14 text-center sm:px-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-rhome-600/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-rhome-400/20 blur-3xl" />
        <h2 className="font-display relative text-3xl text-rhome-50 sm:text-4xl">
          Your first visit is free.
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-rhome-300">
          Tell us what&apos;s going on and hear back from a licensed clinician —
          no cost, no commitment to start.
        </p>
        <Link
          href="/get-started"
          className="relative mt-8 inline-block rounded-full bg-rhome-50 px-8 py-3.5 text-base font-semibold text-rhome-900 transition hover:bg-rhome-200"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
