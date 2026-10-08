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
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by {businessInfo.legalName}, uses cookies and
            similar technologies on this website. This policy explains what cookies are, how we use
            them and the choices available to you.
          </p>
          <div className="mt-10 space-y-8">
            {[
              {
                title: "What are cookies?",
                text: "Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences, understand how visitors use the site and improve functionality.",
              },
              {
                title: "Types of cookies we use",
                text: "We use essential cookies that are necessary for the website to operate, such as maintaining security and session state. We may also use analytics cookies to understand how visitors interact with our pages and to improve content and performance.",
              },
              {
                title: "Managing cookies",
                text: "Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, though this may affect how the website functions.",
              },
              {
                title: "Third-party services",
                text: "We may use third-party analytics or service providers that place their own cookies. These providers have their own privacy and cookie policies.",
              },
              {
                title: "Updates to this policy",
                text: "We may update this Cookie Policy from time to time. Changes will be posted on this page with a revised effective date.",
              },
              {
                title: "Contact us",
                text: `If you have questions about this Cookie Policy, please contact us at ${businessInfo.email || "our Contact page"}.`,
              },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="text-h3 font-semibold tracking-tight">{item.title}</h2>
                <p className="mt-2 leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
