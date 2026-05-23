"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { sectionTitle } from "@/config/i18n";
import type { CVSettings } from "@/types/resume";

interface SummarySectionProps {
  summary: string;
  settings: CVSettings;
}

export function SummarySection({ summary, settings }: SummarySectionProps) {
  return (
    <section className="cv-section mb-6" aria-labelledby="section-summary">
      <SectionHeading
        id="section-summary"
        title={sectionTitle(settings.locale, "summary")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <p
        className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
        itemProp="description"
      >
        {summary}
      </p>
    </section>
  );
}
