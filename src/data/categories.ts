import type { ProductCategory } from "@/types/product";

export const categories: ProductCategory[] = [
  {
    id: "weight-loss",
    name: "Weight Loss",
    slug: "weight-loss",
    description: "GLP-1 agonists & metabolic research peptides for weight management research",
    sortOrder: 1,
  },
  {
    id: "recovery",
    name: "Recovery & Healing",
    slug: "recovery",
    description: "Tissue repair, regeneration, and body protection research peptides",
    sortOrder: 2,
  },
  {
    id: "performance",
    name: "Performance",
    slug: "performance",
    description: "Growth hormone secretagogues & optimisation research peptides",
    sortOrder: 3,
  },
  {
    id: "cognitive",
    name: "Cognitive & Specialty",
    slug: "cognitive",
    description: "Neuropeptides and specialty research compounds",
    sortOrder: 4,
  },
  {
    id: "blends",
    name: "Blends & Stacks",
    slug: "blends",
    description: "Pre-formulated research peptide combinations",
    sortOrder: 5,
  },
  {
    id: "supplies",
    name: "Supplies",
    slug: "supplies",
    description: "Research supplies, bacteriostatic water, and accessories",
    sortOrder: 6,
  },
];
