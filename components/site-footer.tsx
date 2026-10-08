import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Logo } from "@/components/logo";
import { footerNav, businessInfo, mainNav } from "@/lib/config";
import { services } from "@/lib/services-data";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-brand-ink py-14 text-slate-300 md:py-20">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & contact */}
          <div className="space-y-6 lg:col-span-4">
            <Logo className="text-white" />
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Modern business IT services and technology solutions for organizations
              that need secure, scalable, and well-managed infrastructure.
            </p>
            <div className="space-y-3 text-sm">
              {businessInfo.email && (
                <a
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  {businessInfo.email}
                </a>
              )}
              {businessInfo.phone && (
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-3 text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  {businessInfo.phone}
                </a>
              )}
              {businessInfo.address && (
                <div className="flex items-start gap-3 text-slate-400">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <span>{businessInfo.address}</span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-primary/40 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-primary/40 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-400 transition-colors hover:border-primary/40 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">Solutions</h3>
            <ul className="space-y-3">
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

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
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

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-3">
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

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-white">Legal</h3>
            <ul className="space-y-3">
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

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
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
