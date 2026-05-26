"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { region } from "@/config";
import { QualityProof } from "@/components/collections/quality-proof";
import { PeptideGuideHero } from "@/components/peptides/peptide-guide-hero";
import { ShopCta } from "@/components/peptides/shop-cta";
import { TrustIconStrip } from "@/components/home/medvi/primitives";
import { trustItems } from "@/components/home/home-data";
import { FadeIn } from "@/components/shared/fade-in";
import { getLandingByPeptideSlug, getLandingPath } from "@/data/peptide-landings";
import type { PeptideLandingContent } from "@/types/peptide-landing";
import type { Product } from "@/types/product";
import { getLowestPrice } from "@/lib/products";
import { ProductImage } from "@/components/shop/product-image";

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
      className="border-b border-black/6 py-8 last:border-0"
    >
      <h3 className="text-xl font-normal text-home-charcoal sm:text-2xl">{q}</h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-home-charcoal/65">{a}</p>
    </motion.article>
  );
}

function ContentBlock({ text, theme = "light" }: { text: string; theme?: "light" | "dark" }) {
  const textClass = theme === "dark" ? "text-white/85" : "text-home-charcoal/65";
  return (
    <>
      {text.split("\n\n").map((paragraph, i) => (
        <p key={i} className={`mt-4 first:mt-0 text-base leading-7 ${textClass}`}>
          {paragraph}
        </p>
      ))}
    </>
  );
}

function RelatedPeptideCard({ product }: { product: Product }) {
  const hasLanding = !!getLandingByPeptideSlug(product.slug);
  const href = hasLanding ? getLandingPath(product.slug) : `/shop/${product.slug}`;

  return (
    <Link
      href={href}
      className="group flex flex-col overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F3EC]">
        <ProductImage
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-normal text-home-charcoal group-hover:text-[#1b3d32]">
          {product.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-home-charcoal/65 line-clamp-2">
          {product.shortDescription}
        </p>
        <span className="mt-4 text-sm font-medium text-[#1b3d32]">
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

export function PeptideLanding({ landing, product, relatedProducts }: PeptideLandingProps) {
  const lowestPrice = getLowestPrice(product);
  const { sections } = landing;

  return (
    <div className="home-medvi min-h-screen bg-white text-home-charcoal">
      <PeptideGuideHero landing={landing} product={product} lowestPrice={lowestPrice} />
      <TrustIconStrip items={trustItems} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Overview
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/6">
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

      <section className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`grid gap-10 ${sections.mechanism.image ? "lg:grid-cols-2 lg:items-center" : ""}`}
          >
            {sections.mechanism.image && (
              <FadeIn>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-black/6 bg-white">
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
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Mechanism
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
                {sections.mechanism.title}
              </h2>
              <ContentBlock text={sections.mechanism.content} />
              <ul className="mt-6 space-y-3">
                {sections.mechanism.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6 text-home-charcoal/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-home-mint" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section id="dosage" className="scroll-mt-20 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
              Research reference
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
              {sections.dosage.title}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-home-charcoal/65">
              {sections.dosage.intro}
            </p>
          </FadeIn>
          <div className="mt-10 overflow-x-auto rounded-[2rem] border border-black/6 bg-white">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="border-b border-black/6 bg-[#fafafa]">
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-home-charcoal">
                    Protocol tier
                  </th>
                  <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-home-charcoal">
                    Published research detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {sections.dosage.rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-[#fafafa]/80"}>
                    <td className="px-6 py-4 font-medium text-home-charcoal whitespace-nowrap">
                      {row.label}
                    </td>
                    <td className="px-6 py-4 text-home-charcoal/65 leading-6">{row.detail}</td>
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

      <section className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <article className="rounded-[2rem] border border-black/6 bg-white p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Safety research
              </p>
              <h2 className="mt-4 text-2xl font-normal text-home-charcoal sm:text-3xl">
                {sections.sideEffects.title}
              </h2>
              <ContentBlock text={sections.sideEffects.content} />
              <ul className="mt-6 space-y-3">
                {sections.sideEffects.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-home-charcoal/65">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-home-mint" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-[2rem] border border-black/6 bg-white p-6 sm:p-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Handling
              </p>
              <h2 className="mt-4 text-2xl font-normal text-home-charcoal sm:text-3xl">
                {sections.reconstitution.title}
              </h2>
              <ContentBlock text={sections.reconstitution.content} />
              <p className="mt-4 text-sm leading-6 text-home-charcoal/65">
                {sections.reconstitution.suppliesNote}
              </p>
              <Link
                href="/shop/bacteriostatic-water"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#1b3d32] hover:underline"
              >
                Shop bacteriostatic water
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {sections.pricing && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
                Australia pricing
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
                {sections.pricing.title}
              </h2>
              <p className="mt-5 max-w-3xl text-base leading-7 text-home-charcoal/65">
                {sections.pricing.intro}
              </p>
            </FadeIn>
            <div className="mt-10 overflow-x-auto rounded-[2rem] border border-black/6 bg-[#fafafa]">
              <table className="w-full min-w-[540px] text-left text-sm">
                <thead>
                  <tr className="border-b border-black/6 bg-white">
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-home-charcoal">
                      Option
                    </th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-home-charcoal">
                      Price (AUD)
                    </th>
                    <th className="px-6 py-4 text-xs font-medium uppercase tracking-[0.12em] text-home-charcoal">
                      Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sections.pricing.rows.map((row) => (
                    <tr key={row.label} className="border-b border-black/6 last:border-0">
                      <td className="px-6 py-4 font-medium text-home-charcoal">{row.label}</td>
                      <td className="px-6 py-4 font-medium text-[#1b3d32]">{row.price}</td>
                      <td className="px-6 py-4 text-home-charcoal/65">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8">
              <ShopCta
                href={landing.shopPath}
                label={`Buy ${product.name} — Australia`}
                priceFrom={lowestPrice}
                variant="secondary"
              />
            </div>
          </div>
        </section>
      )}

      <section className="bg-home-hero py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
                Australia
              </p>
              <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight">
                {sections.howToGet.title}
              </h2>
              <ContentBlock text={sections.howToGet.content} theme="dark" />
            </div>
            <ol className="space-y-4">
              {sections.howToGet.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-[1.5rem] border border-white/15 bg-white/10 p-5 backdrop-blur"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-home-mint text-sm font-medium text-[#1b3d32]">
                    {i + 1}
                  </span>
                  <p className="text-sm leading-6 text-white/85">{step}</p>
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

      {landing.relatedBlogSlugs && landing.relatedBlogSlugs.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
              Further reading
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {landing.relatedBlogSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="rounded-full border border-black/8 bg-[#fafafa] px-6 py-3 text-sm font-medium text-home-charcoal transition hover:border-[#1b3d32]/30 hover:text-[#1b3d32]"
                >
                  Read: {slug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-black/6 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">FAQ</p>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
            {product.name} — Common Questions
          </h2>
          <div className="mt-10">
            {landing.faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
              Related compounds
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
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

      <section className="bg-home-hero py-16 text-center text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight">
            Ready to order <span className="text-home-mint">{product.name}?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
            Third-party HPLC/MS tested with batch-specific COA documentation. Shipped from
            Australia for laboratory research use only.
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
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Research guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
