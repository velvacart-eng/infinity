import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { CTAButton } from "@/components/cta-button";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Business Communication Solutions",
  description:
    "Professional business email, domain management and DNS solutions that keep your company connected, reachable and protected against spoofing.",
  path: "/solutions/business-communication",
});

const included = [
  {
    title: "Domain-based business email",
    description:
      "Set up professional email addresses using your company domain so every message reinforces your brand.",
  },
  {
    title: "Domain registration and DNS management",
    description:
      "Select, register and configure domains with the DNS records needed for email, websites and third-party services.",
  },
  {
    title: "Email authentication",
    description:
      "Configure SPF, DKIM and DMARC records to improve deliverability and reduce the risk of spoofing and phishing.",
  },
  {
    title: "Migration and onboarding",
    description:
      "Move mailboxes, calendars and contacts from existing providers while minimizing disruption to your team.",
  },
  {
    title: "Ongoing administration",
    description:
      "Manage accounts, aliases, distribution groups and permissions as your team changes.",
  },
];

const scenarios = [
  {
    title: "Launching a new business",
    description:
      "You need professional email addresses and a domain before you start communicating with customers and partners.",
  },
  {
    title: "Moving away from personal email",
    description:
      "Your team is still using personal addresses and you want a consistent, company-controlled email environment.",
  },
  {
    title: "Rebranding or renaming",
    description:
      "You are changing company or product names and need new domains, aliases and email routing.",
  },
  {
    title: "Email deliverability issues",
    description:
      "Messages are landing in spam folders or you have seen suspicious messages sent from your domain.",
  },
];

const related = services.filter((s) => s.slug === "business-email" || s.slug === "domains-dns");

export default function BusinessCommunicationSolutionPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: "Business Communication", href: "/solutions/business-communication" },
          ]}
        />
      </div>

      <PageHero
        title="Business Communication Solutions"
        description="Professional email, domain management and DNS services that keep your business connected, credible and easy to reach."
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Overview</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Business communication is built on reliable email and a properly managed domain.
              When customers, partners or suppliers cannot reach you, or when your messages look
              unprofessional, it affects how your business is perceived and how smoothly
              operations run.
            </p>
            <p>
              This solution combines business email setup with domain and DNS management so your
              company has a consistent identity, secure authentication and a platform that can
              grow with your team. {businessInfo.brandName} helps you choose the right services,
              connect them correctly and manage them over time.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-h2 font-semibold tracking-tight">What this solution covers</h2>
              <p className="mt-3 text-muted-foreground">
                We tailor the scope to your business, but typical work includes:
              </p>
            </div>
            <ul className="space-y-5 lg:col-span-2">
              {included.map((item) => (
                <li key={item.title} className="flex items-start gap-3 border-b border-border pb-5 last:border-0">
                  <CheckCircle className="mt-1 h-4 w-4 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <div>
                    <span className="font-medium text-foreground">{item.title}</span>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Common business scenarios"
            description="Situations where this solution is most useful."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {scenarios.map((scenario) => (
              <div key={scenario.title} className="rounded-lg border bg-card p-5">
                <h3 className="text-h3 font-semibold">{scenario.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How we approach communication projects"
            description="A practical process from discovery to delivery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Assess", description: "Review current email, domains and DNS to identify gaps." },
              { step: "02", title: "Design", description: "Plan mailbox structure, domain strategy and authentication." },
              { step: "03", title: "Implement", description: "Configure email, DNS records and migration timing." },
              { step: "04", title: "Verify", description: "Test deliverability, authentication and client access." },
            ].map((item) => (
              <div key={item.step} className="border-t-2 border-primary/30 pt-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-h3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Related services"
            description="Explore the individual services that make up this solution."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-brand-muted py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Improve your business communication</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your current email and domain setup and we can recommend a practical next step.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-accent-dark transition-colors hover:text-brand-accent"
            >
              View all services
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
