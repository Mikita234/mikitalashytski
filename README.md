# mikitalashytski.com

Personal showcase site for **Mikita Lashytski** — vibe-coder & full-cycle
operator. The site argues that a website is the surface; the value is the
operations, search visibility, AI visibility and structured data underneath.

Built with Next.js (App Router) and designed to be its own demo: perfect
structure, JSON-LD on itself, full hreflang, sitemap and `llms.txt`.

## Stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (dark theme by default, design tokens in `globals.css`)
- **next-intl** — i18n for `en / pl / ru / uk`, architecture scales to all EU
  languages (add a code in `src/i18n/routing.ts` + a `messages/<code>.json`)
- **framer-motion** — entrance animations
- **next-themes** — dark/light toggle
- SEO/AI infra: JSON-LD components, `sitemap.ts`, `robots.ts`, dynamic OG
  images (`next/og`), hreflang alternates, `public/llms.txt`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm start        # serve the production build
```

## Project structure

```
messages/                 # translations (en, pl, ru, uk)
src/
  app/
    [locale]/              # all pages live here (per-locale <html>)
      layout.tsx           # fonts, providers, header/footer, base JSON-LD
      page.tsx             # home (hero, manifesto, projects, metrics, under-the-hood)
      about/page.tsx       # full-cycle methodology
      contact/page.tsx     # contact channels
      projects/[slug]/     # 4 case studies
      opengraph-image.tsx  # dynamic OG image
    sitemap.ts             # multilingual sitemap with hreflang
    robots.ts              # robots (AI crawlers welcome)
  components/              # header, footer, hero, cards, ui, ...
  content/
    projects.ts           # structural project data (stack, schema, metrics)
    site.ts               # name, domain, contacts (PLACEHOLDERS)
  i18n/                   # next-intl routing, navigation, request config
  lib/seo.ts              # hreflang alternates helper
public/llms.txt           # machine-readable summary for AI assistants
```

## Editing content

- **Project narrative** (taglines, summaries, bullet lists, metric labels):
  `messages/<locale>.json` under `projects.<slug>`.
- **Project structure** (tech stack, schema types, metric values + source):
  `src/content/projects.ts`.
- **Contacts / name** (currently placeholders): `src/content/site.ts`.

## Metrics

Every metric is tagged with a `source` so it reads honestly:

- `allegro` — marketplace trust data (e.g. mnsk7-tools: 3500+ orders in 2025,
  383 reviews). This is marketplace data, not site traffic.
- `ops` — operational pipeline (sourcing, EAN/GTIN, product cards).
- `lighthouse` — Lighthouse / PageSpeed (placeholders marked with `isPlaceholder`).
- `gsc` — Google Search Console (impressions, clicks, positions).

Replace placeholder numbers (marked with an amber dot in the UI and
`isPlaceholder: true` in `projects.ts`) with real exports from Search Console
and PageSpeed Insights.

## Deploy

Deploy to **Vercel** (zero-config for Next.js):

1. Push the repo to GitHub.
2. Import it in Vercel.
3. Set the production domain to `mikitalashytski.com`.

Before going live, update `site.url` and contacts in `src/content/site.ts`.
