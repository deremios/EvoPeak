import { region } from "@/config";

export function BundlesHero() {
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
        <p className="text-sm text-white/80">Curated stacks · 15% off · Australia</p>
        <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-normal leading-[1.05] tracking-tight">
          Research Stacks
          <br />
          <span className="text-home-mint">&amp; Bundles</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          Curated peptide combinations for specific research goals. Save 15% compared to
          purchasing individually.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {["Beginner", "Fat Loss", "Recovery"].map((label) => (
            <span
              key={label}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
