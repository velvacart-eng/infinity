import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerNav, businessInfo, mainNav } from "@/lib/config";
import { services } from "@/lib/services-data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-brand-muted py-10 md:py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="space-y-3 lg:col-span-2">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Business IT services and technology solutions for organizations
              that need dependable infrastructure.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/business-communication"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Business Communication
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/web-cloud"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Web & Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/infrastructure"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/security-continuity"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Security & Continuity
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-sm font-medium text-brand-accent-dark transition-colors hover:text-brand-accent"
                >
                  All services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              {mainNav
                .filter((item) => item.href !== "/")
                .map((item) => (
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
            <h3 className="mb-3 text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2">
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

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {businessInfo.brandName}. A brand operated by{" "}
            {businessInfo.legalName}.
          </p>
        </div>
      </div>
    </footer>
  );
}
