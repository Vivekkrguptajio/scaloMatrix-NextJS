import ServicePage from '../../../components/ServicePage';
import { faqs as siteFaqs } from '../../../data/faq';

export const metadata = {
  title: { absolute: 'Shopify Store Redesign in India | scaloMATRIX' },
  description: 'Shopify store redesign in India for D2C brands that get visitors but lose sales. A conversion-focused redesign of your homepage, landing pages and product pages, from ₹44,999. Start with a free store audit.',
  alternates: { canonical: '/services/shopify-store-redesign' },
};

const faqs = [
  siteFaqs.find((f) => f.q === 'Can you redesign my existing store?'),
  siteFaqs.find((f) => f.q === 'How much does it cost?'),
  siteFaqs.find((f) => f.q === 'Do you guarantee 20% more sales?'),
  siteFaqs.find((f) => f.q === 'What is the free audit?'),
].filter(Boolean);

export default function Page() {
  return (
    <ServicePage
      slug="shopify-store-redesign"
      tab="Shopify Store Redesign"
      h1="Shopify store redesign in India"
      accent="built to convert more of your visitors."
      intro="Your store gets visitors but loses sales. Our Shopify store redesign starts with a full review of your current store, then rebuilds the pages that matter (homepage, landing pages and product pages) around what stops people from buying. Same traffic, a store designed to turn more of it into orders."
      price="₹44,999 onwards"
      priceNote="· Same theme or Premium theme options"
      includes={[
        'Full review of your current Shopify store',
        'Redesigned homepage and landing pages',
        'Product pages built to raise order value',
        'Improved navigation and user flow',
        'Pages ready for A/B testing',
        'Post-launch performance tracking',
      ]}
      forWho={[
        'D2C brands that already get traffic, from ads or organic, but whose conversion rate is lower than it should be.',
        'Stores whose design no longer matches the brand, or that are hard to use on a phone.',
        'Founders who want decisions backed by analytics and heatmaps, not guesses.',
      ]}
      steps={[
        { n: '01', tag: 'Find', title: 'We find the leaks.', body: 'We study your Shopify analytics, GA4 and Clarity heatmaps and session recordings to see exactly where buyers drop off, before we touch a pixel.' },
        { n: '02', tag: 'Fix', title: 'We design the fix.', body: 'Mobile-first designs with real copy and real assets. Rounds, scope and timelines are agreed in writing before we start.' },
        { n: '03', tag: 'Launch', title: 'We build and ship it.', body: 'Hand-coded, speed-tuned and tested on real phones. You get a live link to check, and it is done when you sign off.' },
      ]}
      faqs={faqs}
      related={[
        { href: '/services/shopify-store-creation', label: 'Shopify store creation' },
        { href: '/work', label: 'Shopify case studies' },
        { href: '/pricing', label: 'Pricing' },
        { href: '/answers', label: '100 Shopify answers' },
      ]}
    />
  );
}
