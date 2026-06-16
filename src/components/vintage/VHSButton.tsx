"use client";

import { useState } from "react";
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
  const [hover, setHover] = useState(false);

  const base =
    "relative inline-flex items-center justify-center gap-2 border-2 px-5 py-3 font-mono text-xs uppercase tracking-widest transition-transform sm:px-6 sm:text-sm";
  const variants = {
    primary:
      "border-[var(--vhs-acid)] bg-[var(--vhs-acid)] text-black hover:translate-x-0.5 hover:-translate-y-0.5",
    secondary:
      "border-white/30 bg-transparent text-[var(--vhs-white)] hover:border-[var(--vhs-terminal)] hover:text-[var(--vhs-terminal)]",
  };

  const content = (
    <>
      {hover && (
        <span
          className="absolute -top-2 -right-2 bg-[var(--vhs-red)] px-1 font-mono text-[8px] text-white rec-blink"
          aria-hidden
        >
          PLAY
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
