import { Network } from "lucide-react";
import { SolutionPageTemplate } from "@/components/solution-page-template";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "IT Infrastructure Solutions",
  description:
    "Network, server, systems and connectivity solutions that provide a stable foundation for business operations.",
  path: "/solutions/infrastructure",
});

const included = [
  {
    title: "Network design and setup",
    description:
      "Plan and configure wired and wireless networks that serve your users, devices and applications.",
  },
  {
    title: "Server and workstation configuration",
    description:
      "Set up physical or virtual servers and workstations aligned with your business applications.",
  },
  {
    title: "Cloud and hybrid integration",
    description:
      "Connect on-premise systems with cloud services for a cohesive operating environment.",
  },
  {
    title: "Connectivity and remote access",
    description:
      "Implement secure remote access and connectivity options for distributed teams.",
  },
  {
    title: "Documentation and maintenance",
    description:
      "Maintain clear documentation and a practical maintenance plan so the environment stays manageable.",
  },
];

const scenarios = [
  {
    title: "Setting up a new office",
    description: "You need a complete network, server and workstation environment for a new location.",
  },
  {
    title: "Upgrading aging equipment",
    description: "Your current servers, switches or workstations are outdated and affecting productivity.",
  },
  {
    title: "Enabling remote work",
    description: "Your team needs secure, reliable access to business systems from outside the office.",
  },
  {
    title: "Connecting cloud and on-premise systems",
    description: "You want on-premise applications and cloud services to work together seamlessly.",
  },
];

const process = [
  { step: "01", title: "Discover", description: "Learn how your business uses technology and where the gaps are." },
  { step: "02", title: "Design", description: "Plan the network, hardware and cloud integration that fits your needs." },
  { step: "03", title: "Build", description: "Install, configure and test infrastructure with minimal disruption." },
  { step: "04", title: "Manage", description: "Document the environment and provide ongoing administration." },
];

const related = services.filter((s) => s.slug === "it-infrastructure" || s.slug === "cloud-services");

export default function InfrastructureSolutionPage() {
  return (
    <SolutionPageTemplate
      title="IT Infrastructure Solutions"
      description="Network, server, systems and connectivity solutions that provide a stable, secure foundation for daily business operations."
      breadcrumbLabel="IT Infrastructure"
      overview={
        <>
          <p>
            Reliable IT infrastructure is the foundation of modern business operations. It
            includes the networks, servers, workstations and connectivity that allow your team to
            access applications, share files and communicate with customers.
          </p>
          <p>
            {businessInfo.brandName} designs, configures and maintains infrastructure that fits
            the size and workflow of your business. Whether you operate from a single office,
            multiple locations or a hybrid environment, we focus on practical setups that are
            stable, secure and easy to manage.
          </p>
        </>
      }
      included={included}
      scenarios={scenarios}
      process={process}
      related={related}
      ctaTitle="Build a stronger technology foundation"
      ctaText="Tell us about your current infrastructure and we can recommend a practical next step."
      icon={Network}
    />
  );
}
