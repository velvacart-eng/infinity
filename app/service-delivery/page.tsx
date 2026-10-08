import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Service Delivery",
  description:
    "How Infinity Techiez delivers business IT services, from onboarding to ongoing support.",
  path: "/service-delivery",
});

export default function ServiceDeliveryPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Service Delivery", href: "/service-delivery" }]} />
      </div>
      <PageHero
        title="Service Delivery"
        description="How we scope, deliver and support business technology services."
      />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName} follows a structured approach to service
            delivery so clients understand what to expect at each stage.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "1. Discovery",
                text: "We start by understanding your business, existing technology and the outcomes you need. This may involve questionnaires, interviews and reviews of current systems.",
              },
              {
                title: "2. Proposal",
                text: "We provide a clear proposal or statement of work describing scope, deliverables, timelines and pricing before work begins.",
              },
              {
                title: "3. Implementation",
                text: "We implement the agreed solution with minimal disruption to your operations, communicating progress throughout the process.",
              },
              {
                title: "4. Handover and support",
                text: "After delivery, we provide documentation, training if needed and ongoing support according to the agreed service level.",
              },
              {
                title: "Service levels",
                text: "Support response times and availability are defined in each client agreement. Standard business hours apply unless an extended support plan is in place.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-h3 font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
