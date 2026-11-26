import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'What you can get back, and when, from the fees you pay scaloMATRIX (Kraffic Enterprises): setup fee, commission, third-party costs and cancelling.',
  alternates: { canonical: '/refund-policy' },
};

const EMAIL = <a href="mailto:info@krafficgroup.com">info@krafficgroup.com</a>;

const tableCls = 'w-full text-left text-[14px] border border-line [&_th]:bg-paper [&_th]:font-semibold [&_th]:text-ink [&_th]:p-3 [&_td]:p-3 [&_td]:align-top [&_th]:border [&_th]:border-line [&_td]:border [&_td]:border-line';

const setupRows = [
  ['Before work starts (we have not begun building your store)', 'Full refund of the setup fee if you ask within 7 days of paying'],
  ['After work has started', 'No refund, because the design and build work has already been done'],
  ['If we cannot deliver the services in your Plan because of a reason on our side', 'A refund of the part of the setup fee for work we did not deliver'],
];

const sections = [
  {
    title: 'Setup fee',
    body: (
      <>
        <div className="overflow-x-auto mb-4">
          <table className={tableCls}>
            <thead>
              <tr><th>When</th><th>What you get back</th></tr>
            </thead>
            <tbody>
              {setupRows.map(([when, back]) => (
                <tr key={when}><td>{when}</td><td>{back}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Work starts when we begin building your store, after you have paid and given us the details we asked for. We will tell you in writing the day it starts.</p>
      </>
    ),
  },
  {
    title: 'Commission',
    body: (
      <p>We charge commission only on orders you receive. No commission is charged on cancelled or returned orders. If an order we have already billed is later cancelled or returned, we credit that commission on your next invoice.</p>
    ),
  },
  {
    title: 'Ad budget, Shopify plan and other third-party costs',
    body: (
      <p>Your ad budget is paid directly to Meta, and your Shopify plan directly to Shopify. We never hold this money, so we cannot refund it. Refunds for these and other third-party costs (couriers, payment gateways, domains, paid apps) follow the rules of those providers.</p>
    ),
  },
  {
    title: 'Cancelling the service',
    body: (
      <p>You can cancel after the minimum period in your Plan (3 months) by giving 30 days&apos; written notice, as set out in our <Link href="/terms">Terms and Conditions</Link>. Cancelling does not bring back a setup fee for work already started. Commission stays payable on orders received before the end date.</p>
    ),
  },
  {
    title: 'Duplicate or wrong payments',
    body: <p>If you are charged twice or pay the wrong amount, we refund the extra amount in full.</p>,
  },
  {
    title: 'How to ask for a refund',
    body: (
      <p>Email {EMAIL} with your name, phone number, the Plan you signed and your payment reference. We reply within 3 working days. Approved refunds are sent to the original payment method within 7–10 working days; your bank or payment provider may take a few more days. Where we have issued a GST invoice, we issue a credit note as the GST law requires.</p>
    ),
  },
  {
    title: 'Contact',
    body: <p>Kraffic Enterprises, Patel Nagar, New Delhi 110008, India. Email: {EMAIL}</p>,
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      current="/refund-policy"
      updated="26 November 2026"
      intro="This policy explains what you can get back, and when, from the fees you pay Kraffic Enterprises (scaloMATRIX). It covers only what you pay us. Returns and refunds to the customers of your own store are handled by you, as the store owner, unless your Plan says otherwise."
      sections={sections}
    />
  );
}
