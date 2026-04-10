export interface RegionConfig {
  id: string;
  brandName: string;
  tagline: string;
  country: string;
  countryCode: string;
  locale: string;
  timezone: string;

  currency: {
    code: string;
    symbol: string;
    locale: string;
  };

  shipping: {
    carrier: string;
    domesticEstimate: string;
    coldChain: boolean;
    sameDayCutoff: string;
  };

  payment: {
    methods: string[];
    payIdEnabled: boolean;
    stripeEnabled: boolean;
  };

  legal: {
    disclaimer: string;
    ageRequirement: number;
    complianceBody: string;
    businessIdLabel: string;
  };

  support: {
    email: string;
    liveChatEnabled: boolean;
  };

  meta: {
    defaultTitle: string;
    defaultDescription: string;
    defaultKeywords: string[];
  };
}
