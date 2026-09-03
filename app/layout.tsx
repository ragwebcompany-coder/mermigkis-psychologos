import type { Metadata } from "next";
import { Literata, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Μερμίγκης Μιχαήλ — Ψυχολόγος | Αϋπνία & Διαταραχές Ύπνου",
    template: "%s | Μερμίγκης Μιχαήλ — Ψυχολόγος",
  },
  description:
    "Ψυχολόγος με εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I). Γραφείο στον Γέρακα, συνεργάτης Εργαστηρίου Ύπνου Ερρίκος Ντυνάν Hospital Center.",
  keywords: [
    "αϋπνία",
    "CBT-I",
    "ψυχολόγος ύπνου",
    "διαταραχές ύπνου",
    "γνωσιακή συμπεριφορική θεραπεία αϋπνίας",
    "ψυχολόγος Γέρακας",
    "Μερμίγκης Μιχαήλ",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: `${site.name} — Ψυχολόγος`,
    title: "Μερμίγκης Μιχαήλ — Ψυχολόγος | Αϋπνία & Διαταραχές Ύπνου",
    description:
      "Θεραπεία της αϋπνίας με CBT-I, την πρώτης γραμμής θεραπεία διεθνώς. Γραφείο στον Γέρακα.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: `${site.name} — Ψυχολόγος`,
  description:
    "Ψυχολόγος με εξειδίκευση στη Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I).",
  telephone: "+306955433380",
  url: site.url,
  areaServed: "Αττική",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.area,
    postalCode: site.address.postal,
    addressCountry: "GR",
  },
  medicalSpecialty: "Psychiatric",
  availableService: {
    "@type": "MedicalTherapy",
    name: "Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I)",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="el" className={`${literata.variable} ${inter.variable}`}>
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
          Μετάβαση στο περιεχόμενο
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
