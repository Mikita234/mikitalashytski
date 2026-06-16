"use client";

import { motion, type Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const ease = [0.22, 1, 0.36, 1] as const;

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.6, ease },
  }),
};

export function Hero() {
  const t = useTranslations("home.hero");

  const stats = [
    { value: "4", label: t("stat1") },
    { value: "6", label: t("stat2") },
    { value: "3 500+", label: t("stat3") },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="glow-violet absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
        <motion.div
          custom={0}
          variants={item}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {t("badge")}
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl md:text-8xl"
        >
          {t("titleTop")}
          <br />
          <span className="text-gradient">{t("titleAccent")}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-7 max-w-2xl text-lg text-muted sm:text-xl"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          custom={3}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
          >
            {t("ctaPrimary")}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-0.5"
              />
            </svg>
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground/5"
          >
            {t("ctaSecondary")}
          </Link>
        </motion.div>

        <motion.dl
          custom={4}
          variants={item}
          initial="hidden"
          animate="visible"
          className="mt-14 grid max-w-xl grid-cols-3 gap-6 border-t border-border pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs text-muted sm:text-sm">{s.label}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
