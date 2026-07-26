import Link from "next/link";

const links = [
  { href: "/treatments", label: "Treatments" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rhone-200/70 bg-rhone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-rhone-900"
        >
          Rhone
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-rhone-700 transition hover:text-rhone-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-rhone-700 hover:text-rhone-900 sm:block"
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className="rounded-full bg-rhone-600 px-5 py-2.5 text-sm font-semibold text-rhone-50 shadow-sm transition hover:bg-rhone-700"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
