"use client";

import { useState } from 'react';
import Image from 'next/image';
import { clients } from '../data/work';
import {
  FaBolt, FaRegCreditCard, FaMobileAlt, FaTachometerAlt, FaCheck, FaWhatsapp, FaTruck,
  FaMapMarkerAlt, FaBullhorn, FaChartLine, FaUserTie, FaShoppingBag, FaRedo, FaCheckCircle,
  FaRegHeart, FaRegComment, FaUniversity, FaLock, FaLanguage, FaRegCalendarCheck,
} from 'react-icons/fa';

/* Alternative "What's included" layout (tabs + visual), built to A/B test against
   the card grid in WhatsIncluded.jsx. Toggle either one in app/page.jsx. */

const tabs = [
  {
    key: 'website',
    label: 'Website',
    title: 'Look like a big brand from day one',
    text: 'Just starting out or already selling? We build a premium, mobile-first Shopify store that does justice to your products. No developer needed.',
    bullets: [
      'Designed around your brand, not a template look',
      'Fast loading and SEO built in',
      'Product pages built to convert',
      'Easy product and category management',
    ],
    chips: [
      { icon: FaBolt, title: 'Smooth checkout', text: 'Fewer steps between cart and paid' },
      { icon: FaRegCreditCard, title: 'UPI · Cards · COD', text: 'Every way your buyers like to pay' },
      { icon: FaMobileAlt, title: 'Mobile-first', text: 'Built for buyers shopping on phones' },
      { icon: FaTachometerAlt, title: 'Fast-loading, SEO-ready', text: 'Built to rank and convert' },
    ],
  },
  {
    key: 'ads',
    label: 'Meta ads',
    title: 'Ads that bring orders, not just likes',
    text: 'We plan, create and run your ads on Facebook and Instagram. ₹0 management fee. You only pay Meta for the ad budget.',
    bullets: [
      'Ad creatives made for you',
      'Targeting set up for real buyers in India',
      'Budget checked every day',
      '₹0 management fee',
    ],
    chips: [
      { icon: FaBullhorn, title: 'Creatives made for you', text: 'Images, videos and ad copy' },
      { icon: FaMapMarkerAlt, title: 'Right audience', text: 'Shown to people likely to buy' },
      { icon: FaRedo, title: 'Retargeting', text: 'Bring back people who visited' },
      { icon: FaChartLine, title: 'Budget watched daily', text: 'Spend moved to what works' },
    ],
  },
  {
    key: 'shipping',
    label: 'Shipping & COD',
    title: 'Ship anywhere. Cut fake COD orders.',
    text: 'Courier setup, address checks and COD confirmation, so fewer parcels come back and more money reaches you.',
    bullets: [
      'Courier partners set up for you',
      'Address checked before dispatch',
      'COD orders confirmed before shipping',
      'Track every order in one place',
    ],
    chips: [
      { icon: FaMapMarkerAlt, title: 'Address verified', text: 'Wrong pincodes caught early' },
      { icon: FaWhatsapp, title: 'COD confirmed', text: 'Buyer confirms on WhatsApp' },
      { icon: FaTruck, title: 'Pan-India courier', text: 'Pickup from your shop or factory' },
      { icon: FaCheckCircle, title: 'Live tracking', text: 'You and your buyer see every step' },
    ],
  },
  {
    key: 'growth',
    label: 'WhatsApp follow-ups',
    title: 'Bring buyers back on WhatsApp',
    text: 'Automated WhatsApp messages win back abandoned carts, keep buyers updated and bring repeat orders.',
    bullets: [
      'Abandoned cart reminders',
      'Order updates on WhatsApp',
      'Offers for repeat buyers',
      'Review requests after delivery',
    ],
    chips: [
      { icon: FaShoppingBag, title: 'Abandoned carts', text: 'Reminders sent automatically' },
      { icon: FaWhatsapp, title: 'Order updates', text: 'Buyers always know where it is' },
      { icon: FaRedo, title: 'Repeat buyers', text: 'Offers that bring them back' },
      { icon: FaRegComment, title: 'Review requests', text: 'Ask happy buyers for reviews' },
    ],
  },
  {
    key: 'payments',
    label: 'Payments & checkout',
    title: 'Get paid the way your buyers pay',
    text: 'UPI, cards and COD with a smooth checkout. Payments settle straight into your own bank account.',
    bullets: [
      'UPI, cards and netbanking',
      'Cash on delivery and partial COD',
      'One smooth checkout that fills in details for repeat buyers',
      'Money goes to your own bank account',
    ],
    chips: [
      { icon: FaMobileAlt, title: 'UPI and wallets', text: 'The way most buyers pay in India' },
      { icon: FaRegCreditCard, title: 'Cards and netbanking', text: 'All major banks supported' },
      { icon: FaLock, title: 'Secure payments', text: 'Trusted payment gateways' },
      { icon: FaUniversity, title: 'Your own bank', text: 'Settled directly to you' },
    ],
  },
  {
    key: 'expert',
    label: 'Growth expert',
    title: 'One person who knows your brand',
    text: 'A dedicated growth expert plans, reviews and reports to you every week, in plain words, in Hindi or English.',
    bullets: [
      'One point of contact from day one',
      'Weekly report in plain words',
      'A short weekly call to review your sales',
      'Support in Hindi and English',
    ],
    chips: [
      { icon: FaUserTie, title: 'One dedicated expert', text: 'Not a different person every time' },
      { icon: FaChartLine, title: 'Weekly report', text: 'Orders, sales and what to do next' },
      { icon: FaRegCalendarCheck, title: 'Weekly call', text: 'Short, and focused on your numbers' },
      { icon: FaLanguage, title: 'Hindi or English', text: 'Whichever you are comfortable in' },
    ],
  },
];

/* ---------- Mock phone screens (one per tab) ---------- */

function PhoneFrame({ children }) {
  return (
    <div className="w-[220px] shrink-0 rounded-[28px] border border-line bg-paper p-2 shadow-[0_18px_40px_rgba(20,18,16,0.12)]">
      <div className="overflow-hidden rounded-[22px] border border-line bg-paper">{children}</div>
    </div>
  );
}

function StoreHeader({ right }) {
  return (
    <div className="flex items-center justify-between border-b border-line px-3.5 py-2.5">
      <span className="text-[12.5px] font-bold text-brand">Your Brand</span>
      {right ?? <FaShoppingBag className="h-3.5 w-3.5 text-ink" />}
    </div>
  );
}

function WebsiteScreen() {
  const options = ['UPI', 'Cards & netbanking', 'Cash on delivery', 'Partial COD · ₹99 now'];
  return (
    <PhoneFrame>
      <StoreHeader />
      <div className="px-3.5 py-3">
        <p className="text-[12px] font-bold text-ink">Checkout</p>
        <div className="mt-2 rounded-[10px] bg-cream p-2.5 text-[10px] leading-snug text-ink">
          <p><b>Priya S.</b> · +91 98xxx xxx21</p>
          <p className="text-muted">Malviya Nagar, Jaipur 302017</p>
        </div>
        <div className="mt-2.5 space-y-1.5">
          {options.map((o, i) => (
            <div
              key={o}
              className={`flex items-center gap-2 rounded-[9px] border px-2.5 py-2 text-[10px] font-medium text-ink ${
                i === 0 ? 'border-brand bg-brand-soft' : 'border-line'
              }`}
            >
              <span className={`h-2.5 w-2.5 rounded-full border ${i === 0 ? 'border-[3px] border-brand' : 'border-line'}`} />
              {o}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-[9px] bg-brand py-2 text-center text-[11px] font-semibold text-white">Pay ₹2,374</div>
      </div>
    </PhoneFrame>
  );
}

function AdsScreen() {
  return (
    <PhoneFrame>
      <div className="flex items-center gap-2 px-3 py-2.5">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-white">YB</span>
        <div className="leading-tight">
          <p className="text-[10.5px] font-bold text-ink">Your Brand</p>
          <p className="text-[9px] text-muted">Sponsored</p>
        </div>
      </div>
      <div className="flex aspect-square items-center justify-center bg-gradient-to-br from-brand-soft to-cream">
        <div className="text-center">
          <FaShoppingBag className="mx-auto h-9 w-9 text-brand" />
          <p className="mt-2 text-[11px] font-bold text-ink">New collection</p>
          <p className="text-[9.5px] text-muted">Free delivery · COD available</p>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-line px-3 py-2">
        <span className="text-[10px] font-semibold text-ink">Shop the collection</span>
        <span className="rounded-[6px] bg-brand px-2.5 py-1 text-[9.5px] font-semibold text-white">Shop now</span>
      </div>
      <div className="flex gap-3 px-3 py-2 text-ink">
        <FaRegHeart className="h-3.5 w-3.5" />
        <FaRegComment className="h-3.5 w-3.5" />
      </div>
    </PhoneFrame>
  );
}

function ShippingScreen() {
  const steps = [
    { label: 'Order placed', note: 'COD · ₹1,499', done: true },
    { label: 'COD confirmed', note: 'Confirmed on WhatsApp', done: true },
    { label: 'Picked up', note: 'From your shop', done: true },
    { label: 'Out for delivery', note: 'Jaipur 302017', done: false },
  ];
  return (
    <PhoneFrame>
      <StoreHeader right={<FaTruck className="h-3.5 w-3.5 text-ink" />} />
      <div className="px-3.5 py-3">
        <p className="text-[12px] font-bold text-ink">Order #1042</p>
        <p className="text-[10px] text-muted">Address verified ✓</p>
        <ol className="mt-3 space-y-3">
          {steps.map((s) => (
            <li key={s.label} className="flex gap-2.5">
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  s.done ? 'bg-brand text-white' : 'border border-brand bg-paper'
                }`}
              >
                {s.done && <FaCheck className="h-2 w-2" />}
              </span>
              <div className="leading-tight">
                <p className="text-[10.5px] font-semibold text-ink">{s.label}</p>
                <p className="text-[9.5px] text-muted">{s.note}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-3.5 rounded-[9px] border border-line py-2 text-center text-[10.5px] font-semibold text-ink">Track order</div>
      </div>
    </PhoneFrame>
  );
}

function GrowthScreen() {
  const msgs = [
    'Hi Priya 👋 you left something in your cart. Complete your order and get free delivery →',
    'Your order #1042 is out for delivery 🚚 It will reach you today.',
    'Thanks for shopping with us! Here’s 10% off your next order 🎁',
  ];
  return (
    <PhoneFrame>
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <FaWhatsapp className="h-4 w-4 text-[#25D366]" />
        <span className="text-[11px] font-bold text-ink">Your Brand</span>
      </div>
      <div className="space-y-2 bg-cream px-2.5 py-3">
        {msgs.map((m) => (
          <div key={m} className="max-w-[92%] rounded-[10px] rounded-tl-[3px] bg-paper px-2.5 py-2 text-[10px] leading-snug text-ink shadow-sm">
            {m}
          </div>
        ))}
        <div className="ml-auto max-w-[60%] rounded-[10px] rounded-tr-[3px] bg-brand-soft px-2.5 py-2 text-[10px] text-ink">
          Ordering again! 😍
        </div>
      </div>
    </PhoneFrame>
  );
}

function PaymentsScreen() {
  const rows = [
    { method: 'UPI', amount: '₹1,499', status: 'Paid', done: true },
    { method: 'Card', amount: '₹2,374', status: 'Paid', done: true },
    { method: 'Cash on delivery', amount: '₹899', status: 'On delivery', done: false },
  ];
  return (
    <PhoneFrame>
      <StoreHeader right={<FaLock className="h-3.5 w-3.5 text-ink" />} />
      <div className="px-3.5 py-3">
        <p className="text-[10px] text-muted">Payments today</p>
        <p className="text-[20px] font-bold leading-tight text-ink">₹4,772</p>
        <div className="mt-3 space-y-1.5">
          {rows.map((r) => (
            <div key={r.method} className="flex items-center justify-between rounded-[9px] border border-line px-2.5 py-2">
              <div className="leading-tight">
                <p className="text-[10.5px] font-semibold text-ink">{r.method}</p>
                <p className="text-[9.5px] text-muted">{r.amount}</p>
              </div>
              <span
                className={`rounded-full px-2 py-0.5 text-[9px] font-semibold ${
                  r.done ? 'bg-brand-soft text-brand' : 'border border-line text-muted'
                }`}
              >
                {r.status}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2 rounded-[9px] bg-cream px-2.5 py-2 text-[10px] text-ink">
          <FaUniversity className="h-3 w-3 text-brand" /> Settled to your bank account
        </div>
      </div>
    </PhoneFrame>
  );
}

function ExpertScreen() {
  const stats = [
    { label: 'Orders', value: '128' },
    { label: 'Sales', value: '₹1.9L' },
    { label: 'Returns', value: '6%' },
  ];
  return (
    <PhoneFrame>
      <div className="flex items-center gap-2.5 border-b border-line px-3.5 py-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-white">
          <FaUserTie className="h-3.5 w-3.5" />
        </span>
        <div className="leading-tight">
          <p className="text-[11.5px] font-bold text-ink">Your growth expert</p>
          <p className="text-[9.5px] text-muted">Weekly report · Week 6</p>
        </div>
      </div>
      <div className="px-3.5 py-3">
        <div className="grid grid-cols-3 gap-1.5">
          {stats.map((st) => (
            <div key={st.label} className="rounded-[9px] bg-cream px-2 py-2 text-center">
              <p className="text-[13px] font-bold leading-tight text-ink">{st.value}</p>
              <p className="text-[9px] text-muted">{st.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-[10px] font-semibold text-ink">What to do next</p>
        <ul className="mt-1.5 space-y-1.5 text-[10px] leading-snug text-ink">
          {['Put more budget on the best product', 'Keep 50 pieces of stock ready', 'Approve 2 new ads'].map((t) => (
            <li key={t} className="flex gap-2">
              <FaCheck className="mt-[2px] h-2.5 w-2.5 shrink-0 text-brand" />
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-3 rounded-[9px] border border-line py-2 text-center text-[10.5px] font-semibold text-ink">Weekly call · Thu 6 pm</div>
      </div>
    </PhoneFrame>
  );
}

/* ---------- Website tab: real stores we built (from data/work.js) ---------- */

const SHOWCASE = [
  ...['House of Nada', 'Judex Fragrance', 'Velmukha'].map((name) => clients.find((c) => c.name === name)).filter(Boolean),
  { name: 'Hello Sunshine', category: 'Ethnic Wear', url: 'https://hellosunshinecollections.com/', img: '/work/hellosunshine-home.jpg' },
  { name: 'Wayora', category: 'Menswear', url: 'https://wayorastyleverse.com/en-in', img: '/work/wayorastyleverse-home.jpg' },
  { name: 'Spot Hippo', category: 'Wellness', url: 'https://spothippo.com/', img: '/work/spothippo-home.jpg' },
];

function StoreShowcase() {
  const [i, setI] = useState(0);
  const store = SHOWCASE[i];
  const host = store.url.replace(/^https?:\/\/(www\.)?/, '').split('/')[0];

  // Same structure as the other tabs: a visual on the left + a column of boxes on the right,
  // so the Website tab is the same height as Meta ads / Shipping / WhatsApp.
  return (
    <>
      {/* Browser frame */}
      <div className="w-full min-w-0 max-w-[420px] overflow-hidden rounded-[12px] border border-line bg-paper shadow-[0_18px_40px_rgba(20,18,16,0.10)] sm:flex-1">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-2 truncate rounded-full bg-cream px-2.5 py-0.5 text-[10.5px] text-muted">{host}</span>
        </div>
        <div className="relative aspect-[16/10] w-full bg-cream">
          <Image
            key={store.name}
            src={store.img}
            alt={`${store.name} Shopify store built by scaloMATRIX`}
            fill
            sizes="(max-width: 640px) 100vw, 420px"
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Store list (styled like the feature boxes on the other tabs) */}
      <div className="grid w-full grid-cols-2 gap-1.5 min-[420px]:grid-cols-3 sm:w-[118px] sm:shrink-0 sm:grid-cols-1" role="group" aria-label="Stores we built">
        {SHOWCASE.map((c, idx) => (
          <button
            key={c.name}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={idx === i}
            className={`rounded-[9px] border px-2.5 py-1.5 text-left transition-colors shadow-[0_4px_10px_rgba(20,18,16,0.05)] ${
              idx === i ? 'border-ink bg-paper' : 'border-line bg-paper hover:border-ink'
            }`}
          >
            <span className="block truncate text-[11.5px] font-bold leading-tight text-ink">{c.name}</span>
          </button>
        ))}
      </div>
    </>
  );
}

// Real client dashboards for the Meta ads tab. Brand, store, campaign and product names are blurred
// in the images themselves; only the numbers are shown.
const DASHBOARDS = [
  { key: 'meta', label: 'Meta Ads', note: '3.54 ROAS', img: '/work/results-meta-ads.jpg', preview: '/work/results-meta-ads-crop.jpg', ratio: '1660/836', alt: 'Meta Ads Manager: amount spent, purchases and ROAS for a client brand (names hidden)' },
  { key: 'year', label: 'Shopify 2025', note: '₹8.37 Cr sales', img: '/work/results-shopify-year.jpg', preview: '/work/results-shopify-year-crop.jpg', ratio: '2215/880', alt: 'Shopify analytics for 2025 vs 2024 for a client brand (names hidden)' },
  { key: 'quarter', label: 'Shopify Q1', note: '₹2.09 Cr sales', img: '/work/results-shopify-quarter.jpg', preview: '/work/results-shopify-quarter-crop.jpg', ratio: '2215/880', alt: 'Shopify analytics for Q1 2025 vs Q4 2024 for a client brand (names hidden)' },
];

function DashboardShowcase() {
  const [i, setI] = useState(0);
  const d = DASHBOARDS[i];

  return (
    <div className="flex w-full min-w-0 flex-col gap-2.5">
      <div className="w-full overflow-hidden rounded-[12px] border border-line bg-paper shadow-[0_18px_40px_rgba(20,18,16,0.10)]">
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="h-2 w-2 rounded-full bg-line" />
          <span className="ml-2 truncate rounded-full bg-cream px-2.5 py-0.5 text-[10.5px] text-muted"><span className="hidden sm:inline">Real client dashboard · </span>Names hidden</span>
          <a href={d.img} target="_blank" rel="noopener noreferrer" className="ml-auto shrink-0 text-[10.5px] font-semibold text-ink underline underline-offset-2 hover:text-brand">
            Zoom ↗
          </a>
        </div>
        <a
          href={d.img}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block w-full cursor-zoom-in bg-cream"
          style={{ aspectRatio: d.ratio }}
          aria-label={`Open full screenshot: ${d.label}`}
        >
          <Image key={d.key} src={d.preview} alt={d.alt} fill sizes="(max-width: 640px) 100vw, 560px" className="object-cover object-left-top" />
        </a>
      </div>

      <div className="grid w-full grid-cols-3 gap-1.5" role="group" aria-label="Client dashboards">
        {DASHBOARDS.map((c, idx) => (
          <button
            key={c.key}
            type="button"
            onClick={() => setI(idx)}
            aria-pressed={idx === i}
            className={`rounded-[9px] border px-2.5 py-1.5 text-left transition-colors shadow-[0_4px_10px_rgba(20,18,16,0.05)] ${
              idx === i ? 'border-ink bg-paper' : 'border-line bg-paper hover:border-ink'
            }`}
          >
            <span className="block text-[11.5px] font-bold leading-tight text-ink">{c.label}</span>
            <span className="block text-[10px] leading-tight text-muted">{c.note}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

const screens = { website: WebsiteScreen, ads: AdsScreen, shipping: ShippingScreen, growth: GrowthScreen, payments: PaymentsScreen, expert: ExpertScreen };

export default function WhatsIncludedTabs() {
  const [active, setActive] = useState(tabs[0].key);
  const tab = tabs.find((t) => t.key === active);
  const Screen = screens[tab.key];

  return (
    <section
      id="whats-included-tabs"
      aria-labelledby="whats-included-tabs-title"
      className="relative w-full border-b border-line bg-paper py-16 md:py-24"
    >
      <div className="container-x">
        {/* Header (same pattern as OurModel / WhatsIncluded) */}
        <div className="mb-7 sm:mb-9">
          <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
            What&apos;s included
          </p>
          <h2
            id="whats-included-tabs-title"
            className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
          >
            Everything a big brand has. <span className="text-brand">Done for you.</span>
          </h2>
          <p className="mt-3 text-[15px] sm:text-[17px] text-muted">
            From your store to your customer&apos;s doorstep, built and run by our team.
          </p>
        </div>

        {/* Tabs: swipeable pills on phones */}
        <div
          role="tablist"
          aria-label="What's included"
          className="-mx-1 mb-5 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((t) => {
            const selected = t.key === active;
            return (
              <button
                key={t.key}
                role="tab"
                type="button"
                id={`wit-tab-${t.key}`}
                aria-selected={selected}
                aria-controls="wit-panel"
                onClick={() => setActive(t.key)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[13.5px] font-semibold transition-colors ${
                  selected ? 'border-brand bg-brand text-white' : 'border-line bg-paper text-ink hover:border-brand hover:bg-brand hover:text-white'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          id="wit-panel"
          role="tabpanel"
          aria-labelledby={`wit-tab-${tab.key}`}
          className="grid grid-cols-1 items-center gap-8 rounded-[20px] border border-line bg-paper p-5 sm:p-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:p-10"
        >
          {/* Copy */}
          <div key={`copy-${tab.key}`} className="animate-[witFade_.35s_ease]">
            <h3 className="text-[22px] sm:text-[28px] font-bold leading-tight tracking-tight text-ink">{tab.title}</h3>
            <p className="mt-3 text-[14px] sm:text-[15.5px] leading-relaxed text-muted">{tab.text}</p>
            <ul className="mt-5 space-y-3">
              {tab.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[14px] sm:text-[15px] leading-snug text-ink">
                  <FaCheck className="mt-[3px] h-3.5 w-3.5 shrink-0 text-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <a
              href="#lead-form"
              className="btn-primary mt-7 inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-5 py-3 text-[13px] font-semibold text-white"
            >
              Book my free call <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Visual */}
          <div
            key={`visual-${tab.key}`}
            className={`animate-[witFade_.35s_ease] flex flex-col items-center rounded-[16px] border border-line bg-cream p-5 sm:flex-row sm:justify-center ${tab.key === 'website' || tab.key === 'ads' ? 'gap-3 sm:px-5 sm:py-8' : 'gap-5 sm:p-7'} bg-[linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] bg-[size:28px_28px]`}
          >
            {tab.key === 'website' ? (
              <StoreShowcase />
            ) : tab.key === 'ads' ? (
              <DashboardShowcase />
            ) : (
              <>
            <Screen />
            <div className="grid w-full max-w-[300px] grid-cols-1 gap-2.5">
              {tab.chips.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex items-center gap-3 rounded-[12px] border border-line bg-paper px-3.5 py-3 shadow-[0_6px_16px_rgba(20,18,16,0.06)]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] bg-brand-soft">
                    <Icon className="h-3.5 w-3.5 text-brand" />
                  </span>
                  <div className="leading-tight">
                    <p className="text-[13px] font-bold text-ink">{title}</p>
                    <p className="mt-0.5 text-[11.5px] text-muted">{text}</p>
                  </div>
                </div>
              ))}
            </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`@keyframes witFade { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: none; } }`}</style>
    </section>
  );
}
