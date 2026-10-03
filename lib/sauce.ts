/**
 * Product facts for guide pages.
 * Keep these in sync with the constants at the top of app/page.tsx.
 * JOIN is the homepage join link. Do not change the URL.
 */
export const JOIN = "https://www.skool.com/sauce?ref=sauceskool";
export const MEMBERS_NOW = 79;
export const PRICE_CAP = 90;
export const SEATS_LEFT = PRICE_CAP - MEMBERS_NOW;

export const SITE_URL = "https://sauceskool.com";

export const GUIDE_LINKS = [
  {
    href: "/meta-ads-for-skool",
    label: "How to run Meta ads to a Skool community",
  },
  {
    href: "/skool-about-page-that-converts",
    label: "Skool About page that converts",
  },
  {
    href: "/grow-skool-mrr-without-sales-calls",
    label: "Grow Skool MRR without sales calls",
  },
  {
    href: "/skool-ads-under-297",
    label: "Best ads for a Skool under $297 a month",
  },
] as const;
