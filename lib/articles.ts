export type Article = {
  slug: string;
  title: string;
  href: string;
  date: string;          // ISO, for sorting and <time>
  dateLabel: string;     // Greek, as printed
  authors: string[];
  /** true when Μιχαήλ Μερμίγκης is one of the named authors */
  own?: boolean;
  summary: string;
};

/**
 * Άρθρα του Εργαστηρίου Ύπνου (ΕΚεΔΥ) του Ερρίκος Ντυνάν Hospital Center,
 * όπως δημοσιεύονται στο dunant.gr. Η υπογραφή κάθε άρθρου αποδίδεται
 * ακριβώς όπως εμφανίζεται στην πηγή.
 */
export const articles: Article[] = [
  {
    slug: "aipnia-exthros-ipnou",
    title: "Αϋπνία, ο ύπουλος εχθρός του ύπνου μας",
    href: "https://www.dunant.gr/el/news/medical-articles/pulmonology/aipnia-exthros-ipnou/",
    date: "2026-03-06",
    dateLabel: "6 Μαρτίου 2026",
    authors: [
      "Χαράλαμπος Μερμίγκης, MD, PhD",
      "Μιχαήλ Μερμίγκης, Ψυχολόγος",
    ],
    own: true,
    summary:
      "Οι μορφές της αϋπνίας, τα συμπτώματα και οι θεραπευτικές επιλογές — με τη γνωσιακή συμπεριφορική ψυχοθεραπεία ως πρώτη γραμμή.",
  },
  {
    slug: "quality-sleep-summer",
    title: "8 συμβουλές για ποιοτικό ύπνο το καλοκαίρι",
    href: "https://www.dunant.gr/el/news/medical-articles/pulmonology/quality-sleep-summer/",
    date: "2025-07-30",
    dateLabel: "30 Ιουλίου 2025",
    authors: [
      "Χαράλαμπος Μερμίγκης",
      "Μιχαήλ Μερμίγκης, Ψυχολόγος",
    ],
    own: true,
    summary:
      "Πρακτικές συστάσεις για τον ύπνο τους θερινούς μήνες: θερμοκρασία δωματίου, αλκοόλ, καφεΐνη και ωράριο.",
  },
  {
    slug: "technical-intelligence-sleep",
    title: "Η τεχνητή νοημοσύνη στην Ιατρική του Ύπνου: φίλος ή εχθρός",
    href: "https://www.dunant.gr/el/news/medical-articles/pulmonology/technical-intelligence-sleep/",
    date: "2025-03-05",
    dateLabel: "5 Μαρτίου 2025",
    authors: ["Χαράλαμπος Μερμίγκης"],
    summary:
      "Πότε οι συσκευές καταγραφής ύπνου βοηθούν πραγματικά τη διάγνωση και πότε τροφοδοτούν το άγχος για τον ύπνο.",
  },
  {
    slug: "diataraxes-ipnou",
    title: "Απαντήσεις σε συχνές ερωτήσεις ασθενών για τις διαταραχές του ύπνου",
    href: "https://www.dunant.gr/el/news/medical-articles/sleep-lab/diataraxes-ipnou/",
    date: "2024-03-06",
    dateLabel: "6 Μαρτίου 2024",
    authors: ["Χαράλαμπος Μερμίγκης, MD, PhD"],
    summary:
      "Καθυστερημένη φάση ύπνου, αγχώδεις σκέψεις πριν τον ύπνο, καθημερινές συνήθειες και η διαδικασία της μελέτης ύπνου.",
  },
  {
    slug: "sleep-study",
    title: "Η Ιατρική του Ύπνου μέσα από απλά ερωτήματα",
    href: "https://www.dunant.gr/el/news/medical-articles/sleep-lab/sleep-study/",
    date: "2023-03-09",
    dateLabel: "9 Μαρτίου 2023",
    authors: ["Χαράλαμπος Μερμίγκης"],
    summary:
      "Τι είναι η Ιατρική του Ύπνου ως ειδικότητα και γιατί έχει σημασία το πιστοποιημένο κέντρο και ο ειδικός ιατρός.",
  },
  {
    slug: "meleti-ipnou-diataraxes",
    title: "Μελέτη ύπνου: ο ακρογωνιαίος λίθος για τη διάγνωση",
    href: "https://www.dunant.gr/el/news/medical-articles/sleep-lab/meleti-ipnou-diataraxes/",
    date: "2022-03-17",
    dateLabel: "17 Μαρτίου 2022",
    authors: ["Χαράλαμπος Μερμίγκης"],
    summary:
      "Γιατί η πολυυπνογραφία παραμένει η βασική διαγνωστική εξέταση και πώς διεξάγεται σε εργαστήριο ύπνου.",
  },
  {
    slug: "epiptoseis-karantinas-ipnos",
    title: "Μετρώντας τις επιπτώσεις της καραντίνας στον ύπνο μας",
    href: "https://www.dunant.gr/el/news/medical-articles/sleep-lab/epiptoseis-karantinas-ipnos/",
    date: "2021-03-11",
    dateLabel: "11 Μαρτίου 2021",
    authors: ["Χαράλαμπος Μερμίγκης"],
    summary:
      "Πώς ο εγκλεισμός μετακίνησε τα ωράρια, επιδείνωσε την αϋπνία και πλήθυναν τα δυσάρεστα όνειρα.",
  },
  {
    slug: "ypnos-covid19",
    title:
      "Ευρωπαϊκές οδηγίες για τα προβλήματα ύπνου στον κατ' οίκον περιορισμό",
    href: "https://www.dunant.gr/el/news/medical-articles/covid-19/ypnos-covid19/",
    date: "2020-06-17",
    dateLabel: "17 Ιουνίου 2020",
    authors: ["Χαράλαμπος Μερμίγκης", "Μαίρη Νταφούλη, Κλινική Ψυχολόγος"],
    summary:
      "Οι συστάσεις της Ευρωπαϊκής Ακαδημίας CBT-I για ενήλικες, παιδιά, επαγγελματίες υγείας και ασθενείς σε φαρμακοθεραπεία.",
  },
  {
    slug: "covid-diatarahes-ypnou",
    title: "COVID-19: οδηγίες για ασθενείς με διαταραχές κατά τον ύπνο",
    href: "https://www.dunant.gr/el/news/medical-articles/covid-19/covid-diatarahes-ypnou/",
    date: "2020-04-03",
    dateLabel: "3 Απριλίου 2020",
    authors: ["Χαράλαμπος Μερμίγκης"],
    summary:
      "Κλινικές οδηγίες για την υπνική άπνοια και τη χρήση αναπνευστικών συσκευών στη διάρκεια της πανδημίας.",
  },
  {
    slug: "ypnos",
    title: "Παγκόσμια Ημέρα Ύπνου: γιατί χάσαμε τελικά τον ύπνο μας;",
    href: "https://www.dunant.gr/el/news/medical-articles/sleep-lab/ypnos/",
    date: "2020-03-05",
    dateLabel: "5 Μαρτίου 2020",
    authors: ["Χαράλαμπος Μερμίγκης"],
    summary:
      "Οι κύριες διαταραχές ύπνου του σύγχρονου ανθρώπου — άπνοια, αϋπνία, παραϋπνίες — και το κόστος τους στην υγεία.",
  },
  {
    slug: "psychotherapia-stin-apnoia",
    title: "Ο ρόλος της ψυχοθεραπείας στην υπνική άπνοια",
    href: "https://www.dunant.gr/el/news/medical-articles/sleep-lab/psychotherapia-stin-apnoia/",
    date: "2020-03-04",
    dateLabel: "4 Μαρτίου 2020",
    authors: ["Χαράλαμπος Μερμίγκης", "Μαίρη Νταφούλη, Ψυχολόγος"],
    summary:
      "Πώς η γνωσιακή συμπεριφορική θεραπεία της αϋπνίας βελτιώνει την αποδοχή και τη συμμόρφωση στη θεραπεία με CPAP.",
  },
];
