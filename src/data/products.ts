import type { Product } from "@/types/product";

export const products: Product[] = [
  // ─── WEIGHT LOSS ──────────────────────────────────────────────
  {
    id: "semaglutide",
    name: "Semaglutide",
    slug: "semaglutide",
    categoryId: "weight-loss",
    alternateName: "GLP-1 Receptor Agonist (Ozempic analogue)",
    shortDescription: "GLP-1 receptor agonist for metabolic and appetite regulation research.",
    description:
      "Semaglutide is a synthetic GLP-1 receptor agonist peptide widely studied for its role in glucose homeostasis and appetite regulation. Research has demonstrated significant effects on metabolic pathways involved in energy balance. It is one of the most extensively researched peptides in the GLP-1 class, with numerous published studies on its pharmacokinetic profile.",
    researchSummary:
      "Published research indicates Semaglutide binds to GLP-1 receptors with high affinity, activating cAMP signaling pathways. Studies in animal models have shown dose-dependent effects on food intake reduction and improved insulin sensitivity. Half-life studies suggest extended duration of action compared to native GLP-1.",
    variants: [
      { id: "sema-5", productId: "semaglutide", size: "5 mg", price: 229.00, sku: "SEMA-5MG", inStock: true },
      { id: "sema-10", productId: "semaglutide", size: "10 mg", price: 399.00, sku: "SEMA-10MG", inStock: true },
    ],
    imageUrl: "/images/products/semaglutide.webp",
    tags: ["glp-1", "weight-loss", "metabolic", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "tirzepatide",
    name: "Tirzepatide",
    slug: "tirzepatide",
    categoryId: "weight-loss",
    alternateName: "Dual GIP/GLP-1 Receptor Agonist (Mounjaro analogue)",
    shortDescription: "Dual GIP/GLP-1 receptor agonist for advanced metabolic research.",
    description:
      "Tirzepatide is a novel dual glucose-dependent insulinotropic polypeptide (GIP) and GLP-1 receptor agonist. It represents a first-in-class approach to metabolic research by targeting two incretin receptors simultaneously. Research interest has surged due to its unique dual-agonist mechanism.",
    researchSummary:
      "Studies show Tirzepatide activates both GIP and GLP-1 receptors, producing synergistic effects on metabolic parameters. Preclinical data demonstrates superior glycaemic control and body weight reduction compared to selective GLP-1 agonists alone. Its pharmacokinetic profile supports once-weekly research dosing protocols.",
    variants: [
      { id: "tirz-5", productId: "tirzepatide", size: "5 mg", price: 219.00, sku: "TIRZ-5MG", inStock: true },
      { id: "tirz-10", productId: "tirzepatide", size: "10 mg", price: 389.00, sku: "TIRZ-10MG", inStock: true },
      { id: "tirz-15", productId: "tirzepatide", size: "15 mg", price: 539.00, sku: "TIRZ-15MG", inStock: true },
    ],
    imageUrl: "/images/products/tirzepatide.webp",
    tags: ["glp-1", "gip", "weight-loss", "metabolic", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "retatrutide",
    name: "Retatrutide",
    slug: "retatrutide",
    categoryId: "weight-loss",
    alternateName: "Triple Agonist (GLP-1/GIP/Glucagon)",
    shortDescription: "Triple incretin agonist for advanced metabolic pathway research.",
    description:
      "Retatrutide is a novel triple hormone receptor agonist targeting GLP-1, GIP, and glucagon receptors simultaneously. It represents the next generation of incretin-based research compounds. Early research suggests a broader metabolic impact than dual or single agonists.",
    researchSummary:
      "Preclinical research demonstrates that triple agonism produces additive effects on energy expenditure via glucagon receptor activation alongside the appetite-modulating effects of GLP-1 and GIP signaling. Phase 2 clinical trial data suggests dose-dependent body weight changes of significant magnitude.",
    variants: [
      { id: "reta-5", productId: "retatrutide", size: "5 mg", price: 259.00, sku: "RETA-5MG", inStock: true },
      { id: "reta-10", productId: "retatrutide", size: "10 mg", price: 459.00, sku: "RETA-10MG", inStock: true },
    ],
    imageUrl: "/images/products/retatrutide.webp",
    tags: ["glp-1", "gip", "glucagon", "weight-loss", "metabolic"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "cagrisema",
    name: "Cagrisema",
    slug: "cagrisema",
    categoryId: "weight-loss",
    alternateName: "Cagrilintide + Semaglutide Blend",
    shortDescription: "Amylin analogue + GLP-1 agonist blend for dual-pathway metabolic research.",
    description:
      "Cagrisema is a combination research peptide containing Cagrilintide (an amylin analogue) and Semaglutide (a GLP-1 agonist). This blend targets two distinct satiety pathways — amylin-mediated hindbrain signaling and GLP-1-mediated hypothalamic pathways — offering researchers a tool to study synergistic metabolic effects.",
    researchSummary:
      "Published data indicates the combination of amylin and GLP-1 pathway activation produces greater reductions in food intake than either agent alone in preclinical models. The amylin component adds a complementary mechanism via area postrema activation.",
    variants: [
      { id: "cagri-5", productId: "cagrisema", size: "5 mg", price: 289.00, sku: "CAGRI-5MG", inStock: true },
    ],
    imageUrl: "/images/products/cagrisema.webp",
    tags: ["amylin", "glp-1", "weight-loss", "blend"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "liraglutide",
    name: "Liraglutide",
    slug: "liraglutide",
    categoryId: "weight-loss",
    alternateName: "GLP-1 Analogue (Saxenda/Victoza analogue)",
    shortDescription: "First-generation GLP-1 analogue for established metabolic research protocols.",
    description:
      "Liraglutide is a well-established GLP-1 receptor agonist with extensive published research. It shares 97% homology with native human GLP-1 and has been one of the most widely studied peptides in metabolic research. Its established safety and efficacy profile makes it a common reference compound.",
    researchSummary:
      "Liraglutide has been extensively studied in both preclinical and clinical settings. Research demonstrates activation of GLP-1 receptors in pancreatic beta cells and CNS appetite centres. Its acylation with a C16 fatty acid enables albumin binding, extending its half-life to approximately 13 hours.",
    variants: [
      { id: "lira-5", productId: "liraglutide", size: "5 mg", price: 189.00, sku: "LIRA-5MG", inStock: true },
      { id: "lira-10", productId: "liraglutide", size: "10 mg", price: 329.00, sku: "LIRA-10MG", inStock: true },
    ],
    imageUrl: "/images/products/liraglutide.webp",
    tags: ["glp-1", "weight-loss", "metabolic"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "aod-9604",
    name: "AOD-9604",
    slug: "aod-9604",
    categoryId: "weight-loss",
    alternateName: "Fragment 177-191 (hGH Fragment)",
    shortDescription: "Modified growth hormone fragment for lipolysis and fat metabolism research.",
    description:
      "AOD-9604 is a modified fragment of human growth hormone (amino acids 177-191) with an additional tyrosine residue. It was specifically developed to research the fat-reducing effects of growth hormone without the growth-promoting or diabetogenic effects. It has been granted GRAS status by the FDA for use in food products.",
    researchSummary:
      "Research indicates AOD-9604 stimulates lipolysis and inhibits lipogenesis in adipose tissue models. Unlike full-length hGH, it does not affect IGF-1 levels or insulin sensitivity in preclinical studies. Its mechanism involves interaction with the beta-3 adrenergic receptor pathway.",
    variants: [
      { id: "aod-5", productId: "aod-9604", size: "5 mg", price: 79.00, sku: "AOD-5MG", inStock: true },
    ],
    imageUrl: "/images/products/aod-9604.webp",
    tags: ["hgh-fragment", "weight-loss", "lipolysis"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },

  // ─── RECOVERY & HEALING ───────────────────────────────────────
  {
    id: "bpc-157",
    name: "BPC-157",
    slug: "bpc-157",
    categoryId: "recovery",
    alternateName: "Body Protection Compound-157",
    shortDescription: "Gastric pentadecapeptide for tissue repair and cytoprotection research.",
    description:
      "BPC-157 (Body Protection Compound-157) is a pentadecapeptide derived from human gastric juice. It is one of the most widely researched peptides for tissue repair, with published studies spanning tendon, ligament, muscle, bone, and gut tissue models. Its cytoprotective properties have made it a cornerstone compound in regenerative research.",
    researchSummary:
      "Extensive preclinical research demonstrates BPC-157 accelerates tissue healing via upregulation of growth factor expression (VEGF, EGF), nitric oxide system modulation, and FAK-paxillin pathway activation. Studies show effects on angiogenesis, collagen deposition, and anti-inflammatory pathways across multiple tissue types.",
    variants: [
      { id: "bpc-5", productId: "bpc-157", size: "5 mg", price: 69.00, sku: "BPC-5MG", inStock: true },
      { id: "bpc-10", productId: "bpc-157", size: "10 mg", price: 119.00, sku: "BPC-10MG", inStock: true },
    ],
    imageUrl: "/images/products/bpc-157.webp",
    tags: ["recovery", "healing", "tissue-repair", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "tb-500",
    name: "TB-500",
    slug: "tb-500",
    categoryId: "recovery",
    alternateName: "Thymosin Beta-4 Fragment",
    shortDescription: "Thymosin beta-4 fragment for wound healing and tissue regeneration research.",
    description:
      "TB-500 is a synthetic fragment of Thymosin Beta-4, a naturally occurring 43-amino acid peptide present in nearly all human cells. It plays a critical role in cell migration, differentiation, and tissue repair. TB-500 has been studied extensively for wound healing, inflammation modulation, and cardiac tissue regeneration.",
    researchSummary:
      "Research shows TB-500 promotes cell migration by upregulating actin polymerisation, which is essential for cell movement and tissue repair. Studies in animal models demonstrate accelerated wound closure, reduced inflammation markers, and improved cardiac function post-ischemic injury. It also shows hair follicle stem cell stimulation.",
    variants: [
      { id: "tb-5", productId: "tb-500", size: "5 mg", price: 69.00, sku: "TB-5MG", inStock: true },
      { id: "tb-10", productId: "tb-500", size: "10 mg", price: 119.00, sku: "TB-10MG", inStock: true },
    ],
    imageUrl: "/images/products/tb-500.webp",
    tags: ["recovery", "healing", "thymosin", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "cjc-ipamorelin",
    name: "CJC-1295 (no DAC) + Ipamorelin Blend",
    slug: "cjc-1295-ipamorelin-blend",
    categoryId: "recovery",
    alternateName: "Modified GRF 1-29 + Ipamorelin",
    shortDescription: "GHRH + GHRP blend for synergistic growth hormone secretion research.",
    description:
      "This blend combines CJC-1295 without DAC (also known as Modified GRF 1-29), a growth hormone-releasing hormone analogue, with Ipamorelin, a selective growth hormone-releasing peptide. The combination is widely used in research protocols studying pulsatile GH release patterns.",
    researchSummary:
      "Research demonstrates that combining a GHRH analogue (CJC-1295) with a GHRP (Ipamorelin) produces synergistic GH release significantly greater than either peptide alone. Ipamorelin is notably selective — it does not significantly affect cortisol, prolactin, or ACTH levels, making it preferred for controlled research settings.",
    variants: [
      { id: "cjc-ipa-10", productId: "cjc-ipamorelin", size: "5 mg / 5 mg", price: 99.00, sku: "CJCIPA-10MG", inStock: true },
    ],
    imageUrl: "/images/products/cjc-ipamorelin.webp",
    tags: ["growth-hormone", "ghrh", "ghrp", "blend", "recovery"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "cjc-1295-dac",
    name: "CJC-1295 with DAC",
    slug: "cjc-1295-dac",
    categoryId: "recovery",
    alternateName: "Drug Affinity Complex Modified GRF",
    shortDescription: "Long-acting GHRH analogue for sustained GH elevation research.",
    description:
      "CJC-1295 with DAC (Drug Affinity Complex) is a modified growth hormone-releasing hormone analogue with an extended half-life due to its DAC modification, which enables covalent binding to serum albumin. This results in sustained GH elevation over days rather than hours, making it suitable for long-duration research protocols.",
    researchSummary:
      "The DAC modification extends the half-life to approximately 6-8 days, compared to 30 minutes for native GHRH. Studies show sustained elevation of GH and IGF-1 levels with less frequent administration. Research indicates a more tonic (rather than pulsatile) GH release pattern compared to non-DAC variants.",
    variants: [
      { id: "cjc-dac-2", productId: "cjc-1295-dac", size: "2 mg", price: 59.00, sku: "CJCDAC-2MG", inStock: true },
      { id: "cjc-dac-5", productId: "cjc-1295-dac", size: "5 mg", price: 99.00, sku: "CJCDAC-5MG", inStock: true },
    ],
    imageUrl: "/images/products/cjc-1295-dac.webp",
    tags: ["growth-hormone", "ghrh", "recovery"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    slug: "ghk-cu",
    categoryId: "recovery",
    alternateName: "Copper Peptide (Glycyl-L-Histidyl-L-Lysine Copper)",
    shortDescription: "Copper tripeptide complex for skin remodelling and wound healing research.",
    description:
      "GHK-Cu is a naturally occurring copper-binding tripeptide (glycyl-L-histidyl-L-lysine) found in human plasma, saliva, and urine. Plasma levels decline with age, and research into its role in tissue remodelling, collagen synthesis, and gene expression modulation has expanded significantly.",
    researchSummary:
      "Studies demonstrate GHK-Cu upregulates collagen synthesis, decorin, and glycosaminoglycan production while downregulating metalloproteinases. Genomic research shows it modulates expression of over 4,000 genes, many involved in tissue repair and anti-inflammatory pathways. It also demonstrates antioxidant activity via superoxide dismutase upregulation.",
    variants: [
      { id: "ghk-50", productId: "ghk-cu", size: "50 mg", price: 89.00, sku: "GHKCU-50MG", inStock: true },
    ],
    imageUrl: "/images/products/ghk-cu.webp",
    tags: ["copper-peptide", "skin", "recovery", "collagen"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "tesamorelin",
    name: "Tesamorelin",
    slug: "tesamorelin",
    categoryId: "performance",
    alternateName: "GHRH Analogue (Egrifta analogue)",
    shortDescription: "Stabilised GHRH analogue for visceral adiposity and GH research.",
    description:
      "Tesamorelin is a stabilised growth hormone-releasing hormone (GHRH) analogue with a trans-3-hexenoic acid modification that enhances its stability and bioavailability. It is one of the few GHRH analogues with extensive clinical research data, particularly regarding visceral adipose tissue reduction.",
    researchSummary:
      "Clinical research demonstrates Tesamorelin selectively stimulates pituitary GH secretion, resulting in physiological GH pulsatility. Studies show significant reductions in visceral adipose tissue (VAT) with preserved subcutaneous fat, and improvements in lipid profiles. It maintains the hypothalamic-pituitary feedback loop unlike exogenous GH.",
    variants: [
      { id: "tesa-2", productId: "tesamorelin", size: "2 mg", price: 69.00, sku: "TESA-2MG", inStock: true },
      { id: "tesa-5", productId: "tesamorelin", size: "5 mg", price: 139.00, sku: "TESA-5MG", inStock: true },
    ],
    imageUrl: "/images/products/tesamorelin.webp",
    tags: ["ghrh", "growth-hormone", "performance", "visceral-fat"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "ghrp-2",
    name: "GHRP-2",
    slug: "ghrp-2",
    categoryId: "performance",
    alternateName: "Growth Hormone Releasing Peptide-2 (Pralmorelin)",
    shortDescription: "Potent growth hormone secretagogue for GH axis research.",
    description:
      "GHRP-2 (Growth Hormone Releasing Peptide-2), also known as Pralmorelin, is a synthetic hexapeptide that acts as a potent growth hormone secretagogue via the ghrelin/GHSR-1a receptor. It is one of the most studied GHRPs, known for producing robust GH release and stimulating appetite pathways.",
    researchSummary:
      "Research shows GHRP-2 stimulates GH release in a dose-dependent manner, with stronger GH output than GHRP-6 and Hexarelin in comparative studies. It also increases cortisol and prolactin to a moderate degree. Studies demonstrate synergistic effects when combined with GHRH analogues, producing GH peaks 3-5x greater than either alone.",
    variants: [
      { id: "ghrp2-5", productId: "ghrp-2", size: "5 mg", price: 49.00, sku: "GHRP2-5MG", inStock: true },
      { id: "ghrp2-10", productId: "ghrp-2", size: "10 mg", price: 79.00, sku: "GHRP2-10MG", inStock: true },
    ],
    imageUrl: "/images/products/ghrp-2.webp",
    tags: ["ghrp", "growth-hormone", "performance"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "hgh-frag",
    name: "HGH Fragment 176-191",
    slug: "hgh-fragment-176-191",
    categoryId: "performance",
    alternateName: "Growth Hormone Fragment",
    shortDescription: "C-terminal fragment of hGH for lipolysis-specific research.",
    description:
      "HGH Fragment 176-191 is the C-terminal fragment of human growth hormone, encompassing amino acids 176-191. Unlike AOD-9604, this is the unmodified natural fragment. Research focuses on its lipolytic activity independent of the growth-promoting and diabetogenic effects of full-length hGH.",
    researchSummary:
      "Studies indicate HGH Frag 176-191 stimulates lipolysis approximately 12.5 times more potently than full-length hGH in adipose tissue assays. It does not compete for the GH receptor and does not affect IGF-1 or insulin levels. Research suggests its mechanism involves beta-3 adrenergic receptor interaction and hormone-sensitive lipase activation.",
    variants: [
      { id: "hghf-5", productId: "hgh-frag", size: "5 mg", price: 59.00, sku: "HGHF-5MG", inStock: true },
    ],
    imageUrl: "/images/products/hgh-frag.webp",
    tags: ["hgh-fragment", "performance", "lipolysis"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },

  // ─── COGNITIVE & SPECIALTY ────────────────────────────────────
  {
    id: "melanotan-ii",
    name: "Melanotan II",
    slug: "melanotan-ii",
    categoryId: "cognitive",
    alternateName: "MT-II",
    shortDescription: "Non-selective melanocortin receptor agonist for pigmentation research.",
    description:
      "Melanotan II is a synthetic analogue of alpha-melanocyte-stimulating hormone (α-MSH) that acts as a non-selective melanocortin receptor agonist. It was originally developed for skin cancer prevention research by inducing melanogenesis (tanning). It also shows activity at MC3R and MC4R receptors involved in appetite and sexual function pathways.",
    researchSummary:
      "Research demonstrates MT-II activates MC1R (melanogenesis), MC3R (energy homeostasis), MC4R (appetite/sexual function), and MC5R (exocrine function). Studies show dose-dependent increases in eumelanin production in skin cell models. MC4R activation research has revealed effects on erectile function in animal models, leading to the development of PT-141.",
    variants: [
      { id: "mt2-10", productId: "melanotan-ii", size: "10 mg", price: 49.00, sku: "MT2-10MG", inStock: true },
    ],
    imageUrl: "/images/products/melanotan-ii.webp",
    tags: ["melanocortin", "pigmentation", "specialty"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "pt-141",
    name: "PT-141",
    slug: "pt-141",
    categoryId: "cognitive",
    alternateName: "Bremelanotide",
    shortDescription: "Selective MC4R agonist for sexual function pathway research.",
    description:
      "PT-141 (Bremelanotide) is a synthetic melanocortin peptide derived from Melanotan II, engineered for selectivity at the MC4R receptor. Unlike PDE5 inhibitors which act peripherally on vascular smooth muscle, PT-141 acts centrally via hypothalamic melanocortin pathways, making it unique for studying CNS-mediated sexual arousal mechanisms.",
    researchSummary:
      "Studies demonstrate PT-141 activates MC4R receptors in the hypothalamus, triggering downstream dopaminergic signaling in the medial preoptic area. Unlike Melanotan II, it has minimal MC1R activity (reduced pigmentation effects). Preclinical research shows efficacy in both male and female models of sexual dysfunction.",
    variants: [
      { id: "pt141-10", productId: "pt-141", size: "10 mg", price: 59.00, sku: "PT141-10MG", inStock: true },
    ],
    imageUrl: "/images/products/pt-141.webp",
    tags: ["melanocortin", "mc4r", "specialty"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "selank",
    name: "Selank",
    slug: "selank",
    categoryId: "cognitive",
    alternateName: "TP-7 (Thr-Lys-Pro-Arg-Pro-Gly-Pro)",
    shortDescription: "Heptapeptide nootropic for anxiolytic and cognitive research.",
    description:
      "Selank is a synthetic analogue of the immunomodulatory peptide tuftsin (threonyl-lysyl-prolyl-arginine) with an added Pro-Gly-Pro sequence for metabolic stability. Developed at the Institute of Molecular Genetics (Russian Academy of Sciences), it is classified as a nootropic anxiolytic peptide with both cognitive and immunomodulatory research applications.",
    researchSummary:
      "Research demonstrates Selank modulates BDNF and serotonin expression in the hippocampus and frontal cortex. Studies show anxiolytic effects comparable to benzodiazepines but without sedation, dependence, or withdrawal in animal models. It also upregulates IL-6 expression and modulates the balance of T-helper cell subtypes.",
    variants: [
      { id: "sel-5", productId: "selank", size: "5 mg", price: 49.00, sku: "SEL-5MG", inStock: true },
      { id: "sel-10", productId: "selank", size: "10 mg", price: 79.00, sku: "SEL-10MG", inStock: true },
    ],
    imageUrl: "/images/products/selank.webp",
    tags: ["nootropic", "cognitive", "anxiolytic"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "semax",
    name: "Semax",
    slug: "semax",
    categoryId: "cognitive",
    alternateName: "ACTH 4-10 Analogue (Met-Glu-His-Phe-Pro-Gly-Pro)",
    shortDescription: "ACTH fragment analogue for neuroprotection and cognitive research.",
    description:
      "Semax is a synthetic analogue of the ACTH(4-10) fragment with enhanced stability via a C-terminal Pro-Gly-Pro extension. Also developed at the Institute of Molecular Genetics, it is classified as a nootropic and neuroprotective peptide with extensive research on cognitive enhancement, neuroplasticity, and stroke recovery.",
    researchSummary:
      "Studies show Semax increases BDNF, NGF, and TrkB expression in the hippocampus and cortex. Research demonstrates neuroprotective effects in ischemia models via inhibition of nitric oxide synthase and lipid peroxidation. Cognitive studies in animal models show improved memory consolidation and attention without stimulant-like side effects.",
    variants: [
      { id: "sem-5", productId: "semax", size: "5 mg", price: 49.00, sku: "SEM-5MG", inStock: true },
      { id: "sem-10", productId: "semax", size: "10 mg", price: 79.00, sku: "SEM-10MG", inStock: true },
    ],
    imageUrl: "/images/products/semax.webp",
    tags: ["nootropic", "cognitive", "neuroprotective"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "epithalon",
    name: "Epithalon",
    slug: "epithalon",
    categoryId: "cognitive",
    alternateName: "Epitalon / Epithalone (Ala-Glu-Asp-Gly)",
    shortDescription: "Tetrapeptide for telomerase activation and longevity research.",
    description:
      "Epithalon (also spelled Epitalon or Epithalone) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) based on the natural Epithalamin peptide produced by the pineal gland. It is one of the few peptides researched specifically for its effects on telomerase activity, melatonin production, and cellular ageing markers.",
    researchSummary:
      "Research by Dr. Vladimir Khavinson demonstrates Epithalon activates telomerase in human somatic cells, enabling elongation of telomeres in fibroblast cultures. Studies in animal models show increased maximum lifespan, restored melatonin cycling, and improved neuroendocrine function in aged subjects. It also demonstrates antioxidant gene expression modulation.",
    variants: [
      { id: "epi-10", productId: "epithalon", size: "10 mg", price: 59.00, sku: "EPI-10MG", inStock: true },
    ],
    imageUrl: "/images/products/epithalon.webp",
    tags: ["telomerase", "longevity", "specialty", "pineal"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },

  // ─── BLENDS & STACKS ─────────────────────────────────────────
  {
    id: "glow-blend",
    name: "GLOW Blend",
    slug: "glow-blend",
    categoryId: "blends",
    alternateName: "BPC-157 + TB-500 + GHK-Cu Recovery Stack",
    shortDescription: "Triple-peptide recovery blend for comprehensive tissue repair research.",
    description:
      "The GLOW Blend combines three of the most researched recovery peptides — BPC-157 (10 mg), TB-500 (10 mg), and GHK-Cu (50 mg) — in a single vial. This blend targets multiple tissue repair pathways simultaneously: BPC-157 for cytoprotection, TB-500 for cell migration, and GHK-Cu for collagen and gene expression modulation.",
    researchSummary:
      "Each component targets complementary mechanisms: BPC-157 activates VEGF/EGF and the FAK-paxillin pathway, TB-500 promotes actin polymerisation and cell motility, and GHK-Cu modulates 4,000+ genes involved in tissue remodelling. The combination aims to provide comprehensive coverage of wound healing, anti-inflammatory, and regenerative research pathways.",
    variants: [
      { id: "glow-1", productId: "glow-blend", size: "70 mg total", price: 249.00, compareAtPrice: 327.00, sku: "GLOW-70MG", inStock: true },
    ],
    imageUrl: "/images/products/glow-blend.webp",
    tags: ["blend", "recovery", "bpc-157", "tb-500", "ghk-cu", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },

  // ─── SUPPLIES ─────────────────────────────────────────────────
  {
    id: "bac-water",
    name: "Bacteriostatic Water",
    slug: "bacteriostatic-water",
    categoryId: "supplies",
    shortDescription: "Sterile bacteriostatic water for peptide reconstitution (0.9% benzyl alcohol).",
    description:
      "USP-grade bacteriostatic water containing 0.9% benzyl alcohol as a preservative. Used for reconstituting lyophilised peptide powders for research use. Each vial is sterile-filtered and sealed under aseptic conditions. The benzyl alcohol preservative inhibits bacterial growth, allowing multi-use puncture of the vial over 28 days.",
    researchSummary:
      "Bacteriostatic water is the standard reconstitution solvent for lyophilised peptide research compounds. The 0.9% benzyl alcohol concentration is sufficient to prevent microbial growth while remaining compatible with most peptide structures. Reconstituted peptides should be stored at 2-8°C.",
    variants: [
      { id: "bac-10", productId: "bac-water", size: "10 mL", price: 12.00, sku: "BAC-10ML", inStock: true },
      { id: "bac-30", productId: "bac-water", size: "30 mL", price: 19.00, sku: "BAC-30ML", inStock: true },
    ],
    imageUrl: "/images/products/bac-water.webp",
    tags: ["supplies", "water", "reconstitution"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
];
