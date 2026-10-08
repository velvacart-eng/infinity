import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { businessInfo } from "@/lib/config";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const schemaItems = [
    { label: "Home", href: businessInfo.siteUrl },
    ...items.map((item, index) => ({
      label: item.label,
      href: item.href
        ? `${businessInfo.siteUrl}${item.href}`
        : index === items.length - 1
          ? `${businessInfo.siteUrl}${item.href ?? ""}`
          : businessInfo.siteUrl,
    })),
  ];

  const breadcrumbJson = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: schemaItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={index} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
                {isLast ? (
                  <span className="text-foreground" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href ?? "/"} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
