import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, PageHero, Section, SectionHead } from "@/components/ui";
import { disorders } from "@/lib/disorders";

export const metadata: Metadata = {
  title: "Διαταραχές ύπνου",
  description:
    "Αϋπνία έλευσης και διατήρησης, χρόνια αϋπνία, παραϋπνίες, εφιάλτες, κιρκάδιες διαταραχές, απεξάρτηση από υπνωτικά — και πότε χρειάζεται εργαστηριακός έλεγχος ύπνου.",
};

const hygiene = [
  "Σταθερή ώρα αφύπνισης κάθε μέρα — και τα Σαββατοκύριακα.",
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
            <Reveal as="li" key={d.slug} delay={(i % 3) * 80}>
              <Link
                href={`/diataraches-ypnou/${d.slug}`}
                className="group block h-full border-t border-ink-900/12 pt-7 transition-colors hover:border-brass-500/60"
              >
                <h2 className="font-display text-[1.5rem] leading-snug text-midnight-900">
                  {d.nav}
                </h2>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                  {d.short}
                </p>
                <span className="eyebrow mt-6 inline-block text-[0.5625rem] text-navy-600 transition-colors group-hover:text-brass-500">
                  Διαβάστε περισσότερα →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow="Πότε χρειάζεται εργαστήριο"
            title={
              <>
                Όταν η αϋπνία <span className="display-italic hl">δεν είναι</span>{" "}
                αϋπνία
              </>
            }
          />
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="space-y-5 text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
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
              <p className="font-display text-[1.35rem] leading-relaxed text-midnight-900">
                Η σωστή θεραπεία στη λάθος διάγνωση δεν είναι θεραπεία.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-ink-900/8 bg-cream-50 p-9 sm:p-11">
              <Eyebrow align="left">Υγιεινή ύπνου</Eyebrow>
              <h3 className="mt-5 font-display text-[1.55rem] leading-snug text-midnight-900">
                Τα βασικά — και γιατί δεν αρκούν
              </h3>
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
                Απαραίτητα, αλλά από μόνα τους σπάνια λύνουν χρόνια αϋπνία. Είναι
                το υπόβαθρο πάνω στο οποίο δουλεύει η CBT-I — όχι υποκατάστατό της.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <div className="mt-16 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/aypnia-cbt-i" variant="primary">
              Η θεραπεία CBT-I
            </ButtonLink>
            <ButtonLink href="/epikoinonia" variant="outline">
              Κλείστε ραντεβού
            </ButtonLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
