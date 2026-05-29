import { configSections, resolveVisibleSections } from "@/config";
import type { ResumeAdvancedSource } from "@/types/resume-source";

/**
 * CV — PHẦN NÂNG CAO — Võ Hoàng Hải Nghĩa
 * Hướng dẫn: src/huongdan.md
 */
export const resumeAdvanced: ResumeAdvancedSource = {
  projects: [
    {
      id: "proj-1",
      name: "Hệ thống Giám sát & Backup Tự động",
      description:
        "Xây dựng hệ thống tự động backup dữ liệu và giám sát trạng thái thiết bị mạng; tự động gửi cảnh báo và báo cáo qua Telegram.",
      technologies: ["Linux", "Bash/Python", "Telegram Bot API", "Cron"],
      achievements: [
        "Nâng cao khả năng phản ứng sự cố nhờ cảnh báo thời gian thực",
        "Giảm rủi ro mất dữ liệu nhờ lịch sao lưu tự động",
      ],
    },
    {
      id: "proj-2",
      name: "VPN & Remote Access Management",
      description:
        "Phát triển giải pháp quản lý VPN nội bộ giúp kết nối từ xa an toàn cho người dùng doanh nghiệp.",
      technologies: ["WireGuard", "Tailscale", "MikroTik", "Firewall"],
      achievements: [
        "Kết nối từ xa ổn định với kiểm soát truy cập theo vai trò",
      ],
    },
    {
      id: "proj-3",
      name: "Dashboard & Internal Web Tools",
      description:
        "Xây dựng dashboard quản lý và công cụ web nội bộ hỗ trợ vận hành hệ thống; tối ưu UI/UX trên nhiều thiết bị.",
      technologies: ["Web", "API", "Monitoring", "Responsive UI"],
      achievements: [
        "Tập trung hóa thông tin vận hành cho đội IT và quản lý",
      ],
    },
    {
      id: "proj-4",
      name: "IPTV & Data Processing",
      description:
        "Nghiên cứu và phát triển công cụ xử lý dữ liệu multicast và streaming phục vụ quản lý nội dung số.",
      technologies: ["Multicast", "Streaming", "Network Analysis"],
      achievements: [
        "Hỗ trợ giám sát và xử lý luồng nội dung số nội bộ",
      ],
    },
  ],

  initiatives: [],

  display: {
    showSkillProgressBars: false,
    showLanguageProgressBars: false,
    // Ẩn/HIỆN từng mục CV: src/config.ts → configSections.visibleSections
    // (bảng đầy đủ: summary, experience, skills, education, certifications,
    //  projects, initiatives, languages — xem huongdan.md)
  },
};

const defaultDisplay = {
  showSkillProgressBars: false,
  showLanguageProgressBars: false,
};

/** Alias — dùng trong component (thanh %, ẩn mục) */
export const resumeAdvancedDisplay = {
  ...defaultDisplay,
  ...resumeAdvanced.display,
  hideWhenEmpty: configSections.hideWhenEmpty,
  visibleSections: resolveVisibleSections(
    resumeAdvanced.display?.visibleSections
  ),
};
