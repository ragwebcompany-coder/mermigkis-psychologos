import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { PhoneIcon } from "@/components/Header";
import { Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Γραφείο: Γαργηττού 117, Γέρακας. Ραντεβού κατόπιν τηλεφωνικής επικοινωνίας στο 6955 433 380.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Ραντεβού"
        title="Επικοινωνία"
        intro="Τα ραντεβού κλείνονται τηλεφωνικά. Στην πρώτη επικοινωνία συζητάμε σύντομα τι σας συμβαίνει, ώστε να οριστεί η κατάλληλη αρχική αξιολόγηση."
      />

      <Section className="bg-cream-50">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="space-y-12">
              <div>
                <Eyebrow>Τηλέφωνο</Eyebrow>
                <a
                  href={site.phoneHref}
                  className="mt-6 flex items-center gap-4 font-display text-[2.4rem] leading-none tabular-nums text-midnight-900 transition-colors hover:text-navy-600 sm:text-[3rem]"
                >
                  <PhoneIcon className="h-7 w-7 text-brass-500" />
                  {site.phoneDisplay}
                </a>
                <p className="mt-5 max-w-md text-[0.9375rem] leading-[1.8] text-ink-500">
                  Αν δεν απαντηθεί άμεσα η κλήση, γίνεται επικοινωνία στο
                  συντομότερο δυνατό — οι ώρες των συνεδριών δεν διακόπτονται.
                </p>
              </div>

              <div>
                <Eyebrow>Γραφείο</Eyebrow>
                <address className="mt-6 space-y-1 text-[1.0625rem] not-italic leading-[1.85] text-ink-700">
                  <p>{site.address.street}</p>
                  <p>
                    {site.address.area} {site.address.postal}, {site.address.region}
                  </p>
                </address>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-[0.9375rem] text-navy-600 transition-colors hover:text-midnight-900"
                >
                  Άνοιγμα στους χάρτες <span aria-hidden="true">→</span>
                </a>
              </div>

              <div>
                <Eyebrow>Νοσοκομειακό πλαίσιο</Eyebrow>
                <p className="mt-6 max-w-md text-[1.0625rem] leading-[1.85] text-ink-700">
                  Συνεργάτης του Εργαστηρίου Ύπνου του Ερρίκος Ντυνάν Hospital
                  Center, όπου γίνονται οι εργαστηριακοί έλεγχοι ύπνου όταν
                  απαιτούνται.
                </p>
              </div>

              <div className="rounded-2xl border border-brass-500/25 bg-brass-500/[0.06] p-6">
                <p className="text-[0.875rem] leading-[1.8] text-ink-700">
                  Ο ιστότοπος δεν αποτελεί υπηρεσία επείγουσας βοήθειας. Σε
                  περίπτωση άμεσου κινδύνου, καλέστε το <strong>166</strong> ή
                  απευθυνθείτε στο πλησιέστερο τμήμα επειγόντων.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="overflow-hidden rounded-[26px] border border-ink-900/8">
              <iframe
                src={site.mapEmbed}
                title="Χάρτης — Γαργηττού 117, Γέρακας"
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
