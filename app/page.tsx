const JOIN = "https://www.skool.com/sauce?ref=sauceskool";

const MEMBERS_NOW = 102;
const PRICE_CAP = 120;
const SEATS_LEFT = PRICE_CAP - MEMBERS_NOW;

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
  },
  {
    proj: "Project 02",
    title: "AI SEO Rainmakers",
    owner: "Charles Floate",
    metric: "$75k MRR",
  },
  {
    proj: "Project 03",
    title: "Claude Club",
    owner: "Samin Yasar",
    metric: "$27k MRR",
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
        {"🔥 $99/mo until 120 members" +
          DOT +
          SEATS_LEFT +
          " seats left at this price" +
          DOT +
          "Start free on Skool"}
      </div>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="brand">
            <span className="dot">S</span>
            The Sauce
          </div>
          <a className="btn" href={JOIN}>
            👉 Start free trial
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap">
            <img
              className="skoolers-logo"
              src="/for-skoolers-logo.jpg"
              alt="for skoolers"
              width={360}
              height={100}
            />
            <h1>
              If you run a paid community on Skool priced{" "}
              <span className="accent">under $297</span> a month, this is for you.
            </h1>
            <p className="sub">
              RAPIDLY grow your Community and MRR with free trial traffic and Ads. Without a single sales call.
            </p>
            <div className="hero-cta">
              <a className="btn" href={JOIN}>
                👉 Start your free trial
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

            <div className="icon-row">
              <div className="chip">
                <span className="emo">🧪</span> Free trial
              </div>
              <div className="chip">
                <span className="emo">🚫📞</span> No sales calls
              </div>
              <div className="chip">
                <span className="emo">🏫</span> Skool native
              </div>
            </div>

            <div className="proof-row">
              <div className="proof">
                <span className="emo">🎁</span>
                <strong>Free trial</strong>
                <span>Try The Sauce before you pay</span>
              </div>
              <div className="proof">
                <span className="emo">📈</span>
                <strong>No sales calls</strong>
                <span>Ads to an About page that converts</span>
              </div>
              <div className="proof">
                <span className="emo">🧩</span>
                <strong>Skool native</strong>
                <span>Offer. Trial. About. Traffic.</span>
              </div>
            </div>

            <div className="grid-2">
              <div className="card">
                <h3>The model</h3>
                <p className="lead" style={{ marginBottom: 0 }}>
                  Stop stacking more content and more calls. Dial a clear One Sentence Promise, fix your About
                  page, then run free organic and paid ads into it. That is how Saucers grow paid members without
                  living on Zoom.
                </p>
              </div>
              <div className="card">
                <h3>Who this is for</h3>
                <p className="lead" style={{ marginBottom: 0 }}>
                  Skool community owners running paid rooms under $297 a month who want members and MRR, not
                  another fluff course or a calendar full of sales calls.
                </p>
              </div>
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
                <article className="case-card" key={c.title}>
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
              <div className="stat-card">
                <div className="v">$1M+</div>
                <div className="l">Combined community MRR worked with</div>
              </div>
              <div className="stat-card">
                <div className="v">40+</div>
                <div className="l">Skool Games winners</div>
              </div>
              <div className="stat-card">
                <div className="v">Ambassadors</div>
                <div className="l">Official Skool ambassadors</div>
              </div>
              <div className="stat-card">
                <div className="v">Investors</div>
                <div className="l">Skool investors</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="inside">
          <div className="wrap">
            <div className="guarantee">
              <div className="guarantee-seal">
                FREE
                <br />
                TRIAL
                <br />
                ON SKOOL
              </div>
              <div>
                <h3>Free trial. Start before you pay.</h3>
                <p>
                  No sales call to get in. Open The Sauce on Skool, try the classroom and calls, then stay at
                  $99/mo if it is a fit.
                </p>
              </div>
            </div>

            <div className="game-script">Absolute Game Changer!</div>
            <p className="lead">Everything inside The Sauce for paid Skool growth without sales calls.</p>
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

        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <h2>How it works</h2>
            <p className="lead">Three moves. Then traffic. Including free trial conversion.</p>
            <div className="steps">
              <div className="step">
                <div className="num">1</div>
                <div>
                  <strong>Lock your One Sentence Promise</strong>
                  <p className="lead" style={{ margin: "6px 0 0" }}>
                    Who you help, the outcome, the timeframe, and what they avoid.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="num">2</div>
                <div>
                  <strong>Build an About page that converts</strong>
                  <p className="lead" style={{ margin: "6px 0 0" }}>
                    Paid About target is 2% to 4%. Hold changes for 7 days and read the data.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="num">3</div>
                <div>
                  <strong>Run free organic and paid ads into it</strong>
                  <p className="lead" style={{ margin: "6px 0 0" }}>
                    Meta formats, traffic playbooks, and creative tools made for Skoolers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="fit">
          <div className="wrap">
            <div className="price-rise" style={{ paddingTop: 0 }}>
              <div className="mini-pill">Who this is for</div>
              <h2>Know if The Sauce fits you</h2>
              <p className="subline">
                Built for Skool operators who want a clear offer, a converting About, and traffic without sales
                call theater.
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
                      <span className="fit-mark">−</span>
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
                Locked in for as long as you stay subscribed. Next rise when The Sauce hits 120 members. Seat
                count is live.
              </p>
              <a className="btn btn-lg" href={JOIN} style={{ marginBottom: 28 }}>
                👉 Lock in $99/mo
              </a>
            </div>

            <div className="ladder">
              <div className="ladder-head">The price ladder · live</div>
              <div className="ladder-row current">
                <span>$99/mo · Members until 120</span>
                <span className="status">
                  {SEATS_LEFT} LEFT ← YOU
                </span>
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
              <a className="btn" href={JOIN}>
                👉 Start free trial
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
                Start with a free trial on Skool. Then $99/mo. Price goes up when The Sauce hits 120 members.
                Grow community and MRR with ads. Without a single sales call.
              </p>
              <a className="btn" href={JOIN} style={{ width: "min(100%, 360px)", marginTop: 8 }}>
                👉 Start your free trial
              </a>
              <p className="fine">Opens Skool for The Sauce</p>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 10 }}>
          <div className="wrap faq">
            <h2 style={{ textAlign: "center" }}>FAQ</h2>
            <details open>
              <summary>Is this only for Skool?</summary>
              <p>Yes. The Sauce is built for Skoolers running paid communities.</p>
            </details>
            <details>
              <summary>Can I start free?</summary>
              <p>Yes. Start with a free trial on Skool, then continue at $99 a month if it is a fit.</p>
            </details>
            <details>
              <summary>When does the price go up?</summary>
              <p>
                $99 a month locks until The Sauce hits 120 members. After that the price increases for new
                joins. Stay subscribed and you keep your locked rate.
              </p>
            </details>
            <details>
              <summary>Do I need to hop on sales calls?</summary>
              <p>
                No. The point is growing with ads and a converting About page, without a sales call calendar.
              </p>
            </details>
            <details>
              <summary>What if my community is under $297/mo?</summary>
              <p>
                That is exactly who this is for. If you run a paid community on Skool priced under $297 a month,
                you are the ICP.
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
          <a className="btn" href={JOIN}>
            👉 Start free trial
          </a>
        </div>
      </div>
    </>
  );
}
