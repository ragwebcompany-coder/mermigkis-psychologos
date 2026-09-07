"use client";

import Link from "next/link";
import { useState } from "react";
import { aisItems } from "@/lib/ais";

/** Two questions from the Athens Insomnia Scale, as a taste of the full test. */
const preview = aisItems.slice(0, 2);

export default function MiniTest() {
  const [answers, setAnswers] = useState<(number | null)[]>([null, null]);
  const done = answers.every((a) => a !== null);
  const partial = answers.reduce<number>((s, a) => s + (a ?? 0), 0);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-10">
        {preview.map((item, qi) => (
          <fieldset key={item.id} className="text-left">
            <legend className="flex items-baseline gap-3">
              <span className="font-display text-[0.95rem] tabular-nums text-brass-500">
                0{qi + 1}
              </span>
              <span className="font-display text-[1.25rem] leading-snug text-midnight-900 sm:text-[1.4rem]">
                {item.prompt}
              </span>
            </legend>
            {item.hint && (
              <p className="ml-9 mt-2 text-[0.875rem] leading-[1.7] text-ink-500">
                {item.hint}
              </p>
            )}
            <div className="ml-0 mt-5 flex flex-wrap gap-2.5 sm:ml-9">
              {item.options.map((opt, oi) => {
                const on = answers[qi] === oi;
                return (
                  <button
                    key={opt}
                    type="button"
                    aria-pressed={on}
                    onClick={() =>
                      setAnswers((prev) =>
                        prev.map((v, i) => (i === qi ? (v === oi ? null : oi) : v)),
                      )
                    }
                    className={`rounded-full px-5 py-2.5 text-[0.8125rem] leading-tight ring-1 transition-all duration-300 ${
                      on
                        ? "bg-midnight-900 text-cream-50 ring-midnight-900"
                        : "bg-cream-50 text-ink-700 ring-ink-900/12 hover:ring-brass-500/70"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      <div
        className={`mt-12 overflow-hidden transition-all duration-700 ${
          done ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ transitionTimingFunction: "var(--ease-out-soft)" }}
      >
        <div className="rounded-[22px] border border-brass-500/30 bg-cream-50 px-7 py-8 text-center">
          <p className="eyebrow text-brass-500">Μερική βαθμολογία</p>
          <p className="mt-4 font-display text-[2.4rem] leading-none tabular-nums text-midnight-900">
            {partial}
            <span className="text-[1.2rem] text-ink-400">/6</span>
          </p>
          <p className="mx-auto mt-5 max-w-md text-[0.9375rem] leading-[1.8] text-ink-500 text-pretty">
            Αυτές είναι δύο από τις οκτώ ερωτήσεις. Η κλίμακα βγάζει νόημα μόνο
            ολόκληρη — το όριο των 6/24 αφορά το πλήρες τεστ.
          </p>
          <Link
            href="/test-aypnias"
            className="eyebrow sheen mt-7 inline-flex items-center justify-center rounded-full bg-brass-500 px-8 py-4 text-[0.625rem] text-midnight-950 transition-colors duration-300 hover:bg-brass-400"
          >
            Συνεχίστε στις 8 ερωτήσεις
          </Link>
        </div>
      </div>

      {!done && (
        <p className="mt-10 text-center text-[0.8125rem] text-ink-400">
          Απαντήστε και στις δύο για να δείτε πώς λειτουργεί.
        </p>
      )}
    </div>
  );
}
