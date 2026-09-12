import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PhoneIcon } from "@/components/Header";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { site, siteText } from "@/lib/site";
import { alternates, isLang } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Επικοινωνία",
    metaDescription:
      "Γραφείο: Παναγή Τσαλδάρη 21, Μελίσσια. Ραντεβού κατόπιν τηλεφωνικής επικοινωνίας στο 6955 433 380.",
    eyebrow: "Ραντεβού",
    title: "Επικοινωνία",
    intro:
      "Τα ραντεβού κλείνονται τηλεφωνικά. Στην πρώτη επικοινωνία συζητάμε σύντομα τι σας συμβαίνει, ώστε να οριστεί η κατάλληλη αρχική αξιολόγηση.",
    phoneLabel: "Τηλέφωνο",
    phoneNote:
      "Αν δεν απαντηθεί άμεσα η κλήση, γίνεται επικοινωνία στο συντομότερο δυνατό — οι ώρες των συνεδριών δεν διακόπτονται.",
    officeLabel: "Γραφείο",
    mapsLink: "Άνοιγμα στους χάρτες",
    hospitalLabel: "Νοσοκομειακό πλαίσιο",
    hospitalBody:
      "Συνεργάτης του Εργαστηρίου Ύπνου του Ερρίκος Ντυνάν Hospital Center, όπου γίνονται οι εργαστηριακοί έλεγχοι ύπνου όταν απαιτούνται.",
    emergency1: "Ο ιστότοπος δεν αποτελεί υπηρεσία επείγουσας βοήθειας. Σε περίπτωση άμεσου κινδύνου, καλέστε το ",
    emergency2: " ή απευθυνθείτε στο πλησιέστερο τμήμα επειγόντων.",
    mapTitle: "Χάρτης — Παναγή Τσαλδάρη 21, Μελίσσια",
  },
  en: {
    metaTitle: "Contact",
    metaDescription:
      "Practice: 21 Panagi Tsaldari St., Melissia, Athens. Appointments by phone on +30 6955 433 380.",
    eyebrow: "Appointments",
    title: "Contact",
    intro:
      "Appointments are arranged by phone. On the first call we talk briefly about what is going on, so that the right initial assessment can be set up.",
    phoneLabel: "Telephone",
    phoneNote:
      "If the call is not answered straight away, you will be called back as soon as possible — sessions are never interrupted.",
    officeLabel: "The practice",
    mapsLink: "Open in Maps",
    hospitalLabel: "Hospital framework",
    hospitalBody:
      "Collaborator of the Sleep Laboratory at Errikos Dynan Hospital Center, where sleep studies are carried out when they are needed.",
    emergency1: "This website is not an emergency service. If you are in immediate danger, call ",
    emergency2: " or go to your nearest emergency department.",
    mapTitle: "Map — 21 Panagi Tsaldari St., Melissia",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = copy[isLang(lang) ? lang : "el"];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: alternates(isLang(lang) ? lang : "el", "/epikoinonia"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];
  const s = siteText[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <Section className="bg-cream-50">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="space-y-12">
              <div>
                <Eyebrow>{t.phoneLabel}</Eyebrow>
                <a
                  href={site.phoneHref}
                  className="mt-6 flex items-center gap-4 font-display text-[2.4rem] leading-none tabular-nums text-midnight-900 transition-colors hover:text-navy-600 sm:text-[3rem]"
                >
                  <PhoneIcon className="h-7 w-7 text-brass-500" />
                  {site.phoneDisplay}
                </a>
                <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.8] text-ink-500">
                  {t.phoneNote}
                </p>
              </div>

              <div>
                <Eyebrow>{t.officeLabel}</Eyebrow>
                <address className="mt-6 space-y-1 text-[1.0625rem] not-italic leading-[1.85] text-ink-700">
                  <p>{s.street}</p>
                  <p>
                    {s.area} {site.address.postal}, {s.region}
                  </p>
                </address>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] text-navy-600 transition-colors hover:text-midnight-900"
                >
                  {t.mapsLink} <span aria-hidden="true">→</span>
                </a>
              </div>

              <div>
                <Eyebrow>{t.hospitalLabel}</Eyebrow>
                <p className="mt-6 max-w-md text-[1.0625rem] leading-[1.85] text-ink-700">
                  {t.hospitalBody}
                </p>
              </div>

              <div className="rounded-2xl border border-brass-500/25 bg-brass-500/[0.06] p-6">
                <p className="text-[0.875rem] leading-[1.8] text-ink-700">
                  {t.emergency1}
                  <strong>166</strong>
                  {t.emergency2}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-[26px] border border-ink-900/8">
              <iframe
                src={site.mapEmbed}
                title={t.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[560px] w-full grayscale-[35%]"
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
