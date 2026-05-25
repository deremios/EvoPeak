import { bundles } from "@/data/bundles";

export const categoryCards = [
  {
    label: "Weight Loss",
    href: "#goal-weight-loss",
    tint: "bg-[#E8F3EC]",
    image: "/images/home/card-weight-loss.png",
    fallback: "/images/home/evopeak-branded-hero.png",
  },
  {
    label: "Recovery",
    href: "#goal-recovery",
    tint: "bg-[#E8EEF5]",
    image: "/images/home/card-recovery.png",
    fallback: "/images/home/evopeak-branded-hero.png",
  },
  {
    label: "Skin & Glow",
    href: "#goal-skin",
    tint: "bg-[#F5F0E8]",
    image: "/images/home/card-skin.png",
    fallback: "/images/home/evopeak-branded-hero.png",
  },
  {
    label: "Performance",
    href: "#goal-performance",
    tint: "bg-[#EBF0EB]",
    image: "/images/home/card-performance.png",
    fallback: "/images/home/evopeak-branded-hero.png",
  },
  {
    label: "Stacks",
    href: "#goal-stacks",
    tint: "bg-[#F0EBF5]",
    image: "/images/home/card-stacks.png",
    fallback: "/images/home/evopeak-branded-hero.png",
  },
];

export const trustItems = [
  { icon: "verified", label: "HPLC/MS Verified" },
  { icon: "coa", label: "COA Documented" },
  { icon: "dispatch", label: "AU Same-Day Dispatch" },
  { icon: "payid", label: "PayID Accepted" },
];

export const goalSections = [
  {
    id: "goal-weight-loss",
    eyebrow: "Weight Loss",
    headline: "Retatrutide — results that",
    accent: "lead the category",
    subheadline: "The smarter approach to weight loss, built around you",
    body: "Retatrutide is a triple GLP-1, GIP, and glucagon receptor agonist — the most advanced incretin compound in published clinical data. Shop third-party tested vials with batch COAs and fast Australian dispatch.",
    ctaLabel: "Shop Retatrutide",
    ctaHref: "/shop/retatrutide",
    secondaryLabel: "Read the guide",
    secondaryHref: "/peptides/retatrutide",
    image: "/images/home/section-weight-loss.png",
    fallback: "/images/home/evopeak-branded-hero.png",
    reverse: false,
    checklistTitle: "Everything you need — included:",
    checklist: [
      "Triple agonist GLP-1, GIP & glucagon peptide",
      "Third-party HPLC/MS tested every batch",
      "Batch-specific COA documentation",
      "Multiple vial sizes in stock",
      "Fast & discreet AU shipping",
    ],
    features: [
      {
        title: "Phase 3 TRIUMPH-1 data",
        body: "Up to 28.3% mean weight loss at 80 weeks on the 12 mg dose in published Phase 3 topline results.",
      },
      {
        title: "Triple pathway coverage",
        body: "Appetite, glucose, and energy expenditure — glucagon co-activation sets it apart from dual agonists.",
      },
    ],
    benefits: [
      "Appetite control",
      "Fat metabolism",
      "Phase 3 results",
      "Fast AU shipping",
    ],
    phase3: true,
  },
  {
    id: "goal-recovery",
    eyebrow: "Recovery & Repair",
    headline: "Healing made",
    accent: "simple",
    subheadline: "Support that works when your body needs it most",
    body: "BPC-157, TB-500, and GHK-Cu are among the most trusted recovery peptides — available individually or in curated stacks with everything you need to get started.",
    ctaLabel: "Shop Recovery",
    ctaHref: "/collections/recovery-repair",
    image: "/images/home/section-recovery.png",
    fallback: "/images/home/evopeak-branded-hero.png",
    reverse: true,
    checklist: null,
    features: null,
    benefits: ["Tissue repair", "BPC-157 & TB-500", "Beginner stacks", "COA verified"],
  },
  {
    id: "goal-skin",
    eyebrow: "Skin & Appearance",
    headline: "Glow from",
    accent: "within",
    subheadline: "Peptides that work below the surface",
    body: "GHK-Cu, GLOW Blend, and melanocortin peptides for appearance-focused goals — third-party tested with batch documentation on every order.",
    ctaLabel: "Shop Skin & Glow",
    ctaHref: "/collections/skin-appearance",
    image: "/images/home/section-skin.png",
    fallback: "/images/home/evopeak-branded-hero.png",
    reverse: false,
    checklist: null,
    features: null,
    benefits: ["GHK-Cu", "GLOW Blend", "Collagen support", "Visible results"],
  },
  {
    id: "goal-performance",
    eyebrow: "Performance",
    headline: "Built for strength",
    accent: "and body composition",
    subheadline: "Unlock what your body can do",
    body: "GH axis peptides including GHRH, GHRP, and fragment compounds — organized by mechanism so you can find the right fit for your goals.",
    ctaLabel: "Shop Performance",
    ctaHref: "/collections/performance-gh-axis",
    image: "/images/home/section-performance.png",
    fallback: "/images/home/evopeak-branded-hero.png",
    reverse: true,
    checklist: null,
    features: null,
    benefits: ["GH axis", "Body composition", "Energy", "Strength"],
  },
  {
    id: "goal-stacks",
    eyebrow: "Curated Stacks",
    headline: "Everything you need —",
    accent: "bundled & discounted",
    subheadline: "Pre-built combos at 15% off",
    body: "Our most popular product combinations — recovery, weight loss, and starter stacks — bundled with bacteriostatic water and priced for value.",
    ctaLabel: "View All Stacks",
    ctaHref: "/bundles",
    image: "/images/home/section-stacks.png",
    fallback: "/images/home/evopeak-branded-hero.png",
    reverse: false,
    checklist: null,
    features: null,
    benefits: ["15% off bundles", "Pre-built combos", "Includes supplies", "Best value"],
    stacks: bundles.map((b) => ({
      name: b.name.replace(" Research Stack", " Stack").replace("Beginner Research Stack", "Starter Stack").replace("Fat Loss Research Stack", "Weight Loss Stack"),
      tagline: b.tagline,
      href: `/bundles/${b.slug}`,
      discount: b.discountPercent,
    })),
  },
];

export const guaranteeItems = [
  { icon: "truck", label: "Fast AU dispatch" },
  { icon: "doc", label: "Batch COAs" },
  { icon: "shield", label: "Third-party tested" },
  { icon: "price", label: "Clear pricing" },
];

export const homeFaqs = [
  {
    q: "How do I choose the right product?",
    a: "Start with your goal — weight loss, recovery, skin, or performance — then browse the collection or stack that matches. Every product page includes variants, pricing, and quality documentation.",
  },
  {
    q: "Do you provide COAs and testing?",
    a: "Yes. Every batch is HPLC/MS verified with batch-specific certificates of analysis available on the product page and after purchase.",
  },
  {
    q: "How fast is shipping?",
    a: "Orders placed before the daily cutoff dispatch same day from Queensland. PayID checkout available for instant payment confirmation.",
  },
];

export const homeReviews = [
  {
    name: "James R.",
    location: "Sydney, AU",
    body: "Products arrived well-packaged with COA documentation included. Fast dispatch and exactly what I ordered.",
    date: "March 2025",
  },
  {
    name: "Sarah K.",
    location: "Melbourne, AU",
    body: "Ordered three times now. HPLC verification results have been consistent each time. Easy to find what I need.",
    date: "February 2025",
  },
  {
    name: "Michael T.",
    location: "Brisbane, AU",
    body: "Same-day dispatch on my last two orders. The batch COA was easy to locate and product pages are genuinely helpful.",
    date: "April 2025",
  },
  {
    name: "Terri W.",
    location: "Perth, AU",
    body: "Quality is top notch. Retatrutide arrived quickly and the whole ordering process was straightforward.",
    date: "January 2025",
  },
];
