import { sidebarSectionIds } from "@/config";
import { resumeBasic } from "@/resume-basic";
import { resumeAdvanced, resumeAdvancedDisplay } from "@/resume-advanced";
import {
  buildNormalizedResume,
  filterSectionsToRender,
} from "@/lib/normalize-resume";
import type { ResumeData, SectionId } from "@/types/resume";

export { sidebarSectionIds } from "@/config";

export { resumeBasic } from "@/resume-basic";
export {
  resumeAdvanced,
  resumeAdvancedDisplay,
} from "@/resume-advanced";
export { buildNormalizedResume, hasSectionContent } from "@/lib/normalize-resume";

export function buildResumeData(): ResumeData {
  return buildNormalizedResume(resumeBasic, resumeAdvanced);
}

export const resumeData = buildResumeData();

export function isSectionVisible(sectionId: SectionId): boolean {
  return resumeAdvancedDisplay.visibleSections[sectionId] ?? true;
}

export function filterVisibleSections(
  order: SectionId[],
  data: ResumeData = resumeData
): SectionId[] {
  return filterSectionsToRender(
    order,
    data,
    resumeAdvancedDisplay.visibleSections,
    resumeAdvancedDisplay.hideWhenEmpty
  );
}
