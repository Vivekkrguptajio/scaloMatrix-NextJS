"use client";
import { useEffect } from 'react';
import { useParams, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

const pageData = {
  'how-we-work': {
    title: 'How We Work',
    subtitle: 'The Process Behind The Magic',
    description: 'Schbang originally spelt as Shebang is a word created in the 17th Century and added to the lexicon of the English language, and usually used as the phrase "the whole Schbang.” At Schbang, we strive to deliver fully integrated and holistic marketing solutions to our clients and unite interrelated services like creative, media and technology under one roof.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    blocks: [
      {
        title: 'We\'re Technology-Focused',
        description: 'We believe in embracing new possibilities, whether it’s some of the sites we’ve created on Magento where a completely customised checkout process linked with deep remarketing tools prevails or the customisations on WordPress where we’ve built front ends on react.js to deliver the fastest load times possible.'
      },
      {
        title: 'We\'re Not Just Advertisers. We\'re Creators',
        description: 'Advertising, we believe, is all about creating culture. And we can’t be calling ourselves creators of culture if we aren’t making attempts to shape some of it ourselves.'
      }
    ]
  },
  'our-partnerships': {
    title: 'Our Partnerships',
    subtitle: 'Stronger Together',
    description: 'We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed. We work closely with platforms like Meta, Google, Amazon, Shopify, HubSpot, and Zoho to deliver cutting-edge technology and marketing solutions to our clients.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    blocks: [
      {
        title: 'Tech Partnerships',
        description: 'Deep integrations and certified partnerships with leading global tech stacks to bring the best SaaS solutions to India and the world.'
      },
      {
        title: 'Media Partnerships',
        description: 'Direct relationships with top publishers, social media platforms, and ad networks for exclusive inventory and beta product access.'
      }
    ]
  },
  'news-centre': {
    title: 'News Centre',
    subtitle: 'Latest Updates & Announcements',
    description: 'Keep up with the latest campaigns, awards, leadership hires, and company milestones that make headlines. Discover how we are creating a cultural impact across the globe.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
    blocks: [
      {
        title: 'Campaign Headlines',
        description: 'Read about our viral campaigns, from Swiggy Instamart to Tata Capital, that are setting new benchmarks in the advertising industry.'
      },
      {
        title: 'Agency Updates',
        description: 'From opening new global offices to winning "Agency of the Year," stay tuned to our growth story.'
      }
    ]
  },
  'network': {
    title: 'Schbang Network',
    subtitle: 'Global Reach, Local Expertise',
    description: 'The Schbang Network connects a diverse group of specialized agencies, creators, and technologists across the globe. Together, we provide end-to-end solutions that scale with your business.',
    image: 'https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2070&auto=format&fit=crop',
    blocks: [
      {
        title: 'Schbang Motion Pictures',
        description: 'Our in-house production hub that comprises scriptwriters, photographers, videographers, producers, directors, and animators.'
      },
      {
        title: 'Schbang 808',
        description: 'Our specialized arm for branded audio, audio logos, and music/sound production, delivering blazing-fast turnarounds.'
      }
    ]
  },
  'csr': {
    title: 'Corporate Social Responsibility',
    subtitle: 'Making A Difference',
    description: 'We are committed to creating a positive impact in the communities where we operate. Through sustainable practices, educational initiatives, and charitable partnerships, we strive to give back.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop'
  },
  'team': {
    title: 'Meet The Team',
    subtitle: 'The Minds Behind The Work',
    description: 'Our diverse team of strategists, designers, engineers, and marketers are united by a shared passion for creating exceptional digital experiences. Meet the people who make it all happen.',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop'
  },
  'blogs': {
    title: 'Blogs',
    isBlogLayout: true,
    articles: [
      {
        title: 'Month In A Nutshell June Edition',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a43b1e3a5e6b7fa2b07984a_Website%20thumbnail.png',
        link: '#'
      },
      {
        title: 'Month In A Nutshell May Edition',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6a20077d81a556888b198b32_Image_20260603_161821_355.jpeg',
        link: '#'
      },
      {
        title: 'Month In A Nutshell April Edition',
        image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/69f347c24f71c5ee3dc058ec_thumbnail.png',
        link: '#'
      }
    ]
  },
  'the-edge': {
    title: 'Welcome to the Edge!',
    subtitle: 'Pushing Boundaries',
    description: 'As creatives by nature, we love to push the boundaries of what we can create, experimenting with technology and art, uncover insights and build exciting new resources that help us take our work to the next level. We’re now opening up our experiments to you so we can all #CreateASchbang together. Check them out below and let us know your thoughts on our socials!',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    blocks: [
      {
        title: 'Schbang’s Bot Army',
        description: 'We strongly believe that AI won’t replace human beings but people using AI will certainly get ahead in the race. So we created an army of 20 custom AI Bots to help Schbangers mine insights, brainstorm campaign ideas and refine their content. Our efficient super-assistants can help with everything from dissecting the target audience for your brand to writing captions and scripts for ads. They can also help with operational tasks like generating appropriate questions to help us get clearer briefs from clients and breaking down large projects into action plans that enable us to achieve results fast. Fascinated by the possibilities? We’re inviting you to take them for a spin now!'
      },
      {
        title: 'Schbang’s Marketing Glossary',
        description: 'We work in a constantly changing field. As both consumers and the platforms they interact with evolve at a rapid pace, there are new concepts and theories coming up every day. It can feel intimidating to keep track of what things actually mean, especially for young joineees. So we created this Marketing Glossary to familiarize you with the most important terms that you’ll regularly hear and use in the field. It includes industry jargon and terminologies from all branches, including copywriting, social media, graphic design, SEO, paid media, video editing, animation and more. Whether you’re a fresher wanting to catch up with the others or a seasoned professional who just wants to brush up on their ABCs, this glossary is a must-read for anyone who wants to stay updated with the times.'
      }
    ]
  }
};

export default function GenericPage() {
  const { slug } = useParams();
  const pathname = usePathname();
  const data = pageData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!data) {
    window.location.href = "/";
    return null;
  }

  return (
    <div className="relative min-h-screen bg-white overflow-x-clip font-sans">
      <Navbar isDarkTheme={false} />
      
      <main className="relative z-10 w-full bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
        {data.isBlogLayout ? (
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#111111] mb-16 tracking-tight">
              {data.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
              {data.articles.map((article, idx) => (
                <a key={idx} href={article.link} className="group block">
                  <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden mb-5">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 leading-tight">
                    {article.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            
            {/* Header Section */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#FD5800] font-bold tracking-widest uppercase mb-4 text-sm"
              >
                {data.subtitle}
              </motion.h4>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-7xl font-black text-[#111111] mb-6 tracking-tight"
              >
                {data.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed"
              >
                {data.description}
              </motion.p>
            </div>
            
            {/* Main Image Section */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full h-[400px] md:h-[600px] rounded-[32px] overflow-hidden mt-8 relative group"
            >
              <img 
                src={data.image} 
                alt={data.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Dummy Content Blocks to make it look full */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
              {(data.blocks || [
                {
                  title: 'Our Vision',
                  description: 'To build digital experiences that are not only beautiful but functionally superior. We aim to bridge the gap between creative storytelling and hard-hitting metrics.'
                },
                {
                  title: 'Our Impact',
                  description: 'Over the years, we have helped hundreds of brands scale globally. From initial strategy to final execution, our work drives tangible business growth and cultural resonance.'
                }
              ]).map((block, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="bg-gray-50 p-10 rounded-3xl"
                >
                  <h3 className="text-2xl font-black mb-4">{block.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">
                    {block.description}
                  </p>
                </motion.div>
              ))}
            </div>
            
          </div>
        )}
        </div>
      </main>
      
      <Contact reveal={true} />
    </div>
  );
}
