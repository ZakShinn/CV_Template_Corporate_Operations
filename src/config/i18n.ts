import type { Locale, SectionId } from "@/types/resume";
import { appConfig } from "./app";

/** Nhãn section CV theo ngôn ngữ */
export const sectionLabels: Record<Locale, Record<string, string>> = {
  vi: {
    professionalSummary: "Tóm tắt chuyên môn",
    workExperience: "Kinh nghiệm làm việc",
    skills: "Kỹ năng",
    technicalSkills: "Kỹ năng kỹ thuật",
    softSkills: "Kỹ năng mềm",
    toolsPlatforms: "Công cụ & Nền tảng",
    infrastructure: "Hạ tầng",
    management: "Quản lý",
    education: "Học vấn",
    certifications: "Chứng chỉ",
    projects: "Dự án",
    languages: "Ngôn ngữ",
    responsibilities: "Trách nhiệm chính",
    achievements: "Thành tựu nổi bật",
    technologies: "Công nghệ sử dụng",
    profileStrength: "Độ hoàn thiện hồ sơ",
    present: "Hiện tại",
    gpa: "Điểm TB",
    scanQr: "Quét mã",
    contactInfo: "Thông tin liên hệ",
    github: "GitHub",
  },
  en: {
    professionalSummary: "Professional Summary",
    workExperience: "Work Experience",
    skills: "Skills",
    technicalSkills: "Technical Skills",
    softSkills: "Soft Skills",
    toolsPlatforms: "Tools & Platforms",
    infrastructure: "Infrastructure",
    management: "Management",
    education: "Education",
    certifications: "Certifications",
    projects: "Projects",
    languages: "Languages",
    responsibilities: "Key Responsibilities",
    achievements: "Key Achievements",
    technologies: "Technologies",
    profileStrength: "Profile Strength",
    present: "Present",
    gpa: "GPA",
    scanQr: "Scan",
    contactInfo: "Contact information",
    github: "GitHub",
  },
  ja: {
    professionalSummary: "プロフェッショナルサマリー",
    workExperience: "職務経歴",
    skills: "スキル",
    technicalSkills: "技術スキル",
    softSkills: "ソフトスキル",
    toolsPlatforms: "ツール・プラットフォーム",
    infrastructure: "インフラ",
    management: "マネジメント",
    education: "学歴",
    certifications: "資格",
    projects: "プロジェクト",
    languages: "言語",
    responsibilities: "主な業務",
    achievements: "主な実績",
    technologies: "技術",
    profileStrength: "プロフィール完成度",
    present: "現在",
    gpa: "GPA",
    scanQr: "スキャン",
    contactInfo: "連絡先",
    github: "GitHub",
  },
};

const sectionKeyMap: Record<SectionId, string> = {
  summary: "professionalSummary",
  experience: "workExperience",
  skills: "skills",
  education: "education",
  certifications: "certifications",
  projects: "projects",
  languages: "languages",
};

export function t(locale: Locale, key: string): string {
  const pack = sectionLabels[locale] ?? sectionLabels[appConfig.defaultLocale];
  return pack[key] ?? sectionLabels.vi[key] ?? key;
}

export function sectionTitle(locale: Locale, id: SectionId): string {
  return t(locale, sectionKeyMap[id]);
}
