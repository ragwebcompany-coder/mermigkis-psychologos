import type { Lang } from "@/lib/i18n";

type Tone = "light" | "dark";

const wordmark = {
  el: { name: "ΜΕΡΜΙΓΚΗΣ ΜΙΧΑΗΛ", role: "Ψυχολόγος" },
  en: { name: "MICHAIL MERMIGKIS", role: "Psychologist" },
} as const;

const palette = (tone: Tone) => ({
  moon: tone === "light" ? "#cfe0f4" : "#1b4079",
  spark: tone === "light" ? "#d4bb85" : "#c0a063",
  rule: tone === "light" ? "#cfe0f4" : "#0e1620",
});

/** Crescent + three descending sparkles — the office sign's moon-and-zZ motif, refined. */
export function LogoMark({
  className = "h-9 w-9",
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  const { moon, spark } = palette(tone);
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      <path
        d="M23.5 5.5A18.5 18.5 0 1 0 23.5 42.5A24.5 24.5 0 0 1 23.5 5.5Z"
        fill={moon}
      />
      <g fill={spark}>
        <path d="M37.5 7.5c.55 2.1 1.15 2.7 3.25 3.25-2.1.55-2.7 1.15-3.25 3.25-.55-2.1-1.15-2.7-3.25-3.25 2.1-.55 2.7-1.15 3.25-3.25Z" />
        <path d="M43 17c.36 1.36.75 1.75 2.1 2.1-1.35.36-1.74.75-2.1 2.1-.36-1.35-.75-1.74-2.1-2.1 1.35-.35 1.74-.74 2.1-2.1Z" />
        <circle cx="39.6" cy="25.4" r="1.15" />
      </g>
    </svg>
  );
}

/** Horizontal lockup — the header mark, also used large at the top of the hero. */
export function Logo({
  lang = "el",
  tone = "dark",
  size = "sm",
  className = "",
}: {
  lang?: Lang;
  tone?: Tone;
  size?: "sm" | "lg";
  className?: string;
}) {
  const word = wordmark[lang];
  const name = tone === "light" ? "text-cream-50" : "text-midnight-900";
  const sub = tone === "light" ? "text-moon-400/70" : "text-ink-500";
  const lg = size === "lg";

  return (
    <span
      className={`flex items-center ${
        lg ? "flex-col gap-4 sm:flex-row sm:gap-7" : "gap-3"
      } ${className}`}
    >
      <LogoMark
        tone={tone}
        className={lg ? "h-14 w-14 shrink-0 sm:h-[68px] sm:w-[68px]" : "h-8 w-8 shrink-0"}
      />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display tracking-[0.09em] ${name} ${
            lg ? "text-[1.5rem] sm:text-[2rem]" : "text-[1rem]"
          }`}
        >
          {word.name}
        </span>
        <span
          className={`eyebrow ${sub} ${
            lg
              ? "mt-3 text-[0.625rem] tracking-[0.42em] sm:text-[0.6875rem]"
              : "mt-[6px] text-[0.5rem]"
          }`}
        >
          {word.role}
        </span>
      </span>
    </span>
  );
}
