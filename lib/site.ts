export const site = {
  name: "Μερμίγκης Μιχαήλ",
  role: "Ψυχολόγος",
  tagline: "Αϋπνία & Διαταραχές Ύπνου",
  url: "https://mermigkis-psychologos.vercel.app",
  phoneDisplay: "6955 433 380",
  phoneHref: "tel:+306955433380",
  address: {
    street: "Γαργηττού 117",
    area: "Γέρακας",
    postal: "153 44",
    region: "Αττική",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=%CE%93%CE%B1%CF%81%CE%B3%CE%B7%CF%84%CF%84%CE%BF%CF%8D+117%2C+%CE%93%CE%AD%CF%81%CE%B1%CE%BA%CE%B1%CF%82",
  mapEmbed:
    "https://www.google.com/maps?q=%CE%93%CE%B1%CF%81%CE%B3%CE%B7%CF%84%CF%84%CE%BF%CF%8D%20117%2C%20%CE%93%CE%AD%CF%81%CE%B1%CE%BA%CE%B1%CF%82&output=embed",
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
  { href: "/syhnes-erotiseis", label: "Ερωτήσεις" },
  { href: "/epikoinonia", label: "Επικοινωνία" },
];
