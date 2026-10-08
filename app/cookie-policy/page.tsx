import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Cookie Policy",
  description: `Cookie policy for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Cookie Policy", href: "/cookie-policy" }]} />
      </div>
      <PageHero
        title="Cookie Policy"
        description="How we use cookies and similar technologies on our website."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by {businessInfo.legalName}, uses cookies and
            similar technologies on this website. This Cookie Policy explains what these
            technologies are, which categories we use and why, and the choices available to you.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. What are cookies?",
                paragraphs: [
                  "Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work efficiently, remember preferences, keep sessions secure and provide anonymized usage information to site owners. Similar technologies include pixels, tags, web beacons and local storage — references to \"cookies\" in this policy cover those technologies as well.",
                  "Cookies can be \"session\" cookies (deleted when you close your browser) or \"persistent\" cookies (stored until they expire or you delete them). They may be set by us (\"first-party\") or by third-party services embedded in our pages (\"third-party\").",
                ],
              },
              {
                title: "2. Strictly necessary cookies",
                paragraphs: [
                  "These cookies are essential for the website to function — for example, maintaining security, balancing load, remembering your cookie preferences and enabling forms to work correctly. They cannot be switched off in our systems. You can block them in your browser settings, but parts of the site may then stop working.",
                ],
              },
              {
                title: "3. Analytics and performance cookies",
                paragraphs: [
                  "We may use analytics cookies (for example, Google Analytics) to understand how visitors find and use our pages — which content is helpful, how long visitors stay and where the site can be improved. The information collected is aggregated and does not directly identify you.",
                ],
              },
              {
                title: "4. Functionality cookies",
                paragraphs: [
                  "Functionality cookies remember choices you make (such as form preferences or region) so the website behaves consistently between visits. Disabling them may reduce convenience but will not block the core content.",
                ],
              },
              {
                title: "5. Advertising and measurement cookies",
                paragraphs: [
                  "Where advertising or conversion tags are enabled (for example, Google Ads or Tag Manager), cookies may be used to measure campaign performance and prevent you from seeing the same advert repeatedly. These cookies are set by the advertising platform and are governed by that platform's own policies.",
                ],
              },
              {
                title: "6. Third-party cookies",
                paragraphs: [
                  "Some features on our site rely on third-party services that may set their own cookies — analytics providers, embedded tools or security services. We do not control those cookies. Please review the relevant third party's privacy and cookie policies for details and opt-out options.",
                ],
              },
              {
                title: "7. How long cookies last",
                paragraphs: [
                  "Session cookies expire when you close your browser. Persistent cookies remain for a defined period — from a few minutes to up to two years for some analytics identifiers — unless you delete them earlier through your browser.",
                ],
              },
              {
                title: "8. How to manage or disable cookies",
                paragraphs: [
                  "Most browsers let you view, block or delete cookies through their settings. You can usually find controls under 'Privacy' or 'Site settings'. Blocking all cookies may prevent some features of this website — such as forms or saved preferences — from working properly.",
                  "You can also opt out of interest-based advertising through industry tools such as the NAI and Digital Advertising Alliance opt-out pages, and Google Analytics offers a browser opt-out add-on.",
                ],
              },
              {
                title: "9. Do Not Track",
                paragraphs: [
                  "Some browsers send a 'Do Not Track' signal. Because there is no industry standard for responding to it, our website does not currently alter its behavior based on that signal.",
                ],
              },
              {
                title: "10. Changes to this policy",
                paragraphs: [
                  "We may update this Cookie Policy to reflect changes in the technologies we use or legal requirements. Updates will be posted on this page with a revised date, and we encourage you to review it periodically.",
                ],
              },
              {
                title: "11. Contact us",
                paragraphs: [
                  `If you have questions about this Cookie Policy, please contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}.`,
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
