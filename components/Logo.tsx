type Tone = "light" | "dark";

/** Crescent + three descending sparkles — the sign's moon-and-zZ motif, refined. */
export function LogoMark({
  className = "h-9 w-9",
  tone = "dark",
}: {
  className?: string;
  tone?: Tone;
}) {
  const moon = tone === "light" ? "#cfe0f4" : "#1b4079";
  const spark = tone === "light" ? "#d4bb85" : "#c0a063";

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="Μερμίγκης Μιχαήλ — Ψυχολόγος"
      fill="none"
    >
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

export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const name = tone === "light" ? "text-cream-50" : "text-midnight-900";
  const sub = tone === "light" ? "text-moon-400/80" : "text-ink-500";
  const rule = tone === "light" ? "bg-moon-400/30" : "bg-ink-900/15";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark tone={tone} className="h-9 w-9 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.0625rem] tracking-[0.06em] ${name}`}
        >
          ΜΕΡΜΙΓΚΗΣ ΜΙΧΑΗΛ
        </span>
        <span className="mt-[5px] flex items-center gap-2">
          <span className={`h-px w-4 ${rule}`} />
          <span className={`eyebrow text-[0.5625rem] ${sub}`}>
            Ψυχολόγος · Αϋπνία
          </span>
        </span>
      </span>
    </span>
  );
}
