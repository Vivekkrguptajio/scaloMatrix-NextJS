import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Legal & Policies',
  description: 'Company information, disclaimer, refund policy, confidentiality and dispute resolution for Scalomatrix services.',
  alternates: { canonical: '/legal' },
};

const sections = [
  {
    title: 'Company information',
    body: <p>scaloMATRIX is a Shopify design and CRO agency operated under Krafton Enterprises. We build high-converting Shopify stores and optimize existing ones for more revenue.</p>,
  },
  {
    title: 'Disclaimer',
    body: <p>The results and statistics on our website come from real client projects. Individual results vary with industry, product, traffic and market conditions, so we cannot guarantee specific outcomes.</p>,
  },
  {
    title: 'Copyright notice',
    body: <p>&copy; {new Date().getFullYear()} scaloMATRIX. All rights reserved. All content, graphics, designs and code on this website belong to scaloMATRIX and may not be reproduced without written permission.</p>,
  },
  {
    title: 'Refund policy',
    body: <p>Payments for our services are <strong>non-refundable</strong> once a project has started and payment is received, unless stated otherwise in writing in your project agreement. By engaging our services you agree to this policy.</p>,
  },
  {
    title: 'Confidentiality',
    body: <p>Client data, business strategies and project details shared with scaloMATRIX are treated as confidential. We do not disclose client information without explicit consent, except where required by law.</p>,
  },
  {
    title: 'Dispute resolution',
    body: <p>We try to settle any dispute through good-faith negotiation first. If it remains unresolved, it goes to binding arbitration under the laws of India.</p>,
  },
  {
    title: 'Related policies',
    body: (
      <ul>
        <li><Link href="/terms">Terms &amp; Conditions</Link></li>
        <li><Link href="/privacy">Privacy Policy</Link></li>
      </ul>
    ),
  },
];

export default function LegalPage() {
  return (
    <LegalLayout
      title="Legal & Policies"
      current="/legal"
      intro="Who we are, how we handle results, refunds and confidentiality."
      sections={sections}
    />
  );
}
