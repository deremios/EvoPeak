import type { PeptideLandingContent } from "@/types/peptide-landing";
import { retatrutideLanding } from "./retatrutide";

const landings: PeptideLandingContent[] = [retatrutideLanding];

export function getAllLandingSlugs(): string[] {
  return landings.map((l) => l.peptideSlug);
}

export function getLandingByPeptideSlug(
  slug: string
): PeptideLandingContent | undefined {
  return landings.find((l) => l.peptideSlug === slug);
}

export function getAllLandings(): PeptideLandingContent[] {
  return landings;
}

export function getLandingPath(slug: string): string {
  return `/${slug}-australia`;
}
