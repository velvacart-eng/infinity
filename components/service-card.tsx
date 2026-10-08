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
          "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/60 bg-card p-7 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 md:p-9",
          className
        )}
      >
        <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/5 transition-colors group-hover:bg-primary/10" />
        <div className="relative mb-auto">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-lg shadow-primary/15">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <h3 className="mt-6 text-h2 font-bold text-foreground">{service.title}</h3>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {service.shortDescription}
          </p>
        </div>
        <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet">
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
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card p-6 outline-none transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
    >
      {paddedIndex && (
        <span className="absolute right-5 top-4 text-sm font-bold text-muted-foreground/30 transition-colors group-hover:text-primary/40">
          {paddedIndex}
        </span>
      )}
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-brand-violet/10 text-primary transition-colors group-hover:from-primary group-hover:to-brand-violet group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-h3 font-bold text-foreground">{service.title}</h3>
      <p className="mb-4 mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-primary transition-colors group-hover:text-brand-violet">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  );
}
