"use client";

import type { ResumeData, CVSettings, SectionId } from "@/types/resume";
import { SummarySection } from "./sections/SummarySection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { SkillsSection } from "./sections/SkillsSection";
import { EducationSection } from "./sections/EducationSection";
import { CertificationsSection } from "./sections/CertificationsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { InitiativesSection } from "./sections/InitiativesSection";
import { LanguagesSection } from "./sections/LanguagesSection";

interface CVSectionRendererProps {
  sectionId: SectionId;
  resume: ResumeData;
  settings: CVSettings;
}

export function CVSectionRenderer({
  sectionId,
  resume,
  settings,
}: CVSectionRendererProps) {
  switch (sectionId) {
    case "summary":
      return <SummarySection summary={resume.summary} settings={settings} />;
    case "experience":
      return <ExperienceSection experience={resume.experience} settings={settings} />;
    case "skills":
      return <SkillsSection skills={resume.skills} settings={settings} />;
    case "education":
      return <EducationSection education={resume.education} settings={settings} />;
    case "certifications":
      return (
        <CertificationsSection
          certifications={resume.certifications}
          settings={settings}
        />
      );
    case "projects":
      return <ProjectsSection projects={resume.projects} settings={settings} />;
    case "initiatives":
      return (
        <InitiativesSection initiatives={resume.initiatives} settings={settings} />
      );
    case "languages":
      return <LanguagesSection languages={resume.languages} settings={settings} />;
    default:
      return null;
  }
}

export { sidebarSectionIds as SIDEBAR_SECTIONS } from "@/resume";
