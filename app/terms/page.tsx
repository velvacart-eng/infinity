import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Terms of Service", href: "/terms" }]} />
      </div>
      <PageHero
        title="Terms of Service"
        description="The terms that apply to the use of our website and services."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website and
            services provided by {businessInfo.brandName}, a brand operated by{" "}
            {businessInfo.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;). By accessing
            this website or engaging our services, you agree to be bound by these Terms.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Agreement and acceptance",
                paragraphs: [
                  "These Terms form a binding agreement between you and us. By accessing the website, submitting a form, requesting a quote or engaging our services, you confirm that you have read, understood and agree to these Terms. If you are acting on behalf of a business, you represent that you are authorized to bind that business to these Terms.",
                  "If you do not agree with any part of these Terms, you must not use the website or our services.",
                ],
              },
              {
                title: "2. Description of services",
                paragraphs: [
                  "We provide independent business IT services including business email setup, configuration and administration; email migration; DNS and domain management; website-related technical work; and related consulting. The specific scope, deliverables, timeline and price of any engagement are defined in a written quote, statement of work or service agreement agreed before work begins.",
                  "We are an independent service provider and are not affiliated with, endorsed by or sponsored by any email, hosting, domain, software or technology vendor referenced on this website, including Comcast, AT&T, Yahoo, AOL, Microsoft or Google.",
                ],
              },
              {
                title: "3. Independent third-party status",
                paragraphs: [
                  "All trademarks, service marks and brand names referenced on this website are the property of their respective owners and are used for identification purposes only. Where we assist with third-party platforms, we do so as an independent contractor; we do not represent, act on behalf of, or have access to the internal systems of those vendors.",
                  "For account recovery, password resets and provider-controlled account actions, customers may be required to follow the relevant provider's official processes directly.",
                ],
              },
              {
                title: "4. Quotes, orders and acceptance of work",
                paragraphs: [
                  "Quotes and proposals are valid for the period stated in them (or 30 days if none is stated). Work begins once the quote, statement of work or invoice is accepted and any required payment or deposit is received. Any change in scope may require a revised quote.",
                  "We may decline or cancel an engagement where information provided is inaccurate, where the requested work is outside our capability, or where we reasonably believe the request may involve unlawful, misleading or harmful activity.",
                ],
              },
              {
                title: "5. Fees, invoicing and payment",
                paragraphs: [
                  "Fees are stated in the applicable quote or invoice. Unless otherwise agreed in writing, payment is due on receipt of invoice for one-time work, and in advance for recurring services. Late payments may pause ongoing work until the account is brought current.",
                  "You are responsible for any applicable taxes. Third-party costs (such as domain registrations, hosting fees or platform subscriptions) are billed by or payable to those providers and are separate from our service fees unless expressly included in a quote.",
                ],
              },
              {
                title: "6. Your responsibilities",
                paragraphs: [
                  "You agree to provide accurate information, timely responses and reasonable access to the accounts, systems and personnel needed to perform the work. You remain the owner of your accounts and data and are responsible for maintaining your own backups unless a backup service is expressly included in scope.",
                  "You must ensure you have the legal right and authorization to give us access to any system, account or data. You are responsible for activity that occurs under credentials you provide to us until access is revoked or changed.",
                ],
              },
              {
                title: "7. Remote access and authorization",
                paragraphs: [
                  "Where remote access tools are used, you authorize our personnel to access the relevant devices and accounts solely to perform the requested work. Remote sessions are conducted with your knowledge, and you may observe or terminate a session at any time.",
                  "We will not access areas of your systems beyond what is reasonably necessary for the agreed work, and we will not retain credentials after an engagement ends unless ongoing administration is part of the agreed scope.",
                ],
              },
              {
                title: "8. Intellectual property",
                paragraphs: [
                  "All content on this website — including text, graphics, logos and design — is owned by us or our licensors and is protected by intellectual property laws. You may view and print pages for your own use but may not reproduce, distribute or republish content without written permission.",
                  "Work product created specifically for you (such as configured settings, documentation or setup assets) belongs to you once paid for in full. Our pre-existing tools, methods and templates remain our property.",
                ],
              },
              {
                title: "9. Confidentiality",
                paragraphs: [
                  "We treat non-public business information, credentials and technical details shared with us during an engagement as confidential and use them only to deliver the agreed services. We expect the same treatment of our proprietary methods, pricing and documentation.",
                ],
              },
              {
                title: "10. Acceptable use",
                paragraphs: [
                  "Your use of our website and services is subject to our Acceptable Use Policy. You must not use our services for unlawful activity, spam, fraud, or to harm third parties. We may refuse or discontinue work that violates that policy.",
                ],
              },
              {
                title: "11. Warranties and disclaimers",
                paragraphs: [
                  "We perform services with reasonable skill and care. If the same issue we addressed recurs within the warranty period stated in our Refund Policy or your agreement, we will re-evaluate and, where appropriate, re-perform the affected work at no additional labor charge.",
                  "Except as expressly stated, services are provided &ldquo;as is&rdquo; and we disclaim all other warranties, express or implied, including merchantability, fitness for a particular purpose and non-infringement. We do not warrant that third-party platforms will operate without interruption or that every technical outcome can be achieved.",
                ],
              },
              {
                title: "12. Limitation of liability",
                paragraphs: [
                  `To the fullest extent permitted by law, ${businessInfo.legalName} and its personnel are not liable for indirect, incidental, special, consequential or punitive damages — including lost profits, lost data, loss of goodwill or business interruption — arising out of or related to the website or our services.`,
                  "Our total aggregate liability for any claim arising from an engagement is limited to the amount you paid us for the specific service giving rise to the claim in the three months preceding the event. Some jurisdictions do not allow certain limitations, so portions of this section may not apply to you.",
                ],
              },
              {
                title: "13. Indemnification",
                paragraphs: [
                  "You agree to indemnify and hold us harmless from claims, damages, losses and expenses arising out of your breach of these Terms, your misuse of the services, or your violation of any law or third-party right, including claims relating to data or accounts you ask us to access without proper authorization.",
                ],
              },
              {
                title: "14. Third-party services and dependencies",
                paragraphs: [
                  "Our work often depends on third-party platforms, vendors and infrastructure we do not control. Changes, outages, policy updates or actions taken by those providers may affect timelines and outcomes. We are not responsible for third-party failures, but we will make reasonable efforts to help you work with the relevant provider.",
                ],
              },
              {
                title: "15. Term, suspension and termination",
                paragraphs: [
                  "An engagement ends when the agreed work is completed, when a subscription period ends without renewal, or when either party terminates in accordance with the agreement. We may suspend or terminate work immediately for non-payment, breach of these Terms, unlawful requests or abusive conduct. Sections relating to payment, liability, confidentiality and disputes survive termination.",
                ],
              },
              {
                title: "16. Governing law and disputes",
                paragraphs: [
                  "These Terms are governed by the laws of the State of Wyoming, United States, without regard to conflict-of-law principles. Any dispute will be resolved in the state or federal courts located in Wyoming, and both parties consent to that jurisdiction, except where applicable law provides otherwise.",
                  "Before filing a claim, both parties agree to attempt good-faith resolution by contacting each other in writing and allowing at least 30 days to resolve the matter.",
                ],
              },
              {
                title: "17. Changes to these terms",
                paragraphs: [
                  "We may update these Terms from time to time. The current version is always posted on this page. Continued use of the website or services after changes take effect constitutes acceptance of the updated Terms.",
                ],
              },
              {
                title: "18. Contact us",
                paragraphs: [
                  `If you have questions about these Terms of Service, please contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}. Our mailing address is ${businessInfo.legalName}, ${businessInfo.address}.`,
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
