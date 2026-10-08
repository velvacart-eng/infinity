import { BusinessInfo, NavItem } from "@/types";

export const businessInfo: BusinessInfo = {
  brandName: process.env.NEXT_PUBLIC_BRAND_NAME || "Infinity Techiez",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME || "Advanced Vision Software LLC",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://infinitytechiez.com",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "info@infinitytechiez.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "",
};

export const siteConfig = {
  name: businessInfo.brandName,
  legalName: businessInfo.legalName,
  url: businessInfo.siteUrl,
  description:
    "Business IT services and technology solutions that help organizations stay connected, productive and secure.",
  keywords: [
    "business IT services",
    "managed IT services",
    "cloud services",
    "business email",
    "domain registration",
    "web hosting",
    "cybersecurity",
    "backup and recovery",
    "IT infrastructure",
  ],
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export const contactNav: NavItem = { label: "Contact", href: "/contact" };

export const footerNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Acceptable Use", href: "/acceptable-use" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Service Delivery", href: "/service-delivery" },
  { label: "Data Processing", href: "/data-processing" },
];
