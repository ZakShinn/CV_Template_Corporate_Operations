/** JSON Resume schema — Corporate Operations extension */

export type CVLayout = "one-column" | "two-column";
export type CVVariant =
  | "default"
  | "executive"
  | "minimal"
  | "tech-operations";
export type CVTheme = "light" | "dark";
export type AccentColor = "navy" | "blue" | "slate" | "emerald";
export type Locale = "en" | "vi" | "ja";

export type SectionId =
  | "summary"
  | "experience"
  | "skills"
  | "education"
  | "certifications"
  | "projects"
  | "initiatives"
  | "languages";

export interface ContactInfo {
  email: string;
  phone: string;
  dateOfBirth?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  zalo?: string;
  portfolio?: string;
  location: string;
}

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  /** Dòng phụ dưới chức danh, ví dụ: System Operations • Infrastructure */
  tagline?: string;
  avatar?: string;
  contact: ContactInfo;
}

export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  responsibilities: string[];
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  level?: number; // 0-100 for progress display
}

export interface Education {
  id: string;
  university: string;
  /** Bậc học: Đại học, Cao đẳng, THPT, THCS, Tiểu học… */
  degree: string;
  major: string;
  gpa?: string;
  /** Thời gian học, ví dụ: 2022 – 2024 */
  graduationYear: string;
  /** Nội dung, hoạt động hoặc giai đoạn */
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialId?: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  achievements: string[];
  githubUrl?: string;
}

/** Đề án / chương trình / initiative (phần nâng cao) */
export interface Initiative {
  id: string;
  name: string;
  description: string;
  organization?: string;
  period?: string;
  achievements: string[];
  link?: string;
}

export interface Language {
  id: string;
  name: string;
  level: string; // e.g. "Native", "Professional", "B2"
  proficiency?: number; // 0-100
}

export interface ResumeData {
  $schema?: string;
  version: string;
  locale: Locale;
  personal: PersonalInfo;
  summary: string;
  experience: WorkExperience[];
  skills: {
    technical: SkillItem[];
    soft: SkillItem[];
    tools: SkillItem[];
    infrastructure: SkillItem[];
    management: SkillItem[];
  };
  education: Education[];
  certifications: Certification[];
  projects: Project[];
  initiatives: Initiative[];
  languages: Language[];
}

export interface CVSettings {
  layout: CVLayout;
  variant: CVVariant;
  theme: CVTheme;
  accent: AccentColor;
  locale: Locale;
  sectionOrder: SectionId[];
  showQRCode: boolean;
  showProfileScore: boolean;
}

export { defaultSectionOrder as DEFAULT_SECTION_ORDER } from "@/config";
export { defaultCVSettings as DEFAULT_CV_SETTINGS } from "@/config";
