"use client";

import { createPost } from "@/lib/blog";
import { BlogEditorForm } from "@/components/admin/blog-editor-form";

export default function AdminBlogNewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-text-primary mb-6">
        New Blog Post
      </h1>
      <BlogEditorForm
        onSave={(data) => {
          createPost(data);
        }}
      />
    </div>
  );
}
