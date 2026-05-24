import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AgeGate } from "@/components/shared/age-gate";
import { WelcomeBanner } from "@/components/shared/welcome-banner";
import { CartProvider } from "@/lib/cart-context";
import { TawkChat } from "@/components/shared/tawk-chat";
import { GoogleAnalytics } from "@/components/shared/google-analytics";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { region } from "@/config";
import { createSeoMetadata, SITE_URL } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...createSeoMetadata({
    title: `${region.brandName} — ${region.tagline}`,
    description: region.meta.defaultDescription,
    path: "/",
    keywords: region.meta.defaultKeywords,
  }),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={region.locale} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema(), websiteSchema()]),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:rounded-lg focus:bg-brand-green focus:px-4 focus:py-2 focus:text-white focus:text-sm focus:font-medium"
          >
            Skip to content
          </a>
          <AgeGate />
          <WelcomeBanner />
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
          <GoogleAnalytics />
          <TawkChat />
        </CartProvider>
      </body>
    </html>
  );
}
