import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";

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

export function localizedPath(locale: string, path = "") {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  const full = `${prefix}${path}`;
  return full === "" ? "/" : full;
}

export function absoluteUrl(locale: string, path = "") {
  return `${site.url}${localizedPath(locale, path) === "/" ? "" : localizedPath(locale, path)}`;
}

export function buildSeoMetadata({
  locale,
  path = "",
  title,
  description,
  type = "website",
}: {
  locale: string;
  path?: string;
  title: string;
  description: string;
  type?: "website" | "article";
}): Metadata {
  const imagePath = localizedPath(locale, "/opengraph-image");
  const imageAlt = `${title} · ${site.name}`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    alternates: buildAlternates(locale, path),
    openGraph: {
      type,
      siteName: site.name,
      title,
      description,
      url: absoluteUrl(locale, path),
      locale,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: imagePath,
          alt: imageAlt,
        },
      ],
    },
  };
}
