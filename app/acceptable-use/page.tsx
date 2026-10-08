import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Acceptable Use Policy",
  description: `Acceptable use policy for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/acceptable-use",
});

export default function AcceptableUsePage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Acceptable Use", href: "/acceptable-use" }]} />
      </div>
      <PageHero
        title="Acceptable Use Policy"
        description="Rules and expectations for using our website and services responsibly."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            This Acceptable Use Policy (&ldquo;Policy&rdquo;) sets out the rules for using the
            website, contact channels and services provided by {businessInfo.brandName}, a brand
            operated by {businessInfo.legalName}. By accessing our website or engaging our
            services, you agree to follow this Policy.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Purpose and scope",
                paragraphs: [
                  "This Policy exists to keep our website, systems and services safe and lawful for everyone. It applies to all visitors to this website and all customers who engage our IT services, including work we perform on systems you own or control.",
                ],
              },
              {
                title: "2. Lawful use only",
                paragraphs: [
                  "You may use our website and services only for lawful purposes and in accordance with applicable local, state, national and international laws and regulations. You must not use our services to facilitate, encourage or enable any unlawful activity.",
                ],
              },
              {
                title: "3. Prohibited activities",
                paragraphs: [
                  "You must not use the website or our services to: violate any law or regulation; infringe intellectual-property or privacy rights; transmit malware, viruses or malicious code; send spam or unsolicited bulk communications; run phishing, fraud or deceptive schemes; harass, threaten, defame or harm others; or distribute content that is unlawful, abusive or otherwise objectionable.",
                  "You must not attempt to probe, scan or test the vulnerability of our website or systems; breach or bypass security or authentication measures; gain unauthorized access to any server, network or account; interfere with service to any user, host or network; or use automated tools to scrape, harvest or overload the website.",
                ],
              },
              {
                title: "4. Accurate information and authorization",
                paragraphs: [
                  "You must provide truthful information in our forms and communications. You may only request work on accounts, devices, domains and systems that you own or are authorized to manage. We may ask for proof of ownership or authorization before performing account-related work, and we may decline requests where authorization cannot be verified.",
                ],
              },
              {
                title: "5. Service inquiries and communications",
                paragraphs: [
                  "Contact forms, email addresses and phone lines listed on this website are intended for genuine business inquiries. Misuse — including spam, automated submissions, abusive language or fraudulent requests — may result in messages being ignored, blocked or reported where appropriate.",
                ],
              },
              {
                title: "6. Intellectual property",
                paragraphs: [
                  "All content on this website — including text, graphics, logos, illustrations and design — is the property of us or our licensors. You may view and print pages for personal or internal business reference, but you may not reproduce, redistribute, sell or create derivative works from our content without prior written permission.",
                ],
              },
              {
                title: "7. Monitoring and enforcement",
                paragraphs: [
                  "We may investigate suspected violations of this Policy and may remove content, block access, refuse service, suspend or terminate an engagement, or report conduct to relevant authorities where required. We are not obligated to monitor the website or customer systems, but we may do so where reasonably necessary to protect our services and users.",
                ],
              },
              {
                title: "8. Consequences of violation",
                paragraphs: [
                  "Violations of this Policy may result in warning, refusal of service, suspension or termination of an engagement, and — where required — disclosure to law-enforcement or affected third parties. Serious or repeated violations may result in a permanent refusal of service. No refunds are owed for engagements terminated due to violation of this Policy.",
                ],
              },
              {
                title: "9. Reporting abuse",
                paragraphs: [
                  `If you become aware of misuse of our website or services, please report it to us at ${businessInfo.email || "our Contact page"}. Include as much detail as possible so we can investigate promptly.`,
                ],
              },
              {
                title: "10. Changes to this policy",
                paragraphs: [
                  "We may update this Policy at any time. The current version is posted on this page, and continued use of the website or our services after changes take effect constitutes acceptance of the updated Policy.",
                ],
              },
              {
                title: "11. Contact us",
                paragraphs: [
                  `If you have questions about this Acceptable Use Policy, please contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}.`,
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
