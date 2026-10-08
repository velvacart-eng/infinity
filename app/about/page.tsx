import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { CheckCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "About Infinity Techiez",
  description: `${businessInfo.brandName} is a brand operated by ${businessInfo.legalName}, helping businesses manage essential IT and technology services.`,
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Who We Are</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Built for the technology behind modern businesses.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {businessInfo.brandName} is a brand operated by {businessInfo.legalName}.
                We provide business IT services and technology solutions to organizations
                that need dependable communication, infrastructure, security and ongoing
                technology management.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our focus is on practical delivery, clear communication and responsible
                technology practices. We do not promise guarantees we cannot support, and
                we do not claim partnerships or certifications that are not in place.
              </p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">What We Do</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">A practical portfolio of business technology.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
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
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Engagement</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">How we engage with clients</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We begin by understanding the business requirement, then recommend a
                practical scope and implementation approach. Work is delivered in
                clearly defined stages with regular communication, and we document
                what is configured so the environment remains manageable over time.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Clients can engage us for one-time projects, ongoing administration
                or a combination of both. Service levels and response expectations
                are defined in each client agreement based on the scope of work.
              </p>
            </div>
            <div className="rounded-2xl border border-border/60 bg-card p-6 md:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Approach</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Our approach</h2>
              <ul className="mt-5 space-y-3">
                {approach.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Technology Areas</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Areas of technology</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We support businesses across the core technology areas that keep
                operations running.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {technologyAreas.map((area) => (
                <li key={area} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                  <span className="text-sm text-foreground">{area}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">Why Us</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Why businesses work with us</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We keep technology decisions practical and aligned with business
                needs. Our clients value clear communication, reliable delivery
                and a service model that does not require building a large
                internal IT team.
              </p>
            </div>
            <ul className="grid gap-4">
              {[
                "Modular services that scale with your business",
                "Plain-language explanations and transparent scope",
                "Security-conscious, responsible technology practices",
                "Ongoing administration and technology management options",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl border border-border/60 bg-card p-4">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.18),transparent_40%)]" />
        <div className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight text-white">Let&apos;s Talk</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us what your business needs help with and our team can review
            your requirements.
          </p>
          <div className="mt-8">
            <CTAButton
              href="/contact"
              size="lg"
              showArrow
              className="rounded-full bg-brand-accent-bright text-white hover:bg-brand-accent-soft hover:text-brand-accent"
            >
              Talk to Us
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
