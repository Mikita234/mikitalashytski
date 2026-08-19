export type ProjectSlug =
  | "kayer-pl"
  | "kayer-ua"
  | "kayer-checkout-operations"
  | "mnsk7-tools"
  | "popular"
  | "alesyatakun"
  | "ideaactors"
  | "flexiprzeprowadzki"
  | "velixo";

export const projectVisuals: Record<
  ProjectSlug,
  {
    domain: string;
    url: string;
    accent: string;
    accentGlow: string;
    channel: string;
    /** Same-origin thumbnail for hero TV previews (avoids mshots on LCP path). */
    tvPreview?: string;
  }
> = {
  "kayer-pl": {
    domain: "kayer.pl",
    url: "https://kayer.pl",
    accent: "#8b5cf6",
    accentGlow: "rgba(139,92,246,0.35)",
    channel: "CH-01",
    tvPreview: "/retro-tv-kayer-preview.png",
  },
  "kayer-ua": {
    domain: "kayer.ua",
    url: "https://kayer.ua",
    accent: "#a78bfa",
    accentGlow: "rgba(167,139,250,0.35)",
    channel: "CH-01B",
  },
  "kayer-checkout-operations": {
    domain: "checkout.kayer.ua",
    url: "https://kayer.ua",
    accent: "#22d3ee",
    accentGlow: "rgba(34,211,238,0.35)",
    channel: "CH-01C",
    tvPreview: "/cases/kayer-checkout-operations/checkout-preview-desktop.webp",
  },
  "mnsk7-tools": {
    domain: "mnsk7-tools.pl",
    url: "https://mnsk7-tools.pl",
    accent: "#f59e0b",
    accentGlow: "rgba(245,158,11,0.35)",
    channel: "CH-02",
  },
  popular: {
    domain: "popularpoet.pl",
    url: "https://popularpoet.pl",
    accent: "#22d3ee",
    accentGlow: "rgba(34,211,238,0.35)",
    channel: "CH-03",
  },
  alesyatakun: {
    domain: "alesyatakun.by",
    url: "https://alesyatakun.by",
    accent: "#f43f5e",
    accentGlow: "rgba(244,63,94,0.35)",
    channel: "CH-04",
  },
  ideaactors: {
    domain: "ideaactors.pl",
    url: "https://ideaactors.pl",
    accent: "#d9a6ff",
    accentGlow: "rgba(217,166,255,0.35)",
    channel: "CH-05",
  },
  flexiprzeprowadzki: {
    domain: "flexiprzeprowadzki.pl",
    url: "https://flexiprzeprowadzki.pl",
    accent: "#ff7a38",
    accentGlow: "rgba(255,122,56,0.35)",
    channel: "CH-06",
  },
  velixo: {
    domain: "velixo-five.vercel.app",
    url: "https://velixo-five.vercel.app/",
    accent: "#9f7aea",
    accentGlow: "rgba(159,122,234,0.35)",
    channel: "CH-07",
  },
};

const TV_PREVIEW_WIDTH = 150;

export function screenshotUrl(url: string, width = 900) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}

/** Hero TV slot (~125px tall); prefer local static assets over mshots. */
export function tvPreviewSrc(
  siteUrl: string,
  localPath?: string,
  width = TV_PREVIEW_WIDTH,
) {
  if (localPath) return localPath;
  return screenshotUrl(siteUrl, width);
}
