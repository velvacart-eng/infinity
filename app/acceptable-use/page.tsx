import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Acceptable Use Policy",
  description: `Acceptable use policy for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/acceptable-use",
});

export default function AcceptableUsePage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Acceptable Use", href: "/acceptable-use" }]} />
      </div>
      <PageHero
        title="Acceptable Use Policy"
        description="Rules and expectations for using our website and services responsibly."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            This Acceptable Use Policy sets out the rules for using the website and services
            provided by {businessInfo.brandName}, a brand operated by {businessInfo.legalName}.
            By accessing or using the site, you agree to follow this policy.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Lawful use only",
                text: "You may use the website only for lawful purposes. You must not use it to violate any applicable local, state, national or international laws or regulations.",
              },
              {
                title: "Prohibited activities",
                text: "You must not attempt to interfere with the website's security, access systems you are not authorized to use, distribute malware, send spam, harvest data without permission, or use the site to harass, abuse or harm others.",
              },
              {
                title: "Intellectual property",
                text: "All content on this website, including text, graphics, logos and images, is the property of Infinity Techiez or its licensors. You may not reproduce, distribute or create derivative works without permission.",
              },
              {
                title: "Service inquiries",
                text: "Contact forms and inquiry tools are intended for genuine business inquiries. Misuse, automated submissions or false information may result in your messages being ignored or blocked.",
              },
              {
                title: "Changes to this policy",
                text: "We may update this Acceptable Use Policy at any time. Continued use of the website after changes means you accept the updated terms.",
              },
              {
                title: "Contact us",
                text: `If you have questions about this Acceptable Use Policy, please contact us at ${businessInfo.email || "our Contact page"}.`,
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
