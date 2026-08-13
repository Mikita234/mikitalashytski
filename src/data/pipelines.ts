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

export interface PipelineSeoArticle {
  label: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
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
  seoArticle?: Partial<Record<Locale, PipelineSeoArticle>>;
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
      "Как создать сайт-портфолио, который приводит клиентов?",
      "Сайт-портфоліо",
    ),
    description: L(
      "Show your work, not your stack. Fast static site with case studies.",
      "Pokaż prace, nie stack. Szybka statyczna strona z case studies.",
      "Практический план портфолио: сильные кейсы, понятная роль, доказательства результата, быстрый интерфейс и удобный путь к контакту.",
      "Показати роботи, а не stack. Швидкий статичний сайт з кейсами.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Сайт-портфолио превращает лучшие работы специалиста в понятные доказательства опыта. Сильная структура показывает задачу клиента, роль автора, процесс, измеримый результат и следующий шаг. Посетитель быстро оценивает релевантность, открывает подробный кейс и связывается через заметную форму, email или удобный мессенджер прямо сейчас.",
        sections: [
          {
            heading: "Какие проекты выбрать для портфолио?",
            paragraphs: [
              "Выберите от трёх до шести работ, которые соответствуют типу будущих заказов. Для каждого проекта соберите исходную задачу, ограничения, личную роль, ключевые решения, изображения и проверяемый итог. Разные кейсы могут показывать стратегию, дизайн, разработку и поддержку. Первый экран отдайте самому релевантному результату. Короткая подпись объясняет сферу, выполненную работу и пользу для клиента ещё до открытия подробной страницы.",
            ],
          },
          {
            heading: "Как оформить убедительный кейс?",
            paragraphs: [
              "Начните с прямого резюме: кто клиент, какая задача решалась и какой результат получен. Затем покажите исходную ситуацию, ход работы, принятые решения и финальный продукт. Подкрепите выводы цифрами, отзывом, ссылкой или конкретным изменением процесса. Изображения снабдите подписями, чтобы читатель понимал их смысл. Завершите кейс подходящим призывом: обсудить похожую задачу, запросить оценку или посмотреть связанный проект.",
            ],
          },
          {
            heading: "Как построить главную страницу?",
            paragraphs: [
              "Первый экран сообщает специализацию, аудиторию и ценность работы одним предложением. Следом расположите избранные кейсы, перечень услуг, короткий рабочий процесс, факты доверия и контактный блок. Навигация ведёт к работам, информации об авторе и способу связи. Карточка проекта показывает обложку, категорию, роль и результат. Такой порядок отвечает на основные вопросы посетителя и сохраняет быстрый путь к заявке на каждом экране.",
            ],
          },
          {
            heading: "Как подготовить портфолио для поиска и AI-ответов?",
            paragraphs: [
              "Создайте отдельный адрес для каждого кейса и уникальные title, description и заголовок. В тексте естественно укажите услугу, отрасль, город работы и использованные компетенции. Добавьте данные автора, корректные даты, изображения с описательными alt и структурированные данные Person или Organization. Вопросительные подзаголовки и короткие прямые ответы помогают поисковой системе точно извлекать смысл страницы. Внутренние ссылки объединяют похожие кейсы и услуги.",
            ],
          },
          {
            heading: "Как проверить портфолио перед публикацией?",
            paragraphs: [
              "Откройте сайт на телефоне и компьютере, проверьте скорость загрузки изображений, читаемость текста и работу всех ссылок. Отправьте тестовое сообщение через каждый контактный канал. Попросите человека из целевой аудитории за минуту назвать вашу специализацию, сильнейший результат и способ связи. Подключите аналитику и Search Console. Через месяц оцените просмотры кейсов, переходы к контакту и запросы, которые уже приводят посетителей.",
            ],
          },
        ],
      },
    },
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
        title: L("Gather cases", "Zbierz case'y", "Как собрать сильные кейсы?", "Зібрати кейси"),
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
        title: L("Scaffold Astro", "Scaffold Astro", "Как подготовить основу сайта?", "Scaffold Astro"),
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
      {
        code: "03",
        title: L("Write case pages", "Napisz case pages", "Как оформить страницы кейсов?", "Написати сторінки кейсів"),
        body: L(
          "Turn each project into a short case: problem, role, process, result, link.",
          "Zamień każdy projekt w krótki case: problem, rola, proces, wynik, link.",
          "Преврати каждый проект в короткий кейс: проблема, роль, процесс, результат, ссылка.",
          "Перетвори кожен проєкт на короткий кейс: проблема, роль, процес, результат, посилання.",
        ),
        doneWhen: L(
          "Every selected project has a case page or expandable section",
          "Każdy wybrany projekt ma stronę case albo rozwijaną sekcję",
          "У каждого выбранного проекта есть страница кейса или раскрываемый блок",
          "У кожного вибраного проєкту є сторінка кейсу або розкривний блок",
        ),
      },
      {
        code: "04",
        title: L("Launch contact path", "Uruchom kontakt", "Как запустить путь к контакту?", "Запустити шлях контакту"),
        body: L(
          "Connect email or booking, add social proof, deploy, check mobile and analytics.",
          "Podłącz email lub booking, dodaj social proof, deploy, mobile i analitykę.",
          "Подключи email или booking, добавь proof, деплой, проверь mobile и аналитику.",
          "Підключи email або booking, додай proof, deploy, перевір mobile та аналітику.",
        ),
        doneWhen: L(
          "A visitor can contact you from home and every case page",
          "Gość może skontaktować się ze strony głównej i każdego case",
          "Посетитель может связаться с главной и с каждого кейса",
          "Відвідувач може зв'язатися з головної та кожного кейсу",
        ),
      },
    ]),
    risks: LA(
      ["Too many animations", "Fake project copy", "No real contact path"],
      ["Za dużo animacji", "Sztuczny copy projektów", "Brak realnego kontaktu"],
      ["Ограничьте анимации полезными акцентами", "Используйте реальные описания", "Добавьте заметный контакт"],
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
      "Как создать сайт услуг для локального бизнеса?",
      "Сайт послуг (сантехнік, юрист, кафе)",
    ),
    description: L(
      "Default for non-tech: Astro + Cloudflare + Markdown. Not Next.js.",
      "Domyślnie dla nietechnicznych: Astro + Cloudflare + Markdown. Nie Next.js.",
      "Практический план сайта услуг: сильный оффер, локальное SEO, доверие, удобная заявка и измеримая конверсия.",
      "За замовчуванням для нетech: Astro + Cloudflare + Markdown. Не Next.js.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Сайт услуг помогает локальному бизнесу объяснить предложение, подтвердить доверие и получать обращения из поиска, карт и рекомендаций. Рабочая структура включает главную страницу, отдельные услуги, географию работы, принцип расчёта цены, реальные доказательства, полезный FAQ и удобный контакт сразу на каждом устройстве.",
        sections: [
          {
            heading: "Как сформулировать предложение на первом экране?",
            paragraphs: [
              "Назовите конкретную услугу, город или район, главное преимущество и следующий шаг. Формула звучит просто: что вы делаете, для кого, где работаете и как быстро отвечаете. Рядом разместите телефон, кнопку заявки и реальную фотографию команды либо результата. Укажите ориентир цены, срок выезда или формат консультации. Посетитель за несколько секунд понимает соответствие своей задаче и выбирает удобный способ обращения.",
            ],
          },
          {
            heading: "Какие страницы нужны сайту услуг?",
            paragraphs: [
              "Создайте главную, контакты и отдельную страницу для каждой приоритетной услуги. Для нескольких городов добавляйте географические страницы с уникальными примерами, условиями выезда и локальными деталями. Страница услуги раскрывает результат, этапы, сроки, цену или принцип расчёта, гарантии, частые вопросы и подходящий кейс. Такая архитектура даёт поиску точный ответ на запрос и ведёт человека к релевантной форме.",
            ],
          },
          {
            heading: "Какие доказательства повышают доверие?",
            paragraphs: [
              "Используйте реальные фотографии, имена специалистов, лицензии, сертификаты, отзывы с источником и примеры выполненных задач. Покажите адрес, часы работы, юридические данные и понятные правила оплаты. Кейс из трёх частей — ситуация, выполненная работа, результат — работает сильнее общего обещания. Для отзывов укажите услугу и контекст. Актуальные контакты и единые сведения на сайте и картах укрепляют локальные сигналы.",
            ],
          },
          {
            heading: "Как настроить локальное SEO?",
            paragraphs: [
              "Заполните профиль компании в картах, выберите точную категорию и поддерживайте одинаковое название, адрес и телефон во всех каталогах. Добавьте уникальные title, description, H1, sitemap и структурированные данные LocalBusiness. Текст страницы отвечает на вопросы о цене, сроке, районе обслуживания и подготовке клиента. Подключите Search Console, отправьте sitemap и следите за запросами, показами, позициями и переходами на страницу контакта.",
            ],
          },
          {
            heading: "Как проверить путь заявки?",
            paragraphs: [
              "Отправьте тестовую форму с телефона, позвоните по кликабельному номеру и проверьте доставку уведомления владельцу. Поля формы запрашивают имя, контакт и краткое описание задачи. После отправки человек видит подтверждение и ожидаемое время ответа. Аналитика фиксирует звонок, отправку формы и переход в мессенджер. Еженедельный просмотр источников и качества обращений показывает страницы, которые заслуживают дальнейшего развития.",
            ],
          },
        ],
      },
    },
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
        title: L("Write the offer", "Napisz ofertę", "Как написать сильный оффер?", "Написати офер"),
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
        title: L("Astro + deploy", "Astro + deploy", "Как опубликовать сайт?", "Astro + deploy"),
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
      {
        code: "03",
        title: L("Local SEO base", "Baza lokalnego SEO", "Как заложить базу локального SEO?", "База локального SEO"),
        body: L(
          "Add service pages, city terms, metadata, sitemap, robots and Search Console.",
          "Dodaj strony usług, miasto, metadata, sitemap, robots i Search Console.",
          "Добавь страницы услуг, город, metadata, sitemap, robots и Search Console.",
          "Додай сторінки послуг, місто, metadata, sitemap, robots і Search Console.",
        ),
        doneWhen: L(
          "Home and service pages have unique titles and are submitted to GSC",
          "Home i usługi mają unikalne title i są wysłane do GSC",
          "Главная и услуги имеют уникальные title и отправлены в GSC",
          "Головна і послуги мають унікальні title і надіслані в GSC",
        ),
      },
      {
        code: "04",
        title: L("Trust and conversion", "Zaufanie i konwersja", "Как усилить доверие и конверсию?", "Довіра і конверсія"),
        body: L(
          "Add reviews, real photos, FAQs, opening hours and test the lead path.",
          "Dodaj opinie, realne zdjęcia, FAQ, godziny i przetestuj lead path.",
          "Добавь отзывы, реальные фото, FAQ, часы работы и проверь путь заявки.",
          "Додай відгуки, реальні фото, FAQ, години роботи і перевір шлях заявки.",
        ),
        doneWhen: L(
          "Test lead reaches the owner and the page answers the top objections",
          "Testowy lead trafia do właściciela, a strona zamyka główne obiekcje",
          "Тестовая заявка доходит владельцу, а страница закрывает главные возражения",
          "Тестова заявка доходить власнику, а сторінка закриває головні заперечення",
        ),
      },
    ]),
    risks: LA(
      ["Generic AI copy", "No form delivery", "Skipping Search Console"],
      ["Generyczny copy AI", "Brak dostarczenia formularza", "Pominięcie Search Console"],
      ["Замените общий AI-текст фактами", "Проверьте доставку формы", "Подключите Search Console"],
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
    title: L("Content / blog site", "Strona content / blog", "Как создать контент-сайт для устойчивого SEO?", "Контент-сайт / блог"),
    description: L(
      "Articles, guides, SEO content. Astro + Markdown default.",
      "Artykuły, poradniki, SEO. Domyślnie Astro + Markdown.",
      "Практический план контент-сайта: карта тем, полезные статьи, внутренняя перелинковка, данные автора, schema и регулярное обновление.",
      "Статті, гайди, SEO-контент. За замовчуванням Astro + Markdown.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Контент-сайт привлекает целевую аудиторию через полезные ответы на конкретные поисковые вопросы. Устойчивая система объединяет карту тем, экспертные материалы, понятную структуру, внутренние ссылки, данные автора и регулярное обновление. Каждая страница решает одну задачу читателя и ведёт к логичному следующему действию сегодня.",
        sections: [
          {
            heading: "Как составить карту тем для сайта?",
            paragraphs: [
              "Начните с продукта, аудитории и вопросов, которые возникают до покупки, во время выбора и после получения результата. Объедините близкие запросы в кластеры и назначьте каждому кластеру одну основную страницу. Таблица содержит тему, поисковое намерение, формат ответа, целевой запрос, связанные материалы и бизнес-действие. Приоритет получают темы с высокой полезностью для клиента и прямой связью с услугой, экспертизой или продуктом компании.",
            ],
          },
          {
            heading: "Как написать полезную SEO-статью?",
            paragraphs: [
              "Дайте прямой ответ в первых сорока словах, затем раскройте детали вопросительными заголовками. Добавьте последовательность действий, критерии выбора, реальные примеры, ограничения, сроки и проверяемые источники. Один раздел отвечает на один вопрос. Короткие абзацы, списки и таблицы помогают быстро найти решение. Финальный блок предлагает следующий материал, инструмент, консультацию или другой шаг, который естественно продолжает задачу читателя.",
            ],
          },
          {
            heading: "Как связать статьи в тематический кластер?",
            paragraphs: [
              "Опорная страница объясняет тему целиком и ведёт к подробным материалам. Поддерживающие статьи ссылаются на опорную страницу и друг на друга там, где связь помогает читателю. Текст ссылки описывает содержание следующей страницы. Категории отражают реальные направления знаний, хлебные крошки показывают положение материала, а блок связанных статей продолжает путь. Такая структура распределяет авторитет и помогает поисковому роботу понимать глубину темы.",
            ],
          },
          {
            heading: "Какие сигналы подтверждают экспертность?",
            paragraphs: [
              "Укажите автора, опыт, дату публикации и дату содержательного обновления. Ссылайтесь на первичные документы, исследования и официальные данные. Добавляйте собственные наблюдения, снимки интерфейса, расчёты и примеры. Разметка Article, BreadcrumbList и Organization делает сущности понятнее машине. Редакционная политика объясняет процесс проверки. Страница автора объединяет биографию, область компетенций, опубликованные материалы и доступный способ профессионального контакта.",
            ],
          },
          {
            heading: "Как обновлять контент по данным Search Console?",
            paragraphs: [
              "Каждый месяц изучайте запросы, показы, клики, среднюю позицию и страницы с растущим спросом. Расширяйте материал вопросами, по которым он уже получает показы, уточняйте заголовок и добавляйте внутренние ссылки с релевантных статей. Проверяйте факты, даты, цены и интерфейсы сервисов. Журнал обновлений фиксирует причину и результат изменения. Через четыре–восемь недель сравните показатели и выберите следующий приоритет.",
            ],
          },
        ],
      },
    },
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
      ["WordPress с планом поддержки", "Автопубликация AI после редакторской проверки"],
      ["WordPress без плану підтримки", "Автопублікація AI без review"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Topic map", "Mapa tematów", "Как составить карту тем?", "Карта тем"),
        body: L("List pillars + 10 article titles with search intent.", "Lista filarów + 10 tytułów z intencją wyszukiwania.", "Список столпов + 10 заголовков с поисковым intent.", "Список стовпів + 10 заголовків з search intent."),
        doneWhen: L("Spreadsheet or markdown file exists in repo", "Arkusz lub plik markdown jest w repo", "Таблица или md-файл есть в repo", "Таблиця або md-файл є в repo"),
      },
      {
        code: "02",
        title: L("Content structure", "Struktura treści", "Как построить структуру контента?", "Структура контенту"),
        body: L("Create categories, author page, article template and internal linking rules.", "Kategorie, strona autora, szablon artykułu i zasady linkowania.", "Создай категории, страницу автора, шаблон статьи и правила перелинковки.", "Створи категорії, сторінку автора, шаблон статті і правила перелінковки."),
        doneWhen: L("First article can be published from Markdown with schema", "Pierwszy artykuł publikuje się z Markdown ze schema", "Первая статья публикуется из Markdown со schema", "Перша стаття публікується з Markdown зі schema"),
      },
      {
        code: "03",
        title: L("Publish first cluster", "Opublikuj pierwszy klaster", "Как опубликовать первый кластер?", "Опублікувати перший кластер"),
        body: L("Ship one pillar page plus 3–5 supporting articles with clear search intent.", "Wypuść pillar page + 3–5 artykułów wspierających.", "Выпусти pillar page и 3–5 supporting статей под intent.", "Випусти pillar page і 3–5 supporting статей під intent."),
        doneWhen: L("Cluster is live, linked from navigation and in sitemap", "Klaster live, w nawigacji i sitemap", "Кластер live, в навигации и sitemap", "Кластер live, у навігації і sitemap"),
      },
      {
        code: "04",
        title: L("Measure and refresh", "Mierz i odświeżaj", "Как измерять и обновлять результат?", "Вимірювати й оновлювати"),
        body: L("Connect GSC, track impressions, update weak pages and add links from new posts.", "Podłącz GSC, śledź impressions, popraw słabe strony i linkuj nowe posty.", "Подключи GSC, смотри impressions, обновляй слабые страницы и добавляй ссылки.", "Підключи GSC, дивись impressions, оновлюй слабкі сторінки і додавай links."),
        doneWhen: L("First 30-day review has actions, not just traffic numbers", "Pierwszy 30-dniowy review ma akcje, nie tylko liczby", "Первый 30-дневный review содержит действия и целевые цифры", "Перший 30-денний review має дії, не лише цифри"),
      },
    ]),
    risks: LA(
      ["Thin AI articles", "No internal linking", "Duplicate titles"],
      ["Cienkie artykuły AI", "Brak linków wewnętrznych", "Duplikaty tytułów"],
      ["Дополните AI-статьи экспертизой", "Усильте перелинковку", "Сделайте заголовки уникальными"],
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
    title: L("E-commerce shop", "Sklep e-commerce", "Как запустить интернет-магазин с удобной покупкой?", "Інтернет-магазин"),
    description: L(
      "Shopify default for non-devs. Custom cart only when revenue justifies it.",
      "Shopify domyślnie dla nietech. Custom cart tylko gdy revenue uzasadnia.",
      "Практический план магазина: каталог, оплата, доставка, товарное SEO, аналитика и проверенный путь заказа.",
      "Shopify за замовчуванням. Свій кошик — коли revenue виправдовує.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Интернет-магазин соединяет каталог, оплату, доставку и обработку заказа в один понятный путь. Надёжный запуск начинается с чистых товарных данных, готовых правил бизнеса и тестовой покупки. Клиент быстро находит продукт, понимает итоговую стоимость, оформляет заказ и получает точные уведомления о статусе.",
        sections: [
          {
            heading: "Как выбрать платформу для интернет-магазина?",
            paragraphs: [
              "Оцените количество товаров, варианты оплаты, страны доставки, языки, интеграции и людей, которые будут управлять каталогом. Shopify ускоряет запуск стандартной торговли и даёт зрелую административную панель. Индивидуальная разработка подходит для особой логики цен, сложного конфигуратора или уникального процесса заказа. Решение принимайте по полной стоимости владения: лицензии, разработка, приложения, поддержка, обновления и время команды.",
            ],
          },
          {
            heading: "Какие данные подготовить для каталога?",
            paragraphs: [
              "Соберите таблицу с названием, SKU, ценой, остатком, категорией, вариантами, размерами, весом, фотографиями и описанием. Зафиксируйте правила доставки, возврата, налогов и скидок. Единые названия характеристик создают удобные фильтры. Фотографии показывают продукт с разных сторон и в реальном масштабе. Описание отвечает на вопросы о назначении, материале, совместимости, комплектации и уходе. Ответственный сотрудник подтверждает точность каждой записи.",
            ],
          },
          {
            heading: "Как проверить корзину и оплату?",
            paragraphs: [
              "Проведите реальные тестовые заказы для разных товаров, адресов, способов доставки, купонов и платёжных методов. Сверьте сумму на карточке, в корзине, платёжной форме, письме и административной панели. Проверьте уменьшение остатка, отмену, возврат и повторную оплату. Клиент получает подтверждение с составом заказа и сроком обработки. Владелец видит уведомление и может выполнить заказ по документированной инструкции.",
            ],
          },
          {
            heading: "Как подготовить товарные страницы для SEO?",
            paragraphs: [
              "Создайте уникальные адреса, title, description и H1 для категорий и продуктов. Категория объясняет выбор и содержит полезные фильтры, а карточка раскрывает характеристики, наличие, цену, доставку, возврат и отзывы. Разметка Product, Offer и BreadcrumbList помогает поиску читать данные. Канонические ссылки упорядочивают варианты фильтрации. Быстрые изображения, описательные alt и внутренние ссылки улучшают доступность и обнаружение ассортимента.",
            ],
          },
          {
            heading: "Какие показатели отслеживать после запуска?",
            paragraphs: [
              "Настройте события просмотра товара, добавления в корзину, начала оформления, оплаты и возврата. Смотрите конверсию по устройствам, источникам, категориям и шагам checkout. Отдельно контролируйте отклонённые платежи, скорость обработки, долю возвратов и остатки. Еженедельный отчёт связывает проблему с действием: улучшить карточку, упростить поле, уточнить доставку или вернуть популярный товар. Изменения запускайте небольшими проверяемыми итерациями.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Physical products", "Digital downloads", "Marketplace sync later"],
      ["Produkty fizyczne", "Pliki cyfrowe", "Sync marketplace później"],
      ["Физические товары", "Цифровые файлы", "Синхрон с маркетплейсами позже"],
      ["Фізичні товари", "Цифрові файли", "Синхрон з маркетплейсами пізніше"],
    ),
    avoidIf: LA(
      ["Only 3 products and no shipping", "Need heavy custom checkout logic on day 1"],
      ["Tylko 3 produkty bez wysyłki", "Ciężki custom checkout od dnia 1"],
      ["Каталог из трёх товаров с простой выдачей", "Сложный checkout с первого дня"],
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
      ["Своя корзина Next.js на старте", "WooCommerce с регулярными обновлениями"],
      ["Свій кошик Next.js на старті", "WooCommerce без оновлень"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Product data", "Dane produktów", "Как подготовить данные товаров?", "Дані товарів"),
        body: L("CSV or sheet: name, price, SKU, image URL, description.", "CSV: nazwa, cena, SKU, obraz, opis.", "CSV: название, цена, SKU, фото, описание.", "CSV: назва, ціна, SKU, фото, опис."),
        doneWhen: L("10+ products imported to Shopify", "10+ produktów w Shopify", "10+ товаров в Shopify", "10+ товарів у Shopify"),
      },
      {
        code: "02",
        title: L("Store setup", "Konfiguracja sklepu", "Как настроить магазин?", "Налаштування магазину"),
        body: L("Configure theme, collections, shipping, taxes, payments and legal pages.", "Theme, kolekcje, wysyłka, podatki, płatności i strony prawne.", "Настрой theme, коллекции, доставку, налоги, оплату и legal pages.", "Налаштуй theme, колекції, доставку, податки, оплату і legal pages."),
        doneWhen: L("Test product can be added to cart with correct shipping", "Produkt testowy trafia do koszyka z poprawną wysyłką", "Тестовый товар добавляется в корзину с правильной доставкой", "Тестовий товар додається в кошик з правильною доставкою"),
      },
      {
        code: "03",
        title: L("Checkout test", "Test checkoutu", "Как проверить checkout?", "Тест checkout"),
        body: L("Run a real test order, verify emails, payment capture, inventory and refund path.", "Zrób testowe zamówienie, maile, płatność, stan i refund.", "Сделай тестовый заказ: email, оплата, остатки и refund.", "Зроби тестове замовлення: email, оплата, залишки і refund."),
        doneWhen: L("Owner receives order notification and can fulfill it", "Właściciel dostaje zamówienie i może je obsłużyć", "Владелец получает заказ и может его обработать", "Власник отримує замовлення і може його обробити"),
      },
      {
        code: "04",
        title: L("Launch traffic", "Ruch po launchu", "Как запустить целевой трафик?", "Трафік після запуску"),
        body: L("Connect analytics, product SEO, merchant feeds or first ad campaign only after checkout works.", "Analityka, SEO produktów, feedy lub pierwsza reklama dopiero po checkout.", "Подключи аналитику, SEO товаров, feeds или рекламу только после рабочего checkout.", "Підключи аналітику, SEO товарів, feeds або рекламу лише після checkout."),
        doneWhen: L("Traffic source points to live products with working checkout", "Źródło ruchu prowadzi do live produktów z działającym checkout", "Источник трафика ведёт на live товары с рабочим checkout", "Джерело трафіку веде на live товари з робочим checkout"),
      },
    ]),
    risks: LA(
      ["Wrong tax/shipping", "Weak product copy", "No order notification test"],
      ["Złe podatki/wysyłka", "Słaby opis produktów", "Brak testu zamówienia"],
      ["Проверьте налоги и доставку", "Усильте описания", "Проведите тестовый заказ"],
      ["Невірні податки/доставка", "Слабкі описи", "Не тестували замовлення"],
    ),
    rescueTriggers: LA(
      ["Checkout broken", "Payments not capturing", "Feed sync errors"],
      ["Checkout zepsuty", "Płatności nie przechodzą", "Błędy feed sync"],
      ["Checkout требует восстановления", "Платёж требует диагностики", "Feed sync сообщает ошибки"],
      ["Checkout зламаний", "Оплата не проходить", "Помилки feed sync"],
    ),
  },
  {
    id: "events-ticketing",
    tag: "PIPE-05",
    title: L("Events & ticketing", "Wydarzenia i bilety", "Как запустить продажу билетов на событие?", "Події та квитки"),
    description: L(
      "Next.js + Supabase + Stripe when you sell tickets or seats.",
      "Next.js + Supabase + Stripe gdy sprzedajesz bilety lub miejsca.",
      "Практический план билетного сервиса: лимиты мест, надёжная оплата, доставка билетов, QR check-in и управление гостями.",
      "Next.js + Supabase + Stripe коли продаєте квитки або місця.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Сервис продажи билетов управляет местами, оплатой, выдачей билета и входом гостей как единым процессом. Успешный запуск опирается на точную модель события, защищённые платежи, уникальные записи заказов и проверенный check-in. Организатор видит продажи, а покупатель получает ясные инструкции в нужный момент.",
        sections: [
          {
            heading: "Какие данные описывают событие и билет?",
            paragraphs: [
              "Зафиксируйте название, площадку, часовой пояс, время открытия дверей, начало и окончание события. Для каждого тарифа укажите цену, валюту, доступное количество, период продажи, льготы и правила возврата. Модель заказа хранит покупателя, платёж, количество, статус и уникальный идентификатор билета. Отдельный лимит для каждого тарифа помогает точно контролировать продажи и формировать понятный отчёт организатора.",
            ],
          },
          {
            heading: "Как защитить оплату и количество мест?",
            paragraphs: [
              "Платёжная страница создаёт заказ с временной бронью, а подтверждённый webhook переводит его в оплаченный статус. Уникальный ключ события делает повторную доставку webhook безопасной. Транзакция проверяет остаток перед выпуском билетов и сохраняет журнал изменений. Время брони возвращает места в продажу после завершения окна оплаты. Тесты охватывают одновременные покупки последнего места, повторный webhook, отмену и возврат.",
            ],
          },
          {
            heading: "Как доставить билет покупателю?",
            paragraphs: [
              "После подтверждения оплаты система создаёт уникальный QR-код и отправляет письмо с названием события, адресом, датой, временем, составом заказа и контактом поддержки. Страница билета удобно открывается на телефоне и сохраняется в кошелёк либо PDF. Повторная отправка доступна из профиля или панели поддержки. Шаблон письма тестируется в популярных почтовых клиентах, а статус доставки сохраняется рядом с заказом.",
            ],
          },
          {
            heading: "Как организовать check-in в день события?",
            paragraphs: [
              "Команда входа получает мобильный сканер, актуальный список гостей и роли доступа. Сканирование показывает имя, тариф и статус билета, затем фиксирует время входа. Повторное предъявление сразу отображает предыдущую проверку. Локальная выгрузка списка и запасной канал синхронизации поддерживают работу при слабой связи. Перед открытием дверей проведите репетицию с валидным, возвращённым и уже использованным билетом.",
            ],
          },
          {
            heading: "Как продвигать страницу события?",
            paragraphs: [
              "Страница отвечает на вопросы о программе, спикерах, площадке, доступности, правилах возврата и составе каждого тарифа. Уникальные title, description, Event schema, изображения для социальных сетей и корректный часовой пояс помогают поиску показывать точные данные. Аналитика фиксирует просмотр, выбор тарифа, начало оплаты и покупку. Организатор сравнивает источники, конверсию и темп продаж, чтобы планировать коммуникации до события.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Concerts", "Workshops", "Limited seats", "QR check-in"],
      ["Koncerty", "Warsztaty", "Limit miejsc", "QR check-in"],
      ["Концерты", "Воркшопы", "Лимит мест", "QR check-in"],
      ["Концерти", "Воркшопи", "Ліміт місць", "QR check-in"],
    ),
    avoidIf: LA(
      ["Free RSVP only", "No payment needed"],
      ["Tylko darmowe RSVP", "Bez płatności"],
      ["Бесплатная регистрация через RSVP", "Бронирование через простую форму"],
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
        title: L("Ticket model", "Model biletów", "Как описать модель билетов?", "Модель квитків"),
        body: L("Define tiers, capacity, sale windows in a brief doc.", "Zdefiniuj poziomy, limit, okna sprzedaży w briefie.", "Опиши типы, лимит, окна продаж в brief.", "Опиши типи, ліміт, вікна продажу в brief."),
        doneWhen: L("Brief approved before any code", "Brief zatwierdzony przed kodem", "Brief согласован до кода", "Brief погоджений до коду"),
      },
      {
        code: "02",
        title: L("Checkout and webhooks", "Checkout i webhooki", "Как связать checkout и webhook?", "Checkout і webhook"),
        body: L("Build Stripe checkout, webhook handling, ticket records and idempotency rules.", "Stripe checkout, webhooki, rekordy biletów i idempotencja.", "Собери Stripe checkout, webhook, записи билетов и idempotency.", "Збери Stripe checkout, webhook, записи квитків і idempotency."),
        doneWhen: L("Test purchase creates exactly one paid ticket", "Testowy zakup tworzy dokładnie jeden bilet", "Тестовая покупка создаёт ровно один оплаченный билет", "Тестова покупка створює рівно один оплачений квиток"),
      },
      {
        code: "03",
        title: L("Ticket delivery", "Dostawa biletów", "Как доставить билет покупателю?", "Доставка квитків"),
        body: L("Send email tickets, QR codes, receipt copy and support contact.", "Wyślij bilety mailem, QR, receipt copy i kontakt support.", "Отправь билеты email, QR, receipt copy и контакт поддержки.", "Надішли квитки email, QR, receipt copy і контакт підтримки."),
        doneWhen: L("Buyer receives ticket and can open it on phone", "Kupujący dostaje bilet i otwiera go na telefonie", "Покупатель получает билет и открывает на телефоне", "Покупець отримує квиток і відкриває на телефоні"),
      },
      {
        code: "04",
        title: L("Admin and check-in", "Admin i check-in", "Как подготовить админку и check-in?", "Адмінка і check-in"),
        body: L("Add attendee list, export, QR scan, refund notes and event-day fallback.", "Lista uczestników, eksport, QR scan, refund notes i fallback.", "Добавь список гостей, export, QR scan, refund notes и fallback.", "Додай список гостей, export, QR scan, refund notes і fallback."),
        doneWhen: L("Door team can validate tickets without developer help", "Obsługa wejścia sprawdza bilety bez developera", "Команда входа самостоятельно проверяет билеты", "Команда входу перевіряє квитки без розробника"),
      },
    ]),
    risks: LA(
      ["Overselling seats", "Webhook failures", "No test purchase"],
      ["Overselling miejsc", "Błędy webhook", "Brak testowego zakupu"],
      ["Контролируйте лимит мест", "Настройте повтор webhook", "Проведите тестовую покупку"],
      ["Перепродаж місць", "Падіння webhook", "Немає тестової покупки"],
    ),
    rescueTriggers: LA(
      ["Double charges", "Email tickets not sending", "Admin can't export list"],
      ["Podwójne obciążenia", "Maile z biletami nie idą", "Admin nie eksportuje listy"],
      ["Платёж показывает двойное списание", "Доставка билетов требует проверки", "Экспорт списка требует восстановления"],
      ["Подвійні списання", "Квитки не приходять на email", "Адмін не експортує список"],
    ),
  },
  {
    id: "saas",
    tag: "PIPE-06",
    title: L("SaaS product", "Produkt SaaS", "Как запустить SaaS-продукт с подпиской?", "SaaS-продукт"),
    description: L(
      "Next.js + Vercel + auth + billing. Only when recurring revenue is the goal.",
      "Next.js + Vercel + auth + billing. Tylko gdy celem jest recurring revenue.",
      "Практический план SaaS: узкий MVP, модель данных, роли, подписка, onboarding, наблюдаемость и безопасный доступ.",
      "Next.js + Vercel + auth + billing. Лише якщо ціль — підписочний revenue.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "SaaS-продукт превращает повторяемую задачу клиента в оплачиваемый цифровой процесс. Сильный MVP решает один ценный сценарий, ясно разделяет роли и связывает подписку с доступом. Команда измеряет активацию, успешное выполнение задачи, удержание и выручку, постепенно улучшая продукт еженедельно по реальному поведению пользователей.",
        sections: [
          {
            heading: "Как определить границы SaaS MVP?",
            paragraphs: [
              "Опишите пользователя, регулярную проблему и результат, за который он готов платить. Первый релиз включает один основной workflow, одну понятную роль и минимальный набор интеграций. Одностраничный документ фиксирует входные данные, шаги, итог, тариф и критерий успеха. Каждая функция связывается с прохождением платного сценария. Приоритет получает короткий путь от регистрации до первой ощутимой пользы в течение одной сессии.",
            ],
          },
          {
            heading: "Как спроектировать пользователей, организации и доступ?",
            paragraphs: [
              "Модель данных разделяет пользователя, организацию, членство, роль и ресурсы продукта. Правила доступа проверяются на сервере при каждом чтении и изменении. Владелец приглашает участников, меняет роли и видит активные сессии. Миграции базы проходят через staging и сохраняются в репозитории. Автоматические тесты подтверждают изоляцию организаций, доступ администратора и ограничения обычного участника на критических операциях.",
            ],
          },
          {
            heading: "Как связать подписку с функциями продукта?",
            paragraphs: [
              "Платёжный провайдер хранит клиента, тариф и подписку, а приложение сохраняет синхронизированный статус. Webhook обрабатывается идемпотентно и записывает каждое событие. Доступ учитывает активный тариф, пробный период, задержку оплаты, повышение и отмену. Клиентский портал позволяет обновить карту, скачать счёт и управлять подпиской. Тестовый сценарий проходит регистрацию, оплату, смену тарифа, просрочку и восстановление доступа.",
            ],
          },
          {
            heading: "Как провести пользователя до первой ценности?",
            paragraphs: [
              "Onboarding задаёт один вопрос о цели, помогает создать первый объект и ведёт к завершению основного workflow. Пустые состояния содержат пример и ясное действие. Прогресс сохраняется между сессиями, а письмо возвращает пользователя к конкретному шагу. Поддержка видит контекст аккаунта и историю ключевых событий. Интервью с первыми клиентами объясняют причины остановки и подсказывают точечные улучшения интерфейса.",
            ],
          },
          {
            heading: "Какие метрики показывают качество SaaS?",
            paragraphs: [
              "Отслеживайте регистрацию, активацию, завершение ценного действия, повторное использование, переход на оплату, отток и ежемесячную выручку. Технические метрики включают ошибки, задержку запросов, успешность фоновых задач и webhooks. Один dashboard объединяет продуктовые и эксплуатационные сигналы. Еженедельный разбор выбирает узкое место, назначает владельца и формулирует проверяемое изменение. Журнал решений сохраняет контекст для следующих итераций.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Subscription tool", "B2B dashboard", "Multi-tenant app"],
      ["Narzędzie subskrypcyjne", "Dashboard B2B", "Aplikacja multi-tenant"],
      ["Подписочный инструмент", "B2B дашборд", "Multi-tenant приложение"],
      ["Підписочний інструмент", "B2B dashboard", "Multi-tenant застосунок"],
    ),
    avoidIf: LA(
      ["Landing page only", "No defined pricing"],
      ["Tylko landing", "Brak cennika"],
      ["Лендинг для проверки спроса", "Подготовленная тарифная модель"],
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
      ["Astro для SaaS с авторизацией", "Развёртывание через staging"],
      ["Astro для SaaS з авторизацією", "Немає staging"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("MVP scope", "Zakres MVP", "Как ограничить scope MVP?", "Scope MVP"),
        body: L("One paid workflow, one role, one integration.", "Jeden płatny workflow, jedna rola, jedna integracja.", "Один платный workflow, одна роль, одна интеграция.", "Один платний workflow, одна роль, одна інтеграція."),
        doneWhen: L("Written MVP fits one page", "MVP mieści się na jednej stronie", "MVP помещается на одной странице", "MVP вміщується на одній сторінці"),
      },
      {
        code: "02",
        title: L("Auth and data model", "Auth i model danych", "Как спроектировать auth и данные?", "Auth і модель даних"),
        body: L("Define users, orgs, roles, core tables and access rules before screens.", "Użytkownicy, orgs, role, tabele i dostęp przed ekranami.", "Опиши users, orgs, roles, таблицы и доступ до экранов.", "Опиши users, orgs, roles, таблиці й доступ до екранів."),
        doneWhen: L("A user can sign in and see only their own workspace", "User loguje się i widzi tylko swój workspace", "Пользователь входит и видит только свой workspace", "Користувач входить і бачить лише свій workspace"),
      },
      {
        code: "03",
        title: L("Billing path", "Ścieżka billing", "Как настроить путь billing?", "Шлях billing"),
        body: L("Connect Stripe subscriptions, customer portal, webhook sync and plan gates.", "Subskrypcje Stripe, portal klienta, webhook sync i plan gates.", "Подключи Stripe subscriptions, portal, webhook sync и plan gates.", "Підключи Stripe subscriptions, portal, webhook sync і plan gates."),
        doneWhen: L("Test subscription changes access without manual database edits", "Test subskrypcji zmienia dostęp bez ręcznej bazy", "Тестовая подписка автоматически меняет доступ", "Тестова підписка змінює доступ без ручної бази"),
      },
      {
        code: "04",
        title: L("Usage and support", "Usage i support", "Как настроить usage и поддержку?", "Usage і support"),
        body: L("Add onboarding, usage limits, empty states, logs and support contact.", "Onboarding, limity, empty states, logi i support.", "Добавь onboarding, limits, empty states, logs и support.", "Додай onboarding, limits, empty states, logs і support."),
        doneWhen: L("First customer can complete the paid workflow end to end", "Pierwszy klient kończy płatny workflow end to end", "Первый клиент проходит платный workflow end to end", "Перший клієнт проходить платний workflow end to end"),
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
      ["Webhook подписок требует восстановления", "Вход пользователей требует диагностики", "Доступ к данным требует проверки"],
      ["Webhook підписок падає", "Користувачі не можуть увійти", "Ризик витоку даних"],
    ),
  },
  {
    id: "internal-tool",
    tag: "PIPE-07",
    title: L("Internal tool", "Narzędzie wewnętrzne", "Как создать полезный внутренний инструмент?", "Внутрішній інструмент"),
    description: L(
      "Streamlit or simple dashboard for your team — not a public marketing site.",
      "Streamlit lub prosty dashboard dla zespołu — nie publiczna strona marketingowa.",
      "Практический план внутреннего инструмента: один рабочий вопрос, надёжные данные, роли, журнал действий и понятная передача команде.",
      "Streamlit або проста панель для команди — не публічний маркетинговий сайт.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Внутренний инструмент помогает команде быстрее принимать решения и выполнять повторяемые операции на основе единых данных. Хороший первый релиз отвечает на один рабочий вопрос, учитывает роли доступа и сохраняет историю действий. Пользователь получает результат за минуты, а владелец контролирует качество данных.",
        sections: [
          {
            heading: "Как выбрать первую задачу для инструмента?",
            paragraphs: [
              "Найдите операцию, которая регулярно занимает время, влияет на решение и выполняется по понятным правилам. Опишите текущий путь: источник данных, ручные шаги, участники, итоговый файл или действие. Выберите один вопрос, например объём заказов с риском задержки на этой неделе. Зафиксируйте время ответа и частоту ошибок сегодня. Эти показатели станут критерием пользы первого релиза.",
            ],
          },
          {
            heading: "Как подготовить данные и права доступа?",
            paragraphs: [
              "Перечислите CSV, таблицы, базы и API, укажите владельца каждого источника и частоту обновления. Определите обязательные поля, типы, допустимые значения и правило обработки дубликатов. Роли описывают, кто просматривает, загружает, редактирует и экспортирует сведения. Сервер проверяет разрешение для каждой операции. Секреты хранятся в защищённом окружении, а персональные данные получают подходящий срок хранения.",
            ],
          },
          {
            heading: "Как спроектировать удобный рабочий сценарий?",
            paragraphs: [
              "Главный экран показывает выбранную метрику, период обновления и качество исходных данных. Фильтры соответствуют реальным вопросам команды, таблица раскрывает детали, а экспорт сохраняет активный набор условий. Загрузка файла даёт предварительный просмотр и понятный отчёт проверки. Долгая операция показывает прогресс и завершение. Частое действие занимает минимум переходов и сохраняет контекст пользователя между шагами.",
            ],
          },
          {
            heading: "Как проверить точность результата?",
            paragraphs: [
              "Соберите контрольный набор с известным итогом, пограничными значениями, пустыми полями и повторными строками. Сверьте расчёт инструмента с утверждённым ручным примером. Показывайте источник, время обновления и формулу ключевой метрики рядом с результатом. Журнал фиксирует пользователя, действие, время и изменённые значения. Автоматическая проверка сигнализирует о резком изменении объёма или качества входных данных.",
            ],
          },
          {
            heading: "Как передать инструмент команде?",
            paragraphs: [
              "Назначьте владельца продукта, данных и технической поддержки. Короткая инструкция объясняет вход, обновление, экспорт, восстановление и обращение при сбое. Резервная выгрузка создаётся по расписанию, мониторинг проверяет свежесть данных и доступность приложения. Проведите живую сессию с реальными пользователями и запишите вопросы. Через две недели измерьте экономию времени, активность, ошибки и запросы на улучшение.",
            ],
          },
        ],
      },
    },
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
        title: L("Define one metric", "Jedna metryka", "Как выбрать одну метрику?", "Одна метрика"),
        body: L("Pick the one number the team checks every Monday.", "Wybierz liczbę, którą zespół sprawdza w każdy poniedziałek.", "Выбери цифру, которую команда смотрит каждый понедельник.", "Обери цифру, яку команда дивиться щопонеділка."),
        doneWhen: L("Metric loads from real data source", "Metryka ładuje się z prawdziwego źródła", "Метрика грузится из реального источника", "Метрика вантажиться з реального джерела"),
      },
      {
        code: "02",
        title: L("Input and permissions", "Input i uprawnienia", "Как настроить данные и доступы?", "Input і доступи"),
        body: L("Define CSV/API sources, who can upload, who can see exports and what is private.", "Źródła CSV/API, upload, eksporty i dane prywatne.", "Опиши CSV/API источники, upload, exports и приватные данные.", "Опиши CSV/API джерела, upload, exports і приватні дані."),
        doneWhen: L("A non-admin user cannot access restricted data", "Non-admin nie widzi danych z ograniczeniem", "Обычный пользователь видит разрешённые данные", "Не-адмін не бачить закриті дані"),
      },
      {
        code: "03",
        title: L("Dashboard workflow", "Workflow dashboardu", "Как собрать рабочий dashboard?", "Workflow dashboard"),
        body: L("Build upload, filters, summary cards, detail table and export path.", "Upload, filtry, karty, tabela szczegółów i eksport.", "Собери upload, filters, summary cards, таблицу и export.", "Збери upload, filters, summary cards, таблицю і export."),
        doneWhen: L("Team can answer the weekly question in under two minutes", "Zespół odpowiada na pytanie tygodnia w 2 minuty", "Команда отвечает на недельный вопрос за 2 минуты", "Команда відповідає на тижневе питання за 2 хвилини"),
      },
      {
        code: "04",
        title: L("Ops handoff", "Przekazanie ops", "Как передать инструмент команде?", "Передача ops"),
        body: L("Document refresh schedule, owner, backup export and failure alert.", "Harmonogram odświeżania, owner, backup export i alert.", "Документируй refresh, owner, backup export и alert.", "Задокументуй refresh, owner, backup export і alert."),
        doneWhen: L("Someone else can run the tool without calling the developer", "Ktoś inny uruchamia narzędzie bez developera", "Другой человек запускает инструмент самостоятельно", "Інша людина запускає tool без розробника"),
      },
    ]),
    risks: LA(
      ["Exposed without auth", "Stale data", "No audit log"],
      ["Wystawione bez auth", "Nieaktualne dane", "Brak audit log"],
      ["Настройте auth", "Контролируйте свежесть данных", "Сохраняйте audit log"],
      ["Відкрито без auth", "Застарілі дані", "Немає audit log"],
    ),
    rescueTriggers: LA(
      ["Wrong numbers in production", "Can't add new user"],
      ["Złe liczby na produkcji", "Nie można dodać użytkownika"],
      ["Цифры production требуют сверки", "Добавление пользователя требует настройки"],
      ["Невірні цифри на проді", "Не можна додати користувача"],
    ),
  },
  {
    id: "automation",
    tag: "PIPE-08",
    title: L(
      "Automation pipeline",
      "Pipeline automatyzacji",
      "Как автоматизировать бизнес через n8n, CRM и Telegram?",
      "Pipeline автоматизації",
    ),
    description: L(
      "n8n / scripts connecting forms, CRM, email, Telegram — after the site works.",
      "n8n / skrypty łączące formularze, CRM, email, Telegram — po działającej stronie.",
      "Практический план автоматизации заявок: n8n, CRM, email, Telegram, логи, защита от повторов, тестирование и измеримые метрики.",
      "n8n / скрипти: форма → CRM → email → Telegram — після робочого сайту.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Автоматизация бизнеса связывает сайт, формы, CRM, почту и Telegram в единый управляемый процесс. Заявка автоматически получает ответственного, фиксируется в системе, запускает уведомление и сохраняет историю действий. Такой сценарий ускоряет обработку лидов, снижает ручную нагрузку и делает результат измеримым каждый день.",
        sections: [
          {
            heading: "Какие процессы стоит автоматизировать в первую очередь?",
            paragraphs: [
              "Начните с действий, которые команда повторяет ежедневно по понятным правилам. Хороший кандидат имеет чёткий триггер, одинаковый набор данных и проверяемый результат. Обычно это распределение заявок, уведомления о заказах, перенос контактов в CRM, подготовка счетов, публикация контента и регулярные отчёты. Запишите текущий процесс шаг за шагом, укажите ответственного и измерьте время выполнения. Такая карта показывает приоритеты и ожидаемую экономию.",
            ],
          },
          {
            heading: "Как выбрать инструмент для автоматизации?",
            paragraphs: [
              "n8n удобно соединяет формы, таблицы, CRM, почту, Telegram и популярные API через визуальный сценарий. Команда получает понятную схему, историю запусков и быстрые изменения. Собственный скрипт подходит для сложной обработки данных, высокой нагрузки и специальных правил бизнеса. Выбор опирается на объём операций, доступные интеграции, требования к хранению данных и человека, который будет сопровождать систему после запуска.",
            ],
          },
          {
            heading: "Как выглядит надёжный сценарий автоматизации?",
            paragraphs: [
              "Надёжный workflow принимает данные, проверяет обязательные поля, присваивает уникальный идентификатор и выполняет шаги в заданном порядке. Каждый запуск сохраняет статус, время, входные данные и понятное сообщение об ошибке. Повторные попытки обрабатывают временные сбои сервисов, дедупликация защищает CRM от повторных лидов, а лимиты запросов поддерживают стабильную работу API. Ответственный получает уведомление с контекстом и ссылкой на конкретный запуск.",
            ],
          },
          {
            heading: "Как проверить автоматизацию перед запуском?",
            paragraphs: [
              "Подготовьте тестовые сценарии для обычной заявки, пустого поля, повторной отправки, временного сбоя API и крупного файла. Проверьте итоговую запись в CRM, письмо клиенту, уведомление менеджеру и журнал событий. Затем проведите ограниченный запуск на реальных данных и сравните результат с ручным процессом. Инструкция по паузе, повторному запуску и замене ключей помогает владельцу уверенно управлять системой.",
            ],
          },
          {
            heading: "Как измерять пользу автоматизации?",
            paragraphs: [
              "Зафиксируйте время обработки до запуска, количество операций в месяц, долю ошибок и скорость первого ответа клиенту. После внедрения отслеживайте успешные запуски, повторные попытки, экономию часов и конверсию заявок. Простой еженедельный отчёт показывает реальную ценность системы. Следующий сценарий добавляйте после стабильной работы первого потока и подтверждённой пользы для команды.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Lead routing", "Order notifications", "Content prep scripts"],
      ["Routing leadów", "Powiadomienia o zamówieniach", "Skrypty prep contentu"],
      ["Маршрутизация лидов", "Уведомления о заказах", "Скрипты подготовки контента"],
      ["Маршрутизація лідів", "Сповіщення про замовлення", "Скрипти prep контенту"],
    ),
    avoidIf: LA(
      ["No live website yet", "One-off task with no repeat"],
      ["Brak live strony", "Jednorazowe zadanie bez powtórzeń"],
      ["Сначала запустите сайт и проверьте форму", "Выбирайте процесс с регулярными повторениями"],
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
      ["Запускайте автоматизацию после проверки формы", "Рассчитайте стоимость Zapier при 500+ запусках"],
      ["Автоматизація до робочої форми", "Zapier у масштабі"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Map one flow", "Jeden flow", "Как описать первый поток?", "Один flow"),
        body: L("Form submit → notify → spreadsheet row. Draw it on paper first.", "Formularz → notify → wiersz w arkuszu. Najpierw na papierze.", "Форма → уведомление → строка в таблице. Сначала на бумаге.", "Форма → notify → рядок у таблиці. Спочатку на папері."),
        doneWhen: L("Test submission creates row + email", "Test tworzy wiersz + email", "Тест создаёт строку + email", "Тест створює рядок + email"),
      },
      {
        code: "02",
        title: L("Build with logging", "Buduj z logami", "Как добавить логи и алерты?", "Зібрати з логами"),
        body: L("Add each step with retries, error log, owner alert and sample payloads.", "Kroki z retry, error log, alert ownera i sample payloads.", "Добавь retry, error log, alert owner и sample payloads.", "Додай retry, error log, alert owner і sample payloads."),
        doneWhen: L("A failed run creates an alert with enough context", "Nieudany run tworzy alert z kontekstem", "Падение создаёт alert с контекстом", "Падіння створює alert з контекстом"),
      },
      {
        code: "03",
        title: L("Deduplicate and rate-limit", "Dedup i rate-limit", "Как защитить данные от повторов?", "Dedup і rate-limit"),
        body: L("Prevent duplicate leads, repeated emails, API limit crashes and infinite loops.", "Stop duplikatom leadów, maili, limitom API i pętlom.", "Останови дубли лидов, повторные email, API limits и loops.", "Зупини дублі leads, email, API limits і loops."),
        doneWhen: L("Repeated test payload does not create duplicate customer records", "Powtórzony payload nie tworzy duplikatu klienta", "Повтор payload сохраняет одну запись клиента", "Повтор payload не створює дубль клієнта"),
      },
      {
        code: "04",
        title: L("Monitor and hand off", "Monitoruj i przekaż", "Как передать сценарий владельцу?", "Моніторинг і handoff"),
        body: L("Create a runbook: how to pause, replay, rotate keys and check last successful run.", "Runbook: pauza, replay, rotacja keys, ostatni udany run.", "Runbook: pause, replay, rotate keys, last successful run.", "Runbook: pause, replay, rotate keys, last successful run."),
        doneWhen: L("Owner can verify the automation worked today", "Owner sprawdza czy automatyzacja dziś działała", "Владелец может проверить, работала ли автоматизация сегодня", "Власник може перевірити, чи працювала автоматизація сьогодні"),
      },
    ]),
    risks: LA(
      ["Silent failures", "No logging", "API key in repo"],
      ["Ciche błędy", "Brak logów", "API key w repo"],
      ["Настройте алерты для каждого сбоя", "Сохраняйте логи каждого запуска", "Храните API key в secret storage"],
      ["Тихі падіння", "Немає логів", "API key у repo"],
    ),
    rescueTriggers: LA(
      ["Workflow stopped", "Duplicate leads", "Rate limit hit"],
      ["Workflow stanął", "Duplikaty leadów", "Rate limit"],
      ["Workflow требует восстановления", "CRM получает повторные лиды", "API достигает rate limit"],
      ["Workflow зупинився", "Дублі лідів", "Rate limit"],
    ),
  },
  {
    id: "rescue",
    tag: "PIPE-09",
    title: L("Rescue / audit", "Rescue / audyt", "Как восстановить сайт после неудачной разработки?", "Rescue / аудит"),
    description: L(
      "When AI broke the project, domain fails, or the site is a pretty demo with no business layer.",
      "Gdy AI zepsuło projekt, domena nie działa albo strona to ładne demo bez warstwy biznesowej.",
      "Практический план восстановления: аудит, резервная копия, стабильный деплой, рабочие заявки, сильный оффер и решение о развитии проекта.",
      "Коли AI зламав проєкт, домен не працює або сайт — гарне демо без бізнес-шару.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Восстановление сайта начинается с фиксации текущего состояния, бизнес-цели и трёх самых дорогих проблем. Затем команда создаёт резервную копию, воспроизводит сбой, стабилизирует публикацию и проверяет путь клиента. Аудит показывает, какие части стоит исправить, сохранить или пересобрать в ближайшей итерации проекта сайта.",
        sections: [
          {
            heading: "Как провести первичную диагностику сайта?",
            paragraphs: [
              "Соберите URL, репозиторий, доступ к хостингу, домену, аналитике и сервису форм. Запишите ожидаемое поведение и точные шаги, которые приводят к проблеме. Проверьте production, локальную сборку, журнал деплоя, переменные окружения, DNS, сертификат и доставку тестовой заявки. Зафиксируйте снимки экрана и время события. Итог диагностики — список фактов, влияние на бизнес и три приоритетных действия с владельцами.",
            ],
          },
          {
            heading: "Как безопасно стабилизировать проект?",
            paragraphs: [
              "Создайте резервную копию кода, данных, DNS и переменных окружения, затем зафиксируйте рабочую версию. Ограничьте изменения задачами восстановления. Сначала добейтесь повторяемой сборки, успешного деплоя и открытия основного домена. Затем проверьте формы, оплату, авторизацию и критические интеграции. Каждое исправление получает отдельный коммит, понятное описание и короткую проверку. Такой ритм сохраняет контроль и упрощает откат конкретного шага.",
            ],
          },
          {
            heading: "Какие бизнес-элементы проверить после техники?",
            paragraphs: [
              "Первый экран ясно называет аудиторию, услугу, результат и следующий шаг. Контакты открываются на телефоне, форма доставляет заявку ответственному, а подтверждение сообщает срок ответа. Услуги, цены или принцип расчёта, доказательства и FAQ соответствуют реальной работе компании. Метаданные, canonical, sitemap, robots, языковые ссылки и schema описывают видимый контент. Аналитика фиксирует основные конверсии и их источники.",
            ],
          },
          {
            heading: "Как выбрать ремонт или пересборку?",
            paragraphs: [
              "Сравните стоимость исправления, будущей поддержки и развития с оценкой нового решения. Ремонт подходит проекту с понятной архитектурой, актуальными зависимостями, ценной логикой и исправимыми локальными дефектами. Пересборка оправдана при системных ограничениях, дорогом сопровождении и слабом соответствии бизнес-процессу. Решение оформите таблицей: проблема, вариант, часы, риск, влияние и срок. Утверждённый выбор получает бюджет и ответственного.",
            ],
          },
          {
            heading: "Как составить план восстановления на семь дней?",
            paragraphs: [
              "День первый посвящён доступам, копиям и диагностике. Следующие два дня возвращают сборку, домен и ключевой клиентский сценарий. Затем команда улучшает оффер, контакты, измерение и поисковые сигналы. Финальные дни включают мобильную проверку, тесты, документацию и передачу владельцу. Каждый пункт содержит критерий готовности. В конце недели production работает стабильно, заявка доходит, метрики собираются, а следующий этап имеет согласованный объём.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Broken deploy", "Cursor refactor disaster", "AI demo needs offer rewrite"],
      ["Zepsuty deploy", "Katastrofa refaktoru Cursor", "Demo AI wymaga nowej oferty"],
      ["Сломанный деплой", "Катастрофа рефактора Cursor", "AI-демка требует сильного оффера"],
      ["Зламаний deploy", "Катастрофа рефактору Cursor", "AI-демо без оферу"],
    ),
    avoidIf: LA(
      ["Greenfield project with clear brief", "You haven't tried the beginner path"],
      ["Greenfield z jasnym briefem", "Nie próbowałeś ścieżki beginner"],
      ["Новый проект с ясным brief", "Сначала пройдите beginner path"],
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
      ["Проведите аудит перед пересборкой", "Планируйте полный rewrite AI по результатам аудита"],
      ["Перезбірка з нуля без аудиту", "Ще один повний rewrite AI"],
    ),
    skillPackFiles: ["01-start-here.md", "02-business-brief.md", "agent-instructions.md", "deploy-checklist.md"],
    buildPhases: phases([
      {
        code: "01",
        title: L("Triage", "Triage", "Как провести triage?", "Triage"),
        body: L("Can you deploy? Does form work? Is copy real?", "Czy deploy działa? Formularz? Copy realne?", "Деплой работает? Форма? Текст реальный?", "Deploy працює? Форма? Copy реальний?"),
        doneWhen: L("Priority list of 3 fixes written", "Lista 3 priorytetowych fixów", "Список из 3 приоритетных fix", "Список з 3 пріоритетних fix"),
      },
      {
        code: "02",
        title: L("Stabilize", "Stabilizacja", "Как стабилизировать проект?", "Стабілізувати"),
        body: L("Back up, freeze scope, fix build, env vars, domain and form before new features.", "Backup, freeze scope, build, env vars, domena i forma przed features.", "Backup, freeze scope, build, env vars, домен и форма до features.", "Backup, freeze scope, build, env vars, домен і форма до features."),
        doneWhen: L("Production deploy works and owner receives a test lead", "Production deploy działa i owner dostaje test lead", "Production deploy работает и владелец получает test lead", "Production deploy працює і власник отримує test lead"),
      },
      {
        code: "03",
        title: L("Fix business layer", "Napraw warstwę biznesową", "Как восстановить бизнес-слой?", "Полагодити бізнес-шар"),
        body: L("Rewrite offer, CTA, metadata, tracking and obvious trust gaps.", "Oferta, CTA, metadata, tracking i braki zaufania.", "Перепиши оффер, CTA, metadata, tracking и trust gaps.", "Перепиши офер, CTA, metadata, tracking і trust gaps."),
        doneWhen: L("The site says who it is for and how to contact/buy", "Strona mówi dla kogo jest i jak kupić/kontakt", "Сайт говорит для кого он и как связаться/купить", "Сайт каже для кого він і як зв'язатися/купити"),
      },
      {
        code: "04",
        title: L("Decide rebuild or iterate", "Rebuild czy iteracja", "Как выбрать rebuild или итерацию?", "Вирішити rebuild чи ітерація"),
        body: L("Compare repair cost to rebuild cost, then create a 7-day action plan.", "Porównaj koszt naprawy i rebuild, potem plan 7 dni.", "Сравни стоимость ремонта и rebuild, затем план на 7 дней.", "Порівняй вартість ремонту і rebuild, потім план на 7 днів."),
        doneWhen: L("There is one written decision and next owner action", "Jest jedna decyzja i następna akcja ownera", "Есть одно решение и следующее действие владельца", "Є одне рішення і наступна дія власника"),
      },
    ]),
    risks: LA(
      ["Fixing symptoms not cause", "No backup before changes"],
      ["Naprawa objawów nie przyczyny", "Brak backupu przed zmianami"],
      ["Ищите корневую причину", "Создайте бэкап перед правками"],
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
