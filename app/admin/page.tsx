import { businessInfo } from "@/lib/config";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Admin",
  description: "Admin dashboard for Infinity Techiez.",
  path: "/admin",
  noIndex: true,
});

export default function AdminPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold">Admin</h1>
        <p className="mt-4 text-muted-foreground">
          The {businessInfo.brandName} admin area will be implemented in a
          future phase. Authentication, role-based access and CMS features are
          planned for this section.
        </p>
      </div>
    </section>
  );
}
