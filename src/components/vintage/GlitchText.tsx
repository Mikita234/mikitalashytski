"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function GlitchText({
  children,
  as: Tag = "span",
  className = "",
  animate = true,
}: {
  children: React.ReactNode;
  as?: "span" | "h1" | "h2" | "h3" | "p";
  className?: string;
  animate?: boolean;
}) {
  const reduced = useReducedMotion();
  const shouldAnimate = animate && !reduced;

  return (
    <Tag
      className={`glitch-text ${shouldAnimate ? "glitch-text--animate" : ""} ${className}`}
    >
      {shouldAnimate && (
        <>
          <span className="glitch-text__layer glitch-text__layer--red" aria-hidden>
            {children}
          </span>
          <span className="glitch-text__layer glitch-text__layer--cyan" aria-hidden>
            {children}
          </span>
        </>
      )}
      {children}
    </Tag>
  );
}
