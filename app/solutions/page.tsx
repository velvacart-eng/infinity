import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { FeatureCard } from "@/components/feature-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import {
  Building2,
  Cloud,
  Mail,
  Shield,
  Server,
  Settings,
} from "lucide-react";
import { createMetadata } from "@/lib/seo";

const solutions = [
  {
    title: "Small Business IT",
    description:
      "Technology foundations for growing businesses: reliable email, domains, hosting and manageable IT support.",
    icon: Building2,
  },
  {
    title: "Business Communication",
    description:
      "Professional email, domain-based identities and collaboration tools that keep teams connected.",
    icon: Mail,
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Cloud services, hosting, servers and networking configured to support business operations.",
    icon: Cloud,
  },
  {
    title: "Security & Continuity",
    description:
      "Cybersecurity reviews, access controls, backup strategies and recovery planning to reduce business risk.",
    icon: Shield,
  },
  {
    title: "Managed Technology",
    description:
      "Ongoing administration and technology management for businesses without a large internal IT team.",
    icon: Settings,
  },
  {
    title: "Infrastructure Scale-Up",
    description:
      "Servers, networks and cloud resources scaled to the stage and workload requirements of your business.",
    icon: Server,
  },
];

export const metadata = createMetadata({
  title: "Business Technology Solutions",
  description:
    "Explore business technology solutions from Infinity Techiez: small business IT, communication, cloud, security, continuity and managed technology.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />
      </div>
      <PageHero
        title="Business Technology Solutions"
        description="Technology configurations organized by common business needs. Each solution combines the right services to help your business operate reliably and securely."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Solutions by business need"
            description="Practical technology configurations for small businesses, communication, cloud infrastructure, security and ongoing management."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <FeatureCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/contact" showArrow>
              Discuss your requirements
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
