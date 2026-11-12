import { faqs } from '../data/faq';

// URL slug for a question: "Do you guarantee 20% more sales?" -> "do-you-guarantee-20-more-sales"
export const slugify = (q) =>
  q.toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70);

// Topics group the questions in data/faq.js by their position in that list.
const TOPICS = [
  { id: 'services', title: 'Services & pricing', items: [0, 1, 5] },
  { id: 'audit', title: 'Free audit & results', items: [2, 3] },
  { id: 'working', title: 'Working together', items: [4, 8] },
  { id: 'policies', title: 'Ownership & policies', items: [6, 7] },
];

export const topics = TOPICS
  .map((t) => ({
    ...t,
    items: t.items
      .map((i) => faqs[i])
      .filter(Boolean)
      .map((f) => ({ ...f, slug: slugify(f.q), topicId: t.id, topicTitle: t.title })),
  }))
  .filter((t) => t.items.length);

export const allAnswers = topics.flatMap((t) => t.items);

export const findAnswer = (slug) => allAnswers.find((a) => a.slug === slug);
