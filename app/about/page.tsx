import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { CheckCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "About Infinity Techiez",
  description:
    "Infinity Techiez is a brand operated by Advanced Vision Software LLC, helping businesses manage essential IT and technology services.",
  path: "/about",
});

const approach = [
  "Start with business objectives before recommending technology",
  "Explain options in plain language so clients stay informed",
  "Avoid unnecessary complexity and focus on practical solutions",
  "Plan for long-term manageability, not just immediate setup",
];

const technologyAreas = [
  "Business email and domain management",
  "Web hosting and cloud services",
  "IT infrastructure and connectivity",
  "Cybersecurity and data protection",
  "Backup, recovery and continuity planning",
  "Ongoing IT management and administration",
];

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      </div>
      <PageHero
        title="About Infinity Techiez"
        description={`${businessInfo.brandName} is a brand operated by ${businessInfo.legalName}. We help businesses manage essential IT and technology services through a practical, business-friendly approach.`}
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">What we do</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {businessInfo.brandName} provides a modular portfolio of business
                technology services. We help organizations set up, manage and
                maintain the systems they rely on every day, from business email
                and domains to hosting, cloud services, infrastructure, security,
                backup and ongoing IT administration.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our focus is on making these services work together so your
                business has dependable communication, infrastructure and data
                protection.
              </p>
            </div>
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">Our approach</h2>
              <ul className="mt-4 space-y-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">Areas of technology</h2>
              <p className="mt-4 text-muted-foreground">
                We support businesses across the core technology areas that keep
                operations running.
              </p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {technologyAreas.map((area) => (
                <li key={area} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">Why businesses work with us</h2>
              <p className="mt-4 text-muted-foreground">
                We keep technology decisions practical and aligned with business
                needs. Our clients value clear communication, reliable delivery
                and a service model that does not require building a large
                internal IT team.
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "Modular services that scale with your business",
                "Plain-language explanations and transparent scope",
                "Security-conscious, responsible technology practices",
                "Ongoing administration and technology management options",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Let&apos;s Talk</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us what your business needs help with and our team can review
            your requirements.
          </p>
          <div className="mt-6">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
