import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { appConfig } from "@/config/app";
import { cssVariables } from "@/config/colors";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={appConfig.htmlLang} suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100`}
        style={
          {
            "--cv-bg": cssVariables.light.cvBg,
            "--cv-fg": cssVariables.light.cvFg,
            "--cv-muted": cssVariables.light.cvMuted,
            "--cv-border": cssVariables.light.cvBorder,
            "--cv-accent": cssVariables.light.cvAccent,
          } as React.CSSProperties
        }
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
