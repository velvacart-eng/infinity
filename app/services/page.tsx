import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/services-data";
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
  },
  {
    title: "Infrastructure",
    description:
      "Power daily operations with web hosting, cloud services and IT infrastructure configured for reliability and growth.",
    slugs: ["web-hosting", "cloud-services", "it-infrastructure"],
  },
  {
    title: "Protection",
    description:
      "Reduce business risk with cybersecurity assessments, access controls, endpoint protection and backup and recovery planning.",
    slugs: ["cybersecurity", "backup-recovery"],
  },
  {
    title: "Management",
    description:
      "Keep technology organized and responsive with ongoing IT administration, vendor coordination and technology management.",
    slugs: ["it-management"],
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
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {groups.map((group) => (
              <div key={group.title}>
                <div className="mb-8 max-w-3xl">
                  <span className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                    Service Category
                  </span>
                  <h2 className="mt-3 text-h2 font-bold tracking-tight">
                    {group.title}
                  </h2>
                  <p className="mt-3 text-lg text-muted-foreground">{group.description}</p>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {group.slugs
                    .map((slug) => serviceMap.get(slug))
                    .filter(Boolean)
                    .map((service) => (
                      <ServiceCard key={service!.slug} service={service!} />
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/40 bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Integration"
            title="How these services work together"
            description="Our services are designed as building blocks that support each other across your business technology environment."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {howServicesWorkTogether.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-card p-6">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden="true" />
                <div>
                  <h3 className="text-h3 font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-navy py-16 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.18),transparent_40%)]" />
        <div className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h2 font-bold tracking-tight text-white">
            Need help choosing the right service?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us about your business and we can recommend a practical starting point.
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
