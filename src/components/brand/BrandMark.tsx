import type { SVGProps } from "react";

type BrandMarkProps = SVGProps<SVGSVGElement> & {
  /** Show animated REC pulse (header only; off for static favicon exports). */
  animateRec?: boolean;
};

/**
 * Viewfinder mark — Doom HUD corners, chroma-split M, REC dot, scanlines.
 * Works from 16px (favicon) to 48px (header).
 */
export function BrandMark({
  animateRec = false,
  className,
  ...props
}: BrandMarkProps) {
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
        <pattern
          id="brand-scanlines"
          width="4"
          height="4"
          patternUnits="userSpaceOnUse"
        >
          <rect width="4" height="2" fill="rgba(0,0,0,0.35)" />
        </pattern>
        <linearGradient id="brand-vignette" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141418" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
      </defs>

      <rect width="32" height="32" fill="url(#brand-vignette)" />
      <rect width="32" height="32" fill="url(#brand-scanlines)" opacity="0.5" />

      {/* Doom HUD corner brackets */}
      <path
        d="M2 7V2h5M30 7V2h-5M2 25v5h5M30 25v5h-5"
        stroke="#33ff66"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
      <path
        d="M4 9V4h4M28 9V4h-4M4 23v4h4M28 23v4h-4"
        stroke="#c41e1e"
        strokeWidth="0.75"
        strokeOpacity="0.55"
        strokeLinecap="square"
      />

      {/* Chroma-split M */}
      <path
        d="M9 22V10h2.2l3.3 7.2L17.8 10H20v12h-1.8v-8.4L15.2 22h-1.4l-3-8.4V22H9z"
        fill="#00bfff"
        opacity="0.45"
        transform="translate(-0.6 0)"
      />
      <path
        d="M9 22V10h2.2l3.3 7.2L17.8 10H20v12h-1.8v-8.4L15.2 22h-1.4l-3-8.4V22H9z"
        fill="#ff3355"
        opacity="0.4"
        transform="translate(0.6 0)"
      />
      <path
        d="M9 22V10h2.2l3.3 7.2L17.8 10H20v12h-1.8v-8.4L15.2 22h-1.4l-3-8.4V22H9z"
        fill="#33ff66"
      />

      {/* Viewfinder crosshair ticks */}
      <path
        d="M16 6v3M16 23v3M6 16h3M23 16h3"
        stroke="#33ff66"
        strokeWidth="0.75"
        strokeOpacity="0.35"
      />

      {/* REC dot — legible even at favicon scale */}
      <circle
        cx="6.5"
        cy="6.5"
        r="2"
        fill="#c41e1e"
        className={animateRec ? "brand-rec-pulse" : undefined}
      />
      <circle cx="6.5" cy="6.5" r="3.5" stroke="#c41e1e" strokeWidth="0.5" opacity="0.35" />

      {/* CH404 micro badge */}
      <rect
        x="18"
        y="24"
        width="12"
        height="5"
        fill="#0a0a0a"
        stroke="#ccff00"
        strokeWidth="0.5"
        opacity="0.9"
      />
      <text
        x="19"
        y="27.5"
        fill="#ccff00"
        fontSize="3"
        fontFamily="monospace"
        fontWeight="700"
        letterSpacing="0.3"
      >
        404
      </text>
    </svg>
  );
}
