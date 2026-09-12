import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import StatsBand from "@/components/Stats";
import MethodStepper from "@/components/MethodStepper";
import MiniTest from "@/components/MiniTest";
import { HeroHalo } from "@/components/HeroAtmosphere";
import HeroVideo from "@/components/HeroVideo";
import Accordion from "@/components/Accordion";
import { Logo } from "@/components/Logo";
import { PhoneIcon } from "@/components/Header";
import {
  ButtonLink,
  Eyebrow,
  Ornament,
  Section,
  SectionHead,
  Stars,
} from "@/components/ui";
import { getFaq } from "@/lib/content";
import { getDisorders } from "@/lib/disorders";
import { site, siteText } from "@/lib/site";
import { alternates, isLang, localePath } from "@/lib/i18n";
import type { Metadata } from "next";

const icons = {
  moon: (
    <path
      d="M20 6a14 14 0 1 0 0 28 18 18 0 0 1 0-28Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  ),
  waves: (
    <>
      <circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M13 22.5c2.6-4.5 5.2-4.5 7 0s4.4 4.5 7 0" stroke="currentColor" strokeWidth="1.2" />
    </>
  ),
  pulse: (
    <path
      d="M7 20h6l3-7 4 14 3-7h10"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinejoin="round"
    />
  ),
};

const copy = {
  el: {
    pillars: [
      { label: "Αϋπνία", body: "Έλευσης, διατήρησης, χρόνια", icon: icons.moon },
      { label: "CBT-I", body: "Θεραπεία πρώτης γραμμής", icon: icons.waves },
      { label: "Εργαστήριο ύπνου", body: "Ερρίκος Ντυνάν", icon: icons.pulse },
    ],
    h1a: "Ο ύπνος δεν κερδίζεται",
    h1b: " με ",
    h1c: "προσπάθεια.",
    heroLead1: "Όσο πιο πολύ προσπαθείτε να κοιμηθείτε, τόσο πιο ξύπνιοι γίνεστε. Η ",
    heroLeadHl: "Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας",
    heroLead2:
      " σπάει ακριβώς αυτόν τον κύκλο — δομημένα, σε λίγες εβδομάδες, χωρίς να στηρίζεται στο χάπι.",
    testCta: "Τεστ αϋπνίας",

    welcomeEyebrow: "Καλωσορίσατε",
    welcome1: "Ασχολούμαι κλινικά με τον ύπνο. Δεν είναι μία από τις υπηρεσίες που προσφέρω — είναι το ",
    welcomeHl: "μοναδικό",
    welcome2: " πεδίο στο οποίο εκπαιδεύτηκα και μέσα στο οποίο δουλεύω καθημερινά.",
    welcomeBody:
      "Ιδιωτικό γραφείο στα Μελίσσια, με εξειδικευμένη εκπαίδευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας από την Εταιρεία Γνωσιακών Συμπεριφοριστικών Σπουδών, και συνεργασία με το Εργαστήριο Ύπνου του Ερρίκος Ντυνάν Hospital Center — ώστε όπου χρειάζεται εργαστηριακός έλεγχος, να γίνεται.",

    disordersEyebrow: "Ενδεικτικά αιτήματα",
    disordersTitle: "Ο ύπνος χαλάει με πολλούς τρόπους",
    disordersIntro:
      "Καθένας ζητά διαφορετική παρέμβαση. Το πρώτο βήμα είναι πάντα να ξεχωρίσουμε με τι έχουμε να κάνουμε.",
    more: "Περισσότερα",

    methodEyebrow: "Η θεραπεία",
    methodTitle1: "Πέντε συστατικά, μία δομημένη πορεία ",
    methodTitleHl: "τεσσάρων έως οκτώ",
    methodTitle2: " εβδομάδων",
    methodCta: "Αναλυτικά για την CBT-I",

    psyEyebrow: "Ο ψυχολόγος",
    psyName: "Μιχαήλ Μερμίγκης",
    psyAlt: "Ο ψυχολόγος Μιχαήλ Μερμίγκης",
    psy1: "Ψυχολόγος με εξειδικευμένη εκπαίδευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας και των παραϋπνιών. Συνεργάτης του Εργαστηρίου Ύπνου του Ερρίκος Ντυνάν Hospital Center, με κλινική εμπειρία από το 414 ΣΝΕΝ και το ΝΙΜΤΣ.",
    psy2a: "Η πτυχιακή του έρευνα αφορούσε τη συχνότητα και τα χαρακτηριστικά της αϋπνίας στον ελληνικό πληθυσμό. Η δουλειά γίνεται με",
    psy2Hl: " εργαλεία και μετρήσεις",
    psy2b: " — ημερολόγιο ύπνου, σταθμισμένες κλίμακες, εβδομαδιαία επαναξιολόγηση — ώστε η πρόοδος να είναι ορατή.",
    psyCta: "Πλήρες βιογραφικό",

    firstEyebrow: "Η πρώτη συνεδρία",
    firstTitle: "Τι γίνεται στο πρώτο ραντεβού",
    firstIntro:
      "Καμία αλλαγή δεν ζητείται από την πρώτη μέρα. Η πρώτη συνεδρία είναι αξιολόγηση.",
    firstSession: [
      { n: "01", t: "Ιστορικό ύπνου", b: "Πότε ξεκίνησε, τι το πυροδότησε, τι έχετε ήδη δοκιμάσει, πώς είναι η ημέρα σας." },
      { n: "02", t: "Ψυχομετρική αξιολόγηση", b: "Σταθμισμένες κλίμακες, ώστε η αφετηρία να είναι μετρημένη και όχι εντύπωση." },
      { n: "03", t: "Ημερολόγιο ύπνου", b: "Μία εβδομάδα καταγραφής. Πρώτα μετράμε, μετά αλλάζουμε." },
      { n: "04", t: "Πλάνο ή παραπομπή", b: "Διαμορφώνεται το θεραπευτικό πλάνο — ή γίνεται παραπομπή για εργαστηριακό έλεγχο, όπου χρειάζεται." },
    ],

    testTitle1: "Οκτώ ερωτήσεις. Δύο λεπτά.",
    testTitle2a: "Μια πρώτη, ",
    testTitleHl: "καθαρή",
    testTitle2b: " εικόνα.",
    testBody:
      "Σταθμισμένο εργαλείο ανίχνευσης με ελληνική προέλευση και διεθνή χρήση. Το αποτέλεσμα υπολογίζεται στη συσκευή σας και δεν αποστέλλεται πουθενά. Δοκιμάστε τις δύο πρώτες ερωτήσεις εδώ.",

    faqEyebrow: "Συχνές ερωτήσεις",
    faqTitle: "Ό,τι ρωτούν συνήθως πριν το πρώτο ραντεβού",
    faqCta: "Όλες οι ερωτήσεις",

    contactEyebrow: "Ραντεβού",
    contactTitle: "Ένα τηλεφώνημα είναι αρκετό για να ξεκινήσει",
    contactIntro:
      "Τα ραντεβού κλείνονται τηλεφωνικά. Στην πρώτη επικοινωνία συζητάμε σύντομα τι σας συμβαίνει, ώστε να οριστεί η κατάλληλη αρχική αξιολόγηση.",
    mapTitle: "Χάρτης — Παναγή Τσαλδάρη 21, Μελίσσια",
    officeCta: "Το γραφείο",
  },

  en: {
    pillars: [
      { label: "Insomnia", body: "Onset, maintenance, chronic", icon: icons.moon },
      { label: "CBT-I", body: "First-line treatment", icon: icons.waves },
      { label: "Sleep laboratory", body: "Errikos Dynan", icon: icons.pulse },
    ],
    h1a: "Sleep is not won",
    h1b: " by ",
    h1c: "trying harder.",
    heroLead1: "The harder you try to sleep, the more awake you become. ",
    heroLeadHl: "Cognitive Behavioural Therapy for Insomnia",
    heroLead2:
      " breaks exactly that cycle — structured, in a few weeks, without relying on a pill.",
    testCta: "Insomnia test",

    welcomeEyebrow: "Welcome",
    welcome1: "Sleep is my clinical field. It is not one of the services I offer — it is the ",
    welcomeHl: "only",
    welcome2: " field I trained in and the one I work in every day.",
    welcomeBody:
      "A private practice in Melissia, Athens, with specialist training in Cognitive Behavioural Therapy for Insomnia from the Hellenic Association for Cognitive Behavioural Studies, and a working relationship with the Sleep Laboratory of Errikos Dynan Hospital Center — so that where laboratory testing is needed, it happens.",

    disordersEyebrow: "What people come with",
    disordersTitle: "Sleep breaks down in many different ways",
    disordersIntro:
      "Each one calls for a different intervention. The first step is always to work out what we are actually dealing with.",
    more: "Read more",

    methodEyebrow: "The treatment",
    methodTitle1: "Five components, one structured course of ",
    methodTitleHl: "four to eight",
    methodTitle2: " weeks",
    methodCta: "More on CBT-I",

    psyEyebrow: "The psychologist",
    psyName: "Michail Mermigkis",
    psyAlt: "Michail Mermigkis, psychologist",
    psy1: "A psychologist with specialist training in Cognitive Behavioural Therapy for Insomnia and the parasomnias. Collaborator of the Sleep Laboratory at Errikos Dynan Hospital Center, with clinical experience at the 414 Military Hospital and NIMTS.",
    psy2a: "His undergraduate research examined the prevalence and characteristics of insomnia in the Greek population. The work is done with",
    psy2Hl: " instruments and measurements",
    psy2b: " — a sleep diary, validated scales, weekly reassessment — so that progress is visible.",
    psyCta: "Full CV",

    firstEyebrow: "The first session",
    firstTitle: "What happens at the first appointment",
    firstIntro:
      "Nothing is asked of you on day one. The first session is an assessment.",
    firstSession: [
      { n: "01", t: "Sleep history", b: "When it started, what triggered it, what you have already tried, what your day looks like." },
      { n: "02", t: "Psychometric assessment", b: "Validated scales, so the starting point is measured rather than an impression." },
      { n: "03", t: "Sleep diary", b: "One week of recording. First we measure, then we change." },
      { n: "04", t: "Plan or referral", b: "The treatment plan is drawn up — or a referral is made for laboratory testing, where that is needed." },
    ],

    testTitle1: "Eight questions. Two minutes.",
    testTitle2a: "A first, ",
    testTitleHl: "clear",
    testTitle2b: " picture.",
    testBody:
      "A validated screening instrument of Greek origin, used internationally. Your result is calculated on your device and is not sent anywhere. Try the first two questions here.",

    faqEyebrow: "Frequently asked",
    faqTitle: "What people usually ask before the first appointment",
    faqCta: "All the questions",

    contactEyebrow: "Appointments",
    contactTitle: "One phone call is enough to get started",
    contactIntro:
      "Appointments are arranged by phone. On the first call we talk briefly about what is going on, so that the right initial assessment can be set up.",
    mapTitle: "Map — 21 Panagi Tsaldari St., Melissia",
    officeCta: "The practice",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return { alternates: alternates(isLang(lang) ? lang : "el", "/") };
}

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  const t = copy[lang];
  const s = siteText[lang];
  const faq = getFaq(lang);
  const disorders = getDisorders(lang);
  const p = (href: string) => localePath(lang, href);

  return (
    <>
      <ScrollProgress />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="nocturne relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-32 text-center text-cream-50 sm:px-8">
        <HeroVideo />
        <HeroHalo />

        <div className="relative mx-auto w-full max-w-3xl">
          <Reveal>
            <Logo
              lang={lang}
              tone="light"
              size="lg"
              className="justify-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.03]"
            />
          </Reveal>

          <Reveal delay={110}>
            <h1 className="mt-10 font-display text-[2.35rem] leading-[1.06] text-balance sm:text-[3.5rem]">
              {t.h1a}
              <br className="hidden sm:block" />
              {t.h1b}
              <span className="display-italic hl-light">{t.h1c}</span>
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <p className="mx-auto mt-8 max-w-xl text-[1.0625rem] leading-[1.9] text-moon-200/65 text-pretty">
              {t.heroLead1}
              <span className="hl-light">{t.heroLeadHl}</span>
              {t.heroLead2}
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-11 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={p("/test-aypnias")} variant="brass" className="sheen">
                {t.testCta}
              </ButtonLink>
              <a
                href={site.phoneHref}
                className="eyebrow group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-[0.625rem] text-cream-50 ring-1 ring-moon-200/30 transition-all duration-300 hover:bg-cream-50/10 hover:ring-brass-400/60"
              >
                <PhoneIcon className="h-[13px] w-[13px]" />
                {site.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <p className="mt-9 flex items-center justify-center gap-2 text-[0.75rem] text-moon-200/40">
              <PinIcon className="h-3.5 w-3.5" />
              {s.street}, {s.area}
            </p>
          </Reveal>

          <Reveal delay={410}>
            <div className="mt-16 grid divide-y divide-moon-200/10 border-t border-moon-200/10 pt-2 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:pt-0">
              {t.pillars.map((pillar) => (
                <div
                  key={pillar.label}
                  className="group px-4 py-7 transition-colors duration-500 hover:bg-cream-50/[0.03] sm:py-9"
                >
                  <svg
                    viewBox="0 0 40 40"
                    className="mx-auto h-8 w-8 text-moon-300/55 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-brass-400"
                    fill="none"
                  >
                    {pillar.icon}
                  </svg>
                  <p className="eyebrow mt-5 text-[0.625rem] text-moon-200/70 transition-colors duration-500 group-hover:text-cream-50">
                    {pillar.label}
                  </p>
                  <p className="mt-2 text-[0.75rem] text-moon-200/35">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Welcome ──────────────────────────────────────────── */}
      <div className="daybreak h-48 sm:h-64" />

      <Section className="bg-cream-50 pt-4 sm:pt-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>{t.welcomeEyebrow}</Eyebrow>
            <p className="mt-8 font-display text-[1.65rem] leading-[1.55] text-balance text-midnight-900 sm:text-[2.15rem]">
              {t.welcome1}
              <span className="display-italic hl">{t.welcomeHl}</span>
              {t.welcome2}
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              {t.welcomeBody}
            </p>
            <Ornament className="mt-12" />
          </div>
        </Reveal>
      </Section>

      {/* ── Numbers ──────────────────────────────────────────── */}
      <section className="nocturne relative overflow-hidden px-5 py-20 text-cream-50 sm:px-8 sm:py-24">
        <Stars />
        <div className="relative">
          <StatsBand lang={lang} />
        </div>
      </section>

      {/* ── Disorders ────────────────────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow={t.disordersEyebrow}
            title={t.disordersTitle}
            intro={t.disordersIntro}
          />
        </Reveal>

        <ul className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {disorders.map((d, i) => (
            <Reveal as="li" key={d.slug} delay={(i % 4) * 70}>
              <Link
                href={p(`/diataraches-ypnou/${d.slug}`)}
                className="group lift grow-rule block rounded-b-[18px] border-t border-ink-900/12 px-1 pb-6 pt-6 hover:bg-cream-50"
              >
                <span className="eyebrow block text-[0.5625rem] text-ink-400 transition-colors duration-500 group-hover:text-brass-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-[1.3rem] leading-snug text-midnight-900">
                  {d.nav}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-[1.8] text-ink-500 text-pretty">
                  {d.short}
                </p>
                <span className="eyebrow mt-5 inline-flex items-center gap-2 text-[0.5625rem] text-navy-600 transition-colors duration-300 group-hover:text-brass-500">
                  {t.more}
                  <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ── The method ───────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead
            eyebrow={t.methodEyebrow}
            title={
              <>
                {t.methodTitle1}
                <span className="display-italic hl">{t.methodTitleHl}</span>
                {t.methodTitle2}
              </>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-16">
            <MethodStepper lang={lang} />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <ButtonLink href={p("/aypnia-cbt-i")} variant="outline">
              {t.methodCta}
            </ButtonLink>
          </div>
        </Reveal>
      </Section>

      {/* ── The psychologist ─────────────────────────────────── */}
      <section className="nocturne relative overflow-hidden px-5 py-28 text-cream-50 sm:px-8 sm:py-40">
        <Stars />
        <div className="relative mx-auto grid max-w-[1100px] items-center gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <Reveal>
            <div className="group relative mx-auto max-w-[300px]">
              <div className="absolute -inset-3 rounded-full border border-brass-400/25 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-inset-5 group-hover:border-brass-400/50" />
              <div className="absolute -inset-8 rounded-full border border-moon-200/10 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100" />
              <div className="relative overflow-hidden rounded-full">
                <Image
                  src="/img/michalis.jpg"
                  alt={t.psyAlt}
                  width={800}
                  height={800}
                  sizes="(min-width: 1024px) 300px, 70vw"
                  className="aspect-square w-full object-cover grayscale-[25%] transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:grayscale-0"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Eyebrow tone="light" align="left">
              {t.psyEyebrow}
            </Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.14] text-balance sm:text-[2.8rem]">
              {t.psyName}
            </h2>
            <div className="mt-7 space-y-5 text-[1.0625rem] leading-[1.9] text-moon-200/65 text-pretty">
              <p>{t.psy1}</p>
              <p>
                {t.psy2a}
                <span className="hl-light">{t.psy2Hl}</span>
                {t.psy2b}
              </p>
            </div>
            <div className="mt-10">
              <ButtonLink href={p("/viografiko")} variant="ghost">
                {t.psyCta}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── First session ────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead
            eyebrow={t.firstEyebrow}
            title={t.firstTitle}
            intro={t.firstIntro}
          />
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.firstSession.map((step, i) => (
            <Reveal key={step.n} delay={i * 80}>
              <div className="lift group h-full rounded-[22px] border border-ink-900/8 bg-cream-100/60 px-7 py-9 text-center hover:border-brass-500/40 hover:bg-cream-50">
                <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-brass-500/35 font-display text-[0.9rem] tabular-nums text-brass-500 transition-colors duration-500 group-hover:border-brass-500 group-hover:bg-brass-500 group-hover:text-cream-50">
                  {step.n}
                </span>
                <h3 className="mt-5 font-display text-[1.3rem] leading-snug text-midnight-900">
                  {step.t}
                </h3>
                <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-500 text-pretty">
                  {step.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Test ─────────────────────────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Athens Insomnia Scale</Eyebrow>
            <h2 className="mt-6 font-display text-[2.1rem] leading-[1.16] text-balance text-midnight-900 sm:text-[2.85rem]">
              {t.testTitle1}
              <br />
              {t.testTitle2a}
              <span className="display-italic hl">{t.testTitleHl}</span>
              {t.testTitle2b}
            </h2>
            <p className="mt-6 text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              {t.testBody}
            </p>
            <Ornament className="mt-10" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14">
            <MiniTest lang={lang} />
          </div>
        </Reveal>
      </Section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead eyebrow={t.faqEyebrow} title={t.faqTitle} />
        </Reveal>
        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-3xl">
            <Accordion items={faq.slice(0, 4)} />
            <div className="mt-12 text-center">
              <ButtonLink href={p("/syhnes-erotiseis")} variant="outline">
                {t.faqCta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Contact ──────────────────────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow={t.contactEyebrow}
            title={t.contactTitle}
            intro={t.contactIntro}
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-14 max-w-4xl text-center">
            <a
              href={site.phoneHref}
              className="group inline-flex items-center gap-4 font-display text-[2.2rem] leading-none tabular-nums text-midnight-900 transition-colors duration-300 hover:text-navy-600 sm:text-[2.8rem]"
            >
              <PhoneIcon className="h-7 w-7 text-brass-500 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
              {site.phoneDisplay}
            </a>

            <div className="mt-14 overflow-hidden rounded-[26px] border border-ink-900/8">
              <iframe
                src={site.mapEmbed}
                title={t.mapTitle}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[400px] w-full grayscale-[35%] transition-all duration-700 hover:grayscale-0"
              />
            </div>

            <p className="mt-8 text-[0.9375rem] leading-[1.8] text-ink-500">
              {s.street}, {s.area} {site.address.postal}
            </p>
            <div className="mt-8">
              <ButtonLink href={p("/to-grafeio")} variant="outline">
                {t.officeCta}
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
