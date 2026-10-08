import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTAButton } from "@/components/cta-button";
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
      "Plan and configure wired and wireless networks that support your users, devices and applications.",
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
    title: "Supporting remote work",
    description: "Your team needs secure, reliable access to business systems from outside the office.",
  },
  {
    title: "Connecting cloud and on-premise systems",
    description: "You want on-premise applications and cloud services to work together seamlessly.",
  },
];

const related = services.filter((s) => s.slug === "it-infrastructure" || s.slug === "cloud-services");

export default function InfrastructureSolutionPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: "IT Infrastructure", href: "/solutions/infrastructure" },
          ]}
        />
      </div>

      <PageHero
        title="IT Infrastructure Solutions"
        description="Network, server, systems and connectivity solutions that provide a stable, secure foundation for daily business operations."
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Overview</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
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
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-h2 font-semibold tracking-tight">What this solution covers</h2>
              <p className="mt-3 text-muted-foreground">
                We tailor the scope to your business, but typical work includes:
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-2">
              {included.map((item) => (
                <li key={item.title} className="flex items-start gap-3 border-b border-border pb-5 last:border-0">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-foreground">{item.title}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common business scenarios"
            description="Situations where this solution is most useful."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-lg border bg-card p-5">
                <h3 className="text-h3 font-semibold">{scenario.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How we approach infrastructure projects"
            description="A practical process from discovery to delivery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", description: "Learn how your business uses technology and where the gaps are." },
              { step: "02", title: "Design", description: "Plan the network, hardware and cloud integration that fits your needs." },
              { step: "03", title: "Build", description: "Install, configure and test infrastructure with minimal disruption." },
              { step: "04", title: "Support", description: "Document the environment and provide ongoing administration." },
            ].map((item) => (
              <div key={item.step} className="border-t-2 border-primary/30 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-h3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related services"
            description="Explore the individual services that make up this solution."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Build a stronger technology foundation</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your current infrastructure and we can recommend a practical next step.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-accent-dark transition-colors hover:text-brand-accent"
            >
              View all services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
