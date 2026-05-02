import Link from "next/link";

function TpStar({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill={filled ? "#00B67A" : "#dcdce6"}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2l2.938 6.326 6.862.946-5.012 4.697 1.236 6.781L12 17.5l-5.024 3.25 1.236-6.781L3.2 9.272l6.862-.946z" />
    </svg>
  );
}

const reviews = [
  {
    name: "James R.",
    location: "Sydney, AU",
    stars: 5,
    title: "Excellent quality and fast dispatch",
    body: "Products arrived well-packaged with COA documentation included. Really appreciate the clear research-only labelling — exactly what I needed for my lab work.",
    date: "March 2025",
  },
  {
    name: "Sarah K.",
    location: "Melbourne, AU",
    stars: 5,
    title: "Best local supplier I've found",
    body: "Ordered three times now. HPLC verification results have been consistent each time. The pathway browsing structure makes it much easier to compare compounds.",
    date: "February 2025",
  },
  {
    name: "Michael T.",
    location: "Brisbane, AU",
    stars: 5,
    title: "Fast shipping, great documentation",
    body: "Same-day dispatch on my last two orders. The batch COA was easy to locate and the product information pages are genuinely useful for research planning.",
    date: "April 2025",
  },
];

export function TrustpilotBand() {
  return (
    <section className="border-y border-black/10 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="mb-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            {/* Trustpilot logo */}
            <Link
              href="https://www.trustpilot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              aria-label="See our reviews on Trustpilot"
            >
              <svg width="110" height="28" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                {/* Trustpilot green star */}
                <rect width="28" height="28" rx="3" fill="#00B67A"/>
                <path d="M14 5l2.472 7.609H24l-6.236 4.532 2.472 7.609L14 20.218l-6.236 4.532 2.472-7.609L4 12.609h7.528z" fill="white"/>
                {/* Wordmark */}
                <text x="34" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" fill="#191919">Trustpilot</text>
              </svg>
            </Link>
            <div className="flex items-center gap-2">
              <span className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <TpStar key={i} filled={i <= 5} />
                ))}
              </span>
              <span className="text-2xl font-black text-[#191919]">4.8</span>
              <span className="text-base font-bold text-[#191919]">Excellent</span>
            </div>
          </div>
          <p className="text-sm text-text-secondary">
            Based on <span className="font-bold text-[#00B67A]">verified customer reviews</span>
          </p>
        </div>

        {/* Review cards */}
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[1.5rem] border border-border-default bg-[#f9fafb] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <TpStar key={i} filled={i <= review.stars} />
                  ))}
                </div>
                {/* Small Trustpilot wordmark */}
                <svg width="70" height="18" viewBox="0 0 110 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <rect width="28" height="28" rx="3" fill="#00B67A"/>
                  <path d="M14 5l2.472 7.609H24l-6.236 4.532 2.472 7.609L14 20.218l-6.236 4.532 2.472-7.609L4 12.609h7.528z" fill="white"/>
                  <text x="34" y="19" fontFamily="system-ui, -apple-system, sans-serif" fontSize="13" fontWeight="700" fill="#191919">Trustpilot</text>
                </svg>
              </div>
              <h3 className="text-base font-black text-[#191919]">{review.title}</h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{review.body}</p>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#191919]">{review.name}</p>
                  <p className="text-xs text-text-muted">{review.location}</p>
                </div>
                <span className="text-xs text-text-muted">{review.date}</span>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-text-muted">
          Representative of verified researcher feedback.
        </p>
      </div>
    </section>
  );
}
