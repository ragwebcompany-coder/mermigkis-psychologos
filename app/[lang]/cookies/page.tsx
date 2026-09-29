import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, localePath } from "@/lib/i18n";

const copy = {
  el: {
    title: "Πληροφορίες για cookies",
    intro:
      "Ο ιστότοπος χρησιμοποιεί αποθήκευση στη συσκευή σας για να θυμάται την επιλογή σας σχετικά με τα cookies ανάλυσης. Το Google Analytics ενεργοποιείται μόνο αν επιλέξετε «Αποδοχή».",
    choiceTitle: "Η επιλογή σας",
    choice:
      "Η επιλογή αποθηκεύεται τοπικά στο πρόγραμμα περιήγησής σας ως aipnia-analytics-consent. Μπορείτε να την αλλάξετε ανά πάσα στιγμή από τις «Ρυθμίσεις cookies» στο κάτω μέρος κάθε σελίδας.",
    analyticsTitle: "Google Analytics 4",
    analytics:
      "Μετά τη συγκατάθεσή σας, χρησιμοποιούμε το Google Analytics 4 για στατιστικά επισκεψιμότητας, όπως επισκέψεις, σελίδες που προβλήθηκαν και γενικές πληροφορίες για τη συσκευή και την προέλευση της επίσκεψης. Δεν αποστέλλονται οι απαντήσεις σας στο τεστ αϋπνίας.",
    cookies:
      "Η Google αναφέρει ότι τα cookies _ga και _ga_<αναγνωριστικό> χρησιμοποιούνται για τη διάκριση επισκεπτών και τη διατήρηση της κατάστασης συνεδρίας, με προεπιλεγμένη διάρκεια έως δύο έτη. Το πρόγραμμα περιήγησής σας μπορεί να επιβάλλει μικρότερη διάρκεια.",
    provider: "Περισσότερα για τα cookies του Google Analytics",
    contact: "Για ερωτήσεις σχετικά με τον ιστότοπο, επικοινωνήστε με το γραφείο.",
    contactLink: "Επικοινωνία",
  },
  en: {
    title: "Cookie information",
    intro:
      "This site stores your choice about analytics cookies on your device. Google Analytics is enabled only if you select “Accept”.",
    choiceTitle: "Your choice",
    choice:
      "Your choice is stored in your browser as aipnia-analytics-consent. You can change it at any time through “Cookie settings” at the bottom of each page.",
    analyticsTitle: "Google Analytics 4",
    analytics:
      "After you consent, we use Google Analytics 4 for website traffic statistics, such as visits, pages viewed, and general device and traffic-source information. Your answers to the insomnia test are not sent.",
    cookies:
      "Google states that the _ga and _ga_<identifier> cookies distinguish visitors and maintain session state, with a default lifetime of up to two years. Your browser may apply a shorter lifetime.",
    provider: "More about Google Analytics cookies",
    contact: "For questions about this website, please contact the practice.",
    contactLink: "Contact",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return { title: copy[lang].title };
}

export default async function CookiesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = copy[lang];

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
      <h1 className="text-4xl text-midnight-900 sm:text-5xl">{t.title}</h1>
      <p className="mt-8 leading-8 text-ink-700">{t.intro}</p>

      <h2 className="mt-12 text-2xl text-midnight-900">{t.choiceTitle}</h2>
      <p className="mt-4 leading-8 text-ink-700">{t.choice}</p>

      <h2 className="mt-12 text-2xl text-midnight-900">{t.analyticsTitle}</h2>
      <p className="mt-4 leading-8 text-ink-700">{t.analytics}</p>
      <p className="mt-4 leading-8 text-ink-700">{t.cookies}</p>
      <a
        href="https://support.google.com/analytics/answer/11397207"
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-navy-600 underline underline-offset-4"
      >
        {t.provider}
      </a>

      <p className="mt-12 leading-8 text-ink-700">
        {t.contact}{" "}
        <Link
          href={localePath(lang, "/epikoinonia")}
          className="text-navy-600 underline underline-offset-4"
        >
          {t.contactLink}
        </Link>
      </p>
    </article>
  );
}
