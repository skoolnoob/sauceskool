import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/lib/guide-meta";
import { SITE_URL } from "@/lib/sauce";

const slug = "meta-ads-for-skool";
const title = "How to Run Meta Ads to a Skool Community | The Sauce";
const description =
  "Run Meta ads to a Skool About page that converts cold traffic. Use traffic playbooks, creative, and hooks. No sales call.";

export const metadata = guideMetadata({ slug, title, description });

export default function MetaAdsForSkoolPage() {
  return (
    <GuideArticle
      path={`/${slug}`}
      url={`${SITE_URL}/${slug}`}
      title="How to run Meta ads to a Skool community"
      description={description}
      lede="Run Meta ads to the Skool About page. The click lands there, not on a booking link. Cold traffic joins when the first line says who you help, the outcome, and what they never do again. The Sauce includes traffic playbooks, Meta creative, hooks, and ad formats for a paid Skool. YouTube and affiliates use the same playbooks. There is no sales call."
      sections={[
        {
          heading: "Where the click should land",
          paragraphs: [
            "A Skool Meta ad should open the community About. That page is the offer. A sales call calendar is the wrong destination. Ads and a converting About do the close.",
          ],
        },
        {
          heading: "Creative that earns the click",
          paragraphs: [
            "Run formats that match how a paid community buys from an ad. Use bait and thumb-stopping hooks so the right people stop. The line in the ad has to match the first line on the About.",
          ],
        },
        {
          heading: "Hold the test, then read it",
          paragraphs: [
            "The paid About target is 2% to 4%. Hold that page for 7 days, then read the data before you add spend.",
          ],
        },
        {
          heading: "What you run inside The Sauce",
          paragraphs: [
            "Traffic playbooks, Meta ad formats, and a creative toolkit you can use this week. You run the tests. Members meet on one compact call a week. A 1 on 1 game plan call is for the next move on your ads and About, not another fluff course.",
          ],
        },
      ]}
      faqs={[
        {
          q: "Where should Meta ads for a Skool community send people?",
          a: "To the Skool About page. That is where the click lands. Do not send the ad to a sales call calendar.",
        },
        {
          q: "Do I need a sales call to turn Skool ad clicks into members?",
          a: "No. Ads and a converting About do the close. The Sauce does not use a sales call calendar.",
        },
        {
          q: "How long should I run a Skool About test?",
          a: "Hold the paid About for 7 days. The target is 2% to 4%. Then read the data.",
        },
      ]}
    />
  );
}
