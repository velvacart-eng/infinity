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
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group flex flex-col gap-5 rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-sm sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent/15">
                  <solution.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h2 className="text-h3 font-semibold text-foreground">{solution.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Related services:{" "}
                    <span className="text-foreground">{solution.services.join(", ")}</span>
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand-accent transition-colors group-hover:text-brand-accent-bright sm:pt-1">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <CTAButton href="/contact" size="lg" showArrow>
              Discuss your requirements
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
