# RHOME

A peptide therapy marketing site for **RHOME** — built with Next.js (App
Router), TypeScript, and Tailwind CSS in a warm, neutral orange-and-brown
palette.

## What's here

- `src/app` — pages: home, peptides (+ dynamic `[slug]` detail pages),
  how-it-works, pricing, about, FAQ, a mock get-started intake flow, login,
  and legal (privacy/terms) pages.
- `src/components` — shared UI: navbar, footer, hero, category grid, FAQ
  accordion, intake wizard, decorative shapes, compliance badge, etc.
- `src/lib/peptides.ts` — single source of truth for the peptide catalog:
  four categories (GLP-1 Weight Loss, Recovery & Repair, Longevity &
  Cognitive, Wellness Essentials) and eleven peptides (copy, pricing,
  format, FAQs, regulatory status). Edit this file to change catalog
  content site-wide.

All imagery is CSS/SVG-based (gradient "shapes") rather than photography, so
there are no external image dependencies to license or swap.

### Regulatory framing — read before editing copy

Six of the eleven peptides (BPC-157, TB-500, KPV, MOTS-c, Epitalon, Semax)
were recommended by the FDA's Pharmacy Compounding Advisory Committee on
July 23-24, 2026 for inclusion on the 503A bulk drug compounding list. **That
is a compounding-eligibility recommendation, not FDA approval of a drug
product.** The site is written to say so explicitly everywhere these
peptides are mentioned (`NEWLY_RECOMMENDED_NOTE` in `src/lib/peptides.ts`,
the `ComplianceBadge` component, and the FAQ/terms pages). If you add copy
about these peptides elsewhere, keep that distinction — marketing them as
"FDA approved" would be inaccurate and carries real regulatory/FTC risk for
a peptide business.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploying to Vercel

This is a standard Next.js app, so Vercel's zero-config import works:

1. Push this repo to GitHub (already done if you're reading this from the
   repo).
2. In Vercel, **Add New Project** → import the repo.
3. If the Next.js app lives in a subdirectory (e.g. this `rhome/` folder
   inside a larger repo), set **Root Directory** to that folder in the
   project's Settings → General.
4. Framework preset should auto-detect as **Next.js**; no build command
   overrides are needed (`next build` / `next start`).
5. Deploy. Every push to the connected branch produces a preview or
   production deployment automatically.

## Notes

- The `/get-started` intake wizard and `/login` form are front-end only —
  no data is sent to a backend or stored. Wire them up to a real intake/EHR
  and auth provider before launch.
- Legal copy in `/legal/privacy` and `/legal/terms` is placeholder text and
  must be reviewed by counsel before this goes live as a real peptide
  telehealth offering (state licensing, prescribing, compounding-pharmacy,
  and HIPAA requirements apply).
- Swap the `rhome-*` color scale in `src/app/globals.css` to adjust the
  palette; it's the only place brand colors are defined.
