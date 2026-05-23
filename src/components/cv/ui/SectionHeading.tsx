"use client";

import { cn, accentClasses } from "@/lib/utils";
import type { AccentColor, CVTheme } from "@/types/resume";

interface SectionHeadingProps {
  title: string;
  theme: CVTheme;
  accent: AccentColor;
  variant?: "default" | "executive" | "minimal" | "tech-operations";
  className?: string;
  id?: string;
}

export function SectionHeading({
  title,
  theme,
  accent,
  variant = "default",
  className,
  id,
}: SectionHeadingProps) {
  const colors = accentClasses(accent, theme);

  if (variant === "minimal") {
    return (
      <h2
        id={id}
        className={cn(
          "cv-section-title mb-3 text-slate-500 dark:text-slate-400",
          className
        )}
      >
        {title}
      </h2>
    );
  }

  if (variant === "executive") {
    return (
      <div className={cn("mb-4", className)}>
        <h2 id={id} className={cn("text-sm font-bold tracking-tight", colors.text)}>
          {title}
        </h2>
        <div className={cn("mt-1.5 h-0.5 w-12", colors.bar)} aria-hidden />
      </div>
    );
  }

  return (
    <h2
      id={id}
      className={cn(
        "cv-section-title mb-4 flex items-center gap-2",
        theme === "dark" ? "text-slate-300" : "text-slate-700",
        className
      )}
    >
      <span className={cn("h-4 w-0.5 rounded-full", colors.bar)} aria-hidden />
      {title}
    </h2>
  );
}
