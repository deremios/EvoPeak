"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { region } from "@/config";
import { TrustpilotBand } from "@/components/shared/trustpilot-band";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { FadeIn, StaggerGrid, StaggerItem } from "@/components/shared/fade-in";
import type { ResearchCollection } from "@/data/collections";

/* ─────────────────────────────── data ─────────────────────────────── */

const tickerItems = [
  "Metabolic Research",
  "GH Axis",
  "Recovery & Repair",
  "Cognition",
  "Skin & Appearance",
  "Longevity",
  "Blends & Stacks",
  "Research Supplies",
  "HPLC Verified",
  "COA Documented",
  "AU Dispatch",
];

const stats = [
  { to: 2800, suffix: "+", label: "Orders fulfilled" },
  { to: 47, suffix: "", label: "Research compounds" },
  { to: 100, suffix: "%", label: "HPLC/MS verified" },
  { to: 4, suffix: ".8★", label: "Trustpilot rating" },
];

const steps = [
  { number: "01", title: "Map the pathway", body: "Start with the research area you are studying — compare compounds by mechanism rather than scrolling one long grid." },
  { number: "02", title: "Review the compound", body: "Read the research summary, variants, pricing, and related pathways before selecting a product page." },
  { number: "03", title: "Check the standard", body: "Use COA documentation, HPLC/MS verification, endotoxin screening, and storage context as the quality baseline." },
  { number: "04", title: "Order for research", body: "Checkout with local Australian fulfilment and research-only positioning visible through the buying flow." },
];

const menCards = [
  { title: "Metabolic Pathways", body: "GLP-1, GIP, amylin, and lipolysis compounds.", href: "/collections/metabolic-research" },
  { title: "GH Axis Signaling", body: "GHRH, GHRP, and GH-fragment compounds by mechanism.", href: "/collections/performance-gh-axis" },
  { title: "Recovery Models", body: "BPC-157, TB-500, GHK-Cu and tissue-remodeling stacks.", href: "/collections/recovery-repair" },
  { title: "Cognitive Research", body: "Selank, Semax, Epithalon — neuropeptide literature.", href: "/collections/cognitive-longevity" },
  { title: "Appearance Research", body: "Copper peptide, collagen, and melanocortin pathways.", href: "/collections/skin-appearance" },
];

const womenCards = [
  { title: "Metabolic Pathways", body: "Incretin, amylin, and lipolysis compounds for female models.", href: "/collections/metabolic-research" },
  { title: "Recovery Models", body: "Tissue-repair, collagen, and cytoprotective compounds.", href: "/collections/recovery-repair" },
  { title: "Skin Research", body: "GHK-Cu, GLOW Blend, and melanocortin appearance pathways.", href: "/collections/skin-appearance" },
  { title: "Longevity Compounds", body: "Specialty peptides in cognitive and cellular-aging models.", href: "/collections/cognitive-longevity" },
  { title: "Research Supplies", body: "Bacteriostatic water and handling essentials.", href: "/collections/supplies" },
];

const qualityPoints = [
  { icon: "shield", title: "HPLC/MS Verified", body: "Identity and purity analysis run on every single batch before dispatch." },
  { icon: "lab", title: "Endotoxin Screened", body: "Quality review extends beyond purity data to biological safety indicators." },
  { icon: "doc", title: "COA Documented", body: "Batch-specific certificates of analysis available close to every purchase." },
  { icon: "truck", title: "AU Same-Day Dispatch", body: "Local Australian fulfilment for predictable, fast research delivery." },
];

const educationCards = [
  { title: "COA Verification", role: "Quality Documentation", body: "How to evaluate certificates of analysis, purity data, and batch traceability.", href: "/blog/understanding-certificates-of-analysis", img: "/images/quality-lab.jpg" },
  { title: "Storage Guidance", role: "Handling Basics", body: "Storage and handling context before working with lyophilised research compounds.", href: "/blog/peptide-storage-guide", img: "/images/product-vial.jpg" },
  { title: "Research Hub", role: "Education Library", body: "Compound guides, comparison articles, and pathway explainers.", href: "/blog", img: "/images/molecular-banner.jpg" },
  { title: "New User Guide", role: "Start Here", body: "Understand EvoPeak's research-only positioning, product structure, and quality expectations.", href: "/guide", img: "/images/product-flatlay.jpg" },
];

const faqs = [
  { q: "Is this a treatment or telehealth service?", a: "No. EvoPeak sells research compounds only. The men and women pages are catalog browsing aids, not diagnosis, treatment, prescription, or personal-use recommendations." },
  { q: "Why organize products by men and women?", a: "The audience pages create a clearer navigation layer for common research interests while keeping every product page grounded in laboratory-use language." },
  { q: "Do all products come with quality documentation?", a: "Yes. Every product has HPLC/MS verification and batch-specific COA documentation available before and after purchase." },
  { q: "What should researchers check before ordering?", a: "Review product summaries, variant details, COA documentation, HPLC/MS verification, endotoxin screening, storage guidance, and all research-only disclaimers." },
];

/* ─────────────────────────────── helpers ─────────────────────────────── */

function QualityIcon({ type }: { type: string }) {
  if (type === "shield")
    return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751" /></svg>;
  if (type === "lab")
    return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3" /></svg>;
  if (type === "doc")
    return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>;
  return <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>;
}

function FormulaCard({ title, body, href, label }: { title: string; body: string; href: string; label: string }) {
  return (
    <Link href={href} className="group flex min-h-[220px] flex-col justify-between rounded-[1.75rem] border border-border-default bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-2xl">
      <div>
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-orange">{label}</p>
        <h3 className="mt-4 text-xl font-black leading-snug text-brand-navy">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-text-secondary">{body}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-brand-navy transition-colors group-hover:text-brand-green">
        View pathway
        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
      </span>
    </Link>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      className="border-b border-border-default py-8 last:border-0"
    >
      <h3 className="text-xl font-black text-brand-navy sm:text-2xl">{q}</h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-text-secondary">{a}</p>
    </motion.article>
  );
}

/* ─────────────────────────────── page ─────────────────────────────── */

export function HomeClient({ collections }: { collections: ResearchCollection[] }) {
  return (
    <div className="bg-[#f5f1e8] text-text-primary">

      {/* ── Animated marquee ticker ── */}
      <div className="overflow-hidden border-y border-black/10 bg-brand-navy py-3 text-white">
        <div className="animate-marquee flex w-max gap-0">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-6 text-xs font-black uppercase tracking-[0.28em] text-white/70">
              {item}
              <span className="h-1 w-1 rounded-full bg-brand-orange opacity-60" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="relative min-h-[600px] overflow-hidden text-white sm:min-h-[720px] lg:min-h-[800px]">
        {/* Background image – priority loaded for LCP */}
        <Image
          src="/images/hero-home.webp"
          alt="EvoPeak research peptides — laboratory glassware and molecular structures on dark background"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Gradient overlay – heavier at top/bottom for text legibility on all screens */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/85" />
        <div className="relative mx-auto flex min-h-[600px] max-w-7xl flex-col items-center justify-center px-4 py-20 text-center sm:min-h-[720px] sm:px-6 sm:py-24 lg:min-h-[800px] lg:px-8 lg:py-28">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-6 text-sm font-black uppercase tracking-[0.36em] text-brand-green">
            {region.brandName} — Australian Research Peptides
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} className="max-w-6xl text-6xl font-black leading-[0.92] tracking-[-0.05em] sm:text-8xl lg:text-[7rem]">
            Research organized around your model
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.22 }} className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/75">
            Third-party tested compounds organized by research pathway, audience, and mechanism. Laboratory research use only.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.32 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/women" className="rounded-full bg-white px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-brand-navy transition-all hover:bg-brand-green hover:text-white hover:shadow-xl">
              Women&apos;s Research
            </Link>
            <Link href="/men" className="rounded-full border border-white/50 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/15 hover:shadow-xl">
              Men&apos;s Research
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.44 }} className="mt-16 grid w-full max-w-5xl gap-4 md:grid-cols-3">
            {collections.slice(0, 3).map((collection) => (
              <Link key={collection.slug} href={`/collections/${collection.slug}`} className="rounded-[1.5rem] border border-white/15 bg-white/10 p-5 text-left backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/20 hover:shadow-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-orange">{collection.shortName}</p>
                <p className="mt-3 text-lg font-black text-white">{collection.eyebrow}</p>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Trustpilot band ── */}
      <TrustpilotBand />

      {/* ── Animated stats ── */}
      <section className="bg-brand-navy py-16">
        <StaggerGrid className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-[2rem] border border-white/10 lg:grid-cols-4">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-brand-navy px-8 py-10 text-center text-white">
                <p className="text-5xl font-black tracking-[-0.04em] sm:text-6xl">
                  <AnimatedCounter to={stat.to} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-white/50">{stat.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* ── Formulas Built For You + product flatlay ── */}
      <section className="overflow-hidden bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">Formulas Built For You</p>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] text-brand-navy sm:text-6xl">
                We help researchers take control of product discovery.
              </h2>
              <p className="mt-6 max-w-lg text-lg leading-8 text-text-secondary">
                A catalog built around pathways, quality documentation, and research use case — so you spend less time searching and more time studying.
              </p>
              <Link href="/shop" className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-sm font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-brand-green hover:shadow-xl">
                Browse catalog
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
            </FadeIn>
            <FadeIn direction="right" delay={0.12}>
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <img src="/images/product-flatlay.webp" alt="EvoPeak research compounds — laboratory flatlay" className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full border border-white/30 bg-black/40 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white backdrop-blur">
                    Research use only — laboratory compounds
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 4-step process ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">Understand the Process</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] text-brand-navy sm:text-6xl">
              Four steps to cleaner research browsing.
            </h2>
          </FadeIn>
          <StaggerGrid className="grid gap-5 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.number}>
                <article className="group min-h-[340px] cursor-default rounded-[2rem] border border-border-default bg-[#f5f1e8] p-8 transition-all hover:-translate-y-1 hover:border-brand-green/30 hover:shadow-xl">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-lg font-black text-white">
                    {step.number}
                  </span>
                  <h3 className="mt-10 text-2xl font-black tracking-[-0.03em] text-brand-navy">{step.title}</h3>
                  <p className="mt-5 text-base leading-7 text-text-secondary">{step.body}</p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Find the Right Formula ── */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">Find the Right Formula</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-brand-navy sm:text-6xl">
              Browse by your research focus.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mb-16">
            <p className="mb-6 text-sm font-black uppercase tracking-[0.26em] text-brand-orange">Men&apos;s Care</p>
            <StaggerGrid className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {menCards.map((card) => (
                <StaggerItem key={card.title}>
                  <FormulaCard label="Men's Research" title={card.title} body={card.body} href={card.href} />
                </StaggerItem>
              ))}
            </StaggerGrid>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Metabolic", "GH Axis", "Recovery", "Cognition", "Appearance"].map((item) => (
                <span key={item} className="rounded-full border border-brand-navy/30 px-5 py-2 text-sm font-bold text-brand-navy">{item}</span>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mb-6 text-sm font-black uppercase tracking-[0.26em] text-brand-orange">Women&apos;s Care</p>
            <StaggerGrid className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {womenCards.map((card) => (
                <StaggerItem key={card.title}>
                  <FormulaCard label="Women's Research" title={card.title} body={card.body} href={card.href} />
                </StaggerItem>
              ))}
            </StaggerGrid>
            <div className="mt-7 flex flex-wrap gap-3">
              {["Metabolic", "Recovery", "Skin", "Longevity", "Supplies"].map((item) => (
                <span key={item} className="rounded-full border border-brand-navy/30 px-5 py-2 text-sm font-bold text-brand-navy">{item}</span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Quality section + lab photo ── */}
      <section className="overflow-hidden bg-brand-navy py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <FadeIn direction="left">
              <div className="relative overflow-hidden rounded-[2.5rem]">
                <img src="/images/quality-lab.jpg" alt="Laboratory quality verification" className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">Quality with Meaning</p>
              <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-6xl">
                Every batch documented before it ships.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                HPLC/MS verification, endotoxin screening, and batch-specific COA documentation — because research outcomes depend on it.
              </p>
              <StaggerGrid className="mt-8 grid gap-4 sm:grid-cols-2">
                {qualityPoints.map((point) => (
                  <StaggerItem key={point.title}>
                    <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                        <QualityIcon type={point.icon} />
                      </div>
                      <h3 className="text-base font-black">{point.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/65">{point.body}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGrid>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Mid-page CTA over molecular image ── */}
      <section className="relative overflow-hidden py-28 text-white">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/molecular-banner.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/85" />
        <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-orange">Uncover your research pathway</p>
            <h2 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
              Start with the pathway. Compare the compound.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Keep quality documentation at the center of every decision — from browsing to checkout.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/shop" className="rounded-full bg-white px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-brand-navy transition-all hover:bg-brand-green hover:text-white hover:shadow-xl">
                Browse all products
              </Link>
              <Link href="/collections/metabolic-research" className="rounded-full border border-white/40 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/15">
                View collections
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Research Guides with real images ── */}
      <section className="bg-[#f5f1e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.3em] text-brand-green">EvoPeak Research Guides</p>
            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-black tracking-[-0.04em] text-brand-navy sm:text-6xl">
              Learn the standard before selecting a compound.
            </h2>
          </FadeIn>
          <StaggerGrid className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {educationCards.map((card) => (
              <StaggerItem key={card.title}>
                <Link href={card.href} className="group flex flex-col overflow-hidden rounded-[2rem] bg-white transition-all hover:-translate-y-1.5 hover:shadow-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={card.img} alt={card.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-orange">{card.role}</p>
                    <h3 className="mt-3 text-xl font-black text-brand-navy">{card.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">{card.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-brand-green">
                      View story
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* ── Bottom ticker (reverse direction) ── */}
      <div className="overflow-hidden border-y border-black/10 bg-brand-navy py-3 text-white">
        <div className="animate-marquee flex w-max gap-0" style={{ animationDirection: "reverse" }}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-6 text-xs font-black uppercase tracking-[0.28em] text-white/70">
              {item}
              <span className="h-1 w-1 rounded-full bg-brand-orange opacity-60" />
            </span>
          ))}
        </div>
      </div>

      {/* ── FAQ ── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-12 text-center">
            <h2 className="text-5xl font-black tracking-[-0.05em] text-brand-navy sm:text-7xl">
              Any Questions? We&apos;ve got answers.
            </h2>
          </FadeIn>
          <div>
            {faqs.map((faq, i) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="bg-brand-navy px-4 py-24 text-center text-white sm:px-6 sm:py-32 lg:px-8">
        <FadeIn>
          <h2 className="mx-auto max-w-5xl text-5xl font-black leading-none tracking-[-0.05em] sm:text-7xl">
            Uncover what&apos;s possible with {region.brandName}.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Shop by men, women, and research pathway while keeping the EvoPeak quality standard and research-only compliance intact.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/women" className="rounded-full bg-white px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-brand-navy transition-all hover:bg-brand-green hover:text-white hover:shadow-xl">
              Women&apos;s Research
            </Link>
            <Link href="/men" className="rounded-full border border-white/30 px-9 py-4 text-sm font-black uppercase tracking-[0.18em] text-white transition-all hover:bg-white/15">
              Men&apos;s Research
            </Link>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}
