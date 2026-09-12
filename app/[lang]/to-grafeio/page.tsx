import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import OfficeGallery from "@/components/OfficeGallery";
import { PhoneIcon } from "@/components/Header";
import {
  ButtonLink,
  Eyebrow,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui";
import { site, siteText } from "@/lib/site";
import { alternates, isLang, localePath } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Το γραφείο",
    metaDescription:
      "Το γραφείο βρίσκεται στην Παναγή Τσαλδάρη 21, Μελίσσια. Πρόσβαση, χώρος, και το πλαίσιο συνεργασίας με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν.",
    heroEyebrow: "Ο χώρος",
    heroTitle: "Το γραφείο",
    heroIntro:
      "Ένας ήσυχος χώρος στα Μελίσσια, με ραντεβού που ορίζονται ώστε να μη συμπίπτουν — η ώρα σας είναι δική σας.",
    lead1: "Η θεραπεία της αϋπνίας δεν χρειάζεται εντυπωσιακό περιβάλλον. Χρειάζεται ",
    leadHl: "ησυχία",
    lead2: ", χρόνο και συνέπεια.",
    leadBody:
      "Οι συνεδρίες γίνονται στο ιδιωτικό γραφείο στην Παναγή Τσαλδάρη 21 στα Μελίσσια. Όπου από το ιστορικό προκύψει ανάγκη εργαστηριακού ελέγχου — υπνική άπνοια, κινητικές διαταραχές, παραϋπνίες με κίνδυνο — η παραπομπή γίνεται στο Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center, όπου και η κλινική συνεργασία.",
    galleryEyebrow: "Ο χώρος",
    galleryTitle: "Τέσσερις λήψεις από το γραφείο",
    galleryIntro:
      "Από τη θέση όπου γίνεται η συνεδρία μέχρι την πινακίδα στην είσοδο.",
    accessEyebrow: "Πρόσβαση",
    accessTitle: "Πώς θα έρθετε",
    access: [
      {
        t: "Περιοχή",
        b: "Μελίσσια Αττικής. Άμεση πρόσβαση από Βριλήσσια, Πεντέλη, Χαλάνδρι, Μαρούσι και Κηφισιά.",
      },
      {
        t: "Στάθμευση",
        b: "Ελεύθερη στάθμευση στους γύρω δρόμους, χωρίς ελεγχόμενη ζώνη.",
      },
      {
        t: "Ραντεβού",
        b: "Αποκλειστικά κατόπιν τηλεφωνικής επικοινωνίας, ώστε να μην υπάρχει αναμονή.",
      },
    ],
    mapTitle: "Χάρτης — Παναγή Τσαλδάρη 21, Μελίσσια",
    addressLabel: "Διεύθυνση",
    contactCta: "Επικοινωνία",
  },
  en: {
    metaTitle: "The practice",
    metaDescription:
      "The practice is at 21 Panagi Tsaldari St., Melissia, Athens. Getting there, the space, and the working relationship with the Sleep Laboratory of Errikos Dynan.",
    heroEyebrow: "The space",
    heroTitle: "The practice",
    heroIntro:
      "A quiet space in Melissia, with appointments scheduled so that they never overlap — your hour is yours.",
    lead1: "Treating insomnia does not call for impressive surroundings. It calls for ",
    leadHl: "quiet",
    lead2: ", time and consistency.",
    leadBody:
      "Sessions take place at the private practice at 21 Panagi Tsaldari St. in Melissia. Where the history shows that laboratory testing is needed — sleep apnoea, movement disorders, parasomnias with a risk of injury — the referral goes to the Sleep Laboratory of Errikos Dynan Hospital Center, which is also where the clinical collaboration sits.",
    galleryEyebrow: "The space",
    galleryTitle: "Four views of the practice",
    galleryIntro:
      "From the seat where the session happens to the sign at the entrance.",
    accessEyebrow: "Getting there",
    accessTitle: "How to find us",
    access: [
      {
        t: "Area",
        b: "Melissia, northern Athens. Easy access from Vrilissia, Penteli, Chalandri, Marousi and Kifissia.",
      },
      {
        t: "Parking",
        b: "Free parking on the surrounding streets, with no controlled zone.",
      },
      {
        t: "Appointments",
        b: "By telephone arrangement only, so that there is never a wait.",
      },
    ],
    mapTitle: "Map — 21 Panagi Tsaldari St., Melissia",
    addressLabel: "Address",
    contactCta: "Contact",
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
    alternates: alternates(isLang(lang) ? lang : "el", "/to-grafeio"),
  };
}

export default async function OfficePage({
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
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        intro={t.heroIntro}
      />

      <Section className="bg-cream-50">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[1.6rem] leading-[1.55] text-balance text-midnight-900 sm:text-[2rem]">
              {t.lead1}
              <span className="display-italic hl">{t.leadHl}</span>
              {t.lead2}
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              {t.leadBody}
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-cream-100 pb-0 sm:pb-0">
        <Reveal>
          <SectionHead
            eyebrow={t.galleryEyebrow}
            title={t.galleryTitle}
            intro={t.galleryIntro}
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14">
            <OfficeGallery lang={lang} />
          </div>
        </Reveal>
      </Section>

      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead eyebrow={t.accessEyebrow} title={t.accessTitle} />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-3">
          {t.access.map((a, i) => (
            <Reveal key={a.t} delay={i * 80}>
              <div className="text-center">
                <h3 className="font-display text-[1.3rem] text-midnight-900">
                  {a.t}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-500 text-pretty">
                  {a.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={140}>
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-[26px] border border-ink-900/8">
            <iframe
              src={site.mapEmbed}
              title={t.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[440px] w-full grayscale-[35%]"
            />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-12 max-w-4xl text-center">
            <Eyebrow className="text-center">{t.addressLabel}</Eyebrow>
            <address className="mt-4 text-[1.0625rem] not-italic leading-[1.8] text-ink-700">
              {s.street}, {s.area} {site.address.postal}
            </address>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={site.phoneHref}
                className="eyebrow inline-flex items-center gap-2.5 rounded-full bg-navy-600 px-8 py-4 text-[0.625rem] text-cream-50 transition-colors hover:bg-midnight-800"
              >
                <PhoneIcon className="h-[13px] w-[13px]" />
                {site.phoneDisplay}
              </a>
              <ButtonLink
                href={localePath(lang, "/epikoinonia")}
                variant="outline"
              >
                {t.contactCta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
