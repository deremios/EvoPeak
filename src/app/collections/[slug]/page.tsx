import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CollectionLanding } from "@/components/collections/collection-landing";
import { region } from "@/config";
import { breadcrumbSchema, collectionPageSchema, faqSchema, itemListSchema } from "@/lib/schema";
import {
  getAllCollections,
  getBundlesForCollection,
  getCollectionBySlug,
  getProductsForCollection,
} from "@/lib/collections";
import { createSeoMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllCollections().map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    return createSeoMetadata({
      title: `Collection Not Found — ${region.brandName}`,
      description: "This research collection could not be found.",
      path: `/collections/${slug}`,
      noIndex: true,
    });
  }

  return createSeoMetadata({
    title: collection.seoTitle,
    description: collection.seoDescription,
    path: `/collections/${collection.slug}`,
    keywords: [
      collection.name,
      `${collection.shortName} research peptides`,
      "research peptides Australia",
      "third-party tested peptides",
    ],
  });
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) notFound();

  const products = getProductsForCollection(collection.slug);
  const bundles = getBundlesForCollection(collection.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            collectionPageSchema({
              category: {
                id: collection.slug,
                name: collection.name,
                slug: `collections/${collection.slug}`,
                description: collection.description,
                sortOrder: 0,
              },
              path: `/collections/${collection.slug}`,
            }),
            itemListSchema({
              name: collection.name,
              description: collection.description,
              path: `/collections/${collection.slug}`,
              products,
            }),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Shop", path: "/shop" },
              {
                name: collection.name,
                path: `/collections/${collection.slug}`,
              },
            ]),
            faqSchema(collection.faqs),
          ]),
        }}
      />
      <CollectionLanding
        collection={collection}
        products={products}
        bundles={bundles}
      />
    </>
  );
}
