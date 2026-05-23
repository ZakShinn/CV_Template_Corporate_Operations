/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH MÀU — chỉnh tại file này
 *  Hướng dẫn: src/color/HUONG_DAN_DOI_MAU.md
 *  Đồng bộ với tailwind.config.ts
 * ═══════════════════════════════════════════════════════════════
 */

export const corporateColors = {
  navy: "#0f172a",
  blue: "#1e40af",
  slate: "#475569",
  emerald: "#059669",
  muted: "#f8fafc",
  border: "#e2e8f0",
  borderDark: "#334155",
  white: "#ffffff",
  black: "#0f172a",
  gray50: "#f8fafc",
  gray100: "#f1f5f9",
  gray200: "#e2e8f0",
  gray400: "#94a3b8",
  gray500: "#64748b",
  gray600: "#475569",
  gray700: "#334155",
  gray800: "#1e293b",
  gray900: "#0f172a",
} as const;

export type AccentColorKey = keyof typeof accentColorStyles;

/** Class Tailwind theo accent + theme (light/dark) */
export const accentColorStyles = {
  navy: {
    light: {
      text: "text-corporate-navy",
      bg: "bg-slate-100",
      border: "border-slate-300",
      bar: "bg-corporate-navy",
      badge: "bg-slate-100 text-corporate-navy border-slate-300",
    },
    dark: {
      text: "text-slate-200",
      bg: "bg-slate-700",
      border: "border-slate-600",
      bar: "bg-slate-400",
      badge: "bg-slate-700 text-slate-200 border-slate-600",
    },
  },
  blue: {
    light: {
      text: "text-blue-800",
      bg: "bg-blue-50",
      border: "border-blue-200",
      bar: "bg-blue-700",
      badge: "bg-blue-50 text-blue-800 border-blue-200",
    },
    dark: {
      text: "text-blue-300",
      bg: "bg-blue-900/40",
      border: "border-blue-700",
      bar: "bg-blue-400",
      badge: "bg-blue-900/40 text-blue-300 border-blue-700",
    },
  },
  slate: {
    light: {
      text: "text-corporate-slate",
      bg: "bg-slate-100",
      border: "border-slate-300",
      bar: "bg-slate-600",
      badge: "bg-slate-100 text-corporate-slate border-slate-300",
    },
    dark: {
      text: "text-slate-300",
      bg: "bg-slate-800",
      border: "border-slate-600",
      bar: "bg-slate-500",
      badge: "bg-slate-800 text-slate-300 border-slate-600",
    },
  },
  emerald: {
    light: {
      text: "text-emerald-800",
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      bar: "bg-corporate-emerald",
      badge: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    dark: {
      text: "text-emerald-300",
      bg: "bg-emerald-900/30",
      border: "border-emerald-700",
      bar: "bg-emerald-500",
      badge: "bg-emerald-900/30 text-emerald-300 border-emerald-700",
    },
  },
} as const;

/** Biến CSS cho theme sáng/tối */
export const cssVariables = {
  light: {
    cvBg: corporateColors.white,
    cvFg: corporateColors.navy,
    cvMuted: corporateColors.gray500,
    cvBorder: corporateColors.border,
    cvAccent: corporateColors.navy,
  },
  dark: {
    cvBg: corporateColors.navy,
    cvFg: "#f1f5f9",
    cvMuted: corporateColors.gray400,
    cvBorder: corporateColors.borderDark,
    cvAccent: corporateColors.gray400,
  },
} as const;

/** Màu cho Tailwind extend */
export const tailwindCorporateColors = {
  corporate: {
    navy: corporateColors.navy,
    blue: corporateColors.blue,
    slate: corporateColors.slate,
    emerald: corporateColors.emerald,
    muted: corporateColors.muted,
    border: corporateColors.border,
    "border-dark": corporateColors.borderDark,
  },
};

/** Inject biến --cv-* (layout.tsx) */
export function getThemeCssBlock(): string {
  const l = cssVariables.light;
  const d = cssVariables.dark;
  return [
    ":root {",
    `  --cv-bg: ${l.cvBg};`,
    `  --cv-fg: ${l.cvFg};`,
    `  --cv-muted: ${l.cvMuted};`,
    `  --cv-border: ${l.cvBorder};`,
    `  --cv-accent: ${l.cvAccent};`,
    "}",
    ".dark {",
    `  --cv-bg: ${d.cvBg};`,
    `  --cv-fg: ${d.cvFg};`,
    `  --cv-muted: ${d.cvMuted};`,
    `  --cv-border: ${d.cvBorder};`,
    `  --cv-accent: ${d.cvAccent};`,
    "}",
  ].join("\n");
}
