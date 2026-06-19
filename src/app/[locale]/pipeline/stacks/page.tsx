import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { StackMatrix } from "@/components/pipeline/StackMatrix";
import { VintagePageHeader } from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";
import { buildAlternates } from "@/lib/seo";
import type { Locale } from "@/i18n/routing";
import { stacksPage, pipelineHub, pipelineLabels } from "@/content/pipeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l = locale as Locale;
  const copy = stacksPage[l];
  return {
    title: copy.title,
    description: copy.subtitle,
    alternates: buildAlternates(locale, "/pipeline/stacks"),
  };
}

export default async function PipelineStacksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const l = locale as Locale;
  const hub = pipelineHub[l];
  const labels = pipelineLabels[l];

  return (
    <>
      <VintagePageHeader
        tag={stacksPage[l].tag}
        title={stacksPage[l].title}
        subtitle={stacksPage[l].subtitle}
      />

      <section className="border-b border-[var(--doom-stone)]/40 bg-[#101014]">
        <div className="mx-auto max-w-6xl border-l-4 border-[var(--vhs-acid)] px-4 py-6 sm:px-6">
          <p className="text-sm leading-relaxed text-[var(--vhs-body)] sm:text-base">
            {labels.defaultStackBody}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <StackMatrix locale={l} />
        <div className="mt-10 flex flex-wrap gap-3">
          <VHSButton href="/pipeline/brief" variant="primary">
            {hub.ctaBrief} →
          </VHSButton>
          <VHSButton href="/pipeline/beginner" variant="secondary">
            {hub.ctaBeginner}
          </VHSButton>
        </div>
      </div>
    </>
  );
}
