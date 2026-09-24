import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "./lib/config";
import { pageMetadata } from "./lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  ...pageMetadata({}),
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.afh.name} | ${siteConfig.seo.title}`,
    template: `%s | ${siteConfig.afh.name}`,
  },
  applicationName: siteConfig.afh.name,
  keywords: siteConfig.seo.keywords,
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
