import type { Locale } from "@/i18n/routing";

export type GuideSlug =
  | "make-website-yourself"
  | "cursor-github-vercel"
  | "cursor-prompts"
  | "ai-website-mistakes"
  | "when-to-hire"
  | "tiktok-for-small-business"
  | "google-ads-starter"
  | "google-search-console-setup"
  | "yandex-for-ru-market"
  | "frameworks-pick-2026"
  | "website-launch-checklist-full"
  | "seo-internal-linking"
  | "homepage-seo-description"
  | "google-business-profile"
  | "form-tracking-conversions"
  | "service-page-that-converts"
  | "case-study-proof-structure"
  | "safe-case-screenshots"
  | "seo-content-clusters"
  | "ai-search-llms-txt"
  | "analytics-without-ga4";

export interface GuideStep {
  title: string;
  body: string;
}

export interface Guide {
  slug: GuideSlug;
  tape: string;
  channel: string;
  minutes: number;
  tags: string[];
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  intro: Record<Locale, string>;
  outcome: Record<Locale, string[]>;
  steps: Record<Locale, GuideStep[]>;
  mistakes: Record<Locale, string[]>;
  cta: Record<Locale, { title: string; body: string; bullets: string[] }>;
  related?: GuideSlug[];
}

export interface GuideRoadmapModule {
  code: string;
  title: string;
  body: string;
  items: string[];
}

export interface GuideRoadmap {
  tag: string;
  title: string;
  subtitle: string;
  modulesTitle: string;
  setupTitle: string;
  setupSubtitle: string;
  modules: GuideRoadmapModule[];
  setupSteps: GuideRoadmapModule[];
}

export interface GuideTopicExpansion {
  tag: string;
  title: string;
  subtitle: string;
  items: GuideRoadmapModule[];
}

export interface GuideContentCluster {
  code: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  guides: GuideSlug[];
  href: string;
}

const sharedTags = ["Cursor", "GitHub", "Vercel", "SEO"];

export const guideIntro = {
  en: {
    tag: "Free tapes",
    title: "Build a real website yourself. No no-code toys.",
    subtitle:
      "Free guides for people who want Cursor, Codex, GitHub and Vercel instead of overpriced courses. If you get stuck, I can audit, fix or finish the build.",
    primary: "Start with the full guide",
    secondary: "Ask for a rescue audit",
  },
  pl: {
    tag: "Darmowe taśmy",
    title: "Zrób prawdziwą stronę samodzielnie. Bez zabawek no-code.",
    subtitle:
      "Darmowe poradniki o Cursorze, Codex, GitHubie i Vercel zamiast kursów za 999$. Jeśli utkniesz, mogę zrobić audyt, naprawić albo dokończyć projekt.",
    primary: "Zacznij od pełnego poradnika",
    secondary: "Zamów rescue audit",
  },
  ru: {
    tag: "Бесплатные кассеты",
    title: "Собери нормальный сайт сам. Без no-code игрушек.",
    subtitle:
      "Бесплатные гайды по Cursor, Codex, GitHub и Vercel вместо курсов за 999$. Если застрял — могу разобрать, починить или довести проект.",
    primary: "Начать с полного гайда",
    secondary: "Заказать rescue-аудит",
  },
  uk: {
    tag: "Безкоштовні касети",
    title: "Збери нормальний сайт сам. Без no-code іграшок.",
    subtitle:
      "Безкоштовні гайди про Cursor, Codex, GitHub і Vercel замість курсів за 999$. Якщо застрягнеш — можу розібрати, полагодити або довести проєкт.",
    primary: "Почати з повного гайда",
    secondary: "Замовити rescue-аудит",
  },
} as const;

export const guideLabels = {
  en: {
    all: "All guide tapes",
    outcome: "What you will have",
    steps: "Steps",
    mistakes: "Common failure points",
    next: "Next tape",
    read: "Read guide",
    minutes: "min read",
    back: "Back to guides",
    scrollHint: "← scroll →",
    scrollPrev: "Previous tape",
    scrollNext: "Next tape",
    related: "Related guides",
  },
  pl: {
    all: "Wszystkie taśmy",
    outcome: "Co będziesz mieć",
    steps: "Kroki",
    mistakes: "Typowe problemy",
    next: "Następna taśma",
    read: "Czytaj poradnik",
    minutes: "min czytania",
    back: "Wróć do poradników",
    scrollHint: "← przewiń →",
    scrollPrev: "Poprzednia taśma",
    scrollNext: "Następna taśma",
    related: "Powiązane poradniki",
  },
  ru: {
    all: "Все кассеты",
    outcome: "Что получится",
    steps: "Шаги",
    mistakes: "Где чаще ломается",
    next: "Следующая кассета",
    read: "Открыть гайд",
    minutes: "мин чтения",
    back: "Назад к гайдам",
    scrollHint: "← листай →",
    scrollPrev: "Предыдущая кассета",
    scrollNext: "Следующая кассета",
    related: "Связанные гайды",
  },
  uk: {
    all: "Усі касети",
    outcome: "Що отримаєш",
    steps: "Кроки",
    mistakes: "Де найчастіше ламається",
    next: "Наступна касета",
    read: "Відкрити гайд",
    minutes: "хв читання",
    back: "Назад до гайдів",
    scrollHint: "← гортай →",
    scrollPrev: "Попередня касета",
    scrollNext: "Наступна касета",
    related: "Пов'язані гайди",
  },
} as const;

export const guideRoadmap: Record<Locale, GuideRoadmap> = {
  en: {
    tag: "AI coding school",
    title: "Practical workflow for AI-assisted coding",
    subtitle:
      "How to use Cursor, Claude, Codex, scripts and human review checkpoints without turning the project into a messy AI draft.",
    modulesTitle: "What you can use from the system",
    setupTitle: "System setup path",
    setupSubtitle:
      "Do it in this order. Each step leaves you with a working artifact, not just a video watched.",
    modules: [
      {
        code: "MOD-01",
        title: "Cursor as the workbench",
        body: "Project context, rules, small commits, refactors and how to stop Cursor from rewriting the whole app.",
        items: ["project rules", "file-by-file edits", "debug loops"],
      },
      {
        code: "MOD-02",
        title: "Claude, Codex and model roles",
        body: "Use different models for different jobs: architecture, code edits, critique, copy, tests and documentation.",
        items: ["role split", "handoff prompts", "review prompts"],
      },
      {
        code: "MOD-03",
        title: "Chinese AI stack",
        body: "Where Qwen / DeepSeek / Kimi-style models fit: cheap drafting, alternative reasoning, translation and bulk content checks.",
        items: ["cost control", "second opinions", "multilingual drafts"],
      },
      {
        code: "MOD-04",
        title: "Skills and reusable instructions",
        body: "Turn repeated work into local skills: SEO checklist, landing audit, product card generation, deployment checklist.",
        items: ["SKILL.md", "checklists", "templates"],
      },
      {
        code: "MOD-05",
        title: "Scripts and automation",
        body: "Use small scripts for boring work: content transforms, image lists, sitemap checks, product data cleanup and reports.",
        items: ["Node/Python scripts", "safe inputs", "logs"],
      },
      {
        code: "MOD-06",
        title: "Human-in-the-loop pipelines",
        body: "AI drafts, scripts prepare, human approves, system publishes. No blind auto-posting for business-critical work.",
        items: ["approval gates", "diff review", "rollback"],
      },
    ],
    setupSteps: [
      {
        code: "01",
        title: "Create the base workspace",
        body: "GitHub repo, README, project rules, design references and a short business brief.",
        items: ["repo", "README", "rules"],
      },
      {
        code: "02",
        title: "Install the coding loop",
        body: "Cursor/Codex for edits, Claude-style chat for planning and review, terminal for tests and builds.",
        items: ["edit", "test", "review"],
      },
      {
        code: "03",
        title: "Add reusable prompts and skills",
        body: "Save prompts for landing pages, audits, SEO, product data, translations and deployment.",
        items: ["prompts", "skills", "checklists"],
      },
      {
        code: "04",
        title: "Wire scripts into the workflow",
        body: "Start with safe scripts: generate page drafts, validate links, check JSON-LD and prepare content tables.",
        items: ["scripts", "validation", "reports"],
      },
      {
        code: "05",
        title: "Publish with checkpoints",
        body: "Git diff, human review, build, deploy preview, production deploy and rollback notes.",
        items: ["diff", "preview", "prod"],
      },
    ],
  },
  pl: {
    tag: "Szkoła AI coding",
    title: "Praktyczny workflow do AI-assisted coding",
    subtitle:
      "Jak używać Cursor, Claude, Codex, skryptów i human review bez zamieniania projektu w chaotyczny draft AI.",
    modulesTitle: "Co możesz wykorzystać w systemie",
    setupTitle: "Ścieżka konfiguracji systemu",
    setupSubtitle:
      "Rób to w tej kolejności. Każdy krok zostawia działający artefakt, nie tylko obejrzany materiał.",
    modules: [
      {
        code: "MOD-01",
        title: "Cursor jako warsztat",
        body: "Kontekst projektu, rules, małe commity, refaktory i jak nie pozwolić Cursorowi przepisać całej aplikacji.",
        items: ["project rules", "edycje plik po pliku", "debug loop"],
      },
      {
        code: "MOD-02",
        title: "Claude, Codex i role modeli",
        body: "Różne modele do różnych zadań: architektura, zmiany w kodzie, krytyka, copy, testy i dokumentacja.",
        items: ["podział ról", "handoff prompts", "review prompts"],
      },
      {
        code: "MOD-03",
        title: "Chiński stack AI",
        body: "Gdzie pasują modele typu Qwen / DeepSeek / Kimi: tanie drafty, druga opinia, tłumaczenia i masowe sprawdzanie treści.",
        items: ["kontrola kosztów", "druga opinia", "drafty multi-language"],
      },
      {
        code: "MOD-04",
        title: "Skills i instrukcje wielokrotnego użytku",
        body: "Zamień powtarzalną pracę w lokalne skills: SEO checklist, audyt landingu, karty produktów, deployment checklist.",
        items: ["SKILL.md", "checklisty", "szablony"],
      },
      {
        code: "MOD-05",
        title: "Skrypty i automatyzacja",
        body: "Małe skrypty do nudnych rzeczy: transformacje treści, listy obrazów, sitemap, czyszczenie danych produktów i raporty.",
        items: ["Node/Python", "bezpieczne inputy", "logi"],
      },
      {
        code: "MOD-06",
        title: "Human-in-the-loop pipelines",
        body: "AI robi draft, skrypty przygotowują, człowiek zatwierdza, system publikuje. Bez ślepego auto-postingu dla biznesu.",
        items: ["approval gates", "diff review", "rollback"],
      },
    ],
    setupSteps: [
      {
        code: "01",
        title: "Stwórz bazowy workspace",
        body: "Repo GitHub, README, project rules, referencje designu i krótki brief biznesowy.",
        items: ["repo", "README", "rules"],
      },
      {
        code: "02",
        title: "Ustaw pętlę pracy",
        body: "Cursor/Codex do edycji, Claude-style chat do planu i review, terminal do testów i buildów.",
        items: ["edit", "test", "review"],
      },
      {
        code: "03",
        title: "Dodaj prompty i skills",
        body: "Zapisz prompty do landingów, audytów, SEO, danych produktów, tłumaczeń i deploymentu.",
        items: ["prompts", "skills", "checklists"],
      },
      {
        code: "04",
        title: "Podłącz skrypty",
        body: "Zacznij od bezpiecznych skryptów: drafty stron, walidacja linków, JSON-LD i tabele treści.",
        items: ["scripts", "validation", "reports"],
      },
      {
        code: "05",
        title: "Publikuj z checkpointami",
        body: "Git diff, review człowieka, build, deploy preview, produkcja i notatki rollback.",
        items: ["diff", "preview", "prod"],
      },
    ],
  },
  ru: {
    tag: "Школа AI-кодинга",
    title: "Практичный процесс работы с AI-кодингом",
    subtitle:
      "Как использовать Cursor, Claude, Codex, скрипты и человеческую проверку так, чтобы проект не превратился в хаотичный AI-черновик.",
    modulesTitle: "Что можно забрать в работу",
    setupTitle: "Как по шагам настроить систему",
    setupSubtitle:
      "Идти лучше в этом порядке: каждый шаг даёт рабочий артефакт, который потом переиспользуется в проектах.",
    modules: [
      {
        code: "MOD-01",
        title: "Cursor как рабочая среда",
        body: "Контекст проекта, правила, маленькие коммиты, точечные правки, рефакторинг и как не дать Cursor переписать весь проект.",
        items: ["project rules", "правки по файлам", "debug loop"],
      },
      {
        code: "MOD-02",
        title: "Claude, Codex и роли моделей",
        body: "Одна модель планирует, другая пишет код, третья критикует. Разделяем архитектуру, правки, copy, тесты и документацию.",
        items: ["разделение ролей", "handoff prompts", "review prompts"],
      },
      {
        code: "MOD-03",
        title: "Китайские AI-модели",
        body: "Где использовать Qwen / DeepSeek / Kimi-подобные модели: дешёвые черновики, альтернативное рассуждение, переводы, массовая проверка контента.",
        items: ["контроль цены", "вторая точка зрения", "мультиязычные черновики"],
      },
      {
        code: "MOD-04",
        title: "Skills и переиспользуемые инструкции",
        body: "Повторяющуюся работу превращаем в локальные skills: SEO-чеклист, аудит лендинга, генерация карточек товара, чеклист деплоя.",
        items: ["SKILL.md", "чеклисты", "шаблоны"],
      },
      {
        code: "MOD-05",
        title: "Скрипты и автоматизация",
        body: "Маленькие Node/Python-скрипты для рутины: тексты, картинки, sitemap, JSON-LD, чистка товарных данных, отчёты.",
        items: ["Node/Python", "безопасные inputs", "логи"],
      },
      {
        code: "MOD-06",
        title: "Пайплайны и human-in-the-loop",
        body: "AI готовит черновик, скрипт нормализует, человек проверяет, система публикует. Без слепой автопубликации там, где есть бизнес-риск.",
        items: ["approval gates", "diff review", "rollback"],
      },
    ],
    setupSteps: [
      {
        code: "01",
        title: "Собрать базовое рабочее место",
        body: "GitHub repo, README, project rules, дизайн-референсы, короткий business brief и папка для reusable prompts.",
        items: ["repo", "README", "rules"],
      },
      {
        code: "02",
        title: "Настроить цикл правок",
        body: "Cursor/Codex для изменений в коде, Claude-style чат для плана и ревью, терминал для тестов, build и git diff.",
        items: ["edit", "test", "review"],
      },
      {
        code: "03",
        title: "Добавить prompts и skills",
        body: "Сохранить инструкции для лендинга, аудита, SEO, product cards, переводов, деплоя и проверки перед публикацией.",
        items: ["prompts", "skills", "checklists"],
      },
      {
        code: "04",
        title: "Подключить скрипты",
        body: "Начать с безопасного: генерация черновиков страниц, проверка ссылок, JSON-LD, таблицы контента, подготовка sitemap.",
        items: ["scripts", "validation", "reports"],
      },
      {
        code: "05",
        title: "Ввести human checkpoints",
        body: "Перед публикацией: посмотреть diff, открыть preview, проверить форму, SEO, мобильную версию и только потом deploy production.",
        items: ["diff", "preview", "prod"],
      },
      {
        code: "06",
        title: "Собрать личный pipeline",
        body: "Один шаблон процесса: idea -> brief -> AI draft -> code -> tests -> human review -> deploy -> analytics -> next iteration.",
        items: ["pipeline", "analytics", "iteration"],
      },
    ],
  },
  uk: {
    tag: "Школа AI-кодингу",
    title: "Практичний процес роботи з AI-кодингом",
    subtitle:
      "Як використовувати Cursor, Claude, Codex, скрипти й людську перевірку так, щоб проєкт не перетворився на хаотичний AI-чернетку.",
    modulesTitle: "Що можна забрати в роботу",
    setupTitle: "Як по кроках налаштувати систему",
    setupSubtitle:
      "Краще йти в цьому порядку: кожен крок дає робочий артефакт, який потім пере використовується у проєктах.",
    modules: [
      {
        code: "MOD-01",
        title: "Cursor як робоче середовище",
        body: "Контекст проєкту, правила, маленькі коміти, точкові правки, рефакторинг і як не дати Cursor переписати весь проєкт.",
        items: ["project rules", "правки по файлах", "debug loop"],
      },
      {
        code: "MOD-02",
        title: "Claude, Codex і ролі моделей",
        body: "Одна модель планує, інша пише код, третя критикує. Розділяємо архітектуру, правки, copy, тести й документацію.",
        items: ["розподіл ролей", "handoff prompts", "review prompts"],
      },
      {
        code: "MOD-03",
        title: "Китайські AI-моделі",
        body: "Де використовувати Qwen / DeepSeek / Kimi-подібні моделі: дешеві чернетки, альтернативне мислення, переклади, перевірка контенту.",
        items: ["контроль ціни", "друга думка", "мультимовні чернетки"],
      },
      {
        code: "MOD-04",
        title: "Skills і reusable instructions",
        body: "Повторювану роботу перетворюємо на локальні skills: SEO-чеклист, аудит лендингу, product cards, deployment checklist.",
        items: ["SKILL.md", "чеклисти", "шаблони"],
      },
      {
        code: "MOD-05",
        title: "Скрипти й автоматизація",
        body: "Малі Node/Python-скрипти для рутини: тексти, картинки, sitemap, JSON-LD, чистка товарних даних, звіти.",
        items: ["Node/Python", "safe inputs", "логи"],
      },
      {
        code: "MOD-06",
        title: "Pipeline і human-in-the-loop",
        body: "AI готує draft, скрипт нормалізує, людина перевіряє, система публікує. Без сліпої автопублікації там, де є бізнес-ризик.",
        items: ["approval gates", "diff review", "rollback"],
      },
    ],
    setupSteps: [
      {
        code: "01",
        title: "Зібрати базовий workspace",
        body: "GitHub repo, README, project rules, дизайн-референси, короткий business brief і папка для reusable prompts.",
        items: ["repo", "README", "rules"],
      },
      {
        code: "02",
        title: "Налаштувати цикл правок",
        body: "Cursor/Codex для змін у коді, Claude-style чат для плану й review, terminal для tests, build і git diff.",
        items: ["edit", "test", "review"],
      },
      {
        code: "03",
        title: "Додати prompts і skills",
        body: "Зберегти інструкції для лендингу, аудиту, SEO, product cards, перекладів, deployment і pre-publish перевірки.",
        items: ["prompts", "skills", "checklists"],
      },
      {
        code: "04",
        title: "Підключити скрипти",
        body: "Почати з безпечного: draft сторінок, перевірка links, JSON-LD, таблиці контенту, підготовка sitemap.",
        items: ["scripts", "validation", "reports"],
      },
      {
        code: "05",
        title: "Ввести human checkpoints",
        body: "Перед публікацією: diff, preview, форма, SEO, mobile і тільки потім production deploy.",
        items: ["diff", "preview", "prod"],
      },
      {
        code: "06",
        title: "Зібрати особистий pipeline",
        body: "Один шаблон процесу: idea -> brief -> AI draft -> code -> tests -> human review -> deploy -> analytics -> next iteration.",
        items: ["pipeline", "analytics", "iteration"],
      },
    ],
  },
};

export const guideTopicExpansion: Record<Locale, GuideTopicExpansion> = {
  en: {
    tag: "System library",
    title: "Reusable systems for real AI-assisted work",
    subtitle:
      "Same practical format: what the tool is for, when to use it, how to wire it into a real workflow and where a human must approve the result.",
    items: [
      {
        code: "SYS-01",
        title: "AI agents and task delegation",
        body: "When to use an agent, how to split work into roles, and why every agent needs a scope, tools, budget and stop condition.",
        items: ["agent roles", "tool access", "stop rules"],
      },
      {
        code: "SYS-02",
        title: "MCP and connected tools",
        body: "Connect AI to GitHub, Gmail, files, docs, databases and internal tools without turning every task into copy-paste.",
        items: ["MCP servers", "permissions", "audit trail"],
      },
      {
        code: "SYS-03",
        title: "RAG and knowledge bases",
        body: "Build a small knowledge base for project docs, product catalogs, FAQs and internal instructions before asking AI to answer.",
        items: ["chunks", "retrieval", "citations"],
      },
      {
        code: "SYS-04",
        title: "Browser automation",
        body: "Use Playwright-style checks for forms, checkout, layouts and SEO-critical pages instead of trusting screenshots.",
        items: ["Playwright", "forms", "screenshots"],
      },
      {
        code: "SYS-05",
        title: "Evals and quality gates",
        body: "Create repeatable checks for copy, code, schema, translations and generated product data so mistakes do not scale.",
        items: ["eval cases", "thresholds", "regression checks"],
      },
      {
        code: "SYS-06",
        title: "Design systems for AI builds",
        body: "Give AI tokens, components, spacing rules and examples so every new page does not look like a different template.",
        items: ["tokens", "components", "examples"],
      },
      {
        code: "SYS-07",
        title: "SEO, AEO and content operations",
        body: "Turn search intent into a publishing pipeline: briefs, drafts, schema, internal links, updates and analytics review.",
        items: ["briefs", "schema", "content ops"],
      },
      {
        code: "SYS-08",
        title: "Security and secrets",
        body: "Basic rules for env vars, tokens, API keys, webhooks, user data and why AI must not invent security decisions.",
        items: ["env vars", "tokens", "webhooks"],
      },
      {
        code: "SYS-09",
        title: "Monitoring and rollback",
        body: "Logs, analytics, uptime, error reports, deployment history and the boring checklist that saves production launches.",
        items: ["logs", "alerts", "rollback"],
      },
      {
        code: "SYS-10",
        title: "Cost and model routing",
        body: "Use expensive models only where they matter, cheap models for bulk work, and local scripts for deterministic tasks.",
        items: ["routing", "budgets", "batch work"],
      },
      {
        code: "SYS-11",
        title: "E-commerce data pipelines",
        body: "Product descriptions, categories, attributes, translations, marketplace exports and human approval before publishing.",
        items: ["products", "feeds", "approval"],
      },
      {
        code: "SYS-12",
        title: "Repeatable project checklist",
        body: "A practical checklist for every project: intake, brief, build, review, publish, measure and improve.",
        items: ["intake", "review", "iteration"],
      },
    ],
  },
  pl: {
    tag: "Biblioteka systemów",
    title: "Systemy wielokrotnego użytku do realnej pracy z AI",
    subtitle:
      "Ten sam praktyczny format: do czego jest narzędzie, kiedy go użyć, jak wpiąć w workflow i gdzie człowiek musi zatwierdzić wynik.",
    items: [
      {
        code: "SYS-01",
        title: "Agenci AI i delegowanie zadań",
        body: "Kiedy używać agenta, jak dzielić pracę na role i dlaczego agent potrzebuje scope, narzędzi, budżetu i stop condition.",
        items: ["role agentów", "tool access", "stop rules"],
      },
      {
        code: "SYS-02",
        title: "MCP i podłączone narzędzia",
        body: "Połącz AI z GitHub, Gmail, plikami, dokumentacją, bazami danych i narzędziami bez ręcznego copy-paste.",
        items: ["MCP servers", "permissions", "audit trail"],
      },
      {
        code: "SYS-03",
        title: "RAG i bazy wiedzy",
        body: "Mała baza wiedzy dla dokumentów projektu, katalogów produktów, FAQ i instrukcji zanim AI zacznie odpowiadać.",
        items: ["chunks", "retrieval", "citations"],
      },
      {
        code: "SYS-04",
        title: "Automatyzacja przeglądarki",
        body: "Testy Playwright dla formularzy, checkoutu, layoutów i stron SEO zamiast ufania screenshotom.",
        items: ["Playwright", "forms", "screenshots"],
      },
      {
        code: "SYS-05",
        title: "Evals i quality gates",
        body: "Powtarzalne kontrole copy, kodu, schema, tłumaczeń i danych produktów, żeby błędy nie skalowały się.",
        items: ["eval cases", "thresholds", "regression"],
      },
      {
        code: "SYS-06",
        title: "Design system dla AI buildów",
        body: "Tokeny, komponenty, spacing i przykłady, żeby każda nowa strona nie wyglądała jak inny szablon.",
        items: ["tokens", "components", "examples"],
      },
      {
        code: "SYS-07",
        title: "SEO, AEO i content ops",
        body: "Zamiana intencji wyszukiwania w pipeline: brief, draft, schema, linki wewnętrzne, aktualizacje i analiza.",
        items: ["briefs", "schema", "content ops"],
      },
      {
        code: "SYS-08",
        title: "Security i secrets",
        body: "Env vars, tokeny, API keys, webhooki, dane użytkowników i zasada: AI nie wymyśla decyzji bezpieczeństwa.",
        items: ["env vars", "tokens", "webhooks"],
      },
      {
        code: "SYS-09",
        title: "Monitoring i rollback",
        body: "Logi, analityka, uptime, błędy, historia deploymentów i nudna checklista ratująca produkcję.",
        items: ["logs", "alerts", "rollback"],
      },
      {
        code: "SYS-10",
        title: "Koszt i routing modeli",
        body: "Drogie modele tylko tam, gdzie warto, tanie do bulk work, lokalne skrypty do deterministycznych zadań.",
        items: ["routing", "budgets", "batch work"],
      },
      {
        code: "SYS-11",
        title: "Pipeline danych e-commerce",
        body: "Opisy, kategorie, atrybuty, tłumaczenia, eksporty marketplace i zatwierdzenie człowieka przed publikacją.",
        items: ["products", "feeds", "approval"],
      },
      {
        code: "SYS-12",
        title: "Osobisty system operacyjny",
        body: "Powtarzalny system pracy: intake, brief, build, review, publish, measure i poprawa.",
        items: ["intake", "review", "iteration"],
      },
    ],
  },
  ru: {
    tag: "Библиотека систем",
    title: "Переиспользуемые системы для реальной работы с AI",
    subtitle:
      "Тот же формат: что это, зачем нужно, когда применять, как встроить в пайплайн и где человек обязан проверить результат перед публикацией.",
    items: [
      {
        code: "SYS-01",
        title: "AI-агенты и делегирование задач",
        body: "Когда нужен агент, как делить работу на роли и почему у каждого агента должны быть scope, инструменты, бюджет и условие остановки.",
        items: ["agent roles", "tool access", "stop rules"],
      },
      {
        code: "SYS-02",
        title: "MCP и подключённые инструменты",
        body: "Как связать AI с GitHub, Gmail, файлами, документацией, базами и внутренними системами, чтобы не копипастить руками.",
        items: ["MCP servers", "permissions", "audit trail"],
      },
      {
        code: "SYS-03",
        title: "RAG и базы знаний",
        body: "Как собрать маленькую knowledge base для проекта: документы, каталог товаров, FAQ, инструкции, чтобы AI отвечал из источников.",
        items: ["chunks", "retrieval", "citations"],
      },
      {
        code: "SYS-04",
        title: "Browser automation",
        body: "Playwright-проверки для форм, checkout, мобильной вёрстки, критичных SEO-страниц и визуальных регрессий.",
        items: ["Playwright", "forms", "screenshots"],
      },
      {
        code: "SYS-05",
        title: "Evals и quality gates",
        body: "Повторяемые проверки для copy, кода, schema, переводов, карточек товаров и AI-ответов, чтобы ошибки не масштабировались.",
        items: ["eval cases", "thresholds", "regression checks"],
      },
      {
        code: "SYS-06",
        title: "Design system для AI-сборки",
        body: "Токены, компоненты, spacing, примеры, правила текста и состояния, чтобы AI не делал каждый экран как новый шаблон.",
        items: ["tokens", "components", "examples"],
      },
      {
        code: "SYS-07",
        title: "SEO, AEO и content ops",
        body: "Как превращать поисковые запросы в pipeline: brief, draft, schema, внутренние ссылки, обновления, Search Console и AI-search.",
        items: ["briefs", "schema", "content ops"],
      },
      {
        code: "SYS-08",
        title: "Security, secrets и доступы",
        body: "Env vars, токены, API keys, webhooks, пользовательские данные, роли доступа и правило: AI не принимает security-решения сам.",
        items: ["env vars", "tokens", "webhooks"],
      },
      {
        code: "SYS-09",
        title: "Monitoring и rollback",
        body: "Логи, аналитика, uptime, ошибки, история деплоев, алерты и скучный чеклист, который спасает продакшен.",
        items: ["logs", "alerts", "rollback"],
      },
      {
        code: "SYS-10",
        title: "Cost control и model routing",
        body: "Дорогие модели — на архитектуру и сложные решения, дешёвые — на bulk tasks, скрипты — на детерминированную рутину.",
        items: ["routing", "budgets", "batch work"],
      },
      {
        code: "SYS-11",
        title: "E-commerce data pipelines",
        body: "Товарные описания, категории, атрибуты, переводы, marketplace exports и human approval перед публикацией.",
        items: ["products", "feeds", "approval"],
      },
      {
        code: "SYS-12",
        title: "Личная операционная система",
        body: "Единый процесс для проектов: intake -> brief -> AI draft -> code -> tests -> human review -> deploy -> analytics -> iteration.",
        items: ["intake", "review", "iteration"],
      },
    ],
  },
  uk: {
    tag: "Бібліотека систем",
    title: "Системи для реальної роботи з AI",
    subtitle:
      "Той самий формат: що це, навіщо потрібно, коли застосовувати, як вбудувати в pipeline і де людина має перевірити результат.",
    items: [
      {
        code: "SYS-01",
        title: "AI-агенти й делегування задач",
        body: "Коли потрібен агент, як ділити роботу на ролі й чому кожен агент потребує scope, tools, budget і stop condition.",
        items: ["agent roles", "tool access", "stop rules"],
      },
      {
        code: "SYS-02",
        title: "MCP і підключені інструменти",
        body: "Як зв'язати AI з GitHub, Gmail, файлами, документацією, базами й внутрішніми системами без copy-paste.",
        items: ["MCP servers", "permissions", "audit trail"],
      },
      {
        code: "SYS-03",
        title: "RAG і бази знань",
        body: "Мала knowledge base для документів проєкту, каталогу товарів, FAQ та інструкцій, щоб AI відповідав із джерел.",
        items: ["chunks", "retrieval", "citations"],
      },
      {
        code: "SYS-04",
        title: "Browser automation",
        body: "Playwright-перевірки для форм, checkout, mobile layout, SEO-сторінок і visual regression.",
        items: ["Playwright", "forms", "screenshots"],
      },
      {
        code: "SYS-05",
        title: "Evals і quality gates",
        body: "Повторювані перевірки для copy, коду, schema, перекладів, product cards і AI-відповідей.",
        items: ["eval cases", "thresholds", "regression"],
      },
      {
        code: "SYS-06",
        title: "Design system для AI-збірки",
        body: "Tokens, components, spacing, приклади, правила тексту й states, щоб AI не робив кожен екран як новий шаблон.",
        items: ["tokens", "components", "examples"],
      },
      {
        code: "SYS-07",
        title: "SEO, AEO і content ops",
        body: "Як перетворити пошукові запити в pipeline: brief, draft, schema, internal links, updates, Search Console і AI-search.",
        items: ["briefs", "schema", "content ops"],
      },
      {
        code: "SYS-08",
        title: "Security, secrets і доступи",
        body: "Env vars, tokens, API keys, webhooks, user data, access roles і правило: AI не приймає security-рішення сам.",
        items: ["env vars", "tokens", "webhooks"],
      },
      {
        code: "SYS-09",
        title: "Monitoring і rollback",
        body: "Logs, analytics, uptime, errors, deployment history, alerts і нудний checklist, який рятує production.",
        items: ["logs", "alerts", "rollback"],
      },
      {
        code: "SYS-10",
        title: "Cost control і model routing",
        body: "Дорогі моделі — на архітектуру, дешеві — на bulk tasks, скрипти — на deterministic routine.",
        items: ["routing", "budgets", "batch work"],
      },
      {
        code: "SYS-11",
        title: "E-commerce data pipelines",
        body: "Product descriptions, categories, attributes, translations, marketplace exports і human approval перед публікацією.",
        items: ["products", "feeds", "approval"],
      },
      {
        code: "SYS-12",
        title: "Особиста операційна система",
        body: "Єдиний процес: intake -> brief -> AI draft -> code -> tests -> human review -> deploy -> analytics -> iteration.",
        items: ["intake", "review", "iteration"],
      },
    ],
  },
};

export const guideContentClusters: GuideContentCluster[] = [
  {
    code: "CL-01",
    title: {
      en: "Launch and technical SEO",
      pl: "Launch i techniczne SEO",
      ru: "Запуск и техническое SEO",
      uk: "Запуск і технічне SEO",
    },
    body: {
      en: "From a live site to indexing, Search Console, internal links and AI-readable files.",
      pl: "Od działającej strony do indeksacji, Search Console, linków wewnętrznych i plików czytelnych dla AI.",
      ru: "От живого сайта до индексации, Search Console, внутренних ссылок и файлов, понятных AI.",
      uk: "Від live-сайту до індексації, Search Console, внутрішніх links і файлів, зрозумілих AI.",
    },
    guides: [
      "website-launch-checklist-full",
      "google-search-console-setup",
      "seo-internal-linking",
      "ai-search-llms-txt",
    ],
    href: "/guides/website-launch-checklist-full",
  },
  {
    code: "CL-02",
    title: {
      en: "Service pages that bring leads",
      pl: "Strony usług, które dają leady",
      ru: "Страницы услуг, которые дают заявки",
      uk: "Сторінки послуг, які дають заявки",
    },
    body: {
      en: "Homepage metadata, service-page structure, local profile and paid traffic without wasting clicks.",
      pl: "Metadata homepage, struktura strony usługi, local profile i reklama bez marnowania klików.",
      ru: "Metadata главной, структура услуги, local profile и реклама без слива кликов.",
      uk: "Metadata головної, структура послуги, local profile і реклама без зливу кліків.",
    },
    guides: [
      "homepage-seo-description",
      "service-page-that-converts",
      "google-business-profile",
      "google-ads-starter",
    ],
    href: "/guides/service-page-that-converts",
  },
  {
    code: "CL-03",
    title: {
      en: "Proof, screenshots and case studies",
      pl: "Dowody, screeny i case studies",
      ru: "Доказательства, скрины и кейсы",
      uk: "Докази, скріни й кейси",
    },
    body: {
      en: "How to turn projects into credible case studies without leaking private data.",
      pl: "Jak zamienić projekty w wiarygodne case studies bez wycieku prywatnych danych.",
      ru: "Как превратить проекты в убедительные кейсы и не слить приватные данные.",
      uk: "Як перетворити проєкти на переконливі кейси й не злити приватні дані.",
    },
    guides: [
      "case-study-proof-structure",
      "safe-case-screenshots",
      "when-to-hire",
      "ai-website-mistakes",
    ],
    href: "/guides/case-study-proof-structure",
  },
  {
    code: "CL-04",
    title: {
      en: "Content operations and discovery",
      pl: "Content ops i odkrywanie",
      ru: "Content ops и обнаружение",
      uk: "Content ops і знаходження",
    },
    body: {
      en: "Cluster planning, social discovery, regional search and measurement before scaling publishing.",
      pl: "Plan klastrów, social discovery, regional search i pomiar przed skalowaniem publikacji.",
      ru: "План кластеров, social discovery, региональный поиск и измерение до масштабирования публикаций.",
      uk: "План кластерів, social discovery, регіональний пошук і вимір до масштабування публікацій.",
    },
    guides: [
      "seo-content-clusters",
      "tiktok-for-small-business",
      "yandex-for-ru-market",
      "analytics-without-ga4",
    ],
    href: "/guides/seo-content-clusters",
  },
  {
    code: "CL-05",
    title: {
      en: "AI build and deployment workflow",
      pl: "Workflow budowy i deploymentu z AI",
      ru: "AI build и workflow деплоя",
      uk: "AI build і workflow деплою",
    },
    body: {
      en: "From prompt and stack choice to GitHub, Vercel, checks and a site you can keep editing.",
      pl: "Od promptu i wyboru stacku do GitHub, Vercel, kontroli i strony, którą da się dalej edytować.",
      ru: "От prompt и выбора stack до GitHub, Vercel, проверок и сайта, который можно дальше править.",
      uk: "Від prompt і вибору stack до GitHub, Vercel, перевірок і сайту, який можна далі редагувати.",
    },
    guides: [
      "make-website-yourself",
      "cursor-prompts",
      "cursor-github-vercel",
      "frameworks-pick-2026",
    ],
    href: "/guides/make-website-yourself",
  },
];

export const guides: Guide[] = [
  {
    slug: "make-website-yourself",
    tape: "TAPE-01",
    channel: "DIY-WEB",
    minutes: 12,
    tags: ["Strategy", ...sharedTags],
    title: {
      en: "Do not want to pay for a website? Build it yourself.",
      pl: "Nie chcesz płacić za stronę? Zrób ją samodzielnie.",
      ru: "Не хочешь платить за сайт? Сделай сам.",
      uk: "Не хочеш платити за сайт? Зроби сам.",
    },
    description: {
      en: "A practical path from idea to live website with AI-assisted coding, GitHub, Vercel, domain, form and SEO basics.",
      pl: "Praktyczna ścieżka od pomysłu do live strony: AI-assisted coding, GitHub, Vercel, domena, formularz i podstawy SEO.",
      ru: "Практический путь от идеи до живого сайта: AI-assisted coding, GitHub, Vercel, домен, форма и базовое SEO.",
      uk: "Практичний шлях від ідеї до live-сайту: AI-assisted coding, GitHub, Vercel, домен, форма та базове SEO.",
    },
    intro: {
      en: "This is the full pipeline I would give a small business owner before taking their money. The point is not to generate a pretty demo. The point is to ship a website you can edit, deploy and grow.",
      pl: "To jest pełny proces, który dałbym właścicielowi małej firmy zanim wezmę od niego pieniądze. Celem nie jest ładne demo. Celem jest strona, którą można edytować, wdrażać i rozwijać.",
      ru: "Это полный пайплайн, который я бы дал владельцу малого бизнеса до того, как брать деньги. Цель — не красивая демка. Цель — сайт, который можно править, деплоить и развивать.",
      uk: "Це повний пайплайн, який я дав би власнику малого бізнесу перед тим, як брати гроші. Ціль — не гарна демка. Ціль — сайт, який можна редагувати, деплоїти й розвивати.",
    },
    outcome: {
      en: ["Clear offer and page structure", "A code project in GitHub", "Live Vercel deployment", "Connected domain and contact form", "Basic indexing and analytics checklist"],
      pl: ["Jasna oferta i struktura strony", "Projekt kodu w GitHub", "Live deployment na Vercel", "Podpięta domena i formularz kontaktowy", "Podstawowa checklista indeksacji i analityki"],
      ru: ["Понятный оффер и структура страниц", "Код проекта в GitHub", "Живой деплой на Vercel", "Подключённый домен и форма заявки", "Базовый чеклист индексации и аналитики"],
      uk: ["Зрозумілий офер і структура сторінок", "Код проєкту в GitHub", "Live deployment на Vercel", "Підключений домен і форма заявки", "Базовий чеклист індексації та аналітики"],
    },
    steps: {
      en: [
        { title: "Write the offer first", body: "Before opening Cursor, write who the site is for, what you sell, why it is different and what action the visitor should take." },
        { title: "Map five sections", body: "Hero, proof, service/product, process, contact. Keep the first version small so AI does not invent a useless mega-site." },
        { title: "Generate a codebase", body: "Ask Cursor or Codex for a simple Next.js or static site. Avoid Lovable-style locked demos if you want real ownership." },
        { title: "Push to GitHub and deploy", body: "Create a repository, push the code, connect it to Vercel and check that the production URL works on mobile." },
        { title: "Connect the business layer", body: "Add domain, contact form, email delivery, Search Console, analytics and one clear CTA. That is where the site becomes useful." },
      ],
      pl: [
        { title: "Najpierw napisz ofertę", body: "Zanim otworzysz Cursor, opisz dla kogo jest strona, co sprzedajesz, czym się różnisz i jaką akcję ma wykonać odwiedzający." },
        { title: "Rozpisz pięć sekcji", body: "Hero, dowód, usługa/produkt, proces, kontakt. Pierwsza wersja ma być mała, żeby AI nie wymyśliło bezużytecznego mega-site." },
        { title: "Wygeneruj codebase", body: "Poproś Cursor albo Codex o prostą stronę Next.js lub statyczną. Unikaj zamkniętych demek w stylu Lovable, jeśli chcesz mieć własność kodu." },
        { title: "Wypchnij na GitHub i Vercel", body: "Utwórz repo, wypchnij kod, połącz z Vercel i sprawdź produkcyjny URL na telefonie." },
        { title: "Podłącz warstwę biznesową", body: "Dodaj domenę, formularz, wysyłkę maili, Search Console, analitykę i jedno jasne CTA. Wtedy strona zaczyna być użyteczna." },
      ],
      ru: [
        { title: "Сначала напиши оффер", body: "До Cursor опиши: для кого сайт, что продаёшь, чем отличаешься и какое действие должен сделать посетитель." },
        { title: "Разложи пять секций", body: "Hero, доказательства, услуга/продукт, процесс, контакт. Первая версия должна быть маленькой, чтобы AI не придумал бесполезный мега-сайт." },
        { title: "Сгенерируй codebase", body: "Попроси Cursor или Codex собрать простой Next.js или статический сайт. Не начинай с Lovable-подобных закрытых демок, если хочешь владеть кодом." },
        { title: "Запушь в GitHub и Vercel", body: "Создай репозиторий, запушь код, подключи Vercel и проверь продакшен-URL на телефоне." },
        { title: "Подключи бизнес-слой", body: "Домен, форма, отправка писем, Search Console, аналитика и один ясный CTA. Здесь сайт становится полезным." },
      ],
      uk: [
        { title: "Спочатку напиши офер", body: "До Cursor опиши: для кого сайт, що продаєш, чим відрізняєшся і яку дію має зробити відвідувач." },
        { title: "Розклади п'ять секцій", body: "Hero, докази, послуга/продукт, процес, контакт. Перша версія має бути малою, щоб AI не вигадав непотрібний mega-site." },
        { title: "Згенеруй codebase", body: "Попроси Cursor або Codex зібрати простий Next.js чи статичний сайт. Не починай із закритих демо в стилі Lovable, якщо хочеш володіти кодом." },
        { title: "Запуш у GitHub і Vercel", body: "Створи репозиторій, запуш код, підключи Vercel і перевір production URL на телефоні." },
        { title: "Підключи бізнес-шар", body: "Домен, форма, відправка листів, Search Console, аналітика й один ясний CTA. Тут сайт стає корисним." },
      ],
    },
    mistakes: {
      en: ["Starting with visuals before the offer", "Letting AI create ten pages before one works", "No real contact path", "No Search Console", "No mobile check"],
      pl: ["Start od wyglądu zamiast oferty", "AI tworzy dziesięć stron zanim jedna działa", "Brak realnej ścieżki kontaktu", "Brak Search Console", "Brak testu mobile"],
      ru: ["Начинать с визуала до оффера", "Дать AI создать десять страниц до того, как работает одна", "Нет реального пути контакта", "Нет Search Console", "Нет проверки на мобильном"],
      uk: ["Починати з візуалу до оферу", "Дати AI створити десять сторінок до того, як працює одна", "Немає реального шляху контакту", "Немає Search Console", "Немає mobile-перевірки"],
    },
    cta: {
      en: { title: "Stuck after the guide?", body: "Send the repo or URL. I can audit it, fix the broken part or finish the site under your business.", bullets: ["Cursor broke the project", "Domain or Vercel does not work", "The site looks like an AI demo", "You need it live faster"] },
      pl: { title: "Utknąłeś po poradniku?", body: "Wyślij repo albo URL. Mogę zrobić audyt, naprawić problem albo dokończyć stronę pod biznes.", bullets: ["Cursor zepsuł projekt", "Domena albo Vercel nie działa", "Strona wygląda jak demo AI", "Potrzebujesz live szybciej"] },
      ru: { title: "Застрял после гайда?", body: "Кидай repo или URL. Я могу сделать аудит, починить сломанный кусок или довести сайт под бизнес.", bullets: ["Cursor сломал проект", "Домен или Vercel не работает", "Сайт выглядит как AI-демка", "Нужно запустить быстрее"] },
      uk: { title: "Застряг після гайда?", body: "Кидай repo або URL. Я можу зробити аудит, полагодити зламану частину або довести сайт під бізнес.", bullets: ["Cursor зламав проєкт", "Домен або Vercel не працює", "Сайт виглядає як AI-демо", "Потрібно запустити швидше"] },
    },
  },
  {
    slug: "cursor-github-vercel",
    tape: "TAPE-02",
    channel: "DEPLOY",
    minutes: 16,
    tags: sharedTags,
    title: {
      en: "From Cursor to a live website: GitHub and Vercel without panic",
      pl: "Od Cursora do działającej strony: GitHub i Vercel bez paniki",
      ru: "От Cursor до живого сайта: GitHub и Vercel без паники",
      uk: "Від Cursor до живого сайту: GitHub і Vercel без паніки",
    },
    description: {
      en: "A full beginner path: save your project in GitHub, publish it on Vercel, add required settings and know how to roll back if something breaks.",
      pl: "Pełna ścieżka dla początkujących: zapisz projekt w GitHub, opublikuj go na Vercel, dodaj potrzebne ustawienia i wiedz, jak wrócić do poprzedniej wersji.",
      ru: "Полный путь для новичка: сохранить проект в GitHub, опубликовать его на Vercel, добавить нужные настройки и понимать, как откатиться, если что-то сломалось.",
      uk: "Повний шлях для новачка: зберегти проєкт у GitHub, опублікувати його на Vercel, додати потрібні налаштування й розуміти, як відкотитися, якщо щось зламалось.",
    },
    intro: {
      en: "Think of this as three boxes. Cursor is where you edit the site. GitHub is the safe copy with history. Vercel is the public version people open in a browser. If each box is in order, you can update the site without being afraid of losing it.",
      pl: "Pomyśl o tym jak o trzech pudełkach. Cursor to miejsce, gdzie edytujesz stronę. GitHub to bezpieczna kopia z historią zmian. Vercel to publiczna wersja, którą ludzie otwierają w przeglądarce. Jeśli te trzy miejsca są uporządkowane, możesz zmieniać stronę bez strachu, że ją stracisz.",
      ru: "Представь это как три коробки. Cursor — место, где ты редактируешь сайт. GitHub — безопасная копия с историей изменений. Vercel — публичная версия, которую люди открывают в браузере. Если эти три места настроены нормально, сайт можно менять без страха всё потерять.",
      uk: "Уяви це як три коробки. Cursor — місце, де ти редагуєш сайт. GitHub — безпечна копія з історією змін. Vercel — публічна версія, яку люди відкривають у браузері. Якщо ці три місця налаштовані нормально, сайт можна змінювати без страху все втратити.",
    },
    outcome: {
      en: ["A GitHub repository that stores the site safely", "A Vercel project with a working public URL", "A clear list of private settings such as form keys or email tokens", "A simple update routine: edit, save, deploy, check", "A rollback path if a new version breaks the site"],
      pl: ["Repozytorium GitHub, które bezpiecznie przechowuje stronę", "Projekt Vercel z działającym publicznym adresem", "Jasna lista prywatnych ustawień, np. kluczy formularza lub tokenów mailowych", "Prosty rytm zmian: edycja, zapis, publikacja, kontrola", "Ścieżka powrotu, jeśli nowa wersja zepsuje stronę"],
      ru: ["Репозиторий GitHub, где сайт безопасно хранится", "Проект Vercel с рабочей публичной ссылкой", "Понятный список приватных настроек: ключи формы, email-токены и похожие вещи", "Простой порядок обновлений: правка, сохранение, публикация, проверка", "Путь отката, если новая версия сломает сайт"],
      uk: ["Репозиторій GitHub, де сайт безпечно зберігається", "Проєкт Vercel з робочим публічним посиланням", "Зрозумілий список приватних налаштувань: ключі форми, email-токени й подібні речі", "Простий порядок оновлень: правка, збереження, публікація, перевірка", "Шлях відкату, якщо нова версія зламає сайт"],
    },
    steps: {
      en: [
        { title: "Prepare the project before publishing", body: "Open the site in Cursor and make sure it starts locally. Find the command in package.json, usually npm run dev. Open the local address in a browser and click through the important pages.\nResult: you know the project is not already broken before GitHub or Vercel enters the picture." },
        { title: "Create a GitHub repository", body: "Go to GitHub, create a new repository and give it a simple name, for example bakery-website or clinic-site. Keep it private if the project is unfinished.\nResult: you have an empty online folder where the site will be saved with history." },
        { title: "Save the first version of the code", body: "In Cursor, open the Source Control panel or terminal. Add the files, write a short message such as first working version, and push to GitHub. Do not make the first save together with ten unrelated experiments.\nResult: GitHub now contains the same project you have on your computer." },
        { title: "Import the repository into Vercel", body: "Open Vercel, choose Add New Project, select the GitHub repository and let Vercel detect the framework. Before clicking Deploy, check the build command and output settings that Vercel shows.\nResult: Vercel builds the site from GitHub instead of from your laptop." },
        { title: "Add private settings in Vercel", body: "If the site has a form, email sending, analytics or a paid API, add those keys in Vercel Project Settings -> Environment Variables. Never paste private keys into normal code files.\nResult: the public site can use private services, but visitors cannot see the secrets." },
        { title: "Check the live URL like a customer", body: "Open the Vercel URL on a phone and desktop. Test the menu, buttons, form, thank-you message, page speed feeling and obvious spelling mistakes. Send a test form submission to yourself.\nResult: you confirm that the site works for a real visitor, not only inside Cursor." },
        { title: "Use a safe update routine", body: "For each future change: edit in Cursor, check locally, save a small commit, push to GitHub, wait for Vercel preview, then check production. If the new version breaks something, open Vercel Deployments and promote the previous working deployment.\nResult: you can improve the site without guessing how to recover." },
      ],
      pl: [
        { title: "Przygotuj projekt przed publikacją", body: "Otwórz stronę w Cursorze i sprawdź, czy działa lokalnie. Komendę znajdziesz w package.json, najczęściej npm run dev. Otwórz lokalny adres w przeglądarce i przejdź przez najważniejsze podstrony.\nEfekt: wiesz, że projekt nie był zepsuty jeszcze przed GitHubem i Vercel." },
        { title: "Utwórz repozytorium GitHub", body: "Wejdź na GitHub, utwórz nowe repozytorium i nadaj mu prostą nazwę, np. bakery-website albo clinic-site. Jeśli projekt nie jest gotowy, ustaw repozytorium jako prywatne.\nEfekt: masz puste miejsce online, gdzie strona będzie zapisana razem z historią zmian." },
        { title: "Zapisz pierwszą wersję kodu", body: "W Cursorze otwórz panel Source Control albo terminal. Dodaj pliki, wpisz krótki opis typu first working version i wyślij kod do GitHuba. Nie mieszaj pierwszego zapisu z dziesięcioma eksperymentami.\nEfekt: GitHub ma ten sam projekt, który jest na Twoim komputerze." },
        { title: "Zaimportuj repozytorium do Vercel", body: "Otwórz Vercel, wybierz Add New Project, wskaż repozytorium z GitHuba i pozwól Vercel rozpoznać typ projektu. Przed kliknięciem Deploy sprawdź komendę budowania i ustawienia, które pokazuje Vercel.\nEfekt: Vercel buduje stronę z GitHuba, a nie z Twojego laptopa." },
        { title: "Dodaj prywatne ustawienia w Vercel", body: "Jeśli strona ma formularz, wysyłkę maili, analitykę albo płatne API, dodaj te klucze w Vercel Project Settings -> Environment Variables. Nigdy nie wklejaj prywatnych kluczy do zwykłych plików z kodem.\nEfekt: publiczna strona może używać prywatnych usług, ale odwiedzający nie widzą sekretów." },
        { title: "Sprawdź live URL jak klient", body: "Otwórz adres z Vercel na telefonie i komputerze. Sprawdź menu, przyciski, formularz, komunikat po wysłaniu, ogólne wrażenie szybkości i oczywiste literówki. Wyślij testowy formularz do siebie.\nEfekt: potwierdzasz, że strona działa dla realnego odwiedzającego, nie tylko w Cursorze." },
        { title: "Używaj bezpiecznego rytmu zmian", body: "Przy każdej kolejnej zmianie: edytuj w Cursorze, sprawdź lokalnie, zapisz mały commit, wyślij do GitHuba, poczekaj na preview w Vercel i dopiero potem sprawdź produkcję. Jeśli nowa wersja coś zepsuje, otwórz Vercel Deployments i przywróć poprzedni działający deployment.\nEfekt: możesz rozwijać stronę bez zgadywania, jak ją uratować." },
      ],
      ru: [
        { title: "Подготовь проект перед публикацией", body: "Открой сайт в Cursor и проверь, что он запускается на твоём компьютере. Команду обычно видно в package.json, чаще всего это npm run dev. Открой локальную ссылку в браузере и пройди основные страницы.\nРезультат: ты знаешь, что проект не был сломан ещё до GitHub и Vercel." },
        { title: "Создай репозиторий GitHub", body: "Зайди на GitHub, создай новый репозиторий и дай ему простое имя, например bakery-website или clinic-site. Если проект ещё сырой, сделай репозиторий приватным.\nРезультат: у тебя есть пустая онлайн-папка, где сайт будет храниться с историей изменений." },
        { title: "Сохрани первую версию кода", body: "В Cursor открой панель Source Control или терминал. Добавь файлы, напиши короткое сообщение вроде first working version и отправь код в GitHub. Не смешивай первый сохранённый вариант с десятью экспериментами.\nРезультат: в GitHub лежит тот же проект, который есть у тебя на компьютере." },
        { title: "Импортируй репозиторий в Vercel", body: "Открой Vercel, выбери Add New Project, укажи репозиторий из GitHub и дай Vercel определить тип проекта. Перед кнопкой Deploy проверь команду сборки и настройки, которые показывает Vercel.\nРезультат: Vercel собирает сайт из GitHub, а не из случайной папки на ноутбуке." },
        { title: "Добавь приватные настройки в Vercel", body: "Если на сайте есть форма, отправка писем, аналитика или платный API, добавь ключи в Vercel Project Settings -> Environment Variables. Никогда не вставляй приватные ключи в обычные файлы с кодом.\nРезультат: публичный сайт может пользоваться приватными сервисами, но посетители не видят секреты." },
        { title: "Проверь живую ссылку как клиент", body: "Открой ссылку Vercel на телефоне и компьютере. Проверь меню, кнопки, форму, сообщение после отправки, общее ощущение скорости и явные опечатки. Отправь тестовую заявку самому себе.\nРезультат: ты подтверждаешь, что сайт работает для реального посетителя, а не только внутри Cursor." },
        { title: "Используй безопасный порядок обновлений", body: "Для каждой будущей правки: измени в Cursor, проверь локально, сохрани маленький commit, отправь в GitHub, дождись preview в Vercel и только потом проверяй production. Если новая версия что-то сломала, открой Vercel Deployments и верни предыдущий рабочий deployment.\nРезультат: ты можешь улучшать сайт без паники и без гадания, как всё восстановить." },
      ],
      uk: [
        { title: "Підготуй проєкт перед публікацією", body: "Відкрий сайт у Cursor і перевір, що він запускається на твоєму комп'ютері. Команду зазвичай видно в package.json, найчастіше це npm run dev. Відкрий локальне посилання в браузері й пройди основні сторінки.\nРезультат: ти знаєш, що проєкт не був зламаний ще до GitHub і Vercel." },
        { title: "Створи репозиторій GitHub", body: "Зайди на GitHub, створи новий репозиторій і дай йому просту назву, наприклад bakery-website або clinic-site. Якщо проєкт ще сирий, зроби репозиторій приватним.\nРезультат: у тебе є порожня онлайн-папка, де сайт буде зберігатися з історією змін." },
        { title: "Збережи першу версію коду", body: "У Cursor відкрий панель Source Control або термінал. Додай файли, напиши коротке повідомлення на кшталт first working version і відправ код у GitHub. Не змішуй перший збережений варіант із десятьма експериментами.\nРезультат: у GitHub лежить той самий проєкт, який є на твоєму комп'ютері." },
        { title: "Імпортуй репозиторій у Vercel", body: "Відкрий Vercel, вибери Add New Project, укажи репозиторій із GitHub і дай Vercel визначити тип проєкту. Перед кнопкою Deploy перевір команду збірки й налаштування, які показує Vercel.\nРезультат: Vercel збирає сайт із GitHub, а не з випадкової папки на ноутбуці." },
        { title: "Додай приватні налаштування у Vercel", body: "Якщо на сайті є форма, відправка листів, аналітика або платний API, додай ключі у Vercel Project Settings -> Environment Variables. Ніколи не вставляй приватні ключі у звичайні файли з кодом.\nРезультат: публічний сайт може користуватися приватними сервісами, але відвідувачі не бачать секрети." },
        { title: "Перевір живе посилання як клієнт", body: "Відкрий посилання Vercel на телефоні й комп'ютері. Перевір меню, кнопки, форму, повідомлення після відправки, загальне відчуття швидкості й очевидні помилки в тексті. Відправ тестову заявку самому собі.\nРезультат: ти підтверджуєш, що сайт працює для реального відвідувача, а не лише всередині Cursor." },
        { title: "Використовуй безпечний порядок оновлень", body: "Для кожної майбутньої правки: зміни в Cursor, перевір локально, збережи маленький commit, відправ у GitHub, дочекайся preview у Vercel і тільки потім перевір production. Якщо нова версія щось зламала, відкрий Vercel Deployments і поверни попередній робочий deployment.\nРезультат: ти можеш покращувати сайт без паніки й без здогадок, як усе відновити." },
      ],
    },
    mistakes: {
      en: ["Keeping the only copy of the project inside Cursor or a Downloads folder", "Publishing before checking that the site runs locally", "Putting private keys directly into code files", "Changing settings in Vercel and forgetting to write down what changed", "Not testing the live form after deployment", "Making huge mixed commits that are hard to undo"],
      pl: ["Trzymanie jedynej kopii projektu tylko w Cursorze albo folderze Downloads", "Publikacja przed sprawdzeniem, czy strona działa lokalnie", "Wklejanie prywatnych kluczy bezpośrednio do plików z kodem", "Zmiana ustawień w Vercel bez zapisania, co zostało zmienione", "Brak testu formularza po deployu", "Robienie ogromnych mieszanych commitów, których trudno cofnąć"],
      ru: ["Держать единственную копию проекта только в Cursor или папке Downloads", "Публиковать до проверки, что сайт запускается локально", "Вставлять приватные ключи прямо в файлы с кодом", "Менять настройки в Vercel и не записывать, что именно изменилось", "Не тестировать живую форму после деплоя", "Делать огромные смешанные commits, которые сложно откатить"],
      uk: ["Тримати єдину копію проєкту тільки в Cursor або папці Downloads", "Публікувати до перевірки, що сайт запускається локально", "Вставляти приватні ключі прямо у файли з кодом", "Змінювати налаштування у Vercel і не записувати, що саме змінилось", "Не тестувати живу форму після деплою", "Робити величезні змішані commits, які складно відкотити"],
    },
    cta: {
      en: { title: "Deployment stuck or scary?", body: "Send the GitHub link, Vercel project screenshot and the live URL. I can find where the chain breaks and leave you with a repeatable publishing routine.", bullets: ["Build fails and the error is unclear", "Environment variables are missing or duplicated", "The live site works differently than Cursor", "You need a safe rollback before changing production"] },
      pl: { title: "Deployment stoi albo stresuje?", body: "Wyślij link do GitHuba, screenshot projektu Vercel i live URL. Sprawdzę, gdzie pęka łańcuch, i zostawię Ci powtarzalny sposób publikacji.", bullets: ["Build failuje i błąd jest niejasny", "Brakuje environment variables albo są zdublowane", "Live strona działa inaczej niż w Cursorze", "Potrzebujesz bezpiecznego rollbacku przed zmianą produkcji"] },
      ru: { title: "Деплой застрял или страшно трогать?", body: "Пришли ссылку GitHub, скрин проекта Vercel и живой URL. Я найду, где рвётся цепочка, и оставлю понятный порядок публикации, который можно повторять.", bullets: ["Build падает, а ошибка непонятна", "Environment variables отсутствуют или задублированы", "Живой сайт работает иначе, чем в Cursor", "Нужен безопасный откат перед изменениями на production"] },
      uk: { title: "Деплой застряг або страшно чіпати?", body: "Надішли посилання GitHub, скрін проєкту Vercel і живий URL. Я знайду, де рветься ланцюг, і залишу зрозумілий порядок публікації, який можна повторювати.", bullets: ["Build падає, а помилка незрозуміла", "Environment variables відсутні або задубльовані", "Живий сайт працює інакше, ніж у Cursor", "Потрібен безпечний відкат перед змінами на production"] },
    },
  },
  {
    slug: "cursor-prompts",
    tape: "TAPE-03",
    channel: "PROMPT",
    minutes: 7,
    tags: ["Cursor", "Prompts", "Copy"],
    title: {
      en: "Prompts for Cursor that do not produce junk",
      pl: "Prompty do Cursora, które nie robią śmieci",
      ru: "Промпты для Cursor, чтобы он не делал мусор",
      uk: "Промпти для Cursor, щоб він не робив сміття",
    },
    description: {
      en: "Prompt structure for small business sites: context, sections, constraints, checks and edit loop.",
      pl: "Struktura promptu dla stron małych firm: kontekst, sekcje, ograniczenia, testy i pętla edycji.",
      ru: "Структура промпта для сайтов малого бизнеса: контекст, секции, ограничения, проверки и цикл правок.",
      uk: "Структура промпта для сайтів малого бізнесу: контекст, секції, обмеження, перевірки та цикл правок.",
    },
    intro: {
      en: "Bad prompt: make me a website. Good prompt: here is the offer, sections, audience, stack and acceptance checklist.",
      pl: "Zły prompt: zrób mi stronę. Dobry prompt: tu jest oferta, sekcje, odbiorcy, stack i checklista akceptacji.",
      ru: "Плохой промпт: сделай мне сайт. Хороший: вот оффер, секции, аудитория, стек и чеклист приёмки.",
      uk: "Поганий prompt: зроби мені сайт. Хороший: ось офер, секції, аудиторія, stack і acceptance checklist.",
    },
    outcome: {
      en: ["Reusable prompt template", "Acceptance checklist", "Cleaner first draft"],
      pl: ["Szablon promptu", "Checklista akceptacji", "Czystszy pierwszy draft"],
      ru: ["Шаблон промпта", "Чеклист приёмки", "Более чистый первый черновик"],
      uk: ["Шаблон prompt", "Acceptance checklist", "Чистіший перший draft"],
    },
    steps: {
      en: [{ title: "Give business context", body: "Name, audience, offer, proof and desired conversion." }, { title: "Set constraints", body: "Stack, number of pages, visual style, no fake features." }, { title: "Demand checks", body: "Ask for mobile, accessibility, metadata and broken-link checks." }],
      pl: [{ title: "Daj kontekst biznesowy", body: "Nazwa, odbiorcy, oferta, dowody i konwersja." }, { title: "Ustaw ograniczenia", body: "Stack, liczba stron, styl, bez fałszywych funkcji." }, { title: "Wymagaj kontroli", body: "Mobile, accessibility, metadata i linki." }],
      ru: [{ title: "Дай бизнес-контекст", body: "Название, аудитория, оффер, доказательства и целевая конверсия." }, { title: "Поставь ограничения", body: "Стек, число страниц, стиль, без выдуманных функций." }, { title: "Требуй проверки", body: "Mobile, accessibility, metadata и битые ссылки." }],
      uk: [{ title: "Дай бізнес-контекст", body: "Назва, аудиторія, офер, докази й цільова конверсія." }, { title: "Постав обмеження", body: "Stack, кількість сторінок, стиль, без вигаданих функцій." }, { title: "Вимагай перевірки", body: "Mobile, accessibility, metadata і broken links." }],
    },
    mistakes: {
      en: ["No business input", "No acceptance criteria", "Letting AI choose everything"],
      pl: ["Brak danych biznesowych", "Brak kryteriów akceptacji", "AI decyduje o wszystkim"],
      ru: ["Нет бизнес-ввода", "Нет критериев приёмки", "AI сам выбирает всё"],
      uk: ["Немає бізнес-вводу", "Немає acceptance criteria", "AI сам обирає все"],
    },
    cta: {
      en: { title: "Want me to rewrite your prompt?", body: "Send the project goal and current prompt. I can turn it into a buildable brief.", bullets: ["Brief cleanup", "Prompt rewrite", "Code review after generation"] },
      pl: { title: "Mam przepisać prompt?", body: "Wyślij cel projektu i obecny prompt. Zrobię z tego brief do budowy.", bullets: ["Czyszczenie briefu", "Prompt rewrite", "Code review po generacji"] },
      ru: { title: "Переписать твой промпт?", body: "Кидай цель проекта и текущий промпт. Сделаю из этого нормальный brief.", bullets: ["Чистка brief", "Перепись промпта", "Code review после генерации"] },
      uk: { title: "Переписати твій prompt?", body: "Кидай ціль проєкту й поточний prompt. Зроблю з цього нормальний brief.", bullets: ["Чистка brief", "Prompt rewrite", "Code review після генерації"] },
    },
  },
  {
    slug: "ai-website-mistakes",
    tape: "TAPE-04",
    channel: "RESCUE",
    minutes: 9,
    tags: ["Audit", "Design", "SEO"],
    title: {
      en: "Why AI websites look like cheap demos",
      pl: "Dlaczego strony AI wyglądają jak tanie demo",
      ru: "Почему AI-сайты выглядят как дешёвые демки",
      uk: "Чому AI-сайти виглядають як дешеві демо",
    },
    description: {
      en: "The repeatable failure pattern: fake copy, weak offer, broken mobile, no forms, no indexing.",
      pl: "Powtarzalny wzorzec porażki: sztuczny copy, słaba oferta, zepsuty mobile, brak formularzy i indeksacji.",
      ru: "Типовой паттерн провала: фейковый copy, слабый оффер, сломанный mobile, нет форм и индексации.",
      uk: "Типовий патерн провалу: фейковий copy, слабкий офер, зламаний mobile, немає форм та індексації.",
    },
    intro: {
      en: "Most generated sites fail because they optimize for screenshots, not business use.",
      pl: "Większość generowanych stron pada, bo optymalizuje screenshot, nie użycie biznesowe.",
      ru: "Большинство сгенерированных сайтов проваливаются, потому что оптимизируют скриншот, а не бизнес-пользу.",
      uk: "Більшість згенерованих сайтів провалюються, бо оптимізують screenshot, а не бізнес-користь.",
    },
    outcome: {
      en: ["Audit checklist", "Priority fixes", "When to rebuild"],
      pl: ["Checklista audytu", "Priorytetowe poprawki", "Kiedy przebudować"],
      ru: ["Чеклист аудита", "Приоритет правок", "Когда пересобирать"],
      uk: ["Чеклист аудиту", "Пріоритет правок", "Коли перебудовувати"],
    },
    steps: {
      en: [{ title: "Read the hero aloud", body: "If it could fit any business, rewrite it." }, { title: "Test one conversion", body: "Submit the form, check the email and verify the thank-you state." }, { title: "Check mobile first", body: "Most AI layouts collapse when copy becomes real." }],
      pl: [{ title: "Przeczytaj hero na głos", body: "Jeśli pasuje do każdej firmy, przepisz." }, { title: "Przetestuj jedną konwersję", body: "Wyślij formularz, sprawdź mail i thank-you state." }, { title: "Najpierw mobile", body: "Layouty AI często pękają, gdy copy staje się realne." }],
      ru: [{ title: "Прочитай hero вслух", body: "Если подходит любому бизнесу — переписывай." }, { title: "Проверь одну конверсию", body: "Отправь форму, проверь email и thank-you state." }, { title: "Сначала mobile", body: "AI-лейауты часто ломаются, когда текст становится реальным." }],
      uk: [{ title: "Прочитай hero вголос", body: "Якщо підходить будь-якому бізнесу — переписуй." }, { title: "Перевір одну конверсію", body: "Відправ форму, перевір email і thank-you state." }, { title: "Спочатку mobile", body: "AI layouts часто ламаються, коли текст стає реальним." }],
    },
    mistakes: {
      en: ["Generic value proposition", "Decorative sections with no decision support", "CTA hidden below the fold"],
      pl: ["Generyczna propozycja wartości", "Dekoracyjne sekcje bez decyzji", "CTA schowane za nisko"],
      ru: ["Общий value proposition", "Декоративные секции без помощи в решении", "CTA спрятан слишком низко"],
      uk: ["Загальний value proposition", "Декоративні секції без підтримки рішення", "CTA схований занадто низько"],
    },
    cta: {
      en: { title: "Need a rescue pass?", body: "I can turn a generated demo into a usable business page.", bullets: ["Rewrite offer", "Fix layout", "Connect forms and SEO"] },
      pl: { title: "Potrzebujesz rescue pass?", body: "Mogę zmienić wygenerowane demo w użyteczną stronę biznesową.", bullets: ["Przepisać ofertę", "Naprawić layout", "Podłączyć formularze i SEO"] },
      ru: { title: "Нужен rescue pass?", body: "Могу превратить сгенерированную демку в полезную бизнес-страницу.", bullets: ["Переписать оффер", "Починить layout", "Подключить формы и SEO"] },
      uk: { title: "Потрібен rescue pass?", body: "Можу перетворити згенероване демо на корисну бізнес-сторінку.", bullets: ["Переписати офер", "Полагодити layout", "Підключити форми й SEO"] },
    },
  },
  {
    slug: "when-to-hire",
    tape: "TAPE-05",
    channel: "MONEY",
    minutes: 6,
    tags: ["Consulting", "Audit", "Scope"],
    title: {
      en: "When it is cheaper to hire someone",
      pl: "Kiedy taniej jest kogoś wynająć",
      ru: "Когда дешевле нанять человека",
      uk: "Коли дешевше найняти людину",
    },
    description: {
      en: "A practical decision rule for DIY, consultation, rescue work and full build.",
      pl: "Praktyczna reguła decyzji: DIY, konsultacja, rescue work albo pełna budowa.",
      ru: "Практическое правило выбора: DIY, консультация, rescue work или сборка под ключ.",
      uk: "Практичне правило вибору: DIY, консультація, rescue work або збірка під ключ.",
    },
    intro: {
      en: "DIY is good until the opportunity cost becomes bigger than the invoice.",
      pl: "DIY jest dobre, dopóki koszt czasu nie robi się większy niż faktura.",
      ru: "DIY хорош до момента, пока цена твоего времени не становится выше счёта.",
      uk: "DIY хороший до моменту, поки ціна твого часу не стає більшою за рахунок.",
    },
    outcome: {
      en: ["Decision checklist", "Scope ladder", "Cleaner handoff"],
      pl: ["Checklista decyzji", "Drabinka zakresu", "Czystszy handoff"],
      ru: ["Чеклист решения", "Лестница scope", "Более чистая передача"],
      uk: ["Чеклист рішення", "Scope ladder", "Чистіший handoff"],
    },
    steps: {
      en: [{ title: "DIY", body: "Use it when stakes are low and learning matters." }, { title: "Consultation", body: "Use it when one blocker stops progress." }, { title: "Full build", body: "Use it when revenue, launch date or integrations matter." }],
      pl: [{ title: "DIY", body: "Gdy stawka jest mała, a nauka ważna." }, { title: "Konsultacja", body: "Gdy jeden blocker zatrzymuje postęp." }, { title: "Pełna budowa", body: "Gdy liczy się przychód, data launchu albo integracje." }],
      ru: [{ title: "DIY", body: "Когда ставки низкие и важно научиться." }, { title: "Консультация", body: "Когда один blocker останавливает прогресс." }, { title: "Сборка под ключ", body: "Когда важны выручка, дата запуска или интеграции." }],
      uk: [{ title: "DIY", body: "Коли ставки низькі й важливо навчитися." }, { title: "Консультація", body: "Коли один blocker зупиняє прогрес." }, { title: "Збірка під ключ", body: "Коли важливі revenue, дата launch або інтеграції." }],
    },
    mistakes: {
      en: ["Spending weeks to save one small invoice", "Hiring before you know the offer", "No written scope"],
      pl: ["Tygodnie pracy, żeby oszczędzić małą fakturę", "Zatrudnianie zanim znasz ofertę", "Brak spisanego scope"],
      ru: ["Тратить недели, чтобы сэкономить небольшой счёт", "Нанимать до понимания оффера", "Нет письменного scope"],
      uk: ["Витрачати тижні, щоб зекономити невеликий рахунок", "Наймати до розуміння оферу", "Немає письмового scope"],
    },
    cta: {
      en: { title: "Want a fast decision?", body: "Send the project state. I will tell you if it is DIY, audit, rescue or full build.", bullets: ["30-45 min consultation", "Website audit", "Finish after AI/Cursor"] },
      pl: { title: "Chcesz szybką decyzję?", body: "Wyślij stan projektu. Powiem, czy to DIY, audit, rescue czy pełna budowa.", bullets: ["Konsultacja 30-45 min", "Audyt strony", "Dokończenie po AI/Cursor"] },
      ru: { title: "Хочешь быстрое решение?", body: "Кидай состояние проекта. Скажу, это DIY, аудит, rescue или сборка под ключ.", bullets: ["Консультация 30-45 мин", "Аудит сайта", "Довести после AI/Cursor"] },
      uk: { title: "Хочеш швидке рішення?", body: "Кидай стан проєкту. Скажу, це DIY, аудит, rescue чи збірка під ключ.", bullets: ["Консультація 30-45 хв", "Аудит сайту", "Довести після AI/Cursor"] },
    },
  },
  {
    slug: "tiktok-for-small-business",
    tape: "TAPE-06",
    channel: "MKT",
    minutes: 8,
    tags: ["TikTok", "Marketing", "Local"],
    title: {
      en: "TikTok for a small business — optional but powerful",
      pl: "TikTok dla małej firmy — opcjonalny, ale skuteczny",
      ru: "TikTok для малого бизнеса — опционально, но мощно",
      uk: "TikTok для малого бізнесу — опційно, але потужно",
    },
    description: {
      en: "When TikTok beats ads, how to film 3 starter clips, link to your site. Not mandatory — GSC is.",
      pl: "Kiedy TikTok bije reklamy, 3 klipy na start, link do strony. Nie obowiązkowy — GSC jest.",
      ru: "Когда TikTok лучше рекламы, 3 стартовых ролика, ссылка на сайт. Не обязателен — GSC обязателен.",
      uk: "Коли TikTok краще за рекламу, 3 стартові ролики, посилання на сайт. Не обовʼязковий — GSC обовʼязковий.",
    },
    intro: {
      en: "TikTok is not homework for every plumber. But if you can show real work in 20 seconds, it is free visibility. Do GSC and a working form first.",
      pl: "TikTok to nie obowiązek dla każdego hydraulika. Ale jeśli pokażesz prawdziwą pracę w 20 sekund — darmowa widoczność. Najpierw GSC i forma.",
      ru: "TikTok — не обязанность для каждого сантехника. Но если можешь показать реальную работу за 20 секунд — это бесплатная видимость. Сначала GSC и форма.",
      uk: "TikTok — не обовʼязок для кожного сантехніка. Але якщо можеш показати реальну роботу за 20 секунд — це безкоштовна видимість. Спочатку GSC і форма.",
    },
    outcome: {
      en: ["Business TikTok account", "Bio link to site", "3 real-work clips posted", "Clear rule: film weekly or skip"],
      pl: ["Konto Business TikTok", "Link w bio", "3 klipy z prawdziwą pracą", "Zasada: filmuj co tydzień albo pomiń"],
      ru: ["Бизнес-аккаунт TikTok", "Ссылка в bio", "3 ролика с реальной работой", "Правило: снимай раз в неделю или пропусти"],
      uk: ["Бізнес-акаунт TikTok", "Посилання в bio", "3 ролики з реальною роботою", "Правило: знімай щотижня або пропусти"],
    },
    steps: {
      en: [
        { title: "Check prerequisites", body: "Site live, form works, GSC connected. TikTok sends people to a dead site without this." },
        { title: "Switch to Business", body: "tiktok.com/business → Business account → add website URL in bio." },
        { title: "Film three clips", body: "Clip 1: who you are + city. Clip 2: one job before/after. Clip 3: one tip customers always ask." },
        { title: "Post and link", body: "Post one per day or batch weekly. Every caption ends with 'link in bio' — not a phone number only." },
      ],
      pl: [
        { title: "Sprawdź prerequisites", body: "Strona live, forma działa, GSC podpięte. TikTok bez tego wysyła na martwą stronę." },
        { title: "Przełącz na Business", body: "tiktok.com/business → konto Business → URL strony w bio." },
        { title: "Nagraj trzy klipy", body: "Klipy: kim jesteś + miasto; jedna robota przed/po; jedna porada." },
        { title: "Publikuj i linkuj", body: "Jeden dziennie lub batch co tydzień. Caption kończy się 'link w bio'." },
      ],
      ru: [
        { title: "Проверь prerequisites", body: "Сайт живой, форма работает, GSC подключён. Без этого TikTok ведёт на мёртвый сайт." },
        { title: "Переключи на Business", body: "tiktok.com/business → бизнес-аккаунт → URL сайта в bio." },
        { title: "Сними три ролика", body: "Ролик 1: кто ты + город. Ролик 2: одна работа до/после. Ролик 3: один совет, который все спрашивают." },
        { title: "Пости и ссылайся", body: "Один в день или пачкой раз в неделю. В caption — 'ссылка в bio'." },
      ],
      uk: [
        { title: "Перевір prerequisites", body: "Сайт live, форма працює, GSC підключений. Без цього TikTok веде на мертвий сайт." },
        { title: "Перемкни на Business", body: "tiktok.com/business → бізнес-акаунт → URL сайту в bio." },
        { title: "Зніми три ролики", body: "Ролик 1: хто ти + місто. Ролик 2: одна робота до/після. Ролик 3: одна порада." },
        { title: "Публікуй і посилайся", body: "Один на день або пачкою щотижня. У caption — 'посилання в bio'." },
      ],
    },
    mistakes: {
      en: ["TikTok before live site", "Stock footage pretending to be your work", "No link in bio"],
      pl: ["TikTok przed live stroną", "Stock udający twoją pracę", "Brak linku w bio"],
      ru: ["TikTok до живого сайта", "Сток под видом своей работы", "Нет ссылки в bio"],
      uk: ["TikTok до live сайту", "Сток під виглядом своєї роботи", "Немає посилання в bio"],
    },
    cta: {
      en: { title: "Need marketing order?", body: "I can set up GSC, GBP and the first clip script before you film.", bullets: ["GSC setup", "GBP verification", "3-clip script"] },
      pl: { title: "Potrzebujesz pomocy z marketingiem?", body: "Ustawię GSC, GBP i prosty plan contentu przed nagrywaniem.", bullets: ["Setup GSC", "Weryfikacja GBP", "Scenariusz 3 klipów"] },
      ru: { title: "Нужен порядок в маркетинге?", body: "Настрою GSC, GBP и сценарий первых роликов до съёмки.", bullets: ["Настройка GSC", "Верификация GBP", "Сценарий 3 роликов"] },
      uk: { title: "Потрібен порядок у маркетингу?", body: "Налаштую GSC, GBP і сценарій перших роликів до зйомки.", bullets: ["Налаштування GSC", "Верифікація GBP", "Сценарій 3 роликів"] },
    },
  },
  {
    slug: "google-ads-starter",
    tape: "TAPE-07",
    channel: "ADS",
    minutes: 7,
    tags: ["Google Ads", "Budget", "Local"],
    title: {
      en: "Google Ads without burning money",
      pl: "Google Ads bez palenia budżetu",
      ru: "Google Ads без слива бюджета",
      uk: "Google Ads без зливу бюджету",
    },
    description: {
      en: "When paid search makes sense, daily cap, exact keywords, track form submits — not just clicks.",
      pl: "Kiedy płatne wyszukiwanie ma sens, limit dzienny, dokładne słowa, śledzenie formularzy.",
      ru: "Когда платный поиск имеет смысл, дневной лимит, точные ключи, отслеживание заявок.",
      uk: "Коли платний пошук має сенс, денний ліміт, точні ключі, відстеження заявок.",
    },
    intro: {
      en: "Google Ads is a faucet, not a magic wand. Turn it on only when the site converts and you can answer the phone.",
      pl: "Google Ads to kran, nie różdżka. Włącz gdy strona konwertuje i odbierasz telefon.",
      ru: "Google Ads — это кран, не волшебная палочка. Включай, когда сайт конвертит и ты берёшь трубку.",
      uk: "Google Ads — це кран, не чарівна паличка. Вмикай, коли сайт конвертить і ти береш слухавку.",
    },
    outcome: {
      en: ["Prerequisites checklist done", "Campaign with daily budget cap", "Conversion tracking on form", "Cost-per-lead number after 2 weeks"],
      pl: ["Checklista prerequisites", "Kampania z limitem dziennym", "Tracking konwersji formularza", "Koszt leada po 2 tygodniach"],
      ru: ["Чеклист prerequisites", "Кампания с дневным лимитом", "Отслеживание отправки формы", "Стоимость лида через 2 недели"],
      uk: ["Чеклист prerequisites", "Кампанія з денним лімітом", "Відстеження форми", "Вартість ліда за 2 тижні"],
    },
    steps: {
      en: [
        { title: "Prerequisites", body: "Live site, working form, GSC, one clear offer. See /pipeline/marketing/google-ads-basics." },
        { title: "Start small", body: "ads.google.com → Leads campaign → city radius → 3–5 exact keywords → daily cap 10–15." },
        { title: "Match landing to ad", body: "Ad promises exactly what the landing page headline says. No generic AI hero." },
        { title: "Measure leads", body: "Count form submits and calls weekly. Pause keywords with zero leads after 50 clicks." },
      ],
      pl: [
        { title: "Prerequisites", body: "Live strona, forma, GSC, jedna oferta. Zobacz /pipeline/marketing/google-ads-basics." },
        { title: "Start mały", body: "ads.google.com → Leads → promień miasta → 3–5 słów → limit 10–15 dziennie." },
        { title: "Landing = reklama", body: "Reklama obiecuje to samo co nagłówek landingu." },
        { title: "Mierz leady", body: "Liczy formularze i telefony co tydzień. Pauzuj słowa bez leadów po 50 kliknięciach." },
      ],
      ru: [
        { title: "Prerequisites", body: "Живой сайт, форма, GSC, один оффер. См. /pipeline/marketing/google-ads-basics." },
        { title: "Старт маленький", body: "ads.google.com → Leads → радиус города → 3–5 точных ключей → лимит 10–15 в день." },
        { title: "Лендинг = реклама", body: "Объявление обещает то же, что заголовок на странице." },
        { title: "Считай лиды", body: "Считай заявки и звонки раз в неделю. Стоп ключам без лидов после 50 кликов." },
      ],
      uk: [
        { title: "Prerequisites", body: "Live сайт, форма, GSC, один офер. Див. /pipeline/marketing/google-ads-basics." },
        { title: "Старт малий", body: "ads.google.com → Leads → радіус міста → 3–5 ключів → ліміт 10–15 на день." },
        { title: "Лендинг = реклама", body: "Оголошення обіцяє те саме, що заголовок на сторінці." },
        { title: "Рахуй ліди", body: "Рахуй заявки й дзвінки щотижня. Стоп ключам без лідів після 50 кліків." },
      ],
    },
    mistakes: {
      en: ["Broad match on day 1", "No daily budget cap", "Ads before GSC"],
      pl: ["Broad match od dnia 1", "Brak limitu dziennego", "Reklamy przed GSC"],
      ru: ["Широкое соответствие в первый день", "Нет дневного лимита", "Реклама до GSC"],
      uk: ["Широке відповідність у перший день", "Немає денного ліміту", "Реклама до GSC"],
    },
    cta: {
      en: { title: "Ads burning cash?", body: "Send campaign screenshot + site URL. I audit keywords, landing and tracking.", bullets: ["Keyword audit", "Landing match", "Conversion fix"] },
      pl: { title: "Reklamy palą kasę?", body: "Wyślij screenshot kampanii + URL. Audyt słów, landingu i trackingu.", bullets: ["Audyt słów", "Dopasowanie landingu", "Fix konwersji"] },
      ru: { title: "Реклама сжигает бюджет?", body: "Кидай скрин кампании + URL. Аудит ключей, лендинга и трекинга.", bullets: ["Аудит ключей", "Соответствие лендинга", "Починка конверсий"] },
      uk: { title: "Реклама спалює бюджет?", body: "Кидай скрін кампанії + URL. Аудит ключів, лендингу й трекінгу.", bullets: ["Аудит ключів", "Відповідність лендингу", "Фікс конверсій"] },
    },
  },
  {
    slug: "google-search-console-setup",
    tape: "TAPE-08",
    channel: "SEO",
    minutes: 6,
    tags: ["GSC", "SEO", "Indexing"],
    title: {
      en: "Google Search Console — step by step",
      pl: "Google Search Console — krok po kroku",
      ru: "Google Search Console — пошагово",
      uk: "Google Search Console — покроково",
    },
    description: {
      en: "Mandatory for Google: verify site, submit sitemap, request indexing. Plain steps for non-specialists.",
      pl: "Obowiązkowe dla Google: weryfikacja, sitemap, żądanie indeksacji. Prosto dla nietechnicznych.",
      ru: "Обязательно для Google: верификация, sitemap, запрос индексации. Простыми шагами для нетech.",
      uk: "Обовʼязково для Google: верифікація, sitemap, запит індексації. Простими кроками для нетech.",
    },
    intro: {
      en: "If your site is not in Search Console, Google is guessing. This takes 20 minutes and costs nothing.",
      pl: "Jeśli strony nie ma w Search Console, Google zgaduje. 20 minut, zero kosztów.",
      ru: "Если сайта нет в Search Console — Google гадает. 20 минут, бесплатно.",
      uk: "Якщо сайту немає в Search Console — Google вгадує. 20 хвилин, безкоштовно.",
    },
    outcome: {
      en: ["Property verified in GSC", "Sitemap submitted and Success", "Home page Indexed or Discovered"],
      pl: ["Witryna zweryfikowana w GSC", "Sitemap wysłany i Success", "Strona główna Indexed lub Discovered"],
      ru: ["Ресурс верифицирован в GSC", "Sitemap отправлен со статусом Success", "Главная Indexed или Discovered"],
      uk: ["Ресурс верифікований у GSC", "Sitemap надісланий зі статусом Success", "Головна Indexed або Discovered"],
    },
    steps: {
      en: [
        { title: "Open GSC", body: "Go to search.google.com/search-console → sign in with Google account you will keep." },
        { title: "Add property", body: "Add property → URL prefix → enter https://yoursite.com exactly." },
        { title: "Verify", body: "DNS TXT record at domain registrar (recommended) OR upload HTML file to site root." },
        { title: "Submit sitemap", body: "Sitemaps → add yoursitemap.com/sitemap.xml → Request indexing for home URL." },
      ],
      pl: [
        { title: "Otwórz GSC", body: "search.google.com/search-console → zaloguj się kontem Google, którego nie zmienisz." },
        { title: "Dodaj witrynę", body: "Dodaj → prefiks URL → wpisz https://twojastrona.com dokładnie." },
        { title: "Weryfikacja", body: "Rekord DNS TXT u rejestratora LUB plik HTML w root strony." },
        { title: "Wyślij sitemap", body: "Mapy witryn → twojastrona.com/sitemap.xml → Żądanie indeksacji głównej." },
      ],
      ru: [
        { title: "Открой GSC", body: "search.google.com/search-console → войди в Google-аккаунт, который не сменишь." },
        { title: "Добавь ресурс", body: "Добавить → префикс URL → введи https://твойсайт.com точно." },
        { title: "Верификация", body: "DNS TXT у регистратора домена ИЛИ HTML-файл в корень сайта." },
        { title: "Отправь sitemap", body: "Файлы Sitemap → твойсайт.com/sitemap.xml → Запросить индексацию главной." },
      ],
      uk: [
        { title: "Відкрий GSC", body: "search.google.com/search-console → увійди в Google-акаунт, який не зміниш." },
        { title: "Додай ресурс", body: "Додати → префікс URL → введи https://твійсайт.com точно." },
        { title: "Верифікація", body: "DNS TXT у реєстратора домену АБО HTML-файл у корінь сайту." },
        { title: "Надішли sitemap", body: "Файли Sitemap → твійсайт.com/sitemap.xml → Запит індексації головної." },
      ],
    },
    mistakes: {
      en: ["Wrong URL (http vs https, www vs non-www)", "No sitemap", "Never checking Indexing report"],
      pl: ["Zły URL (http vs https)", "Brak sitemap", "Nigdy nie sprawdzasz raportu indeksacji"],
      ru: ["Неверный URL (http vs https)", "Нет sitemap", "Никогда не смотришь отчёт индексации"],
      uk: ["Невірний URL (http vs https)", "Немає sitemap", "Ніколи не дивишся звіт індексації"],
    },
    cta: {
      en: { title: "Indexing stuck?", body: "Send GSC screenshot + site URL. I check sitemap, robots and canonical issues.", bullets: ["Sitemap fix", "Robots.txt", "Canonical audit"] },
      pl: { title: "Indeksacja stoi?", body: "Wyślij screenshot GSC + URL. Sprawdzę sitemap, robots i canonical.", bullets: ["Fix sitemap", "Robots.txt", "Audyt canonical"] },
      ru: { title: "Индексация стоит?", body: "Кидай скрин GSC + URL. Проверю sitemap, robots и canonical.", bullets: ["Починка sitemap", "Robots.txt", "Аудит canonical"] },
      uk: { title: "Індексація стоїть?", body: "Кидай скрін GSC + URL. Перевірю sitemap, robots і canonical.", bullets: ["Фікс sitemap", "Robots.txt", "Аудит canonical"] },
    },
  },
  {
    slug: "yandex-for-ru-market",
    tape: "TAPE-09",
    channel: "YDX",
    minutes: 7,
    tags: ["Yandex", "Metrica", "RU"],
    title: {
      en: "Yandex Webmaster, Metrica, Direct for RU/UA/BY",
      pl: "Yandex Webmaster, Metrica, Direct dla RU/UA/BY",
      ru: "Яндекс Вебмастер, Метрика, Директ для RU/UA/BY",
      uk: "Яндекс Вебмастер, Метрика, Директ для RU/UA/BY",
    },
    description: {
      en: "When your clients search in Yandex, not Google. Skip if Poland-only.",
      pl: "Gdy klienci szukają w Yandex, nie w Google. Pomiń jeśli tylko Polska.",
      ru: "Когда клиенты ищут в Яндексе, а не в Google. Пропусти, если только Польша.",
      uk: "Коли клієнти шукають у Яндексі, а не в Google. Пропусти, якщо лише Польща.",
    },
    intro: {
      en: "Yandex is not a Google clone — it is the default search in Russia and parts of UA/BY. Add it when that audience pays your bills.",
      pl: "Yandex to nie klon Google — to domyślna wyszukiwarka w Rosji i części UA/BY. Dodaj gdy ta publiczność płaci rachunki.",
      ru: "Яндекс — не клон Google. Это поиск по умолчанию в РФ и части UA/BY. Подключай, если эта аудитория кормит бизнес.",
      uk: "Яндекс — не клон Google. Це пошук за замовчуванням у РФ і частині UA/BY. Підключай, якщо ця аудиторія годує бізнес.",
    },
    outcome: {
      en: ["Yandex Webmaster verified", "Metrica counter with form goal", "Decision on Direct with budget cap or skip"],
      pl: ["Yandex Webmaster zweryfikowany", "Licznik Metrica z celem formularza", "Decyzja o Direct z limitem lub pomiń"],
      ru: ["Яндекс Вебмастер верифицирован", "Счётчик Метрики с целью на форму", "Решение по Директу с лимитом или пропуск"],
      uk: ["Яндекс Вебмастер верифікований", "Лічильник Метрики з ціллю на форму", "Рішення по Директу з лімітом або пропуск"],
    },
    steps: {
      en: [
        { title: "Webmaster", body: "webmaster.yandex.ru → add site → verify → submit sitemap. See /pipeline/marketing/yandex-ecosystem." },
        { title: "Metrica", body: "metrica.yandex.ru → create counter → paste code → set goal: form thank-you page." },
        { title: "Direct (optional)", body: "direct.yandex.ru only after organic + Google stack works. Same budget rules as Google Ads." },
      ],
      pl: [
        { title: "Webmaster", body: "webmaster.yandex.ru → dodaj stronę → weryfikacja → sitemap. Zobacz /pipeline/marketing/yandex-ecosystem." },
        { title: "Metrica", body: "metrica.yandex.ru → licznik → kod → cel: thank-you formularza." },
        { title: "Direct (opcjonalnie)", body: "direct.yandex.ru dopiero po organic + Google. Te same zasady budżetu co Google Ads." },
      ],
      ru: [
        { title: "Вебмастер", body: "webmaster.yandex.ru → добавить сайт → верификация → sitemap. См. /pipeline/marketing/yandex-ecosystem." },
        { title: "Метрика", body: "metrica.yandex.ru → счётчик → код → цель: thank-you страница формы." },
        { title: "Директ (опционально)", body: "direct.yandex.ru только после органики + Google. Те же правила бюджета, что Google Ads." },
      ],
      uk: [
        { title: "Вебмастер", body: "webmaster.yandex.ru → додати сайт → верифікація → sitemap. Див. /pipeline/marketing/yandex-ecosystem." },
        { title: "Метрика", body: "metrica.yandex.ru → лічильник → код → ціль: thank-you сторінка форми." },
        { title: "Директ (опційно)", body: "direct.yandex.ru лише після органіки + Google. Ті самі правила бюджету, що Google Ads." },
      ],
    },
    mistakes: {
      en: ["Yandex only, ignoring Google", "Metrica without goals", "Direct with broken Cyrillic landing"],
      pl: ["Tylko Yandex, ignorowanie Google", "Metrica bez celów", "Direct ze złym landingiem"],
      ru: ["Только Яндекс, игнор Google", "Метрика без целей", "Директ со сломанной кириллицей"],
      uk: ["Лише Яндекс, ігнор Google", "Метрика без цілей", "Директ зі зламаною кирилицею"],
    },
    cta: {
      en: { title: "CIS market launch?", body: "I can wire Yandex + Google in parallel with one checklist.", bullets: ["Webmaster + GSC", "Metrica + GA4", "Direct audit"] },
      pl: { title: "Launch na rynek CIS?", body: "Podłączę Yandex + Google równolegle z jedną checklistą.", bullets: ["Webmaster + GSC", "Metrica + GA4", "Audyt Direct"] },
      ru: { title: "Запуск на рынок СНГ?", body: "Подключу Яндекс + Google параллельно по одному чеклисту.", bullets: ["Вебмастер + GSC", "Метрика + GA4", "Аудит Директа"] },
      uk: { title: "Запуск на ринок СНД?", body: "Підключу Яндекс + Google паралельно з одним чеклистом.", bullets: ["Вебмастер + GSC", "Метрика + GA4", "Аудит Директу"] },
    },
  },
  {
    slug: "frameworks-pick-2026",
    tape: "TAPE-10",
    channel: "STACK",
    minutes: 9,
    tags: ["Astro", "Next.js", "2026"],
    title: {
      en: "Which framework in 2026 — for non-developers",
      pl: "Który framework w 2026 — dla nietechnicznych",
      ru: "Какой фреймворк в 2026 — для нетech",
      uk: "Який фреймворк у 2026 — для нетech",
    },
    description: {
      en: "Astro vs Next.js vs Remix vs SvelteKit — decision tree so AI does not pick randomly.",
      pl: "Astro vs Next.js vs Remix vs SvelteKit — drzewo decyzji, żeby AI nie wybrało losowo.",
      ru: "Astro vs Next.js vs Remix vs SvelteKit — дерево решений, чтобы AI не выбрал наугад.",
      uk: "Astro vs Next.js vs Remix vs SvelteKit — дерево рішень, щоб AI не обрав наугад.",
    },
    intro: {
      en: "Framework is not fashion — it is maintenance cost. Wrong pick means expensive hosting and fragile AI edits.",
      pl: "Framework to nie moda — to koszt utrzymania. Zły wybór = drogi hosting i kruche edycje AI.",
      ru: "Фреймворк — не мода, а стоимость поддержки. Неверный выбор = дорогой хостинг и хрупкие правки AI.",
      uk: "Фреймворк — не мода, а вартість підтримки. Невірний вибір = дорогий хостинг і крихкі правки AI.",
    },
    outcome: {
      en: ["Written stack choice with reason", "Hosting matched to framework", "AI agent friendliness noted"],
      pl: ["Spisany wybór stacku z powodem", "Hosting dopasowany do frameworka", "AI agent friendliness zapisane"],
      ru: ["Записанный выбор стека с причиной", "Хостинг подобран под фреймворк", "Заметка про дружелюбность к AI"],
      uk: ["Записаний вибір stack з причиною", "Хостинг підібраний під фреймворк", "Нотатка про AI agent friendliness"],
    },
    steps: {
      en: [
        { title: "Brochure site?", body: "5–20 pages, no login → Astro + Cloudflare. See /pipeline/stacks." },
        { title: "App with accounts?", body: "Login, payments, dashboard → Next.js 15+ on Vercel." },
        { title: "Shop?", body: "Products and cart → Shopify first." },
        { title: "Other frameworks", body: "Remix/SvelteKit/Nuxt only if team already uses them. See /pipeline/marketing/frameworks-2026." },
      ],
      pl: [
        { title: "Strona-broszura?", body: "5–20 stron, bez logowania → Astro + Cloudflare. Zobacz /pipeline/stacks." },
        { title: "Aplikacja z kontami?", body: "Logowanie, płatności → Next.js 15+ na Vercel." },
        { title: "Sklep?", body: "Produkty i koszyk → Shopify najpierw." },
        { title: "Inne frameworki", body: "Remix/SvelteKit/Nuxt tylko jeśli zespół już ich używa. /pipeline/marketing/frameworks-2026." },
      ],
      ru: [
        { title: "Сайт-визитка?", body: "5–20 страниц, без входа → Astro + Cloudflare. См. /pipeline/stacks." },
        { title: "Приложение с аккаунтами?", body: "Вход, оплата, дашборд → Next.js 15+ на Vercel." },
        { title: "Магазин?", body: "Товары и корзина → сначала Shopify." },
        { title: "Другие фреймворки", body: "Remix/SvelteKit/Nuxt только если команда уже на них. /pipeline/marketing/frameworks-2026." },
      ],
      uk: [
        { title: "Сайт-візитка?", body: "5–20 сторінок, без входу → Astro + Cloudflare. Див. /pipeline/stacks." },
        { title: "Застосунок з акаунтами?", body: "Вхід, оплата, дашборд → Next.js 15+ на Vercel." },
        { title: "Магазин?", body: "Товари й кошик → спочатку Shopify." },
        { title: "Інші фреймворки", body: "Remix/SvelteKit/Nuxt лише якщо команда вже на них. /pipeline/marketing/frameworks-2026." },
      ],
    },
    mistakes: {
      en: ["Next.js for plumber brochure", "Letting AI pick trendy framework", "No hosting plan"],
      pl: ["Next.js na broszurę hydraulika", "AI wybiera modny framework", "Brak planu hostingu"],
      ru: ["Next.js для визитки сантехника", "AI выбирает модный фреймворк", "Нет плана хостинга"],
      uk: ["Next.js для візитки сантехніка", "AI обирає модний фреймворк", "Немає плану хостингу"],
    },
    cta: {
      en: { title: "Stack confusion?", body: "Send your brief. I pick stack + hosting in one page.", bullets: ["Brief review", "Stack pick", "Cursor prompt"] },
      pl: { title: "Chaos ze stackiem?", body: "Wyślij brief. Dobiorę stack + hosting na jednej stronie.", bullets: ["Review briefu", "Wybór stacku", "Prompt do Cursor"] },
      ru: { title: "Путаница со стеком?", body: "Кидай brief. Подберу стек + хостинг на одной странице.", bullets: ["Разбор brief", "Выбор стека", "Промпт для Cursor"] },
      uk: { title: "Плутанина зі stack?", body: "Кидай brief. Підберу stack + хостинг на одній сторінці.", bullets: ["Розбір brief", "Вибір stack", "Промпт для Cursor"] },
    },
  },
  {
    slug: "website-launch-checklist-full",
    tape: "TAPE-11",
    channel: "LAUNCH",
    minutes: 10,
    tags: ["Checklist", "SEO", "Marketing"],
    title: {
      en: "Full website launch kitchen — code to Google to TikTok",
      pl: "Pełna kuchnia launchu — od kodu do Google i TikTok",
      ru: "Полная кухня запуска — от кода до Google и TikTok",
      uk: "Повна кухня запуску — від коду до Google і TikTok",
    },
    description: {
      en: "The whole path: build, deploy, GSC, analytics, GBP, optional social and ads. Links to every pipeline section.",
      pl: "Cała ścieżka: build, deploy, GSC, analityka, GBP, opcjonalnie social i reklamy. Linki do każdej sekcji pipeline.",
      ru: "Весь путь: сборка, деплой, GSC, аналитика, GBP, опционально соцсети и реклама. Ссылки на все разделы pipeline.",
      uk: "Весь шлях: збірка, deploy, GSC, аналітика, GBP, опційно соцмережі й реклама. Посилання на всі розділи pipeline.",
    },
    intro: {
      en: "This is the master checklist I use before calling a site 'launched'. Not pretty — complete.",
      pl: "To master checklista przed nazwaniem strony 'launched'. Nie ładna — kompletna.",
      ru: "Это мастер-чеклист перед тем как назвать сайт «запущенным». Не красивый — полный.",
      uk: "Це master-чеклист перед тим як назвати сайт «запущеним». Не гарний — повний.",
    },
    outcome: {
      en: ["Build + deploy done", "GSC + analytics live", "Local GBP if applicable", "Marketing hub plan for next 30 days"],
      pl: ["Build + deploy gotowe", "GSC + analityka live", "GBP lokalnie jeśli dotyczy", "Plan marketing hub na 30 dni"],
      ru: ["Сборка + деплой готовы", "GSC + аналитика live", "GBP для локального если нужно", "План marketing hub на 30 дней"],
      uk: ["Збірка + deploy готові", "GSC + аналітика live", "GBP для локального якщо треба", "План marketing hub на 30 днів"],
    },
    steps: {
      en: [
        { title: "Build path", body: "Follow /pipeline/beginner steps 1–11: offer, Astro, GitHub, Cloudflare, domain, form." },
        { title: "SEO layer", body: "Steps 12–13: GSC + Plausible or GA4. See /pipeline/marketing/seo-analytics." },
        { title: "Local layer", body: "Step 14 if local: Google Business Profile. See /pipeline/marketing/marketing-basics." },
        { title: "Best practices", body: "Mobile, HTTPS, one H1, env vars, human review. /pipeline/marketing/best-practices-2026." },
        { title: "Optional visibility", body: "TikTok, ads, Yandex — only after above. Full hub: /pipeline/marketing." },
      ],
      pl: [
        { title: "Ścieżka build", body: "Kroki 1–11 z /pipeline/beginner: oferta, Astro, GitHub, Cloudflare, domena, forma." },
        { title: "Warstwa SEO", body: "Kroki 12–13: GSC + Plausible lub GA4. /pipeline/marketing/seo-analytics." },
        { title: "Warstwa lokalna", body: "Krok 14 jeśli lokalnie: GBP. /pipeline/marketing/marketing-basics." },
        { title: "Best practices", body: "Mobile, HTTPS, jedno H1, env vars, human review. /pipeline/marketing/best-practices-2026." },
        { title: "Opcjonalna widoczność", body: "TikTok, reklamy, Yandex — po powyższym. Hub: /pipeline/marketing." },
      ],
      ru: [
        { title: "Путь сборки", body: "Шаги 1–11 из /pipeline/beginner: оффер, Astro, GitHub, Cloudflare, домен, форма." },
        { title: "SEO-слой", body: "Шаги 12–13: GSC + Plausible или GA4. /pipeline/marketing/seo-analytics." },
        { title: "Локальный слой", body: "Шаг 14 если локальный бизнес: GBP. /pipeline/marketing/marketing-basics." },
        { title: "Best practices", body: "Mobile, HTTPS, один H1, env vars, проверка человеком. /pipeline/marketing/best-practices-2026." },
        { title: "Опциональная видимость", body: "TikTok, реклама, Яндекс — после всего выше. Hub: /pipeline/marketing." },
      ],
      uk: [
        { title: "Шлях збірки", body: "Кроки 1–11 з /pipeline/beginner: офер, Astro, GitHub, Cloudflare, домен, форма." },
        { title: "SEO-шар", body: "Кроки 12–13: GSC + Plausible або GA4. /pipeline/marketing/seo-analytics." },
        { title: "Локальний шар", body: "Крок 14 якщо локальний бізнес: GBP. /pipeline/marketing/marketing-basics." },
        { title: "Best practices", body: "Mobile, HTTPS, один H1, env vars, перевірка людиною. /pipeline/marketing/best-practices-2026." },
        { title: "Опційна видимість", body: "TikTok, реклама, Яндекс — після всього вище. Hub: /pipeline/marketing." },
      ],
    },
    mistakes: {
      en: ["Calling launch after deploy only", "Skipping GSC", "TikTok before form works"],
      pl: ["Launch po samym deploy", "Pominięcie GSC", "TikTok przed działającą formą"],
      ru: ["Запуск после только деплоя", "Пропуск GSC", "TikTok до рабочей формы"],
      uk: ["Launch після лише deploy", "Пропуск GSC", "TikTok до робочої форми"],
    },
    cta: {
      en: { title: "Want full launch audit?", body: "I run this checklist on your URL and send priority fixes.", bullets: ["Full kitchen audit", "GSC + form", "30-day plan"] },
      pl: { title: "Pełny audyt launchu?", body: "Przejdę checklistę na twoim URL i wyślę priorytety.", bullets: ["Audyt całej kuchni", "GSC + forma", "Plan 30 dni"] },
      ru: { title: "Нужен полный аудит запуска?", body: "Пройду этот чеклист по твоему URL и пришлю приоритеты.", bullets: ["Аудит всей кухни", "GSC + форма", "План на 30 дней"] },
      uk: { title: "Потрібен повний аудит запуску?", body: "Пройду цей чеклист по твоєму URL і надішлю пріоритети.", bullets: ["Аудит усієї кухні", "GSC + форма", "План на 30 днів"] },
    },
    related: ["google-search-console-setup", "form-tracking-conversions", "seo-internal-linking"],
  },
  {
    slug: "seo-internal-linking",
    tape: "TAPE-12",
    channel: "SEO-LINKS",
    minutes: 8,
    tags: ["SEO", "Internal links", "Content"],
    title: {
      en: "Internal links that help Google and users",
      pl: "Linki wewnętrzne, które pomagają Google i ludziom",
      ru: "Внутренние ссылки, которые помогают Google и людям",
      uk: "Внутрішні посилання, які допомагають Google і людям",
    },
    description: {
      en: "How to connect guides, service pages and pipeline pages so visitors move forward and search engines understand priority.",
      pl: "Jak łączyć poradniki, usługi i pipeline, żeby użytkownik szedł dalej, a Google rozumiało priorytety.",
      ru: "Как связывать гайды, услуги и pipeline-страницы, чтобы человек двигался дальше, а Google понимал приоритеты.",
      uk: "Як зв'язувати гайди, послуги й pipeline, щоб людина рухалась далі, а Google розумів пріоритети.",
    },
    intro: {
      en: "Internal linking is not decoration. It tells the visitor what to read next and tells search engines which pages matter most.",
      pl: "Linkowanie wewnętrzne to nie dekoracja. Pokazuje użytkownikowi kolejny krok i mówi wyszukiwarce, które strony są ważne.",
      ru: "Внутренние ссылки — не декор. Они показывают посетителю следующий шаг и объясняют поиску, какие страницы важнее.",
      uk: "Внутрішні посилання — не декор. Вони показують наступний крок і пояснюють пошуку, які сторінки важливіші.",
    },
    outcome: {
      en: ["Hub pages linked from guides", "Related articles on every guide", "Service CTAs from useful content", "No orphan pages"],
      pl: ["Huby linkowane z poradników", "Powiązane artykuły przy każdym poradniku", "CTA usług w treści", "Brak orphan pages"],
      ru: ["Hub-страницы связаны с гайдами", "Связанные статьи на каждом гайде", "CTA услуг из полезного контента", "Нет orphan pages"],
      uk: ["Hub-сторінки пов'язані з гайдами", "Пов'язані статті на кожному гайді", "CTA послуг із корисного контенту", "Немає orphan pages"],
    },
    steps: {
      en: [
        { title: "Pick hub pages", body: "Use /guides, /pipeline, /pipeline/marketing and core service pages as hubs." },
        { title: "Link by intent", body: "From SEO articles link to GSC, launch checklist and relevant pipeline pages, not random posts." },
        { title: "Use descriptive anchors", body: "Anchor text should explain the next step: launch checklist, GSC setup, conversion tracking." },
        { title: "Audit orphan pages", body: "Every useful page should be reachable from at least one hub and one related article." },
      ],
      pl: [
        { title: "Wybierz huby", body: "/guides, /pipeline, /pipeline/marketing i główne usługi jako strony-huby." },
        { title: "Linkuj według intencji", body: "Z artykułów SEO linkuj do GSC, checklisty launchu i pipeline, nie losowo." },
        { title: "Opisowe anchory", body: "Anchor ma mówić co dalej: launch checklist, GSC setup, tracking konwersji." },
        { title: "Sprawdź orphan pages", body: "Każda ważna strona ma mieć link z huba i powiązanego artykułu." },
      ],
      ru: [
        { title: "Выбери hub-страницы", body: "Используй /guides, /pipeline, /pipeline/marketing и ключевые услуги как хабы." },
        { title: "Линкуй по intent", body: "Из SEO-статей веди в GSC, launch checklist и нужные pipeline-страницы, а не куда попало." },
        { title: "Пиши понятные anchors", body: "Текст ссылки должен объяснять следующий шаг: чеклист запуска, GSC, отслеживание заявок." },
        { title: "Проверь orphan pages", body: "Каждая полезная страница должна быть доступна из хаба и из связанной статьи." },
      ],
      uk: [
        { title: "Обери hub-сторінки", body: "Використовуй /guides, /pipeline, /pipeline/marketing і ключові послуги як хаби." },
        { title: "Лінкуй за intent", body: "З SEO-статей веди в GSC, launch checklist і потрібні pipeline-сторінки, не випадково." },
        { title: "Пиши зрозумілі anchors", body: "Текст посилання має пояснювати наступний крок: checklist запуску, GSC, tracking заявок." },
        { title: "Перевір orphan pages", body: "Кожна корисна сторінка має бути доступна з хаба і пов'язаної статті." },
      ],
    },
    mistakes: {
      en: ["Only linking in the footer", "Using 'click here' anchors", "No links from guides to service pages"],
      pl: ["Linki tylko w footerze", "Anchory typu 'kliknij tutaj'", "Brak linków z poradników do usług"],
      ru: ["Ссылки только в footer", "Анкоры типа 'нажмите здесь'", "Нет ссылок из гайдов на услуги"],
      uk: ["Посилання лише у footer", "Anchors типу 'натисни тут'", "Немає links з гайдів на послуги"],
    },
    cta: {
      en: { title: "Need SEO structure?", body: "I can map hubs, guide links and conversion paths for your site.", bullets: ["Internal link map", "Hub cleanup", "SEO audit"] },
      pl: { title: "Potrzebujesz struktury SEO?", body: "Rozpiszę huby, linki poradników i ścieżki konwersji.", bullets: ["Mapa linków", "Porządek hubów", "Audyt SEO"] },
      ru: { title: "Нужна SEO-структура?", body: "Разложу хабы, связи гайдов и пути конверсии по сайту.", bullets: ["Карта перелинковки", "Чистка hub", "SEO-аудит"] },
      uk: { title: "Потрібна SEO-структура?", body: "Розкладу хаби, зв'язки гайдів і шляхи конверсії.", bullets: ["Карта перелінковки", "Чистка hub", "SEO-аудит"] },
    },
    related: ["website-launch-checklist-full", "google-search-console-setup", "homepage-seo-description"],
  },
  {
    slug: "homepage-seo-description",
    tape: "TAPE-13",
    channel: "SEO-COPY",
    minutes: 7,
    tags: ["SEO", "Copy", "Metadata"],
    title: {
      en: "Homepage title and description that do not waste Google",
      pl: "Title i description strony głównej bez marnowania Google",
      ru: "Title и description главной, которые не сливают Google",
      uk: "Title і description головної, які не зливають Google",
    },
    description: {
      en: "Write metadata, H1 and above-the-fold copy for a small business site so the page matches search intent and converts.",
      pl: "Metadata, H1 i pierwszy ekran dla małej firmy: zgodność z intencją i konwersja.",
      ru: "Metadata, H1 и первый экран для малого бизнеса: совпадение с intent и конверсия.",
      uk: "Metadata, H1 і перший екран для малого бізнесу: збіг з intent і конверсія.",
    },
    intro: {
      en: "Your homepage should say who you help, where, what you do and why the visitor should trust you. Metadata should say the same in search results.",
      pl: "Strona główna ma mówić komu pomagasz, gdzie, co robisz i czemu można ci ufać. Metadata mówi to samo w wynikach.",
      ru: "Главная должна говорить: кому помогаешь, где, что делаешь и почему тебе верить. Metadata говорит то же самое в выдаче.",
      uk: "Головна має казати: кому допомагаєш, де, що робиш і чому тобі довіряти. Metadata каже те саме у видачі.",
    },
    outcome: {
      en: ["Unique title under 60 chars", "Description under 160 chars", "One clear H1", "Hero copy that matches the offer"],
      pl: ["Unikalny title do 60 znaków", "Description do 160 znaków", "Jedno jasne H1", "Hero zgodne z ofertą"],
      ru: ["Уникальный title до 60 символов", "Description до 160 символов", "Один понятный H1", "Hero совпадает с оффером"],
      uk: ["Унікальний title до 60 символів", "Description до 160 символів", "Один зрозумілий H1", "Hero збігається з офером"],
    },
    steps: {
      en: [
        { title: "Title formula", body: "Service + city or niche + proof. Example: Emergency plumber in Warsaw | 24/7 local help." },
        { title: "Description formula", body: "Problem, solution, area, CTA. Do not stuff keywords." },
        { title: "H1 formula", body: "Human version of the title. One H1, no vague 'We build dreams' copy." },
        { title: "Match the CTA", body: "If the title promises booking, the first screen needs booking or contact immediately." },
      ],
      pl: [
        { title: "Formuła title", body: "Usługa + miasto albo nisza + proof. Np. Hydraulik Warszawa | Awaria 24/7." },
        { title: "Formuła description", body: "Problem, rozwiązanie, obszar, CTA. Bez upychania słów." },
        { title: "Formuła H1", body: "Ludzka wersja title. Jedno H1, bez pustych haseł." },
        { title: "CTA musi pasować", body: "Jeśli title obiecuje booking, pierwszy ekran ma mieć kontakt od razu." },
      ],
      ru: [
        { title: "Формула title", body: "Услуга + город или ниша + proof. Например: Срочный сантехник Варшава | 24/7." },
        { title: "Формула description", body: "Проблема, решение, география, CTA. Не набивай ключи." },
        { title: "Формула H1", body: "Человеческая версия title. Один H1, без пустых лозунгов." },
        { title: "CTA должен совпадать", body: "Если title обещает запись, первый экран сразу дает контакт или booking." },
      ],
      uk: [
        { title: "Формула title", body: "Послуга + місто або ніша + proof. Наприклад: Терміновий сантехнік Варшава | 24/7." },
        { title: "Формула description", body: "Проблема, рішення, географія, CTA. Не набивай ключі." },
        { title: "Формула H1", body: "Людська версія title. Один H1, без порожніх слоганів." },
        { title: "CTA має збігатися", body: "Якщо title обіцяє запис, перший екран одразу дає contact або booking." },
      ],
    },
    mistakes: {
      en: ["Same title on every page", "Description copied from hero", "Two H1 tags", "No city or service in metadata"],
      pl: ["Ten sam title wszędzie", "Description skopiowany z hero", "Dwa H1", "Brak miasta lub usługi w metadata"],
      ru: ["Одинаковый title везде", "Description скопирован из hero", "Два H1", "Нет города или услуги в metadata"],
      uk: ["Однаковий title всюди", "Description скопійований з hero", "Два H1", "Немає міста або послуги в metadata"],
    },
    cta: {
      en: { title: "Need copy cleanup?", body: "I can rewrite homepage metadata, H1 and CTA so SEO and conversion match.", bullets: ["Title/description", "Hero rewrite", "CTA audit"] },
      pl: { title: "Potrzebujesz copy cleanup?", body: "Przepiszę metadata, H1 i CTA, żeby SEO pasowało do konwersji.", bullets: ["Title/description", "Hero rewrite", "Audyt CTA"] },
      ru: { title: "Нужно почистить copy?", body: "Перепишу metadata, H1 и CTA, чтобы SEO совпадало с конверсией.", bullets: ["Title/description", "Hero rewrite", "Аудит CTA"] },
      uk: { title: "Потрібно почистити copy?", body: "Перепишу metadata, H1 і CTA, щоб SEO збігалось із конверсією.", bullets: ["Title/description", "Hero rewrite", "Аудит CTA"] },
    },
    related: ["seo-internal-linking", "make-website-yourself", "website-launch-checklist-full"],
  },
  {
    slug: "google-business-profile",
    tape: "TAPE-14",
    channel: "GBP",
    minutes: 8,
    tags: ["Google Business Profile", "Local SEO", "Marketing"],
    title: {
      en: "Google Business Profile for local services",
      pl: "Google Business Profile dla usług lokalnych",
      ru: "Google Business Profile для локальных услуг",
      uk: "Google Business Profile для локальних послуг",
    },
    description: {
      en: "Set up GBP after the website works: categories, services, photos, reviews and links back to the right pages.",
      pl: "GBP po działającej stronie: kategorie, usługi, zdjęcia, opinie i linki do właściwych stron.",
      ru: "GBP после рабочего сайта: категории, услуги, фото, отзывы и ссылки на правильные страницы.",
      uk: "GBP після робочого сайту: категорії, послуги, фото, відгуки й links на правильні сторінки.",
    },
    intro: {
      en: "For local business, GBP can beat a beautiful website. But it works best when the website, phone, categories and reviews say the same thing.",
      pl: "Dla lokalnego biznesu GBP potrafi wygrać ze stroną. Działa najlepiej, gdy strona, telefon, kategorie i opinie mówią to samo.",
      ru: "Для локального бизнеса GBP может быть сильнее красивого сайта. Но он работает, когда сайт, телефон, категории и отзывы говорят одно.",
      uk: "Для локального бізнесу GBP може бути сильнішим за красивий сайт. Але він працює, коли сайт, телефон, категорії й відгуки кажуть одне.",
    },
    outcome: {
      en: ["Verified GBP profile", "Correct primary category", "Services linked to website", "Review request process"],
      pl: ["Zweryfikowany profil GBP", "Dobra główna kategoria", "Usługi połączone ze stroną", "Proces zbierania opinii"],
      ru: ["Верифицированный GBP", "Правильная главная категория", "Услуги связаны с сайтом", "Процесс сбора отзывов"],
      uk: ["Верифікований GBP", "Правильна головна категорія", "Послуги пов'язані з сайтом", "Процес збору відгуків"],
    },
    steps: {
      en: [
        { title: "Verify profile", body: "Use exact business name, address or service area, phone and website URL." },
        { title: "Choose categories", body: "Primary category must match the money service, not a vague brand label." },
        { title: "Add services and photos", body: "Each service should match a page or section on the website." },
        { title: "Build review habit", body: "Ask every real customer for a review and reply with service/location language." },
      ],
      pl: [
        { title: "Zweryfikuj profil", body: "Dokładna nazwa, adres lub obszar, telefon i URL strony." },
        { title: "Wybierz kategorie", body: "Główna kategoria ma pasować do usługi, która zarabia." },
        { title: "Dodaj usługi i zdjęcia", body: "Każda usługa powinna pasować do strony lub sekcji." },
        { title: "Zbieraj opinie", body: "Proś realnych klientów o opinię i odpowiadaj językiem usług/lokalizacji." },
      ],
      ru: [
        { title: "Верифицируй профиль", body: "Точное название, адрес или зона обслуживания, телефон и URL сайта." },
        { title: "Выбери категории", body: "Главная категория должна совпадать с денежной услугой, а не абстрактным брендом." },
        { title: "Добавь услуги и фото", body: "Каждая услуга должна совпадать со страницей или секцией на сайте." },
        { title: "Собирай отзывы", body: "Проси каждого реального клиента оставить отзыв и отвечай с упоминанием услуги/локации." },
      ],
      uk: [
        { title: "Верифікуй профіль", body: "Точна назва, адреса або зона обслуговування, телефон і URL сайту." },
        { title: "Обери категорії", body: "Головна категорія має збігатися з грошовою послугою, не абстрактним брендом." },
        { title: "Додай послуги й фото", body: "Кожна послуга має збігатися зі сторінкою або секцією на сайті." },
        { title: "Збирай відгуки", body: "Проси реальних клієнтів залишати відгук і відповідай мовою послуг/локації." },
      ],
    },
    mistakes: {
      en: ["Wrong category", "No website link", "Stock photos", "Never asking for reviews"],
      pl: ["Zła kategoria", "Brak linku do strony", "Stockowe zdjęcia", "Brak proszenia o opinie"],
      ru: ["Неверная категория", "Нет ссылки на сайт", "Стоковые фото", "Не просите отзывы"],
      uk: ["Невірна категорія", "Немає посилання на сайт", "Стокові фото", "Не просите відгуки"],
    },
    cta: {
      en: { title: "Need local SEO setup?", body: "I can align GBP, site pages and Search Console for local leads.", bullets: ["GBP cleanup", "Local service pages", "Review flow"] },
      pl: { title: "Potrzebujesz local SEO?", body: "Połączę GBP, strony usług i Search Console pod leady lokalne.", bullets: ["GBP cleanup", "Strony usług", "Proces opinii"] },
      ru: { title: "Нужна настройка local SEO?", body: "Свяжу GBP, страницы услуг и Search Console под локальные заявки.", bullets: ["Чистка GBP", "Страницы услуг", "Процесс отзывов"] },
      uk: { title: "Потрібне local SEO?", body: "Зв'яжу GBP, сторінки послуг і Search Console під локальні заявки.", bullets: ["Чистка GBP", "Сторінки послуг", "Процес відгуків"] },
    },
    related: ["google-search-console-setup", "homepage-seo-description", "website-launch-checklist-full"],
  },
  {
    slug: "form-tracking-conversions",
    tape: "TAPE-15",
    channel: "CONVERT",
    minutes: 8,
    tags: ["Analytics", "Forms", "SEO", "Conversion"],
    title: {
      en: "Track forms and conversions before buying ads",
      pl: "Śledź formularze i konwersje zanim kupisz reklamy",
      ru: "Отслеживай формы и конверсии до покупки рекламы",
      uk: "Відстежуй форми й конверсії до покупки реклами",
    },
    description: {
      en: "A simple setup for form submissions, thank-you pages, analytics events and lead quality checks.",
      pl: "Prosty setup dla formularzy, thank-you page, eventów analityki i jakości leadów.",
      ru: "Простая схема для заявок, thank-you pages, analytics events и проверки качества лидов.",
      uk: "Проста схема для заявок, thank-you pages, analytics events і перевірки якості лідів.",
    },
    intro: {
      en: "Traffic is useless if you cannot tell which visitor became a lead. Track the form before spending money on ads or content.",
      pl: "Ruch jest bezużyteczny, jeśli nie wiesz kto został leadem. Śledź formularz przed reklamą i contentem.",
      ru: "Трафик бесполезен, если ты не понимаешь, кто стал лидом. Сначала отслеживай форму, потом реклама и контент.",
      uk: "Трафік марний, якщо ти не розумієш, хто став лідом. Спочатку tracking форми, потім реклама і контент.",
    },
    outcome: {
      en: ["Working contact form", "Thank-you or success state", "Analytics conversion event", "Lead quality notes"],
      pl: ["Działający formularz", "Thank-you albo success state", "Event konwersji", "Notatki jakości leadów"],
      ru: ["Рабочая форма", "Thank-you или success state", "Событие конверсии", "Заметки о качестве лидов"],
      uk: ["Робоча форма", "Thank-you або success state", "Подія конверсії", "Нотатки якості лідів"],
    },
    steps: {
      en: [
        { title: "Make delivery real", body: "Test that the owner receives the message, not just that the button turns green." },
        { title: "Add success URL or event", body: "Use a thank-you page or analytics event for every valid submission." },
        { title: "Mark the source", body: "Keep UTMs from ads, social, GBP and guide pages so leads can be compared." },
        { title: "Review quality", body: "Count leads that became conversations, not just raw form submits." },
      ],
      pl: [
        { title: "Dostarczenie naprawdę działa", body: "Sprawdź, że właściciel dostaje wiadomość, nie tylko zielony przycisk." },
        { title: "Success URL albo event", body: "Thank-you page lub event analityki dla każdego poprawnego zgłoszenia." },
        { title: "Oznacz źródło", body: "Zachowaj UTM z reklam, social, GBP i poradników." },
        { title: "Sprawdź jakość", body: "Licz leady, które stały się rozmową, nie same submit." },
      ],
      ru: [
        { title: "Доставка реально работает", body: "Проверь, что владелец получает сообщение, а не просто кнопка стала зелёной." },
        { title: "Success URL или event", body: "Thank-you page или analytics event для каждой валидной заявки." },
        { title: "Помечай источник", body: "Сохраняй UTM из рекламы, social, GBP и гайдов, чтобы сравнивать лиды." },
        { title: "Смотри качество", body: "Считай заявки, которые стали разговором, а не просто form submit." },
      ],
      uk: [
        { title: "Доставка реально працює", body: "Перевір, що власник отримує повідомлення, а не просто кнопка стала зеленою." },
        { title: "Success URL або event", body: "Thank-you page або analytics event для кожної валідної заявки." },
        { title: "Позначай джерело", body: "Зберігай UTM з реклами, social, GBP і гайдів, щоб порівнювати leads." },
        { title: "Дивись якість", body: "Рахуй заявки, які стали розмовою, а не просто form submit." },
      ],
    },
    mistakes: {
      en: ["No test email", "No conversion event", "Ads before tracking", "Counting spam as leads"],
      pl: ["Brak testowego maila", "Brak eventu konwersji", "Reklamy przed trackingiem", "Spam liczony jako lead"],
      ru: ["Нет тестового email", "Нет conversion event", "Реклама до tracking", "Спам считается лидами"],
      uk: ["Немає тестового email", "Немає conversion event", "Реклама до tracking", "Спам рахується як leads"],
    },
    cta: {
      en: { title: "Need conversion tracking?", body: "I can wire the form, analytics and lead routing before you spend on ads.", bullets: ["Form test", "Analytics event", "Lead routing"] },
      pl: { title: "Potrzebujesz tracking konwersji?", body: "Podłączę formularz, analitykę i lead routing przed reklamami.", bullets: ["Test formularza", "Event analityki", "Lead routing"] },
      ru: { title: "Нужен tracking конверсий?", body: "Подключу форму, аналитику и lead routing до рекламы.", bullets: ["Тест формы", "Analytics event", "Lead routing"] },
      uk: { title: "Потрібен tracking конверсій?", body: "Підключу форму, аналітику і lead routing до реклами.", bullets: ["Тест форми", "Analytics event", "Lead routing"] },
    },
    related: ["google-ads-starter", "google-search-console-setup", "website-launch-checklist-full"],
  },
  {
    slug: "service-page-that-converts",
    tape: "TAPE-16",
    channel: "SERVICE-SEO",
    minutes: 10,
    tags: ["SEO", "Copy", "Conversion", "Services"],
    title: {
      en: "How to write a service page that converts",
      pl: "Jak napisać stronę usługi, która konwertuje",
      ru: "Как написать страницу услуги, которая дает заявки",
      uk: "Як написати сторінку послуги, яка дає заявки",
    },
    description: {
      en: "A practical structure for one service page: intent, offer, proof, process, FAQ, CTA and internal links.",
      pl: "Praktyczna struktura strony usługi: intencja, oferta, dowód, proces, FAQ, CTA i linki wewnętrzne.",
      ru: "Практичная структура страницы услуги: intent, оффер, доказательства, процесс, FAQ, CTA и внутренние ссылки.",
      uk: "Практична структура сторінки послуги: intent, офер, докази, процес, FAQ, CTA і внутрішні links.",
    },
    intro: {
      en: "A service page is not a brochure. It must answer the exact buying question, prove that you can do the work and make the next action obvious.",
      pl: "Strona usługi nie jest broszurą. Ma odpowiedzieć na pytanie zakupowe, pokazać dowód i jasno prowadzić do kontaktu.",
      ru: "Страница услуги — не буклет. Она должна закрыть покупательский вопрос, доказать компетенцию и сразу вести к заявке.",
      uk: "Сторінка послуги — не буклет. Вона має закрити купівельне питання, довести компетенцію і вести до заявки.",
    },
    outcome: {
      en: ["One focused keyword intent", "Offer block with scope and price logic", "Proof section", "FAQ and internal links", "CTA that matches the page"],
      pl: ["Jedna intencja keyword", "Oferta z zakresem i logiką ceny", "Sekcja dowodów", "FAQ i linki", "CTA zgodne ze stroną"],
      ru: ["Один фокусный intent", "Оффер с рамками и логикой цены", "Блок доказательств", "FAQ и ссылки", "CTA по смыслу страницы"],
      uk: ["Один фокусний intent", "Офер з рамками й логікою ціни", "Блок доказів", "FAQ і links", "CTA за змістом сторінки"],
    },
    steps: {
      en: [
        { title: "Pick one search intent", body: "Do not mix website build, SEO audit and ads setup on one URL if people search for them separately." },
        { title: "Open with the real offer", body: "Say what you do, for whom, where it works and what changes after the work is done." },
        { title: "Show proof before process", body: "Use screenshots, numbers, before/after notes or constraints. Process without proof reads like filler." },
        { title: "Add FAQ from objections", body: "Answer price, timing, access, maintenance, ownership, revisions and what happens after launch." },
        { title: "Link to the next best page", body: "Service pages should link to a relevant case, guide and contact path, not only to the homepage." },
      ],
      pl: [
        { title: "Wybierz jedną intencję", body: "Nie mieszaj budowy strony, audytu SEO i reklam na jednym URL, jeśli ludzie szukają tego osobno." },
        { title: "Zacznij od konkretnej oferty", body: "Powiedz co robisz, dla kogo, gdzie to działa i co zmienia się po wykonaniu pracy." },
        { title: "Pokaż dowód przed procesem", body: "Screeny, liczby, before/after albo ograniczenia. Sam proces bez dowodu brzmi jak wypełniacz." },
        { title: "FAQ z obiekcji", body: "Cena, czas, dostępy, utrzymanie, własność, poprawki i co dzieje się po launchu." },
        { title: "Linkuj następny krok", body: "Strona usługi powinna linkować case, guide i kontakt, nie tylko homepage." },
      ],
      ru: [
        { title: "Выбери один intent", body: "Не смешивай создание сайта, SEO-аудит и рекламу на одном URL, если люди ищут это отдельно." },
        { title: "Начни с конкретного оффера", body: "Что делаешь, для кого, где это работает и что меняется после работы." },
        { title: "Покажи доказательство до процесса", body: "Скрины, цифры, before/after или ограничения. Процесс без доказательств выглядит как вода." },
        { title: "FAQ делай из возражений", body: "Цена, сроки, доступы, поддержка, владение кодом, правки и что происходит после запуска." },
        { title: "Дай следующий логичный шаг", body: "Страница услуги должна вести в кейс, гайд и контакт, а не только на главную." },
      ],
      uk: [
        { title: "Обери один intent", body: "Не змішуй створення сайту, SEO-аудит і рекламу на одному URL, якщо люди шукають це окремо." },
        { title: "Почни з конкретного оферу", body: "Що робиш, для кого, де це працює і що змінюється після роботи." },
        { title: "Покажи доказ до процесу", body: "Скріни, цифри, before/after або обмеження. Процес без доказів виглядає як вода." },
        { title: "FAQ роби з заперечень", body: "Ціна, строки, доступи, підтримка, ownership, правки і що після запуску." },
        { title: "Дай наступний логічний крок", body: "Сторінка послуги має вести в case, guide і contact, не тільки на головну." },
      ],
    },
    mistakes: {
      en: ["Three different services on one page", "No proof", "Vague CTA", "FAQ copied from competitors", "No internal links"],
      pl: ["Trzy usługi na jednej stronie", "Brak dowodu", "Niejasne CTA", "FAQ skopiowane od konkurencji", "Brak linków"],
      ru: ["Три услуги на одной странице", "Нет proof", "Размытый CTA", "FAQ скопирован у конкурентов", "Нет внутренних ссылок"],
      uk: ["Три послуги на одній сторінці", "Немає proof", "Розмите CTA", "FAQ скопійований у конкурентів", "Немає internal links"],
    },
    cta: {
      en: { title: "Need service-page copy?", body: "I can turn one offer into a page structure, metadata, FAQ and internal links.", bullets: ["SEO structure", "Conversion copy", "FAQ and schema plan"] },
      pl: { title: "Potrzebujesz copy usługi?", body: "Zamienię ofertę w strukturę strony, metadata, FAQ i linki.", bullets: ["Struktura SEO", "Conversion copy", "FAQ i schema"] },
      ru: { title: "Нужна страница услуги?", body: "Разложу оффер в структуру страницы, metadata, FAQ и внутренние ссылки.", bullets: ["SEO-структура", "Conversion copy", "FAQ и schema"] },
      uk: { title: "Потрібна сторінка послуги?", body: "Розкладу офер у структуру сторінки, metadata, FAQ і internal links.", bullets: ["SEO-структура", "Conversion copy", "FAQ і schema"] },
    },
    related: ["homepage-seo-description", "google-business-profile", "form-tracking-conversions"],
  },
  {
    slug: "case-study-proof-structure",
    tape: "TAPE-17",
    channel: "PROOF",
    minutes: 9,
    tags: ["Case Studies", "Proof", "SEO", "Conversion"],
    title: {
      en: "Case study structure: proof instead of portfolio fluff",
      pl: "Struktura case study: dowód zamiast portfolio-fluff",
      ru: "Структура кейса: доказательства вместо портфолио-воды",
      uk: "Структура кейса: докази замість портфоліо-води",
    },
    description: {
      en: "Turn a project into a credible case page with problem, constraints, screenshots, metrics, process and next-step links.",
      pl: "Zamień projekt w wiarygodny case: problem, ograniczenia, screeny, metryki, proces i linki.",
      ru: "Как превратить проект в нормальный кейс: проблема, ограничения, скрины, метрики, процесс и ссылки.",
      uk: "Як перетворити проєкт на нормальний case: проблема, обмеження, скріни, метрики, процес і links.",
    },
    intro: {
      en: "A case study should make a stranger believe the work happened and understand why it mattered. Pretty screenshots alone do not do that.",
      pl: "Case study ma sprawić, że obca osoba wierzy w wykonaną pracę i rozumie jej sens. Same ładne screeny nie wystarczą.",
      ru: "Кейс должен дать незнакомому человеку понять, что работа реально была и почему она важна. Одних красивых скринов мало.",
      uk: "Case має дати незнайомій людині зрозуміти, що робота була реальною і чому вона важлива. Одних гарних скрінів мало.",
    },
    outcome: {
      en: ["Problem/process/result frame", "2-3 evidence screenshots", "Metric source list", "Internal links to guides and services"],
      pl: ["Problem/proces/wynik", "2-3 screeny dowodu", "Lista źródeł metryk", "Linki do guides i usług"],
      ru: ["Фрейм проблема/процесс/результат", "2-3 скрина-доказательства", "Список источников метрик", "Ссылки на гайды и услуги"],
      uk: ["Фрейм проблема/процес/результат", "2-3 скріни-докази", "Список джерел метрик", "Links на guides і послуги"],
    },
    steps: {
      en: [
        { title: "Start with the constraint", body: "Budget, old stack, marketplace rules, time pressure or manual workflow. Constraints make the result believable." },
        { title: "Show the evidence", body: "Use real interface screenshots, Search Console, Lighthouse, order/admin proof or workflow before/after." },
        { title: "Separate confirmed and estimated metrics", body: "Never present a placeholder as a confirmed result. Label source and date." },
        { title: "Explain the decisions", body: "Why this stack, why this flow, why these compromises. That is more useful than a generic feature list." },
        { title: "Link the buyer path", body: "Case -> relevant guide -> service/order CTA. A case should help conversion, not only look nice." },
      ],
      pl: [
        { title: "Zacznij od ograniczenia", body: "Budżet, stary stack, marketplace, presja czasu albo manualny workflow. Ograniczenia budują wiarygodność." },
        { title: "Pokaż dowód", body: "Realne screeny interfejsu, Search Console, Lighthouse, admin/order proof albo before/after workflow." },
        { title: "Oddziel metryki potwierdzone", body: "Placeholder nigdy nie może wyglądać jak potwierdzony wynik. Źródło i data są obowiązkowe." },
        { title: "Wyjaśnij decyzje", body: "Czemu taki stack, flow i kompromisy. To lepsze niż generyczna lista funkcji." },
        { title: "Połącz ścieżkę kupującego", body: "Case -> guide -> service/order CTA. Case ma pomagać konwersji." },
      ],
      ru: [
        { title: "Начни с ограничения", body: "Бюджет, старый stack, правила marketplace, сроки или ручной workflow. Ограничения делают кейс честным." },
        { title: "Покажи доказательства", body: "Реальные скрины интерфейса, Search Console, Lighthouse, admin/order proof или before/after workflow." },
        { title: "Раздели confirmed и estimated", body: "Placeholder нельзя показывать как подтвержденный результат. Нужны источник и дата." },
        { title: "Объясни решения", body: "Почему такой stack, flow и компромиссы. Это полезнее списка функций." },
        { title: "Свяжи путь покупателя", body: "Кейс -> релевантный гайд -> service/order CTA. Кейс должен помогать конверсии." },
      ],
      uk: [
        { title: "Почни з обмеження", body: "Бюджет, старий stack, правила marketplace, строки або ручний workflow. Обмеження роблять case чесним." },
        { title: "Покажи докази", body: "Реальні скріни інтерфейсу, Search Console, Lighthouse, admin/order proof або before/after workflow." },
        { title: "Розділи confirmed і estimated", body: "Placeholder не можна показувати як підтверджений результат. Потрібні джерело й дата." },
        { title: "Поясни рішення", body: "Чому такий stack, flow і компроміси. Це корисніше за список features." },
        { title: "Зв'яжи шлях покупця", body: "Case -> релевантний guide -> service/order CTA. Case має допомагати конверсії." },
      ],
    },
    mistakes: {
      en: ["Only pretty screenshots", "No source for metrics", "No business constraint", "No CTA", "Hiding what was actually built"],
      pl: ["Same ładne screeny", "Brak źródła metryk", "Brak ograniczenia biznesowego", "Brak CTA", "Nie wiadomo co zbudowano"],
      ru: ["Только красивые скрины", "Нет источника метрик", "Нет бизнес-ограничения", "Нет CTA", "Неясно, что реально сделано"],
      uk: ["Тільки красиві скріни", "Немає джерела метрик", "Немає бізнес-обмеження", "Немає CTA", "Неясно, що реально зроблено"],
    },
    cta: {
      en: { title: "Need stronger cases?", body: "I can rewrite case pages around proof, screenshots, metrics and conversion paths.", bullets: ["Case structure", "Proof checklist", "Internal links"] },
      pl: { title: "Potrzebujesz mocniejszych case?", body: "Przepiszę case wokół dowodów, screenów, metryk i ścieżek konwersji.", bullets: ["Struktura case", "Checklista dowodów", "Linki"] },
      ru: { title: "Нужны сильнее кейсы?", body: "Пересоберу кейсы вокруг proof, скринов, метрик и путей конверсии.", bullets: ["Структура кейса", "Чеклист proof", "Внутренние ссылки"] },
      uk: { title: "Потрібні сильніші кейси?", body: "Перезберу cases навколо proof, скрінів, метрик і шляхів конверсії.", bullets: ["Структура case", "Proof checklist", "Internal links"] },
    },
    related: ["safe-case-screenshots", "when-to-hire", "seo-internal-linking"],
  },
  {
    slug: "safe-case-screenshots",
    tape: "TAPE-18",
    channel: "SCREENSHOTS",
    minutes: 8,
    tags: ["Case Studies", "Privacy", "Proof", "SEO"],
    title: {
      en: "How to prepare public case screenshots safely",
      pl: "Jak bezpiecznie przygotować screeny do case studies",
      ru: "Как безопасно готовить скрины для публичных кейсов",
      uk: "Як безпечно готувати скріни для публічних кейсів",
    },
    description: {
      en: "A checklist for proof screenshots: what to capture, what to blur, filenames, alt text and replacement order.",
      pl: "Checklista screenów dowodowych: co złapać, co zamazać, nazwy plików, alt text i kolejność wymiany.",
      ru: "Чеклист proof-скринов: что снять, что замазать, имена файлов, alt text и порядок замены.",
      uk: "Checklist proof-скрінів: що зняти, що замазати, імена файлів, alt text і порядок заміни.",
    },
    intro: {
      en: "Screenshots are the fastest way to make a case credible, but they can also leak customer, order or admin data. Treat them like production assets.",
      pl: "Screeny najszybciej budują wiarygodność case, ale mogą ujawnić dane klientów, zamówień i admina. Traktuj je jak assety produkcyjne.",
      ru: "Скрины быстрее всего делают кейс убедительным, но легко сливают клиентов, заказы и админку. Относись к ним как к production-ассетам.",
      uk: "Скріни найшвидше роблять case переконливим, але легко зливають клієнтів, замовлення й адмінку. Стався до них як до production assets.",
    },
    outcome: {
      en: ["Screenshot shot list", "Blur/redaction rules", "WebP filenames", "Alt text plan", "Replacement checklist"],
      pl: ["Lista screenów", "Zasady zamazywania", "Nazwy WebP", "Plan alt text", "Checklista wymiany"],
      ru: ["Список нужных скринов", "Правила блюра", "WebP-имена", "План alt text", "Чеклист замены"],
      uk: ["Список потрібних скрінів", "Правила blur", "WebP-імена", "План alt text", "Checklist заміни"],
    },
    steps: {
      en: [
        { title: "Capture the proof moment", body: "Home page, product/category, admin integration, payment flow, Search Console or automation output." },
        { title: "Blur private data twice", body: "Names, emails, phone numbers, addresses, order IDs, revenue, tokens and internal comments need real redaction." },
        { title: "Export consistent assets", body: "Use WebP, predictable filenames and the exact paths already referenced in project content." },
        { title: "Write useful alt text", body: "Alt text should describe the proof, not repeat 'screenshot' or stuff keywords." },
        { title: "Verify on mobile and desktop", body: "Open every case page after replacement and make sure the image crop still proves the point." },
      ],
      pl: [
        { title: "Złap moment dowodu", body: "Home, produkt/kategoria, integracja admin, payment flow, Search Console albo output automatyzacji." },
        { title: "Zamazuj dane dwa razy", body: "Nazwy, maile, telefony, adresy, order ID, revenue, tokeny i komentarze wewnętrzne wymagają redakcji." },
        { title: "Eksportuj spójnie", body: "WebP, przewidywalne nazwy i dokładne ścieżki już użyte w treści projektu." },
        { title: "Napisz dobry alt text", body: "Alt ma opisywać dowód, nie powtarzać 'screenshot' i nie upychać keywords." },
        { title: "Sprawdź mobile i desktop", body: "Po wymianie otwórz każdy case i upewnij się, że crop nadal pokazuje dowód." },
      ],
      ru: [
        { title: "Сними момент доказательства", body: "Home, product/category, admin integration, payment flow, Search Console или output автоматизации." },
        { title: "Замазывай приватное дважды", body: "Имена, email, телефоны, адреса, order ID, revenue, токены и внутренние комментарии нужно реально редактировать." },
        { title: "Экспортируй одинаково", body: "WebP, предсказуемые имена файлов и точные пути, которые уже прописаны в проектном контенте." },
        { title: "Напиши полезный alt text", body: "Alt должен описывать proof, а не повторять 'скриншот' и не набивать keywords." },
        { title: "Проверь mobile и desktop", body: "После замены открой каждый case и убедись, что crop всё еще доказывает нужную мысль." },
      ],
      uk: [
        { title: "Зніми момент доказу", body: "Home, product/category, admin integration, payment flow, Search Console або output автоматизації." },
        { title: "Замазуй приватне двічі", body: "Імена, email, телефони, адреси, order ID, revenue, tokens і внутрішні коментарі треба реально редагувати." },
        { title: "Експортуй однаково", body: "WebP, передбачувані імена файлів і точні paths, які вже прописані у project content." },
        { title: "Напиши корисний alt text", body: "Alt має описувати proof, а не повторювати 'screenshot' і не набивати keywords." },
        { title: "Перевір mobile і desktop", body: "Після заміни відкрий кожен case і переконайся, що crop досі доводить потрібну думку." },
      ],
    },
    mistakes: {
      en: ["Leaking order data", "Screenshots too cropped", "Random filenames", "No alt text", "Uploading PNG megabytes"],
      pl: ["Wyciek danych zamówień", "Za mocno przycięte screeny", "Losowe nazwy", "Brak alt text", "Wielkie PNG"],
      ru: ["Слив данных заказов", "Скрины слишком обрезаны", "Случайные имена файлов", "Нет alt text", "Тяжелые PNG"],
      uk: ["Злив даних замовлень", "Скріни надто обрізані", "Випадкові імена", "Немає alt text", "Важкі PNG"],
    },
    cta: {
      en: { title: "Need proof assets prepared?", body: "I can make a shot list, redact screenshots and wire them into case pages.", bullets: ["Shot list", "Redaction", "Case image replacement"] },
      pl: { title: "Potrzebujesz assetów proof?", body: "Przygotuję shot list, zredaguję screeny i podłączę je do case pages.", bullets: ["Shot list", "Redakcja", "Wymiana obrazów"] },
      ru: { title: "Нужны proof-ассеты?", body: "Соберу shot list, отредактирую скрины и подключу их к кейсам.", bullets: ["Shot list", "Редакция", "Замена изображений"] },
      uk: { title: "Потрібні proof assets?", body: "Зберу shot list, відредагую скріни й підключу їх до cases.", bullets: ["Shot list", "Redaction", "Image replacement"] },
    },
    related: ["case-study-proof-structure", "website-launch-checklist-full", "seo-internal-linking"],
  },
  {
    slug: "seo-content-clusters",
    tape: "TAPE-19",
    channel: "CONTENT-OPS",
    minutes: 11,
    tags: ["SEO", "Content", "Internal Links", "Strategy"],
    title: {
      en: "SEO content clusters for a small business site",
      pl: "Klastry SEO contentu dla małej firmy",
      ru: "SEO-кластеры контента для малого бизнеса",
      uk: "SEO-кластери контенту для малого бізнесу",
    },
    description: {
      en: "Plan a useful content map: hub pages, support guides, internal links, update cadence and conversion paths.",
      pl: "Plan mapy contentu: hub pages, poradniki wspierające, linki wewnętrzne, aktualizacje i konwersja.",
      ru: "Как спланировать карту контента: hub pages, supporting guides, внутренние ссылки, обновления и путь к заявке.",
      uk: "Як спланувати карту контенту: hub pages, supporting guides, internal links, оновлення і шлях до заявки.",
    },
    intro: {
      en: "Publishing more is not a strategy. A cluster works when every article has a job: answer intent, support a hub, pass trust and move the visitor toward action.",
      pl: "Więcej publikacji to nie strategia. Klaster działa, gdy każdy artykuł ma zadanie: odpowiada na intent, wspiera hub i prowadzi do akcji.",
      ru: "Больше публикаций — не стратегия. Кластер работает, когда каждая статья отвечает intent, усиливает hub и ведет к действию.",
      uk: "Більше публікацій — не стратегія. Кластер працює, коли кожна стаття відповідає intent, підсилює hub і веде до дії.",
    },
    outcome: {
      en: ["Cluster map", "Hub/support split", "Internal link rules", "Content update loop", "Conversion path per cluster"],
      pl: ["Mapa klastra", "Hub/support split", "Zasady linkowania", "Loop aktualizacji", "Ścieżka konwersji"],
      ru: ["Карта кластера", "Разделение hub/support", "Правила перелинковки", "Цикл обновлений", "Путь конверсии"],
      uk: ["Карта кластера", "Розділення hub/support", "Правила linking", "Цикл оновлень", "Шлях конверсії"],
    },
    steps: {
      en: [
        { title: "Choose a business hub", body: "A hub is the page that can convert: service, pipeline, project category or guide index." },
        { title: "List support intents", body: "Add articles for problems, comparisons, checklists, setup guides, mistakes and proof questions." },
        { title: "Create link rules", body: "Every support guide links up to the hub, sideways to two related guides and down to a conversion path." },
        { title: "Track gaps", body: "Mark missing screenshots, weak proof, old metadata and pages with no next step." },
        { title: "Update, do not only publish", body: "Refresh high-value pages after Search Console shows queries, not only when inspiration appears." },
      ],
      pl: [
        { title: "Wybierz hub biznesowy", body: "Hub to strona, która może konwertować: usługa, pipeline, kategoria projektów albo index guides." },
        { title: "Wypisz intencje wspierające", body: "Artykuły o problemach, porównaniach, checklistach, setupie, błędach i pytaniach o proof." },
        { title: "Ustal zasady linków", body: "Każdy support guide linkuje do hub, dwóch powiązanych guides i ścieżki konwersji." },
        { title: "Śledź luki", body: "Brakujące screeny, słaby proof, stare metadata i strony bez następnego kroku." },
        { title: "Aktualizuj, nie tylko publikuj", body: "Odświeżaj ważne strony po query z Search Console, nie tylko z inspiracji." },
      ],
      ru: [
        { title: "Выбери бизнес-hub", body: "Hub — страница, которая может конвертить: услуга, pipeline, категория проектов или индекс гайдов." },
        { title: "Собери support intents", body: "Статьи под проблемы, сравнения, чеклисты, setup, ошибки и вопросы про proof." },
        { title: "Введи правила ссылок", body: "Каждый support guide ведет вверх в hub, вбок на два related guides и вниз к конверсии." },
        { title: "Отмечай пробелы", body: "Недостающие скрины, слабый proof, старая metadata и страницы без следующего шага." },
        { title: "Обновляй, а не только публикуй", body: "Переписывай важные страницы после queries из Search Console, а не только по вдохновению." },
      ],
      uk: [
        { title: "Обери бізнес-hub", body: "Hub — сторінка, яка може конвертити: послуга, pipeline, категорія проєктів або index guides." },
        { title: "Збери support intents", body: "Статті під проблеми, порівняння, checklist, setup, помилки й питання про proof." },
        { title: "Введи правила links", body: "Кожен support guide веде в hub, на два related guides і до conversion path." },
        { title: "Позначай прогалини", body: "Бракуючі скріни, слабкий proof, стара metadata і сторінки без наступного кроку." },
        { title: "Оновлюй, не тільки публікуй", body: "Переписуй важливі сторінки після queries з Search Console, не лише з натхнення." },
      ],
    },
    mistakes: {
      en: ["Publishing random topics", "No hub page", "No internal links", "No update loop", "No conversion destination"],
      pl: ["Losowe tematy", "Brak hub page", "Brak linków", "Brak update loop", "Brak celu konwersji"],
      ru: ["Случайные темы", "Нет hub page", "Нет внутренних ссылок", "Нет цикла обновлений", "Нет conversion destination"],
      uk: ["Випадкові теми", "Немає hub page", "Немає internal links", "Немає update loop", "Немає conversion destination"],
    },
    cta: {
      en: { title: "Need a content map?", body: "I can map your guides, services, cases and CTAs into a usable SEO cluster system.", bullets: ["Cluster map", "Internal links", "Publishing backlog"] },
      pl: { title: "Potrzebujesz mapy contentu?", body: "Połączę guides, usługi, case i CTA w system klastrów SEO.", bullets: ["Mapa klastra", "Linki", "Backlog publikacji"] },
      ru: { title: "Нужна карта контента?", body: "Свяжу guides, услуги, кейсы и CTA в рабочую систему SEO-кластеров.", bullets: ["Карта кластера", "Перелинковка", "Backlog публикаций"] },
      uk: { title: "Потрібна карта content?", body: "Зв'яжу guides, послуги, cases і CTA в робочу систему SEO-кластерів.", bullets: ["Cluster map", "Internal links", "Publishing backlog"] },
    },
    related: ["seo-internal-linking", "ai-search-llms-txt", "analytics-without-ga4"],
  },
  {
    slug: "ai-search-llms-txt",
    tape: "TAPE-20",
    channel: "AI-SEO",
    minutes: 8,
    tags: ["AI visibility", "SEO", "llms.txt", "Structured Data"],
    title: {
      en: "AI search visibility: llms.txt, schema and clear entity data",
      pl: "Widoczność w AI search: llms.txt, schema i jasne entity data",
      ru: "AI search visibility: llms.txt, schema и понятная entity data",
      uk: "AI search visibility: llms.txt, schema і зрозуміла entity data",
    },
    description: {
      en: "Make a site easier for AI systems to understand with consistent identity, summaries, structured data and source pages.",
      pl: "Ułatw AI zrozumienie strony przez spójne identity, summary, structured data i strony źródłowe.",
      ru: "Как сделать сайт понятнее AI-системам: единая identity, summaries, structured data и страницы-источники.",
      uk: "Як зробити сайт зрозумілішим для AI-систем: єдина identity, summaries, structured data і source pages.",
    },
    intro: {
      en: "AI visibility starts with boring consistency. The same name, offer, services, cases and proof need to appear in metadata, schema, page copy and llms.txt.",
      pl: "AI visibility zaczyna się od nudnej spójności. Ta sama nazwa, oferta, usługi, case i proof muszą być w metadata, schema, copy i llms.txt.",
      ru: "AI visibility начинается со скучной консистентности. Одно имя, оффер, услуги, кейсы и proof должны быть в metadata, schema, copy и llms.txt.",
      uk: "AI visibility починається з нудної консистентності. Одне ім'я, офер, послуги, cases і proof мають бути в metadata, schema, copy і llms.txt.",
    },
    outcome: {
      en: ["Consistent entity name", "Useful llms.txt", "Article/Collection schema", "Case and service source links"],
      pl: ["Spójna entity name", "Użyteczny llms.txt", "Article/Collection schema", "Linki do case i usług"],
      ru: ["Единая entity name", "Полезный llms.txt", "Article/Collection schema", "Ссылки на кейсы и услуги"],
      uk: ["Єдина entity name", "Корисний llms.txt", "Article/Collection schema", "Links на cases і послуги"],
    },
    steps: {
      en: [
        { title: "Normalize the entity", body: "Use one spelling for the public name across title, JSON-LD, OG alt, sitemap-linked pages and llms.txt." },
        { title: "Write llms.txt like a source card", body: "Summarize who the site belongs to, what it offers, best pages, proof pages and contact path." },
        { title: "Keep schema close to reality", body: "Article, CollectionPage, Person and Organization data should match visible page content." },
        { title: "Link to proof pages", body: "AI systems and humans both need source pages: cases, guides, project pages and public contact routes." },
      ],
      pl: [
        { title: "Ujednolić entity", body: "Jedna pisownia publicznej nazwy w title, JSON-LD, OG alt, sitemap pages i llms.txt." },
        { title: "llms.txt jak source card", body: "Kto, oferta, najlepsze strony, proof pages i kontakt." },
        { title: "Schema blisko rzeczywistości", body: "Article, CollectionPage, Person i Organization muszą pasować do widocznego contentu." },
        { title: "Linkuj proof pages", body: "AI i ludzie potrzebują źródeł: case, guides, project pages i kontakt." },
      ],
      ru: [
        { title: "Нормализуй entity", body: "Одно написание публичного имени в title, JSON-LD, OG alt, sitemap-linked pages и llms.txt." },
        { title: "llms.txt как source card", body: "Кто владелец, что предлагает, лучшие страницы, proof pages и путь контакта." },
        { title: "Schema должна совпадать с реальностью", body: "Article, CollectionPage, Person и Organization должны соответствовать видимому контенту." },
        { title: "Ссылайся на proof pages", body: "AI и людям нужны источники: кейсы, гайды, project pages и публичный контакт." },
      ],
      uk: [
        { title: "Нормалізуй entity", body: "Одне написання публічного імені в title, JSON-LD, OG alt, sitemap-linked pages і llms.txt." },
        { title: "llms.txt як source card", body: "Хто власник, що пропонує, найкращі сторінки, proof pages і contact path." },
        { title: "Schema має збігатися з реальністю", body: "Article, CollectionPage, Person і Organization мають відповідати видимому content." },
        { title: "Посилайся на proof pages", body: "AI і людям потрібні джерела: cases, guides, project pages і публічний contact." },
      ],
    },
    mistakes: {
      en: ["Different name spelling", "llms.txt with no useful links", "Schema claims not visible on page", "No case proof"],
      pl: ["Różna pisownia nazwy", "llms.txt bez dobrych linków", "Schema obiecuje coś niewidocznego", "Brak proof case"],
      ru: ["Разное написание имени", "llms.txt без полезных ссылок", "Schema обещает то, чего нет на странице", "Нет proof кейсов"],
      uk: ["Різне написання імені", "llms.txt без корисних links", "Schema обіцяє те, чого нема на сторінці", "Немає proof cases"],
    },
    cta: {
      en: { title: "Need AI visibility cleanup?", body: "I can align entity data, schema, llms.txt and internal source pages.", bullets: ["Entity cleanup", "llms.txt", "Schema review"] },
      pl: { title: "Potrzebujesz AI visibility cleanup?", body: "Wyrównam entity data, schema, llms.txt i source pages.", bullets: ["Entity cleanup", "llms.txt", "Schema review"] },
      ru: { title: "Нужна чистка AI visibility?", body: "Сведу entity data, schema, llms.txt и source pages.", bullets: ["Entity cleanup", "llms.txt", "Schema review"] },
      uk: { title: "Потрібна чистка AI visibility?", body: "Зведу entity data, schema, llms.txt і source pages.", bullets: ["Entity cleanup", "llms.txt", "Schema review"] },
    },
    related: ["seo-content-clusters", "google-search-console-setup", "case-study-proof-structure"],
  },
  {
    slug: "analytics-without-ga4",
    tape: "TAPE-21",
    channel: "ANALYTICS",
    minutes: 9,
    tags: ["Analytics", "SEO", "Conversion", "Plausible"],
    title: {
      en: "Simple analytics without GA4 complexity",
      pl: "Prosta analityka bez złożoności GA4",
      ru: "Простая аналитика без сложности GA4",
      uk: "Проста аналітика без складності GA4",
    },
    description: {
      en: "Use Search Console, privacy-friendly analytics, form events and a monthly review to understand whether the site works.",
      pl: "Search Console, prosta analityka, form events i miesięczny review, żeby wiedzieć czy strona działa.",
      ru: "Search Console, простая аналитика, form events и monthly review, чтобы понять, работает ли сайт.",
      uk: "Search Console, проста аналітика, form events і monthly review, щоб зрозуміти, чи працює сайт.",
    },
    intro: {
      en: "Small sites usually do not need a giant analytics stack. They need a reliable answer to three questions: who arrived, what page worked, and what became a lead.",
      pl: "Małe strony zwykle nie potrzebują ogromnego stacku analityki. Potrzebują odpowiedzi: kto przyszedł, która strona działa i co zostało leadem.",
      ru: "Маленьким сайтам обычно не нужен огромный analytics stack. Нужны ответы: кто пришел, какая страница сработала и что стало лидом.",
      uk: "Малим сайтам зазвичай не потрібен великий analytics stack. Потрібні відповіді: хто прийшов, яка сторінка спрацювала і що стало lead.",
    },
    outcome: {
      en: ["Search Console baseline", "Plausible or similar page analytics", "Form conversion event", "Monthly content review checklist"],
      pl: ["Search Console baseline", "Plausible albo podobna analityka", "Event formularza", "Monthly content review"],
      ru: ["Search Console baseline", "Plausible или похожая аналитика", "Form conversion event", "Monthly content review"],
      uk: ["Search Console baseline", "Plausible або схожа аналітика", "Form conversion event", "Monthly content review"],
    },
    steps: {
      en: [
        { title: "Start with Search Console", body: "Indexing, queries, pages and countries show whether Google understands the site." },
        { title: "Add lightweight page analytics", body: "Use Plausible or a similar simple tool for visits, referrers and top pages." },
        { title: "Track the form", body: "A lead event matters more than a visit count. Test delivery and record source." },
        { title: "Review once a month", body: "Find pages with impressions but weak CTR, pages with visits but no leads and guides that need internal links." },
      ],
      pl: [
        { title: "Zacznij od Search Console", body: "Indeksacja, queries, pages i kraje pokazują, czy Google rozumie stronę." },
        { title: "Dodaj lekką analitykę", body: "Plausible albo podobne narzędzie do visits, referrers i top pages." },
        { title: "Śledź formularz", body: "Lead event jest ważniejszy niż liczba visits. Testuj dostarczenie i zapisuj source." },
        { title: "Review raz w miesiącu", body: "Strony z impressions i słabym CTR, visits bez leadów i guides bez linków." },
      ],
      ru: [
        { title: "Начни с Search Console", body: "Индексация, queries, pages и страны показывают, понимает ли Google сайт." },
        { title: "Добавь легкую аналитику", body: "Plausible или похожий инструмент для visits, referrers и top pages." },
        { title: "Отслеживай форму", body: "Lead event важнее счетчика посещений. Тестируй доставку и сохраняй source." },
        { title: "Раз в месяц делай review", body: "Страницы с impressions и слабым CTR, visits без лидов и guides без внутренних ссылок." },
      ],
      uk: [
        { title: "Почни з Search Console", body: "Індексація, queries, pages і країни показують, чи розуміє Google сайт." },
        { title: "Додай легку аналітику", body: "Plausible або схожий tool для visits, referrers і top pages." },
        { title: "Відстежуй форму", body: "Lead event важливіший за лічильник visits. Тестуй доставку і зберігай source." },
        { title: "Раз на місяць роби review", body: "Сторінки з impressions і слабким CTR, visits без leads і guides без internal links." },
      ],
    },
    mistakes: {
      en: ["Only looking at visits", "No form event", "No Search Console", "No monthly review", "Changing pages without notes"],
      pl: ["Patrzenie tylko na visits", "Brak form event", "Brak Search Console", "Brak monthly review", "Zmiany bez notatek"],
      ru: ["Смотреть только visits", "Нет form event", "Нет Search Console", "Нет monthly review", "Правки без notes"],
      uk: ["Дивитися тільки visits", "Немає form event", "Немає Search Console", "Немає monthly review", "Правки без notes"],
    },
    cta: {
      en: { title: "Need measurement setup?", body: "I can connect Search Console, lightweight analytics and form conversion tracking.", bullets: ["GSC setup", "Plausible check", "Form event"] },
      pl: { title: "Potrzebujesz pomiaru?", body: "Podłączę Search Console, lekką analitykę i tracking formularza.", bullets: ["GSC setup", "Plausible check", "Form event"] },
      ru: { title: "Нужна настройка измерений?", body: "Подключу Search Console, легкую аналитику и tracking формы.", bullets: ["GSC setup", "Plausible check", "Form event"] },
      uk: { title: "Потрібне налаштування вимірів?", body: "Підключу Search Console, легку аналітику і tracking форми.", bullets: ["GSC setup", "Plausible check", "Form event"] },
    },
    related: ["form-tracking-conversions", "google-search-console-setup", "seo-content-clusters"],
  },
];

export const guideSlugs = guides.map((guide) => guide.slug);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
