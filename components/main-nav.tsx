"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/config";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
      {mainNav.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
              active ? "text-foreground" : "text-muted-foreground"
            )}
          >
            {item.label}
            {active && (
              <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-brand-accent" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
