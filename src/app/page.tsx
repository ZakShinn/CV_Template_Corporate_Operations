"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { CVDocument } from "@/components/cv/CVDocument";
import { PageBackground } from "@/components/layout/PageBackground";
import { EditorToolbar } from "@/components/editor/EditorToolbar";
import { EditorSidebar } from "@/components/editor/EditorSidebar";
import { appConfig } from "@/config/app";
import { useCVStore } from "@/store/cv-store";

export default function HomePage() {
  const cvRef = useRef<HTMLElement>(null);
  const { resume, settings } = useCVStore();
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(settings.theme);
  }, [settings.theme, setTheme]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <PageBackground />
      <EditorToolbar cvRef={cvRef} />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full min-w-0 flex justify-center">
            <CVDocument ref={cvRef} resume={resume} settings={settings} />
          </div>
          <EditorSidebar />
        </div>
      </main>

      <footer className="no-print border-t border-slate-200/60 dark:border-slate-700/60 bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        {appConfig.footer}
      </footer>
    </div>
  );
}
