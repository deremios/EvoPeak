import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { formatDate, region } from "@/config";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { createSeoMetadata } from "@/lib/seo";
import {
  addHeadingIds,
  extractArticleSections,
  getReadingTime,
  getRelatedPosts,
} from "@/lib/blog-rendering";
import { ArticleToc } from "@/components/blog/article-toc";
import { RelatedPosts } from "@/components/blog/related-posts";
import { getCategoryFromTags } from "@/components/blog/blog-list";

interface Props {
  params: Promise<{ slug: string }>;
}

const TAG_TO_PRODUCT: Record<string, { slug: string; label: string }> = {
  "bpc-157":        { slug: "bpc-157",    label: "BPC-157" },
  "tb-500":         { slug: "tb-500",     label: "TB-500" },
  "glp-1":          { slug: "semaglutide",label: "Semaglutide" },
  "semaglutide":    { slug: "semaglutide",label: "Semaglutide" },
  "tirzepatide":    { slug: "tirzepatide",label: "Tirzepatide" },
  "retatrutide":    { slug: "retatrutide",label: "Retatrutide" },
  "cjc-1295":       { slug: "cjc-1295",   label: "CJC-1295" },
  "ipamorelin":     { slug: "ipamorelin", label: "Ipamorelin" },
  "selank":         { slug: "selank",     label: "Selank" },
  "semax":          { slug: "semax",      label: "Semax" },
  "ghk-cu":         { slug: "ghk-cu",     label: "GHK-Cu" },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Recovery":       "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Weight Loss":    "bg-orange-50 text-orange-700 border-orange-200",
  "Performance":    "bg-blue-50 text-blue-700 border-blue-200",
  "Cognitive":      "bg-purple-50 text-purple-700 border-purple-200",
  "Research Guide": "bg-slate-50 text-slate-600 border-slate-200",
};

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    return createSeoMetadata({
      title: `Research Article Not Found — ${region.brandName}`,
      description: "This EvoPeak research article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return createSeoMetadata({
    title: post.metaTitle || `${post.title} — ${region.brandName}`,
    description: post.metaDescription || post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.ogImage,
    type: "article",
    keywords: post.tags,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !post.published) notFound();

  const sections = extractArticleSections(post.content);
  const content = addHeadingIds(post.content, sections);
  const readingTime = getReadingTime(post.content);
  const relatedPosts = getRelatedPosts(post, getPublishedPosts());
  const category = getCategoryFromTags(post.tags);
  const categoryColor = CATEGORY_COLORS[category] ?? CATEGORY_COLORS["Research Guide"];

  const relatedProduct = post.tags
    .map((t) => TAG_TO_PRODUCT[t.toLowerCase()])
    .find(Boolean);

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Research Insights", path: "/blog" },
              { name: post.title, path: `/blog/${post.slug}` },
            ])
          ),
        }}
      />

      {/* ── Full-bleed Hero Image ── */}
      {post.ogImage && (
        <div className="relative w-full h-[340px] sm:h-[440px] lg:h-[540px] overflow-hidden">
          <Image
            src={post.ogImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/30 to-transparent" />

          {/* Overlay content */}
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14">
              <nav className="flex items-center gap-2 text-sm text-white/60 mb-4">
                <Link href="/blog" className="hover:text-white transition-colors">
                  Research Insights
                </Link>
                <span>/</span>
                <span className="text-white/80 line-clamp-1 font-medium">{post.title}</span>
              </nav>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold ${categoryColor}`}>
                  {category}
                </span>
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm px-3 py-0.5 text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-3xl drop-shadow-md">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/60">
                <time>{formatDate(new Date(post.createdAt))}</time>
                <span>·</span>
                <span>{readingTime} min read</span>
                <span>·</span>
                <span>{region.brandName}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Article header when no image ── */}
      {!post.ogImage && (
        <div className="bg-brand-navy text-white py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/50 mb-6">
              <Link href="/blog" className="hover:text-white transition-colors">Research Insights</Link>
              <span>/</span>
              <span className="text-white/80 line-clamp-1">{post.title}</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className={`inline-flex items-center rounded-full border px-3 py-0.5 text-xs font-semibold ${categoryColor}`}>
                {category}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight max-w-3xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/50">
              <time>{formatDate(new Date(post.createdAt))}</time>
              <span>·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      )}

      {/* ── Body ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-12 xl:gap-16">

          {/* ── Main article ── */}
          <article>
            {/* Key Takeaway */}
            <div className="mb-8 rounded-2xl border-l-4 border-brand-green bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">Key Takeaway</p>
              <p className="text-text-secondary leading-relaxed">{post.excerpt}</p>
            </div>

            {/* Content */}
            <div
              className="prose prose-slate max-w-none scroll-smooth
                prose-headings:scroll-mt-28
                prose-h2:text-2xl prose-h2:font-bold prose-h2:text-text-primary prose-h2:mt-10 prose-h2:mb-4 prose-h2:pb-3 prose-h2:border-b prose-h2:border-border-default
                prose-h3:text-lg prose-h3:font-semibold prose-h3:text-text-primary prose-h3:mt-7 prose-h3:mb-3
                prose-p:text-text-secondary prose-p:leading-[1.85] prose-p:mb-5
                prose-li:text-text-secondary prose-li:leading-[1.75]
                prose-strong:text-text-primary prose-strong:font-semibold
                prose-a:text-brand-green prose-a:font-medium hover:prose-a:underline
                prose-img:rounded-2xl prose-img:border prose-img:border-border-default prose-img:shadow-sm
                prose-figure:my-8
                prose-blockquote:border-brand-green prose-blockquote:bg-brand-green/5 prose-blockquote:py-2 prose-blockquote:rounded-r-xl
                prose-ul:my-5 prose-ol:my-5
                prose-table:text-sm"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Mid-article CTA */}
            <div className="my-12 rounded-2xl bg-gradient-to-br from-brand-navy to-brand-navy/90 p-8 text-white shadow-lg">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">Quality First</p>
                  <h3 className="text-xl font-bold leading-snug">
                    Verify purity before you research
                  </h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">
                    EvoPeak provides batch-level HPLC/MS analysis, identity verification, and endotoxin screening for every compound.
                  </p>
                </div>
                <div className="flex flex-col gap-3 shrink-0">
                  {relatedProduct ? (
                    <Link
                      href={`/shop/${relatedProduct.slug}`}
                      className="inline-flex justify-center rounded-xl bg-brand-green px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors whitespace-nowrap"
                    >
                      View {relatedProduct.label} →
                    </Link>
                  ) : null}
                  <Link
                    href="/blog/understanding-certificates-of-analysis"
                    className="inline-flex justify-center rounded-xl border border-white/20 px-5 py-2.5 text-sm font-medium text-white/80 hover:border-white/40 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Read COA Guide
                  </Link>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs text-amber-800 leading-relaxed">
                <strong>Research & Educational Disclaimer:</strong> This article is for
                informational and educational purposes only. It references published
                scientific literature and does not constitute medical advice, diagnosis,
                or treatment recommendations. {region.legal.disclaimer}
              </p>
            </div>

            <RelatedPosts posts={relatedPosts} />

            {/* Back + Shop */}
            <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border-default">
              <Link href="/blog" className="text-sm text-text-muted hover:text-brand-green transition-colors">
                ← Back to Research Insights
              </Link>
              <Link
                href="/shop"
                className="rounded-xl bg-brand-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
              >
                Browse All Peptides
              </Link>
            </div>
          </article>

          {/* ── Sticky Sidebar ── */}
          <ArticleToc sections={sections} summary={post.excerpt} relatedProduct={relatedProduct} />
        </div>
      </div>
    </div>
  );
}
