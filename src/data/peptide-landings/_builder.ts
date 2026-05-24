import type { Product } from "@/types/product";
import type { PeptideLandingContent, PeptideLandingFaq } from "@/types/peptide-landing";

export interface LandingOverrides {
  heroEyebrow?: string;
  keywords?: string[];
  mechanismTitle?: string;
  mechanismContent?: string;
  mechanismBullets?: string[];
  mechanismImage?: string;
  dosageIntro?: string;
  dosageRows?: { label: string; detail: string }[];
  sideEffectsContent?: string;
  sideEffectItems?: string[];
  reconstitutionContent?: string;
  reconstitutionNote?: string;
  howToGetContent?: string;
  faqs?: PeptideLandingFaq[];
  relatedProductIds?: string[];
  relatedBlogSlugs?: string[];
  heroImage?: string;
  gradient?: string;
  skipMechanismImage?: boolean;
}

const CATEGORY_CONFIG: Record<
  string,
  { gradient: string; heroImage: string; mechanismImage: string; eyebrow: string }
> = {
  "weight-loss": {
    gradient: "from-emerald-900 via-brand-navy to-slate-950",
    heroImage: "/images/molecular-banner.jpg",
    mechanismImage: "/images/molecular-banner.jpg",
    eyebrow: "Metabolic research peptide",
  },
  recovery: {
    gradient: "from-sky-950 via-brand-navy to-slate-950",
    heroImage: "/images/product-flatlay.jpg",
    mechanismImage: "/images/articles/tissue-repair-peptides.webp",
    eyebrow: "Recovery & tissue repair research",
  },
  performance: {
    gradient: "from-violet-950 via-brand-navy to-slate-950",
    heroImage: "/images/product-vial.jpg",
    mechanismImage: "/images/molecular-banner.jpg",
    eyebrow: "GH axis & performance research",
  },
  cognitive: {
    gradient: "from-indigo-950 via-brand-navy to-slate-950",
    heroImage: "/images/quality-lab.jpg",
    mechanismImage: "/images/quality-lab.jpg",
    eyebrow: "Cognitive & specialty research",
  },
  blends: {
    gradient: "from-amber-900 via-brand-navy to-slate-950",
    heroImage: "/images/product-flatlay.jpg",
    mechanismImage: "/images/articles/tissue-repair-peptides.webp",
    eyebrow: "Multi-peptide research blend",
  },
  supplies: {
    gradient: "from-slate-800 via-brand-navy to-slate-950",
    heroImage: "/images/product-vial.jpg",
    mechanismImage: "/images/product-vial.jpg",
    eyebrow: "Research supplies",
  },
};

function slugKeywords(name: string, slug: string): string[] {
  const lower = name.toLowerCase();
  return [
    lower,
    `${lower} australia`,
    `${lower} peptide`,
    `${slug} australia`,
    `${lower} dosage`,
    `${lower} side effects`,
    `what is ${lower}`,
    `${lower} how to get`,
    `${lower} australia buy`,
    "research peptides australia",
  ];
}

function defaultDosageRows(product: Product): { label: string; detail: string }[] {
  const sizes = product.variants.map((v) => v.size).join(", ");
  return [
    {
      label: "Research reference",
      detail: `Published literature varies by model and endpoint — consult primary sources for protocol-specific dosing in laboratory settings`,
    },
    {
      label: "Administration route",
      detail: "Subcutaneous injection is most common in published peptide research protocols",
    },
    {
      label: "Frequency",
      detail: "Dosing frequency depends on compound half-life and research design — daily to weekly intervals reported in literature",
    },
    {
      label: "Available vial sizes",
      detail: `${sizes} — select based on your laboratory protocol requirements`,
    },
    {
      label: "Titration",
      detail: "Many research protocols start at lower doses and escalate to assess receptor response and tolerability in models",
    },
  ];
}

function defaultSideEffects(categoryId: string): string[] {
  if (categoryId === "weight-loss") {
    return [
      "Gastrointestinal effects (nausea, vomiting, diarrhoea) commonly reported in incretin-class research",
      "Injection site reactions at subcutaneous administration sites",
      "Appetite suppression observed dose-dependently in metabolic research models",
      "Most events in published trials reported as mild to moderate and dose-dependent",
    ];
  }
  if (categoryId === "recovery" || categoryId === "blends") {
    return [
      "Injection site erythema or discomfort in subcutaneous administration studies",
      "Transient local inflammation reported in some tissue repair models",
      "Generally well-tolerated in published preclinical research at standard doses",
      "No significant systemic adverse events consistently reported across literature",
    ];
  }
  if (categoryId === "performance") {
    return [
      "Injection site reactions common to peptide administration routes",
      "Transient water retention reported in some GH-axis research models",
      "Headache and mild fatigue documented in GHRH/GHRP combination studies",
      "Effects generally resolve with dose adjustment in published protocols",
    ];
  }
  if (categoryId === "cognitive") {
    return [
      "Mild nasal irritation when intranasal routes used in published Semax/Selank research",
      "Injection site reactions for subcutaneous administration routes",
      "Generally well-tolerated in nootropic peptide literature at research doses",
      "No significant dependence or withdrawal reported in animal model studies",
    ];
  }
  return [
    "Follow standard laboratory safety protocols for handling research compounds",
    "Store and handle according to COA and product specifications",
  ];
}

function defaultFaqs(product: Product): PeptideLandingFaq[] {
  const name = product.name;
  const lower = name.toLowerCase();
  return [
    {
      q: `What is ${name}?`,
      a: `${product.shortDescription} ${product.description.slice(0, 200)}… It is supplied for laboratory research use only.`,
    },
    {
      q: `What is the ${name} dosage used in research?`,
      a: `Published research uses varying doses depending on the model and endpoint. EvoPeak supplies ${product.variants.map((v) => v.size).join(" and ")} vials. All dosage information is for research reference only and does not constitute recommendations.`,
    },
    {
      q: `What are the side effects of ${name}?`,
      a: `Side effect profiles in published research depend on dose, route, and model system. Consult primary literature for compound-specific findings. All information is drawn from research contexts, not personal use.`,
    },
    {
      q: `Can I buy ${name} in Australia?`,
      a: `Yes. EvoPeak supplies research-grade ${name} to Australian researchers with HPLC/MS verification, batch-specific COA documentation, and domestic shipping. Products are for laboratory research use only.`,
    },
    {
      q: `How do I get ${name} in Australia?`,
      a: `Order from the EvoPeak shop page, select your vial size, review the COA, and checkout with local Australian fulfilment.`,
    },
    {
      q: `How do I reconstitute ${name}?`,
      a: `${name} is supplied as lyophilised powder. Reconstitute with bacteriostatic water, inject diluent slowly down the vial wall without shaking, and store at 2–8°C once reconstituted. Bacteriostatic water is available from EvoPeak.`,
    },
    {
      q: `What purity standard does EvoPeak ${name} meet?`,
      a: `Every batch undergoes HPLC purity analysis (targeting >99%), mass spectrometry identity verification, and endotoxin screening. Batch-specific COAs are available on the product page.`,
    },
    {
      q: `Is ${lower} peptide the same as ${product.alternateName ?? name}?`,
      a: product.alternateName
        ? `${name} is also known as ${product.alternateName}. Both refer to the same research compound supplied by EvoPeak.`
        : `${name} is the research compound name used across EvoPeak product documentation and COA records.`,
    },
  ];
}

export function buildLandingFromProduct(
  product: Product,
  overrides: LandingOverrides = {}
): PeptideLandingContent {
  const cat = CATEGORY_CONFIG[product.categoryId] ?? CATEGORY_CONFIG.recovery;
  const name = product.name;
  const slug = product.slug;

  return {
    productId: product.id,
    peptideSlug: slug,
    shopPath: `/shop/${slug}`,
    seoTitle: `${name} Australia — Research Peptide Guide, Dosage & Side Effects`,
    seoDescription: `Complete guide to ${name} in Australia. Learn what ${name} is, published research on dosage, side effects, reconstitution, and how to order research-grade ${name} peptide from EvoPeak.`,
    keywords: overrides.keywords ?? slugKeywords(name, slug),
    heroEyebrow: overrides.heroEyebrow ?? cat.eyebrow,
    heroHeadline: `${name} Australia`,
    heroSubheadline: `Everything researchers need to know about ${name} — mechanism, published dosing protocols, side effect profiles, reconstitution, and how to source third-party tested ${name} in Australia.`,
    heroImage: overrides.heroImage ?? cat.heroImage,
    ctaLabel: `Shop ${name}`,
    gradient: overrides.gradient ?? cat.gradient,
    sections: {
      whatIs: {
        title: `What Is ${name}?`,
        content: `${product.description}\n\n${product.alternateName ? `Also known as ${product.alternateName}, ` : ""}${name} is supplied as a lyophilised research peptide for laboratory use only. ${product.researchSummary}`,
        image: overrides.heroImage ?? cat.heroImage,
      },
      mechanism: {
        title: overrides.mechanismTitle ?? `How ${name} Works — Research Mechanism`,
        content: overrides.mechanismContent ?? product.researchSummary,
        bullets: overrides.mechanismBullets ?? [
          `Primary research focus: ${product.tags.slice(0, 3).join(", ")}`,
          "Mechanism studied in published preclinical and clinical literature",
          "Third-party HPLC/MS identity verification on every EvoPeak batch",
          "Supplied strictly for laboratory research use",
        ],
        image: overrides.skipMechanismImage ? undefined : (overrides.mechanismImage ?? cat.mechanismImage),
      },
      dosage: {
        title: `${name} Dosage — Published Research Protocols`,
        intro:
          overrides.dosageIntro ??
          `The following reference points are drawn from published research literature. These figures are provided for research reference only and do not constitute dosing recommendations. ${name} is sold strictly for laboratory research use.`,
        rows: overrides.dosageRows ?? defaultDosageRows(product),
      },
      sideEffects: {
        title: `${name} Side Effects — Research Findings`,
        content:
          overrides.sideEffectsContent ??
          `Side effect profiles documented in published ${name} research depend on dose, route of administration, and model system. The following are commonly reported findings from research literature — not from personal use contexts.`,
        items: overrides.sideEffectItems ?? defaultSideEffects(product.categoryId),
      },
      reconstitution: {
        title: product.categoryId === "supplies" ? `Using ${name} for Peptide Reconstitution` : `Reconstituting ${name}`,
        content:
          overrides.reconstitutionContent ??
          (product.categoryId === "supplies"
            ? product.description
            : `${name} is supplied as a lyophilised powder and must be reconstituted before use in laboratory protocols. Use bacteriostatic water (0.9% benzyl alcohol) for multi-dose vials. Inject diluent slowly down the inside wall of the vial — do not shake vigorously.`),
        suppliesNote:
          overrides.reconstitutionNote ??
          "Bacteriostatic water is available from EvoPeak. Store reconstituted peptide at 2–8°C and lyophilised powder at −20°C.",
      },
      howToGet: {
        title: `How to Get ${name} in Australia`,
        content:
          overrides.howToGetContent ??
          `Researchers in Australia can source ${name} through EvoPeak — a local supplier offering third-party tested research compounds with batch-specific COA documentation and domestic shipping.`,
        steps: [
          `Browse ${name} variants (${product.variants.map((v) => v.size).join(", ")}) on the EvoPeak product page`,
          "Review the certificate of analysis (COA) for HPLC purity and mass spectrometry identity verification",
          "Select your vial size and add to cart — prices include GST with same-day Australian dispatch",
          "Receive your order with batch-specific quality documentation for laboratory traceability",
        ],
      },
    },
    faqs: overrides.faqs ?? defaultFaqs(product),
    relatedProductIds: overrides.relatedProductIds ?? [],
    relatedBlogSlugs: overrides.relatedBlogSlugs,
    ogImage: overrides.heroImage ?? cat.heroImage,
  };
}

export function getRelatedInCategory(
  product: Product,
  allProducts: Product[],
  count = 3
): string[] {
  return allProducts
    .filter(
      (p) =>
        p.published &&
        p.categoryId === product.categoryId &&
        p.id !== product.id
    )
    .slice(0, count)
    .map((p) => p.id);
}
