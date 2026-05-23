"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { cn, accentClasses } from "@/lib/utils";
import { sectionTitle } from "@/config/i18n";
import type { CVSettings, Language } from "@/types/resume";

interface LanguagesSectionProps {
  languages: Language[];
  settings: CVSettings;
}

export function LanguagesSection({ languages, settings }: LanguagesSectionProps) {
  const colors = accentClasses(settings.accent, settings.theme);
  const showBars = settings.variant !== "minimal";

  return (
    <section className="cv-section mb-6" aria-labelledby="section-languages">
      <SectionHeading
        id="section-languages"
        title={sectionTitle(settings.locale, "languages")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <ul className="space-y-3">
        {languages.map((lang) => (
          <li key={lang.id}>
            <div className="flex justify-between text-sm mb-1">
              <span className="font-medium text-slate-800 dark:text-slate-200">
                {lang.name}
              </span>
              <span className="text-xs text-slate-500">{lang.level}</span>
            </div>
            {showBars && lang.proficiency != null && (
              <div className="cv-skill-bar">
                <div
                  className={cn("cv-skill-bar-fill", colors.bar)}
                  style={{ width: `${lang.proficiency}%` }}
                  role="progressbar"
                  aria-valuenow={lang.proficiency}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.name} proficiency`}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
