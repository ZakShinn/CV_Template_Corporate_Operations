"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { sectionTitle } from "@/config";
import type { CVSettings } from "@/types/resume";

interface SummarySectionProps {
  summary: string;
  settings: CVSettings;
}

export function SummarySection({ summary, settings }: SummarySectionProps) {
  if (!summary?.trim()) return null;

  return (
    <section className="cv-section mb-6" aria-labelledby="section-summary">
      <SectionHeading
        id="section-summary"
        title={sectionTitle(settings.locale, "summary")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div
        className="space-y-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300"
        itemProp="description"
      >
        {summary
          .split(/\n\s*\n/)
          .map((p) => p.trim())
          .filter(Boolean)
          .map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
      </div>
    </section>
  );
}
