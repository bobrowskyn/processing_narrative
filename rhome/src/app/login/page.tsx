import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Rhome account.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-6 py-20">
      <h1 className="font-display text-3xl text-rhome-900">Welcome back</h1>
      <p className="mt-2 text-sm text-rhome-600">
        Log in to message your care team or manage your plan.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-rhome-800">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-rhome-200 bg-white px-4 py-3 text-rhome-900 outline-none focus:border-rhome-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-rhome-800">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border border-rhome-200 bg-white px-4 py-3 text-rhome-900 outline-none focus:border-rhome-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-full bg-rhome-600 px-7 py-3 text-sm font-semibold text-rhome-50 transition hover:bg-rhome-700"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-rhome-600">
        New to Rhome?{" "}
        <Link
          href="/get-started"
          className="font-semibold text-rhome-700 hover:text-rhome-900"
        >
          Start your first visit
        </Link>
      </p>
    </section>
  );
}
