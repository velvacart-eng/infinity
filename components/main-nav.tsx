"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { mainNav } from "@/lib/config";

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
      {mainNav.map((item) => {
        const childActive = item.children?.some(
          (child) => pathname === child.href || pathname.startsWith(`${child.href}/`)
        );
        const active =
          pathname === item.href ||
          (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ||
          Boolean(childActive);

        if (item.children && item.children.length > 0) {
          return (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={cn(
                  "relative inline-flex items-center gap-1 px-3 py-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring",
                  active && "text-foreground"
                )}
                aria-haspopup="true"
              >
                {item.label}
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />
                <span
                  className={cn(
                    "absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-brand-violet transition-transform duration-300 ease-out-expo",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                  aria-hidden="true"
                />
              </Link>
              <div className="invisible absolute left-0 top-full z-50 min-w-[12rem] rounded-xl border border-border/60 bg-background/95 py-2 opacity-0 shadow-xl shadow-black/10 backdrop-blur-xl transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={cn(
                      "block px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/5 hover:text-primary",
                      (pathname === child.href || pathname.startsWith(`${child.href}/`)) &&
                        "text-primary"
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        }

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
