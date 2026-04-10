"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { RichEditor } from "./rich-editor";
import type { BlogPost } from "@/types/blog";

interface BlogEditorFormProps {
  post?: BlogPost;
  onSave: (data: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    metaTitle: string;
    metaDescription: string;
    tags: string[];
    published: boolean;
  }) => void;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

export function BlogEditorForm({ post, onSave }: BlogEditorFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(post?.title || "");
  const [slug, setSlug] = useState(post?.slug || "");
  const [excerpt, setExcerpt] = useState(post?.excerpt || "");
  const [content, setContent] = useState(post?.content || "");
  const [metaTitle, setMetaTitle] = useState(post?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(
    post?.metaDescription || ""
  );
  const [tagsStr, setTagsStr] = useState(post?.tags.join(", ") || "");
  const [published, setPublished] = useState(post?.published ?? false);
  const [saving, setSaving] = useState(false);

  function handleTitleChange(val: string) {
    setTitle(val);
    if (!post) setSlug(slugify(val));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    onSave({
      title,
      slug,
      excerpt,
      content,
      metaTitle: metaTitle || title,
      metaDescription: metaDescription || excerpt,
      tags: tagsStr
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      published,
    });
    setTimeout(() => {
      router.push("/admin/blog");
    }, 300);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-xl border border-border-default p-5 space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Title
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                placeholder="Article title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                URL Slug
              </label>
              <div className="flex items-center text-sm text-text-muted">
                <span className="mr-1">/blog/</span>
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="flex-1 rounded-lg border border-border-default px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-text-primary mb-1.5">
                Excerpt
              </label>
              <textarea
                required
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                rows={3}
                className="w-full rounded-lg border border-border-default px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green resize-none"
                placeholder="Brief description shown on blog listing..."
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Content
            </label>
            <RichEditor content={content} onChange={setContent} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Publish */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h3 className="text-sm font-bold text-text-primary mb-4">
              Publish
            </h3>
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-text-secondary">Status</span>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={published}
                  onChange={(e) => setPublished(e.target.checked)}
                  className="rounded border-border-default text-brand-green focus:ring-brand-green/20"
                />
                <span className="text-sm font-medium text-text-primary">
                  {published ? "Published" : "Draft"}
                </span>
              </label>
            </div>
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-lg bg-brand-green py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors disabled:opacity-50"
            >
              {saving ? "Saving..." : post ? "Update Post" : "Create Post"}
            </button>
          </div>

          {/* SEO */}
          <div className="bg-white rounded-xl border border-border-default p-5 space-y-4">
            <h3 className="text-sm font-bold text-text-primary">SEO</h3>
            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">
                Meta Title
              </label>
              <input
                type="text"
                value={metaTitle}
                onChange={(e) => setMetaTitle(e.target.value)}
                placeholder={title || "Defaults to title"}
                className="w-full rounded-lg border border-border-default px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-text-muted mb-1">
                Meta Description
              </label>
              <textarea
                value={metaDescription}
                onChange={(e) => setMetaDescription(e.target.value)}
                placeholder={excerpt || "Defaults to excerpt"}
                rows={3}
                className="w-full rounded-lg border border-border-default px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-none"
              />
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-xl border border-border-default p-5">
            <h3 className="text-sm font-bold text-text-primary mb-2">Tags</h3>
            <input
              type="text"
              value={tagsStr}
              onChange={(e) => setTagsStr(e.target.value)}
              placeholder="comma, separated, tags"
              className="w-full rounded-lg border border-border-default px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-green/20"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
