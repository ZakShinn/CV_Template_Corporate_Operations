import type { MetadataRoute } from "next";
import { isSearchBlocked } from "@/lib/search-block";

/** robots.txt động — ưu tiên hơn public/robots.txt khi deploy */
export default function robots(): MetadataRoute.Robots {
  if (isSearchBlocked()) {
    return {
      rules: [
        { userAgent: "*", disallow: "/" },
        { userAgent: "Googlebot", disallow: "/" },
        { userAgent: "Googlebot-Image", disallow: "/" },
        { userAgent: "Googlebot-News", disallow: "/" },
        { userAgent: "Bingbot", disallow: "/" },
      ],
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
  };
}
