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
        title="Tell Us About Your Technology Requirement"
        description="Use the form to request information about any of our services. We will review your message and follow up with next steps."
      />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-h3 font-semibold tracking-tight">Contact information</h2>
              <p className="mt-3 text-muted-foreground">
                We will use the information you provide only to respond to your
                inquiry.
              </p>
              <div className="mt-6 space-y-4 text-sm text-muted-foreground">
                {businessInfo.email && (
                  <p>
                    <strong className="block text-foreground">Email</strong>
                    {businessInfo.email}
                  </p>
                )}
                {businessInfo.phone && (
                  <p>
                    <strong className="block text-foreground">Phone</strong>
                    {businessInfo.phone}
                  </p>
                )}
                {businessInfo.address && (
                  <p>
                    <strong className="block text-foreground">Address</strong>
                    {businessInfo.address}
                  </p>
                )}
                {businessInfo.hours && (
                  <p>
                    <strong className="block text-foreground">Hours</strong>
                    {businessInfo.hours}
                  </p>
                )}
              </div>
            </div>
            <div className="rounded-lg border bg-card p-5 sm:p-8 lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
