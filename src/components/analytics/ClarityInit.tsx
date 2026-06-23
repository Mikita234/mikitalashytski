"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { site } from "@/content/site";

export function ClarityInit() {
  useEffect(() => {
    if (!site.clarityProjectId) return;

    Clarity.init(site.clarityProjectId);
  }, []);

  return null;
}
