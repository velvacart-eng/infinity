import { MetadataRoute } from "next";
import { businessInfo } from "@/lib/config";
import { services } from "@/lib/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/services",
    "/solutions",
    "/solutions/business-communication",
    "/solutions/web-cloud",
    "/solutions/infrastructure",
    "/solutions/security-continuity",
    "/contact",
    "/resources",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/acceptable-use",
    "/refund-policy",
    "/service-delivery",
    "/data-processing",
    "/email",
    "/domains",
    "/servers",
  ];

  const pages = routes.map((route) => ({
    url: `${businessInfo.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1 : 0.8,
  }));

  const servicePages = services.map((service) => ({
    url: `${businessInfo.siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...pages, ...servicePages];
}
