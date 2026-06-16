"use client";

import { useState } from "react";
import { Link } from "@/i18n/navigation";
import { vintageNav } from "@/content/home-vintage";
import { site } from "@/content/site";
import { LanguageSwitcher } from "@/components/language-switcher";

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
    "relative block px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-[var(--vhs-muted)] transition-all hover:translate-x-0.5 hover:text-[var(--vhs-white)]";

  const content = (
    <>
      {hovered && (
        <span
          className="absolute -top-1 left-1/2 -translate-x-1/2 font-mono text-[7px] text-[var(--vhs-terminal)]"
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--vhs-dirt)] bg-[#0d0d0d]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[var(--vhs-muted)] sm:text-xs"
        >
          <span className="inline-block border border-[var(--vhs-red)] bg-[var(--vhs-red)] px-1.5 py-0.5 text-[8px] font-bold text-white rec-blink">
            REC
          </span>
          <span className="group-hover:text-[var(--vhs-acid)]">
            {site.domain}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {vintageNav.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} />
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
          {vintageNav.map((item) => (
            <NavItem
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={() => setOpen(false)}
            />
          ))}
        </nav>
      )}
    </header>
  );
}
