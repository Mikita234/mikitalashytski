import { sellNav, type WorkCategory } from "./selling";

export { sellNav };

export type ProjectStatus = "LIVE" | "EXPERIMENT" | "SOLD" | "IN PROGRESS";

export type VintageWorkEntry = {
  slug: string;
  category: WorkCategory;
  tags: readonly string[];
  status: ProjectStatus;
  href: string;
  style: "vhs" | "tv" | "teletext" | "win98" | "ad";
  domain: string;
};

const vintageWorkEntries: VintageWorkEntry[] = [
  {
    slug: "kayer-pl",
    category: "ecommerce",
    tags: ["Shopify", "BaseLinker", "OpenAI", "Python", "WooCommerce"],
    status: "LIVE",
    href: "/projects/kayer-pl",
    style: "vhs",
    domain: "kayer.pl",
  },
  {
    slug: "kayer-ua",
    category: "ecommerce",
    tags: ["Shopify", "Flu.io", "Nova Poshta", "Dilovod", "i18n UA"],
    status: "LIVE",
    href: "/projects/kayer-ua",
    style: "vhs",
    domain: "kayer.ua",
  },
  {
    slug: "diloshop-checkout",
    category: "ecommerce",
    tags: ["Checkout", "Shopify", "Dilovod", "LiqPay", "Operations"],
    status: "LIVE",
    href: "/projects/diloshop-checkout",
    style: "vhs",
    domain: "checkout.kayer.ua",
  },
  {
    slug: "mnsk7-tools",
    category: "ecommerce",
    tags: ["Marketplace", "Ops", "Allegro", "E-commerce"],
    status: "LIVE",
    href: "/projects/mnsk7-tools",
    style: "tv",
    domain: "mnsk7-tools.pl",
  },
  {
    slug: "popular",
    category: "automation",
    tags: ["Next.js", "Supabase", "Gemini", "Ticketing", "i18n"],
    status: "LIVE",
    href: "/projects/popular",
    style: "teletext",
    domain: "popularpoet.pl",
  },
  {
    slug: "alesyatakun",
    category: "websites",
    tags: ["Payments", "Medical", "Brand", "Next.js"],
    status: "LIVE",
    href: "/projects/alesyatakun",
    style: "ad",
    domain: "alesyatakun.by",
  },
  {
    slug: "ideaactors",
    category: "websites",
    tags: ["Next.js", "i18n", "Local SEO", "Booking"],
    status: "LIVE",
    href: "https://ideaactors.pl",
    style: "ad",
    domain: "ideaactors.pl",
  },
  {
    slug: "flexiprzeprowadzki",
    category: "websites",
    tags: ["Local SEO", "Calculator", "Lead flow", "Next.js"],
    status: "LIVE",
    href: "https://flexiprzeprowadzki.pl",
    style: "tv",
    domain: "flexiprzeprowadzki.pl",
  },
  {
    slug: "velixo",
    category: "websites",
    tags: ["Next.js", "B2B", "Service SEO", "Lead flow"],
    status: "LIVE",
    href: "https://velixo-five.vercel.app/",
    style: "teletext",
    domain: "velixo-five.vercel.app",
  },
  {
    slug: "event-bot",
    category: "bots",
    tags: ["Gemini", "Automation", "Bing ping", "Popular Poet"],
    status: "LIVE",
    href: "/projects/event-bot",
    style: "win98",
    domain: "Gemini bot",
  },
  {
    slug: "lead-scraping",
    category: "ai",
    tags: ["Scraping", "SEO audit", "Outreach"],
    status: "EXPERIMENT",
    href: "/projects/lead-scraping",
    style: "vhs",
    domain: "pipeline",
  },
  {
    slug: "astrologichnaya",
    category: "websites",
    tags: ["Branding", "Design", "Web"],
    status: "IN PROGRESS",
    href: "/projects/astrologichnaya",
    style: "teletext",
    domain: "in progress",
  },
];

/** Featured on homepage — recent flagship builds */
export const vintageWorksHome = vintageWorkEntries.filter((w) =>
  [
    "ideaactors",
    "flexiprzeprowadzki",
    "velixo",
    "popular",
    "kayer-pl",
    "diloshop-checkout",
    "mnsk7-tools",
  ].includes(w.slug),
);

/** First commercial proof block: commerce, ticketing and local services. */
const proofHomeSlugs = ["kayer-pl", "popular", "ideaactors"] as const;

export const vintageProofHome = vintageWorkEntries.filter((work) =>
  proofHomeSlugs.some((slug) => slug === work.slug),
);

export const vintageWorksHomeArchive = vintageWorksHome.filter(
  (work) => !proofHomeSlugs.some((slug) => slug === work.slug),
);

export const vintageWorks = vintageWorkEntries;

export const crtProjectChannels = [
  { slug: "kayer-pl" as const, label: "KAYER PL", href: "/projects/kayer-pl" },
  { slug: "kayer-ua" as const, label: "KAYER UA", href: "/projects/kayer-ua" },
  { slug: "diloshop-checkout" as const, label: "CHECKOUT", href: "/projects/diloshop-checkout" },
  { slug: "popular" as const, label: "POET", href: "/projects/popular" },
  { slug: "mnsk7-tools" as const, label: "MNSK7", href: "/projects/mnsk7-tools" },
] as const;

export const vintagePopups = [
  { id: "1", title: "website.exe", text: "website.exe is running" },
  { id: "2", title: "vibe.sys", text: "old internet mode enabled" },
] as const;

/** CRT channel rotation — one full scene at a time, weighted durations */
export const crtChannels = [
  { id: "doom", type: "doom" as const, durationMs: 6000, chLabel: "E1M1" },
  { id: "terminal", type: "terminal" as const, durationMs: 1500, chLabel: "SYS" },
  { id: "project", type: "project" as const, durationMs: 1500, chLabel: "WORKS" },
  { id: "nosignal", type: "nosignal" as const, durationMs: 500, chLabel: "NO SIG" },
  { id: "win98", type: "win98" as const, durationMs: 500, chLabel: "WIN98" },
] as const;

export type CRTChannelType = typeof crtChannels[number]["type"];

export const vintageUnderHoodSpecs = [
  { label: "RENDER", value: "STATIC SSG", bg: "#c50000", fg: "#fff" },
  { label: "LOCALES", value: "EN PL RU UA", bg: "#ff0", fg: "#000" },
  { label: "JSON-LD", value: "ACTIVE", bg: "#0f0", fg: "#000" },
  { label: "LLMS.TXT", value: "PUBLIC", bg: "#880088", fg: "#fff" },
  { label: "AI BOTS", value: "ALLOWED", bg: "#00f", fg: "#fff" },
  { label: "MOTION", value: "REDUCED OK", bg: "#333", fg: "#ccc" },
] as const;
