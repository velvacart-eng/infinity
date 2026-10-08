import Link from "next/link";
import { ArrowRight, Cloud, Database, Globe, Mail, Network, Server, Settings, Shield, LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
      className="group block h-full outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:rounded-xl"
    >
      <Card className="h-full border bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
        <CardHeader>
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10 text-brand-accent-dark">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl font-semibold tracking-tight">{service.title}</CardTitle>
          <CardDescription className="leading-relaxed">
            {service.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-dark transition-colors group-hover:text-brand-accent">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
