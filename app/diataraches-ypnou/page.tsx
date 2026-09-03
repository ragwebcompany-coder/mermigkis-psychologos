import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Section } from "@/components/ui";
import { disorders } from "@/lib/content";

export const metadata: Metadata = {
  title: "Διαταραχές ύπνου",
  description:
    "Αϋπνία, παραϋπνίες, εφιάλτες, κιρκάδιες διαταραχές, εξάρτηση από υπνωτικά — τι αντιμετωπίζεται και πότε χρειάζεται εργαστηριακός έλεγχος ύπνου.",
};

const hygiene = [
  "Σταθερή ώρα αφύπνισης, κάθε μέρα — και τα Σαββατοκύριακα.",
  "Υπνοδωμάτιο ήσυχο, σκοτεινό και δροσερό.",
  "Καθόλου έντονη άσκηση, αλκοόλ ή βαρύ φαγητό τις δύο ώρες πριν τον ύπνο.",
  "Καφεΐνη μέχρι νωρίς το απόγευμα και όχι αργότερα.",
  "Οθόνες και μέσα κοινωνικής δικτύωσης εκτός κρεβατιού.",
  "Αν δεν έρχεται ο ύπνος, σηκωθείτε — μην μένετε ξύπνιοι στο κρεβάτι.",
];

export default function DisordersPage() {
  return (
    <>
      <PageHero
        eyebrow="Πεδίο εργασίας"
        title="Διαταραχές ύπνου"
        intro="Ο ύπνος μπορεί να χαλάσει με πολλούς διαφορετικούς τρόπους, και καθένας ζητά διαφορετική παρέμβαση. Το πρώτο βήμα είναι πάντα να ξεχωρίσουμε με τι έχουμε να κάνουμε."
      />

      <Section className="bg-cream-50">
        <ul className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {disorders.map((d, i) => (
            <Reveal as="li" key={d.title} delay={(i % 3) * 80}>
              <div className="border-t border-ink-900/12 pt-7">
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  {d.title}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-cream-100">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Πότε χρειάζεται εργαστήριο</Eyebrow>
            <h2 className="mt-7 font-display text-[2rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.6rem]">
              Όταν η αϋπνία δεν είναι αϋπνία.
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              <p>
                Έντονο ροχαλητό, αναπνευστικές παύσεις που περιγράφει ο
                σύντροφος, πρωινή κεφαλαλγία, έντονη υπνηλία μέσα στην ημέρα,
                ανήσυχα πόδια το βράδυ: αυτά δεν αντιμετωπίζονται με
                ψυχοθεραπεία. Παραπέμπουν σε οργανικές διαταραχές του ύπνου που
                χρειάζονται μελέτη ύπνου.
              </p>
              <p>
                Γι&apos; αυτό η αξιολόγηση γίνεται μέσα σε νοσοκομειακό πλαίσιο
                συνεργασίας με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital
                Center. Όπου προκύπτει υποψία, γίνεται παραπομπή για
                πολυυπνογραφία ή κατ&apos; οίκον καταγραφή πριν ξεκινήσει
                οποιαδήποτε συμπεριφορική παρέμβαση.
              </p>
              <p className="font-display text-[1.3rem] leading-relaxed text-midnight-900">
                Η σωστή θεραπεία στη λάθος διάγνωση δεν είναι θεραπεία.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-900/8 bg-white/70 p-9 sm:p-11">
              <Eyebrow>Υγιεινή ύπνου</Eyebrow>
              <h2 className="mt-6 font-display text-[1.6rem] leading-snug text-midnight-900">
                Τα βασικά — και γιατί δεν αρκούν
              </h2>
              <ul className="mt-7 space-y-3.5">
                {hygiene.map((h) => (
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
                Αυτά είναι απαραίτητα, αλλά από μόνα τους σπάνια λύνουν χρόνια
                αϋπνία. Είναι το υπόβαθρο πάνω στο οποίο δουλεύει η CBT-I — όχι
                υποκατάστατό της.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-16 flex flex-col items-start gap-5 sm:flex-row">
            <ButtonLink href="/aypnia-cbt-i">Η θεραπεία CBT-I</ButtonLink>
            <ButtonLink href="/epikoinonia" variant="primary">
              Κλείστε ραντεβού
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
