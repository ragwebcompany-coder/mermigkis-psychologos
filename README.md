# Μερμίγκης Μιχαήλ — Ψυχολόγος | Αϋπνία & Διαταραχές Ύπνου

Ιστότοπος για τον ψυχολόγο Μιχαήλ Μερμίγκη, με positioning στην αϋπνία και τη
Γνωσιακή Συμπεριφορική Θεραπεία της Αϋπνίας (CBT-I).

## Stack

Next.js 16 (App Router, static export ανά σελίδα) · TypeScript · Tailwind CSS v4 · Vercel.

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

Ελληνικά στο `/`, αγγλικά στο `/en`. Όλες οι σελίδες ζουν κάτω από `app/[lang]/`
και το `proxy.ts` κάνει rewrite κάθε path χωρίς πρόθεμα στο `/el/...`, ώστε τα
ελληνικά URL να μένουν καθαρά· το `/el/...` ανακατευθύνεται στο καθαρό path για
να μην υπάρχει διπλό περιεχόμενο.

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
- **Vercel**: team `ragwebcompany-4196's projects`, project `mermigkis-psychologos`.
  Το repo είναι συνδεδεμένο, οπότε κάθε push στο `main` κάνει deploy μόνο του.
  Χειροκίνητα: `vercel deploy --prod --yes`.
- **Προσωρινή διεύθυνση**: `https://mermigkis-psychologos.vercel.app`

### Όταν μπει το κανονικό domain

1. Στο Vercel → project → Settings → Domains, πρόσθεσε το domain και το `www`
   (ή `vercel domains add <domain> mermigkis-psychologos`).
2. Στον registrar του domain:
   - `A` record, host `@` → `76.76.21.21`
   - `CNAME` record, host `www` → `cname.vercel-dns.com`
   Εναλλακτικά, nameservers → `ns1.vercel-dns.com` και `ns2.vercel-dns.com`,
   οπότε το Vercel στήνει μόνο του τα records.
3. Στο Vercel → Settings → Environment Variables, βάλε σε **Production** και
   **Preview**: `NEXT_PUBLIC_SITE_URL = https://<το domain>` (χωρίς κάθετο στο
   τέλος). Τροφοδοτεί sitemap, canonical, hreflang και OG tags.
4. Redeploy, ώστε να ξαναχτιστεί το sitemap με τη νέα διεύθυνση.

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
