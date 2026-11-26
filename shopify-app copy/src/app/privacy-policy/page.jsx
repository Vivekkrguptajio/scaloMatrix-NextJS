import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Privacy Policy',
  description: 'What personal information scaloMATRIX (Kraffic Enterprises) collects, why, who sees it, and the rights you have over it.',
  alternates: { canonical: '/privacy-policy' },
};

const EMAIL = <a href="mailto:info@krafficgroup.com">info@krafficgroup.com</a>;

const tableCls = 'w-full text-left text-[14px] border border-line [&_th]:bg-paper [&_th]:font-semibold [&_th]:text-ink [&_th]:p-3 [&_td]:p-3 [&_td]:align-top [&_th]:border [&_th]:border-line [&_td]:border [&_td]:border-line';

const collected = [
  ['Details you give us on forms', 'Name, phone number, city, what you sell, what best describes you (for example manufacturer or marketplace seller), whether you have GST, your monthly sales range', 'To call you back, understand your business and plan your setup'],
  ['Details when you become a client', "Business and billing details, GSTIN, product photos and prices, access to your store and ad accounts that you grant through each platform's own sharing tools", 'To build and run your store and ads, and to invoice you'],
  ['Messages and calls', 'Emails, WhatsApp messages and call notes with us', 'To answer you and keep a record of what was agreed'],
  ['Technical data', 'IP address, device, browser, pages visited, cookies', 'To keep the site secure, understand how it is used and measure our own ads'],
];

const sections = [
  {
    title: 'Who we are',
    body: (
      <p>scaloMATRIX (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a brand of <strong>Kraffic Enterprises</strong> (GSTIN 20GHGPD8892E1ZC), Dhanbad, Jharkhand 828401, India. This policy covers scalomatrix.com. Our separate custom Shopify development site (shopify.scalomatrix.com) may have its own policy.</p>
    ),
  },
  {
    title: 'What we collect',
    body: (
      <>
        <div className="overflow-x-auto mb-4">
          <table className={tableCls}>
            <thead>
              <tr><th>What</th><th>Examples</th><th>Why</th></tr>
            </thead>
            <tbody>
              {collected.map(([what, ex, why]) => (
                <tr key={what}><td className="font-medium text-ink">{what}</td><td>{ex}</td><td>{why}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>We do not ask for card numbers, bank passwords or OTPs on our website forms. Please never send them to us.</p>
      </>
    ),
  },
  {
    title: 'How we use your information',
    body: (
      <ul>
        <li>Respond to your enquiry and contact you about it</li>
        <li>Prepare your plan and quote, and deliver the services you buy</li>
        <li>Send invoices and keep tax and accounting records</li>
        <li>Improve our website and measure our own advertising</li>
        <li>Meet legal obligations and protect our rights</li>
        <li>Send you updates about our services. You can opt out at any time</li>
      </ul>
    ),
  },
  {
    title: 'Calls, WhatsApp, SMS and email',
    body: (
      <p>When you submit a form, you ask us to contact you by phone, WhatsApp, SMS or email about your enquiry. You can ask us to stop at any time by writing to {EMAIL}.</p>
    ),
  },
  {
    title: 'Cookies and similar tools',
    body: (
      <p>We use cookies that are needed for the site to work, and analytics tools (Google Analytics and Microsoft Clarity) and advertising tools (the Meta Pixel) to understand site use and measure our own ads. You can block or delete cookies in your browser settings; some parts of the site may not work properly if you do.</p>
    ),
  },
  {
    title: 'Who we share it with',
    body: (
      <>
        <p>We share information only with:</p>
        <ul>
          <li>Service providers who help us run the business, such as website hosting, forms and CRM, calling and messaging tools, email, analytics and accounting, under duties to keep it confidential and secure</li>
          <li>Advertising platforms such as Meta and Google, for measuring and improving our own ads</li>
          <li>Professional advisers, and government or regulatory authorities when the law requires it</li>
          <li>A buyer or successor, if our business is ever transferred, with the same protection for your data</li>
        </ul>
        <p>Some of these providers may store data on servers outside India.</p>
      </>
    ),
  },
  {
    title: "Your customers' data (when we run your store)",
    body: (
      <p>When we build and run your store, <strong>you</strong> decide what customer data the store collects and why, and the customer data belongs to you. We handle it only to deliver the services you asked for, on your instructions. We do not sell it, and we do not use your customers&apos; details for our own marketing. You are responsible for your own store&apos;s privacy policy and for any consent your customers must give.</p>
    ),
  },
  {
    title: 'Keeping your data safe',
    body: (
      <p>We use reasonable security practices suited to the information we hold, including access controls and secure tools. No system is perfectly secure, so we cannot promise absolute security. If a breach affects your personal data, we will inform you and the authorities as the law requires.</p>
    ),
  },
  {
    title: 'How long we keep it',
    body: (
      <p>We keep enquiry details for up to 3 years after our last contact with you, unless you ask us to delete them sooner. Client and billing records are kept for as long as tax and accounting laws require. After that we delete or anonymise them.</p>
    ),
  },
  {
    title: 'Your rights',
    body: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>Tell you what personal data we hold about you</li>
          <li>Correct or update it</li>
          <li>Delete it, except where we must keep it by law</li>
          <li>Stop using it for updates, by withdrawing your consent</li>
          <li>Nominate another person to exercise these rights for you if you cannot</li>
        </ul>
        <p>Write to {EMAIL} from the email or phone number you gave us. We may need to confirm it is you. We reply within 30 days.</p>
      </>
    ),
  },
  {
    title: 'Children',
    body: (
      <p>Our services are for businesses and adults. We do not knowingly collect data from anyone under 18. If you believe a child has sent us data, write to us and we will delete it.</p>
    ),
  },
  {
    title: 'Changes to this policy',
    body: (
      <p>We may update this policy. The date at the top shows the latest version. If a change is significant, we will tell you on this site or by email.</p>
    ),
  },
  {
    title: 'Contact',
    body: (
      <>
        <p>For questions, complaints or to use your rights, contact us:</p>
        <p>
          Kraffic Enterprises, Patel Nagar, New Delhi 110008, India
          <br />
          Email: {EMAIL}
        </p>
        <p>We aim to acknowledge your complaint within 3 working days and resolve it within 30 days.</p>
        <p>This policy is governed by the laws of India, including the Information Technology Act, 2000 and the rules under it, and, once in force, the Digital Personal Data Protection Act, 2023 and its Rules.</p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      current="/privacy-policy"
      updated="26 November 2026"
      intro="This Privacy Policy explains what personal information scaloMATRIX collects through scalomatrix.com and while providing our services, why we collect it, who sees it and what you can do about it. We collect only what we need, and we do not sell your personal data."
      sections={sections}
    />
  );
}
