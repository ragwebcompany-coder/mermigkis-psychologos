import Link from "next/link";
import { Logo } from "./Logo";
import { PhoneIcon } from "./Header";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="nocturne relative overflow-hidden text-cream-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moon-400/25 to-transparent" />

      <div className="mx-auto max-w-[1240px] px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-[1.8] text-moon-200/60">
              Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I) για ενήλικες.
              Ιδιωτικό γραφείο στον Γέρακα και συνεργασία με το Εργαστήριο Ύπνου
              του Ερρίκος Ντυνάν Hospital Center.
            </p>
            <a
              href={site.phoneHref}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-brass-500 px-6 py-3.5 text-sm font-medium text-midnight-950 transition-colors hover:bg-brass-400"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
          </div>

          <div>
            <h3 className="eyebrow text-moon-400/70">Πλοήγηση</h3>
            <ul className="mt-6 space-y-3.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[0.9375rem] text-moon-200/70 transition-colors hover:text-cream-50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow text-moon-400/70">Γραφείο</h3>
            <address className="mt-6 space-y-1 text-[0.9375rem] not-italic leading-[1.8] text-moon-200/70">
              <p>{site.address.street}</p>
              <p>
                {site.address.area} {site.address.postal}
              </p>
              <p>{site.address.region}</p>
            </address>
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-[0.8125rem] text-brass-400 transition-colors hover:text-brass-500"
            >
              Οδηγίες πρόσβασης
              <span aria-hidden="true">→</span>
            </a>

            <h3 className="eyebrow mt-10 text-moon-400/70">Ραντεβού</h3>
            <p className="mt-4 text-[0.9375rem] leading-[1.8] text-moon-200/70">
              Κατόπιν τηλεφωνικής επικοινωνίας.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-moon-200/10 pt-8">
          <p className="text-xs leading-relaxed text-moon-200/35">
            Άδεια ασκήσεως επαγγέλματος ψυχολόγου: {site.license} · Μέλος
            Συλλόγου Ελλήνων Ψυχολόγων (ΣΕΨ)
          </p>
          <div className="mt-5 flex flex-col gap-2 text-xs text-moon-200/35 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {site.name}. Με επιφύλαξη παντός
              δικαιώματος.
            </p>
            <p>
              Το περιεχόμενο του ιστότοπου έχει ενημερωτικό χαρακτήρα και δεν
              υποκαθιστά την κλινική αξιολόγηση.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
