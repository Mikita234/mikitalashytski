"use client";

import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { VHSButton } from "./VHSButton";
import { DoomHudBar } from "./DoomHudBar";

export function ContactCTA() {
  const t = useTranslations("home.contact");
  const stickers = t.raw("stickers") as string[];

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden border-t-4 border-[var(--doom-red)] section-glow-red section-spacing"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-[var(--doom-blood)]/30 via-[#0a0a0a] to-[#0a1018]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -left-8 bottom-8 hidden opacity-10 lg:block"
        aria-hidden
      >
        <div className="rotate-[-12deg] border-4 border-[var(--vhs-beige)] bg-[#1a1a1e] p-6">
          <p className="font-display text-6xl text-[var(--vhs-red)]">☎</p>
          <p className="mt-2 font-mono text-xs text-[var(--vhs-yellow)]">● LIVE</p>
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <DoomHudBar label="SIGNAL" value="OPEN" fill={100} className="mx-auto mb-8 max-w-[200px]" />

        <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
          {stickers.map((s) => (
            <span
              key={s}
              className={`border-2 px-3 py-1 font-[family-name:var(--font-doom)] text-[9px] font-bold uppercase tracking-widest sm:text-[10px] ${
                s === "CALL NOW"
                  ? "border-[var(--vhs-red)] bg-[var(--vhs-red)] text-white rec-blink"
                  : "border-[var(--doom-ammo)] text-[var(--doom-ammo)]"
              }`}
            >
              {s}
            </span>
          ))}
        </div>

        <h2 className="type-h2">{t("headline")}</h2>
        <p className="type-subtitle mx-auto mt-5 max-w-lg">{t("subline")}</p>

        <div className="mx-auto mt-8 inline-block rotate-[-2deg] border-2 border-[var(--doom-ammo)] bg-[var(--doom-ammo)] px-5 py-2.5 font-[family-name:var(--font-doom)] text-xs font-bold text-black shadow-[4px_4px_0_var(--doom-blood)] sm:text-sm">
          {t("startFrom")}
        </div>

        <div className="doom-stone-divider mx-auto mt-10 max-w-xs" aria-hidden />

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <VHSButton href="/order" variant="primary">
            {t("ctaOrder")}
          </VHSButton>
          <VHSButton href={site.telegram} variant="secondary" external>
            {t("ctaTelegram")}
          </VHSButton>
          <VHSButton href={`mailto:${site.email}`} variant="secondary" external>
            {t("ctaEmail")}
          </VHSButton>
        </div>

        <p className="type-caption mt-8">
          ● REC — {site.telegramHandle} — {site.email}
        </p>
      </div>
    </section>
  );
}
