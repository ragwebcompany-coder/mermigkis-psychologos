import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import {
  ButtonLink,
  Eyebrow,
  PageHero,
  Section,
  SectionHead,
} from "@/components/ui";
import { getDisorders } from "@/lib/disorders";
import { alternates, isLang, localePath } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Διαταραχές ύπνου",
    metaDescription:
      "Αϋπνία έλευσης και διατήρησης, χρόνια αϋπνία, παραϋπνίες, εφιάλτες, κιρκάδιες διαταραχές, απεξάρτηση από υπνωτικά — και πότε χρειάζεται εργαστηριακός έλεγχος ύπνου.",
    heroEyebrow: "Πεδίο εργασίας",
    heroTitle: "Διαταραχές ύπνου",
    heroIntro:
      "Ο ύπνος μπορεί να χαλάσει με πολλούς διαφορετικούς τρόπους, και καθένας ζητά διαφορετική παρέμβαση. Το πρώτο βήμα είναι πάντα να ξεχωρίσουμε με τι έχουμε να κάνουμε.",
    readMore: "Διαβάστε περισσότερα →",
    labEyebrow: "Πότε χρειάζεται εργαστήριο",
    labTitle1: "Όταν η αϋπνία ",
    labTitleHl: "δεν είναι",
    labTitle2: " αϋπνία",
    labBody: [
      "Έντονο ροχαλητό, αναπνευστικές παύσεις που περιγράφει ο σύντροφος, πρωινή κεφαλαλγία, έντονη υπνηλία μέσα στην ημέρα, ανήσυχα πόδια το βράδυ: αυτά δεν αντιμετωπίζονται με ψυχοθεραπεία. Παραπέμπουν σε οργανικές διαταραχές του ύπνου που χρειάζονται μελέτη ύπνου.",
      "Γι' αυτό η αξιολόγηση γίνεται μέσα σε νοσοκομειακό πλαίσιο συνεργασίας με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center. Όπου προκύπτει υποψία, γίνεται παραπομπή για πολυυπνογραφία ή κατ' οίκον καταγραφή πριν ξεκινήσει οποιαδήποτε συμπεριφορική παρέμβαση.",
    ],
    labPunch: "Η σωστή θεραπεία στη λάθος διάγνωση δεν είναι θεραπεία.",
    hygieneEyebrow: "Υγιεινή ύπνου",
    hygieneTitle: "Τα βασικά — και γιατί δεν αρκούν",
    hygiene: [
      "Σταθερή ώρα αφύπνισης κάθε μέρα — και τα Σαββατοκύριακα.",
      "Υπνοδωμάτιο ήσυχο, σκοτεινό και δροσερό.",
      "Καθόλου έντονη άσκηση, αλκοόλ ή βαρύ φαγητό τις δύο ώρες πριν τον ύπνο.",
      "Καφεΐνη μέχρι νωρίς το απόγευμα και όχι αργότερα.",
      "Οθόνες και μέσα κοινωνικής δικτύωσης εκτός κρεβατιού.",
      "Αν δεν έρχεται ο ύπνος, σηκωθείτε — μην μένετε ξύπνιοι στο κρεβάτι.",
    ],
    hygieneNote:
      "Απαραίτητα, αλλά από μόνα τους σπάνια λύνουν χρόνια αϋπνία. Είναι το υπόβαθρο πάνω στο οποίο δουλεύει η CBT-I — όχι υποκατάστατό της.",
    cbtCta: "Η θεραπεία CBT-I",
    contactCta: "Κλείστε ραντεβού",
  },
  en: {
    metaTitle: "Sleep disorders",
    metaDescription:
      "Sleep-onset and maintenance insomnia, chronic insomnia, parasomnias, nightmares, circadian disorders, coming off sleeping pills — and when a sleep study is needed.",
    heroEyebrow: "Field of work",
    heroTitle: "Sleep disorders",
    heroIntro:
      "Sleep can break down in many different ways, and each one calls for a different intervention. The first step is always to work out what we are actually dealing with.",
    readMore: "Read more →",
    labEyebrow: "When a sleep study is needed",
    labTitle1: "When insomnia ",
    labTitleHl: "is not",
    labTitle2: " insomnia",
    labBody: [
      "Loud snoring, breathing pauses described by a partner, morning headache, heavy daytime sleepiness, restless legs in the evening: these are not treated with psychotherapy. They point to organic sleep disorders that need a sleep study.",
      "That is why the assessment sits within a hospital framework, in collaboration with the Sleep Laboratory of Errikos Dynan Hospital Center. Where a suspicion arises, a referral is made for polysomnography or home recording before any behavioural intervention begins.",
    ],
    labPunch: "The right treatment for the wrong diagnosis is not treatment.",
    hygieneEyebrow: "Sleep hygiene",
    hygieneTitle: "The basics — and why they are not enough",
    hygiene: [
      "A fixed wake time every day — weekends included.",
      "A bedroom that is quiet, dark and cool.",
      "No vigorous exercise, alcohol or heavy meals in the two hours before bed.",
      "Caffeine until early afternoon and no later.",
      "Screens and social media out of the bed.",
      "If sleep does not come, get up — do not lie there awake.",
    ],
    hygieneNote:
      "Necessary, but on their own they rarely resolve chronic insomnia. They are the ground CBT-I works on — not a substitute for it.",
    cbtCta: "CBT-I treatment",
    contactCta: "Book an appointment",
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
    alternates: alternates(isLang(lang) ? lang : "el", "/diataraches-ypnou"),
  };
}

export default async function DisordersPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];
  const disorders = getDisorders(lang);

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        intro={t.heroIntro}
      />

      <Section className="bg-cream-50">
        <ul className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {disorders.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={(i % 3) * 80}>
              <Link
                href={localePath(lang, `/diataraches-ypnou/${d.slug}`)}
                className="group block h-full border-t border-ink-900/12 pt-7 transition-colors hover:border-brass-500/60"
              >
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  {d.nav}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                  {d.short}
                </p>
                <span className="eyebrow mt-6 inline-block text-[0.5625rem] text-navy-600 transition-colors group-hover:text-brass-500">
                  {t.readMore}
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow={t.labEyebrow}
            title={
              <>
                {t.labTitle1}
                <span className="display-italic hl">{t.labTitleHl}</span>
                {t.labTitle2}
              </>
            }
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="space-y-5 text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              {t.labBody.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
              <p className="font-display text-[1.35rem] leading-relaxed text-midnight-900">
                {t.labPunch}
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-900/8 bg-cream-50 p-9 sm:p-11">
              <Eyebrow align="left">{t.hygieneEyebrow}</Eyebrow>
              <h3 className="mt-5 font-display text-[1.55rem] leading-snug text-midnight-900">
                {t.hygieneTitle}
              </h3>
              <ul className="mt-7 space-y-3.5">
                {t.hygiene.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[0.9375rem] leading-[1.75] text-ink-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-7 border-t border-ink-900/10 pt-6 text-[0.875rem] leading-[1.8] text-ink-500">
                {t.hygieneNote}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <ButtonLink href={localePath(lang, "/aypnia-cbt-i")} variant="primary">
              {t.cbtCta}
            </ButtonLink>
            <ButtonLink href={localePath(lang, "/epikoinonia")} variant="outline">
              {t.contactCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
