import type { Locale } from "@/i18n/routing";

/** Canonical PLN amounts → approximate EUR (rounded for display) */
const PLN_TO_EUR: Record<number, number> = {
  500: 115,
  900: 205,
  1500: 350,
  2000: 460,
  3000: 700,
  5000: 1150,
  7000: 1610,
  8000: 1840,
  15000: 3450,
};

const EUR_TO_UAH = 45;

export function plnToEur(pln: number): number {
  if (pln in PLN_TO_EUR) return PLN_TO_EUR[pln];
  return Math.round((pln * 350) / 1500);
}

export function getCurrency(locale: string): "PLN" | "EUR" {
  return locale === "pl" ? "PLN" : "EUR";
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US").replace(/,/g, " ");
}

export function formatPln(pln: number): string {
  return `${formatNumber(pln)} PLN`;
}

export function formatEur(eur: number): string {
  return `€${formatNumber(eur)}`;
}

export function formatUahApprox(eur: number): string {
  const uah = Math.round((eur * EUR_TO_UAH) / 100) * 100;
  return `~${formatNumber(uah)} ₴`;
}

/** Locale-aware display price (same as formatPriceFrom) */
export function getLocalizedPrice(pln: number, locale: string): string {
  return formatPriceFrom(pln, locale);
}

/** Single "from" price for packages and service headers */
export function formatPriceFrom(pln: number, locale: string): string {
  if (locale === "pl") return formatPln(pln);
  const eur = plnToEur(pln);
  if (locale === "uk") {
    return `${formatEur(eur)} (${formatUahApprox(eur)})`;
  }
  return formatEur(eur);
}

/** Price range for pricing table */
export function formatPriceRange(fromPln: number, toPln: number, locale: string): {
  from: string;
  to: string;
} {
  if (locale === "pl") {
    return { from: formatNumber(fromPln), to: formatNumber(toPln) };
  }
  return {
    from: formatEur(plnToEur(fromPln)).replace("€", "€"),
    to: formatEur(plnToEur(toPln)),
  };
}

export function parsePlnAmount(value: string): number {
  return Number(value.replace(/\s/g, "").replace(/[^\d]/g, ""));
}

export const packageFromPln = {
  landing: 1500,
  business: 3000,
  ecommerce: 5000,
  automation: 2000,
  audit: 500,
  creative: 3000,
} as const;

export const pricingTiersPln = [
  { fromPln: 1500, toPln: 3000 },
  { fromPln: 3000, toPln: 7000 },
  { fromPln: 5000, toPln: 15000 },
  { fromPln: 2000, toPln: 8000 },
  { fromPln: 500, toPln: 900 },
] as const;

export function isValidLocale(locale: string): locale is Locale {
  return ["en", "pl", "ru", "uk"].includes(locale);
}
