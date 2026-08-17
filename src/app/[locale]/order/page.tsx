import type { Metadata } from "next";
import { Suspense } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import {
  VintageBulletList,
  VintagePageHeader,
  VintageSectionHeader,
} from "@/components/vintage/VintagePage";
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
  const processSteps = t.raw("processSteps") as {
    title: string;
    text: string;
  }[];
  const prepareItems = t.raw("prepareItems") as string[];

  return (
    <>
      <VintagePageHeader
        tag={t("orderTag")}
        title={t("headline")}
        subtitle={t("subline")}
      />

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="mb-12">
          <VintageSectionHeader
            tag={t("processTag")}
            title={t("processTitle")}
            tagClassName="text-[var(--vhs-terminal)]"
          />
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="border border-white/10 bg-[#101014] p-5"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--vhs-terminal)]">
                  STEP {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl uppercase text-[var(--vhs-white)]">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--vhs-muted)]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 border-2 border-[var(--doom-stone)] bg-[#101014] p-5 md:grid-cols-[1fr_0.9fr]">
            <div>
              <h2 className="font-display text-2xl uppercase text-[var(--vhs-white)]">
                {t("prepareTitle")}
              </h2>
              <div className="mt-4">
                <VintageBulletList items={prepareItems} />
              </div>
            </div>
            <p className="border-l-2 border-[var(--vhs-acid)] pl-4 text-sm leading-relaxed text-[var(--vhs-body)]">
              {t("asyncNote")}
            </p>
          </div>
        </section>

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
