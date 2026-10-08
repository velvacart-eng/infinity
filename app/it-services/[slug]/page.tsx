import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingPages, getLandingPageBySlug } from "@/lib/it-services-pages-data";
import { LandingPageTemplate } from "@/components/it-services-page-template";
import { createMetadata } from "@/lib/seo";

interface LandingPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return landingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: LandingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    return {};
  }

  return createMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/it-services/${slug}`,
    noIndex: page.noIndex,
  });
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { slug } = await params;
  const page = getLandingPageBySlug(slug);

  if (!page) {
    notFound();
  }

  return <LandingPageTemplate page={page} />;
}
