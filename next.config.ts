import type { NextConfig } from "next";
import { configSeo } from "./src/config-seo";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    if (!configSeo.blockSearchEngines) {
      return [];
    }
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
          },
        ],
      },
    ];
  },
};

export default nextConfig;