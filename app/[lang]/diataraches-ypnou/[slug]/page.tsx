import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PhoneIcon } from "@/components/Header";
import { ButtonLink, Eyebrow, Ornament, PageHero, Section } from "@/components/ui";
import { disorderBySlug, disorderSlugs, getDisorders } from "@/lib/disorders";
import { site } from "@/lib/site";
import { alternates, isLang, langs, localePath } from "@/lib/i18n";

const copy = {
  el: {
    eyebrow: "Διαταραχές ύπνου",
    what: "Τι είναι",
    signs: "Πώς εκδηλώνεται",
    treatment: "Πώς αντιμετωπίζεται",
    caution: "Προσοχή",
    closing: "Ας δούμε αν αυτό είναι που σας συμβαίνει.",
    testCta: "Τεστ αϋπνίας",
    alsoSee: "Δείτε επίσης",
    more: "Περισσότερα →",
  },
  en: {
    eyebrow: "Sleep disorders",
    what: "What it is",
    signs: "How it shows up",
    treatment: "How it is treated",
    caution: "Important",
    closing: "Let's find out whether this is what is happening to you.",
    testCta: "Insomnia test",
    alsoSee: "See also",
    more: "Read more →",
  },
} as const;

export function generateStaticParams() {
  return langs.flatMap((lang) => disorderSlugs.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const d = disorderBySlug(isLang(lang) ? lang : "el", slug);
  if (!d) return {};
  return {
    title: d.title,
    description: d.short,
    alternates: alternates(isLang(lang) ? lang : "el", `/diataraches-ypnou/${slug}`),
  };
}

export default async function DisorderPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];
  const d = disorderBySlug(lang, slug);
  if (!d) notFound();

  const others = getDisorders(lang)
    .filter((x) => x.slug !== d.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={d.title} intro={d.lede} />

      <Section className="bg-cream-50">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Eyebrow align="left">{t.what}</Eyebrow>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.9] text-ink-700 text-pretty">
              {d.what.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-16 rounded-2xl border border-ink-900/8 bg-cream-100 p-9 sm:p-11">
              <Eyebrow align="left">{t.signs}</Eyebrow>
              <ul className="mt-6 space-y-3.5">
                {d.signs.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3.5 text-[0.9375rem] leading-[1.75] text-ink-700"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-16">
              <Eyebrow align="left">{t.treatment}</Eyebrow>
              <ol className="mt-7 divide-y divide-ink-900/10">
                {d.treatment.map((step, i) => (
                  <li key={step.slice(0, 40)} className="grid gap-4 py-6 sm:grid-cols-[auto_1fr] sm:gap-10">
                    <span className="font-display text-[1.1rem] tabular-nums text-brass-500 sm:w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[1rem] leading-[1.85] text-ink-700 text-pretty">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {d.caution && (
            <Reveal delay={180}>
              <div className="mt-14 rounded-2xl border border-brass-500/30 bg-brass-500/[0.07] p-8">
                <Eyebrow align="left">{t.caution}</Eyebrow>
                <p className="mt-4 text-[0.9375rem] leading-[1.85] text-ink-700 text-pretty">
                  {d.caution}
                </p>
              </div>
            </Reveal>
          )}

          <Reveal delay={220}>
            <Ornament className="mt-20" />
            <div className="mt-12 text-center">
              <p className="font-display text-[1.65rem] leading-snug text-balance text-midnight-900">
                {t.closing}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={site.phoneHref}
                  className="eyebrow inline-flex items-center gap-2.5 rounded-full bg-navy-600 px-8 py-4 text-[0.625rem] text-cream-50 transition-colors hover:bg-midnight-800"
                >
                  <PhoneIcon className="h-[13px] w-[13px]" />
                  {site.phoneDisplay}
                </a>
                <ButtonLink href={localePath(lang, "/test-aypnias")} variant="outline">
                  {t.testCta}
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-cream-100 py-20 sm:py-24">
        <p className="eyebrow text-center text-ink-400">{t.alsoSee}</p>
        <ul className="mx-auto mt-10 grid max-w-4xl gap-x-12 gap-y-8 sm:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={localePath(lang, `/diataraches-ypnou/${o.slug}`)}
                className="group block border-t border-ink-900/12 pt-5 transition-colors hover:border-brass-500/60"
              >
                <h3 className="font-display text-[1.15rem] leading-snug text-midnight-900">
                  {o.nav}
                </h3>
                <span className="eyebrow mt-3 inline-block text-[0.5625rem] text-navy-600 transition-colors group-hover:text-brass-500">
                  {t.more}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
