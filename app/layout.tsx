import type { Metadata } from "next";
import { MetaPixel } from "./meta-pixel";
import "./globals.css";

const SITE_URL = "https://sauceskool.com";
const SITE_DESCRIPTION =
  "Run profitable ads to your Skool. Traffic playbooks, Meta creative, and an About that converts cold traffic. Grow MRR without a single sales call.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "The Sauce",
      url: SITE_URL,
      description: SITE_DESCRIPTION,
      sameAs: ["https://www.skool.com/sauce"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "The Sauce",
      alternateName: "The Sauce | For Skoolers",
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "The Sauce | For Skoolers",
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "The Sauce | For Skoolers",
    description:
      "Run profitable ads to your Skool. Traffic playbooks and an About that converts. Grow MRR without a single sales call.",
    url: SITE_URL,
    siteName: "The Sauce",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@700&family=Lilita+One&family=Nunito:wght@500;700;800;900&display=swap"
          rel="stylesheet"
        />
        <MetaPixel />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
