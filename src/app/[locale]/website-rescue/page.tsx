import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
import { site } from "@/content/site";
import { JsonLd } from "@/components/json-ld";
import {
  VintageBlock,
  VintageBulletList,
  VintagePageHeader,
  VintageSectionHeader,
} from "@/components/vintage/VintagePage";
import { VHSButton } from "@/components/vintage/VHSButton";

const copy = {
  en: {
    tag: "Website rescue audit",
    title: "Find where your website loses leads before rebuilding it",
    description:
      "A focused rescue audit for small business websites: mobile CTA, forms, booking flow, trust blocks, basic SEO and the fastest fixes.",
    intro:
      "I do not start by selling a redesign. First I check the path a real visitor takes from phone to contact, booking or form submission, then I show what is worth fixing first.",
    price: "From 500 PLN / EUR 115",
    timeline: "2-5 business days",
    primaryCta: "Request rescue audit",
    secondaryCta: "Send URL on Telegram",
    whyTitle: "Use this when",
    why: [
      "The site exists, but leads are weak or inconsistent.",
      "Mobile visitors have to search too hard for call, form or booking.",
      "You are not sure whether to fix the current site or rebuild it.",
      "Someone already built an AI/Cursor draft, but it still feels unfinished.",
    ],
    checksTitle: "What I check",
    checks: [
      "Mobile first screen, CTA and click-to-call path.",
      "Forms, booking links, contact options and visible next step.",
      "Title, description, H1, local intent and basic indexability.",
      "Trust signals near the conversion path: reviews, proof, photos, cases.",
      "Simple technical signals: schema, canonical, sitemap and broken friction.",
    ],
    outputTitle: "What you get",
    output: [
      "A short written audit with 3-7 prioritized fixes.",
      "Notes on what can be fixed quickly and what needs a rebuild.",
      "A fixed-scope rescue estimate if implementation makes sense.",
      "The audit fee can be credited toward a rescue sprint or rebuild within 14 days.",
    ],
    proofTitle: "Why this is not a generic SEO report",
    proof:
      "The audit is based on concrete checks, not vague claims. If I say something is missing, it must be visible in the page/code review or marked as something to verify manually.",
    notTitle: "Not a fit if",
    not: [
      "You want guaranteed Google rankings.",
      "You need a full brand strategy deck before fixing obvious site friction.",
      "You want bulk cold-email claims without checking the actual website.",
    ],
    sampleTitle: "What does one audit finding look like?",
    sampleIntro: "Every recommendation connects visible evidence with business impact and a concrete next action.",
    sampleLabels: ["Finding", "Evidence", "Impact", "Action"],
    sample: [
      "The mobile first screen hides the primary contact path.",
      "At 390 px width, the first call or form link appears after three screen heights.",
      "Ready buyers spend extra time searching for the next step.",
      "Place one primary CTA beside the offer and repeat it after proof.",
    ],
    outcomesTitle: "What can happen after the audit?",
    outcomes: [
      { title: "Keep", body: "The current site has a solid base and receives a prioritized improvement list." },
      { title: "Rescue sprint", body: "A focused sprint repairs the highest-impact conversion and technical issues." },
      { title: "Rebuild", body: "A new build starts from confirmed requirements, reusable assets and a clear scope." },
    ],
    faqTitle: "What do clients usually ask?",
    faqs: [
      { q: "What should I send?", a: "Send the public URL, business goal, main concern and any available analytics or Search Console context." },
      { q: "Which platforms can you review?", a: "WordPress, Wix, Shopify, Next.js, Astro and custom sites can all be reviewed through the visitor path and technical signals." },
      { q: "Can the audit fee count toward implementation?", a: "Yes. The fee can be credited toward an agreed rescue sprint or rebuild started within 14 days." },
      { q: "What result should I expect?", a: "You receive evidence, priorities and an implementation decision. Search growth depends on the market, content and completed work." },
    ],
    linksTitle: "Where can you continue?",
    links: ["Audit service", "Rescue pipeline", "Launch checklist", "Relevant case"],
    bottomTitle: "Ready for a concrete diagnosis?",
    bottomBody: "Send the URL and the business result you want. I will confirm the audit scope and the first useful step.",
  },
  pl: {
    tag: "Audyt rescue strony",
    title: "Sprawdź, gdzie strona traci zapytania, zanim zrobisz przebudowę",
    description:
      "Skoncentrowany audyt rescue dla małej firmy: mobile CTA, formularze, booking, zaufanie, podstawowe SEO i najszybsze poprawki.",
    intro:
      "Nie zaczynam od sprzedaży redesignu. Najpierw sprawdzam drogę użytkownika z telefonu do kontaktu, rezerwacji albo formularza, a potem pokazuję, co warto poprawić jako pierwsze.",
    price: "Od 500 PLN / 115 EUR",
    timeline: "2-5 dni roboczych",
    primaryCta: "Zamów audyt rescue",
    secondaryCta: "Wyślij URL na Telegram",
    whyTitle: "Kiedy ma sens",
    why: [
      "Strona istnieje, ale zapytania są słabe albo nieregularne.",
      "Użytkownik z telefonu musi za długo szukać telefonu, formularza albo bookingu.",
      "Nie wiesz, czy lepiej naprawić obecną stronę, czy budować nową.",
      "Strona była składana szybko z AI/Cursor, ale nadal wygląda jak niedokończony draft.",
    ],
    checksTitle: "Co sprawdzam",
    checks: [
      "Pierwszy ekran mobile, CTA i ścieżkę click-to-call.",
      "Formularze, linki do rezerwacji, kontakt i widoczny następny krok.",
      "Title, description, H1, lokalny intent i podstawową indeksowalność.",
      "Sygnały zaufania przy ścieżce konwersji: opinie, dowody, zdjęcia, case'y.",
      "Proste sygnały techniczne: schema, canonical, sitemap i miejsca tarcia.",
    ],
    outputTitle: "Co dostajesz",
    output: [
      "Krótki pisemny audyt z 3-7 priorytetowymi poprawkami.",
      "Notatki: co da się poprawić szybko, a co wymaga przebudowy.",
      "Estymację rescue sprintu, jeśli wdrożenie ma sens.",
      "Koszt audytu można odliczyć od rescue sprintu albo przebudowy w ciągu 14 dni.",
    ],
    proofTitle: "Dlaczego to nie jest generyczny raport SEO",
    proof:
      "Audyt opiera się na konkretnych sprawdzeniach, nie na luźnych claimach. Jeśli piszę, że czegoś brakuje, musi to wynikać z review strony/kodu albo być oznaczone jako punkt do ręcznej weryfikacji.",
    notTitle: "To nie jest dla Ciebie, jeśli",
    not: [
      "Oczekujesz gwarantowanej pozycji w Google.",
      "Potrzebujesz dużej strategii marki zanim naprawimy oczywiste tarcia na stronie.",
      "Chcesz masowych cold-email claimów bez sprawdzania realnej strony.",
    ],
    sampleTitle: "Jak wygląda jeden punkt audytu?",
    sampleIntro: "Każda rekomendacja łączy widoczny dowód, wpływ biznesowy i konkretne następne działanie.",
    sampleLabels: ["Problem", "Dowód", "Wpływ", "Działanie"],
    sample: [
      "Pierwszy ekran mobile ukrywa główną ścieżkę kontaktu.",
      "Przy szerokości 390 px pierwszy telefon lub formularz pojawia się po trzech ekranach.",
      "Zdecydowany klient poświęca dodatkowy czas na szukanie kolejnego kroku.",
      "Umieścić jedno główne CTA obok oferty i powtórzyć je po dowodach.",
    ],
    outcomesTitle: "Co może wydarzyć się po audycie?",
    outcomes: [
      { title: "Zachować", body: "Obecna strona ma dobrą bazę i otrzymuje priorytetową listę ulepszeń." },
      { title: "Rescue sprint", body: "Krótki sprint naprawia najważniejsze problemy konwersji i techniki." },
      { title: "Rebuild", body: "Nowa wersja startuje z potwierdzonych wymagań, materiałów i jasnego zakresu." },
    ],
    faqTitle: "O co najczęściej pytają klienci?",
    faqs: [
      { q: "Co mam wysłać?", a: "Wyślij publiczny URL, cel biznesowy, główną obawę oraz dostępny kontekst z analityki lub Search Console." },
      { q: "Jakie platformy możesz sprawdzić?", a: "WordPress, Wix, Shopify, Next.js, Astro i rozwiązania custom można ocenić przez ścieżkę użytkownika i sygnały techniczne." },
      { q: "Czy koszt audytu przechodzi na wdrożenie?", a: "Tak. Koszt można odliczyć od uzgodnionego rescue sprintu lub rebuild rozpoczętego w ciągu 14 dni." },
      { q: "Jakiego wyniku oczekiwać?", a: "Otrzymasz dowody, priorytety i decyzję wdrożeniową. Wzrost z wyszukiwarki zależy od rynku, treści i wykonanych działań." },
    ],
    linksTitle: "Gdzie przejść dalej?",
    links: ["Usługa audytu", "Pipeline rescue", "Checklista startu", "Powiązany case"],
    bottomTitle: "Gotowy na konkretną diagnozę?",
    bottomBody: "Wyślij URL i oczekiwany wynik biznesowy. Potwierdzę zakres audytu i pierwszy użyteczny krok.",
  },
  ru: {
    tag: "Rescue-аудит сайта",
    title: "Найдём, где сайт теряет заявки, до дорогой переделки",
    description:
      "Прикладной rescue-аудит для сайта малого бизнеса: mobile CTA, формы, запись, доверие, базовое SEO и самые быстрые правки.",
    intro:
      "Сначала я проверяю путь живого посетителя с телефона до звонка, формы или записи. Затем показываю приоритетные исправления и подходящий формат развития сайта.",
    price: "От 500 PLN / 115 EUR",
    timeline: "2-5 рабочих дней",
    primaryCta: "Заказать rescue-аудит",
    secondaryCta: "Отправить URL в Telegram",
    whyTitle: "Когда аудит приносит пользу?",
    why: [
      "Сайт получает мало заявок или показывает нестабильный результат.",
      "Мобильный путь к звонку, форме или записи требует упрощения.",
      "Команде нужен аргументированный выбор между ремонтом и новой сборкой.",
      "Проект после AI/Cursor требует production-проверки и завершения.",
    ],
    checksTitle: "Что входит в проверку?",
    checks: [
      "Первый экран на mobile, CTA и путь click-to-call.",
      "Формы, booking-ссылки, контактные варианты и понятный следующий шаг.",
      "Title, description, H1, локальный intent и базовую индексируемость.",
      "Доверие рядом с конверсией: отзывы, доказательства, фото, кейсы.",
      "Простую технику: schema, canonical, sitemap и сломанные места в пути.",
    ],
    outputTitle: "Какой результат вы получите?",
    output: [
      "Короткий письменный аудит с 3-7 приоритетными правками.",
      "Пояснение, что чинится быстро, а где уже нужна пересборка.",
      "Оценку rescue sprint, если внедрение имеет смысл.",
      "Стоимость аудита можно зачесть в rescue sprint или rebuild в течение 14 дней.",
    ],
    proofTitle: "Как аудит подтверждает выводы?",
    proof:
      "Каждый вывод опирается на страницу, код, измерение или отмеченную ручную проверку. Рекомендация связывает факт, влияние на путь клиента, приоритет и конкретное действие.",
    notTitle: "Когда выбрать другой формат?",
    not: [
      "Цель проекта сформулирована как гарантированная позиция в Google.",
      "Приоритетом выступает большая бренд-стратегия до работы с сайтом.",
      "Массовая cold-email система требует отдельного процесса верификации лидов.",
    ],
    sampleTitle: "Как выглядит один пункт аудита?",
    sampleIntro: "Каждая рекомендация связывает видимый факт, бизнес-влияние и конкретное следующее действие.",
    sampleLabels: ["Наблюдение", "Доказательство", "Влияние", "Действие"],
    sample: [
      "Первый экран мобильной версии скрывает основной путь к контакту.",
      "При ширине 390 px первая ссылка на звонок или форму появляется через три экрана.",
      "Готовый к обращению посетитель тратит дополнительное время на поиск следующего шага.",
      "Разместить один главный CTA рядом с оффером и повторить его после доказательств.",
    ],
    outcomesTitle: "Что происходит после аудита?",
    outcomes: [
      { title: "Сохранить", body: "Текущий сайт имеет хорошую основу и получает приоритетный список улучшений." },
      { title: "Rescue sprint", body: "Короткий sprint исправляет самые важные проблемы конверсии и технической части." },
      { title: "Rebuild", body: "Новая версия стартует с подтверждённых требований, полезных материалов и ясного scope." },
    ],
    faqTitle: "Что обычно спрашивают перед аудитом?",
    faqs: [
      { q: "Что прислать для старта?", a: "Пришлите публичный URL, бизнес-цель, главный вопрос и доступный контекст из аналитики или Search Console." },
      { q: "Какие платформы можно проверить?", a: "WordPress, Wix, Shopify, Next.js, Astro и custom-сайты проверяются через путь посетителя и технические сигналы." },
      { q: "Можно ли зачесть аудит во внедрение?", a: "Да. Стоимость засчитывается в согласованный rescue sprint или rebuild, начатый в течение 14 дней." },
      { q: "Какой эффект ожидать?", a: "Вы получите доказательства, приоритеты и решение по внедрению. Рост поиска зависит от рынка, контента и выполненных работ." },
    ],
    linksTitle: "Куда перейти дальше?",
    links: ["Услуга аудита", "Rescue pipeline", "Чеклист запуска", "Связанный кейс"],
    bottomTitle: "Готовы получить конкретный диагноз?",
    bottomBody: "Пришлите URL и желаемый бизнес-результат. Я подтвержу объём аудита и первый полезный шаг.",
  },
  uk: {
    tag: "Rescue-аудит сайту",
    title: "Знайдемо, де сайт втрачає заявки, до дорогої перебудови",
    description:
      "Практичний rescue-аудит для сайту малого бізнесу: mobile CTA, форми, запис, довіра, базове SEO і найшвидші правки.",
    intro:
      "Я не починаю з продажу редизайну. Спочатку перевіряю шлях живого відвідувача з телефону до дзвінка, форми або запису, а потім показую, що варто виправити першим.",
    price: "Від 500 PLN / 115 EUR",
    timeline: "2-5 робочих днів",
    primaryCta: "Замовити rescue-аудит",
    secondaryCta: "Надіслати URL в Telegram",
    whyTitle: "Коли це потрібно",
    why: [
      "Сайт є, але заявок мало або вони нестабільні.",
      "З телефону складно швидко знайти дзвінок, форму або запис.",
      "Незрозуміло, чинити поточний сайт чи збирати новий.",
      "Сайт уже зібраний через AI/Cursor, але виглядає як недоведена чернетка.",
    ],
    checksTitle: "Що перевіряю",
    checks: [
      "Перший екран на mobile, CTA і шлях click-to-call.",
      "Форми, booking-посилання, контактні варіанти і зрозумілий наступний крок.",
      "Title, description, H1, локальний intent і базову індексацію.",
      "Довіру поруч із конверсією: відгуки, докази, фото, кейси.",
      "Просту техніку: schema, canonical, sitemap і зламані місця в шляху.",
    ],
    outputTitle: "Що отримаєте",
    output: [
      "Короткий письмовий аудит із 3-7 пріоритетними правками.",
      "Пояснення, що можна виправити швидко, а де вже потрібна перебудова.",
      "Оцінку rescue sprint, якщо впровадження має сенс.",
      "Вартість аудиту можна зарахувати в rescue sprint або rebuild протягом 14 днів.",
    ],
    proofTitle: "Чому це не generic SEO-звіт",
    proof:
      "Аудит базується на конкретних перевірках, а не на випадкових claim-ах. Якщо я пишу, що чогось немає, це має бути видно на сторінці/в коді або позначено як пункт для ручної перевірки.",
    notTitle: "Не підійде, якщо",
    not: [
      "Потрібні гарантовані позиції в Google.",
      "Потрібна велика бренд-стратегія до виправлення очевидних проблем сайту.",
      "Потрібні масові cold-email claims без перевірки реальної сторінки.",
    ],
    sampleTitle: "Як виглядає один пункт аудиту?",
    sampleIntro: "Кожна рекомендація поєднує видимий факт, бізнес-вплив і конкретну наступну дію.",
    sampleLabels: ["Спостереження", "Доказ", "Вплив", "Дія"],
    sample: [
      "Перший екран mobile приховує основний шлях до контакту.",
      "За ширини 390 px перше посилання на дзвінок або форму з'являється через три екрани.",
      "Готовий до звернення відвідувач витрачає додатковий час на пошук наступного кроку.",
      "Розмістити один головний CTA поруч з офером і повторити його після доказів.",
    ],
    outcomesTitle: "Що відбувається після аудиту?",
    outcomes: [
      { title: "Зберегти", body: "Поточний сайт має добру основу й отримує пріоритетний список покращень." },
      { title: "Rescue sprint", body: "Короткий sprint виправляє найважливіші проблеми конверсії й технічної частини." },
      { title: "Rebuild", body: "Нова версія стартує з підтверджених вимог, корисних матеріалів і чіткого scope." },
    ],
    faqTitle: "Що зазвичай питають перед аудитом?",
    faqs: [
      { q: "Що надіслати для старту?", a: "Надішліть публічний URL, бізнес-мету, головне питання та доступний контекст з аналітики або Search Console." },
      { q: "Які платформи можна перевірити?", a: "WordPress, Wix, Shopify, Next.js, Astro і custom-сайти перевіряються через шлях відвідувача й технічні сигнали." },
      { q: "Чи можна зарахувати аудит у впровадження?", a: "Так. Вартість зараховується в погоджений rescue sprint або rebuild, розпочатий протягом 14 днів." },
      { q: "Якого ефекту очікувати?", a: "Ви отримаєте докази, пріоритети та рішення щодо впровадження. Зростання пошуку залежить від ринку, контенту й виконаних робіт." },
    ],
    linksTitle: "Куди перейти далі?",
    links: ["Послуга аудиту", "Rescue pipeline", "Чеклист запуску", "Пов'язаний кейс"],
    bottomTitle: "Готові отримати конкретний діагноз?",
    bottomBody: "Надішліть URL і бажаний бізнес-результат. Я підтверджу обсяг аудиту та перший корисний крок.",
  },
} as const;

type Locale = keyof typeof copy;

const rescueLinks = [
  "/services/audit",
  "/pipeline/rescue",
  "/guides/website-launch-checklist-full",
  "/projects/lead-scraping",
] as const;

function getCopy(locale: string) {
  return copy[(locale in copy ? locale : "en") as Locale];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = getCopy(locale);
  return buildSeoMetadata({
    locale,
    path: "/website-rescue",
    title: t.title,
    description: t.description,
  });
}

export default async function WebsiteRescuePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = getCopy(locale);
  const localePrefix = locale === "en" ? "" : `/${locale}`;
  const pageUrl = `${site.url}${localePrefix}/website-rescue`;

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.title,
    description: t.description,
    url: pageUrl,
    provider: {
      "@type": "Person",
      name: site.name,
      url: site.url,
    },
    offers: {
      "@type": "Offer",
      price: "500",
      priceCurrency: "PLN",
      url: pageUrl,
      availability: "https://schema.org/InStock",
    },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <JsonLd data={[serviceLd, faqLd]} />
      <VintagePageHeader tag={t.tag} title={t.title} subtitle={t.description} />

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <VintageBlock title={t.tag}>
            <p className="type-subtitle">{t.intro}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="border-2 border-[var(--vhs-acid)] bg-[var(--vhs-acid)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black">
                {t.price}
              </span>
              <span className="border-2 border-[var(--doom-ammo)] px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--doom-ammo)]">
                {t.timeline}
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <VHSButton
                href="/order"
                analytics={{
                  event: "rescue_cta_click",
                  location: "rescue_intro",
                  service: "audit",
                }}
              >
                {t.primaryCta}
              </VHSButton>
              <VHSButton
                href={site.telegram}
                variant="secondary"
                external
                analytics={{
                  event: "rescue_cta_click",
                  location: "rescue_intro",
                  service: "audit",
                  channel: "telegram",
                }}
              >
                {t.secondaryCta}
              </VHSButton>
            </div>
          </VintageBlock>

          <VintageBlock title={t.whyTitle}>
            <VintageBulletList items={[...t.why]} />
          </VintageBlock>
        </section>

        <section className="mt-14">
          <VintageSectionHeader
            tag="CHECKLIST"
            title={t.checksTitle}
            subtitle={t.proof}
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <VintageBlock title={t.checksTitle}>
              <VintageBulletList items={[...t.checks]} />
            </VintageBlock>
            <VintageBlock title={t.outputTitle}>
              <VintageBulletList items={[...t.output]} accent="bg-[var(--doom-ammo)]" />
            </VintageBlock>
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <VintageBlock title={t.proofTitle}>
            <p className="type-body">{t.proof}</p>
          </VintageBlock>
          <VintageBlock title={t.notTitle}>
            <VintageBulletList items={[...t.not]} accent="bg-[var(--vhs-red)]" />
          </VintageBlock>
        </section>

        <section className="mt-14">
          <VintageSectionHeader
            tag="SAMPLE / P1"
            title={t.sampleTitle}
            subtitle={t.sampleIntro}
            tagClassName="text-[var(--vhs-terminal)]"
          />
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {t.sample.map((value, index) => (
              <div
                key={t.sampleLabels[index]}
                className="border border-white/10 bg-[#101014] p-5"
              >
                <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--vhs-terminal)]">
                  {String(index + 1).padStart(2, "0")} · {t.sampleLabels[index]}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-body)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <VintageSectionHeader tag="NEXT" title={t.outcomesTitle} />
          <div className="grid gap-4 md:grid-cols-3">
            {t.outcomes.map((outcome, index) => (
              <VintageBlock key={outcome.title} title={`${index + 1}. ${outcome.title}`}>
                <p className="type-body">{outcome.body}</p>
              </VintageBlock>
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <VintageSectionHeader tag="FAQ" title={t.faqTitle} />
            <div className="space-y-3">
              {t.faqs.map((item) => (
                <details
                  key={item.q}
                  className="group border border-white/10 bg-[#101014] p-5"
                >
                  <summary className="cursor-pointer font-display text-xl uppercase text-[var(--vhs-white)] marker:text-[var(--vhs-terminal)]">
                    {item.q}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--vhs-muted)]">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div>
            <VintageSectionHeader tag="LINKS" title={t.linksTitle} />
            <div className="flex flex-col gap-3">
              {rescueLinks.map((href, index) => (
                <VHSButton key={href} href={href} variant="secondary">
                  {t.links[index]} →
                </VHSButton>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-14 border-2 border-[var(--vhs-acid)] bg-[#101014] p-6 sm:p-8">
          <p className="font-display text-3xl uppercase text-[var(--vhs-white)]">
            {t.bottomTitle}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[var(--vhs-muted)]">
            {t.bottomBody}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <VHSButton
              href="/order?service=audit"
              analytics={{
                event: "rescue_cta_click",
                location: "rescue_bottom",
                service: "audit",
              }}
            >
              {t.primaryCta}
            </VHSButton>
            <VHSButton
              href={site.telegram}
              variant="secondary"
              external
              analytics={{
                event: "rescue_cta_click",
                location: "rescue_bottom",
                service: "audit",
                channel: "telegram",
              }}
            >
              {t.secondaryCta}
            </VHSButton>
          </div>
        </section>
      </main>
    </>
  );
}
