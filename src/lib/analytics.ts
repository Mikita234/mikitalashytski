import Clarity from "@microsoft/clarity";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
    plausible?: (
      event: string,
      options?: { props?: Record<string, string> },
    ) => void;
    dataLayer?: Record<string, string>[];
  }
}

export function trackEvent(name: string, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const safeProps = props ? sanitizeProps(props) : undefined;
  window.plausible?.(name, safeProps ? { props: safeProps } : undefined);
  window.dataLayer?.push({ event: name, ...(safeProps ?? {}) });
  if (typeof window.clarity === "function") {
    Clarity.event(name);
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", name, safeProps ?? {});
  }
}

function sanitizeProps(props: Record<string, string>) {
  return Object.fromEntries(
    Object.entries(props)
      .filter(([, value]) => value !== "")
      .map(([key, value]) => [key, value.slice(0, 120)]),
  );
}
