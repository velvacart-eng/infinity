import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { landingPages } from "@/lib/landing-pages-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "IT Services",
  description:
    "Focused IT service guides for specific business needs — business email setup, migration, administration, DNS, security and provider-specific configuration.",
  path: "/it-services",
});

export default function LandingIndexPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "IT Services", href: "/it-services" }]} />
      </div>
      <PageHero
        title="IT Services"
        description="Focused service guides for specific business technology needs — from business email setup and migration to provider-specific configuration and administration."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Browse"
              title="Service guides"
              description="Each guide covers a specific service area in detail — what it includes, how we work, and answers to common questions."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {landingPages.map((page) => (
              <StaggerItem key={page.slug}>
                <Link
                  href={`/it-services/${page.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  {page.providerName && (
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {page.providerName}
                    </span>
                  )}
                  <h2 className="mt-3 text-h3 font-bold text-foreground">{page.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {page.shortDescription}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet">
                    View guide
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
