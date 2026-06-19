import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { BriefBuilder } from "@/components/pipeline/BriefBuilder";
import { VintagePageHeader } from "@/components/vintage/VintagePage";
import { buildSeoMetadata } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { briefPage } from "@/content/pipeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const copy = briefPage[l];
  return buildSeoMetadata({
    locale,
    path: "/pipeline/brief",
    title: copy.title,
    description: copy.subtitle,
  });
}

export default async function PipelineBriefPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const copy = briefPage[l];

  return (
    <>
      <VintagePageHeader tag={copy.tag} title={copy.title} subtitle={copy.subtitle} />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <BriefBuilder locale={l} />
      </div>
    </>
  );
}
