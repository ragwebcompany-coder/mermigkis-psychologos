"use client";

import { useState } from "react";

export type QA = { q: string; a: string };

export default function Accordion({
  items,
  tone = "light",
}: {
  items: QA[];
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState<number | null>(0);

  const border = tone === "dark" ? "border-moon-200/12" : "border-ink-900/10";
  const q = tone === "dark" ? "text-cream-50" : "text-midnight-900";
  const a = tone === "dark" ? "text-moon-200/60" : "text-ink-700";
  const icon = tone === "dark" ? "text-brass-400" : "text-brass-500";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`border-b ${border}`}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span
                className={`font-display text-[1.25rem] leading-snug sm:text-[1.4rem] ${q}`}
              >
                {item.q}
              </span>
              <span
                className={`mt-1 shrink-0 text-xl leading-none transition-transform duration-300 ${icon} ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-400 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className={`max-w-3xl pb-7 pr-10 text-[1.0625rem] leading-[1.85] text-pretty ${a}`}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
