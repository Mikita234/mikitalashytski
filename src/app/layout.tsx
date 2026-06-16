import type { ReactNode } from "react";

// The real <html>/<body> live in src/app/[locale]/layout.tsx so the lang
// attribute and fonts can be set per-locale (next-intl App Router pattern).
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
