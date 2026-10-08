import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle,
  Cloud,
  Globe,
  LayoutGrid,
  Mail,
  Network,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading } from "@/components/section-heading";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { ServiceStrip } from "@/components/service-strip";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQPageSchema } from "@/components/structured-data";
import { FadeIn, StaggerContainer, StaggerItem, ScaleOnHover } from "@/components/motion-wrapper";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";
import { siteImages } from "@/lib/images";

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
    image: siteImages.workspace,
  },
  {
    title: "Web & Cloud",
    description: "Hosting, cloud services and online infrastructure.",
    icon: Cloud,
    href: "/solutions/web-cloud",
    image: siteImages.cloud,
  },
  {
    title: "IT Infrastructure",
    description: "Networks, servers, systems and connectivity.",
    icon: Network,
    href: "/solutions/infrastructure",
    image: siteImages.serverRoom,
  },
  {
    title: "Security & Continuity",
    description: "Cybersecurity, backup and recovery.",
    icon: Shield,
    href: "/solutions/security-continuity",
    image: siteImages.cybersecurity,
  },
];

const whyUs = [
  { title: "Practical", description: "Technology aligned to actual business requirements, not complexity for its own sake." },
  { title: "Clear", description: "Defined service scope and straightforward communication at every step." },
  { title: "Security-conscious", description: "Security and continuity considered throughout the technology environment." },
  { title: "Scalable", description: "Solutions that can evolve as business requirements change." },
];

const stats = [
  { value: "8+", label: "Core Services" },
  { value: "4", label: "Solution Areas" },
  { value: "24/7", label: "Support Ready" },
  { value: "100%", label: "Business Focus" },
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
      <section className="relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={siteImages.hero.src}
            alt={siteImages.hero.alt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-ink/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink via-brand-ink/80 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(37,99,235,0.25),transparent_50%)]" />
        </div>

        <div className="container relative z-10 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="up" className="max-w-3xl">
              <span className="mb-5 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-white">
                Business IT Services
              </span>
              <h1 className="text-display font-bold tracking-tight text-white">
                Technology That Keeps Your Business{" "}
                <span className="bg-gradient-to-r from-primary via-brand-cyan to-brand-violet bg-clip-text text-transparent">
                  Moving.
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Infinity Techiez helps businesses manage technology across email, domains, hosting,
                cloud, infrastructure, cybersecurity, backup and day-to-day IT operations.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <CTAButton href="/services" size="lg" showArrow>
                  Explore Services
                </CTAButton>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 bg-white/5 px-6 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
                >
                  <Link href="/contact">Talk to Us</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="hidden lg:block">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-md">
                <Image
                  src={siteImages.team.src}
                  alt={siteImages.team.alt}
                  width={600}
                  height={400}
                  className="rounded-2xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-brand-ink/90 p-5 shadow-xl backdrop-blur-md">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white">
                      <Zap className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">2026</p>
                      <p className="text-sm text-slate-400">Ready IT solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-border/60 bg-background">
        <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {stats.map((stat) => (
              <StaggerItem
                key={stat.label}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Service strip */}
      <ServiceStrip />

      {/* Core Services */}
      <section className="py-20 md:py-28" id="services">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Do"
              title="Core Services"
              description="A modular set of business technology services that can be added, removed or scaled as your needs change."
            />
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-5 lg:grid-cols-3" staggerDelay={0.08}>
            <StaggerItem className="lg:col-span-1 lg:row-span-2">
              <ServiceCard service={featuredService} variant="featured" />
            </StaggerItem>
            {remainingServices.map((service, index) => (
              <StaggerItem key={service.slug}>
                <ServiceCard service={service} index={index + 1} />
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.3} className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link href="/services">View all services</Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* Solutions */}
      <section className="border-y border-border/40 bg-brand-muted py-20 md:py-28" id="solutions">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="By Business Need"
              title="Business Solutions"
              description="Technology configurations organized by common business needs, not product silos."
            />
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2" staggerDelay={0.1}>
            {solutionCategories.map((solution) => (
              <StaggerItem key={solution.title}>
                <ScaleOnHover>
                  <Link
                    href={solution.href}
                    className="group relative flex h-full min-h-[220px] flex-col justify-end overflow-hidden rounded-3xl border border-border/60 bg-card p-8 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="absolute inset-0">
                      <Image
                        src={solution.image.src}
                        alt={solution.image.alt}
                        fill
                        className="object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/70" />
                    </div>
                    <div className="relative z-10">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-md">
                        <solution.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-h2 font-bold text-foreground">{solution.title}</h3>
                      <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
                        {solution.description}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet">
                        Learn more
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </ScaleOnHover>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Process"
              title="How We Work"
              description="A clear, transparent process from first conversation to ongoing management."
            />
          </FadeIn>
          <FadeIn delay={0.2} className="mt-12">
            <ProcessTimeline steps={howWeWork} />
          </FadeIn>
        </div>
      </section>

      {/* Why Infinity Techiez */}
      <section className="relative overflow-hidden border-y border-border/40 bg-brand-ink py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.18),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="up">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary">
                Why Us
              </span>
              <h2 className="text-h1 font-bold tracking-tight text-white">
                Technology without unnecessary complexity.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
                We focus on practical outcomes: reliable systems, clear communication, and technology
                that supports your business goals instead of getting in the way.
              </p>
            </FadeIn>
            <StaggerContainer className="grid gap-5 sm:grid-cols-2" staggerDelay={0.1}>
              {whyUs.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:border-primary/30 hover:bg-white/10">
                    <CheckCircle className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-4 text-h3 font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="right" className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src={siteImages.meeting.src}
                  alt={siteImages.meeting.alt}
                  width={600}
                  height={450}
                  className="rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-primary to-brand-violet" />
              </div>
            </FadeIn>
            <FadeIn direction="up" className="order-1 lg:order-2">
              <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.12em] text-primary">
                About Infinity Techiez
              </span>
              <h2 className="text-h1 font-bold tracking-tight">
                Built for the technology behind modern businesses.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                {businessInfo.brandName} is a brand operated by {businessInfo.legalName}. We help
                businesses organize, secure and manage the technology they depend on every day.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { label: "Core services", value: "8", icon: LayoutGrid },
                  { label: "Service areas", value: "4", icon: Globe },
                  { label: "Approach", value: "Practical", icon: CheckCircle },
                  { label: "Focus", value: "Business", icon: Building2 },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-border/60 bg-card p-4 text-center transition-colors hover:border-primary/20"
                  >
                    <stat.icon className="mx-auto h-4 w-4 text-primary" aria-hidden="true" />
                    <p className="mt-2 text-2xl font-bold tracking-tight text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                  <Link href="/about">More about us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/40 bg-brand-muted py-20 md:py-28">
        <FAQPageSchema items={faqItems} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently Asked Questions"
              description="Quick answers to common questions about our services."
            />
            <div className="mt-10">
              <FAQ items={faqItems} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-ink py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.15),transparent_45%)]" />
        <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <Users className="mx-auto h-10 w-10 text-primary" aria-hidden="true" />
            <h2 className="mt-6 text-h1 font-bold tracking-tight text-white">
              Let&apos;s build a better technology foundation for your business.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              Tell us what your business needs help with and we can recommend a practical way forward.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <CTAButton href="/contact" size="lg" showArrow>
                Talk to Us
              </CTAButton>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-white/20 bg-white/5 px-8 text-white hover:bg-white/10 hover:text-white"
              >
                <Link href={`mailto:${businessInfo.email}`}>Email {businessInfo.email}</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
