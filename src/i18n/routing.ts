import { defineRouting } from "next-intl/routing";

// Active locales. Architecture is ready to scale to the whole EU:
// add a code here + a messages/<code>.json file and it just works.
export const locales = ["en", "pl", "ru", "uk"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  pl: "Polski",
  ru: "Русский",
  uk: "Українська",
};

export const localeFlags: Record<Locale, string> = {
  en: "EN",
  pl: "PL",
  ru: "RU",
  uk: "UA",
};

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "as-needed",
  localeDetection: true,
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365,
  },
});
