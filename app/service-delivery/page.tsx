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
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p>
              {businessInfo.brandName} follows a structured approach to service
              delivery so clients understand what to expect at each stage.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">1. Discovery</h2>
            <p>
              We start by understanding your business, existing technology and the
              outcomes you need. This may involve questionnaires, interviews and
              reviews of current systems.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">2. Proposal</h2>
            <p>
              We provide a clear proposal or statement of work describing scope,
              deliverables, timelines and pricing before work begins.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">3. Implementation</h2>
            <p>
              We implement the agreed solution with minimal disruption to your
              operations, communicating progress throughout the process.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">4. Handover and support</h2>
            <p>
              After delivery, we provide documentation, training if needed and
              ongoing support according to the agreed service level.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Service levels</h2>
            <p>
              Support response times and availability are defined in each client
              agreement. Standard business hours apply unless an extended support
              plan is in place.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
