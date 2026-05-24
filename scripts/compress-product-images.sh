#!/usr/bin/env bash
# Convert product images in public/images/products/ to WebP.
# Usage: npm run compress:product-images
set -euo pipefail

DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images/products"

if ! command -v cwebp >/dev/null 2>&1; then
  echo "cwebp not found. Install with: brew install webp"
  exit 1
fi

shopt -s nullglob
for src in "$DIR"/*.{jpg,jpeg,png}; do
  base="${src%.*}"
  out="${base}.webp"
  cwebp -q 82 -m 6 "$src" -o "$out"
  rm "$src"
  echo "Converted $(basename "$src") -> $(basename "$out")"
done

echo "Done."
