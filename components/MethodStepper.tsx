"use client";

import { useEffect, useRef, useState } from "react";
import { method } from "@/lib/content";

/**
 * The five CBT-I components as a stepper: the numerals stay visible, the
 * body text swaps in place, and a brass marker slides to the active step.
 */
export default function MethodStepper() {
  const [active, setActive] = useState(0);
  const [marker, setMarker] = useState({ top: 0, height: 0 });
  const listRef = useRef<HTMLUListElement | null>(null);
  const current = method[active];

  /* Keep the brass marker on the active step, whatever its height. */
  useEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const item = list?.children[active] as HTMLElement | undefined;
      if (!list || !item) return;
      setMarker({ top: item.offsetTop, height: item.offsetHeight });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <div className="mx-auto grid max-w-[1000px] gap-10 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
      {/* steps */}
      <div className="relative min-w-0">
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 hidden w-px bg-ink-900/10 lg:block"
          style={{ height: "100%" }}
        />
        <span
          aria-hidden="true"
          className="absolute left-0 hidden w-px bg-brass-500 transition-all duration-500 lg:block"
          style={{
            top: marker.top,
            height: marker.height,
            transitionTimingFunction: "var(--ease-out-soft)",
          }}
        />

        <ul ref={listRef} className="flex gap-2 overflow-x-auto pb-2 lg:block lg:overflow-visible lg:pb-0">
          {method.map((m, i) => {
            const on = i === active;
            return (
              <li key={m.n} className="shrink-0 lg:shrink">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-current={on ? "step" : undefined}
                  className={`flex w-full items-baseline gap-4 rounded-full px-5 py-3.5 text-left transition-colors duration-300 lg:rounded-none lg:px-7 lg:py-[1.1rem] ${
                    on
                      ? "bg-midnight-900 text-cream-50 lg:bg-transparent lg:text-midnight-900"
                      : "text-ink-500 hover:text-midnight-900 lg:hover:bg-cream-100"
                  }`}
                >
                  <span
                    className={`font-display text-[0.95rem] tabular-nums transition-colors ${
                      on ? "text-brass-400 lg:text-brass-500" : "text-ink-400"
                    }`}
                  >
                    {m.n}
                  </span>
                  <span className="whitespace-nowrap font-display text-[1.05rem] leading-snug lg:whitespace-normal lg:text-[1.2rem]">
                    {m.title}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* panel */}
      <div className="min-w-0 min-h-[190px] border-t border-ink-900/10 pt-8 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
        <p key={current.n} className="animate-[rise_0.5s_var(--ease-out-soft)_forwards]">
          <span className="eyebrow block text-brass-500">
            Συστατικό {current.n}
          </span>
          <span className="mt-6 block font-display text-[1.7rem] leading-snug text-midnight-900 sm:text-[2rem]">
            {current.title}
          </span>
          <span className="mt-5 block text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
            {current.body}
          </span>
        </p>
      </div>
    </div>
  );
}
