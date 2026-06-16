export const vintageMarquee =
  "LANDINGS / ECOMMERCE / AUTOMATION / BOTS / SEO / AI VISIBILITY / SMALL BUSINESS / WEBSITES /";

export const vintageNav = [
  { href: "/", label: "HOME" },
  { href: "/#works", label: "WORKS" },
  { href: "/#packages", label: "PACKAGES" },
  { href: "/about", label: "APPROACH" },
  { href: "/contact", label: "ORDER" },
] as const;

export const vintageHero = {
  title: "DIGITAL BUILDER",
  subtitle:
    "Собираю digital-системы для малого бизнеса: сайты, e-commerce, маркетплейсы, боты и автоматизация — с SEO и видимостью в Google и AI.",
  body: "От идеи до заявок, интеграций и измеримого результата. Не шаблон — конкретная система под твою задачу.",
  audiences: [
    "Сайты и лендинги",
    "E-commerce и маркетплейсы",
    "Боты и автоматизация",
    "SEO и AI visibility",
  ],
  ctaPrimary: "Разобрать идею",
  ctaSecondary: "Смотреть кейсы",
  ctaPrimaryHref: "/contact",
  ctaSecondaryHref: "/#works",
  channel: "CH-404",
  tvLabel: "VIBE-TV 2001",
};

export const vintageServices = [
  {
    id: "landing",
    title: "Быстрый лендинг",
    desc: "Тест идеи, услуга, заявки. От 1 500 PLN, 3–7 дней.",
    tag: "PKG-01",
  },
  {
    id: "website",
    title: "Сайт под проект",
    desc: "Структура, страницы, SEO, адаптив, форма. От 3 000 PLN.",
    tag: "PKG-02",
  },
  {
    id: "bot",
    title: "Бот / автоматизация",
    desc: "Telegram, email, таблицы, заявки, API. От 1 000 PLN.",
    tag: "PKG-03",
  },
  {
    id: "seo",
    title: "SEO / AI visibility",
    desc: "Google, ChatGPT, Gemini, schema, GSC. От 1 000 PLN.",
    tag: "PKG-04",
  },
] as const;

export type ProjectStatus = "LIVE" | "EXPERIMENT" | "SOLD" | "IN PROGRESS";

const vintageWorkEntries = [
  {
    slug: "kayer" as const,
    title: "KAYER Ecommerce System",
    desc: "WooCommerce → Shopify migration, BaseLinker sync, multilingual AI content pipeline, Python automation and Ukrainian market with delivery/accounting integrations.",
    tags: [
      "Shopify",
      "BaseLinker",
      "OpenAI",
      "Python",
      "Flu.io",
      "Nova Poshta",
      "Dilovod",
    ],
    status: "LIVE" as ProjectStatus,
    href: "/projects/kayer",
    style: "vhs" as const,
    domain: "kayer.pl",
  },
  {
    slug: "mnsk7-tools" as const,
    title: "MNSK7-TOOLS",
    desc: "CNC tool shop + Allegro marketplace: China sourcing, EAN/GTIN, 3500+ orders, 425 SKUs, loyalty program and category SEO architecture.",
    tags: ["Marketplace", "Ops", "Allegro", "E-commerce"],
    status: "LIVE" as ProjectStatus,
    href: "/projects/mnsk7-tools",
    style: "tv" as const,
    domain: "mnsk7-tools.pl",
  },
  {
    slug: "popular" as const,
    title: "Popular Poet Digital Infrastructure",
    desc: "Two-domain sales system: course vitrine + own ticketing, admin, check-in, PL/UA/RU i18n — plus Gemini bot (~4 posts/week: photo+text → pages → Bing ping). AI organic → sales in 2 weeks.",
    tags: ["Next.js", "Supabase", "Gemini", "Ticketing", "i18n", "Automation"],
    status: "LIVE" as ProjectStatus,
    href: "/projects/popular",
    style: "teletext" as const,
    domain: "popularpoet.pl",
  },
  {
    slug: "alesyatakun" as const,
    title: "ALESYA TAKUN",
    desc: "Service business site for psychologist: online booking, 3-D Secure payments, free-pay amount, FAQ and schema.org for search and AI.",
    tags: ["Payments", "Medical", "Brand", "Next.js"],
    status: "LIVE" as ProjectStatus,
    href: "/projects/alesyatakun",
    style: "ad" as const,
    domain: "alesyatakun.by",
  },
  {
    slug: "baselinker-reports" as const,
    title: "BASELINKER REPORTS",
    desc: "Internal e-commerce analytics: ABC/XYZ reports, deadstock detection, AI recommendations, forecast and Excel export for purchasing decisions.",
    tags: ["Analytics", "AI", "BaseLinker", "Python"],
    status: "LIVE" as ProjectStatus,
    href: "/projects/baselinker-reports",
    style: "ad" as const,
    domain: "internal tool",
  },
  {
    slug: "event-bot" as const,
    title: "POPULAR POET EVENT BOT",
    desc: "Part of Popular Poet infra: drop photos + text → Gemini parses events → live pages → Bing ping. ~4 events/week without manual CMS entry.",
    tags: ["Gemini", "Automation", "Bing ping", "Popular Poet"],
    status: "LIVE" as ProjectStatus,
    href: "/projects/event-bot",
    style: "win98" as const,
    domain: "Gemini bot",
  },
  {
    slug: "lead-scraping" as const,
    title: "LEAD HUNTING",
    desc: "Pipeline to find weak local business sites, auto-audit, score 0–100 and prepare outreach emails.",
    tags: ["Scraping", "SEO audit", "Outreach"],
    status: "EXPERIMENT" as ProjectStatus,
    href: "/projects/lead-scraping",
    style: "vhs" as const,
    domain: "pipeline",
  },
  {
    slug: "astrologichnaya" as const,
    title: "ASTROLOGICHNAYA",
    desc: "Branding, visual language and website for a creative project. In progress.",
    tags: ["Branding", "Design", "Web"],
    status: "IN PROGRESS" as ProjectStatus,
    href: "/projects/astrologichnaya",
    style: "teletext" as const,
    domain: "in progress",
  },
] as const;

/** Featured on homepage — commerce & ops first, not theater-first */
export const vintageWorksHome = vintageWorkEntries.filter((w) =>
  ["kayer", "mnsk7-tools", "popular", "alesyatakun", "baselinker-reports"].includes(
    w.slug,
  ),
);

/** Full portfolio for project pages and deep links */
export const vintageWorks = vintageWorkEntries;

export const vintageUnderHood = {
  tag: "UNDER THE HOOD",
  title: "Что не видно на обложке",
  subtitle:
    "Этот сайт — демо самого себя: JSON-LD, hreflang на 4 языка, sitemap, llms.txt, статика без bloat.",
  cards: [
    {
      title: "Structured data",
      text: "Organization + Person + WebSite JSON-LD на каждой странице. View source — найдёшь.",
    },
    {
      title: "Built for AI answers",
      text: "Публичный llms.txt и robots.txt с доступом для GPTBot, PerplexityBot, ClaudeBot.",
    },
    {
      title: "Multilingual architecture",
      text: "EN / PL / RU / UA с полным hreflang. Добавить язык = один JSON-файл.",
    },
    {
      title: "Performance as feature",
      text: "SSG, без лишнего JS, Core Web Vitals в зелёной зоне. Скорость = SEO + UX.",
    },
  ],
  specs: [
    { label: "RENDER", value: "STATIC SSG", bg: "#f00", fg: "#fff" },
    { label: "LOCALES", value: "EN PL RU UA", bg: "#ff0", fg: "#000" },
    { label: "JSON-LD", value: "ACTIVE", bg: "#0f0", fg: "#000" },
    { label: "LLMS.TXT", value: "PUBLIC", bg: "#f0f", fg: "#fff" },
    { label: "AI BOTS", value: "ALLOWED", bg: "#00f", fg: "#fff" },
    { label: "MOTION", value: "REDUCED OK", bg: "#333", fg: "#ccc" },
  ],
} as const;

export const crtProjectChannels = [
  { slug: "kayer" as const, label: "KAYER", href: "/projects/kayer" },
  { slug: "mnsk7-tools" as const, label: "MNSK7", href: "/projects/mnsk7-tools" },
  { slug: "popular" as const, label: "POET", href: "/projects/popular" },
  { slug: "alesyatakun" as const, label: "TAKUN", href: "/projects/alesyatakun" },
] as const;

export const vintageProcess = [
  {
    step: "01",
    title: "Ты кидаешь идею",
    desc: "Рассказываешь, что нужно: сайт, магазин, бот, автоматизация или интеграция.",
  },
  {
    step: "02",
    title: "Я собираю первый прототип",
    desc: "Быстрый черновик, чтобы увидеть форму, а не презентацию на 40 слайдов.",
  },
  {
    step: "03",
    title: "Смотрим, что работает",
    desc: "Проверяем логику, скорость, конверсию и то, что реально цепляет.",
  },
  {
    step: "04",
    title: "Правим, упаковываем, запускаем",
    desc: "Доводим до продакшена: оплата, SEO, интеграции, деплой.",
  },
  {
    step: "05",
    title: "Докручиваем под деньги, заявки или видимость",
    desc: "Метрики, итерации, AI-выдача — что принесёт результат.",
  },
] as const;

export const vintageContact = {
  headline: "Есть идея, проект или digital-хаос?",
  subline: "Покажи задачу — разберём, что собрать и за сколько. Без пустого «связаться».",
  stickers: ["CALL NOW", "FROM 1500 PLN", "FAST LAUNCH"],
  channel: "CH-404",
  ctaOrder: "Разобрать идею",
  ctaTelegram: "Telegram",
  ctaEmail: "Email",
};

export const vintagePopups = [
  { id: "1", title: "website.exe", text: "website.exe is running" },
  { id: "2", title: "vibe.sys", text: "old internet mode enabled" },
] as const;

export const crtStates = [
  { id: "terminal", type: "terminal" as const },
  { id: "nosignal", type: "nosignal" as const },
  { id: "building", type: "building" as const },
  { id: "order", type: "order" as const },
  { id: "grid", type: "grid" as const },
  { id: "teletext", type: "teletext" as const },
  { id: "win98", type: "win98" as const },
  { id: "rewind", type: "rewind" as const },
] as const;

export const terminalLines = [
  "> npm run build",
  "> launching landing...",
  "> bot connected",
  "> status: ONLINE",
  "> projects: 5 featured / 8 total",
  "> mode: small_business",
];

export const orderFormServices = [
  "Быстрый лендинг",
  "Сайт под проект / бизнес",
  "E-commerce / магазин",
  "Telegram-бот / автоматизация",
  "SEO / AI visibility",
  "Аудит + план",
  "Другое",
] as const;

export const orderBudgets = [
  "до 2 000 PLN",
  "2 000 – 5 000 PLN",
  "5 000 – 10 000 PLN",
  "10 000+ PLN",
  "Пока не знаю",
] as const;

export const orderTimelines = [
  "Срочно (до 1 недели)",
  "1–2 недели",
  "2–4 недели",
  "Гибко",
] as const;
