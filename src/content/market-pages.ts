import type { Locale } from "@/i18n/routing";
import type { ServiceSlug } from "./services";

export type MarketPage = {
  locale: Locale;
  market: string;
  slug: string;
  region: string;
  service: ServiceSlug;
  title: string;
  description: string;
  tag: string;
  audience: string;
  offer: string;
  proofCaseSlug: string;
  proofLabel: string;
  proofText: string;
  outcomes: string[];
  process: string[];
  searchTargets: string[];
  faq: { q: string; a: string }[];
  primaryCta: string;
  secondaryCta: string;
  relatedGuides: string[];
};

export const marketPages = [
  {
    locale: "en",
    market: "europe",
    slug: "business-website",
    region: "Europe",
    service: "business",
    title: "Business website for small companies in Europe",
    description:
      "Multilingual business websites for service companies, studios and local brands that need trust, SEO and a working lead path.",
    tag: "EU website entry",
    audience: "For founders and small teams that need a clear website before spending money on ads.",
    offer:
      "I build a practical site structure, write clear service pages, connect forms, add Search Console and make the site easy to expand across languages.",
    proofCaseSlug: "popular",
    proofLabel: "Relevant case",
    proofText:
      "Popular Poet combines multilingual pages, ticketing and content workflows for a real European event business.",
    outcomes: [
      "A site structure that explains what you sell and where you work",
      "Service pages with clear CTAs instead of generic brochure text",
      "Contact flow tested on mobile and desktop",
      "Search Console, sitemap, metadata and basic schema in place",
      "A clean path to add Polish, Ukrainian or Russian pages later",
    ],
    process: [
      "Review offer, geography and current materials",
      "Map the pages clients need before they contact you",
      "Build the site, forms, trust blocks and SEO base",
      "Publish on your domain and check the lead path",
      "Plan the first 30 days of SEO improvements",
    ],
    searchTargets: [
      "business website Europe",
      "small business website",
      "multilingual business website",
      "website for service business",
    ],
    faq: [
      {
        q: "Do I need all languages from day one?",
        a: "No. Usually we launch the strongest language first, then add translated market pages after the structure works.",
      },
      {
        q: "Can this work without paid ads?",
        a: "Yes, but the site needs service pages, Search Console and a publishing plan. Ads come later if tracking works.",
      },
      {
        q: "What do you need from me?",
        a: "A rough offer, service list, locations, examples you like and access to the domain if you already have one.",
      },
    ],
    primaryCta: "Send a project brief",
    secondaryCta: "Open business website service",
    relatedGuides: ["website-launch-checklist-full", "service-page-that-converts", "google-search-console-setup"],
  },
  {
    locale: "en",
    market: "europe",
    slug: "ecommerce-website",
    region: "Europe",
    service: "ecommerce",
    title: "E-commerce website and Shopify setup for Europe",
    description:
      "Shopify, WooCommerce migration and catalogue workflows for brands that need a store clients can actually buy from.",
    tag: "EU e-commerce entry",
    audience: "For product businesses that need checkout, catalogue structure and less manual shop work.",
    offer:
      "I help choose the right platform, clean up the catalogue, connect payments and shipping, and prepare product pages for search.",
    proofCaseSlug: "kayer-pl",
    proofLabel: "Relevant case",
    proofText:
      "KAYER.PL moved from WooCommerce complexity to Shopify workflows with catalogue sync and multilingual content operations.",
    outcomes: [
      "Working checkout and test order before launch",
      "Product and collection structure ready for SEO",
      "Shipping, payments and legal pages checked",
      "Migration or sync plan that avoids blind switching",
      "A repeatable workflow for product descriptions and updates",
    ],
    process: [
      "Audit current shop, products and integrations",
      "Choose Shopify, WooCommerce or a safer migration path",
      "Build collections, checkout, shipping and product templates",
      "Run test orders and fix operational edge cases",
      "Connect Search Console and plan product SEO improvements",
    ],
    searchTargets: [
      "Shopify setup Europe",
      "WooCommerce to Shopify migration",
      "ecommerce website Europe",
      "Shopify product SEO",
    ],
    faq: [
      {
        q: "Shopify or WooCommerce?",
        a: "For non-technical teams Shopify is usually safer. WooCommerce can work when the team already maintains WordPress well.",
      },
      {
        q: "Can you migrate an existing store?",
        a: "Yes. The migration plan starts with products, URLs, checkout, integrations and a safe switch date.",
      },
      {
        q: "Do you handle marketplace operations?",
        a: "I can help with catalogue sync and marketplace workflows when the platform and data are ready.",
      },
    ],
    primaryCta: "Discuss the store",
    secondaryCta: "Open e-commerce service",
    relatedGuides: ["frameworks-pick-2026", "google-search-console-setup", "form-tracking-conversions"],
  },
  {
    locale: "en",
    market: "europe",
    slug: "website-audit",
    region: "Europe",
    service: "audit",
    title: "Website audit and SEO rescue for European projects",
    description:
      "Technical website audit for slow pages, weak Search Console results, broken conversion tracking and unclear lead paths.",
    tag: "EU rescue entry",
    audience: "For businesses that already have a site but do not get enough leads or cannot trust the metrics.",
    offer:
      "I check the site like a client and like a technical auditor: speed, content, indexing, forms, tracking and next actions.",
    proofCaseSlug: "lead-scraping",
    proofLabel: "Relevant case",
    proofText:
      "The lead scraping and audit pipeline turns weak technical signals into a concrete fix list instead of vague advice.",
    outcomes: [
      "Clear list of what blocks trust, traffic or leads",
      "Search Console and PageSpeed interpretation in plain language",
      "Conversion path checked from page visit to message",
      "Prioritized fixes: now, next, later",
      "Recommendation whether to repair, rebuild or leave the site alone",
    ],
    process: [
      "Collect URL, target market and current symptoms",
      "Check speed, mobile layout, indexing and metadata",
      "Review offers, service pages and trust blocks",
      "Test forms, analytics and lead routing",
      "Send a short action plan with priorities",
    ],
    searchTargets: [
      "website audit Europe",
      "technical SEO audit",
      "fix slow website",
      "Google Search Console audit",
    ],
    faq: [
      {
        q: "Is this only technical SEO?",
        a: "No. The audit covers technical issues and the commercial path: what a visitor sees, trusts and clicks.",
      },
      {
        q: "Do I need access to all tools?",
        a: "A public URL is enough for a first pass. Search Console, analytics and hosting access make the audit more accurate.",
      },
      {
        q: "Can you also implement fixes?",
        a: "Yes. The audit separates quick fixes, content fixes and larger rebuild work.",
      },
    ],
    primaryCta: "Request an audit",
    secondaryCta: "Open audit service",
    relatedGuides: ["google-search-console-setup", "form-tracking-conversions", "homepage-seo-description"],
  },
  {
    locale: "pl",
    market: "poland",
    slug: "business-website",
    region: "Polska",
    service: "business",
    title: "Strona internetowa dla małej firmy w Polsce",
    description:
      "Strona usługowa po polsku lub wielojęzycznie: oferta, zaufanie, formularz, Search Console i podstawa lokalnego SEO.",
    tag: "PL website entry",
    audience: "Dla usług, studiów i lokalnych firm, które potrzebują strony zamiast kolejnego profilu w social media.",
    offer:
      "Układam strukturę usług, piszę prosty flow strony, podłączam formularz, domenę, podstawowe SEO i przygotowuję miejsce na dalszy content.",
    proofCaseSlug: "popular",
    proofLabel: "Podobny projekt",
    proofText:
      "Popular Poet to realny projekt w Polsce: wielojęzyczne treści, wydarzenia, bilety i narzędzia administracyjne.",
    outcomes: [
      "Strona, która jasno mówi co robisz i dla kogo",
      "Podstrony usług gotowe pod wyszukiwarkę",
      "Formularz i kontakt przetestowane na telefonie",
      "Search Console, sitemap, metadata i schema",
      "Możliwość dodania EN/UA/RU bez przebudowy",
    ],
    process: [
      "Krótki brief: oferta, miasto, usługi, zdjęcia",
      "Mapa strony i priorytetowe treści",
      "Budowa strony, formularzy i bloków zaufania",
      "Publikacja na domenie i test lead path",
      "Plan pierwszych działań SEO po starcie",
    ],
    searchTargets: [
      "strona internetowa dla firmy",
      "strona dla usług",
      "strona dla małej firmy Polska",
      "wielojęzyczna strona internetowa",
    ],
    faq: [
      {
        q: "Czy muszę mieć gotowe teksty?",
        a: "Nie. Wystarczą notatki, lista usług i przykłady. Tekst układam w prostą strukturę strony.",
      },
      {
        q: "Czy robisz lokalne SEO?",
        a: "Tak, baza obejmuje tytuły, opisy, sitemap, Search Console i strukturę pod usługi oraz miasta.",
      },
      {
        q: "Czy strona może mieć kilka języków?",
        a: "Tak. Najczęściej startujemy z jednym językiem i dodajemy kolejne po uporządkowaniu struktury.",
      },
    ],
    primaryCta: "Wyślij brief",
    secondaryCta: "Otwórz usługę strony firmowej",
    relatedGuides: ["website-launch-checklist-full", "service-page-that-converts", "google-business-profile"],
  },
  {
    locale: "pl",
    market: "poland",
    slug: "shopify-website",
    region: "Polska",
    service: "ecommerce",
    title: "Shopify i e-commerce dla firm w Polsce",
    description:
      "Sklep Shopify, migracja z WooCommerce, katalog produktów, płatności, dostawa i procesy ograniczające ręczną pracę.",
    tag: "PL Shopify entry",
    audience: "Dla marek produktowych, które chcą sprzedawać sprawniej i mieć mniej chaosu w katalogu.",
    offer:
      "Pomagam zaplanować platformę, checkout, strukturę kolekcji, migrację danych i workflow opisów produktów.",
    proofCaseSlug: "kayer-pl",
    proofLabel: "Podobny projekt",
    proofText:
      "KAYER.PL pokazuje migrację WooCommerce → Shopify, katalog, integracje i pipeline treści dla rynku beauty B2B.",
    outcomes: [
      "Działający checkout i testowe zamówienie",
      "Kolekcje i produkty ułożone pod SEO",
      "Płatności, dostawa i strony prawne sprawdzone",
      "Plan migracji bez ślepego przełączania ruchu",
      "Workflow opisów produktów i aktualizacji",
    ],
    process: [
      "Audyt obecnego sklepu, katalogu i integracji",
      "Wybór ścieżki: Shopify, WooCommerce lub migracja etapowa",
      "Konfiguracja checkoutu, dostawy i produktów",
      "Testy zamówień i poprawki operacyjne",
      "Search Console i plan SEO produktowego",
    ],
    searchTargets: [
      "Shopify Polska",
      "migracja WooCommerce Shopify",
      "sklep internetowy Shopify",
      "SEO produktów Shopify",
    ],
    faq: [
      {
        q: "Czy Shopify jest zawsze najlepszy?",
        a: "Nie zawsze, ale dla nietechnicznych zespołów często jest bezpieczniejszy niż utrzymywanie WooCommerce.",
      },
      {
        q: "Czy można migrować bez utraty sprzedaży?",
        a: "Plan migracji obejmuje testy, URL-e, checkout i moment przełączenia, żeby ograniczyć ryzyko.",
      },
      {
        q: "Czy ogarniasz integracje katalogu?",
        a: "Tak, szczególnie gdy trzeba uporządkować produkty, opisy, warianty i workflow aktualizacji.",
      },
    ],
    primaryCta: "Omów sklep",
    secondaryCta: "Otwórz usługę e-commerce",
    relatedGuides: ["frameworks-pick-2026", "google-search-console-setup", "seo-content-clusters"],
  },
  {
    locale: "uk",
    market: "ukraine",
    slug: "business-website",
    region: "Україна",
    service: "business",
    title: "Сайт для бізнесу в Україні",
    description:
      "Практичний сайт для послуг, студії або малого бізнесу: структура, довіра, форма заявки, SEO-база і можливість кількох мов.",
    tag: "UA website entry",
    audience: "Для малого бізнесу, який хоче нормальну сторінку продажу, а не лише Instagram або старий сайт.",
    offer:
      "Я збираю структуру сайту, сторінки послуг, форму, базове SEO і зрозумілий шлях заявки для клієнтів.",
    proofCaseSlug: "kayer-ua",
    proofLabel: "Схожий кейс",
    proofText:
      "KAYER.UA показує український e-commerce напрям з каталогом, SEO-сторінками і операційними процесами.",
    outcomes: [
      "Зрозуміла головна сторінка і сторінки послуг",
      "Форма або контакт, перевірені на телефоні",
      "Search Console, sitemap, metadata і базова schema",
      "Контент українською з можливістю додати EN/RU/PL",
      "План, що робити після запуску, щоб сайт не стояв мертвим",
    ],
    process: [
      "Короткий brief: послуги, аудиторія, регіон, матеріали",
      "Карта сайту і пріоритетні сторінки",
      "Збірка сторінок, форми і блоків довіри",
      "Публікація на домені та тест заявки",
      "План SEO-кроків на перші 30 днів",
    ],
    searchTargets: [
      "сайт для бізнесу Україна",
      "сайт для послуг",
      "розробка сайту для малого бізнесу",
      "SEO сайт українською",
    ],
    faq: [
      {
        q: "Чи потрібні готові тексти?",
        a: "Ні. Достатньо тез, послуг і прикладів. Я допоможу зібрати це в структуру сайту.",
      },
      {
        q: "Чи можна зробити кілька мов?",
        a: "Так. Найкраще спочатку зробити сильну основну версію, потім додати інші мови.",
      },
      {
        q: "Чи буде SEO?",
        a: "База входить у запуск: metadata, sitemap, Search Console, структура сторінок і внутрішні посилання.",
      },
    ],
    primaryCta: "Надіслати brief",
    secondaryCta: "Відкрити послугу сайту",
    relatedGuides: ["website-launch-checklist-full", "service-page-that-converts", "google-search-console-setup"],
  },
  {
    locale: "ru",
    market: "belarus",
    slug: "business-website",
    region: "Беларусь",
    service: "business",
    title: "Сайт для бизнеса в Беларуси",
    description:
      "Сайт для услуг, студии или малого бизнеса: понятный оффер, доверие, форма заявки, базовое SEO и мультиязычная структура.",
    tag: "RB website entry",
    audience: "Для бизнеса, которому нужна нормальная точка входа из поиска, а не только соцсети или старый сайт.",
    offer:
      "Я собираю структуру страниц, тексты услуг, форму заявки, базовую SEO-настройку и понятный путь клиента до контакта.",
    proofCaseSlug: "alesyatakun",
    proofLabel: "Похожий кейс",
    proofText:
      "Alesya Takun показывает, как личный бренд и услуга превращаются в понятную страницу с оплатой и записью.",
    outcomes: [
      "Главная и услуги написаны человеческим языком",
      "Форма или контакт проверены на телефоне",
      "Search Console, sitemap, metadata и базовая schema",
      "Структура готова к добавлению EN/PL/UK при необходимости",
      "План первых SEO-правок после запуска",
    ],
    process: [
      "Разбираем услугу, аудиторию, регион и материалы",
      "Собираем карту страниц и структуру оффера",
      "Делаем сайт, форму, блоки доверия и SEO-базу",
      "Публикуем на домене и проверяем путь заявки",
      "Фиксируем, что улучшать через 30 дней",
    ],
    searchTargets: [
      "сайт для бизнеса Беларусь",
      "сайт для услуг",
      "сайт для малого бизнеса",
      "SEO сайт для бизнеса",
    ],
    faq: [
      {
        q: "Можно работать удалённо?",
        a: "Да. Для сайта обычно достаточно созвона, материалов, доступов к домену и согласования этапов.",
      },
      {
        q: "Нужно ли сразу делать много страниц?",
        a: "Нет. Лучше начать с сильной структуры и добавить страницы услуг по мере понимания спроса.",
      },
      {
        q: "Что будет после запуска?",
        a: "Сайт получает базовую SEO-настройку, а дальше можно развивать страницы услуг, кейсы и гайды.",
      },
    ],
    primaryCta: "Отправить brief",
    secondaryCta: "Открыть услугу сайта",
    relatedGuides: ["website-launch-checklist-full", "service-page-that-converts", "yandex-for-ru-market"],
  },
  {
    locale: "ru",
    market: "belarus",
    slug: "website-audit",
    region: "Беларусь",
    service: "audit",
    title: "Аудит сайта и SEO-разбор для бизнеса",
    description:
      "Разбор сайта, который медленно грузится, плохо индексируется, не даёт заявок или показывает непонятные цифры в Search Console.",
    tag: "RB rescue entry",
    audience: "Для владельцев, у которых сайт уже есть, но непонятно, почему он не приводит клиентов.",
    offer:
      "Я проверяю скорость, мобильную версию, индексацию, тексты, формы, аналитику и даю список правок по приоритетам.",
    proofCaseSlug: "lead-scraping",
    proofLabel: "Похожий кейс",
    proofText:
      "Pipeline аудита переводит технические сигналы и слабые страницы в конкретный список действий.",
    outcomes: [
      "Понятно, что мешает заявкам и поиску",
      "Search Console и PageSpeed объяснены нормальным языком",
      "Форма, CTA и путь заявки проверены",
      "Правки разделены на срочные, следующие и необязательные",
      "Понятно: чинить сайт, пересобирать или оставить как есть",
    ],
    process: [
      "Получаю URL и симптомы проблемы",
      "Проверяю скорость, mobile, индексацию и metadata",
      "Смотрю оффер, страницы услуг и доверие",
      "Тестирую формы, analytics и lead routing",
      "Отдаю короткий план действий",
    ],
    searchTargets: [
      "аудит сайта",
      "SEO аудит сайта",
      "почему сайт не дает заявки",
      "исправить сайт",
    ],
    faq: [
      {
        q: "Это только про PageSpeed?",
        a: "Нет. Скорость важна, но аудит также смотрит оффер, доверие, формы и поисковую видимость.",
      },
      {
        q: "Нужны доступы?",
        a: "Для первого разбора достаточно URL. Search Console и analytics дают более точную картину.",
      },
      {
        q: "Можно потом внедрить правки?",
        a: "Да. После аудита можно отдельно взять быстрые фиксы или полный rescue.",
      },
    ],
    primaryCta: "Заказать аудит",
    secondaryCta: "Открыть услугу аудита",
    relatedGuides: ["google-search-console-setup", "form-tracking-conversions", "yandex-for-ru-market"],
  },
] as const satisfies readonly MarketPage[];

export const marketPageSlugs = marketPages.map((page) => ({
  locale: page.locale,
  market: page.market,
  slug: page.slug,
}));

export function getMarketPage(locale: string, market: string, slug: string) {
  return marketPages.find(
    (page) => page.locale === locale && page.market === market && page.slug === slug,
  );
}

export function getMarketPagesForLocale(locale: Locale) {
  return marketPages.filter((page) => page.locale === locale);
}

export function getMarketPagesForService(locale: Locale, service: ServiceSlug) {
  return marketPages.filter((page) => page.locale === locale && page.service === service);
}

export function getMarketPagePath(page: Pick<MarketPage, "market" | "slug">) {
  return `/${page.market}/${page.slug}`;
}
