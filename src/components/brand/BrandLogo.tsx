import { site } from "@/content/site";
import { Link } from "@/i18n/navigation";
import { BrandMark } from "./BrandMark";

type BrandLogoProps = {
  /** Compact: mark + name only (footer). */
  variant?: "header" | "compact";
  className?: string;
};

export function BrandLogo({ variant = "header", className = "" }: BrandLogoProps) {
  const compact = variant === "compact";

  return (
    <Link
      href="/"
      className={`brand-logo group inline-flex items-center gap-2.5 rounded-sm ${className}`}
      aria-label={`${site.name} — ${site.domain}`}
    >
      <span className="brand-logo__mark relative shrink-0">
        <BrandMark
          animateRec
          className="h-8 w-8 transition-transform duration-300 group-hover:scale-[1.03]"
        />
        <span
          className="brand-logo__mark-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </span>

      <span className="flex min-w-0 flex-col leading-tight">
        <span className="flex items-baseline gap-1.5">
          <span className="brand-logo__name font-display text-[11px] uppercase tracking-[0.06em] text-[var(--vhs-white)] transition-colors group-hover:text-[var(--vhs-acid)] sm:text-xs">
            {site.name}
          </span>
          {!compact && (
            <span
              className="hidden font-[family-name:var(--font-doom)] text-[6px] uppercase tracking-wider text-[var(--vhs-terminal)]/80 sm:inline"
              aria-hidden
            >
              LIVE
            </span>
          )}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[7px] uppercase tracking-[0.14em] text-[var(--vhs-muted)] sm:text-[8px]">
          <span className="text-[var(--vhs-red)]/90" aria-hidden>
            ●
          </span>
          <span className="truncate">{site.domain}</span>
          {!compact && (
            <>
              <span className="text-[var(--vhs-dirt)]" aria-hidden>
                ·
              </span>
              <span className="hidden text-[var(--vhs-terminal)]/70 sm:inline">
                {site.brandChannel}
              </span>
            </>
          )}
        </span>
      </span>
    </Link>
  );
}
