import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Old single-track URLs (before the Hindi track existed) now live under /english.
  async redirects() {
    return [
      { source: "/month/:n", destination: "/english/month/:n", permanent: true },
      { source: "/guide", destination: "/english/guide", permanent: true },
      { source: "/reading", destination: "/english/reading", permanent: true },
      { source: "/log", destination: "/english/log", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
