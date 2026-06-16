"use client";

import { useLocale } from "next-intl";
import { useState, useRef, useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { locales, localeNames, localeFlags, type Locale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function switchTo(next: Locale) {
    setOpen(false);
    router.replace(pathname, { locale: next });
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex h-9 items-center gap-1.5 border border-white/20 px-2 font-mono text-[10px] uppercase text-[var(--vhs-muted)] transition-colors hover:text-[var(--vhs-acid)]"
      >
        <span aria-hidden>{localeFlags[locale]}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 min-w-[150px] overflow-hidden border-2 border-[var(--vhs-dirt)] bg-[#141418] p-1 shadow-2xl"
        >
          {locales.map((l) => (
            <li key={l}>
              <button
                type="button"
                role="option"
                aria-selected={l === locale}
                onClick={() => switchTo(l)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left font-mono text-xs transition-colors hover:bg-white/5 ${
                  l === locale
                    ? "text-[var(--vhs-acid)]"
                    : "text-[var(--vhs-muted)]"
                }`}
              >
                <span className="font-mono text-xs opacity-60">
                  {localeFlags[l]}
                </span>
                {localeNames[l]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
