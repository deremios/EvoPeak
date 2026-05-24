"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { region } from "@/config";
import { QualityProof } from "@/components/collections/quality-proof";
import { ShopCta } from "@/components/peptides/shop-cta";
import { TrustpilotBand } from "@/components/shared/trustpilot-band";
import { FadeIn } from "@/components/shared/fade-in";
import { getLandingByPeptideSlug, getLandingPath } from "@/data/peptide-landings";
import type { PeptideLandingContent } from "@/types/peptide-landing";
import type { Product } from "@/types/product";
import { getLowestPrice } from "@/lib/products";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
      className="border-b border-border-default py-8 last:border-0"
    >
      <h3 className="text-xl font-black text-brand-navy sm:text-2xl">{q}</h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-text-secondary">
        {a}
      </p>
    </motion.article>
  );
}

function ContentBlock({ text }: { text: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph, i) => (
        <p key={i} className="mt-4 first:mt-0 text-base leading-7 text-text-secondary">
          {paragraph}
        </p>
      ))}
    </>
  );
}

function RelatedPeptideCard({ product }: { product: Product }) {
  const hasLanding = !!getLandingByPeptideSlug(product.slug);
  const href = hasLanding
    ? getLandingPath(product.slug)
    : `/shop/${product.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[1.75rem] border border-border-default bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bg-primary">
        <img
          src="/images/product-placeholder.png"
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-black text-brand-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary line-clamp-2">
          {product.shortDescription}
        </p>
        <span className="mt-4 text-xs font-black uppercase tracking-[0.18em] text-brand-green">
          {hasLanding ? "View guide →" : "View product →"}
        </span>
      </div>
    </Link>
  );
}

interface PeptideLandingProps {
  landing: PeptideLandingContent;
  product: Product;
  relatedProducts: Product[];
}

export function PeptideLanding({
  landing,
  product,
  relatedProducts,
}: PeptideLandingProps) {
  const lowestPrice = getLowestPrice(product);
  const { sections } = landing;

  return (
    <div className="bg-[#f5f1e8] text-text-primary">
      {/* Hero */}
      <section
        className={`relative min-h-[560px] overflow-hidden bg-gradient-to-br ${landing.gradient} text-white`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,200,120,0.14),transparent_28%)]" />
        <div className="absolute inset-0 opacity-20">
          <Image
            src={landing.heroImage}
            alt={`${product.name} research peptide`}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/90">{landing.heroHeadline}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
                {landing.heroEyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                {landing.heroHeadline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                {landing.heroSubheadline}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ShopCta
                  href={landing.shopPath}
                  label={landing.ctaLabel}
                  priceFrom={lowestPrice}
                />
                <a
                  href="#dosage"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/15 transition-colors"
                >
                  Dosage guide
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
                Quick facts
              </p>
              <ul className="mt-5 space-y-4">
                {[
                  product.alternateName && `Also known as: ${product.alternateName}`,
                  `Form: Lyophilised powder (>99% purity)`,
                  `Variants: ${product.variants.map((v) => v.size).join(", ")}`,
                  `🇦🇺 ${region.shipping.domesticEstimate}`,
                ]
                  .filter(Boolean)
                  .map((item) => (
                    <li
                      key={item as string}
                      className="flex gap-3 text-sm leading-6 text-white/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <TrustpilotBand />

      {/* What is */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">
                Overview
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
                {sections.whatIs.title}
              </h2>
              <ContentBlock text={sections.whatIs.content} />
              <div className="mt-8">
                <ShopCta
                  href={landing.shopPath}
                  label={`View ${product.name} Products`}
                  variant="secondary"
                />
              </div>
            </FadeIn>
            {sections.whatIs.image && (
              <FadeIn delay={0.15}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border-default">
                  <Image
                    src={sections.whatIs.image}
                    alt={sections.whatIs.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Mechanism */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-10 ${sections.mechanism.image ? "lg:grid-cols-2 lg:items-center" : ""}`}>
            {sections.mechanism.image && (
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border-default bg-bg-primary">
                  <Image
                    src={sections.mechanism.image}
                    alt={`${product.name} mechanism diagram`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              </FadeIn>
            )}
            <FadeIn delay={sections.mechanism.image ? 0.1 : 0}>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
                Mechanism
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
                {sections.mechanism.title}
              </h2>
              <ContentBlock text={sections.mechanism.content} />
              <ul className="mt-6 space-y-3">
                {sections.mechanism.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-6 text-text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Dosage */}
      <section id="dosage" className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">
              Research reference
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
              {sections.dosage.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-text-secondary">
              {sections.dosage.intro}
            </p>
          </FadeIn>
          <div className="mt-10 overflow-x-auto rounded-[2rem] border border-border-default bg-white">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-border-default bg-bg-primary">
                  <th className="px-6 py-4 font-black uppercase tracking-[0.12em] text-brand-navy">
                    Protocol tier
                  </th>
                  <th className="px-6 py-4 font-black uppercase tracking-[0.12em] text-brand-navy">
                    Published research detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {sections.dosage.rows.map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-bg-primary/50"}
                  >
                    <td className="px-6 py-4 font-semibold text-text-primary whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-text-secondary leading-6">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="text-xs leading-relaxed text-amber-800">
              <strong>Research use only:</strong> {region.legal.disclaimer}
            </p>
          </div>
          <div className="mt-8">
            <ShopCta
              href={landing.shopPath}
              label={`Order Research-Grade ${product.name}`}
              priceFrom={lowestPrice}
            />
          </div>
        </div>
      </section>

      {/* Side effects + Reconstitution */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-[2rem] border border-border-default bg-bg-primary p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
                Safety research
              </p>
              <h2 className="mt-4 text-2xl font-black text-brand-navy sm:text-3xl">
                {sections.sideEffects.title}
              </h2>
              <ContentBlock text={sections.sideEffects.content} />
              <ul className="mt-6 space-y-3">
                {sections.sideEffects.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-text-secondary"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-border-default bg-bg-primary p-6 sm:p-8">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">
                Handling
              </p>
              <h2 className="mt-4 text-2xl font-black text-brand-navy sm:text-3xl">
                {sections.reconstitution.title}
              </h2>
              <ContentBlock text={sections.reconstitution.content} />
              <p className="mt-4 text-sm leading-6 text-text-secondary">
                {sections.reconstitution.suppliesNote}
              </p>
              <Link
                href="/shop/bacteriostatic-water"
                className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.15em] text-brand-green hover:text-brand-green-light transition-colors"
              >
                Shop bacteriostatic water
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* How to get */}
      <section className="bg-brand-navy py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
                Australia
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                {sections.howToGet.title}
              </h2>
              <ContentBlock text={sections.howToGet.content} />
            </div>
            <ol className="space-y-4">
              {sections.howToGet.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-black">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/80">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ShopCta
              href={landing.shopPath}
              label={`Buy ${product.name} — Shipped from Australia`}
              priceFrom={lowestPrice}
              variant="navy"
            />
          </div>
        </div>
      </section>

      <QualityProof />

      {/* Blog links */}
      {landing.relatedBlogSlugs && landing.relatedBlogSlugs.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">
              Further reading
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {landing.relatedBlogSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="rounded-full border border-border-default bg-white px-6 py-3 text-sm font-semibold text-brand-navy hover:border-brand-green/40 hover:text-brand-green transition-colors"
                >
                  Read: {slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-5xl">
            {product.name} — Common Questions
          </h2>
          <div className="mt-10">
            {landing.faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Related peptides */}
      {relatedProducts.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">
              Related compounds
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-navy sm:text-4xl">
              Explore related research peptides
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <RelatedPeptideCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-brand-navy py-16 sm:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            Ready to order {product.name}?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70">
            Third-party HPLC/MS tested with batch-specific COA documentation.
            Shipped from Australia for laboratory research use only.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ShopCta
              href={landing.shopPath}
              label={`Shop ${product.name} Now`}
              priceFrom={lowestPrice}
              variant="navy"
            />
            <Link
              href="/guide"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white hover:bg-white/15 transition-colors"
            >
              Research guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
