import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { appConfig } from "@/config/app";
import { getThemeCssBlock } from "@/color/theme";
import { getFontCssBlock } from "@/font/config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter", // khớp fonts.sans.variable trong src/font/config.ts
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
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `${getThemeCssBlock()}\n${getFontCssBlock()}`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans bg-transparent text-slate-900 dark:text-slate-100`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
