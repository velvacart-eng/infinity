import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Infinity Techiez",
  description:
    "Get in touch with Infinity Techiez to discuss your business IT and technology requirements.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      </div>
      <PageHero
        title="Let's Talk About Your Technology Needs"
        description="Tell us what your business needs help with and our team can review your requirements."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Send us a message</h2>
              <p className="mt-4 text-muted-foreground">
                Use the form to request information about any of our services.
                We will review your message and follow up with next steps.
              </p>
              <div className="mt-8 space-y-4 text-muted-foreground">
                {businessInfo.email && (
                  <p>
                    <strong className="block text-sm font-medium uppercase tracking-wide text-foreground">
                      Email
                    </strong>
                    {businessInfo.email}
                  </p>
                )}
                {businessInfo.phone && (
                  <p>
                    <strong className="block text-sm font-medium uppercase tracking-wide text-foreground">
                      Phone
                    </strong>
                    {businessInfo.phone}
                  </p>
                )}
                {businessInfo.address && (
                  <p>
                    <strong className="block text-sm font-medium uppercase tracking-wide text-foreground">
                      Address
                    </strong>
                    {businessInfo.address}
                  </p>
                )}
                {businessInfo.hours && (
                  <p>
                    <strong className="block text-sm font-medium uppercase tracking-wide text-foreground">
                      Hours
                    </strong>
                    {businessInfo.hours}
                  </p>
                )}
              </div>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
