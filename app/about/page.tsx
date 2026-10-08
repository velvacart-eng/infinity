import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { FeatureCard } from "@/components/feature-card";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";
import { Target, MessageSquare, Wrench, TrendingUp } from "lucide-react";

export const metadata = createMetadata({
  title: "About Infinity Techiez",
  description:
    "Infinity Techiez is a brand operated by Advanced Vision Software LLC, helping businesses manage essential IT and technology services.",
  path: "/about",
});

const approach = [
  {
    title: "Business First",
    description: "We start with your business objectives before recommending technology.",
    icon: Target,
  },
  {
    title: "Clear Communication",
    description: "We explain options in plain language so you stay in control.",
    icon: MessageSquare,
  },
  {
    title: "Practical Solutions",
    description: "We avoid unnecessary complexity and focus on what works.",
    icon: Wrench,
  },
  {
    title: "Long-Term Thinking",
    description: "We build technology that can grow with your business.",
    icon: TrendingUp,
  },
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-h2 font-bold tracking-tight">What We Do</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {businessInfo.brandName} provides a modular portfolio of business
                technology services, including business email, domains and DNS,
                web hosting, cloud services, IT infrastructure, cybersecurity,
                backup and recovery, and IT management.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our focus is on making these services work together so your
                business has dependable communication, infrastructure and data
                protection.
              </p>
            </div>
            <div>
              <h2 className="text-h2 font-bold tracking-tight">Who We Serve</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We work with small and medium businesses, startups, professional
                services firms, remote teams and growing organizations that need
                reliable technology administration without the overhead of a
                large internal IT department.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We do not claim to serve specific industries unless we have an
                established relationship; we tailor each engagement to the
                client&apos;s environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-h2 font-bold tracking-tight">
            Our Approach
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight">Let&apos;s Talk</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us what your business needs help with and our team can review
            your requirements.
          </p>
          <div className="mt-8">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Our Team
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
