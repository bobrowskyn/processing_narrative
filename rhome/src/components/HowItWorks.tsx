const steps = [
  {
    number: "01",
    title: "Complete an online visit",
    body: "Answer a few questions about your health, goals, and the peptide you're interested in — from your phone, in about five minutes.",
  },
  {
    number: "02",
    title: "Hear back from a clinician",
    body: "A licensed clinician reviews your case and, if appropriate, writes a prescription — usually within a day.",
  },
  {
    number: "03",
    title: "A licensed pharmacy compounds it",
    body: "Your prescription is compounded by a licensed 503A/503B U.S. pharmacy and shipped in discreet, temperature-safe packaging.",
  },
  {
    number: "04",
    title: "Stay supported",
    body: "Message your care team any time. Your clinician reviews your plan before every renewal.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-rhome-100/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-rhome-900 sm:text-4xl">
            How RHOME works
          </h2>
          <p className="mt-4 text-rhome-700">
            No office visits. No waiting rooms. Just a clear, clinician-led
            path from question to compounded prescription.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="font-display text-4xl text-rhome-300">
                {step.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-rhome-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-rhome-700">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
