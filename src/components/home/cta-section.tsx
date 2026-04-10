import Link from "next/link";
import { region } from "@/config";

export function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-brand-green to-brand-green-dark py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Ready to Start Your Research?
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
          Join hundreds of {region.country}n researchers who trust us for
          purity, speed, and transparency. New user? Check out our free starter
          guide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-brand-green hover:bg-white/90 transition-colors shadow-lg"
          >
            Shop All Peptides
          </Link>
          <Link
            href="/guide"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/20 transition-colors border border-white/20"
          >
            Download Starter Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
