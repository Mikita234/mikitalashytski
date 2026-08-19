"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import {
  orderServiceKeys,
  orderBudgetKeys,
  orderTimelineKeys,
} from "@/content/selling";
import { site } from "@/content/site";
import { trackEvent } from "@/lib/analytics";
import { VHSButton } from "./VHSButton";

type FormState = "idle" | "sent" | "error";
type OrderServiceKey = (typeof orderServiceKeys)[number];

function isOrderServiceKey(value: string | null): value is OrderServiceKey {
  return orderServiceKeys.some((key) => key === value);
}

export function OrderFormFallback() {
  return (
    <div
      className="mx-auto h-[38rem] w-full animate-pulse border-2 border-white/30 bg-[#c0c0c0]/70"
      aria-hidden
    />
  );
}

export function OrderForm() {
  const t = useTranslations("home.form");
  const searchParams = useSearchParams();
  const requestedService = searchParams.get("service");
  const initialService = isOrderServiceKey(requestedService)
    ? requestedService
    : orderServiceKeys[0];
  const [state, setState] = useState<FormState>("idle");
  const [submitting, setSubmitting] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [service, setService] = useState<OrderServiceKey>(initialService);
  const [budget, setBudget] = useState<string>(orderBudgetKeys[5]);
  const [timeline, setTimeline] = useState<string>(orderTimelineKeys[3]);
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const startedRef = useRef(false);

  function handleFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackEvent("order_form_start", { service });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setState("idle");
    trackEvent("order_submit", { service, budget, timeline });

    const serviceLabel = t(`services.${service}`);
    const budgetLabel = t(`budgets.${budget}`);
    const timelineLabel = t(`timelines.${timeline}`);

    const payload = {
      name,
      contact,
      service: serviceLabel,
      budget: budgetLabel,
      timeline: timelineLabel,
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
        trackEvent("order_success", { service });
        return;
      }

      if (res.status === 503) {
        setState("error");
        trackEvent("order_error", { service, reason: "telegram_not_configured" });
        return;
      }
    } catch {
      trackEvent("order_error", { service, reason: "network" });
      // network error — fall through to mailto
    } finally {
      setSubmitting(false);
    }

    const subject = encodeURIComponent(`[ORDER] ${serviceLabel}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Service: ${serviceLabel}`,
        `Budget: ${budgetLabel}`,
        `Timeline: ${timelineLabel}`,
        website ? `Website: ${website}` : "",
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    trackEvent("order_fallback_click", { service, channel: "email" });
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setState("sent");
  }

  const inputCls =
    "w-full border-2 border-t-[#404040] border-l-[#404040] border-b-white border-r-white bg-white px-2 py-1.5 font-mono text-sm text-black outline-none placeholder:text-black/45 focus:ring-1 focus:ring-[#000080]";

  return (
    <div className="mx-auto w-full border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] shadow-lg">
      <div className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#000080] to-[#1084d0] px-2 py-1">
        <span className="font-mono text-xs font-bold text-white">
          {t("formTitle")}
        </span>
        <span className="shrink-0 font-mono text-[9px] text-white/70 rec-blink">{t("recBadge")}</span>
      </div>

      <form
        onSubmit={handleSubmit}
        onFocusCapture={handleFormStart}
        className="space-y-4 p-4"
      >
        {state === "sent" ? (
          <div className="space-y-3 text-center">
            <p className="font-mono text-sm font-bold text-black">{t("success")}</p>
            <p className="font-mono text-xs text-black/75">{t("successResponse")}</p>
            <div className="border border-[#808080] bg-white p-3 text-left font-mono text-xs text-black">
              <p className="mb-2 font-bold uppercase">{t("successSummary")}</p>
              <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                <dt>{t("labels.service")}:</dt>
                <dd>{t(`services.${service}`)}</dd>
                <dt>{t("labels.budget")}:</dt>
                <dd>{t(`budgets.${budget}`)}</dd>
                <dt>{t("labels.timeline")}:</dt>
                <dd>{t(`timelines.${timeline}`)}</dd>
              </dl>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <VHSButton
                href={site.telegram}
                variant="primary"
                external
                analytics={{
                  event: "order_fallback_click",
                  location: "order_success",
                  service,
                  channel: "telegram",
                }}
              >
                {site.telegramHandle}
              </VHSButton>
              <VHSButton
                href={`mailto:${site.email}`}
                variant="secondary"
                external
                analytics={{
                  event: "order_fallback_click",
                  location: "order_success",
                  service,
                  channel: "email",
                }}
              >
                {site.email}
              </VHSButton>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="order-name" className="mb-1 block font-mono text-xs font-bold text-black">
                  {t("labels.name")} *
                </label>
                <input id="order-name" required value={name} onChange={(e) => setName(e.target.value)} className={inputCls} />
              </div>

              <div>
                <label htmlFor="order-contact" className="mb-1 block font-mono text-xs font-bold text-black">
                  {t("labels.contact")} *
                </label>
                <input id="order-contact" required value={contact} onChange={(e) => setContact(e.target.value)} className={inputCls} placeholder={t("placeholders.contact")} />
              </div>
            </div>

            <div>
              <label htmlFor="order-service" className="mb-1 block font-mono text-xs font-bold text-black">
                {t("labels.service")} *
              </label>
              <select
                id="order-service"
                value={service}
                onChange={(event) => {
                  if (isOrderServiceKey(event.target.value)) {
                    setService(event.target.value);
                  }
                }}
                className={inputCls}
              >
                {orderServiceKeys.map((key) => (
                  <option key={key} value={key}>
                    {t(`services.${key}`)}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="order-budget" className="mb-1 block font-mono text-xs font-bold text-black">
                  {t("labels.budget")}
                </label>
                <select id="order-budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputCls}>
                  {orderBudgetKeys.map((key) => (
                    <option key={key} value={key}>
                      {t(`budgets.${key}`)}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="order-timeline" className="mb-1 block font-mono text-xs font-bold text-black">
                  {t("labels.timeline")}
                </label>
                <select id="order-timeline" value={timeline} onChange={(e) => setTimeline(e.target.value)} className={inputCls}>
                  {orderTimelineKeys.map((key) => (
                    <option key={key} value={key}>
                      {t(`timelines.${key}`)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="order-website" className="mb-1 block font-mono text-xs font-bold text-black">
                {t("labels.website")}
              </label>
              <input id="order-website" value={website} onChange={(e) => setWebsite(e.target.value)} className={inputCls} placeholder={t("placeholders.website")} />
            </div>

            <div>
              <label htmlFor="order-message" className="mb-1 block font-mono text-xs font-bold text-black">
                {t("labels.message")}
              </label>
              <textarea id="order-message" rows={6} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputCls} resize-y leading-relaxed`} placeholder={t("placeholders.message")} />
            </div>

            {state === "error" && (
              <p className="font-mono text-xs text-red-700">
                {t("error")}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full border-2 border-t-white border-l-white border-b-[#404040] border-r-[#404040] bg-[#c0c0c0] px-4 py-2 font-mono text-sm font-bold text-black transition-transform hover:translate-x-0.5 active:translate-y-0.5 disabled:opacity-60"
            >
              {submitting ? t("submitting") : t("submit")}
            </button>
          </>
        )}
      </form>
    </div>
  );
}
