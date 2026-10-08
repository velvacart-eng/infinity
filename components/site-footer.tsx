import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerNav, businessInfo, mainNav } from "@/lib/config";
import { services } from "@/lib/services-data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-ink py-14 text-slate-300 md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-3">
            <Logo className="text-white" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              Business IT services and technology solutions for organizations
              that need dependable, well-managed infrastructure.
            </p>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Solutions</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/solutions/business-communication" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Business Communication
                </Link>
              </li>
              <li>
                <Link href="/solutions/web-cloud" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Web & Cloud
                </Link>
              </li>
              <li>
                <Link href="/solutions/infrastructure" className="text-sm text-slate-400 transition-colors hover:text-white">
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/solutions/security-continuity" className="text-sm text-slate-400 transition-colors hover:text-white">
                  Security & Continuity
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="space-y-2.5">
              {mainNav
                .filter((item) => item.href !== "/")
                .map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">Legal</h3>
            <ul className="space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {businessInfo.brandName}. A brand operated by{" "}
            {businessInfo.legalName}.
          </p>
          <p className="text-sm text-slate-500">Business IT services & technology solutions.</p>
        </div>
      </div>
    </footer>
  );
}
