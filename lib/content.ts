import type { QA } from "@/components/Accordion";
import type { Lang } from "./i18n";
import { faqEl, methodEl } from "./content.el";
import { faqEn, methodEn } from "./content.en";

export type MethodStep = { n: string; title: string; body: string };

const faqByLang: Record<Lang, QA[]> = { el: faqEl, en: faqEn };
const methodByLang: Record<Lang, MethodStep[]> = { el: methodEl, en: methodEn };

export const getFaq = (lang: Lang) => faqByLang[lang];
export const getMethod = (lang: Lang) => methodByLang[lang];
