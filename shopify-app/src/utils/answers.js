import { faqs } from '../data/faq';
import { topicsData } from '../data/answers';

// URL slug for a question: "Do you guarantee 20% more sales?" -> "do-you-guarantee-20-more-sales"
export const slugify = (q) =>
  q.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);

// All topics with their questions. The first topic is the company FAQ already published on the home page;
// the others come from data/answers.js.
export const topics = topicsData.map((t) => {
  const raw = t.items === 'faq' ? faqs.map((f) => [f.q, f.a]) : t.items;
  return {
    id: t.id,
    title: t.title,
    blurb: t.blurb,
    items: raw.map(([q, a]) => ({ q, a, slug: slugify(q), topicId: t.id, topicTitle: t.title })),
  };
});

export const allAnswers = topics.flatMap((t) => t.items);

export const findAnswer = (slug) => allAnswers.find((a) => a.slug === slug);
