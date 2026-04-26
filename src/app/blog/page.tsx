import { Metadata } from "next";
import Link from "next/link";
import { region } from "@/config";
import { BlogList } from "@/components/blog/blog-list";
import { createSeoMetadata } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = createSeoMetadata({
  title: `Research Insights — Peptide Science, Guides & Protocols | ${region.brandName}`,
  description:
    "Science-backed research peptide guides covering COAs, HPLC/MS testing, storage, reconstitution, GLP-1 peptides, BPC-157, TB-500, and Australian research-only compliance.",
  path: "/blog",
  keywords: [
    "peptide research guides",
    "research peptides Australia",
    "peptide COA guide",
    "peptide storage guide",
    "BPC-157 research",
    "GLP-1 peptides",
  ],
});

export default function BlogPage() {
  const posts = getPublishedPosts();
  const articleCount = posts.length;

  return (
    <div className="bg-bg-primary min-h-screen">
      {/* ── Hero ── */}
      <div className="bg-brand-navy relative overflow-hidden">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-green/5 blur-2xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="flex flex-col gap-6 max-w-2xl">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-green animate-pulse" />
              {articleCount} research articles · Australia
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
              Research<br />
              <span className="text-brand-green">Insights</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-xl">
              In-depth guides on peptide mechanisms, quality verification, protocols,
              and compound research — written for serious researchers.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {["Recovery", "Weight Loss", "Performance", "Cognitive", "Research Guide"].map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/60 hover:text-white hover:border-white/30 transition-colors"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Articles ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <BlogList />
      </div>

      {/* ── Bottom CTA strip ── */}
      <div className="border-t border-border-default bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-bold text-text-primary text-lg">Ready to explore the compounds?</p>
            <p className="text-sm text-text-secondary mt-1">Browse our catalogue of HPLC/MS-verified research peptides.</p>
          </div>
          <Link
            href="/shop"
            className="shrink-0 rounded-xl bg-brand-green px-6 py-3 text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
          >
            Browse Peptides →
          </Link>
        </div>
      </div>
    </div>
  );
}
