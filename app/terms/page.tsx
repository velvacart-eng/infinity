import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of service for Infinity Techiez, a brand operated by Advanced Vision Software LLC.",
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
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            <p>
              These Terms of Service govern your use of the website and services
              provided by {businessInfo.brandName}, a brand operated by{" "}
              {businessInfo.legalName}.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Use of the website</h2>
            <p>
              You agree to use this website for lawful purposes only and in a way
              that does not infringe the rights of others or restrict their use of
              the site.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Services</h2>
            <p>
              Service availability, scope and pricing are agreed separately in
              writing. Not all services may be available at all times or in all
              locations.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, {businessInfo.legalName}{" "}
              is not liable for indirect, incidental or consequential damages
              arising from the use of this website or our services.
            </p>
            <h2 className="mt-8 text-2xl font-semibold">Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the
              website after changes constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
