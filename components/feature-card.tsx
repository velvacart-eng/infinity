import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="h-full border bg-card transition-all duration-200 hover:border-primary/20 hover:shadow-sm">
      <CardHeader>
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <CardTitle className="text-lg font-semibold tracking-tight">{title}</CardTitle>
        <CardDescription className="leading-relaxed">{description}</CardDescription>
      </CardHeader>
      <CardContent className="sr-only">{title}</CardContent>
    </Card>
  );
}
