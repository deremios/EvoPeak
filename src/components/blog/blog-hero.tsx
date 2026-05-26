import { region } from "@/config";

const categories = ["Recovery", "Weight Loss", "Performance", "Cognitive", "Research Guide"];

export function BlogHero({ articleCount }: { articleCount: number }) {
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
        <p className="text-sm text-white/80">
          {articleCount} research articles · Australia
        </p>
        <h1 className="mt-6 text-[clamp(2.5rem,7vw,4.5rem)] font-normal leading-[1.05] tracking-tight">
          Research
          <br />
          <span className="text-home-mint">Insights</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
          In-depth guides on peptide mechanisms, quality verification, protocols, and compound
          research — written for serious researchers.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
