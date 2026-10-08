import { Building2, Cloud, Globe, Lock, Mail, Server } from "lucide-react";
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
  { title: "Business IT", description: "Practical guidance for small and growing businesses.", icon: Building2 },
  { title: "Email", description: "Business email setup, migration and management.", icon: Mail },
  { title: "Domains & DNS", description: "Domain registration, DNS records and web presence.", icon: Globe },
  { title: "Cloud", description: "Cloud services, migration and infrastructure planning.", icon: Cloud },
  { title: "Security", description: "Security fundamentals, access controls and continuity.", icon: Lock },
  { title: "Infrastructure", description: "Servers, networks, hosting and reliability.", icon: Server },
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
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Resource categories"
            description="Guides and articles will be published in the categories below as they become available."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border bg-card p-5 transition-colors hover:border-primary/30"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-brand-accent-dark">
                  <category.icon className="h-4 w-4" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-h3 font-semibold">{category.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-dashed bg-brand-muted p-6 text-center">
            <p className="text-sm text-muted-foreground">
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
