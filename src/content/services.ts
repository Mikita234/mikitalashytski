import { packageIds, packageMeta } from "./selling";

export const servicePackages = packageIds.map((id) => ({
  id,
  ...packageMeta[id],
}));

export const pricingTiers = [
  { service: "Fast landing", from: "1 500", to: "3 000", unit: "PLN" },
  { service: "Project website", from: "3 000", to: "7 000", unit: "PLN" },
  { service: "E-commerce / store", from: "5 000", to: "15 000", unit: "PLN" },
  { service: "Automation / bots", from: "2 000", to: "8 000", unit: "PLN" },
  { service: "Website audit", from: "500", to: "900", unit: "PLN" },
] as const;

type ServiceFaq = { q: string; a: string };

export const servicePages = [
  {
    slug: "landing",
    title: "Fast landing pages",
    headline: "One strong page to test an idea, service or campaign",
    problem:
      "You need to validate demand or launch a campaign fast — without a month of development or a generic template.",
    solution:
      "One focused landing: clear offer, trust signals, contact form, analytics. Live in days.",
    includes: [
      "Single high-conversion page",
      "Offer structure and copy framework",
      "Contact form + Telegram hook",
      "Mobile-first responsive layout",
      "Basic SEO and analytics",
      "Deploy to your domain",
    ],
    examples: ["KAYER PL", "MNSK7-TOOLS", "Alesya Takun"],
    priceFrom: "1 500 PLN",
    timeline: "3–7 days",
    cta: "Order landing",
    faq: [
      {
        q: "How fast can we launch?",
        a: "Most landings go live in 3–7 days after we agree on the offer and content.",
      },
      {
        q: "Do I need ready copy?",
        a: "Raw notes are fine — I structure the page and suggest improvements.",
      },
      {
        q: "Can we add more pages later?",
        a: "Yes — landings often grow into full business sites.",
      },
    ] satisfies ServiceFaq[],
  },
  {
    slug: "business",
    title: "Business & project websites",
    headline: "Multi-page site for a business, studio or service brand",
    problem:
      "Your business lives on social or an outdated site — no trust, no booking, no multilingual reach, weak SEO.",
    solution:
      "A structured multi-page site with services, payments, translations and search-ready architecture.",
    includes: [
      "Site structure and key pages",
      "Services / about / contact flows",
      "CMS or content workflow",
      "Contact forms and integrations",
      "SEO base + schema.org",
      "i18n when needed (PL / UA / RU / EN)",
    ],
    examples: ["Alesya Takun", "Popular Poet"],
    priceFrom: "3 000 PLN",
    timeline: "1–3 weeks",
    cta: "Show your project",
    faq: [
      {
        q: "Do you work with existing brands?",
        a: "Yes — I adapt to your visual language or help shape one.",
      },
      {
        q: "Can you add online payments?",
        a: "Yes — booking and payment flows are a common part of business sites.",
      },
      {
        q: "Multilingual from day one?",
        a: "We can launch one language first and add locales without rebuilding.",
      },
    ] satisfies ServiceFaq[],
  },
  {
    slug: "ecommerce",
    title: "E-commerce setup & migration",
    headline: "Shop, migration and ops wired for sales",
    problem:
      "Catalog chaos, manual updates, marketplace and site out of sync — migration feels risky.",
    solution:
      "Shopify or WooCommerce setup/migration, BaseLinker sync, payments, shipping and content automation.",
    includes: [
      "Store setup or migration",
      "Product pages and collections",
      "Payments and shipping rules",
      "BaseLinker / marketplace sync",
      "Multilingual catalog content",
      "SEO and structured data base",
    ],
    examples: ["KAYER PL", "KAYER UA", "MNSK7-TOOLS"],
    priceFrom: "5 000 PLN",
    timeline: "2–6 weeks",
    cta: "Review your store",
    faq: [
      {
        q: "Shopify or WooCommerce?",
        a: "Depends on your ops — I recommend after reviewing catalog size and integrations.",
      },
      {
        q: "Can you migrate without downtime?",
        a: "We plan cutover windows and test sync before switching traffic.",
      },
      {
        q: "Do you handle BaseLinker?",
        a: "Yes — catalog sync and ops automation are core to my e-commerce work.",
      },
    ] satisfies ServiceFaq[],
  },
  {
    slug: "automation",
    title: "Automation, bots & internal tools",
    headline: "Scripts and workflows that remove manual work",
    problem:
      "Content, leads and reports are done by hand — slow, error-prone, doesn't scale.",
    solution:
      "Telegram bots, publishing pipelines, API integrations, admin panels and AI-assisted workflows.",
    includes: [
      "Telegram bots for leads or ops",
      "Auto-publishing: input → pages → ping",
      "Google Sheets / email / CRM hooks",
      "AI parsing (Gemini / OpenAI)",
      "Simple admin panel or commands",
      "Documentation for your team",
    ],
    examples: ["Popular Poet Event Bot", "KAYER Python automation", "BaseLinker Reports"],
    priceFrom: "2 000 PLN",
    timeline: "3–14 days",
    cta: "Describe the workflow",
    faq: [
      {
        q: "What's a typical automation project?",
        a: "Weekly event publishing, lead bots, catalog updates, or internal reporting dashboards.",
      },
      {
        q: "Do I need a developer on my side?",
        a: "No — I deliver working scripts, deploy and hand off instructions.",
      },
      {
        q: "Can automation connect to my existing site?",
        a: "Yes — most workflows plug into Shopify, WordPress, Next.js or BaseLinker.",
      },
    ] satisfies ServiceFaq[],
  },
  {
    slug: "audit",
    title: "Website rescue & audit",
    headline: "Quick audit for old sites — UX, SEO, speed, AI visibility",
    problem:
      "Site looks outdated, converts poorly, doesn't show up in Google or AI answers — rebuild feels expensive.",
    solution:
      "Structured audit with prioritized fixes, impact estimate and optional rescue plan before a full rebuild.",
    includes: [
      "Site and UX review",
      "Technical SEO check",
      "Speed and mobile audit",
      "AI visibility (schema, llms.txt)",
      "Prioritized fix list",
      "Impact estimate and next steps",
    ],
    examples: ["Lead Hunting pipeline", "Legacy WooCommerce stores"],
    priceFrom: "500 PLN",
    timeline: "2–5 days",
    cta: "Request audit",
    faq: [
      {
        q: "What do I get for 500 PLN?",
        a: "A written audit with UX, SEO, speed and AI visibility findings plus a prioritized action list.",
      },
      {
        q: "Is this only for old WordPress sites?",
        a: "Any stack — WordPress, Shopify, custom Next.js, landing pages.",
      },
      {
        q: "Can you fix issues after the audit?",
        a: "Yes — audit often leads to a landing rescue or full rebuild quote.",
      },
    ] satisfies ServiceFaq[],
  },
  {
    slug: "creative",
    title: "Creative & event projects",
    headline: "Site and automation for courses, studios and events",
    problem:
      "Project lives on Instagram — no domain, no tickets, no SEO, manual weekly publishing.",
    solution:
      "Showcase + sales + bot for publishing. Niche proof of flexibility — see Popular Poet.",
    includes: [
      "Showcase + checkout / registration",
      "Schedule and multilingual content",
      "Telegram bot for publishing",
      "SEO and AI visibility",
      "Admin and check-in tools",
    ],
    examples: ["Popular Poet / PopularTickets", "Event Bot"],
    priceFrom: "3 000 PLN",
    timeline: "1–4 weeks",
    cta: "Discuss your project",
    faq: [
      {
        q: "Is this your main offer?",
        a: "Core offers are landings, e-commerce and automation — events are a proven niche case.",
      },
      {
        q: "Can you automate weekly event posts?",
        a: "Yes — photo + text → structured pages → search ping is a pattern I ship.",
      },
    ] satisfies ServiceFaq[],
  },
] as const;

export type ServiceSlug = (typeof servicePages)[number]["slug"];

export function getService(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

export const serviceSlugs = servicePages.map((s) => s.slug);
