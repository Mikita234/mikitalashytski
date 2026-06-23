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

      const eventName = classifyLink(href);
      if (!eventName) return;

      trackEvent(eventName, {
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
  if (isTelegramLink(href)) return "Telegram Click";
  if (href.startsWith("mailto:")) return "Email Click";
  if (isOrderLink(href)) return "Order Click";
  if (isMarketPageLink(href)) return "Market Page Click";
  if (href.includes("/services/")) return "Service Click";
  if (href.includes("/projects/")) return "Case Click";
  if (href.includes("/guides/")) return "Guide Click";
  return null;
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
