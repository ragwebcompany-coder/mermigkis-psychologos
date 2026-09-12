import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InsomniaTest from "@/components/InsomniaTest";
import Reveal from "@/components/Reveal";
import { PageHero, Section } from "@/components/ui";
import { alternates, isLang } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Τεστ αϋπνίας — Athens Insomnia Scale",
    metaDescription:
      "Σταθμισμένο ερωτηματολόγιο ανίχνευσης αϋπνίας 8 ερωτήσεων. Υπολογίζεται στη συσκευή σας, δεν αποθηκεύεται πουθενά.",
    eyebrow: "Athens Insomnia Scale",
    title: "Τεστ αϋπνίας",
    intro:
      "Οκτώ ερωτήσεις για τον ύπνο σας τον τελευταίο μήνα. Απαντήστε έχοντας υπόψη μόνο τις δυσκολίες που εμφανίστηκαν τουλάχιστον τρεις φορές την εβδομάδα.",
    whatTitle: "Τι μετράει η κλίμακα",
    whatBody:
      "Τα πέντε πρώτα ερωτήματα αφορούν τη νύχτα: πόσο αργείτε να κοιμηθείτε, πόσο ξυπνάτε, πόσο νωρίς τελειώνει ο ύπνος, πόσες ώρες και με τι ποιότητα. Τα τρία τελευταία αφορούν την ημέρα — γιατί η αϋπνία δεν ορίζεται μόνο από το τι συμβαίνει στο κρεβάτι, αλλά και από το κόστος της την επόμενη μέρα.",
    howTitle: "Πώς διαβάζεται",
    bands: [
      ["0–3", "χωρίς ένδειξη αϋπνίας"],
      ["4–5", "οριακή βαθμολογία"],
      ["6–11", "πιθανή αϋπνία — χρήζει αξιολόγησης"],
      ["12–24", "έντονη συμπτωματολογία"],
    ],
    noteTitle: "Σημαντική διευκρίνιση",
    noteBody:
      "Το τεστ είναι εργαλείο ανίχνευσης, όχι διάγνωσης. Υψηλή βαθμολογία δεν σημαίνει αυτόματα αϋπνία — μπορεί να οφείλεται σε άλλη διαταραχή ύπνου, όπως η υπνική άπνοια, που απαιτεί εργαστηριακό έλεγχο. Χαμηλή βαθμολογία δεν αποκλείει πρόβλημα. Σε κάθε περίπτωση, την εικόνα την ολοκληρώνει η κλινική αξιολόγηση.",
  },
  en: {
    metaTitle: "Insomnia test — Athens Insomnia Scale",
    metaDescription:
      "A validated 8-item insomnia screening questionnaire. Calculated on your device; nothing is stored anywhere.",
    eyebrow: "Athens Insomnia Scale",
    title: "Insomnia test",
    intro:
      "Eight questions about your sleep over the past month. Answer with only those difficulties in mind that occurred at least three times a week.",
    whatTitle: "What the scale measures",
    whatBody:
      "The first five items concern the night: how long you take to fall asleep, how much you wake, how early sleep ends, how many hours and of what quality. The last three concern the day — because insomnia is defined not only by what happens in bed, but by what it costs you the next day.",
    howTitle: "How to read it",
    bands: [
      ["0–3", "no indication of insomnia"],
      ["4–5", "borderline score"],
      ["6–11", "probable insomnia — warrants assessment"],
      ["12–24", "severe symptoms"],
    ],
    noteTitle: "An important clarification",
    noteBody:
      "This test is a screening tool, not a diagnosis. A high score does not automatically mean insomnia — it may be caused by another sleep disorder, such as sleep apnoea, which requires laboratory testing. A low score does not rule a problem out. In every case, the picture is completed by a clinical assessment.",
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
    alternates: alternates(isLang(lang) ? lang : "el", "/test-aypnias"),
  };
}

export default async function TestPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <Section className="bg-cream-50">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <InsomniaTest lang={lang} />
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-10 lg:pt-4">
              <div>
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  {t.whatTitle}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                  {t.whatBody}
                </p>
              </div>

              <div>
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  {t.howTitle}
                </h2>
                <ul className="mt-5 space-y-3 text-[0.9375rem] leading-[1.7] text-ink-700">
                  {t.bands.map(([range, meaning]) => (
                    <li
                      key={range}
                      className="flex gap-4 border-b border-ink-900/8 pb-3"
                    >
                      <span className="w-16 shrink-0 tabular-nums text-navy-600">
                        {range}
                      </span>
                      <span>{meaning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-brass-500/25 bg-brass-500/[0.06] p-6">
                <h2 className="font-display text-[1.25rem] text-midnight-900">
                  {t.noteTitle}
                </h2>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  {t.noteBody}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
