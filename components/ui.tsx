import Link from "next/link";
import type { ReactNode } from "react";

export function Eyebrow({
  children,
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <p
      className={`eyebrow flex items-center gap-3 ${
        tone === "light" ? "text-brass-400/90" : "text-brass-500"
      } ${className}`}
    >
      <span
        className={`h-px w-7 ${
          tone === "light" ? "bg-brass-400/50" : "bg-brass-500/45"
        }`}
      />
      {children}
    </p>
  );
}

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
    <section id={id} className={`px-5 py-24 sm:px-8 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-[1240px]">{children}</div>
    </section>
  );
}

export function Prose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty ${className}`}
    >
      {children}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "brass";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-navy-600 text-cream-50 hover:bg-midnight-800 ring-0",
    brass:
      "bg-brass-500 text-midnight-950 hover:bg-brass-400 ring-0",
    ghost:
      "bg-transparent text-cream-50 ring-1 ring-moon-200/25 hover:bg-cream-50/10",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium transition-all duration-300 ${styles} ${className}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
    </Link>
  );
}

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
    <section className="nocturne relative overflow-hidden px-5 pb-24 pt-[150px] text-cream-50 sm:px-8 sm:pb-28 sm:pt-[180px]">
      <Stars />
      <div className="relative mx-auto max-w-[1240px]">
        <Eyebrow tone="light">{eyebrow}</Eyebrow>
        <h1 className="mt-7 max-w-3xl font-display text-[2.6rem] leading-[1.08] text-balance sm:text-[3.6rem] lg:text-[4.1rem]">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-[1.0625rem] leading-[1.85] text-moon-200/65 text-pretty sm:text-[1.15rem]">
            {intro}
          </p>
        )}
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-moon-400/20 to-transparent" />
    </section>
  );
}

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
