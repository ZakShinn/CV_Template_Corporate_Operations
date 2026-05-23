import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { accentColorStyles } from "@/config/colors";
import { t } from "@/config/i18n";
import type { AccentColor, Locale } from "@/types/resume";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateRange(
  start: string,
  end: string | "Present",
  locale: Locale = "vi"
): string {
  const fmt = (d: string) => {
    const [y, m] = d.split("-");
    const date = new Date(Number(y), Number(m || 1) - 1);
    return date.toLocaleDateString(
      locale === "vi" ? "vi-VN" : locale === "ja" ? "ja-JP" : "en-US",
      { month: "short", year: "numeric" }
    );
  };
  const endLabel = end === "Present" ? t(locale, "present") : fmt(end);
  return `${fmt(start)} — ${endLabel}`;
}

export function accentClasses(accent: AccentColor, theme: "light" | "dark") {
  const styles = accentColorStyles[accent][theme];
  return {
    text: styles.text,
    bg: styles.bg,
    border: styles.border,
    bar: styles.bar,
    badge: styles.badge,
  };
}

export function ensureUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
}
