import type { NextConfig } from "next";

/**
 * Στατικό export για GitHub Pages — δεν υπάρχει server, άρα ούτε Image
 * Optimization ούτε middleware/proxy. Το «/el» → «/» γίνεται πλέον στο
 * build (βλ. scripts/flatten-default-locale.mjs), όχι σε request-time rewrite.
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
