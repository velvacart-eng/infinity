import { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-email",
    title: "Business Email",
    shortDescription:
      "Professional email hosting and management for business communication.",
    description:
      "Secure, reliable business email with custom domains, spam protection and management support.",
    icon: "Mail",
  },
  {
    slug: "domains-dns",
    title: "Domains & DNS",
    shortDescription:
      "Domain registration, DNS setup and ongoing record management.",
    description:
      "Register and manage business domains with correct DNS configuration for web, email and cloud services.",
    icon: "Globe",
  },
  {
    slug: "web-hosting",
    title: "Web Hosting",
    shortDescription:
      "Managed hosting for business websites and applications.",
    description:
      "Reliable hosting environments optimized for business sites, with monitoring, updates and support.",
    icon: "Server",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    shortDescription:
      "Cloud consulting, migration and ongoing management.",
    description:
      "Plan, migrate and manage cloud workloads that fit your business operations and budget.",
    icon: "Cloud",
  },
  {
    slug: "it-infrastructure",
    title: "IT Infrastructure",
    shortDescription:
      "Servers, networks and core infrastructure for business operations.",
    description:
      "Design, deploy and maintain the servers, networks and infrastructure your business depends on.",
    icon: "Network",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortDescription:
      "Security reviews, hardening and protective measures for business data.",
    description:
      "Identify risks, apply security controls and help protect your business from threats.",
    icon: "Shield",
  },
  {
    slug: "backup-recovery",
    title: "Backup & Recovery",
    shortDescription:
      "Backup strategies and disaster recovery planning.",
    description:
      "Define backup policies, test recovery procedures and reduce downtime risk for critical systems.",
    icon: "Database",
  },
  {
    slug: "it-management",
    title: "IT Management",
    shortDescription:
      "Managed IT administration and ongoing technology oversight.",
    description:
      "Outsource day-to-day IT administration, support and technology planning to a dedicated team.",
    icon: "Settings",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
