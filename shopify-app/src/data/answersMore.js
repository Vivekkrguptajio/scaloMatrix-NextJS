// Longer "in detail" sections for the highest-value questions, keyed by the exact question text.
// Each entry is a list of { h: heading, p: paragraph } blocks shown under the short answer on /answers/<question>.
// General guidance only: no prices, dates or results that change or that nobody can promise.

export const more = {
  'How much does a Shopify store cost in India?': [
    { h: 'The three parts of the cost', p: 'First, the Shopify plan itself, which is a recurring fee that depends on the plan you choose. Second, the design and development work to build or customise the store. Third, the apps, themes and tools you add on top. Looking at only one of the three gives a misleading total.' },
    { h: 'What drives the development cost', p: 'Scope is the main factor: the number of pages, how custom the design is, how many products need setting up, and which integrations you need, such as payments, shipping, reviews or a loyalty tool. A theme-based store needs far less work than a custom-coded theme designed around your brand.' },
    { h: 'How to compare quotes properly', p: 'Ask every agency for a written scope that lists pages, deliverables, revisions, timelines and what happens if scope changes. A low quote that leaves out product setup, mobile design, speed work or revisions can end up costing more than a clear, complete one.' },
    { h: 'Costs people forget', p: 'Photography and copywriting, premium apps with monthly fees, a domain, ongoing maintenance, and the time you will spend giving feedback. Budget for these early so launch day is not delayed.' },
  ],
  'Shopify vs WooCommerce: which is better for an Indian store?': [
    { h: 'Where Shopify is stronger', p: 'Shopify is a hosted platform, so hosting, security, updates and checkout reliability are handled for you. Launching is faster, the checkout is well tested, and you get a large library of apps. For most D2C brands the biggest benefit is that the team can focus on selling instead of server and plugin problems.' },
    { h: 'Where WooCommerce is stronger', p: 'WooCommerce runs on WordPress, so you control everything: hosting, code and data. It suits teams with in-house developers or unusual requirements, and it can be cheaper in licence cost. The trade-off is that you are responsible for speed, security, backups and plugin conflicts.' },
    { h: 'How to decide', p: 'Pick Shopify if you want to launch quickly, run paid ads and scale with little technical upkeep. Pick WooCommerce if you need deep custom control and have the people to maintain it. If you already have a WooCommerce store that works, moving only makes sense when maintenance or speed is holding the business back.' },
  ],
  'How long does it take to build a Shopify store?': [
    { h: 'What sets the timeline', p: 'Most of the time is not coding. It is content and decisions: product photos, descriptions, policies, brand assets and approvals. A store with everything ready can move far faster than one where each step waits for material or feedback.' },
    { h: 'Typical stages', p: 'Planning and scope, design in rounds, development and product setup, payments and shipping, testing on real phones, and launch. A theme-based store compresses these stages. A custom design or build gives each stage more room and needs more review rounds.' },
    { h: 'How to avoid delays', p: 'Agree scope and the number of revision rounds in writing, send content early, name one person who gives feedback, and test the order flow before launch. These simple habits do more for the timeline than any tool.' },
  ],
  'Why is my Shopify store slow?': [
    { h: 'The usual causes', p: 'Large, unoptimised images, too many apps that each load their own scripts, heavy autoplay videos or animations, and third-party tags such as chat widgets and trackers. Each one adds weight or delays the first paint.' },
    { h: 'How to find the real cause', p: 'Test the homepage, a collection page and a product page on a real phone and a slow connection. Use a speed tool to see which scripts and images take the longest. Then remove or replace one thing at a time and re-test, so you know what actually helped.' },
    { h: 'What usually fixes it', p: 'Resize and compress images, remove apps you no longer use (and clean up leftover code), load videos only when needed, and defer non-essential scripts. A lighter, well-built theme matters too, because a heavy theme slows every page.' },
  ],
  'How do I reduce RTO on COD orders?': [
    { h: 'Why RTO happens', p: 'Return-to-origin on cash-on-delivery orders usually comes from unconfirmed intent, wrong or incomplete addresses, buyers who change their mind, or delivery problems. Because the customer has not paid, there is little cost to refusing the parcel.' },
    { h: 'What helps', p: 'Confirm each COD order by phone or WhatsApp, verify addresses and pin codes, and offer a small incentive to pay online. Limit COD for very high-value orders or pin codes with high return rates, and keep delivery estimates honest so buyers are not surprised.' },
    { h: 'Measure before you change', p: 'Track RTO by pin code, product, order value and courier. Often a few segments cause most losses, and fixing those first is cheaper than restricting COD for everyone.' },
  ],
  'What is conversion rate optimisation (CRO)?': [
    { h: 'The idea', p: 'CRO means getting more of the visitors you already have to buy, instead of paying for more traffic. If your ads and organic traffic are working but too few visitors order, the leak is usually on the store, not in the campaign.' },
    { h: 'How it works in practice', p: 'You look at analytics, heatmaps and session recordings to see where people drop off, then change the page, message or step that stops them: a clearer homepage, better product pages, simpler checkout, stronger proof and faster loading on mobile.' },
    { h: 'What CRO is not', p: 'It is not changing button colours at random or running endless discounts. Good CRO starts from data and customer feedback, makes the right things clear (what you sell, why it is worth the price, why it is safe to buy), and tests changes where traffic allows.' },
  ],
  'What is a good conversion rate for a Shopify store?': [
    { h: 'Why one number does not work', p: 'Conversion rates vary by category, price point, traffic source, device and brand awareness. A low-priced impulse product converts differently from a high-ticket item, and returning visitors convert differently from cold ad traffic.' },
    { h: 'What to measure instead', p: 'Track your own conversion rate over time, split by device and traffic source, and watch the funnel steps: product views, add-to-cart, checkout started and purchase. The step with the biggest drop-off tells you where to work first.' },
    { h: 'Setting a realistic goal', p: 'Aim to improve your own baseline gradually. Compare against similar stores only as a rough guide, and be wary of any promise of a specific uplift, because results depend on your traffic, product, price and market.' },
  ],
  'How do I choose a Shopify agency?': [
    { h: 'Look at real work', p: 'Ask to see live Shopify stores the agency has built, and open them on your phone. Check speed, clarity and how easy it is to buy. A portfolio of live stores tells you more than a slide deck.' },
    { h: 'Ask how they measure results', p: 'A good partner can explain which numbers they look at (conversion rate, order value, speed) and how they decide what to change. Be cautious of anyone who guarantees a fixed increase in sales.' },
    { h: 'Get the commercial terms in writing', p: 'Scope, timeline, number of revisions, refunds, who owns the design and code after the project, and what support you get after launch. Clear terms protect both sides and show how the agency works.' },
    { h: 'Check the fit', p: 'The best agency for you is one that understands your category, communicates clearly and tells you honestly when something is not worth building.' },
  ],
  'Will I lose SEO when I move to Shopify?': [
    { h: 'It is a risk you can manage', p: 'A migration changes URLs, templates and sometimes content. Rankings drop mainly when old URLs break, page titles and descriptions are lost, or important pages are left out. A planned move avoids most of this.' },
    { h: 'What to do before switching', p: 'Crawl your current site and list every page that gets traffic or links. Map each old URL to its new Shopify address. Keep titles, descriptions, headings and body content for your important pages.' },
    { h: 'After launch', p: 'Set up 301 redirects, submit the new sitemap in Google Search Console, and watch impressions, clicks and errors for several weeks. Small, short-term movements can happen, so fix real problems quickly instead of reacting to every fluctuation.' },
  ],
  'How do I migrate from WooCommerce to Shopify?': [
    { h: 'Plan the move first', p: 'List what you need to bring over: products, variants, images, customers, orders, blog posts and URLs. Decide what to clean up now, such as old products and duplicate pages, rather than carrying everything across.' },
    { h: 'Move the data', p: 'Export from WooCommerce and import into Shopify, using Shopify’s tools, a migration app or a developer for large catalogues. Test a small batch first and check variants, prices, images and inventory.' },
    { h: 'Rebuild and protect search visibility', p: 'Design the new storefront, connect payments and shipping, and set up 301 redirects from every old URL. Test the whole order flow on a phone before you point the domain at Shopify, then monitor Search Console after launch.' },
  ],
  'Is Shopify good for SEO?': [
    { h: 'What Shopify gives you', p: 'A fast, reliable platform, clean URLs, an automatic sitemap, editable titles and descriptions, canonical tags and mobile-friendly themes. These remove many technical problems that hold other stores back.' },
    { h: 'What it does not do for you', p: 'Platform features do not write helpful content, build links or choose the right keywords. Rankings still depend on how useful your pages are, how well the site is structured, and how fast it loads.' },
    { h: 'Where to focus first', p: 'Write clear, original product and collection copy, give every important page one clear topic, keep speed in check, fix duplicate or thin pages, and build content that answers real customer questions. Then measure progress in Search Console.' },
  ],
  'How do I reduce cart abandonment on Shopify?': [
    { h: 'Find out why people leave', p: 'Common reasons are surprise costs at checkout, a long or confusing process, no preferred payment method, doubts about delivery and returns, and slow pages. Analytics and session recordings show which applies to your store.' },
    { h: 'Fix the checkout experience', p: 'Show shipping and total costs early, keep the number of steps low, offer the payment methods your customers use, and make delivery and returns clear. Add trust signals near the buy button and at checkout.' },
    { h: 'Win back some of the rest', p: 'Abandoned cart and checkout reminders by email, and by WhatsApp where permitted, can recover some orders. Treat them as a supplement to fixing the causes, not a replacement.' },
  ],
};
