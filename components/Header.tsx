"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark hero, so the header stays transparent until scroll.
  const overDarkHero = !scrolled;
  const tone = overDarkHero ? "light" : "dark";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        overDarkHero
          ? "border-b border-transparent bg-transparent"
          : "border-b border-ink-900/10 bg-cream-50/90 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex h-[74px] max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" aria-label="Αρχική" className="shrink-0">
          <Logo tone={tone} />
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {nav.slice(1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[0.8125rem] tracking-[0.01em] transition-colors ${
                  overDarkHero
                    ? "text-moon-200/75 hover:text-cream-50"
                    : "text-ink-700 hover:text-navy-600"
                } ${active ? (overDarkHero ? "text-cream-50" : "text-navy-600") : ""}`}
              >
                {item.label}
                {active && (
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px w-full ${
                      overDarkHero ? "bg-brass-400/70" : "bg-brass-500"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className={`group flex items-center gap-2.5 rounded-full px-4 py-2.5 text-[0.8125rem] font-medium transition-all duration-300 sm:px-5 ${
              overDarkHero
                ? "bg-cream-50/10 text-cream-50 ring-1 ring-moon-200/25 hover:bg-cream-50 hover:text-midnight-900"
                : "bg-navy-600 text-cream-50 hover:bg-midnight-800"
            }`}
          >
            <PhoneIcon className="h-[15px] w-[15px] transition-transform duration-500 group-hover:-rotate-12" />
            <span className="tabular-nums tracking-wide">{site.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
            aria-expanded={open}
            className={`flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-colors xl:hidden ${
              overDarkHero
                ? "text-cream-50 ring-moon-200/25"
                : "text-midnight-900 ring-ink-900/15"
            }`}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`nocturne fixed inset-0 top-[74px] z-40 origin-top overflow-y-auto transition-all duration-500 xl:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8">
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-moon-200/10 py-4 font-display text-[1.65rem] text-cream-50/90 transition-colors hover:text-brass-400"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-8 flex items-center justify-center gap-3 rounded-full bg-brass-500 px-6 py-4 text-sm font-medium text-midnight-950"
          >
            <PhoneIcon className="h-4 w-4" />
            Καλέστε {site.phoneDisplay}
          </a>
          <p className="mt-6 text-center text-xs leading-relaxed text-moon-200/45">
            {site.address.street}, {site.address.area}
          </p>
        </nav>
      </div>
    </header>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6.6 3.5h2.2l1.5 3.7-1.8 1.3a12.5 12.5 0 0 0 5.5 5.5l1.3-1.8 3.7 1.5v2.2a2.6 2.6 0 0 1-2.9 2.6C10.3 17.9 6.1 13.7 4 7.4A2.6 2.6 0 0 1 6.6 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
