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
import { FAQPageSchema } from "@/components/structured-data";
import { services } from "@/lib/services-data";

const businessAreas = [
  {
    title: "Connect",
    description: "Business email, domains and DNS that keep your company reachable.",
    icon: Mail,
  },
  {
    title: "Operate",
    description: "Hosting, cloud services and infrastructure that power daily operations.",
    icon: Server,
  },
  {
    title: "Protect",
    description: "Cybersecurity, backup and recovery planning that reduce business risk.",
    icon: Shield,
  },
  {
    title: "Manage",
    description: "Ongoing administration and oversight so technology stays organized.",
    icon: Settings,
  },
];

const howWeWork = [
  { step: "01", title: "Understand", description: "We start by understanding the business requirement." },
  { step: "02", title: "Plan", description: "We identify the appropriate technology and implementation approach." },
  { step: "03", title: "Implement", description: "We configure or coordinate the required technology services." },
  { step: "04", title: "Maintain", description: "We help keep the environment organized and manageable." },
];

const solutionCategories = [
  {
    title: "Business Communication",
    description: "Email, domains and collaboration tools that keep teams connected.",
    icon: Mail,
    href: "/services/business-email",
  },
  {
    title: "Web & Cloud",
    description: "Hosting, cloud services and online infrastructure.",
    icon: Cloud,
    href: "/services/web-hosting",
  },
  {
    title: "IT Infrastructure",
    description: "Networks, servers, systems and connectivity.",
    icon: Network,
    href: "/services/it-infrastructure",
  },
  {
    title: "Security & Continuity",
    description: "Cybersecurity, backup and recovery.",
    icon: Shield,
    href: "/services/cybersecurity",
  },
];

const whyUs = [
  "Business-focused technology services",
  "Clear service scope and practical implementation",
  "Security-conscious approach",
  "Organized technology management",
  "Straightforward communication",
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
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden border-b bg-brand-muted py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h1 className="text-display font-semibold text-foreground">
                Business IT Services Built Around Your Business
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Infinity Techiez helps businesses manage technology across email,
                domains, hosting, cloud, infrastructure, cybersecurity, backup and
                day-to-day IT operations.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <CTAButton href="/services" size="lg" showArrow>
                  Explore Services
                </CTAButton>
                <Button asChild variant="outline" size="lg">
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

      {/* Business Technology Overview */}
      <section className="py-16 md:py-24" id="business-technology">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Services for the Way Your Business Works"
            description="Businesses depend on connected systems. Infinity Techiez helps you manage them through a practical, unified service approach."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {businessAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
                  <area.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-h3 font-semibold">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="border-y bg-brand-muted py-16 md:py-24" id="services">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Core Services"
            description="A modular set of business technology services that can be added, removed or scaled as your needs change."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Work"
            description="A clear, transparent process from first conversation to ongoing management."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <div key={item.step} className="border-t-2 border-primary/30 pt-5">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Step {item.step}
                </span>
                <h3 className="mt-2 text-h3 font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="border-y bg-brand-muted py-16 md:py-24" id="solutions">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Business Solutions"
            description="Technology configurations organized by common business needs, not product silos."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {solutionCategories.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group flex items-start gap-4 rounded-lg border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
                  <solution.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-h3 font-semibold">{solution.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {solution.description}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-accent-dark transition-colors group-hover:text-brand-accent">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/solutions">View all solutions</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Infinity Techiez */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">
                Why Infinity Techiez
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                We keep business technology practical, organized and easy to
                understand. Our work is guided by a few straightforward principles.
              </p>
            </div>
            <ul className="space-y-3">
              {whyUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Infinity Techiez */}
      <section className="border-y bg-brand-muted py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-h2 font-semibold tracking-tight">
                About Infinity Techiez
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Infinity Techiez is a brand operated by Advanced Vision Software
                LLC. We help businesses organize, secure and manage the technology
                they depend on every day.
              </p>
              <p className="mt-4 text-muted-foreground">
                From business email and domains to cloud services, infrastructure
                and security, our focus is on practical service delivery and clear
                communication.
              </p>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link href="/about">More about us</Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Core services", value: "8", icon: LayoutGrid },
                { label: "Service areas", value: "4", icon: Globe },
                { label: "Approach", value: "Practical", icon: CheckCircle },
                { label: "Focus", value: "Business", icon: Building2 },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-lg border bg-card p-5 text-center"
                >
                  <stat.icon className="mx-auto h-5 w-5 text-brand-accent-dark" aria-hidden="true" />
                  <p className="mt-2 text-2xl font-semibold tracking-tight">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <FAQPageSchema items={faqItems} />
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            description="Quick answers to common questions about our services."
          />
          <div className="mx-auto max-w-2xl">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border bg-card px-6 py-12 text-center md:px-12 md:py-16">
            <Users className="mx-auto h-8 w-8 text-brand-accent-dark" aria-hidden="true" />
            <h2 className="mt-4 text-h2 font-semibold tracking-tight">
              Let&apos;s Talk About Your Business Technology
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Tell us what your business needs help with and we can recommend a
              practical way forward.
            </p>
            <div className="mt-8">
              <CTAButton href="/contact" size="lg" showArrow>
                Contact Infinity Techiez
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
