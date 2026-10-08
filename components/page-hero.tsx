import type { LucideIcon } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  gradient?: boolean;
}

export function PageHero({ title, description, icon: Icon, gradient = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.08),transparent_50%)]" />
      <div className="container relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {Icon && (
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-brand-violet text-white shadow-lg shadow-primary/20">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </div>
          )}
          <h1 className="mt-6 text-h1 font-bold tracking-tight text-foreground">
            {gradient ? (
              <span className="bg-gradient-to-r from-foreground via-primary to-brand-violet bg-clip-text text-transparent">
                {title}
              </span>
            ) : (
              title
            )}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground md:text-xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
