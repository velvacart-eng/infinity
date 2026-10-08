import { CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { ServiceHeroVisual } from "@/components/service-hero-visual";
import { Service } from "@/types";
import { getServiceBySlug } from "@/lib/services-data";

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

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-background py-16 md:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.07),transparent_45%)]" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
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
            </div>
            <div className="order-1 lg:order-2">
              <ServiceHeroVisual icon={service.icon} title={service.title} />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>

      {/* What the service includes */}
      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Scope</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">What this service includes</h2>
              <p className="mt-4 text-muted-foreground">
                We tailor the scope to your business. Typical areas we help with include:
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-8">
              {service.includedServices.map((item) => (
                <li key={item.title} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Outcomes</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Business benefits</h2>
              <p className="mt-4 text-muted-foreground">How this service can support your operations.</p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                  <span className="leading-snug text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Common business scenarios */}
      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Use Cases"
            title="Common business scenarios"
            description="Situations where businesses typically engage us for this service."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {service.scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/30"
              >
                <h3 className="text-h3 font-semibold">{scenario.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the service works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Process"
            title="How this service works"
            description="A clear, transparent process from first conversation to delivery."
          />
          <div className="relative">
            <div className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {service.process.map((item) => (
                <div key={item.step} className="group relative">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-card font-mono text-sm font-semibold text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-5 text-h3 font-semibold text-foreground">{item.title}</h3>
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
        <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Audience</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">Who this service is for</h2>
                <p className="mt-4 text-muted-foreground">
                  Organizations and situations where this service is most useful.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
                {service.whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* Security / reliability considerations */}
      {service.considerations && service.considerations.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Responsibility</span>
                <h2 className="mt-3 text-h2 font-bold tracking-tight">
                  Security and reliability considerations
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Practical measures that should be part of a responsible approach to this service.
                </p>
              </div>
              <ul className="space-y-5 lg:col-span-8">
                {service.considerations.map((item) => (
                  <li key={item.title} className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 shadow-sm">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                    <div>
                      <span className="font-semibold text-foreground">{item.title}</span>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently asked questions"
            description="Practical answers about this service."
          />
          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Explore More"
              title="Related services"
              description="Other business technology services that may be relevant."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="relative overflow-hidden bg-brand-navy py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.18),transparent_40%)]" />
        <div className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight text-white">
            Discuss your {service.title.toLowerCase()} needs
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us what your business needs help with and we can recommend a practical way forward.
          </p>
          <div className="mt-8">
            <CTAButton
              href="/contact"
              size="lg"
              showArrow
              className="rounded-full bg-brand-accent-bright text-white hover:bg-brand-accent-soft hover:text-brand-accent"
            >
              Talk to Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
