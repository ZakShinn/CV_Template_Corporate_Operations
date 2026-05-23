import type { Locale } from "@/types/resume";

/** Cấu hình ứng dụng — ngôn ngữ mặc định: Tiếng Việt */
export const appConfig = {
  name: "Mẫu CV Vận hành Doanh nghiệp",
  shortName: "CV Corporate Operations",
  description:
    "Mẫu CV chuyên nghiệp, tối ưu ATS dành cho Quản lý Vận hành, IT Operations, Business Operations và các vị trí enterprise.",
  defaultLocale: "vi" as Locale,
  htmlLang: "vi",
  version: "1.0.0",
  schemaPath: "/src/data/resume.schema.ts",
  schemaUrl: "https://corporate-ops-cv.dev/schema/v1",
  /** Ảnh mặc định — cấu hình chính tại src/avatar/config.ts */
  avatarDefault: "/avatar-placeholder.svg",
  export: {
    pdfPrefix: "cv-",
    docxPrefix: "cv-",
    printHint:
      "In (Ctrl+P → Lưu PDF) giữ văn bản có thể chọn — tốt nhất cho ATS",
  },
  footer:
    "Mẫu CV Vận hành Doanh nghiệp · Tối ưu ATS · Khuyên dùng In (Ctrl+P) để xuất PDF có thể chọn chữ",
} as const;
