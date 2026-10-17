"use client";
import Image from 'next/image';
import { AnimatedCounter } from './Hero'

const HappyClients = () => {
  const testimonials = [
    {
      logo: (
        <div className="relative h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png" alt="Nutraphyll" fill className="object-contain" sizes="96px" />
        </div>
      ),
      text: "One of the pages we have made with TLPC team has resulted into 44% increase in conversion rate",
      author: "Agarwal",
      title: "Founder, Nutraphyll",
      avatarColor: "bg-orange-200",
      avatar: "https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png"
    },
    {
      logo: (
        <div className="relative h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png" alt="Judex" fill className="object-contain" sizes="96px" />
        </div>
      ),
      text: "The strategic approach they brought to the project resulted in a revenue jump by 35%",
      author: "Ujjwal",
      title: "Founder, Judex",
      avatarColor: "bg-gray-300",
      avatar: "https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png"
    },
    {
      logo: (
        <div className="relative h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png" alt="Nada" fill className="object-contain" sizes="96px" />
        </div>
      ),
      text: "The improved user experience has led to higher engagement and a more satisfied customer base.",
      author: "Ahsan",
      title: "Founder, House of Nada",
      avatarColor: "bg-orange-200",
      avatar: "https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png"
    },
    {
      logo: (
        <div className="relative h-9 w-24">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png" alt="Drapes" fill className="object-contain" sizes="96px" />
        </div>
      ),
      text: "The changes they made to our landing pages have led to an immediate spike in our daily orders.",
      author: "Caroline",
      title: "Founder, Drapes Corner",
      avatarColor: "bg-yellow-200",
      avatar: "https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png"
    }
  ];

  const tickerItems = [
    { name: "NUTRAPHYLL", stat: "+20% Revenue" },
    { name: "HOUSE OF NADA", stat: "+44% Revenue" },
    { name: "DRAPES CORNER", stat: "+50% Revenue" },
    { name: "JUDEX", stat: "+43% Revenue" }
  ];

  return (
    <section className="w-full pt-16 md:pt-24 font-sans bg-paper relative z-10">

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 md:px-12 xl:px-16 mb-10 md:mb-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="eyebrow mb-4">In their words</span>
            <h2 className="h-display h-section">
              <AnimatedCounter target={100} suffix="+" /> founders, <span className="accent">one</span> pattern.
            </h2>
          </div>
          <p className="lead max-w-[400px]">
            More orders from the traffic they were already paying for. Here is how they put it.
          </p>
        </div>
      </div>

      {/* Testimonials marquee */}
      <div className="w-full overflow-hidden group py-2"
        onTouchStart={(e) => e.currentTarget.querySelector('.marquee-inner').style.animationPlayState = 'paused'}
        onTouchEnd={(e) => e.currentTarget.querySelector('.marquee-inner').style.animationPlayState = 'running'}
      >
        <div className="marquee-inner flex gap-4 md:gap-6 px-5 md:px-8 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '40s' }}>
          {[...testimonials, ...testimonials].map((client, idx) => (
            <figure key={idx} className="w-[280px] sm:w-[380px] flex flex-col shrink-0 bg-cream rounded-[24px] border border-line p-6 sm:p-8">
              <div className="flex gap-[3px] mb-5" aria-label="5 out of 5 stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FD5800" aria-hidden="true">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              <blockquote className="font-display text-base sm:text-lg font-medium text-ink leading-[1.4] tracking-[-0.01em] mb-8 flex-1">
                &ldquo;{client.text}&rdquo;
              </blockquote>

              <figcaption className="flex items-center justify-between gap-4 pt-5 border-t border-line">
                <div>
                  <p className="font-semibold text-ink text-[15px] leading-tight">{client.author}</p>
                  <p className="font-mono text-[10px] tracking-[0.1em] uppercase text-muted mt-1">{client.title}</p>
                </div>
                <div className="shrink-0 bg-white rounded-lg px-2 py-1">{client.logo}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Result ticker */}
      <div className="relative z-50 w-full bg-brand overflow-hidden whitespace-nowrap py-3.5 mt-12 md:mt-16">
        <div className="animate-marquee-reverse flex gap-8 items-center" style={{ animationDuration: '80s' }}>
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <div className="flex items-center gap-3 font-mono text-xs sm:text-sm font-medium tracking-[0.12em]">
                <span className="text-ink uppercase">{item.name}</span>
                <span className="text-white/70" aria-hidden="true">•</span>
                <span className="text-white uppercase">{item.stat}</span>
              </div>
              <span className="text-ink/25" aria-hidden="true">/</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HappyClients;
