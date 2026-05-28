import type {
  Certification,
  Education,
  Initiative,
  Language,
  Locale,
  Project,
  SkillItem,
  WorkExperience,
} from "./resume";

/**
 * Kiểu nguồn khi chỉnh resume-basic / resume-advanced.
 * Mọi trường đều optional — có thể xóa dòng không cần mà không lỗi TypeScript.
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
    id: string;
    company?: string;
    position?: string;
    location?: string;
    startDate?: string;
    endDate?: string | "Present";
    responsibilities?: string[];
    achievements?: string[];
  }>;
  skills?: {
    technical?: SkillItem[];
    soft?: SkillItem[];
    tools?: SkillItem[];
    infrastructure?: SkillItem[];
    management?: SkillItem[];
  };
  education?: Education[];
  certifications?: Certification[];
  languages?: Language[];
};

export type ResumeAdvancedSource = {
  projects?: Project[];
  initiatives?: Initiative[];
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
