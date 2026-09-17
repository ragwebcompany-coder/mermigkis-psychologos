import type { ReactElement } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Header";
import { Ornament } from "./ui";
import { getDisorders } from "@/lib/disorders";
import { getNav, site, siteText } from "@/lib/site";
import { localePath, type Lang } from "@/lib/i18n";

const ui = {
  el: {
    blurb:
      "Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I) για ενήλικες. Ιδιωτικό γραφείο στα Μελίσσια, σε συνεργασία με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center.",
    navHead: "Πλοήγηση",
    disordersHead: "Διαταραχές ύπνου",
    officeHead: "Γραφείο",
    directions: "Οδηγίες πρόσβασης →",
    appointmentsHead: "Ραντεβού",
    appointments: "Κατόπιν τηλεφωνικής επικοινωνίας.",
    licenseLine: (license: string) =>
      `Άδεια ασκήσεως επαγγέλματος ψυχολόγου: ${license} · Μέλος της British Psychological Society (BPS)`,
    rights: "Με επιφύλαξη παντός δικαιώματος.",
    socialHead: "Ακολουθήστε",
    credit: "Κατασκευή ιστοσελίδας από",
    disclaimer:
      "Το περιεχόμενο έχει ενημερωτικό χαρακτήρα και δεν υποκαθιστά την κλινική αξιολόγηση.",
  },
  en: {
    blurb:
      "Cognitive Behavioural Therapy for Insomnia (CBT-I) for adults. Private practice in Melissia, Athens, in collaboration with the Sleep Laboratory of Errikos Dynan Hospital Center.",
    navHead: "Navigation",
    disordersHead: "Sleep disorders",
    officeHead: "The practice",
    directions: "Directions →",
    appointmentsHead: "Appointments",
    appointments: "By telephone arrangement.",
    licenseLine: (license: string) =>
      `Psychologist's practising licence: ${license} · Member of the British Psychological Society (BPS)`,
    rights: "All rights reserved.",
    socialHead: "Follow",
    credit: "Website made by",
    disclaimer:
      "This content is for information only and does not replace a clinical assessment.",
  },
} as const;

export default function Footer({ lang }: { lang: Lang }) {
  const t = ui[lang];
  const s = siteText[lang];
  const nav = getNav(lang);
  const disorders = getDisorders(lang);
  const p = (href: string) => localePath(lang, href);

  return (
    <footer className="nocturne relative overflow-hidden text-cream-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moon-400/25 to-transparent" />

      <div className="mx-auto max-w-[1240px] px-5 py-24 sm:px-8">
        <div className="text-center">
          <Logo lang={lang} tone="light" size="lg" className="justify-center" />
          <p className="mx-auto mt-8 max-w-md text-[0.9375rem] leading-[1.85] text-moon-200/55">
            {t.blurb}
          </p>
          <a
            href={site.phoneHref}
            className="eyebrow mt-9 inline-flex items-center gap-2.5 rounded-full bg-brass-500 px-8 py-4 text-[0.625rem] text-midnight-950 transition-colors hover:bg-brass-400"
          >
            <PhoneIcon className="h-[13px] w-[13px]" />
            {site.phoneDisplay}
          </a>
          <Ornament tone="light" className="mt-14" />
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="eyebrow text-moon-400/60">{t.navHead}</h3>
            <ul className="mt-6 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={p(item.href)}
                    className="text-[0.9375rem] text-moon-200/65 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-moon-400/60">{t.disordersHead}</h3>
            <ul className="mt-6 space-y-3">
              {disorders.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={p(`/diataraches-ypnou/${d.slug}`)}
                    className="text-[0.9375rem] text-moon-200/65 transition-colors hover:text-cream-50"
                  >
                    {d.nav}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-moon-400/60">{t.officeHead}</h3>
            <address className="mt-6 space-y-1 text-[0.9375rem] not-italic leading-[1.8] text-moon-200/65">
              <p>{s.street}</p>
              <p>
                {s.area} {site.address.postal}
              </p>
              <p>{s.region}</p>
            </address>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-[0.8125rem] text-brass-400 transition-colors hover:text-brass-500"
            >
              {t.directions}
            </a>

            <h3 className="eyebrow mt-10 text-moon-400/60">
              {t.appointmentsHead}
            </h3>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-moon-200/65">
              {t.appointments}
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-moon-200/10 pt-10">
          <div className="flex flex-col items-center">
            <h3 className="eyebrow text-moon-400/60">{t.socialHead}</h3>
            <ul className="mt-5 flex items-center gap-3">
              {site.socials.map((social) => {
                const Icon = socialIcons[social.name];
                return (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="flex h-11 w-11 items-center justify-center rounded-full text-moon-200/60 ring-1 ring-moon-200/15 transition-colors hover:bg-brass-500 hover:text-midnight-950 hover:ring-brass-500"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-moon-200/35">
            {t.licenseLine(s.license)}
          </p>
          <div className="mt-5 flex flex-col gap-2 text-xs text-moon-200/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {s.name}. {t.rights}
            </p>
            <p>{t.disclaimer}</p>
          </div>

          <p className="mt-8 text-center text-xs text-moon-200/30">
            {t.credit}{" "}
            <a
              href={site.credit.href}
              target="_blank"
              rel="noreferrer"
              className="text-moon-200/50 transition-colors hover:text-brass-400"
            >
              {site.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── εικονίδια κοινωνικών δικτύων ─────────────────────────── */

type IconProps = { className?: string };

function InstagramIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M14.02 21.93V14.5h2.5l.47-2.9h-2.97v-1.88c0-.84.28-1.58 1.07-1.58h1.93V5.6c-.34-.05-1.06-.15-2.42-.15-2.84 0-4.5 1.5-4.5 4.9v2.25H7.5v2.9h2.6v7.43c.6.1 1.22.15 1.85.15.7 0 1.4-.05 2.07-.15Z" />
    </svg>
  );
}

function TikTokIcon({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 2h-3.02v13.4a2.4 2.4 0 1 1-1.86-2.34V9.9a5.5 5.5 0 1 0 4.88 5.47V9.2a6.5 6.5 0 0 0 3.9 1.28V7.4a3.6 3.6 0 0 1-3.9-3.6V2Z" />
    </svg>
  );
}

const socialIcons: Record<string, (props: IconProps) => ReactElement> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};
