import Link from "next/link";
import { ArrowRight, Building2, Cloud, Globe, Lock, Mail, Server } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { CTAButton } from "@/components/cta-button";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/motion-wrapper";
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
        gradient
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Browse by Topic"
              title="Resource categories"
              description="Browse practical information by topic. Each category links to the related service area where you can learn more about how we help."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {categories.map((category) => (
              <StaggerItem key={category.title}>
                <ScaleOnHover>
                  <Link
                    href={category.href}
                    className="group block h-full rounded-3xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-brand-violet/10 text-primary transition-colors group-hover:from-primary group-hover:to-brand-violet group-hover:text-white">
                      <category.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-h3 font-bold text-foreground">{category.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Guides"
              title="Topics we cover"
              description="Practical guidance aligned to our services and solutions. Full guides will be published as they become available."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 md:grid-cols-2" staggerDelay={0.08}>
            {upcomingTopics.map((topic) => (
              <StaggerItem key={topic.title}>
                <ScaleOnHover>
                  <Link
                    href={topic.href}
                    className="group flex h-full items-start justify-between rounded-3xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:bg-white hover:shadow-lg hover:shadow-primary/5"
                  >
                    <div>
                      <h3 className="text-h3 font-bold text-foreground">{topic.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                    </div>
                    <ArrowRight className="ml-4 mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-ink py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">Need help with a specific technology challenge?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Our team can review your requirements and recommend a practical approach. Reach out to start the conversation.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
