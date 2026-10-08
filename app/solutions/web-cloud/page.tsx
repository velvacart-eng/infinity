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

const related = services.filter((s) => s.slug === "web-hosting" || s.slug === "cloud-services");

export default function WebCloudSolutionPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: "Web & Cloud", href: "/solutions/web-cloud" },
          ]}
        />
      </div>

      <PageHero
        title="Web & Cloud Solutions"
        description="Hosting, cloud services and online infrastructure that keep your business website, applications and data accessible, secure and ready to scale."
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Overview</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
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
            title="How we approach web and cloud projects"
            description="A practical process from discovery to delivery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Review", description: "Assess current hosting, cloud usage and performance needs." },
              { step: "02", title: "Recommend", description: "Identify platforms and configurations that fit your budget and goals." },
              { step: "03", title: "Deploy", description: "Set up hosting, DNS, cloud services and security basics." },
              { step: "04", title: "Optimize", description: "Monitor performance, adjust resources and document the environment." },
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
          <h2 className="text-h2 font-semibold tracking-tight">Strengthen your web and cloud infrastructure</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your website or cloud environment and we can recommend a practical next step.
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
