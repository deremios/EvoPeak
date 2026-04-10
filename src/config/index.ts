import type { RegionConfig } from "@/types/region";
import { au } from "./regions/au";
import { us } from "./regions/us";

const regions: Record<string, RegionConfig> = { au, us };

const regionId = process.env.NEXT_PUBLIC_REGION || "au";

export const region: RegionConfig = regions[regionId] ?? au;

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat(region.currency.locale, {
    style: "currency",
    currency: region.currency.code,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(region.locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
