import { appConfig } from "@/config/app";
import type { ResumeData } from "@/types/resume";

/**
 * Dữ liệu CV mẫu — Corporate Operations
 *
 * Hướng dẫn: src/data/HUONG_DAN_NHAP_LIEU.md
 * Ảnh: src/avatar/config.ts · Màu: src/color/theme.ts · Font: src/font/config.ts
 */
export const resumeData: ResumeData = {
  $schema: appConfig.schemaUrl,
  version: appConfig.version,
  locale: "vi",
  personal: {
    fullName: "Nguyễn Minh Anh",
    jobTitle: "Quản lý Vận hành Cao cấp | IT & Vận hành Doanh nghiệp",
    avatar: "",
    contact: {
      email: "minh.anh.nguyen@email.com",
      phone: "+84 90 123 4567",
      linkedin: "linkedin.com/in/minhanh-nguyen",
      github: "github.com/minhanh-ops",
      portfolio: "minhanh.dev",
      location: "TP. Hồ Chí Minh, Việt Nam",
    },
  },
  summary:
    "Nhà quản lý vận hành với hơn 10 năm kinh nghiệm tối ưu hóa IT, vận hành doanh nghiệp và vận hành kỹ thuật trong môi trường tập đoàn. Chuyên gia về quản lý SLA, mở rộng hạ tầng và triển khai chương trình liên phòng ban. Hướng tới các vị trí cao cấp nơi xuất sắc vận hành tạo ra giá trị kinh doanh đo lường được.",
  experience: [
    {
      id: "exp-1",
      company: "GlobalTech Solutions Việt Nam",
      position: "Quản lý Vận hành IT Cao cấp",
      location: "TP. Hồ Chí Minh",
      startDate: "2021-03",
      endDate: "Present",
      responsibilities: [
        "Quản lý đội 18 kỹ sư vận hành phụ trách hạ tầng, hỗ trợ và triển khai",
        "Chịu trách nhiệm mục tiêu SLA doanh nghiệp, xử lý sự cố và quy trình quản lý thay đổi",
        "Phối hợp bảo mật và tuân thủ chuẩn bị SOC 2 và ISO 27001",
      ],
      achievements: [
        "Giảm thời gian downtime hệ thống 35% nhờ giám sát chủ động và tự động hóa runbook",
        "Quản lý hơn 120 endpoint và 40+ workload cloud trên AWS và Azure",
        "Tự động hóa quy trình triển khai, rút ngắn chu kỳ release từ 5 ngày xuống 8 giờ",
        "Đạt uptime 99,97% cho các dịch vụ production quan trọng",
      ],
    },
    {
      id: "exp-2",
      company: "Accenture Digital",
      position: "Trưởng nhóm Vận hành Doanh nghiệp",
      location: "Hà Nội",
      startDate: "2017-06",
      endDate: "2021-02",
      responsibilities: [
        "Điều phối chương trình vận hành cho 12 khách hàng enterprise ngành tài chính",
        "Chuẩn hóa báo cáo, dashboard KPI và truyền thông với ban lãnh đạo",
      ],
      achievements: [
        "Tiết kiệm 2,4 triệu USD/năm thông qua tái cấu trúc quy trình",
        "Cải thiện NPS khách hàng 22 điểm sau chuyển đổi service desk",
        "Dẫn dắt migration 200+ người dùng lên Microsoft 365 không gián đoạn kinh doanh",
      ],
    },
    {
      id: "exp-3",
      company: "IBM Cloud Services",
      position: "Chuyên viên Vận hành Kỹ thuật",
      location: "Đà Nẵng",
      startDate: "2014-01",
      endDate: "2017-05",
      responsibilities: [
        "Hỗ trợ hạ tầng hybrid cloud và xử lý sự cố L2/L3",
        "Duy trì tài liệu runbook, sơ đồ kiến trúc và quy trình DR",
      ],
      achievements: [
        "Xử lý 95% sự cố P1 trong SLA khi trực on-call",
        "Triển khai cảnh báo giám sát giảm MTTR 40%",
      ],
    },
  ],
  skills: {
    technical: [
      { name: "Kiến trúc Cloud", level: 90 },
      { name: "Linux / Windows Server", level: 88 },
      { name: "Mạng (TCP/IP, DNS, VPN)", level: 85 },
      { name: "Script (Python, PowerShell, Bash)", level: 82 },
    ],
    soft: [
      { name: "Quản lý stakeholder", level: 92 },
      { name: "Lãnh đạo liên phòng ban", level: 90 },
      { name: "Hoạch định chiến lược", level: 88 },
      { name: "Đàm phán nhà cung cấp", level: 85 },
    ],
    tools: [
      { name: "ServiceNow", level: 90 },
      { name: "Jira / Confluence", level: 88 },
      { name: "Datadog / Splunk", level: 85 },
      { name: "Terraform / Ansible", level: 80 },
    ],
    infrastructure: [
      { name: "AWS", level: 88 },
      { name: "Azure", level: 85 },
      { name: "Kubernetes", level: 78 },
      { name: "VMware / Hyper-V", level: 82 },
    ],
    management: [
      { name: "ITIL v4", level: 90 },
      { name: "Agile / Scrum", level: 85 },
      { name: "Ngân sách & Nguồn lực", level: 88 },
      { name: "Rủi ro & Tuân thủ", level: 86 },
    ],
  },
  education: [
    {
      id: "edu-1",
      university: "Đại học Bách Khoa TP.HCM",
      degree: "Thạc sĩ Quản trị Kinh doanh",
      major: "Quản trị Công nghệ",
      gpa: "3.8/4.0",
      graduationYear: "2014",
    },
    {
      id: "edu-2",
      university: "Đại học Khoa học Tự nhiên TP.HCM",
      degree: "Cử nhân",
      major: "Hệ thống Thông tin",
      graduationYear: "2012",
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    { id: "cert-2", name: "ITIL 4 Foundation", issuer: "AXELOS", year: "2022" },
    { id: "cert-3", name: "PMP", issuer: "PMI", year: "2021" },
    {
      id: "cert-4",
      name: "Microsoft Azure Administrator",
      issuer: "Microsoft",
      year: "2020",
    },
    { id: "cert-5", name: "CCNA", issuer: "Cisco", year: "2019" },
  ],
  projects: [
    {
      id: "proj-1",
      name: "Nền tảng Tự động hóa Sự cố Doanh nghiệp",
      description:
        "Xây dựng nền tảng nội bộ tích hợp ServiceNow, PagerDuty và Slack cho định tuyến sự cố và theo dõi post-mortem.",
      technologies: ["Python", "AWS Lambda", "API Gateway", "DynamoDB"],
      achievements: [
        "Giảm 60% thời gian xác nhận sự cố (MTTA)",
        "Được 4 đơn vị kinh doanh áp dụng, xử lý 500+ sự kiện/ngày",
      ],
      githubUrl: "github.com/minhanh-ops/incident-automation",
    },
    {
      id: "proj-2",
      name: "Dashboard KPI Vận hành",
      description:
        "Thiết kế dashboard điều hành cho SLA, năng lực và chi phí bằng Power BI và Datadog.",
      technologies: ["Power BI", "Datadog", "SQL", "Azure"],
      achievements: ["Báo cáo hàng tuần cho ban lãnh đạo với dữ liệu gần thời gian thực"],
    },
  ],
  languages: [
    { id: "lang-1", name: "Tiếng Việt", level: "Bản ngữ", proficiency: 100 },
    { id: "lang-2", name: "Tiếng Anh", level: "Thành thạo", proficiency: 90 },
    { id: "lang-3", name: "Tiếng Nhật", level: "Giao tiếp (N3)", proficiency: 55 },
  ],
};

/** Alias tương thích mã cũ */
export const sampleResume = resumeData;
