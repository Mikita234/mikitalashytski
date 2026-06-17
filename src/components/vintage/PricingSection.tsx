"use client";

import { useTranslations } from "next-intl";
import { VHSButton } from "./VHSButton";

export function PricingSection() {
  const t = useTranslations("home.pricing");
  const tiers = t.raw("tiers") as { service: string; from: string; to: string }[];

  return (
    <section className="border-t border-white/10 bg-[#08080a] py-14 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--vhs-yellow)]">
          ● {t("tag")}
        </p>
        <h2 className="mt-2 font-display text-3xl uppercase text-[var(--vhs-white)] sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-2 text-sm text-[var(--vhs-muted)]">{t("subtitle")}</p>

        <div className="mt-8 overflow-hidden border-2 border-[var(--vhs-dirt)]">
          <table className="w-full font-mono text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[var(--vhs-dirt)] bg-[#141418] text-left text-[var(--vhs-muted)]">
                <th className="p-3 sm:p-4">{t("service")}</th>
                <th className="p-3 sm:p-4">{t("from")}</th>
                <th className="hidden p-3 sm:table-cell sm:p-4">{t("to")}</th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((tier) => (
                <tr
                  key={tier.service}
                  className="border-b border-white/5 transition-colors hover:bg-white/[0.02]"
                >
                  <td className="p-3 text-[var(--vhs-white)] sm:p-4">
                    {tier.service}
                  </td>
                  <td className="p-3 text-[var(--vhs-terminal)] sm:p-4">
                    {tier.from} PLN
                  </td>
                  <td className="hidden p-3 text-[var(--vhs-muted)] sm:table-cell sm:p-4">
                    {tier.to} PLN
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <VHSButton href="/order" variant="primary">
            {t("cta")} →
          </VHSButton>
        </div>
      </div>
    </section>
  );
}
