import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { PhoneIcon } from "@/components/Header";
import { ButtonLink, Eyebrow, Section, Stars } from "@/components/ui";
import { disorders, faq, method } from "@/lib/content";
import { site } from "@/lib/site";

const credentials = [
  "Εκπαίδευση CBT-I — ΕΓΣΣ",
  "Εργαστήριο Ύπνου, Ερρίκος Ντυνάν",
  "Μέλος ΣΕΨ",
  "BSc (Hons) Psychology, Cardiff Met",
];

const facts = [
  {
    figure: "30–40%",
    label: "του πληθυσμού",
    body: "θα βιώσει επεισόδιο οξείας αϋπνίας μέσα σε έναν χρόνο.",
  },
  {
    figure: "8–10%",
    label: "ζει με χρόνια αϋπνία",
    body: "τουλάχιστον τρεις νύχτες την εβδομάδα, για πάνω από τρεις μήνες.",
  },
  {
    figure: "1η",
    label: "γραμμή θεραπείας",
    body: "η CBT-I, πριν από κάθε φαρμακευτική αγωγή, στις διεθνείς κατευθυντήριες οδηγίες.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="nocturne relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-32 text-cream-50 sm:px-8">
        <Stars />
        <div className="pointer-events-none absolute -right-24 -top-24 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(207,224,244,0.10)_0%,transparent_62%)] sm:-right-10 sm:h-[680px] sm:w-[680px]" />

        <div className="relative mx-auto w-full max-w-[1240px]">
          <Reveal>
            <Eyebrow tone="light">Αϋπνία · Διαταραχές ύπνου</Eyebrow>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-8 max-w-[19ch] font-display text-[2.85rem] leading-[1.03] text-balance sm:text-[4.5rem] lg:text-[5.6rem]">
              Ο ύπνος δεν
              <br className="hidden sm:block" /> κερδίζεται με
              <span className="text-brass-400"> προσπάθεια.</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-9 max-w-xl text-[1.0625rem] leading-[1.85] text-moon-200/65 text-pretty sm:text-[1.15rem]">
              Όσο πιο πολύ προσπαθείτε να κοιμηθείτε, τόσο πιο ξύπνιοι γίνεστε.
              Η Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας σπάει ακριβώς αυτόν
              τον κύκλο — δομημένα, σε λίγες εβδομάδες, χωρίς να στηρίζεται στο
              χάπι.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-11 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/test-aypnias" variant="brass">
                Κάντε το τεστ αϋπνίας
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-medium text-cream-50 ring-1 ring-moon-200/25 transition-colors hover:bg-cream-50/10"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-moon-200/10 pt-8">
              {credentials.map((c) => (
                <span
                  key={c}
                  className="text-[0.75rem] tracking-[0.04em] text-moon-200/40"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dawn transition + the problem ────────────────────── */}
      <div className="daybreak h-24 sm:h-32" />

      <Section className="bg-cream-50 pt-4 sm:pt-8">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">
          <Reveal>
            <Eyebrow>Το πρόβλημα</Eyebrow>
            <h2 className="mt-7 font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[3.05rem]">
              Η αϋπνία σπάνια είναι το πρόβλημα με το οποίο ξεκίνησε.
            </h2>
            <div className="mt-8 space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              <p>
                Κάτι την πυροδοτεί — μια πίεση στη δουλειά, μια απώλεια, μια
                περίοδος άγχους. Αυτό περνάει. Η αϋπνία μένει, γιατί στο μεταξύ
                έχει αλλάξει κάτι άλλο: πάτε νωρίτερα για ύπνο για να
                «προλάβετε», μένετε στο κρεβάτι ξύπνιοι ελπίζοντας, κοιμάστε το
                μεσημέρι για να αναπληρώσετε, παρακολουθείτε το ρολόι.
              </p>
              <p>
                Καθεμιά από αυτές τις κινήσεις είναι απολύτως λογική. Και
                καθεμιά τροφοδοτεί το πρόβλημα. Έτσι μια αϋπνία λίγων εβδομάδων
                γίνεται χρόνια — και πλέον αυτοσυντηρείται, ανεξάρτητα από την
                αρχική αιτία.
              </p>
              <p className="font-display text-[1.35rem] leading-relaxed text-midnight-900">
                Η CBT-I δεν κυνηγά την αιτία που πέρασε. Αποδομεί τον μηχανισμό
                που έμεινε.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col justify-center gap-5">
            {facts.map((f, i) => (
              <Reveal key={f.figure} delay={i * 110}>
                <div className="rounded-2xl border border-ink-900/8 bg-white/60 p-7 transition-shadow duration-500 hover:shadow-[0_18px_50px_-28px_rgba(9,20,38,0.35)]">
                  <div className="flex items-baseline gap-3">
                    <span className="font-display text-[2.6rem] leading-none tabular-nums text-navy-600">
                      {f.figure}
                    </span>
                    <span className="text-[0.8125rem] text-ink-500">
                      {f.label}
                    </span>
                  </div>
                  <p className="mt-4 text-[0.9375rem] leading-[1.75] text-ink-700">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Method ───────────────────────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <Eyebrow>Η μέθοδος</Eyebrow>
          <h2 className="mt-7 max-w-3xl font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[3.05rem]">
            Πέντε συστατικά, μία δομημένη πορεία τεσσάρων έως οκτώ εβδομάδων.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {method.map((m, i) => (
            <Reveal key={m.n} delay={i * 80}>
              <div className="border-t border-ink-900/12 pt-7">
                <span className="font-display text-[0.9375rem] tabular-nums tracking-[0.18em] text-brass-500">
                  {m.n}
                </span>
                <h3 className="mt-4 font-display text-[1.5rem] leading-snug text-midnight-900">
                  {m.title}
                </h3>
                <p className="mt-4 text-[0.9375rem] leading-[1.8] text-ink-700 text-pretty">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={400}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-midnight-900 p-8 text-cream-50">
              <p className="font-display text-[1.5rem] leading-snug">
                Θέλετε το πλήρες πλάνο;
              </p>
              <p className="mt-3 text-[0.9375rem] leading-[1.8] text-moon-200/60">
                Πώς δουλεύει η CBT-I βήμα προς βήμα, τι μετράμε και τι να
                περιμένετε.
              </p>
              <ButtonLink
                href="/aypnia-cbt-i"
                variant="ghost"
                className="mt-7 self-start"
              >
                Αϋπνία & CBT-I
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── What is treated ──────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <Eyebrow>Τι αντιμετωπίζεται</Eyebrow>
          <h2 className="mt-7 max-w-3xl font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[3.05rem]">
            Ο ύπνος χαλάει με πολλούς τρόπους. Καθένας θέλει διαφορετική
            παρέμβαση.
          </h2>
        </Reveal>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
          {disorders.map((d, i) => (
            <Reveal as="li" key={d.title} delay={(i % 4) * 70}>
              <div className="h-full bg-cream-50 p-7 transition-colors duration-500 hover:bg-white">
                <h3 className="font-display text-[1.3rem] leading-snug text-midnight-900">
                  {d.title}
                </h3>
                <p className="mt-3.5 text-[0.875rem] leading-[1.8] text-ink-500 text-pretty">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-12">
            <ButtonLink href="/diataraches-ypnou">
              Δείτε αναλυτικά τις διαταραχές ύπνου
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* ── Test band ────────────────────────────────────────── */}
      <section className="nocturne relative overflow-hidden px-5 py-24 text-cream-50 sm:px-8 sm:py-32">
        <Stars />
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Eyebrow tone="light">Athens Insomnia Scale</Eyebrow>
            <h2 className="mt-7 max-w-2xl font-display text-[2.15rem] leading-[1.12] text-balance sm:text-[3.05rem]">
              Οκτώ ερωτήσεις. Δύο λεπτά. Μια πρώτη, καθαρή εικόνα.
            </h2>
            <p className="mt-7 max-w-xl text-[1.0625rem] leading-[1.85] text-moon-200/65 text-pretty">
              Η Athens Insomnia Scale είναι σταθμισμένο εργαλείο ανίχνευσης, με
              ελληνική προέλευση και διεθνή χρήση. Δεν αντικαθιστά τη διάγνωση —
              σας δείχνει όμως αν αυτό που ζείτε ξεπερνά το κλινικό όριο.
            </p>
            <div className="mt-10">
              <ButtonLink href="/test-aypnias" variant="brass">
                Ξεκινήστε το τεστ
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="rounded-[26px] border border-moon-200/12 bg-cream-50/[0.035] p-9 backdrop-blur-sm">
              <p className="eyebrow text-moon-400/70">Το όριο</p>
              <p className="mt-6 font-display text-[4.5rem] leading-none text-brass-400">
                6
              </p>
              <p className="mt-5 text-[0.9375rem] leading-[1.8] text-moon-200/60">
                Βαθμολογία 6 και άνω στα 24 θεωρείται ένδειξη αϋπνίας που χρήζει
                αξιολόγησης. Το αποτέλεσμα υπολογίζεται στη συσκευή σας και δεν
                αποστέλλεται πουθενά.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="relative">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-brass-500/25" />
              <Image
                src="/img/michalis.jpg"
                alt="Ο ψυχολόγος Μιχαήλ Μερμίγκης"
                width={230}
                height={250}
                sizes="(min-width: 1024px) 420px, 80vw"
                className="relative w-full rounded-2xl object-cover grayscale-[15%]"
                priority={false}
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow>Ο ψυχολόγος</Eyebrow>
            <h2 className="mt-7 font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.9rem]">
              Μιχαήλ Μερμίγκης
            </h2>
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
              <p>
                Ψυχολόγος, με εξειδικευμένη εκπαίδευση στη Γνωσιακή
                Συμπεριφορική Θεραπεία της Αϋπνίας και των παραϋπνιών από την
                Εταιρεία Γνωσιακών Συμπεριφοριστικών Σπουδών.
              </p>
              <p>
                Συνεργάτης του Εργαστηρίου Ύπνου του Ερρίκος Ντυνάν Hospital
                Center, με κλινική εμπειρία από το 414 ΣΝΕΝ και το ΝΙΜΤΣ. Η
                πτυχιακή του έρευνα αφορούσε τη συχνότητα και τα χαρακτηριστικά
                της αϋπνίας στον ελληνικό πληθυσμό.
              </p>
              <p>
                Η δουλειά γίνεται με εργαλεία και μετρήσεις — ημερολόγιο ύπνου,
                σταθμισμένες κλίμακες, εβδομαδιαία επαναξιολόγηση — ώστε η
                πρόοδος να είναι ορατή και όχι θέμα εντύπωσης.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/viografiko">Πλήρες βιογραφικό</ButtonLink>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Section className="bg-cream-100">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <Eyebrow>Συχνές ερωτήσεις</Eyebrow>
            <h2 className="mt-7 font-display text-[2.15rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.7rem]">
              Ό,τι ρωτούν συνήθως πριν το πρώτο ραντεβού.
            </h2>
            <Link
              href="/syhnes-erotiseis"
              className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] text-navy-600 transition-colors hover:text-midnight-900"
            >
              Όλες οι ερωτήσεις <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <Accordion items={faq.slice(0, 4)} />
          </Reveal>
        </div>
      </Section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <div className="grid gap-12 overflow-hidden rounded-[28px] border border-ink-900/8 bg-white/70 lg:grid-cols-2 lg:gap-0">
          <Reveal>
            <div className="p-9 sm:p-14">
              <Eyebrow>Ραντεβού</Eyebrow>
              <h2 className="mt-7 font-display text-[2rem] leading-[1.14] text-balance text-midnight-900 sm:text-[2.6rem]">
                Ένα τηλεφώνημα είναι αρκετό για να ξεκινήσει.
              </h2>
              <p className="mt-6 text-[1.0625rem] leading-[1.85] text-ink-700 text-pretty">
                Τα ραντεβού κλείνονται τηλεφωνικά. Στην πρώτη επικοινωνία
                συζητάμε σύντομα τι σας συμβαίνει, ώστε να οριστεί η κατάλληλη
                αρχική αξιολόγηση.
              </p>

              <a
                href={site.phoneHref}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-navy-600 px-7 py-4 text-[0.9375rem] font-medium text-cream-50 transition-colors hover:bg-midnight-800"
              >
                <PhoneIcon className="h-[18px] w-[18px]" />
                <span className="tabular-nums tracking-wide">
                  {site.phoneDisplay}
                </span>
              </a>

              <dl className="mt-12 grid gap-7 border-t border-ink-900/10 pt-9 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow text-ink-400">Γραφείο</dt>
                  <dd className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700">
                    {site.address.street}
                    <br />
                    {site.address.area} {site.address.postal}
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-ink-400">Νοσοκομειακό πλαίσιο</dt>
                  <dd className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-700">
                    Εργαστήριο Ύπνου
                    <br />
                    Ερρίκος Ντυνάν Hospital Center
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <div className="min-h-[340px] lg:min-h-full">
            <iframe
              src={site.mapEmbed}
              title="Χάρτης — Γαργηττού 117, Γέρακας"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[340px] w-full grayscale-[35%]"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
