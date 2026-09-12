import type { MetadataRoute } from "next";
import { disorderSlugs } from "@/lib/disorders";
import { getNav, site } from "@/lib/site";
import { langs, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return langs.flatMap((lang) => {
    const pages = getNav(lang).map((item) => ({
      url: `${site.url}${localePath(lang, item.href).replace(/\/$/, "")}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.8,
    }));

    const details = disorderSlugs.map((slug) => ({
      url: `${site.url}${localePath(lang, `/diataraches-ypnou/${slug}`)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

    return [...pages, ...details];
  });
}
