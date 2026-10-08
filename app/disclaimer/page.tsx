import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  description: `Disclaimer for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName} — independent third-party services, trademarks and liability information.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Disclaimer", href: "/disclaimer" }]} />
      </div>
      <PageHero
        title="Disclaimer"
        description="Important information about our services, third-party brand references and the limits of this website's content."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            This disclaimer applies to the website and services of {businessInfo.brandName}, a
            brand operated by {businessInfo.legalName}. By using this website, you acknowledge and
            accept the points below.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Independent third-party service provider",
                paragraphs: [
                  `${businessInfo.brandName} is an independent technology services company. We are not affiliated with, endorsed by, sponsored by or connected to Comcast, AT&T, Yahoo, AOL, Microsoft, Google or any other email, hosting, software or technology platform vendor mentioned on this website. Any assistance we provide for third-party platforms is performed as an independent service provider.`,
                ],
              },
              {
                title: "2. Trademarks and brand names",
                paragraphs: [
                  "All product names, company names, trademarks, service marks, logos and brand names referenced on this website are the property of their respective owners. Any such references are made strictly for identification, informational and nominative purposes to describe the platforms we can help configure, migrate or administer — they do not imply any affiliation, partnership or endorsement.",
                ],
              },
              {
                title: "3. Provider-controlled account actions",
                paragraphs: [
                  "For sign-in verification, credential changes or other provider-controlled account actions, customers may be directed to the relevant provider's official process. Only the account provider can verify ownership, restore access or reverse provider-side restrictions, and those steps are outside our control.",
                  "We will always tell you when a request falls into this category and guide you to the correct official channel rather than attempting unsupported workarounds.",
                ],
              },
              {
                title: "4. Informational content",
                paragraphs: [
                  "The content on this website, including service guides and help articles, is provided for general informational purposes only. While we work to keep information accurate and current, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability or suitability of the information for any particular purpose.",
                ],
              },
              {
                title: "5. Third-party platforms and settings",
                paragraphs: [
                  "Platform features, configuration steps, pricing and policies of third-party providers (such as email and hosting vendors) are controlled by those providers and may change without notice — including provider-initiated platform transitions. Always confirm critical settings directly with your platform or service provider where required.",
                ],
              },
              {
                title: "6. Scope of our services",
                paragraphs: [
                  "Our services are limited to the configuration, migration, administration and advisory work described in a written agreement or engagement. We do not provide official support on behalf of any third-party vendor, and we do not have access to provider-side systems, internal account data or proprietary tools of those vendors.",
                ],
              },
              {
                title: "7. Results and outcomes",
                paragraphs: [
                  "Technology outcomes can depend on factors outside our control, including provider-side limits, account history and third-party policies. We commit to reasonable skill and care, but we do not guarantee a specific result in every engagement.",
                ],
              },
              {
                title: "8. Phishing and scam awareness",
                paragraphs: [
                  "We will never ask for your password by unsolicited email, text or pop-up. If you receive a message claiming to be from us or from an email provider requesting urgent action or payment, verify it by contacting us or the provider through official channels before responding.",
                ],
              },
              {
                title: "9. No professional advice",
                paragraphs: [
                  "Nothing on this website constitutes legal, financial or regulatory advice. For matters such as compliance, data protection law or contractual obligations, consult a qualified professional.",
                ],
              },
              {
                title: "10. External links",
                paragraphs: [
                  "This website may contain links to third-party websites for convenience. We do not control and are not responsible for the content, policies or practices of any external site.",
                ],
              },
              {
                title: "11. Contact us",
                paragraphs: [
                  `If you have questions about this disclaimer, please contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}.`,
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
