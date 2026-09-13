// Χωρίς server δεν υπάρχει proxy/middleware να κάνει rewrite «/» → «/el».
// Το `next build` (output: "export") βγάζει τα ελληνικά κάτω από out/el/…
// — αυτό το script τα μεταφέρει στη ρίζα ώστε τα URLs να μείνουν clean
// (aipnia.gr/..., aipnia.gr/en/...), όπως ήταν στο live site.
import { cp, rm, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const outDir = path.join(process.cwd(), "out");
const elDir = path.join(outDir, "el");

if (!existsSync(elDir)) {
  console.error(`Δεν βρέθηκε το ${elDir} — τρέξε πρώτα "next build".`);
  process.exit(1);
}

const entries = await readdir(elDir);
for (const entry of entries) {
  await cp(path.join(elDir, entry), path.join(outDir, entry), {
    recursive: true,
  });
}
await rm(elDir, { recursive: true, force: true });

console.log(`Μεταφέρθηκαν ${entries.length} στοιχεία από out/el/ στη ρίζα του out/.`);
