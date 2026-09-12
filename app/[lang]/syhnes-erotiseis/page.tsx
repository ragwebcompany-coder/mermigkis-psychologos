import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { getFaq } from "@/lib/content";
import { alternates, isLang, localePath } from "@/lib/i18n";

const copy = {
  el: {
    metaTitle: "Συχνές ερωτήσεις",
    metaDescription:
      "Διάρκεια θεραπείας, υπνωτικά χάπια, υγιεινή ύπνου, πρώτη συνεδρία, απόρρητο — απαντήσεις για την CBT-I.",
    eyebrow: "Πριν ξεκινήσουμε",
    title: "Συχνές ερωτήσεις",
    intro:
      "Οι ερωτήσεις που ακούγονται σχεδόν σε κάθε πρώτο τηλεφώνημα, απαντημένες χωρίς περιστροφές.",
    ctaTitle: "Δεν βρήκατε αυτό που ψάχνατε;",
    ctaBody:
      "Ρωτήστε το απευθείας. Η πρώτη τηλεφωνική επικοινωνία δεν δεσμεύει σε τίποτα.",
    cta: "Επικοινωνία",
  },
  en: {
    metaTitle: "Frequently asked questions",
    metaDescription:
      "How long treatment takes, sleeping pills, sleep hygiene, the first session, confidentiality — answers about CBT-I.",
    eyebrow: "Before we begin",
    title: "Frequently asked questions",
    intro:
      "The questions that come up in almost every first phone call, answered without hedging.",
    ctaTitle: "Didn't find what you were looking for?",
    ctaBody:
      "Just ask. A first phone call commits you to nothing.",
    cta: "Contact",
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
    alternates: alternates(isLang(lang) ? lang : "el", "/syhnes-erotiseis"),
  };
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];
  const faq = getFaq(lang);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: lang,
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <PageHero eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

      <Section className="bg-cream-50">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <Accordion items={faq} />
            <div className="mt-14 rounded-2xl bg-midnight-900 p-9 text-cream-50 sm:p-12">
              <h2 className="font-display text-[1.75rem] leading-snug text-balance sm:text-[2.1rem]">
                {t.ctaTitle}
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.85] text-moon-200/60">
                {t.ctaBody}
              </p>
              <ButtonLink
                href={localePath(lang, "/epikoinonia")}
                variant="ghost"
                className="mt-8"
              >
                {t.cta}
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
