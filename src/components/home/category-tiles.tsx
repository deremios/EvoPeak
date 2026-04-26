import Link from "next/link";

const categories = [
  {
    title: "Weight Loss",
    description: "GLP-1 agonists & metabolic research peptides",
    href: "/shop/weight-loss",
    products: "Semaglutide, Tirzepatide, Retatrutide & more",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "Recovery & Healing",
    description: "Tissue repair & regeneration research",
    href: "/shop/recovery",
    products: "BPC-157, TB-500, GHK-Cu & more",
    gradient: "from-brand-green to-emerald-500",
  },
  {
    title: "Performance",
    description: "Growth hormone & optimisation research",
    href: "/shop/performance",
    products: "CJC-1295, Ipamorelin, Tesamorelin & more",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    title: "Cognitive & Specialty",
    description: "Neuropeptide & specialty research",
    href: "/shop/cognitive",
    products: "Selank, Semax, Epithalon & more",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    title: "Blends & Stacks",
    description: "Pre-formulated research combinations",
    href: "/shop/blends",
    products: "GLOW Blend, Beginner Stack, Fat-Loss Stack",
    gradient: "from-brand-orange to-amber-500",
  },
  {
    title: "Supplies",
    description: "Research supplies & accessories",
    href: "/shop/supplies",
    products: "BAC Water, Syringes & more",
    gradient: "from-gray-500 to-slate-500",
  },
];

export function CategoryTiles() {
  return (
    <section className="bg-bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Shop by Research Goal
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Curated categories to find exactly what your research needs. Every
            product is 3rd-party tested with downloadable COAs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="group relative rounded-2xl bg-white border border-border-default p-6 hover:shadow-lg hover:border-brand-green/30 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.gradient}`}
              />

              <h3 className="text-xl font-bold text-text-primary group-hover:text-brand-green transition-colors mt-2">
                {cat.title}
              </h3>
              <p className="text-sm text-text-secondary mt-2">
                {cat.description}
              </p>
              <p className="text-xs text-text-muted mt-3">{cat.products}</p>

              <div className="mt-4 inline-flex items-center text-sm font-medium text-brand-green opacity-0 group-hover:opacity-100 transition-opacity">
                Browse
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
