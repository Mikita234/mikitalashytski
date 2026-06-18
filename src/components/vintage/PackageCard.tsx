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
}: PackageCardProps) {
  const t = useTranslations("home.packages");
  const title = t(`items.${id}.title`);
  const desc = t(`items.${id}.desc`);

  return (
    <DoomCornerFrame>
      <Link
        href={href}
        className="group block border-2 border-[var(--doom-stone)] bg-[#141418] transition-transform hover:-translate-y-1 hover:border-[var(--doom-red)]/60"
      >
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
          <p className="type-body mt-3 text-sm">{desc}</p>
          <DoomHudBar
            label="ETA"
            value={timeline}
            fill={70}
            variant="ammo"
            className="mt-4"
          />
          <span className="mt-4 inline-block font-[family-name:var(--font-doom)] text-[8px] uppercase tracking-widest text-[var(--vhs-acid)] group-hover:text-[var(--doom-health)]">
            {t("details")} →
          </span>
        </div>
      </Link>
    </DoomCornerFrame>
  );
}
