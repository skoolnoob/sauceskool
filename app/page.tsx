const JOIN = "https://www.skool.com/sauce?ref=sauceskool";

const MEMBERS_NOW = 98;
const PRICE_CAP = 120;
const SEATS_LEFT = PRICE_CAP - MEMBERS_NOW;

const LOGO_DATA_URI =
  "data:image/png;base64,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";

const gameChangers = [
  {
    title: "One Sentence Promise",
    body: "Lock who you help, the outcome, and what they never have to do again",
  },
  {
    title: "About pages that convert",
    body: "Paid About target 2% to 4%. Hold 7 days. Read the data",
  },
  {
    title: "Trial and onboarding",
    body: "First week systems that reinforce the join and create a quick win",
  },
  {
    title: "Traffic without sales calls",
    body: "Meta, YouTube, Skool organic, affiliates into a page that sells",
  },
  {
    title: "Creative Toolkit",
    body: "Free ad creative systems and community creative you can run this week",
  },
  {
    title: "Meta Ad Formats",
    body: "Formats that match how paid communities actually buy",
  },
  {
    title: "Weekly members call",
    body: "One call a week. Compact. Built for busy operators",
  },
  {
    title: "1 on 1 Game Plan Call",
    body: "Get a clear next move for your Skool, not another fluff course",
  },
  {
    title: "Community Secrets classroom",
    body: "OSP, Invisible Blueprint, Flagship, onboarding playbooks",
  },
  {
    title: "Client community playbook",
    body: "Same systems behind rooms we have worked with at scale",
  },
  {
    title: "No Zoom sales theater",
    body: "#FvckSalesCalls. Ads and a converting About do the close",
  },
  {
    title: "Free trial on Skool",
    body: "Try The Sauce before you pay. Start free, then $99/mo",
  },
];

const cases = [
  {
    proj: "Project 01",
    title: "GTA Creator Academy",
    owner: "Client community",
    metric: "$4k MRR",
    tone: "case-b0",
  },
  {
    proj: "Project 02",
    title: "AI SEO Rainmakers",
    owner: "Charles Floate",
    metric: "$75k MRR",
    tone: "case-b1",
  },
  {
    proj: "Project 03",
    title: "Claude Club",
    owner: "Samin Yasar",
    metric: "$27k MRR",
    tone: "case-b2",
  },
];

const quotes = [
  {
    body: "One of the most efficient Skool groups I have been in. No 30 calls a week, no 90 hour course, just straight sauce in a punchy, compact format. One call a week.",
    who: "Aaron Ferrell",
    meta: "Paying member",
  },
  {
    body: "I believed I needed more content, a bigger audience and endless sales calls. Now I understand how the right offer, trial, About Page and traffic can create a far simpler and more scalable model.",
    who: "Tim Atyeo",
    meta: "Member review",
  },
  {
    body: "No fluff. Straight to the point courses, packing high value. Ryan walked me through a Meta ads test and saved me hundreds in wasted ad spend.",
    who: "Dr. Russell Beach",
    meta: "Paying member",
  },
  {
    body: "If you are serious about Skool you will find the fastest way to grow your MRR inside.",
    who: "Richard Dale",
    meta: "Member review",
  },
];

const joinedAvatars = [
  { who: "Aaron Ferrell", initials: "AF", tone: "avatar-b0" },
  { who: "Tim Atyeo", initials: "TA", tone: "avatar-b1" },
  { who: "Dr. Russell Beach", initials: "RB", tone: "avatar-b2" },
  { who: "Richard Dale", initials: "RD", tone: "avatar-b3" },
];

const forYou = [
  "You run a paid Skool community under $297 a month and want more members and MRR",
  "You would rather fix your offer and About page than live on sales calls",
  "You will actually run the playbooks, ads tests, and classroom work",
  "You want a compact community with one call a week, not a 90 hour course",
];

const notForYou = [
  "You have never opened a Skool and want passive income promises",
  "You want someone else to run your ads and community while you collect courses",
  "You need a high ticket sales call calendar to feel like it is real",
];

const DOT = " \u2022 ";

export default function Home() {
  const progressOn = 8;
  const progressPartial = true;

  return (
    <>
      <div className="announce">
        {"$99/mo until 120 members" +
          DOT +
          SEATS_LEFT +
          " seats left at this price" +
          DOT +
          "Start free on Skool"}
      </div>

      <main>
        <section className="hero">
          <div className="wrap">
            <div className="skoolers-brand">
              <img
                className="skoolers-logo"
                src={LOGO_DATA_URI}
                alt="for skoolers"
                width={220}
                height={61}
              />
            </div>
            <h1>
              If you run a paid community on Skool priced{" "}
              <span className="accent">under $297</span> a month, this is for you.
            </h1>
            <p className="sub">
              <span className="rapid">RAPIDLY</span> grow your Community and MRR with
              free trial traffic and Ads. Without a single sales call.
            </p>
            <div className="hero-cta">
              <a className="btn btn-pill" href={JOIN}>
                Start free trial
              </a>
              <a className="btn ghost" href="#ladder">
                See the price ladder
              </a>
            </div>
            <p className="fine">
              {"Free trial on Skool" +
                DOT +
                "then $99/mo until 120 members" +
                DOT +
                "5.0 from 8 reviews" +
                DOT +
                "Built for Skoolers"}
            </p>

            <div className="joined-row">
              <div className="avatars" aria-hidden="true">
                {joinedAvatars.map((a) => (
                  <span className={"avatar " + a.tone} title={a.who} key={a.who}>
                    {a.initials}
                  </span>
                ))}
              </div>
              <div className="joined-copy">
                <strong>Skoolers already in</strong>
                <span>
                  {MEMBERS_NOW}
                  {" members"}
                  {DOT}
                  {SEATS_LEFT}
                  {" seats left at $99"}
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="featured" id="proof">
          <div className="wrap">
            <p className="featured-kicker">See exactly how it works</p>
            <h2 className="featured-title">
              Three moves. Then traffic. Real locked case studies.
            </h2>
            <div className="featured-strip">
              <div className="feat-step">
                <div className="num">1</div>
                <div>
                  <strong>Lock your One Sentence Promise</strong>
                  <p>Who you help, the outcome, the timeframe, and what they avoid.</p>
                </div>
              </div>
              <div className="feat-step">
                <div className="num">2</div>
                <div>
                  <strong>Build an About page that converts</strong>
                  <p>
                    Paid About target is 2% to 4%. Hold changes for 7 days and read the
                    data.
                  </p>
                </div>
              </div>
              <div className="feat-step">
                <div className="num">3</div>
                <div>
                  <strong>Run free organic and paid ads into it</strong>
                  <p>
                    Meta formats, traffic playbooks, and creative tools made for
                    Skoolers.
                  </p>
                </div>
              </div>
            </div>
            <div className="featured-cases">
              <div className="featured-cases-label">
                <span className="script">Locked cases</span>
                <span className="muted-line">
                  Same playbook you get inside The Sauce
                </span>
              </div>
              <div className="featured-cases-grid">
                {cases.map((c) => (
                  <article className={"mini-case " + c.tone} key={c.title}>
                    <div className="proj">{c.proj}</div>
                    <h3>{c.title}</h3>
                    <p className="owner">{c.owner}</p>
                    <div className="metric">{c.metric}</div>
                  </article>
                ))}
              </div>
            </div>
            <div className="featured-cta">
              <a className="btn btn-pill" href={JOIN}>
                Start free trial
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="cases">
          <div className="wrap">
            <div className="cases-head">
              <h2>Case Studies</h2>
              <span className="script">& client wins</span>
            </div>
            <p className="lead">
              Communities we have worked with. Same playbook you get inside The Sauce.
            </p>
            <div className="cases-grid">
              {cases.map((c) => (
                <article className={"case-card " + c.tone} key={c.title}>
                  <div>
                    <div className="proj">{c.proj}</div>
                    <h3>{c.title}</h3>
                    <p className="owner">{c.owner}</p>
                  </div>
                  <div className="metric">{c.metric}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="numbers-band" id="numbers">
          <div className="wrap">
            <div className="tag">[ By the numbers ]</div>
            <h2>Results that compound.</h2>
            <div className="numbers-grid">
              <div className="stat-card stat-b0">
                <div className="v">$1M+</div>
                <div className="l">Combined community MRR worked with</div>
              </div>
              <div className="stat-card stat-b1">
                <div className="v">40+</div>
                <div className="l">Skool Games winners</div>
              </div>
              <div className="stat-card stat-b2">
                <div className="v">Ambassadors</div>
                <div className="l">Official Skool ambassadors</div>
              </div>
              <div className="stat-card stat-b3">
                <div className="v">Investors</div>
                <div className="l">Skool investors</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="inside">
          <div className="wrap">
            <div className="game-script">Absolute Game Changer!</div>
            <p className="lead">
              Everything inside The Sauce for paid Skool growth without sales calls.
            </p>
            <div className="check-grid">
              {gameChangers.map((g) => (
                <div className="check-item" key={g.title}>
                  <div className="check-box" aria-hidden>
                    ✓
                  </div>
                  <div>
                    <strong>{g.title}</strong>
                    <span>{g.body}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="fit">
          <div className="wrap">
            <div className="price-rise" style={{ paddingTop: 0 }}>
              <div className="mini-pill">Who this is for</div>
              <h2>Know if The Sauce fits you</h2>
              <p className="subline">
                Built for Skool operators who want a clear offer, a converting About,
                and traffic without sales call theater.
              </p>
            </div>
            <div className="fit-grid">
              <div className="fit-card yes">
                <h3>
                  <span className="fit-mark">✓</span> This is for you if
                </h3>
                <ul>
                  {forYou.map((t) => (
                    <li key={t}>
                      <span className="fit-mark">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="fit-card no">
                <h3>
                  <span className="fit-mark">✕</span> It is NOT for you if
                </h3>
                <ul>
                  {notForYou.map((t) => (
                    <li key={t}>
                      <span className="fit-mark">✕</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="fit-foot">This is for people who will actually execute.</p>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2>What members say</h2>
            <p className="lead">Real Skool reviews. No invented quotes.</p>
            <div className="quotes">
              {quotes.map((q) => (
                <div className="quote" key={q.who}>
                  <p>“{q.body}”</p>
                  <div className="who">{q.who}</div>
                  <div className="meta">{q.meta}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="ladder">
          <div className="wrap">
            <div className="price-rise">
              <div className="mini-pill">The price only goes up</div>
              <h2>Lock $99 before we hit 120 members.</h2>
              <p className="subline">
                Locked in for as long as you stay subscribed. Next rise when The Sauce
                hits 120 members. Seat count is live.
              </p>
              <a className="btn btn-lg btn-pill" href={JOIN} style={{ marginBottom: 28 }}>
                Lock in $99/mo
              </a>
            </div>

            <div className="ladder">
              <div className="ladder-head">The price ladder · live</div>
              <div className="ladder-row current">
                <span>$99/mo · Members until 120</span>
                <span className="status">{SEATS_LEFT} LEFT ← YOU</span>
              </div>
              <div className="ladder-row next">
                <span>Price rises · Members 120+</span>
                <span className="status">NEXT</span>
              </div>
              <div className="progress" aria-hidden>
                {Array.from({ length: 12 }).map((_, i) => (
                  <span
                    key={i}
                    className={
                      i < progressOn ? "on" : i === progressOn && progressPartial ? "partial" : ""
                    }
                  />
                ))}
              </div>
              <div className="progress-labels">
                <span>Member 1</span>
                <span>Member 120</span>
              </div>
            </div>

            <div className="ladder-cta">
              <div className="seats">
                {SEATS_LEFT} seats left at $99/mo. Then the price goes up.
              </div>
              <a className="btn btn-pill" href={JOIN}>
                Start free trial
              </a>
              <p className="fine">Seat count from live Sauce members. Never inflated.</p>
            </div>
          </div>
        </section>

        <section className="section" id="join">
          <div className="wrap">
            <div className="price">
              <div className="pill" style={{ marginBottom: 12 }}>
                <b>Price lock</b>
                <span>$99 until 120 members</span>
              </div>
              <div className="amt">
                $99<span style={{ fontSize: 28 }}>/mo</span>
              </div>
              <p className="lead" style={{ marginTop: 8, marginBottom: 0 }}>
                Start with a free trial on Skool. Then $99/mo. Price goes up when The
                Sauce hits 120 members. Grow community and MRR with ads. Without a
                single sales call.
              </p>
              <a
                className="btn btn-pill"
                href={JOIN}
                style={{ width: "min(100%, 360px)", marginTop: 8 }}
              >
                Start free trial
              </a>
              <p className="fine">Opens Skool for The Sauce</p>
            </div>
          </div>
        </section>

        <section className="section faq-sec">
          <div className="wrap faq">
            <h2 style={{ textAlign: "center" }}>FAQ</h2>
            <details open>
              <summary>Is this only for Skool?</summary>
              <p>Yes. The Sauce is built for Skoolers running paid communities.</p>
            </details>
            <details>
              <summary>Can I start free?</summary>
              <p>
                Yes. Start with a free trial on Skool, then continue at $99 a month if
                it is a fit.
              </p>
            </details>
            <details>
              <summary>When does the price go up?</summary>
              <p>
                $99 a month locks until The Sauce hits 120 members. After that the
                price increases for new joins. Stay subscribed and you keep your locked
                rate.
              </p>
            </details>
            <details>
              <summary>Do I need to hop on sales calls?</summary>
              <p>
                No. The point is growing with ads and a converting About page, without
                a sales call calendar.
              </p>
            </details>
            <details>
              <summary>What if my community is under $297/mo?</summary>
              <p>
                That is exactly who this is for. If you run a paid community on Skool
                priced under $297 a month, you are the ICP.
              </p>
            </details>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          {"The Sauce" + DOT + "For Skoolers" + DOT + "Support@JoinTheSauce.com"}
        </div>
      </footer>

      <div className="sticky">
        <div className="wrap sticky-inner">
          <div className="sticky-copy">
            <div className="sticky-kicker">{SEATS_LEFT} seats left at $99</div>
            <div className="sticky-sub">Grow with ads. Start free on Skool. No sales calls.</div>
          </div>
          <a className="btn btn-pill" href={JOIN}>
            Start free trial
          </a>
        </div>
      </div>
    </>
  );
}
