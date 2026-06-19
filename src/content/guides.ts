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
  | "website-launch-checklist-full";

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
  },
} as const;

export const guideRoadmap: Record<Locale, GuideRoadmap> = {
  en: {
    tag: "Course plan",
    title: "AI-assisted coding system, not random prompting",
    subtitle:
      "The free school is built around a practical setup: Cursor, Claude, Codex, model routing, scripts, repeatable pipelines and human review checkpoints.",
    modulesTitle: "What the course covers",
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
    tag: "Plan kursu",
    title: "System AI-assisted coding, nie losowe promptowanie",
    subtitle:
      "Darmowa szkoła opiera się na praktycznym setupie: Cursor, Claude, Codex, routing modeli, skrypty, powtarzalne pipeline i checkpointy human review.",
    modulesTitle: "Co obejmuje kurs",
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
    tag: "Контент-план",
    title: "Не набор промптов, а система AI-assisted coding",
    subtitle:
      "Бесплатная школа про Cursor, Claude, Codex, китайские AI-модели, skills, скрипты, пайплайны и human-in-the-loop контроль. Цель — настроить рабочую систему, а не просто посмотреть курс.",
    modulesTitle: "Про что будут гайды",
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
    tag: "Контент-план",
    title: "Не набір prompt, а система AI-assisted coding",
    subtitle:
      "Безкоштовна школа про Cursor, Claude, Codex, китайські AI-моделі, skills, скрипти, pipeline і human-in-the-loop контроль.",
    modulesTitle: "Про що будуть гайди",
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
    tag: "Next blocks",
    title: "More systems to build after the basics",
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
        title: "Personal operating system",
        body: "A repeatable working system for every project: intake, brief, build, review, publish, measure and improve.",
        items: ["intake", "review", "iteration"],
      },
    ],
  },
  pl: {
    tag: "Kolejne bloki",
    title: "Więcej systemów po podstawach",
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
    tag: "Дальше в программе",
    title: "Ещё такие же блоки: от AI-игрушки к рабочей системе",
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
    tag: "Далі в програмі",
    title: "Ще такі самі блоки: від AI-іграшки до робочої системи",
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
    minutes: 8,
    tags: sharedTags,
    title: {
      en: "Cursor to GitHub to Vercel: the clean deployment pipeline",
      pl: "Cursor -> GitHub -> Vercel: czysty pipeline deploymentu",
      ru: "Cursor -> GitHub -> Vercel: нормальный пайплайн деплоя",
      uk: "Cursor -> GitHub -> Vercel: нормальний pipeline деплою",
    },
    description: {
      en: "How to move from generated code to a real production URL without losing ownership.",
      pl: "Jak przejść od wygenerowanego kodu do prawdziwego production URL bez utraty własności.",
      ru: "Как перейти от сгенерированного кода к настоящему production URL без потери контроля.",
      uk: "Як перейти від згенерованого коду до справжнього production URL без втрати контролю.",
    },
    intro: {
      en: "The basic rule: code lives in GitHub, production lives on Vercel, decisions live in the README.",
      pl: "Podstawowa zasada: kod mieszka w GitHub, produkcja na Vercel, decyzje w README.",
      ru: "Базовое правило: код живёт в GitHub, продакшен живёт на Vercel, решения живут в README.",
      uk: "Базове правило: код живе в GitHub, production живе на Vercel, рішення живуть у README.",
    },
    outcome: {
      en: ["Repository with history", "Production deployment", "Environment variables checklist", "Rollback path"],
      pl: ["Repozytorium z historią", "Production deployment", "Checklista env vars", "Ścieżka rollbacku"],
      ru: ["Репозиторий с историей", "Production deployment", "Чеклист env vars", "Путь отката"],
      uk: ["Репозиторій з історією", "Production deployment", "Чеклист env vars", "Шлях rollback"],
    },
    steps: {
      en: [{ title: "Create repo", body: "Keep commits small and readable." }, { title: "Connect Vercel", body: "Import the repo and keep framework settings explicit." }, { title: "Add env vars", body: "Never hardcode tokens, form secrets or API keys." }],
      pl: [{ title: "Utwórz repo", body: "Commituj małe, czytelne zmiany." }, { title: "Połącz Vercel", body: "Zaimportuj repo i ustaw framework świadomie." }, { title: "Dodaj env vars", body: "Nie hardcoduj tokenów, sekretów formularzy ani API keys." }],
      ru: [{ title: "Создай repo", body: "Коммить маленькие и понятные изменения." }, { title: "Подключи Vercel", body: "Импортируй repo и проверь настройки framework." }, { title: "Добавь env vars", body: "Не хардкодь токены, секреты форм и API keys." }],
      uk: [{ title: "Створи repo", body: "Коміть маленькі й зрозумілі зміни." }, { title: "Підключи Vercel", body: "Імпортуй repo й перевір framework settings." }, { title: "Додай env vars", body: "Не hardcode токени, секрети форм і API keys." }],
    },
    mistakes: {
      en: ["Only having code inside Cursor", "Changing production manually", "No env var list"],
      pl: ["Kod tylko w Cursorze", "Ręczne zmiany na produkcji", "Brak listy env vars"],
      ru: ["Код только внутри Cursor", "Ручные изменения на проде", "Нет списка env vars"],
      uk: ["Код тільки всередині Cursor", "Ручні зміни на production", "Немає списку env vars"],
    },
    cta: {
      en: { title: "Deployment broken?", body: "I can inspect the repo, Vercel logs and domain settings.", bullets: ["Build fails", "Env vars missing", "Domain points nowhere"] },
      pl: { title: "Deployment nie działa?", body: "Mogę sprawdzić repo, logi Vercel i ustawienia domeny.", bullets: ["Build failuje", "Brakuje env vars", "Domena nie trafia gdzie trzeba"] },
      ru: { title: "Деплой сломан?", body: "Могу посмотреть repo, логи Vercel и настройки домена.", bullets: ["Build падает", "Не хватает env vars", "Домен смотрит не туда"] },
      uk: { title: "Деплой зламаний?", body: "Можу подивитися repo, логи Vercel і налаштування домену.", bullets: ["Build падає", "Бракує env vars", "Домен дивиться не туди"] },
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
      en: { title: "Need marketing order?", body: "I can set up GSC, GBP and a simple content plan before you film.", bullets: ["GSC setup", "GBP verification", "3-clip script"] },
      pl: { title: "Potrzebujesz pomocy z marketingiem?", body: "Ustawię GSC, GBP i prosty plan contentu przed nagrywaniem.", bullets: ["Setup GSC", "Weryfikacja GBP", "Scenariusz 3 klipów"] },
      ru: { title: "Нужен порядок в маркетинге?", body: "Настрою GSC, GBP и простой контент-план до съёмки.", bullets: ["Настройка GSC", "Верификация GBP", "Сценарий 3 роликов"] },
      uk: { title: "Потрібен порядок у маркетингу?", body: "Налаштую GSC, GBP і простий контент-план до зйомки.", bullets: ["Налаштування GSC", "Верифікація GBP", "Сценарій 3 роликів"] },
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
  },
];

export const guideSlugs = guides.map((guide) => guide.slug);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
