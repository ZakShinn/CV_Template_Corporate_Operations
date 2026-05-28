"use client";

import { calculateProfileStrength } from "@/lib/profile-score";
import { t } from "@/config";
import type { ResumeData, Locale } from "@/types/resume";

interface ProfileScoreCardProps {
  resume: ResumeData;
  locale: Locale;
}

export function ProfileScoreCard({ resume, locale }: ProfileScoreCardProps) {
  const { percentage, tips } = calculateProfileStrength(resume);

  return (
    <div className="rounded-lg border border-slate-200/80 dark:border-slate-700/80 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {t(locale, "profileStrength")}
        </span>
        <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
          {percentage}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <div
          className="h-full rounded-full bg-corporate-navy dark:bg-slate-400 transition-all duration-700"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {tips.length > 0 && (
        <ul className="mt-3 space-y-1 text-xs text-slate-500 dark:text-slate-400">
          {tips.map((tip) => (
            <li key={tip}>• {tip}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
