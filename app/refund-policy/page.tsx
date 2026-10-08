import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Refund Policy",
  description: `Refund policy for services provided by ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Refund Policy", href: "/refund-policy" }]} />
      </div>
      <PageHero
        title="Refund Policy"
        description="Our approach to refunds and service credits."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by{" "}
            {businessInfo.legalName}, stands behind its work. This Refund Policy explains
            when refunds, re-performance and credits apply to our services, how to request
            them, and what is not covered. It applies to all services purchased directly
            from us.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Scope",
                paragraphs: [
                  "This policy covers services provided directly by us — such as email setup and configuration, email migration, DNS and domain management, issue resolution and ongoing administration. If a service agreement, quote or invoice contains specific refund or guarantee terms, those terms take precedence for that engagement.",
                  "Nothing in this policy limits any rights you may have under applicable consumer-protection law.",
                ],
              },
              {
                title: "2. Service fees and quotes",
                paragraphs: [
                  "Fees for one-time projects and recurring services are agreed in writing before work begins, and services start at our published minimum. The final scope and price are confirmed in your quote, statement of work or invoice.",
                  "Diagnostic and assessment time already performed is billable work. Where a diagnostic fee applies, it is disclosed before work begins.",
                ],
              },
              {
                title: "3. Our 30-day service guarantee",
                paragraphs: [
                  "If the same issue we addressed recurs within 30 days of a completed paid service — and is directly related to the work we performed — contact us and we will re-evaluate and, where appropriate, re-perform the affected work at no additional labor charge. Wherever practical, warranty work is handled remotely for speed.",
                  "The guarantee covers re-performance of the original work. It does not extend to new issues, issues caused by changes you or a third party made after our work, third-party platform outages, or problems unrelated to the original scope. Where we cannot provide a reasonable resolution to the covered issue, we will refund the covered labor charges.",
                ],
              },
              {
                title: "4. Cancellation before work begins",
                paragraphs: [
                  "You may cancel a one-time service for a full refund at any time before work has started. Once work has begun, a prorated amount may be retained for time and resources already committed.",
                  "Recurring services may be cancelled at any time. Cancellation stops future billing; it does not refund the current paid period unless required by law or stated in your agreement.",
                ],
              },
              {
                title: "5. When refunds apply",
                paragraphs: [
                  "Full or partial refunds may be issued where: we are unable to deliver the agreed service for reasons within our control; the delivered service materially differed from the agreed scope and we cannot remedy it in a reasonable follow-up; you were charged in error or charged twice; or a refund is required by law.",
                  "Approved refunds are returned to the original payment method within 5–10 business days. Exact timing depends on your bank or payment provider.",
                ],
              },
              {
                title: "6. What is not refundable",
                paragraphs: [
                  "Third-party costs — domain registrations and renewals, hosting fees, software licenses, platform subscriptions (such as email or cloud plans) and similar purchases made on your behalf — are governed by those providers' policies and are generally non-refundable once paid or registered.",
                  "Services already delivered and accepted, diagnostic work already performed, and issues arising from third-party platforms, account suspensions by providers, or changes outside our control are not refundable. Dissatisfaction with a third-party platform's features, pricing or policies is not a basis for a refund of our labor.",
                ],
              },
              {
                title: "7. How to request a refund or re-fix",
                paragraphs: [
                  `Contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"} within 30 days of the service. Include the email used at purchase, the approximate service date, a description of the issue, and whether you are requesting a re-fix or a refund. We acknowledge requests within 1 business day and provide a decision within 5 business days.`,
                ],
              },
              {
                title: "8. Billing disputes and chargebacks",
                paragraphs: [
                  "If you believe a billing error occurred, please contact us first — most issues are resolved within 24–48 hours. Filing a chargeback without first attempting direct resolution may delay resolution; we may provide session logs, communications and proof of services rendered to your payment provider in response.",
                  "Nothing in this section limits your legal right to dispute a charge through your card issuer where permitted by law.",
                ],
              },
              {
                title: "9. Service credits",
                paragraphs: [
                  "For recurring or managed services, service credits may be offered instead of a cash refund where downtime or missed response times occur, as defined in your service agreement.",
                ],
              },
              {
                title: "10. Changes to this policy",
                paragraphs: [
                  "We may update this Refund Policy from time to time. The version in effect at the time of your purchase applies to that transaction. Material changes will be posted on this page with a revised date.",
                ],
              },
              {
                title: "11. Contact us",
                paragraphs: [
                  `To discuss a refund, repeat-service or billing concern, contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}. Our mailing address is ${businessInfo.legalName}, ${businessInfo.address}.`,
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
