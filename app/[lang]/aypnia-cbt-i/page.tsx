import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Section, Stars } from "@/components/ui";
import { getMethod } from "@/lib/content";
import { alternates, isLang, localePath } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Αϋπνία & CBT-I",
    metaDescription:
      "Τι είναι η αϋπνία, γιατί γίνεται χρόνια και πώς αντιμετωπίζεται με Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I) — τη θεραπεία πρώτης γραμμής διεθνώς.",
    heroEyebrow: "Η θεραπεία",
    heroTitle: "Αϋπνία & Γνωσιακή Συμπεριφορική Θεραπεία",
    heroIntro:
      "Η CBT-I είναι η θεραπεία πρώτης γραμμής για τη χρόνια αϋπνία στις διεθνείς κατευθυντήριες οδηγίες — πριν από τη φαρμακευτική αγωγή, με αποτελέσματα που διατηρούνται και μετά το τέλος της.",
    whatEyebrow: "Τι είναι",
    whatTitle: "Ένα μυαλό που δεν κατεβάζει ταχύτητα τη στιγμή που πρέπει.",
    whatBody: [
      "Αϋπνία δεν είναι απλώς «λίγες ώρες ύπνου». Είναι η επίμονη δυσκολία να έρθει ή να διατηρηθεί ο ύπνος, παρότι οι συνθήκες το επιτρέπουν, με ξεκάθαρο κόστος την επόμενη ημέρα. Αυτό το τελευταίο είναι το κρίσιμο: κάποιος που κοιμάται πέντε ώρες και λειτουργεί άριστα δεν έχει αϋπνία.",
      "Στην οξεία της μορφή διαρκεί μέρες έως εβδομάδες και συνήθως υποχωρεί μόνη της· τη βιώνει το 30–40% του πληθυσμού μέσα σε έναν χρόνο. Γίνεται χρόνια όταν εμφανίζεται τουλάχιστον τρεις νύχτες την εβδομάδα για πάνω από τρεις μήνες — και αφορά το 8–10% του πληθυσμού.",
      "Είναι συχνότερη στις γυναίκες, ιδιαίτερα μετά την εμμηνόπαυση. Και συχνά κρύβει από κάτω μια άλλη διαταραχή: η υπνική άπνοια, για παράδειγμα, εκδηλώνεται πολλές φορές ως αϋπνία διατήρησης.",
    ],
    typesLabel: "Οι τρεις μορφές",
    types: [
      {
        title: "Δυσκολία έλευσης",
        body: "Χρειάζεστε συστηματικά πάνω από 20–30 λεπτά για να σας πάρει ο ύπνος.",
      },
      {
        title: "Δυσκολία διατήρησης",
        body: "Ξυπνάτε μέσα στη νύχτα και δυσκολεύεστε να ξανακοιμηθείτε.",
      },
      {
        title: "Πρώιμη τελική αφύπνιση",
        body: "Ξυπνάτε 20–30 λεπτά ή περισσότερο πριν από την ώρα σας, χωρίς επιστροφή στον ύπνο.",
      },
    ],
    cycleEyebrow: "Ο μηχανισμός",
    cycleTitle: "Γιατί η αϋπνία επιμένει αφού η αιτία της έχει περάσει.",
    cycle: [
      {
        n: "Πυροδότηση",
        body: "Ένα στρεσογόνο γεγονός διαταράσσει τον ύπνο. Μέχρι εδώ, φυσιολογικό — έτσι αντιδρά ο οργανισμός.",
      },
      {
        n: "Αντιστάθμιση",
        body: "Ξεκινούν οι λογικές κινήσεις: νωρίτερα στο κρεβάτι, παραμονή ξύπνιοι εκεί, μεσημεριανός ύπνος, καφές, έλεγχος του ρολογιού.",
      },
      {
        n: "Εδραίωση",
        body: "Το κρεβάτι συνδέεται πλέον με την εγρήγορση και όχι με τον ύπνο. Η αϋπνία δεν χρειάζεται πια την αρχική αιτία για να συνεχιστεί.",
      },
    ],
    cyclePunch:
      "Η CBT-I στοχεύει ακριβώς σε αυτούς τους παράγοντες συντήρησης. Δεν σας μαθαίνει να κοιμάστε — αφαιρεί ό,τι εμποδίζει τον ύπνο να κάνει αυτό που ξέρει.",
    componentsEyebrow: "Τα συστατικά",
    componentsTitle: "Τι ακριβώς περιλαμβάνει η θεραπεία",
    dayEyebrow: "Το κόστος της ημέρας",
    dayTitle: "Η αϋπνία δεν τελειώνει το πρωί.",
    daySymptoms: [
      "Κόπωση που δεν φεύγει με ξεκούραση",
      "Δυσκολία συγκέντρωσης και μνήμης",
      "Ευερεθιστότητα και μεταπτώσεις διάθεσης",
      "Άγχος για την επόμενη νύχτα",
      "Μειωμένη απόδοση στη δουλειά",
      "Ένταση στις σχέσεις",
    ],
    courseEyebrow: "Η πορεία",
    courseTitle: "Τι να περιμένετε",
    course: [
      ["Εβδομάδα 1", "Αναλυτικό ιστορικό ύπνου, ψυχομετρική αξιολόγηση και ημερολόγιο ύπνου. Δεν αλλάζει ακόμη τίποτα — πρώτα μετράμε."],
      ["Εβδομάδες 2–3", "Ξεκινά ο περιορισμός χρόνου στο κρεβάτι και ο έλεγχος ερεθισμάτων. Είναι το πιο απαιτητικό σημείο, και εκεί κρίνεται το αποτέλεσμα."],
      ["Εβδομάδες 4–6", "Ο ύπνος πυκνώνει και επεκτείνεται σταδιακά. Παράλληλα δουλεύουμε τις σκέψεις και την υπερδιέγερση."],
      ["Ολοκλήρωση", "Σταθεροποίηση και πλάνο πρόληψης υποτροπής: τι κάνετε μόνοι σας όταν έρθει μια δύσκολη περίοδος."],
    ],
    closing: "Δεν είστε σίγουροι αν αυτό που ζείτε είναι αϋπνία;",
    closingCta: "Κάντε το τεστ",
  },

  en: {
    metaTitle: "Insomnia & CBT-I",
    metaDescription:
      "What insomnia is, why it becomes chronic, and how it is treated with Cognitive Behavioural Therapy for Insomnia (CBT-I) — the first-line treatment worldwide.",
    heroEyebrow: "The treatment",
    heroTitle: "Insomnia & Cognitive Behavioural Therapy",
    heroIntro:
      "CBT-I is the first-line treatment for chronic insomnia in international clinical guidelines — ahead of medication, with results that hold after treatment ends.",
    whatEyebrow: "What it is",
    whatTitle: "A mind that will not slow down at the moment it needs to.",
    whatBody: [
      "Insomnia is not simply «not many hours of sleep». It is the persistent difficulty in falling or staying asleep, despite conditions that allow it, with a clear cost the next day. That last part is decisive: someone who sleeps five hours and functions well does not have insomnia.",
      "In its acute form it lasts days to weeks and usually resolves on its own; 30–40% of the population experience it within any given year. It becomes chronic when it occurs at least three nights a week for more than three months — and that affects 8–10% of the population.",
      "It is more common in women, particularly after menopause. And it often conceals another disorder underneath: sleep apnoea, for instance, frequently presents as sleep-maintenance insomnia.",
    ],
    typesLabel: "The three forms",
    types: [
      {
        title: "Difficulty falling asleep",
        body: "You consistently need more than 20–30 minutes to fall asleep.",
      },
      {
        title: "Difficulty staying asleep",
        body: "You wake during the night and struggle to get back to sleep.",
      },
      {
        title: "Early final awakening",
        body: "You wake 20–30 minutes or more before your time, with no return to sleep.",
      },
    ],
    cycleEyebrow: "The mechanism",
    cycleTitle: "Why insomnia persists long after its cause has passed.",
    cycle: [
      {
        n: "Trigger",
        body: "A stressful event disrupts sleep. So far, normal — that is how the body responds.",
      },
      {
        n: "Compensation",
        body: "The reasonable moves begin: earlier to bed, staying there awake, daytime naps, coffee, clock-watching.",
      },
      {
        n: "Entrenchment",
        body: "The bed is now associated with being awake rather than with sleep. Insomnia no longer needs the original cause to keep going.",
      },
    ],
    cyclePunch:
      "CBT-I targets exactly those maintaining factors. It does not teach you to sleep — it removes what stops sleep from doing what it already knows how to do.",
    componentsEyebrow: "The components",
    componentsTitle: "What the treatment actually involves",
    dayEyebrow: "The cost during the day",
    dayTitle: "Insomnia does not end in the morning.",
    daySymptoms: [
      "Fatigue that does not lift with rest",
      "Difficulty with concentration and memory",
      "Irritability and mood swings",
      "Anxiety about the coming night",
      "Reduced performance at work",
      "Strain on relationships",
    ],
    courseEyebrow: "The course",
    courseTitle: "What to expect",
    course: [
      ["Week 1", "A detailed sleep history, psychometric assessment and a sleep diary. Nothing changes yet — first we measure."],
      ["Weeks 2–3", "Sleep restriction and stimulus control begin. This is the most demanding stretch, and where the outcome is decided."],
      ["Weeks 4–6", "Sleep becomes denser and is gradually extended. In parallel we work on thoughts and hyperarousal."],
      ["Completion", "Consolidation and a relapse-prevention plan: what you do on your own when a difficult stretch comes."],
    ],
    closing: "Not sure whether what you are living with is insomnia?",
    closingCta: "Take the test",
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
    alternates: alternates(isLang(lang) ? lang : "el", "/aypnia-cbt-i"),
  };
}

export default async function AypniaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];
  const method = getMethod(lang);

  return (
    <>
      <PageHero
        eyebrow={t.heroEyebrow}
        title={t.heroTitle}
        intro={t.heroIntro}
      />

      {/* Definition */}
      <Section className="bg-cream-50">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>{t.whatEyebrow}</Eyebrow>
            <h2 className="mt-7 font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.9rem]">
              {t.whatTitle}
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              {t.whatBody.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <p className="eyebrow text-ink-400">{t.typesLabel}</p>
              {t.types.map((type) => (
                <div
                  key={type.title}
                  className="rounded-2xl border border-ink-900/8 bg-white/70 p-7"
                >
                  <h3 className="font-display text-[1.3rem] text-midnight-900">
                    {type.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700">
                    {type.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The vicious cycle */}
      <section className="nocturne relative overflow-hidden px-5 py-24 text-cream-50 sm:px-8 sm:py-32">
        <Stars />
        <div className="relative mx-auto max-w-[1240px]">
          <Reveal>
            <Eyebrow tone="light">{t.cycleEyebrow}</Eyebrow>
            <h2 className="mt-7 max-w-3xl font-display text-[2.15rem] leading-[1.12] text-balance sm:text-[3.05rem]">
              {t.cycleTitle}
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {t.cycle.map((s, i) => (
              <Reveal key={s.n} delay={i * 110}>
                <div className="border-t border-moon-200/15 pt-7">
                  <span className="eyebrow text-brass-400">{s.n}</span>
                  <p className="mt-5 text-[1rem] leading-[1.85] text-moon-200/65 text-pretty">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <p className="mt-16 max-w-2xl border-l-2 border-brass-500/50 pl-7 font-display text-[1.5rem] leading-relaxed text-cream-50 sm:text-[1.8rem]">
              {t.cyclePunch}
            </p>
          </Reveal>
        </div>
      </section>

      {/* The components */}
      <Section className="bg-cream-100">
        <Reveal>
          <Eyebrow>{t.componentsEyebrow}</Eyebrow>
          <h2 className="mt-7 max-w-3xl font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.9rem]">
            {t.componentsTitle}
          </h2>
        </Reveal>

        <div className="mt-14 space-y-px overflow-hidden rounded-2xl bg-ink-900/10">
          {method.map((m, i) => (
            <Reveal key={m.n} delay={i * 70}>
              <div className="grid gap-5 bg-cream-100 p-8 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-10">
                <span className="font-display text-[1.75rem] tabular-nums text-brass-500 sm:w-16">
                  {m.n}
                </span>
                <div>
                  <h3 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                    {m.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-[1rem] leading-[1.85] text-ink-700 text-pretty">
                    {m.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The day + the course */}
      <Section className="bg-cream-50">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>{t.dayEyebrow}</Eyebrow>
            <h2 className="mt-7 font-display text-[2rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.5rem]">
              {t.dayTitle}
            </h2>
            <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {t.daySymptoms.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[0.9375rem] leading-[1.7] text-ink-700"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>{t.courseEyebrow}</Eyebrow>
            <h2 className="mt-7 font-display text-[2rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.5rem]">
              {t.courseTitle}
            </h2>
            <ol className="mt-9 space-y-6">
              {t.course.map(([label, body]) => (
                <li key={label} className="border-l border-ink-900/12 pl-6">
                  <span className="eyebrow text-navy-600">{label}</span>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                    {body}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-20 flex flex-col items-start gap-5 rounded-2xl border border-ink-900/8 bg-white/70 p-9 sm:flex-row sm:items-center sm:justify-between sm:p-12">
            <p className="max-w-xl font-display text-[1.6rem] leading-snug text-midnight-900 text-balance">
              {t.closing}
            </p>
            <ButtonLink href={localePath(lang, "/test-aypnias")}>
              {t.closingCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
