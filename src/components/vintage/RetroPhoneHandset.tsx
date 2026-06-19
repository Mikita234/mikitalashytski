/** Decorative retro corded phone receiver — pseudo-3D SVG, aria-hidden */
export function RetroPhoneHandset({ className = "" }: { className?: string }) {
  return (
    <div className={`retro-phone-handset ${className}`} aria-hidden>
      <svg
        viewBox="0 0 120 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="retro-phone-handset__svg"
      >
        <defs>
          <linearGradient id="phone-body" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3d3d48" />
            <stop offset="35%" stopColor="#2a2a32" />
            <stop offset="70%" stopColor="#1a1a22" />
            <stop offset="100%" stopColor="#252530" />
          </linearGradient>
          <linearGradient id="phone-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <linearGradient id="phone-ear" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4a4a55" />
            <stop offset="50%" stopColor="#2e2e38" />
            <stop offset="100%" stopColor="#1c1c24" />
          </linearGradient>
          <linearGradient id="phone-mouth" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#35353f" />
            <stop offset="50%" stopColor="#484852" />
            <stop offset="100%" stopColor="#2a2a34" />
          </linearGradient>
          <filter id="phone-shadow" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="2" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.55" />
          </filter>
        </defs>

        {/* Coiled cord */}
        <path
          d="M58 168 C42 178 28 188 18 198 M58 168 C74 175 88 182 98 192"
          stroke="#1a1a1e"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M58 168 C48 176 38 184 28 194 M58 168 C68 174 78 180 88 188"
          stroke="#333"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Handset body */}
        <g filter="url(#phone-shadow)">
          <path
            d="M24 24 C24 12 34 4 60 4 C86 4 96 12 96 24 L96 88 C96 100 86 108 60 108 C34 108 24 100 24 88 Z"
            fill="url(#phone-body)"
            stroke="#444"
            strokeWidth="1.5"
          />
          <path
            d="M28 28 C28 18 36 10 60 10 C84 10 92 18 92 28 L92 84 C92 94 84 102 60 102 C36 102 28 94 28 84 Z"
            fill="url(#phone-highlight)"
            opacity="0.5"
          />

          {/* Ear cup */}
          <ellipse cx="60" cy="28" rx="22" ry="14" fill="url(#phone-ear)" stroke="#555" strokeWidth="1" />
          <ellipse cx="60" cy="28" rx="14" ry="8" fill="#0a0a0c" stroke="#333" strokeWidth="0.75" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <line
              key={`ear-${deg}`}
              x1={60 + 10 * Math.cos((deg * Math.PI) / 180)}
              y1={28 + 6 * Math.sin((deg * Math.PI) / 180)}
              x2={60 + 13 * Math.cos((deg * Math.PI) / 180)}
              y2={28 + 8 * Math.sin((deg * Math.PI) / 180)}
              stroke="#444"
              strokeWidth="0.5"
            />
          ))}

          {/* Mouthpiece */}
          <ellipse cx="60" cy="92" rx="20" ry="12" fill="url(#phone-mouth)" stroke="#555" strokeWidth="1" />
          <ellipse cx="60" cy="92" rx="12" ry="7" fill="#0a0a0c" stroke="#333" strokeWidth="0.75" />
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <line
              key={`mouth-${deg}`}
              x1={60 + 8 * Math.cos((deg * Math.PI) / 180)}
              y1={92 + 5 * Math.sin((deg * Math.PI) / 180)}
              x2={60 + 11 * Math.cos((deg * Math.PI) / 180)}
              y2={92 + 7 * Math.sin((deg * Math.PI) / 180)}
              stroke="#444"
              strokeWidth="0.5"
            />
          ))}

          {/* Center grip */}
          <rect x="52" y="48" width="16" height="32" rx="4" fill="#222228" stroke="#3a3a42" strokeWidth="1" />
          <line x1="56" y1="54" x2="64" y2="54" stroke="#444" strokeWidth="0.75" />
          <line x1="56" y1="62" x2="64" y2="62" stroke="#444" strokeWidth="0.75" />
          <line x1="56" y1="70" x2="64" y2="70" stroke="#444" strokeWidth="0.75" />

          {/* Bezel highlight */}
          <path
            d="M30 20 C38 14 50 12 60 12 C70 12 82 14 90 20"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="1"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}
