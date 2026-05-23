import type { CVSettings, SectionId } from "@/types/resume";
import { appConfig } from "./app";

/** Thứ tự section mặc định */
export const defaultSectionOrder: SectionId[] = [
  "summary",
  "experience",
  "skills",
  "education",
  "certifications",
  "projects",
  "languages",
];

/** Cài đặt CV mặc định — chỉnh layout, theme, màu nhấn tại đây */
export const defaultCVSettings: CVSettings = {
  layout: "two-column",
  variant: "default",
  theme: "light",
  accent: "navy",
  locale: appConfig.defaultLocale,
  sectionOrder: [...defaultSectionOrder],
  showQRCode: false,
  showProfileScore: true,
};

/** Section hiển thị ở cột phụ (layout 2 cột) */
export const sidebarSectionIds: SectionId[] = [
  "skills",
  "education",
  "certifications",
  "languages",
];
