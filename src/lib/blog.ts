import type { BlogPost } from "@/types/blog";
import { seedPosts } from "@/data/blog-posts";

const STORAGE_KEY = "evopeak_blog_posts";

function getAll(): BlogPost[] {
  if (typeof window === "undefined") return seedPosts;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch {}
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedPosts));
  return seedPosts;
}

function save(posts: BlogPost[]) {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
}

export function getAllPosts(): BlogPost[] {
  return getAll().sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.published);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAll().find((p) => p.slug === slug);
}

export function createPost(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt">): BlogPost {
  const newPost: BlogPost = {
    ...post,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const posts = getAll();
  posts.unshift(newPost);
  save(posts);
  return newPost;
}

export function updatePost(id: string, data: Partial<BlogPost>): BlogPost | null {
  const posts = getAll();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...data, updatedAt: new Date().toISOString() };
  save(posts);
  return posts[idx];
}

export function deletePost(id: string): boolean {
  const posts = getAll();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  save(filtered);
  return true;
}
