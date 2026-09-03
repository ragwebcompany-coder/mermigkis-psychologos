import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Section, Stars } from "@/components/ui";
import { method } from "@/lib/content";

export const metadata: Metadata = {
  title: "Αϋπνία & CBT-I",
  description:
    "Τι είναι η αϋπνία, γιατί γίνεται χρόνια και πώς αντιμετωπίζεται με Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I) — τη θεραπεία πρώτης γραμμής διεθνώς.",
};

const types = [
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
];

const daySymptoms = [
  "Κόπωση που δεν φεύγει με ξεκούραση",
  "Δυσκολία συγκέντρωσης και μνήμης",
  "Ευερεθιστότητα και μεταπτώσεις διάθεσης",
  "Άγχος για την επόμενη νύχτα",
  "Μειωμένη απόδοση στη δουλειά",
  "Ένταση στις σχέσεις",
];

export default function AypniaPage() {
  return (
    <>
      <PageHero
        eyebrow="Η θεραπεία"
        title="Αϋπνία & Γνωσιακή Συμπεριφορική Θεραπεία"
        intro="Η CBT-I είναι η θεραπεία πρώτης γραμμής για τη χρόνια αϋπνία στις διεθνείς κατευθυντήριες οδηγίες — πριν από τη φαρμακευτική αγωγή, με αποτελέσματα που διατηρούνται και μετά το τέλος της."
      />

      {/* Ορισμός */}
      <Section className="bg-cream-50">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Τι είναι</Eyebrow>
            <h2 className="mt-7 font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.9rem]">
              Ένα μυαλό που δεν κατεβάζει ταχύτητα τη στιγμή που πρέπει.
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              <p>
                Αϋπνία δεν είναι απλώς «λίγες ώρες ύπνου». Είναι η επίμονη
                δυσκολία να έρθει ή να διατηρηθεί ο ύπνος, παρότι οι συνθήκες το
                επιτρέπουν, με ξεκάθαρο κόστος την επόμενη ημέρα. Αυτό το
                τελευταίο είναι το κρίσιμο: κάποιος που κοιμάται πέντε ώρες και
                λειτουργεί άριστα δεν έχει αϋπνία.
              </p>
              <p>
                Στην οξεία της μορφή διαρκεί μέρες έως εβδομάδες και συνήθως
                υποχωρεί μόνη της· τη βιώνει το 30–40% του πληθυσμού μέσα σε
                έναν χρόνο. Γίνεται χρόνια όταν εμφανίζεται τουλάχιστον τρεις
                νύχτες την εβδομάδα για πάνω από τρεις μήνες — και αφορά το
                8–10% του πληθυσμού.
              </p>
              <p>
                Είναι συχνότερη στις γυναίκες, ιδιαίτερα μετά την εμμηνόπαυση.
                Και συχνά κρύβει από κάτω μια άλλη διαταραχή: η υπνική άπνοια,
                για παράδειγμα, εκδηλώνεται πολλές φορές ως αϋπνία διατήρησης.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <p className="eyebrow text-ink-400">Οι τρεις μορφές</p>
              {types.map((t) => (
                <div
                  key={t.title}
                  className="rounded-2xl border border-ink-900/8 bg-white/70 p-7"
                >
                  <h3 className="font-display text-[1.3rem] text-midnight-900">
                    {t.title}
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700">
                    {t.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Ο φαύλος κύκλος */}
      <section className="nocturne relative overflow-hidden px-5 py-24 text-cream-50 sm:px-8 sm:py-32">
        <Stars />
        <div className="relative mx-auto max-w-[1240px]">
          <Reveal>
            <Eyebrow tone="light">Ο μηχανισμός</Eyebrow>
            <h2 className="mt-7 max-w-3xl font-display text-[2.15rem] leading-[1.12] text-balance sm:text-[3.05rem]">
              Γιατί η αϋπνία επιμένει αφού η αιτία της έχει περάσει.
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {[
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
            ].map((s, i) => (
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
              Η CBT-I στοχεύει ακριβώς σε αυτούς τους παράγοντες συντήρησης. Δεν
              σας μαθαίνει να κοιμάστε — αφαιρεί ό,τι εμποδίζει τον ύπνο να
              κάνει αυτό που ξέρει.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Τα συστατικά */}
      <Section className="bg-cream-100">
        <Reveal>
          <Eyebrow>Τα συστατικά</Eyebrow>
          <h2 className="mt-7 max-w-3xl font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.9rem]">
            Τι ακριβώς περιλαμβάνει η θεραπεία
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

      {/* Η ημέρα + πορεία */}
      <Section className="bg-cream-50">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <Eyebrow>Το κόστος της ημέρας</Eyebrow>
            <h2 className="mt-7 font-display text-[2rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.5rem]">
              Η αϋπνία δεν τελειώνει το πρωί.
            </h2>
            <ul className="mt-9 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
              {daySymptoms.map((s) => (
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
            <Eyebrow>Η πορεία</Eyebrow>
            <h2 className="mt-7 font-display text-[2rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.5rem]">
              Τι να περιμένετε
            </h2>
            <ol className="mt-9 space-y-6">
              {[
                ["Εβδομάδα 1", "Αναλυτικό ιστορικό ύπνου, ψυχομετρική αξιολόγηση και ημερολόγιο ύπνου. Δεν αλλάζει ακόμη τίποτα — πρώτα μετράμε."],
                ["Εβδομάδες 2–3", "Ξεκινά ο περιορισμός χρόνου στο κρεβάτι και ο έλεγχος ερεθισμάτων. Είναι το πιο απαιτητικό σημείο, και εκεί κρίνεται το αποτέλεσμα."],
                ["Εβδομάδες 4–6", "Ο ύπνος πυκνώνει και επεκτείνεται σταδιακά. Παράλληλα δουλεύουμε τις σκέψεις και την υπερδιέγερση."],
                ["Ολοκλήρωση", "Σταθεροποίηση και πλάνο πρόληψης υποτροπής: τι κάνετε μόνοι σας όταν έρθει μια δύσκολη περίοδος."],
              ].map(([label, body]) => (
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
              Δεν είστε σίγουροι αν αυτό που ζείτε είναι αϋπνία;
            </p>
            <ButtonLink href="/test-aypnias">Κάντε το τεστ</ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
