import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Accordion from "@/components/Accordion";
import { Seal } from "@/components/Logo";
import { PhoneIcon } from "@/components/Header";
import {
  ButtonLink,
  Eyebrow,
  Ornament,
  Section,
  SectionHead,
  Stars,
} from "@/components/ui";
import { faq, method } from "@/lib/content";
import { disorders } from "@/lib/disorders";
import { site } from "@/lib/site";

const pillars = [
  {
    label: "Αϋπνία",
    body: "Έλευσης, διατήρησης, χρόνια",
    icon: (
      <path
        d="M20 6a14 14 0 1 0 0 28 18 18 0 0 1 0-28Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    ),
  },
  {
    label: "CBT-I",
    body: "Θεραπεία πρώτης γραμμής",
    icon: (
      <>
        <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.2" />
        <path d="M13 22.5c2.6-4.5 5.2-4.5 7 0s4.4 4.5 7 0" stroke="currentColor" strokeWidth="1.2" />
      </>
    ),
  },
  {
    label: "Εργαστήριο ύπνου",
    body: "Ερρίκος Ντυνάν",
    icon: (
      <>
        <path d="M7 20h6l3-7 4 14 3-7h10" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </>
    ),
  },
];

const firstSession = [
  {
    n: "01",
    t: "Ιστορικό ύπνου",
    b: "Πότε ξεκίνησε, τι το πυροδότησε, τι έχετε ήδη δοκιμάσει, πώς είναι η ημέρα σας.",
  },
  {
    n: "02",
    t: "Ψυχομετρική αξιολόγηση",
    b: "Σταθμισμένες κλίμακες, ώστε η αφετηρία να είναι μετρημένη και όχι εντύπωση.",
  },
  {
    n: "03",
    t: "Ημερολόγιο ύπνου",
    b: "Μία εβδομάδα καταγραφής. Πρώτα μετράμε, μετά αλλάζουμε.",
  },
  {
    n: "04",
    t: "Πλάνο ή παραπομπή",
    b: "Διαμορφώνεται το θεραπευτικό πλάνο — ή γίνεται παραπομπή για εργαστηριακό έλεγχο, όπου χρειάζεται.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="nocturne relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-32 text-center text-cream-50 sm:px-8">
        <Stars />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(circle,rgba(207,224,244,0.09)_0%,transparent_62%)]" />

        <div className="relative mx-auto w-full max-w-3xl">
          <Reveal>
            <Seal id="hero-seal" className="mx-auto h-32 w-32 sm:h-40 sm:w-40" />
          </Reveal>

          <Reveal delay={110}>
            <h1 className="mt-10 font-display text-[2.35rem] leading-[1.06] text-balance sm:text-[3.5rem]">
              Ο ύπνος δεν κερδίζεται
              <br className="hidden sm:block" /> με{" "}
              <span className="display-italic hl-light">προσπάθεια.</span>
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-[1.9] text-moon-200/65 text-pretty">
              Όσο πιο πολύ προσπαθείτε να κοιμηθείτε, τόσο πιο ξύπνιοι γίνεστε.
              Η <span className="hl-light">Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας</span>{" "}
              σπάει ακριβώς αυτόν τον κύκλο — δομημένα, σε λίγες εβδομάδες, χωρίς
              να στηρίζεται στο χάπι.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/test-aypnias" variant="brass">
                Τεστ αϋπνίας
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="eyebrow inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[0.625rem] text-cream-50 ring-1 ring-moon-200/30 transition-colors hover:bg-cream-50/10"
              >
                <PhoneIcon className="h-[13px] w-[13px]" />
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-9 flex items-center justify-center gap-2 text-[0.75rem] text-moon-200/40">
              <PinIcon className="h-3.5 w-3.5" />
              {site.address.street}, {site.address.area}
            </p>
          </Reveal>

          <Reveal delay={410}>
            <div className="mt-16 grid divide-y divide-moon-200/10 border-t border-moon-200/10 pt-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:pt-0">
              {pillars.map((p) => (
                <div key={p.label} className="px-4 py-7 sm:py-9">
                  <svg
                    viewBox="0 0 40 40"
                    className="mx-auto h-8 w-8 text-moon-300/55"
                    fill="none"
                  >
                    {p.icon}
                  </svg>
                  <p className="eyebrow mt-5 text-[0.625rem] text-moon-200/70">
                    {p.label}
                  </p>
                  <p className="mt-2 text-[0.75rem] text-moon-200/35">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Καλωσόρισμα ──────────────────────────────────────── */}
      <div className="daybreak h-48 sm:h-64" />

      <Section className="bg-cream-50 pt-4 sm:pt-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Καλωσορίσατε</Eyebrow>
            <p className="mt-8 font-display text-[1.65rem] leading-[1.55] text-balance text-midnight-900 sm:text-[2.15rem]">
              Ασχολούμαι κλινικά με τον ύπνο. Δεν είναι μία από τις υπηρεσίες που
              προσφέρω — είναι το <span className="display-italic hl">μοναδικό</span>{" "}
              πεδίο στο οποίο εκπαιδεύτηκα και μέσα στο οποίο δουλεύω καθημερινά.
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              Ιδιωτικό γραφείο στον Γέρακα, με εξειδικευμένη εκπαίδευση στη
              Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας από την Εταιρεία
              Γνωσιακών Συμπεριφοριστικών Σπουδών, και συνεργασία με το
              Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center — ώστε όπου
              χρειάζεται εργαστηριακός έλεγχος, να γίνεται.
            </p>
            <Ornament className="mt-12" />
          </div>
        </Reveal>
      </Section>

      {/* ── Ενδεικτικά αιτήματα ──────────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow="Ενδεικτικά αιτήματα"
            title="Ο ύπνος χαλάει με πολλούς τρόπους"
            intro="Καθένας ζητά διαφορετική παρέμβαση. Το πρώτο βήμα είναι πάντα να ξεχωρίσουμε με τι έχουμε να κάνουμε."
          />
        </Reveal>

        <ul className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {disorders.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={(i % 4) * 70}>
              <Link
                href={`/diataraches-ypnou/${d.slug}`}
                className="group block border-t border-ink-900/12 pt-6 transition-colors hover:border-brass-500/60"
              >
                <h3 className="font-display text-[1.3rem] leading-snug text-midnight-900">
                  {d.nav}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-500 text-pretty">
                  {d.short}
                </p>
                <span className="eyebrow mt-5 inline-block text-[0.5625rem] text-navy-600 transition-colors group-hover:text-brass-500">
                  Περισσότερα →
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── Η μέθοδος ────────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead
            eyebrow="Η θεραπεία"
            title={
              <>
                Πέντε συστατικά, μία δομημένη πορεία{" "}
                <span className="display-italic hl">τεσσάρων έως οκτώ</span>{" "}
                εβδομάδων
              </>
            }
          />
        </Reveal>

        <div className="mx-auto mt-16 max-w-4xl divide-y divide-ink-900/10">
          {method.map((m, i) => (
            <Reveal key={m.n} delay={i * 70}>
              <div className="grid gap-4 py-9 sm:grid-cols-[auto_1fr] sm:gap-12">
                <span className="font-display text-[1.4rem] tabular-nums text-brass-500 sm:w-12">
                  {m.n}
                </span>
                <div>
                  <h3 className="font-display text-[1.45rem] leading-snug text-midnight-900">
                    {m.title}
                  </h3>
                  <p className="mt-3.5 text-[1rem] leading-[1.85] text-ink-700 text-pretty">
                    {m.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <ButtonLink href="/aypnia-cbt-i" variant="outline">
              Αναλυτικά για την CBT-I
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* ── Ο ψυχολόγος ──────────────────────────────────────── */}
      <section className="nocturne relative overflow-hidden px-5 py-28 text-cream-50 sm:px-8 sm:py-40">
        <Stars />
        <div className="relative mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <div className="relative mx-auto max-w-[300px]">
              <div className="absolute -inset-3 rounded-full border border-brass-400/25" />
              <Image
                src="/img/michalis.jpg"
                alt="Ο ψυχολόγος Μιχαήλ Μερμίγκης"
                width={230}
                height={250}
                sizes="(min-width: 1024px) 300px, 70vw"
                className="relative aspect-square w-full rounded-full object-cover grayscale-[25%]"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="light" align="left">
              Ο ψυχολόγος
            </Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.14] text-balance sm:text-[2.8rem]">
              Μιχαήλ Μερμίγκης
            </h2>
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.9] text-moon-200/65 text-pretty">
              <p>
                Ψυχολόγος με εξειδικευμένη εκπαίδευση στη Γνωσιακή Συμπεριφορική
                Θεραπεία της Αϋπνίας και των παραϋπνιών. Συνεργάτης του
                Εργαστηρίου Ύπνου του Ερρίκος Ντυνάν Hospital Center, με κλινική
                εμπειρία από το 414 ΣΝΕΝ και το ΝΙΜΤΣ.
              </p>
              <p>
                Η πτυχιακή του έρευνα αφορούσε τη συχνότητα και τα χαρακτηριστικά
                της αϋπνίας στον ελληνικό πληθυσμό. Η δουλειά γίνεται με
                <span className="hl-light"> εργαλεία και μετρήσεις</span> —
                ημερολόγιο ύπνου, σταθμισμένες κλίμακες, εβδομαδιαία
                επαναξιολόγηση — ώστε η πρόοδος να είναι ορατή.
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href="/viografiko" variant="ghost">
                Πλήρες βιογραφικό
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Η πρώτη συνεδρία ─────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead
            eyebrow="Η πρώτη συνεδρία"
            title="Τι γίνεται στο πρώτο ραντεβού"
            intro="Καμία αλλαγή δεν ζητείται από την πρώτη μέρα. Η πρώτη συνεδρία είναι αξιολόγηση."
          />
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {firstSession.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="text-center">
                <span className="eyebrow text-brass-500">{s.n}</span>
                <h3 className="mt-4 font-display text-[1.3rem] leading-snug text-midnight-900">
                  {s.t}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-500 text-pretty">
                  {s.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Τεστ ─────────────────────────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Athens Insomnia Scale</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.16] text-balance text-midnight-900 sm:text-[2.85rem]">
              Οκτώ ερωτήσεις. Δύο λεπτά.
              <br />
              Μια πρώτη, <span className="display-italic hl">καθαρή</span> εικόνα.
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              Σταθμισμένο εργαλείο ανίχνευσης με ελληνική προέλευση και διεθνή
              χρήση. Βαθμολογία 6 και άνω στα 24 θεωρείται ένδειξη αϋπνίας που
              χρήζει αξιολόγησης. Το αποτέλεσμα υπολογίζεται στη συσκευή σας και
              δεν αποστέλλεται πουθενά.
            </p>
            <div className="mt-10">
              <ButtonLink href="/test-aypnias" variant="primary">
                Ξεκινήστε το τεστ
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead
            eyebrow="Συχνές ερωτήσεις"
            title="Ό,τι ρωτούν συνήθως πριν το πρώτο ραντεβού"
          />
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={faq.slice(0, 4)} />
            <div className="mt-12 text-center">
              <ButtonLink href="/syhnes-erotiseis" variant="outline">
                Όλες οι ερωτήσεις
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Το γραφείο / Επικοινωνία ─────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow="Ραντεβού"
            title="Ένα τηλεφώνημα είναι αρκετό για να ξεκινήσει"
            intro="Τα ραντεβού κλείνονται τηλεφωνικά. Στην πρώτη επικοινωνία συζητάμε σύντομα τι σας συμβαίνει, ώστε να οριστεί η κατάλληλη αρχική αξιολόγηση."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-4 font-display text-[2.2rem] leading-none tabular-nums text-midnight-900 transition-colors hover:text-navy-600 sm:text-[2.8rem]"
            >
              <PhoneIcon className="h-7 w-7 text-brass-500" />
              {site.phoneDisplay}
            </a>

            <div className="mt-14 overflow-hidden rounded-[26px] border border-ink-900/8">
              <iframe
                src={site.mapEmbed}
                title="Χάρτης — Γαργηττού 117, Γέρακας"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[400px] w-full grayscale-[35%]"
              />
            </div>

            <p className="mt-8 text-[0.9375rem] leading-[1.8] text-ink-500">
              {site.address.street}, {site.address.area} {site.address.postal}
            </p>
            <div className="mt-8">
              <ButtonLink href="/to-grafeio" variant="outline">
                Το γραφείο
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

function PinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
