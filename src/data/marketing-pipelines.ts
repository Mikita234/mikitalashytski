import type { Locale } from "@/i18n/routing";

export type MarketingPipelineSlug =
  | "marketing-basics"
  | "seo-analytics"
  | "google-ads-basics"
  | "yandex-ecosystem"
  | "frameworks-2026"
  | "best-practices-2026";

export interface MarketingPhase {
  code: string;
  title: Record<Locale, string>;
  body: Record<Locale, string>;
  doneWhen: Record<Locale, string>;
}

export interface MarketingSeoArticle {
  label: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
}

export interface MarketingPipeline {
  id: MarketingPipelineSlug;
  tag: string;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  honestNote: Record<Locale, string>;
  bestFor: Record<Locale, string[]>;
  avoidIf: Record<Locale, string[]>;
  relatedGuides: string[];
  relatedStacks: string[];
  phases: MarketingPhase[];
  risks: Record<Locale, string[]>;
  seoArticle?: Partial<Record<Locale, MarketingSeoArticle>>;
}

const L = (en: string, pl: string, ru: string, uk: string) =>
  ({ en, pl, ru, uk }) as Record<Locale, string>;

const LA = (en: string[], pl: string[], ru: string[], uk: string[]) =>
  ({ en, pl, ru, uk }) as Record<Locale, string[]>;

export const marketingPipelines: MarketingPipeline[] = [
  {
    id: "marketing-basics",
    tag: "MKT-01",
    title: L(
      "Social & local visibility",
      "Social media i widoczność lokalna",
      "Как продвигать локальный бизнес в Google и соцсетях?",
      "Соцмережі та локальна видимість",
    ),
    description: L(
      "TikTok, Instagram, Google Business Profile — when you need them and when ads make sense.",
      "TikTok, Instagram, Google Business Profile — kiedy potrzebne i kiedy reklamy mają sens.",
      "Практический план локального продвижения через Google Business Profile, сайт, Instagram, TikTok, отзывы, аналитику и управляемую рекламу.",
      "TikTok, Instagram, Google Business Profile — коли потрібні й коли має сенс реклама.",
    ),
    honestNote: L(
      "TikTok is optional. Google Business Profile is mandatory for local services.",
      "TikTok opcjonalny. Google Business Profile obowiązkowy dla usług lokalnych.",
      "TikTok — опционально. Google Business Profile — обязателен для локальных услуг.",
      "TikTok — опційно. Google Business Profile — обовʼязковий для локальних послуг.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Локальный маркетинг малого бизнеса начинается с Google Business Profile, понятного сайта и регулярного контента в социальных сетях. Профиль компании приводит клиентов из карт, сайт превращает интерес в заявку, а Instagram и TikTok показывают реальные работы, команду и полезный опыт ежедневно.",
        sections: [
          {
            heading: "Как оформить Google Business Profile?",
            paragraphs: [
              "Заполните название, основную категорию, адрес или территорию обслуживания, телефон, часы работы и ссылку на подходящую страницу сайта. Загрузите логотип, фасад, интерьер, команду и примеры выполненных работ. Описание компании должно конкретно называть услугу, город и ключевую пользу для клиента. Добавляйте новые фотографии и публикации каждый месяц. После каждого заказа отправляйте клиенту прямую ссылку на форму отзыва и отвечайте на все полученные оценки содержательно.",
            ],
          },
          {
            heading: "Как связать профиль компании с сайтом?",
            paragraphs: [
              "Ссылка из Google должна вести на страницу, которая подтверждает тот же адрес, телефон, график и перечень услуг. Разместите понятный заголовок, реальные фотографии, цены или принцип расчёта, отзывы, районы обслуживания и заметный способ связи. Для каждой важной услуги подготовьте отдельную страницу с конкретным ответом на запрос клиента. UTM-метка в ссылке профиля покажет визиты, звонки и заявки из карт в аналитике.",
            ],
          },
          {
            heading: "Какой контент публиковать в Instagram и TikTok?",
            paragraphs: [
              "Стройте контент вокруг реальной работы: короткий процесс, результат, ответ на частый вопрос, знакомство с сотрудником и полезный совет. Один съёмочный день может дать несколько вертикальных роликов, фотографии и Stories на неделю. Первые секунды сразу называют проблему или результат, титры помогают смотреть ролик с выключенным звуком, а финальная фраза ведёт на сайт, звонок или сообщение. Регулярный ритм укрепляет узнаваемость и доверие.",
            ],
          },
          {
            heading: "Когда запускать локальную рекламу?",
            paragraphs: [
              "Запускайте рекламу после проверки сайта, формы, звонка и аналитики. Выберите одну услугу, один регион и одно целевое действие. Google Ads помогает перехватывать сформированный спрос, Meta показывает предложение подходящей аудитории по интересам и географии. Начальный бюджет задаётся лимитом на месяц, а объявления получают отдельные UTM-метки. Через две недели сравните стоимость звонка, формы и качественной заявки по каждому каналу.",
            ],
          },
          {
            heading: "Как измерять результат локального маркетинга?",
            paragraphs: [
              "Еженедельно фиксируйте показы профиля, переходы на сайт, звонки, построенные маршруты, сообщения и заполненные формы. Добавьте источник обращения в CRM или простую таблицу. Отдельно считайте качественные заявки, продажи и выручку. Такой отчёт показывает каналы, которые приводят клиентов, и темы контента, которые поддерживают решение о покупке. Следующий бюджет направляйте в связку с подтверждённой конверсией.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Plumber, salon, cafe with local clients", "You can film 30-second clips", "You want phone calls from maps"],
      ["Hydraulik, salon, kawiarnia z lokalnymi klientami", "Możesz nagrać 30-sekundowe klipy", "Chcesz telefony z map"],
      ["Сантехник, салон, кафе с локальными клиентами", "Можешь снять 30-секундные ролики", "Нужны звонки с карт"],
      ["Сантехнік, салон, кафе з локальними клієнтами", "Можеш зняти 30-секундні ролики", "Потрібні дзвінки з карт"],
    ),
    avoidIf: LA(
      ["B2B only with no visual work", "You hate being on camera and won't hire someone"],
      ["Tylko B2B bez wizualnej pracy", "Nie chcesz być przed kamerą i nie zatrudnisz nikogo"],
      ["Для узкого B2B подготовьте экспертный формат", "Передайте съёмку сотруднику или подрядчику"],
      ["Лише B2B без візуальної роботи", "Не хочеш на камеру й не наймеш зйомку"],
    ),
    relatedGuides: ["tiktok-for-small-business", "website-launch-checklist-full"],
    relatedStacks: ["tiktok-business", "instagram", "google-business-profile"],
    phases: [
      {
        code: "01",
        title: L("Google Business Profile first", "Najpierw Google Business Profile", "Как запустить Google Business Profile?", "Спочатку Google Business Profile"),
        body: L(
          "Go to business.google.com → create profile → add real address, hours, phone, 5+ photos. Verify by postcard or phone.",
          "Wejdź na business.google.com → utwórz profil → prawdziwy adres, godziny, telefon, 5+ zdjęć. Weryfikacja pocztą lub telefonem.",
          "Зайди на business.google.com → создай профиль → реальный адрес, часы, телефон, 5+ фото. Верификация открыткой или звонком.",
          "Зайди на business.google.com → створи профіль → реальна адреса, години, телефон, 5+ фото. Верифікація листом або дзвінком.",
        ),
        doneWhen: L(
          "Profile shows on Google Maps with your phone clickable",
          "Profil widać w Google Maps z klikalnym telefonem",
          "Профиль виден в Google Maps, телефон кликабелен",
          "Профіль видно в Google Maps, телефон клікабельний",
        ),
      },
      {
        code: "02",
        title: L("TikTok Business (optional)", "TikTok Business (opcjonalnie)", "Как подготовить TikTok Business?", "TikTok Business (опційно)"),
        body: L(
          "tiktok.com/business → switch to Business account → link website → post 3 clips: who you are, one job done, one tip. 15–30 sec, vertical.",
          "tiktok.com/business → konto Business → link do strony → 3 klipy: kim jesteś, jedna robota, jedna porada. 15–30 sek, pion.",
          "tiktok.com/business → бизнес-аккаунт → ссылка на сайт → 3 ролика: кто ты, одна работа, один совет. 15–30 сек, вертикально.",
          "tiktok.com/business → бізнес-акаунт → посилання на сайт → 3 ролики: хто ти, одна робота, одна порада. 15–30 сек, вертикально.",
        ),
        doneWhen: L(
          "Bio has website link and at least 1 video with real work (not stock)",
          "Bio ma link do strony i min. 1 wideo z prawdziwą pracą",
          "В bio есть ссылка на сайт и минимум 1 видео с реальной работой",
          "У bio є посилання на сайт і мінімум 1 відео з реальною роботою",
        ),
      },
      {
        code: "03",
        title: L("Instagram basics", "Podstawy Instagram", "Как оформить Instagram бизнеса?", "Базовий Instagram"),
        body: L(
          "Business account → same photos as site → Stories weekly → link in bio to contact form. Reuse TikTok clips as Reels.",
          "Konto firmowe → te same zdjęcia co na stronie → Stories co tydzień → link w bio do formularza. TikTok jako Reels.",
          "Бизнес-аккаунт → те же фото что на сайте → Stories раз в неделю → ссылка в bio на форму. TikTok-ролики как Reels.",
          "Бізнес-акаунт → ті самі фото що на сайті → Stories щотижня → посилання в bio на форму. TikTok як Reels.",
        ),
        doneWhen: L(
          "Profile matches your brand; DMs or form get at least 1 inquiry/month",
          "Profil pasuje do marki; DM lub forma daje min. 1 zapytanie/mies.",
          "Профиль совпадает с брендом; DM или форма дают минимум 1 заявку/мес.",
          "Профіль збігається з брендом; DM або форма дають мінімум 1 запит/міс.",
        ),
      },
      {
        code: "04",
        title: L("When to turn on ads", "Kiedy włączyć reklamy", "Как запустить первую рекламу?", "Коли вмикати рекламу"),
        body: L(
          "Ads only after: site works, form sends email, GSC connected. Start with Google Ads local or Meta — budget cap 300–500/month, one offer.",
          "Reklamy dopiero gdy: strona działa, formularz wysyła mail, GSC podpięte. Start Google Ads lokalnie lub Meta — limit 300–500/mies., jedna oferta.",
          "Реклама только после: сайт работает, форма шлёт письма, GSC подключён. Старт Google Ads локально или Meta — лимит 300–500/мес., один оффер.",
          "Реклама лише після: сайт працює, форма шле листи, GSC підключений. Старт Google Ads локально або Meta — ліміт 300–500/міс., один офер.",
        ),
        doneWhen: L(
          "You wrote one sentence: who sees ad, what they click, what happens next",
          "Masz jedno zdanie: kto widzi reklamę, w co klika, co dalej",
          "Есть одно предложение: кто видит рекламу, куда кликает, что дальше",
          "Є одне речення: хто бачить рекламу, куди клікає, що далі",
        ),
      },
    ],
    risks: LA(
      ["Posting before site is live", "Fake stock photos on GBP", "Boosting posts with no tracking"],
      ["Posty zanim strona live", "Stockowe zdjęcia w GBP", "Boost postów bez śledzenia"],
      ["Сначала проверьте сайт и контакты", "Публикуйте реальные фотографии в GBP", "Добавляйте UTM-метки каждому продвижению"],
      ["Пости до live сайту", "Стокові фото в GBP", "Буст постів без відстеження"],
    ),
  },
  {
    id: "seo-analytics",
    tag: "MKT-02",
    title: L(
      "SEO & analytics setup",
      "SEO i analityka",
      "Как настроить SEO и аналитику сайта?",
      "SEO та аналітика",
    ),
    description: L(
      "Google Search Console, GA4 or Plausible, sitemap, indexing — mandatory layer after deploy.",
      "Google Search Console, GA4 lub Plausible, sitemap, indeksacja — obowiązkowa warstwa po deploy.",
      "Практическая настройка Search Console, sitemap, metadata, GA4 или Plausible, событий конверсии и регулярного SEO-отчёта.",
      "Google Search Console, GA4 або Plausible, sitemap, індексація — обовʼязковий шар після deploy.",
    ),
    honestNote: L(
      "GSC is mandatory for Google. Analytics is strongly recommended. Fancy SEO tools can wait.",
      "GSC obowiązkowe dla Google. Analityka mocno zalecana. Drogie SEO tools mogą poczekać.",
      "Search Console показывает органический спрос, а выбранная аналитика связывает визиты с заявками и продажами.",
      "GSC обовʼязковий для Google. Аналітика — настійно. Дорогі SEO-tools можуть почекати.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "SEO и веб-аналитика показывают, какие страницы Google индексирует, по каким запросам приходят люди и какие визиты превращаются в заявки. Базовая система включает Search Console, sitemap, корректные metadata, выбранную аналитику и события конверсии для форм, звонков и важных кнопок на сайте.",
        sections: [
          {
            heading: "Как подключить Google Search Console?",
            paragraphs: [
              "Добавьте доменный ресурс через DNS или ресурс с префиксом URL через доступный способ подтверждения. Отправьте адрес sitemap.xml и проверьте главную страницу инструментом проверки URL. Через несколько дней изучите отчёты об индексировании, Core Web Vitals и поисковых результатах. Особое внимание уделяйте запросам с показами, страницам на позициях 5–20 и URL, которые Google обнаружил недавно. Эти данные формируют план улучшений на месяц.",
            ],
          },
          {
            heading: "Какие настройки нужны каждой странице?",
            paragraphs: [
              "Каждая индексируемая страница получает один понятный H1, уникальный title, краткое description, canonical и содержательный основной текст. Заголовок отвечает поисковому намерению, первый абзац сразу даёт решение, а следующие блоки раскрывают детали через вопросы. Изображения получают описательные alt, внутренние ссылки связывают близкие темы, хлебные крошки объясняют структуру. Schema.org помогает поисковым системам распознавать организацию, услугу, статью, товар или событие.",
            ],
          },
          {
            heading: "Как выбрать GA4 или Plausible?",
            paragraphs: [
              "GA4 подходит проектам с рекламой Google, несколькими каналами, e-commerce и сложными событиями. Plausible даёт компактный интерфейс, быстрый обзор и простой набор целей. Выберите одну основную систему и согласуйте правила cookies с регионом бизнеса. После установки откройте сайт с телефона, отправьте форму, нажмите телефон и проверьте появление событий. Названия событий фиксируйте в коротком документе для команды.",
            ],
          },
          {
            heading: "Какие конверсии стоит измерять?",
            paragraphs: [
              "Для сервисного бизнеса измеряйте отправку формы, клик по телефону, сообщение в мессенджере, бронирование и скачивание важного документа. Для магазина добавьте просмотр товара, корзину, начало checkout и покупку с суммой заказа. Отделяйте основную конверсию от вспомогательных действий. UTM-метки сохраняют источник кампании, а CRM связывает обращение с качеством лида, продажей и выручкой.",
            ],
          },
          {
            heading: "Как превратить отчёты в план SEO?",
            paragraphs: [
              "Раз в неделю проверяйте ошибки сайта и работу конверсий. Раз в месяц сравнивайте клики, показы, CTR, среднюю позицию и заявки по посадочным страницам. Улучшайте страницы с заметными показами и достижимыми позициями: уточняйте прямой ответ, добавляйте реальные примеры, цены, FAQ и внутренние ссылки. Отмечайте дату изменения и оценивайте динамику через четыре–восемь недель.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Any site that should be found on Google", "Local business with city in queries", "Content site with articles"],
      ["Każda strona do znalezienia w Google", "Firma lokalna z miastem w zapytaniach", "Strona z artykułami"],
      ["Любой сайт, который ищут в Google", "Локальный бизнес с городом в запросах", "Контент-сайт со статьями"],
      ["Будь-який сайт для Google", "Локальний бізнес з містом у запитах", "Контент-сайт зі статтями"],
    ),
    avoidIf: LA(
      ["Internal tool behind login only", "One-page event with no search intent"],
      ["Narzędzie wewnętrzne za loginem", "Jednostronicowe wydarzenie bez search intent"],
      ["Для внутреннего инструмента измеряйте продуктовые события", "Для короткого события сосредоточьтесь на прямом трафике"],
      ["Внутрішній інструмент за логіном", "Односторінкова подія без search intent"],
    ),
    relatedGuides: ["google-search-console-setup", "website-launch-checklist-full"],
    relatedStacks: ["google-search-console", "ga4", "plausible", "bing-webmaster"],
    phases: [
      {
        code: "01",
        title: L("Google Search Console", "Google Search Console", "Как подключить Google Search Console?", "Google Search Console"),
        body: L(
          "search.google.com/search-console → Add property → URL prefix → verify via DNS TXT or HTML file → submit sitemap.xml.",
          "search.google.com/search-console → Dodaj witrynę → prefiks URL → weryfikacja DNS TXT lub plik HTML → wyślij sitemap.xml.",
          "search.google.com/search-console → Добавить ресурс → префикс URL → верификация DNS TXT или HTML-файл → отправить sitemap.xml.",
          "search.google.com/search-console → Додати ресурс → префікс URL → верифікація DNS TXT або HTML-файл → надіслати sitemap.xml.",
        ),
        doneWhen: L(
          "Sitemap status Success; home URL shows Discovered or Indexed",
          "Sitemap Success; strona główna Discovered lub Indexed",
          "Sitemap Success; главная Discovered или Indexed",
          "Sitemap Success; головна Discovered або Indexed",
        ),
      },
      {
        code: "02",
        title: L("Pick one analytics", "Wybierz jedną analitykę", "Как выбрать систему аналитики?", "Обери одну аналітику"),
        body: L(
          "Beginner: Plausible (simple, privacy-friendly) OR GA4 (free, powerful). Add script to site head. Test: visit site → see 1 visitor in dashboard.",
          "Beginner: Plausible (proste) LUB GA4 (darmowe). Skrypt w head. Test: wejdź na stronę → 1 odwiedzający w panelu.",
          "Новичку: Plausible (простой) ИЛИ GA4 (бесплатный). Скрипт в head. Тест: зайди на сайт → 1 посетитель в панели.",
          "Новачку: Plausible (простий) АБО GA4 (безкоштовний). Скрипт у head. Тест: зайди на сайт → 1 відвідувач у панелі.",
        ),
        doneWhen: L(
          "You see your own visit in analytics within 24h",
          "Widzisz własną wizytę w analityce w 24h",
          "Видишь свой визит в аналитике в течение 24ч",
          "Бачиш свій візит в аналітиці за 24 год",
        ),
      },
      {
        code: "03",
        title: L("On-page SEO basics", "Podstawy SEO na stronie", "Как настроить on-page SEO?", "Базове on-page SEO"),
        body: L(
          "One H1 per page, unique title/description, alt text on images, HTTPS, mobile OK. City + service in home title.",
          "Jedno H1 na stronę, unikalny title/description, alt na zdjęciach, HTTPS, mobile OK. Miasto + usługa w title głównej.",
          "Один H1 на страницу, уникальные title/description, alt на картинках, HTTPS, mobile OK. Город + услуга в title главной.",
          "Один H1 на сторінку, унікальні title/description, alt на фото, HTTPS, mobile OK. Місто + послуга в title головної.",
        ),
        doneWhen: L(
          "View page source: one H1, title under 60 chars, description under 160",
          "Źródło strony: jedno H1, title do 60 znaków, description do 160",
          "Исходный код: один H1, title до 60 символов, description до 160",
          "Код сторінки: один H1, title до 60 символів, description до 160",
        ),
      },
      {
        code: "04",
        title: L("Bing & optional extras", "Bing i opcjonalne dodatki", "Как добавить Bing и дополнительные инструменты?", "Bing та опційне"),
        body: L(
          "bing.com/webmasters — import from GSC. Optional: Microsoft Clarity (heatmaps, free), Umami (self-hosted).",
          "bing.com/webmasters — import z GSC. Opcjonalnie: Microsoft Clarity (heatmapy), Umami (self-hosted).",
          "bing.com/webmasters — импорт из GSC. Опционально: Microsoft Clarity (тепловые карты), Umami (свой сервер).",
          "bing.com/webmasters — імпорт з GSC. Опційно: Microsoft Clarity (теплові карти), Umami (self-hosted).",
        ),
        doneWhen: L(
          "Bing Webmaster shows site; you know which extra tool you skipped and why",
          "Bing Webmaster pokazuje stronę; wiesz co pominąłeś i dlaczego",
          "Bing Webmaster показывает сайт; набор дополнительных инструментов зафиксирован в документации",
          "Bing Webmaster показує сайт; знаєш що пропустив і чому",
        ),
      },
    ],
    risks: LA(
      ["No sitemap", "Duplicate titles across pages", "Analytics on staging only"],
      ["Brak sitemap", "Duplikaty title", "Analityka tylko na staging"],
      ["Добавьте актуальный sitemap", "Создайте уникальные title", "Проверьте аналитику на production"],
      ["Немає sitemap", "Дублі title", "Аналітика лише на staging"],
    ),
  },
  {
    id: "google-ads-basics",
    tag: "MKT-03",
    title: L(
      "Google Ads starter",
      "Google Ads na start",
      "Как запустить Google Ads для малого бизнеса?",
      "Google Ads для старту",
    ),
    description: L(
      "When paid search makes sense, minimum setup, daily budget caps — don't burn money on day one.",
      "Kiedy płatne wyszukiwanie ma sens, minimum setup, limity budżetu — nie pal pieniędzy od dnia 1.",
      "Практическая настройка поисковой кампании: посадочная страница, ключевые слова, география, конверсии, бюджет и оценка качественных лидов.",
      "Коли платний пошук має сенс, мінімальний setup, ліміти бюджету — не спалюй гроші в перший день.",
    ),
    honestNote: L(
      "Ads before GSC + working form = wasted budget. Start local search, not Display.",
      "Reklamy przed GSC + działającą formą = zmarnowany budżet. Start od lokalnego search, nie Display.",
      "Рабочая форма, аналитика и понятное предложение создают основу для управляемой поисковой рекламы.",
      "Реклама до GSC + робочої форми = злив бюджету. Старт з локального search, не Display.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Google Ads помогает бизнесу получать заявки по запросам с готовым спросом. Рабочая кампания начинается с проверенной посадочной страницы, настроенных конверсий, точной географии, понятного предложения и ограниченного бюджета. Результат оценивают по качественным лидам, продажам и стоимости привлечения клиента за выбранный период.",
        sections: [
          {
            heading: "Что подготовить перед запуском Google Ads?",
            paragraphs: [
              "Проверьте скорость страницы, мобильную версию, форму, телефон, аналитику и сообщение после отправки заявки. Посадочная страница должна повторять услугу, регион и обещание объявления. Укажите ориентир цены, сроки ответа, подтверждения опыта и следующий шаг. В Google Ads создайте действия-конверсии для формы, звонка или покупки, затем выполните тест самостоятельно. Зафиксируйте допустимую стоимость лида и месячный лимит расходов.",
            ],
          },
          {
            heading: "Как собрать первую поисковую кампанию?",
            paragraphs: [
              "Выберите одну услугу и один регион. Соберите фразы с коммерческим намерением: услуга, город, цена, заказ или срочность. Разделите близкие запросы на компактные группы и направьте каждую группу на релевантную страницу. В объявлениях используйте конкретную услугу, географию, преимущество и призыв. Добавьте расширения с телефоном, быстрыми ссылками, уточнениями и адресом компании.",
            ],
          },
          {
            heading: "Как управлять ключевыми словами?",
            paragraphs: [
              "На старте используйте точное и фразовое соответствие, чтобы понимать реальный спрос. Список исключающих слов очищает трафик от вакансий, обучения, бесплатных материалов и нерелевантных услуг. Проверяйте отчёт поисковых запросов несколько раз в первую неделю, затем еженедельно. Полезные новые формулировки добавляйте в отдельные группы, а релевантные запросы с продажами усиливайте бюджетом и точным текстом посадочной страницы.",
            ],
          },
          {
            heading: "Какой бюджет подходит для теста?",
            paragraphs: [
              "Рассчитайте бюджет через ожидаемую цену клика и объём данных, достаточный для нескольких целевых действий. Дневной лимит защищает месячный план, а расписание показывает рекламу в часы обработки звонков и заявок. Первые две недели сохраняйте стабильные настройки и собирайте данные. Изменения делайте по одному: ключи, объявление, страница или ставка. Такой порядок показывает влияние каждого решения.",
            ],
          },
          {
            heading: "Как оценивать эффективность рекламы?",
            paragraphs: [
              "Смотрите на конверсии, стоимость лида, долю качественных обращений, продажи и выручку. CTR помогает оценить объявление, поисковые запросы показывают точность аудитории, а конверсия страницы отражает качество предложения. Передавайте статус лида из CRM или таблицы, чтобы видеть прибыльные ключи. Еженедельный отчёт должен завершаться конкретным действием и ответственным человеком.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["High-intent local queries (plumber + city)", "You can answer calls within 2 hours", "Margin supports 300+ monthly ad spend"],
      ["Zapytania lokalne (hydraulik + miasto)", "Odbierasz telefon w 2h", "Marża na 300+ reklamy/mies."],
      ["Локальные запросы (сантехник + город)", "Берёшь трубку в течение 2 часов", "Маржа позволяет 300+ на рекламу/мес."],
      ["Локальні запити (сантехнік + місто)", "Береш слухавку за 2 год", "Маржа на 300+ реклами/міс."],
    ),
    avoidIf: LA(
      ["Site not live or form broken", "No idea what keyword brings money", "Brand-new domain with zero reviews"],
      ["Strona nie live lub forma zepsuta", "Nie wiesz jakie słowo przynosi klientów", "Nowa domena bez opinii"],
      ["Сначала опубликуйте сайт и проверьте форму", "Определите запросы с коммерческим намерением", "Соберите первые подтверждения доверия"],
      ["Сайт не live або форма зламана", "Не знаєш яке слово приносить клієнтів", "Новий домен без відгуків"],
    ),
    relatedGuides: ["google-ads-starter", "website-launch-checklist-full"],
    relatedStacks: ["google-ads", "google-search-console"],
    phases: [
      {
        code: "01",
        title: L("Prerequisites check", "Checklist przed startem", "Что проверить перед рекламой?", "Чеклист перед стартом"),
        body: L(
          "✓ Site live ✓ Form works ✓ GSC connected ✓ One clear offer on landing. If any missing — fix first.",
          "✓ Strona live ✓ Forma działa ✓ GSC ✓ Jedna jasna oferta. Brakuje czegoś — najpierw napraw.",
          "✓ Сайт опубликован ✓ Форма работает ✓ GSC подключён ✓ Страница содержит один ясный оффер. Подтвердите все четыре пункта тестом.",
          "✓ Сайт live ✓ Форма працює ✓ GSC ✓ Один ясний офер. Чогось немає — спочатку полагодь.",
        ),
        doneWhen: L(
          "All four checkmarks true",
          "Wszystkie cztery ✓",
          "Все четыре галочки",
          "Усі чотири галочки",
        ),
      },
      {
        code: "02",
        title: L("Create account & campaign", "Konto i kampania", "Как создать поисковую кампанию?", "Акаунт і кампанія"),
        body: L(
          "ads.google.com → New campaign → Leads or Local → pick city radius → 3–5 exact keywords from GSC or common sense.",
          "ads.google.com → Nowa kampania → Leads lub Local → promień miasta → 3–5 dokładnych słów z GSC lub zdrowy rozsądek.",
          "ads.google.com → Новая кампания → Leads или Local → радиус города → 3–5 точных ключей из GSC или здравый смысл.",
          "ads.google.com → Нова кампанія → Leads або Local → радіус міста → 3–5 точних ключів з GSC або здоровий глузд.",
        ),
        doneWhen: L(
          "Campaign paused or live with daily cap ≤ 15 currency units",
          "Kampania wstrzymana lub live z limitem dziennym ≤ 15 jednostek",
          "Кампания на паузе или live с дневным лимитом ≤ 15 единиц",
          "Кампанія на паузі або live з денним лімітом ≤ 15 одиниць",
        ),
      },
      {
        code: "03",
        title: L("Track conversions", "Śledź konwersje", "Как отслеживать конверсии?", "Відстежуй конверсії"),
        body: L(
          "Link Google Ads to GA4 or use form thank-you page as conversion. Count form submits and calls — not just clicks.",
          "Połącz Google Ads z GA4 lub thank-you page jako konwersja. Licz formularze i telefony — nie tylko kliknięcia.",
          "Свяжи Google Ads с GA4 или настрой thank-you страницу как конверсию. Считай заявки, звонки, продажи и клики.",
          "Звʼяжи Google Ads з GA4 або thank-you сторінку як конверсію. Рахуй заявки й дзвінки — не лише кліки.",
        ),
        doneWhen: L(
          "You know cost per lead after 2 weeks or 50 clicks (whichever first)",
          "Znasz koszt leada po 2 tygodniach lub 50 kliknięciach",
          "Знаешь стоимость лида через 2 недели или 50 кликов",
          "Знаєш вартість ліда за 2 тижні або 50 кліків",
        ),
      },
    ],
    risks: LA(
      ["Broad match keywords", "No negative keywords", "Landing page ≠ ad promise"],
      ["Szerokie dopasowanie", "Brak słów wykluczających", "Landing ≠ obietnica reklamy"],
      ["Используйте управляемые типы соответствия", "Добавляйте исключающие слова", "Согласуйте лендинг с обещанием рекламы"],
      ["Широке відповідність", "Немає мінус-слів", "Лендинг ≠ обіцянка реклами"],
    ),
  },
  {
    id: "yandex-ecosystem",
    tag: "MKT-04",
    title: L(
      "Yandex for RU/UA/BY market",
      "Yandex dla rynku RU/UA/BY",
      "Как настроить Яндекс для русскоязычного сайта?",
      "Яндекс для ринку RU/UA/BY",
    ),
    description: L(
      "Yandex Webmaster, Metrica, Direct — when your audience searches in Yandex, not only Google.",
      "Yandex Webmaster, Metrica, Direct — gdy odbiorcy szukają w Yandex, nie tylko w Google.",
      "Практическая настройка Вебмастера, Метрики, карт и Директа для проектов с подтверждённой русскоязычной аудиторией.",
      "Яндекс Вебмастер, Метрика, Директ — коли аудиторія шукає в Яндексі, а не лише в Google.",
    ),
    honestNote: L(
      "Skip Yandex if 100% Poland/EU Google traffic. Mandatory if RU/UA/BY clients are core revenue.",
      "Pomiń Yandex jeśli 100% ruchu z Google PL/EU. Obowiązkowy jeśli klienci RU/UA/BY to core revenue.",
      "Данные аналитики и CRM показывают вклад Яндекса в трафик, заявки и выручку конкретного проекта.",
      "Пропусти Яндекс, якщо 100% трафіку з Google PL/EU. Обовʼязковий, якщо клієнти RU/UA/BY — core revenue.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Инструменты Яндекса полезны бизнесу, чья русскоязычная аудитория использует этот поиск. Базовая система объединяет Вебмастер для индексации, Метрику для поведения и целей, карты для локальной видимости и Директ для платного спроса. Решение принимают по реальным источникам трафика, заявок и выручки бизнеса.",
        sections: [
          {
            heading: "Как понять ценность Яндекса для проекта?",
            paragraphs: [
              "Откройте данные аналитики, CRM и рекламных кабинетов за последние месяцы. Сравните страны, языки, поисковые системы, конверсии и выручку. Проверьте частотность основных запросов и присутствие конкурентов в выдаче. Русскоязычная версия сайта должна иметь полноценные услуги, контакты, цены и локальные условия. Выделяйте время на канал, который подтверждает спрос или поддерживает стратегически важный рынок.",
            ],
          },
          {
            heading: "Как подключить Яндекс Вебмастер?",
            paragraphs: [
              "Добавьте сайт, подтвердите права через DNS или meta-тег и отправьте sitemap.xml. Укажите главное зеркало, проверьте региональность и следите за диагностикой. Раздел индексирования показывает загруженные страницы, исключённые URL и изменения структуры. Используйте проверку страницы после важных публикаций. Canonical, robots.txt, статусы ответа и внутренние ссылки должны согласованно показывать поисковому роботу актуальную версию контента.",
            ],
          },
          {
            heading: "Как настроить Яндекс Метрику?",
            paragraphs: [
              "Создайте счётчик, установите код на все страницы и настройте согласие пользователей согласно региону работы. Добавьте цели для формы, звонка, мессенджера, бронирования и покупки. Параметры визита помогают различать услуги, города и кампании. Вебвизор и карты взаимодействий используйте с понятной политикой обработки данных. Проверьте каждую цель реальным действием и сохраните названия событий в документации проекта.",
            ],
          },
          {
            heading: "Как подготовить локальную видимость?",
            paragraphs: [
              "Карточка организации получает точное название, категорию, адрес, телефон, график, фотографии и ссылку на релевантную страницу. Данные на сайте и в картах должны совпадать. Просите отзывы после завершённой услуги и отвечайте содержательно. Страницы городов создавайте для фактической географии работы и наполняйте локальными примерами, условиями выезда, ценами и вопросами клиентов.",
            ],
          },
          {
            heading: "Как оценивать Яндекс Директ?",
            paragraphs: [
              "Начните с поисковой кампании на одну услугу и ограниченный регион. Используйте точные формулировки, исключающие слова, релевантный лендинг и недельный лимит. Метрика связывает объявления с целями, а CRM показывает качество обращений. Через две недели сравните цену лида, продажи и выручку с другими каналами. Дальнейший бюджет получает связка с подтверждённой экономикой.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Services in Russia, Belarus, eastern Ukraine", "Russian-language site", "Allegro + CIS export"],
      ["Usługi w Rosji, Białorusi, wsch. Ukrainie", "Strona po rosyjsku", "Eksport Allegro + CIS"],
      ["Услуги в РФ, Беларуси, восточной Украине", "Сайт на русском", "Экспорт Allegro + СНГ"],
      ["Послуги в РФ, Білорусі, сх. Україні", "Сайт російською", "Експорт Allegro + СНГ"],
    ),
    avoidIf: LA(
      ["Only UK/DE/PL Google market", "No Russian-language publishing plan"],
      ["Tylko rynek UK/DE/PL Google", "Brak planu treści cyrylicą"],
      ["Для рынка UK/DE/PL направьте ресурсы в Google", "Подготовьте регулярный план русскоязычного контента"],
      ["Лише ринок UK/DE/PL Google", "Немає плану контенту кирилицею"],
    ),
    relatedGuides: ["yandex-for-ru-market", "website-launch-checklist-full"],
    relatedStacks: ["yandex-webmaster", "yandex-metrica", "yandex-direct"],
    phases: [
      {
        code: "01",
        title: L("Yandex Webmaster", "Yandex Webmaster", "Как подключить Яндекс Вебмастер?", "Яндекс Вебмастер"),
        body: L(
          "webmaster.yandex.ru → Add site → verify (meta tag or DNS) → submit sitemap → check indexing tab weekly.",
          "webmaster.yandex.ru → Dodaj stronę → weryfikacja (meta lub DNS) → sitemap → zakładka indeksacji co tydzień.",
          "webmaster.yandex.ru → Добавить сайт → верификация (meta или DNS) → sitemap → вкладка индексации раз в неделю.",
          "webmaster.yandex.ru → Додати сайт → верифікація (meta або DNS) → sitemap → вкладка індексації щотижня.",
        ),
        doneWhen: L(
          "Site status OK; main pages in index or awaiting",
          "Status OK; główne strony w indeksie lub oczekują",
          "Статус OK; главные страницы в индексе или ожидают",
          "Статус OK; головні сторінки в індексі або очікують",
        ),
      },
      {
        code: "02",
        title: L("Yandex Metrica", "Yandex Metrica", "Как настроить Яндекс Метрику?", "Яндекс Метрика"),
        body: L(
          "metrica.yandex.ru → counter → paste code in site → enable Webvisor only if you accept recording (GDPR note).",
          "metrica.yandex.ru → licznik → kod na stronie → Webvisor tylko jeśli akceptujesz nagrywanie (GDPR).",
          "metrica.yandex.ru → счётчик → код на сайте → цели → настройка Webvisor согласно политике данных и требованиям региона.",
          "metrica.yandex.ru → лічильник → код на сайті → Webvisor лише якщо ок із записом (GDPR).",
        ),
        doneWhen: L(
          "Dashboard shows visits; goals set for form submit",
          "Panel pokazuje wizyty; cele na formularz",
          "Панель показывает визиты; цели на отправку формы",
          "Панель показує візити; цілі на відправку форми",
        ),
      },
      {
        code: "03",
        title: L("Yandex Direct (optional)", "Yandex Direct (opcjonalnie)", "Как запустить Яндекс Директ?", "Яндекс Директ (опційно)"),
        body: L(
          "direct.yandex.ru → search ads → same rules as Google: cap budget, exact keywords, landing = ad text.",
          "direct.yandex.ru → reklama w wyszukiwarce → te same zasady co Google: limit, dokładne słowa, landing = tekst reklamy.",
          "direct.yandex.ru → поисковая реклама → те же правила что Google: лимит, точные ключи, лендинг = текст объявления.",
          "direct.yandex.ru → пошукова реклама → ті самі правила що Google: ліміт, точні ключі, лендинг = текст оголошення.",
        ),
        doneWhen: L(
          "Campaign live with weekly budget limit or consciously skipped with written reason",
          "Kampania live z limitem tygodniowym lub świadomie pominięta z powodem",
          "Кампания live с недельным лимитом или осознанно пропущена с причиной",
          "Кампанія live з тижневим лімітом або свідомо пропущена з причиною",
        ),
      },
    ],
    risks: LA(
      ["Ignoring Google while doing only Yandex", "Metrica without goals", "Direct with broken Cyrillic landing"],
      ["Ignorowanie Google przy samym Yandex", "Metrica bez celów", "Direct ze złym landingiem cyrylicą"],
      ["Сравнивайте Яндекс с Google", "Настройте цели в Метрике", "Проверьте кириллицу и оффер лендинга"],
      ["Ігнор Google при лише Яндексі", "Метрика без цілей", "Директ зі зламаною кирилицею на лендингу"],
    ),
  },
  {
    id: "frameworks-2026",
    tag: "MKT-05",
    title: L(
      "Pick a framework in 2026",
      "Wybór frameworka w 2026",
      "Как выбрать фреймворк для сайта в 2026 году?",
      "Вибір фреймворку в 2026",
    ),
    description: L(
      "Astro vs Next.js vs Remix vs SvelteKit — decision guide for non-developers and vibe coders.",
      "Astro vs Next.js vs Remix vs SvelteKit — przewodnik dla nietechnicznych i vibe coderów.",
      "Практический выбор между Astro, Next.js, Shopify, Remix, SvelteKit и Nuxt по функциям, команде, хостингу и стоимости поддержки.",
      "Astro vs Next.js vs Remix vs SvelteKit — гайд для нетech і vibe coderів.",
    ),
    honestNote: L(
      "Default simple site 2026: Astro + Cloudflare. Next.js 15+ for apps. Don't let AI pick randomly.",
      "Domyślnie prosta strona 2026: Astro + Cloudflare. Next.js 15+ na aplikacje. Nie pozwól AI wybrać losowo.",
      "Требования продукта, опыт команды и модель поддержки определяют подходящий стек и предсказуемый запуск.",
      "За замовчуванням простий сайт 2026: Astro + Cloudflare. Next.js 15+ для застосунків. Не давай AI обрати наугад.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Фреймворк выбирают по функциям проекта, способу обновления контента, опыту команды и модели хостинга. Astro подходит контентным и корпоративным сайтам, Next.js — приложениям с серверной логикой, Shopify — магазинам, а знакомый команде стек обеспечивает быстрый и предсказуемый выпуск продукта в срок.",
        sections: [
          {
            heading: "Какие требования определить перед выбором?",
            paragraphs: [
              "Опишите количество страниц, частоту обновлений, роли редакторов, вход пользователей, платежи, базу данных, интеграции и ожидаемую нагрузку. Укажите требования к SEO, мультиязычности, персонализации и времени запуска. Отдельно зафиксируйте компетенции команды и бюджет поддержки на год. Эта карта превращает выбор технологии в проверяемое решение и помогает оценить стоимость разработки, хостинга, обновлений и передачи проекта.",
            ],
          },
          {
            heading: "Для каких сайтов подходит Astro?",
            paragraphs: [
              "Astro хорошо работает для портфолио, сайтов услуг, документации, блогов и каталогов с контентом. Страницы могут генерироваться заранее и быстро загружаться, а интерактивные компоненты подключаются точечно. Markdown или headless CMS дают удобное редактирование. Команда получает простую структуру, компактный клиентский JavaScript и широкий выбор хостинга. Такой стек особенно эффективен, когда основная ценность проекта сосредоточена в содержании и поисковой видимости.",
            ],
          },
          {
            heading: "Для каких задач подходит Next.js?",
            paragraphs: [
              "Next.js подходит кабинетам, SaaS, билетным системам, сложным формам, персонализированным страницам и продуктам с серверными действиями. App Router объединяет маршруты, серверные компоненты, metadata и обработчики запросов. Экосистема Vercel ускоряет деплой, preview и наблюдаемость. Проект получает пользу от Next.js, когда интерактивность, данные и продуктовая логика занимают заметную часть архитектуры.",
            ],
          },
          {
            heading: "Когда выбирать Shopify или другой знакомый стек?",
            paragraphs: [
              "Shopify даёт готовую основу для каталога, корзины, checkout, платежей и управления заказами. Физические товары и стандартная торговая логика запускаются быстрее на специализированной платформе. Remix, SvelteKit и Nuxt разумны для команды с соответствующим опытом и подходящей экосистемой. Знание инструментов ускоряет диагностику, ревью, найм и поддержку, поэтому опыт команды входит в ключевые критерии выбора.",
            ],
          },
          {
            heading: "Как подтвердить решение до разработки?",
            paragraphs: [
              "Создайте короткий технический прототип: одна страница, источник данных, форма, деплой и ключевая интеграция. Измерьте скорость сборки, размер клиентского кода и понятность структуры для команды. Запишите выбранный стек, причины, альтернативы и условия пересмотра в ADR или README. Такой документ сохраняет контекст и направляет будущие решения проекта.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Choosing stack before first commit", "Comparing AI agent friendliness", "Explaining choice to client"],
      ["Wybór stacku przed pierwszym commitem", "Porównanie AI agent friendliness", "Wyjaśnienie wyboru klientowi"],
      ["Выбор стека до первого коммита", "Сравнение дружелюбности к AI-агентам", "Объяснение выбора клиенту"],
      ["Вибір stack до першого коміту", "Порівняння AI agent friendliness", "Пояснення вибору клієнту"],
    ),
    avoidIf: LA(
      ["Stack already works and ships", "You need deep framework tutorial — use docs"],
      ["Stack już działa i jest na produkcji", "Potrzebujesz tutoriala frameworka — docs"],
      ["Для работающего production-стека развивайте текущую архитектуру", "Для глубокого изучения используйте официальную документацию"],
      ["Stack уже працює на проді", "Потрібен туторіал фреймворку — docs"],
    ),
    relatedGuides: ["frameworks-pick-2026", "make-website-yourself"],
    relatedStacks: ["astro", "nextjs", "remix", "sveltekit", "nuxt"],
    phases: [
      {
        code: "01",
        title: L("Static brochure → Astro", "Broszura statyczna → Astro", "Когда выбрать Astro?", "Статична візитка → Astro"),
        body: L(
          "5–20 pages, no login, contact form, blog in Markdown. Fast, cheap hosting, AI agents understand it well.",
          "5–20 stron, bez logowania, formularz, blog w Markdown. Szybko, tanio, AI dobrze to rozumie.",
          "5–20 публичных страниц, форма и блог в Markdown. Быстрая загрузка, доступный хостинг и понятная для AI-агента структура.",
          "5–20 сторінок, без логіну, форма, блог у Markdown. Швидко, дешево, AI добре розуміє.",
        ),
        doneWhen: L(
          "You wrote: my project = static brochure → Astro",
          "Napisałeś: mój projekt = statyczna broszura → Astro",
          "Написал: мой проект = статичная визитка → Astro",
          "Написав: мій проєкт = статична візитка → Astro",
        ),
      },
      {
        code: "02",
        title: L("App with auth → Next.js 15+", "Aplikacja z logowaniem → Next.js 15+", "Когда выбрать Next.js?", "Застосунок з входом → Next.js 15+"),
        body: L(
          "Tickets, SaaS, dashboards, payments, user accounts. Vercel hosting, server actions, large AI training data.",
          "Bilety, SaaS, dashboardy, płatności, konta. Hosting Vercel, server actions, dużo danych treningowych AI.",
          "Билеты, SaaS, дашборды, оплата, аккаунты. Хостинг Vercel, server actions, много обучающих данных у AI.",
          "Квитки, SaaS, дашборди, оплата, акаунти. Хостинг Vercel, server actions, багато тренувальних даних у AI.",
        ),
        doneWhen: L(
          "You need login OR database → Next.js, not Astro",
          "Potrzebujesz logowania LUB bazy → Next.js, nie Astro",
          "Вход пользователей или база данных подтверждают выбор Next.js",
          "Потрібен вхід АБО база → Next.js, не Astro",
        ),
      },
      {
        code: "03",
        title: L("Shop → Shopify first", "Sklep → najpierw Shopify", "Когда выбрать Shopify?", "Магазин → спочатку Shopify"),
        body: L(
          "Physical/digital products, cart, payments — Shopify unless custom checkout is revenue-critical.",
          "Produkty, koszyk, płatności — Shopify, chyba że custom checkout jest krytyczny dla revenue.",
          "Товары, корзина и оплата получают готовую торговую основу Shopify; особая логика checkout обосновывает custom-разработку.",
          "Товари, кошик, оплата — Shopify, якщо custom checkout не критичний для revenue.",
        ),
        doneWhen: L(
          "Product count and payment path documented; Shopify or custom decision made",
          "Liczba produktów i płatności opisane; decyzja Shopify lub custom",
          "Количество товаров и оплата описаны; решение Shopify или custom",
          "Кількість товарів і оплата описані; рішення Shopify або custom",
        ),
      },
      {
        code: "04",
        title: L("Remix / SvelteKit / Nuxt", "Remix / SvelteKit / Nuxt", "Когда выбрать Remix, SvelteKit или Nuxt?", "Remix / SvelteKit / Nuxt"),
        body: L(
          "Remix: forms-heavy apps. SvelteKit: fast UI, smaller bundles. Nuxt: Vue ecosystem, content sites. Pick if team already knows it.",
          "Remix: aplikacje z formularzami. SvelteKit: szybki UI. Nuxt: Vue, strony content. Wybierz jeśli zespół już zna.",
          "Remix: формы и веб-приложения. SvelteKit: быстрый UI. Nuxt: Vue, контент. Выбирай, если команда уже знает.",
          "Remix: форми й веб-застосунки. SvelteKit: швидкий UI. Nuxt: Vue, контент. Обирай, якщо команда вже знає.",
        ),
        doneWhen: L(
          "You have a reason beyond 'AI suggested it'",
          "Masz powód poza 'AI tak zaproponowało'",
          "Причина выбора записана через требования проекта и опыт команды",
          "Є причина крім 'AI так запропонував'",
        ),
      },
    ],
    risks: LA(
      ["Next.js for 5-page plumber site", "Framework tourism — switching mid-project", "No hosting plan matched to framework"],
      ["Next.js na stronę hydraulika", "Turystyka frameworków — zmiana w połowie", "Hosting nie pasuje do frameworka"],
      ["Соразмеряйте Next.js с задачей проекта", "Фиксируйте стек до основной разработки", "Согласуйте хостинг с фреймворком"],
      ["Next.js для сайту сантехніка", "Туризм фреймворками — зміна в середині", "Хостинг не підходить до фреймворку"],
    ),
  },
  {
    id: "best-practices-2026",
    tag: "MKT-06",
    title: L(
      "Launch checklist 2026",
      "Checklista launch 2026",
      "Как проверить сайт перед запуском в 2026 году?",
      "Чеклист запуску 2026",
    ),
    description: L(
      "Mobile-first, forms, HTTPS, one H1, env vars, backups — and don't let AI rewrite everything.",
      "Mobile-first, formularze, HTTPS, jedno H1, env vars, backupy — i nie pozwól AI przepisać wszystkiego.",
      "Практический чеклист production-запуска: mobile, формы, скорость, SEO, аналитика, HTTPS, env vars, доступы, резервные копии и handoff.",
      "Mobile-first, форми, HTTPS, один H1, env vars, backup — і не давай AI переписати все.",
    ),
    honestNote: L(
      "This is the boring list that saves you when something breaks at 11pm.",
      "To nudna lista, która ratuje gdy coś padnie o 23:00.",
      "Последовательная проверка делает запуск предсказуемым и даёт владельцу понятный путь восстановления.",
      "Це нудний список, який рятує, коли щось падає о 23:00.",
    ),
    seoArticle: {
      ru: {
        label: "Практический гайд · 5 минут",
        intro:
          "Проверка сайта перед запуском подтверждает работу мобильной версии, форм, SEO, аналитики, безопасности и резервного восстановления. Команда проходит чеклист на production-домене, отправляет тестовые заявки, проверяет индексирование и фиксирует ответственных. Такой процесс делает публикацию управляемой и сохраняет путь восстановления для владельца проекта.",
        sections: [
          {
            heading: "Как проверить пользовательский путь?",
            paragraphs: [
              "Откройте сайт на нескольких телефонах и компьютерах, пройдите меню, основные страницы и каждое целевое действие. Отправьте форму с реальными данными, нажмите телефон, откройте мессенджер, оформите тестовый заказ или бронирование. Проверьте письмо клиенту и уведомление владельцу. Тексты кнопок должны ясно описывать действие, поля формы — запрашивать только нужные данные, а сообщения об успехе — объяснять следующий шаг и срок ответа.",
            ],
          },
          {
            heading: "Как проверить скорость и доступность?",
            paragraphs: [
              "Запустите PageSpeed для ключевых шаблонов на mobile и desktop, затем исправьте крупные изображения, сдвиги макета и блокирующие ресурсы. Проверьте управление клавиатурой, видимый focus, подписи полей, alt изображений и контраст текста. Увеличьте область нажатия мобильных кнопок и протестируйте масштабирование. Реальное устройство и медленное соединение показывают опыт пользователя точнее одного лабораторного балла.",
            ],
          },
          {
            heading: "Как проверить техническое SEO?",
            paragraphs: [
              "Каждая публичная страница получает уникальный title, description, H1, canonical и корректный язык документа. robots.txt открывает нужные разделы, sitemap содержит канонические URL, а служебные страницы получают подходящие правила индексирования. Проверьте статусы ответа, редиректы, хлебные крошки, Open Graph и structured data. После публикации добавьте ресурс в Search Console и отправьте sitemap.",
            ],
          },
          {
            heading: "Как защитить данные и доступы?",
            paragraphs: [
              "Храните API-ключи в переменных окружения, ограничивайте права интеграций и включайте двухфакторную защиту аккаунтов. Проверьте политику cookies, согласие пользователя, HTTPS и срок хранения заявок. Назначьте владельцев домена, хостинга, аналитики и почты. Список доступов храните в защищённом менеджере, а процесс замены ключей и паролей опишите в короткой инструкции.",
            ],
          },
          {
            heading: "Как подготовить восстановление и передачу?",
            paragraphs: [
              "Создайте резервную копию кода и данных, отметьте рабочий commit и сохраните предыдущий deployment. Документируйте DNS, переменные окружения, команды сборки, интеграции и контакты поддержки. Владелец должен уметь проверить заявку, обновить основной контент и найти статус сервисов. Финальный handoff включает доступы, запись короткого walkthrough и календарь регулярных проверок.",
            ],
          },
        ],
      },
    },
    bestFor: LA(
      ["Before every production deploy", "After AI did a big refactor", "Handoff to non-tech owner"],
      ["Przed każdym deployem produkcyjnym", "Po dużym refaktorze AI", "Przekazanie nietechnicznemu właścicielowi"],
      ["Перед каждым продакшен-деплоем", "После большого рефактора AI", "Передача нетech-владельцу"],
      ["Перед кожним production deploy", "Після великого рефактору AI", "Передача нетech-власнику"],
    ),
    avoidIf: LA(
      ["Throwaway prototype only on localhost"],
      ["Jednorazowy prototyp tylko na localhost"],
      ["Одноразовый прототип только на localhost"],
      ["Одноразовий прототип лише на localhost"],
    ),
    relatedGuides: ["website-launch-checklist-full", "ai-website-mistakes"],
    relatedStacks: ["cloudflare-pages", "vercel"],
    phases: [
      {
        code: "01",
        title: L("Mobile & speed", "Mobile i szybkość", "Как проверить mobile и скорость?", "Мобільний і швидкість"),
        body: L(
          "Open site on phone: readable text, tappable buttons, form works. Run PageSpeed once — fix only red flags.",
          "Otwórz na telefonie: czytelny tekst, klikalne przyciski, forma działa. PageSpeed raz — napraw tylko czerwone flagi.",
          "Открой на телефоне: читаемый текст, кнопки нажимаются, форма работает. PageSpeed раз — чини только красные флаги.",
          "Відкрий на телефоні: читабельний текст, кнопки натискаються, форма працює. PageSpeed раз — лагодь лише червоні прапорці.",
        ),
        doneWhen: L(
          "You completed a real form submit on mobile",
          "Wysłałeś prawdziwy formularz na mobile",
          "Отправил реальную форму с телефона",
          "Відправив реальну форму з телефону",
        ),
      },
      {
        code: "02",
        title: L("SEO & structure", "SEO i struktura", "Как проверить SEO и структуру?", "SEO та структура"),
        body: L(
          "One H1 per page, unique titles, HTTPS green lock, robots.txt allows index, sitemap submitted.",
          "Jedno H1, unikalne title, HTTPS, robots.txt pozwala indeksować, sitemap wysłany.",
          "Один H1, уникальные title, HTTPS, robots.txt разрешает индекс, sitemap отправлен.",
          "Один H1, унікальні title, HTTPS, robots.txt дозволяє індекс, sitemap надісланий.",
        ),
        doneWhen: L(
          "View-source on home: 1× H1, HTTPS, title mentions your business name",
          "Źródło głównej: 1× H1, HTTPS, title z nazwą firmy",
          "Код главной: 1× H1, HTTPS, title с названием бизнеса",
          "Код головної: 1× H1, HTTPS, title з назвою бізнесу",
        ),
      },
      {
        code: "03",
        title: L("Secrets & backups", "Sekrety i backupy", "Как проверить доступы и резервные копии?", "Секрети й backup"),
        body: L(
          "API keys in env vars only — never in git. Export repo zip monthly. Document where domain DNS lives.",
          "Klucze API tylko w env vars — nigdy w git. Zip repo co miesiąc. Zapisz gdzie jest DNS domeny.",
          "Храни API keys в env vars и secret storage. Создавай архив repo каждый месяц. Запиши владельца и расположение DNS домена.",
          "API keys лише в env vars — ніколи в git. Zip repo щомісяця. Запиши, де DNS домену.",
        ),
        doneWhen: L(
          "grep for API_KEY in repo returns nothing; backup date in README or calendar",
          "grep API_KEY w repo nic nie zwraca; data backupu w README lub kalendarzu",
          "Проверка секретов подтверждает чистый repo; дата бэкапа записана в README или календаре",
          "grep API_KEY у repo нічого не знаходить; дата backup у README або календарі",
        ),
      },
      {
        code: "04",
        title: L("Human review after AI", "Human review po AI", "Как провести human review после AI?", "Human review після AI"),
        body: L(
          "Read every customer-facing paragraph aloud. If it fits any business — rewrite. Small commits, not full rewrite.",
          "Przeczytaj na głos każdy akapit dla klienta. Jeśli pasuje do każdej firmy — przepisz. Małe commity, nie full rewrite.",
          "Прочитай вслух каждый абзац для клиента. Уточни тексты через реальные услуги, географию и доказательства. Сохраняй изменения маленькими коммитами.",
          "Прочитай вголос кожен абзац для клієнта. Якщо підходить будь-якому бізнесу — перепиши. Маленькі коміти, не full rewrite.",
        ),
        doneWhen: L(
          "Hero text is unique; you reviewed git diff before last deploy",
          "Hero unikalny; przejrzałeś git diff przed ostatnim deployem",
          "Hero уникален; посмотрел git diff перед последним деплоем",
          "Hero унікальний; переглянув git diff перед останнім deploy",
        ),
      },
    ],
    risks: LA(
      ["Skipping checklist after 'small' AI change", "No backup before DNS change", "Publishing with placeholder phone"],
      ["Pominięcie checklisty po 'małej' zmianie AI", "Brak backupu przed zmianą DNS", "Publikacja z placeholder telefonem"],
      ["Проходите чеклист после каждой правки AI", "Создавайте бэкап перед сменой DNS", "Проверяйте реальные контакты перед публикацией"],
      ["Пропуск чеклиста після 'малої' правки AI", "Немає backup перед зміною DNS", "Публікація з placeholder-телефоном"],
    ),
  },
];

export const marketingPipelineSlugs = marketingPipelines.map((p) => p.id);

export function getMarketingPipeline(slug: string) {
  return marketingPipelines.find((p) => p.id === slug);
}
