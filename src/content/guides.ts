import type { Locale } from "@/i18n/routing";

export type GuideSlug =
  | "make-website-yourself"
  | "cursor-github-vercel"
  | "cursor-prompts"
  | "ai-website-mistakes"
  | "when-to-hire";

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
];

export const guideSlugs = guides.map((guide) => guide.slug);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
