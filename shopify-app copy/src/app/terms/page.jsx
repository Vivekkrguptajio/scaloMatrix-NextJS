import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'The terms for scaloMATRIX (Kraffic Enterprises) D2C services: setup fee, commission on received orders, ownership, minimum period, liability and disputes.',
  alternates: { canonical: '/terms' },
};

const EMAIL = <a href="mailto:info@krafficgroup.com">info@krafficgroup.com</a>;

const sections = [
  {
    title: 'Who we are',
    body: (
      <p>scaloMATRIX (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a brand of <strong>Kraffic Enterprises</strong> (GSTIN 20GHGPD8892E1ZC), Patel Nagar, New Delhi 110008, India. &ldquo;You&rdquo; means the business or person who accepts a Plan.</p>
    ),
  },
  {
    title: 'Our services',
    body: (
      <p>We help sellers and manufacturers launch and grow their own direct-to-consumer brand. Depending on the Plan you choose, this can include building your Shopify store, setting up payments, shipping and COD checks, creating and running Meta (Facebook and Instagram) ads, and a dedicated growth expert with regular reports. Your Plan lists exactly what you get. If something is not in your Plan, it is not included.</p>
    ),
  },
  {
    title: 'Fees and payment',
    body: (
      <ul>
        <li><strong>Setup fee:</strong> a one-time fee stated in your Plan, payable before work starts. It covers building and launching your store. It is not a monthly fee.</li>
        <li><strong>No marketing fee, no retainer:</strong> we do not charge an ad-management or marketing fee, and we do not charge a monthly retainer.</li>
        <li><strong>Commission on received orders:</strong> after launch, we charge a commission only on orders you receive. The rate is set out in your Plan. No commission is charged on cancelled or returned orders.</li>
        <li><strong>Costs you pay directly to others:</strong> your ad budget goes to Meta, and your Shopify plan goes to Shopify. We never take a cut of your ad budget. Courier charges, payment-gateway fees, your domain and any paid apps or themes are also paid by you to those providers. Any other third-party cost will be written in your Plan before you agree to it.</li>
        <li><strong>Invoices:</strong> we invoice commission monthly, using order data from your store. Invoices are due within 7 days. All our fees are exclusive of GST, which is added as applicable. If an invoice stays unpaid after written notice, we may pause the services until it is paid.</li>
        <li><strong>Changes:</strong> the fees in your Plan do not change unless you agree in writing.</li>
      </ul>
    ),
  },
  {
    title: 'Your responsibilities',
    body: (
      <>
        <ul>
          <li>Give us accurate and complete information, and keep it up to date</li>
          <li>Sell only lawful, genuine products, and hold the licences and registrations they need (for example GST, or FSSAI for food)</li>
          <li>Own or have the right to use the product photos, names, logos and content you give us</li>
          <li>Keep stock ready, and pack and dispatch orders on time</li>
          <li>Handle customer service, returns and refunds to your customers, unless your Plan says we do</li>
          <li>Approve ads when we ask, and pay your ad budget and platform costs on time</li>
          <li>Follow the rules of Meta, Shopify, your courier and payment providers</li>
        </ul>
        <p>We may refuse or stop work on products that are illegal, counterfeit, unsafe or against the rules of the platforms we use.</p>
      </>
    ),
  },
  {
    title: 'Our responsibilities',
    body: (
      <p>We will do the work in your Plan with reasonable skill and care, keep you updated through regular reports, and keep your business information confidential.</p>
    ),
  },
  {
    title: 'Who owns what',
    body: (
      <ul>
        <li><strong>You own</strong> your store, domain, ad account, customer list, product content and business data. If you leave, we hand over admin access and remove ourselves from your accounts within 7 days. We will not hold back your store, accounts or data because of an unpaid invoice; unpaid fees stay payable.</li>
        <li><strong>We own</strong> our own templates, tools, methods and materials that existed before your Plan. You may use anything we build for your store for as long as you run that store. Third-party themes and apps stay under their own licences.</li>
        <li><strong>Case studies:</strong> we use your brand name, logo or results publicly only with your written permission.</li>
      </ul>
    ),
  },
  {
    title: 'No guarantee of results',
    body: (
      <p>We do not guarantee sales, revenue, return on ad spend, ranking or any other result. Results depend on your product, price, stock, market, ad budget and delivery quality, which are partly outside our control. Examples we show are from past clients and will differ for your business. See the <Link href="/disclaimer">Disclaimer</Link>.</p>
    ),
  },
  {
    title: 'Third-party platforms',
    body: (
      <p>We rely on platforms such as Meta, Shopify, WhatsApp, couriers and payment gateways. We are not responsible for their outages, policy changes, fees, or for any suspension of your account on their side, but we will help you resolve such issues where we reasonably can.</p>
    ),
  },
  {
    title: 'Confidentiality',
    body: (
      <p>Each of us will keep the other&apos;s non-public business information confidential and use it only for the services, unless the law requires disclosure.</p>
    ),
  },
  {
    title: 'Data protection',
    body: (
      <p>Our <Link href="/privacy-policy">Privacy Policy</Link> explains how we handle personal data. For the customer data of your store, you decide how it is collected and used, and we process it only on your instructions to deliver the services, keep it secure, and return or delete it when the Plan ends.</p>
    ),
  },
  {
    title: 'Stopping the service',
    body: (
      <ul>
        <li><strong>By you:</strong> you can stop after the minimum period in your Plan (3 months) by giving 30 days&apos; written notice.</li>
        <li><strong>By us:</strong> we may stop the services after written notice if you breach these Terms, do not pay, sell prohibited products, or abuse our team.</li>
        <li><strong>After stopping:</strong> we hand over your accounts as in section 6. Commission stays payable on orders received before the end date. The <Link href="/refund-policy">Refund and Cancellation Policy</Link> explains refunds.</li>
      </ul>
    ),
  },
  {
    title: 'Limit of liability',
    body: (
      <p>We are not liable for indirect or consequential loss, or for loss of profit, sales or goodwill. Our total liability to you for any claim is limited to the fees you paid us in the 3 months before the claim arose. Nothing here limits liability that the law does not allow us to limit.</p>
    ),
  },
  {
    title: 'Indemnity',
    body: (
      <p>You will cover us against third-party claims and losses caused by your products, your content, or your breach of the law or of these Terms.</p>
    ),
  },
  {
    title: 'Force majeure',
    body: (
      <p>Neither of us is liable for delay or failure caused by events beyond reasonable control, such as natural disasters, strikes, government orders, power or internet failure, or platform outages.</p>
    ),
  },
  {
    title: 'Changes to these Terms',
    body: (
      <p>We may update the website Terms. The date at the top shows the latest version. A change does not alter the fees or terms in a Plan you have already accepted unless you agree in writing.</p>
    ),
  },
  {
    title: 'Governing law and disputes',
    body: (
      <p>Indian law governs these Terms. If a dispute arises, we will first try to settle it by talking, for up to 30 days. If it is not settled, the courts at New Delhi have exclusive jurisdiction.</p>
    ),
  },
  {
    title: 'General',
    body: (
      <p>Your Plan, these Terms, the <Link href="/privacy-policy">Privacy Policy</Link> and the <Link href="/refund-policy">Refund and Cancellation Policy</Link> together form the full agreement. If they conflict, the Plan comes first. If any part is found invalid, the rest still applies. We are an independent service provider, not your employee, partner or agent. You may not transfer your Plan to anyone else without our written consent.</p>
    ),
  },
  {
    title: 'Contact',
    body: <p>Kraffic Enterprises, Patel Nagar, New Delhi 110008, India. Email: {EMAIL}</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      current="/terms"
      updated="26 November 2026"
      intro="These Terms govern your use of scalomatrix.com and the D2C services we provide to you. Booking a call or filling a form does not bind you. These Terms apply to a client once the client accepts a written plan or quote from us (the “Plan”) and pays the setup fee."
      sections={sections}
    />
  );
}
