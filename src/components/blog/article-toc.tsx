"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { ArticleSection } from "@/lib/blog-rendering";

interface Props {
  sections: ArticleSection[];
  summary: string;
  relatedProduct?: { slug: string; label: string };
}

export function ArticleToc({ sections, summary, relatedProduct }: Props) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const headings = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-88px 0px -60% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollable = el.scrollHeight - el.clientHeight;
      if (scrollable > 0) setProgress(Math.round((el.scrollTop / scrollable) * 100));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (sections.length === 0) return null;

  const activeIndex = sections.findIndex((s) => s.id === activeId);

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 flex flex-col gap-4">

        {/* ── Summary card ── */}
        <div className="rounded-2xl border border-border-default bg-white p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-brand-green" />
            <p className="text-xs font-bold uppercase tracking-widest text-brand-green">
              Article Summary
            </p>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{summary}</p>
        </div>

        {/* ── TOC ── */}
        <div className="rounded-2xl border border-border-default bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <p className="text-xs font-bold uppercase tracking-widest text-text-muted">
              In This Article
            </p>
            <span className="text-[10px] font-semibold text-brand-green bg-brand-green/10 rounded-full px-2 py-0.5">
              {progress}%
            </span>
          </div>

          {/* Progress bar */}
          <div className="mb-4 h-1 w-full rounded-full bg-bg-primary overflow-hidden">
            <div
              className="h-full rounded-full bg-brand-green transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <nav>
            <ol className="space-y-0.5">
              {sections.map((section, i) => {
                const isActive = section.id === activeId;
                const isPast = i < activeIndex;

                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className={`group flex items-start gap-2.5 rounded-lg px-3 py-2 text-sm transition-all duration-150 ${
                        section.level === 3 ? "ml-4" : ""
                      } ${
                        isActive
                          ? "bg-brand-green/10 text-brand-green font-semibold"
                          : isPast
                          ? "text-text-muted hover:bg-bg-primary hover:text-text-secondary"
                          : "text-text-secondary hover:bg-bg-primary hover:text-text-primary"
                      }`}
                    >
                      <span
                        className={`mt-1.5 shrink-0 rounded-full transition-all duration-150 ${
                          section.level === 3 ? "h-1 w-1" : "h-1.5 w-1.5"
                        } ${
                          isActive
                            ? "bg-brand-green scale-125"
                            : isPast
                            ? "bg-text-muted"
                            : "bg-border-default group-hover:bg-text-secondary"
                        }`}
                      />
                      <span className="leading-snug">{section.title}</span>
                    </a>
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>

        {/* ── Product CTA ── */}
        {relatedProduct ? (
          <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-slate-800 p-5 text-white shadow-md">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">
              Research Grade
            </p>
            <p className="font-bold text-base leading-snug">
              {relatedProduct.label}
            </p>
            <p className="mt-1.5 text-xs text-white/60 leading-relaxed">
              HPLC/MS verified · Triple tested · Australia stock
            </p>
            <Link
              href={`/shop/${relatedProduct.slug}`}
              className="mt-4 block w-full rounded-xl bg-brand-green py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
            >
              View {relatedProduct.label} →
            </Link>
          </div>
        ) : (
          <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-slate-800 p-5 text-white shadow-md">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-green mb-2">
              Quality Documentation
            </p>
            <p className="font-bold text-base leading-snug">
              Understand COA standards
            </p>
            <p className="mt-1.5 text-xs text-white/60 leading-relaxed">
              Learn what HPLC purity, MS identity, and endotoxin screening actually mean.
            </p>
            <Link
              href="/blog/understanding-certificates-of-analysis"
              className="mt-4 block w-full rounded-xl bg-brand-green py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-green-light transition-colors"
            >
              Read COA Guide →
            </Link>
          </div>
        )}

        {/* ── Compliance note ── */}
        <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
          <p className="text-[11px] leading-relaxed text-amber-700">
            <strong>Research Use Only.</strong> All content is for educational purposes.
            Not medical advice.
          </p>
        </div>
      </div>
    </aside>
  );
}
