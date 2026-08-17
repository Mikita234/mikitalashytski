"use client";

import { useEffect } from "react";
import { usePathname } from "@/i18n/navigation";
import { trackEvent } from "@/lib/analytics";
import { site } from "@/content/site";

const marketPatterns = [
  /^\/europe\/[^/]+/,
  /^\/pl\/poland\/[^/]+/,
  /^\/uk\/ukraine\/[^/]+/,
  /^\/ru\/belarus\/[^/]+/,
];

export function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute("href") ?? "";
      if (!href || href.startsWith("#")) return;

      const eventName = link.dataset.analyticsEvent || classifyLink(href);
      if (!eventName) return;

      trackEvent(eventName, {
        location: link.dataset.analyticsLocation || getLocation(link),
        lane: link.dataset.analyticsLane || "",
        service: link.dataset.analyticsService || getService(href),
        channel: link.dataset.analyticsChannel || "",
        from: pathname,
        href: normalizeHref(href),
        label: normalizeLabel(link.innerText),
      });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pathname]);

  return null;
}

function classifyLink(href: string) {
  if (isTelegramLink(href) || href.startsWith("mailto:")) return "contact_click";
  if (href.includes("/website-rescue")) return "rescue_open";
  if (isOrderLink(href)) return "order_open";
  if (isMarketPageLink(href)) return "market_page_open";
  if (href.includes("/services/")) return "service_open";
  if (href.includes("/projects/")) return "case_open";
  if (href.includes("/guides")) return "guide_open";
  if (href.includes("/works")) return "works_open";
  return null;
}

function getLocation(link: HTMLAnchorElement) {
  if (link.closest("header")) return "navigation";
  if (link.closest("footer")) return "footer";
  if (link.closest("#hero")) return "hero";
  return "content";
}

function getService(href: string) {
  const match = stripOrigin(href).match(/\/services\/([^/?#]+)/);
  return match?.[1] ?? "";
}

function isTelegramLink(href: string) {
  return href.includes("t.me/") || href === site.telegram;
}

function isOrderLink(href: string) {
  return href === "/order" || href.includes("/order?") || href.endsWith("/order");
}

function isMarketPageLink(href: string) {
  const path = stripOrigin(href);
  return marketPatterns.some((pattern) => pattern.test(path));
}

function stripOrigin(href: string) {
  if (!href.startsWith("http")) return href;
  try {
    return new URL(href).pathname;
  } catch {
    return href;
  }
}

function normalizeHref(href: string) {
  return stripOrigin(href).slice(0, 120);
}

function normalizeLabel(label: string) {
  return label.replace(/\s+/g, " ").trim().slice(0, 80);
}
