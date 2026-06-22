import type { Locale } from "@/i18n/routing";
import type { PipelineSlug } from "@/data/pipelines";

export type BriefFormData = {
  businessType: string;
  sitePurpose: string;
  contentEditor: "me" | "team" | "developer";
  needsPayments: boolean;
  paymentType: "none" | "shop" | "events" | "subscription";
  needsAuth: boolean;
  needsDashboard: boolean;
  languages: "one" | "few" | "many";
  priority: "cheap" | "fast" | "seo";
  budget: "minimal" | "moderate" | "serious";
  maintenance: "minimal" | "monthly" | "hands-on";
};

export function recommendPipeline(data: BriefFormData): PipelineSlug {
  if (data.needsPayments && data.paymentType === "events") {
    return "events-ticketing";
  }
  if (data.needsPayments && data.paymentType === "shop") {
    return "ecommerce";
  }
  if (data.needsPayments && data.paymentType === "subscription") {
    return "saas";
  }
  if (data.needsDashboard || (data.needsAuth && data.sitePurpose.includes("dashboard"))) {
    return data.budget === "serious" ? "saas" : "internal-tool";
  }
  if (data.needsAuth && !data.needsPayments) {
    return "saas";
  }
  if (
    data.sitePurpose.includes("blog") ||
    data.sitePurpose.includes("content") ||
    data.sitePurpose.includes("article")
  ) {
    return "content-site";
  }
  if (
    data.sitePurpose.includes("portfolio") ||
    data.businessType.includes("freelanc") ||
    data.businessType.includes("design")
  ) {
    return "portfolio";
  }
  if (data.sitePurpose.includes("automat") || data.sitePurpose.includes("integrat")) {
    return "automation";
  }
  return "business-site";
}

export const pipelineHub = {
  en: {
    tag: "Project pipelines",
    title: "Pick the right build path before opening Cursor",
    subtitle:
      "Not a blog — a decision system. Choose project type, stack, beginner steps or generate a brief for your AI agent.",
    ctaBeginner: "Start beginner path",
    ctaBrief: "Build my brief",
    ctaStacks: "Compare stacks",
    ctaMarketing: "Marketing & SEO hub",
    cardsTitle: "Project types",
    cardsSubtitle: "Each pipeline includes stack, risks, phases and downloadable skill pack.",
    defaultNote: "Default for plumber / local service: Astro + Cloudflare",
    outcomeTitle: "In 2–3 hours you can have",
    outcomeItems: [
      "Clear page structure and offer",
      "GitHub repo with first deploy",
      "Live URL on Cloudflare or Vercel",
      "Domain connected (or staging URL)",
      "Working contact form",
      "Basic SEO checklist done",
    ],
  },
  pl: {
    tag: "Pipeline projektów",
    title: "Wybierz właściwą ścieżkę zanim otworzysz Cursor",
    subtitle:
      "To nie blog — system decyzji. Typ projektu, stack, kroki dla początkujących albo brief dla agenta AI.",
    ctaBeginner: "Ścieżka beginner",
    ctaBrief: "Zbuduj brief",
    ctaStacks: "Porównaj stacki",
    ctaMarketing: "Marketing i SEO",
    cardsTitle: "Typy projektów",
    cardsSubtitle: "Każdy pipeline: stack, ryzyka, fazy i skill pack do pobrania.",
    defaultNote: "Domyślnie dla hydraulika / usług lokalnych: Astro + Cloudflare",
    outcomeTitle: "W 2–3 godziny możesz mieć",
    outcomeItems: [
      "Jasną strukturę strony i ofertę",
      "Repo GitHub z pierwszym deployem",
      "Live URL na Cloudflare lub Vercel",
      "Podpiętą domenę (albo staging URL)",
      "Działający formularz kontaktowy",
      "Podstawową checklistę SEO",
    ],
  },
  ru: {
    tag: "Пайплайны проектов",
    title: "Выбери правильный путь до того, как откроешь Cursor",
    subtitle:
      "Это не блог — система решений. Тип проекта, стек, пошаговый путь для новичка или brief для AI-агента.",
    ctaBeginner: "Путь для новичка",
    ctaBrief: "Собрать brief",
    ctaStacks: "Сравнить стеки",
    ctaMarketing: "Маркетинг и SEO",
    cardsTitle: "Типы проектов",
    cardsSubtitle: "В каждом пайплайне: стек, риски, фазы и skill pack для скачивания.",
    defaultNote: "По умолчанию для сантехника / локальных услуг: Astro + Cloudflare",
    outcomeTitle: "За 2–3 часа у тебя может быть",
    outcomeItems: [
      "Понятная структура страниц и оффер",
      "GitHub repo с первым деплоем",
      "Живой URL на Cloudflare или Vercel",
      "Подключённый домен (или staging URL)",
      "Рабочая форма заявки",
      "Базовый SEO-чеклист",
    ],
  },
  uk: {
    tag: "Pipeline проєктів",
    title: "Обери правильний шлях до того, як відкриєш Cursor",
    subtitle:
      "Це не блог — система рішень. Тип проєкту, stack, покроковий шлях для новачка або brief для AI-агента.",
    ctaBeginner: "Шлях для новачка",
    ctaBrief: "Зібрати brief",
    ctaStacks: "Порівняти stack",
    ctaMarketing: "Маркетинг і SEO",
    cardsTitle: "Типи проєктів",
    cardsSubtitle: "У кожному pipeline: stack, ризики, фази та skill pack для завантаження.",
    defaultNote: "За замовчуванням для сантехніка / локальних послуг: Astro + Cloudflare",
    outcomeTitle: "За 2–3 години у тебе може бути",
    outcomeItems: [
      "Зрозуміла структура сторінок і офер",
      "GitHub repo з першим deploy",
      "Live URL на Cloudflare або Vercel",
      "Підключений домен (або staging URL)",
      "Робоча форма заявки",
      "Базовий SEO-чеклист",
    ],
  },
} as const;

export const pipelineLabels = {
  en: {
    bestFor: "Best for",
    avoidIf: "Avoid if",
    requiredInputs: "You need before starting",
    recommendedStack: "Recommended stack",
    alternatives: "Alternatives",
    rejected: "Usually wrong choice",
    risks: "Risks",
    rescueTriggers: "When to call rescue",
    buildPhases: "Build phases",
    doneWhen: "Done when",
    openPipeline: "Open pipeline",
    back: "Back to pipelines",
    downloadPack: "Download skill pack",
    copyMarkdown: "Copy as markdown",
    defaultStack: "Default stack philosophy",
    defaultStackBody:
      "2026 default: simple site → Astro + Cloudflare Pages + Markdown. Apps with login → Next.js 15+ on Vercel. Shop → Shopify. GSC mandatory for Google; TikTok optional for visibility.",
    readMore: "Details →",
    minutes: "min setup",
  },
  pl: {
    bestFor: "Najlepsze dla",
    avoidIf: "Unikaj gdy",
    requiredInputs: "Potrzebujesz na start",
    recommendedStack: "Rekomendowany stack",
    alternatives: "Alternatywy",
    rejected: "Zwykle zły wybór",
    risks: "Ryzyka",
    rescueTriggers: "Kiedy rescue",
    buildPhases: "Fazy budowy",
    doneWhen: "Gotowe, gdy",
    openPipeline: "Otwórz pipeline",
    back: "Wróć do pipeline",
    downloadPack: "Pobierz skill pack",
    copyMarkdown: "Kopiuj jako markdown",
    defaultStack: "Filozofia domyślnego stacku",
    defaultStackBody:
      "Domyślnie 2026: prosta strona → Astro + Cloudflare Pages + Markdown. Aplikacje z logowaniem → Next.js 15+ na Vercel. Sklep → Shopify. GSC obowiązkowe dla Google; TikTok opcjonalny.",
    readMore: "Szczegóły →",
    minutes: "min setup",
  },
  ru: {
    bestFor: "Подходит",
    avoidIf: "Не бери, если",
    requiredInputs: "Нужно до старта",
    recommendedStack: "Рекомендуемый стек",
    alternatives: "Альтернативы",
    rejected: "Обычно неверный выбор",
    risks: "Риски",
    rescueTriggers: "Когда нужен rescue",
    buildPhases: "Фазы сборки",
    doneWhen: "Готово, если",
    openPipeline: "Открыть пайплайн",
    back: "Назад к пайплайнам",
    downloadPack: "Скачать skill pack",
    copyMarkdown: "Скопировать markdown",
    defaultStack: "Философия стека по умолчанию",
    defaultStackBody:
      "По умолчанию 2026: простой сайт → Astro + Cloudflare Pages + Markdown. Приложения с входом → Next.js 15+ на Vercel. Магазин → Shopify. GSC обязателен для Google; TikTok опционален.",
    readMore: "Подробнее →",
    minutes: "мин setup",
  },
  uk: {
    bestFor: "Підходить",
    avoidIf: "Не бери, якщо",
    requiredInputs: "Потрібно до старту",
    recommendedStack: "Рекомендований stack",
    alternatives: "Альтернативи",
    rejected: "Зазвичай невірний вибір",
    risks: "Ризики",
    rescueTriggers: "Коли потрібен rescue",
    buildPhases: "Фази збірки",
    doneWhen: "Готово, якщо",
    openPipeline: "Відкрити pipeline",
    back: "Назад до pipeline",
    downloadPack: "Завантажити skill pack",
    copyMarkdown: "Скопіювати markdown",
    defaultStack: "Філософія stack за замовчуванням",
    defaultStackBody:
      "За замовчуванням 2026: простий сайт → Astro + Cloudflare Pages + Markdown. Застосунки з входом → Next.js 15+ на Vercel. Магазин → Shopify. GSC обовʼязковий для Google; TikTok опційний.",
    readMore: "Деталі →",
    minutes: "хв setup",
  },
} as const;

export interface BeginnerStage {
  code: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  doneWhen: Record<Locale, string>;
  tips: Record<Locale, string[]>;
  optional?: boolean;
}

export const beginnerStages: BeginnerStage[] = [
  {
    code: "01",
    title: L("Define the goal", "Określ cel", "Определи цель", "Визнач мету"),
    body: L(
      "Write in plain language: who visits, what they should do, what you sell.",
      "Napisz prosto: kto wchodzi, co ma zrobić, co sprzedajesz.",
      "Напиши простым языком: кто заходит, что должен сделать, что продаёшь.",
      "Напиши простою мовою: хто заходить, що має зробити, що продаєш.",
    ),
    doneWhen: L(
      "One paragraph fits only your business",
      "Jeden akapit pasuje tylko do twojej firmy",
      "Один абзац подходит только вашему бизнесу",
      "Один абзац підходить лише вашому бізнесу",
    ),
    tips: LArr(
      ["Use real city and service names"],
      ["Użyj prawdziwego miasta i usług"],
      ["Используй реальный город и услуги"],
      ["Використай реальне місто та послуги"],
    ),
  },
  {
    code: "02",
    title: L("Pick pipeline", "Wybierz pipeline", "Выбери пайплайн", "Обери pipeline"),
    body: L(
      "Open /pipeline/brief or browse project types. Default for local services: business-site.",
      "Otwórz /pipeline/brief lub typy projektów. Domyślnie dla usług: business-site.",
      "Открой /pipeline/brief или типы проектов. Для услуг по умолчанию: business-site.",
      "Відкрий /pipeline/brief або типи проєктів. Для послуг: business-site.",
    ),
    doneWhen: L(
      "You know Astro vs Next.js for your case",
      "Wiesz Astro vs Next.js w twoim przypadku",
      "Понимаешь Astro vs Next.js для своего случая",
      "Розумієш Astro vs Next.js для свого випадку",
    ),
    tips: LArr(
      ["Plumber/lawyer → Astro, not Next.js"],
      ["Hydraulik/prawnik → Astro, nie Next.js"],
      ["Сантехник/юрист → Astro, не Next.js"],
      ["Сантехнік/юрист → Astro, не Next.js"],
    ),
  },
  {
    code: "03",
    title: L("Create GitHub account", "Konto GitHub", "Аккаунт GitHub", "Акаунт GitHub"),
    body: L(
      "Go to github.com → Sign up → verify email → choose free plan. Username = your brand or name.",
      "Wejdź na github.com → Sign up → potwierdź email → plan free. Username = marka lub imię.",
      "Зайди на github.com → Sign up → подтверди email → бесплатный план. Username = бренд или имя.",
      "Зайди на github.com → Sign up → підтверди email → безкоштовний план. Username = бренд або імʼя.",
    ),
    doneWhen: L(
      "You can log in and see github.com/new",
      "Możesz się zalogować i widzieć github.com/new",
      "Можешь войти и видеть github.com/new",
      "Можеш увійти і бачити github.com/new",
    ),
    tips: LArr(
      ["Enable 2FA later — not blocking day 1"],
      ["2FA później — nie blokuje dnia 1"],
      ["2FA потом — не блокирует первый день"],
      ["2FA пізніше — не блокує перший день"],
    ),
  },
  {
    code: "04",
    title: L("Install Cursor", "Zainstaluj Cursor", "Установи Cursor", "Встанови Cursor"),
    body: L(
      "Download cursor.com → install → sign in with GitHub when asked.",
      "Pobierz cursor.com → zainstaluj → zaloguj przez GitHub.",
      "Скачай cursor.com → установи → войди через GitHub.",
      "Завантаж cursor.com → встанови → увійди через GitHub.",
    ),
    doneWhen: L(
      "Cursor opens and shows empty project or welcome",
      "Cursor się otwiera i pokazuje pusty projekt",
      "Cursor открывается и показывает пустой проект",
      "Cursor відкривається і показує порожній проєкт",
    ),
    tips: LArr(
      ["Same GitHub login everywhere reduces confusion"],
      ["Ten sam GitHub wszędzie — mniej chaosu"],
      ["Один GitHub везде — меньше путаницы"],
      ["Один GitHub скрізь — менше плутанини"],
    ),
  },
  {
    code: "05",
    title: L("Create repository", "Utwórz repozytorium", "Создай репозиторий", "Створи репозиторій"),
    body: L(
      "github.com/new → name: my-business-site → Public → Add README → Create. Clone URL copied.",
      "github.com/new → nazwa: my-business-site → Public → README → Create. Skopiuj Clone URL.",
      "github.com/new → имя: my-business-site → Public → README → Create. Скопируй Clone URL.",
      "github.com/new → назва: my-business-site → Public → README → Create. Скопіюй Clone URL.",
    ),
    doneWhen: L(
      "Repo page shows README on github.com",
      "Strona repo pokazuje README na github.com",
      "Страница repo показывает README на github.com",
      "Сторінка repo показує README на github.com",
    ),
    tips: LArr(
      ["Repo name lowercase with dashes"],
      ["Nazwa repo małymi literami z myślnikami"],
      ["Имя repo строчными с дефисами"],
      ["Назва repo малими літерами з дефісами"],
    ),
  },
  {
    code: "06",
    title: L("Generate site with AI", "Wygeneruj stronę z AI", "Сгенерируй сайт с AI", "Згенеруй сайт з AI"),
    body: L(
      "In Cursor: paste skill pack + brief. Ask for Astro static site, 5 sections, mobile-first, real copy placeholders.",
      "W Cursorze: wklej skill pack + brief. Poproś o Astro, 5 sekcji, mobile-first, prawdziwe placeholdery copy.",
      "В Cursor: вставь skill pack + brief. Попроси Astro, 5 секций, mobile-first, реальные placeholder текста.",
      "У Cursor: встав skill pack + brief. Попроси Astro, 5 секцій, mobile-first, реальні placeholder тексту.",
    ),
    doneWhen: L(
      "npm run dev shows home page locally",
      "npm run dev pokazuje stronę główną lokalnie",
      "npm run dev показывает главную локально",
      "npm run dev показує головну локально",
    ),
    tips: LArr(
      ["Say NO to Next.js unless brief says so"],
      ["NIE Next.js chyba że brief mówi inaczej"],
      ["НЕ Next.js, если brief не требует"],
      ["НЕ Next.js, якщо brief не вимагає"],
    ),
  },
  {
    code: "07",
    title: L("Push to GitHub", "Push na GitHub", "Запушь в GitHub", "Запуш у GitHub"),
    body: L(
      "Terminal in Cursor: git add . → git commit -m 'first version' → git push. Refresh github.com — files appear.",
      "Terminal: git add . → git commit -m 'first version' → git push. Odśwież github.com — pliki są.",
      "Терминал: git add . → git commit -m 'first version' → git push. Обнови github.com — файлы на месте.",
      "Термінал: git add . → git commit -m 'first version' → git push. Онови github.com — файли на місці.",
    ),
    doneWhen: L(
      "All project files visible on GitHub",
      "Wszystkie pliki widoczne na GitHub",
      "Все файлы проекта видны на GitHub",
      "Усі файли проєкту видно на GitHub",
    ),
    tips: LArr(
      ["Small commits — easier rollback"],
      ["Małe commity — łatwiejszy rollback"],
      ["Маленькие коммиты — проще откат"],
      ["Маленькі коміти — простіший rollback"],
    ),
  },
  {
    code: "08",
    title: L("Deploy to Cloudflare", "Deploy na Cloudflare", "Деплой на Cloudflare", "Deploy на Cloudflare"),
    body: L(
      "dash.cloudflare.com → Workers & Pages → Create → Connect GitHub → pick repo → Framework: Astro → Deploy.",
      "dash.cloudflare.com → Workers & Pages → Create → GitHub → repo → Astro → Deploy.",
      "dash.cloudflare.com → Workers & Pages → Create → GitHub → repo → Astro → Deploy.",
      "dash.cloudflare.com → Workers & Pages → Create → GitHub → repo → Astro → Deploy.",
    ),
    doneWhen: L(
      "xxx.pages.dev URL opens on your phone",
      "URL xxx.pages.dev działa na telefonie",
      "URL xxx.pages.dev открывается на телефоне",
      "URL xxx.pages.dev відкривається на телефоні",
    ),
    tips: LArr(
      ["For Next.js apps use Vercel instead"],
      ["Dla Next.js użyj Vercel"],
      ["Для Next.js используй Vercel"],
      ["Для Next.js використовуй Vercel"],
    ),
  },
  {
    code: "09",
    title: L("Connect domain", "Podłącz domenę", "Подключи домен", "Підключи домен"),
    body: L(
      "Buy domain → in Cloudflare Pages add Custom domain → follow DNS steps → wait up to 24h.",
      "Kup domenę → w Cloudflare Pages Custom domain → DNS → do 24h.",
      "Купи домен → в Cloudflare Pages Custom domain → DNS → до 24ч.",
      "Купи домен → у Cloudflare Pages Custom domain → DNS → до 24 год.",
    ),
    doneWhen: L(
      "yourdomain.com opens the site (or staging URL documented)",
      "yourdomain.com otwiera stronę (albo masz staging URL)",
      "yourdomain.com открывает сайт (или задокументирован staging URL)",
      "yourdomain.com відкриває сайт (або задокументовано staging URL)",
    ),
    tips: LArr(
      ["Can skip day 1 — pages.dev is fine for testing"],
      ["Można pominąć dzień 1 — pages.dev wystarczy"],
      ["Можно пропустить в первый день — pages.dev для теста"],
      ["Можна пропустити в перший день — pages.dev для тесту"],
    ),
  },
  {
    code: "10",
    title: L("Add contact form", "Dodaj formularz", "Добавь форму", "Додай форму"),
    body: L(
      "Use Formspree, Web3Forms or Cloudflare form — test submit → check email inbox.",
      "Formspree, Web3Forms lub Cloudflare form — test → sprawdź skrzynkę.",
      "Formspree, Web3Forms или Cloudflare form — тест → проверь почту.",
      "Formspree, Web3Forms або Cloudflare form — тест → перевір пошту.",
    ),
    doneWhen: L(
      "Test message arrives in your inbox",
      "Testowy mail jest w skrzynce",
      "Тестовое письмо пришло на почту",
      "Тестовий лист прийшов на пошту",
    ),
    tips: LArr(
      ["Form is the business layer — not optional"],
      ["Formularz to warstwa biznesowa — obowiązkowy"],
      ["Форма — бизнес-слой, не опция"],
      ["Форма — бізнес-шар, не опція"],
    ),
  },
  {
    code: "11",
    title: L("Basic SEO", "Podstawowe SEO", "Базовое SEO", "Базове SEO"),
    body: L(
      "Google Search Console → add property → verify → submit sitemap. Check title/description on home.",
      "Search Console → dodaj witrynę → weryfikacja → sitemap. Sprawdź title/description.",
      "Search Console → добавь сайт → верификация → sitemap. Проверь title/description главной.",
      "Search Console → додай сайт → верифікація → sitemap. Перевір title/description головної.",
    ),
    doneWhen: L(
      "Search Console shows indexed or 'Discovered'",
      "Search Console pokazuje indexed lub Discovered",
      "Search Console показывает indexed или Discovered",
      "Search Console показує indexed або Discovered",
    ),
    tips: LArr(
      ["Stuck? → /pipeline/rescue or /order"],
      ["Utknąłeś? → /pipeline/rescue lub /order"],
      ["Застрял? → /pipeline/rescue или /order"],
      ["Застряг? → /pipeline/rescue або /order"],
    ),
  },
  {
    code: "12",
    title: L("Google Search Console (detailed)", "Google Search Console (szczegółowo)", "Google Search Console (подробно)", "Google Search Console (детально)"),
    body: L(
      "Open search.google.com/search-console → Add property → enter your full URL (https://yoursite.com) → verify via DNS TXT record at your domain registrar OR upload HTML file → Sitemaps → paste yoursite.com/sitemap.xml → Request indexing for home page.",
      "Otwórz search.google.com/search-console → Dodaj witrynę → pełny URL → weryfikacja DNS TXT u rejestratora LUB plik HTML → Mapy witryn → yoursite.com/sitemap.xml → Żądanie indeksacji strony głównej.",
      "Открой search.google.com/search-console → Добавить ресурс → полный URL → верификация DNS TXT у регистратора ИЛИ HTML-файл → Файлы Sitemap → yoursite.com/sitemap.xml → Запросить индексацию главной.",
      "Відкрий search.google.com/search-console → Додати ресурс → повний URL → верифікація DNS TXT у реєстратора АБО HTML-файл → Файли Sitemap → yoursite.com/sitemap.xml → Запит індексації головної.",
    ),
    doneWhen: L(
      "GSC shows sitemap Success and URL Inspection says Indexed or Discovered",
      "GSC pokazuje sitemap Success i Inspekcja URL mówi Indexed lub Discovered",
      "GSC показывает sitemap Success и Проверка URL говорит Indexed или Discovered",
      "GSC показує sitemap Success і Перевірка URL каже Indexed або Discovered",
    ),
    tips: LArr(
      ["Mandatory — not optional like TikTok"],
      ["Obowiązkowe — nie opcjonalne jak TikTok"],
      ["Обязательно — не опция как TikTok"],
      ["Обовʼязково — не опція як TikTok"],
    ),
    optional: true,
  },
  {
    code: "13",
    title: L("Basic analytics", "Podstawowa analityka", "Базовая аналитика", "Базова аналітика"),
    body: L(
      "Pick ONE: Plausible.io (paid, simple) OR GA4 (free, analytics.google.com). Add tracking script to site <head>. Visit your site → see 1 visitor in dashboard.",
      "Wybierz JEDNO: Plausible.io (płatne, proste) LUB GA4 (darmowe, analytics.google.com). Skrypt w <head>. Wejdź na stronę → 1 odwiedzający w panelu.",
      "Выбери ОДНО: Plausible.io (платный, простой) ИЛИ GA4 (бесплатный, analytics.google.com). Скрипт в <head>. Зайди на сайт → 1 посетитель в панели.",
      "Обери ОДНЕ: Plausible.io (платний, простий) АБО GA4 (безкоштовний, analytics.google.com). Скрипт у <head>. Зайди на сайт → 1 відвідувач у панелі.",
    ),
    doneWhen: L(
      "Your own visit appears in analytics within 24 hours",
      "Twoja wizyta widać w analityce w 24h",
      "Твой визит виден в аналитике в течение 24ч",
      "Твій візит видно в аналітиці за 24 год",
    ),
    tips: LArr(
      ["Do not install both on day 1 — pick one"],
      ["Nie instaluj obu w dzień 1 — wybierz jedno"],
      ["Не ставь оба в первый день — выбери один"],
      ["Не став обидва в перший день — обери один"],
    ),
    optional: true,
  },
  {
    code: "14",
    title: L("Google Business Profile (local)", "Google Business Profile (lokalnie)", "Google Business Profile (для локального бизнеса)", "Google Business Profile (локальний бізнес)"),
    body: L(
      "Only if you serve customers in a city/area. business.google.com → create → real address or service area → phone, hours, 5 photos → verify → link to your website.",
      "Tylko jeśli obsługujesz klientów w mieście/regionie. business.google.com → utwórz → adres lub obszar → telefon, godziny, 5 zdjęć → weryfikacja → link do strony.",
      "Только если обслуживаешь клиентов в городе/районе. business.google.com → создать → адрес или зона выезда → телефон, часы, 5 фото → верификация → ссылка на сайт.",
      "Лише якщо обслуговуєш клієнтів у місті/районі. business.google.com → створити → адреса або зона → телефон, години, 5 фото → верифікація → посилання на сайт.",
    ),
    doneWhen: L(
      "Maps search for your service + city shows your business pin",
      "Wyszukiwanie w Maps: usługa + miasto pokazuje pinezkę",
      "Поиск в Maps: услуга + город показывает вашу точку",
      "Пошук у Maps: послуга + місто показує вашу точку",
    ),
    tips: LArr(
      ["Skip if you are online-only SaaS"],
      ["Pomiń jeśli to online-only SaaS"],
      ["Пропусти если это online-only SaaS"],
      ["Пропусти якщо це online-only SaaS"],
    ),
    optional: true,
  },
];

export const beginnerIntro = {
  en: {
    tag: "Beginner path",
    title: "From zero to live site — 11 core steps + 3 optional marketing",
    subtitle:
      "GitHub signup level detail. Steps 12–14 are optional but GSC is mandatory for Google. Default stack: Astro + Cloudflare.",
    seoTitle: "Build a business website yourself — step-by-step for non-developers",
    marketingLaterTitle: "Marketing later",
    marketingLaterBody: "TikTok, ads, Yandex — after the site works. Full hub with honest priorities.",
    marketingLaterCta: "Open marketing hub",
  },
  pl: {
    tag: "Ścieżka beginner",
    title: "Od zera do live strony — 11 kroków + 3 opcjonalne marketing",
    subtitle:
      "Szczegółowo jak rejestracja GitHub. Kroki 12–14 opcjonalne, ale GSC obowiązkowe dla Google. Astro + Cloudflare.",
    seoTitle: "Zrób stronę firmową sam — krok po kroku dla nietechnicznych",
    marketingLaterTitle: "Marketing później",
    marketingLaterBody: "TikTok, reklamy, Yandex — po działającej stronie. Hub z uczciwymi priorytetami.",
    marketingLaterCta: "Otwórz hub marketingu",
  },
  ru: {
    tag: "Путь для новичка",
    title: "От нуля до живого сайта — 11 шагов + 3 опциональных маркетинга",
    subtitle:
      "Детально, как регистрация на GitHub. Шаги 12–14 опциональны, но GSC обязателен для Google. Стек: Astro + Cloudflare.",
    seoTitle: "Собрать сайт для бизнеса самому — пошагово для нетech",
    marketingLaterTitle: "Маркетинг потом",
    marketingLaterBody: "TikTok, реклама, Яндекс — после рабочего сайта. Полный hub с честными приоритетами.",
    marketingLaterCta: "Открыть маркетинговый hub",
  },
  uk: {
    tag: "Шлях для новачка",
    title: "Від нуля до live сайту — 11 кроків + 3 опційних маркетингу",
    subtitle:
      "Детально, як реєстрація на GitHub. Кроки 12–14 опційні, але GSC обовʼязковий для Google. Stack: Astro + Cloudflare.",
    seoTitle: "Зібрати сайт для бізнесу самому — покроково для нетech",
    marketingLaterTitle: "Маркетинг потім",
    marketingLaterBody: "TikTok, реклама, Яндекс — після робочого сайту. Повний hub з чесними пріоритетами.",
    marketingLaterCta: "Відкрити маркетинговий hub",
  },
} as const;

export const stacksPage = {
  en: {
    tag: "Stack matrix",
    title: "What 'stack' means in plain language",
    subtitle:
      "Stack = the tools that build, host and run your site. Wrong stack = expensive maintenance. Right stack = cheap and fast.",
    colName: "Tool",
    colCategory: "Category",
    colPlain: "In plain words",
    colBest: "Use when",
    colAvoid: "Skip when",
    colLevel: "Tech level",
    colCost: "Cost",
  },
  pl: {
    tag: "Macierz stacku",
    title: "Co znaczy 'stack' prostym językiem",
    subtitle:
      "Stack = narzędzia, które budują, hostują i utrzymują stronę. Zły stack = drogie utrzymanie. Dobry = tanio i szybko.",
    colName: "Narzędzie",
    colCategory: "Kategoria",
    colPlain: "Prosto mówiąc",
    colBest: "Użyj gdy",
    colAvoid: "Pomiń gdy",
    colLevel: "Poziom tech",
    colCost: "Koszt",
  },
  ru: {
    tag: "Матрица стеков",
    title: "Что такое «стек» простым языком",
    subtitle:
      "Стек — инструменты, которые собирают, хостят и поддерживают сайт. Неверный стек = дорогое обслуживание. Верный = дёшево и быстро.",
    colName: "Инструмент",
    colCategory: "Категория",
    colPlain: "Простыми словами",
    colBest: "Бери когда",
    colAvoid: "Не бери когда",
    colLevel: "Уровень",
    colCost: "Цена",
  },
  uk: {
    tag: "Матриця stack",
    title: "Що таке «stack» простою мовою",
    subtitle:
      "Stack — інструменти, що збирають, хостять і підтримують сайт. Невірний stack = дороге обслуговування. Вірний = дешево і швидко.",
    colName: "Інструмент",
    colCategory: "Категорія",
    colPlain: "Простими словами",
    colBest: "Бери коли",
    colAvoid: "Не бери коли",
    colLevel: "Рівень",
    colCost: "Ціна",
  },
} as const;

export const marketingHub = {
  en: {
    tag: "Marketing hub",
    title: "After the site works: visibility, SEO, ads",
    subtitle:
      "Full kitchen for launching a business site — not just code. Honest order: GSC first, TikTok optional, ads last.",
    cardsTitle: "Marketing pipelines",
    cardsSubtitle: "Each module has steps, done-when checks and links to guides.",
    priorityTitle: "What matters first",
    priorityItems: [
      "1. Working site + contact form",
      "2. Google Search Console (mandatory)",
      "3. Analytics (Plausible or GA4)",
      "4. Google Business Profile (if local)",
      "5. TikTok / Instagram (optional visibility)",
      "6. Google Ads (only with budget cap)",
      "7. Yandex (if RU/UA/BY audience)",
    ],
    ctaBeginner: "Back to beginner path",
    ctaGuides: "Read guide tapes",
    honestNote: "TikTok optional. GSC mandatory for Google.",
  },
  pl: {
    tag: "Hub marketingu",
    title: "Po działającej stronie: widoczność, SEO, reklamy",
    subtitle:
      "Pełna kuchnia launchu strony biznesowej — nie tylko kod. Kolejność: GSC pierwsze, TikTok opcjonalny, reklamy na końcu.",
    cardsTitle: "Pipeline marketingowe",
    cardsSubtitle: "Każdy moduł ma kroki, checkpointy i linki do poradników.",
    priorityTitle: "Co najpierw",
    priorityItems: [
      "1. Działająca strona + formularz",
      "2. Google Search Console (obowiązkowe)",
      "3. Analityka (Plausible lub GA4)",
      "4. Google Business Profile (jeśli lokalnie)",
      "5. TikTok / Instagram (opcjonalna widoczność)",
      "6. Google Ads (tylko z limitem budżetu)",
      "7. Yandex (jeśli odbiorcy RU/UA/BY)",
    ],
    ctaBeginner: "Wróć do ścieżki beginner",
    ctaGuides: "Czytaj taśmy poradników",
    honestNote: "TikTok opcjonalny. GSC obowiązkowe dla Google.",
  },
  ru: {
    tag: "Маркетинговый hub",
    title: "После рабочего сайта: видимость, SEO, реклама",
    subtitle:
      "Полная кухня запуска бизнес-сайта — не только код. Порядок: сначала GSC, TikTok опционален, реклама в конце.",
    cardsTitle: "Маркетинговые пайплайны",
    cardsSubtitle: "В каждом модуле: шаги, «готово если» и ссылки на гайды.",
    priorityTitle: "Что важнее всего",
    priorityItems: [
      "1. Рабочий сайт + форма заявки",
      "2. Google Search Console (обязательно)",
      "3. Аналитика (Plausible или GA4)",
      "4. Google Business Profile (если локальный бизнес)",
      "5. TikTok / Instagram (опциональная видимость)",
      "6. Google Ads (только с лимитом бюджета)",
      "7. Яндекс (если аудитория RU/UA/BY)",
    ],
    ctaBeginner: "Назад к пути новичка",
    ctaGuides: "Читать кассеты-гайды",
    honestNote: "TikTok опционален. GSC обязателен для Google.",
  },
  uk: {
    tag: "Маркетинговий hub",
    title: "Після робочого сайту: видимість, SEO, реклама",
    subtitle:
      "Повна кухня запуску бізнес-сайту — не лише код. Порядок: спочатку GSC, TikTok опційний, реклама в кінці.",
    cardsTitle: "Маркетингові pipeline",
    cardsSubtitle: "У кожному модулі: кроки, «готово якщо» та посилання на гайди.",
    priorityTitle: "Що важливіше",
    priorityItems: [
      "1. Робочий сайт + форма заявки",
      "2. Google Search Console (обовʼязково)",
      "3. Аналітика (Plausible або GA4)",
      "4. Google Business Profile (якщо локальний бізнес)",
      "5. TikTok / Instagram (опційна видимість)",
      "6. Google Ads (лише з лімітом бюджету)",
      "7. Яндекс (якщо аудиторія RU/UA/BY)",
    ],
    ctaBeginner: "Назад до шляху новачка",
    ctaGuides: "Читати касети-гайди",
    honestNote: "TikTok опційний. GSC обовʼязковий для Google.",
  },
} as const;

export const stacksPhilosophy = {
  en: {
    tag: "2026 defaults",
    title: "Stack philosophy — when each tool wins",
    items: [
      { code: "S-01", title: "Simple site", body: "Astro 5 + Cloudflare Pages + Markdown. Plumber, lawyer, cafe." },
      { code: "S-02", title: "App with login", body: "Next.js 15+ on Vercel. Tickets, SaaS, dashboards." },
      { code: "S-03", title: "Shop", body: "Shopify first. Custom cart only when revenue justifies dev cost." },
      { code: "S-04", title: "TikTok vs GSC", body: "GSC first — free Google traffic. TikTok when you can film real work weekly." },
      { code: "S-05", title: "Yandex", body: "Add Metrica + Webmaster if RU/UA/BY clients matter. Skip for PL-only Google." },
    ],
  },
  pl: {
    tag: "Domyślne 2026",
    title: "Filozofia stacku — kiedy które narzędzie",
    items: [
      { code: "S-01", title: "Prosta strona", body: "Astro 5 + Cloudflare Pages + Markdown. Hydraulik, prawnik, kawiarnia." },
      { code: "S-02", title: "Aplikacja z logowaniem", body: "Next.js 15+ na Vercel. Bilety, SaaS, dashboardy." },
      { code: "S-03", title: "Sklep", body: "Shopify najpierw. Custom cart gdy revenue uzasadnia koszt dev." },
      { code: "S-04", title: "TikTok vs GSC", body: "GSC pierwsze — darmowy ruch z Google. TikTok gdy możesz filmować pracę co tydzień." },
      { code: "S-05", title: "Yandex", body: "Metrica + Webmaster jeśli klienci RU/UA/BY. Pomiń dla samego Google PL." },
    ],
  },
  ru: {
    tag: "Дефолты 2026",
    title: "Философия стека — когда что выбирать",
    items: [
      { code: "S-01", title: "Простой сайт", body: "Astro 5 + Cloudflare Pages + Markdown. Сантехник, юрист, кафе." },
      { code: "S-02", title: "Приложение с входом", body: "Next.js 15+ на Vercel. Билеты, SaaS, дашборды." },
      { code: "S-03", title: "Магазин", body: "Shopify в первую очередь. Своя корзина — когда выручка оправдывает разработку." },
      { code: "S-04", title: "TikTok vs GSC", body: "Сначала GSC — бесплатный трафик из Google. TikTok — когда можешь снимать реальную работу раз в неделю." },
      { code: "S-05", title: "Яндекс", body: "Метрика + Вебмастер, если клиенты RU/UA/BY. Пропусти для чистого Google PL." },
    ],
  },
  uk: {
    tag: "Дефолти 2026",
    title: "Філософія stack — коли що обирати",
    items: [
      { code: "S-01", title: "Простий сайт", body: "Astro 5 + Cloudflare Pages + Markdown. Сантехнік, юрист, кафе." },
      { code: "S-02", title: "Застосунок з входом", body: "Next.js 15+ на Vercel. Квитки, SaaS, дашборди." },
      { code: "S-03", title: "Магазин", body: "Shopify спочатку. Свій кошик — коли revenue виправдовує розробку." },
      { code: "S-04", title: "TikTok vs GSC", body: "Спочатку GSC — безкоштовний трафік з Google. TikTok — коли можеш знімати роботу щотижня." },
      { code: "S-05", title: "Яндекс", body: "Метрика + Вебмастер, якщо клієнти RU/UA/BY. Пропусти для чистого Google PL." },
    ],
  },
} as const;

export const briefPage = {
  en: {
    tag: "Brief builder",
    title: "Answer in human language — get pipeline + stack + risks",
    subtitle: "No AI API. Rule-based recommendation you can copy into Cursor.",
    submit: "Get recommendation",
    resultTitle: "Your recommendation",
    fields: {
      businessType: "What kind of business?",
      sitePurpose: "What should the site do?",
      contentEditor: "Who edits content?",
      needsPayments: "Need to take payments online?",
      paymentType: "Payment type",
      needsAuth: "Need user login?",
      needsDashboard: "Need a dashboard or admin panel?",
      languages: "How many languages?",
      priority: "What matters most?",
      budget: "Budget mindset",
      maintenance: "How much upkeep can you handle?",
    },
    options: {
      editorMe: "Just me",
      editorTeam: "My team (non-tech)",
      editorDev: "Developer",
      payNone: "No payments",
      payShop: "Online shop",
      payEvents: "Events / tickets",
      paySub: "Subscription",
      langOne: "One language",
      langFew: "2–3 languages",
      langMany: "Many languages",
      priCheap: "As cheap as possible",
      priFast: "Launch fast",
      priSeo: "SEO / visibility",
      budMinimal: "Minimal spend",
      budModerate: "Moderate",
      budSerious: "Serious product",
      maintMinimal: "Almost zero",
      maintMonthly: "Monthly check",
      maintHands: "Hands-on weekly",
    },
  },
  pl: {
    tag: "Brief builder",
    title: "Odpowiedz po ludzku — dostaniesz pipeline + stack + ryzyka",
    subtitle: "Bez AI API. Reguły, które skopiujesz do Cursora.",
    submit: "Pokaż rekomendację",
    resultTitle: "Twoja rekomendacja",
    fields: {
      businessType: "Jaki biznes?",
      sitePurpose: "Co ma robić strona?",
      contentEditor: "Kto edytuje treść?",
      needsPayments: "Płatności online?",
      paymentType: "Typ płatności",
      needsAuth: "Logowanie użytkowników?",
      needsDashboard: "Dashboard lub panel admin?",
      languages: "Ile języków?",
      priority: "Co najważniejsze?",
      budget: "Budżet",
      maintenance: "Ile utrzymania?",
    },
    options: {
      editorMe: "Tylko ja",
      editorTeam: "Zespół (nietech)",
      editorDev: "Developer",
      payNone: "Bez płatności",
      payShop: "Sklep online",
      payEvents: "Wydarzenia / bilety",
      paySub: "Subskrypcja",
      langOne: "Jeden język",
      langFew: "2–3 języki",
      langMany: "Wiele języków",
      priCheap: "Jak najtaniej",
      priFast: "Szybki launch",
      priSeo: "SEO / widoczność",
      budMinimal: "Minimum",
      budModerate: "Umiarkowany",
      budSerious: "Poważny produkt",
      maintMinimal: "Prawie zero",
      maintMonthly: "Co miesiąc",
      maintHands: "Co tydzień",
    },
  },
  ru: {
    tag: "Конструктор brief",
    title: "Ответь по-человечески — получишь пайплайн + стек + риски",
    subtitle: "Без AI API. Правила, результат можно скопировать в Cursor.",
    submit: "Получить рекомендацию",
    resultTitle: "Твоя рекомендация",
    fields: {
      businessType: "Какой бизнес?",
      sitePurpose: "Что сайт должен делать?",
      contentEditor: "Кто правит контент?",
      needsPayments: "Нужна оплата онлайн?",
      paymentType: "Тип оплаты",
      needsAuth: "Нужен вход для пользователей?",
      needsDashboard: "Нужна панель / админка?",
      languages: "Сколько языков?",
      priority: "Что важнее?",
      budget: "Бюджет",
      maintenance: "Сколько сил на поддержку?",
    },
    options: {
      editorMe: "Только я",
      editorTeam: "Команда (нетech)",
      editorDev: "Разработчик",
      payNone: "Без оплаты",
      payShop: "Интернет-магазин",
      payEvents: "События / билеты",
      paySub: "Подписка",
      langOne: "Один язык",
      langFew: "2–3 языка",
      langMany: "Много языков",
      priCheap: "Как можно дешевле",
      priFast: "Быстрый запуск",
      priSeo: "SEO / видимость",
      budMinimal: "Минимум",
      budModerate: "Умеренный",
      budSerious: "Серьёзный продукт",
      maintMinimal: "Почти ноль",
      maintMonthly: "Раз в месяц",
      maintHands: "Каждую неделю",
    },
  },
  uk: {
    tag: "Конструктор brief",
    title: "Відповідай по-людськи — отримаєш pipeline + stack + ризики",
    subtitle: "Без AI API. Правила, результат можна скопіювати в Cursor.",
    submit: "Отримати рекомендацію",
    resultTitle: "Твоя рекомендація",
    fields: {
      businessType: "Який бізнес?",
      sitePurpose: "Що сайт має робити?",
      contentEditor: "Хто править контент?",
      needsPayments: "Потрібна оплата онлайн?",
      paymentType: "Тип оплати",
      needsAuth: "Потрібен вхід для користувачів?",
      needsDashboard: "Потрібна панель / адмінка?",
      languages: "Скільки мов?",
      priority: "Що важливіше?",
      budget: "Бюджет",
      maintenance: "Скільки сил на підтримку?",
    },
    options: {
      editorMe: "Лише я",
      editorTeam: "Команда (нетech)",
      editorDev: "Розробник",
      payNone: "Без оплати",
      payShop: "Інтернет-магазин",
      payEvents: "Події / квитки",
      paySub: "Підписка",
      langOne: "Одна мова",
      langFew: "2–3 мови",
      langMany: "Багато мов",
      priCheap: "Як можна дешевше",
      priFast: "Швидкий запуск",
      priSeo: "SEO / видимість",
      budMinimal: "Мінімум",
      budModerate: "Помірний",
      budSerious: "Серйозний продукт",
      maintMinimal: "Майже нуль",
      maintMonthly: "Раз на місяць",
      maintHands: "Щотижня",
    },
  },
} as const;

export const guidesPipelineUpdate = {
  en: {
    heroTag: "Pipeline school",
    heroTitle: "Guides for launch, SEO and automation",
    heroSubtitle:
      "Start with the project type, pick a stack, follow the beginner path, then use the practical guides below.",
    readyTag: "Ready now",
    readyTitle: "Use today",
    comingTag: "Published",
    comingTitle: "Published practical tapes",
    personasTag: "Who is this for",
    personasTitle: "Pick your scenario",
    persona1Title: "Small business owner",
    persona1Body: "Plumber, salon, lawyer — need a working site, not a course.",
    persona2Title: "Vibe coder",
    persona2Body: "You use Cursor but stack choice is random — need a system.",
    persona3Title: "Broken project",
    persona3Body: "AI demo, deploy fails, domain wrong — rescue path.",
    ctaPipeline: "Open pipeline hub",
    ctaBeginner: "14-step beginner path",
    whereBreaks: "Where it breaks",
    whereBreaksBody: "Wrong stack, no form, fake copy — fix with pipeline or rescue.",
    ctaAfterBreaks: "Fix with pipeline →",
    marketingTag: "Marketing & SEO",
    marketingTitle: "Visibility after launch",
    marketingSubtitle: "GSC, analytics, TikTok, ads, Yandex — honest order for small business.",
  },
  pl: {
    heroTag: "Szkoła pipeline",
    heroTitle: "Poradniki o launchu, SEO i automatyzacji",
    heroSubtitle:
      "Zacznij od typu projektu, wybierz stack, przejdź beginner path i użyj praktycznych poradników poniżej.",
    readyTag: "Gotowe teraz",
    readyTitle: "Użyj dziś",
    comingTag: "Opublikowane",
    comingTitle: "Opublikowane praktyczne taśmy",
    personasTag: "Dla kogo",
    personasTitle: "Wybierz scenariusz",
    persona1Title: "Właściciel małej firmy",
    persona1Body: "Hydraulik, salon, prawnik — działająca strona, nie kurs.",
    persona2Title: "Vibe coder",
    persona2Body: "Cursor jest, ale stack losowy — potrzebujesz systemu.",
    persona3Title: "Zepsuty projekt",
    persona3Body: "Demo AI, deploy pada, domena — ścieżka rescue.",
    ctaPipeline: "Otwórz hub pipeline",
    ctaBeginner: "11 kroków beginner",
    whereBreaks: "Gdzie się psuje",
    whereBreaksBody: "Zły stack, brak formy, fake copy — napraw pipeline lub rescue.",
    ctaAfterBreaks: "Napraw pipeline →",
    marketingTag: "Marketing i SEO",
    marketingTitle: "Widoczność po launchu",
    marketingSubtitle: "GSC, analityka, TikTok, reklamy, Yandex — uczciwa kolejność dla małej firmy.",
  },
  ru: {
    heroTag: "Школа пайплайнов",
    heroTitle: "Гайды по запуску, SEO и автоматизации",
    heroSubtitle:
      "Начни с типа проекта, выбери стек, пройди путь для новичка и используй практические гайды ниже.",
    readyTag: "Уже готово",
    readyTitle: "Можно использовать сегодня",
    comingTag: "Опубликовано",
    comingTitle: "Готовые практические кассеты",
    personasTag: "Для кого",
    personasTitle: "Выбери свой сценарий",
    persona1Title: "Владелец малого бизнеса",
    persona1Body: "Сантехник, салон, юрист — нужен рабочий сайт, а не курс.",
    persona2Title: "Vibe coder",
    persona2Body: "Cursor есть, но стек наугад — нужна система.",
    persona3Title: "Сломанный проект",
    persona3Body: "AI-демка, деплой падает, домен не тот — путь rescue.",
    ctaPipeline: "Открыть hub пайплайнов",
    ctaBeginner: "11 шагов для новичка",
    whereBreaks: "Где ломается",
    whereBreaksBody: "Неверный стек, нет формы, фейковый текст — чини через pipeline или rescue.",
    ctaAfterBreaks: "Починить через pipeline →",
    marketingTag: "Маркетинг и SEO",
    marketingTitle: "Видимость после запуска",
    marketingSubtitle: "GSC, аналитика, TikTok, реклама, Яндекс — честный порядок для малого бизнеса.",
  },
  uk: {
    heroTag: "Школа pipeline",
    heroTitle: "Гайди про запуск, SEO й автоматизацію",
    heroSubtitle:
      "Почни з типу проєкту, обери stack, пройди шлях для новачка і використовуй практичні гайди нижче.",
    readyTag: "Уже готово",
    readyTitle: "Можна використати сьогодні",
    comingTag: "Опубліковано",
    comingTitle: "Готові практичні касети",
    personasTag: "Для кого",
    personasTitle: "Обери свій сценарій",
    persona1Title: "Власник малого бізнесу",
    persona1Body: "Сантехнік, салон, юрист — потрібен робочий сайт, а не курс.",
    persona2Title: "Vibe coder",
    persona2Body: "Cursor є, але stack наугад — потрібна система.",
    persona3Title: "Зламаний проєкт",
    persona3Body: "AI-демо, deploy падає, домен не той — шлях rescue.",
    ctaPipeline: "Відкрити hub pipeline",
    ctaBeginner: "11 кроків для новачка",
    whereBreaks: "Де ламається",
    whereBreaksBody: "Невірний stack, немає форми, фейковий текст — лагодь через pipeline або rescue.",
    ctaAfterBreaks: "Полагодити через pipeline →",
    marketingTag: "Маркетинг і SEO",
    marketingTitle: "Видимість після запуску",
    marketingSubtitle: "GSC, аналітика, TikTok, реклама, Яндекс — чесний порядок для малого бізнесу.",
  },
} as const;

function L(en: string, pl: string, ru: string, uk: string): Record<Locale, string> {
  return { en, pl, ru, uk };
}

function LArr(
  en: string[],
  pl: string[],
  ru: string[],
  uk: string[],
): Record<Locale, string[]> {
  return { en, pl, ru, uk };
}

export function buildBriefMarkdown(
  data: BriefFormData,
  pipelineId: PipelineSlug,
  locale: Locale,
): string {
  const p = briefPage[locale];
  return `# Project Brief

## ${p.fields.businessType}
${data.businessType}

## ${p.fields.sitePurpose}
${data.sitePurpose}

## Recommendation
Pipeline: **${pipelineId}**

## Settings
- Payments: ${data.needsPayments ? data.paymentType : "no"}
- Auth: ${data.needsAuth ? "yes" : "no"}
- Dashboard: ${data.needsDashboard ? "yes" : "no"}
- Languages: ${data.languages}
- Priority: ${data.priority}
- Budget: ${data.budget}
- Maintenance: ${data.maintenance}
`;
}
