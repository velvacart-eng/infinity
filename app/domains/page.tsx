import Link from "next/link";
import Image from "next/image";
import { Globe, Search, ShieldCheck, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { businessInfo } from "@/lib/config";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Domain & DNS Services",
  description:
    "Business domain management, DNS configuration and record setup from Infinity Techiez. Domain registration services, transfers and diagnostics.",
  path: "/domains",
});

const features = [
  {
    icon: Globe,
    title: "Domain registration services",
    description:
      "Assistance with selecting, registering and renewing domain names through reputable registrars.",
  },
  {
    icon: Search,
    title: "DNS configuration",
    description:
      "Set up and manage A, AAAA, CNAME, TXT and MX records so websites, email and services connect correctly.",
  },
  {
    icon: ShieldCheck,
    title: "Email authentication records",
    description:
      "Configure SPF, DKIM and DMARC records to improve deliverability and reduce spoofing and phishing risk.",
  },
  {
    icon: CheckCircle,
    title: "Domain diagnostics",
    description:
      "Diagnose why websites or email are not reachable and correct record or propagation issues.",
  },
];

const process = [
  { step: "01", title: "Discover", description: "Identify every domain, registrar, DNS provider and service that depends on your domain configuration." },
  { step: "02", title: "Inspect", description: "Review current DNS records, ownership details, expiration dates and administrative access." },
  { step: "03", title: "Architect", description: "Design the DNS structure needed to serve websites, email, subdomains and third-party services." },
  { step: "04", title: "Update", description: "Make record changes with careful timing that respects propagation windows and minimizes interruption." },
  { step: "05", title: "Validate", description: "Confirm that websites, email and applications resolve correctly from multiple locations." },
  { step: "06", title: "Document", description: "Record the final configuration, provider relationships and renewal schedule for future reference." },
];

const faqs = [
  {
    question: "Do you register domains directly?",
    answer:
      "No. We do not act as a domain registrar. We help you choose reputable registrars, register domains in your name and manage the configuration that makes the domain useful.",
  },
  {
    question: "How long do DNS changes take?",
    answer:
      "DNS changes can take minutes to hours depending on record time-to-live settings and provider caching. We plan changes to minimize disruption but do not guarantee specific propagation times.",
  },
  {
    question: "Can you help transfer a domain?",
    answer:
      "Yes. We can guide you through transferring a domain between registrars, including preparing the domain, obtaining transfer codes and verifying completion.",
  },
  {
    question: "What records do I need for business email?",
    answer:
      "Business email typically requires MX records to direct mail, plus SPF, DKIM and DMARC records for authentication and deliverability.",
  },
];

export default function DomainsLandingPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Domain & DNS", href: "/domains" }]} />
      </div>

      <PageHero
        title="Domain & DNS Services"
        description="Business domain management and DNS configuration. We help you own, manage and correct domain names so websites, email and applications work reliably."
        icon={Globe}
        gradient
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="right">
              <div className="relative">
                <Image
                  src={siteImages.serverRoom.src}
                  alt={siteImages.serverRoom.alt}
                  width={600}
                  height={450}
                  className="rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-brand-cyan to-primary" />
              </div>
            </FadeIn>
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">The foundation of your online presence</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">
                Your domain is your business address on the internet.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A domain name is what customers type to reach your website and what appears after the @
                symbol in your business email. DNS is the invisible infrastructure that tells the internet
                where to send that traffic.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We help businesses register, manage, transfer and correct domains and DNS. We act as an
                administrator and advisor for your domain assets so records stay correct, ownership is
                controlled and changes are planned to avoid unnecessary downtime.
              </p>
              <div className="mt-8">
                <CTAButton href="/contact" size="lg" showArrow>
                  Talk to Us About Domains
                </CTAButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="What We Offer"
              title="Domain & DNS services"
              description="Practical domain administration and DNS management for business services."
            />
          </FadeIn>
          <StaggerContainer className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.08}>
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-2xl border border-border/60 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-md shadow-primary/15">
                    <feature.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-h3 font-bold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our Process"
              title="How we manage domains and DNS"
              description="A structured approach that reduces the risk of misconfiguration and downtime."
            />
          </FadeIn>
          <div className="relative mt-12">
            <div className="absolute left-0 right-0 top-[1.375rem] hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
            <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
              {process.map((item) => (
                <StaggerItem key={item.step}>
                  <div className="group relative">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-primary/20 bg-card font-mono text-sm font-bold text-primary shadow-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-brand-violet group-hover:text-white group-hover:shadow-md group-hover:shadow-primary/20">
                      {item.step}
                    </div>
                    <h3 className="mt-5 text-h3 font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y border-border/40 bg-brand-muted py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Common Questions"
              title="Frequently asked questions"
              description="Practical answers about domain and DNS management."
              align="left"
            />
          </FadeIn>
          <StaggerContainer className="mt-10 space-y-5" staggerDelay={0.08}>
            {faqs.map((faq) => (
              <StaggerItem key={faq.question}>
                <div className="rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/20">
                  <h3 className="text-h3 font-bold">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-ink py-12 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.2),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.12),transparent_45%)]" />
        <FadeIn className="container relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-h1 font-bold tracking-tight text-white">Need help with your domain or DNS?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us about your current setup and we can review, correct or improve your domain configuration.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
            <Link
              href="/services/domains-dns"
              className="inline-flex items-center gap-1 text-sm font-bold text-slate-300 transition-colors hover:text-white"
            >
              View detailed service
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Or email us directly at{" "}
            <a href={`mailto:${businessInfo.email}`} className="text-primary hover:underline">
              {businessInfo.email}
            </a>
          </p>
        </FadeIn>
      </section>
    </>
  );
}
