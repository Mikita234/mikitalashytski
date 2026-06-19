"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

type VHSButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
};

export function VHSButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  external,
}: VHSButtonProps) {
  const t = useTranslations("home.vhsButton");
  const [hover, setHover] = useState(false);

  const base =
    "relative inline-flex items-center justify-center gap-2 border-2 px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-widest transition-all sm:px-8 sm:py-4 sm:text-sm";
  const variants = {
    primary:
      "border-[var(--doom-red)] bg-[var(--vhs-acid)] text-black shadow-[4px_4px_0_var(--doom-blood)] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_var(--doom-blood)] active:translate-x-1 active:translate-y-0 active:shadow-[2px_2px_0_var(--doom-blood)]",
    secondary:
      "border-[var(--doom-stone-light)] bg-[var(--doom-panel)] text-[var(--vhs-beige)] hover:border-[var(--doom-red)] hover:bg-[var(--doom-blood)]/30 hover:text-[var(--vhs-white)]",
  };

  const hoverLabel = variant === "primary" ? t("pickUp") : t("play");

  const content = (
    <>
      {hover && (
        <span
          className={`absolute -top-2.5 font-[family-name:var(--font-doom)] text-[7px] uppercase tracking-wide text-white sm:text-[8px] ${
            variant === "primary" ? "-right-3 bg-[var(--doom-red)] px-1.5 py-0.5" : "-right-2 bg-[var(--vhs-red)] px-1 rec-blink"
          }`}
          aria-hidden
        >
          {hoverLabel}
        </span>
      )}
      {children}
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal =
      external || href.startsWith("http") || href.startsWith("mailto");
    const isHash = href.startsWith("#");

    if (isExternal || isHash) {
      return (
        <a
          href={href}
          className={cls}
          onClick={onClick}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cls}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {content}
    </button>
  );
}
