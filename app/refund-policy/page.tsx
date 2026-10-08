import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Refund Policy",
  description: `Refund policy for services provided by ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
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
        gradient
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by{" "}
            {businessInfo.legalName}, aims to deliver services as agreed with each
            client. This refund policy outlines how we handle refund requests.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Service fees",
                text: "Fees for one-time projects and recurring services are agreed in writing before work begins. Details are included in the service agreement or statement of work.",
              },
              {
                title: "Refund requests",
                text: "Refund requests are reviewed on a case-by-case basis. We consider factors such as the services already delivered, the reason for the request and the terms of the applicable agreement.",
              },
              {
                title: "Third-party costs",
                text: "Costs paid to third-party providers such as domain registrars, hosting platforms or cloud providers are generally non-refundable according to those providers' policies.",
              },
              {
                title: "Contact us",
                text: `To discuss a refund or billing concern, please contact us at ${businessInfo.email || "our Contact page"}.`,
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
