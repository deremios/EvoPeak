import type { Product } from "@/types/product";

export const products: Product[] = [
  // ─── WEIGHT LOSS ──────────────────────────────────────────────
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
      { id: "reta-10", productId: "retatrutide", size: "10 mg", price: 149.00, sku: "RETA-10MG", inStock: true },
      { id: "reta-15", productId: "retatrutide", size: "15 mg", price: 199.00, sku: "RETA-15MG", inStock: true },
      { id: "reta-20", productId: "retatrutide", size: "20 mg", price: 229.00, sku: "RETA-20MG", inStock: true },
      { id: "reta-30", productId: "retatrutide", size: "30 mg", price: 299.00, sku: "RETA-30MG", inStock: true },
    ],
    imageUrl: "/images/products/retatrutide.webp",
    tags: ["glp-1", "gip", "glucagon", "weight-loss", "metabolic", "retatrutide buy", "retatrutide australia"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },
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
      { id: "aod-5", productId: "aod-9604", size: "5 mg", price: 84.00, sku: "AOD-5MG", inStock: true },
    ],
    imageUrl: "/images/products/aod-9604.webp",
    tags: ["hgh-fragment", "weight-loss", "lipolysis"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },

  {
    id: "5-amino-1mq",
    name: "5-Amino-1MQ",
    slug: "5-amino-1mq",
    categoryId: "weight-loss",
    alternateName: "NNMT Inhibitor",
    shortDescription: "Small-molecule NNMT inhibitor for metabolic pathway research.",
    description:
      "5-Amino-1MQ (5-amino-1-methylquinolinium) is a small-molecule nicotinamide N-methyltransferase (NNMT) inhibitor studied for its effects on NAD+ metabolism, cellular energy regulation, and adipose tissue models in preclinical research.",
    researchSummary:
      "Preclinical research suggests 5-Amino-1MQ inhibits NNMT, affecting nicotinamide metabolism and NAD+ availability in studied cell types. Research has explored effects on adipocyte metabolism, energy balance parameters, and downstream NAD+-dependent signalling pathways.",
    variants: [
      { id: "1mq-10", productId: "5-amino-1mq", size: "10 mg", price: 89.00, sku: "1MQ-10MG", inStock: true },
      { id: "1mq-50", productId: "5-amino-1mq", size: "50 mg", price: 109.00, sku: "1MQ-50MG", inStock: true },
    ],
    imageUrl: "/images/products/5-amino-1mq.webp",
    tags: ["metabolic", "nnmt", "weight-loss"],
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
      { id: "bpc-10", productId: "bpc-157", size: "10 mg", price: 89.00, sku: "BPC-10MG", inStock: true },
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
      { id: "tb-10", productId: "tb-500", size: "10 mg", price: 109.00, sku: "TB-10MG", inStock: true },
    ],
    imageUrl: "/images/products/tb-500.webp",
    tags: ["recovery", "healing", "thymosin", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "bpc-tb-blend",
    name: "BPC-157 + TB-500 Blend",
    slug: "bpc-157-tb-500-blend",
    categoryId: "blends",
    alternateName: "Body Protection Compound + Thymosin Beta-4 Stack",
    shortDescription: "Dual-peptide recovery blend for complementary tissue repair research.",
    description:
      "This blend combines BPC-157 and TB-500 in a single vial for research protocols studying complementary tissue repair pathways — BPC-157 for cytoprotection and growth factor signaling, TB-500 for cell migration and actin dynamics.",
    researchSummary:
      "BPC-157 and TB-500 target distinct but complementary mechanisms in tissue repair models. Combination research allows investigators to study whether dual-pathway activation produces additive or synergistic effects compared to either compound alone.",
    variants: [
      { id: "bpctb-10", productId: "bpc-tb-blend", size: "10 mg", price: 89.00, sku: "BPCTB-10MG", inStock: true },
    ],
    imageUrl: "/images/products/bpc-tb-blend.webp",
    tags: ["blend", "recovery", "bpc-157", "tb-500"],
    featured: false,
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
      { id: "cjc-ipa-10", productId: "cjc-ipamorelin", size: "5 mg / 5 mg", price: 124.00, sku: "CJCIPA-10MG", inStock: true },
    ],
    imageUrl: "/images/products/cjc-ipamorelin.webp",
    tags: ["growth-hormone", "ghrh", "ghrp", "blend", "recovery"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "cjc-1295-no-dac",
    name: "CJC-1295 No DAC",
    slug: "cjc-1295-no-dac",
    categoryId: "performance",
    alternateName: "Modified GRF 1-29",
    shortDescription: "Short-acting GHRH analogue for pulsatile growth hormone research.",
    description:
      "CJC-1295 without DAC (Modified GRF 1-29) is a growth hormone-releasing hormone analogue used in research protocols studying pulsatile GH secretion. Its shorter half-life compared to the DAC variant makes it suitable for protocols requiring discrete GH pulse stimulation.",
    researchSummary:
      "Research demonstrates CJC-1295 (no DAC) stimulates GH release via GHRH receptor activation with a half-life of approximately 30 minutes, producing discrete GH pulses rather than sustained elevation. It is commonly studied in combination with selective GHRPs for synergistic GH output.",
    variants: [
      { id: "cjc-nodac-10", productId: "cjc-1295-no-dac", size: "10 mg", price: 99.00, sku: "CJCNODAC-10MG", inStock: true },
    ],
    imageUrl: "/images/products/cjc-1295-no-dac.webp",
    tags: ["growth-hormone", "ghrh", "performance"],
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
      { id: "cjc-dac-5", productId: "cjc-1295-dac", size: "5 mg", price: 119.00, sku: "CJCDAC-5MG", inStock: true },
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
      { id: "ghk-50", productId: "ghk-cu", size: "50 mg", price: 79.00, sku: "GHKCU-50MG", inStock: true },
    ],
    imageUrl: "/images/products/ghk-cu.webp",
    tags: ["copper-peptide", "skin", "recovery", "collagen"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "ipamorelin",
    name: "Ipamorelin",
    slug: "ipamorelin",
    categoryId: "performance",
    alternateName: "Growth Hormone Releasing Peptide",
    shortDescription: "Selective GHRP for clean growth hormone axis research.",
    description:
      "Ipamorelin is a selective growth hormone-releasing peptide (GHRP) that acts via the ghrelin/GHS-R1a receptor. It is widely preferred in research for its minimal off-target effects on cortisol, prolactin, and ACTH compared to earlier GHRPs.",
    researchSummary:
      "Studies show Ipamorelin stimulates GH release in a dose-dependent manner with high selectivity for the GH axis. Research demonstrates synergistic GH output when combined with GHRH analogues such as CJC-1295, with complementary effects on pulse frequency and amplitude.",
    variants: [
      { id: "ipa-10", productId: "ipamorelin", size: "10 mg", price: 84.00, sku: "IPA-10MG", inStock: true },
    ],
    imageUrl: "/images/products/ipamorelin.webp",
    tags: ["ghrp", "growth-hormone", "performance"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "mots-c",
    name: "MOTS-C",
    slug: "mots-c",
    categoryId: "performance",
    alternateName: "Mitochondrial-Derived Peptide",
    shortDescription: "Mitochondrial peptide for metabolic and exercise physiology research.",
    description:
      "MOTS-C is a mitochondrial-derived peptide encoded within the 12S rRNA gene of mitochondrial DNA. Research interest has grown around its role in metabolic regulation, glucose homeostasis, and exercise-mimetic effects in preclinical models.",
    researchSummary:
      "Preclinical research suggests MOTS-C activates AMPK pathways and modulates glucose and fatty acid metabolism. Studies in animal models demonstrate effects on insulin sensitivity, exercise capacity, and metabolic stress responses independent of traditional endocrine signaling.",
    variants: [
      { id: "motsc-10", productId: "mots-c", size: "10 mg", price: 89.00, sku: "MOTSC-10MG", inStock: true },
      { id: "motsc-40", productId: "mots-c", size: "40 mg", price: 149.00, sku: "MOTSC-40MG", inStock: true },
    ],
    imageUrl: "/images/products/mots-c.webp",
    tags: ["mitochondrial", "metabolic", "performance"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "kpv",
    name: "KPV",
    slug: "kpv",
    categoryId: "recovery",
    alternateName: "Lys-Pro-Val (α-MSH Fragment)",
    shortDescription: "Tripeptide fragment for anti-inflammatory and gut research.",
    description:
      "KPV is a tripeptide fragment derived from alpha-melanocyte-stimulating hormone (α-MSH) with research applications in anti-inflammatory and gastrointestinal cytoprotection models. It is studied independently of full-length melanocortin peptides.",
    researchSummary:
      "Research demonstrates KPV modulates NF-κB signaling and inflammatory cytokine expression in cell culture and animal models. Studies in gut inflammation models show cytoprotective effects without the pigmentation activity associated with full-length α-MSH analogues.",
    variants: [
      { id: "kpv-10", productId: "kpv", size: "10 mg", price: 79.00, sku: "KPV-10MG", inStock: true },
    ],
    imageUrl: "/images/products/kpv.webp",
    tags: ["recovery", "anti-inflammatory", "melanocortin"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "ss-31",
    name: "SS-31",
    slug: "ss-31",
    categoryId: "performance",
    alternateName: "Elamipretide",
    shortDescription: "Mitochondria-targeting peptide for cellular energy research.",
    description:
      "SS-31 (Elamipretide) is a mitochondria-targeting tetrapeptide that concentrates in the inner mitochondrial membrane. It is studied for its effects on mitochondrial function, oxidative stress, and cardioprotection in preclinical and clinical research contexts.",
    researchSummary:
      "Research shows SS-31 binds cardiolipin in the inner mitochondrial membrane, stabilising electron transport chain function and reducing reactive oxygen species production. Studies span cardiac ischemia-reperfusion models, skeletal muscle energetics, and age-related mitochondrial dysfunction.",
    variants: [
      { id: "ss31-10", productId: "ss-31", size: "10 mg", price: 84.00, sku: "SS31-10MG", inStock: true },
    ],
    imageUrl: "/images/products/ss-31.webp",
    tags: ["mitochondrial", "performance", "cardioprotection"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "kisspeptin",
    name: "Kisspeptin",
    slug: "kisspeptin",
    categoryId: "performance",
    alternateName: "Metastin",
    shortDescription: "Neuropeptide for reproductive endocrine axis research.",
    description:
      "Kisspeptin is a neuropeptide that acts as a potent activator of the hypothalamic-pituitary-gonadal axis via KISS1R receptor stimulation. It is widely studied for its role in GnRH pulse generation and reproductive endocrine signaling.",
    researchSummary:
      "Research demonstrates Kisspeptin neurons in the arcuate and anteroventral periventricular nuclei are essential for GnRH secretion and puberty onset. Studies show dose-dependent LH and FSH release in animal and human research models, making it a key tool for reproductive endocrine research.",
    variants: [
      { id: "kiss-10", productId: "kisspeptin", size: "10 mg", price: 89.00, sku: "KISS-10MG", inStock: true },
    ],
    imageUrl: "/images/products/kisspeptin.webp",
    tags: ["reproductive", "neuropeptide", "performance"],
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
      { id: "tesa-10", productId: "tesamorelin", size: "10 mg", price: 119.00, sku: "TESA-10MG", inStock: true },
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
    id: "melanotan-i",
    name: "Melanotan I",
    slug: "melanotan-i",
    categoryId: "cognitive",
    alternateName: "Afamelanotide",
    shortDescription: "Selective MC1R agonist for pigmentation research.",
    description:
      "Melanotan I (Afamelanotide) is a synthetic analogue of alpha-melanocyte-stimulating hormone with selective activity at the MC1R receptor. Unlike Melanotan II, it shows minimal activity at MC3R and MC4R, making it the preferred melanocortin for pigmentation-focused research.",
    researchSummary:
      "Research demonstrates Melanotan I activates MC1R with high selectivity, stimulating eumelanin production in melanocyte models. Clinical research has examined its photoprotective effects via increased melanin density, with a more favourable receptor selectivity profile than non-selective melanocortin agonists.",
    variants: [
      { id: "mt1-10", productId: "melanotan-i", size: "10 mg", price: 79.00, sku: "MT1-10MG", inStock: true },
    ],
    imageUrl: "/images/products/melanotan-i.webp",
    tags: ["melanocortin", "pigmentation", "specialty"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
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
      { id: "mt2-10", productId: "melanotan-ii", size: "10 mg", price: 64.00, sku: "MT2-10MG", inStock: true },
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
    id: "dsip",
    name: "DSIP",
    slug: "dsip",
    categoryId: "cognitive",
    alternateName: "Delta Sleep-Inducing Peptide",
    shortDescription: "Nonapeptide for sleep architecture and stress response research.",
    description:
      "DSIP (Delta Sleep-Inducing Peptide) is a naturally occurring nonapeptide first isolated from rabbit brain tissue. It is studied for its effects on sleep architecture, stress response modulation, and endocrine regulation in preclinical research models.",
    researchSummary:
      "Research suggests DSIP modulates slow-wave sleep patterns and normalises disturbed sleep architecture in animal models. Studies also examine effects on ACTH/cortisol rhythms, pain perception thresholds, and oxidative stress markers in various research contexts.",
    variants: [
      { id: "dsip-10", productId: "dsip", size: "10 mg", price: 89.00, sku: "DSIP-10MG", inStock: true },
      { id: "dsip-15", productId: "dsip", size: "15 mg", price: 99.00, sku: "DSIP-15MG", inStock: true },
    ],
    imageUrl: "/images/products/dsip.webp",
    tags: ["sleep", "nootropic", "specialty"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "oxytocin",
    name: "Oxytocin",
    slug: "oxytocin",
    categoryId: "cognitive",
    alternateName: "OT",
    shortDescription: "Neurohypophyseal peptide for social bonding and stress research.",
    description:
      "Oxytocin is a nine-amino-acid peptide hormone and neuropeptide produced in the hypothalamus. It is extensively studied for its roles in social bonding, trust behaviour, stress modulation, and reproductive physiology in research models.",
    researchSummary:
      "Research demonstrates Oxytocin acts via OXTR receptors in the brain and periphery, modulating social cognition, anxiety-related behaviour, and autonomic stress responses. Studies span rodent social behaviour models, maternal bonding research, and neuroendocrine stress axis investigation.",
    variants: [
      { id: "oxy-1", productId: "oxytocin", size: "10 mg", price: 69.00, sku: "OXY-10MG", inStock: true },
    ],
    imageUrl: "/images/products/oxytocin.webp",
    tags: ["neuropeptide", "social", "specialty"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "nad-plus",
    name: "NAD+",
    slug: "nad-plus",
    categoryId: "cognitive",
    alternateName: "Nicotinamide Adenine Dinucleotide",
    shortDescription: "Coenzyme for cellular energy and longevity pathway research.",
    description:
      "NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme in redox reactions and a substrate for sirtuins, PARPs, and CD38. Research interest centres on its role in cellular energy metabolism, DNA repair, and age-related NAD+ decline.",
    researchSummary:
      "Studies show NAD+ levels decline with age and metabolic stress, affecting sirtuin activity and mitochondrial function. Research examines NAD+ precursor supplementation and direct NAD+ administration in models of metabolic dysfunction, neurodegeneration, and cellular senescence.",
    variants: [
      { id: "nad-500", productId: "nad-plus", size: "500 mg", price: 119.00, sku: "NAD-500MG", inStock: true },
    ],
    imageUrl: "/images/products/nad-plus.webp",
    tags: ["longevity", "metabolic", "specialty"],
    featured: false,
    published: true,
    createdAt: "2026-04-01",
  },
  {
    id: "glutathione",
    name: "Glutathione",
    slug: "glutathione",
    categoryId: "cognitive",
    alternateName: "GSH (Reduced Glutathione)",
    shortDescription: "Tripeptide antioxidant for oxidative stress research.",
    description:
      "Glutathione (GSH) is the most abundant intracellular antioxidant tripeptide, composed of glutamate, cysteine, and glycine. It is studied for its central role in redox homeostasis, detoxification, and immune function in cellular and animal research models.",
    researchSummary:
      "Research demonstrates Glutathione neutralises reactive oxygen species directly and serves as a cofactor for glutathione peroxidase and glutathione S-transferase enzymes. Studies examine GSH depletion in oxidative stress models and the effects of exogenous GSH on cellular viability and inflammatory markers.",
    variants: [
      { id: "gsh-1500", productId: "glutathione", size: "1500 mg", price: 99.00, sku: "GSH-1500MG", inStock: true },
    ],
    imageUrl: "/images/products/glutathione.webp",
    tags: ["antioxidant", "specialty", "recovery"],
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
      { id: "sel-10", productId: "selank", size: "10 mg", price: 64.00, sku: "SEL-10MG", inStock: true },
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
      { id: "sem-10", productId: "semax", size: "10 mg", price: 69.00, sku: "SEM-10MG", inStock: true },
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
      { id: "epi-10", productId: "epithalon", size: "10 mg", price: 69.00, sku: "EPI-10MG", inStock: true },
      { id: "epi-50", productId: "epithalon", size: "50 mg", price: 99.00, sku: "EPI-50MG", inStock: true },
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
      { id: "glow-1", productId: "glow-blend", size: "70 mg total", price: 249.00, compareAtPrice: 277.00, sku: "GLOW-70MG", inStock: true },
    ],
    imageUrl: "/images/products/glow-blend.webp",
    tags: ["blend", "recovery", "bpc-157", "tb-500", "ghk-cu", "popular"],
    featured: true,
    published: true,
    createdAt: "2026-04-01",
  },

  {
    id: "klow",
    name: "KLOW",
    slug: "klow",
    categoryId: "blends",
    alternateName: "KPV + BPC-157 + TB-500 + GHK-Cu Recovery Stack",
    shortDescription: "Four-peptide recovery blend for comprehensive tissue repair research.",
    description:
      "The KLOW blend combines KPV, BPC-157, TB-500, and GHK-Cu in a single vial — four compounds targeting complementary recovery pathways including anti-inflammatory signaling, cytoprotection, cell migration, and collagen gene expression modulation.",
    researchSummary:
      "Each component addresses distinct mechanisms: KPV for anti-inflammatory NF-κB modulation, BPC-157 for growth factor and cytoprotective pathways, TB-500 for actin-mediated cell migration, and GHK-Cu for tissue remodelling gene expression. The combination provides broad coverage of regenerative research pathways.",
    variants: [
      { id: "klow-80", productId: "klow", size: "80 mg total", price: 169.00, sku: "KLOW-80MG", inStock: true },
    ],
    imageUrl: "/images/products/klow.webp",
    tags: ["blend", "recovery", "bpc-157", "tb-500", "ghk-cu", "kpv"],
    featured: false,
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
