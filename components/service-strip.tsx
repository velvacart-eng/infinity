"use client";

import Link from "next/link";
import { services } from "@/lib/services-data";
import { cn } from "@/lib/utils";

interface ServiceStripProps {
  className?: string;
}

export function ServiceStrip({ className }: ServiceStripProps) {
  return (
    <div className={cn("border-y border-border/50 bg-background/80 backdrop-blur-sm", className)}>
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="scrollbar-hide flex items-center gap-1 overflow-x-auto py-3">
          <span className="hidden shrink-0 pr-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:block">
            Services
          </span>
          {services.map((service, index) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group shrink-0 whitespace-nowrap rounded-full border border-transparent px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-border hover:bg-muted hover:text-foreground"
            >
              <span className="text-xs text-muted-foreground/60 group-hover:text-primary/60">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="ml-1.5">{service.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
