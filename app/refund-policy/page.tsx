import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Refund Policy",
  description:
    "Refund policy for services provided by Infinity Techiez, a brand operated by Advanced Vision Software LLC.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Refund Policy", href: "/refund-policy" }]} />
      </div>
      <PageHero
        title="Refund Policy"
        description="Our approach to refunds and service credits."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p>
              {businessInfo.brandName}, a brand operated by{" "}
              {businessInfo.legalName}, aims to deliver services as agreed with
              each client. This refund policy outlines how we handle refund
              requests.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Service fees</h2>
            <p>
              Fees for one-time projects and recurring services are agreed in
              writing before work begins. Details are included in the service
              agreement or statement of work.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Refund requests</h2>
            <p>
              Refund requests are reviewed on a case-by-case basis. We consider
              factors such as the services already delivered, the reason for the
              request and the terms of the applicable agreement.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Third-party costs</h2>
            <p>
              Costs paid to third-party providers such as domain registrars,
              hosting platforms or cloud providers are generally non-refundable
              according to those providers&apos; policies.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Contact us</h2>
            <p>
              To discuss a refund or billing concern, please contact us through the
              information on our Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
