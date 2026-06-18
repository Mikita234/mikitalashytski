"use client";

import { useTranslations } from "next-intl";
import { VHSButton } from "./VHSButton";
import { VintageSectionHeader } from "./VintagePage";

export function PricingSection() {
  const t = useTranslations("home.pricing");
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
              {tiers.map((tier) => (
                <tr
                  key={tier.service}
                  className="border-b border-[var(--doom-stone)]/30 transition-colors hover:bg-[var(--doom-blood)]/10"
                >
                  <td className="p-3 type-body text-[var(--vhs-white)] sm:p-4">
                    {tier.service}
                  </td>
                  <td className="p-3 font-[family-name:var(--font-doom)] text-[var(--doom-ammo)] sm:p-4">
                    {tier.from} PLN
                  </td>
                  <td className="hidden p-3 type-caption sm:table-cell sm:p-4">
                    {tier.to} PLN
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <VHSButton href="/order" variant="primary">
            {t("cta")} →
          </VHSButton>
        </div>
      </div>
    </section>
  );
}
