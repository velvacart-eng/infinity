import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Globe, Mail, ShieldAlert, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { ServiceCard } from "@/components/service-card";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { LandingPage } from "@/types";
import { getServiceBySlug } from "@/lib/services-data";
import { getLandingPageBySlug } from "@/lib/it-services-pages-data";
import { businessInfo } from "@/lib/config";
import { trackingEvents } from "@/lib/tracking";

interface LandingPageTemplateProps {
  page: LandingPage;
}

export function LandingPageTemplate({ page }: LandingPageTemplateProps) {
  const relatedServices = page.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const relatedLandingPages = page.relatedServices
    .map((slug) => getLandingPageBySlug(slug))
    .filter((p): p is LandingPage => Boolean(p));

  const primaryService = relatedServices[0];

  const category = page.serviceCategory?.toLowerCase() ?? "";
  const HeroIcon = category.includes("domain")
    ? Globe
    : category.includes("security")
      ? ShieldCheck
      : Mail;

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={page.breadcrumbs} />
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border/40 bg-background py-10 md:py-14"
        data-landing-page={page.slug}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-lg shadow-primary/20">
              <HeroIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            {page.eyebrow && (
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-primary">
                {page.eyebrow}
              </p>
            )}
            <h1
              className={`${page.eyebrow ? "mt-3" : "mt-6"} text-h1 font-bold tracking-tight text-foreground`}
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-brand-violet bg-clip-text text-transparent">
                {page.title}
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
              {page.shortDescription}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton
                href="/contact"
                size="lg"
                showArrow
                conversionEvent={trackingEvents.landingPageContactClick}
              >
                Talk to Us
              </CTAButton>
              {primaryService && (
                <Link
                  href={`/services/${primaryService.slug}`}
                  className="group inline-flex items-center gap-1.5 text-sm font-bold text-foreground transition-colors hover:text-primary"
                >
                  Explore {primaryService.title} Services
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Independent provider disclosure */}
      {page.independentDisclosure && (
        <section className="border-b border-border/40 py-6">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3 rounded-xl border border-border/50 bg-muted/40 p-4">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  Independent service provider
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {page.independentDisclosure}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick service summary */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <FadeIn direction="up">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                  Service Overview
                </span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">
                  What this service covers
                </h2>
              </FadeIn>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                {page.intro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            {page.image && (
              <FadeIn direction="left" className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-lg shadow-primary/5">
                  <Image
                    src={page.image.src}
                    alt={page.image.alt}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </FadeIn>
            )}
          </div>
          <FadeIn direction="up">
            <dl className="mt-10 grid gap-6 rounded-2xl border border-border/60 bg-card p-6 sm:grid-cols-2">
              {page.serviceCategory && (
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary">
                    Service category
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    {page.serviceCategory}
                  </dd>
                </div>
              )}
              {page.providerName && (
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary">
                    Provider context
                  </dt>
                  <dd className="mt-1 font-medium text-foreground">
                    Independent assistance for {page.providerName} environments
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-primary">
                  Best suited for
                </dt>
                <dd className="mt-1 font-medium text-foreground">
                  {page.whoItIsFor[0]}
                </dd>
              </div>
              {primaryService && (
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-primary">
                    Core service
                  </dt>
                  <dd className="mt-1">
                    <Link
                      href={`/services/${primaryService.slug}`}
                      className="group inline-flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {primaryService.title}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </dd>
                </div>
              )}
            </dl>
          </FadeIn>
        </div>
      </section>

      {/* What we help with */}
      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Cover"
              title="What we help with"
              description="Practical assistance for the areas that matter most to your business."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.08}>
            {page.whatWeHelpWith.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <h3 className="text-h3 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeIn direction="up" className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Outcomes</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Key benefits</h2>
              <p className="mt-4 text-muted-foreground">
                What you can expect from this service.
              </p>
            </FadeIn>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:col-span-8" staggerDelay={0.08}>
              {page.benefits.map((benefit) => (
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

      {/* Detailed sections */}
      {page.detailedSections && page.detailedSections.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {page.detailedSections.map((section) => (
                <FadeIn key={section.title} direction="up">
                  <h2 className="text-h2 font-bold tracking-tight">{section.title}</h2>
                  <div className="mt-4 space-y-4">
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className="leading-relaxed text-muted-foreground">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Scenarios */}
      {page.scenarios && page.scenarios.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Typical Situations"
                title="Common business scenarios"
                description="Situations where this service is most useful."
              />
            </FadeIn>
            <StaggerContainer className="grid gap-5 md:grid-cols-2" staggerDelay={0.08}>
              {page.scenarios.map((scenario) => (
                <StaggerItem key={scenario.title}>
                  <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/20">
                    <h3 className="text-h3 font-bold text-foreground">{scenario.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {scenario.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      )}

      {/* Technical considerations */}
      {page.technicalConsiderations && page.technicalConsiderations.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <FadeIn direction="up" className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Technical</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">Technical considerations</h2>
                <p className="mt-4 text-muted-foreground">
                  Details that affect reliability, timing and deliverability.
                </p>
              </FadeIn>
              <StaggerContainer className="space-y-5 lg:col-span-8" staggerDelay={0.08}>
                {page.technicalConsiderations.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors hover:border-primary/20">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <span className="font-bold text-foreground">{item.title}</span>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      )}

      {/* Security considerations */}
      {page.securityConsiderations && page.securityConsiderations.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <FadeIn direction="up" className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Security</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">Security considerations</h2>
                <p className="mt-4 text-muted-foreground">
                  Measures that help protect accounts, data and domain reputation.
                </p>
              </FadeIn>
              <StaggerContainer className="space-y-5 lg:col-span-8" staggerDelay={0.08}>
                {page.securityConsiderations.map((item) => (
                  <StaggerItem key={item.title}>
                    <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-colors hover:border-primary/20">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <div>
                        <span className="font-bold text-foreground">{item.title}</span>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {page.process && page.process.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Our Process"
                title="How we work"
                description="A clear, transparent approach from initial review to handover."
              />
            </FadeIn>
            <div className="relative mt-12">
              <div className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
              <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
                {page.process.map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="group relative">
                      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card font-mono text-sm font-bold text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-brand-violet group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                        {item.step}
                      </div>
                      <h3 className="mt-5 text-h3 font-bold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      )}

      {/* Who it is for */}
      {page.whoItIsFor && page.whoItIsFor.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <FadeIn direction="up" className="lg:col-span-4">
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Audience</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">Who this is for</h2>
                <p className="mt-4 text-muted-foreground">
                  Organizations and situations where this service is most useful.
                </p>
              </FadeIn>
              <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:col-span-8" staggerDelay={0.08}>
                {page.whoItIsFor.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex h-full items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/20">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="font-medium text-foreground">{item}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {(relatedServices.length > 0 || relatedLandingPages.length > 0) && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Explore More"
                title="Related services"
                description="Core Infinity Techiez services and related pages."
              />
            </FadeIn>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <StaggerItem key={service.slug}>
                  <ServiceCard service={service} />
                </StaggerItem>
              ))}
              {relatedLandingPages.map((lp) => (
                <StaggerItem key={lp.slug}>
                  <Link
                    href={`/it-services/${lp.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      Related Page
                    </span>
                    <h3 className="mt-3 text-h3 font-bold text-foreground">{lp.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {lp.shortDescription}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {page.faqs.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
          <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <SectionHeading
                eyebrow="Common Questions"
                title="Frequently asked questions"
                description="Practical answers about this service."
                align="left"
              />
            </FadeIn>
            <div className="mt-10">
              <FAQ items={page.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="relative overflow-hidden bg-brand-ink py-12 md:py-16"
        data-landing-page={page.slug}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">{page.ctaTitle}</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">{page.ctaDescription}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton
              href="/contact"
              size="lg"
              showArrow
              conversionEvent={trackingEvents.landingPageContactClick}
            >
              Talk to Us
            </CTAButton>
            {primaryService ? (
              <Link
                href={`/services/${primaryService.slug}`}
                data-conversion={trackingEvents.contactCtaClick}
                className="group inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 transition-colors hover:text-white"
              >
                View {primaryService.title} Services
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ) : (
              <Link
                href={`mailto:${businessInfo.email}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-300 transition-colors hover:text-white"
              >
                Email {businessInfo.email}
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            )}
          </div>
        </FadeIn>
      </section>
    </>
  );
}
