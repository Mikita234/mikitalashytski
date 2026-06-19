"use client";

import { useTranslations } from "next-intl";
import { site } from "@/content/site";
import { Link } from "@/i18n/navigation";
import { sellNav } from "@/content/selling";

export function VintageFooter() {
  const tNav = useTranslations("home.nav");
  const tFooter = useTranslations("footer");

  return (
    <footer className="border-t-2 border-[var(--vhs-dirt)] bg-[#0a0a0a]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-start sm:justify-between sm:px-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)]">
            ● {site.domain}
          </p>
          <p className="mt-2 font-display text-xl uppercase text-[var(--vhs-white)]">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-[var(--vhs-muted)]">{tFooter("tagline")}</p>
        </div>

        <nav aria-label={tFooter("nav")} className="flex flex-wrap gap-x-5 gap-y-2">
          {sellNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] transition-colors hover:text-[var(--vhs-acid)]"
            >
              {tNav(item.key)}
            </Link>
          ))}
        </nav>
      </div>

      <div className="border-t border-white/5 px-4 py-4 text-center sm:px-6">
        <p className="font-mono text-[9px] text-[var(--vhs-muted)]/70">
          © {new Date().getFullYear()} {site.name} — {tFooter("built")} · {tFooter("rights")}
        </p>
      </div>
    </footer>
  );
}
