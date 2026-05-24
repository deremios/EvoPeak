export const business = {
  legalName: "EvoPeak Ltd",
  address: {
    street: "10 Manning st",
    locality: "South Brisbane",
    postalCode: "1210",
    region: "Queensland",
    country: "Australia",
    countryCode: "AU",
  },
} as const;

export function formatBusinessAddress(): string {
  const { street, locality, postalCode, region, country } = business.address;
  return `${street}, ${locality}, ${postalCode}, ${region}, ${country}`;
}
