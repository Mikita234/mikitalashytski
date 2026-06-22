# Human-first content audit

Verdict: First cleanup pass complete. The site is closer to production, but proof assets and several deeper service/project rewrites are still needed.

The site has useful substance: real projects, guides, service pages, pipelines and a working metadata system. The weak layer is wording: some titles and previews still talk like an internal builder/AI/SEO system instead of answering a visitor's question in plain language.

## Findings

| URL or file | Problem | Why it hurts | Suggested replacement | Priority |
| --- | --- | --- | --- | --- |
| `/` metadata, `messages/*.json` | Homepage preview used "digital builder / full-cycle operator". | A messenger preview should explain the offer without insider terms. | "websites, stores and automation for small business" style title. | P0 |
| `/` hero, `messages/fragments/home-*.json` | First screen used "working system" and "AI pipelines". | The visitor wants to know what they can get: site, store, bot, payments, SEO, automation. | Use concrete nouns: live website, store, bot, forms, payments, SEO. | P0 |
| `/pl/projects/*`, `/uk/projects/*` labels | Some project-page UI labels were still Russian. | Looks machine-generated and damages trust in localized pages. | Translate labels into Polish and Ukrainian. | P0 |
| `/guides` metadata, `src/content/pipeline.ts` | "Not blog posts / Не статьи" framed the page against its own format. | The visitor did open an article/guide page; this creates avoidable confusion. | "Guides for launch, SEO and automation". | P0 |
| `/guides` AI coding block, `src/content/guides.ts` | "Not random prompting, but system" pattern. | Classic fake-clever contrast headline; talks about positioning instead of outcome. | "Practical workflow for AI-assisted coding". | P1 |
| Layout structured data, `src/app/[locale]/layout.tsx` | Person jobTitle used "Digital builder & full-cycle operator". | Schema should describe the work in plain language because it can feed search and AI summaries. | "Websites, stores and automation builder". | P0 |
| MNSK7 case copy, `messages/*.json` | Case copy used "full cycle / pipeline" language for concrete ecommerce work. | The project is stronger when it names the actual work: sourcing, EAN/GTIN, listings, shop. | Replace jargon with concrete ecommerce operations. | P1 |
| Project case pages | Several metrics are still placeholders. | Claims need proof before they can carry SEO/trust weight. | Add real screenshots and source notes before strengthening claims. | P1 |
| Service pages | Some copy still uses workflow/rescue/AI visibility terms. | Terms are acceptable only when the sentence explains the practical result. | Rewrite per service around problem, deliverable, proof, next action. | P1 |
| Guides | Many guides are useful, but some mix English technical words into RU/UK/PL. | Mixed language can be fine for tools, but too much reads like draft copy. | Keep product/tool names; translate generic terms like workflow/path/checklist where possible. | P2 |

## Rewritten In This Pass

- Homepage metadata in EN/PL/RU/UK now says websites, stores and automation instead of "digital builder".
- Homepage first-screen copy now names deliverables: website, store, bot, forms, payments, SEO and automation.
- Project labels in Polish and Ukrainian were translated.
- `/guides` hub title was changed from "not articles" framing to plain guide positioning.
- AI coding roadmap title was changed to a practical workflow title.
- Person JSON-LD jobTitle now uses plain service language.
- MNSK7 case copy now names sourcing, EAN/GTIN, product cards, Allegro listings and website work.
- `www.mikitalashytski.com` redirects to the apex domain again.

## Phrases Still Watchlisted

- rescue, when used without context
- visibility, when not tied to Google/Search Console/AI search
- pipeline, when used as a generic synonym for process
- not X, but Y
- under the hood / under the cover, when it delays the point
- AI-assisted, when the practical workflow is not explained

## Titles To Review Next

- Service page titles and descriptions.
- `/pipeline` hub title and cards.
- `/pipeline/stacks`.
- `/pipeline/brief`.
- AI coding roadmap block on `/guides`.
- Project card taglines with "system", "infrastructure", "pipeline".
- Audit/rescue service page.
- Automation service page.
- Case-study proof guide after screenshots are added.

## Missing Proof

- Case screenshots under `public/cases/`.
- Lighthouse evidence for pages that claim performance.
- GSC screenshots/exports for organic search and AI-search claims.
- Before/after screenshots for automation claims.
- Source dates for metrics that are currently marked as estimated or placeholder.
- Messenger preview screenshots for home, `/ru/guides`, service pages and 2-3 guide pages after deployment cache settles.
- Real KAYER screenshots: product page, collection page, BaseLinker sync view, localized UA delivery/notify flow.
- Real MNSK7 screenshots: Allegro seller/orders/reviews, product card with EAN/GTIN, GSC performance, shop category page.

## Internal Link Notes

- Guide cluster graph is connected.
- High-intent guides should keep linking to `/order` or a relevant service page.
- Project pages should link to one related guide and one order/service route once screenshots are added.
- Service pages should link to proof pages where the case has screenshots.

## Next Rewrite Brief

Continue page by page in this order:

1. Service pages.
2. Pipeline hub pages.
3. Project cards and project summaries.
4. Guide hub support blocks.
5. Long guide intros and CTAs.
6. Proof-backed case study pages after screenshots are available.

For each page: keep the personality, remove self-referential framing, make the first sentence answer what the visitor gets, and do not strengthen claims without proof.
