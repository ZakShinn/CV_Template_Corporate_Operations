import { resumeAdvanced } from "@/resume-advanced";
import type { ResumeAdvancedSource, ResumeBasicSource } from "@/types/resume-source";
import type {
  Certification,
  ContactInfo,
  Education,
  Initiative,
  Language,
  Locale,
  PersonalInfo,
  Project,
  ResumeData,
  SectionId,
  SkillItem,
  WorkExperience,
} from "@/types/resume";

const DEFAULT_LOCALE: Locale = "vi";

const DEFAULT_DISPLAY = {
  showSkillProgressBars: true,
  showLanguageProgressBars: true,
  visibleSections: {
    summary: true,
    experience: true,
    skills: true,
    education: true,
    certifications: true,
    projects: true,
    initiatives: true,
    languages: true,
  },
} as const;

const EMPTY_SKILLS = {
  technical: [] as SkillItem[],
  soft: [] as SkillItem[],
  tools: [] as SkillItem[],
  infrastructure: [] as SkillItem[],
  management: [] as SkillItem[],
};

function arr<T>(value: T[] | undefined | null): T[] {
  return Array.isArray(value) ? value : [];
}

/** Bỏ chuỗi rỗng / chỉ khoảng trắng */
export function cleanTextLines(lines: string[] | undefined | null): string[] {
  return arr(lines).map((s) => String(s).trim()).filter(Boolean);
}

function str(value: string | undefined | null, fallback = ""): string {
  return typeof value === "string" ? value.trim() : fallback;
}

type ContactSource = NonNullable<ResumeBasicSource["personal"]>["contact"];

function normalizeContact(raw?: ContactSource): ContactInfo {
  const c = raw ?? {};
  return {
    email: str(c.email),
    phone: str(c.phone),
    location: str(c.location),
    ...(str(c.dateOfBirth) ? { dateOfBirth: str(c.dateOfBirth) } : {}),
    ...(str(c.linkedin) ? { linkedin: str(c.linkedin) } : {}),
    ...(str(c.github) ? { github: str(c.github) } : {}),
    ...(str(c.facebook) ? { facebook: str(c.facebook) } : {}),
    ...(str(c.zalo) ? { zalo: str(c.zalo) } : {}),
    ...(str(c.portfolio) ? { portfolio: str(c.portfolio) } : {}),
  };
}

function normalizePersonal(raw?: ResumeBasicSource["personal"]): PersonalInfo {
  return {
    fullName: str(raw?.fullName, "Họ và Tên"),
    jobTitle: str(raw?.jobTitle),
    ...(str(raw?.tagline) ? { tagline: str(raw?.tagline) } : {}),
    avatar: "",
    contact: normalizeContact(raw?.contact),
  };
}

function normalizeExperienceItem(
  raw: NonNullable<ResumeBasicSource["experience"]>[number]
): WorkExperience | null {
  const company = str(raw.company);
  const position = str(raw.position);
  if (!company && !position) return null;

  return {
    id: str(raw.id, `exp-${Math.random().toString(36).slice(2, 9)}`),
    company: company || "—",
    position: position || "—",
    ...(str(raw.location) ? { location: str(raw.location) } : {}),
    startDate: str(raw.startDate, "2020-01"),
    endDate: raw.endDate === "Present" || str(raw.endDate) ? (raw.endDate ?? "Present") : "Present",
    responsibilities: cleanTextLines(raw.responsibilities),
    achievements: cleanTextLines(raw.achievements),
  };
}

function normalizeExperience(
  raw: ResumeBasicSource["experience"]
): WorkExperience[] {
  return arr(raw)
    .map(normalizeExperienceItem)
    .filter((e): e is WorkExperience => e !== null);
}

function normalizeSkills(raw: ResumeBasicSource["skills"]): ResumeData["skills"] {
  const s = raw ?? {};
  const pick = (items?: SkillItem[]) =>
    arr(items).filter((item) => str(item?.name).length > 0);

  return {
    technical: pick(s.technical),
    soft: pick(s.soft),
    tools: pick(s.tools),
    infrastructure: pick(s.infrastructure),
    management: pick(s.management),
  };
}

function normalizeEducation(raw?: Education[]): Education[] {
  return arr(raw)
    .filter((e) => str(e.university) || str(e.degree))
    .map((e) => ({
      id: e.id,
      university: str(e.university),
      degree: str(e.degree),
      major: str(e.major),
      graduationYear: str(e.graduationYear),
      ...(str(e.gpa) ? { gpa: str(e.gpa) } : {}),
      ...(str(e.description) ? { description: str(e.description) } : {}),
    }));
}

function normalizeCertifications(raw?: Certification[]): Certification[] {
  return arr(raw).filter((c) => str(c.name));
}

function normalizeLanguages(raw?: Language[]): Language[] {
  return arr(raw).filter((l) => str(l.name));
}

function normalizeProjects(raw?: Project[]): Project[] {
  return arr(raw)
    .filter((p) => str(p.name))
    .map((p) => ({
      ...p,
      description: str(p.description),
      technologies: arr(p.technologies).filter(Boolean),
      achievements: cleanTextLines(p.achievements),
      ...(str(p.githubUrl) ? { githubUrl: str(p.githubUrl) } : {}),
    }));
}

function normalizeInitiatives(raw?: Initiative[]): Initiative[] {
  return arr(raw)
    .filter((i) => str(i.name))
    .map((i) => ({
      ...i,
      description: str(i.description),
      achievements: cleanTextLines(i.achievements),
      ...(str(i.organization) ? { organization: str(i.organization) } : {}),
      ...(str(i.period) ? { period: str(i.period) } : {}),
      ...(str(i.link) ? { link: str(i.link) } : {}),
    }));
}

export function normalizeResumeBasic(source: ResumeBasicSource): Pick<
  ResumeData,
  | "locale"
  | "personal"
  | "summary"
  | "experience"
  | "skills"
  | "education"
  | "certifications"
  | "languages"
> {
  return {
    locale: source.locale ?? DEFAULT_LOCALE,
    personal: normalizePersonal(source.personal),
    summary: str(source.summary),
    experience: normalizeExperience(source.experience),
    skills: normalizeSkills(source.skills),
    education: normalizeEducation(source.education),
    certifications: normalizeCertifications(source.certifications),
    languages: normalizeLanguages(source.languages),
  };
}

export function normalizeResumeAdvanced(source: ResumeAdvancedSource = resumeAdvanced) {
  const display = source.display ?? resumeAdvanced.display ?? DEFAULT_DISPLAY;
  return {
    projects: normalizeProjects(source.projects),
    initiatives: normalizeInitiatives(source.initiatives),
    display: {
      showSkillProgressBars: display.showSkillProgressBars ?? DEFAULT_DISPLAY.showSkillProgressBars,
      showLanguageProgressBars:
        display.showLanguageProgressBars ?? DEFAULT_DISPLAY.showLanguageProgressBars,
      visibleSections: {
        ...DEFAULT_DISPLAY.visibleSections,
        ...(display.visibleSections ?? {}),
      },
    },
  };
}

export function buildNormalizedResume(
  basic: ResumeBasicSource,
  advanced: ResumeAdvancedSource = resumeAdvanced
): ResumeData {
  const b = normalizeResumeBasic(basic);
  const a = normalizeResumeAdvanced(advanced);

  return {
    version: "1.0.0",
    locale: b.locale,
    personal: b.personal,
    summary: b.summary,
    experience: b.experience,
    skills: b.skills ?? EMPTY_SKILLS,
    education: b.education,
    certifications: b.certifications,
    languages: b.languages,
    projects: a.projects,
    initiatives: a.initiatives,
  };
}

/** Có nội dung để hiển thị section — trống thì ẩn dù visibleSections = true */
export function hasSectionContent(data: ResumeData, sectionId: SectionId): boolean {
  switch (sectionId) {
    case "summary":
      return Boolean(data.summary?.trim());
    case "experience":
      return data.experience.length > 0;
    case "skills": {
      const s = data.skills;
      return (
        s.technical.length +
          s.soft.length +
          s.tools.length +
          s.infrastructure.length +
          s.management.length >
        0
      );
    }
    case "education":
      return data.education.length > 0;
    case "certifications":
      return data.certifications.length > 0;
    case "projects":
      return data.projects.length > 0;
    case "initiatives":
      return data.initiatives.length > 0;
    case "languages":
      return data.languages.length > 0;
    default:
      return true;
  }
}

export function filterSectionsToRender(
  order: SectionId[],
  data: ResumeData,
  visible: Record<SectionId, boolean>
): SectionId[] {
  return order.filter(
    (id) => (visible[id] ?? true) && hasSectionContent(data, id)
  );
}
