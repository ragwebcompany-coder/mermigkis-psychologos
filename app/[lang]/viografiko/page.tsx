import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  Eyebrow,
  Ornament,
  PageHero,
  Section,
  Stars,
} from "@/components/ui";
import { siteText } from "@/lib/site";
import { alternates, isLang, localePath, type Lang } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Ο ψυχολόγος — Βιογραφικό",
    metaDescription:
      "Μιχαήλ Μερμίγκης, ψυχολόγος. Εκπαίδευση στη CBT-I (ΕΓΣΣ), συνεργάτης Εργαστηρίου Ύπνου Ερρίκος Ντυνάν, κλινική εμπειρία 414 ΣΝΕΝ και ΝΙΜΤΣ.",
    heroEyebrow: "Ο ψυχολόγος",
    heroTitle: "Μιχαήλ Μερμίγκης",
    heroIntro:
      "Ψυχολόγος με εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας. Η κλινική δουλειά γίνεται με μετρήσιμα εργαλεία και μέσα σε νοσοκομειακό πλαίσιο συνεργασίας.",
    portraitAlt: "Ο ψυχολόγος Μιχαήλ Μερμίγκης",
    licenceLabel: "Άδεια ασκήσεως",
    memberLabel: "Μέλος",
    member: "British Psychological Society (BPS)",
    languagesLabel: "Γλώσσες",
    languages: "Ελληνικά · Αγγλικά (Proficiency Michigan, C2)",
    bio: [
      "Ασχολούμαι κλινικά με τον ύπνο. Δεν είναι μια από τις υπηρεσίες που προσφέρω — είναι το πεδίο στο οποίο εκπαιδεύτηκα στοχευμένα και μέσα στο οποίο δουλεύω καθημερινά, σε συνεργασία με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center.",
      "Η εξειδίκευσή μου στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας και των παραϋπνιών προέρχεται από την Εταιρεία Γνωσιακών Συμπεριφοριστικών Σπουδών. Η CBT-I είναι η θεραπεία που προτείνεται διεθνώς πριν από κάθε φαρμακευτική αγωγή για τη χρόνια αϋπνία, και είναι η μέθοδος πάνω στην οποία δομείται η δουλειά μας.",
      "Η πτυχιακή μου έρευνα εξέτασε την επίδραση της πανδημίας COVID-19 στη συχνότητα και τα χαρακτηριστικά της αϋπνίας σε δείγμα ελληνικού πληθυσμού — μια περίοδο κατά την οποία τα ποσοστά αϋπνίας αυξήθηκαν σημαντικά και το θέμα απέκτησε τη σοβαρότητα που του αναλογούσε.",
      "Η κλινική μου εμπειρία ξεκίνησε στην Ψυχιατρική Κλινική του 414 ΣΝΕΝ και συνεχίστηκε στο ΝΙΜΤΣ, με ατομικές συνεδρίες, ψυχομετρικές αξιολογήσεις και συνεργασία σε διεπιστημονική ομάδα.",
    ],
    toolsLabel: "Εργαλεία αξιολόγησης",
    tools: [
      "MMPI",
      "WISC",
      "Beck Depression Inventory",
      "Athens Insomnia Scale",
      "Ημερολόγιο ύπνου",
    ],
    labEyebrow: "Το πλαίσιο συνεργασίας",
    labTitle1: "Εργαστήριο Ύπνου (ΕΚεΔΥ)",
    labTitle2: "Ερρίκος Ντυνάν Hospital Center",
    labBody:
      "Η ψυχολογική παρέμβαση για τον ύπνο δεν στέκεται μόνη της. Όπου το ιστορικό δείχνει ότι χρειάζεται εργαστηριακός έλεγχος — υπνική άπνοια, κινητικές διαταραχές, παραϋπνίες με κίνδυνο — η αξιολόγηση γίνεται στο Εργαστήριο Ύπνου του Ερρίκος Ντυνάν, όπου και η κλινική συνεργασία.",
    directorLabel: "Διευθυντής Εργαστηρίου",
    directorName: "Δρ. Χαράλαμπος Μερμίγκης, MD, PhD",
    directorRole: "Πνευμονολόγος — Ειδικός Ιατρός Ύπνου",
    director: [
      "American Board Certified International Sleep Specialist",
      "Ειδίκευση στην Ιατρική του Ύπνου, Cleveland Clinic Sleep Disorders Center, Ohio, USA",
      "Διδάκτωρ Ιατρικής Σχολής Πανεπιστημίου Κρήτης",
      "Τέως Διευθυντής Εργαστηρίου Ύπνου, 401 Γ.Σ.Ν.Α.",
    ],
    labNote:
      "Ο Μιχαήλ Μερμίγκης συνεργάζεται με το Εργαστήριο ως ψυχολόγος και συνυπογράφει τη σχετική αρθρογραφία.",
    articlesCta: "Αρθρογραφία",
    experienceLabel: "Επαγγελματική πορεία",
    educationLabel: "Εκπαίδευση",
    experience: [
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
    ],
    education: [
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
    ],
    closing: "Ας δούμε τι συμβαίνει με τον ύπνο σας.",
    contactCta: "Επικοινωνία",
  },

  en: {
    metaTitle: "The psychologist — CV",
    metaDescription:
      "Michail Mermigkis, psychologist. Trained in CBT-I, collaborator of the Sleep Laboratory at Errikos Dynan Hospital Center, clinical experience at the 414 Military Hospital and NIMTS.",
    heroEyebrow: "The psychologist",
    heroTitle: "Michail Mermigkis",
    heroIntro:
      "A psychologist specialising in Cognitive Behavioural Therapy for Insomnia. The clinical work is done with measurable instruments and within a hospital framework of collaboration.",
    portraitAlt: "Michail Mermigkis, psychologist",
    licenceLabel: "Practising licence",
    memberLabel: "Member",
    member: "British Psychological Society (BPS)",
    languagesLabel: "Languages",
    languages: "Greek · English (Michigan Proficiency, C2)",
    bio: [
      "Sleep is my clinical field. It is not one of the services I offer — it is the field I trained in deliberately and the one I work in every day, in collaboration with the Sleep Laboratory of Errikos Dynan Hospital Center.",
      "My specialist training in Cognitive Behavioural Therapy for Insomnia and the parasomnias comes from the Hellenic Association for Cognitive Behavioural Studies. CBT-I is the treatment recommended internationally ahead of any medication for chronic insomnia, and it is the method our work is built on.",
      "My undergraduate research examined the effect of the COVID-19 pandemic on the prevalence and characteristics of insomnia in a Greek population sample — a period in which rates of insomnia rose sharply and the subject finally received the seriousness it deserved.",
      "My clinical experience began at the Psychiatric Clinic of the 414 Military Hospital and continued at NIMTS, with individual sessions, psychometric assessments and work within a multidisciplinary team.",
    ],
    toolsLabel: "Assessment instruments",
    tools: [
      "MMPI",
      "WISC",
      "Beck Depression Inventory",
      "Athens Insomnia Scale",
      "Sleep diary",
    ],
    labEyebrow: "The clinical framework",
    labTitle1: "Sleep Laboratory (EKeDY)",
    labTitle2: "Errikos Dynan Hospital Center",
    labBody:
      "A psychological intervention for sleep does not stand on its own. Where the history shows that laboratory testing is needed — sleep apnoea, movement disorders, parasomnias with a risk of injury — the assessment takes place at the Sleep Laboratory of Errikos Dynan, which is also where the clinical collaboration sits.",
    directorLabel: "Laboratory director",
    directorName: "Dr Charalampos Mermigkis, MD, PhD",
    directorRole: "Pulmonologist — Sleep Medicine specialist",
    director: [
      "American Board Certified International Sleep Specialist",
      "Fellowship in Sleep Medicine, Cleveland Clinic Sleep Disorders Center, Ohio, USA",
      "PhD, School of Medicine, University of Crete",
      "Former Director of the Sleep Laboratory, 401 General Military Hospital of Athens",
    ],
    labNote:
      "Michail Mermigkis works with the Laboratory as a psychologist and is a co-author of the related articles.",
    articlesCta: "Articles",
    experienceLabel: "Professional experience",
    educationLabel: "Education",
    experience: [
      {
        period: "11/2025 — present",
        title: "Collaborator, Sleep Laboratory",
        org: "Errikos Dynan Hospital Center",
        note: "Treating insomnia and other sleep disorders. Individual sessions, psychometric assessments, group interventions, teaching case presentations.",
      },
      {
        period: "1/2025 — 9/2025",
        title: "Psychology placement",
        org: "NIMTS — Army Share Fund Hospital, Athens",
        note: "Participation in assessments and clinical observation, working within a multidisciplinary team.",
      },
      {
        period: "11/2024 — 1/2025",
        title: "Psychology placement",
        org: "414 Military Hospital for Special Diseases, Psychiatric Clinic",
      },
    ],
    education: [
      {
        period: "2020 — 2023",
        title: "BSc (Hons) Psychology",
        org: "Cardiff Metropolitan University, UK · City Unity College Athens",
        note: "Recognition of professional equivalence — Greek Ministry of Education, ref. 137709/K4, 30.11.2023.",
      },
      {
        period: "2024",
        title: "Training in CBT-I and the parasomnias",
        org: "Hellenic Association for Cognitive Behavioural Studies",
        note: "Cognitive Behavioural Therapy for Insomnia — the first-line treatment for chronic insomnia.",
      },
      {
        period: "2023 — 2024",
        title: "Programme in Forensic Psychology",
        org: "National and Kapodistrian University of Athens",
      },
      {
        period: "2025",
        title: "Applying the Basic Principles of Mental Health",
        org: "414 Military Hospital — Hellenic Army Lifelong Learning Centre",
      },
      {
        period: "2025 — present",
        title: "MSc in Criminology",
        org: "UniOpen, University of Cyprus, Nicosia",
      },
    ],
    closing: "Let's look at what is happening with your sleep.",
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
    alternates: alternates(isLang(lang) ? lang : "el", "/viografiko"),
  };
}

export default async function BioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang as Lang];
  const s = siteText[lang];

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        intro={t.heroIntro}
      />

      <Section className="bg-cream-50">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-brass-500/25" />
              <Image
                src="/img/michalis.jpg"
                alt={t.portraitAlt}
                width={800}
                height={800}
                sizes="(min-width: 1024px) 400px, 80vw"
                className="relative w-full rounded-2xl object-cover grayscale-[15%]"
                priority
              />
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <p className="eyebrow text-ink-400">{t.licenceLabel}</p>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  {s.license}
                </p>
              </div>
              <div>
                <p className="eyebrow text-ink-400">{t.memberLabel}</p>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  {t.member}
                </p>
              </div>
              <div>
                <p className="eyebrow text-ink-400">{t.languagesLabel}</p>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  {t.languages}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              {t.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            <div className="mt-12 rounded-2xl border border-ink-900/8 bg-white/70 p-8">
              <p className="eyebrow text-ink-400">{t.toolsLabel}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {t.tools.map((tool) => (
                  <li
                    key={tool}
                    className="rounded-full border border-ink-900/12 px-4 py-2 text-[0.8125rem] text-ink-700"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── The clinical framework ───────────────────────────── */}
      <section className="nocturne relative overflow-hidden px-5 py-28 text-cream-50 sm:px-8 sm:py-36">
        <Stars />
        <div className="relative mx-auto max-w-3xl text-center">
          <Eyebrow tone="light">{t.labEyebrow}</Eyebrow>
          <h2 className="mt-6 font-display text-[2rem] leading-[1.16] text-balance sm:text-[2.6rem]">
            {t.labTitle1}
            <br className="hidden sm:block" /> {t.labTitle2}
          </h2>
          <Ornament tone="light" className="mt-9" />

          <p className="mx-auto mt-10 max-w-2xl text-[1.0625rem] leading-[1.9] text-moon-200/65 text-pretty">
            {t.labBody}
          </p>

          <div className="mx-auto mt-14 max-w-xl rounded-[26px] border border-moon-200/15 bg-cream-50/[0.04] px-8 py-10 text-left sm:px-10">
            <p className="eyebrow text-[0.5625rem] text-brass-400/90">
              {t.directorLabel}
            </p>
            <h3 className="mt-4 font-display text-[1.5rem] leading-snug text-cream-50 sm:text-[1.75rem]">
              {t.directorName}
            </h3>
            <p className="mt-2 text-[0.9375rem] leading-[1.7] text-moon-200/60">
              {t.directorRole}
            </p>
            <ul className="mt-7 space-y-3.5 border-t border-moon-200/12 pt-7 text-[0.9375rem] leading-[1.75] text-moon-200/70">
              {t.director.map((d) => (
                <li key={d} className="flex gap-3 text-pretty">
                  <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-brass-400/70" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-[0.9375rem] leading-[1.8] text-moon-200/45 text-pretty">
            {t.labNote}
          </p>

          <div className="mt-10">
            <Link
              href={localePath(lang, "/arthrografia")}
              className="eyebrow inline-flex items-center justify-center rounded-full px-8 py-4 text-[0.625rem] text-cream-50 ring-1 ring-moon-200/30 transition-all duration-300 hover:bg-cream-50/10 hover:ring-brass-400/60"
            >
              {t.articlesCta}
            </Link>
          </div>
        </div>
      </section>

      <Section className="bg-cream-100">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>{t.experienceLabel}</Eyebrow>
            <ol className="mt-10 space-y-9">
              {t.experience.map((e) => (
                <li
                  key={e.title + e.period}
                  className="border-l border-ink-900/12 pl-7"
                >
                  <span className="eyebrow text-navy-600">{e.period}</span>
                  <h3 className="mt-3 font-display text-[1.4rem] leading-snug text-midnight-900">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-500">{e.org}</p>
                  {"note" in e && e.note && (
                    <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                      {e.note}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>{t.educationLabel}</Eyebrow>
            <ol className="mt-10 space-y-9">
              {t.education.map((e) => (
                <li key={e.title} className="border-l border-ink-900/12 pl-7">
                  <span className="eyebrow text-navy-600">{e.period}</span>
                  <h3 className="mt-3 font-display text-[1.4rem] leading-snug text-midnight-900">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] text-ink-500">{e.org}</p>
                  {"note" in e && e.note && (
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
              {t.closing}
            </p>
            <ButtonLink href={localePath(lang, "/epikoinonia")} variant="brass">
              {t.contactCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
