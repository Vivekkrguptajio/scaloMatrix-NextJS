import ServicePage from '../../../components/ServicePage';
import { faqs as siteFaqs } from '../../../data/faq';

export const metadata = {
  title: { absolute: 'Shopify Store Development & Creation India | scaloMATRIX' },
  description: 'Shopify store development and creation in India. We design, build and launch a brand-new Shopify store ready to take orders, from ₹64,999, including pages, product setup, payments and shipping. Start with a free audit.',
  alternates: { canonical: '/services/shopify-store-creation' },
};

const faqs = [
  siteFaqs.find((f) => f.q === 'What do you build?'),
  siteFaqs.find((f) => f.q === 'How much does it cost?'),
  siteFaqs.find((f) => f.q === 'Who owns the design and code after the project?'),
  siteFaqs.find((f) => f.q === 'What is your refund policy?'),
].filter(Boolean);

export default function Page() {
  return (
    <ServicePage
      slug="shopify-store-creation"
      tab="Shopify Store Creation"
      h1="Shopify store development and creation in India,"
      accent="ready to take orders."
      intro="A brand-new Shopify store, designed, developed and shipped ready to take orders. We set the store up from zero: the homepage and essential pages, your products, payments and shipping, so you can launch with a store that is built around how people buy, not just a template with your logo on it."
      price="₹64,999 onwards"
      priceNote="· Basic design or Premium design options"
      includes={[
        'Complete store setup from zero',
        'Homepage + 5 essential pages',
        'Product page design and upload',
        'Payment gateway and shipping setup',
        'Mobile-responsive across all devices',
        'Basic SEO and speed optimisation',
      ]}
      forWho={[
        'New D2C brands launching their first Shopify store.',
        'Brands moving from a marketplace, WooCommerce, Wix or WordPress to their own Shopify store.',
        'Founders who want a store that is ready for ads on day one, with scope, revisions and refunds agreed in writing.',
      ]}
      steps={[
        { n: '01', tag: 'Find', title: 'We plan the store.', body: 'We look at your products, customers and competitors, and agree the pages, structure and scope in writing before any design starts.' },
        { n: '02', tag: 'Fix', title: 'We design it.', body: 'Mobile-first designs with real copy and real assets, shared for feedback in rounds agreed in your proposal.' },
        { n: '03', tag: 'Launch', title: 'We build and launch it.', body: 'Hand-coded, speed-tuned and tested on real phones. You get a live link to check, and it is done when you sign off.' },
      ]}
      faqs={faqs}
      related={[
        { href: '/services/shopify-store-redesign', label: 'Shopify store redesign' },
        { href: '/work', label: 'Shopify case studies' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/answers', label: '100 Shopify answers' },
      ]}
    />
  );
}
