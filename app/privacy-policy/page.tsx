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
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p>
              {businessInfo.brandName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a brand operated by{" "}
              {businessInfo.legalName}. This Privacy Policy describes how we
              collect, use and protect information in connection with our
              website and services.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Information we collect</h2>
            <p>
              We collect information you provide directly, such as name,
              company, email, phone and service interests, when you complete a
              contact or service request form.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">How we use information</h2>
            <p>
              We use the information we collect to respond to inquiries,
              evaluate service needs, communicate with you and improve our
              services.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">How we protect information</h2>
            <p>
              We apply reasonable administrative, technical and physical
              safeguards to protect information. However, no system is
              completely secure.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Contact us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us
              through the information on our Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
