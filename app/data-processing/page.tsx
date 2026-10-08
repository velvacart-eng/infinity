import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Data Processing Agreement",
  description: `Data processing information for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/data-processing",
});

export default function DataProcessingPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Data Processing", href: "/data-processing" }]} />
      </div>
      <PageHero
        title="Data Processing Agreement"
        description="How we handle business data in connection with our technology services."
        gradient
      />
      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by {businessInfo.legalName}, may process
            business data when delivering IT services and technology administration. This page
            outlines our general approach to data handling and responsibilities.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Data we may process",
                text: "Depending on the service, we may process business contact information, account details, domain and DNS records, email configuration data, system access information and other technology-related data necessary to deliver agreed services.",
              },
              {
                title: "Purpose of processing",
                text: "We process data only to deliver, manage and improve the technology services described in our agreement with you. We do not sell business data or use it for unrelated marketing.",
              },
              {
                title: "Data security",
                text: "We apply reasonable administrative, technical and physical safeguards to protect data we handle. Specific security measures are agreed based on the nature of the service and your business requirements.",
              },
              {
                title: "Subprocessors and third parties",
                text: "Some services require us to work with third-party providers such as domain registrars, hosting platforms, cloud providers and email services. We coordinate with these providers as needed to deliver services.",
              },
              {
                title: "Data retention and deletion",
                text: "We retain data only as long as needed to provide services or meet legal obligations. When a service ends, we follow agreed procedures for returning or securely deleting data.",
              },
              {
                title: "Your responsibilities",
                text: "You are responsible for providing accurate information, maintaining ownership of your accounts and ensuring you have proper rights to any data you ask us to handle.",
              },
              {
                title: "Contact us",
                text: `If you have questions about data processing, please contact us at ${businessInfo.email || "our Contact page"}.`,
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
