"use client";

import { useEffect, useState } from "react";
import { localePath, type Lang } from "@/lib/i18n";

const measurementId = "G-63BVZGEMSV";
const storageKey = "aipnia-analytics-consent";

const copy = {
  el: {
    title: "Cookies ανάλυσης",
    message:
      "Με τη συγκατάθεσή σας χρησιμοποιούμε Google Analytics για να μετράμε την επισκεψιμότητα του ιστότοπου. Μπορείτε να αρνηθείτε χωρίς να επηρεαστεί η χρήση του.",
    accept: "Αποδοχή",
    reject: "Απόρριψη",
    more: "Πληροφορίες για cookies",
  },
  en: {
    title: "Analytics cookies",
    message:
      "With your consent, we use Google Analytics to measure website traffic. You can decline without affecting your use of the site.",
    accept: "Accept",
    reject: "Decline",
    more: "Cookie information",
  },
} as const;

function readChoice(): "granted" | "denied" | null {
  try {
    const value = localStorage.getItem(storageKey);
    return value === "granted" || value === "denied" ? value : null;
  } catch {
    return null;
  }
}

function loadAnalytics() {
  if (document.getElementById("aipnia-google-analytics")) return;

  // Basic consent mode: no Google script or request is made before acceptance.
  const analyticsWindow = window as Window & { dataLayer?: unknown[][] };
  const layer = (analyticsWindow.dataLayer ??= []);
  const gtag = (...args: unknown[]) => layer.push(args);
  gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("consent", "update", { analytics_storage: "granted" });
  gtag("js", new Date());
  gtag("config", measurementId);

  const script = document.createElement("script");
  script.id = "aipnia-google-analytics";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}

function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ["", host, ".aipnia.gr"];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (!name.startsWith("_ga")) continue;
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax${domain ? `; Domain=${domain}` : ""}`;
    }
  }
}

export default function AnalyticsConsent({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const t = copy[lang];

  useEffect(() => {
    const choice = readChoice();
    if (choice === "granted") loadAnalytics();
    const frame = window.requestAnimationFrame(() => {
      if (!choice) setOpen(true);
    });

    const showSettings = () => setOpen(true);
    window.addEventListener("open-analytics-consent", showSettings);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("open-analytics-consent", showSettings);
    };
  }, []);

  function choose(value: "granted" | "denied") {
    const previous = readChoice();
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      // Browsers that block storage can still use the current-page choice.
    }
    setOpen(false);
    if (value === "granted") loadAnalytics();
    if (value === "denied" && previous === "granted") {
      clearAnalyticsCookies();
      window.location.reload();
    }
  }

  if (!open) return null;

  return (
    <section
      role="dialog"
      aria-label={t.title}
      className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-2xl border border-moon-200/20 bg-midnight-900 p-5 text-cream-50 shadow-2xl sm:p-6"
    >
      <h2 className="text-lg">{t.title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-moon-200/80">{t.message}</p>
      <a
        href={localePath(lang, "/cookies")}
        className="mt-2 inline-block text-sm text-brass-400 underline underline-offset-4 hover:text-brass-500"
      >
        {t.more}
      </a>
      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => choose("denied")}
          className="rounded-full border border-moon-200/40 px-5 py-2.5 text-sm transition-colors hover:bg-moon-200/10"
        >
          {t.reject}
        </button>
        <button
          type="button"
          onClick={() => choose("granted")}
          className="rounded-full bg-brass-500 px-5 py-2.5 text-sm text-midnight-950 transition-colors hover:bg-brass-400"
        >
          {t.accept}
        </button>
      </div>
    </section>
  );
}
