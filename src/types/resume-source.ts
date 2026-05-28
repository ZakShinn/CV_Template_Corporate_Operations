import type { Locale } from "./resume";

/**
 * Kiểu nguồn khi chỉnh resume-basic / resume-advanced.
 * Mọi trường đều optional — có thể xóa dòng/mục không cần mà không lỗi TypeScript.
 */
export type ResumeBasicSource = {
  locale?: Locale;
  personal?: {
    fullName?: string;
    jobTitle?: string;
    tagline?: string;
    contact?: {
      email?: string;
      phone?: string;
      dateOfBirth?: string;
      linkedin?: string;
      github?: string;
      facebook?: string;
      zalo?: string;
      portfolio?: string;
      location?: string;
    };
  };
  summary?: string;
  experience?: Array<{
    id?: string;
    company?: string;
    position?: string;
    location?: string;
    startDate?: string;
    endDate?: string | "Present";
    responsibilities?: string[];
    achievements?: string[];
  }>;
  skills?: {
    technical?: Array<{ name?: string; level?: number }>;
    soft?: Array<{ name?: string; level?: number }>;
    tools?: Array<{ name?: string; level?: number }>;
    infrastructure?: Array<{ name?: string; level?: number }>;
    management?: Array<{ name?: string; level?: number }>;
  };
  education?: Array<{
    id?: string;
    university?: string;
    degree?: string;
    major?: string;
    gpa?: string;
    graduationYear?: string;
    description?: string;
  }>;
  certifications?: Array<{
    id?: string;
    name?: string;
    issuer?: string;
    year?: string;
    credentialId?: string;
  }>;
  languages?: Array<{
    id?: string;
    name?: string;
    level?: string;
    proficiency?: number;
  }>;
};

export type ResumeAdvancedSource = {
  projects?: Array<{
    id?: string;
    name?: string;
    description?: string;
    technologies?: string[];
    achievements?: string[];
    githubUrl?: string;
    link?: string;
  }>;
  initiatives?: Array<{
    id?: string;
    name?: string;
    organization?: string;
    period?: string;
    description?: string;
    achievements?: string[];
    link?: string;
  }>;
  display?: {
    showSkillProgressBars?: boolean;
    showLanguageProgressBars?: boolean;
    visibleSections?: Partial<
      Record<
        | "summary"
        | "experience"
        | "skills"
        | "education"
        | "certifications"
        | "projects"
        | "initiatives"
        | "languages",
        boolean
      >
    >;
  };
};
