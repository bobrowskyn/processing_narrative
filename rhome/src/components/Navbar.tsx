import Link from "next/link";

const links = [
  { href: "/peptides", label: "Peptides" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-rhome-200/70 bg-rhome-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-2xl tracking-tight text-rhome-900"
        >
          RHOME
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-rhome-700 transition hover:text-rhome-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden text-sm font-medium text-rhome-700 hover:text-rhome-900 sm:block"
          >
            Log in
          </Link>
          <Link
            href="/get-started"
            className="rounded-full bg-rhome-600 px-5 py-2.5 text-sm font-semibold text-rhome-50 shadow-sm transition hover:bg-rhome-700"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
