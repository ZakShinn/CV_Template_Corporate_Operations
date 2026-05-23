"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { CVVariant } from "@/types/resume";

interface TwoColumnLayoutProps {
  main: ReactNode;
  sidebar: ReactNode;
  variant: CVVariant;
}

export function TwoColumnLayout({ main, sidebar, variant }: TwoColumnLayoutProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        "grid-cols-1 lg:grid-cols-[1fr_280px]",
        variant === "executive" && "lg:grid-cols-1",
        "print:grid-cols-[1fr_240px] print:gap-6"
      )}
    >
      <div className="min-w-0 space-y-0">{main}</div>
      {variant !== "executive" && (
        <aside
          className="min-w-0 space-y-0 lg:border-l lg:pl-8 border-slate-200 dark:border-slate-700 print:border-l print:pl-6"
          aria-label="Sidebar sections"
        >
          {sidebar}
        </aside>
      )}
    </div>
  );
}
