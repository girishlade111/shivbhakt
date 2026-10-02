# Shivbhakt — A Tribute to Chhatrapati Shivaji Maharaj

An immersive, editorial-style tribute website dedicated to Chhatrapati Shivaji Maharaj (1630–1680),
founder of the Maratha Empire. Explore his early life, the conflicts with Bijapur and the Mughals,
his coronation at Raigad Fort in 1674, and his enduring legacy — through animated, page-transitioned
storytelling sections.

## Features

- **Multi-chapter storytelling** — dedicated pages for Early Life, Bijapur Conflict, Mughal Conflict,
  Coronation, and Legacy
- **Animated hero** with cinematic typography (Cinzel + Manrope fonts)
- **Page transitions** powered by Framer Motion for a smooth, app-like feel
- **Royal editorial design** — dark theme, gold accents, framed visual motifs
- **Fully responsive** layout with a mobile-friendly navbar
- Static export — zero backend, deployable to any static host

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, static export)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for animations
- TypeScript

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

The site is configured for static export (`output: "export"` in `next.config.ts`):

```bash
npm run build   # emits a static site into ./out
```

Deploy `./out` to any static host — GitHub Pages, Cloudflare Pages, Netlify, or Vercel.

## Project Structure

```
app/
  page.tsx              # Homepage (Hero)
  early-life/page.tsx   # Early life chapter
  bijapur-conflict/     # Bijapur Sultanate conflicts
  mughal-conflict/      # Mughal conflicts
  coronation/page.tsx   # Raigad coronation, 1674
  legacy/page.tsx       # Enduring legacy
  layout.tsx            # Root layout, fonts, global metadata
components/
  Hero.tsx, Navbar.tsx, PageTransition.tsx, RoyalFrame.tsx,
  EarlyLife.tsx, BijapurConflict.tsx, MughalConflict.tsx,
  CoronationAdmin.tsx, LegacyFooter.tsx
public/images/          # Site imagery
```

## Environment Variables

None required — fully static site.

---

Built by [Girish Lade](https://ladestack.in) — part of the
[LadeStack](https://ladestack.in) collection of free tools and websites.
