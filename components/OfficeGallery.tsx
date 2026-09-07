"use client";

import Image from "next/image";
import { useState } from "react";

export type Shot = { src: string; label: string; caption: string };

export const officeShots: Shot[] = [
  {
    src: "/img/grafeio/grafeio-2.jpg",
    label: "Ο χώρος συνεδρίας",
    caption:
      "Εδώ γίνονται οι συνεδρίες — ήσυχα, με φυσικό φως και χωρίς κλινική ψυχρότητα.",
  },
  {
    src: "/img/grafeio/anamoni.jpg",
    label: "Η αναμονή",
    caption:
      "Μικρός χώρος υποδοχής. Τα ραντεβού ορίζονται ώστε να μη συμπίπτουν.",
  },
  {
    src: "/img/grafeio/prosopsi.jpg",
    label: "Η πρόσοψη",
    caption:
      "Το κτήριο στη Γαργηττού 117. Ελεύθερη στάθμευση στους γύρω δρόμους.",
  },
  {
    src: "/img/grafeio/tampela.jpg",
    label: "Η ταμπέλα",
    caption:
      "Η πινακίδα στην είσοδο — το φεγγάρι με τα τρία zZ από το οποίο προέκυψε και το σήμα του γραφείου.",
  },
];

/** Featured shot with a thumbnail strip; images cross-fade and drift slowly. */
export default function OfficeGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto max-w-4xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[26px] border border-ink-900/8 bg-midnight-900">
        {officeShots.map((shot, i) => (
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.label}
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            priority={i === 0}
            className={`object-cover transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
              i === active ? "scale-100 opacity-100" : "scale-105 opacity-0"
            }`}
          />
        ))}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-midnight-950/95 via-midnight-950/65 to-transparent px-6 pb-6 pt-16 sm:px-9 sm:pb-9 sm:pt-28">
          <p className="eyebrow text-[0.5625rem] text-brass-400">
            {officeShots[active].label}
          </p>
          <p className="mt-3 max-w-xl text-[0.9375rem] leading-[1.75] text-cream-50/85 text-pretty">
            {officeShots[active].caption}
          </p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3 sm:gap-4">
        {officeShots.map((shot, i) => (
          <button
            key={shot.src}
            type="button"
            onClick={() => setActive(i)}
            aria-label={shot.label}
            aria-current={i === active}
            className={`group relative aspect-[4/3] overflow-hidden rounded-xl ring-1 transition-all duration-500 ${
              i === active
                ? "ring-brass-500"
                : "ring-ink-900/10 hover:ring-brass-500/60"
            }`}
          >
            <Image
              src={shot.src}
              alt=""
              fill
              sizes="180px"
              className={`object-cover transition-all duration-700 group-hover:scale-105 ${
                i === active ? "" : "grayscale-[45%] opacity-70"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
