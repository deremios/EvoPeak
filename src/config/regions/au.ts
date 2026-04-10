import type { RegionConfig } from "@/types/region";

export const au: RegionConfig = {
  id: "au",
  brandName: "OptimiseAU Research",
  tagline: "Purity. Performance. Australian Made Trust.",
  country: "Australia",
  countryCode: "AU",
  locale: "en-AU",
  timezone: "Australia/Sydney",

  currency: {
    code: "AUD",
    symbol: "$",
    locale: "en-AU",
  },

  shipping: {
    carrier: "Australia Post",
    domesticEstimate: "3–5 business days",
    coldChain: true,
    sameDayCutoff: "2:00 PM AEST",
  },

  payment: {
    methods: ["PayID"],
    payIdEnabled: true,
    stripeEnabled: false,
  },

  legal: {
    disclaimer:
      "FOR LABORATORY RESEARCH USE ONLY. Not for human consumption, injection, or therapeutic use. All products are sold strictly as research chemicals. By purchasing, you confirm you are 18+ and agree to use products solely for legitimate research purposes.",
    ageRequirement: 18,
    complianceBody: "TGA",
    businessIdLabel: "ABN",
  },

  support: {
    email: "support@optimiseau.com.au",
    liveChatEnabled: true,
  },

  meta: {
    defaultTitle: "OptimiseAU Research — Premium Australian Research Peptides",
    defaultDescription:
      "Australia's premium supplier of 3rd-party tested research peptides. HPLC/MS tested, cGMP-grade, fast AU shipping. BPC-157, Semaglutide, Tirzepatide & more.",
    defaultKeywords: [
      "research peptides Australia",
      "buy peptides AU",
      "BPC-157 Australia",
      "semaglutide research",
      "tirzepatide Australia",
      "peptide supplier Australia",
    ],
  },
};
