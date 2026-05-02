import Link from "next/link";
import { ProductCard } from "@/components/shop/product-card";
import { QualityProof } from "@/components/collections/quality-proof";
import { formatPrice } from "@/config";
import type { Bundle } from "@/data/bundles";
import type { ResearchCollection } from "@/data/collections";
import { getAllProducts } from "@/lib/products";
import type { Product } from "@/types/product";

function getBundlePrice(bundle: Bundle) {
  const products = getAllProducts();
  const variants = bundle.variantIds
    .map((variantId) =>
      products
        .flatMap((product) => product.variants)
        .find((variant) => variant.id === variantId)
    )
    .filter(Boolean);

  const subtotal = variants.reduce((sum, variant) => sum + (variant?.price ?? 0), 0);
  return subtotal * (1 - bundle.discountPercent / 100);
}

export function CollectionLanding({
  collection,
  products,
  bundles,
}: {
  collection: ResearchCollection;
  products: Product[];
  bundles: Bundle[];
}) {
  return (
    <div className="bg-bg-primary">
      <section className={`relative overflow-hidden bg-gradient-to-br ${collection.color} text-white`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,200,120,0.18),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-white">
              Shop
            </Link>
            <span>/</span>
            <span className="font-medium text-white">{collection.name}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-orange">
                {collection.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-6xl">
                {collection.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                {collection.description} Every product is supplied strictly for
                laboratory research use only.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
              <p className="text-sm font-semibold text-white">
                Pathway highlights
              </p>
              <ul className="mt-4 space-y-3">
                {collection.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-white/75">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-orange" />
                    {highlight}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
                {collection.audiences.map((audience) => (
                  <Link
                    key={audience}
                    href={`/${audience}`}
                    className="rounded-full bg-white/10 px-3 py-1 text-white hover:bg-white/15"
                  >
                    {audience === "men" ? "Men's Research" : "Women's Research"}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <aside>
              <div className="sticky top-24 rounded-3xl border border-border-default bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                  Research context
                </p>
                <h2 className="mt-3 text-xl font-bold text-text-primary">
                  Compare by mechanism
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  This collection is a browsing aid. Review each compound page,
                  variant, quality documentation, and handling notes before
                  purchase.
                </p>
                <Link
                  href="/blog"
                  className="mt-5 inline-flex text-sm font-bold text-brand-green hover:underline"
                >
                  Open Research Hub
                </Link>
              </div>
            </aside>
            <div>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                    Available compounds
                  </p>
                  <h2 className="mt-3 text-3xl font-bold text-text-primary">
                    {products.length} products in this pathway
                  </h2>
                </div>
                <Link
                  href="/shop"
                  className="text-sm font-bold text-brand-green hover:underline"
                >
                  View all products
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {bundles.length > 0 && (
        <section className="bg-white py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
                Curated stacks
              </p>
              <h2 className="mt-4 text-3xl font-bold text-text-primary sm:text-5xl">
                Bundles connected to this pathway.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {bundles.map((bundle) => (
                <Link
                  key={bundle.id}
                  href={`/bundles/${bundle.slug}`}
                  className="rounded-3xl border border-border-default bg-bg-primary p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-green">
                    {bundle.discountPercent}% bundle saving
                  </p>
                  <h3 className="mt-4 text-2xl font-bold text-text-primary">
                    {bundle.name}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-brand-orange">
                    {bundle.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-text-secondary">
                    {bundle.description}
                  </p>
                  <p className="mt-5 text-lg font-bold text-text-primary">
                    From {formatPrice(getBundlePrice(bundle))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <QualityProof />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
            Questions
          </p>
          <h2 className="mt-4 text-center text-3xl font-bold text-text-primary sm:text-5xl">
            Research pathway FAQ
          </h2>
          <div className="mt-10 divide-y divide-border-default rounded-3xl border border-border-default bg-white">
            {collection.faqs.map((item) => (
              <article key={item.q} className="p-6">
                <h3 className="text-lg font-bold text-text-primary">{item.q}</h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.a}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
