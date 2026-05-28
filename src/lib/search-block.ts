import type { Metadata } from "next";
import { configSeo } from "@/config-seo";

/** Bật/tắt chặn Google & công cụ tìm kiếm — đồng bộ mọi nơi qua configSeo.blockSearchEngines */
export function isSearchBlocked(): boolean {
  return configSeo.blockSearchEngines === true;
}

/** Metadata robots cho layout (noindex, nofollow, Googlebot) */
export function getSearchBlockMetadata(): Pick<Metadata, "robots" | "openGraph" | "alternates"> {
  if (!isSearchBlocked()) {
    return {};
  }

  return {
    robots: {
      index: false,
      follow: false,
      nocache: true,
      noarchive: true,
      nosnippet: true,
      noimageindex: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
        nocache: true,
        noarchive: true,
        nosnippet: true,
        "max-video-preview": -1,
        "max-image-preview": "none",
        "max-snippet": -1,
      },
    },
    openGraph: undefined,
    alternates: {
      canonical: undefined,
    },
  };
}

/** Header HTTP chặn bot (Next.js headers) */
export const SEARCH_BLOCK_HEADERS = [
  {
    key: "X-Robots-Tag",
    value: "noindex, nofollow, noarchive, nosnippet, noimageindex",
  },
] as const;
