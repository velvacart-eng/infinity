import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { landingPages, getLandingPageBySlug } from "@/lib/landing-pages-data";
import { LandingPageTemplate } from "@/components/landing-page-template";
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
    path: `/landing/${slug}`,
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
