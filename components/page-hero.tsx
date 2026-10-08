import type { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export function PageHero({ title, description, icon: Icon }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-brand-muted py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_50%)]" />
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
          )}
          <h1 className="mt-5 text-h1 font-bold tracking-tight text-foreground">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
