import { Metadata } from "next";
import { region } from "@/config";
import { BlogList } from "@/components/blog/blog-list";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogCta } from "@/components/blog/blog-cta";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { createSeoMetadata } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Insights — Peptide Science, Guides & Protocols | ${region.brandName}`,
  description:
    "Science-backed research peptide guides covering COAs, HPLC/MS testing, storage, reconstitution, GLP-1 peptides, BPC-157, TB-500, and Australian research-only compliance.",
  path: "/blog",
  keywords: [
    "peptide research guides",
    "research peptides Australia",
    "peptide COA guide",
    "peptide storage guide",
    "BPC-157 research",
    "GLP-1 peptides",
  ],
});

export default function BlogPage() {
  const posts = getPublishedPosts();

  return (
    <div className="home-medvi min-h-screen bg-white">
      <BlogHero articleCount={posts.length} />
      <TrustIconStrip items={trustItems} />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <BlogList />
      </div>

      <BlogCta />
    </div>
  );
}
