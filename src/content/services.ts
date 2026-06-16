export const servicePackages = [
  {
    id: "landing",
    title: "Быстрый лендинг",
    desc: "Для теста идеи, услуги или сбора заявок. Одна страница, чёткий оффер, форма связи.",
    priceFrom: "1 500 PLN",
    timeline: "3–7 дней",
    tag: "PKG-01",
    href: "/services/landing",
  },
  {
    id: "website",
    title: "Сайт под проект",
    desc: "Структура, несколько страниц, адаптив, SEO-база, форма связи. Для бизнеса и сервисов.",
    priceFrom: "3 000 PLN",
    timeline: "1–3 недели",
    tag: "PKG-02",
    href: "/services/business",
  },
  {
    id: "bot",
    title: "Бот / автоматизация",
    desc: "Telegram, email, таблицы, заявки, API. Снимаю ручную рутину с публикаций и лидов.",
    priceFrom: "1 000 PLN",
    timeline: "3–14 дней",
    tag: "PKG-03",
    href: "/services/bots",
  },
  {
    id: "seo",
    title: "SEO / AI visibility",
    desc: "Чтобы проект находили в Google, ChatGPT, Gemini и AI-поиске. Schema, индексация, llms.txt.",
    priceFrom: "1 000 PLN",
    timeline: "5–10 дней",
    tag: "PKG-04",
    href: "/services/seo",
  },
] as const;

export const pricingTiers = [
  { service: "Быстрый лендинг", from: "1 500", to: "3 000", unit: "PLN" },
  { service: "Сайт под проект / бизнес", from: "3 000", to: "7 000", unit: "PLN" },
  { service: "E-commerce / магазин", from: "5 000", to: "15 000", unit: "PLN" },
  { service: "Telegram-бот / автоматизация", from: "1 000", to: "5 000", unit: "PLN" },
  { service: "SEO / AI visibility setup", from: "1 000", to: "3 000", unit: "PLN" },
  { service: "Аудит + план", from: "300", to: "500", unit: "PLN" },
] as const;

export const servicePages = [
  {
    slug: "landing",
    title: "Лендинги для малого бизнеса",
    headline: "Быстрый лендинг под услугу, продукт или тест гипотезы",
    problem:
      "Нужно быстро проверить спрос, собрать заявки или запустить новое направление — без месяца разработки.",
    solution:
      "Одна продающая страница: оффер, доверие, форма, аналитика. Запуск за дни, не недели.",
    includes: [
      "Один сильный лендинг",
      "Форма заявки + Telegram",
      "Адаптив и скорость",
      "Базовый SEO",
      "Подключение аналитики",
    ],
    examples: ["KAYER", "MNSK7-TOOLS", "Alesya Takun"],
    priceFrom: "1 500 PLN",
    timeline: "3–7 дней",
    cta: "Разобрать идею",
  },
  {
    slug: "business",
    title: "Сайты для бизнеса и сервисов",
    headline: "Сайт под проект: структура, доверие, заявки и поиск",
    problem:
      "Бизнес живёт в соцсетях или на устаревшем сайте: нет доверия, нет записи, нет мультиязычности, нет SEO.",
    solution:
      "Делаю многостраничный сайт с услугами, оплатой, переводами и структурой под Google и AI-выдачу.",
    includes: [
      "Страницы услуг / о проекте / контакты",
      "Онлайн-запись и оплата",
      "PL / UA / RU (и другие языки)",
      "FAQ и schema.org",
      "Контент под локальный поиск",
    ],
    examples: ["Alesya Takun", "Popular Poet"],
    priceFrom: "3 000 PLN",
    timeline: "1–3 недели",
    cta: "Показать проект",
  },
  {
    slug: "ecommerce",
    title: "E-commerce и маркетплейсы",
    headline: "Магазин, миграция и операционка под продажи",
    problem:
      "Каталог разъехался, ручные обновления съедают время, маркетплейс и сайт не синхронизированы, миграция пугает.",
    solution:
      "Собираю или мигрирую магазин, связываю с BaseLinker/маркетплейсами, автоматизирую контент и ops.",
    includes: [
      "Shopify / Next.js витрина",
      "Миграция с WooCommerce или legacy",
      "Синхронизация каталога и заказов",
      "Мультиязычный контент",
      "Интеграции доставки и учёта",
    ],
    examples: ["KAYER", "MNSK7-TOOLS", "BaseLinker Reports"],
    priceFrom: "5 000 PLN",
    timeline: "2–6 недель",
    cta: "Разобрать магазин",
  },
  {
    slug: "bots",
    title: "Telegram-боты и автоматизации",
    headline: "Боты и связки, которые снимают ручную работу",
    problem:
      "Контент публикуется вручную, заявки теряются, таблицы не синхронизируются, рутина съедает время.",
    solution:
      "Собираю Telegram-ботов, автопубликации, интеграции с таблицами, email и API под твой процесс.",
    includes: [
      "Telegram-бот под заявки / уведомления",
      "Автопубликация: пост → сайт → перевод",
      "Связки Google Sheets / email / CRM",
      "AI-парсинг контента (Gemini / OpenAI)",
      "Простая админка или команды",
    ],
    examples: ["Popular Poet Event Bot", "KAYER Python automation", "BaseLinker Reports"],
    priceFrom: "1 000 PLN",
    timeline: "3–14 дней",
    cta: "Показать задачу",
  },
  {
    slug: "seo",
    title: "SEO / AI visibility",
    headline: "Чтобы находили в Google и в ответах ChatGPT",
    problem:
      "Сайт есть, а заявок нет. Не индексируется, не виден в AI-поиске, нет структурированных данных.",
    solution:
      "Настраиваю технический SEO, schema.org, llms.txt, GSC, контент под локальные и AI-запросы.",
    includes: [
      "Технический SEO-аудит",
      "Schema.org (Service, Product, LocalBusiness…)",
      "llms.txt + robots для AI-ботов",
      "Google Search Console",
      "Рекомендации по контенту",
    ],
    examples: ["KAYER", "Popular Poet", "Этот сайт"],
    priceFrom: "1 000 PLN",
    timeline: "5–10 дней",
    cta: "Разобрать видимость",
  },
  {
    slug: "creative",
    title: "Креативные и event-проекты",
    headline: "Сайт и автоматизация для курсов, студий и событий",
    problem:
      "Проект живёт в Instagram: нет своего домена, нет билетов, нет SEO, публикации делаются вручную.",
    solution:
      "Собираю витрину + продажи + бот для публикаций. Пример ниши — не основной оффер, а доказательство гибкости.",
    includes: [
      "Витрина + касса / регистрация",
      "Расписание и мультиязычность",
      "Telegram-бот для публикаций",
      "SEO и AI visibility",
      "Админка и check-in",
    ],
    examples: ["Popular Poet / PopularTickets", "Event Bot"],
    priceFrom: "3 000 PLN",
    timeline: "1–4 недели",
    cta: "Разобрать проект",
  },
] as const;

export type ServiceSlug = (typeof servicePages)[number]["slug"];

export function getService(slug: string) {
  return servicePages.find((s) => s.slug === slug);
}

export const serviceSlugs = servicePages.map((s) => s.slug);
