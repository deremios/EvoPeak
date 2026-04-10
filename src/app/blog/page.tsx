import { Metadata } from "next";
import { region } from "@/config";
import { BlogList } from "@/components/blog/blog-list";

export const metadata: Metadata = {
  title: `Research Insights — ${region.brandName}`,
  description: "Science-backed articles on peptide research, protocols, and guides. Stay informed with the latest research insights from " + region.brandName + ".",
};

export default function BlogPage() {
  return (
    <div className="bg-bg-primary min-h-screen py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Research Insights
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Science-backed articles on peptide research, protocols, and
            practical guides for researchers.
          </p>
        </div>
        <BlogList />
      </div>
    </div>
  );
}
