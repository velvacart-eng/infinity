import Link from "next/link";
import Image from "next/image";
import { Server, Network, HardDrive, ArrowRight, CheckCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTAButton } from "@/components/cta-button";
import { SectionHeading } from "@/components/section-heading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { businessInfo } from "@/lib/config";
import { siteImages } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Server & IT Infrastructure Services",
  description:
    "Business server and IT infrastructure planning, deployment and administration from Infinity Techiez. Servers, networks, devices and connectivity.",
  path: "/servers",
});

const features = [
  {
    icon: Server,
    title: "Server configuration",
    description:
      "Set up, configure and maintain physical or virtual servers aligned with your business applications and workloads.",
  },
  {
    icon: Network,
    title: "Network design",
    description:
      "Plan and diagnose wired and wireless networks, including routers, switches and access points that serve your users and devices.",
  },
  {
    icon: HardDrive,
    title: "Device management",
    description:
      "Configure computers, laptops and other devices with consistent settings, security controls and remote access options.",
  },
  {
    icon: CheckCircle,
    title: "Remote access planning",
    description:
      "Design secure access to business systems for employees working from home, on the road or across multiple locations.",
  },
];

const process = [
  { step: "01", title: "Assess", description: "Review current systems, business workflows and infrastructure gaps." },
  { step: "02", title: "Design", description: "Plan servers, network equipment, devices and cloud integration that fit your needs." },
  { step: "03", title: "Build", description: "Install, configure and test infrastructure with minimal disruption." },
  { step: "04", title: "Secure", description: "Apply access controls, segmentation, patching and endpoint protections." },
  { step: "05", title: "Manage", description: "Provide ongoing administration, updates and documentation." },
  { step: "06", title: "Scale", description: "Plan upgrades and expansion as your business grows or requirements change." },
];

const faqs = [
  {
    question: "Do you sell servers or hardware?",
    answer:
      "No. We do not sell hardware or act as an internet service provider. We assess requirements, design solutions, configure systems and coordinate with vendors.",
  },
  {
    question: "Do you work with cloud and on-premise infrastructure?",
    answer:
      "Yes. We plan and configure both cloud and on-premise infrastructure, including hybrid environments that connect the two.",
  },
  {
    question: "Can you help with a new office setup?",
    answer:
      "Yes. We can plan network, server, workstation and connectivity requirements for new offices and locations.",
  },
  {
    question: "How do you handle remote teams?",
    answer:
      "We design and manage infrastructure that lets remote teams access business systems securely and reliably, including VPN, cloud access and device management considerations.",
  },
];

export default function ServersLandingPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Servers & Infrastructure", href: "/servers" }]} />
      </div>

      <PageHero
        title="Server & IT Infrastructure Services"
        description="Business server, network and infrastructure planning, deployment and administration. We help you build a stable, secure foundation for daily operations."
        icon={Server}
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
                <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl bg-gradient-to-br from-brand-violet to-primary" />
              </div>
            </FadeIn>
            <FadeIn direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-primary">Reliable infrastructure</span>
              <h2 className="mt-3 text-h2 font-bold tracking-tight">
                Your infrastructure keeps your business running.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                IT infrastructure is the combination of servers, networks, devices and connectivity that
                powers your applications, communication, data access and security.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We help businesses plan, deploy and manage infrastructure that fits their size, workflows and
                budget. Our role is to assess requirements, design an approach, configure and document systems,
                and coordinate with vendors so the environment remains manageable.
              </p>
              <div className="mt-8">
                <CTAButton href="/contact" size="lg" showArrow>
                  Talk to Us About Infrastructure
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
              title="Server & infrastructure services"
              description="Practical infrastructure services designed for businesses that need dependable technology."
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
              title="How we deliver infrastructure"
              description="A clear process from assessment to scaling so your environment stays aligned with business needs."
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
              description="Practical answers about servers and IT infrastructure."
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
          <h2 className="text-h1 font-bold tracking-tight text-white">Ready to improve your infrastructure?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Tell us about your current environment and we can recommend a practical plan for servers, networks and devices.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href="/contact" size="lg" showArrow>
              Talk to Us
            </CTAButton>
            <Link
              href="/services/it-infrastructure"
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
