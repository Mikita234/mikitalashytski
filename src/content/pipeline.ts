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
      "Simple service site → Astro + Cloudflare Pages + Markdown. Next.js + Vercel only for tickets, SaaS and dashboards.",
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
      "Prosta strona usługowa → Astro + Cloudflare Pages + Markdown. Next.js + Vercel tylko na bilety, SaaS i dashboardy.",
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
      "Простой сайт услуг → Astro + Cloudflare Pages + Markdown. Next.js + Vercel только для билетов, SaaS и дашбордов.",
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
      "Простий сайт послуг → Astro + Cloudflare Pages + Markdown. Next.js + Vercel лише для квитків, SaaS і dashboard.",
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
];

export const beginnerIntro = {
  en: {
    tag: "Beginner path",
    title: "From zero to live site — 11 steps, no jargon first",
    subtitle:
      "GitHub signup level detail. Each step has a 'done when' checkpoint. Default stack: Astro + Cloudflare.",
    seoTitle: "Build a business website yourself — step-by-step for non-developers",
  },
  pl: {
    tag: "Ścieżka beginner",
    title: "Od zera do live strony — 11 kroków, bez żargonu",
    subtitle:
      "Szczegółowo jak rejestracja GitHub. Każdy krok ma checkpoint 'gotowe, gdy'. Domyślnie Astro + Cloudflare.",
    seoTitle: "Zrób stronę firmową sam — krok po kroku dla nietechnicznych",
  },
  ru: {
    tag: "Путь для новичка",
    title: "От нуля до живого сайта — 11 шагов, сначала без жаргона",
    subtitle:
      "Детально, как регистрация на GitHub. У каждого шага — «готово, если…». Стек по умолчанию: Astro + Cloudflare.",
    seoTitle: "Собрать сайт для бизнеса самому — пошагово для нетech",
  },
  uk: {
    tag: "Шлях для новачка",
    title: "Від нуля до live сайту — 11 кроків, спочатку без жargonu",
    subtitle:
      "Детально, як реєстрація на GitHub. У кожного кроку — «готово, якщо…». Stack: Astro + Cloudflare.",
    seoTitle: "Зібрати сайт для бізнесу самому — покроково для нетech",
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
    heroTitle: "Not blog posts — build pipelines",
    heroSubtitle:
      "Choose project type, get stack recommendation, walk the 11-step beginner path or download skill packs. Manual guide tapes below.",
    readyTag: "Ready now",
    readyTitle: "Use today",
    comingTag: "Coming in series",
    comingTitle: "Deep dives later",
    personasTag: "Who is this for",
    personasTitle: "Pick your scenario",
    persona1Title: "Small business owner",
    persona1Body: "Plumber, salon, lawyer — need a working site, not a course.",
    persona2Title: "Vibe coder",
    persona2Body: "You use Cursor but stack choice is random — need a system.",
    persona3Title: "Broken project",
    persona3Body: "AI demo, deploy fails, domain wrong — rescue path.",
    ctaPipeline: "Open pipeline hub",
    ctaBeginner: "11-step beginner path",
    whereBreaks: "Where it breaks",
    whereBreaksBody: "Wrong stack, no form, fake copy — fix with pipeline or rescue.",
    ctaAfterBreaks: "Fix with pipeline →",
  },
  pl: {
    heroTag: "Szkoła pipeline",
    heroTitle: "Nie posty — pipeline budowy",
    heroSubtitle:
      "Typ projektu, rekomendacja stacku, 11 kroków beginner albo skill pack. Ręczne taśmy poniżej.",
    readyTag: "Gotowe teraz",
    readyTitle: "Użyj dziś",
    comingTag: "W serii",
    comingTitle: "Głębsze materiały później",
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
  },
  ru: {
    heroTag: "Школа пайплайнов",
    heroTitle: "Не статьи — пайплайны сборки",
    heroSubtitle:
      "Тип проекта, рекомендация стека, 11 шагов для новичка или skill pack. Ручные кассеты — ниже.",
    readyTag: "Уже готово",
    readyTitle: "Можно использовать сегодня",
    comingTag: "Будет в серии",
    comingTitle: "Глубокие разборы позже",
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
  },
  uk: {
    heroTag: "Школа pipeline",
    heroTitle: "Не статті — pipeline збірки",
    heroSubtitle:
      "Тип проєкту, рекомендація stack, 11 кроків для новачка або skill pack. Ручні касети — нижче.",
    readyTag: "Уже готово",
    readyTitle: "Можна використати сьогодні",
    comingTag: "Буде в серії",
    comingTitle: "Глибокі розбори пізніше",
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
