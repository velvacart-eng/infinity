import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Shield, Users, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { businessInfo } from "@/lib/config";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Business Email Services",
  description:
    "Professional business email setup, migration and administration using your own domain. SPF, DKIM and DMARC configuration from Infinity Techiez.",
  path: "/email",
});

const features = [
  {
    icon: Mail,
    title: "Domain-based email",
    description:
      "Use professional addresses like name@yourcompany.com that reinforce your brand every time you send a message.",
  },
  {
    icon: Shield,
    title: "Email authentication",
    description:
      "Configure SPF, DKIM and DMARC records to improve deliverability and reduce spoofing and phishing risk.",
  },
  {
    icon: Users,
    title: "Mailbox administration",
    description:
      "Create, configure and manage user mailboxes, aliases, distribution groups and permissions as your team changes.",
  },
  {
    icon: CheckCircle,
    title: "Migration planning",
    description:
      "Move mailboxes, calendars and contacts from an existing provider with timing that minimizes disruption.",
  },
];

const process = [
  { step: "01", title: "Audit", description: "Review current email accounts, domains, DNS records and authentication status." },
  { step: "02", title: "Design", description: "Plan the mailbox structure, aliases, distribution groups and security settings." },
  { step: "03", title: "Provision", description: "Create accounts, configure DNS records and prepare the new email environment." },
  { step: "04", title: "Migrate", description: "Move messages, calendars and contacts with timing that minimizes business disruption." },
  { step: "05", title: "Authenticate", description: "Configure and test SPF, DKIM and DMARC records to improve deliverability." },
  { step: "06", title: "Hand over", description: "Document the setup and train administrators on account and access management." },
];

const faqs = [
  {
    question: "Can I keep my existing email provider?",
    answer:
      "Yes. We can help configure and manage email on your current provider, migrate to a new one, or set up email from scratch based on what fits your business.",
  },
  {
    question: "What platforms do you work with?",
    answer:
      "We work with common business email platforms including Microsoft 365, Google Workspace and other domain-based email providers.",
  },
  {
    question: "How long does email migration take?",
    answer:
      "Migration timing depends on the number of mailboxes, the amount of data and your business schedule. We plan the work to minimize disruption.",
  },
  {
    question: "Will business email stop spam?",
    answer:
      "No email system can stop all spam, but proper authentication, security settings and user awareness can significantly reduce unwanted and malicious messages.",
  },
];

export default function EmailLandingPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Business Email", href: "/email" }]} />
      </div>

      <PageHero
        title="Business Email Services"
        description="Professional email setup, migration and administration using your own domain. We help businesses communicate reliably while protecting their domain and reputation."
        icon={Mail}
        gradient
      />

      {/* Intro */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="right">
              <div className="relative">
                <Image
                  src={siteImages.workspace.src}
                  alt={siteImages.workspace.alt}
                  width={600}
                  height={450}
                  className="rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-primary to-brand-violet" />
              </div>
            </FadeIn>
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Why business email matters</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">
                Your email address is part of your brand.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                A domain-based email address such as name@yourcompany.com looks more professional than
                a personal email address and gives your business control over accounts, security and
                branding.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We help businesses choose the right email platform, connect it to their domain, configure
                DNS records correctly, migrate existing mailboxes and put in place authentication and
                access controls.
              </p>
              <div className="mt-8">
                <CTAButton href="/contact" size="lg" showArrow>
                  Talk to Us About Email
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
              title="Business email services"
              description="Practical email services designed for businesses that need reliable, professional communication."
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
              title="How we deliver business email"
              description="A clear process from audit to handover so your email environment is set up correctly."
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
              description="Practical answers about business email setup and migration."
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
          <h2 className="text-h1 font-bold tracking-tight text-white">Ready for professional business email?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us about your current email setup and we can recommend a practical setup or migration plan.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
            <Link
              href="/services/business-email"
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
