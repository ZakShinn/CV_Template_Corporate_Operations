"use client";

import { useRef, useEffect } from "react";
import { useTheme } from "next-themes";
import { CVDocument } from "@/components/cv/CVDocument";
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
    <div className="min-h-screen flex flex-col">
      <EditorToolbar cvRef={cvRef} />

      <main className="flex-1 mx-auto w-full max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1 w-full min-w-0 flex justify-center">
            <CVDocument ref={cvRef} resume={resume} settings={settings} />
          </div>
          <EditorSidebar />
        </div>
      </main>

      <footer className="no-print border-t border-slate-200 dark:border-slate-800 py-6 text-center text-xs text-slate-500">
        {appConfig.footer}
      </footer>
    </div>
  );
}
