// Site-wide config. Override via NEXT_PUBLIC_* env vars in production.
function env(key: string, fallback: string) {
  const value = process.env[key];
  return value?.trim() ? value : fallback;
}

export const site = {
  name: "Mikita Lashytski",
  shortName: "ML",
  brandChannel: "CH404",
  domain: env("NEXT_PUBLIC_SITE_DOMAIN", "www.mikitalashytski.com"),
  url: env("NEXT_PUBLIC_SITE_URL", "https://www.mikitalashytski.com"),
  email: env("NEXT_PUBLIC_CONTACT_EMAIL", "mikitalashytski@gmail.com"),
  telegram: env("NEXT_PUBLIC_TELEGRAM_URL", "https://t.me/mikita_pl"),
  telegramHandle: env("NEXT_PUBLIC_TELEGRAM_HANDLE", "@mikita_pl"),
  github: env("NEXT_PUBLIC_GITHUB_URL", "https://github.com/Mikita234"),
  githubHandle: env("NEXT_PUBLIC_GITHUB_HANDLE", "Mikita234"),
  linkedin: env(
    "NEXT_PUBLIC_LINKEDIN_URL",
    "https://www.linkedin.com/in/mikitalashytski",
  ),
  plausibleDomain: env("NEXT_PUBLIC_PLAUSIBLE_DOMAIN", ""),
} as const;
