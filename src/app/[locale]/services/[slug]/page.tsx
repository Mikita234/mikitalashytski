import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { getServiceMeta, serviceSlugs, type ServiceSlug } from "@/content/services";
import { ServicePageContent } from "@/components/vintage/ServicePageContent";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const meta = getServiceMeta(slug);
  if (!meta) return {};
  const t = await getTranslations({ locale, namespace: `services.${slug}` });
  return {
    title: t("title"),
    description: t("headline"),
    alternates: buildAlternates(locale, `/services/${slug}`),
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const meta = getServiceMeta(slug);
  if (!meta) notFound();
  return <ServicePageContent slug={slug as ServiceSlug} />;
}
