"use client";

import { useEffect, useRef, useState } from "react";
import type { Lang } from "@/lib/i18n";

type Stat = {
  from?: number;
  to: number;
  suffix?: string;
  label: string;
};

const statsByLang: Record<Lang, Stat[]> = {
  el: [
    { from: 30, to: 40, suffix: "%", label: "των ενηλίκων εμφανίζουν συμπτώματα αϋπνίας" },
    { from: 8, to: 10, suffix: "%", label: "πληρούν τα κριτήρια της χρόνιας αϋπνίας" },
    { from: 4, to: 8, suffix: " εβδ.", label: "διαρκεί ένα πλήρες πρωτόκολλο CBT-I" },
    { to: 1, suffix: "η", label: "γραμμή θεραπείας στις διεθνείς κατευθυντήριες οδηγίες" },
  ],
  en: [
    { from: 30, to: 40, suffix: "%", label: "of adults experience symptoms of insomnia" },
    { from: 8, to: 10, suffix: "%", label: "meet the criteria for chronic insomnia" },
    { from: 4, to: 8, suffix: " wks", label: "is how long a full CBT-I protocol runs" },
    { to: 1, suffix: "st", label: "line of treatment in international clinical guidelines" },
  ],
};

/** Counts up once, when the band first enters the viewport. */
function useCountUp(target: number, run: boolean, duration = 1100) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setN(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, run, duration]);

  return n;
}

function StatCell({
  stat,
  run,
  index,
}: {
  stat: Stat;
  run: boolean;
  index: number;
}) {
  const from = useCountUp(stat.from ?? 0, run);
  const to = useCountUp(stat.to, run);

  return (
    <div
      className={`border-moon-200/10 px-4 py-8 text-center sm:py-10 ${
        index % 2 === 1 ? "border-l" : ""
      } ${index >= 2 ? "border-t lg:border-t-0" : ""} ${
        index === 0 ? "" : "lg:border-l"
      }`}
    >
      <p className="font-display text-[2.6rem] leading-none tabular-nums text-brass-400 sm:text-[3.2rem]">
        {stat.from !== undefined ? `${from}–${to}` : to}
        <span className="text-[1.5rem] sm:text-[1.8rem]">{stat.suffix}</span>
      </p>
      <p className="mx-auto mt-5 max-w-[16rem] text-[0.875rem] leading-[1.8] text-moon-200/50 text-pretty">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsBand({ lang }: { lang: Lang }) {
  const stats = statsByLang[lang];
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setRun(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="mx-auto grid max-w-[1100px] grid-cols-2 lg:grid-cols-4"
    >
      {stats.map((s, i) => (
        <StatCell key={s.label} stat={s} run={run} index={i} />
      ))}
    </div>
  );
}
