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
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Service overview</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {service.overview}
          </p>
        </div>
      </section>

      {/* What the service includes */}
      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-h2 font-semibold tracking-tight">What this service includes</h2>
              <p className="mt-3 text-muted-foreground">
                We tailor the scope to your business. Typical areas we help with include:
              </p>
            </div>
            <ul className="space-y-3 lg:col-span-2">
              {service.includedServices.map((item) => (
                <li key={item} className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Business benefits */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Business benefits"
            description="How this service can support your operations."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3 rounded-lg border p-4">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                <span className="text-sm leading-snug text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common business scenarios */}
      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common business scenarios"
            description="Situations where businesses typically engage us for this service."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {service.scenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-lg border bg-card p-5">
                <h3 className="text-h3 font-semibold">{scenario.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {scenario.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How the service works */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How this service works"
            description="A clear, transparent process from first conversation to delivery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {service.process.map((item) => (
              <div key={item.step} className="border-t-2 border-primary/30 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-h3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security / reliability considerations */}
      {service.securityConsiderations && service.securityConsiderations.length > 0 && (
        <section className="border-y bg-brand-muted py-14 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-h2 font-semibold tracking-tight">
                  Security and reliability considerations
                </h2>
                <p className="mt-3 text-muted-foreground">
                  Practical measures that should be part of a responsible approach to this service.
                </p>
              </div>
              <ul className="space-y-3 lg:col-span-2">
                {service.securityConsiderations.map((item) => (
                  <li key={item} className="flex items-start gap-3 border-b border-border pb-3 last:border-0">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-14 md:py-20">
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
        <section className="border-y bg-brand-muted py-14 md:py-20">
          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
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
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">
            Discuss your {service.title.toLowerCase()} needs
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what your business needs help with and we can recommend a practical way forward.
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
