"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { mainNav, businessInfo } from "@/lib/config";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="h-10 w-10 lg:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-[320px] flex-col border-l border-border/60 bg-background/95 backdrop-blur-xl">
        <SheetHeader>
          <SheetTitle className="text-left text-lg font-bold">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-8 flex flex-1 flex-col gap-1">
          {mainNav.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide text-muted-foreground transition-all hover:bg-primary/5 hover:text-primary",
                    active && "bg-primary/10 text-primary"
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
        <div className="mt-auto space-y-4 border-t border-border/60 pt-6">
          <p className="text-sm text-muted-foreground">
            Email us at{" "}
            <a href={`mailto:${businessInfo.email}`} className="font-medium text-primary hover:underline">
              {businessInfo.email}
            </a>
          </p>
          <SheetClose asChild>
            <Button asChild className="w-full rounded-full bg-gradient-to-r from-primary to-brand-violet text-base font-semibold">
              <Link href="/contact">Talk to Us</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
