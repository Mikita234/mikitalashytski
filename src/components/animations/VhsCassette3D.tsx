"use client";

import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";

export type VhsCassette3DProps = {
  label: string;
  subtitle?: string;
  selected?: boolean;
  inserting?: boolean;
  interactive?: boolean;
  showPlay?: boolean;
  className?: string;
  as?: "button" | "div";
  onClick?: () => void;
  "aria-label"?: string;
  "aria-pressed"?: boolean;
};

function ReelWindow({ side, spin }: { side: "left" | "right"; spin: boolean }) {
  const wound = side === "left" ? "vhs-c3d__reel--wound-left" : "vhs-c3d__reel--wound-right";

  return (
    <div className={`vhs-c3d__window vhs-c3d__window--${side}`}>
      <div className="vhs-c3d__glass" aria-hidden />
      <div className={`vhs-c3d__reel ${wound} ${spin ? "vhs-c3d__reel--spin" : ""}`}>
        <div className="vhs-c3d__tape-ring" aria-hidden />
        <div className="vhs-c3d__hub" aria-hidden />
      </div>
    </div>
  );
}

export function VhsCassette3D({
  label,
  subtitle,
  selected = false,
  inserting = false,
  interactive = true,
  showPlay = false,
  className = "",
  as: Tag = "div",
  onClick,
  "aria-label": ariaLabel,
  "aria-pressed": ariaPressed,
}: VhsCassette3DProps) {
  const reduced = useReducedMotion();
  const coarse = useCoarsePointer();
  const spinReels = interactive && !reduced;
  const tiltOnHover = interactive && !coarse && !reduced;

  const rootClass = [
    "vhs-c3d",
    tiltOnHover ? "vhs-c3d--tilt" : "vhs-c3d--tap",
    selected ? "vhs-c3d--selected" : "",
    inserting ? "vhs-c3d--inserting" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      type={Tag === "button" ? "button" : undefined}
      className={rootClass}
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={Tag === "button" ? ariaPressed : undefined}
    >
      <div className="vhs-c3d__stage" aria-hidden>
        <div className="vhs-c3d__body">
          <div className="vhs-c3d__rib vhs-c3d__rib--top" />
          <div className="vhs-c3d__mid">
            <ReelWindow side="left" spin={spinReels} />
            <div className="vhs-c3d__label">
              <div className="vhs-c3d__label-lines" aria-hidden />
              <span className="vhs-c3d__label-text">{label}</span>
              {subtitle ? (
                <span className="vhs-c3d__label-sub">{subtitle}</span>
              ) : null}
            </div>
            <ReelWindow side="right" spin={spinReels} />
          </div>
          <div className="vhs-c3d__rib vhs-c3d__rib--bottom" />
          <div className="vhs-c3d__edge vhs-c3d__edge--left" />
          <div className="vhs-c3d__edge vhs-c3d__edge--right" />
          <div className="vhs-c3d__shine" />
          {showPlay ? (
            <span className="vhs-c3d__play" aria-hidden>
              ▶ PLAY
            </span>
          ) : null}
        </div>
      </div>
    </Tag>
  );
}
