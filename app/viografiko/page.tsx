import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ο ψυχολόγος — Βιογραφικό",
  description:
    "Μιχαήλ Μερμίγκης, ψυχολόγος. Εκπαίδευση στη CBT-I (ΕΓΣΣ), συνεργάτης Εργαστηρίου Ύπνου Ερρίκος Ντυνάν, κλινική εμπειρία 414 ΣΝΕΝ και ΝΙΜΤΣ.",
};

const education = [
  {
    period: "2020 — 2023",
    title: "BSc (Hons) Psychology",
    org: "Cardiff Metropolitan University, UK · City Unity College Athens",
    note: "Αναγνώριση επαγγελματικής ισοδυναμίας τίτλου σπουδών — Υπουργείο Παιδείας, Αρ. Πρωτ. 137709/Κ4, 30.11.2023.",
  },
  {
    period: "2024",
    title: "Εκπαίδευση στη CBT-I και στις παραϋπνίες",
    org: "Εταιρεία Γνωσιακών Συμπεριφοριστικών Σπουδών (ΕΓΣΣ)",
    note: "Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας — η θεραπεία πρώτης γραμμής για τη χρόνια αϋπνία.",
  },
  {
    period: "2023 — 2024",
    title: "Πρόγραμμα Εγκληματολογικής Ψυχολογίας",
    org: "Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών",
  },
  {
    period: "2025",
    title: "Εφαρμογή Βασικών Αρχών Ψυχικής Υγιεινής",
    org: "414 ΣΝΕΝ — Κέντρο Διά Βίου Μάθησης Στρατού Ξηράς",
  },
  {
    period: "2025 — σήμερα",
    title: "Μεταπτυχιακό στην Εγκληματολογία",
    org: "UniOpen, Πανεπιστήμιο Κύπρου, Λευκωσία",
  },
];

const experience = [
  {
    period: "11/2025 — σήμερα",
    title: "Συνεργάτης Εργαστηρίου Ύπνου",
    org: "Ερρίκος Ντυνάν Hospital Center",
    note: "Αντιμετώπιση περιστατικών αϋπνίας και λοιπών διαταραχών ύπνου. Ατομικές συνεδρίες, ψυχομετρικές αξιολογήσεις, ομαδικές παρεμβάσεις, εκπαιδευτικές παρουσιάσεις περιστατικών.",
  },
  {
    period: "1/2025 — 9/2025",
    title: "Πρακτική άσκηση ψυχολογίας",
    org: "ΝΙΜΤΣ — Νοσηλευτικό Ίδρυμα Μετοχικού Ταμείου Στρατού",
    note: "Συμμετοχή σε αξιολογήσεις και κλινικές παρατηρήσεις, συνεργασία με διεπιστημονική ομάδα.",
  },
  {
    period: "11/2024 — 1/2025",
    title: "Πρακτική άσκηση ψυχολογίας",
    org: "414 ΣΝΕΝ — Στρατιωτικό Νοσοκομείο Ειδικών Νοσημάτων, Ψυχιατρική Κλινική",
  },
];

const tools = [
  "MMPI",
  "WISC",
  "Beck Depression Inventory",
  "Athens Insomnia Scale",
  "Ημερολόγιο ύπνου",
];

export default function BioPage() {
  return (
    <>
      <PageHero
        eyebrow="Ο ψυχολόγος"
        title="Μιχαήλ Μερμίγκης"
        intro="Ψυχολόγος με εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας. Η κλινική δουλειά γίνεται με μετρήσιμα εργαλεία και μέσα σε νοσοκομειακό πλαίσιο συνεργασίας."
      />

      <Section className="bg-cream-50">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-brass-500/25" />
              <Image
                src="/img/michalis.jpg"
                alt="Ο ψυχολόγος Μιχαήλ Μερμίγκης"
                width={900}
                height={900}
                sizes="(min-width: 1024px) 400px, 80vw"
                className="relative w-full rounded-2xl object-cover grayscale-[15%]"
                priority
              />
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <p className="eyebrow text-ink-400">Άδεια ασκήσεως</p>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  {site.license}
                </p>
              </div>
              <div>
                <p className="eyebrow text-ink-400">Μέλος</p>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  Σύλλογος Ελλήνων Ψυχολόγων (ΣΕΨ)
                </p>
              </div>
              <div>
                <p className="eyebrow text-ink-400">Γλώσσες</p>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  Ελληνικά · Αγγλικά (Proficiency Michigan, C2)
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              <p>
                Ασχολούμαι κλινικά με τον ύπνο. Δεν είναι μια από τις υπηρεσίες
                που προσφέρω — είναι το πεδίο στο οποίο εκπαιδεύτηκα στοχευμένα
                και μέσα στο οποίο δουλεύω καθημερινά, σε συνεργασία με το
                Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center.
              </p>
              <p>
                Η εξειδίκευσή μου στη Γνωσιακή Συμπεριφορική Θεραπεία της
                Αϋπνίας και των παραϋπνιών προέρχεται από την Εταιρεία Γνωσιακών
                Συμπεριφοριστικών Σπουδών. Η CBT-I είναι η θεραπεία που
                προτείνεται διεθνώς πριν από κάθε φαρμακευτική αγωγή για τη
                χρόνια αϋπνία, και είναι η μέθοδος πάνω στην οποία δομείται η
                δουλειά μας.
              </p>
              <p>
                Η πτυχιακή μου έρευνα εξέτασε την επίδραση της πανδημίας
                COVID-19 στη συχνότητα και τα χαρακτηριστικά της αϋπνίας σε
                δείγμα ελληνικού πληθυσμού — μια περίοδο κατά την οποία τα
                ποσοστά αϋπνίας αυξήθηκαν σημαντικά και το θέμα απέκτησε τη
                σοβαρότητα που του αναλογούσε.
              </p>
              <p>
                Η κλινική μου εμπειρία ξεκίνησε στην Ψυχιατρική Κλινική του 414
                ΣΝΕΝ και συνεχίστηκε στο ΝΙΜΤΣ, με ατομικές συνεδρίες,
                ψυχομετρικές αξιολογήσεις και συνεργασία σε διεπιστημονική ομάδα.
              </p>
            </div>

            <div className="mt-12 rounded-2xl border border-ink-900/8 bg-white/70 p-8">
              <p className="eyebrow text-ink-400">Εργαλεία αξιολόγησης</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {tools.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-ink-900/12 px-4 py-2 text-[0.8125rem] text-ink-700"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-cream-100">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>Επαγγελματική πορεία</Eyebrow>
            <ol className="mt-10 space-y-9">
              {experience.map((e) => (
                <li key={e.title + e.period} className="border-l border-ink-900/12 pl-7">
                  <span className="eyebrow text-navy-600">{e.period}</span>
                  <h3 className="mt-3 font-display text-[1.4rem] leading-snug text-midnight-900">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-500">{e.org}</p>
                  {e.note && (
                    <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                      {e.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Εκπαίδευση</Eyebrow>
            <ol className="mt-10 space-y-9">
              {education.map((e) => (
                <li key={e.title} className="border-l border-ink-900/12 pl-7">
                  <span className="eyebrow text-navy-600">{e.period}</span>
                  <h3 className="mt-3 font-display text-[1.4rem] leading-snug text-midnight-900">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-500">{e.org}</p>
                  {e.note && (
                    <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                      {e.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-20 flex flex-col items-start gap-5 rounded-2xl bg-midnight-900 p-9 text-cream-50 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <p className="max-w-xl font-display text-[1.6rem] leading-snug text-balance">
              Ας δούμε τι συμβαίνει με τον ύπνο σας.
            </p>
            <ButtonLink href="/epikoinonia" variant="brass">
              Επικοινωνία
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
