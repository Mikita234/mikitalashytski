"use client";

import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from "react";

type TvChannelContextValue = {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
};

const TvChannelContext = createContext<TvChannelContextValue | null>(null);

export function TvChannelProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0);

  return (
    <TvChannelContext.Provider value={{ index, setIndex }}>
      {children}
    </TvChannelContext.Provider>
  );
}

export function useTvChannel() {
  const ctx = useContext(TvChannelContext);
  if (!ctx) {
    throw new Error("useTvChannel must be used within TvChannelProvider");
  }
  return ctx;
}
