import { Cloud } from "lucide-react";
import { SolutionPageTemplate } from "@/components/solution-page-template";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Web & Cloud Solutions",
  description:
    "Web hosting, cloud services and online infrastructure solutions that keep your business website, applications and data accessible and scalable.",
  path: "/solutions/web-cloud",
});

const included = [
  {
    title: "Web hosting selection and setup",
    description:
      "Choose and configure hosting that matches your website traffic, performance and security requirements.",
  },
  {
    title: "Domain and DNS connection",
    description:
      "Point your domain to the right hosting environment with properly configured DNS records.",
  },
  {
    title: "Cloud service configuration",
    description:
      "Set up cloud email, storage, collaboration tools and application platforms to fit your workflow.",
  },
  {
    title: "Migration planning",
    description:
      "Move websites, applications or data to new hosting or cloud environments with minimal downtime.",
  },
  {
    title: "Ongoing monitoring and administration",
    description:
      "Keep hosting and cloud services organized, updated and aligned with business needs.",
  },
];

const scenarios = [
  {
    title: "Launching a new website",
    description: "You need reliable hosting, domain configuration and a deployment plan for a new site.",
  },
  {
    title: "Moving to the cloud",
    description: "You want to reduce on-premise systems by moving email, storage or applications to cloud platforms.",
  },
  {
    title: "Slow or unreliable hosting",
    description: "Your current hosting is affecting site performance or availability and you need a more suitable platform.",
  },
  {
    title: "Scaling online operations",
    description: "Your business is growing and your web or cloud infrastructure needs to grow with it.",
  },
];

const process = [
  { step: "01", title: "Review", description: "Assess current hosting, cloud usage and performance needs." },
  { step: "02", title: "Recommend", description: "Identify platforms and configurations that fit your budget and goals." },
  { step: "03", title: "Deploy", description: "Set up hosting, DNS, cloud services and security basics." },
  { step: "04", title: "Optimize", description: "Monitor performance, adjust resources and document the environment." },
];

const related = services.filter((s) => s.slug === "web-hosting" || s.slug === "cloud-services");

export default function WebCloudSolutionPage() {
  return (
    <SolutionPageTemplate
      title="Web & Cloud Solutions"
      description="Hosting, cloud services and online infrastructure that keep your business website, applications and data accessible, secure and ready to scale."
      breadcrumbLabel="Web & Cloud"
      overview={
        <>
          <p>
            Your website and cloud services are often the public face of your business. They
            need to load quickly, stay available and connect securely to the tools your team uses
            every day. When hosting or cloud configuration is overlooked, performance and
            reliability suffer.
          </p>
          <p>
            {businessInfo.brandName} helps businesses select, configure and manage web hosting
            and cloud services in a way that matches real usage and business goals. We focus on
            practical setups that are easy to maintain and can scale as requirements change.
          </p>
        </>
      }
      included={included}
      scenarios={scenarios}
      process={process}
      related={related}
      ctaTitle="Strengthen your web and cloud infrastructure"
      ctaText="Tell us about your website or cloud environment and we can recommend a practical next step."
      icon={Cloud}
    />
  );
}
