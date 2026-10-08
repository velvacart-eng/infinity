import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { ServiceHeroVisual } from "@/components/service-hero-visual";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { Service } from "@/types";
import { getServiceBySlug } from "@/lib/services-data";
import { landingPages } from "@/lib/landing-pages-data";

const categoryLabels: Record<string, string> = {
  "business-email": "Communication",
  "domains-dns": "Infrastructure",
  "web-hosting": "Web & Cloud",
  "cloud-services": "Web & Cloud",
  "it-infrastructure": "Infrastructure",
  cybersecurity: "Security",
  "backup-recovery": "Continuity",
  "it-management": "Management",
};

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedServices = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  const category = categoryLabels[service.slug] || "Business IT";

  const relatedGuides = landingPages.filter((page) =>
    page.relatedServices.includes(service.slug)
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-background py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.08),transparent_45%)]" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="up" className="order-2 lg:order-1">
              <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-primary">
                {category} / Business IT Services
              </span>
              <h1 className="text-h1 font-bold tracking-tight text-foreground">
                {service.seoTitle}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <CTAButton href="/contact" size="lg" showArrow>
                  Talk to Us
                </CTAButton>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.15} className="order-1 lg:order-2">
              <ServiceHeroVisual icon={service.icon} title={service.title} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              align="left"
              eyebrow="Overview"
              title={`What ${service.title} means for your business`}
              description="A practical look at the service and how it fits into your operations."
              className="mb-8"
            />
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              {service.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What the service includes */}
      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeIn direction="up" className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Scope</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">What this service includes</h2>
              <p className="mt-4 text-muted-foreground">
                We tailor the scope to your business. Typical areas we help with include:
              </p>
            </FadeIn>
            <StaggerContainer className="space-y-5 lg:col-span-8" staggerDelay={0.08}>
              {service.includedServices.map((item) => (
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

      {/* Business benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeIn direction="up" className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Outcomes</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Business benefits</h2>
              <p className="mt-4 text-muted-foreground">How this service can help your operations.</p>
            </FadeIn>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:col-span-8" staggerDelay={0.08}>
              {service.benefits.map((benefit) => (
                <StaggerItem key={benefit}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/20">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="leading-snug font-medium text-foreground">{benefit}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Common business scenarios */}
      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Use Cases"
              title="Common business scenarios"
              description="Situations where businesses typically engage us for this service."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 md:grid-cols-2" staggerDelay={0.08}>
            {service.scenarios.map((scenario) => (
              <StaggerItem key={scenario.title}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="text-h3 font-bold">{scenario.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {scenario.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How the service works */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Process"
              title="How this service works"
              description="A clear, transparent process from first conversation to delivery."
            />
          </FadeIn>
          <div className="relative">
            <div className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((item, index) => (
                <div key={item.step} className="group relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card font-mono text-sm font-bold text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-brand-violet group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-h3 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who this service is for */}
      {service.whoFor && service.whoFor.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <FadeIn direction="up" className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Audience</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">Who this service is for</h2>
                <p className="mt-4 text-muted-foreground">
                  Organizations and situations where this service is most useful.
                </p>
              </FadeIn>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:col-span-8" staggerDelay={0.08}>
                {service.whoFor.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/20">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      )}

      {/* Security / reliability considerations */}
      {service.considerations && service.considerations.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <FadeIn direction="up" className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Responsibility</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">
                  Security and reliability considerations
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Practical measures that should be part of a responsible approach to this service.
                </p>
              </FadeIn>
              <StaggerContainer className="space-y-5 lg:col-span-8" staggerDelay={0.08}>
                {service.considerations.map((item) => (
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
      )}

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              description="Practical answers about this service."
            />
          </FadeIn>
          <div className="mt-8">
            <FAQ items={service.faqs} />
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Explore More"
                title="Related services"
                description="Other business technology services that may be relevant."
              />
            </FadeIn>
            <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
              {relatedServices.map((related) => (
                <StaggerItem key={related.slug}>
                  <ServiceCard service={related} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Service guides */}
      {relatedGuides.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="IT Services"
                title="Detailed service guides"
                description="In-depth guides for specific needs related to this service."
              />
            </FadeIn>
            <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
              {relatedGuides.map((guide) => (
                <StaggerItem key={guide.slug}>
                  <Link
                    href={`/it-services/${guide.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    {guide.providerName && (
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        {guide.providerName}
                      </span>
                    )}
                    <h3 className="mt-3 text-h3 font-bold text-foreground">{guide.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {guide.shortDescription}
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
      )}

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-brand-ink py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">
            Discuss your {service.title.toLowerCase()} needs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us what your business needs help with and we can recommend a practical way forward.
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
