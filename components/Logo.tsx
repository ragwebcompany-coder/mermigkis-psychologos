type Tone = "light" | "dark";

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

/**
 * The full emblem: name and role set on a double ring around the crescent.
 * Ids are suffixed so several seals can share a page without colliding.
 */
export function Seal({
  className = "h-40 w-40",
  tone = "light",
  id = "seal",
}: {
  className?: string;
  tone?: Tone;
  id?: string;
}) {
  const { moon, spark } = palette(tone);

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Μερμίγκης Μιχαήλ — Ψυχολόγος"
      fill="none"
    >
      <defs>
        <path id={`${id}-top`} d="M 100,100 m -74,0 a 74,74 0 1,1 148,0" />
        <path id={`${id}-bottom`} d="M 100,100 m -74,0 a 74,74 0 1,0 148,0" />
      </defs>

      <circle cx="100" cy="100" r="90" stroke={moon} strokeOpacity="0.28" />
      <circle cx="100" cy="100" r="84" stroke={spark} strokeOpacity="0.45" />

      <text
        fill={moon}
        fontSize="14.5"
        letterSpacing="3.4"
        style={{ fontFamily: "var(--font-display)" }}
      >
        <textPath href={`#${id}-top`} startOffset="50%" textAnchor="middle">
          ΜΕΡΜΙΓΚΗΣ ΜΙΧΑΗΛ
        </textPath>
      </text>
      <text
        fill={spark}
        fontSize="10.5"
        letterSpacing="5.5"
        style={{ fontFamily: "var(--font-sans)" }}
      >
        <textPath href={`#${id}-bottom`} startOffset="50%" textAnchor="middle">
          ΨΥΧΟΛΟΓΟΣ
        </textPath>
      </text>

      {/* lozenges marking the seam between the two arcs */}
      <g fill={spark} opacity="0.75">
        <path d="M13 100l3.4-3.4L19.8 100l-3.4 3.4z" />
        <path d="M180.2 100l3.4-3.4L187 100l-3.4 3.4z" />
      </g>

      <g transform="translate(64 64) scale(1.5)">
        <path
          d="M23.5 5.5A18.5 18.5 0 1 0 23.5 42.5A24.5 24.5 0 0 1 23.5 5.5Z"
          fill={moon}
        />
        <g fill={spark}>
          <path d="M37.5 7.5c.55 2.1 1.15 2.7 3.25 3.25-2.1.55-2.7 1.15-3.25 3.25-.55-2.1-1.15-2.7-3.25-3.25 2.1-.55 2.7-1.15 3.25-3.25Z" />
          <path d="M43 17c.36 1.36.75 1.75 2.1 2.1-1.35.36-1.74.75-2.1 2.1-.36-1.35-.75-1.74-2.1-2.1 1.35-.35 1.74-.74 2.1-2.1Z" />
          <circle cx="39.6" cy="25.4" r="1.15" />
        </g>
      </g>
    </svg>
  );
}

/** Horizontal lockup — the header mark, also used large at the top of the hero. */
export function Logo({
  tone = "dark",
  size = "sm",
  className = "",
}: {
  tone?: Tone;
  size?: "sm" | "lg";
  className?: string;
}) {
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
          ΜΕΡΜΙΓΚΗΣ ΜΙΧΑΗΛ
        </span>
        <span
          className={`eyebrow ${sub} ${
            lg
              ? "mt-3 text-[0.625rem] tracking-[0.42em] sm:text-[0.6875rem]"
              : "mt-[6px] text-[0.5rem]"
          }`}
        >
          Ψυχολόγος
        </span>
      </span>
    </span>
  );
}
