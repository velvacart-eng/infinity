import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <div className="rounded-lg border bg-card p-5 transition-colors hover:border-primary/30">
      <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-h3 font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
