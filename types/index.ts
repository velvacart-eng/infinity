export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
}

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
