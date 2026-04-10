"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import { getAllPosts, updatePost } from "@/lib/blog";
import { BlogEditorForm } from "@/components/admin/blog-editor-form";
import type { BlogPost } from "@/types/blog";

export default function AdminBlogEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const all = getAllPosts();
    const found = all.find((p) => p.id === id);
    setPost(found ?? null);
    setLoaded(true);
  }, [id]);

  if (!loaded) {
    return <div className="py-16 text-center text-text-muted">Loading...</div>;
  }

  if (!post) {
    return (
      <div className="py-16 text-center">
        <p className="text-text-muted">Post not found</p>
        <Link
          href="/admin/blog"
          className="mt-4 inline-block text-sm text-brand-green hover:underline"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">Edit Post</h1>
      <BlogEditorForm
        post={post}
        onSave={(data) => {
          updatePost(post.id, data);
        }}
      />
    </div>
  );
}
