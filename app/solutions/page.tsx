import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { ArrowRight, Cloud, Mail, Network, Shield } from "lucide-react";
import { createMetadata } from "@/lib/seo";

const solutions = [
  {
    title: "Business Communication",
    description:
      "Professional email, domain-based identities and DNS management that keep your business connected and reachable.",
    icon: Mail,
    services: ["Business Email", "Domains & DNS"],
    href: "/solutions/business-communication",
  },
  {
    title: "Web & Cloud",
    description:
      "Web hosting, domain connection and cloud services that keep your website and online tools accessible.",
    icon: Cloud,
    services: ["Web Hosting", "Cloud Services"],
    href: "/solutions/web-cloud",
  },
  {
    title: "IT Infrastructure",
    description:
      "Networks, servers, systems and connectivity configured to support your business operations.",
    icon: Network,
    services: ["IT Infrastructure", "Cloud Services"],
    href: "/solutions/infrastructure",
  },
  {
    title: "Security & Continuity",
    description:
      "Cybersecurity, access controls, backup strategies and recovery planning to reduce business risk.",
    icon: Shield,
    services: ["Cybersecurity", "Backup & Recovery"],
    href: "/solutions/security-continuity",
  },
];

export const metadata = createMetadata({
  title: "Business Technology Solutions",
  description:
    "Explore business technology solutions from Infinity Techiez: communication, cloud, infrastructure, security, continuity and managed technology.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }]} />
      </div>
      <PageHero
        title="Business Technology Solutions"
        description="Technology configurations organized by common business needs. Each solution combines the right services to help your business operate reliably and securely."
      />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group flex flex-col gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/30 sm:flex-row sm:items-start sm:gap-6"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
                  <solution.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-h3 font-semibold">{solution.title}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Related services:{" "}
                    <span className="text-foreground">{solution.services.join(", ")}</span>
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-brand-accent-dark transition-colors group-hover:text-brand-accent sm:pt-1">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/contact" showArrow>
              Discuss your requirements
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
