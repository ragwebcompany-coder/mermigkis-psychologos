import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import OfficeGallery from "@/components/OfficeGallery";
import { PhoneIcon } from "@/components/Header";
import { ButtonLink, Eyebrow, PageHero, Section, SectionHead } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Το γραφείο",
  description:
    "Το γραφείο βρίσκεται στη Γαργηττού 117, Γέρακας. Πρόσβαση, χώρος, και το πλαίσιο συνεργασίας με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν.",
};

const access = [
  {
    t: "Περιοχή",
    b: "Γέρακας Αττικής. Άμεση πρόσβαση από Παλλήνη, Γλυκά Νερά, Ανθούσα, Παιανία και Χαλάνδρι.",
  },
  {
    t: "Στάθμευση",
    b: "Ελεύθερη στάθμευση στους γύρω δρόμους, χωρίς ελεγχόμενη ζώνη.",
  },
  {
    t: "Ραντεβού",
    b: "Αποκλειστικά κατόπιν τηλεφωνικής επικοινωνίας, ώστε να μην υπάρχει αναμονή.",
  },
];

export default function OfficePage() {
  return (
    <>
      <PageHero
        eyebrow="Ο χώρος"
        title="Το γραφείο"
        intro="Ένας ήσυχος χώρος στον Γέρακα, με ραντεβού που ορίζονται ώστε να μη συμπίπτουν — η ώρα σας είναι δική σας."
      />

      <Section className="bg-cream-50">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-display text-[1.6rem] leading-[1.55] text-balance text-midnight-900 sm:text-[2rem]">
              Η θεραπεία της αϋπνίας δεν χρειάζεται εντυπωσιακό περιβάλλον.
              Χρειάζεται <span className="display-italic hl">ησυχία</span>, χρόνο
              και συνέπεια.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              Οι συνεδρίες γίνονται στο ιδιωτικό γραφείο στη Γαργηττού 117 στον
              Γέρακα. Όπου από το ιστορικό προκύψει ανάγκη εργαστηριακού ελέγχου
              — υπνική άπνοια, κινητικές διαταραχές, παραϋπνίες με κίνδυνο — η
              παραπομπή γίνεται στο Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital
              Center, όπου και η κλινική συνεργασία.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section className="bg-cream-100 pb-0 sm:pb-0">
        <Reveal>
          <SectionHead
            eyebrow="Ο χώρος"
            title="Πέντε λήψεις από το γραφείο"
            intro="Από την πινακίδα στην είσοδο μέχρι τη θέση όπου γίνεται η συνεδρία."
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14">
            <OfficeGallery />
          </div>
        </Reveal>
      </Section>

      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead eyebrow="Πρόσβαση" title="Πώς θα έρθετε" />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-10 sm:grid-cols-3">
          {access.map((a, i) => (
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
              title="Χάρτης — Γαργηττού 117, Γέρακας"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[440px] w-full grayscale-[35%]"
            />
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mx-auto mt-12 max-w-4xl text-center">
            <Eyebrow className="text-center">Διεύθυνση</Eyebrow>
            <address className="mt-4 text-[1.0625rem] not-italic leading-[1.8] text-ink-700">
              {site.address.street}, {site.address.area} {site.address.postal}
            </address>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <a
                href={site.phoneHref}
                className="eyebrow inline-flex items-center gap-2.5 rounded-full bg-navy-600 px-8 py-4 text-[0.625rem] text-cream-50 transition-colors hover:bg-midnight-800"
              >
                <PhoneIcon className="h-[13px] w-[13px]" />
                {site.phoneDisplay}
              </a>
              <ButtonLink href="/epikoinonia" variant="outline">
                Επικοινωνία
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
