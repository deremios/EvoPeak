import { HeroSection } from "@/components/home/hero-section";
import { CategoryTiles } from "@/components/home/category-tiles";
import { TrustBadges } from "@/components/home/trust-badges";
import { BundlesSection } from "@/components/home/bundles-section";
import { WhySection } from "@/components/home/why-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <CategoryTiles />
      <BundlesSection />
      <WhySection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
