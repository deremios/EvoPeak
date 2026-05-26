import { region } from "@/config";

const qualityBadges = [
  "HPLC/MS verified",
  "COA documented",
  "PayID checkout",
  "Australia shipped",
  "Research use only",
];

export function ShopHero({ productCount }: { productCount: number }) {
  return (
    <section className="relative -mt-16 overflow-hidden bg-home-hero pb-16 pt-28 text-white sm:pb-20 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      >
        <span className="select-none text-[clamp(5rem,16vw,12rem)] font-semibold leading-none tracking-tight text-white/[0.06]">
          {region.brandName}
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/70">
          All Research Compounds
        </p>
        <h1 className="mt-6 text-[clamp(2.25rem,6vw,4rem)] font-normal leading-[1.05] tracking-tight">
          Buy research peptides in{" "}
          <span className="text-home-mint">Australia</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Use the filters below to compare {region.brandName}&apos;s existing catalog by research
          use case, product family, price, and popularity. For laboratory research use only.
        </p>
        <p className="mt-4 text-sm text-white/60">{productCount} products available</p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {qualityBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-white/85 backdrop-blur-sm"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
