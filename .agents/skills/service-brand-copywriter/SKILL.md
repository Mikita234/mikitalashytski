---
name: service-brand-copywriter
description: Rewrite, edit, audit, or localize website copy for Mikita Lashytski’s web-development studio in English, Polish, Russian, and Ukrainian. Use for homepage, service, case-study, guide, pipeline, navigation, CTA, form, metadata, and microcopy work; for removing generic AI phrasing; and whenever the site-copy corpus or brand voice needs updating.
---

# Service Brand Copywriter

Write like an experienced small web studio that explains its work clearly. Make every sentence earn its place through a fact, useful distinction, concrete deliverable, decision criterion, or next action.

## Workflow

1. Read `references/voice.md` before editing public copy.
2. Run `node .agents/skills/service-brand-copywriter/scripts/build-copy-corpus.mjs` when the corpus is missing or source copy changed.
3. Search `content/site-copy.json` by page, phrase, locale, or source. Load the relevant slice rather than the full corpus.
4. Identify the page’s reader, business question, evidence, offer, and next action.
5. Rewrite the source files for each locale independently. Preserve meaning, facts, prices, URLs, analytics keys, interpolation variables, and JSON shape.
6. Run `node .agents/skills/service-brand-copywriter/scripts/audit-copy.mjs` and review every reported phrase in the edited scope.
7. Regenerate the corpus, run lint and the production build, then commit one coherent page or section batch.

## Editorial decisions

- Lead with the actual service, result, or answer.
- Prefer concrete nouns and verbs over mood-setting language.
- State scope, timing, price logic, inputs, limitations, and ownership plainly.
- Use evidence already present in the repository. Label estimates as estimates.
- Keep one primary action per section. Name the action literally.
- Write natural local copy. Rebuild each sentence for EN, PL, RU, and UK instead of translating its syntax.
- Use affirmative phrasing. Reserve negation for a necessary boundary, safety point, or factual limitation.
- Keep SEO/AEO articles at 300–400 useful words per locale when that page format requires it. Put a direct answer in the opening paragraph and use questions only when readers genuinely ask them.

## Quality gate

Reject copy that could belong to any agency after changing the company name. Reject slogans that hide the deliverable. Reject forced friendliness, invented urgency, false binaries, filler transitions, and unexplained English terms in Polish, Russian, or Ukrainian.

Before approval, answer:

- What exactly is being offered?
- Who is it for?
- What will be delivered?
- Which fact supports the claim?
- What should the reader do next?
- Does each locale sound originally written in that language?

## Resources

- `references/voice.md` contains the voice, banned patterns, page formulas, and locale notes.
- `scripts/build-copy-corpus.mjs` builds `content/site-copy.json` from message files and localized TypeScript content.
- `scripts/audit-copy.mjs` reports recurring AI-style phrases for editorial review.
