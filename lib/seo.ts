import { Metadata } from "next";
import { siteConfig, businessInfo } from "@/lib/config";

export function createMetadata({
  title,
  description,
  path,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = path ? `${businessInfo.siteUrl}${path}` : businessInfo.siteUrl;

  return {
    // Brand suffix is applied by the title template in app/layout.tsx ("%s | Infinity Techiez")
    title,
    description,
    keywords: siteConfig.keywords,
    metadataBase: new URL(businessInfo.siteUrl),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
          },
        },
  };
}
