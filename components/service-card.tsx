import Link from "next/link";
import { ArrowRight, Cloud, Database, Globe, Mail, Network, Server, Settings, Shield, LucideIcon } from "lucide-react";
import { Service } from "@/types";

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
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Settings;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block h-full rounded-lg border bg-card p-5 outline-none transition-colors hover:border-primary/40 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-h3 font-semibold text-foreground">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-accent-dark transition-colors group-hover:text-brand-accent">
        Learn more
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
      </span>
    </Link>
  );
}
