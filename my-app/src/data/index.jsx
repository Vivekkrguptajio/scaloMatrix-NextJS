"use client";
import React from 'react';

import fintechImg from './images/case-studies/fintech.jpg';
import ecommerceImg from './images/case-studies/ecommerce.jpg';
import healthcareImg from './images/case-studies/healthcare.jpg';
import crmImg from './images/case-studies/crm.jpg';

import geoAeoImg from './images/insights/geo-aeo.png';
import aeo101Img from './images/insights/aeo-101.jpg';
import omnichannelImg from './images/insights/omnichannel.png';

export const caseStudies = [
  {
    id: 1,
    title: "Global FinTech App Restructure",
    client: "Finova",
    category: "UX/UI Design",
    metric: "+150%",
    metricLabel: "User Conversion",
    description: "Simplified complex financial data into an intuitive, frictionless user experience.",
    image: fintechImg,
    color: "bg-blue-500",
    textColor: "text-blue-500",
    bgLight: "bg-blue-50"
  },
  {
    id: 2,
    title: "E-Commerce Replatforming",
    client: "StyleStore",
    category: "Development",
    metric: "3.2x",
    metricLabel: "Faster Page Load",
    description: "Migrated a legacy monolith to modern headless architecture for better SEO.",
    image: ecommerceImg,
    color: "bg-[#FD5800]",
    textColor: "text-[#FD5800]",
    bgLight: "bg-orange-50"
  },
  {
    id: 3,
    title: "Healthcare SaaS Platform",
    client: "MedSync",
    category: "Product Design",
    metric: "40%",
    metricLabel: "Less Support Tickets",
    description: "Unified portal for doctors and patients that streamlined communication.",
    image: healthcareImg,
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
    bgLight: "bg-emerald-50"
  },
  {
    id: 4,
    title: "AI CRM Integration",
    client: "SalesPro",
    category: "AI & Automation",
    metric: "2.5x",
    metricLabel: "Lead Conversion",
    description: "Automated follow-ups and lead scoring using AI, boosting sales velocity.",
    image: crmImg,
    color: "bg-purple-500",
    textColor: "text-purple-500",
    bgLight: "bg-purple-50"
  }
];

export const faqs = [
  {
    question: "How do you blend creativity with technology?",
    answer: "We believe magic happens at the intersection of art and code. Our award-winning creatives work hand-in-hand with our engineering team from day one. This ensures every bold idea is not just visually stunning, but technically robust and infinitely scalable."
  },
  {
    question: "What is your approach to brand transformation?",
    answer: "We don't just refresh logos; we engineer holistic brand experiences. By diving deep into consumer insights and cultural trends, we build immersive digital ecosystems that drive real business growth and leave a lasting cultural legacy."
  },
  {
    question: "How long does it take to see tangible results?",
    answer: "While our rapid prototyping allows us to launch impactful campaigns within weeks, true transformation is a journey. We focus on quick wins to generate immediate ROI, while laying the robust groundwork for sustainable, long-term market dominance."
  },
  {
    question: "Do you collaborate with in-house marketing teams?",
    answer: "Absolutely. We view ourselves as a seamless extension of your team. Whether you need us to take the reins completely or co-create alongside your internal experts, our agile pods adapt to your unique workflow to maximize impact."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes, our relationship doesn't end at launch. We provide comprehensive post-launch support, continuous performance monitoring, and iterative improvements to ensure your product stays ahead of the curve."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We are technology agnostic, but we specialize in modern, scalable tech stacks including React, Next.js, Node.js, and cloud-native architectures to deliver lightning-fast and secure digital products."
  },
  {
    question: "How do you handle project management and communication?",
    answer: "Transparency is key. We use agile methodologies, providing you with dedicated project managers, regular milestone updates, and open communication channels to keep you in the loop at all times."
  }
];

export const testimonials = [
  {
    id: 1,
    quote: "Working with scaloMATRIX was a game-changer. They completely transformed our brand identity and helped us 10x our organic traffic in just 6 months.",
    name: "Sarah Jenkins",
    role: "CMO, TechNova",
    rating: 5,
  },
  {
    id: 2,
    quote: "Their attention to detail and strategic approach is unmatched. The web app they built for us not only looks stunning but performs flawlessly under heavy load.",
    name: "David Chen",
    role: "Founder, ScaleUp SaaS",
    rating: 5,
  },
  {
    id: 3,
    quote: "We hired them for a complete rebrand. What we got was a masterclass in modern digital strategy. I highly recommend Ranjeet and his incredible team.",
    name: "Elena Rodriguez",
    role: "VP of Growth, FinEdge",
    rating: 5,
  }
];

export const insights = [
  {
    id: 1,
    category: "Marketing Strategy",
    title: "The Complete GEO + AEO Checklist For Brand Marketers In 2026",
    date: "July 12, 2026",
    excerpt: "Generative Engine Optimization (GEO) and Answer Engine Optimization (AEO) are the new frontiers of search. Here is your ultimate checklist to stay ahead.",
    image: geoAeoImg
  },
  {
    id: 2,
    category: "AI & Tech",
    title: "AEO 101: How Brands Get Featured In AI-Generated Answers",
    date: "June 28, 2026",
    excerpt: "Discover the exact mechanics behind how AI search engines decide which brands to feature, and what might be stopping your brand from appearing.",
    image: aeo101Img
  },
  {
    id: 3,
    category: "Case Study",
    title: "Making Headlines: Omnichannel Launch for an Original News Show",
    date: "May 15, 2026",
    excerpt: "How we crafted a bold, multi-platform campaign that disrupted the digital news space and garnered millions of views in its opening weekend.",
    image: omnichannelImg
  },
  {
    id: 4,
    category: "Design & UX",
    title: "Designing for Conversion: How Micro-Interactions Drive Sales",
    date: "April 02, 2026",
    excerpt: "Learn how subtle UI animations and micro-interactions can significantly boost your e-commerce conversion rates and improve user retention.",
    image: geoAeoImg
  }
];


export const navLinks = [
  { name: 'Work', href: '/work' },
  { name: 'Solutions', href: '#', hasDropdown: true },
  { name: 'About', href: '/about', hasDropdown: true },
  { name: 'Resources', href: '#', hasDropdown: true },
  { name: 'Careers', href: '/career' },
];

export const megaMenuData = {
  Solutions: {
    type: 'columns',
    columns: [
      {
        title: 'BRAND',
        items: [
          { title: 'Brand Solution', href: process.env.NEXT_PUBLIC_BRAND_URL || 'http://brand.localhost' }
        ]
      },
      {
        title: 'COMMERCE',
        items: [
          { title: 'Shopify', href: process.env.NEXT_PUBLIC_SHOPIFY_URL || 'http://shopify.localhost' },
          { title: 'Marketplace', href: process.env.NEXT_PUBLIC_MARKETPLACE_URL || 'https://marketplace-scalomatrix.onrender.com' },
          { title: 'Finance', href: process.env.NEXT_PUBLIC_FINANCE_URL || 'http://finance.localhost' },
          { title: 'Funnel & Lead-Gen', href: process.env.NEXT_PUBLIC_LEADGEN_URL || 'http://leadgen.localhost' }
        ]
      },
      {
        title: 'GROWTH',
        items: [
          { title: 'Growth Solution', href: process.env.NEXT_PUBLIC_GROWTH_URL || 'http://growth.localhost' },
          { title: 'Media', href: process.env.NEXT_PUBLIC_MEDIA_URL || 'http://media.localhost' }
        ]
      }
    ]
  },
  About: {
    type: 'projects',
    hideTags: true,
    items: [
      { title: 'How We Work', href: '/about/how-we-work' },
      { title: 'Our Partnerships', href: '/about/our-partnerships' },
      { title: 'News Centre', href: '/about/news-centre' },
      { title: 'Schbang Network', href: '/about/network' },
      { title: 'CSR', href: '/about/csr' },
      { title: 'Meet The Team', href: '/about/team' },
    ],
    featuredProjects: [
      {
        title: 'Making Headlines with our omnichannel launch campaign for a bold original News Show',
        description: 'Case Study • Vantage',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/64774c61a485e13dd8b2a165_VANTAGE%20STUDY%20m%20text%20(Large).png',
        link: '#'
      },
      {
        title: 'Hyper-personalized social campaign for India’s biggest food delivery startup',
        description: 'Case Study • Swiggy',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6477260dbbb4647b0057f061_SWIGGY%20CASE%20STUDY%20M%20TEXT-01%20(Large).png',
        link: '#'
      }
    ]
  },
  Resources: {
    type: 'projects',
    hideTags: true,
    items: [
      { title: 'Blogs', href: '/resources/blogs' },
      { title: 'The Edge', href: '/resources/the-edge' },
    ],
    featuredProjects: [
      {
        title: 'The Complete GEO + AEO Checklist For Brand Marketers In 2026',
        description: 'Blog Post • SEO',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a50f13e8e27025e5f498bb4_image%20(13).png',
        link: '#'
      },
      {
        title: "AEO 101: How Brands Get Featured In AI-Generated Answers (And What's Stopping You)",
        description: 'Blog Post • AI',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a50c71e04a12bcaea2d6ee6_AEO-%20website.jpg',
        link: '#'
      }
    ]
  }
};



export const approachIcons = [
  { src: "/logo/Frame 1.svg", text: "love what we do" },
  { src: "/logo/Frame 2.svg", text: "roots to visuals" },
  { src: "/logo/Frame 3.svg", text: "calm process" },
  { src: "/logo/Frame 4.svg", text: "efficiency first" },
  { src: "/logo/Frame 5.svg", text: "creative minds" },
  { src: "/logo/Frame 6.svg", text: "fueled by curiosity" }
];

export const solutions = [
  {
    id: "01",
    title: "Brand",
    desc: "Build a lasting legacy and connect deeply with your audience through powerful storytelling.",
    link: process.env.NEXT_PUBLIC_BRAND_URL || "http://brand.localhost",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
    list: ["Brand Strategy", "Visual Identity", "Packaging Design", "UI/UX Experience", "Messaging & Voice"]
  },
  {
    id: "02",
    title: "Commerce",
    desc: "Scale your revenue seamlessly with high-converting, lightning-fast storefronts.",
    link: process.env.NEXT_PUBLIC_COMMERCE_URL || "http://commerce.localhost",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["Shopify Plus Development", "Conversion Rate (CRO)", "Custom Landing Pages"]
  },
  {
    id: "03",
    title: "Growth",
    desc: "Accelerate your market presence and acquire high-LTV customers worldwide.",
    link: process.env.NEXT_PUBLIC_GROWTH_URL || "http://growth.localhost",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    list: ["Performance Marketing", "UGC & Creators", "SEO, SEM & Retention"]
  },
  {
    id: "04",
    title: "Media",
    desc: "Drive growth and maximize ROI with data-driven media and performance marketing solutions.",
    link: process.env.NEXT_PUBLIC_MEDIA_URL || "http://media.localhost",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
      </svg>
    ),
    list: ["Media Planning", "Media Buying", "Content Creation"]
  },
  {
    id: "05",
    title: "MarketPlace",
    desc: "Dominate online marketplaces with optimized product listings and ad strategies.",
    link: process.env.NEXT_PUBLIC_MARKETPLACE_URL || "https://marketplace-scalomatrix.onrender.com",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["Amazon Optimization", "E-commerce SEO", "Listing Management"]
  },
  {
    id: "06",
    title: "Finance",
    desc: "Optimize your budget allocation and scale your marketing efficiently with clear ROI tracking.",
    link: process.env.NEXT_PUBLIC_FINANCE_URL || "http://finance.localhost",
    shape: "hexagon",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    list: ["Financial Planning", "Budget Allocation", "ROI Tracking"]
  },
  {
    id: "07",
    title: "Lead Gen",
    desc: "Build highly converting funnels to capture and nurture quality inbound leads at scale.",
    link: process.env.NEXT_PUBLIC_LEADGEN_URL || "http://leadgen.localhost",
    shape: "circle",
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    list: ["B2B Leads", "Funnel Optimization", "Inbound Marketing"]
  }
];


export const heroData = {
  badge: 'Welcome to',
  headline: {
    text: 'Scale Your',
    highlight: 'Business'
  },
  description: 'Update this text in src/data/content.js to change your landing page content without touching React code.',
  buttonText: 'Get Started'
};

export const faqData = {
  badge: 'Got Questions?',
  headline: {
    text: 'Frequently Asked ',
    highlight: 'Questions'
  },
  description: 'Find answers to common questions here.',
  faqs: [
    { q: 'How does it work?', a: 'Update this answer in src/data/content.js' }
  ]
};
