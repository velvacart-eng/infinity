import Link from "next/link";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { footerNav, businessInfo } from "@/lib/config";
import { services } from "@/lib/services-data";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-brand-muted/60 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm text-muted-foreground">
              {businessInfo.brandName} is a brand operated by{" "}
              {businessInfo.legalName}. Business IT services and technology
              solutions for organizations that need dependable infrastructure.
            </p>
            {(businessInfo.email || businessInfo.phone || businessInfo.address || businessInfo.hours) && (
              <div className="space-y-2 pt-2 text-sm text-muted-foreground">
                {businessInfo.email && (
                  <p>
                    <span className="font-medium text-foreground">Email:</span>{" "}
                    {businessInfo.email}
                  </p>
                )}
                {businessInfo.phone && (
                  <p>
                    <span className="font-medium text-foreground">Phone:</span>{" "}
                    {businessInfo.phone}
                  </p>
                )}
                {businessInfo.address && (
                  <p>
                    <span className="font-medium text-foreground">Address:</span>{" "}
                    {businessInfo.address}
                  </p>
                )}
                {businessInfo.hours && (
                  <p>
                    <span className="font-medium text-foreground">Hours:</span>{" "}
                    {businessInfo.hours}
                  </p>
                )}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-foreground">
              Legal
            </h3>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {businessInfo.brandName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            {businessInfo.brandName} is a brand operated by{" "}
            {businessInfo.legalName}
          </p>
        </div>
      </div>
    </footer>
  );
}
