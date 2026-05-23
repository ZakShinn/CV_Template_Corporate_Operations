"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { sectionTitle, t } from "@/config/i18n";
import type { CVSettings, Education } from "@/types/resume";

interface EducationSectionProps {
  education: Education[];
  settings: CVSettings;
}

export function EducationSection({ education, settings }: EducationSectionProps) {
  return (
    <section className="cv-section mb-6" aria-labelledby="section-education">
      <SectionHeading
        id="section-education"
        title={sectionTitle(settings.locale, "education")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div className="space-y-3">
        {education.map((edu) => (
          <article key={edu.id} itemScope itemType="https://schema.org/EducationalOccupationalCredential">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100" itemProp="credentialCategory">
              {edu.degree}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400" itemProp="recognizedBy">
              {edu.university}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
              {edu.major}
              {edu.gpa && ` · ${t(settings.locale, "gpa")}: ${edu.gpa}`}
              {" · "}
              <time itemProp="validFrom">{edu.graduationYear}</time>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
