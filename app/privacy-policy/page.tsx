import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Privacy Policy", href: "/privacy-policy" }]} />
      </div>
      <PageHero
        title="Privacy Policy"
        description="How we handle information in connection with our business technology services."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName} (&ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) is a brand operated by{" "}
            {businessInfo.legalName}. This Privacy Policy describes how we collect, use,
            disclose and protect personal information in connection with our website,
            contact forms, communications and business technology services.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Scope of this policy",
                paragraphs: [
                  "This Privacy Policy applies to information collected through this website, our contact and inquiry forms, email and phone communications, and in the course of delivering our IT services. It does not apply to third-party websites, platforms or services that we do not control, even where we help you configure or administer them.",
                  "By using this website or submitting information to us, you acknowledge the practices described in this policy.",
                ],
              },
              {
                title: "2. Information we collect",
                paragraphs: [
                  "Information you provide directly: name, business or company name, email address, phone number, the service you are interested in, and the contents of any message or request you send us through our forms, by email or by phone.",
                  "Information collected automatically: when you visit our website, standard technical data such as IP address, browser type, device information, pages visited and referring URLs may be collected through server logs and analytics tools.",
                  "Information processed during service delivery: when you engage us for IT services, we may handle account details, domain and DNS records, email configuration data, login credentials you choose to share, and other technical information necessary to perform the agreed work. Please see our Data Processing page for more detail.",
                ],
              },
              {
                title: "3. How we use your information",
                paragraphs: [
                  "We use the information we collect to respond to inquiries and provide quotes; schedule, deliver and manage the services you request; communicate with you about your account, projects and support matters; send invoices and process payments; improve our website, services and customer experience; comply with legal obligations; and protect against fraud, abuse and security threats.",
                  "We do not sell your personal information, and we do not use your business data for unrelated marketing.",
                ],
              },
              {
                title: "4. Cookies and analytics",
                paragraphs: [
                  "Our website may use cookies and similar technologies for essential functionality, analytics and — where advertising tags are configured — measuring the effectiveness of our campaigns. For full details, including how to manage or disable cookies, please read our Cookie Policy.",
                ],
              },
              {
                title: "5. How we share information",
                paragraphs: [
                  "We share personal information only in limited circumstances: with service providers and subprocessors who help us operate our business (such as hosting, email, payment processing and analytics providers); with third-party vendors you ask us to work with on your behalf (such as domain registrars, hosting platforms or email providers); when required by law, regulation, legal process or governmental request; in connection with a merger, acquisition or sale of business assets, subject to confidentiality; and with your consent or at your direction.",
                  "All third parties we work with are expected to handle information in a manner consistent with this policy and applicable law.",
                ],
              },
              {
                title: "6. Data retention",
                paragraphs: [
                  "We retain personal information only for as long as necessary to fulfil the purposes described in this policy, to maintain our business records, and to comply with legal, accounting or reporting obligations. When information is no longer needed, we delete it or anonymize it using reasonable methods. Contact form submissions and project records are retained for a limited operational period and then removed.",
                ],
              },
              {
                title: "7. Data security",
                paragraphs: [
                  "We apply reasonable administrative, technical and physical safeguards designed to protect personal information against unauthorized access, loss, misuse or alteration. These include access controls, least-privilege handling of credentials and secure disposal practices.",
                  "However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. If we become aware of a data breach affecting your personal information, we will take appropriate steps consistent with applicable law.",
                ],
              },
              {
                title: "8. Your rights and choices",
                paragraphs: [
                  "Depending on your location, you may have rights to access, correct, update or delete personal information we hold about you; to object to or restrict certain processing; and to withdraw consent where processing is based on consent.",
                  "To exercise any of these rights, contact us using the details below. We will respond within a reasonable timeframe. You may also opt out of marketing communications at any time by following the unsubscribe instructions in our emails or contacting us directly.",
                ],
              },
              {
                title: "9. Third-party platforms and links",
                paragraphs: [
                  "Our website and services reference and interact with third-party platforms such as email providers, domain registrars and hosting companies. Those platforms operate under their own privacy policies, which we encourage you to review. We are not responsible for the privacy practices of third parties.",
                ],
              },
              {
                title: "10. Children's privacy",
                paragraphs: [
                  "Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children under the age of 13 (or the applicable age in your jurisdiction). If you believe a child has provided us with personal information, please contact us and we will delete it.",
                ],
              },
              {
                title: "11. International data transfers",
                paragraphs: [
                  "We are based in the United States and information we collect may be processed and stored in the United States or other countries where we or our service providers operate. By using our services, you acknowledge that your information may be transferred to jurisdictions that may have different data protection rules than your own.",
                ],
              },
              {
                title: "12. Changes to this policy",
                paragraphs: [
                  "We may update this Privacy Policy from time to time to reflect changes in our practices, technology or legal requirements. The updated version will be posted on this page with a revised date. Your continued use of the website after changes are posted constitutes acceptance of the updated policy.",
                ],
              },
              {
                title: "13. Contact us",
                paragraphs: [
                  `If you have questions, concerns or requests regarding this Privacy Policy or our handling of personal information, please contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}. You can also write to us at ${businessInfo.legalName}, ${businessInfo.address}.`,
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
