const testimonials = [
  {
    quote:
      "Finally a supplier that publishes actual COAs, not just claims. The BPC-157 results were consistent across batches. Will reorder.",
    author: "J.M.",
    role: "Independent Researcher, NSW",
    rating: 5,
  },
  {
    quote:
      "Ordered Monday afternoon, arrived Wednesday morning in Melbourne. Cold-chain packaging was intact. Exactly what I needed for my lab work.",
    author: "D.K.",
    role: "Research Associate, VIC",
    rating: 5,
  },
  {
    quote:
      "The starter guide actually helped me understand reconstitution and storage. First time ordering research peptides and the support team answered everything.",
    author: "S.R.",
    role: "New Researcher, QLD",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-bg-primary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Trusted by Researchers
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            What our research community has to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="bg-white rounded-2xl border border-border-default p-6 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-brand-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-text-secondary leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div>
                <p className="text-sm font-semibold text-text-primary">
                  {t.author}
                </p>
                <p className="text-xs text-text-muted">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
