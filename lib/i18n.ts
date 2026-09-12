export const langs = ["el", "en"] as const;
export type Lang = (typeof langs)[number];

export const isLang = (value: string): value is Lang =>
  (langs as readonly string[]).includes(value);

/**
 * Πρόθεμα γλώσσας σε εσωτερικό path. Τα ελληνικά μένουν χωρίς πρόθεμα
 * (ο proxy κάνει rewrite το «/» στο «/el»), τα αγγλικά ζουν κάτω από «/en».
 */
export function localePath(lang: Lang, href: string): string {
  if (lang === "el") return href;
  if (!href.startsWith("/")) return href;
  return href === "/" ? "/en" : `/en${href}`;
}

/**
 * Ξεγυμνώνει ένα pathname από το πρόθεμα γλώσσας. Χρειάζεται και για το «/el»,
 * επειδή στον server το usePathname βλέπει το path μετά το rewrite του proxy.
 */
export function barePath(pathname: string): string {
  return pathname.replace(/^\/(?:el|en)(?=\/|$)/, "") || "/";
}

/** Το ίδιο path στην άλλη γλώσσα, από ένα pathname του browser. */
export function switchPath(pathname: string, to: Lang): string {
  return localePath(to, barePath(pathname));
}

/** canonical + hreflang για μία σελίδα, και στις δύο γλώσσες. */
export function alternates(lang: Lang, path: string) {
  return {
    canonical: localePath(lang, path),
    languages: {
      el: localePath("el", path),
      en: localePath("en", path),
    },
  };
}
