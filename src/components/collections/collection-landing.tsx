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
    <div className="bg-[#f5f1e8]">
      <section className={`relative min-h-[560px] overflow-hidden bg-gradient-to-br ${collection.color} text-white`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.10),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,200,120,0.14),transparent_28%)]" />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "url('/images/hero-home.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col justify-end px-4 pb-14 sm:px-6 sm:pb-20 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-white transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-white/90">{collection.name}</span>
          </nav>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
                {collection.eyebrow}
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-7xl">
                {collection.name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                {collection.description} Every product is supplied strictly for
                laboratory research use only.
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {collection.audiences.map((audience) => (
                  <Link
                    key={audience}
                    href={`/${audience}`}
                    className="rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-white backdrop-blur hover:bg-white/20"
                  >
                    {audience === "men" ? "Men's Research" : "Women's Research"}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur sm:p-8">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-brand-orange">
                Pathway highlights
              </p>
              <ul className="mt-5 space-y-4">
                {collection.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-white/80">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside>
              <div className="sticky top-24 rounded-[2rem] border border-border-default bg-white p-6 sm:p-7">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">
                  Research context
                </p>
                <h2 className="mt-3 text-xl font-black text-brand-navy">
                  Compare by mechanism
                </h2>
                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  This collection is a browsing aid. Review each compound page,
                  variant, quality documentation, and handling notes before purchase.
                </p>
                <Link href="/blog" className="mt-5 inline-flex text-sm font-bold text-brand-green hover:underline">
                  Open Research Hub
                </Link>
                <div className="mt-6 border-t border-border-default pt-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-brand-green">
                    Audience
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {collection.audiences.map((audience) => (
                      <Link
                        key={audience}
                        href={`/${audience}`}
                        className="rounded-full border border-brand-navy/20 px-3 py-1 text-xs font-bold text-brand-navy hover:bg-brand-green/10"
                      >
                        {audience === "men" ? "Men" : "Women"}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            <div>
              <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-green">
                    Available compounds
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-brand-navy sm:text-5xl">
                    {products.length} products in this pathway
                  </h2>
                </div>
                <Link href="/shop" className="text-sm font-bold text-brand-green hover:underline">
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
        <section className="bg-brand-navy py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-orange">
                Curated stacks
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
                Bundles connected to this pathway.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {bundles.map((bundle) => (
                <Link
                  key={bundle.id}
                  href={`/bundles/${bundle.slug}`}
                  className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur transition-all hover:-translate-y-1 hover:bg-white/15"
                >
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-orange">
                    {bundle.discountPercent}% bundle saving
                  </p>
                  <h3 className="mt-5 text-2xl font-black">{bundle.name}</h3>
                  <p className="mt-2 text-sm font-bold text-white/70">{bundle.tagline}</p>
                  <p className="mt-3 text-sm leading-6 text-white/60">{bundle.description}</p>
                  <p className="mt-6 text-2xl font-black">
                    From {formatPrice(getBundlePrice(bundle))}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <QualityProof />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-black tracking-[-0.04em] text-brand-navy sm:text-6xl">
            Any Questions? We&apos;ve got answers.
          </h2>
          <div className="mt-10 divide-y divide-border-default border-y border-border-default">
            {collection.faqs.map((item) => (
              <article key={item.q} className="py-7">
                <h3 className="text-xl font-black text-brand-navy">{item.q}</h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-text-secondary">
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
