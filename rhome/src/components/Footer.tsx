import Link from "next/link";
import { categories } from "@/lib/peptides";

const columns = [
  {
    title: "Peptides",
    links: categories.map((c) => ({
      href: `/peptides#${c.slug}`,
      label: c.name,
    })),
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About RHOME" },
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
            <span className="font-display text-2xl text-rhome-50">RHOME</span>
            <p className="mt-3 max-w-xs text-sm text-rhome-300">
              Licensed clinicians, compounded peptide therapy, delivered to
              your door.
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
            RHOME is a telehealth platform that facilitates connections
            between patients and independent, licensed clinicians, and
            arranges compounding of prescribed peptides through licensed
            503A/503B pharmacies. RHOME does not itself practice medicine or
            manufacture medications. Compounded peptides are not
            independently reviewed by the FDA for safety, effectiveness, or
            quality the way approved drugs are — some peptides referenced on
            this site have only been recommended by an FDA advisory
            committee for compounding eligibility, which is not the same as
            FDA approval. Not all patients will be prescribed treatment. If
            you are experiencing a medical emergency, call 911. If you are
            in crisis, call or text 988 (Suicide &amp; Crisis Lifeline).
          </p>
          <p className="mt-4">
            © {new Date().getFullYear()} RHOME Health, Inc. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
