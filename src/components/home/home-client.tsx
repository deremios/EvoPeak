"use client";

import { goalSections, guaranteeItems, homeFaqs, trustItems } from "./home-data";
import { MedviHero } from "./medvi/hero";
import { GoalSection } from "./medvi/goal-section";
import { TrustIconStrip } from "./medvi/primitives";
import {
  FinalCta,
  GuaranteeStrip,
  HomeFaq,
  HomeTestimonials,
  QualitySection,
} from "./medvi/sections";

export function HomeClient() {
  return (
    <div className="home-medvi">
      <MedviHero />
      <div className="bg-white pt-16">
        <TrustIconStrip items={trustItems} />
      </div>

      {goalSections.map((section) => (
        <GoalSection key={section.id} {...section} />
      ))}

      <QualitySection />
      <HomeTestimonials />
      <HomeFaq items={homeFaqs} />
      <GuaranteeStrip items={guaranteeItems} />
      <FinalCta />
    </div>
  );
}
