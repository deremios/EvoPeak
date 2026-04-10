"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { getPostBySlug } from "@/lib/blog";
import { formatDate, region } from "@/config";
import type { BlogPost } from "@/types/blog";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const found = getPostBySlug(slug);
    setPost(found && found.published ? found : null);
    setLoaded(true);
  }, [slug]);

  if (!loaded) {
    return (
      <div className="bg-bg-primary min-h-screen py-16 text-center text-text-muted">
        Loading...
      </div>
    );
  }

  if (!post) {
    return (
      <div className="bg-bg-primary min-h-screen py-16 text-center">
        <p className="text-lg font-bold text-text-primary mb-2">
          Article not found
        </p>
        <Link
          href="/blog"
          className="text-sm text-brand-green font-medium hover:underline"
        >
          Back to Research Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-border-default">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link href="/blog" className="hover:text-brand-green">
              Research Insights
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium line-clamp-1">
              {post.title}
            </span>
          </nav>

          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-medium text-brand-green"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
            <time>{formatDate(new Date(post.createdAt))}</time>
            <span>·</span>
            <span>{region.brandName}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10">
        <div
          className="prose prose-slate max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-li:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-green hover:prose-a:text-brand-green-light"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Disclaimer */}
        <div className="mt-12 rounded-lg bg-amber-50 border border-amber-200 p-4">
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Disclaimer:</strong> This article is for informational and
            educational purposes only. It references published scientific
            literature and does not constitute medical advice.{" "}
            {region.legal.disclaimer}
          </p>
        </div>

        {/* Back + CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-border-default">
          <Link
            href="/blog"
            className="text-sm text-text-muted hover:text-brand-green transition-colors"
          >
            ← Back to Research Insights
          </Link>
          <Link
            href="/shop"
            className="rounded-lg bg-brand-green px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            Browse Peptides
          </Link>
        </div>
      </div>
    </div>
  );
}
