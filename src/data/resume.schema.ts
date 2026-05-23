/**
 * Mô tả cấu trúc dữ liệu CV (tham chiếu — kiểu chính: `@/types/resume`)
 * Dùng khi cần xuất JSON Schema hoặc tài liệu hóa trường bắt buộc.
 */
export const resumeSchemaMeta = {
  $id: "https://corporate-ops-cv.dev/schema/v1/resume.schema.ts",
  title: "CV Vận hành Doanh nghiệp",
  description:
    "Cấu trúc dữ liệu CV — chỉnh nội dung tại src/data/resume.ts, khung trống tại resume.template.ts",
  requiredTopLevel: [
    "version",
    "locale",
    "personal",
    "summary",
    "experience",
    "skills",
    "education",
    "certifications",
    "projects",
    "languages",
  ] as const,
  locales: ["vi", "en", "ja"] as const,
  dateFormat: "YYYY-MM (ví dụ: 2021-03)",
  endDatePresent: "Present" as const,
} as const;

/** JSON Schema (object) — có thể stringify khi tích hợp validator bên ngoài */
export const resumeJsonSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  $id: resumeSchemaMeta.$id,
  title: resumeSchemaMeta.title,
  description: resumeSchemaMeta.description,
  type: "object",
  required: [...resumeSchemaMeta.requiredTopLevel],
  properties: {
    $schema: { type: "string" },
    version: { type: "string", pattern: "^\\d+\\.\\d+\\.\\d+$" },
    locale: { type: "string", enum: [...resumeSchemaMeta.locales], default: "vi" },
    personal: {
      type: "object",
      required: ["fullName", "jobTitle", "contact"],
      properties: {
        fullName: { type: "string", minLength: 1, description: "Họ và tên" },
        jobTitle: { type: "string", description: "Chức danh" },
        avatar: { type: "string" },
        contact: {
          type: "object",
          required: ["email", "phone", "location"],
          properties: {
            email: { type: "string" },
            phone: { type: "string" },
            linkedin: { type: "string" },
            github: { type: "string" },
            portfolio: { type: "string" },
            location: { type: "string" },
          },
        },
      },
    },
    summary: { type: "string", minLength: 50 },
    experience: { type: "array" },
    skills: { type: "object" },
    education: { type: "array" },
    certifications: { type: "array" },
    projects: { type: "array" },
    languages: { type: "array" },
  },
} as const;
