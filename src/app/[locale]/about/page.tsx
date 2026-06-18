import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { VintagePageHeader, VintageBlock } from "@/components/vintage/VintagePage";
import { ProcessTimeline } from "@/components/vintage/ProcessTimeline";
import { TeletextPanel } from "@/components/vintage/TeletextPanel";
import { VHSButton } from "@/components/vintage/VHSButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("title"),
    description: t("intro"),
    alternates: buildAlternates(locale, "/about"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutContent />;
}

function AboutContent() {
  const t = useTranslations("about");
  const tOrder = useTranslations("home.contact");
  const steps = t.raw("steps") as { title: string; text: string }[];
  const values = t.raw("values") as string[];

  const timelineSteps = steps.map((s, i) => ({
    step: String(i + 1).padStart(2, "0"),
    title: s.title,
    desc: s.text,
  }));

  return (
    <>
      <VintagePageHeader
        tag={t("tag")}
        title={t("title")}
        subtitle={t("intro")}
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <ProcessTimeline steps={timelineSteps} />
          </div>
          <TeletextPanel />
        </div>

        <div className="mt-20">
          <h2 className="type-h2">{t("valuesTitle")}</h2>
          <div className="doom-stone-divider mt-5 max-w-xs" aria-hidden />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <VintageBlock key={v} title="✓ SIGNAL">
                <p className="type-body">{v}</p>
              </VintageBlock>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <VHSButton href="/order" variant="primary">
            {tOrder("ctaOrder")} →
          </VHSButton>
        </div>
      </div>
    </>
  );
}
