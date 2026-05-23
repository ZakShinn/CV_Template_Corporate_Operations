import { appConfig } from "@/config/app";
import type { ResumeData } from "@/types/resume";

/**
 * Khung CV trống — copy nội dung sang resume.ts hoặc gán vào store
 */
export const resumeTemplate: ResumeData = {
  $schema: appConfig.schemaUrl,
  version: appConfig.version,
  locale: "vi",
  personal: {
    fullName: "Họ và Tên",
    jobTitle: "Quản lý Vận hành | IT & Vận hành Doanh nghiệp",
    avatar: appConfig.avatarDefault,
    contact: {
      email: "email@congty.com",
      phone: "+84 000 000 0000",
      linkedin: "linkedin.com/in/ho-so-cua-ban",
      github: "github.com/ten-ban",
      portfolio: "website-cua-ban.com",
      location: "Thành phố, Việt Nam",
    },
  },
  summary:
    "Tóm tắt chuyên môn ngắn gọn, theo phong cách corporate, nhấn kinh nghiệm, thế mạnh và định hướng nghề nghiệp (tối thiểu 120 ký tự).",
  experience: [],
  skills: {
    technical: [],
    soft: [],
    tools: [],
    infrastructure: [],
    management: [],
  },
  education: [],
  certifications: [],
  projects: [],
  languages: [],
};
