import type { Locale } from "@/i18n/routing";

export type PipelineSlug =
  | "portfolio"
  | "business-site"
  | "content-site"
  | "ecommerce"
  | "events-ticketing"
  | "saas"
  | "internal-tool"
  | "automation"
  | "rescue";

export interface BuildPhase {
  code: string;
  title: string;
  body: string;
  doneWhen: string;
}

export interface LocalizedBuildPhase {
  code: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  doneWhen: Record<Locale, string>;
}

export interface ProjectPipeline {
  id: PipelineSlug;
  tag: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  bestFor: Record<Locale, string[]>;
  avoidIf: Record<Locale, string[]>;
  requiredInputs: Record<Locale, string[]>;
  recommendedStack: string[];
  alternatives: string[];
  rejectedOptions: Record<Locale, string[]>;
  skillPackFiles: string[];
  buildPhases: LocalizedBuildPhase[];
  risks: Record<Locale, string[]>;
  rescueTriggers: Record<Locale, string[]>;
  isDefault?: boolean;
}

const L = (en: string, pl: string, ru: string, uk: string) =>
  ({ en, pl, ru, uk }) as Record<Locale, string>;

const LA = (en: string[], pl: string[], ru: string[], uk: string[]) =>
  ({ en, pl, ru, uk }) as Record<Locale, string[]>;

const phases = (
  items: {
    code: string;
    title: Record<Locale, string>;
    body: Record<Locale, string>;
    doneWhen: Record<Locale, string>;
  }[],
): LocalizedBuildPhase[] => items;

export const pipelines: ProjectPipeline[] = [
  {
    id: "portfolio",
    tag: "PIPE-01",
    title: L(
      "Portfolio site",
      "Strona portfolio",
      "Сайт-портфолио",
      "Сайт-портфоліо",
    ),
    description: L(
      "Show your work, not your stack. Fast static site with case studies.",
      "Pokaż prace, nie stack. Szybka statyczna strona z case studies.",
      "Показать работы, а не стек. Быстрый статичный сайт с кейсами.",
      "Показати роботи, а не stack. Швидкий статичний сайт з кейсами.",
    ),
    bestFor: LA(
      ["Designers", "Developers", "Photographers", "Freelancers"],
      ["Designerzy", "Developerzy", "Fotografowie", "Freelancerzy"],
      ["Дизайнеры", "Разработчики", "Фотографы", "Фрилансеры"],
      ["Дизайнери", "Розробники", "Фотографи", "Фрілансери"],
    ),
    avoidIf: LA(
      ["You need payments or booking", "Client edits content daily"],
      ["Potrzebujesz płatności lub rezerwacji", "Klient edytuje treść codziennie"],
      ["Нужна оплата или бронирование", "Клиент правит контент каждый день"],
      ["Потрібна оплата або бронювання", "Клієнт править контент щодня"],
    ),
    requiredInputs: LA(
      ["3–6 best projects", "Short bio", "Contact method", "Visual style refs"],
      ["3–6 najlepszych projektów", "Krótkie bio", "Kontakt", "Referencje stylu"],
      ["3–6 лучших проектов", "Короткое bio", "Способ связи", "Референсы стиля"],
      ["3–6 найкращих проєктів", "Коротке bio", "Контакт", "Референси стилю"],
    ),
    recommendedStack: ["astro", "cloudflare-pages", "markdown"],
    alternatives: ["nextjs", "vercel"],
    rejectedOptions: LA(
      ["WordPress for 5 pages", "Heavy animation libraries"],
      ["WordPress na 5 stron", "Ciężkie biblioteki animacji"],
      ["WordPress на 5 страниц", "Тяжёлые библиотеки анимаций"],
      ["WordPress на 5 сторінок", "Важкі бібліотеки анімацій"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Gather cases", "Zbierz case'y", "Собрать кейсы", "Зібрати кейси"),
        body: L(
          "Pick 3–6 projects with screenshots, role, outcome.",
          "Wybierz 3–6 projektów ze screenshotami, rolą i wynikiem.",
          "Выбери 3–6 проектов: скрины, роль, результат.",
          "Обери 3–6 проєктів: скріни, роль, результат.",
        ),
        doneWhen: L(
          "Each case has image + 2 sentences + link",
          "Każdy case ma obraz + 2 zdania + link",
          "У каждого кейса есть картинка + 2 предложения + ссылка",
          "У кожного кейсу є картинка + 2 речення + посилання",
        ),
      },
      {
        code: "02",
        title: L("Scaffold Astro", "Scaffold Astro", "Скaffold Astro", "Scaffold Astro"),
        body: L(
          "Create repo, init Astro, add one layout and home page.",
          "Utwórz repo, init Astro, dodaj layout i stronę główną.",
          "Создай repo, init Astro, один layout и главную.",
          "Створи repo, init Astro, один layout і головну.",
        ),
        doneWhen: L(
          "localhost shows hero + project grid",
          "localhost pokazuje hero + grid projektów",
          "localhost показывает hero + сетку проектов",
          "localhost показує hero + сітку проєктів",
        ),
      },
    ]),
    risks: LA(
      ["Too many animations", "Fake project copy", "No real contact path"],
      ["Za dużo animacji", "Sztuczny copy projektów", "Brak realnego kontaktu"],
      ["Слишком много анимаций", "Фейковые описания", "Нет реального контакта"],
      ["Занадто багато анімацій", "Фейкові описи", "Немає реального контакту"],
    ),
    rescueTriggers: LA(
      ["Build fails after AI refactor", "Mobile layout broken"],
      ["Build pada po refaktorze AI", "Zepsuty layout mobile"],
      ["Build падает после рефактора AI", "Сломан mobile layout"],
      ["Build падає після рефактору AI", "Зламаний mobile layout"],
    ),
  },
  {
    id: "business-site",
    tag: "PIPE-02",
    isDefault: true,
    title: L(
      "Business service site",
      "Strona usługowa",
      "Сайт услуг (сантехник, юрист, кафе)",
      "Сайт послуг (сантехнік, юрист, кафе)",
    ),
    description: L(
      "Default for non-tech: Astro + Cloudflare + Markdown. Not Next.js.",
      "Domyślnie dla nietechnicznych: Astro + Cloudflare + Markdown. Nie Next.js.",
      "По умолчанию для нетech: Astro + Cloudflare + Markdown. Не Next.js.",
      "За замовчуванням для нетech: Astro + Cloudflare + Markdown. Не Next.js.",
    ),
    bestFor: LA(
      ["Plumber, lawyer, dentist", "Local services", "One clear offer"],
      ["Hydraulik, prawnik, dentysta", "Usługi lokalne", "Jedna jasna oferta"],
      ["Сантехник, юрист, стоматолог", "Локальные услуги", "Один понятный оффер"],
      ["Сантехнік, юрист, стоматолог", "Локальні послуги", "Один зрозумілий офер"],
    ),
    avoidIf: LA(
      ["Online shop with 100+ SKUs", "User accounts and dashboards"],
      ["Sklep online ze 100+ SKU", "Konta użytkowników i dashboardy"],
      ["Интернет-магазин со 100+ SKU", "Личные кабинеты и дашборды"],
      ["Інтернет-магазин зі 100+ SKU", "Особисті кабінети та дашборди"],
    ),
    requiredInputs: LA(
      ["Business name & city", "Services list", "Phone/email", "Photos or placeholders"],
      ["Nazwa i miasto", "Lista usług", "Telefon/email", "Zdjęcia lub placeholdery"],
      ["Название и город", "Список услуг", "Телефон/email", "Фото или заглушки"],
      ["Назва і місто", "Список послуг", "Телефон/email", "Фото або заглушки"],
    ),
    recommendedStack: ["astro", "cloudflare-pages", "markdown"],
    alternatives: ["nextjs", "vercel"],
    rejectedOptions: LA(
      ["Next.js for a 5-page plumber site", "WordPress + 20 plugins", "Lovable locked demo"],
      ["Next.js na stronę hydraulika", "WordPress + 20 pluginów", "Zamknięte demo Lovable"],
      ["Next.js для сайта сантехника", "WordPress + 20 плагинов", "Закрытая демка Lovable"],
      ["Next.js для сайту сантехніка", "WordPress + 20 плагінів", "Закрите демо Lovable"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Write the offer", "Napisz ofertę", "Написать оффер", "Написати офер"),
        body: L(
          "Who you serve, what you fix, why you, one CTA.",
          "Dla kogo, co naprawiasz, dlaczego ty, jedno CTA.",
          "Для кого, что чинишь, почему ты, одно CTA.",
          "Для кого, що лагодиш, чому ти, одне CTA.",
        ),
        doneWhen: L(
          "Hero text fits only YOUR business",
          "Tekst hero pasuje TYLKO do twojej firmy",
          "Текст hero подходит ТОЛЬКО вашему бизнесу",
          "Текст hero підходить ЛИШЕ вашому бізнесу",
        ),
      },
      {
        code: "02",
        title: L("Astro + deploy", "Astro + deploy", "Astro + деплой", "Astro + deploy"),
        body: L(
          "GitHub repo → Astro template → Cloudflare Pages → live URL.",
          "GitHub repo → szablon Astro → Cloudflare Pages → live URL.",
          "GitHub repo → шаблон Astro → Cloudflare Pages → живой URL.",
          "GitHub repo → шаблон Astro → Cloudflare Pages → live URL.",
        ),
        doneWhen: L(
          "Production URL opens on phone, form sends email",
          "Production URL działa na telefonie, formularz wysyła mail",
          "Production URL открывается на телефоне, форма шлёт письмо",
          "Production URL відкривається на телефоні, форма шле лист",
        ),
      },
    ]),
    risks: LA(
      ["Generic AI copy", "No form delivery", "Skipping Search Console"],
      ["Generyczny copy AI", "Brak dostarczenia formularza", "Pominięcie Search Console"],
      ["Общий AI-текст", "Форма не отправляет", "Пропуск Search Console"],
      ["Загальний AI-текст", "Форма не відправляє", "Пропуск Search Console"],
    ),
    rescueTriggers: LA(
      ["Domain DNS wrong", "Form silent fail", "Site looks like template"],
      ["Zła DNS domeny", "Formularz milczy", "Strona jak szablon"],
      ["DNS домена неверный", "Форма молчит", "Сайт как шаблон"],
      ["DNS домену невірний", "Форма мовчить", "Сайт як шаблон"],
    ),
  },
  {
    id: "content-site",
    tag: "PIPE-03",
    title: L("Content / blog site", "Strona content / blog", "Контент-сайт / блог", "Контент-сайт / блог"),
    description: L(
      "Articles, guides, SEO content. Astro + Markdown default.",
      "Artykuły, poradniki, SEO. Domyślnie Astro + Markdown.",
      "Статьи, гайды, SEO-контент. По умолчанию Astro + Markdown.",
      "Статті, гайди, SEO-контент. За замовчуванням Astro + Markdown.",
    ),
    bestFor: LA(
      ["Blog", "Knowledge base", "SEO landing clusters"],
      ["Blog", "Baza wiedzy", "Klastry SEO landingów"],
      ["Блог", "База знаний", "SEO-кластеры лендингов"],
      ["Блог", "База знань", "SEO-кластери лендингів"],
    ),
    avoidIf: LA(
      ["Heavy user-generated content", "Real-time comments at scale"],
      ["Masowy content od użytkowników", "Komentarze live na dużą skalę"],
      ["Массовый UGC", "Комментарии в реальном времени"],
      ["Масовий UGC", "Коментарі в реальному часі"],
    ),
    requiredInputs: LA(
      ["10 article topics", "Author bio", "Category structure"],
      ["10 tematów artykułów", "Bio autora", "Struktura kategorii"],
      ["10 тем для статей", "Bio автора", "Структура категорий"],
      ["10 тем для статей", "Bio автора", "Структура категорій"],
    ),
    recommendedStack: ["astro", "cloudflare-pages", "markdown"],
    alternatives: ["nextjs", "vercel"],
    rejectedOptions: LA(
      ["WordPress without maintenance plan", "AI auto-publishing without review"],
      ["WordPress bez planu utrzymania", "Auto-publikacja AI bez review"],
      ["WordPress без плана поддержки", "Автопубликация AI без ревью"],
      ["WordPress без плану підтримки", "Автопублікація AI без review"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Topic map", "Mapa tematów", "Карта тем", "Карта тем"),
        body: L("List pillars + 10 article titles with search intent.", "Lista filarów + 10 tytułów z intencją wyszukiwania.", "Список столпов + 10 заголовков с поисковым intent.", "Список стовпів + 10 заголовків з search intent."),
        doneWhen: L("Spreadsheet or markdown file exists in repo", "Arkusz lub plik markdown jest w repo", "Таблица или md-файл есть в repo", "Таблиця або md-файл є в repo"),
      },
    ]),
    risks: LA(
      ["Thin AI articles", "No internal linking", "Duplicate titles"],
      ["Cienkie artykuły AI", "Brak linków wewnętrznych", "Duplikaty tytułów"],
      ["Тонкие AI-статьи", "Нет перелинковки", "Дубли заголовков"],
      ["Тонкі AI-статті", "Немає перелінковки", "Дублі заголовків"],
    ),
    rescueTriggers: LA(
      ["Indexing stuck", "Sitemap wrong", "Schema errors"],
      ["Indeksacja stoi", "Zła sitemap", "Błędy schema"],
      ["Индексация стоит", "Неверный sitemap", "Ошибки schema"],
      ["Індексація стоїть", "Невірний sitemap", "Помилки schema"],
    ),
  },
  {
    id: "ecommerce",
    tag: "PIPE-04",
    title: L("E-commerce shop", "Sklep e-commerce", "Интернет-магазин", "Інтернет-магазин"),
    description: L(
      "Shopify default for non-devs. Custom cart only when revenue justifies it.",
      "Shopify domyślnie dla nietech. Custom cart tylko gdy revenue uzasadnia.",
      "Shopify по умолчанию для нетech. Своя корзина — когда выручка оправдывает.",
      "Shopify за замовчуванням. Свій кошик — коли revenue виправдовує.",
    ),
    bestFor: LA(
      ["Physical products", "Digital downloads", "Marketplace sync later"],
      ["Produkty fizyczne", "Pliki cyfrowe", "Sync marketplace później"],
      ["Физические товары", "Цифровые файлы", "Синхрон с маркетплейсами позже"],
      ["Фізичні товари", "Цифрові файли", "Синхрон з маркетплейсами пізніше"],
    ),
    avoidIf: LA(
      ["Only 3 products and no shipping", "Need heavy custom checkout logic on day 1"],
      ["Tylko 3 produkty bez wysyłki", "Ciężki custom checkout od dnia 1"],
      ["Только 3 товара без доставки", "Сложный checkout с первого дня"],
      ["Лише 3 товари без доставки", "Складний checkout з першого дня"],
    ),
    requiredInputs: LA(
      ["Product list + prices", "Shipping rules", "Payment provider", "Return policy"],
      ["Lista produktów + ceny", "Zasady wysyłki", "Płatności", "Zwroty"],
      ["Список товаров + цены", "Доставка", "Оплата", "Возвраты"],
      ["Список товарів + ціни", "Доставка", "Оплата", "Повернення"],
    ),
    recommendedStack: ["shopify"],
    alternatives: ["nextjs", "stripe"],
    rejectedOptions: LA(
      ["Custom Next.js cart for first shop", "WooCommerce without security updates"],
      ["Custom koszyk Next.js na start", "WooCommerce bez aktualizacji"],
      ["Своя корзина Next.js на старте", "WooCommerce без обновлений"],
      ["Свій кошик Next.js на старті", "WooCommerce без оновлень"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Product data", "Dane produktów", "Данные товаров", "Дані товарів"),
        body: L("CSV or sheet: name, price, SKU, image URL, description.", "CSV: nazwa, cena, SKU, obraz, opis.", "CSV: название, цена, SKU, фото, описание.", "CSV: назва, ціна, SKU, фото, опис."),
        doneWhen: L("10+ products imported to Shopify", "10+ produktów w Shopify", "10+ товаров в Shopify", "10+ товарів у Shopify"),
      },
    ]),
    risks: LA(
      ["Wrong tax/shipping", "Weak product copy", "No order notification test"],
      ["Złe podatki/wysyłka", "Słaby opis produktów", "Brak testu zamówienia"],
      ["Неверные налоги/доставка", "Слабые описания", "Не тестировали заказ"],
      ["Невірні податки/доставка", "Слабкі описи", "Не тестували замовлення"],
    ),
    rescueTriggers: LA(
      ["Checkout broken", "Payments not capturing", "Feed sync errors"],
      ["Checkout zepsuty", "Płatności nie przechodzą", "Błędy feed sync"],
      ["Checkout сломан", "Оплата не проходит", "Ошибки feed sync"],
      ["Checkout зламаний", "Оплата не проходить", "Помилки feed sync"],
    ),
  },
  {
    id: "events-ticketing",
    tag: "PIPE-05",
    title: L("Events & ticketing", "Wydarzenia i bilety", "События и билеты", "Події та квитки"),
    description: L(
      "Next.js + Supabase + Stripe when you sell tickets or seats.",
      "Next.js + Supabase + Stripe gdy sprzedajesz bilety lub miejsca.",
      "Next.js + Supabase + Stripe когда продаёте билеты или места.",
      "Next.js + Supabase + Stripe коли продаєте квитки або місця.",
    ),
    bestFor: LA(
      ["Concerts", "Workshops", "Limited seats", "QR check-in"],
      ["Koncerty", "Warsztaty", "Limit miejsc", "QR check-in"],
      ["Концерты", "Воркшопы", "Лимит мест", "QR check-in"],
      ["Концерти", "Воркшопи", "Ліміт місць", "QR check-in"],
    ),
    avoidIf: LA(
      ["Free RSVP only", "No payment needed"],
      ["Tylko darmowe RSVP", "Bez płatności"],
      ["Только бесплатная регистрация", "Оплата не нужна"],
      ["Лише безкоштовна реєстрація", "Оплата не потрібна"],
    ),
    requiredInputs: LA(
      ["Event dates", "Venue", "Ticket tiers", "Refund rules"],
      ["Daty", "Miejsce", "Poziomy biletów", "Zwroty"],
      ["Даты", "Площадка", "Типы билетов", "Возвраты"],
      ["Дати", "Місце", "Типи квитків", "Повернення"],
    ),
    recommendedStack: ["nextjs", "vercel", "supabase", "stripe"],
    alternatives: ["shopify"],
    rejectedOptions: LA(
      ["Astro for paid ticketing", "Google Forms + manual bank transfer"],
      ["Astro na płatne bilety", "Google Forms + przelew ręczny"],
      ["Astro для платных билетов", "Google Forms + ручной перевод"],
      ["Astro для платних квитків", "Google Forms + ручний переказ"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Ticket model", "Model biletów", "Модель билетов", "Модель квитків"),
        body: L("Define tiers, capacity, sale windows in a brief doc.", "Zdefiniuj poziomy, limit, okna sprzedaży w briefie.", "Опиши типы, лимит, окна продаж в brief.", "Опиши типи, ліміт, вікна продажу в brief."),
        doneWhen: L("Brief approved before any code", "Brief zatwierdzony przed kodem", "Brief согласован до кода", "Brief погоджений до коду"),
      },
    ]),
    risks: LA(
      ["Overselling seats", "Webhook failures", "No test purchase"],
      ["Overselling miejsc", "Błędy webhook", "Brak testowego zakupu"],
      ["Перепродажа мест", "Падение webhook", "Нет тестовой покупки"],
      ["Перепродаж місць", "Падіння webhook", "Немає тестової покупки"],
    ),
    rescueTriggers: LA(
      ["Double charges", "Email tickets not sending", "Admin can't export list"],
      ["Podwójne obciążenia", "Maile z biletami nie idą", "Admin nie eksportuje listy"],
      ["Двойные списания", "Билеты не приходят на email", "Админ не экспортирует список"],
      ["Подвійні списання", "Квитки не приходять на email", "Адмін не експортує список"],
    ),
  },
  {
    id: "saas",
    tag: "PIPE-06",
    title: L("SaaS product", "Produkt SaaS", "SaaS-продукт", "SaaS-продукт"),
    description: L(
      "Next.js + Vercel + auth + billing. Only when recurring revenue is the goal.",
      "Next.js + Vercel + auth + billing. Tylko gdy celem jest recurring revenue.",
      "Next.js + Vercel + auth + billing. Только если цель — подписочная выручка.",
      "Next.js + Vercel + auth + billing. Лише якщо ціль — підписочний revenue.",
    ),
    bestFor: LA(
      ["Subscription tool", "B2B dashboard", "Multi-tenant app"],
      ["Narzędzie subskrypcyjne", "Dashboard B2B", "Aplikacja multi-tenant"],
      ["Подписочный инструмент", "B2B дашборд", "Multi-tenant приложение"],
      ["Підписочний інструмент", "B2B dashboard", "Multi-tenant застосунок"],
    ),
    avoidIf: LA(
      ["Landing page only", "No defined pricing"],
      ["Tylko landing", "Brak cennika"],
      ["Только лендинг", "Нет цен"],
      ["Лише landing", "Немає цін"],
    ),
    requiredInputs: LA(
      ["Pricing tiers", "User roles", "Core workflow diagram", "Legal pages"],
      ["Poziomy cen", "Role użytkowników", "Diagram workflow", "Strony prawne"],
      ["Тарифы", "Роли пользователей", "Схема workflow", "Юридические страницы"],
      ["Тарифи", "Ролі користувачів", "Схема workflow", "Юридичні сторінки"],
    ),
    recommendedStack: ["nextjs", "vercel", "supabase", "stripe"],
    alternatives: [],
    rejectedOptions: LA(
      ["Astro for authenticated SaaS", "No staging environment"],
      ["Astro na SaaS z logowaniem", "Brak staging"],
      ["Astro для SaaS с авторизацией", "Нет staging"],
      ["Astro для SaaS з авторизацією", "Немає staging"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("MVP scope", "Zakres MVP", "Scope MVP", "Scope MVP"),
        body: L("One paid workflow, one role, one integration.", "Jeden płatny workflow, jedna rola, jedna integracja.", "Один платный workflow, одна роль, одна интеграция.", "Один платний workflow, одна роль, одна інтеграція."),
        doneWhen: L("Written MVP fits one page", "MVP mieści się na jednej stronie", "MVP помещается на одной странице", "MVP вміщується на одній сторінці"),
      },
    ]),
    risks: LA(
      ["Scope creep", "Auth bugs", "Billing edge cases"],
      ["Scope creep", "Błędy auth", "Edge cases billing"],
      ["Раздувание scope", "Баги auth", "Edge cases billing"],
      ["Роздування scope", "Баги auth", "Edge cases billing"],
    ),
    rescueTriggers: LA(
      ["Subscription webhooks fail", "Users locked out", "Data leak risk"],
      ["Webhook subskrypcji pada", "Użytkownicy zablokowani", "Ryzyko wycieku danych"],
      ["Webhook подписок падает", "Пользователи не могут войти", "Риск утечки данных"],
      ["Webhook підписок падає", "Користувачі не можуть увійти", "Ризик витоку даних"],
    ),
  },
  {
    id: "internal-tool",
    tag: "PIPE-07",
    title: L("Internal tool", "Narzędzie wewnętrzne", "Внутренний инструмент", "Внутрішній інструмент"),
    description: L(
      "Streamlit or simple dashboard for your team — not a public marketing site.",
      "Streamlit lub prosty dashboard dla zespołu — nie publiczna strona marketingowa.",
      "Streamlit или простая панель для команды — не публичный маркетинговый сайт.",
      "Streamlit або проста панель для команди — не публічний маркетинговий сайт.",
    ),
    bestFor: LA(
      ["Reports", "CSV uploads", "Ops dashboards"],
      ["Raporty", "Upload CSV", "Dashboardy ops"],
      ["Отчёты", "Загрузка CSV", "Ops-дашборды"],
      ["Звіти", "Upload CSV", "Ops-dashboards"],
    ),
    avoidIf: LA(
      ["Customer-facing brand site", "Need mobile app store"],
      ["Publiczna strona marki", "Potrzebna aplikacja w sklepie"],
      ["Публичный сайт бренда", "Нужно приложение в store"],
      ["Публічний сайт бренду", "Потрібен застосунок у store"],
    ),
    requiredInputs: LA(
      ["Data sources", "Who uses it", "Refresh frequency", "Access rules"],
      ["Źródła danych", "Kto używa", "Częstotliwość odświeżania", "Dostępy"],
      ["Источники данных", "Кто пользуется", "Частота обновления", "Доступы"],
      ["Джерела даних", "Хто користується", "Частота оновлення", "Доступи"],
    ),
    recommendedStack: ["streamlit"],
    alternatives: ["nextjs", "supabase"],
    rejectedOptions: LA(
      ["Public WordPress for internal KPIs", "Excel emailed daily"],
      ["Publiczny WordPress na KPI", "Excel mailem codziennie"],
      ["Публичный WordPress для KPI", "Excel по почте каждый день"],
      ["Публічний WordPress для KPI", "Excel поштою щодня"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Define one metric", "Jedna metryka", "Одна метрика", "Одна метрика"),
        body: L("Pick the one number the team checks every Monday.", "Wybierz liczbę, którą zespół sprawdza w każdy poniedziałek.", "Выбери цифру, которую команда смотрит каждый понедельник.", "Обери цифру, яку команда дивиться щопонеділка."),
        doneWhen: L("Metric loads from real data source", "Metryka ładuje się z prawdziwego źródła", "Метрика грузится из реального источника", "Метрика вантажиться з реального джерела"),
      },
    ]),
    risks: LA(
      ["Exposed without auth", "Stale data", "No audit log"],
      ["Wystawione bez auth", "Nieaktualne dane", "Brak audit log"],
      ["Открыто без auth", "Устаревшие данные", "Нет audit log"],
      ["Відкрито без auth", "Застарілі дані", "Немає audit log"],
    ),
    rescueTriggers: LA(
      ["Wrong numbers in production", "Can't add new user"],
      ["Złe liczby na produkcji", "Nie można dodać użytkownika"],
      ["Неверные цифры на проде", "Нельзя добавить пользователя"],
      ["Невірні цифри на проді", "Не можна додати користувача"],
    ),
  },
  {
    id: "automation",
    tag: "PIPE-08",
    title: L("Automation pipeline", "Pipeline automatyzacji", "Пайплайн автоматизации", "Pipeline автоматизації"),
    description: L(
      "n8n / scripts connecting forms, CRM, email, Telegram — after the site works.",
      "n8n / skrypty łączące formularze, CRM, email, Telegram — po działającej stronie.",
      "n8n / скрипты: форма → CRM → email → Telegram — после рабочего сайта.",
      "n8n / скрипти: форма → CRM → email → Telegram — після робочого сайту.",
    ),
    bestFor: LA(
      ["Lead routing", "Order notifications", "Content prep scripts"],
      ["Routing leadów", "Powiadomienia o zamówieniach", "Skrypty prep contentu"],
      ["Маршрутизация лидов", "Уведомления о заказах", "Скрипты подготовки контента"],
      ["Маршрутизація лідів", "Сповіщення про замовлення", "Скрипти prep контенту"],
    ),
    avoidIf: LA(
      ["No live website yet", "One-off task with no repeat"],
      ["Brak live strony", "Jednorazowe zadanie bez powtórzeń"],
      ["Ещё нет живого сайта", "Разовая задача без повторений"],
      ["Ще немає live сайту", "Разова задача без повторень"],
    ),
    requiredInputs: LA(
      ["Trigger list", "Apps to connect", "Failure alert email"],
      ["Lista triggerów", "Aplikacje do połączenia", "Email alertu błędów"],
      ["Список триггеров", "Сервисы для связки", "Email для алертов"],
      ["Список тригерів", "Сервіси для звʼязки", "Email для алертів"],
    ),
    recommendedStack: ["n8n"],
    alternatives: [],
    rejectedOptions: LA(
      ["Automate before form works", "Zapier for 500 runs/month at scale"],
      ["Automatyzacja zanim forma działa", "Zapier na skalę 500 runów"],
      ["Автоматизация до рабочей формы", "Zapier на масштабе"],
      ["Автоматизація до робочої форми", "Zapier у масштабі"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Map one flow", "Jeden flow", "Один flow", "Один flow"),
        body: L("Form submit → notify → spreadsheet row. Draw it on paper first.", "Formularz → notify → wiersz w arkuszu. Najpierw na papierze.", "Форма → уведомление → строка в таблице. Сначала на бумаге.", "Форма → notify → рядок у таблиці. Спочатку на папері."),
        doneWhen: L("Test submission creates row + email", "Test tworzy wiersz + email", "Тест создаёт строку + email", "Тест створює рядок + email"),
      },
    ]),
    risks: LA(
      ["Silent failures", "No logging", "API key in repo"],
      ["Ciche błędy", "Brak logów", "API key w repo"],
      ["Тихие падения", "Нет логов", "API key в repo"],
      ["Тихі падіння", "Немає логів", "API key у repo"],
    ),
    rescueTriggers: LA(
      ["Workflow stopped", "Duplicate leads", "Rate limit hit"],
      ["Workflow stanął", "Duplikaty leadów", "Rate limit"],
      ["Workflow встал", "Дубли лидов", "Rate limit"],
      ["Workflow зупинився", "Дублі лідів", "Rate limit"],
    ),
  },
  {
    id: "rescue",
    tag: "PIPE-09",
    title: L("Rescue / audit", "Rescue / audyt", "Rescue / аудит", "Rescue / аудит"),
    description: L(
      "When AI broke the project, domain fails, or the site is a pretty demo with no business layer.",
      "Gdy AI zepsuło projekt, domena nie działa albo strona to ładne demo bez warstwy biznesowej.",
      "Когда AI сломал проект, домен не работает или сайт — красивая демка без бизнес-слоя.",
      "Коли AI зламав проєкт, домен не працює або сайт — гарне демо без бізнес-шару.",
    ),
    bestFor: LA(
      ["Broken deploy", "Cursor refactor disaster", "AI demo needs offer rewrite"],
      ["Zepsuty deploy", "Katastrofa refaktoru Cursor", "Demo AI wymaga nowej oferty"],
      ["Сломанный деплой", "Катастрофа рефактора Cursor", "AI-демка без оффера"],
      ["Зламаний deploy", "Катастрофа рефактору Cursor", "AI-демо без оферу"],
    ),
    avoidIf: LA(
      ["Greenfield project with clear brief", "You haven't tried the beginner path"],
      ["Greenfield z jasnym briefem", "Nie próbowałeś ścieżki beginner"],
      ["Новый проект с ясным brief", "Не прошли beginner path"],
      ["Greenfield з ясним brief", "Не пробували beginner path"],
    ),
    requiredInputs: LA(
      ["Repo URL or site URL", "What broke", "Deadline", "Business goal unchanged?"],
      ["URL repo lub strony", "Co się zepsuło", "Deadline", "Cel biznesowy bez zmian?"],
      ["URL repo или сайта", "Что сломалось", "Дедлайн", "Бизнес-цель та же?"],
      ["URL repo або сайту", "Що зламалось", "Дедлайн", "Бізнес-ціль та сама?"],
    ),
    recommendedStack: [],
    alternatives: [],
    rejectedOptions: LA(
      ["Restart from scratch without audit", "Another AI full rewrite"],
      ["Restart bez audytu", "Kolejny pełny rewrite AI"],
      ["Пересборка с нуля без аудита", "Ещё один полный rewrite AI"],
      ["Перезбірка з нуля без аудиту", "Ще один повний rewrite AI"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Triage", "Triage", "Тriage", "Triage"),
        body: L("Can you deploy? Does form work? Is copy real?", "Czy deploy działa? Formularz? Copy realne?", "Деплой работает? Форма? Текст реальный?", "Deploy працює? Форма? Copy реальний?"),
        doneWhen: L("Priority list of 3 fixes written", "Lista 3 priorytetowych fixów", "Список из 3 приоритетных fix", "Список з 3 пріоритетних fix"),
      },
    ]),
    risks: LA(
      ["Fixing symptoms not cause", "No backup before changes"],
      ["Naprawa objawów nie przyczyny", "Brak backupu przed zmianami"],
      ["Чиним симптомы, не причину", "Нет бэкапа перед правками"],
      ["Лагодимо симптоми, не причину", "Немає backup перед змінами"],
    ),
    rescueTriggers: LA(
      ["Already here — that's the trigger"],
      ["Już tu jesteś — to trigger"],
      ["Вы уже здесь — это и есть trigger"],
      ["Ви вже тут — це і є trigger"],
    ),
  },
];

export const pipelineSlugs = pipelines.map((p) => p.id);

export function getPipeline(slug: string) {
  return pipelines.find((p) => p.id === slug);
}

export function getDefaultPipeline() {
  return pipelines.find((p) => p.isDefault) ?? pipelines[1];
}
