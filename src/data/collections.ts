export type Audience = "men" | "women";

export interface ResearchCollection {
  slug: string;
  name: string;
  eyebrow: string;
  shortName: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  productIds: string[];
  bundleIds?: string[];
  audiences: Audience[];
  color: string;
  highlights: string[];
  faqs: Array<{ q: string; a: string }>;
}

export interface AudiencePathway {
  title: string;
  description: string;
  collectionSlug: string;
}

export const researchCollections: ResearchCollection[] = [
  {
    slug: "metabolic-research",
    name: "Metabolic Research",
    shortName: "Metabolic",
    eyebrow: "GLP-1, GIP, amylin, and lipolysis pathways",
    description:
      "Compare incretin, amylin, and growth-hormone-fragment research compounds used in metabolic pathway models.",
    seoTitle: "Metabolic Research Peptides Australia — EvoPeak",
    seoDescription:
      "Browse metabolic research peptides including Semaglutide, Tirzepatide, Retatrutide, Cagrisema, AOD-9604, and related compounds. Third-party tested and shipped from Australia for laboratory research use only.",
    productIds: [
      "semaglutide",
      "tirzepatide",
      "retatrutide",
      "cagrisema",
      "liraglutide",
      "aod-9604",
      "hgh-frag",
      "tesamorelin",
    ],
    bundleIds: ["fat-loss-stack"],
    audiences: ["men", "women"],
    color: "from-emerald-900 via-brand-navy to-slate-950",
    highlights: [
      "Incretin and amylin pathway research",
      "Single, dual, and triple agonist comparison",
      "Batch-level quality documentation",
    ],
    faqs: [
      {
        q: "What does this collection cover?",
        a: "This collection groups research compounds commonly studied in metabolic pathway models, including GLP-1, GIP, glucagon, amylin, and lipolysis-related mechanisms.",
      },
      {
        q: "Are these products for personal use?",
        a: "No. EvoPeak products are sold strictly for laboratory research use only and are not intended for human consumption or therapeutic use.",
      },
    ],
  },
  {
    slug: "recovery-repair",
    name: "Recovery & Repair Research",
    shortName: "Recovery",
    eyebrow: "Tissue repair, collagen, angiogenesis, and cell migration",
    description:
      "Explore compounds researched in tissue remodeling, cytoprotection, collagen signaling, and regenerative laboratory models.",
    seoTitle: "Recovery Research Peptides Australia — EvoPeak",
    seoDescription:
      "Shop recovery and tissue-repair research peptides including BPC-157, TB-500, GHK-Cu, GLOW Blend, and CJC-1295 + Ipamorelin. Research use only.",
    productIds: ["bpc-157", "tb-500", "ghk-cu", "glow-blend", "cjc-ipamorelin"],
    bundleIds: ["beginner-stack", "recovery-stack"],
    audiences: ["men", "women"],
    color: "from-sky-950 via-brand-navy to-slate-950",
    highlights: [
      "Cytoprotection and actin-regulation models",
      "Collagen and skin-remodeling research",
      "Popular recovery stacks and blends",
    ],
    faqs: [
      {
        q: "Which products are included in recovery research?",
        a: "This pathway includes BPC-157, TB-500, GHK-Cu, related blends, and selected GH-axis compounds where the research focus overlaps with recovery models.",
      },
      {
        q: "What quality documents should researchers check?",
        a: "Researchers should review purity analysis, mass identity confirmation, endotoxin screening, batch traceability, and storage guidance before use in controlled protocols.",
      },
    ],
  },
  {
    slug: "performance-gh-axis",
    name: "Performance & GH Axis Research",
    shortName: "GH Axis",
    eyebrow: "GHRH, GHRP, and growth-hormone-fragment pathways",
    description:
      "Study GH-axis compounds by mechanism, from GHRH analogues to secretagogues and pathway-specific fragments.",
    seoTitle: "GH Axis Research Peptides Australia — EvoPeak",
    seoDescription:
      "Compare performance and GH-axis research peptides including Tesamorelin, GHRP-2, CJC-1295 DAC, CJC-1295 + Ipamorelin, and HGH Fragment 176-191.",
    productIds: [
      "tesamorelin",
      "ghrp-2",
      "cjc-1295-dac",
      "cjc-ipamorelin",
      "hgh-frag",
    ],
    audiences: ["men"],
    color: "from-indigo-950 via-brand-navy to-slate-950",
    highlights: [
      "Pulsatile and sustained GH-axis models",
      "Secretagogue and GHRH comparison",
      "Mechanism-led research browsing",
    ],
    faqs: [
      {
        q: "How is this different from metabolic research?",
        a: "This collection focuses on GH-axis signaling and related pathway models, while metabolic research centers on incretin, amylin, glucagon, and lipolysis mechanisms.",
      },
      {
        q: "Can these products be used as performance treatments?",
        a: "No. These compounds are supplied only for laboratory research and are not sold for athletic, personal, or therapeutic use.",
      },
    ],
  },
  {
    slug: "cognitive-longevity",
    name: "Cognitive & Longevity Research",
    shortName: "Cognitive",
    eyebrow: "Neuropeptide, neuroprotection, and cellular aging models",
    description:
      "Browse specialty peptides researched in cognitive, neuroprotective, immunomodulatory, and longevity pathways.",
    seoTitle: "Cognitive and Longevity Research Peptides Australia — EvoPeak",
    seoDescription:
      "Explore cognitive and longevity research peptides including Selank, Semax, and Epithalon. Third-party tested compounds for laboratory research use only.",
    productIds: ["selank", "semax", "epithalon"],
    audiences: ["men", "women"],
    color: "from-violet-950 via-brand-navy to-slate-950",
    highlights: [
      "Neuropeptide pathway research",
      "BDNF, NGF, and cellular aging models",
      "Specialty compounds with research summaries",
    ],
    faqs: [
      {
        q: "What makes this a specialty collection?",
        a: "The products in this collection are often discussed in neuropeptide, neuroprotection, immunomodulation, and longevity literature rather than broad peptide categories.",
      },
      {
        q: "Does EvoPeak provide research protocols?",
        a: "No. EvoPeak provides product information and quality documentation, but does not provide human dosing, medical advice, or research protocol design.",
      },
    ],
  },
  {
    slug: "skin-appearance",
    name: "Skin & Appearance Research",
    shortName: "Appearance",
    eyebrow: "Copper peptides, melanocortin, and remodeling pathways",
    description:
      "Explore research compounds connected to collagen, skin remodeling, pigmentation, and appearance-related laboratory pathways.",
    seoTitle: "Skin and Appearance Research Peptides Australia — EvoPeak",
    seoDescription:
      "Browse skin and appearance research peptides including GHK-Cu, GLOW Blend, and Melanotan II. Laboratory research use only.",
    productIds: ["ghk-cu", "glow-blend", "melanotan-ii"],
    audiences: ["men", "women"],
    color: "from-orange-950 via-brand-navy to-slate-950",
    highlights: [
      "Collagen and extracellular matrix research",
      "Copper peptide and melanocortin pathways",
      "Blend and single-compound options",
    ],
    faqs: [
      {
        q: "Which pathways are represented here?",
        a: "This collection includes copper peptide, collagen-remodeling, tissue-repair, and melanocortin research pathways.",
      },
      {
        q: "Are appearance outcomes guaranteed?",
        a: "No. These products are research compounds only. EvoPeak does not make personal-use, cosmetic, or therapeutic outcome claims.",
      },
    ],
  },
  {
    slug: "blends-stacks",
    name: "Blends & Research Stacks",
    shortName: "Stacks",
    eyebrow: "Curated combinations for complementary mechanisms",
    description:
      "Compare pre-formulated blends and curated research stacks built around complementary peptide mechanisms.",
    seoTitle: "Research Peptide Blends and Stacks Australia — EvoPeak",
    seoDescription:
      "Shop EvoPeak research peptide blends and curated stacks including GLOW Blend, Beginner Research Stack, Fat Loss Research Stack, and Recovery Research Stack.",
    productIds: ["glow-blend", "bpc-157", "tb-500", "semaglutide", "aod-9604", "bac-water"],
    bundleIds: ["beginner-stack", "fat-loss-stack", "recovery-stack"],
    audiences: ["men", "women"],
    color: "from-brand-navy via-slate-900 to-black",
    highlights: [
      "Curated product combinations",
      "Complementary mechanism coverage",
      "Bundle savings where available",
    ],
    faqs: [
      {
        q: "What is the difference between a blend and a bundle?",
        a: "A blend is a single product containing multiple peptide components. A bundle combines separate products and selected variants into a curated research stack.",
      },
      {
        q: "Should researchers verify each component?",
        a: "Yes. Blends and stacks should be evaluated by component identity, total content, purity, storage compatibility, and batch documentation.",
      },
    ],
  },
  {
    slug: "supplies",
    name: "Research Supplies",
    shortName: "Supplies",
    eyebrow: "Reconstitution and laboratory handling essentials",
    description:
      "Find practical supplies that support peptide storage, reconstitution, and controlled laboratory handling.",
    seoTitle: "Research Peptide Supplies Australia — EvoPeak",
    seoDescription:
      "Shop bacteriostatic water and peptide research supplies from EvoPeak. Local Australian fulfilment and laboratory-use positioning.",
    productIds: ["bac-water"],
    audiences: ["men", "women"],
    color: "from-slate-900 via-brand-navy to-slate-950",
    highlights: [
      "Reconstitution support",
      "Companion supplies for peptide research",
      "Local Australian fulfilment",
    ],
    faqs: [
      {
        q: "What supplies are currently available?",
        a: "The current supplies collection includes bacteriostatic water for research handling and reconstitution workflows.",
      },
      {
        q: "Are supplies part of the same compliance standard?",
        a: "Yes. Supplies are presented as research-use products and should be handled according to label and storage guidance.",
      },
    ],
  },
];

export const audiencePathways: Record<Audience, AudiencePathway[]> = {
  men: [
    {
      title: "Metabolic Research",
      description: "GLP-1, GIP, amylin, and lipolysis compounds for male-focused metabolic pathway models.",
      collectionSlug: "metabolic-research",
    },
    {
      title: "Performance & GH Axis",
      description: "GHRH, GHRP, and GH-fragment compounds organized by signaling mechanism.",
      collectionSlug: "performance-gh-axis",
    },
    {
      title: "Recovery & Repair",
      description: "BPC-157, TB-500, GHK-Cu, and recovery stacks for tissue-remodeling research.",
      collectionSlug: "recovery-repair",
    },
    {
      title: "Cognitive & Longevity",
      description: "Neuropeptide and cellular-aging research pathways including Selank, Semax, and Epithalon.",
      collectionSlug: "cognitive-longevity",
    },
    {
      title: "Skin & Appearance",
      description: "Copper peptide, collagen, and melanocortin research pathways.",
      collectionSlug: "skin-appearance",
    },
    {
      title: "Blends & Stacks",
      description: "Curated combinations for researchers comparing complementary mechanisms.",
      collectionSlug: "blends-stacks",
    },
  ],
  women: [
    {
      title: "Metabolic Research",
      description: "Incretin, amylin, and lipolysis compounds organized for female-focused metabolic models.",
      collectionSlug: "metabolic-research",
    },
    {
      title: "Recovery & Repair",
      description: "Tissue-remodeling and collagen-related compounds including BPC-157, TB-500, and GHK-Cu.",
      collectionSlug: "recovery-repair",
    },
    {
      title: "Skin & Appearance",
      description: "Copper peptide, GLOW Blend, and melanocortin research pathways.",
      collectionSlug: "skin-appearance",
    },
    {
      title: "Cognitive & Longevity",
      description: "Specialty peptides researched in neuroprotection, cognition, and cellular-aging models.",
      collectionSlug: "cognitive-longevity",
    },
    {
      title: "Blends & Stacks",
      description: "Curated research stacks that pair complementary compounds and supplies.",
      collectionSlug: "blends-stacks",
    },
    {
      title: "Research Supplies",
      description: "Bacteriostatic water and essentials for controlled laboratory handling.",
      collectionSlug: "supplies",
    },
  ],
};
