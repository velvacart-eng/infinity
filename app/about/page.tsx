import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { siteImages } from "@/lib/images";
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
        gradient
      />

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <FadeIn direction="right">
              <div className="relative">
                <Image
                  src={siteImages.team.src}
                  alt={siteImages.team.alt}
                  width={600}
                  height={450}
                  className="rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-primary to-brand-violet" />
              </div>
            </FadeIn>
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Who We Are</span>
              <h2 className="mt-3 text-h1 font-bold tracking-tight">Built for the technology behind modern businesses.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {businessInfo.brandName} is a brand operated by {businessInfo.legalName}.
                We provide business IT services and technology solutions to organizations
                that need dependable communication, infrastructure, security and ongoing
                technology management.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our focus is on practical delivery, clear communication and responsible
                technology practices. We do not promise outcomes we cannot deliver, and
                we do not claim partnerships or certifications that are not in place.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Engagement</span>
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
            </FadeIn>
            <StaggerContainer className="rounded-3xl border border-border/60 bg-card p-7 md:p-9" staggerDelay={0.08}>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Approach</span>
              <h3 className="mt-3 text-h2 font-bold tracking-tight">Our approach</h3>
              <ul className="mt-6 space-y-4">
                {approach.map((item) => (
                  <StaggerItem key={item}>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  </StaggerItem>
                ))}
              </ul>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Technology Areas</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Areas of technology</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We help businesses across the core technology areas that keep
                operations running.
              </p>
            </FadeIn>
            <StaggerContainer className="grid gap-4 sm:grid-cols-2" staggerDelay={0.08}>
              {technologyAreas.map((area) => (
                <StaggerItem key={area}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/20">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Why Us</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">Why businesses work with us</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                We keep technology decisions practical and aligned with business
                needs. Our clients value clear communication, reliable delivery
                and a service model that does not require building a large
                internal IT team.
              </p>
            </FadeIn>
            <StaggerContainer className="grid gap-4" staggerDelay={0.08}>
              {[
                "Modular services that scale with your business",
                "Plain-language explanations and transparent scope",
                "Security-conscious, responsible technology practices",
                "Ongoing administration and technology management options",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/20">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                    <span className="text-foreground">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-ink py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">Let&apos;s Talk</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us what your business needs help with and our team can review
            your requirements.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
