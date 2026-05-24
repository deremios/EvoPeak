export const AU_STATES = [
  { code: "NSW", name: "New South Wales" },
  { code: "VIC", name: "Victoria" },
  { code: "QLD", name: "Queensland" },
  { code: "SA", name: "South Australia" },
  { code: "WA", name: "Western Australia" },
  { code: "TAS", name: "Tasmania" },
  { code: "ACT", name: "Australian Capital Territory" },
  { code: "NT", name: "Northern Territory" },
] as const;

export type AuStateCode = (typeof AU_STATES)[number]["code"];

export function isValidAustralianPostcode(postcode: string): boolean {
  return /^\d{4}$/.test(postcode);
}

/** Best-effort state lookup from a 4-digit AU postcode. */
export function inferStateFromPostcode(postcode: string): AuStateCode | null {
  if (!isValidAustralianPostcode(postcode)) return null;

  const n = parseInt(postcode, 10);

  if (/^02\d{2}$/.test(postcode)) return "ACT";
  if (n >= 800 && n <= 999) return "NT";
  if (n >= 1000 && n <= 2599) return "NSW";
  if (n >= 2600 && n <= 2618) return "ACT";
  if (n >= 2619 && n <= 2899) return "NSW";
  if (n >= 2900 && n <= 2920) return "ACT";
  if (n >= 2921 && n <= 2999) return "NSW";
  if (n >= 3000 && n <= 3999) return "VIC";
  if (n >= 4000 && n <= 4999) return "QLD";
  if (n >= 5000 && n <= 5999) return "SA";
  if (n >= 6000 && n <= 6999) return "WA";
  if (n >= 7000 && n <= 7999) return "TAS";
  if (n >= 8000 && n <= 8999) return "VIC";
  if (n >= 9000 && n <= 9999) return "QLD";

  return null;
}

export function getStateLabel(code: string): string {
  return AU_STATES.find((state) => state.code === code)?.name ?? code;
}
