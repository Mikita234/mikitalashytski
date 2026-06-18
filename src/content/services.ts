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

/** Structural metadata — all copy lives in messages/fragments/services-{locale}.json */
export const serviceMeta = {
  landing: {
    priceFrom: "1 500 PLN",
    timeline: "3–7 days",
    caseSlug: "alesyatakun",
  },
  business: {
    priceFrom: "3 000 PLN",
    timeline: "1–3 weeks",
    caseSlug: "popular",
  },
  ecommerce: {
    priceFrom: "5 000 PLN",
    timeline: "2–6 weeks",
    caseSlug: "kayer-pl",
  },
  automation: {
    priceFrom: "2 000 PLN",
    timeline: "3–14 days",
    caseSlug: "event-bot",
  },
  audit: {
    priceFrom: "500 PLN",
    timeline: "2–5 days",
    caseSlug: "lead-scraping",
  },
  creative: {
    priceFrom: "3 000 PLN",
    timeline: "1–4 weeks",
    caseSlug: "popular",
  },
} as const;

export type ServiceSlug = keyof typeof serviceMeta;

export const serviceSlugs = Object.keys(serviceMeta) as ServiceSlug[];

export function getServiceMeta(slug: string) {
  if (slug in serviceMeta) {
    return serviceMeta[slug as ServiceSlug];
  }
  return undefined;
}

/** @deprecated use getServiceMeta — kept for sitemap imports */
export const servicePages = serviceSlugs.map((slug) => ({ slug }));
export function getService(slug: string) {
  return getServiceMeta(slug) ? { slug } : undefined;
}
