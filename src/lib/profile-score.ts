import { avatar } from "@/avatar";
import { ui } from "@/config";
import type { ResumeData } from "@/types/resume";

export interface ProfileScoreResult {
  score: number;
  maxScore: number;
  percentage: number;
  tips: string[];
}

const tips = ui.profileScore.tips;

export function calculateProfileStrength(data: ResumeData): ProfileScoreResult {
  let score = 0;
  const tipList: string[] = [];
  const maxScore = 100;

  if (data.personal.fullName) score += 5;
  else tipList.push(tips.fullName);

  if (data.personal.jobTitle) score += 5;
  else tipList.push(tips.jobTitle);

  if (data.personal.contact.email && data.personal.contact.phone) score += 10;
  else tipList.push(tips.contact);

  if (avatar.enabled && avatar.src) score += 5;
  else tipList.push(tips.avatar);

  if (data.summary && data.summary.length >= 120) score += 15;
  else tipList.push(tips.summary);

  if (data.experience.length >= 2) score += 15;
  else tipList.push(tips.experience);

  const hasMetrics = data.experience.some((e) =>
    (e.achievements ?? []).some((a) =>
      /\d+%|\d+\+|[\d,.]+\s*(triệu|tỷ|USD|VNĐ|\$)/i.test(a)
    )
  );
  if (hasMetrics) score += 10;
  else tipList.push(tips.metrics);

  const skillCount =
    (data.skills?.technical?.length ?? 0) +
    (data.skills?.soft?.length ?? 0) +
    (data.skills?.tools?.length ?? 0);
  if (skillCount >= 8) score += 10;
  else tipList.push(tips.skills);

  if (data.education.length >= 1) score += 10;
  else tipList.push(tips.education);

  if (data.certifications.length >= 1) score += 10;
  else tipList.push(tips.certifications);

  if (data.projects.length >= 1) score += 5;
  else tipList.push(tips.projects);

  if (data.languages.length >= 1) score += 5;
  else tipList.push(tips.languages);

  if (data.personal.contact.linkedin) score += 5;

  const percentage = Math.min(100, Math.round((score / maxScore) * 100));

  return { score, maxScore, percentage, tips: tipList.slice(0, 4) };
}
