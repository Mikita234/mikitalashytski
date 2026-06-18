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

/** Featured on homepage — 4 flagships */
export const vintageWorksHome = vintageWorkEntries.filter((w) =>
  ["kayer-pl", "kayer-ua", "popular", "mnsk7-tools"].includes(w.slug),
);

export const vintageWorks = vintageWorkEntries;

export const crtProjectChannels = [
  { slug: "kayer-pl" as const, label: "KAYER PL", href: "/projects/kayer-pl" },
  { slug: "kayer-ua" as const, label: "KAYER UA", href: "/projects/kayer-ua" },
  { slug: "popular" as const, label: "POET", href: "/projects/popular" },
  { slug: "mnsk7-tools" as const, label: "MNSK7", href: "/projects/mnsk7-tools" },
] as const;

export const vintagePopups = [
  { id: "1", title: "website.exe", text: "website.exe is running" },
  { id: "2", title: "vibe.sys", text: "old internet mode enabled" },
] as const;

export const crtStates = [
  { id: "terminal", type: "terminal" as const },
  { id: "nosignal", type: "nosignal" as const },
  { id: "building", type: "building" as const },
  { id: "order", type: "order" as const },
  { id: "grid", type: "grid" as const },
  { id: "teletext", type: "teletext" as const },
  { id: "win98", type: "win98" as const },
  { id: "rewind", type: "rewind" as const },
] as const;

export const vintageUnderHoodSpecs = [
  { label: "RENDER", value: "STATIC SSG", bg: "#f00", fg: "#fff" },
  { label: "LOCALES", value: "EN PL RU UA", bg: "#ff0", fg: "#000" },
  { label: "JSON-LD", value: "ACTIVE", bg: "#0f0", fg: "#000" },
  { label: "LLMS.TXT", value: "PUBLIC", bg: "#f0f", fg: "#fff" },
  { label: "AI BOTS", value: "ALLOWED", bg: "#00f", fg: "#fff" },
  { label: "MOTION", value: "REDUCED OK", bg: "#333", fg: "#ccc" },
] as const;
