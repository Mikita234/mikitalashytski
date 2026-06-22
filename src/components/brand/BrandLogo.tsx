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
        <BrandMark className="h-8 w-8 transition-transform duration-300 group-hover:scale-[1.03]" />
        <span
          className="brand-logo__mark-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </span>

      <span className="flex min-w-0 flex-col leading-tight">
        <span className="brand-logo__name font-display text-[11px] uppercase tracking-[0.05em] text-[var(--vhs-white)] transition-colors group-hover:text-[var(--vhs-beige)] sm:text-xs">
          {site.name}
        </span>
        {!compact && (
          <span className="truncate font-mono text-[7px] uppercase tracking-[0.12em] text-[var(--vhs-muted)] sm:text-[8px]">
            {site.domain}
          </span>
        )}
      </span>
    </Link>
  );
}
