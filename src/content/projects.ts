// Structural, language-neutral data for each project.
// All narrative text (tagline, summary, bullet lists, metric labels) lives in
// messages/<locale>.json under `projects.<slug>` so it can be translated.
// Values here (stack lists, metric numbers, schema types) are editable:
// numbers marked `isPlaceholder` should be replaced with real GSC / Lighthouse
// exports. Metrics tagged `allegro` / `ops` are real marketplace/operational data.

export type MetricSource =
  | "gsc" // Google Search Console
  | "lighthouse" // Lighthouse / PageSpeed
  | "allegro" // Allegro marketplace (trust block, not site traffic)
  | "ops" // operational pipeline (sourcing, EAN/GTIN, product cards)
  | "schema" // structured data
  | "analytics"; // GA4 / Plausible

export type AccentKey = "violet" | "amber" | "cyan" | "rose";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Metric {
  /** Translation key under `projects.<slug>.metrics` */
  key: string;
  value: string;
  source: MetricSource;
  isPlaceholder?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  domains: string[];
  links: ProjectLink[];
  accent: AccentKey;
  year: string;
  /** number of localized bullets in each list, used to render via t.raw */
  stack: string[];
  schema: string[];
  metrics: Metric[];
  /** counts of bullet arrays defined in messages (for type-safe rendering) */
  lists: ("role" | "ops" | "integrations" | "seo" | "ai")[];
  /** Optional screenshot paths under /public/cases/<slug>/ */
  screenshots?: string[];
  /** false = no public URL for live frame */
  hasLivePreview?: boolean;
  /** Optional case-study blocks rendered from messages */
  caseStudyBlocks?: ("beforeAfter" | "systemFlow")[];
}

export const projects: Project[] = [
  {
    slug: "kayer-pl",
    name: "KAYER.PL",
    domains: ["kayer.pl"],
    links: [{ label: "kayer.pl", href: "https://kayer.pl" }],
    accent: "violet",
    year: "2024 — now",
    stack: [
      "Shopify",
      "WooCommerce / WordPress (legacy)",
      "Shopify theme (Liquid)",
      "BaseLinker",
      "OpenAI API",
      "Python automation",
      "InPost / DHL / DPD",
      "i18n PL / EN",
    ],
    schema: [
      "Organization",
      "WebSite",
      "Product",
      "Offer",
      "AggregateRating",
      "Review",
      "BreadcrumbList",
    ],
    metrics: [
      { key: "migration", value: "~6 wks", source: "ops", isPlaceholder: true },
      { key: "integrations", value: "5+", source: "ops" },
      { key: "skus", value: "300+", source: "ops", isPlaceholder: true },
      { key: "manual", value: "−70%", source: "ops", isPlaceholder: true },
      { key: "lighthouse", value: "95+", source: "lighthouse", isPlaceholder: true },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    caseStudyBlocks: ["beforeAfter", "systemFlow"],
    screenshots: [
      "/cases/kayer/shopify-home.webp",
      "/cases/kayer/baselinker.webp",
    ],
  },
  {
    slug: "kayer-ua",
    name: "KAYER.UA",
    domains: ["kayer.ua"],
    links: [{ label: "kayer.ua", href: "https://kayer.ua" }],
    accent: "violet",
    year: "2024 — now",
    stack: [
      "Shopify",
      "BaseLinker",
      "OpenAI API",
      "Python automation",
      "Flu.io",
      "Dilovod",
      "Nova Poshta",
      "i18n UA / EN",
    ],
    schema: [
      "Organization",
      "WebSite",
      "Product",
      "Offer",
      "AggregateRating",
      "Review",
      "BreadcrumbList",
    ],
    metrics: [
      { key: "market", value: "UA", source: "ops" },
      { key: "integrations", value: "4", source: "ops" },
      { key: "notify", value: "live", source: "ops" },
      { key: "partners", value: "active", source: "ops" },
      { key: "lighthouse", value: "95+", source: "lighthouse", isPlaceholder: true },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    caseStudyBlocks: ["beforeAfter", "systemFlow"],
    screenshots: ["/cases/kayer/ua-notify.webp"],
  },
  {
    slug: "mnsk7-tools",
    name: "MNSK7-TOOLS",
    domains: ["mnsk7-tools.pl"],
    links: [
      { label: "mnsk7-tools.pl", href: "https://mnsk7-tools.pl" },
      { label: "Allegro", href: "https://allegro.pl" },
    ],
    accent: "amber",
    year: "2024 — now",
    stack: [
      "Next.js",
      "TypeScript",
      "Allegro API",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel",
    ],
    schema: [
      "Organization",
      "Product",
      "Offer",
      "AggregateRating",
      "Review",
      "BreadcrumbList",
    ],
    metrics: [
      { key: "orders", value: "3 500+", source: "allegro" },
      { key: "reviews", value: "383", source: "allegro" },
      { key: "skus", value: "425", source: "ops" },
      { key: "ean", value: "100%", source: "ops" },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    caseStudyBlocks: ["beforeAfter", "systemFlow"],
    screenshots: [
      "/cases/mnsk7-tools/home.webp",
      "/cases/mnsk7-tools/allegro.webp",
      "/cases/mnsk7-tools/category.webp",
    ],
  },
  {
    slug: "popular",
    name: "POPULAR POET",
    domains: ["popularpoet.pl", "populartickets.pl"],
    links: [
      { label: "popularpoet.pl", href: "https://popularpoet.pl" },
      { label: "populartickets.pl", href: "https://populartickets.pl" },
    ],
    accent: "cyan",
    year: "2025 — now",
    stack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Vercel",
      "Resend",
      "i18n (PL / UA / RU)",
      "Admin panel",
      "Check-in system",
      "Gemini API (free tier)",
      "Event parsing bot",
      "Bing IndexNow / ping",
      "Tailwind CSS",
    ],
    schema: [
      "LocalBusiness",
      "Course",
      "Event",
      "Offer",
      "FAQPage",
      "BreadcrumbList",
    ],
    metrics: [
      { key: "sites", value: "2", source: "ops" },
      { key: "eventsPerWeek", value: "4", source: "ops" },
      { key: "langs", value: "3", source: "ops" },
      { key: "aiSales", value: "2 wks", source: "analytics" },
      { key: "ticketing", value: "own", source: "ops" },
      { key: "checkin", value: "live", source: "ops" },
      { key: "lighthouse", value: "95+", source: "lighthouse", isPlaceholder: true },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    caseStudyBlocks: ["beforeAfter", "systemFlow"],
    screenshots: [
      "/cases/popular/vitrine.webp",
      "/cases/popular/tickets.webp",
      "/cases/popular/bot.webp",
    ],
  },
  {
    slug: "alesyatakun",
    name: "ALESYA TAKUN",
    domains: ["alesyatakun.by"],
    links: [{ label: "alesyatakun.by", href: "https://alesyatakun.by" }],
    accent: "rose",
    year: "2025 — now",
    stack: [
      "Next.js",
      "TypeScript",
      "Alfa-Bank payments (3-D Secure)",
      "Tailwind CSS",
      "Vercel",
    ],
    schema: [
      "Person",
      "MedicalBusiness",
      "Service",
      "Offer",
      "FAQPage",
      "BreadcrumbList",
    ],
    metrics: [
      { key: "payments", value: "3-D Secure", source: "ops" },
      { key: "freepay", value: "BYN", source: "ops" },
      { key: "formats", value: "2", source: "ops" },
      { key: "lighthouse", value: "95+", source: "lighthouse", isPlaceholder: true },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    caseStudyBlocks: ["beforeAfter", "systemFlow"],
    screenshots: [
      "/cases/alesyatakun/home.webp",
      "/cases/alesyatakun/payment.webp",
      "/cases/alesyatakun/mobile.webp",
    ],
  },
  {
    slug: "event-bot",
    name: "POPULAR POET EVENT BOT",
    domains: ["popularpoet.pl", "populartickets.pl"],
    links: [
      { label: "Popular Poet case", href: "/projects/popular" },
      { label: "popularpoet.pl", href: "https://popularpoet.pl" },
    ],
    accent: "cyan",
    year: "2025 — now",
    stack: [
      "Gemini API (free tier)",
      "Event parsing bot",
      "Next.js CMS",
      "Bing IndexNow / ping",
      "Webhooks",
    ],
    schema: ["SoftwareApplication", "Event"],
    metrics: [
      { key: "eventsPerWeek", value: "4", source: "ops" },
      { key: "flow", value: "auto", source: "ops" },
      { key: "steps", value: "5", source: "ops" },
      { key: "manual", value: "−80%", source: "ops", isPlaceholder: true },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    hasLivePreview: false,
  },
  {
    slug: "lead-scraping",
    name: "LEAD HUNTING",
    domains: [],
    links: [],
    accent: "violet",
    year: "2025",
    stack: [
      "Python",
      "Web scraping",
      "Lighthouse API",
      "Email outreach",
      "Scoring pipeline",
    ],
    schema: ["SoftwareApplication"],
    metrics: [
      { key: "audit", value: "auto", source: "ops" },
      { key: "score", value: "0–100", source: "ops" },
      { key: "outreach", value: "email", source: "ops" },
      { key: "pipeline", value: "live", source: "ops" },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    hasLivePreview: false,
  },
  {
    slug: "astrologichnaya",
    name: "ASTROLOGICHNAYA",
    domains: [],
    links: [],
    accent: "rose",
    year: "2025",
    stack: ["Next.js", "Branding", "Tailwind CSS", "Visual design"],
    schema: ["Person", "WebSite"],
    metrics: [
      { key: "brand", value: "full", source: "ops" },
      { key: "web", value: "WIP", source: "ops" },
      { key: "style", value: "custom", source: "ops" },
      { key: "launch", value: "soon", source: "ops" },
    ],
    lists: ["role", "ops", "integrations", "seo", "ai"],
    hasLivePreview: false,
  },
];

export const projectSlugs = projects.map((p) => p.slug);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const accentClasses: Record<
  AccentKey,
  { text: string; ring: string; glow: string; gradient: string; dot: string }
> = {
  violet: {
    text: "text-violet-300",
    ring: "ring-violet-500/30",
    glow: "shadow-[0_0_60px_-15px_rgba(139,92,246,0.6)]",
    gradient: "from-violet-500 to-fuchsia-500",
    dot: "bg-violet-400",
  },
  amber: {
    text: "text-amber-300",
    ring: "ring-amber-500/30",
    glow: "shadow-[0_0_60px_-15px_rgba(245,158,11,0.6)]",
    gradient: "from-amber-400 to-orange-500",
    dot: "bg-amber-400",
  },
  cyan: {
    text: "text-cyan-300",
    ring: "ring-cyan-500/30",
    glow: "shadow-[0_0_60px_-15px_rgba(34,211,238,0.6)]",
    gradient: "from-cyan-400 to-sky-500",
    dot: "bg-cyan-400",
  },
  rose: {
    text: "text-rose-300",
    ring: "ring-rose-500/30",
    glow: "shadow-[0_0_60px_-15px_rgba(244,63,94,0.6)]",
    gradient: "from-rose-400 to-pink-500",
    dot: "bg-rose-400",
  },
};
