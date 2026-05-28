import type { MetadataRoute } from "next";
import { isSearchBlocked } from "@/lib/search-block";

/** Không công bố sitemap khi chặn tìm kiếm */
export default function sitemap(): MetadataRoute.Sitemap {
  if (isSearchBlocked()) {
    return [];
  }

  return [{ url: "/", lastModified: new Date() }];
}
