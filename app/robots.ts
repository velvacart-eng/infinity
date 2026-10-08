import { MetadataRoute } from "next";
import { businessInfo } from "@/lib/config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin"],
    },
    sitemap: `${businessInfo.siteUrl}/sitemap.xml`,
  };
}
