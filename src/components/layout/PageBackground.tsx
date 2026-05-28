"use client";

import { pageBackground } from "@/color";

/**
 * Nền corporate cho vùng editor — không in ra PDF, không chặn tương tác
 */
export function PageBackground() {
  const light = pageBackground.light;
  const dark = pageBackground.dark;

  const gridLight = `linear-gradient(to right, rgba(${light.gridColor}, ${light.gridOpacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(${light.gridColor}, ${light.gridOpacity}) 1px, transparent 1px)`;
  const gridDark = `linear-gradient(to right, rgba(${dark.gridColor}, ${dark.gridOpacity}) 1px, transparent 1px), linear-gradient(to bottom, rgba(${dark.gridColor}, ${dark.gridOpacity}) 1px, transparent 1px)`;

  return (
    <div
      className="app-page-background pointer-events-none fixed inset-0 -z-10 overflow-hidden no-print"
      aria-hidden
    >
      {/* Light mode */}
      <div className="absolute inset-0 dark:hidden">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(165deg, ${light.baseFrom} 0%, ${light.baseVia} 45%, ${light.baseTo} 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 90% 55% at 50% -15%, rgba(${light.glowTop}, ${light.glowTopOpacity}), transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 50% 45% at 100% 0%, rgba(${light.glowCorner}, ${light.glowCornerOpacity}), transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 45% 40% at 0% 100%, rgba(${light.glowCorner}, ${light.glowCornerOpacity}), transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gridLight,
            backgroundSize: `${light.gridSize}px ${light.gridSize}px`,
            maskImage:
              "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 75% at 50% 40%, black 20%, transparent 75%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Dark mode */}
      <div className="absolute inset-0 hidden dark:block">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(165deg, ${dark.baseFrom} 0%, ${dark.baseVia} 50%, ${dark.baseTo} 100%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 85% 50% at 50% -10%, rgba(${dark.glowTop}, ${dark.glowTopOpacity}), transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 50% at 100% 100%, rgba(${dark.glowCorner}, ${dark.glowCornerOpacity}), transparent 55%)`,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: gridDark,
            backgroundSize: `${dark.gridSize}px ${dark.gridSize}px`,
            maskImage:
              "radial-gradient(ellipse 80% 70% at 50% 45%, black 15%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at 50% 45%, black 15%, transparent 72%)",
          }}
        />
      </div>
    </div>
  );
}
