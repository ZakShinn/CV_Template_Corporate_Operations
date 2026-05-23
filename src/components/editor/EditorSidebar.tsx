"use client";

import { useCVStore } from "@/store/cv-store";
import { ui } from "@/config/ui";
import { ProfileScoreCard } from "./ProfileScoreCard";
import { SectionReorder } from "./SectionReorder";

export function EditorSidebar() {
  const { resume, settings, reorderSections, setSettings } = useCVStore();

  return (
    <aside className="no-print w-full lg:w-72 shrink-0 space-y-4">
      {settings.showProfileScore && (
        <ProfileScoreCard resume={resume} locale={settings.locale} />
      )}

      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-3">
          {ui.sidebar.sectionOrder}
        </h3>
        <SectionReorder
          order={settings.sectionOrder}
          locale={settings.locale}
          onReorder={reorderSections}
        />
      </div>

      <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 p-4">
        <h3 className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
          {ui.sidebar.summaryPreview}
        </h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-6">
          {resume.summary}
        </p>
      </div>

      <label className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer">
        <input
          type="checkbox"
          checked={settings.showProfileScore}
          onChange={(e) => setSettings({ showProfileScore: e.target.checked })}
          className="rounded border-slate-300"
        />
        {ui.sidebar.showProfileScore}
      </label>
    </aside>
  );
}
