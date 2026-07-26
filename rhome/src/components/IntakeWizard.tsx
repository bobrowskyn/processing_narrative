"use client";

import { useState } from "react";
import { treatments } from "@/lib/treatments";

const STATES = [
  "California",
  "Texas",
  "New York",
  "Florida",
  "Illinois",
  "Other",
];

export default function IntakeWizard() {
  const [step, setStep] = useState(0);
  const [category, setCategory] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [state, setState] = useState("");
  const [dob, setDob] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 3;

  const canContinue =
    (step === 0 && category) ||
    (step === 1 && name.trim() && state && dob) ||
    step === 2;

  function next() {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  if (submitted) {
    const chosen = treatments.find((t) => t.slug === category);
    return (
      <div className="rounded-3xl border border-rhome-200 bg-rhome-50 p-10 text-center">
        <span className="text-4xl">✓</span>
        <h2 className="font-display mt-4 text-2xl text-rhome-900">
          You&apos;re on your way, {name.split(" ")[0] || "there"}.
        </h2>
        <p className="mt-3 text-rhome-700">
          Thanks for sharing a bit about your {chosen?.name.toLowerCase()}{" "}
          goals. In a live visit, this is where a licensed clinician in{" "}
          {state} would review your intake and follow up within 24 hours.
        </p>
        <p className="mt-6 text-xs text-rhome-500">
          This is a demo flow — no information you entered was sent
          anywhere or stored.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-rhome-200 bg-rhome-50 p-8 sm:p-10">
      <div className="mb-8 flex items-center gap-2">
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full ${
              i <= step ? "bg-rhome-500" : "bg-rhome-200"
            }`}
          />
        ))}
      </div>

      {step === 0 && (
        <div>
          <h2 className="font-display text-2xl text-rhome-900">
            What brings you in today?
          </h2>
          <p className="mt-2 text-sm text-rhome-600">
            Choose the area you&apos;d like to focus on first.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {treatments.map((t) => (
              <button
                key={t.slug}
                type="button"
                onClick={() => setCategory(t.slug)}
                className={`rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition ${
                  category === t.slug
                    ? "border-rhome-600 bg-rhome-100 text-rhome-900"
                    : "border-rhome-200 bg-rhome-50 text-rhome-800 hover:border-rhome-400"
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 1 && (
        <div>
          <h2 className="font-display text-2xl text-rhome-900">
            A little about you
          </h2>
          <p className="mt-2 text-sm text-rhome-600">
            We use this to match you with a licensed clinician in your
            state.
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-rhome-800">
                Full name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-rhome-200 bg-white px-4 py-3 text-rhome-900 outline-none focus:border-rhome-500"
                placeholder="Jamie Rivera"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-rhome-800">
                  Date of birth
                </label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-rhome-200 bg-white px-4 py-3 text-rhome-900 outline-none focus:border-rhome-500"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-rhome-800">
                  State
                </label>
                <select
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-rhome-200 bg-white px-4 py-3 text-rhome-900 outline-none focus:border-rhome-500"
                >
                  <option value="">Select a state</option>
                  {STATES.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="font-display text-2xl text-rhome-900">
            Anything your clinician should know?
          </h2>
          <p className="mt-2 text-sm text-rhome-600">
            Optional — share symptoms, history, or questions.
          </p>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={5}
            className="mt-6 w-full rounded-xl border border-rhome-200 bg-white px-4 py-3 text-rhome-900 outline-none focus:border-rhome-500"
            placeholder="Optional notes for your clinician"
          />
        </div>
      )}

      <div className="mt-8 flex items-center justify-between">
        <button
          type="button"
          onClick={back}
          disabled={step === 0}
          className="text-sm font-semibold text-rhome-600 disabled:opacity-0"
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canContinue}
          className="rounded-full bg-rhome-600 px-7 py-3 text-sm font-semibold text-rhome-50 transition hover:bg-rhome-700 disabled:cursor-not-allowed disabled:bg-rhome-300"
        >
          {step === totalSteps - 1 ? "Submit" : "Continue"}
        </button>
      </div>
    </div>
  );
}
