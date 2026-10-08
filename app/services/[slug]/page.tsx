import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ServicePageTemplate } from "@/components/service-page-template";
import { ServiceSchema, FAQPageSchema } from "@/components/structured-data";
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
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

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

  return (
    <>
      <ServiceSchema
        name={service.seoTitle}
        description={service.description}
        path={`/services/${service.slug}`}
      />
      <FAQPageSchema items={service.faqs} />
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: service.title, href: `/services/${service.slug}` },
          ]}
        />
      </div>
      <ServicePageTemplate service={service} />
    </>
  );
}
