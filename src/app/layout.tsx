import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { appConfig } from "@/config";
import { resumeData } from "@/resume";
import { AVATAR_PATH } from "@/avatar";
import { getThemeCssBlock } from "@/color";
import { getFontCssBlock } from "@/font";
import { buildPersonJsonLd } from "@/lib/seo";
import { getSearchBlockMetadata, isSearchBlocked } from "@/lib/search-block";
import "./globals.css";

/** Phải khớp src/font.ts — next/font yêu cầu giá trị literal tại đây */
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  variable: "--font-inter",
  display: "swap",
});

const blockIndex = isSearchBlocked();
const searchBlock = getSearchBlockMetadata();

export const metadata: Metadata = {
  title: appConfig.name,
  description: appConfig.description,
  metadataBase: new URL(appConfig.siteUrl),
  ...searchBlock,
  ...(blockIndex
    ? {}
    : {
        robots: { index: true, follow: true },
        openGraph: {
          title: appConfig.name,
          description: appConfig.description,
          type: "website",
          url: appConfig.siteUrl,
          locale: "vi_VN",
        },
      }),
  icons: {
    icon: AVATAR_PATH,
    shortcut: AVATAR_PATH,
    apple: AVATAR_PATH,
  },
};

const personJsonLd = blockIndex
  ? null
  : buildPersonJsonLd({
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
        {personJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
        )}
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
