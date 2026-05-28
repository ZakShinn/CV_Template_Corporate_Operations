"use client";

import { ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn, accentClasses, ensureUrl } from "@/lib/utils";
import { sectionTitle } from "@/config";
import type { CVSettings, Initiative } from "@/types/resume";

interface InitiativesSectionProps {
  initiatives: Initiative[];
  settings: CVSettings;
}

export function InitiativesSection({ initiatives, settings }: InitiativesSectionProps) {
  const colors = accentClasses(settings.accent, settings.theme);
  if (!initiatives?.length) return null;

  return (
    <section className="cv-section mb-6" aria-labelledby="section-initiatives">
      <SectionHeading
        id="section-initiatives"
        title={sectionTitle(settings.locale, "initiatives")}
        theme={settings.theme}
        accent={settings.accent}
        variant={settings.variant}
      />
      <div className="space-y-4">
        {initiatives.map((item) => (
          <article key={item.id}>
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {item.name}
                </h3>
                {(item.organization || item.period) && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {[item.organization, item.period].filter(Boolean).join(" · ")}
                  </p>
                )}
              </div>
              {item.link && (
                <a
                  href={ensureUrl(item.link)}
                  className={cn(
                    "flex items-center gap-1 text-xs shrink-0 hover:underline",
                    colors.text
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                  <ExternalLink className="h-3 w-3" aria-hidden />
                </a>
              )}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.description}</p>
            {item.achievements.length > 0 && (
              <ul className="list-disc list-outside ml-4 mt-2 space-y-0.5 text-sm text-slate-700 dark:text-slate-300">
                {item.achievements.map((a, i) => (
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
