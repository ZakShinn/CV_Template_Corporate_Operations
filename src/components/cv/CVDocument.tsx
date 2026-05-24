"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { CVHeader } from "./sections/CVHeader";
import { CVSectionRenderer, SIDEBAR_SECTIONS } from "./CVSectionRenderer";
import { OneColumnLayout } from "./layouts/OneColumnLayout";
import { TwoColumnLayout } from "./layouts/TwoColumnLayout";
import { ensureUrl } from "@/lib/utils";
import type { ResumeData, CVSettings, SectionId } from "@/types/resume";

interface CVDocumentProps {
  resume: ResumeData;
  settings: CVSettings;
  className?: string;
}

export const CVDocument = forwardRef<HTMLElement, CVDocumentProps>(
  function CVDocument({ resume, settings, className }, ref) {
    const { layout, theme, variant } = settings;
    const order = settings.sectionOrder;

    const contactUrl =
      resume.personal.contact.linkedin
        ? ensureUrl(resume.personal.contact.linkedin)
        : `mailto:${resume.personal.contact.email}`;

    const renderSection = (id: SectionId) => (
      <CVSectionRenderer key={id} sectionId={id} resume={resume} settings={settings} />
    );

    const orderedSections = order.map(renderSection);

    const isTwoCol = layout === "two-column" && variant !== "executive";

    const sidebarIds = isTwoCol
      ? order.filter((id) => SIDEBAR_SECTIONS.includes(id))
      : [];

    const sidebarContent = isTwoCol ? sidebarIds.map(renderSection) : null;

    return (
      <motion.article
        ref={ref}
        id="cv-document"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={cn(
          "cv-document mx-auto w-full max-w-[210mm] min-h-[297mm]",
          "bg-white dark:bg-slate-900",
          "text-slate-900 dark:text-slate-100",
          "shadow-[0_32px_64px_-24px_rgba(15,23,42,0.2),0_0_0_1px_rgba(15,23,42,0.04)]",
          "rounded-xl ring-1 ring-slate-200/80 dark:ring-slate-700/60",
          "relative overflow-hidden",
          "p-8 sm:p-10 md:p-12",
          "print:shadow-none print:rounded-none print:ring-0 print:p-0 print:max-w-none",
          variant === "executive" && "text-center sm:text-left",
          variant === "minimal" && "p-10",
          variant === "tech-operations" && "font-mono text-[13px] sm:text-sm",
          className
        )}
        data-theme={theme}
        data-variant={variant}
        data-layout={layout}
        lang={resume.locale}
        itemScope
        itemType="https://schema.org/Person"
      >
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-300 via-corporate-navy to-slate-300 dark:from-slate-600 dark:via-slate-400 dark:to-slate-600 print:hidden"
          aria-hidden
        />
        <CVHeader
          personal={resume.personal}
          settings={settings}
          contactUrl={contactUrl}
        />

        {isTwoCol ? (
          <TwoColumnLayout
            variant={variant}
            main={
              <OneColumnLayout>
                {order
                  .filter((id) => !sidebarIds.includes(id))
                  .map(renderSection)}
              </OneColumnLayout>
            }
            sidebar={<OneColumnLayout>{sidebarContent}</OneColumnLayout>}
          />
        ) : (
          <OneColumnLayout>{orderedSections}</OneColumnLayout>
        )}
      </motion.article>
    );
  }
);
