import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/config";
import type { BlogPost } from "@/types/blog";
import { getReadingTime } from "@/lib/blog-rendering";
import { getCategoryFromTags } from "@/components/blog/blog-list";

const DEFAULT_IMAGE = "/images/articles/research-category-hub.webp";

export function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mt-14">
      <div className="flex items-center gap-3 mb-6">
        <span className="h-px flex-1 bg-border-default" />
        <h2 className="text-lg font-bold text-text-primary whitespace-nowrap">Continue Researching</h2>
        <span className="h-px flex-1 bg-border-default" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((post) => {
          const category = getCategoryFromTags(post.tags);
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl bg-white border border-border-default overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.ogImage || DEFAULT_IMAGE}
                  alt={post.title}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brand-green mb-1">{category}</p>
                <h3 className="text-sm font-bold text-text-primary line-clamp-2 group-hover:text-brand-green transition-colors leading-snug">
                  {post.title}
                </h3>
                <div className="mt-auto pt-3 flex items-center justify-between text-[11px] text-text-muted">
                  <time>{formatDate(new Date(post.createdAt))}</time>
                  <span>{getReadingTime(post.content)} min read</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
