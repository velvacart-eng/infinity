import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Infinity Techiez, a brand operated by Advanced Vision Software LLC.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      </div>
      <PageHero
        title="Privacy Policy"
        description="How we handle information in connection with our business technology services."
      />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a brand operated by{" "}
            {businessInfo.legalName}. This Privacy Policy describes how we collect,
            use and protect information in connection with our website and services.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "Information we collect",
                text: "We collect information you provide directly, such as name, company, email, phone and service interests, when you complete a contact or service request form.",
              },
              {
                title: "How we use information",
                text: "We use the information we collect to respond to inquiries, evaluate service needs, communicate with you and improve our services.",
              },
              {
                title: "How we protect information",
                text: "We apply reasonable administrative, technical and physical safeguards to protect information. However, no system is completely secure.",
              },
              {
                title: "Contact us",
                text: "If you have questions about this Privacy Policy, please contact us through the information on our Contact page.",
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
