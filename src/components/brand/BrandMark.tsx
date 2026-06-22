import type { SVGProps } from "react";

type BrandMarkProps = SVGProps<SVGSVGElement>;

/**
 * Refined tape-label monogram — warm phosphor M, soft viewfinder corners.
 * Legible from 16px (favicon) to 48px (header).
 */
export function BrandMark({ className, ...props }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
      {...props}
    >
      <defs>
        <linearGradient id="brand-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e1c18" />
          <stop offset="100%" stopColor="#141210" />
        </linearGradient>
      </defs>

      <rect width="32" height="32" rx="5" fill="url(#brand-bg)" />

      {/* Soft viewfinder corners — single warm phosphor tone */}
      <path
        d="M5 10V5h5M27 10V5h-5M5 22v5h5M27 22v5h-5"
        stroke="#6ecf8a"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeOpacity="0.85"
      />

      {/* Clean monogram M */}
      <path
        d="M9.5 22V11.5h1.8l4.2 7.4L19.7 11.5H21.5V22h-1.7v-7.6L16.8 22h-1.6l-3-7.6V22H9.5z"
        fill="#7ee8a8"
      />

      {/* VHS label accent — subtle cream strip */}
      <rect
        x="7"
        y="26.5"
        width="18"
        height="1.5"
        rx="0.75"
        fill="#e8d4a8"
        opacity="0.4"
      />
    </svg>
  );
}
