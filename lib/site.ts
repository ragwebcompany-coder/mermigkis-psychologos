/**
 * Η διεύθυνση του σάιτ. Τροφοδοτεί sitemap, canonical, hreflang και OG tags.
 * Όταν μπει το κανονικό domain, αρκεί να οριστεί το NEXT_PUBLIC_SITE_URL στο
 * Vercel (Production + Preview) — δεν χρειάζεται αλλαγή στον κώδικα.
 */
const url = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://mermigkis-psychologos.vercel.app"
).replace(/\/+$/, "");

export const site = {
  name: "Μερμίγκης Μιχαήλ",
  role: "Ψυχολόγος",
  tagline: "Αϋπνία & Διαταραχές Ύπνου",
  url,
  phoneDisplay: "6955 433 380",
  phoneHref: "tel:+306955433380",
  address: {
    street: "Παναγή Τσαλδάρη 21",
    area: "Μελίσσια",
    postal: "151 27",
    region: "Αττική",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=%CE%A0%CE%B1%CE%BD%CE%B1%CE%B3%CE%AE+%CE%A4%CF%83%CE%B1%CE%BB%CE%B4%CE%AC%CF%81%CE%B7+21%2C+%CE%9C%CE%B5%CE%BB%CE%AF%CF%83%CF%83%CE%B9%CE%B1",
  mapEmbed:
    "https://www.google.com/maps?q=%CE%A0%CE%B1%CE%BD%CE%B1%CE%B3%CE%AE%20%CE%A4%CF%83%CE%B1%CE%BB%CE%B4%CE%AC%CF%81%CE%B7%2021%2C%20%CE%9C%CE%B5%CE%BB%CE%AF%CF%83%CF%83%CE%B9%CE%B1&output=embed",
  license: "Αρ. Πρωτ. 240550 / 22.02.2024 — Δ/νση Δημόσιας Υγείας, Β. Τομέας Αθηνών",
  /** Τα κοινωνικά δίκτυα του γραφείου, με τη σειρά που εμφανίζονται στο footer. */
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/michaelmermigkis/",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@michaelmermigkis",
    },
  ],
  /** Ποιος έφτιαξε το σάιτ — η υπογραφή στο κάτω μέρος του footer. */
  credit: {
    label: "ClinicBrain",
    href: "https://clinicbrain.gr",
  },
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

/** Ό,τι από την ταυτότητα του γραφείου αλλάζει ανά γλώσσα. */
export const siteText = {
  el: {
    name: "Μερμίγκης Μιχαήλ",
    role: "Ψυχολόγος",
    tagline: "Αϋπνία & Διαταραχές Ύπνου",
    street: "Παναγή Τσαλδάρη 21",
    area: "Μελίσσια",
    region: "Αττική",
    license:
      "Αρ. Πρωτ. 240550 / 22.02.2024 — Δ/νση Δημόσιας Υγείας, Β. Τομέας Αθηνών",
  },
  en: {
    name: "Michail Mermigkis",
    role: "Psychologist",
    tagline: "Insomnia & Sleep Disorders",
    street: "21 Panagi Tsaldari St.",
    area: "Melissia, Athens",
    region: "Attica",
    license:
      "Licence no. 240550 / 22.02.2024 — Directorate of Public Health, North Athens",
  },
} as const;

const navEl: NavItem[] = [
  { href: "/", label: "Αρχική" },
  { href: "/viografiko", label: "Ο ψυχολόγος" },
  { href: "/aypnia-cbt-i", label: "Αϋπνία & CBT-I" },
  { href: "/diataraches-ypnou", label: "Διαταραχές ύπνου" },
  { href: "/test-aypnias", label: "Τεστ αϋπνίας" },
  { href: "/to-grafeio", label: "Το γραφείο" },
  { href: "/arthrografia", label: "Αρθρογραφία" },
  { href: "/syhnes-erotiseis", label: "Ερωτήσεις" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];

const navEn: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/viografiko", label: "The psychologist" },
  { href: "/aypnia-cbt-i", label: "Insomnia & CBT-I" },
  { href: "/diataraches-ypnou", label: "Sleep disorders" },
  { href: "/test-aypnias", label: "Insomnia test" },
  { href: "/to-grafeio", label: "The practice" },
  { href: "/arthrografia", label: "Articles" },
  { href: "/syhnes-erotiseis", label: "Questions" },
  { href: "/epikoinonia", label: "Contact" },
];

export const getNav = (lang: "el" | "en"): NavItem[] =>
  lang === "en" ? navEn : navEl;
