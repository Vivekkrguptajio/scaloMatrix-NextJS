import { faqs } from '../data/faq';
import { SITE_URL } from '../utils/site';

// Structured data (schema.org) so search engines know who we are and what we do.
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'scaloMATRIX',
      inLanguage: 'en-IN',
      publisher: { '@id': `${SITE_URL}/#org` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'scaloMATRIX | D2C Brand Building for Manufacturers: Store, Ads & Growth',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#org` },
      inLanguage: 'en-IN',
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
      name: 'scaloMATRIX',
      alternateName: 'D2C scaloMATRIX',
      legalName: 'Kraffic Enterprises',
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        'Done-for-you D2C brand building for manufacturers and sellers. We build your Shopify store, run Meta ads, and setup shipping & payments. Pay once to start; earn only when you sell.',
      email: 'info@krafficgroup.com',
      telephone: '+91-92177-28977',
      sameAs: [
        'https://www.instagram.com/scalomatrix/',
        'https://www.youtube.com/@scalomatrix',
        'https://www.facebook.com/scalomatrix',
      ],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Patel Nagar',
        addressLocality: 'Patel Nagar, Delhi',
        addressRegion: 'Delhi',
        postalCode: '110008',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'Country', name: 'India' },
      ],
      priceRange: '₹₹',
      currenciesAccepted: 'INR',
      paymentAccepted: 'Credit Card, Debit Card, UPI, Net Banking, Wire Transfer',
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
