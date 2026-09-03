import type { Metadata } from "next";
import Accordion from "@/components/Accordion";
import Reveal from "@/components/Reveal";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { faq } from "@/lib/content";

export const metadata: Metadata = {
  title: "Συχνές ερωτήσεις",
  description:
    "Διάρκεια θεραπείας, υπνωτικά χάπια, υγιεινή ύπνου, πρώτη συνεδρία, απόρρητο — απαντήσεις για την CBT-I.",
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="Πριν ξεκινήσουμε"
        title="Συχνές ερωτήσεις"
        intro="Οι ερωτήσεις που ακούγονται σχεδόν σε κάθε πρώτο τηλεφώνημα, απαντημένες χωρίς περιστροφές."
      />

      <Section className="bg-cream-50">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <Accordion items={faq} />
            <div className="mt-14 rounded-2xl bg-midnight-900 p-9 text-cream-50 sm:p-12">
              <h2 className="font-display text-[1.75rem] leading-snug text-balance sm:text-[2.1rem]">
                Δεν βρήκατε αυτό που ψάχνατε;
              </h2>
              <p className="mt-4 max-w-xl text-[1.0625rem] leading-[1.85] text-moon-200/60">
                Ρωτήστε το απευθείας. Η πρώτη τηλεφωνική επικοινωνία δεν
                δεσμεύει σε τίποτα.
              </p>
              <ButtonLink href="/epikoinonia" variant="ghost" className="mt-8">
                Επικοινωνία
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
