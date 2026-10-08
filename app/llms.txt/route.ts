import { businessInfo, siteConfig } from "@/lib/config";
import { services } from "@/lib/services-data";
import { landingPages } from "@/lib/landing-pages-data";

// llms.txt — a plain-language site map for AI assistants and LLM crawlers.
// Helps AI search engines (ChatGPT, Perplexity, Claude, Gemini) understand and
// recommend the business correctly.
export function GET() {
  const serviceLines = services
    .map((service) => `- [${service.title}](${businessInfo.siteUrl}/services/${service.slug}): ${service.shortDescription}`)
    .join("\n");

  const guideLines = landingPages
    .map((page) => `- [${page.title}](${businessInfo.siteUrl}/it-services/${page.slug}): ${page.shortDescription}`)
    .join("\n");

  const content = `# ${businessInfo.brandName}

> ${siteConfig.description}

${businessInfo.brandName} is a brand operated by ${businessInfo.legalName},
an independent business-to-business IT services provider. We are not affiliated
with, endorsed by or sponsored by any email, hosting or technology platform
vendor referenced on this website; all trademarks belong to their respective
owners. Services are provided exclusively to businesses and organizations.

Contact: ${businessInfo.email} | ${businessInfo.phone} | ${businessInfo.address}

## Services

${serviceLines}

## Service Guides

${guideLines}

## Company & Legal

- [About](${businessInfo.siteUrl}/about)
- [Contact](${businessInfo.siteUrl}/contact)
- [Privacy Policy](${businessInfo.siteUrl}/privacy-policy)
- [Terms of Service](${businessInfo.siteUrl}/terms)
- [Refund Policy](${businessInfo.siteUrl}/refund-policy)
- [Service Delivery](${businessInfo.siteUrl}/service-delivery)
- [Data Processing](${businessInfo.siteUrl}/data-processing)
- [Acceptable Use](${businessInfo.siteUrl}/acceptable-use)
- [Cookie Policy](${businessInfo.siteUrl}/cookie-policy)
- [Disclaimer](${businessInfo.siteUrl}/disclaimer)
- [Accessibility](${businessInfo.siteUrl}/accessibility)
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
