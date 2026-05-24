import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { appConfig } from "@/config/app";
import { DEFAULT_AVATAR_SRC } from "@/avatar/config";
import { resumeData } from "@/data/resume";
import { getThemeCssBlock } from "@/color/theme";
import { getFontCssBlock } from "@/font/config";
import { buildPersonJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  metadataBase: new URL(appConfig.siteUrl),
  openGraph: {
    title: appConfig.name,
    description: appConfig.description,
    type: "website",
    url: appConfig.siteUrl,
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: appConfig.name,
    description: appConfig.description,
  },
  robots: { index: true, follow: true },
  icons: {
    icon: DEFAULT_AVATAR_SRC,
    shortcut: DEFAULT_AVATAR_SRC,
    apple: DEFAULT_AVATAR_SRC,
  },
};

const personJsonLd = buildPersonJsonLd({
  name: resumeData.personal.fullName,
  jobTitle: resumeData.personal.jobTitle,
  email: resumeData.personal.contact.email,
  url: resumeData.personal.contact.portfolio,
  address: resumeData.personal.contact.location,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={appConfig.htmlLang} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
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
