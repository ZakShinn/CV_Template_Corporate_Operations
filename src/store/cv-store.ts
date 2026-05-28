import { create } from "zustand";
import { resumeData } from "@/resume";
import { defaultCVSettings } from "@/config";
import type { CVSettings, ResumeData, SectionId } from "@/types/resume";

interface CVStore {
  resume: ResumeData;
  settings: CVSettings;
  setResume: (resume: ResumeData) => void;
  updateSummary: (summary: string) => void;
  setSettings: (partial: Partial<CVSettings>) => void;
  reorderSections: (order: SectionId[]) => void;
  resetToSample: () => void;
}

export const useCVStore = create<CVStore>((set) => ({
  resume: resumeData,
  settings: { ...defaultCVSettings },
  setResume: (resume) => set({ resume }),
  updateSummary: (summary) =>
    set((s) => ({ resume: { ...s.resume, summary } })),
  setSettings: (partial) =>
    set((s) => ({ settings: { ...s.settings, ...partial } })),
  reorderSections: (order) =>
    set((s) => ({ settings: { ...s.settings, sectionOrder: order } })),
  resetToSample: () =>
    set({ resume: resumeData, settings: { ...defaultCVSettings } }),
}));
