const proofItems = [
  {
    title: "HPLC/MS verified",
    body: "Purity and identity checks support confident compound selection for controlled research.",
  },
  {
    title: "Endotoxin screened",
    body: "Quality review extends beyond purity so researchers can evaluate handling risk.",
  },
  {
    title: "Batch documentation",
    body: "COA-first product pages keep quality signals close to every purchase decision.",
  },
  {
    title: "Australia shipped",
    body: "Local fulfilment keeps delivery predictable for Australian research customers.",
  },
];

export function QualityProof() {
  return (
    <section className="border-t border-black/6 bg-[#fafafa] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
              Quality Standard
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight text-home-charcoal">
              Research compounds need evidence, not{" "}
              <span className="text-home-mint">guesswork.</span>
            </h2>
            <p className="mt-5 text-base leading-7 text-home-charcoal/65">
              Every shopping path leads back to the same core standard: research-use positioning,
              third-party quality signals, transparent documentation, and careful handling guidance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[2rem] border border-black/6 bg-white p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F3EC] text-[#1b3d32]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-normal text-home-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-home-charcoal/65">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
