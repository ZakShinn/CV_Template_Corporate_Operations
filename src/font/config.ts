/**
 * ═══════════════════════════════════════════════════════════════
 *  CẤU HÌNH FONT — chỉnh tại file này
 *  Hướng dẫn: src/font/HUONG_DAN_DOI_FONT.md
 * ═══════════════════════════════════════════════════════════════
 */

export const fonts = {
  sans: {
    family: "Inter",
    variable: "--font-inter",
  },
} as const;

export function getFontCssBlock(theme = fonts): string {
  return [
    ":root {",
    `  --font-sans: var(${theme.sans.variable}), "IBM Plex Sans", system-ui, sans-serif;`,
    "}",
  ].join("\n");
}
