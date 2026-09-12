import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { ButtonLink, Eyebrow, Ornament, PageHero, Section, SectionHead } from "@/components/ui";
import { articles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Αρθρογραφία",
  description:
    "Άρθρα του Εργαστηρίου Ύπνου του Ερρίκος Ντυνάν Hospital Center για την αϋπνία, την υπνική άπνοια και τη μελέτη ύπνου.",
};

const featured = articles.filter((a) => a.own);
const rest = articles.filter((a) => !a.own);

function ArrowOut({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
      <path d="M5.5 10.5 10.5 5.5M6.5 5.5h4v4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ArticlesPage() {
  return (
    <>
      <PageHero
        eyebrow="Αρθρογραφία"
        title="Δημοσιεύσεις για τον ύπνο"
        intro="Άρθρα του Εργαστηρίου Ύπνου (ΕΚεΔΥ) του Ερρίκος Ντυνάν Hospital Center. Δημοσιεύονται στο dunant.gr και ανοίγουν εκεί."
      />

      {/* ── Δικές του δημοσιεύσεις ───────────────────────────── */}
      <Section className="bg-cream-50">
        <Reveal>
          <SectionHead
            eyebrow="Με τη δική του υπογραφή"
            title="Άρθρα που συνυπογράφει"
            intro="Δημοσιεύσεις στις οποίες συμμετέχει ως συγγραφέας, με την ιδιότητα του ψυχολόγου του Εργαστηρίου Ύπνου."
          />
        </Reveal>

        <div className="mx-auto mt-14 max-w-3xl space-y-6">
          {featured.map((a, i) => (
            <Reveal key={a.slug} delay={i * 80}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="lift group block overflow-hidden rounded-[24px] border border-brass-500/35 bg-cream-100/50 hover:border-brass-500 hover:bg-cream-50"
              >
                <div className="relative aspect-[16/7] w-full overflow-hidden bg-midnight-900/5">
                  <Image
                    src={`/img/arthra/${a.slug}.jpg`}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/25 to-transparent" />
                </div>
                <div className="px-8 py-9 sm:px-10 sm:py-11">
                <div className="flex items-center justify-between gap-6">
                  <Eyebrow className="text-[0.5625rem]">{a.dateLabel}</Eyebrow>
                  <span className="text-ink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brass-500">
                    <ArrowOut className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[1.6rem] leading-snug text-midnight-900 sm:text-[2rem]">
                  {a.title}
                </h3>
                <p className="mt-4 text-[1rem] leading-[1.85] text-ink-700 text-pretty">
                  {a.summary}
                </p>
                <p className="mt-6 border-t border-ink-900/8 pt-5 text-[0.8125rem] leading-[1.7] text-ink-500">
                  {a.authors.join(" · ")}
                </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Το αρχείο του εργαστηρίου ────────────────────────── */}
      <Section className="bg-cream-100">
        <Reveal>
          <SectionHead
            eyebrow="Από το Εργαστήριο Ύπνου"
            title="Το αρχείο δημοσιεύσεων"
            intro="Άρθρα του Δρ. Χαράλαμπου Μερμίγκη, Διευθυντή του Εργαστηρίου Ύπνου, και των συνεργατών του — χρήσιμο υπόβαθρο για όποιον θέλει να καταλάβει τι εξετάζεται και πώς."
          />
        </Reveal>

        <ul className="mx-auto mt-14 max-w-3xl divide-y divide-ink-900/10 border-t border-ink-900/10">
          {rest.map((a, i) => (
            <Reveal as="li" key={a.slug} delay={Math.min(i, 5) * 60}>
              <a
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-4 py-8 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-midnight-900/5 sm:aspect-[4/3]">
                    <Image
                      src={`/img/arthra/${a.slug}.jpg`}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 160px, 100vw"
                      className="object-cover grayscale-[35%] transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.05] group-hover:grayscale-0"
                    />
                  </div>
                  <time
                    dateTime={a.date}
                    className="eyebrow mt-3 block text-[0.5625rem] text-ink-400 transition-colors duration-300 group-hover:text-brass-500"
                  >
                    {a.dateLabel}
                  </time>
                </div>
                <div className="min-w-0">
                  <h3 className="flex items-start gap-2 font-display text-[1.25rem] leading-snug text-midnight-900 transition-colors duration-300 group-hover:text-navy-600 sm:text-[1.4rem]">
                    <span>{a.title}</span>
                    <ArrowOut className="mt-2 h-3.5 w-3.5 shrink-0 text-ink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-brass-500" />
                  </h3>
                  <p className="mt-3 text-[0.9375rem] leading-[1.8] text-ink-500 text-pretty">
                    {a.summary}
                  </p>
                  <p className="mt-3 text-[0.8125rem] text-ink-400">
                    {a.authors.join(" · ")}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <Ornament />
            <p className="mt-10 text-[0.9375rem] leading-[1.8] text-ink-500 text-pretty">
              Τα άρθρα φιλοξενούνται στον ιστότοπο του Ερρίκος Ντυνάν Hospital
              Center. Δεν υποκαθιστούν την εξατομικευμένη αξιολόγηση: αν κάτι
              από όσα διαβάσετε σας αφορά, το επόμενο βήμα είναι ένα ραντεβού.
            </p>
            <div className="mt-9">
              <ButtonLink href="/epikoinonia" variant="outline">
                Επικοινωνία
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
