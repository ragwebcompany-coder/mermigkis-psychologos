import type { Metadata } from "next";
import InsomniaTest from "@/components/InsomniaTest";
import Reveal from "@/components/Reveal";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Τεστ αϋπνίας — Athens Insomnia Scale",
  description:
    "Σταθμισμένο ερωτηματολόγιο ανίχνευσης αϋπνίας 8 ερωτήσεων. Υπολογίζεται στη συσκευή σας, δεν αποθηκεύεται πουθενά.",
};

export default function TestPage() {
  return (
    <>
      <PageHero
        eyebrow="Athens Insomnia Scale"
        title="Τεστ αϋπνίας"
        intro="Οκτώ ερωτήσεις για τον ύπνο σας τον τελευταίο μήνα. Απαντήστε έχοντας υπόψη μόνο τις δυσκολίες που εμφανίστηκαν τουλάχιστον τρεις φορές την εβδομάδα."
      />

      <Section className="bg-cream-50">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <InsomniaTest />
          </Reveal>

          <Reveal delay={140}>
            <div className="space-y-10 lg:pt-4">
              <div>
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  Τι μετράει η κλίμακα
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                  Τα πέντε πρώτα ερωτήματα αφορούν τη νύχτα: πόσο αργείτε να
                  κοιμηθείτε, πόσο ξυπνάτε, πόσο νωρίς τελειώνει ο ύπνος, πόσες
                  ώρες και με τι ποιότητα. Τα τρία τελευταία αφορούν την ημέρα —
                  γιατί η αϋπνία δεν ορίζεται μόνο από το τι συμβαίνει στο
                  κρεβάτι, αλλά και από το κόστος της την επόμενη μέρα.
                </p>
              </div>

              <div>
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  Πώς διαβάζεται
                </h2>
                <ul className="mt-5 space-y-3 text-[0.9375rem] leading-[1.7] text-ink-700">
                  {[
                    ["0–3", "χωρίς ένδειξη αϋπνίας"],
                    ["4–5", "οριακή βαθμολογία"],
                    ["6–11", "πιθανή αϋπνία — χρήζει αξιολόγησης"],
                    ["12–24", "έντονη συμπτωματολογία"],
                  ].map(([range, meaning]) => (
                    <li key={range} className="flex gap-4 border-b border-ink-900/8 pb-3">
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
                  Σημαντική διευκρίνιση
                </h2>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-700">
                  Το τεστ είναι εργαλείο ανίχνευσης, όχι διάγνωσης. Υψηλή
                  βαθμολογία δεν σημαίνει αυτόματα αϋπνία — μπορεί να οφείλεται
                  σε άλλη διαταραχή ύπνου, όπως η υπνική άπνοια, που απαιτεί
                  εργαστηριακό έλεγχο. Χαμηλή βαθμολογία δεν αποκλείει πρόβλημα.
                  Σε κάθε περίπτωση, την εικόνα την ολοκληρώνει η κλινική
                  αξιολόγηση.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
