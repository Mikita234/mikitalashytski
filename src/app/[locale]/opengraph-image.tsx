import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Mikita Lashytski — Digital Builder";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          padding: "64px",
          fontFamily: "monospace",
          color: "#f0f0f0",
          position: "relative",
        }}
      >
        {/* Scanlines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.3) 3px, rgba(0,0,0,0.3) 6px)",
            opacity: 0.4,
          }}
        />

        {/* REC badge */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              background: "#c41e1e",
              color: "#fff",
              padding: "6px 14px",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            ● REC
          </div>
          <div style={{ fontSize: 22, color: "#8a8a94" }}>{site.domain}</div>
          <div style={{ fontSize: 18, color: "#33ff66", marginLeft: "auto" }}>
            {`${site.brandChannel} LIVE`}
          </div>
        </div>

        {/* Main title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#f0f0f0",
            }}
          >
            VIBE
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 900,
              lineHeight: 0.95,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#ccff00",
            }}
          >
            CODER
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 28,
              color: "#e8d4a8",
              maxWidth: 700,
            }}
          >
            Sites · Bots · Automation · SEO · AI visibility
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ fontSize: 28, fontWeight: 700 }}>{site.name}</div>
          <div
            style={{
              fontSize: 20,
              color: "#33ff66",
              border: "2px solid #33ff66",
              padding: "8px 16px",
            }}
          >
            VIBE-TV 2001
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
