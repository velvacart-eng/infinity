import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Data Processing Agreement",
  description: `Data processing information for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/data-processing",
});

export default function DataProcessingPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Data Processing", href: "/data-processing" }]} />
      </div>
      <PageHero
        title="Data Processing Agreement"
        description="How we handle business data in connection with our technology services."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by {businessInfo.legalName}, may process
            business data when delivering IT services and technology administration. This page
            describes the categories of data we handle, the purposes and limits of that
            processing, and the safeguards and responsibilities involved.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Purpose and scope",
                paragraphs: [
                  "This statement applies to data we handle while delivering services such as business email setup and migration, DNS and domain management, account administration and related technical work. It summarizes our data-handling approach; where a formal data processing agreement is required for your organization, we can execute one as part of the service agreement.",
                ],
              },
              {
                title: "2. Roles and responsibilities",
                paragraphs: [
                  "For data you own or control, you act as the data controller and we act as a service provider or processor, handling that data only on your documented instructions and for the purposes of the agreed work. For our own business records (such as your contact details and invoices), we act as the controller.",
                ],
              },
              {
                title: "3. Categories of data we may process",
                paragraphs: [
                  "Depending on the engagement, this can include: business contact details (names, email addresses, phone numbers); account and login credentials you choose to share; mailbox metadata and, where necessary for migration, message contents; domain, DNS and DNS-record data; email client and server configuration; and technical logs generated during the work.",
                  "We aim to work with the minimum data needed for the task and encourage clients to share credentials through secure, revocable means such as temporary passwords or delegated access where the platform supports it.",
                ],
              },
              {
                title: "4. Purpose limitation",
                paragraphs: [
                  "We process data only to scope, deliver, verify and support the services described in our agreement with you. We do not sell client data, share it for unrelated marketing, or use it to build advertising profiles. Data shared with us for a specific job is not repurposed for other uses.",
                ],
              },
              {
                title: "5. Security measures",
                paragraphs: [
                  "We apply reasonable administrative, technical and physical safeguards, including: least-privilege access (personnel only access what a task requires); secure handling and storage of credentials; use of encrypted channels where available; documented remote-access practices; and secure deletion or return of data at the end of an engagement.",
                  "Specific measures can be adjusted based on the sensitivity of your data — for example, stricter handling for accounts containing regulated or confidential information.",
                ],
              },
              {
                title: "6. Sub-processors and third parties",
                paragraphs: [
                  "Some services require coordination with third parties such as domain registrars, hosting platforms, email providers (including Yahoo Mail for migrated comcast.net accounts), cloud providers and payment processors. Data is shared with them only as needed to deliver the service and is subject to those providers' own terms and privacy policies.",
                ],
              },
              {
                title: "7. Data retention and deletion",
                paragraphs: [
                  "We retain project data and credentials only as long as needed to complete the work, honour warranty obligations (such as our 30-day service guarantee) and meet legal or accounting requirements. When an engagement ends, shared credentials should be rotated or revoked, and we securely delete working copies of client data unless a different arrangement is agreed in writing.",
                ],
              },
              {
                title: "8. Incident response",
                paragraphs: [
                  "If we become aware of an incident affecting your data in our care, we will investigate promptly, take reasonable steps to contain it and notify you without undue delay, sharing what we know about the scope and the remediation steps taken.",
                ],
              },
              {
                title: "9. Your responsibilities",
                paragraphs: [
                  "You are responsible for providing accurate information; ensuring you own or are authorized to give us access to the accounts and data involved; maintaining your own backups unless a backup service is expressly in scope; and revoking or rotating credentials after work is completed.",
                ],
              },
              {
                title: "10. Data subject requests",
                paragraphs: [
                  "Where we process personal data on your behalf, you remain responsible for responding to requests from your own users or customers. We will provide reasonable assistance, within the limits of what we hold, where a request relates to data we process for you.",
                ],
              },
              {
                title: "11. Changes to this statement",
                paragraphs: [
                  "We may update this statement from time to time. The current version is posted on this page, and material changes are reflected in a revised date above.",
                ],
              },
              {
                title: "12. Contact us",
                paragraphs: [
                  `For questions about data processing or to request a formal data processing agreement, contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}.`,
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
