import type { RegionConfig } from "@/types/region";

export const us: RegionConfig = {
  id: "us",
  brandName: "OptimiseUS Research",
  tagline: "Purity. Performance. American Quality.",
  country: "United States",
  countryCode: "US",
  locale: "en-US",
  timezone: "America/New_York",

  currency: {
    code: "USD",
    symbol: "$",
    locale: "en-US",
  },

  shipping: {
    carrier: "USPS / UPS",
    domesticEstimate: "2–5 business days",
    coldChain: true,
    sameDayCutoff: "1:00 PM EST",
  },

  payment: {
    methods: ["Stripe", "Venmo"],
    payIdEnabled: false,
    stripeEnabled: true,
  },

  legal: {
    disclaimer:
      "FOR LABORATORY RESEARCH USE ONLY. Not for human consumption, injection, or therapeutic use. All products are sold strictly as research chemicals. By purchasing, you confirm you are 21+ and agree to use products solely for legitimate research purposes.",
    ageRequirement: 21,
    complianceBody: "FDA",
    businessIdLabel: "EIN",
  },

  support: {
    email: "support@optimiseus.com",
    liveChatEnabled: true,
  },

  meta: {
    defaultTitle: "OptimiseUS Research — Premium American Research Peptides",
    defaultDescription:
      "America's premium supplier of 3rd-party tested research peptides. HPLC/MS tested, cGMP-grade, fast US shipping.",
    defaultKeywords: [
      "research peptides USA",
      "buy peptides US",
      "BPC-157 USA",
      "semaglutide research",
      "peptide supplier USA",
    ],
  },
};
