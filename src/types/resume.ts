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
  | "languages";

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  location: string;
}

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
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
  degree: string;
  major: string;
  gpa?: string;
  graduationYear: string;
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

/** @deprecated Dùng `defaultSectionOrder` từ `@/config/cv-defaults` */
export { defaultSectionOrder as DEFAULT_SECTION_ORDER } from "@/config/cv-defaults";

/** @deprecated Dùng `defaultCVSettings` từ `@/config/cv-defaults` */
export { defaultCVSettings as DEFAULT_CV_SETTINGS } from "@/config/cv-defaults";
