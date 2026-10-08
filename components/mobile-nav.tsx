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
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { mainNav, contactNav } from "@/lib/config";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-[280px] flex-col">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-6 flex flex-1 flex-col gap-1">
          {mainNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <SheetClose asChild key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted hover:text-foreground",
                    active ? "bg-muted text-foreground" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </Link>
              </SheetClose>
            );
          })}
          <Separator className="my-3" />
          <SheetClose asChild>
            <Link
              href={contactNav.href}
              className={cn(
                "rounded-md px-3 py-2.5 text-base font-medium transition-colors hover:bg-muted hover:text-foreground",
                pathname === contactNav.href ? "bg-muted text-foreground" : "text-muted-foreground"
              )}
            >
              {contactNav.label}
            </Link>
          </SheetClose>
        </nav>
        <div className="mt-auto pt-6">
          <SheetClose asChild>
            <Button asChild className="w-full">
              <Link href="/contact">Talk to Our Team</Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
