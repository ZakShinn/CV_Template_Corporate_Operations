/**
 * Cấu hình SEO — file độc lập (next.config.ts import được, không kéo resume).
 * Đồng bộ với mô tả trong src/config.ts và src/huongdan.md
 */
export const configSeo = {
  /** true = chặn Google/Bing lập chỉ mục; false = cho phép index */
  blockSearchEngines: true,
} as const;
