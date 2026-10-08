export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface BusinessInfo {
  brandName: string;
  legalName: string;
  siteUrl: string;
  address: string;
  email: string;
  phone: string;
  hours: string;
}

export interface Scenario {
  title: string;
  description: string;
}

export interface IncludedService {
  title: string;
  description: string;
}

export interface Consideration {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  overview: string[];
  includedServices: IncludedService[];
  benefits: string[];
  scenarios: Scenario[];
  process: { step: string; title: string; description: string }[];
  considerations?: Consideration[];
  whoFor: string[];
  faqs: FaqItem[];
  relatedServices: string[];
}

export interface LandingPage {
  slug: string;
  title: string; // H1
  eyebrow?: string;
  shortDescription: string;
  intro: string[];
  providerName?: string;
  independentDisclosure?: string;
  serviceCategory?: string;
  searchIntent?: string;
  whatWeHelpWith: { title: string; description: string }[];
  benefits: string[];
  scenarios?: Scenario[];
  detailedSections?: { title: string; paragraphs: string[] }[];
  process?: { step: string; title: string; description: string }[];
  technicalConsiderations?: Consideration[];
  securityConsiderations?: Consideration[];
  whoItIsFor: string[];
  relatedServices: string[]; // slugs from services-data or landing-pages-data
  faqs: FaqItem[];
  ctaTitle: string;
  ctaDescription: string;
  seoTitle: string;
  seoDescription: string;
  canonical?: string;
  noIndex?: boolean;
  breadcrumbs: NavItem[];
}
