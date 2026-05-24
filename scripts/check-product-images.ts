/**
 * Reports missing shop product images under public/images/products/.
 * Run: npm run check:product-images
 */
import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PRODUCTS_FILE = join(ROOT, "src/data/products.ts");
const IMAGES_DIR = join(ROOT, "public/images/products");

function extractProductIds(source: string): string[] {
  const ids: string[] = [];
  const re = /imageUrl:\s*"\/images\/products\/([^"]+)"/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(source)) !== null) {
    ids.push(match[1].replace(/\.(webp|jpg|jpeg|png)$/i, ""));
  }
  return ids;
}

const source = readFileSync(PRODUCTS_FILE, "utf8");
const productIds = extractProductIds(source);

let missing = 0;

console.log("Checking shop product images...\n");

for (const id of productIds) {
  const filename = `${id}.webp`;
  const path = join(IMAGES_DIR, filename);
  if (!existsSync(path)) {
    console.log(`✗ ${id} — missing ${filename}`);
    missing++;
  } else {
    console.log(`✓ ${id}`);
  }
}

console.log(`\n${productIds.length} products checked, ${missing} files missing.`);

if (missing > 0) {
  process.exit(1);
}
