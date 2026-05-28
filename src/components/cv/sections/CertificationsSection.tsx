"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { cn, accentClasses } from "@/lib/utils";
import { sectionTitle } from "@/config";
import type { CVSettings, Certification } from "@/types/resume";

interface CertificationsSectionProps {
  certifications: Certification[];
  settings: CVSettings;
}

export function CertificationsSection({
  certifications,
  settings,
}: CertificationsSectionProps) {
  const colors = accentClasses(settings.accent, settings.theme);
  if (!certifications?.length) return null;

  return (
    <section className="cv-section mb-6" aria-labelledby="section-certifications">
      <SectionHeading
        id="section-certifications"
        title={sectionTitle(settings.locale, "certifications")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <ul className="space-y-2">
        {certifications.map((cert) => (
          <li
            key={cert.id}
            className={cn(
              "flex flex-wrap items-baseline justify-between gap-2 text-sm",
              settings.variant === "minimal" && "border-l-2 pl-3",
              settings.variant === "minimal" && colors.border
            )}
          >
            <span className="font-medium text-slate-800 dark:text-slate-200">
              {cert.name}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {cert.issuer} · {cert.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
