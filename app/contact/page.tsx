import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContactForm } from "@/components/contact-form";
import { CTAButton } from "@/components/cta-button";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { siteImages } from "@/lib/images";

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
        title="Let's Talk Technology"
        description="Use the form to request information about any of our services. We will review your message and follow up with next steps."
        gradient
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Get in Touch</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Contact information</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We will use the information you provide only to respond to your
                inquiry.
              </p>

              <div className="mt-8 space-y-4">
                {businessInfo.email && (
                  <a
                    href={`mailto:${businessInfo.email}`}
                    className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wide text-foreground">Email</strong>
                      <span className="mt-1 block text-sm font-medium text-primary group-hover:underline">
                        {businessInfo.email}
                      </span>
                    </div>
                  </a>
                )}
                {businessInfo.phone && (
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wide text-foreground">Phone</strong>
                      <span className="mt-1 block text-sm font-medium text-foreground">{businessInfo.phone}</span>
                    </div>
                  </a>
                )}
                {businessInfo.address && (
                  <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wide text-foreground">Address</strong>
                      <span className="mt-1 block text-sm text-muted-foreground">{businessInfo.address}</span>
                    </div>
                  </div>
                )}
                {businessInfo.hours && (
                  <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-bold uppercase tracking-wide text-foreground">Hours</strong>
                      <span className="mt-1 block text-sm text-muted-foreground">{businessInfo.hours}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-10 overflow-hidden rounded-3xl border border-border/60">
                <Image
                  src={siteImages.contact.src}
                  alt={siteImages.contact.alt}
                  width={500}
                  height={300}
                  className="h-48 w-full object-cover"
                />
                <div className="bg-card p-5">
                  <h3 className="text-h3 font-bold">Ready when you are</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Our team reviews every inquiry and responds with clear next steps.
                  </p>
                  <CTAButton href={`mailto:${businessInfo.email}`} size="lg" showArrow className="mt-5 w-full sm:w-auto">
                    Email {businessInfo.email}
                  </CTAButton>
                </div>
              </div>

              <div className="mt-10 grid gap-5">
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <h3 className="text-h3 font-bold">What happens next</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    After you submit the form, we review your requirements and follow up
                    with questions or a recommended next step. We do not share your
                    information with third parties for marketing purposes.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/60 bg-card p-5">
                  <h3 className="text-h3 font-bold">What to include</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    A brief description of your business, the technology challenge or
                    service you are interested in, and any relevant timelines help us
                    respond with a more useful answer.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-lg shadow-primary/5 sm:p-10 lg:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
