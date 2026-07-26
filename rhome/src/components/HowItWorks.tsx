const steps = [
  {
    number: "01",
    title: "Complete an online visit",
    body: "Answer a few questions about your health and goals — from your phone, in about five minutes.",
  },
  {
    number: "02",
    title: "Hear back from a clinician",
    body: "A licensed clinician reviews your case and responds, usually within a day, sometimes minutes.",
  },
  {
    number: "03",
    title: "Get your plan, delivered",
    body: "If treatment is right for you, it ships free in discreet packaging to your door.",
  },
  {
    number: "04",
    title: "Stay supported",
    body: "Message your care team any time. Adjust your plan as your needs change.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-rhome-100/60 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl text-rhome-900 sm:text-4xl">
            How Rhome works
          </h2>
          <p className="mt-4 text-rhome-700">
            No office visits. No waiting rooms. Just a clear path from
            question to treatment.
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
