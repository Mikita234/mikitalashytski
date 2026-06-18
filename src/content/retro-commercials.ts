import { site } from "./site";

export type CommercialEra = "80s" | "90s" | "2000s";

export type VisualStyle =
  | "starburst"
  | "gradient-90s"
  | "y2k-chrome"
  | "infomercial"
  | "case-spot";

export interface RetroCommercial {
  id: string;
  era: CommercialEra;
  headline: string;
  subline: string;
  cta: string;
  ctaHref: string;
  price?: string;
  visualStyle: VisualStyle;
  duration: number;
}

export const retroCommercials: RetroCommercial[] = [
  {
    id: "landing",
    era: "80s",
    headline: "NEED A WEBSITE FOR YOUR BUSINESS?",
    subline: "Professional landing pages — live in days, not months.",
    cta: "CALL NOW",
    ctaHref: "/order",
    price: "FROM 2 500 PLN",
    visualStyle: "starburst",
    duration: 12000,
  },
  {
    id: "ecommerce",
    era: "90s",
    headline: "TIRED OF MANUAL E-COMMERCE?",
    subline: "Shopify · BaseLinker · payments — one connected system.",
    cta: "ORDER BUILD",
    ctaHref: "/order",
    price: "AUTOMATE TODAY",
    visualStyle: "gradient-90s",
    duration: 13000,
  },
  {
    id: "bots",
    era: "90s",
    headline: "TELEGRAM BOTS THAT WORK WHILE YOU SLEEP",
    subline: "Orders, support, notifications — 24/7 automation.",
    cta: "GET YOUR BOT",
    ctaHref: "/order",
    visualStyle: "gradient-90s",
    duration: 11000,
  },
  {
    id: "multilingual",
    era: "2000s",
    headline: "YOUR SHOP SPEAKS 3 LANGUAGES",
    subline: "PL · UA · EN content, SEO and checkout — one site.",
    cta: "START NOW",
    ctaHref: "/order",
    visualStyle: "y2k-chrome",
    duration: 12000,
  },
  {
    id: "audit",
    era: "80s",
    headline: "WEBSITE RESCUE AUDIT",
    subline: "Broken checkout? Slow pages? I'll find what's wrong.",
    cta: "BOOK AUDIT",
    ctaHref: "/order?service=audit",
    price: "ONLY 500 PLN",
    visualStyle: "infomercial",
    duration: 14000,
  },
  {
    id: "kayer",
    era: "90s",
    headline: "CASE SPOT: KAYER MIGRATION",
    subline: "Full store rebuild — Shopify, Allegro sync, new brand site.",
    cta: "SEE CASE",
    ctaHref: "/projects/kayer-pl",
    visualStyle: "case-spot",
    duration: 13000,
  },
  {
    id: "popular",
    era: "2000s",
    headline: "CASE SPOT: POPULAR POET TICKETS",
    subline: "Live ticketing · AI bot · 3 languages · weekly events.",
    cta: "VIEW PROJECT",
    ctaHref: "/projects/popular",
    visualStyle: "case-spot",
    duration: 12000,
  },
  {
    id: "telegram-cta",
    era: "80s",
    headline: "CALL NOW — DON'T WAIT!",
    subline: `Telegram ${site.telegramHandle} · Fast reply · Real builds.`,
    cta: "MESSAGE NOW",
    ctaHref: "/contact",
    price: "FREE CONSULT",
    visualStyle: "starburst",
    duration: 10000,
  },
];
