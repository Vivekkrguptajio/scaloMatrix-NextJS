import LegalLayout from '../../components/LegalLayout';

export const metadata = {
  title: 'Disclaimer',
  description: 'Results shown on scaloMATRIX are examples from past clients, not promises. Fees, general information, trademarks and third-party links.',
  alternates: { canonical: '/disclaimer' },
};

const sections = [
  {
    title: 'Results will differ',
    body: (
      <p>The store names, screenshots and numbers (such as revenue growth or average order value) on this site come from past client projects and describe those stores only. They are examples, not promises. Your results depend on your product, price, stock, market, ad budget and delivery quality, and will differ. We do not guarantee any level of sales, revenue or return on ad spend.</p>
    ),
  },
  {
    title: 'Fees shown are examples',
    body: (
      <p>Agency prices we show for comparison are typical market ranges and vary by agency. What you pay us is set only in the written Plan you accept. Your ad budget (paid to Meta) and your Shopify plan (paid to Shopify) are your own costs.</p>
    ),
  },
  {
    title: 'General information only',
    body: (
      <p>The content on this site is general information about our services. It is not legal, tax, financial or investment advice. Please take advice from a qualified professional for your own situation.</p>
    ),
  },
  {
    title: 'Brands and trademarks',
    body: (
      <p>Meta, Facebook, Instagram, WhatsApp, Shopify, Amazon, Flipkart, Meesho and other names are trademarks of their owners. We use them only to describe what we work with. scaloMATRIX is an independent business and is not owned, sponsored or endorsed by any of them. Client names and logos appear with the clients&apos; permission.</p>
    ),
  },
  {
    title: 'Third-party links and tools',
    body: (
      <p>Our site may link to other sites and tools. We do not control them and are not responsible for their content or practices.</p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="Disclaimer"
      current="/disclaimer"
      updated="26 November 2026"
      intro="What the results, prices and brand names on this site do and do not mean."
      sections={sections}
    />
  );
}
