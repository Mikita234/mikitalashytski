export type ProjectSlug =
  | "kayer-pl"
  | "kayer-ua"
  | "mnsk7-tools"
  | "popular"
  | "alesyatakun"
  | "baselinker-reports";

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
  "kayer-pl": {
    domain: "kayer.pl",
    url: "https://kayer.pl",
    accent: "#8b5cf6",
    accentGlow: "rgba(139,92,246,0.35)",
    channel: "CH-01",
  },
  "kayer-ua": {
    domain: "kayer.ua",
    url: "https://kayer.ua",
    accent: "#a78bfa",
    accentGlow: "rgba(167,139,250,0.35)",
    channel: "CH-01B",
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
  "baselinker-reports": {
    domain: "internal",
    url: "",
    accent: "#f59e0b",
    accentGlow: "rgba(245,158,11,0.35)",
    channel: "CH-05",
  },
};

export function screenshotUrl(url: string, width = 900) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}`;
}
