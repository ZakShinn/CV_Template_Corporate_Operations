/**
 * Nền trang web (vùng ngoài khung CV) — chỉnh màu/độ mờ tại đây
 */
export const pageBackground = {
  light: {
    baseFrom: "#f8fafc",
    baseVia: "#f1f5f9",
    baseTo: "#e2e8f0",
    glowTop: "30, 64, 175", // blue-800 RGB
    glowTopOpacity: 0.07,
    glowCorner: "15, 23, 42", // navy
    glowCornerOpacity: 0.05,
    gridColor: "148, 163, 184", // slate-400
    gridOpacity: 0.35,
    gridSize: 32,
  },
  dark: {
    baseFrom: "#020617",
    baseVia: "#0f172a",
    baseTo: "#1e293b",
    glowTop: "59, 130, 246",
    glowTopOpacity: 0.12,
    glowCorner: "148, 163, 184",
    glowCornerOpacity: 0.06,
    gridColor: "51, 65, 85",
    gridOpacity: 0.45,
    gridSize: 32,
  },
} as const;
