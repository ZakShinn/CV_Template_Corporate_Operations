"use client";

import { useState } from "react";
import { Sun, Moon, Download, Printer, FileText, Sparkles, LayoutTemplate } from "lucide-react";
import { useCVStore } from "@/store/cv-store";
import { exportToPDF, printCV } from "@/lib/export-pdf";
import { exportToDOCX } from "@/lib/export-docx";
import { generateAISummary } from "@/lib/ai-summary";
import { appConfig } from "@/config/app";
import { ui, toolbarOptions } from "@/config/ui";
import { cn } from "@/lib/utils";
import type { CVLayout, CVVariant, AccentColor, Locale, CVTheme } from "@/types/resume";

interface EditorToolbarProps {
  cvRef: React.RefObject<HTMLElement | null>;
}

export function EditorToolbar({ cvRef }: EditorToolbarProps) {
  const { resume, settings, setSettings, updateSummary } = useCVStore();
  const [exporting, setExporting] = useState(false);

  const handlePDF = async () => {
    if (!cvRef.current) return;
    setExporting(true);
    try {
      await exportToPDF(
        cvRef.current,
        `${appConfig.export.pdfPrefix}${resume.personal.fullName.replace(/\s+/g, "-").toLowerCase()}.pdf`
      );
    } finally {
      setExporting(false);
    }
  };

  const handleDOCX = async () => {
    setExporting(true);
    try {
      await exportToDOCX(
        resume,
        `${appConfig.export.docxPrefix}${resume.personal.fullName.replace(/\s+/g, "-").toLowerCase()}.docx`
      );
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="no-print sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap items-center gap-3 justify-between">
        <div className="flex items-center gap-2">
          <LayoutTemplate className="h-5 w-5 text-corporate-navy dark:text-slate-300" />
          <span className="font-semibold text-sm text-slate-900 dark:text-slate-100 hidden sm:inline">
            {ui.toolbar.appTitle}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <SelectGroup
            label={ui.toolbar.layout}
            value={settings.layout}
            onChange={(v) => setSettings({ layout: v as CVLayout })}
            options={toolbarOptions.layouts}
          />
          <SelectGroup
            label={ui.toolbar.variant}
            value={settings.variant}
            onChange={(v) => setSettings({ variant: v as CVVariant })}
            options={toolbarOptions.variants}
          />
          <SelectGroup
            label={ui.toolbar.accent}
            value={settings.accent}
            onChange={(v) => setSettings({ accent: v as AccentColor })}
            options={toolbarOptions.accents}
          />
          <SelectGroup
            label={ui.toolbar.language}
            value={settings.locale}
            onChange={(v) => {
              const locale = v as Locale;
              setSettings({ locale });
              useCVStore.setState((s) => ({ resume: { ...s.resume, locale } }));
            }}
            options={toolbarOptions.locales}
          />
          <button
            type="button"
            onClick={() =>
              setSettings({
                theme: (settings.theme === "light" ? "dark" : "light") as CVTheme,
              })
            }
            className="p-2 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            aria-label={ui.toolbar.themeToggle}
          >
            {settings.theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => updateSummary(generateAISummary(resume))}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <Sparkles className="h-3.5 w-3.5" />
            {ui.toolbar.aiSummary}
          </button>
          <button
            type="button"
            onClick={() => setSettings({ showQRCode: !settings.showQRCode })}
            className={cn(
              "px-3 py-1.5 text-xs font-medium rounded-md border transition-colors",
              settings.showQRCode
                ? "border-corporate-navy bg-corporate-navy text-white"
                : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
            )}
          >
            {ui.toolbar.qrCode}
          </button>
          <button
            type="button"
            onClick={printCV}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            title={appConfig.export.printHint}
          >
            <Printer className="h-3.5 w-3.5" />
            {ui.toolbar.print}
          </button>
          <button
            type="button"
            onClick={handlePDF}
            disabled={exporting}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-corporate-navy text-white hover:bg-slate-800 disabled:opacity-50 transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            {exporting ? ui.toolbar.exporting : ui.toolbar.pdf}
          </button>
          <button
            type="button"
            onClick={handleDOCX}
            disabled={exporting}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            {ui.toolbar.docx}
          </button>
        </div>
      </div>
    </div>
  );
}

function SelectGroup({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      aria-label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="text-xs rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-2 py-1.5 text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400"
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
