# Μερμίγκης Μιχαήλ — Ψυχολόγος | Αϋπνία & Διαταραχές Ύπνου

Ιστότοπος για τον ψυχολόγο Μιχαήλ Μερμίγκη, με positioning στην αϋπνία και τη
Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I).

## Stack

Next.js 16 (App Router, static export ανά σελίδα) · TypeScript · Tailwind CSS v4 · GitHub Pages.

## Σελίδες

| Route | Περιεχόμενο |
|---|---|
| `/` | Αρχική — hero, μηχανισμός αϋπνίας, μέθοδος, διαταραχές, τεστ, βιογραφικό, FAQ, επικοινωνία |
| `/viografiko` | Πλήρες βιογραφικό, εκπαίδευση, επαγγελματική πορεία |
| `/aypnia-cbt-i` | Τι είναι η αϋπνία, ο φαύλος κύκλος, τα 5 συστατικά της CBT-I, η πορεία της θεραπείας |
| `/diataraches-ypnou` | Ευρετήριο διαταραχών, πότε χρειάζεται εργαστηριακός έλεγχος, υγιεινή ύπνου |
| `/diataraches-ypnou/[slug]` | 8 σελίδες ανά διαταραχή (`lib/disorders.ts`): τι είναι, πώς εκδηλώνεται, πώς αντιμετωπίζεται |
| `/to-grafeio` | Ο χώρος, πρόσβαση, χάρτης |
| `/test-aypnias` | Διαδραστικό Athens Insomnia Scale (8 ερωτήσεις, σκορ 0–24) |
| `/syhnes-erotiseis` | Συχνές ερωτήσεις (+ FAQPage schema) |
| `/epikoinonia` | Τηλέφωνο, γραφείο, χάρτης |

## Design direction — «Clinical Nocturne»

Βαθύ midnight navy ως κυρίαρχο χρώμα (από την ταμπέλα του γραφείου), με τη σελίδα
να «ξημερώνει» σε ζεστό off-white καθώς κατεβαίνει ο χρήστης. Τυπογραφία:
Literata (display, με σχεδιασμένα ελληνικά) + Inter. Accent: μπρούντζος `#c0a063`.

Η δομή ακολουθεί το evimessaritaki.gr (nav με dropdown, σελίδα ανά θέμα, γραφείο,
πρώτη συνεδρία, FAQ)· το επίπεδο κατασκευής στοχεύει στο dentalharmonyclinic.gr —
κυκλικό έμβλημα-σφραγίδα, κεντραρισμένες συνθέσεις, letterspaced κεφαλαία,
διακριτικά ornaments και πολύς αέρας.

Το λογότυπο (`components/Logo.tsx`) βασίζεται στην ταμπέλα του γραφείου:
ημισέληνος + τρεις φθίνουσες λάμψεις στη θέση του «zZ». Τρεις εκδοχές — `Seal`
(κυκλικό έμβλημα με το όνομα σε τόξο), `Logo` (οριζόντιο lockup) και `LogoMark`.

## Athens Insomnia Scale

`lib/ais.ts` — 8 items × 0–3, κλινικό όριο 6/24 (Soldatos et al., 2000). Ο
υπολογισμός γίνεται αποκλειστικά στη συσκευή του χρήστη· τίποτα δεν αποθηκεύεται
ούτε αποστέλλεται.

## Βίντεο hero

`public/video/night-sky.{webm,mp4}` — 16" seamless loop (forward + reverse) με
νυχτερινό ουρανό, ημισέληνο και σύννεφα που περνούν, στην παλέτα του λογοτύπου.
Παράχθηκε με Veo 3.1 Lite (silent, 16:9), κόπηκε και συμπιέστηκε με ffmpeg.
Παίζει θολωμένο και σκουρόχρωμο πίσω από το hero· με `prefers-reduced-motion`
ή `saveData` σερβίρεται μόνο το `night-sky-poster.jpg`.

## Δύο γλώσσες

Ελληνικά στο `/`, αγγλικά στο `/en`. Όλες οι σελίδες ζουν κάτω από `app/[lang]/`.
Το GitHub Pages είναι στατικό hosting — δεν τρέχει server, άρα δεν μπορεί να
υπάρχει runtime rewrite (proxy/middleware). Το `next build` (static export)
βγάζει τα ελληνικά κάτω από `out/el/...`· το `scripts/flatten-default-locale.mjs`
τρέχει σαν `postbuild` και τα μεταφέρει στη ρίζα, ώστε το αποτέλεσμα να είναι
ίδιο με πριν (`/`, `/en/...`) χωρίς κανένα rewrite σε request-time.

- Το κείμενο κάθε σελίδας ζει σε ένα `copy = { el, en }` μέσα στο ίδιο αρχείο.
- Τα κοινά δεδομένα είναι σε ζεύγη: `lib/disorders.{el,en}.ts`,
  `lib/content.{el,en}.ts`, `lib/ais.{el,en}.ts`· τα `lib/*.ts` από πάνω
  δίνουν τα `get*(lang)`.
- Τα slugs (`/viografiko`, `/diataraches-ypnou/chronia-aypnia`) είναι κοινά και
  στις δύο γλώσσες — αλλάζει μόνο το πρόθεμα.
- Κάθε σελίδα ορίζει `canonical` + `hreflang` μέσω του `alternates()` στο
  `lib/i18n.ts`.
- Ο διακόπτης γλώσσας είναι στο header (chip `EN` / `ΕΛ`) και μέσα στο mobile
  drawer. Το desktop nav εμφανίζεται από τα 1460px και πάνω.

Τα ίδια τα άρθρα στο dunant.gr είναι γραμμένα στα ελληνικά — στην αγγλική
έκδοση μεταφράζονται τίτλοι και περιλήψεις, με σχετική σημείωση στο τέλος.

## Πού ζει και πώς ανεβαίνει

- **GitHub** (private): `ragwebcompany-coder/mermigkis-psychologos`, branch `main`.
- **GitHub Pages**: source = GitHub Actions (`.github/workflows/deploy.yml`).
  Κάθε push στο `main` τρέχει `npm ci && npm run build` (static export στο
  `out/`) και δημοσιεύει με `actions/deploy-pages`. Χειροκίνητα: tab **Actions**
  → «Deploy to GitHub Pages» → **Run workflow**.
- **Custom domain**: `www.aipnia.gr`, μέσω `public/CNAME` (αντιγράφεται στο
  `out/` σε κάθε build) — *όχι* από το πεδίο "Custom domain" στα repo Settings
  → Pages, γιατί αυτό ξαναγράφεται μόνο του από το `public/CNAME` κάθε deploy.
- **Τοπικό preview του export**: `npm run build && npm run preview`.

### DNS (registrar: Papaki)

Ήδη σωστά στημένο για GitHub Pages:
- `A` records, host `@` → `185.199.108.153` / `.109.153` / `.110.153` / `.111.153`
- `CNAME` record, host `www` → `ragwebcompany-coder.github.io.`

Το `NEXT_PUBLIC_SITE_URL` δίνεται στο workflow (`deploy.yml`, `env:` του job
`build`) — αν αλλάξει ποτέ το domain, αλλάζει εκεί (και στο `public/CNAME`),
όχι σε dashboard κάποιου hosting provider.

## Εκκρεμότητες περιεχομένου

- **Φωτογραφίες χώρου.** Οι τέσσερις λήψεις στο `public/img/grafeio/` είναι
  640×480 από κινητό. Λειτουργούν, αλλά επαγγελματική λήψη θα ανέβαζε αισθητά
  τη σελίδα «Το γραφείο».
- **Email επικοινωνίας** — δεν δημοσιεύεται προς το παρόν κατ' επιλογή.
- **Domain** — να οριστεί και να ενημερωθεί το `site.url` στο `lib/site.ts`.

## Ανάπτυξη

```bash
npm install
npm run dev
```
