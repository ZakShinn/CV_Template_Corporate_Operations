import type { ResumeBasicSource } from "@/types/resume-source";

/**
 * CV — PHẦN CƠ BẢN — Võ Hoàng Hải Nghĩa (Nghĩa ZakShin)
 * Hướng dẫn: src/huongdan.md
 */
export const resumeBasic: ResumeBasicSource = {
  locale: "vi",
  personal: {
    fullName: "Võ Hoàng Hải Nghĩa (Nghĩa ZakShin)",
    jobTitle: "Corporate Operations Specialist",
    tagline:
      "System Operations • Infrastructure Management • Digital Operations",
    contact: {
      phone: "0968 884 946",
      dateOfBirth: "06/09/1996",
      github: "github.com/ZakShinn",
      facebook: "facebook.com/profile.php?id=100006985387032",
      zalo: "zalo.me/0968884946",
    },
  },
  summary: `Chuyên viên vận hành hệ thống và quản trị hạ tầng doanh nghiệp với nhiều năm kinh nghiệm trong lĩnh vực CNTT, quản lý hệ thống mạng, triển khai giải pháp vận hành và tối ưu hóa quy trình nội bộ.

Có kinh nghiệm trực tiếp trong môi trường bệnh viện và giáo dục, phụ trách quản lý hạ tầng công nghệ, hệ thống dữ liệu và vận hành các nền tảng phần mềm phục vụ hoạt động doanh nghiệp. Thế mạnh về xây dựng hệ thống ổn định, bảo mật, tự động hóa cao và hỗ trợ vận hành liên tục.

Ngoài nền tảng kỹ thuật, có khả năng tổ chức công việc, đào tạo đội nhóm, phối hợp đa phòng ban và triển khai các giải pháp số hóa giúp nâng cao hiệu quả vận hành doanh nghiệp.

Yêu thích nghiên cứu Ubuntu Server và kiến trúc Linux; đam mê tự động hóa quy trình và tối ưu hệ thống vận hành. Có kinh nghiệm triển khai và quản lý hệ thống từ quy mô nhỏ đến doanh nghiệp; kết hợp tốt giữa kỹ thuật, vận hành và đào tạo đội nhóm.`,
  experience: [
    {
      id: "exp-1",
      company: "Bệnh viện Đa khoa Vạn An",
      position: "IT Operations Specialist / System Administrator",
      startDate: "2025-01",
      endDate: "Present" as const,
      responsibilities: [
        "Quản lý và vận hành toàn bộ hạ tầng CNTT của bệnh viện",
        "Đảm bảo hệ thống mạng, máy chủ và phần mềm vận hành ổn định liên tục",
        "Phụ trách quản trị dữ liệu và sao lưu hệ thống bệnh án điện tử (EMR)",
        "Thiết lập các giải pháp bảo mật nhằm bảo vệ dữ liệu nội bộ và dữ liệu bệnh nhân",
        "Hỗ trợ xử lý sự cố kỹ thuật và tối ưu quy trình vận hành nội bộ",
        "Phối hợp với các phòng ban triển khai giải pháp công nghệ phục vụ hoạt động khám chữa bệnh",
      ],
    },
    {
      id: "exp-2",
      company: "Trường Cao đẳng Công nghệ và Du lịch",
      position: "Giảng viên CNTT",
      startDate: "2024-01",
      endDate: "Present" as const,
      responsibilities: [
        "Giảng dạy các nội dung liên quan đến công nghệ thông tin và kỹ năng thực hành hệ thống",
        "Hướng dẫn sinh viên về tư duy hệ thống, quản trị mạng và vận hành công nghệ",
        "Tham gia hỗ trợ xây dựng nội dung đào tạo và thực hành thực tế",
        "Hỗ trợ tổ chức các hoạt động học thuật và hướng nghiệp",
      ],
    },
    {
      id: "exp-3",
      company: "Dự án Độc lập & Hoạt động Cộng đồng",
      position: "Operations & Infrastructure Project Lead",
      startDate: "2024-01",
      endDate: "Present" as const,
      responsibilities: [
        "Xây dựng hệ thống tự động backup dữ liệu và giám sát trạng thái thiết bị mạng; cảnh báo qua Telegram",
        "Phát triển giải pháp quản lý VPN nội bộ (WireGuard, Tailscale) cho kết nối từ xa an toàn",
        "Xây dựng dashboard và công cụ web nội bộ hỗ trợ vận hành; tối ưu UI/UX đa thiết bị",
        "Nghiên cứu công cụ xử lý dữ liệu multicast và streaming (IPTV) phục vụ quản lý nội dung số",
      ],
    },
  ],
  skills: {
    technical: [
      { name: "Quản trị hệ thống mạng nội bộ doanh nghiệp" },
      { name: "Vận hành hạ tầng CNTT môi trường bệnh viện" },
      { name: "Quản lý máy chủ Linux / Ubuntu Server" },
      { name: "Thiết lập backup và bảo vệ dữ liệu" },
      { name: "Kiểm soát bảo mật hệ thống và phân quyền truy cập" },
      { name: "Tối ưu hóa quy trình vận hành nội bộ" },
    ],
    tools: [
      { name: "MikroTik RouterOS v7" },
      { name: "VPN: WireGuard, Tailscale" },
      { name: "Cloudflare, DNS Management" },
      { name: "Git / GitHub" },
      { name: "Quản lý hệ thống HIS & EMR" },
    ],
    infrastructure: [
      { name: "Automation scripts hỗ trợ vận hành" },
      { name: "Giám sát hệ thống và cảnh báo tự động" },
      { name: "Dashboard quản lý nội bộ" },
      { name: "Tối ưu quy trình quản trị dữ liệu" },
      { name: "Triển khai ứng dụng web nội bộ" },
    ],
    management: [
      { name: "Adobe Photoshop" },
      { name: "CorelDRAW" },
      { name: "Adobe Illustrator" },
      { name: "Canva" },
      { name: "Thiết kế tài liệu, banner và truyền thông nội bộ" },
    ],
    soft: [
      { name: "Leadership & Team Coordination" },
      { name: "Problem Solving" },
      { name: "Training & Mentoring" },
      { name: "Multi-tasking" },
      { name: "Process Management" },
      { name: "Documentation & Reporting" },
    ],
  },
  education: [
    {
      id: "edu-1",
      university: "Đại học Cần Thơ",
      degree: "Đại học",
      major: "Công nghệ thông tin",
      graduationYear: "2022 – 2024",
      description:
        "Hoàn thiện và nâng cao tư duy hệ thống, thuật toán và các công nghệ phần mềm chuyên sâu.",
    },
    {
      id: "edu-2",
      university: "Trường Cao Đẳng Công Nghệ Ladec",
      degree: "Cao đẳng",
      major: "Công nghệ thông tin",
      graduationYear: "2016 – 2019",
      description:
        "Giữ vai trò Quản lý nhóm thanh niên tham gia các hoạt động phong trào, tình nguyện do trường và tỉnh tổ chức; rèn luyện kỹ năng lãnh đạo (Leadership) và làm việc nhóm.",
    },
    {
      id: "edu-3",
      university: "Trường Cao đẳng Bách Khoa Nam Sài Gòn",
      degree: "Cao đẳng",
      major: "Y Sỹ Đa Khoa",
      graduationYear: "2014 – 2016",
      description:
        "Tích cực tham gia các hoạt động ngoại khóa, xây dựng nền tảng kỹ năng mềm phong phú và tích lũy kiến thức y khoa thực tiễn phục vụ cho công việc tại hệ thống Y tế sau này.",
    },
    {
      id: "edu-4",
      university: "Trường THPT Nguyễn Thông",
      degree: "THPT",
      major: "",
      graduationYear: "2011 – 2014",
      description:
        "Học sinh khối THPT, trải qua những bài học lớn từ cuộc sống để trưởng thành và định hình trách nhiệm cá nhân.",
    },
    {
      id: "edu-5",
      university: "Trường THCS Vĩnh Công",
      degree: "THCS",
      major: "",
      graduationYear: "2007 – 2011",
      description:
        "Hoàn thành chương trình Trung học cơ sở, rèn luyện tính tự lập trước các biến cố gia đình.",
    },
    {
      id: "edu-6",
      university: "Trường TH Vĩnh Công",
      degree: "Tiểu học",
      major: "",
      graduationYear: "2002 – 2007",
      description:
        "Tập trung học tập và bắt đầu hình thành niềm đam mê tự nghiên cứu, tìm tòi những điều yêu thích xung quanh.",
    },
  ],
  certifications: [],
  languages: [
    { id: "lang-1", name: "Tiếng Việt", level: "Bản ngữ", proficiency: 100 },
  ],
};
