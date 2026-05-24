"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { CVVariant } from "@/types/resume";

interface TwoColumnLayoutProps {
  main: ReactNode;
  sidebar: ReactNode;
  variant: CVVariant;
}

/** Layout hai cột chuẩn vận hành: sidebar trái (skills, certs), nội dung chính phải */
export function TwoColumnLayout({ main, sidebar, variant }: TwoColumnLayoutProps) {
  return (
    <div
      className={cn(
        "grid gap-8",
        "grid-cols-1 lg:grid-cols-[260px_1fr]",
        variant === "executive" && "lg:grid-cols-1",
        "print:grid-cols-[220px_1fr] print:gap-6"
      )}
    >
      {variant !== "executive" && (
        <aside
          className={cn(
            "min-w-0 space-y-0 order-2 lg:order-1",
            "lg:border-r lg:pr-8 border-slate-200 dark:border-slate-700",
            "lg:bg-gradient-to-b lg:from-slate-50/80 lg:to-transparent dark:lg:from-slate-800/40",
            "print:border-r print:pr-6"
          )}
          aria-label="Sidebar sections"
        >
          {sidebar}
        </aside>
      )}
      <div className="min-w-0 space-y-0 order-1 lg:order-2">{main}</div>
    </div>
  );
}
