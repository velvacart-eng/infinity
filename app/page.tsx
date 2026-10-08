import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Cloud,
  Globe,
  LayoutGrid,
  Mail,
  Network,
  Server,
  Settings,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { HeroVisual } from "@/components/hero-visual";
import { ServiceStrip } from "@/components/service-strip";
import { ServiceEcosystemVisual } from "@/components/service-ecosystem-visual";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQPageSchema } from "@/components/structured-data";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";

const howWeWork = [
  { step: "01", title: "Discover", description: "We start by understanding the business requirement, current setup and constraints." },
  { step: "02", title: "Plan", description: "We identify the appropriate technology, scope and implementation approach." },
  { step: "03", title: "Implement", description: "We configure or coordinate the required services with minimal disruption." },
  { step: "04", title: "Manage", description: "We help keep the environment organized, secure and aligned with the business." },
];

const solutionCategories = [
  {
    title: "Business Communication",
    description: "Email, domains and collaboration tools that keep teams connected.",
    icon: Mail,
    href: "/solutions/business-communication",
  },
  {
    title: "Web & Cloud",
    description: "Hosting, cloud services and online infrastructure.",
    icon: Cloud,
    href: "/solutions/web-cloud",
  },
  {
    title: "IT Infrastructure",
    description: "Networks, servers, systems and connectivity.",
    icon: Network,
    href: "/solutions/infrastructure",
  },
  {
    title: "Security & Continuity",
    description: "Cybersecurity, backup and recovery.",
    icon: Shield,
    href: "/solutions/security-continuity",
  },
];

const whyUs = [
  { title: "Practical", description: "Technology aligned to actual business requirements, not complexity for its own sake." },
  { title: "Clear", description: "Defined service scope and straightforward communication at every step." },
  { title: "Security-conscious", description: "Security and continuity considered throughout the technology environment." },
  { title: "Scalable", description: "Solutions that can evolve as business requirements change." },
];

const faqItems = [
  {
    question: "What industries do you work with?",
    answer:
      "We support a wide range of businesses that need reliable IT infrastructure, email, hosting, cloud and security services. Every solution is tailored to the client's specific environment.",
  },
  {
    question: "Can you manage services we already have in place?",
    answer:
      "Yes. We can take over administration of existing domains, email, hosting and cloud accounts, or help you migrate to a more suitable setup.",
  },
  {
    question: "Do you offer ongoing IT support?",
    answer:
      "We offer managed IT administration and technology management for businesses that need regular, reliable support without maintaining an internal IT department.",
  },
];

export default function HomePage() {
  const featuredService = services[0];
  const remainingServices = services.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/40 bg-background py-20 md:py-28 lg:py-32">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(37,99,235,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_90%,rgba(59,130,246,0.05),transparent_40%)]" />

        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <span className="mb-5 inline-block animate-reveal text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                Business IT Services
              </span>
              <h1 className="animate-reveal-delay-1 text-display font-bold tracking-tight text-foreground">
                Technology That Keeps Your Business{" "}
                <span className="text-brand-accent">Moving.</span>
              </h1>
              <p className="animate-reveal-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                Infinity Techiez helps businesses manage technology across email, domains, hosting,
                cloud, infrastructure, cybersecurity, backup and day-to-day IT operations.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 animate-reveal-delay-2 sm:flex-row">
                <CTAButton href="/services" size="lg" showArrow>
                  Explore Services
                </CTAButton>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border/60 bg-card/50 px-6 hover:bg-muted"
                >
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Service strip */}
      <ServiceStrip />

      {/* Business Technology */}
      <section className="py-20 md:py-28" id="business-technology">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Connected Technology"
                title="Technology should work together."
                description="Businesses depend on connected systems. Infinity Techiez helps you manage them through a practical, unified service approach that keeps communication, infrastructure, cloud and security aligned."
              />
              <div className="mt-8 space-y-5">
                {[
                  { title: "Communication", text: "Business email, domains and DNS keep your company reachable." },
                  { title: "Infrastructure", text: "Servers, networks and systems power the applications your team uses." },
                  { title: "Cloud", text: "Hosting and cloud services provide flexible capacity and access." },
                  { title: "Security", text: "Identity, access control and backup reduce business risk." },
                  { title: "Continuity", text: "Recovery plans help operations resume after disruption." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" aria-hidden="true" />
                    <div>
                      <h3 className="text-h3 font-semibold">{item.title}</h3>
                      <p className="mt-1 text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <ServiceEcosystemVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="border-y border-border/40 bg-brand-muted py-20 md:py-28" id="services">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Do"
            title="Core Services"
            description="A modular set of business technology services that can be added, removed or scaled as your needs change."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="lg:col-span-1 lg:row-span-2">
              <ServiceCard service={featuredService} variant="featured" />
            </div>
            {remainingServices.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index + 1} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Process"
            title="How We Work"
            description="A clear, transparent process from first conversation to ongoing management."
          />
          <ProcessTimeline steps={howWeWork} />
        </div>
      </section>

      {/* Solutions */}
      <section className="border-y border-border/40 bg-brand-muted py-20 md:py-28" id="solutions">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="By Business Need"
            title="Business Solutions"
            description="Technology configurations organized by common business needs, not product silos."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {solutionCategories.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-primary/40 hover:bg-white hover:shadow-sm"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent/15">
                    <solution.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-h3 font-semibold text-foreground">{solution.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {solution.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent transition-colors group-hover:text-brand-accent-bright">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Infinity Techiez */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                Why Us
              </span>
              <h2 className="text-h2 font-bold tracking-tight">
                Technology without unnecessary complexity.
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div key={item.title} className="rounded-xl border border-border/60 bg-card p-5 transition-colors hover:border-primary/30">
                  <h3 className="text-h3 font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="border-y border-border/40 bg-brand-muted py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.12em] text-brand-accent">
                About Infinity Techiez
              </span>
              <h2 className="text-h2 font-bold tracking-tight">
                Built for the technology behind modern businesses.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {businessInfo.brandName} is a brand operated by {businessInfo.legalName}. We help
                businesses organize, secure and manage the technology they depend on every day.
              </p>
              <p className="mt-4 text-muted-foreground">
                From business email and domains to cloud services, infrastructure and security, our
                focus is on practical service delivery and clear communication.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Core services", value: "8", icon: LayoutGrid },
                  { label: "Service areas", value: "4", icon: Globe },
                  { label: "Approach", value: "Practical", icon: CheckCircle },
                  { label: "Focus", value: "Business", icon: Building2 },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border/60 bg-card p-4 text-center">
                    <stat.icon className="mx-auto h-4 w-4 text-brand-accent" aria-hidden="true" />
                    <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" className="rounded-full px-6">
                  <Link href="/about">More about us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Communication", icon: Mail },
                { label: "Infrastructure", icon: Network },
                { label: "Cloud", icon: Cloud },
                { label: "Security", icon: Shield },
                { label: "Continuity", icon: Server },
                { label: "Management", icon: Settings },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent/15">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <FAQPageSchema items={faqItems} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently Asked Questions"
              description="Quick answers to common questions about our services."
            />
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-navy py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.18),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.10),transparent_40%)]" />
        <div className="container relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Users className="mx-auto h-8 w-8 text-brand-accent-bright" aria-hidden="true" />
          <h2 className="mx-auto mt-5 max-w-3xl text-h1 font-bold tracking-tight text-white">
            Let&apos;s build a better technology foundation for your business.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
            Tell us what your business needs help with and we can recommend a practical way forward.
          </p>
          <div className="mt-9">
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
