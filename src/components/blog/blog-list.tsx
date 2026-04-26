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

const CATEGORY_STYLES: Record<string, { badge: string; dot: string; border: string }> = {
  "Recovery":      { badge: "bg-emerald-50 text-emerald-700 border border-emerald-200", dot: "bg-emerald-500", border: "group-hover:border-emerald-200" },
  "Weight Loss":   { badge: "bg-orange-50 text-orange-700 border border-orange-200",   dot: "bg-orange-500",  border: "group-hover:border-orange-200" },
  "Performance":   { badge: "bg-blue-50 text-blue-700 border border-blue-200",         dot: "bg-blue-500",    border: "group-hover:border-blue-200" },
  "Cognitive":     { badge: "bg-purple-50 text-purple-700 border border-purple-200",   dot: "bg-purple-500",  border: "group-hover:border-purple-200" },
  "Research Guide":{ badge: "bg-slate-50 text-slate-600 border border-slate-200",      dot: "bg-slate-400",   border: "group-hover:border-slate-200" },
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
  const featuredCategory = getCategoryFromTags(featured.tags);
  const featuredStyle = CATEGORY_STYLES[featuredCategory];

  return (
    <div className="space-y-12">
      {/* ── Featured Post ── */}
      <Link href={`/blog/${featured.slug}`} className="group block">
        <div className="rounded-3xl overflow-hidden bg-white border border-border-default shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr]">
            {/* Image */}
            <div className="relative overflow-hidden min-h-[280px] lg:min-h-[420px]">
              <Image
                src={featured.ogImage || DEFAULT_IMAGE}
                alt={featured.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
              <div className="absolute top-5 left-5">
                <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur-sm ${featuredStyle.badge}`}>
                  <span className={`h-1.5 w-1.5 rounded-full ${featuredStyle.dot}`} />
                  {featuredCategory}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 xl:p-14 flex flex-col justify-center">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green uppercase tracking-widest mb-4">
                <span className="h-px w-4 bg-brand-green" />
                Featured Research
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-text-primary leading-tight group-hover:text-brand-green transition-colors">
                {featured.title}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed line-clamp-4">
                {featured.excerpt}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="text-xs text-text-muted space-x-2">
                  <time>{formatDate(new Date(featured.createdAt))}</time>
                  <span>·</span>
                  <span>{getReadingTime(featured.content)} min read</span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-green px-4 py-2 text-sm font-semibold text-white group-hover:bg-brand-green-light transition-colors">
                  Read now →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ── 3-Column Grid ── */}
      {rest.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {rest.map((post) => {
            const category = getCategoryFromTags(post.tags);
            const style = CATEGORY_STYLES[category];
            const readingTime = getReadingTime(post.content);

            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className={`group flex flex-col bg-white rounded-2xl border border-border-default overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 ${style.border}`}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden bg-bg-primary">
                  <Image
                    src={post.ogImage || DEFAULT_IMAGE}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-sm ${style.badge}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
                      {category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="font-bold text-text-primary leading-snug line-clamp-2 group-hover:text-brand-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-text-muted pt-4 border-t border-border-default">
                    <time>{formatDate(new Date(post.createdAt))}</time>
                    <span className="font-semibold text-brand-green">{readingTime} min →</span>
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
