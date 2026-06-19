import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";
import { projectSlugs } from "@/content/projects";
import { serviceSlugs } from "@/content/services";
import { guideSlugs } from "@/content/guides";

const paths = [
  "",
  "/about",
  "/contact",
  "/order",
  "/works",
  ...serviceSlugs.map((slug) => `/services/${slug}`),
  ...projectSlugs.map((slug) => `/projects/${slug}`),
  "/guides",
  ...guideSlugs.map((slug) => `/guides/${slug}`),
];

function url(locale: string, path: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${site.url}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: url(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, url(l, path)]),
        ),
      },
    })),
  );
}
