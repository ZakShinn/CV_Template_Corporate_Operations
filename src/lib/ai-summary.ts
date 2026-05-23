import type { ResumeData } from "@/types/resume";

export function generateAISummary(data: ResumeData): string {
  const years = estimateYearsExperience(data);
  const firstName = data.personal.fullName.split(" ").slice(-1)[0] || data.personal.fullName;
  const topRole = data.experience[0]?.position ?? data.personal.jobTitle;
  const companies = [...new Set(data.experience.map((e) => e.company))].slice(0, 2);
  const techFocus = data.skills.technical
    .slice(0, 3)
    .map((s) => s.name)
    .join(", ");
  const certHighlight = data.certifications[0]?.name;

  if (data.locale === "vi") {
    return [
      `${firstName} là chuyên gia vận hành${years > 0 ? ` với hơn ${years} năm kinh nghiệm` : ""}`,
      topRole ? `, am hiểu vai trò ${topRole}` : "",
      companies.length ? ` tại ${companies.join(" và ")}` : "",
      techFocus ? `. Thế mạnh cốt lõi gồm ${techFocus}` : "",
      certHighlight ? `, được chứng nhận bởi ${certHighlight}` : "",
      ". Tập trung thúc đẩy xuất sắc vận hành, hiệu suất SLA và triển khai quy mô enterprise với tác động kinh doanh đo lường được.",
    ]
      .filter(Boolean)
      .join("")
      .replace(/\s+/g, " ")
      .trim();
  }

  return [
    `${firstName} is a ${years > 0 ? `${years}+-year` : "seasoned"} operations professional`,
    topRole ? ` with expertise as ${topRole}` : "",
    companies.length ? ` across ${companies.join(" and ")}` : "",
    techFocus ? `. Core competencies include ${techFocus}` : "",
    certHighlight ? `, backed by credentials such as ${certHighlight}` : "",
    ". Focused on operational excellence, SLA performance, and scalable enterprise delivery.",
  ]
    .filter(Boolean)
    .join("")
    .replace(/\s+/g, " ")
    .trim();
}

function estimateYearsExperience(data: ResumeData): number {
  if (!data.experience.length) return 0;
  const dates = data.experience.flatMap((e) => {
    const start = new Date(e.startDate + "-01");
    const end =
      e.endDate === "Present" ? new Date() : new Date(e.endDate + "-01");
    return [start.getFullYear(), end.getFullYear()];
  });
  return Math.max(0, Math.max(...dates) - Math.min(...dates));
}

export function autoCategorizeSkill(
  skillName: string
): "technical" | "soft" | "tools" | "infrastructure" | "management" {
  const lower = skillName.toLowerCase();
  const infra = ["aws", "azure", "gcp", "kubernetes", "docker", "vmware", "linux", "mạng", "network"];
  const tools = ["jira", "servicenow", "confluence", "datadog", "splunk", "terraform", "ansible"];
  const mgmt = ["itil", "agile", "scrum", "pmp", "ngân sách", "budget", "tuân thủ", "compliance", "risk"];
  const soft = ["lãnh đạo", "leadership", "giao tiếp", "stakeholder", "đàm phán", "negotiation", "planning"];

  if (infra.some((k) => lower.includes(k))) return "infrastructure";
  if (tools.some((k) => lower.includes(k))) return "tools";
  if (mgmt.some((k) => lower.includes(k))) return "management";
  if (soft.some((k) => lower.includes(k))) return "soft";
  return "technical";
}
