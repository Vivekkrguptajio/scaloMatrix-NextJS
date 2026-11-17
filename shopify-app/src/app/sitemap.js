import { SITE_URL } from '../utils/site';
import { allAnswers } from '../utils/answers';

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/services/shopify-store-creation`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/services/shopify-store-redesign`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/work`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/answers`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...allAnswers.map((a) => ({ url: `${SITE_URL}/answers/${a.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 })),
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
