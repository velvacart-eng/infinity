import Link from "next/link";
import { ArrowRight, Cloud, Database, Globe, Mail, Network, Server, Settings, Shield, LucideIcon } from "lucide-react";
import { Service } from "@/types";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Mail,
  Globe,
  Server,
  Cloud,
  Network,
  Shield,
  Database,
  Settings,
};

interface ServiceCardProps {
  service: Service;
  index?: number;
  variant?: "default" | "featured";
  className?: string;
}

export function ServiceCard({ service, index, variant = "default", className }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Settings;
  const paddedIndex = index !== undefined ? String(index + 1).padStart(2, "0") : null;

  if (variant === "featured") {
    return (
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 outline-none transition-all duration-300 hover:border-primary/40 hover:bg-brand-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-8",
          className
        )}
      >
        <div className="mb-auto">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="mt-5 text-h2 font-semibold text-foreground">{service.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {service.shortDescription}
          </p>
        </div>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-brand-accent transition-colors group-hover:text-brand-accent-bright">
          Explore service
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </Link>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card p-5 outline-none transition-all duration-300 hover:border-primary/40 hover:bg-brand-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {paddedIndex && (
        <span className="absolute right-4 top-3 text-sm font-semibold text-muted-foreground/40 transition-colors group-hover:text-primary/40">
          {paddedIndex}
        </span>
      )}
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent/15">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-h3 font-semibold text-foreground">{service.title}</h3>
      <p className="mb-4 mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent transition-colors group-hover:text-brand-accent-bright">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
