import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

/**
 * Build hreflang alternates for a given locale + path.
 * `path` is the locale-less pathname, e.g. "" (home), "/about",
 * "/projects/kayer". Respects the `as-needed` locale prefix.
 */
export function buildAlternates(
  locale: string,
  path = "",
): Metadata["alternates"] {
  const href = (l: string) => {
    const prefix = l === routing.defaultLocale ? "" : `/${l}`;
    const full = `${prefix}${path}`;
    return full === "" ? "/" : full;
  };

  const languages = Object.fromEntries(
    routing.locales.map((l) => [l, href(l)]),
  );

  return {
    canonical: href(locale),
    languages: { ...languages, "x-default": href(routing.defaultLocale) },
  };
}
