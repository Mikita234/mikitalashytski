"use client";

import { useState } from "react";
import {
  orderFormServices,
  orderBudgets,
  orderTimelines,
} from "@/content/home-vintage";
import { site } from "@/content/site";
import { VHSButton } from "./VHSButton";

type FormState = "idle" | "sent" | "error";

export function OrderForm() {
  const [state, setState] = useState<FormState>("idle");
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState<string>(orderFormServices[0]);
  const [budget, setBudget] = useState<string>(orderBudgets[4]);
  const [timeline, setTimeline] = useState<string>(orderTimelines[3]);
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setState("idle");

    const payload = {
      name,
      contact,
      service,
      budget,
      timeline,
      website,
      message,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setState("sent");
        return;
      }
    } catch {
      // fall through to mailto
    } finally {
      setSubmitting(false);
    }

    const subject = encodeURIComponent(`[ORDER] ${service}`);
    const body = encodeURIComponent(
      [
        `Имя: ${name}`,
        `Контакт: ${contact}`,
        `Что нужно: ${service}`,
        `Бюджет: ${budget}`,
        `Срок: ${timeline}`,
        website ? `Текущий сайт: ${website}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setState("sent");
  }

  const inputCls =
    "w-full border-2 border-t-[#404040] border-l-[#404040] border-b-white border-r-white bg-white px-2 py-1.5 font-mono text-sm text-black outline-none focus:ring-1 focus:ring-[#000080]";

  return (
    <div className="mx-auto max-w-lg border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] shadow-lg">
      <div className="flex items-center justify-between bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1">
        <span className="font-mono text-xs font-bold text-white">
          brief_form.exe
        </span>
        <span className="font-mono text-[9px] text-white/70 rec-blink">● REC</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-4">
        {state === "sent" ? (
          <div className="space-y-3 text-center">
            <p className="font-mono text-sm font-bold text-black">
              Заявка отправлена!
            </p>
            <p className="font-mono text-xs text-[#333]">
              Если Telegram не настроен — откроется почта. Или напиши напрямую:
            </p>
            <VHSButton href={site.telegram} variant="primary" external>
              {site.telegramHandle}
            </VHSButton>
          </div>
        ) : (
          <>
            <div>
              <label htmlFor="order-name" className="mb-1 block font-mono text-xs font-bold text-black">
                Имя *
              </label>
              <input id="order-name" required value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Как к тебе обращаться" />
            </div>

            <div>
              <label htmlFor="order-contact" className="mb-1 block font-mono text-xs font-bold text-black">
                Telegram / Email *
              </label>
              <input id="order-contact" required value={contact} onChange={(e) => setContact(e.target.value)} className={inputCls} placeholder="@username или email" />
            </div>

            <div>
              <label htmlFor="order-service" className="mb-1 block font-mono text-xs font-bold text-black">
                Что нужно *
              </label>
              <select id="order-service" value={service} onChange={(e) => setService(e.target.value)} className={inputCls}>
                {orderFormServices.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="order-budget" className="mb-1 block font-mono text-xs font-bold text-black">
                  Бюджет
                </label>
                <select id="order-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputCls}>
                  {orderBudgets.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="order-timeline" className="mb-1 block font-mono text-xs font-bold text-black">
                  Срок
                </label>
                <select id="order-timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputCls}>
                  {orderTimelines.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="order-website" className="mb-1 block font-mono text-xs font-bold text-black">
                Текущий сайт (если есть)
              </label>
              <input id="order-website" value={website} onChange={(e) => setWebsite(e.target.value)} className={inputCls} placeholder="https://..." />
            </div>

            <div>
              <label htmlFor="order-message" className="mb-1 block font-mono text-xs font-bold text-black">
                Описание задачи
              </label>
              <textarea id="order-message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputCls} resize-y`} placeholder="Расскажи про идею, аудиторию, что должно работать..." />
            </div>

            {state === "error" && (
              <p className="font-mono text-xs text-red-700">
                Не удалось отправить. Попробуй Telegram или email.
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-4 py-2 font-mono text-sm font-bold text-black transition-transform hover:translate-x-0.5 active:translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? "▶ ОТПРАВКА..." : "▶ РАЗОБРАТЬ ИДЕЮ"}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
