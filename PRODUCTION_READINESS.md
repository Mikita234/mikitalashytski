# Production readiness plan

## P0 — replace missing case screenshots

`src/content/projects.ts` already points to these files, but `public/cases/` currently contains only `README.md`. Add real WebP screenshots at the exact paths below.

### KAYER.PL

- `public/cases/kayer/shopify-home.webp` — Shopify home page, desktop, top viewport.
- `public/cases/kayer/baselinker.webp` — BaseLinker/order integration screen with sensitive data blurred.
- `public/cases/kayer/ua-notify.webp` — UA notification/payment/order flow proof with sensitive data blurred.

### MNSK7-TOOLS

- `public/cases/mnsk7-tools/home.webp` — live home page with product/category entry visible.
- `public/cases/mnsk7-tools/allegro.webp` — Allegro seller proof: rating/orders/Super Sprzedawca, sensitive data blurred.
- `public/cases/mnsk7-tools/category.webp` — product category/listing page with CNC tools visible.

### POPULAR POET / POPULAR TICKETS

- `public/cases/popular/vitrine.webp` — popularpoet.pl public page or event/course page.
- `public/cases/popular/tickets.webp` — ticketing checkout/admin/check-in flow, sensitive data blurred.
- `public/cases/popular/bot.webp` — Gemini event bot input/output: source text/photo to parsed event.

### ALESYA TAKUN

- `public/cases/alesyatakun/home.webp` — final homepage, desktop.
- `public/cases/alesyatakun/payment.webp` — payment flow or booking/payment block, sensitive data blurred.
- `public/cases/alesyatakun/mobile.webp` — mobile homepage or booking flow.

## P0 — replace placeholder metrics

Metrics marked `isPlaceholder: true` in `src/content/projects.ts` should be replaced with exported proof.

- KAYER.PL: migration duration, SKU count, manual work reduction, Lighthouse.
- KAYER.UA: Lighthouse.
- POPULAR POET: Lighthouse.
- ALESYA TAKUN: Lighthouse.
- POPULAR POET EVENT BOT: manual work reduction.

Required evidence:

- Lighthouse JSON or screenshot for live public URLs.
- GSC screenshots/exports for search traffic where claims mention organic/AI-search.
- Order/admin screenshots with private data blurred.
- Before/after operational screenshots for automation claims.

## P1 — SEO and entity polish

- Keep the public entity name as `Микита Лашицкий` in metadata, JSON-LD, OG image alt and `public/llms.txt`.
- Add real case screenshots before pushing more project traffic; screenshots are currently the biggest trust gap.
- Review every project page after screenshots are added: no broken image fallback should appear.
- Submit fresh sitemap in Google Search Console after the screenshot and content update.
- Check rendered metadata for `/`, `/guides`, `/pipeline`, `/projects/kayer-pl`, `/projects/popular`.

## P1 — internal links and conversion paths

- Keep guides linked in clusters:
  - launch checklist -> GSC -> form tracking -> internal linking
  - homepage SEO -> internal linking -> business-site pipeline
  - GBP -> GSC -> local marketing pipeline
- Add service CTAs from high-intent guides to `/order`.
- Keep `/pipeline/brief` linked from pipeline pages and relevant guides.
- Make sure every new guide has either explicit `related` links or useful tag overlap.

## P1 — production QA pass

Before the next serious release:

- Desktop and mobile screenshots for `/`, `/guides`, `/pipeline`, `/order`, `/projects/popular`.
- Test order/brief/contact forms end-to-end.
- Check Plausible/analytics script in production.
- Verify `/sitemap.xml`, `/robots.txt`, `/llms.txt`.
- Run `npm run lint` and `npm run build`.
- Inspect Vercel deployment output and route count.

## P2 — content backlog

Useful next articles:

- How to write a small-business service page that converts.
- How to structure project case studies with proof, not fluff.
- How to prepare screenshots for public case studies safely.
- How to connect GSC, Plausible and form events without GA4 complexity.
- How to decide between audit/rescue and full rebuild.

## Done criteria for production-grade case studies

A case is production-ready when it has:

- 2–3 real screenshots.
- At least one real metric with source.
- Clear before/after or problem/process/result.
- Working public link or clear explanation why live preview is disabled.
- No placeholder metric shown as confirmed.
- Internal links to one guide, one pipeline and one service/order CTA.
