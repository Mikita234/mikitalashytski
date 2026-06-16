import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildAlternates } from "@/lib/seo";
import { site } from "@/content/site";
import { vintageContact } from "@/content/home-vintage";
import { VintagePageHeader } from "@/components/vintage/VintagePage";
import { OrderForm } from "@/components/vintage/OrderForm";
import { VHSButton } from "@/components/vintage/VHSButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("subtitle"),
    alternates: buildAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
      <VintagePageHeader
        tag="ORDER CHANNEL"
        title={vintageContact.headline}
        subtitle={vintageContact.subline}
        channel={vintageContact.channel}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {vintageContact.stickers.map((s) => (
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

        <p className="mx-auto mt-8 max-w-md text-center font-mono text-xs text-[var(--vhs-muted)]">
          {t("note")}
        </p>

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
