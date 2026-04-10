import { region } from "@/config";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="bg-bg-primary py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            {title}
          </h1>
          <p className="mt-2 text-sm text-text-muted">
            Last updated: {lastUpdated} · {region.brandName}
          </p>
        </div>
        <div className="prose prose-slate max-w-none prose-headings:text-text-primary prose-p:text-text-secondary prose-li:text-text-secondary prose-strong:text-text-primary prose-a:text-brand-green hover:prose-a:text-brand-green-light">
          {children}
        </div>
      </div>
    </div>
  );
}
