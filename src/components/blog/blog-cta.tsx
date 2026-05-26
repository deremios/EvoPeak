import Link from "next/link";

export function BlogCta() {
  return (
    <section className="border-t border-black/6 bg-[#fafafa] py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="text-center sm:text-left">
          <p className="text-lg font-medium text-home-charcoal">Ready to explore the compounds?</p>
          <p className="mt-1 text-sm text-home-charcoal/65">
            Browse our catalogue of HPLC/MS-verified research peptides.
          </p>
        </div>
        <Link
          href="/shop"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-home-cta px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          Browse Peptides →
        </Link>
      </div>
    </section>
  );
}
