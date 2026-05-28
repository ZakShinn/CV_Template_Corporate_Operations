/**
 * Font trang web — hướng dẫn: src/huongdan.md (mục font)
 * Đồng bộ với next/font trong app/layout.tsx
 */
export const font = {
  /** Tên font Google Fonts (phải khớp import trong layout.tsx) */
  googleFamily: "Inter",
  subsets: ["latin", "vietnamese"] as const,
  variable: "--font-inter",
  /** Font dự phòng trong CSS */
  fallbacks: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
} as const;

export function getFontCssBlock(): string {
  return [
    ":root {",
    `  --font-sans: var(${font.variable}), ${font.fallbacks.join(", ")};`,
    "}",
  ].join("\n");
}
