"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { getDisorders } from "@/lib/disorders";
import { getNav, site } from "@/lib/site";
import { barePath, localePath, switchPath, type Lang } from "@/lib/i18n";

const ui = {
  el: {
    home: "Αρχική",
    allDisorders: "Όλες οι διαταραχές →",
    allShort: "Όλες →",
    openMenu: "Άνοιγμα μενού",
    closeMenu: "Κλείσιμο μενού",
    call: "Καλέστε",
    switchLabel: "Switch to English",
  },
  en: {
    home: "Home",
    allDisorders: "All sleep disorders →",
    allShort: "All →",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    call: "Call",
    switchLabel: "Στα ελληνικά",
  },
} as const;

export default function Header({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const nav = getNav(lang);
  const disorders = getDisorders(lang);
  const p = (href: string) => localePath(lang, href);
  // Στον server το usePathname δίνει το path μετά το rewrite («/el/...»).
  const pathname = localePath(lang, barePath(usePathname()));
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSubmenu(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Every page opens on a dark hero, so the header stays transparent until scroll.
  const light = !scrolled;

  const link = (active: boolean) =>
    `whitespace-nowrap font-sans text-[0.625rem] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
      light
        ? active
          ? "text-brass-400"
          : "text-moon-200/70 hover:text-cream-50"
        : active
          ? "text-brass-500"
          : "text-ink-500 hover:text-midnight-900"
    }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          light
            ? "border-b border-transparent"
            : "border-b border-ink-900/8 bg-cream-50/92 backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto flex h-[82px] max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
          <Link href={p("/")} aria-label={t.home} className="shrink-0">
            <Logo lang={lang} tone={light ? "light" : "dark"} />
          </Link>

          <nav className="hidden items-center gap-5 min-[1460px]:flex">
            {nav.slice(1).map((item) => {
              const href = p(item.href);
              const active =
                pathname === href ||
                (item.href === "/diataraches-ypnou" &&
                  pathname.startsWith(href));

              if (item.href === "/diataraches-ypnou") {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={href}
                      className={`${link(active)} flex items-center gap-1.5`}
                    >
                      {item.label}
                      <span className="text-[0.5rem] transition-transform duration-300 group-hover:rotate-180">
                        ▾
                      </span>
                    </Link>
                    <div className="invisible absolute left-1/2 top-full z-10 w-[290px] -translate-x-1/2 pt-5 opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100">
                      <div className="overflow-hidden rounded-2xl border border-ink-900/8 bg-cream-50 py-2 shadow-[0_28px_70px_-30px_rgba(9,20,38,0.5)]">
                        {disorders.map((d) => (
                          <Link
                            key={d.slug}
                            href={p(`/diataraches-ypnou/${d.slug}`)}
                            className={`block px-6 py-2.5 text-[0.8125rem] transition-colors ${
                              pathname === p(`/diataraches-ypnou/${d.slug}`)
                                ? "text-brass-500"
                                : "text-ink-700 hover:bg-cream-100 hover:text-midnight-900"
                            }`}
                          >
                            {d.nav}
                          </Link>
                        ))}
                        <Link
                          href={p("/diataraches-ypnou")}
                          className="mt-1 block border-t border-ink-900/8 px-6 pb-1 pt-3 text-[0.6875rem] uppercase tracking-[0.16em] text-navy-600 transition-colors hover:text-midnight-900"
                        >
                          {t.allDisorders}
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={item.href} href={href} className={link(active)}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href={switchPath(pathname, lang === "el" ? "en" : "el")}
              hrefLang={lang === "el" ? "en" : "el"}
              aria-label={t.switchLabel}
              title={t.switchLabel}
              className={`flex h-10 items-center rounded-full px-3 text-[0.625rem] font-medium uppercase tracking-[0.14em] ring-1 transition-all duration-300 ${
                light
                  ? "text-moon-200/75 ring-moon-200/25 hover:text-cream-50 hover:ring-moon-200/50"
                  : "text-ink-500 ring-ink-900/12 hover:text-midnight-900 hover:ring-ink-900/30"
              }`}
            >
              {lang === "el" ? "EN" : "ΕΛ"}
            </Link>

            <a
              href={site.phoneHref}
              className={`group hidden items-center gap-2.5 whitespace-nowrap rounded-full px-4 py-2.5 text-[0.6875rem] transition-all duration-300 sm:flex ${
                light
                  ? "text-cream-50 ring-1 ring-moon-200/30 hover:bg-cream-50 hover:text-midnight-900"
                  : "bg-navy-600 text-cream-50 hover:bg-midnight-800"
              }`}
            >
              <PhoneIcon className="h-[13px] w-[13px] transition-transform duration-500 group-hover:-rotate-12" />
              <span className="whitespace-nowrap text-[0.625rem] font-medium uppercase tracking-[0.14em]">
                {site.phoneDisplay}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t.closeMenu : t.openMenu}
              aria-expanded={open}
              className={`flex h-10 w-10 items-center justify-center rounded-full ring-1 transition-colors min-[1460px]:hidden ${
                light
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
      </header>

      {/* Το drawer ζει έξω από το <header>: το backdrop-blur του header κάνει τον
        εαυτό του containing block, οπότε μέσα του το fixed κατέρρεε στα 82px. */}
      <div
        className={`nocturne fixed inset-0 top-[82px] z-40 overflow-y-auto transition-all duration-500 min-[1460px]:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-8">
          {nav.map((item) =>
            item.href === "/diataraches-ypnou" ? (
              <div key={item.href} className="border-b border-moon-200/10">
                <button
                  type="button"
                  onClick={() => setSubmenu((v) => !v)}
                  className="flex w-full items-center justify-between py-4 text-left font-display text-[1.5rem] text-cream-50/90"
                >
                  {item.label}
                  <span
                    className={`text-brass-400 transition-transform duration-300 ${
                      submenu ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-400"
                  style={{ gridTemplateRows: submenu ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 pl-4">
                      {disorders.map((d) => (
                        <Link
                          key={d.slug}
                          href={p(`/diataraches-ypnou/${d.slug}`)}
                          className="block py-2.5 text-[0.9375rem] text-moon-200/65"
                        >
                          {d.nav}
                        </Link>
                      ))}
                      <Link
                        href={p("/diataraches-ypnou")}
                        className="block py-2.5 text-[0.8125rem] uppercase tracking-[0.16em] text-brass-400"
                      >
                        {t.allShort}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={p(item.href)}
                className="border-b border-moon-200/10 py-4 font-display text-[1.5rem] text-cream-50/90 transition-colors hover:text-brass-400"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href={switchPath(pathname, lang === "el" ? "en" : "el")}
            hrefLang={lang === "el" ? "en" : "el"}
            className="mt-6 flex items-center justify-center gap-3 rounded-full px-6 py-3.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-moon-200/75 ring-1 ring-moon-200/25 transition-colors hover:text-cream-50"
          >
            {t.switchLabel}
          </Link>

          <a
            href={site.phoneHref}
            className="mt-3 flex items-center justify-center gap-3 rounded-full bg-brass-500 px-6 py-4 text-sm font-medium text-midnight-950"
          >
            <PhoneIcon className="h-4 w-4" />
            {t.call} {site.phoneDisplay}
          </a>
        </nav>
      </div>
    </>
  );
}

export function PhoneIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6.6 3.5h2.2l1.5 3.7-1.8 1.3a12.5 12.5 0 0 0 5.5 5.5l1.3-1.8 3.7 1.5v2.2a2.6 2.6 0 0 1-2.9 2.6C10.3 17.9 6.1 13.7 4 7.4A2.6 2.6 0 0 1 6.6 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
