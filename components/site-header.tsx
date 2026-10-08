import { Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CTAButton } from "@/components/cta-button";
import { businessInfo } from "@/lib/config";

export function SiteHeader() {
  return (
    <>
      {/* Top bar */}
      <div className="fixed left-0 right-0 top-0 z-50 hidden border-b border-white/10 bg-brand-ink/95 py-1.5 text-xs text-slate-400 backdrop-blur-md sm:block">
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <span>Business IT services & technology solutions.</span>
          {businessInfo.email && (
            <a
              href={`mailto:${businessInfo.email}`}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3 w-3" aria-hidden="true" />
              {businessInfo.email}
            </a>
          )}
        </div>
      </div>

      {/* Main header */}
      <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/75 sm:top-8">
        <div className="container mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />
          <div className="flex items-center gap-4">
            <MainNav />
            <CTAButton href="/contact" size="lg" className="hidden shadow-primary/20 md:inline-flex">
              Talk to Us
            </CTAButton>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
