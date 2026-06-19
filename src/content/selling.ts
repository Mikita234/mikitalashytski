/** Structural selling config — copy lives in messages/home-*.json */

export const sellNav = [
  { href: "/", key: "home" },
  { href: "/works", key: "works" },
  { href: "/pipeline", key: "pipeline" },
  { href: "/guides", key: "guides" },
  { href: "/#packages", key: "packages" },
  { href: "/about", key: "approach" },
  { href: "/order", key: "order" },
] as const;

export const packageIds = [
  "landing",
  "business",
  "ecommerce",
  "automation",
  "audit",
] as const;

export type PackageId = (typeof packageIds)[number];

export const packageMeta: Record<
  PackageId,
  { tag: string; href: string; priceFromPln: number; timelineKey: string }
> = {
  landing: {
    tag: "PKG-01",
    href: "/services/landing",
    priceFromPln: 1500,
    timelineKey: "landing",
  },
  business: {
    tag: "PKG-02",
    href: "/services/business",
    priceFromPln: 3000,
    timelineKey: "business",
  },
  ecommerce: {
    tag: "PKG-03",
    href: "/services/ecommerce",
    priceFromPln: 5000,
    timelineKey: "ecommerce",
  },
  automation: {
    tag: "PKG-04",
    href: "/services/automation",
    priceFromPln: 2000,
    timelineKey: "automation",
  },
  audit: {
    tag: "PKG-05",
    href: "/services/audit",
    priceFromPln: 500,
    timelineKey: "audit",
  },
};

export const workCategories = [
  "all",
  "ecommerce",
  "automation",
  "websites",
  "bots",
  "internal",
  "ai",
] as const;

export type WorkCategory = (typeof workCategories)[number];

export const stackItems = [
  "Next.js",
  "Shopify",
  "WordPress",
  "WooCommerce",
  "BaseLinker",
  "Supabase",
  "Python",
  "OpenAI",
  "Gemini",
  "Telegram Bot API",
  "Przelewy24",
  "Resend",
  "SQLite",
  "Vercel",
] as const;

export const orderServiceKeys = [
  "landing",
  "business",
  "ecommerce",
  "automation",
  "bot",
  "audit",
  "internal",
  "notSure",
] as const;

export const orderBudgetKeys = [
  "up1500",
  "1500_3000",
  "3000_7000",
  "7000plus",
  "monthly",
  "unknown",
] as const;

export const orderTimelineKeys = [
  "urgent",
  "1_2weeks",
  "2_4weeks",
  "flexible",
] as const;
