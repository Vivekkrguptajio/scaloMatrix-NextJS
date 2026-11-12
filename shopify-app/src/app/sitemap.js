import { SITE_URL } from '../utils/site';
import { allAnswers } from '../utils/answers';

export default function sitemap() {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/answer`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    ...allAnswers.map((a) => ({ url: `${SITE_URL}/answer/${a.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 })),
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/refund-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/legal`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];
}
