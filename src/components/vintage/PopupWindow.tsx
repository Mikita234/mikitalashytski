"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

type PopupWindowProps = {
  title: string;
  text: string;
  position?: "bottom-right" | "bottom-left";
  delay?: number;
};

const positionClasses = {
  "bottom-right": "bottom-24 right-4 lg:bottom-28 lg:right-8",
  "bottom-left": "bottom-20 left-4 lg:bottom-24 lg:left-8",
};

export function PopupWindow({
  title,
  text,
  position = "bottom-right",
  delay = 0,
}: PopupWindowProps) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(reduced);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (reduced) {
      setVisible(true);
      return;
    }
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [reduced, delay]);

  if (closed || !visible) return null;

  return (
    <motion.div
      className={`pointer-events-auto fixed z-40 hidden w-44 border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] shadow-lg sm:block lg:w-52 ${positionClasses[position]}`}
      initial={reduced ? false : { scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      role="complementary"
      aria-label={title}
    >
      <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-1 py-0.5">
        <span className="truncate font-mono text-[10px] font-bold text-white">
          {title}
        </span>
        <button
          type="button"
          onClick={() => setClosed(true)}
          aria-label="Close"
          className="ml-1 flex h-4 w-4 shrink-0 items-center justify-center border border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] text-[10px] font-bold text-black leading-none"
        >
          ✕
        </button>
      </div>
      <div className="p-2">
        <p className="font-mono text-[10px] text-black">{text}</p>
        <div className="mt-2 flex justify-end">
          <button
            type="button"
            onClick={() => setClosed(true)}
            className="border border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-2 py-0.5 font-mono text-[9px] text-black"
          >
            OK
          </button>
        </div>
      </div>
    </motion.div>
  );
}
