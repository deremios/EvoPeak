"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPublishedPosts } from "@/lib/blog";
import { seedPosts } from "@/data/blog-posts";
import { formatDate } from "@/config";
import type { BlogPost } from "@/types/blog";

const initialPosts = seedPosts
  .filter((p) => p.published)
  .sort(
    (a, b) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

export function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);

  useEffect(() => {
    setPosts(getPublishedPosts());
  }, []);

  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-text-muted">No articles published yet.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <Link
          key={post.id}
          href={`/blog/${post.slug}`}
          className="block bg-white rounded-2xl border border-border-default p-6 sm:p-8 hover:shadow-md hover:border-brand-green/20 transition-all"
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-brand-green/10 px-2.5 py-0.5 text-xs font-medium text-brand-green"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-brand-green">
            {post.title}
          </h2>
          <p className="mt-2 text-text-secondary leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <time className="text-xs text-text-muted">
              {formatDate(new Date(post.createdAt))}
            </time>
            <span className="text-sm font-medium text-brand-green">
              Read more →
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
