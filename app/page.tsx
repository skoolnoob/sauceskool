import { JoinLink } from "@/components/join-link";

const LOGO_DATA_URI =
  "data:image/png;base64,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WfMxp+o+40zLenZSLcxdh0CzchxmV9aUUq2O41ztrQfJzMJfF/+25nf2lFNOOfvNN99c2Nra2p77xrajlGU5SrmLUnfrfHZcHUcp21aO43QCiVLKSiQS//P73/9+mv99y5Yte56Z2b1TKeU4eS7bHWilHHfA2GFmi5m5qanpjSlTpozyhevll1/+z1QqZWcF2XFcNMv7XKfzue4zbRcA7dR111333d/97nd319TU7OwKbtnPqO7rKOffLoAox/Hu61wcjvNqe3v7LA8IxKJFi4zx48cH8oZ35xCir7zyyn11dXVN3YTbsR31VXOhHPdtugigUsqybfvpTCYzxTMbJTOTv+C+/PLL57xbrd7nxb3yzUt7e/vrADBr1izD78fQoUNPXLhw4dMtLS0dOQCnLMtW3jrp3oe8YOM4yrHtrgCtlPrntm3bpgPAihUrAt7G9jN/2N1R2s0rpx/MfI3HH5j55GTkyJGnPPHEEw81NTVt7vI+jq2VY3VfJ5xvfpRj99hwlFKvewf/wgMCkTs//9aWW43loosu+ua7777755qamnXJZNLKN0tKaVaKfQWgR7Ntu9ayrKfa29uPyPkOSUS4/PLLp2zbtm353mzlSqm1zz333GH+juqDwl133XXFzp07d+7lMzOffPLJfP89DzzwwNNeffXVO2tra1em0+n0rtdq/uY4Tl0mk3mxubn5NP+5ixYtMvxJnjdvnugNFHLn4rTTTjt62bJl/1VTU7Mu010N2603YXYcZ5tlWU/7oAQAV111VfbYp3nz5olp06aZ55577inbt2/fuDdj6DjO6hUrVoyfNWuW4S/g3H786Ec/Or26uvrhpqam+vxzwMq2HWVZjrYsR9u2k3dtKaU6HMd5LZ1Of6v7ePk/165d+wzvffsbM0fnzJkj881Pbp+mTp16zNKlS39SX1//YTwe79gFnuneZkgp1aaUej2ZTJ4za9Ysw/sOwweCXQHCPkeJefPmiV/84hdaeUTRpEmTKu+8884JjuN8Z9CgQaMqKioGFBcXFxmGESOisJerbQOI27bdbllWdSaTWWdZ1rKampp/zZgxY533XOO2225zmBnz5s0Tt956qz744IOn3njjjReNHz9+bEFBQbFvpBIRSykd0zTtYDCYMU3TCgQCCkArM3+2adOmhaNHj97hP8cHBiLiU0455aCLLrrolJEjR44KhUKjAoGA4SG7FkIo/5mGYdiGYWghhBWPx7d9/PHHS44//vgFCxYskN/5zneUyqmvcPfdd8+ZNm3azNLS0imlpaWVhYWFRYFAICqECJPrS7KVUnGlVEsmk6nPZDKbUqnU0nXr1r19wgknfA64CWTTpk3DxRdf7HSPBVm4cKERDod56dKl9lfNxdVXX33cyJEjj6ysrBwfi8XKi4uLC03TLBBCRDwSKsPMHZlMps2yrBrLstZ3dHR8+uWXXy4+66yz1vi73sUXX6xnz55NixcvdroEejHj29/+9uxrr732lIqKimmhUKjQJxqFEJqIVCAQ6D4vbcy8rLW1dUF5efnO3Hnx58YwDPb7cf3110886qijvjV06NCpsVhsTEVFRUkwGCwKBAKR7uvRcRybmVsty6pNpVLrUqnU8qampkVTp0593/eUVVVV0f333589MWXSpEnRL774IvHkk0/eOmHChBlFRUWVyJ436aasG4bhBAIB2zRNKxgMWoZhKCKqEUK8B2ABEaUWLFgg//u//1sAQPe58QU0l4S95557jhoyZMhpgwcPHtevX7/BxcXFZcFgMCaEiHoeAltrndJat1mW1WBZ1oZ4PP7Zzp07Fx9xxBEfeP2RCxYsQD4CMd+5DPTv5BXcEOOuXMb48eOnT58+fejo0aMLYrGYjEQi6UwmQ1rrhtWrVzc+8MADn+be/9BDD5nV1dW0atUqtXDhQtV98X0ND4n069zlqnO9FeXY3T7nvpMbFNO1/0OGDBk+Y8aMcSNGjCju169f0DAMEQwGE42NjS1r1qyp/utf//pFN6E2BgwYQNXV1Wr+/Pmcx1RjrTXNnj1b5gpnnsVHuRFq3rscMHPmzPEHHHBASb9+/YLBYBBSyo6mpqbmJUuW1L/44otfdJ8LD5wcH4xyBTcXWL/GhmLceuutTm+bzfz586n7+YRz5sw5a9y4cWVTpkxJFxQUVCSTyVIhRCYajVZXV1e3tbW1Nb333nurn3766ep847pq1SrKXVt9sb78cWDmXc5NjsbA3cftjDPOOHPKlCnR0tLS0ODBg5vr6+sjQojWtWvXNr///vs7Pvjgg605YyCPPfZY0ds66Q0Q/jfMCGJmIaXc7aAPL5b9K+0eN25h95/rmwe7eq5fJVcIsUf96+3+XJWtr/u/l3NBezMXexKw449hX87Lnoz5VwD2bo9rZ2GV3TeZ96Qfvc3P7n7nnvbnf8Vk2J1OCyHYPc9RUT6f3t4gWS6b6+1e/HURcneeKYTgPdlJ/P57fm7Kt9v/u5C8t3fx36MvdpV9MS/dn3/bbbdpfz35Bwf5zVtjX+t7uvdhX/Tjq+Rk4cKFYs6cOfp/Y53sb/vb/ra/7W/72/72f639P/Y2GbPBzbAJAAAAAElFTkSuQmCC";
const JOIN = "https://www.skool.com/sauce?ref=sauceskool";
const MEMBERS_NOW = 79;
const PRICE_CAP = 90;
const SEATS_LEFT = PRICE_CAP - MEMBERS_NOW;
const MEMBER_FILL = (MEMBERS_NOW / PRICE_CAP) * 100 + "%";
const YOU_ALIGN =
 MEMBERS_NOW / PRICE_CAP > 0.82 ? "end" : MEMBERS_NOW / PRICE_CAP < 0.18 ? "start" : "center";
const CHECK = "\u2713";
const CROSS = "\u2715";
const DOT = " \u2022 ";
const avatars = [
 { initials: "AF", name: "Aaron Ferrell", tone: "b0" },
 { initials: "TA", name: "Tim Atyeo", tone: "b1" },
 { initials: "RB", name: "Dr. Russell Beach", tone: "b2" },
 { initials: "RD", name: "Richard Dale", tone: "b3" },
 { initials: "RG", name: "Richard Griffin", tone: "b0" },
];
const gameChangers = [
 {
 title: "Traffic Playbooks",
 body: "Meta ads into a Skool. YouTube and affiliates use the same playbooks. No sales call",
 },
 {
 title: "Meta Ad Formats",
 body: "Formats that match how paid communities actually buy from an ad",
 },
 {
 title: "Creative Toolkit",
 body: "Ad creative, bait, and hooks you can run this week",
 },
 {
 title: "About pages that convert",
 body: "Where the click lands. Paid About target 2% to 4%. Hold 7 days. Read the data",
 },
 {
 title: "One Sentence Promise",
 body: "The line cold traffic reads first. Who you help, the outcome, and what they never do again",
 },
 {
 title: "No Zoom sales theater",
 body: "#FvckSalesCalls. Ads and a converting About do the close",
 },
 {
 title: "Trial and onboarding",
 body: "After the click. First week systems that reinforce the join and create a quick win",
 },
 {
 title: "Weekly members call",
 body: "One call a week. Compact. Built for operators running ads",
 },
 {
 title: "1 on 1 Game Plan Call",
 body: "A clear next move for your ads and About, not another fluff course",
 },
 {
 title: "Client community playbook",
 body: "Same ad and About systems behind rooms we have worked with at scale",
 },
 {
 title: "Community Secrets classroom",
 body: "Supporting classroom once your ads and About are in motion",
 },
 {
 title: "Join at $99/mo",
 body: "Start paid on Skool. Your rate locks until The Sauce hits 90 members",
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
 "You run a paid Skool under $297 a month and want ads that grow members and MRR",
 "You will run the Meta tests, creative, and traffic playbooks yourself",
 "You want cold traffic hitting an About that converts, not a sales call calendar",
 "You want one compact call a week with operators who ship ads",
];
const notForYou = [
 "You have never opened a Skool and want passive income promises",
 "You want someone else to run your ads while you collect courses",
 "You need a high ticket sales call calendar to feel like the business is real",
];
const insideLessons = [
 {
 src: "/inside/01-one-sentence-promise.png",
 title: "About Page That Converts",
 context:
 "Send paid traffic to an About that converts. Cold visitors should know exactly what you sell.",
 width: 1504,
 height: 962,
 },
 {
 src: "/inside/02-onboarding-playbook.png",
 title: "The Onboarding Playbook",
 context:
 "After the ad clicks. A simple path from join to first win so paid traffic stays and pays.",
 width: 1494,
 height: 962,
 },
 {
 src: "/inside/03-7-day-yes-machine.png",
 title: "The 7 Day YES Machine",
 context:
 "A 7 day system that gets more yeses from your ads, without a sales call.",
 width: 1486,
 height: 952,
 },
 {
 src: "/inside/04-creating-your-bait.png",
 title: "Creating Your Bait (for Ads)",
 context:
 "Build the creative bait your Meta ads run so the right Skoolers click.",
 width: 1474,
 height: 948,
 },
 {
 src: "/inside/05-thumb-stopping-headlines.png",
 title: "Thumb Stopping Headlines (Hooks)",
 context:
 "Write hooks that stop the scroll so your paid ads actually get watched.",
 width: 1478,
 height: 940,
 },
];
const faqs = [
 {
 q: "How much does it cost to join The Sauce?",
 a: `The Sauce costs $99/mo until it reaches ${PRICE_CAP} members. ${MEMBERS_NOW} members are in now, so ${SEATS_LEFT} seats are left at $99/mo. After ${PRICE_CAP} members the price goes up for new joins, and members who stay subscribed keep the $99/mo rate.`,
 },
 {
 q: "How do I run Meta ads for a Skool community?",
 a: "Run Meta ads into a Skool About page that converts cold traffic. The Sauce includes traffic playbooks, Meta creative, hooks, and ad formats for paid Skool communities. YouTube and affiliates use the same playbooks, and there is no sales call.",
 },
 {
 q: "What is a Skool About page that converts?",
 a: "A Skool About page is the page a Meta ad click lands on. The paid About target is 2% to 4%, held for 7 days. The first line states who you help, the outcome, and what they never do again.",
 },
 {
 q: "How do I grow Skool MRR without sales calls?",
 a: "Grow Skool MRR with Meta ads, traffic playbooks, and an About page that converts. The Sauce does not use a sales call calendar. Ads and a converting About do the close, and members meet on one call a week.",
 },
 {
 q: "Is The Sauce for a Skool community under $297 a month?",
 a: "Yes, The Sauce is only for a paid Skool under $297 a month. You run the Meta tests, creative, and traffic playbooks yourself. Cold traffic hits an About that converts, not a sales call calendar.",
 },
 {
 q: "How do I join The Sauce?",
 a: `Join The Sauce on Skool at $99/mo. Your rate locks until The Sauce reaches ${PRICE_CAP} members. That join opens the Skool room for The Sauce.`,
 },
];
const faqJsonLd = {
 "@context": "https://schema.org",
 "@type": "FAQPage",
 mainEntity: faqs.map((item) => ({
 "@type": "Question",
 name: item.q,
 acceptedAnswer: { "@type": "Answer", text: item.a },
 })),
};
export default function Home() {
 return (
 <><div className="announce">
 {"$99/mo until 90 members" +
 DOT +
 SEATS_LEFT +
 " seats left at this price" +
 DOT +
 "Join The Sauce"}
 </div><main><section className="hero"><div className="wrap"><div className="skoolers-brand"><img
 className="skoolers-logo"
 src={LOGO_DATA_URI}
 alt="for skoolers"
 width={260}
 height={73}
 /></div><h1>
 Run profitable ads to your Skool
 </h1> <p className="sub">
 Grow MRR without a single sales call. Traffic playbooks, Meta ads, and an About that converts
 cold traffic. Especially if you run a paid community on Skool{" "}
 <span className="accent">under $297</span> a month.
 </p><div className="hero-cta"><JoinLink className="btn btn-pill" href={JOIN}>
 Start at $99/mo
 </JoinLink><a className="btn ghost" href="#ladder">
 See the price ladder
 </a></div><p className="fine">
 {"Join at $99/mo until 90 members" +
 DOT +
 "Built for Skoolers"}
 </p><div className="joined-row"><div className="avatars" aria-hidden>
 {avatars.map((a) => (
 <span
 key={a.name}
 className={"avatar avatar-" + a.tone}
 title={a.name}
 >
 {a.initials}
 </span>
 ))}
 </div><div className="joined-copy"><strong>Skoolers already in</strong><span>
 {MEMBERS_NOW} members
 {DOT}
 {SEATS_LEFT} seats left at $99
 </span></div></div></div></section><section className="featured" id="proof"><div className="wrap"><p className="featured-kicker">See the ad system</p><h2 className="featured-title">
 Ads. About. Traffic.
 </h2><div className="featured-strip"><div className="feat-step"><div className="num">1</div><div><strong>Run Meta ads that earn the click</strong><p>Creative bait, hooks, and formats built for paid Skool communities.</p></div></div><div className="feat-step"><div className="num">2</div><div><strong>Land them on an About that converts</strong><p>Cold traffic hits one clear promise. Paid About target is 2% to 4%. Hold 7 days and read the data.</p></div></div><div className="feat-step"><div className="num">3</div><div><strong>Scale it with traffic playbooks</strong><p>The system that turns those ads into MRR. No sales call required.</p></div></div></div><div className="featured-cta"><JoinLink className="btn btn-pill" href={JOIN}>
 Start at $99/mo
 </JoinLink></div></div></section><section className="section" id="cases"><div className="wrap"><div className="cases-head"><h2>Case Studies</h2><span className="script">& client wins</span></div><p className="lead">
 Communities we have worked with. Same ads and About system you get inside The Sauce.
 </p><div className="cases-grid">
 {cases.map((c, i) => (
 <article className={"case-card case-b" + (i % 4)} key={c.title}><div><div className="proj">{c.proj}</div><h3>{c.title}</h3><p className="owner">{c.owner}</p></div><div className="metric">{c.metric}</div></article>
 ))}
 </div></div></section><section className="section" id="ladder"><div className="wrap ladder-wrap"><div className="price-rise"><div className="mini-pill">The price only goes up</div><h2>Lock $99 before we hit 90 members.</h2><p className="subline">
 Locked in for as long as you stay subscribed. Next rise when The Sauce hits 90 members. Seat
 count is live.
 </p></div><div className="seats-callout"><div className="seats-callout-num">{SEATS_LEFT}</div><div className="seats-callout-side"><div className="seats-callout-price">$99<span>/mo</span></div><div className="seats-callout-line">seats left at this price</div></div></div><div className="ladder"><div className="ladder-head">The price ladder · live</div><div className="ladder-row current"><span className="ladder-tier">$99/mo · Members until {PRICE_CAP}</span></div><div className="ladder-row next"><span>Price rises · Members {PRICE_CAP}+</span><span className="status">NEXT</span></div><div className="ladder-meter">
 <div className={"you-marker you-marker-" + YOU_ALIGN} style={{ left: MEMBER_FILL }}>
 <span className="you-callout">{SEATS_LEFT} LEFT ← YOU</span>
 <span className="you-caret" aria-hidden="true" />
 </div>
 <div
 className="progress"
 role="meter"
 aria-valuemin={1}
 aria-valuemax={PRICE_CAP}
 aria-valuenow={MEMBERS_NOW}
 aria-label={MEMBERS_NOW + " of " + PRICE_CAP + " members"}
 >
 <div className="progress-fill" style={{ width: MEMBER_FILL }} />
 <div
 className="progress-ticks"
 aria-hidden="true"
 style={{
 backgroundImage:
 "repeating-linear-gradient(90deg, transparent 0, transparent calc(100% / " +
 PRICE_CAP +
 " - 1px), #2A312A calc(100% / " +
 PRICE_CAP +
 " - 1px), #2A312A calc(100% / " +
 PRICE_CAP +
 "))",
 }}
 />
 </div>
 <div className="progress-labels"><span>Member 1</span><span>Member {PRICE_CAP}</span></div>
</div></div><div className="ladder-cta"><div className="seats">
 {SEATS_LEFT} seats left at $99/mo. Then the price goes up.
 </div><div className="ladder-actions"><JoinLink className="btn btn-lg btn-pill" href={JOIN}>
 Lock in $99/mo
 </JoinLink><JoinLink className="btn btn-pill" href={JOIN}>
 Start at $99/mo
 </JoinLink></div><p className="fine">Seat count from live Sauce members. Never inflated.</p></div></div></section><section className="numbers-band" id="numbers"><div className="wrap"><div className="tag">[ By the numbers ]</div><h2>Results that compound.</h2><div className="numbers-grid"><div className="stat-card stat-b0"><div className="v">$1M+</div><div className="l">Combined community MRR worked with</div></div><div className="stat-card stat-b1"><div className="v">40+</div><div className="l">Skool Games winners</div></div><div className="stat-card stat-b2"><div className="v">Ambassadors</div><div className="l">Official Skool ambassadors</div></div><div className="stat-card stat-b3"><div className="v">Investors</div><div className="l">Skool investors</div></div></div></div></section><section className="section" id="join-inside"><div className="wrap inside-wrap"><p className="featured-kicker">Traffic playbooks</p><h2>What you run the week you join</h2><p className="lead">Meta creative, hooks, and an About that converts the traffic you pay for.</p><div className="inside-grid">
 {insideLessons.map((lesson) => (
 <article className="inside-card" key={lesson.src}><div className="inside-shot"><img
 src={lesson.src}
 alt={lesson.title}
 width={lesson.width}
 height={lesson.height}
 loading="lazy"
 /></div><div className="inside-body"><h3>{lesson.title}</h3><p>{lesson.context}</p></div></article>
 ))}
 </div><div className="featured-cta"><JoinLink className="btn btn-pill" href={JOIN}>
 Start at $99/mo
 </JoinLink></div></div></section><section className="section" id="inside"><div className="wrap"><div className="game-script">Absolute Game Changer!</div><p className="lead">Traffic playbooks, Meta ads, creative, and an About that converts. Paid Skool growth without sales calls.</p><div className="check-grid">
 {gameChangers.map((g) => (
 <div className="check-item" key={g.title}><div className="check-box" aria-hidden>
 {CHECK}
 </div><div><strong>{g.title}</strong><span>{g.body}</span></div></div>
 ))}
 </div></div></section><section className="section" id="fit"><div className="wrap"><div className="price-rise" style={{ paddingTop: 0 }}><div className="mini-pill">Who this is for</div><h2>Know if The Sauce fits you</h2><p className="subline">
 Built for operators who will run ad tests into a converting About and grow MRR without sales
 calls.
 </p></div><div className="fit-grid"><div className="fit-card yes"><h3><span className="fit-mark">{CHECK}</span> This is for you if
 </h3><ul>
 {forYou.map((t) => (
 <li key={t}><span className="fit-mark">{CHECK}</span><span>{t}</span></li>
 ))}
 </ul></div><div className="fit-card no"><h3><span className="fit-mark">{CROSS}</span> It is NOT for you if
 </h3><ul>
 {notForYou.map((t) => (
 <li key={t}><span className="fit-mark">{CROSS}</span><span>{t}</span></li>
 ))}
 </ul></div></div><p className="fit-foot">This is for people who will actually run the ads.</p></div></section><section className="section"><div className="wrap"><h2>What members say</h2><p className="lead">Real Skool reviews. No invented quotes.</p><div className="quotes">
 {quotes.map((q) => (
 <div className="quote" key={q.who}><p>“{q.body}”</p><div className="who">{q.who}</div><div className="meta">{q.meta}</div></div>
 ))}
 </div></div></section><section className="section" id="join"><div className="wrap"><div className="price"><div className="pill" style={{ marginBottom: 12 }}><b>Price lock</b><span>$99 until 90 members</span></div><div className="amt">
 $99<span style={{ fontSize: 28 }}>/mo</span></div><p className="lead" style={{ marginTop: 8, marginBottom: 0 }}>
 Join The Sauce at $99/mo. Price goes up when The Sauce hits 90 members.
 Run profitable Meta ads into an About that converts. Grow MRR without a single sales call.
 </p><JoinLink className="btn btn-pill" href={JOIN} style={{ width: "min(100%, 360px)", marginTop: 8 }}>
 Start at $99/mo
 </JoinLink><p className="fine">Opens Skool for The Sauce</p></div></div></section><section className="section faq-sec" id="faq"><div className="wrap faq"><h2 style={{ textAlign: "center" }}>FAQ</h2><script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
 />
 {faqs.map((item, i) => (
 <details key={item.q} open={i === 0}>
 <summary><h3>{item.q}</h3></summary>
 <p>{item.a}</p>
 </details>
 ))}
 </div></section></main><footer className="footer"><div className="wrap">
 {"The Sauce" + DOT + "For Skoolers" + DOT + "Support@JoinTheSauce.com"}
 </div></footer><div className="sticky"><div className="wrap sticky-inner"><div className="sticky-copy"><div className="sticky-kicker">{SEATS_LEFT} seats left at $99</div><div className="sticky-sub">Meta ads into an About that converts.</div></div><JoinLink className="btn btn-pill" href={JOIN}>
 Start at $99/mo
 </JoinLink></div></div></>
 );
}
