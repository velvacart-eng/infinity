import { Shield } from "lucide-react";
import { SolutionPageTemplate } from "@/components/solution-page-template";
import { services } from "@/lib/services-data";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Security & Continuity Solutions",
  description:
    "Cybersecurity, backup and recovery planning to protect business data and keep operations running through disruptions.",
  path: "/solutions/security-continuity",
});

const included = [
  {
    title: "Security assessment and planning",
    description:
      "Review current security posture and identify practical priorities for protection.",
  },
  {
    title: "Access controls and authentication",
    description:
      "Implement strong passwords, multi-factor authentication and role-based access appropriate for your business.",
  },
  {
    title: "Endpoint and network protection",
    description:
      "Configure firewalls, anti-malware tools and network security measures that fit your environment.",
  },
  {
    title: "Backup strategy and implementation",
    description:
      "Design backup coverage, schedules and retention that match your recovery needs.",
  },
  {
    title: "Recovery and continuity planning",
    description:
      "Document recovery steps and continuity options so your business can respond to outages or data loss.",
  },
];

const scenarios = [
  {
    title: "Concerns about cyber threats",
    description: "You want to reduce the risk of phishing, ransomware or unauthorized access to business systems.",
  },
  {
    title: "No structured backup plan",
    description: "You are not confident that critical business data is backed up reliably or recoverable quickly.",
  },
  {
    title: "Compliance or client requirements",
    description: "You need to demonstrate reasonable security and data protection practices to clients or regulators.",
  },
  {
    title: "Preparing for business disruptions",
    description: "You want a plan to keep operations going if key systems become unavailable.",
  },
];

const process = [
  { step: "01", title: "Assess", description: "Identify critical systems, data and current security gaps." },
  { step: "02", title: "Protect", description: "Implement access controls, endpoint security and network safeguards." },
  { step: "03", title: "Back up", description: "Configure reliable backups with appropriate coverage and retention." },
  { step: "04", title: "Plan", description: "Document recovery steps and continuity options for common scenarios." },
];

const related = services.filter((s) => s.slug === "cybersecurity" || s.slug === "backup-recovery");

export default function SecurityContinuitySolutionPage() {
  return (
    <SolutionPageTemplate
      title="Security & Continuity Solutions"
      description="Cybersecurity, backup and recovery planning that reduces business risk and helps operations continue through unexpected disruptions."
      breadcrumbLabel="Security & Continuity"
      overview={
        <>
          <p>
            Every business faces risk from cyber threats, human error, hardware failure and
            unexpected events. Security and continuity planning is about reducing those risks to
            a manageable level and making sure you can recover when something goes wrong.
          </p>
          <p>
            {businessInfo.brandName} takes a practical, layered approach. We help you protect
            accounts, devices and data, implement reliable backups and document recovery steps
            so your business can respond quickly to disruption without making unrealistic promises
            about absolute protection.
          </p>
        </>
      }
      included={included}
      scenarios={scenarios}
      process={process}
      related={related}
      ctaTitle="Protect your business data and operations"
      ctaText="Tell us about your current security and backup setup and we can recommend a practical next step."
      icon={Shield}
    />
  );
}
