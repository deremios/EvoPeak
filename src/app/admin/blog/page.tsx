"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getAllPosts, deletePost } from "@/lib/blog";
import { formatDate } from "@/config";
import type { BlogPost } from "@/types/blog";

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(getAllPosts());
  }, []);

  function handleDelete(id: string) {
    if (!confirm("Delete this post?")) return;
    deletePost(id);
    setPosts(getAllPosts());
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-text-primary">Blog Posts</h1>
        <Link
          href="/admin/blog/new"
          className="rounded-lg bg-brand-green px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
        >
          + New Post
        </Link>
      </div>

      <div className="bg-white rounded-xl border border-border-default overflow-hidden">
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-muted">No blog posts yet</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-default bg-bg-primary">
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Title
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Date
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-text-muted">
                    Status
                  </th>
                  <th className="text-right px-4 py-3 font-semibold text-text-muted">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr
                    key={post.id}
                    className="border-b border-border-default last:border-0 hover:bg-bg-primary/50"
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-text-primary">
                        {post.title}
                      </p>
                      <p className="text-xs text-text-muted">/blog/{post.slug}</p>
                    </td>
                    <td className="px-4 py-3 text-text-muted">
                      {formatDate(new Date(post.createdAt))}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          post.published
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {post.published ? "Published" : "Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right space-x-3">
                      <Link
                        href={`/admin/blog/${post.id}`}
                        className="text-brand-green font-medium hover:underline"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-500 font-medium hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
