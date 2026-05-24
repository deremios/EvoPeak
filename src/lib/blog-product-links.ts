/** Maps blog post tags to shop product pages for in-article CTAs. */
export const BLOG_TAG_TO_PRODUCT: Record<string, { slug: string; label: string }> = {
  "bpc-157": { slug: "bpc-157", label: "BPC-157" },
  "tb-500": { slug: "tb-500", label: "TB-500" },
  "glp-1": { slug: "semaglutide", label: "Semaglutide" },
  semaglutide: { slug: "semaglutide", label: "Semaglutide" },
  tirzepatide: { slug: "tirzepatide", label: "Tirzepatide" },
  retatrutide: { slug: "retatrutide", label: "Retatrutide" },
  "cjc-1295": { slug: "cjc-1295-ipamorelin-blend", label: "CJC-1295 + Ipamorelin" },
  ipamorelin: { slug: "cjc-1295-ipamorelin-blend", label: "CJC-1295 + Ipamorelin" },
  "cjc-1295-dac": { slug: "cjc-1295-dac", label: "CJC-1295 with DAC" },
  selank: { slug: "selank", label: "Selank" },
  semax: { slug: "semax", label: "Semax" },
  "ghk-cu": { slug: "ghk-cu", label: "GHK-Cu" },
};

export function getRelatedProductFromTags(tags: string[]) {
  return tags.map((t) => BLOG_TAG_TO_PRODUCT[t.toLowerCase()]).find(Boolean);
}
