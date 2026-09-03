"use client";

import { useState } from "react";
import { aisItems, bandFor } from "@/lib/ais";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Header";

export default function InsomniaTest() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(aisItems.length).fill(null),
  );
  const [done, setDone] = useState(false);

  const total = aisItems.length;
  const answered = answers.filter((a) => a !== null).length;
  const progress = done ? 100 : (answered / total) * 100;

  function choose(value: number) {
    const next = [...answers];
    next[step] = value;
    setAnswers(next);

    window.setTimeout(() => {
      if (step < total - 1) setStep(step + 1);
      else setDone(true);
    }, 260);
  }

  function reset() {
    setAnswers(Array(total).fill(null));
    setStep(0);
    setDone(false);
  }

  if (done) {
    const score = answers.reduce<number>((sum, a) => sum + (a ?? 0), 0);
    const band = bandFor(score);
    const accent =
      band.tone === "calm"
        ? "text-moon-300"
        : band.tone === "watch"
          ? "text-brass-400"
          : "text-brass-400";

    return (
      <div className="rounded-[28px] bg-midnight-900 p-8 text-cream-50 ring-1 ring-moon-200/12 sm:p-12">
        <p className="eyebrow text-moon-400/70">Το αποτέλεσμά σας</p>

        <div className="mt-8 flex flex-wrap items-end gap-x-6 gap-y-2">
          <span className="font-display text-[5.5rem] leading-[0.85] tabular-nums text-cream-50">
            {score}
          </span>
          <span className="pb-2 text-sm text-moon-200/45">/ 24 βαθμοί</span>
        </div>

        <div className="mt-8 h-1 w-full overflow-hidden rounded-full bg-moon-200/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-navy-500 to-brass-400 transition-[width] duration-1000"
            style={{ width: `${(score / 24) * 100}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-[0.6875rem] text-moon-200/35">
          <span>0</span>
          <span>όριο κλίμακας: 6</span>
          <span>24</span>
        </div>

        <p className={`mt-10 eyebrow ${accent}`}>
          {band.label} · {band.range}
        </p>
        <h3 className="mt-4 font-display text-[1.85rem] leading-snug text-balance sm:text-[2.2rem]">
          {band.headline}
        </h3>
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.85] text-moon-200/65 text-pretty">
          {band.body}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-3 rounded-full bg-brass-500 px-7 py-3.5 text-sm font-medium text-midnight-950 transition-colors hover:bg-brass-400"
          >
            <PhoneIcon className="h-4 w-4" />
            Συζητήστε το — {site.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm text-moon-200/70 ring-1 ring-moon-200/20 transition-colors hover:bg-cream-50/5 hover:text-cream-50"
          >
            Επανάληψη τεστ
          </button>
        </div>

        <p className="mt-10 border-t border-moon-200/10 pt-6 text-[0.8125rem] leading-relaxed text-moon-200/35">
          Η Athens Insomnia Scale είναι εργαλείο ανίχνευσης, όχι διάγνωσης. Το
          αποτέλεσμα δεν αποθηκεύεται και δεν αποστέλλεται πουθενά — υπολογίζεται
          τοπικά στη συσκευή σας. Η διάγνωση της αϋπνίας γίνεται μόνο μέσα από
          κλινική αξιολόγηση.
        </p>
      </div>
    );
  }

  const item = aisItems[step];

  return (
    <div className="rounded-[28px] bg-midnight-900 p-8 text-cream-50 ring-1 ring-moon-200/12 sm:p-12">
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow text-moon-400/70">
          Ερώτηση {step + 1} από {total}
        </p>
        <p className="text-[0.6875rem] text-moon-200/35">
          Τον τελευταίο μήνα, τουλάχιστον 3 φορές την εβδομάδα
        </p>
      </div>

      <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-moon-200/10">
        <div
          className="h-full rounded-full bg-brass-500 transition-[width] duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <h3 className="mt-10 font-display text-[1.85rem] leading-snug text-balance sm:text-[2.3rem]">
        {item.prompt}
      </h3>
      {item.hint && (
        <p className="mt-3 max-w-xl text-[0.9375rem] leading-relaxed text-moon-200/50">
          {item.hint}
        </p>
      )}

      <div className="mt-9 grid gap-2.5">
        {item.options.map((label, value) => {
          const selected = answers[step] === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => choose(value)}
              className={`group flex items-center justify-between gap-4 rounded-2xl px-6 py-4 text-left text-[0.9375rem] transition-all duration-200 ${
                selected
                  ? "bg-brass-500 text-midnight-950"
                  : "bg-cream-50/[0.045] text-moon-200/80 ring-1 ring-moon-200/10 hover:bg-cream-50/[0.09] hover:text-cream-50"
              }`}
            >
              <span>{label}</span>
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[0.6875rem] tabular-nums ring-1 transition-colors ${
                  selected
                    ? "bg-midnight-950/15 text-midnight-950 ring-midnight-950/20"
                    : "text-moon-200/35 ring-moon-200/20"
                }`}
              >
                {value}
              </span>
            </button>
          );
        })}
      </div>

      {step > 0 && (
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="mt-8 text-[0.8125rem] text-moon-200/45 transition-colors hover:text-cream-50"
        >
          ← Προηγούμενη
        </button>
      )}
    </div>
  );
}
