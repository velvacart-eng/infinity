import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/motion-wrapper";
import { siteImages } from "@/lib/images";
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
    image: siteImages.workspace,
  },
  {
    title: "Web & Cloud",
    description:
      "Web hosting, domain connection and cloud services that keep your website and online tools accessible.",
    icon: Cloud,
    services: ["Web Hosting", "Cloud Services"],
    href: "/solutions/web-cloud",
    image: siteImages.cloud,
  },
  {
    title: "IT Infrastructure",
    description:
      "Networks, servers, systems and connectivity configured for your business operations.",
    icon: Network,
    services: ["IT Infrastructure", "Cloud Services"],
    href: "/solutions/infrastructure",
    image: siteImages.serverRoom,
  },
  {
    title: "Security & Continuity",
    description:
      "Cybersecurity, access controls, backup strategies and recovery planning to reduce business risk.",
    icon: Shield,
    services: ["Cybersecurity", "Backup & Recovery"],
    href: "/solutions/security-continuity",
    image: siteImages.cybersecurity,
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
        gradient
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-5" staggerDelay={0.12}>
            {solutions.map((solution) => (
              <StaggerItem key={solution.title}>
                <ScaleOnHover>
                  <Link
                    href={solution.href}
                    className="group relative flex h-full min-h-[180px] flex-col gap-5 overflow-hidden rounded-3xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:flex-row sm:items-center sm:gap-8"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={solution.image.src}
                        alt={solution.image.alt}
                        fill
                        className="object-cover opacity-15 transition-opacity duration-300 group-hover:opacity-25"
                        sizes="(max-width: 768px) 100vw, 60vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-card via-card/95 to-card/80" />
                    </div>
                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-md shadow-primary/15">
                      <solution.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="relative z-10 flex-1">
                      <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground">{solution.title}</h2>
                      <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                        {solution.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        Related services:{" "}
                        <span className="text-foreground">{solution.services.join(", ")}</span>
                      </p>
                    </div>
                    <span className="relative z-10 inline-flex shrink-0 items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet sm:pt-1">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3} className="mt-12 text-center">
            <CTAButton href="/contact" size="lg" showArrow>
              Discuss your requirements
            </CTAButton>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
