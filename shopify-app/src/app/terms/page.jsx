import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Terms & Conditions | scaloMATRIX',
};

const sections = [
  {
    title: 'Agreement to terms',
    body: <p>By accessing or using scaloMATRIX services, you agree to be bound by these Terms &amp; Conditions. If you do not agree, please do not use our services.</p>,
  },
  {
    title: 'Services',
    body: <p>scaloMATRIX provides Shopify store design, development, conversion rate optimization (CRO) and related digital services. The scope of each project is defined in its own project agreement or proposal.</p>,
  },
  {
    title: 'Intellectual property',
    body: <p>All content, designs, code and materials created by scaloMATRIX remain our intellectual property until full payment is received. After complete payment, ownership of the deliverables transfers to the client as set out in the project agreement.</p>,
  },
  {
    title: 'Payment terms',
    body: <p>Payment terms are specified in each project proposal. Late payments may delay or suspend the project. All fees are <strong>non-refundable</strong> unless stated otherwise in writing.</p>,
  },
  {
    title: 'Client responsibilities',
    body: <p>Clients are responsible for providing accurate information, timely feedback, and the access to platforms and accounts that the project needs.</p>,
  },
  {
    title: 'Limitation of liability',
    body: <p>scaloMATRIX is not liable for indirect, incidental or consequential damages arising from the use of our services. Our total liability is limited to the amount paid for the specific service in question.</p>,
  },
  {
    title: 'Termination',
    body: <p>Either party may end the engagement with written notice, as specified in the project agreement. On termination, the client pays for all work completed up to the termination date.</p>,
  },
  {
    title: 'Governing law',
    body: <p>These terms are governed by the laws of India. Disputes will be resolved through arbitration under applicable Indian law.</p>,
  },
  {
    title: 'Contact',
    body: <p>For questions about these terms, reach out through our <Link href="/#contact">contact form</Link>.</p>,
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      current="/terms"
      intro="The ground rules for working with scaloMATRIX, in plain language."
      sections={sections}
    />
  );
}
