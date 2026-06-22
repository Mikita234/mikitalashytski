import { projectVisuals } from "./project-visuals";

export type CommercialEra = "80s" | "90s" | "2000s";

export type VisualStyle =
  | "starburst"
  | "gradient-90s"
  | "y2k-chrome"
  | "infomercial"
  | "case-spot";

export type PriceBadge = "automateToday" | "freeConsult";

export interface RetroCommercial {
  id: string;
  era: CommercialEra;
  visualStyle: VisualStyle;
  duration: number;
  ctaHref: string;
  priceFromPln?: number;
  priceOnlyPln?: number;
  priceBadge?: PriceBadge;
  sitePreviewUrl?: string;
  sitePreviewLocal?: string;
  sitePreviewLabel?: string;
  showBrowserChrome?: boolean;
}

export const retroCommercials: RetroCommercial[] = [
  {
    id: "landing",
    era: "80s",
    ctaHref: "/order",
    priceFromPln: 1500,
    visualStyle: "starburst",
    duration: 12000,
    sitePreviewUrl: projectVisuals.alesyatakun.url,
    sitePreviewLabel: projectVisuals.alesyatakun.domain,
    showBrowserChrome: true,
  },
  {
    id: "ecommerce",
    era: "90s",
    ctaHref: "/order",
    priceFromPln: 5000,
    visualStyle: "gradient-90s",
    duration: 13000,
    sitePreviewUrl: projectVisuals["kayer-pl"].url,
    sitePreviewLocal: projectVisuals["kayer-pl"].tvPreview,
    sitePreviewLabel: projectVisuals["kayer-pl"].domain,
    showBrowserChrome: true,
  },
  {
    id: "bots",
    era: "90s",
    ctaHref: "/order",
    visualStyle: "gradient-90s",
    duration: 11000,
  },
  {
    id: "multilingual",
    era: "2000s",
    ctaHref: "/order",
    visualStyle: "y2k-chrome",
    duration: 12000,
    sitePreviewUrl: projectVisuals["kayer-ua"].url,
    sitePreviewLabel: projectVisuals["kayer-ua"].domain,
    showBrowserChrome: true,
  },
  {
    id: "audit",
    era: "80s",
    ctaHref: "/order?service=audit",
    priceOnlyPln: 500,
    visualStyle: "infomercial",
    duration: 14000,
  },
  {
    id: "kayer",
    era: "90s",
    ctaHref: "/projects/kayer-pl",
    visualStyle: "case-spot",
    duration: 13000,
    sitePreviewUrl: projectVisuals["kayer-pl"].url,
    sitePreviewLocal: projectVisuals["kayer-pl"].tvPreview,
    sitePreviewLabel: projectVisuals["kayer-pl"].domain,
    showBrowserChrome: true,
  },
  {
    id: "popular",
    era: "2000s",
    ctaHref: "/projects/popular",
    visualStyle: "case-spot",
    duration: 12000,
    sitePreviewUrl: projectVisuals.popular.url,
    sitePreviewLabel: projectVisuals.popular.domain,
    showBrowserChrome: true,
  },
  {
    id: "mnsk7",
    era: "2000s",
    ctaHref: "/projects/mnsk7-tools",
    visualStyle: "case-spot",
    duration: 12000,
    sitePreviewUrl: projectVisuals["mnsk7-tools"].url,
    sitePreviewLabel: projectVisuals["mnsk7-tools"].domain,
    showBrowserChrome: true,
  },
  {
    id: "telegram-cta",
    era: "80s",
    ctaHref: "/contact",
    priceBadge: "freeConsult",
    visualStyle: "starburst",
    duration: 10000,
  },
];
