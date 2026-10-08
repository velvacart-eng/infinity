import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { services } from "@/lib/services-data";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Business IT Services",
  description:
    "Explore business IT services from Infinity Techiez: email, domains, hosting, cloud, infrastructure, cybersecurity, backup and managed IT.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      </div>
      <PageHero
        title="Business IT Services"
        description="A modular set of technology services designed to help businesses stay connected, productive and secure. Add, remove or scale services as your needs change."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core services"
            description="Services we deliver to help businesses operate reliably and securely."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
      <section className="border-y bg-brand-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight">
            Need help choosing the right service?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us about your business and we can recommend a practical starting point.
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
