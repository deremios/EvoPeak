# EvoPeak Shop Product Image Prompts

Use `packaging-reference.png` as the primary style reference in your AI tool.

Replace `{name}` with the product name and `{dosage}` with the largest variant size from `src/data/products.ts`.

## Label rules

| Element | Value |
|---|---|
| Brand wordmark | `EVOPEAK` (black, bold) |
| Large grey text | `{name}` — replaces generic "PEPTIDES" |
| Tagline | `BORN FROM LIFE. BUILT FOR BALANCE` |
| Accent | Blue wave graphic |
| Dosage | `{dosage}` bottom-right on vial |
| Footer | `For research use only` |
| Box | Same design, `{name}` on box front |

## 1 — Packaging shot → `{id}.jpg`

> Professional product photo identical to reference: EvoPeak peptide vial in front of matching white cardboard box on reflective white surface. Vial label reads "EVOPEAK" in black, "{name}" in large light grey sans-serif below, tagline "BORN FROM LIFE. BUILT FOR BALANCE", blue wave graphic, "{dosage}" bottom right, "For research use only". Box front matches vial label with same "{name}" text replacing "PEPTIDES". Bright clinical studio lighting, soft reflection on surface. Exact same packaging design as reference image.

## 2 — Vial close-up → `{id}-vial.jpg`

> Close-up product photo of EvoPeak peptide vial, label facing camera, sharp focus on label text. Label shows "EVOPEAK", "{name}", "{dosage}", blue wave graphic, "For research use only". White background, soft shadow. Same label design as EvoPeak packaging reference. No box visible.

## 3 — Flat lay → `{id}-flatlay.jpg`

> Top-down flat lay product photo on white surface: EvoPeak "{name}" vial, matching EvoPeak box, arranged neatly. Same white label design with blue wave graphic. Minimal, clean e-commerce style. Soft even lighting.

## QA checklist

- [ ] Peptide name spelled correctly
- [ ] Dosage matches largest variant in product data
- [ ] EVOPEAK branding (not PeakPeptides)
- [ ] Blue wave + tagline present
- [ ] "For research use only" visible
- [ ] Export WebP ~1200px wide, quality 82 (`cwebp -q 82`)

## Output paths

Save to `public/images/products/`:

- `{id}.webp` — primary (shop card + product detail)
