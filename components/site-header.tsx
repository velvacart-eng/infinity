import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CTAButton } from "@/components/cta-button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-3">
          <MainNav />
          <CTAButton href="/contact" className="hidden md:inline-flex shadow-sm">
            Talk to Us
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
