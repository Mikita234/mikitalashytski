import type { Locale } from "@/i18n/routing";

export type StackCategory =
  | "framework"
  | "hosting"
  | "cms"
  | "payments"
  | "auth"
  | "database"
  | "automation"
  | "commerce";

export type CostLevel = "free" | "low" | "medium" | "high";
export type TechnicalLevel = "beginner" | "intermediate" | "advanced";

export interface StackOption {
  id: string;
  name: string;
  category: StackCategory;
  plainLanguage: Record<Locale, string>;
  bestFor: Record<Locale, string>;
  avoidIf: Record<Locale, string>;
  costLevel: CostLevel;
  technicalLevel: TechnicalLevel;
  pipelines: string[];
}

export const stackCategories: Record<StackCategory, Record<Locale, string>> = {
  framework: {
    en: "Site builder (code)",
    pl: "Generator strony (kod)",
    ru: "Сборщик сайта (код)",
    uk: "Збирач сайту (код)",
  },
  hosting: {
    en: "Where it lives online",
    pl: "Gdzie stoi online",
    ru: "Где сайт живёт в интернете",
    uk: "Де сайт живе в інтернеті",
  },
  cms: {
    en: "How you edit text",
    pl: "Jak edytujesz tekst",
    ru: "Как править текст",
    uk: "Як правити текст",
  },
  payments: {
    en: "Taking money",
    pl: "Przyjmowanie płatności",
    ru: "Приём оплаты",
    uk: "Прийом оплати",
  },
  auth: {
    en: "Login & accounts",
    pl: "Logowanie i konta",
    ru: "Вход и аккаунты",
    uk: "Вхід і акаунти",
  },
  database: {
    en: "Storing data",
    pl: "Przechowywanie danych",
    ru: "Хранение данных",
    uk: "Зберігання даних",
  },
  automation: {
    en: "Bots & scripts",
    pl: "Boty i skrypty",
    ru: "Боты и скрипты",
    uk: "Боти й скрипти",
  },
  commerce: {
    en: "Shop platform",
    pl: "Platforma sklepu",
    ru: "Платформа магазина",
    uk: "Платформа магазину",
  },
};

export const stackOptions: StackOption[] = [
  {
    id: "astro",
    name: "Astro",
    category: "framework",
    plainLanguage: {
      en: "Fast static pages. Like a brochure site, but you own the code.",
      pl: "Szybkie statyczne strony. Jak broszura, ale z własnym kodem.",
      ru: "Быстрые статичные страницы. Как брошюра, но код ваш.",
      uk: "Швидкі статичні сторінки. Як брошура, але код ваш.",
    },
    bestFor: {
      en: "Plumber, lawyer, cafe — simple service sites",
      pl: "Hydraulik, prawnik, kawiarnia — proste strony usługowe",
      ru: "Сантехник, юрист, кафе — простые сайты услуг",
      uk: "Сантехнік, юрист, кафе — прості сайти послуг",
    },
    avoidIf: {
      en: "You need user accounts or real-time dashboards",
      pl: "Potrzebujesz kont użytkowników lub dashboardów live",
      ru: "Нужны личные кабинеты или живые дашборды",
      uk: "Потрібні особисті кабінети або live-дашборди",
    },
    costLevel: "free",
    technicalLevel: "beginner",
    pipelines: ["business-site", "content-site", "portfolio"],
  },
  {
    id: "nextjs",
    name: "Next.js",
    category: "framework",
    plainLanguage: {
      en: "Full app framework. For sites that behave like software.",
      pl: "Pełny framework aplikacji. Dla stron działających jak software.",
      ru: "Полноценный фреймворк. Для сайтов, которые работают как программа.",
      uk: "Повноцінний фреймворк. Для сайтів, що працюють як програма.",
    },
    bestFor: {
      en: "Tickets, SaaS, dashboards, auth flows",
      pl: "Bilety, SaaS, dashboardy, logowanie",
      ru: "Билеты, SaaS, дашборды, авторизация",
      uk: "Квитки, SaaS, дашборди, авторизація",
    },
    avoidIf: {
      en: "You only need 5 static pages and want the cheapest hosting",
      pl: "Potrzebujesz tylko 5 statycznych stron i najtańszego hostingu",
      ru: "Нужно 5 статичных страниц и минимальная цена хостинга",
      uk: "Потрібно 5 статичних сторінок і мінімальна ціна хостингу",
    },
    costLevel: "low",
    technicalLevel: "intermediate",
    pipelines: ["events-ticketing", "saas", "portfolio"],
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    category: "hosting",
    plainLanguage: {
      en: "Free hosting for static/Astro sites. Fast worldwide.",
      pl: "Darmowy hosting dla Astro/statycznych stron. Szybko na całym świecie.",
      ru: "Бесплатный хостинг для Astro/статики. Быстро по всему миру.",
      uk: "Безкоштовний хостинг для Astro/статики. Швидко по всьому світу.",
    },
    bestFor: {
      en: "Default for simple business sites",
      pl: "Domyślnie dla prostych stron biznesowych",
      ru: "По умолчанию для простых бизнес-сайтов",
      uk: "За замовчуванням для простих бізнес-сайтів",
    },
    avoidIf: {
      en: "You need server-side database queries on every page load",
      pl: "Potrzebujesz zapytań do bazy przy każdym ładowaniu strony",
      ru: "Нужны запросы к базе при каждой загрузке страницы",
      uk: "Потрібні запити до бази при кожному завантаженні",
    },
    costLevel: "free",
    technicalLevel: "beginner",
    pipelines: ["business-site", "content-site"],
  },
  {
    id: "vercel",
    name: "Vercel",
    category: "hosting",
    plainLanguage: {
      en: "Hosting made for Next.js. Preview links on every change.",
      pl: "Hosting pod Next.js. Podgląd przy każdej zmianie.",
      ru: "Хостинг под Next.js. Превью при каждом изменении.",
      uk: "Хостинг під Next.js. Превʼю при кожній зміні.",
    },
    bestFor: {
      en: "Next.js apps, SaaS, ticketing",
      pl: "Aplikacje Next.js, SaaS, bilety",
      ru: "Next.js приложения, SaaS, билеты",
      uk: "Next.js застосунки, SaaS, квитки",
    },
    avoidIf: {
      en: "A 5-page plumber site — Astro + Cloudflare is cheaper and simpler",
      pl: "Strona hydraulika na 5 podstron — Astro + Cloudflare jest prostsze",
      ru: "Сайт сантехника на 5 страниц — Astro + Cloudflare проще и дешевле",
      uk: "Сайт сантехніка на 5 сторінок — Astro + Cloudflare простіше",
    },
    costLevel: "low",
    technicalLevel: "intermediate",
    pipelines: ["events-ticketing", "saas", "portfolio"],
  },
  {
    id: "markdown",
    name: "Markdown files",
    category: "cms",
    plainLanguage: {
      en: "Text files you edit in Cursor or GitHub. No admin panel needed.",
      pl: "Pliki tekstowe edytujesz w Cursorze lub GitHub. Bez panelu admin.",
      ru: "Текстовые файлы правите в Cursor или GitHub. Без админки.",
      uk: "Текстові файли правите в Cursor або GitHub. Без адмінки.",
    },
    bestFor: {
      en: "Small sites, one editor, low maintenance",
      pl: "Małe strony, jeden edytor, mało utrzymania",
      ru: "Маленькие сайты, один редактор, мало поддержки",
      uk: "Маленькі сайти, один редактор, мало підтримки",
    },
    avoidIf: {
      en: "Non-technical staff must edit daily without help",
      pl: "Personel nietechniczny musi edytować codziennie sam",
      ru: "Нетехнический сотрудник должен править каждый день сам",
      uk: "Нетехнічний співробітник має правити щодня сам",
    },
    costLevel: "free",
    technicalLevel: "beginner",
    pipelines: ["business-site", "content-site"],
  },
  {
    id: "shopify",
    name: "Shopify",
    category: "commerce",
    plainLanguage: {
      en: "Ready-made online shop. Products, cart, payments built in.",
      pl: "Gotowy sklep online. Produkty, koszyk, płatności wbudowane.",
      ru: "Готовый интернет-магазин. Товары, корзина, оплата из коробки.",
      uk: "Готовий інтернет-магазин. Товари, кошик, оплата з коробки.",
    },
    bestFor: {
      en: "Selling physical or digital products without coding a cart",
      pl: "Sprzedaż produktów bez kodowania koszyka",
      ru: "Продажа товаров без программирования корзины",
      uk: "Продаж товарів без програмування кошика",
    },
    avoidIf: {
      en: "You only need a contact form, not a shop",
      pl: "Potrzebujesz tylko formularza kontaktowego, nie sklepu",
      ru: "Нужна только форма заявки, а не магазин",
      uk: "Потрібна лише форма заявки, а не магазин",
    },
    costLevel: "medium",
    technicalLevel: "beginner",
    pipelines: ["ecommerce"],
  },
  {
    id: "supabase",
    name: "Supabase",
    category: "database",
    plainLanguage: {
      en: "Online database + login. Like a spreadsheet with superpowers.",
      pl: "Baza online + logowanie. Jak arkusz z supermocami.",
      ru: "Онлайн-база + вход. Как таблица Excel, но для приложений.",
      uk: "Онлайн-база + вхід. Як таблиця Excel, але для застосунків.",
    },
    bestFor: {
      en: "Tickets, bookings, user accounts",
      pl: "Bilety, rezerwacje, konta użytkowników",
      ru: "Билеты, бронирования, аккаунты",
      uk: "Квитки, бронювання, акаунти",
    },
    avoidIf: {
      en: "Static brochure site with no user data",
      pl: "Statyczna strona wizytówka bez danych użytkowników",
      ru: "Статичная визитка без данных пользователей",
      uk: "Статична візитка без даних користувачів",
    },
    costLevel: "low",
    technicalLevel: "intermediate",
    pipelines: ["events-ticketing", "saas"],
  },
  {
    id: "streamlit",
    name: "Streamlit",
    category: "framework",
    plainLanguage: {
      en: "Quick internal dashboards in Python. Not for public marketing sites.",
      pl: "Szybkie dashboardy w Pythonie. Nie na publiczne strony marketingowe.",
      ru: "Быстрые внутренние панели на Python. Не для публичных сайтов.",
      uk: "Швидкі внутрішні панелі на Python. Не для публічних сайтів.",
    },
    bestFor: {
      en: "Internal reports, data tools for your team",
      pl: "Raporty wewnętrzne, narzędzia danych dla zespołu",
      ru: "Внутренние отчёты, инструменты для команды",
      uk: "Внутрішні звіти, інструменти для команди",
    },
    avoidIf: {
      en: "Customer-facing brand website",
      pl: "Publiczna strona marki dla klientów",
      ru: "Публичный сайт бренда для клиентов",
      uk: "Публічний сайт бренду для клієнтів",
    },
    costLevel: "low",
    technicalLevel: "intermediate",
    pipelines: ["internal-tool"],
  },
  {
    id: "stripe",
    name: "Stripe",
    category: "payments",
    plainLanguage: {
      en: "Card payments for custom apps. Needs developer setup.",
      pl: "Płatności kartą w custom app. Wymaga konfiguracji developera.",
      ru: "Оплата картой в своём приложении. Нужна настройка разработчиком.",
      uk: "Оплата карткою у своєму застосунку. Потрібне налаштування.",
    },
    bestFor: {
      en: "SaaS subscriptions, custom ticket sales",
      pl: "Subskrypcje SaaS, własna sprzedaż biletów",
      ru: "SaaS-подписки, своя продажа билетов",
      uk: "SaaS-підписки, власний продаж квитків",
    },
    avoidIf: {
      en: "Simple shop — Shopify handles payments for you",
      pl: "Prosty sklep — Shopify obsługuje płatności",
      ru: "Простой магазин — Shopify сам принимает оплату",
      uk: "Простий магазин — Shopify сам приймає оплату",
    },
    costLevel: "low",
    technicalLevel: "advanced",
    pipelines: ["saas", "events-ticketing"],
  },
  {
    id: "n8n",
    name: "n8n",
    category: "automation",
    plainLanguage: {
      en: "Connect apps with visual workflows. Email → sheet → Telegram.",
      pl: "Łącz aplikacje wizualnymi workflow. Email → arkusz → Telegram.",
      ru: "Связывает сервисы визуально. Почта → таблица → Telegram.",
      uk: "Звʼязує сервіси візуально. Пошта → таблиця → Telegram.",
    },
    bestFor: {
      en: "Form → CRM → notification chains",
      pl: "Formularz → CRM → powiadomienia",
      ru: "Форма → CRM → уведомления",
      uk: "Форма → CRM → сповіщення",
    },
    avoidIf: {
      en: "You have no recurring tasks to automate yet",
      pl: "Nie masz jeszcze powtarzalnych zadań do automatyzacji",
      ru: "Пока нет повторяющихся задач для автоматизации",
      uk: "Поки немає повторюваних задач для автоматизації",
    },
    costLevel: "low",
    technicalLevel: "intermediate",
    pipelines: ["automation"],
  },
];

export function getStackById(id: string) {
  return stackOptions.find((s) => s.id === id);
}
