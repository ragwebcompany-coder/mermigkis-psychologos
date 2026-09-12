import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site, siteText } from "@/lib/site";
import { isLang, langs, type Lang } from "@/lib/i18n";
import "../globals.css";

const literata = Literata({
  subsets: ["greek", "latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-literata",
  display: "swap",
});

const inter = Inter({
  subsets: ["greek", "latin"],
  variable: "--font-inter",
  display: "swap",
});

export function generateStaticParams() {
  return langs.map((lang) => ({ lang }));
}

const meta = {
  el: {
    title: "Μερμίγκης Μιχαήλ — Ψυχολόγος | Αϋπνία & Διαταραχές Ύπνου",
    template: "%s | Μερμίγκης Μιχαήλ — Ψυχολόγος",
    description:
      "Ψυχολόγος με εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I). Γραφείο στα Μελίσσια, συνεργάτης Εργαστηρίου Ύπνου Ερρίκος Ντυνάν Hospital Center.",
    ogDescription:
      "Θεραπεία της αϋπνίας με CBT-I, την πρώτης γραμμής θεραπεία διεθνώς. Γραφείο στα Μελίσσια.",
    keywords: [
      "αϋπνία",
      "CBT-I",
      "ψυχολόγος ύπνου",
      "διαταραχές ύπνου",
      "γνωσιακή συμπεριφορική θεραπεία αϋπνίας",
      "ψυχολόγος Μελίσσια",
      "Μερμίγκης Μιχαήλ",
    ],
    locale: "el_GR",
    skip: "Μετάβαση στο περιεχόμενο",
    jsonDescription:
      "Ψυχολόγος με εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I).",
    jsonService: "Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I)",
    areaServed: "Αττική",
  },
  en: {
    title: "Michail Mermigkis — Psychologist | Insomnia & Sleep Disorders",
    template: "%s | Michail Mermigkis — Psychologist",
    description:
      "Psychologist specialising in Cognitive Behavioural Therapy for Insomnia (CBT-I). Practice in Melissia, Athens; collaborator of the Sleep Laboratory at Errikos Dynan Hospital Center.",
    ogDescription:
      "Treating insomnia with CBT-I, the first-line treatment worldwide. Practice in Melissia, Athens.",
    keywords: [
      "insomnia",
      "CBT-I",
      "sleep psychologist Athens",
      "sleep disorders",
      "cognitive behavioural therapy for insomnia",
      "English speaking psychologist Athens",
      "Michail Mermigkis",
    ],
    locale: "en_GB",
    skip: "Skip to content",
    jsonDescription:
      "Psychologist specialising in Cognitive Behavioural Therapy for Insomnia (CBT-I).",
    jsonService: "Cognitive Behavioural Therapy for Insomnia (CBT-I)",
    areaServed: "Attica, Greece",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const m = meta[lang];
  const s = siteText[lang];

  return {
    metadataBase: new URL(site.url),
    title: { default: m.title, template: m.template },
    description: m.description,
    keywords: [...m.keywords],
    authors: [{ name: s.name }],
    openGraph: {
      type: "website",
      locale: m.locale,
      siteName: `${s.name} — ${s.role}`,
      title: m.title,
      description: m.ogDescription,
    },
    robots: { index: true, follow: true },
  };
}

function jsonLdFor(lang: Lang) {
  const m = meta[lang];
  const s = siteText[lang];
  return {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: `${s.name} — ${s.role}`,
    description: m.jsonDescription,
    telephone: "+306955433380",
    url: lang === "en" ? `${site.url}/en` : site.url,
    inLanguage: lang,
    areaServed: m.areaServed,
    address: {
      "@type": "PostalAddress",
      streetAddress: s.street,
      addressLocality: siteText.el.area,
      postalCode: site.address.postal,
      addressCountry: "GR",
    },
    medicalSpecialty: "Psychiatric",
    availableService: {
      "@type": "MedicalTherapy",
      name: m.jsonService,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} className={`${literata.variable} ${inter.variable}`}>
      <head>
        <noscript>
          {/* Without JS the scroll-reveal never fires — keep every section visible. */}
          <style>{`.reveal{opacity:1 !important;animation:none !important}`}</style>
        </noscript>
      </head>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-600 focus:px-5 focus:py-3 focus:text-sm focus:text-cream-50"
        >
          {meta[lang].skip}
        </a>
        <Header lang={lang} />
        <main id="main">{children}</main>
        <Footer lang={lang} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFor(lang)) }}
        />
      </body>
    </html>
  );
}
