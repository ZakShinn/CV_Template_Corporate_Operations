import type { CVSettings, Locale, SectionId } from "@/types/resume";
import { sidebarSectionIds } from "@/resume";

/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH TRANG WEB
 *  • basic    — tên site, footer, ngôn ngữ
 *  • advanced — layout CV, theme, bật/tắt tính năng editor
 *  Hướng dẫn: src/huongdan.md
 * ═══════════════════════════════════════════════════════════════
 */

export const configBasic = {
  appName: "CV — Võ Hoàng Hải Nghĩa",
  description:
    "Corporate Operations Specialist — Vận hành hệ thống, hạ tầng CNTT và chuyển đổi số doanh nghiệp.",
  footer:
    "Mẫu CV Vận hành Doanh nghiệp · Tối ưu ATS · Khuyên dùng In (Ctrl+P) để xuất PDF có thể chọn chữ",
  htmlLang: "vi",
  defaultLocale: "vi" as Locale,
  siteUrl: "https://corporate-ops-cv.example.com",
  version: "1.0.0",
  export: {
    pdfPrefix: "cv-",
    docxPrefix: "cv-",
    printHint:
      "In (Ctrl+P → Lưu PDF) giữ văn bản có thể chọn — tốt nhất cho ATS",
  },
};

export { configSeo } from "./config-seo";

export const configFeatures = {
  showToolbar: true,
  showSidebar: true,
  showFooter: true,
  showPageBackground: true,
  enableThemeToggle: true,
  enableLayoutSwitcher: true,
  enableVariantSwitcher: true,
  enableAccentSwitcher: true,
  enableLocaleSwitcher: true,
  enableAISummary: true,
  enableSectionReorder: true,
  enableProfileScore: true,
  enableQRCode: false,
  enablePrint: true,
  enablePdfExport: true,
  enableDocxExport: true,
};

const defaultSectionOrder: SectionId[] = [
  "summary",
  "experience",
  "skills",
  "education",
  "certifications",
  "projects",
  "initiatives",
  "languages",
];

export const configAdvanced = {
  cv: {
    layout: "two-column",
    variant: "default",
    theme: "light",
    accent: "navy",
    sectionOrder: [...defaultSectionOrder],
  } satisfies Pick<
    CVSettings,
    "layout" | "variant" | "theme" | "accent" | "sectionOrder"
  >,
  features: configFeatures,
};

export const defaultCVSettings: CVSettings = {
  layout: configAdvanced.cv.layout,
  variant: configAdvanced.cv.variant,
  theme: configAdvanced.cv.theme,
  accent: configAdvanced.cv.accent,
  locale: configBasic.defaultLocale,
  sectionOrder: [...configAdvanced.cv.sectionOrder],
  showQRCode: configFeatures.enableQRCode,
  showProfileScore: configFeatures.enableProfileScore,
};

export { sidebarSectionIds, defaultSectionOrder };

/** Gộp cấu hình (tương thích code cũ: appConfig) */
export const appConfig = {
  name: configBasic.appName,
  description: configBasic.description,
  footer: configBasic.footer,
  htmlLang: configBasic.htmlLang,
  defaultLocale: configBasic.defaultLocale,
  siteUrl: configBasic.siteUrl,
  version: configBasic.version,
  export: configBasic.export,
};

/** Nhãn section CV */
export const sectionLabels: Record<Locale, Record<string, string>> = {
  vi: {
    professionalSummary: "Tóm tắt năng lực",
    workExperience: "Kinh nghiệm làm việc",
    skills: "Kỹ năng",
    technicalSkills: "Quản lý Vận hành & Hạ tầng Doanh nghiệp",
    softSkills: "Kỹ năng mềm",
    toolsPlatforms: "Hệ thống & Công nghệ",
    infrastructure: "Tự động hóa & Chuyển đổi số",
    management: "Thiết kế & Truyền thông Nội bộ",
    education: "Học vấn",
    certifications: "Chứng chỉ",
    projects: "Dự án",
    initiatives: "Đề án & Chương trình",
    languages: "Ngôn ngữ",
    responsibilities: "Trách nhiệm chính",
    achievements: "Thành tựu nổi bật",
    technologies: "Công nghệ sử dụng",
    profileStrength: "Độ hoàn thiện hồ sơ",
    present: "Hiện tại",
    gpa: "Điểm TB",
    educationPeriod: "Thời gian",
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
    initiatives: "Programs & Initiatives",
    languages: "Languages",
    responsibilities: "Key Responsibilities",
    achievements: "Key Achievements",
    technologies: "Technologies",
    profileStrength: "Profile Strength",
    present: "Present",
    gpa: "GPA",
    educationPeriod: "Period",
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
    initiatives: "プログラム・施策",
    languages: "言語",
    responsibilities: "主な業務",
    achievements: "主な実績",
    technologies: "技術",
    profileStrength: "プロフィール完成度",
    present: "現在",
    gpa: "GPA",
    educationPeriod: "期間",
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
  initiatives: "initiatives",
  languages: "languages",
};

export function t(locale: Locale, key: string): string {
  const pack = sectionLabels[locale] ?? sectionLabels[configBasic.defaultLocale];
  return pack[key] ?? sectionLabels.vi[key] ?? key;
}

export function sectionTitle(locale: Locale, id: SectionId): string {
  return t(locale, sectionKeyMap[id]);
}

export const ui = {
  toolbar: {
    appTitle: "CV Vận hành Doanh nghiệp",
    layout: "Bố cục",
    layoutOneCol: "1 cột",
    layoutTwoCol: "2 cột",
    variant: "Phiên bản",
    accent: "Màu nhấn",
    language: "Ngôn ngữ CV",
    themeToggle: "Đổi giao diện sáng/tối",
    aiSummary: "Tóm tắt AI",
    qrCode: "Mã QR",
    print: "In",
    pdf: "Xuất PDF",
    docx: "Xuất DOCX",
    exporting: "Đang xuất…",
  },
  variants: {
    default: "Mặc định",
    executive: "Điều hành (Executive)",
    minimal: "Tối giản",
    "tech-operations": "Vận hành Kỹ thuật",
  },
  accents: {
    navy: "Xanh navy",
    blue: "Xanh dương",
    slate: "Xám slate",
    emerald: "Xanh ngọc",
  },
  locales: {
    vi: "Tiếng Việt",
    en: "English",
    ja: "日本語",
  },
  sidebar: {
    sectionOrder: "Thứ tự mục",
    summaryPreview: "Xem trước tóm tắt",
    showProfileScore: "Hiển thị điểm hoàn thiện",
  },
  profileScore: {
    tips: {
      fullName: "Thêm họ tên đầy đủ",
      jobTitle: "Thêm chức danh công việc",
      contact: "Bổ sung đầy đủ thông tin liên hệ",
      avatar: "Thêm ảnh đại diện chuyên nghiệp",
      summary: "Mở rộng tóm tắt (tối thiểu 120 ký tự)",
      experience: "Thêm ít nhất 2 kinh nghiệm làm việc",
      metrics: "Bổ sung thành tựu có số liệu (%, +, VNĐ/USD)",
      skills: "Thêm nhiều kỹ năng theo từng nhóm",
      education: "Thêm thông tin học vấn",
      certifications: "Thêm chứng chỉ",
      projects: "Thêm ít nhất một dự án",
      languages: "Thêm ngôn ngữ",
    },
  },
  export: {
    docxSections: {
      summary: "Tóm tắt chuyên môn",
      experience: "Kinh nghiệm làm việc",
      skills: "Kỹ năng",
      education: "Học vấn",
      technical: "Kỹ thuật",
      soft: "Mềm",
      tools: "Công cụ",
      infrastructure: "Hạ tầng",
      management: "Quản lý",
    },
  },
} as const;

export const toolbarOptions = {
  layouts: [
    { value: "one-column" as const, label: ui.toolbar.layoutOneCol },
    { value: "two-column" as const, label: ui.toolbar.layoutTwoCol },
  ],
  variants: [
    { value: "default" as const, label: ui.variants.default },
    { value: "executive" as const, label: ui.variants.executive },
    { value: "minimal" as const, label: ui.variants.minimal },
    { value: "tech-operations" as const, label: ui.variants["tech-operations"] },
  ],
  accents: [
    { value: "navy" as const, label: ui.accents.navy },
    { value: "blue" as const, label: ui.accents.blue },
    { value: "slate" as const, label: ui.accents.slate },
    { value: "emerald" as const, label: ui.accents.emerald },
  ],
  locales: [
    { value: "vi" as const, label: ui.locales.vi },
    { value: "en" as const, label: ui.locales.en },
    { value: "ja" as const, label: ui.locales.ja },
  ],
};
