import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { Service } from "@/types";
import { getServiceBySlug } from "@/lib/services-data";

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const relatedServices = service.relatedServices
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <>
      <PageHero title={service.seoTitle} description={service.description} />

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight">Service overview</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {service.overview}
          </p>
        </div>
      </section>

      {/* What the service includes */}
      <section className="border-y bg-brand-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-h2 font-bold tracking-tight">
                What this service includes
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We tailor the scope to your business. Typical areas we help
                with include:
              </p>
            </div>
            <ul className="space-y-4">
              {service.includedServices.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-dark"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business benefits */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Business benefits"
            description="How this service can support your operations."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border bg-card p-6 transition-colors hover:border-primary/20"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent-dark">
                  <CheckCircle className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-4 font-medium leading-snug text-foreground">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common business scenarios */}
      <section className="border-y bg-brand-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common business scenarios"
            description="Situations where businesses typically engage us for this service."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {service.scenarios.map((scenario) => (
              <div
                key={scenario.title}
                className="rounded-xl border bg-card p-6 transition-colors hover:border-primary/20"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {scenario.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
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
            title="How this service works"
            description="A clear, transparent process from first conversation to delivery."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((item) => (
              <div key={item.step} className="relative rounded-xl border bg-card p-6">
                <span className="text-sm font-bold text-brand-accent">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security / reliability considerations */}
      {service.securityConsiderations && service.securityConsiderations.length > 0 && (
        <section className="border-y bg-brand-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
              <div>
                <h2 className="text-h2 font-bold tracking-tight">
                  Security and reliability considerations
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Practical measures that should be part of a responsible
                  approach to this service.
                </p>
              </div>
              <ul className="space-y-4">
                {service.securityConsiderations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-dark"
                      aria-hidden="true"
                    />
                    <span className="text-foreground">{item}</span>
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
            title="Frequently asked questions"
            description="Practical answers about this service."
          />
          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="border-y bg-brand-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Related services"
              description="Other business technology services that may be relevant."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight">
            Discuss your {service.title.toLowerCase()} needs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us what your business needs help with and we can recommend a
            practical way forward.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Our Team
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
