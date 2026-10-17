import { faqs } from '../data/faq';
import { SITE_URL } from '../utils/site';

// Structured data (schema.org) so search engines know who we are and what we sell.
// Only facts that are already public on the page are included.

const offer = (name, description, price) => ({
  '@type': 'Offer',
  priceCurrency: 'INR',
  ...(price !== undefined && { price: String(price) }),
  itemOffered: { '@type': 'Service', name, description },
});

const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Scalomatrix',
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': ['ProfessionalService', 'Organization'],
      '@id': `${SITE_URL}/#org`,
      name: 'Scalomatrix',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        'Shopify design, development and conversion-focused redesign for D2C brands in India.',
      email: 'scalomatrix@gmail.com',
      telephone: '+91-92177-28977',
      areaServed: { '@type': 'Country', name: 'India' },
      parentOrganization: { '@type': 'Organization', name: 'Krafton Enterprises' },
      knowsAbout: ['Shopify', 'Conversion rate optimization', 'D2C ecommerce', 'Landing page design'],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+91-92177-28977',
        email: 'scalomatrix@gmail.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Shopify services',
        itemListElement: [
          offer('Custom Shopify Build', 'Ground-up custom-coded Shopify theme, built to scale.'),
          offer('Shopify Website Creation', 'A brand-new Shopify store, designed, developed and ready to take orders.', 64999),
          offer('Shopify Website Redesign', 'Conversion-first redesign of an existing Shopify store.', 44999),
          offer('Shopify Website Audit', 'Free 30-minute live review of your store showing what costs you sales.', 0),
        ],
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so the JSON can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }}
    />
  );
}
