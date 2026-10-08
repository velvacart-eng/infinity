import { Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CTAButton } from "@/components/cta-button";
import { businessInfo } from "@/lib/config";

export function SiteHeader() {
  const phoneHref = `tel:${businessInfo.phone.replace(/[^+\d]/g, "")}`;

  return (
    <>
      {/* Top bar — always-visible phone line */}
      <div className="fixed left-0 right-0 top-0 z-50 flex h-8 items-center justify-center bg-amber-400 text-amber-950">
        {businessInfo.phone && (
          <a
            href={phoneHref}
            className="inline-flex items-center gap-2 text-sm font-bold tracking-wide transition-opacity hover:opacity-80"
          >
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call us: {businessInfo.phone}
          </a>
        )}
      </div>

      {/* Main header */}
      <header className="fixed left-0 right-0 top-8 z-40 border-b border-white/10 bg-white/80 shadow-lg shadow-black/5 backdrop-blur-2xl supports-[backdrop-filter]:bg-white/75">
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
