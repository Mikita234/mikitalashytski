/**
 * Shared JSX for next/og ImageResponse (icon, apple-icon, opengraph).
 * Inline styles only — Satori requires explicit display on multi-child divs.
 */
export function BrandMarkOg({ size }: { size: number }) {
  const s = size;
  const corner = Math.max(2, Math.round(s * 0.06));
  const stroke = Math.max(1, Math.round(s * 0.04));

  return (
    <div
      style={{
        width: s,
        height: s,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #1e1c18 0%, #141210 100%)",
        borderRadius: Math.round(s * 0.16),
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Viewfinder corners */}
      <svg
        width={s}
        height={s}
        viewBox="0 0 32 32"
        style={{ position: "absolute", inset: 0 }}
      >
        <path
          d="M5 10V5h5M27 10V5h-5M5 22v5h5M27 22v5h-5"
          stroke="#6ecf8a"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeOpacity={0.85}
          fill="none"
        />
      </svg>

      {/* Monogram M */}
      <span
        style={{
          fontSize: Math.round(s * 0.46),
          fontWeight: 800,
          color: "#7ee8a8",
          lineHeight: 1,
          zIndex: 1,
          fontFamily: "sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        M
      </span>

      {/* Label strip */}
      <div
        style={{
          position: "absolute",
          bottom: Math.round(s * 0.14),
          left: "22%",
          right: "22%",
          height: Math.max(1, Math.round(s * 0.045)),
          borderRadius: corner,
          background: "#e8d4a8",
          opacity: 0.4,
          display: "flex",
        }}
      />
    </div>
  );
}
