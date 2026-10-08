import Link from "next/link";
import { ArrowRight, Building2, Cloud, Globe, Lock, Mail, Server } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Guides, articles and resources about business IT, cloud, security and technology management from Infinity Techiez.",
  path: "/resources",
});

const categories = [
  { title: "Business IT", description: "Practical guidance for small and growing businesses.", icon: Building2, href: "/services/it-management" },
  { title: "Email", description: "Business email setup, migration and management.", icon: Mail, href: "/services/business-email" },
  { title: "Domains & DNS", description: "Domain registration, DNS records and web presence.", icon: Globe, href: "/services/domains-dns" },
  { title: "Cloud", description: "Cloud services, migration and infrastructure planning.", icon: Cloud, href: "/services/cloud-services" },
  { title: "Security", description: "Security fundamentals, access controls and continuity.", icon: Lock, href: "/services/cybersecurity" },
  { title: "Infrastructure", description: "Servers, networks, hosting and reliability.", icon: Server, href: "/services/it-infrastructure" },
];

const upcomingTopics = [
  {
    title: "Choosing business email for a growing team",
    description: "How to evaluate providers, plan migration and configure authentication records.",
    href: "/services/business-email",
  },
  {
    title: "Understanding domains and DNS",
    description: "A practical overview of domain names, DNS records and how they connect your services.",
    href: "/services/domains-dns",
  },
  {
    title: "Web hosting vs. cloud services",
    description: "When to choose traditional hosting, cloud platforms or a hybrid approach.",
    href: "/solutions/web-cloud",
  },
  {
    title: "Cybersecurity basics for small businesses",
    description: "Essential controls, common threats and how to build a sensible protection strategy.",
    href: "/solutions/security-continuity",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />
      </div>
      <PageHero
        title="Resources"
        description="Practical information about business technology, IT services and digital operations."
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Resource categories"
            description="Browse practical information by topic. Each category links to the related service area where you can learn more about how we help."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="group rounded-lg border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
                  <category.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-h3 font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-accent-dark transition-colors group-hover:text-brand-accent">
                  Explore
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Topics we cover"
            description="Practical guidance aligned to our services and solutions. Full guides will be published as they become available."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {upcomingTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group flex items-start justify-between rounded-lg border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div>
                  <h3 className="text-h3 font-semibold">{topic.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </div>
                <ArrowRight className="ml-4 mt-1 h-4 w-4 shrink-0 text-brand-accent-dark transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Need help with a specific technology challenge?</h2>
          <p className="mt-4 text-muted-foreground">
            Our team can review your requirements and recommend a practical approach. Reach out to start the conversation.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
