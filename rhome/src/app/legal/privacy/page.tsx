import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How RHOME collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl text-rhome-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-rhome-500">
        Placeholder policy for demonstration purposes only. Replace with
        counsel-reviewed content before launch.
      </p>

      <div className="prose-rhome mt-10 space-y-8 text-rhome-800">
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            Information we collect
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            We collect information you provide directly, such as your name,
            contact details, and health history submitted during an intake
            or visit, as well as information generated through your use of
            the platform.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            How we use it
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Information is used to facilitate care with licensed clinicians,
            fulfill prescriptions through partner compounding pharmacies,
            process payment, and improve the safety and quality of the
            platform.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            How we protect it
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            Health information is treated as protected health information
            under HIPAA and handled with encryption in transit and at rest,
            access controls, and audit logging.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-rhome-900">
            Your choices
          </h2>
          <p className="mt-2 text-sm leading-relaxed">
            You may request a copy of your records, ask that information be
            corrected, or close your account at any time from your account
            settings or by contacting support.
          </p>
        </div>
      </div>
    </section>
  );
}
