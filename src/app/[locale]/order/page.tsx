import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { site } from "@/content/site";
import { VintagePageHeader } from "@/components/vintage/VintagePage";
import { OrderForm } from "@/components/vintage/OrderForm";
import { VHSButton } from "@/components/vintage/VHSButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.contact" });
  return {
    title: t("ctaOrder"),
    description: t("subline"),
    alternates: buildAlternates(locale, "/order"),
  };
}

export default async function OrderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "home.contact" });

  return (
    <>
      <VintagePageHeader
        tag={t("orderTag")}
        title={t("headline")}
        subtitle={t("subline")}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {(t.raw("stickers") as string[]).map((s) => (
            <span
              key={s}
              className={`border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${
                s === "CALL NOW"
                  ? "border-[var(--vhs-red)] bg-[var(--vhs-red)] text-white rec-blink"
                  : "border-[var(--vhs-acid)] text-[var(--vhs-acid)]"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <OrderForm />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <VHSButton href={site.telegram} variant="secondary" external>
            Telegram — {site.telegramHandle}
          </VHSButton>
          <VHSButton href={`mailto:${site.email}`} variant="secondary" external>
            {site.email}
          </VHSButton>
        </div>
      </div>
    </>
  );
}
