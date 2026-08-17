"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PackageId } from "@/content/selling";
import { DoomCornerFrame } from "./DoomCornerFrame";
import { DoomHudBar } from "./DoomHudBar";

type PackageCardProps = {
  id: PackageId;
  priceFrom: string;
  timeline: string;
  tag: string;
  href: string;
  caseHref: string;
};

const icons: Record<string, string> = {
  "PKG-01": "▶",
  "PKG-02": "◆",
  "PKG-03": "◎",
  "PKG-04": "◉",
  "PKG-05": "★",
};

export function PackageCard({
  id,
  priceFrom,
  timeline,
  tag,
  href,
  caseHref,
}: PackageCardProps) {
  const t = useTranslations("home.packages");
  const title = t(`items.${id}.title`);
  const desc = t(`items.${id}.desc`);

  return (
    <DoomCornerFrame>
      <div className="group border-2 border-[var(--doom-stone)] bg-[#141418] transition-transform hover:-translate-y-1 hover:border-[var(--doom-red)]/60">
        <div className="flex h-14 items-center justify-center border-b border-[var(--doom-stone)] bg-gradient-to-r from-[var(--doom-blood)]/40 to-transparent">
          <span className="font-mono text-2xl text-[var(--doom-ammo)]">
            {icons[tag] ?? "●"}
          </span>
        </div>
        <div className="p-4 sm:p-5">
          <div className="mb-3 flex items-center justify-between border-b border-[var(--doom-stone)]/60 pb-2">
            <span className="font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-widest text-[var(--doom-red)] sm:text-[9px]">
              {tag}
            </span>
            <span className="doom-metric text-[var(--doom-ammo)]">
              {t("from")} {priceFrom}
            </span>
          </div>
          <h3 className="type-h3">{title}</h3>
          <p className="type-body mt-3">{desc}</p>
          <DoomHudBar
            label="ETA"
            value={timeline}
            fill={70}
            variant="ammo"
            className="mt-4"
          />
          <div className="mt-5 grid grid-cols-2 gap-2 border-t border-white/10 pt-4">
            <Link
              href={href}
              className="inline-flex items-center justify-center border border-[var(--doom-stone-light)] px-2 py-2 font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-widest text-[var(--vhs-beige)] transition-colors hover:border-[var(--vhs-acid)] hover:text-[var(--vhs-acid)]"
            >
              {t("details")} →
            </Link>
            <Link
              href={caseHref}
              className="inline-flex items-center justify-center border border-[var(--doom-stone-light)] px-2 py-2 font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-widest text-[var(--vhs-beige)] transition-colors hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]"
              data-analytics-event="case_open"
              data-analytics-location="home_package"
              data-analytics-service={id}
            >
              {t("case")} →
            </Link>
            <Link
              href={`/order?service=${id}`}
              className="col-span-2 inline-flex items-center justify-center border border-[var(--vhs-acid)] bg-[var(--vhs-acid)] px-2 py-2 font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-widest text-black transition-colors hover:bg-[var(--vhs-terminal)]"
              data-analytics-event="order_open"
              data-analytics-location="home_package"
              data-analytics-service={id}
            >
              {t("order")} →
            </Link>
          </div>
        </div>
      </div>
    </DoomCornerFrame>
  );
}
