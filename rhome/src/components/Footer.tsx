import Link from "next/link";

const columns = [
  {
    title: "Treatments",
    links: [
      { href: "/treatments/hair", label: "Hair Loss" },
      { href: "/treatments/skin", label: "Skincare" },
      { href: "/treatments/sexual-health", label: "Sexual Health" },
      { href: "/treatments/weight", label: "Weight Management" },
      { href: "/treatments/mental-health", label: "Mental Health" },
      { href: "/treatments/primary-care", label: "Primary Care" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Rhome" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/pricing", label: "Pricing" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy", label: "Privacy Policy" },
      { href: "/legal/terms", label: "Terms of Service" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-rhome-200 bg-rhome-900 text-rhome-100">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <span className="font-display text-2xl text-rhome-50">Rhome</span>
            <p className="mt-3 max-w-xs text-sm text-rhome-300">
              Licensed clinicians, real treatment, delivered to your door.
              Telehealth built around you.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-rhome-200">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-rhome-300 transition hover:text-rhome-50"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-rhome-700/60 pt-8 text-xs leading-relaxed text-rhome-400">
          <p>
            Rhome is a telehealth platform that facilitates connections between
            patients and independent, licensed clinicians. Rhome does not
            itself provide medical advice or practice medicine. Not all
            patients will be prescribed treatment — clinicians determine what,
            if anything, is appropriate after an online consultation. If you
            are experiencing a medical emergency, call 911. If you are in
            crisis, call or text 988 (Suicide &amp; Crisis Lifeline).
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} Rhome Health, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
