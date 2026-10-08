import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Accessibility Statement",
  description: `Accessibility statement for ${businessInfo.brandName}, a brand operated by ${businessInfo.legalName}.`,
  path: "/accessibility",
});

export default function AccessibilityPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Accessibility", href: "/accessibility" }]} />
      </div>
      <PageHero
        title="Accessibility Statement"
        description="Our commitment to making this website usable for everyone."
        gradient
      />
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-muted-foreground">
            {businessInfo.brandName}, a brand operated by {businessInfo.legalName}, is committed
            to ensuring this website is accessible to all users, including people with
            disabilities.
          </p>
          <p className="mt-4 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground/70">
            Last updated: October 2026
          </p>
          <div className="mt-10 space-y-10">
            {[
              {
                title: "1. Our commitment",
                paragraphs: [
                  "We aim to make this website conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA — the widely recognized standard for web accessibility. Accessibility is considered in our design and development decisions, including color contrast, readable typography, keyboard navigation and semantic page structure.",
                ],
              },
              {
                title: "2. Measures we take",
                paragraphs: [
                  "Our efforts include: text alternatives for meaningful images; clear heading structure and landmark regions; sufficient color contrast between text and backgrounds; keyboard-operable navigation and interactive elements; visible focus indicators; descriptive link text; and responsive layouts that work across screen sizes and zoom levels.",
                ],
              },
              {
                title: "3. Known limitations",
                paragraphs: [
                  "Despite our efforts, some areas may not yet be fully accessible — for example, certain decorative illustrations or third-party embedded content. We continue to review and improve the site and welcome reports of any barrier you encounter.",
                ],
              },
              {
                title: "4. Alternative access",
                paragraphs: [
                  "If you have difficulty using any part of this website, we are happy to help you directly. You can reach us by phone or email and we will provide the information or service you need through an accessible channel.",
                ],
              },
              {
                title: "5. Feedback",
                paragraphs: [
                  `To report an accessibility issue or request assistance, contact us at ${businessInfo.email || "our Contact page"} or call ${businessInfo.phone || "our listed phone number"}. Please include the page address and a description of the problem so we can address it promptly.`,
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
