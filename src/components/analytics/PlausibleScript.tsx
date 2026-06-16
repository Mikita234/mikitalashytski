import { site } from "@/content/site";

export function PlausibleScript() {
  if (!site.plausibleDomain) return null;

  return (
    <script
      defer
      data-domain={site.plausibleDomain}
      src="https://plausible.io/js/script.js"
    />
  );
}
