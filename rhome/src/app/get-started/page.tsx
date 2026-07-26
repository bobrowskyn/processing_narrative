import type { Metadata } from "next";
import IntakeWizard from "@/components/IntakeWizard";

export const metadata: Metadata = {
  title: "Get started",
  description: "Start your online visit with a licensed Rhone clinician.",
};

export default function GetStartedPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <div className="text-center">
        <h1 className="font-display text-4xl text-rhone-900">
          Let&apos;s get you started.
        </h1>
        <p className="mt-3 text-rhone-700">
          A few quick questions, then we&apos;ll match you with a licensed
          clinician.
        </p>
      </div>
      <div className="mt-10">
        <IntakeWizard />
      </div>
    </section>
  );
}
