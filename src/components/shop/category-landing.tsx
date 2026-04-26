import Link from "next/link";
import { region } from "@/config";
import type { Product, ProductCategory } from "@/types/product";
import { ProductCard } from "@/components/shop/product-card";

const categoryCopy: Record<string, { intro: string; sections: Array<{ title: string; body: string }> }> = {
  "weight-loss": {
    intro:
      "Explore GLP-1, GIP, glucagon, amylin, and growth-hormone-fragment research compounds for metabolic pathway investigation. Every product is supplied strictly for laboratory research use and backed by batch-level quality documentation.",
    sections: [
      {
        title: "What This Category Covers",
        body:
          "This collection focuses on incretin and metabolic research pathways, including GLP-1 receptor agonism, dual GIP/GLP-1 receptor activation, triple agonism, amylin signaling, and lipolysis-focused peptide fragments.",
      },
      {
        title: "Quality Signals to Check",
        body:
          "Prioritize HPLC purity analysis, mass spectrometry identity confirmation, endotoxin screening, batch traceability, and clear storage guidance before selecting any metabolic research compound.",
      },
      {
        title: "Helpful Research Guides",
        body:
          "Start with our GLP-1 comparison guide, peptide storage guide, and COA explainer before comparing compounds in this category.",
      },
    ],
  },
  recovery: {
    intro:
      "Browse recovery and tissue-repair research peptides including BPC-157, TB-500, GHK-Cu, and related blends. These compounds are commonly studied in tissue remodeling, angiogenesis, collagen, and cellular migration models.",
    sections: [
      {
        title: "What This Category Covers",
        body:
          "Recovery research peptides span cytoprotective, actin-regulating, collagen-supporting, and growth-hormone-axis pathways. The strongest content opportunities are mechanism-led comparisons and quality-control education.",
      },
      {
        title: "Quality Signals to Check",
        body:
          "For recovery-focused peptides, batch identity matters as much as purity. Look for HPLC/MS verification, endotoxin screening, clear lyophilized storage instructions, and COA availability.",
      },
      {
        title: "Helpful Research Guides",
        body:
          "Read the BPC-157 overview, TB-500 guide, GHK-Cu research article, and reconstitution guide to understand handling and research context.",
      },
    ],
  },
  performance: {
    intro:
      "Review growth hormone secretagogues, GHRH analogues, and related optimization research peptides. This category is built for controlled laboratory investigation of GH-axis signaling and metabolic endpoints.",
    sections: [
      {
        title: "What This Category Covers",
        body:
          "Performance research compounds include GHRH analogues, GHRPs, tesamorelin, and HGH fragments. The key distinction is whether a compound supports pulsatile, sustained, or pathway-specific research models.",
      },
      {
        title: "Quality Signals to Check",
        body:
          "Because many compounds in this category are sequence-sensitive peptides, confirm identity verification, purity, and storage conditions before use in laboratory protocols.",
      },
      {
        title: "Helpful Research Guides",
        body:
          "Use the CJC-1295 and Ipamorelin guide, future DAC vs no-DAC comparison, and peptide storage article as your starting points.",
      },
    ],
  },
  cognitive: {
    intro:
      "Explore neuropeptide and specialty research compounds including Selank, Semax, Epithalon, Melanotan II, and PT-141. Content here should stay especially careful, research-only, and mechanism-led.",
    sections: [
      {
        title: "What This Category Covers",
        body:
          "This category covers nootropic, neuroprotective, melanocortin, longevity, and specialty peptide research areas. The best articles explain mechanisms without drifting into therapeutic claims.",
      },
      {
        title: "Quality Signals to Check",
        body:
          "Look for batch-specific COAs, mass confirmation, and proper handling instructions. Specialty peptides often require more careful interpretation of published research.",
      },
      {
        title: "Helpful Research Guides",
        body:
          "Start with Selank vs Semax, GHK-Cu, Epithalon terminology, and general COA reading content before comparing specialty compounds.",
      },
    ],
  },
  blends: {
    intro:
      "Browse pre-formulated research peptide combinations designed around complementary mechanisms. Blends require extra attention to total content, individual compound identity, and batch documentation.",
    sections: [
      {
        title: "What This Category Covers",
        body:
          "Blends combine multiple research compounds in one vial or bundle. The strongest use cases are mechanism coverage, simpler handling, and curated protocols for researchers who already understand each component.",
      },
      {
        title: "Quality Signals to Check",
        body:
          "For blends, verify each compound where possible, confirm total peptide content, check lot-level documentation, and review storage/reconstitution compatibility.",
      },
      {
        title: "Helpful Research Guides",
        body:
          "Read the BPC-157 vs TB-500 comparison, GHK-Cu overview, COA guide, and reconstitution article before choosing a blend.",
      },
    ],
  },
  supplies: {
    intro:
      "Research supplies support peptide handling, reconstitution, and storage. This category should function as the practical companion to the Research hub.",
    sections: [
      {
        title: "What This Category Covers",
        body:
          "Supplies include bacteriostatic water and related accessories for laboratory handling. The SEO opportunity is practical education around storage, concentration, and reconstitution.",
      },
      {
        title: "Quality Signals to Check",
        body:
          "Confirm sterility, labeling, compatibility with lyophilized peptides, and storage instructions. Supplies should be treated as part of the quality system, not an afterthought.",
      },
      {
        title: "Helpful Research Guides",
        body:
          "Use the reconstitution guide, storage guide, and future concentration calculator as the main internal links from this category.",
      },
    ],
  },
};

export function CategoryLanding({
  category,
  products,
}: {
  category: ProductCategory;
  products: Product[];
}) {
  const copy = categoryCopy[category.slug];

  return (
    <div className="bg-bg-primary min-h-screen">
      <section className="bg-white border-b border-border-default">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-text-muted mb-6">
            <Link href="/shop" className="hover:text-brand-green transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">{category.name}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-green mb-3">
              {region.country} Research Peptides
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-text-primary leading-tight">
              {category.name} Research Peptides
            </h1>
            <p className="mt-5 text-lg text-text-secondary leading-relaxed">
              {copy?.intro || category.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium">
              <span className="rounded-full bg-brand-green/10 px-3 py-1 text-brand-green">
                HPLC/MS verified
              </span>
              <span className="rounded-full bg-brand-green/10 px-3 py-1 text-brand-green">
                COA documented
              </span>
              <span className="rounded-full bg-brand-green/10 px-3 py-1 text-brand-green">
                Research use only
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-24 rounded-2xl bg-white border border-border-default p-5">
              <h2 className="text-sm font-bold text-text-primary mb-3">
                Category Summary
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed">
                {category.description}. Browse {products.length} available research products, then use the linked guides to review storage, COAs, and handling.
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex text-sm font-semibold text-brand-green hover:underline"
              >
                Read Research Guides
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-3 space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                Available {category.name} Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {copy?.sections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-2xl bg-white border border-border-default p-6"
                >
                  <h2 className="text-lg font-bold text-text-primary">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>

            <div className="rounded-2xl bg-brand-navy text-white p-6 sm:p-8">
              <h2 className="text-2xl font-bold">Research-Only Quality Standard</h2>
              <p className="mt-3 text-white/75 leading-relaxed">
                All {category.name.toLowerCase()} products are sold strictly for laboratory research use. Review batch documentation, storage guidance, and our Research hub before selecting compounds for controlled research protocols.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/blog/understanding-certificates-of-analysis"
                  className="inline-flex justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-navy hover:bg-white/90"
                >
                  Learn COA Verification
                </Link>
                <Link
                  href="/blog/peptide-storage-guide"
                  className="inline-flex justify-center rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Read Storage Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
