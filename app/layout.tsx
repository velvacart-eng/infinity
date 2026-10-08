import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Analytics } from "@/components/analytics";
import { OrganizationSchema, WebsiteSchema } from "@/components/structured-data";
import { businessInfo, siteConfig } from "@/lib/config";

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Business IT Services & Technology Solutions`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  metadataBase: new URL(businessInfo.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: businessInfo.siteUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={robotoCondensed.variable}>
      <body className="min-h-screen font-sans antialiased">
        <OrganizationSchema />
        <WebsiteSchema />
        <Analytics />
        <SiteHeader />
        <main id="main-content" className="flex-1 pt-[4.5rem] sm:pt-[6.5rem]">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
