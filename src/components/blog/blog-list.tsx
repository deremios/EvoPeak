import Link from "next/link";
import Image from "next/image";
import { getPublishedPosts } from "@/lib/blog";
import { getReadingTime } from "@/lib/blog-rendering";
import { formatDate } from "@/config";

const TAG_CATEGORY: Record<string, string> = {
  "bpc-157": "Recovery",
  "tb-500": "Recovery",
  "recovery": "Recovery",
  "tissue-repair": "Recovery",
  "ghk-cu": "Recovery",
  "thymosin": "Recovery",
  "collagen": "Recovery",
  "glp-1": "Weight Loss",
  "semaglutide": "Weight Loss",
  "tirzepatide": "Weight Loss",
  "retatrutide": "Weight Loss",
  "weight-loss": "Weight Loss",
  "growth-hormone": "Performance",
  "cjc-1295": "Performance",
  "ipamorelin": "Performance",
  "performance": "Performance",
  "cognitive": "Cognitive",
  "nootropic": "Cognitive",
  "selank": "Cognitive",
  "semax": "Cognitive",
  "neuropeptide": "Cognitive",
  "guide": "Research Guide",
  "beginner": "Research Guide",
  "reconstitution": "Research Guide",
  "storage": "Research Guide",
  "coa": "Research Guide",
  "quality": "Research Guide",
  "testing": "Research Guide",
  "australia": "Research Guide",
  "buying": "Research Guide",
};

export function getCategoryFromTags(tags: string[]): string {
  for (const tag of tags) {
    const cat = TAG_CATEGORY[tag.toLowerCase()];
    if (cat) return cat;
  }
  return "Research Guide";
}

const DEFAULT_IMAGE = "/images/articles/research-category-hub.webp";

export function BlogList() {
  const posts = getPublishedPosts();
  if (posts.length === 0) return null;

  const [featured, ...rest] = posts;

  return (
    <div className="space-y-12">
      {/* Featured Post */}
      <Link href={`/blog/${featured.slug}`} className="group block">
        <div className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
            <div className="relative min-h-[280px] overflow-hidden lg:min-h-[420px]">
              <Image
                src={featured.ogImage || DEFAULT_IMAGE}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
              <div className="absolute left-5 top-5">
                <span className="inline-flex items-center rounded-full border border-white/30 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {getCategoryFromTags(featured.tags)}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 lg:p-10 xl:p-14">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Featured Research
              </p>
              <h2 className="text-2xl font-normal leading-tight text-home-charcoal transition-colors group-hover:text-[#1b3d32] sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 line-clamp-4 leading-relaxed text-home-charcoal/70">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="space-x-2 text-xs text-home-charcoal/50">
                  <time>{formatDate(new Date(featured.createdAt))}</time>
                  <span>·</span>
                  <span>{getReadingTime(featured.content)} min read</span>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-home-cta px-5 py-2.5 text-sm font-medium text-white transition group-hover:opacity-90">
                  Read now →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* Grid */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {rest.map((post) => {
            const category = getCategoryFromTags(post.tags);
            const readingTime = getReadingTime(post.content);

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-[1.5rem] border border-black/6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              >
                <div className="relative aspect-video overflow-hidden bg-[#fafafa]">
                  <Image
                    src={post.ogImage || DEFAULT_IMAGE}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent" />
                  <div className="absolute left-3 top-3">
                    <span className="inline-flex items-center rounded-full border border-black/8 bg-white/90 px-2.5 py-0.5 text-[11px] font-medium text-home-charcoal/80 backdrop-blur-sm">
                      {category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="line-clamp-2 font-normal leading-snug text-home-charcoal transition-colors group-hover:text-[#1b3d32]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-home-charcoal/65">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-black/6 pt-4 text-xs text-home-charcoal/50">
                    <time>{formatDate(new Date(post.createdAt))}</time>
                    <span className="font-medium text-[#1b3d32]">{readingTime} min →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
