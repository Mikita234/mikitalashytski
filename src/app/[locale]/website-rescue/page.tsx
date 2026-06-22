import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildSeoMetadata } from "@/lib/seo";
import { site } from "@/content/site";
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
  },
  ru: {
    tag: "Rescue-аудит сайта",
    title: "Найдём, где сайт теряет заявки, до дорогой переделки",
    description:
      "Прикладной rescue-аудит для сайта малого бизнеса: mobile CTA, формы, запись, доверие, базовое SEO и самые быстрые правки.",
    intro:
      "Я не начинаю с продажи редизайна. Сначала проверяю путь живого посетителя с телефона до звонка, формы или записи, а потом показываю, что чинить первым.",
    price: "От 500 PLN / 115 EUR",
    timeline: "2-5 рабочих дней",
    primaryCta: "Заказать rescue-аудит",
    secondaryCta: "Отправить URL в Telegram",
    whyTitle: "Когда это нужно",
    why: [
      "Сайт есть, но заявок мало или они идут нестабильно.",
      "С телефона трудно быстро найти звонок, форму или запись.",
      "Непонятно, чинить текущий сайт или собирать новый.",
      "Сайт уже собран через AI/Cursor, но выглядит как недоведённый черновик.",
    ],
    checksTitle: "Что проверяю",
    checks: [
      "Первый экран на mobile, CTA и путь click-to-call.",
      "Формы, booking-ссылки, контактные варианты и понятный следующий шаг.",
      "Title, description, H1, локальный intent и базовую индексируемость.",
      "Доверие рядом с конверсией: отзывы, доказательства, фото, кейсы.",
      "Простую технику: schema, canonical, sitemap и сломанные места в пути.",
    ],
    outputTitle: "Что получите",
    output: [
      "Короткий письменный аудит с 3-7 приоритетными правками.",
      "Пояснение, что чинится быстро, а где уже нужна пересборка.",
      "Оценку rescue sprint, если внедрение имеет смысл.",
      "Стоимость аудита можно зачесть в rescue sprint или rebuild в течение 14 дней.",
    ],
    proofTitle: "Почему это не generic SEO-отчёт",
    proof:
      "Аудит строится на конкретных проверках, а не на случайных claim-ах. Если я пишу, что чего-то нет, это должно быть видно в странице/коде или отмечено как пункт для ручной проверки.",
    notTitle: "Не подойдёт, если",
    not: [
      "Нужны гарантированные позиции в Google.",
      "Нужна большая бренд-стратегия до исправления очевидных проблем сайта.",
      "Нужны массовые cold-email claims без проверки реальной страницы.",
    ],
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
  },
} as const;

type Locale = keyof typeof copy;

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

  return (
    <>
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
              <VHSButton href="/order">{t.primaryCta}</VHSButton>
              <VHSButton href={site.telegram} variant="secondary" external>
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
      </main>
    </>
  );
}
