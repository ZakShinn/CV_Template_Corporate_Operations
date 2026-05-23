"use client";

import { ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn, accentClasses, ensureUrl } from "@/lib/utils";
import { sectionTitle, t } from "@/config/i18n";
import type { CVSettings, Project } from "@/types/resume";

interface ProjectsSectionProps {
  projects: Project[];
  settings: CVSettings;
}

export function ProjectsSection({ projects, settings }: ProjectsSectionProps) {
  const colors = accentClasses(settings.accent, settings.theme);

  return (
    <section className="cv-section mb-6" aria-labelledby="section-projects">
      <SectionHeading
        id="section-projects"
        title={sectionTitle(settings.locale, "projects")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div className="space-y-4">
        {projects.map((project) => (
          <article key={project.id}>
            <div className="flex items-start justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                {project.name}
              </h3>
              {project.githubUrl && (
                <a
                  href={ensureUrl(project.githubUrl)}
                  className={cn(
                    "flex items-center gap-1 text-xs shrink-0 hover:underline",
                    colors.text
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t(settings.locale, "github")}
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {project.description}
            </p>
            <p className="text-xs text-slate-500 mt-1.5">
              <span className="font-medium">{t(settings.locale, "technologies")}: </span>
              {project.technologies.join(", ")}
            </p>
            {project.achievements.length > 0 && (
              <ul className="list-disc list-outside ml-4 mt-2 space-y-0.5 text-sm text-slate-700 dark:text-slate-300">
                {project.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
