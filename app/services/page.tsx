import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { services } from "@/lib/services-data";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";
import { CheckCircle } from "lucide-react";

export const metadata = createMetadata({
  title: "Business IT Services",
  description:
    "Explore business IT services from Infinity Techiez: email, domains, hosting, cloud, infrastructure, cybersecurity, backup and managed IT.",
  path: "/services",
});

const groups = [
  {
    title: "Communication",
    description:
      "Establish your professional identity and keep your business reachable with domain-based email, domain management and DNS services.",
    slugs: ["business-email", "domains-dns"],
    image: siteImages.workspace,
  },
  {
    title: "Infrastructure",
    description:
      "Power daily operations with web hosting, cloud services and IT infrastructure configured for reliability and growth.",
    slugs: ["web-hosting", "cloud-services", "it-infrastructure"],
    image: siteImages.serverRoom,
  },
  {
    title: "Protection",
    description:
      "Reduce business risk with cybersecurity assessments, access controls, endpoint protection and backup and recovery planning.",
    slugs: ["cybersecurity", "backup-recovery"],
    image: siteImages.cybersecurity,
  },
  {
    title: "Management",
    description:
      "Keep technology organized and responsive with ongoing IT administration, vendor coordination and technology management.",
    slugs: ["it-management"],
    image: siteImages.support,
  },
];

const howServicesWorkTogether = [
  {
    title: "Identity and reachability",
    description:
      "Domains and business email create your public identity and give customers a reliable way to reach you.",
  },
  {
    title: "Presence and operations",
    description:
      "Web hosting, cloud services and infrastructure provide the platforms where your website, applications and data live.",
  },
  {
    title: "Security and resilience",
    description:
      "Cybersecurity controls and backup strategies protect those systems and help you recover when something goes wrong.",
  },
  {
    title: "Ongoing management",
    description:
      "IT management keeps everything organized, updated and aligned with your business as it changes.",
  },
];

const serviceMap = new Map(services.map((s) => [s.slug, s]));

export default function ServicesPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      </div>
      <PageHero
        title="Business IT Services"
        description="A modular set of technology services designed to help businesses stay connected, productive and secure. Add, remove or scale services as your needs change."
        gradient
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-24" staggerDelay={0.15}>
            {groups.map((group) => (
              <StaggerItem key={group.title}>
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
                  <div className="lg:col-span-4">
                    <div className="relative mb-6 overflow-hidden rounded-3xl">
                      <Image
                        src={group.image.src}
                        alt={group.image.alt}
                        width={500}
                        height={300}
                        className="h-48 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/60 to-transparent" />
                      <span className="absolute bottom-4 left-4 rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                        Service Category
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">
                      {group.title}
                    </span>
                    <h2 className="mt-3 text-h2 font-bold tracking-tight">
                      {group.title}
                    </h2>
                    <p className="mt-3 text-lg text-muted-foreground">{group.description}</p>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3">
                    {group.slugs
                      .map((slug) => serviceMap.get(slug))
                      .filter(Boolean)
                      .map((service) => (
                        <ServiceCard key={service!.slug} service={service!} />
                      ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Integration"
              title="How these services work together"
              description="Our services are designed as building blocks that support each other across your business technology environment."
            />
          </FadeIn>
          <StaggerContainer className="grid gap-5 md:grid-cols-2" staggerDelay={0.08}>
            {howServicesWorkTogether.map((item) => (
              <StaggerItem key={item.title}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/20">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h3 className="text-h3 font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-ink py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">
            Need help choosing the right service?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us about your business and we can recommend a practical starting point.
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
