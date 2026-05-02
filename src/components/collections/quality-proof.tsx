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
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-green">
              Quality Standard
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
              Research compounds need evidence, not guesswork.
            </h2>
            <p className="mt-5 text-base leading-7 text-text-secondary">
              Every shopping path leads back to the same core standard:
              research-use positioning, third-party quality signals, transparent
              documentation, and careful handling guidance.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-border-default bg-bg-primary p-6"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.8"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
