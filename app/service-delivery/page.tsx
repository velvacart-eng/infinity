import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Service Delivery",
  description: `How ${businessInfo.brandName} delivers business IT services, from onboarding to ongoing service management.`,
  path: "/service-delivery",
});

export default function ServiceDeliveryPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Service Delivery", href: "/service-delivery" }]} />
      </div>
      <PageHero
        title="Service Delivery"
        description="How we scope, deliver and manage business technology services."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by {businessInfo.legalName}, follows a
            structured delivery process so clients know what to expect — from the first
            conversation through ongoing service. This page explains how engagements are
            scoped, delivered, verified and managed.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Initial contact and intake",
                paragraphs: [
                  "Engagements start when you contact us by phone, email or the website form. We gather basic details about your business, the systems involved, what you are trying to achieve and any urgency. There is no charge for this initial assessment.",
                ],
              },
              {
                title: "2. Discovery and scope definition",
                paragraphs: [
                  "For anything beyond a simple fix, we run a short discovery phase: reviewing your current setup, account types, domain and DNS configuration, and any constraints. The outcome is a written scope — what will be done, what is excluded, and any assumptions — so there are no surprises.",
                ],
              },
              {
                title: "3. Quote and authorization",
                paragraphs: [
                  "You receive a clear quote with pricing, timeline and deliverables before work begins. Work starts only after you accept the quote and any required deposit is received. One-time fixes typically start at our published minimum; larger projects are quoted per job.",
                  "We may verify account ownership or authorization before performing account-level work, particularly for email and domain services.",
                ],
              },
              {
                title: "4. Delivery — remote-first",
                paragraphs: [
                  "Most of our work is delivered remotely using secure remote-access tools, with your knowledge and consent. You can observe sessions and revoke access at any time. Where on-site or hardware work is genuinely needed, it is arranged separately.",
                ],
              },
              {
                title: "5. Verification and testing",
                paragraphs: [
                  "Before handover we verify the work — for email engagements that means send/receive tests on each configured device, DNS and authentication checks, and confirmation that migrated mailboxes contain the expected data. You are asked to confirm the result before the job is closed.",
                ],
              },
              {
                title: "6. Documentation and handover",
                paragraphs: [
                  "Completed work is documented: settings applied, records changed, accounts configured and anything you should know going forward. You receive this documentation so you are not dependent on us for routine information.",
                ],
              },
              {
                title: "7. Timelines and dependencies",
                paragraphs: [
                  "Estimated timelines depend on scope and on factors outside our control — DNS propagation, third-party provider queues, account verification steps and your availability for approvals. We communicate realistic timelines and flag delays promptly.",
                ],
              },
              {
                title: "8. Communication and reporting",
                paragraphs: [
                  "You get a named point of contact for each engagement, progress updates at agreed checkpoints, and a summary when work is completed. For recurring services, periodic reporting is defined in your service agreement.",
                ],
              },
              {
                title: "9. Service levels and availability",
                paragraphs: [
                  "Standard service is delivered during normal business hours. Response-time targets for recurring clients are defined in each agreement. Urgent, same-day or out-of-hours work may be available for an additional fee — contact us to confirm availability.",
                ],
              },
              {
                title: "10. Escalation",
                paragraphs: [
                  "If something is not right, raise it with your point of contact first. If it is not resolved, escalate by email marked 'Escalation' and a senior technician will review within one business day.",
                ],
              },
              {
                title: "11. Warranty on completed work",
                paragraphs: [
                  "Completed work carries the 30-day service guarantee described in our Refund Policy: if the same covered issue recurs within 30 days, we re-evaluate and re-fix at no additional labor charge.",
                ],
              },
              {
                title: "12. Client responsibilities",
                paragraphs: [
                  "Timely delivery relies on you providing accurate information, access to the required accounts and systems, and approval at agreed checkpoints. Delays in access or approvals may shift delivery timelines accordingly.",
                ],
              },
              {
                title: "13. Contact us",
                paragraphs: [
                  `To start an engagement or ask about delivery of a specific service, contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}.`,
                ],
              },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-h3 font-semibold tracking-tight">{item.title}</h2>
                <div className="mt-3 space-y-3">
                  {item.paragraphs.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
