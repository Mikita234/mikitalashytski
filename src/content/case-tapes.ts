import { getProject } from "./projects";
import { screenshotUrl } from "./project-visuals";
import { site } from "./site";

export type CaseTapeSlug =
  | "popular"
  | "kayer-pl"
  | "kayer-ua"
  | "mnsk7-tools"
  | "astrologichnaya";

export type PlaybackStatus = "LIVE" | "IN PROGRESS" | "EXPERIMENT";

export interface FlowNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

export interface FlowEdge {
  from: string;
  to: string;
}

export interface CaseTape {
  slug: CaseTapeSlug;
  label: string;
  shortLabel: string;
  type: string;
  input: string;
  system: string;
  output: string;
  status: PlaybackStatus;
  accent: string;
  stack: string[];
  thumbnail?: string;
  projectHref: string;
  flowNodes: FlowNode[];
  flowEdges: FlowEdge[];
  terminalLines: string[];
}

const popular = getProject("popular")!;
const kayerPl = getProject("kayer-pl")!;
const kayerUa = getProject("kayer-ua")!;
const mnsk7 = getProject("mnsk7-tools")!;
const astro = getProject("astrologichnaya")!;

export const caseTapes: CaseTape[] = [
  {
    slug: "popular",
    label: "POPULAR POET",
    shortLabel: "POET",
    type: "TICKETS / EVENTS / AI BOT",
    input: "Event posts · Telegram · ticket orders · 3 languages",
    system: "Next.js · Supabase · Gemini bot · check-in · Resend",
    output: "Live ticketing · AI-assisted sales · weekly events",
    status: "LIVE",
    accent: "#22d3ee",
    stack: popular.stack.slice(0, 6),
    thumbnail: popular.screenshots?.[0],
    projectHref: "/projects/popular",
    flowNodes: [
      { id: "a", label: "EVENT POST", x: 12, y: 18 },
      { id: "b", label: "GEMINI BOT", x: 42, y: 18 },
      { id: "c", label: "CMS", x: 72, y: 18 },
      { id: "d", label: "TICKETS", x: 22, y: 58 },
      { id: "e", label: "CHECK-IN", x: 52, y: 58 },
      { id: "f", label: "SALES", x: 82, y: 58 },
    ],
    flowEdges: [
      { from: "a", to: "b" },
      { from: "b", to: "c" },
      { from: "c", to: "d" },
      { from: "d", to: "e" },
      { from: "e", to: "f" },
    ],
    terminalLines: [
      "> case: Popular Poet",
      "> events pipeline online",
      "> Gemini bot connected",
      "> own ticket stack live",
      "> check-in ready",
      "> status: LIVE",
    ],
  },
  {
    slug: "kayer-pl",
    label: "KAYER.PL",
    shortLabel: "KAYER PL",
    type: "E-COMMERCE / SHOPIFY / OPS",
    input: "Supplier feeds · legacy WooCommerce · product cards",
    system: "Shopify · BaseLinker · Python · OpenAI · carriers",
    output: "PL storefront · automated catalog · −70% manual work",
    status: "LIVE",
    accent: "#8b5cf6",
    stack: kayerPl.stack.slice(0, 6),
    thumbnail: kayerPl.screenshots?.[0],
    projectHref: "/projects/kayer-pl",
    flowNodes: [
      { id: "a", label: "SUPPLIER", x: 10, y: 22 },
      { id: "b", label: "BASELINKER", x: 38, y: 22 },
      { id: "c", label: "SHOPIFY", x: 66, y: 22 },
      { id: "d", label: "OPENAI", x: 24, y: 62 },
      { id: "e", label: "CATALOG", x: 54, y: 62 },
      { id: "f", label: "ORDERS", x: 84, y: 62 },
    ],
    flowEdges: [
      { from: "a", to: "b" },
      { from: "b", to: "c" },
      { from: "b", to: "d" },
      { from: "d", to: "e" },
      { from: "c", to: "f" },
    ],
    terminalLines: [
      "> case: KAYER.PL",
      "> catalog sync running",
      "> Shopify theme live",
      "> AI product cards batch ok",
      "> carriers: InPost · DHL · DPD",
      "> status: LIVE",
    ],
  },
  {
    slug: "kayer-ua",
    label: "KAYER.UA",
    shortLabel: "KAYER UA",
    type: "E-COMMERCE / UA MARKET",
    input: "UA catalog · Flu.io · Nova Poshta · partners",
    system: "Shopify · BaseLinker · Dilovod · notify pipeline",
    output: "UA storefront · stock alerts · partner flows",
    status: "LIVE",
    accent: "#a78bfa",
    stack: kayerUa.stack.slice(0, 6),
    thumbnail: kayerUa.screenshots?.[0],
    projectHref: "/projects/kayer-ua",
    flowNodes: [
      { id: "a", label: "CATALOG", x: 14, y: 20 },
      { id: "b", label: "FLU.IO", x: 44, y: 20 },
      { id: "c", label: "SHOPIFY", x: 74, y: 20 },
      { id: "d", label: "NOVA POSHTA", x: 20, y: 60 },
      { id: "e", label: "NOTIFY", x: 52, y: 60 },
      { id: "f", label: "PARTNERS", x: 82, y: 60 },
    ],
    flowEdges: [
      { from: "a", to: "b" },
      { from: "b", to: "c" },
      { from: "c", to: "d" },
      { from: "c", to: "e" },
      { from: "e", to: "f" },
    ],
    terminalLines: [
      "> case: KAYER.UA",
      "> market: Ukraine",
      "> Flu.io bridge ok",
      "> Nova Poshta linked",
      "> stock alerts live",
      "> status: LIVE",
    ],
  },
  {
    slug: "mnsk7-tools",
    label: "MNSK7-TOOLS",
    shortLabel: "MNSK7",
    type: "MARKETPLACE / CATALOG OPS",
    input: "Allegro API · supplier SKUs · EAN/GTIN pipeline",
    system: "Next.js · PostgreSQL · Allegro sync · Vercel",
    output: "3500+ orders · 425 SKUs · 100% EAN coverage",
    status: "LIVE",
    accent: "#f59e0b",
    stack: mnsk7.stack.slice(0, 6),
    thumbnail: mnsk7.screenshots?.[0],
    projectHref: "/projects/mnsk7-tools",
    flowNodes: [
      { id: "a", label: "SUPPLIER", x: 12, y: 22 },
      { id: "b", label: "EAN PIPE", x: 40, y: 22 },
      { id: "c", label: "SITE", x: 68, y: 22 },
      { id: "d", label: "ALLEGRO", x: 28, y: 62 },
      { id: "e", label: "REVIEWS", x: 58, y: 62 },
      { id: "f", label: "ORDERS", x: 88, y: 62 },
    ],
    flowEdges: [
      { from: "a", to: "b" },
      { from: "b", to: "c" },
      { from: "b", to: "d" },
      { from: "d", to: "e" },
      { from: "d", to: "f" },
    ],
    terminalLines: [
      "> case: MNSK7-Tools",
      "> Allegro API connected",
      "> EAN coverage 100%",
      "> 3500+ orders processed",
      "> 383 reviews synced",
      "> status: LIVE",
    ],
  },
  {
    slug: "astrologichnaya",
    label: "ASTROLOGICHNAYA",
    shortLabel: "ASTRO",
    type: "BRANDING / WEB / VISUAL",
    input: "Brand brief · visual identity · content structure",
    system: "Next.js · Tailwind · custom design system",
    output: "Full brand kit · site in progress · launch soon",
    status: "IN PROGRESS",
    accent: "#f43f5e",
    stack: astro.stack,
    projectHref: "/projects/astrologichnaya",
    flowNodes: [
      { id: "a", label: "BRIEF", x: 18, y: 24 },
      { id: "b", label: "BRAND", x: 48, y: 24 },
      { id: "c", label: "WEB", x: 78, y: 24 },
      { id: "d", label: "TYPE", x: 30, y: 64 },
      { id: "e", label: "VISUAL", x: 60, y: 64 },
      { id: "f", label: "LAUNCH", x: 90, y: 64 },
    ],
    flowEdges: [
      { from: "a", to: "b" },
      { from: "b", to: "d" },
      { from: "b", to: "e" },
      { from: "d", to: "c" },
      { from: "e", to: "c" },
      { from: "c", to: "f" },
    ],
    terminalLines: [
      "> case: Astrologichnaya",
      "> brand kit compiling",
      "> custom palette locked",
      "> website in progress",
      "> launch soon",
      `> contact: ${site.telegramHandle}`,
    ],
  },
];

export const caseTapeSlugs = caseTapes.map((c) => c.slug);

export function getCaseTape(slug: string): CaseTape | undefined {
  return caseTapes.find((c) => c.slug === slug);
}

export function getCaseTapeThumbnail(tape: CaseTape): string | undefined {
  if (tape.thumbnail) return tape.thumbnail;
  const project = getProject(tape.slug);
  const domain = project?.domains[0];
  if (domain) return screenshotUrl(`https://${domain}`, 480);
  return undefined;
}
