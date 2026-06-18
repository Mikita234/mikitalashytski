import { packageIds, packageMeta } from "./selling";

export const servicePackages = packageIds.map((id) => ({
  id,
  ...packageMeta[id],
}));

export const pricingTiers = [
  { service: "Fast landing", from: "1 500", to: "3 000", fromPln: 1500, toPln: 3000 },
  { service: "Project website", from: "3 000", to: "7 000", fromPln: 3000, toPln: 7000 },
  { service: "E-commerce / store", from: "5 000", to: "15 000", fromPln: 5000, toPln: 15000 },
  { service: "Automation / bots", from: "2 000", to: "8 000", fromPln: 2000, toPln: 8000 },
  { service: "Website audit", from: "500", to: "900", fromPln: 500, toPln: 900 },
] as const;

/** Structural metadata — all copy lives in messages/fragments/services-{locale}.json */
export const serviceMeta = {
  landing: {
    priceFromPln: 1500,
    timeline: "3–7 days",
    caseSlug: "alesyatakun",
  },
  business: {
    priceFromPln: 3000,
    timeline: "1–3 weeks",
    caseSlug: "popular",
  },
  ecommerce: {
    priceFromPln: 5000,
    timeline: "2–6 weeks",
    caseSlug: "kayer-pl",
  },
  automation: {
    priceFromPln: 2000,
    timeline: "3–14 days",
    caseSlug: "event-bot",
  },
  audit: {
    priceFromPln: 500,
    timeline: "2–5 days",
    caseSlug: "lead-scraping",
  },
  creative: {
    priceFromPln: 3000,
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
