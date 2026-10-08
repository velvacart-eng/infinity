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
    title: `${title} | ${siteConfig.name}`,
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
