import { JoinLink } from "@/components/join-link";
import { GUIDE_LINKS, JOIN, PRICE_CAP, SEATS_LEFT } from "@/lib/sauce";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
};

export type GuideFaq = {
  q: string;
  a: string;
};

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function GuideArticle({
  path,
  url,
  title,
  description,
  lede,
  sections,
  faqs,
}: {
  path: string;
  url: string;
  title: string;
  description: string;
  lede: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
}) {
  const related = GUIDE_LINKS.filter((item) => item.href !== path);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: title,
        description,
        mainEntityOfPage: url,
        url,
        author: {
          "@type": "Organization",
          name: "The Sauce",
          url: "https://sauceskool.com",
        },
        publisher: { "@id": "https://sauceskool.com/#organization" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <main className="guide">
        <article className="guide-wrap">
          <a className="guide-kicker" href="/">
            The Sauce
          </a>
          <h1>{title}</h1>
          <p className="guide-lede">{lede}</p>
          {sections.map((section) => (
            <section className="guide-section" key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <section className="faq guide-faq">
            <h2>FAQ</h2>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }}
            />
            {faqs.map((item) => (
              <details key={item.q}>
                <summary>
                  <h3>{item.q}</h3>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </section>
          <nav className="guide-related" aria-label="Related guides">
            <h2>Related</h2>
            <ul>
              {related.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <section className="guide-cta">
            <h2>Join The Sauce</h2>
            <p className="guide-cta-copy">
              Traffic playbooks, Meta ads, and an About that converts cold traffic. Grow MRR
              without a sales call.
            </p>
            <JoinLink className="btn btn-pill" href={JOIN}>
              Start at $99/mo
            </JoinLink>
            <p className="fine">
              {SEATS_LEFT} seats left at $99/mo until {PRICE_CAP} members.
            </p>
            <a className="guide-back" href="/">
              Back to the homepage
            </a>
          </section>
        </article>
      </main>
      <footer className="footer guide-footer">
        <div className="wrap">The Sauce · For Skoolers</div>
      </footer>
    </>
  );
}
