"use client";

import { PhilipsCrtTv } from "./PhilipsCrtTv";
import { RetroAdAmbientBg } from "./RetroAdAmbientBg";
import { TvChannelProvider } from "./tv-channel-context";

export function HeroWorkstation() {
  return (
    <TvChannelProvider>
      <div
        id="hero-tv"
        className="hero-workstation relative flex w-full justify-center lg:max-w-md"
      >
        <RetroAdAmbientBg />
        <div className="relative z-[1] w-full">
          <PhilipsCrtTv />
        </div>
      </div>
    </TvChannelProvider>
  );
}
