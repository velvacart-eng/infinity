import { Building2, Cloud, Globe, Lock, Server } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Guides, articles and resources about business IT, cloud, security and technology management from Infinity Techiez.",
  path: "/resources",
});

const categories = [
  {
    title: "Business IT",
    description: "Practical guidance for small and growing businesses.",
    icon: Building2,
  },
  {
    title: "Email",
    description: "Business email setup, migration and management.",
    icon: Server,
  },
  {
    title: "Domains & DNS",
    description: "Domain registration, DNS records and web presence.",
    icon: Globe,
  },
  {
    title: "Cloud",
    description: "Cloud services, migration and infrastructure planning.",
    icon: Cloud,
  },
  {
    title: "Security",
    description: "Security fundamentals, access controls and continuity.",
    icon: Lock,
  },
  {
    title: "Infrastructure",
    description: "Servers, networks, hosting and reliability.",
    icon: Server,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: "Resources", href: "/resources" }]} />
      </div>
      <PageHero
        title="Resources"
        description="Practical information about business technology, IT services and digital operations."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Resource categories"
            description="Guides and articles will be published in the categories below as they become available."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border bg-card p-6 transition-colors hover:border-primary/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-navy/5 text-brand-navy">
                  <category.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-xl border border-dashed bg-brand-muted/30 p-8 text-center">
            <p className="text-muted-foreground">
              Resource content will be added in a future phase. Check back for
              guides on business email, cloud migration, cybersecurity basics and
              technology planning.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
