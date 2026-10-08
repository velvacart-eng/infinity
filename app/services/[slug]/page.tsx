import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { ServiceSchema } from "@/components/structured-data";
import { services, getServiceBySlug } from "@/lib/services-data";
import { createMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return createMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

const processSteps = [
  "Understand your requirements and current environment.",
  "Assess the configuration, risks and gaps.",
  "Implement the service with minimal disruption.",
  "Provide ongoing administration and support as agreed.",
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <ServiceSchema
        name={service.title}
        description={service.description}
        path={`/services/${service.slug}`}
      />
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title, href: `/services/${service.slug}` },
          ]}
        />
      </div>
      <PageHero title={service.title} description={service.description} />

      {/* Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-h2 font-bold tracking-tight">Service overview</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <div className="mt-8">
                <CTAButton href="/contact" showArrow>
                  Discuss this service
                </CTAButton>
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 md:p-8">
              <h3 className="text-xl font-semibold">How we work</h3>
              <ul className="mt-6 space-y-4">
                {processSteps.map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-dark"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="border-y bg-brand-muted/30 py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Related services"
              description="Other business technology services that may complement your needs."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((related) => (
                <ServiceCard key={related.slug} service={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
