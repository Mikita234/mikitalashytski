import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
import { VintagePageHeader } from "@/components/vintage/VintagePage";
import { WorksGrid } from "@/components/vintage/WorksGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.works" });
  return buildSeoMetadata({
    locale,
    path: "/works",
    title: t("title"),
    description: t("subtitle"),
  });
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home.works" });

  return (
    <>
      <VintagePageHeader
        tag={t("tag")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <WorksGrid />
      </div>
    </>
  );
}
