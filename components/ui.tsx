import Link from "next/link";
import type { ReactNode } from "react";

/* ─── ornament ─────────────────────────────────────────────── */

export function Ornament({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const line = tone === "light" ? "bg-moon-200/25" : "bg-ink-900/12";
  const dot = tone === "light" ? "bg-brass-400/70" : "bg-brass-500/70";
  return (
    <span className={`flex items-center justify-center gap-3 ${className}`}>
      <span className={`h-px w-12 ${line}`} />
      <span className={`h-[5px] w-[5px] rotate-45 ${dot}`} />
      <span className={`h-px w-12 ${line}`} />
    </span>
  );
}

export function Eyebrow({
  children,
  tone = "dark",
  align = "left",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow ${
        tone === "light" ? "text-brass-400/90" : "text-brass-500"
      } ${align === "center" ? "text-center" : ""} ${className}`}
    >
      {children}
    </p>
  );
}

/* ─── layout ───────────────────────────────────────────────── */

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-28 sm:px-8 sm:py-40 ${className}`}>
      <div className="mx-auto max-w-[1240px]">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  tone = "dark",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-2xl text-center ${className}`}>
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-6 font-display text-[2.1rem] leading-[1.16] text-balance sm:text-[2.85rem] ${
          tone === "light" ? "text-cream-50" : "text-midnight-900"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-[1.0625rem] leading-[1.85] text-pretty ${
            tone === "light" ? "text-moon-200/60" : "text-ink-500"
          }`}
        >
          {intro}
        </p>
      )}
      <Ornament tone={tone} className="mt-9" />
    </div>
  );
}

/* ─── controls ─────────────────────────────────────────────── */

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "brass" | "outline";
  className?: string;
}) {
  const styles = {
    primary: "bg-navy-600 text-cream-50 hover:bg-midnight-800",
    brass: "bg-brass-500 text-midnight-950 hover:bg-brass-400",
    ghost: "text-cream-50 ring-1 ring-moon-200/30 hover:bg-cream-50/10",
    outline:
      "text-midnight-900 ring-1 ring-ink-900/15 hover:bg-midnight-900 hover:text-cream-50",
  }[variant];

  return (
    <Link
      href={href}
      className={`eyebrow inline-flex items-center justify-center rounded-full px-8 py-4 text-[0.625rem] transition-all duration-300 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

/* ─── page hero ────────────────────────────────────────────── */

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="nocturne relative overflow-hidden px-5 pb-28 pt-[170px] text-center text-cream-50 sm:px-8 sm:pb-36 sm:pt-[210px]">
      <Stars />
      <div className="relative mx-auto max-w-3xl">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-7 font-display text-[2.5rem] leading-[1.08] text-balance sm:text-[3.6rem]">
          {title}
        </h1>
        {intro && (
          <p className="mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-[1.9] text-moon-200/65 text-pretty">
            {intro}
          </p>
        )}
        <Ornament tone="light" className="mt-10" />
      </div>
    </section>
  );
}

/* ─── decoration ───────────────────────────────────────────── */

/** Deterministic, non-random starfield so server and client markup agree. */
export function Stars({ className = "" }: { className?: string }) {
  const stars = [
    [8, 18, 1.1, 0.5], [17, 46, 0.7, 0.32], [24, 12, 0.9, 0.42],
    [33, 62, 0.6, 0.28], [41, 26, 1.2, 0.55], [49, 8, 0.7, 0.3],
    [57, 52, 0.9, 0.38], [63, 22, 0.6, 0.26], [71, 38, 1.1, 0.48],
    [78, 14, 0.8, 0.34], [84, 58, 0.7, 0.3], [91, 30, 1, 0.45],
    [96, 68, 0.6, 0.24], [12, 74, 0.8, 0.3], [37, 84, 0.7, 0.26],
    [68, 78, 0.9, 0.32], [88, 86, 0.6, 0.22], [53, 70, 0.8, 0.28],
  ] as const;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {stars.map(([left, top, size, opacity], i) => (
        <span
          key={i}
          className="absolute rounded-full bg-moon-200"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity,
            animation: `twinkle ${5 + (i % 5)}s ease-in-out ${i * 0.4}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
