import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="relative min-h-dvh overflow-hidden bg-[#0a0a0a] font-mono text-[var(--vhs-white)]">
        <div className="vhs-noise" aria-hidden />
        <div className="vhs-scanlines-global" aria-hidden />

        <div className="relative flex min-h-dvh flex-col items-center justify-center px-4 text-center">
          {/* CRT static effect */}
          <div className="crt-tv-frame mx-auto mb-8 w-full max-w-sm">
            <div className="crt-tv-frame__bezel crt-flicker">
              <div className="flex aspect-[4/3] items-center justify-center bg-black">
                <div className="text-center">
                  <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-[var(--vhs-red)] rec-blink">
                    ● NO SIGNAL
                  </p>
                  <h1 className="mt-2 font-display text-7xl uppercase sm:text-8xl">404</h1>
                  <p className="mt-2 font-mono text-[9px] text-[var(--vhs-muted)]">
                    CHANNEL NOT FOUND
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="max-w-sm text-sm text-[var(--vhs-muted)]">
            Этот канал не существует. Антенну не трогай — просто вернись на
            главную.
          </p>
          <Link
            href="/"
            className="mt-8 border-2 border-[var(--vhs-acid)] bg-[var(--vhs-acid)] px-6 py-3 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:translate-x-0.5"
          >
            ▶ HOME
          </Link>
        </div>
      </body>
    </html>
  );
}
