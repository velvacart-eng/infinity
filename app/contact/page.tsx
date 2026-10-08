import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Infinity Techiez",
  description: `Get in touch with ${businessInfo.brandName} to discuss your business IT and technology requirements.`,
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
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Get in Touch</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Contact information</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We will use the information you provide only to respond to your
                inquiry.
              </p>
              <div className="mt-8 space-y-5 text-sm text-muted-foreground">
                {businessInfo.email && (
                  <p className="rounded-xl border border-border/60 bg-card p-4">
                    <strong className="block text-xs font-semibold uppercase tracking-wide text-foreground">Email</strong>
                    <span className="mt-1 block">{businessInfo.email}</span>
                  </p>
                )}
                {businessInfo.phone && (
                  <p className="rounded-xl border border-border/60 bg-card p-4">
                    <strong className="block text-xs font-semibold uppercase tracking-wide text-foreground">Phone</strong>
                    <span className="mt-1 block">{businessInfo.phone}</span>
                  </p>
                )}
                {businessInfo.address && (
                  <p className="rounded-xl border border-border/60 bg-card p-4">
                    <strong className="block text-xs font-semibold uppercase tracking-wide text-foreground">Address</strong>
                    <span className="mt-1 block">{businessInfo.address}</span>
                  </p>
                )}
                {businessInfo.hours && (
                  <p className="rounded-xl border border-border/60 bg-card p-4">
                    <strong className="block text-xs font-semibold uppercase tracking-wide text-foreground">Hours</strong>
                    <span className="mt-1 block">{businessInfo.hours}</span>
                  </p>
                )}
              </div>

              <div className="mt-10 grid gap-5">
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="text-h3 font-semibold">What happens next</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    After you submit the form, we review your requirements and follow up
                    with questions or a recommended next step. We do not share your
                    information with third parties for marketing purposes.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="text-h3 font-semibold">What to include</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A brief description of your business, the technology challenge or
                    service you are interested in, and any relevant timelines help us
                    respond with a more useful answer.
                  </p>
                </div>
                <div className="rounded-xl border border-border/60 bg-card p-5">
                  <h3 className="text-h3 font-semibold">Response expectations</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We aim to respond to business inquiries promptly during standard
                    business hours. Response times and availability for ongoing clients
                    are defined in each service agreement.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-10 lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
