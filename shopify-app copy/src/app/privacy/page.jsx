import Link from 'next/link';
import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Privacy Policy',
  description: 'How Scalomatrix collects, uses and protects your personal information, and the rights you have over it.',
  alternates: { canonical: '/privacy' },
};

const sections = [
  {
    title: 'Information we collect',
    body: <p>We collect what you give us directly: your name, email address, phone number and business details when you contact us or use our services. We may also collect usage data through cookies and analytics tools.</p>,
  },
  {
    title: 'How we use your information',
    body: (
      <ul>
        <li>To provide, maintain and improve our services</li>
        <li>To talk to you about projects, updates and offers</li>
        <li>To understand website usage and improve the experience</li>
        <li>To meet legal obligations</li>
      </ul>
    ),
  },
  {
    title: 'Data sharing',
    body: <p>We do not sell your personal information. We may share data with trusted third-party tools (analytics, email or hosting providers) only to deliver our services.</p>,
  },
  {
    title: 'Cookies',
    body: <p>Our website uses cookies to improve your browsing experience and gather analytics. You can manage cookie preferences in your browser settings.</p>,
  },
  {
    title: 'Data security',
    body: <p>We use reasonable security measures to protect your personal data. No method of transmission over the internet is 100% secure, so we cannot guarantee absolute security.</p>,
  },
  {
    title: 'Your rights',
    body: <p>You can ask to access, correct or delete your personal data. To do so, contact us through our <Link href="/#contact">contact form</Link>.</p>,
  },
  {
    title: 'Third-party links',
    body: <p>Our website may link to external sites. We are not responsible for their privacy practices.</p>,
  },
  {
    title: 'Changes to this policy',
    body: <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with a new revision date.</p>,
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      current="/privacy"
      intro="What we collect, why we collect it, and how you stay in control of it."
      sections={sections}
    />
  );
}
