import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Sauce | For Skoolers",
  description:
    "If you run a paid community on Skool priced under $297 a month, grow community and MRR with ads without a single sales call.",
  openGraph: {
    title: "The Sauce | For Skoolers",
    description:
      "Grow your Skool community and MRR with ads. Without a single sales call.",
    url: "https://www.sauceskool.com",
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
      </head>
      <body>{children}</body>
    </html>
  );
}
