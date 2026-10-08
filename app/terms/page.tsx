import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />
      </div>
      <PageHero
        title="Terms of Service"
        description="The terms that apply to the use of our website and services."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            These Terms of Service govern your use of the website and services
            provided by {businessInfo.brandName}, a brand operated by{" "}
            {businessInfo.legalName}.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Use of the website",
                text: "You agree to use this website for lawful purposes only and in a way that does not infringe the rights of others or restrict their use of the site.",
              },
              {
                title: "Services",
                text: "Service availability, scope and pricing are agreed separately in writing. Not all services may be available at all times or in all locations.",
              },
              {
                title: "Limitation of liability",
                text: `To the fullest extent permitted by law, ${businessInfo.legalName} is not liable for indirect, incidental or consequential damages arising from the use of this website or our services.`,
              },
              {
                title: "Changes to these terms",
                text: "We may update these terms from time to time. Continued use of the website after changes constitutes acceptance of the updated terms.",
              },
              {
                title: "Contact us",
                text: `If you have questions about these Terms of Service, please contact us at ${businessInfo.email || "our Contact page"}.`,
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
