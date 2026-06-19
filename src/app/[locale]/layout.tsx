import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, IBM_Plex_Mono, Press_Start_2P } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Providers } from "@/components/providers";
import { VintageShell } from "@/components/vintage/VintageShell";
import { JsonLd } from "@/components/json-ld";
import { PlausibleScript } from "@/components/analytics/PlausibleScript";
import { site } from "@/content/site";
import { buildSeoMetadata } from "@/lib/seo";
import "../globals.css";

const barlow = Barlow_Condensed({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  display: "swap",
});

const pressStart = Press_Start_2P({
  variable: "--font-doom",
  subsets: ["latin", "cyrillic"],
  weight: "400",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });

  const baseMetadata = buildSeoMetadata({
    locale,
    title: t("title"),
    description: t("description"),
  });

  return {
    ...baseMetadata,
    title: {
      default: t("title"),
      template: `%s · ${site.name}`,
    },
    applicationName: site.name,
    authors: [{ name: site.name, url: site.url }],
    creator: site.name,
    robots: { index: true, follow: true },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "meta" });

  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    description: t("description"),
  };

  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: site.url,
    jobTitle: "Digital builder & full-cycle operator",
    knowsAbout: [
      "E-commerce",
      "Technical SEO",
      "Generative Engine Optimization",
      "Structured data",
      "Next.js",
      "Marketplace operations",
    ],
    sameAs: [site.github, site.linkedin, site.telegram].filter(Boolean),
  };

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: routing.locales,
  };

  const professionalServiceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
    description: t("description"),
    areaServed: ["PL", "UA", "EU"],
    priceRange: "$$",
    serviceType: [
      "Web development",
      "E-commerce",
      "Automation",
      "SEO",
      "Website audit",
    ],
  };

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${barlow.variable} ${ibmMono.variable} ${bebas.variable} ${pressStart.variable}`}
    >
      <body className="min-h-dvh">
        <PlausibleScript />
        <Providers>
          <NextIntlClientProvider>
            <JsonLd data={[orgLd, personLd, websiteLd, professionalServiceLd]} />
            <VintageShell>{children}</VintageShell>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
