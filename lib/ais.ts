import type { Lang } from "./i18n";
import { aisItemsEl, bandForEl } from "./ais.el";
import { aisItemsEn, bandForEn } from "./ais.en";

export type AisItem = {
  id: string;
  prompt: string;
  hint?: string;
  options: [string, string, string, string];
};

export type AisBand = {
  label: string;
  range: string;
  headline: string;
  body: string;
  tone: "calm" | "watch" | "alert";
};

const itemsByLang: Record<Lang, AisItem[]> = { el: aisItemsEl, en: aisItemsEn };
const bandByLang: Record<Lang, (score: number) => AisBand> = {
  el: bandForEl,
  en: bandForEn,
};

export const getAisItems = (lang: Lang) => itemsByLang[lang];
export const bandFor = (lang: Lang, score: number) => bandByLang[lang](score);
