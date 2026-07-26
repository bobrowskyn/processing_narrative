const quotes = [
  {
    quote:
      "My clinician actually walked me through what compounded semaglutide means versus the brand name before I started. Didn't feel rushed at all.",
    name: "Marcus T.",
    detail: "Semaglutide member since 2025",
  },
  {
    quote:
      "I was skeptical about BPC-157 until my clinician explained the compounding status honestly instead of overselling it. That's why I trust the plan.",
    name: "Priya S.",
    detail: "Recovery member since 2026",
  },
  {
    quote:
      "Being able to message my care team between check-ins made a bigger difference than I expected. It doesn't feel like I'm on my own.",
    name: "Devon K.",
    detail: "Sermorelin member since 2025",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-rhome-900 sm:text-4xl">
          Members, not case numbers.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="rounded-3xl border border-rhome-200 bg-rhome-50 p-7"
          >
            <blockquote className="font-display text-lg leading-snug text-rhome-900">
              “{q.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-rhome-600">
              <span className="font-semibold text-rhome-800">{q.name}</span>
              {" — "}
              {q.detail}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
