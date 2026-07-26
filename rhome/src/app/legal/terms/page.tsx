import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of RHOME.",
};

export default function TermsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-rhome-900">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-rhome-500">
        Placeholder terms for demonstration purposes only. Replace with
        counsel-reviewed content before launch.
      </p>

      <div className="mt-10 space-y-8 text-rhome-800">
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            The RHOME platform
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            RHOME is a technology platform that connects users with
            independent, licensed clinicians and facilitates compounding of
            prescribed peptides through licensed 503A/503B pharmacies.
            RHOME does not practice medicine, provide medical advice
            directly, or manufacture medications.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            Compounded peptides
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Compounded peptides are not independently reviewed by the FDA
            for safety, effectiveness, or quality the way approved drugs
            are. Where a product page notes that a peptide has been
            recommended by an FDA advisory committee for compounding
            eligibility, that recommendation is not FDA approval of a drug
            product, and the committee&apos;s recommendation may not be
            adopted by the FDA or may change.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            No guarantee of treatment
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Completing an intake does not guarantee a prescription.
            Clinicians independently determine whether treatment is
            appropriate based on clinical judgment.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            Emergencies
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            RHOME is not for medical emergencies. If you are experiencing a
            medical emergency, call 911 or go to the nearest emergency room.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            Billing and cancellation
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Plans are billed on the cadence shown at checkout. You may
            cancel at any time from your account; cancellation takes effect
            at the end of the current billing period.
          </p>
        </div>
      </div>
    </section>
  );
}
