"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/config";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {mainNav.map((item) => {
        const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group relative px-3 py-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
              active && "text-foreground"
            )}
          >
            {item.label}
            <span
              className={cn(
                "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-brand-violet transition-transform duration-300 ease-out-expo",
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                "group-hover:scale-x-100"
              )}
              aria-hidden="true"
            />
          </Link>
        );
      })}
    </nav>
  );
}
