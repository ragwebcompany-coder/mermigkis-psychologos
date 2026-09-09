export const site = {
  name: "Μερμίγκης Μιχαήλ",
  role: "Ψυχολόγος",
  tagline: "Αϋπνία & Διαταραχές Ύπνου",
  url: "https://mermigkis-psychologos.vercel.app",
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
} as const;

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export const nav: NavItem[] = [
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
