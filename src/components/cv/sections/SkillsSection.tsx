"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { cn, accentClasses } from "@/lib/utils";
import { sectionTitle, t } from "@/config/i18n";
import type { CVSettings, ResumeData } from "@/types/resume";

interface SkillsSectionProps {
  skills: ResumeData["skills"];
  settings: CVSettings;
}

const SKILL_GROUPS = [
  { key: "technical" as const, labelKey: "technicalSkills" },
  { key: "soft" as const, labelKey: "softSkills" },
  { key: "tools" as const, labelKey: "toolsPlatforms" },
  { key: "infrastructure" as const, labelKey: "infrastructure" },
  { key: "management" as const, labelKey: "management" },
];

export function SkillsSection({ skills, settings }: SkillsSectionProps) {
  const colors = accentClasses(settings.accent, settings.theme);
  const showBars =
    settings.variant !== "minimal" && settings.variant !== "executive";
  const isTech = settings.variant === "tech-operations";

  return (
    <section className="cv-section mb-6" aria-labelledby="section-skills">
      <SectionHeading
        id="section-skills"
        title={sectionTitle(settings.locale, "skills")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div className={cn("space-y-4", isTech && "grid sm:grid-cols-2 gap-4 space-y-0")}>
        {SKILL_GROUPS.map(({ key, labelKey }) => {
          const items = skills[key];
          if (!items.length) return null;
          return (
            <div key={key}>
              <h3 className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-2">
                {t(settings.locale, labelKey)}
              </h3>
              {settings.variant === "minimal" ? (
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  {items.map((s) => s.name).join(" · ")}
                </p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span
                      key={skill.name}
                      className={cn(
                        "cv-badge",
                        colors.bg,
                        colors.text,
                        "border",
                        colors.border
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              )}
              {showBars && items.some((s) => s.level != null) && (
                <ul className="mt-3 space-y-2 hidden md:block">
                  {items
                    .filter((s) => s.level != null)
                    .slice(0, 4)
                    .map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between text-xs mb-0.5">
                          <span className="text-slate-600 dark:text-slate-400">
                            {skill.name}
                          </span>
                          <span className="text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="cv-skill-bar">
                          <div
                            className={cn("cv-skill-bar-fill", colors.bar)}
                            style={{ width: `${skill.level}%` }}
                            role="progressbar"
                            aria-valuenow={skill.level}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${skill.name} proficiency`}
                          />
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
