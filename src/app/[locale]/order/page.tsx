import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { VintagePageHeader } from "@/components/vintage/VintagePage";
import {
  OrderForm,
  OrderFormFallback,
} from "@/components/vintage/OrderForm";
import { VHSButton } from "@/components/vintage/VHSButton";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.contact" });
  return buildSeoMetadata({
    locale,
    path: "/order",
    title: t("ctaOrder"),
    description: t("subline"),
  });
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
          {(t.raw("stickers") as string[]).map((s, i) => (
            <span
              key={s}
              className={`border-2 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest ${
                i === 0
                  ? "border-[var(--vhs-red)] bg-[var(--vhs-red)] text-white rec-blink"
                  : "border-[var(--vhs-acid)] text-[var(--vhs-acid)]"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <Suspense fallback={<OrderFormFallback />}>
          <OrderForm />
        </Suspense>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <VHSButton
            href={site.telegram}
            variant="secondary"
            external
            analytics={{
              event: "order_fallback_click",
              location: "order_page",
              channel: "telegram",
            }}
          >
            Telegram — {site.telegramHandle}
          </VHSButton>
          <VHSButton
            href={`mailto:${site.email}`}
            variant="secondary"
            external
            analytics={{
              event: "order_fallback_click",
              location: "order_page",
              channel: "email",
            }}
          >
            {site.email}
          </VHSButton>
        </div>
      </div>
    </>
  );
}
