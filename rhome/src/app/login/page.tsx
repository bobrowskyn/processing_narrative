import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your Rhone account.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-6 py-20">
      <h1 className="font-display text-3xl text-rhone-900">Welcome back</h1>
      <p className="mt-2 text-sm text-rhone-600">
        Log in to message your care team or manage your plan.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-rhone-800">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-rhone-200 bg-white px-4 py-3 text-rhone-900 outline-none focus:border-rhone-500"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-rhone-800">
            Password
          </label>
          <input
            type="password"
            className="mt-1 w-full rounded-xl border border-rhone-200 bg-white px-4 py-3 text-rhone-900 outline-none focus:border-rhone-500"
            placeholder="••••••••"
          />
        </div>
        <button
          type="button"
          className="w-full rounded-full bg-rhone-600 px-7 py-3 text-sm font-semibold text-rhone-50 transition hover:bg-rhone-700"
        >
          Log in
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-rhone-600">
        New to Rhone?{" "}
        <Link
          href="/get-started"
          className="font-semibold text-rhone-700 hover:text-rhone-900"
        >
          Start your first visit
        </Link>
      </p>
    </section>
  );
}
