"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { sectionTitle, t } from "@/config";
import type { CVSettings, Education } from "@/types/resume";

interface EducationSectionProps {
  education: Education[];
  settings: CVSettings;
}

export function EducationSection({ education, settings }: EducationSectionProps) {
  if (!education?.length) return null;

  return (
    <section className="cv-section mb-6" aria-labelledby="section-education">
      <SectionHeading
        id="section-education"
        title={sectionTitle(settings.locale, "education")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div className="space-y-4">
        {education.map((edu) => (
          <article
            key={edu.id}
            className="border-l-2 border-slate-200 dark:border-slate-700 pl-3"
            itemScope
            itemType="https://schema.org/EducationalOccupationalCredential"
          >
            <h3
              className="text-sm font-semibold text-slate-900 dark:text-slate-100"
              itemProp="recognizedBy"
            >
              {edu.university}
            </h3>
            {(edu.degree || edu.major) && (
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {[edu.degree, edu.major && `Chuyên ngành: ${edu.major}`]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            )}
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-0.5">
              {edu.graduationYear && (
                <>
                  <span className="font-medium text-slate-600 dark:text-slate-400">
                    {t(settings.locale, "educationPeriod")}:{" "}
                  </span>
                  <time itemProp="validFrom">{edu.graduationYear}</time>
                </>
              )}
              {edu.gpa && (
                <>
                  {" · "}
                  {t(settings.locale, "gpa")}: {edu.gpa}
                </>
              )}
            </p>
            {edu.description ? (
              <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400 mt-1.5">
                {edu.description}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
