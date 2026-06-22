"use client";

import { useTranslations } from "next-intl";
import { sellNav } from "@/content/selling";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { Link } from "@/i18n/navigation";
import { useState } from "react";

function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const cls =
    "inline-flex items-center gap-1.5 px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--vhs-muted)] transition-all hover:translate-x-0.5 hover:text-[var(--vhs-white)]";

  const content = (
    <>
      {hovered && (
        <span
          className="font-mono text-[7px] leading-none text-[var(--vhs-terminal)]"
          aria-hidden
        >
          ▶ PLAY
        </span>
      )}
      {label}
    </>
  );

  if (href.includes("#")) {
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={cls}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {content}
    </Link>
  );
}

export function VHSNav() {
  const t = useTranslations("home.nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[var(--vhs-black)]/88 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <BrandLogo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {sellNav.map((item) => (
            <NavItem key={item.href} href={item.href} label={t(item.key)} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="border border-white/20 px-2 py-1 font-mono text-[10px] uppercase md:hidden"
          >
            {open ? "✕" : "≡"}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-white/10 px-4 py-3 md:hidden"
          aria-label="Mobile"
        >
          {sellNav.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={t(item.key)}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
