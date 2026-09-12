import type { Lang } from "./i18n";
import { disordersEl } from "./disorders.el";
import { disordersEn } from "./disorders.en";

export type Disorder = {
  slug: string;
  nav: string;
  title: string;
  short: string;
  lede: string;
  what: string[];
  signs: string[];
  treatment: string[];
  caution?: string;
};

const byLang: Record<Lang, Disorder[]> = { el: disordersEl, en: disordersEn };

export const getDisorders = (lang: Lang) => byLang[lang];

export const disorderBySlug = (lang: Lang, slug: string) =>
  byLang[lang].find((d) => d.slug === slug);

/** Τα slugs είναι κοινά και στις δύο γλώσσες. */
export const disorderSlugs = disordersEl.map((d) => d.slug);
