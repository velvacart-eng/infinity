import Link from "next/link";
import { Logo } from "@/components/logo";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CTAButton } from "@/components/cta-button";
import { contactNav } from "@/lib/config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex items-center gap-2 md:gap-4">
          <MainNav />
          <Link
            href={contactNav.href}
            className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            {contactNav.label}
          </Link>
          <CTAButton href="/contact" className="hidden md:inline-flex" showArrow>
            Talk to Our Team
          </CTAButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
