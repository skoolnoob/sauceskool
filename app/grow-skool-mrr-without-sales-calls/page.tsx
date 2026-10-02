import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/lib/guide-meta";
import { SITE_URL } from "@/lib/sauce";

const slug = "grow-skool-mrr-without-sales-calls";
const title = "Grow Skool MRR Without Sales Calls | The Sauce";
const description =
  "Grow Skool MRR with Meta ads, traffic playbooks, and an About page that converts. No sales call calendar. One members call a week.";

export const metadata = guideMetadata({ slug, title, description });

export default function GrowSkoolMrrWithoutSalesCallsPage() {
  return (
    <GuideArticle
      path={`/${slug}`}
      url={`${SITE_URL}/${slug}`}
      title="How to grow Skool MRR without sales calls"
      description={description}
      lede="Grow Skool MRR with Meta ads, traffic playbooks, and an About page that converts. Ads and the About do the close. There is no sales call calendar. Members meet on one call a week."
      sections={[
        {
          heading: "The close is the ad and the About",
          paragraphs: [
            "Cold traffic clicks a Meta ad and lands on the About. A clear promise is what gets the join. The path is the ad, then the About.",
          ],
        },
        {
          heading: "What you run instead",
          paragraphs: [
            "Traffic playbooks. Meta creative, hooks, and ad formats. An About held to a paid target of 2% to 4% for 7 days. YouTube and affiliates use the same playbooks.",
          ],
        },
        {
          heading: "One call a week",
          paragraphs: [
            "The members call is one call a week. Compact. Built for operators who are running ads.",
          ],
        },
        {
          heading: "Who this is for",
          paragraphs: [
            "A paid Skool under $297 a month. You will run the Meta tests, creative, and traffic playbooks yourself. You want cold traffic on an About, not a booking link.",
          ],
        },
      ]}
      faqs={[
        {
          q: "How do I grow Skool MRR without sales calls?",
          a: "Use Meta ads, traffic playbooks, and an About page that converts. Ads and the About do the close. The Sauce does not use a sales call calendar.",
        },
        {
          q: "What replaces a Skool sales call?",
          a: "A Skool About page that converts cold traffic, fed by Meta ads and the same traffic playbooks.",
        },
        {
          q: "How often is the Sauce members call?",
          a: "One call a week. Compact, and built for operators running ads.",
        },
      ]}
    />
  );
}
