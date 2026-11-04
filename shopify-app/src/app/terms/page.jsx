import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'The terms that govern every engagement with scaloMATRIX (Kraffic Enterprises): scope, fees and payment, ownership, liability and dispute resolution.',
  alternates: { canonical: '/terms' },
};

// Registered office. Add the full street address here once confirmed (shown in the Contact line at the end).
const REGISTERED_OFFICE = 'Dhanbad, Jharkhand, India';

const sections = [
  {
    title: 'Who we are',
    body: (
      <p>scaloMATRIX is a brand of <strong>Kraffic Enterprises</strong>, GSTIN 20GHGPD8892E1ZC, with its registered office at Dhanbad, Jharkhand, India (&ldquo;scaloMATRIX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). All services are provided and invoiced by Kraffic Enterprises. &ldquo;Client&rdquo; or &ldquo;you&rdquo; means the person or business that engages us.</p>
    ),
  },
  {
    title: 'Acceptance',
    body: (
      <>
        <p>2.1 These Terms apply to you when you do any of the following: accept a proposal or quote (in writing, by email or by WhatsApp), sign a project agreement, or pay any invoice or advance.</p>
        <p>2.2 If a signed project agreement or accepted proposal conflicts with these Terms, the agreement or proposal prevails for that point only. Everything else in these Terms still applies.</p>
        <p>2.3 If you accept on behalf of a company, you confirm you are authorised to bind it.</p>
        <p>2.4 We may update these Terms. The version published on the date you accepted your proposal applies to that engagement, unless both parties agree in writing to a later version.</p>
      </>
    ),
  },
  {
    title: 'Services and scope',
    body: (
      <>
        <p>3.1 We provide Shopify store design and development, landing pages, conversion rate optimisation, and related digital services, including marketplace and lead-generation work where agreed.</p>
        <p>3.2 The exact deliverables, timeline, fees and number of revisions for each engagement are set out in its proposal or project agreement (the &ldquo;Scope&rdquo;). Anything not listed in the Scope is out of scope.</p>
        <p>3.3 Out-of-scope requests are quoted separately in writing and start only after you approve the quote and pay for it. A WhatsApp or email approval is enough.</p>
        <p>3.4 Timelines start from the later of: receipt of the advance payment, or receipt of all content, assets and access we need from you.</p>
      </>
    ),
  },
  {
    title: 'Fees and payment',
    body: (
      <>
        <p>4.1 Fees are as stated in the proposal. GST is charged extra at the applicable rate. Third-party costs (Shopify plans, themes, apps, domains, ad spend, marketplace fees) are paid by you directly to those providers unless the proposal says otherwise.</p>
        <p>4.2 <strong>Projects</strong> are paid in stages. Unless the proposal says otherwise: 50% advance on acceptance, 40% when the work is shared for review on a staging or preview link, and 10% before go-live. Each stage starts only after the previous payment is received.</p>
        <p>4.3 <strong>Monthly retainers</strong> (including marketplace, marketing and maintenance work) are billed <strong>in advance</strong> at the start of each month. Work for a month starts only after that month&apos;s fee is received.</p>
        <p>4.4 Invoices are payable within 7 days of issue by bank transfer or UPI to the account on the invoice. You are responsible for any TDS deduction and must share the TDS certificate within the statutory time.</p>
        <p>4.5 Fees are for work performed and time reserved. They are not linked to sales, revenue, traffic, rankings, ad results or any other outcome, and cannot be withheld or reduced on those grounds.</p>
        <p>4.6 Fees cannot be withheld or set off against any claim you have against us. Any dispute about an invoice must be raised in writing within 7 days of receiving it, with reasons; otherwise the invoice is treated as accepted. Undisputed parts of an invoice must be paid on time.</p>
      </>
    ),
  },
  {
    title: 'Late payment',
    body: (
      <>
        <p>5.1 Kraffic Enterprises is a micro/small enterprise registered under the MSMED Act, 2006. Under sections 15 and 16 of that Act, payment is due within the agreed period and in no case later than 45 days. Unpaid amounts after that carry compound interest at three times the bank rate notified by the RBI, with monthly rests.</p>
        <p>5.2 We may recover overdue amounts through the MSME Samadhaan portal and the Micro and Small Enterprises Facilitation Council (MSEFC), in addition to any other remedy. You will bear reasonable costs of recovery, including legal notice and collection costs.</p>
        <p>5.3 If any payment is more than 7 days late, we may pause all work, withhold deliverables, credentials we created and handover, and suspend anything hosted on our own accounts, until everything due is paid. Timelines move by the length of the pause. A pause is not a breach by us.</p>
        <p>5.4 Raising a chargeback or payment dispute with your bank or payment provider for services already rendered is a breach of these Terms. We will contest it using our records, and the original amount plus costs remains payable.</p>
      </>
    ),
  },
  {
    title: 'Your responsibilities',
    body: (
      <>
        <p>6.1 You will provide accurate information, content, product data, images and approvals on time, and name one decision-maker for the engagement. Delays in your inputs move our timelines by the same number of days.</p>
        <p>6.2 You confirm you own or are licensed to use everything you give us (text, images, logos, product claims), and that your products and listings comply with applicable law, including licences such as FSSAI, BIS, drug or cosmetic rules, and platform policies.</p>
        <p>6.3 If you stop responding for 30 days, we may close the engagement. Work done up to that date is billed, and restarting needs a new timeline and may need a new quote.</p>
      </>
    ),
  },
  {
    title: 'Access to your accounts',
    body: (
      <>
        <p>7.1 You will give us the access we need (Shopify staff account, marketplace seller accounts, ad accounts, domain and app access). Your accounts remain yours. We will use access only for the agreed work.</p>
        <p>7.2 You may remove our access at any time. Removing access does not end the engagement by itself, does not cancel fees for work already done or for the notice period under section 15, and does not make unpaid invoices disputed. All work done up to the date access is removed is payable in full.</p>
        <p>7.3 We are not responsible for work we could not complete, or results that suffered, because access was removed, restricted or not provided.</p>
        <p>7.4 We do not keep your passwords after the engagement ends. You should change shared passwords and remove staff accounts once the engagement closes.</p>
      </>
    ),
  },
  {
    title: 'Approvals and acceptance',
    body: (
      <>
        <p>8.1 Each proposal states the included revision rounds. Further rounds are billed at our hourly rate stated in the proposal.</p>
        <p>8.2 A deliverable (design, page, store, listing, campaign, report) is treated as accepted if you do not send specific written objections within 7 days of receiving it, or if you use it live, whichever comes first.</p>
        <p>8.3 Monthly reports and work summaries are treated as accepted, including the work they record, if you raise no written objection within 7 days.</p>
      </>
    ),
  },
  {
    title: 'Communication and records',
    body: (
      <>
        <p>9.1 Email to the addresses each side uses for the engagement, and WhatsApp messages between the named contacts, count as written communication for these Terms, including approvals, quotes, objections and notices.</p>
        <p>9.2 Our records (task logs, messages, emails, files, platform activity logs and reports) will be treated as evidence of the work done, unless you show otherwise.</p>
        <p>9.3 Formal legal notices to us must be sent to <a href="mailto:info@krafficgroup.com">info@krafficgroup.com</a> and to our registered office.</p>
      </>
    ),
  },
  {
    title: 'Third-party platforms',
    body: (
      <>
        <p>10.1 Our work runs on platforms we do not control, such as Shopify, Amazon, Flipkart and other marketplaces, Meta, Google, payment gateways, apps and themes. Their features, limits, fees, policies, outages, suspensions and changes are outside our control.</p>
        <p>10.2 Where we tell you in writing that something is not possible or is limited on a platform (for example, checkout currency rules that depend on the platform&apos;s payment setup or your business entity), that limitation is not a defect in our work and is not a reason to withhold fees.</p>
        <p>10.3 We are not liable for account suspensions, listing removals, policy strikes or ad rejections, unless directly caused by our own instruction that broke that platform&apos;s published policy.</p>
      </>
    ),
  },
  {
    title: 'Contractors and introductions',
    body: (
      <>
        <p>11.1 We may use our team members and vetted contractors to deliver the Scope. Where we do, we remain responsible for that work.</p>
        <p>11.2 If, at your request, we <strong>introduce</strong> you to an independent freelancer or service provider and you agree terms, scope or fees with them directly, they are not our subcontractor. We are not responsible for their work, conduct or results, even if we collect or invoice their fees as a convenience. Any such collection is stated on the invoice.</p>
        <p>11.3 During the engagement and for 12 months after it ends, you will not directly hire or engage any person who worked on your account through us, without our written consent. If you do, you will pay us a placement fee equal to three months of the fees you paid for that person&apos;s work through us.</p>
      </>
    ),
  },
  {
    title: 'No guarantee of results',
    body: (
      <>
        <p>12.1 We use reasonable skill and care. We do not promise any specific sales, revenue, conversion rate, ROAS, ranking, traffic, follower count or other outcome. Results depend on factors we do not control, including your product, pricing, stock, reviews, ad budget, offers, competition, seasonality and platform algorithms.</p>
        <p>12.2 Any figures, case studies, estimates or projections we share, on our website, in proposals or in conversation, are illustrations based on past or typical work. They are not a promise of results for your business.</p>
      </>
    ),
  },
  {
    title: 'Ownership and handover',
    body: (
      <>
        <p>13.1 Until every invoice for an engagement is paid in full, all designs, code, copy, files and other work we create remain our property, and you receive only a limited, revocable right to review them.</p>
        <p>13.2 Once you have paid in full, ownership of the final deliverables made specifically for you passes to you. Handover (final files, theme code, transfer of any accounts we set up for you) happens only after full payment.</p>
        <p>13.3 We keep ownership of our pre-existing tools, code snippets, templates, frameworks and know-how used in the work, and grant you a permanent, non-exclusive licence to use them as part of your deliverables.</p>
        <p>13.4 Third-party items (themes, fonts, apps, stock images, plugins) stay under their owners&apos; licence terms. Licences bought in your name belong to you.</p>
      </>
    ),
  },
  {
    title: 'Portfolio',
    body: (
      <p>We may show the work, your store&apos;s public pages and your brand name in our portfolio, website and social media, but never your confidential information or business numbers. If you need us not to, tell us in writing before the engagement starts.</p>
    ),
  },
  {
    title: 'Ending an engagement',
    body: (
      <>
        <p>15.1 <strong>Monthly retainers:</strong> either party may end a retainer with 30 days&apos; written notice. The fee for the notice period is payable, and we continue the agreed work during it unless you tell us in writing to stop.</p>
        <p>15.2 <strong>Projects:</strong> you may cancel a project by written notice. You pay for all work done up to the cancellation date, at least the stage payment already due, and any third-party costs we committed on your behalf. Refunds are governed by our <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link>.</p>
        <p>15.3 We may end an engagement immediately by written notice if you fail to pay within 15 days of the due date, ask us to do something unlawful or against a platform&apos;s policy, or behave abusively towards our team.</p>
        <p>15.4 On any ending, all unpaid fees for work done become due immediately. Sections 4, 5, 7.2, 9, 12, 13 and 15 to 22 continue to apply after the engagement ends.</p>
      </>
    ),
  },
  {
    title: 'Confidentiality',
    body: (
      <p>Each party will keep the other&apos;s non-public business information confidential, use it only for the engagement, and not share it except with team members or advisers who need it, or where required by law. This lasts for two years after the engagement ends.</p>
    ),
  },
  {
    title: 'Fair conduct',
    body: (
      <p>Disagreements should be raised directly with us first. Each party agrees not to publish false or misleading statements about the other. This does not stop either party from stating honest facts, giving a genuine review, or pursuing its legal rights.</p>
    ),
  },
  {
    title: 'Indemnity',
    body: (
      <p>You will compensate us for any third-party claim, penalty or loss arising from content, materials or product claims you supplied, your products or business operations, your breach of law or platform policy, or your breach of these Terms.</p>
    ),
  },
  {
    title: 'Limitation of liability',
    body: (
      <>
        <p>19.1 We are not liable for any indirect or consequential loss, including loss of profit, sales, revenue, data, goodwill or opportunity.</p>
        <p>19.2 Our total liability for any engagement, for all claims combined, is limited to the fees you actually paid us for the specific service the claim relates to: for a project, its project fee; for a retainer, the fees paid in the three months before the claim arose.</p>
        <p>19.3 Nothing in these Terms limits liability that cannot be limited by law, such as liability for fraud.</p>
      </>
    ),
  },
  {
    title: 'Events outside our control',
    body: (
      <p>Neither party is liable for delay caused by events beyond its reasonable control, such as natural disasters, epidemics, government action, internet or platform outages, or power failures. Payment obligations for work already done are not suspended.</p>
    ),
  },
  {
    title: 'Governing law and disputes',
    body: (
      <>
        <p>21.1 These Terms are governed by the laws of India.</p>
        <p>21.2 Either party must first raise a dispute in writing. Both parties will try to settle it in good faith within 15 days.</p>
        <p>21.3 If it is not settled, it will be referred to a sole arbitrator appointed by mutual agreement, under the Arbitration and Conciliation Act, 1996. The seat and venue of arbitration is <strong>Dhanbad, Jharkhand</strong>, the language is English, and the award is final and binding. Subject to this, courts at Dhanbad have exclusive jurisdiction.</p>
        <p>21.4 Nothing in this section prevents us from recovering unpaid amounts through MSME Samadhaan or the Micro and Small Enterprises Facilitation Council under the MSMED Act, 2006, or from seeking urgent interim relief from a court.</p>
      </>
    ),
  },
  {
    title: 'General',
    body: (
      <>
        <p>22.1 These Terms, the <Link href="/refund-policy">Refund &amp; Cancellation Policy</Link> and your accepted proposal or agreement are the entire agreement for the engagement. Changes must be agreed in writing. By accepting a proposal you confirm you have not relied on any statement, promise, estimate or marketing material that is not in those documents, including anything on our website, ads, videos, social media posts, case studies or conversations.</p>
        <p>22.2 If any part is found unenforceable, the rest still applies, and that part is applied to the fullest extent the law allows.</p>
        <p>22.3 You may not transfer the engagement to someone else without our written consent.</p>
        <p>22.4 Not enforcing a right immediately does not waive it.</p>
        <p>22.5 We work as an independent contractor. Nothing here creates a partnership, employment or agency.</p>
        <p><strong>Contact:</strong> Kraffic Enterprises (scaloMATRIX), <a href="mailto:info@krafficgroup.com">info@krafficgroup.com</a>, {REGISTERED_OFFICE}.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      current="/terms"
      updated="24 October 2026"
      intro="These Terms govern every engagement with scaloMATRIX. Please read them before you accept a proposal or make a payment."
      sections={sections}
    />
  );
}
