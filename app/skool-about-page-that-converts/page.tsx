import { GuideArticle } from "@/components/guide-article";
import { guideMetadata } from "@/lib/guide-meta";
import { SITE_URL } from "@/lib/sauce";

const slug = "skool-about-page-that-converts";
const title = "Skool About Page That Converts | The Sauce";
const description =
  "A Skool About page is where a Meta ad click lands. The paid About target is 2% to 4%, held for 7 days. The first line states who you help and the outcome.";

export const metadata = guideMetadata({ slug, title, description });

export default function SkoolAboutPageThatConvertsPage() {
  return (
    <GuideArticle
      path={`/${slug}`}
      url={`${SITE_URL}/${slug}`}
      title="Skool About page that converts"
      description={description}
      lede="A Skool About page is the page a Meta ad click lands on. The paid About target is 2% to 4%, held for 7 days. The first line states who you help, the outcome, and what they never do again."
      sections={[
        {
          heading: "What the first line has to do",
          paragraphs: [
            "Cold traffic reads one sentence first. Say who you help, the outcome, and what they never do again. If that line is fuzzy, the rest of the About does not get read.",
          ],
        },
        {
          heading: "The 2% to 4% band",
          paragraphs: [
            "Hold the page for 7 days. The paid About target is 2% to 4%. Read that band after the hold.",
          ],
        },
        {
          heading: "What the click should see",
          paragraphs: [
            "One clear promise. Who the community is for and how they join. Paid traffic should know exactly what you sell without hunting for the offer.",
          ],
        },
        {
          heading: "After they join",
          paragraphs: [
            "The About gets the yes. The first week keeps it. Trial and onboarding should reinforce the join and create a quick win.",
          ],
        },
      ]}
      faqs={[
        {
          q: "What is a Skool About page?",
          a: "It is the page a Meta ad click lands on. Cold visitors should know exactly what you sell.",
        },
        {
          q: "What conversion rate should a paid Skool About hit?",
          a: "The paid About target is 2% to 4%, held for 7 days.",
        },
        {
          q: "What belongs in the first line of a Skool About?",
          a: "Who you help, the outcome, and what they never do again.",
        },
      ]}
    />
  );
}
