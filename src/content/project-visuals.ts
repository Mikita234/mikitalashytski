export type ProjectSlug = "kayer" | "mnsk7-tools" | "popular" | "alesyatakun";

export const projectVisuals: Record<
  ProjectSlug,
  {
    domain: string;
    url: string;
    accent: string;
    accentGlow: string;
    channel: string;
  }
> = {
  kayer: {
    domain: "kayer.pl",
    url: "https://kayer.pl",
    accent: "#8b5cf6",
    accentGlow: "rgba(139,92,246,0.35)",
    channel: "CH-01",
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
};

export function screenshotUrl(url: string, width = 900) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}
