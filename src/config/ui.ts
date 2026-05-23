/**
 * Toàn bộ chữ giao diện editor (Tiếng Việt)
 */
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

/** Tùy chọn dropdown toolbar */
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
