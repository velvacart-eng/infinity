import { Mail } from "lucide-react";
import { SolutionPageTemplate } from "@/components/solution-page-template";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Business Communication Solutions",
  description:
    "Professional business email, domain management and DNS solutions that keep your company connected, reachable and protected against spoofing.",
  path: "/solutions/business-communication",
});

const included = [
  {
    title: "Domain-based business email",
    description:
      "Set up professional email addresses using your company domain so every message reinforces your brand.",
  },
  {
    title: "Domain registration and DNS management",
    description:
      "Select, register and configure domains with the DNS records needed for email, websites and third-party services.",
  },
  {
    title: "Email authentication",
    description:
      "Configure SPF, DKIM and DMARC records to improve deliverability and reduce the risk of spoofing and phishing.",
  },
  {
    title: "Migration and onboarding",
    description:
      "Move mailboxes, calendars and contacts from existing providers while minimizing disruption to your team.",
  },
  {
    title: "Ongoing administration",
    description:
      "Manage accounts, aliases, distribution groups and permissions as your team changes.",
  },
];

const scenarios = [
  {
    title: "Launching a new business",
    description:
      "You need professional email addresses and a domain before you start communicating with customers and partners.",
  },
  {
    title: "Moving away from personal email",
    description:
      "Your team is still using personal addresses and you want a consistent, company-controlled email environment.",
  },
  {
    title: "Rebranding or renaming",
    description:
      "You are changing company or product names and need new domains, aliases and email routing.",
  },
  {
    title: "Email deliverability issues",
    description:
      "Messages are landing in spam folders or you have seen suspicious messages sent from your domain.",
  },
];

const process = [
  { step: "01", title: "Assess", description: "Review current email, domains and DNS to identify gaps." },
  { step: "02", title: "Design", description: "Plan mailbox structure, domain strategy and authentication." },
  { step: "03", title: "Implement", description: "Configure email, DNS records and migration timing." },
  { step: "04", title: "Verify", description: "Test deliverability, authentication and client access." },
];

const related = services.filter((s) => s.slug === "business-email" || s.slug === "domains-dns");

export default function BusinessCommunicationSolutionPage() {
  return (
    <SolutionPageTemplate
      title="Business Communication Solutions"
      description="Professional email, domain management and DNS services that keep your business connected, credible and easy to reach."
      breadcrumbLabel="Business Communication"
      overview={
        <>
          <p>
            Business communication is built on reliable email and a properly managed domain.
            When customers, partners or suppliers cannot reach you, or when your messages look
            unprofessional, it affects how your business is perceived and how smoothly
            operations run.
          </p>
          <p>
            This solution combines business email setup with domain and DNS management so your
            company has a consistent identity, secure authentication and a platform that can
            grow with your team. {businessInfo.brandName} helps you choose the right services,
            connect them correctly and manage them over time.
          </p>
        </>
      }
      included={included}
      scenarios={scenarios}
      process={process}
      related={related}
      ctaTitle="Improve your business communication"
      ctaText="Tell us about your current email and domain setup and we can recommend a practical next step."
      icon={Mail}
    />
  );
}
