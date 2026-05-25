import Link from "next/link";
import { region } from "@/config";
import { homeReviews } from "../home-data";
import { GuaranteeIcon, MedviButton } from "./primitives";

export function HomeTestimonials() {
  return (
    <section className="bg-[#fafafa] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
            Those who chose {region.brandName}
          </p>
          <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal text-home-charcoal">
            There&apos;s a reason people keep <span className="text-home-mint">coming back.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-home-charcoal/65">
            Join thousands of customers across Australia who trust {region.brandName} for quality
            peptides and reliable dispatch.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {homeReviews.map((review) => (
            <article
              key={review.name}
              className="min-w-[280px] flex-1 snap-start rounded-2xl border border-black/6 bg-white p-6 shadow-sm sm:min-w-[300px]"
            >
              <div className="mb-3 flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="h-4 w-4 text-[#00B67A]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.938 6.326 6.862.946-5.012 4.697 1.236 6.781L12 17.5l-5.024 3.25 1.236-6.781L3.2 9.272l6.862-.946z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-6 text-home-charcoal/75">&ldquo;{review.body}&rdquo;</p>
              <div className="mt-5">
                <p className="text-sm font-medium text-home-charcoal">{review.name}</p>
                <p className="text-xs text-home-charcoal/50">
                  {review.location} · {review.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection() {
  const points = [
    {
      title: "HPLC/MS verified",
      body: "Identity and purity analysis on every batch before dispatch.",
    },
    {
      title: "COA documented",
      body: "Batch-specific certificates of analysis on every product page.",
    },
    {
      title: "Endotoxin screened",
      body: "Quality review extends beyond purity to biological safety indicators.",
    },
    {
      title: "AU same-day dispatch",
      body: "Local Queensland fulfilment with predictable, fast delivery.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="bg-home-blob flex items-center justify-center rounded-[2rem] p-6 sm:p-10">
            <img
              src="/images/home/evopeak-branded-hero.png"
              alt="EvoPeak branded peptide packaging"
              className="max-h-[480px] w-full object-contain drop-shadow-lg"
            />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
              Quality you can verify
            </p>
            <h2 className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight text-home-charcoal">
              Every batch tested before it <span className="text-home-mint">ships.</span>
            </h2>
            <p className="mt-4 text-base leading-7 text-home-charcoal/70">
              Third-party testing, batch COAs, and transparent quality documentation — because what
              you put in your body matters.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-black/6 bg-[#fafafa] p-5">
                  <p className="text-sm font-medium text-home-charcoal">{p.title}</p>
                  <p className="mt-2 text-sm leading-6 text-home-charcoal/65">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function GuaranteeStrip({
  items,
}: {
  items: { icon: string; label: string }[];
}) {
  return (
    <section className="border-t border-black/6 bg-[#fafafa] py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-[0.2em] text-home-charcoal/60">
          {region.brandName} guarantee
        </p>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 text-center">
              <GuaranteeIcon type={item.icon} />
              <span className="text-sm text-home-charcoal/75">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="bg-home-hero py-20 text-center text-white sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-tight">
          Ready to get <span className="text-home-mint">started?</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80">
          Browse by goal or shop the full catalog — third-party tested, COA documented, shipped
          across Australia.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/shop"
            className="inline-flex justify-center rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#1b3d32]"
          >
            Shop all products
          </Link>
          <Link
            href="/bundles"
            className="inline-flex justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-medium text-white"
          >
            View stacks
          </Link>
        </div>
      </div>
    </section>
  );
}

export function HomeFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-normal text-home-charcoal sm:text-3xl">
          Common questions
        </h2>
        <div className="mt-10 divide-y divide-black/8">
          {items.map((faq) => (
            <article key={faq.q} className="py-8">
              <h3 className="text-lg font-medium text-home-charcoal">{faq.q}</h3>
              <p className="mt-3 text-base leading-7 text-home-charcoal/70">{faq.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
