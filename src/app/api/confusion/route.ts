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

  const { quote, pageUrl, locale, comment, userAgent } = body;

  if (!quote?.trim() || !pageUrl?.trim() || !locale?.trim()) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const truncatedQuote = quote.trim().slice(0, 500);

  const text = [
    "❓ Непонятный фрагмент на сайте",
    "",
    `Страница: ${pageUrl.trim()}`,
    `Язык: ${locale.trim()}`,
    userAgent ? `UA: ${userAgent.slice(0, 200)}` : "",
    "",
    "Цитата:",
    truncatedQuote,
    comment?.trim() ? `\nКомментарий:\n${comment.trim()}` : "",
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
