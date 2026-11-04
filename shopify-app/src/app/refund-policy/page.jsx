import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'When fees are and are not refundable at scaloMATRIX (Kraffic Enterprises): advances, stage payments, retainers, cancellations and chargebacks.',
  alternates: { canonical: '/refund-policy' },
};

const sections = [
  {
    title: 'Advance payments',
    body: (
      <p>An advance reserves our team&apos;s time and covers discovery, planning and setup. It is non-refundable once the project has been kicked off, which happens when we start any work or share any plan, wireframe, audit or design.</p>
    ),
  },
  {
    title: 'Stage payments',
    body: (
      <p>Each stage payment is non-refundable once the work for that stage has been delivered or shared for review (for example, a staging or preview link).</p>
    ),
  },
  {
    title: 'Monthly retainers',
    body: (
      <p>Retainers are billed in advance. The fee for a month is non-refundable once work for that month has started. To cancel, give 30 days&apos; written notice; the notice-period fee is payable.</p>
    ),
  },
  {
    title: 'Results and outcomes',
    body: (
      <p>We do not refund fees on the basis of sales, revenue, traffic, conversion rate, ad performance, rankings or any other outcome. These depend on factors outside our control, as explained in section 12 of our <Link href="/terms">Terms</Link>.</p>
    ),
  },
  {
    title: 'Change of mind and pauses',
    body: (
      <p>Fees are not refunded if you change your mind, change direction, pause the project, stop responding, or remove our access after work has begun. Paid amounts can be carried forward to a restart within 60 days, at our discretion.</p>
    ),
  },
  {
    title: 'Third-party costs',
    body: (
      <p>Shopify plans, themes, apps, domains, fonts, ad spend and marketplace fees are paid to those providers and follow their own refund rules. We cannot refund them.</p>
    ),
  },
  {
    title: 'When we do refund',
    body: (
      <>
        <ul>
          <li>If we cancel a project before starting a paid stage, we refund the unused amount for that stage.</li>
          <li>If you pay twice by mistake or are overcharged, we refund the extra amount.</li>
        </ul>
        <p>Approved refunds are made to the original payment method within 15 working days. GST is adjusted through a credit note as the law requires.</p>
      </>
    ),
  },
  {
    title: 'Chargebacks',
    body: (
      <p>Please contact us before raising a payment dispute with your bank. A chargeback for services already rendered is a breach of our Terms, and we will contest it with our records.</p>
    ),
  },
  {
    title: 'Contact',
    body: (
      <p>For any billing or refund question, write to <a href="mailto:info@krafficgroup.com">info@krafficgroup.com</a> with your invoice number. We reply within 2 working days.</p>
    ),
  },
];

export default function RefundPolicyPage() {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      current="/refund-policy"
      updated="24 October 2026"
      intro="All payments to scaloMATRIX, a brand of Kraffic Enterprises (GSTIN 20GHGPD8892E1ZC), are for time reserved and work performed. Once work on a stage or month has begun, that payment is non-refundable. This policy forms part of our Terms & Conditions."
      sections={sections}
    />
  );
}
