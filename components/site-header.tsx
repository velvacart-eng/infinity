import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CTAButton } from "@/components/cta-button";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/75 shadow-sm backdrop-blur-2xl supports-[backdrop-filter]:bg-white/70">
      <div className="container mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-4">
          <MainNav />
          <CTAButton href="/contact" size="lg" className="hidden md:inline-flex shadow-primary/20">
            Talk to Us
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
