# Rhone

A telehealth marketing site for **Rhone** — built with Next.js (App Router),
TypeScript, and Tailwind CSS in a warm, neutral orange-and-brown palette.

## What's here

- `src/app` — pages: home, treatments (+ dynamic `[slug]` detail pages),
  how-it-works, pricing, about, FAQ, a mock get-started intake flow, login,
  and legal (privacy/terms) pages.
- `src/components` — shared UI: navbar, footer, hero, category grid, FAQ
  accordion, intake wizard, decorative shapes, etc.
- `src/lib/treatments.ts` — single source of truth for the six treatment
  categories (copy, pricing, FAQs). Edit this file to change category
  content site-wide.

All imagery is CSS/SVG-based (gradient "shapes") rather than photography, so
there are no external image dependencies to license or swap.

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
3. If the Next.js app lives in a subdirectory (e.g. this `rhone/` folder
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
  must be reviewed by counsel before this goes live as a real telehealth
  offering (state licensing, prescribing, and HIPAA requirements apply).
- Swap the `rhone-*` color scale in `src/app/globals.css` to adjust the
  palette; it's the only place brand colors are defined.
