export const business = {
  legalName: "EvoPeak Ltd",
  acn: "15 223 734 393",
  address: {
    street: "10 Manning st",
    locality: "South Brisbane",
    postalCode: "1210",
    region: "Queensland",
    country: "Australia",
    countryCode: "AU",
  },
  social: {
    facebook: "https://www.facebook.com/people/Evopeak-Peptides/61590194858631/",
    x: "https://x.com/EvopeakAU",
  },
} as const;

export function formatBusinessAddress(): string {
  const { street, locality, postalCode, region, country } = business.address;
  return `${street}, ${locality}, ${postalCode}, ${region}, ${country}`;
}
