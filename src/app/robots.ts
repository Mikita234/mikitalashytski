import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everyone, including AI crawlers (GPTBot, PerplexityBot, ClaudeBot,
      // Google-Extended) is welcome — this site wants to be cited in AI answers.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
