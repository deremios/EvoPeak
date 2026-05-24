export interface PeptideLandingSection {
  title: string;
  content: string;
  image?: string;
  bullets?: string[];
}

export interface PeptideLandingDosageRow {
  label: string;
  detail: string;
}

export interface PeptideLandingFaq {
  q: string;
  a: string;
}

export interface PeptideLandingContent {
  productId: string;
  peptideSlug: string;
  shopPath: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  heroEyebrow: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroImage: string;
  ctaLabel: string;
  gradient: string;
  sections: {
    whatIs: PeptideLandingSection;
    mechanism: PeptideLandingSection & { bullets: string[] };
    dosage: {
      title: string;
      intro: string;
      rows: PeptideLandingDosageRow[];
    };
    sideEffects: PeptideLandingSection & { items: string[] };
    reconstitution: PeptideLandingSection & { suppliesNote: string };
    howToGet: PeptideLandingSection & { steps: string[] };
  };
  faqs: PeptideLandingFaq[];
  relatedProductIds: string[];
  relatedBlogSlugs?: string[];
  ogImage?: string;
}
