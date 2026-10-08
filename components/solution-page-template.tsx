import Link from "next/link";
import { ArrowRight, CheckCircle, LucideIcon } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTAButton } from "@/components/cta-button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Service } from "@/types";

interface SolutionStep {
  step: string;
  title: string;
  description: string;
}

interface SolutionItem {
  title: string;
  description: string;
}

interface SolutionPageTemplateProps {
  title: string;
  description: string;
  breadcrumbLabel: string;
  overview: React.ReactNode;
  included: SolutionItem[];
  scenarios: SolutionItem[];
  process: SolutionStep[];
  related: Service[];
  ctaTitle: string;
  ctaText: string;
  icon?: LucideIcon;
}

export function SolutionPageTemplate({
  title,
  description,
  breadcrumbLabel,
  overview,
  included,
  scenarios,
  process,
  related,
  ctaTitle,
  ctaText,
  icon: Icon,
}: SolutionPageTemplateProps) {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: breadcrumbLabel, href: `/solutions/${breadcrumbLabel.toLowerCase().replace(/\s+/g, "-")}` },
          ]}
        />
      </div>

      <PageHero
        title={title}
        description={description}
        icon={Icon}
        gradient
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Overview</span>
            <h2 className="mt-3 text-h2 font-bold tracking-tight">How this solution helps your business</h2>
            <div className="mt-5 space-y-5 text-lg leading-relaxed text-muted-foreground">
              {overview}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeIn direction="up" className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Scope</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">What this solution covers</h2>
              <p className="mt-4 text-muted-foreground">We tailor the scope to your business, but typical work includes:</p>
            </FadeIn>
            <StaggerContainer className="space-y-5 lg:col-span-8" staggerDelay={0.08}>
              {included.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors hover:border-primary/20">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <div>
                      <span className="font-bold text-foreground">{item.title}</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Use Cases"
              title="Common business scenarios"
              description="Situations where this solution is most useful."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 md:grid-cols-2" staggerDelay={0.08}>
            {scenarios.map((scenario) => (
              <StaggerItem key={scenario.title}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="text-h3 font-bold">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{scenario.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="How we approach this solution"
              description="A practical process from discovery to delivery."
            />
          </FadeIn>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <div key={item.step} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card font-mono text-sm font-bold text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-brand-violet group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-h3 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Explore More"
              title="Related services"
              description="Explore the individual services that make up this solution."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {related.map((service) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-ink py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">{ctaTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">{ctaText}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-bold text-slate-300 transition-colors hover:text-white"
            >
              View all services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
