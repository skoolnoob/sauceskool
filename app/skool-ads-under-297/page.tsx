import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/lib/guide-meta";
import { MEMBERS_NOW, PRICE_CAP, SEATS_LEFT, SITE_URL } from "@/lib/sauce";

const slug = "skool-ads-under-297";
const title = "Best Ads for a Skool Under $297 a Month | The Sauce";
const description =
  "The paid playbook for a Skool under $297 a month: you run Meta ads into an About that converts. No sales call calendar.";

const priceAnswer = `The Sauce costs $99/mo until it reaches ${PRICE_CAP} members. ${MEMBERS_NOW} members are in now, so ${SEATS_LEFT} seats are left at $99/mo. After ${PRICE_CAP} members the price goes up for new joins, and members who stay subscribed keep the $99/mo rate.`;

export const metadata = guideMetadata({ slug, title, description });

export default function SkoolAdsUnder297Page() {
  return (
    <GuideArticle
      path={`/${slug}`}
      url={`${SITE_URL}/${slug}`}
      title="Best ads for a Skool community under $297 a month"
      description={description}
      lede="The paid play for a Skool under $297 a month is Meta ads into an About that converts. You run the tests, the creative, and the traffic playbooks. Cold traffic hits the About, not a sales call calendar. The Sauce is only for that price band."
      sections={[
        {
          heading: "Why under $297 changes the ad",
          paragraphs: [
            "At a community price under $297 a month, a high ticket sales call does not fit the offer. The ad has to earn the click. The About has to close it.",
          ],
        },
        {
          heading: "The play you run",
          paragraphs: [
            "Meta ads with creative bait, hooks, and formats built for paid communities. Send the click to the About. The paid About target is 2% to 4%. Hold 7 days. Read the data. Scale what holds inside that band.",
          ],
        },
        {
          heading: "You run it",
          paragraphs: [
            "You run the Meta tests, the creative, and the traffic playbooks. YouTube and affiliates use the same playbooks when you add them.",
          ],
        },
        {
          heading: "What The Sauce costs",
          paragraphs: [priceAnswer],
        },
      ]}
      faqs={[
        {
          q: "What ads should a Skool under $297 a month run?",
          a: "Meta ads into an About that converts. You run the creative and the tests. Cold traffic hits the About, not a sales call calendar.",
        },
        {
          q: "Is The Sauce for a Skool community under $297 a month?",
          a: "Yes. The Sauce is only for a paid Skool under $297 a month. You run the Meta tests, creative, and traffic playbooks yourself.",
        },
        {
          q: "How much does it cost to join The Sauce?",
          a: priceAnswer,
        },
      ]}
    />
  );
}
