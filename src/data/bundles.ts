export interface Bundle {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  productIds: string[];
  variantIds: string[];
  discountPercent: number;
  imageColor: string;
}

export const bundles: Bundle[] = [
  {
    id: "beginner-stack",
    name: "Beginner Research Stack",
    slug: "beginner-stack",
    tagline: "The perfect starting point",
    description:
      "Ideal for researchers new to peptide science. This stack pairs BPC-157 (5 mg) with TB-500 (5 mg) — two of the most published recovery-focused compounds — plus a vial of Bacteriostatic Water to get started immediately.",
    productIds: ["bpc-157", "tb-500", "bac-water"],
    variantIds: ["bpc-5", "tb-5", "bac-30"],
    discountPercent: 15,
    imageColor: "from-brand-green/20 to-brand-green/5",
  },
  {
    id: "fat-loss-stack",
    name: "Fat Loss Research Stack",
    slug: "fat-loss-stack",
    tagline: "Comprehensive metabolic research",
    description:
      "Our most popular bundle for metabolic research. Combines Semaglutide (5 mg) with AOD-9604 (5 mg) for multi-pathway metabolic investigation, plus Bacteriostatic Water.",
    productIds: ["semaglutide", "aod-9604", "bac-water"],
    variantIds: ["sema-5", "aod-5", "bac-30"],
    discountPercent: 15,
    imageColor: "from-brand-orange/20 to-brand-orange/5",
  },
  {
    id: "recovery-stack",
    name: "Recovery Research Stack",
    slug: "recovery-stack",
    tagline: "Maximum regeneration potential",
    description:
      "The advanced recovery stack featuring BPC-157 (10 mg), TB-500 (10 mg), and GHK-Cu (50 mg) — three compounds with complementary regenerative mechanisms. Includes Bacteriostatic Water.",
    productIds: ["bpc-157", "tb-500", "ghk-cu", "bac-water"],
    variantIds: ["bpc-10", "tb-10", "ghk-50", "bac-30"],
    discountPercent: 15,
    imageColor: "from-blue-100 to-blue-50",
  },
];
