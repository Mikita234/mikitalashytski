/**
 * Shared JSX for next/og ImageResponse (icon, apple-icon, opengraph).
 * Inline styles only — Satori requires explicit display on multi-child divs.
 */
export function BrandMarkOg({
  size,
  showRecLabel = false,
}: {
  size: number;
  showRecLabel?: boolean;
}) {
  const s = size;
  const pad = Math.round(s * 0.08);
  const border = Math.max(1, Math.round(s * 0.05));

  return (
    <div
      style={{
        width: s,
        height: s,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(180deg, #141418 0%, #0a0a0a 100%)",
        border: `${border}px solid #33ff66`,
        boxShadow: `inset 0 0 0 ${Math.max(1, Math.round(s * 0.02))}px rgba(196, 30, 30, 0.45)`,
        padding: pad,
        fontFamily: "monospace",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.35) 2px, rgba(0,0,0,0.35) 4px)",
          opacity: 0.45,
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: Math.max(2, Math.round(s * 0.04)),
          width: "100%",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: Math.max(4, Math.round(s * 0.09)),
            height: Math.max(4, Math.round(s * 0.09)),
            borderRadius: "50%",
            background: "#c41e1e",
            display: "flex",
            flexShrink: 0,
          }}
        />
        {showRecLabel ? (
          <span
            style={{
              fontSize: Math.max(7, Math.round(s * 0.08)),
              fontWeight: 700,
              color: "#c41e1e",
              letterSpacing: "0.08em",
            }}
          >
            REC
          </span>
        ) : (
          <span style={{ display: "none" }} />
        )}
      </div>

      <span
        style={{
          fontSize: Math.round(s * 0.44),
          fontWeight: 900,
          color: "#33ff66",
          lineHeight: 1,
          zIndex: 1,
          textShadow: `${Math.max(1, Math.round(s * 0.02))}px 0 #ff3355, -${Math.max(1, Math.round(s * 0.02))}px 0 #00bfff`,
        }}
      >
        M
      </span>

      <span
        style={{
          fontSize: Math.max(6, Math.round(s * 0.1)),
          fontWeight: 700,
          color: "#ccff00",
          border: "1px solid #ccff00",
          padding: `${Math.max(1, Math.round(s * 0.015))}px ${Math.max(2, Math.round(s * 0.035))}px`,
          background: "rgba(10,10,10,0.85)",
          letterSpacing: "0.06em",
          zIndex: 1,
        }}
      >
        404
      </span>
    </div>
  );
}
