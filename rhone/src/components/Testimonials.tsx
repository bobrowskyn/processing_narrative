const quotes = [
  {
    quote:
      "I put off dealing with my hair for two years because I dreaded the appointment. This took ten minutes and my prescription showed up three days later.",
    name: "Marcus T.",
    detail: "Hair Loss member since 2024",
  },
  {
    quote:
      "The clinician actually asked follow-up questions instead of just approving whatever I typed. Felt like real care, not a form.",
    name: "Priya S.",
    detail: "Skincare member since 2025",
  },
  {
    quote:
      "Being able to message my care team between check-ins made a bigger difference than I expected. It doesn't feel like I'm on my own.",
    name: "Devon K.",
    detail: "Weight Management member since 2024",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-2xl">
        <h2 className="font-display text-3xl text-rhone-900 sm:text-4xl">
          Members, not case numbers.
        </h2>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="rounded-3xl border border-rhone-200 bg-rhone-50 p-7"
          >
            <blockquote className="font-display text-lg leading-snug text-rhone-900">
              “{q.quote}”
            </blockquote>
            <figcaption className="mt-5 text-sm text-rhone-600">
              <span className="font-semibold text-rhone-800">{q.name}</span>
              {" — "}
              {q.detail}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
