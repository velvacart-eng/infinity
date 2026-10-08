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
  title: "Security & Continuity Solutions",
  description:
    "Cybersecurity, backup and recovery planning to protect business data and keep operations running through disruptions.",
  path: "/solutions/security-continuity",
});

const included = [
  {
    title: "Security assessment and planning",
    description:
      "Review current security posture and identify practical priorities for protection.",
  },
  {
    title: "Access controls and authentication",
    description:
      "Implement strong passwords, multi-factor authentication and role-based access appropriate for your business.",
  },
  {
    title: "Endpoint and network protection",
    description:
      "Configure firewalls, anti-malware tools and network security measures that fit your environment.",
  },
  {
    title: "Backup strategy and implementation",
    description:
      "Design backup coverage, schedules and retention that match your recovery needs.",
  },
  {
    title: "Recovery and continuity planning",
    description:
      "Document recovery steps and continuity options so your business can respond to outages or data loss.",
  },
];

const scenarios = [
  {
    title: "Concerns about cyber threats",
    description: "You want to reduce the risk of phishing, ransomware or unauthorized access to business systems.",
  },
  {
    title: "No structured backup plan",
    description: "You are not confident that critical business data is backed up reliably or recoverable quickly.",
  },
  {
    title: "Compliance or client requirements",
    description: "You need to demonstrate reasonable security and data protection practices to clients or regulators.",
  },
  {
    title: "Preparing for business disruptions",
    description: "You want a plan to keep operations going if key systems become unavailable.",
  },
];

const related = services.filter((s) => s.slug === "cybersecurity" || s.slug === "backup-recovery");

export default function SecurityContinuitySolutionPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Solutions", href: "/solutions" },
            { label: "Security & Continuity", href: "/solutions/security-continuity" },
          ]}
        />
      </div>

      <PageHero
        title="Security & Continuity Solutions"
        description="Cybersecurity, backup and recovery planning that reduces business risk and helps operations continue through unexpected disruptions."
      />

      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-h2 font-semibold tracking-tight">Overview</h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Every business faces risk from cyber threats, human error, hardware failure and
              unexpected events. Security and continuity planning is about reducing those risks to
              a manageable level and making sure you can recover when something goes wrong.
            </p>
            <p>
              {businessInfo.brandName} takes a practical, layered approach. We help you protect
              accounts, devices and data, implement reliable backups and document recovery steps
              so your business can respond quickly to disruption without making unrealistic promises
              about absolute protection.
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
            title="How we approach security and continuity"
            description="A practical process from discovery to delivery."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Assess", description: "Identify critical systems, data and current security gaps." },
              { step: "02", title: "Protect", description: "Implement access controls, endpoint security and network safeguards." },
              { step: "03", title: "Back up", description: "Configure reliable backups with appropriate coverage and retention." },
              { step: "04", title: "Plan", description: "Document recovery steps and continuity options for common scenarios." },
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
          <h2 className="text-h2 font-semibold tracking-tight">Protect your business data and operations</h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your current security and backup setup and we can recommend a practical next step.
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
