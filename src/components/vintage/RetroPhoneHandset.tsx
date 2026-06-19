"use client";

import { useId } from "react";

/** Decorative 1980s brick cellphone — matte black plastic, pseudo-3D SVG */
export function RetroPhoneHandset({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");

  const body = `phone-body-${uid}`;
  const edge = `phone-edge-${uid}`;
  const screen = `phone-screen-${uid}`;
  const btn = `phone-btn-${uid}`;
  const antenna = `phone-antenna-${uid}`;
  const shadow = `phone-shadow-${uid}`;

  const keys = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];

  return (
    <div className={`retro-phone-handset ${className}`} aria-hidden>
      <svg
        viewBox="0 0 72 168"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="retro-phone-handset__svg"
      >
        <defs>
          <linearGradient id={body} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2e2e34" />
            <stop offset="18%" stopColor="#1c1c22" />
            <stop offset="55%" stopColor="#121218" />
            <stop offset="82%" stopColor="#1a1a20" />
            <stop offset="100%" stopColor="#25252c" />
          </linearGradient>
          <linearGradient id={edge} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.18)" />
            <stop offset="12%" stopColor="rgba(255,255,255,0.06)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0)" />
            <stop offset="88%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.14)" />
          </linearGradient>
          <linearGradient id={screen} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0a1218" />
            <stop offset="100%" stopColor="#040608" />
          </linearGradient>
          <linearGradient id={btn} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3a3a42" />
            <stop offset="45%" stopColor="#282830" />
            <stop offset="100%" stopColor="#1e1e24" />
          </linearGradient>
          <linearGradient id={antenna} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#1a1a20" />
            <stop offset="40%" stopColor="#2a2a32" />
            <stop offset="100%" stopColor="#3a3a44" />
          </linearGradient>
          <filter id={shadow} x="-30%" y="-15%" width="160%" height="140%">
            <feDropShadow dx="1" dy="3" stdDeviation="3" floodColor="#000" floodOpacity="0.65" />
          </filter>
        </defs>

        <g filter={`url(#${shadow})`}>
          {/* Antenna */}
          <rect x="30" y="0" width="4" height="22" rx="1.5" fill={`url(#${antenna})`} />
          <rect x="30.5" y="1" width="1" height="18" rx="0.5" fill="rgba(255,255,255,0.12)" />

          {/* Main body — flared top, boot chin */}
          <path
            d="M14 24 C14 20 18 18 24 18 H48 C54 18 58 20 58 24 V132 C58 138 54 142 48 142 H24 C18 142 14 138 14 132 Z"
            fill={`url(#${body})`}
            stroke="#3a3a44"
            strokeWidth="1"
          />

          {/* Top shoulder flare */}
          <path
            d="M12 26 C12 22 16 19 24 19 H48 C56 19 60 22 60 26 V30 H12 Z"
            fill="#222228"
            stroke="#33333c"
            strokeWidth="0.75"
          />

          {/* Bottom boot / mouthpiece chin */}
          <path
            d="M10 128 C10 134 14 146 24 148 H48 C58 146 62 134 62 128 V142 H10 Z"
            fill="#18181e"
            stroke="#2e2e36"
            strokeWidth="0.75"
          />

          {/* Side grip grooves */}
          {[38, 48, 58, 68, 78, 88, 98, 108].map((y) => (
            <line
              key={`groove-l-${y}`}
              x1="15.5"
              y1={y}
              x2="15.5"
              y2={y + 4}
              stroke="#2a2a32"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}
          {[38, 48, 58, 68, 78, 88, 98, 108].map((y) => (
            <line
              key={`groove-r-${y}`}
              x1="56.5"
              y1={y}
              x2="56.5"
              y2={y + 4}
              stroke="#08080c"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          ))}

          {/* Front face highlight stripe */}
          <rect x="18" y="22" width="36" height="118" rx="2" fill={`url(#${edge})`} opacity="0.55" />

          {/* Speaker grille — earpiece */}
          <rect x="22" y="28" width="28" height="10" rx="1.5" fill="#0e0e12" stroke="#2a2a32" strokeWidth="0.75" />
          {Array.from({ length: 4 }).map((_, row) =>
            Array.from({ length: 7 }).map((__, col) => (
              <circle
                key={`spk-${row}-${col}`}
                cx={26 + col * 3.5}
                cy={31 + row * 2.2}
                r="0.55"
                fill="#2a2a32"
              />
            )),
          )}

          {/* LCD display */}
          <rect x="24" y="42" width="24" height="14" rx="1" fill={`url(#${screen})`} stroke="#1e2830" strokeWidth="0.75" />
          <rect x="25" y="43" width="22" height="3" rx="0.5" fill="rgba(80,200,120,0.08)" />
          <rect x="25" y="48" width="14" height="1.5" rx="0.5" fill="rgba(80,200,120,0.05)" />

          {/* Keypad 3×4 */}
          {keys.map((row, ri) =>
            row.map((label, ci) => {
              const bx = 22 + ci * 10.5;
              const by = 62 + ri * 11;
              return (
                <g key={`key-${ri}-${ci}`}>
                  <rect
                    x={bx}
                    y={by}
                    width="8.5"
                    height="8.5"
                    rx="1.2"
                    fill={`url(#${btn})`}
                    stroke="#44444e"
                    strokeWidth="0.5"
                  />
                  <rect x={bx + 0.5} y={by + 0.5} width="7.5" height="2" rx="0.5" fill="rgba(255,255,255,0.06)" />
                  <text
                    x={bx + 4.25}
                    y={by + 6.2}
                    textAnchor="middle"
                    fill="rgba(220,220,228,0.85)"
                    fontSize="4.5"
                    fontFamily="ui-monospace, monospace"
                    fontWeight="600"
                  >
                    {label}
                  </text>
                </g>
              );
            }),
          )}

          {/* Call / function buttons row */}
          <rect x="22" y="108" width="8" height="6" rx="1" fill="#1a3020" stroke="#2a5038" strokeWidth="0.5" />
          <path d="M24.5 111.5 L26 113 L28.5 110" stroke="#4ade80" strokeWidth="0.8" fill="none" strokeLinecap="round" />
          <rect x="32" y="108" width="8" height="6" rx="1" fill={`url(#${btn})`} stroke="#44444e" strokeWidth="0.5" />
          <rect x="42" y="108" width="8" height="6" rx="1" fill="#301818" stroke="#502828" strokeWidth="0.5" />
          <path d="M44.5 111 L46 113 L47.5 111" stroke="#f87171" strokeWidth="0.8" fill="none" strokeLinecap="round" />

          {/* Bottom speaker ridges */}
          {[122, 126, 130, 134].map((y) => (
            <rect key={`ridge-${y}`} x="20" y={y} width="32" height="1.5" rx="0.5" fill="#222228" stroke="#33333c" strokeWidth="0.3" />
          ))}

          {/* Specular edge highlights */}
          <path d="M16 26 V130" stroke="rgba(255,255,255,0.1)" strokeWidth="0.75" />
          <path d="M56 26 V130" stroke="rgba(0,0,0,0.35)" strokeWidth="0.75" />
          <path
            d="M20 24 C28 21 44 21 52 24"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="0.75"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
