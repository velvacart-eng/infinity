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

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  seoTitle: string;
  seoDescription: string;
  overview: string;
  includedServices: string[];
  benefits: string[];
  scenarios: Scenario[];
  process: { step: string; title: string; description: string }[];
  securityConsiderations?: string[];
  faqs: FaqItem[];
  relatedServices: string[];
}
