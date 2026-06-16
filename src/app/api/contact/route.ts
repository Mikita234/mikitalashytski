import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return NextResponse.json(
      { ok: false, error: "telegram_not_configured" },
      { status: 503 },
    );
  }

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const { name, contact, service, budget, timeline, website, message } = body;

  if (!name?.trim() || !contact?.trim() || !service?.trim()) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const text = [
    "📩 Новая заявка с сайта",
    "",
    `Имя: ${name.trim()}`,
    `Контакт: ${contact.trim()}`,
    `Услуга: ${service.trim()}`,
    budget ? `Бюджет: ${budget}` : "",
    timeline ? `Срок: ${timeline}` : "",
    website ? `Сайт: ${website}` : "",
    message ? `\n${message.trim()}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const telegramRes = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true,
      }),
    },
  );

  if (!telegramRes.ok) {
    return NextResponse.json(
      { ok: false, error: "telegram_send_failed" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
