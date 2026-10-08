import Link from "next/link";
import {
  Blocks,
  Building2,
  Cloud,
  Globe,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MessagesSquare,
  Network,
  Server,
  Settings,
  Shield,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/service-card";
import { FeatureCard } from "@/components/feature-card";
import { SectionHeading } from "@/components/section-heading";
import { FAQ } from "@/components/faq";
import { CTAButton } from "@/components/cta-button";
import { HeroVisual } from "@/components/hero-visual";
import { FAQPageSchema } from "@/components/structured-data";
import { services } from "@/lib/services-data";

const whyUs = [
  {
    title: "Business First",
    description:
      "Technology decisions are evaluated by how they support your business objectives, not by complexity for its own sake.",
    icon: Target,
  },
  {
    title: "Clear Communication",
    description:
      "Services and recommendations are explained in plain language so you can make informed decisions.",
    icon: MessagesSquare,
  },
  {
    title: "Practical Solutions",
    description:
      "We focus on useful technology that fits your operations, avoiding unnecessary overhead.",
    icon: Lightbulb,
  },
  {
    title: "Long-Term Thinking",
    description:
      "Systems are designed to grow with your business and adapt as your needs change.",
    icon: Layers,
  },
];

const howWeWork = [
  { step: "01", title: "Understand", description: "We learn about your business and technology requirements." },
  { step: "02", title: "Assess", description: "We review the current environment and identify requirements." },
  { step: "03", title: "Implement", description: "We configure and deploy the appropriate services." },
  { step: "04", title: "Support", description: "We provide ongoing administration and assistance where applicable." },
];

const solutionCategories = [
  {
    title: "Small Business IT",
    description: "Technology foundations for growing businesses.",
    icon: Building2,
  },
  {
    title: "Business Communication",
    description: "Email, domains and collaboration tools.",
    icon: Mail,
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud, hosting, servers and infrastructure.",
    icon: Cloud,
  },
  {
    title: "Security & Continuity",
    description: "Cybersecurity, backup and recovery.",
    icon: Shield,
  },
  {
    title: "Managed Technology",
    description: "Ongoing administration and technology management.",
    icon: Settings,
  },
];

const securityTopics = [
  { title: "Account security", icon: Lock },
  { title: "Domain security", icon: Globe },
  { title: "Email security", icon: Mail },
  { title: "Data protection", icon: Server },
  { title: "Backups", icon: Cloud },
  { title: "Access management", icon: Network },
  { title: "Infrastructure reliability", icon: Settings },
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
      <section className="overflow-hidden border-b bg-gradient-to-b from-background via-background to-brand-muted/30 py-16 md:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <h1 className="text-display font-bold text-foreground">
                Business IT Services Built Around Your Business
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                Reliable technology services for business email, domains, hosting,
                cloud infrastructure, security and day-to-day IT operations.
              </p>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
                <CTAButton href="/services" size="lg" showArrow>
                  Explore Services
                </CTAButton>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">Talk to Our Team</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* Business Technology */}
      <section className="py-16 md:py-24" id="business-technology">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Services for the Way Your Business Works"
            description="Businesses depend on connected systems: email, domains, websites, cloud applications, servers, networks, security and data. Infinity Techiez helps businesses manage these technology needs through a unified service approach."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Email", icon: Mail },
              { title: "Domains", icon: Globe },
              { title: "Websites", icon: Server },
              { title: "Cloud", icon: Cloud },
              { title: "Servers", icon: Server },
              { title: "Networks", icon: Network },
              { title: "Security", icon: Shield },
              { title: "Data", icon: Blocks },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-4 rounded-lg border bg-card p-4 transition-colors hover:border-primary/20"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-navy/5 text-brand-navy">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="font-medium text-foreground">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="border-y bg-brand-muted/30 py-16 md:py-24" id="services">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Business IT Services"
            description="A modular portfolio of technology services designed to be added, removed or scaled as your needs change."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/services">View all services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Infinity Techiez */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technology Services Without the Complexity"
            description="Our approach is built on four principles that keep business technology practical and manageable."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <FeatureCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="border-y bg-brand-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How We Work"
            description="A simple, transparent process that keeps your business moving forward."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howWeWork.map((item) => (
              <div key={item.step} className="relative rounded-xl border bg-card p-6">
                <span className="text-sm font-bold text-brand-accent">{item.step}</span>
                <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-16 md:py-24" id="solutions">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Business Solutions"
            description="Technology configurations organized by common business needs."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCategories.map((solution) => (
              <FeatureCard
                key={solution.title}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/solutions" variant="outline" showArrow>
              Explore solutions
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="border-y bg-brand-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-h2 font-bold tracking-tight text-foreground">
                Security and Reliability Matter
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Protective measures, sensible access controls and recovery planning
                are part of a responsible business technology setup.
              </p>
              <div className="mt-8">
                <CTAButton href="/services/cybersecurity" variant="outline" showArrow>
                  View cybersecurity services
                </CTAButton>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {securityTopics.map((topic) => (
                <div
                  key={topic.title}
                  className="flex items-center gap-3 rounded-lg border bg-card p-4 transition-colors hover:border-primary/20"
                >
                  <topic.icon className="h-5 w-5 shrink-0 text-brand-accent-dark" aria-hidden="true" />
                  <span className="text-sm font-medium text-foreground">{topic.title}</span>
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

      {/* Contact CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-brand-navy px-6 py-12 text-center text-white md:px-12 md:py-16">
            <h2 className="text-h2 font-bold tracking-tight">
              Ready to discuss your technology needs?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Tell us what you are trying to achieve and we will recommend a practical
              way forward.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Talk to Our Team</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
