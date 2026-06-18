"use client";

import { useLocale, useTranslations } from "next-intl";
import { formatPriceRange, getCurrency, parsePlnAmount } from "@/lib/pricing";
import { VHSButton } from "./VHSButton";
import { VintageSectionHeader } from "./VintagePage";

export function PricingSection() {
  const locale = useLocale();
  const t = useTranslations("home.pricing");
  const currency = getCurrency(locale);
  const tiers = t.raw("tiers") as { service: string; from: string; to: string }[];

  return (
    <section className="border-t border-[var(--doom-stone)]/40 bg-[#08080a] section-spacing">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <VintageSectionHeader
          tag={t("tag")}
          title={t("title")}
          subtitle={t("subtitle")}
          tagClassName="text-[var(--doom-ammo)]"
        />

        <div className="mt-2 overflow-hidden border-2 border-[var(--doom-stone)]">
          <table className="w-full font-mono text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[var(--doom-stone)] bg-[#141418] text-left type-caption uppercase">
                <th className="p-3 sm:p-4">{t("service")}</th>
                <th className="p-3 sm:p-4">{t("from")}</th>
                <th className="hidden p-3 sm:table-cell sm:p-4">{t("to")}</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => {
                const fromPln = parsePlnAmount(tier.from);
                const toPln = parsePlnAmount(tier.to);
                const range = formatPriceRange(fromPln, toPln, locale);

                return (
                  <tr
                    key={tier.service}
                    className="border-b border-[var(--doom-stone)]/30 transition-colors hover:bg-[var(--doom-blood)]/10"
                  >
                    <td className="p-3 type-body text-[var(--vhs-white)] sm:p-4">
                      {tier.service}
                    </td>
                    <td className="p-3 font-[family-name:var(--font-doom)] text-[var(--doom-ammo)] sm:p-4">
                      {currency === "PLN" ? `${range.from} PLN` : range.from}
                    </td>
                    <td className="hidden p-3 type-caption sm:table-cell sm:p-4">
                      {currency === "PLN" ? `${range.to} PLN` : range.to}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-center font-mono text-[10px] text-[var(--vhs-muted)] sm:text-xs">
          {t("caption")}
        </p>

        <div className="mt-10 text-center">
          <VHSButton href="/order" variant="primary">
            {t("cta")} →
          </VHSButton>
        </div>
      </div>
    </section>
  );
}
