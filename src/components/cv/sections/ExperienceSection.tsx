"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { formatDateRange } from "@/lib/utils";
import { sectionTitle, t } from "@/config/i18n";
import type { CVSettings, WorkExperience } from "@/types/resume";

interface ExperienceSectionProps {
  experience: WorkExperience[];
  settings: CVSettings;
}

export function ExperienceSection({ experience, settings }: ExperienceSectionProps) {
  const showLabels = settings.variant === "tech-operations";

  return (
    <section className="cv-section mb-6" aria-labelledby="section-experience">
      <SectionHeading
        id="section-experience"
        title={sectionTitle(settings.locale, "experience")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div className="space-y-5">
        {experience.map((job) => (
          <article
            key={job.id}
            className="group relative border-l-2 border-slate-200 pl-4 dark:border-slate-700"
            itemScope
            itemType="https://schema.org/OrganizationRole"
          >
            <span
              className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-slate-400 dark:bg-slate-500 ring-2 ring-white dark:ring-slate-900"
              aria-hidden
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3
                  className="text-sm font-semibold text-slate-900 dark:text-slate-100"
                  itemProp="roleName"
                >
                  {job.position}
                </h3>
                <p
                  className="text-sm text-slate-600 dark:text-slate-400"
                  itemProp="organization"
                  itemScope
                  itemType="https://schema.org/Organization"
                >
                  <span itemProp="name">{job.company}</span>
                  {job.location && (
                    <span className="text-slate-400 dark:text-slate-500">
                      {" "}
                      · {job.location}
                    </span>
                  )}
                </p>
              </div>
              <time
                className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap"
                dateTime={`${job.startDate}/${job.endDate}`}
              >
                {formatDateRange(job.startDate, job.endDate, settings.locale)}
              </time>
            </div>

            {job.responsibilities.length > 0 && (
              <div className="mt-2">
                {showLabels && (
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    {t(settings.locale, "responsibilities")}
                  </p>
                )}
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                  {job.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {job.achievements.length > 0 && (
              <div className="mt-2">
                {showLabels && (
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-400 mb-1">
                    {t(settings.locale, "achievements")}
                  </p>
                )}
                <ul className="list-disc list-outside ml-4 space-y-1 text-sm text-slate-800 dark:text-slate-200">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="marker:text-slate-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
