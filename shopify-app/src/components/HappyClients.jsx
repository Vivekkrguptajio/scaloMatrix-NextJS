"use client";
import Image from 'next/image';
import { AnimatedCounter } from './Hero'

const HappyClients = () => {
  const testimonials = [
    {
      logo: (
        <div className="relative h-12 w-32">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png" alt="Nutraphyll" fill className="object-contain" sizes="128px" />
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
        <div className="relative h-12 w-32">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png" alt="Judex" fill className="object-contain" sizes="128px" />
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
        <div className="relative h-12 w-32">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png" alt="Nada" fill className="object-contain" sizes="128px" />
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
        <div className="relative h-12 w-32">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509474/shopify-app/logo/Wayora.png" alt="Wayora" fill className="object-contain" sizes="128px" />
        </div>
      ),
      text: "Our customers are more engaged, and our sales have never been better.",
      author: "Ashrit",
      title: "Founder, Wayora Styleverse",
      avatarColor: "bg-pink-200",
      avatar: "https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509474/shopify-app/logo/Wayora.png"
    },
    {
      logo: (
        <div className="relative h-12 w-32">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509475/shopify-app/logo/WayoraN.png" alt="Wayora Natural" fill className="object-contain" sizes="128px" />
        </div>
      ),
      text: "Working with them was a game-changer. The new design directly improved our conversion rates.",
      author: "Ashrit",
      title: "Founder, Wayora Natural",
      avatarColor: "bg-green-200",
      avatar: "https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509475/shopify-app/logo/WayoraN.png"
    },
    {
      logo: (
        <div className="relative h-12 w-32">
          <Image src="https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png" alt="Drapes" fill className="object-contain" sizes="128px" />
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
    { name: "DECODE AGE", stat: "+20% CVR" },
    { name: "EMMA MATTRESS", stat: "+20% CVR" },
    { name: "THE GOOD BUG", stat: "+50% CVR" },
    { name: "SUPERYOU", stat: "+33% CVR" },
    { name: "BOLD CARE", stat: "+50% CVR" },
    { name: "ZEROHARM", stat: "+35% REV" },
    { name: "WELLBEING", stat: "+44% CVR" }
  ];

  return (
    <section className="w-full py-8 md:py-12 lg:py-14 font-sans bg-white relative z-10">

      <div className="max-w-[1024px] mx-auto flex flex-col items-center px-4 sm:px-5 md:px-16 xl:px-0 mb-6 w-full">
        
        {/* Header Content Wrapper */}
        <div className="flex flex-col w-full items-center justify-center mb-0 gap-3 text-center">
          
          {/* Avatars */}
          <div className="flex -space-x-3 mb-2 justify-center">
            {['https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509470/shopify-app/logo/Judex.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509471/shopify-app/logo/Nada.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509472/shopify-app/logo/Nutraphyll.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509474/shopify-app/logo/Wayora.png', 'https://res.cloudinary.com/dqtzchlqj/image/upload/q_auto,f_auto/v1787509469/shopify-app/logo/drapes.png'].map((src, i) => (
              <div key={i} className="relative w-12 h-12 rounded-full border-[3px] border-white bg-gray-300 overflow-hidden shadow-sm">
                <Image src={src} alt="Client" fill className="object-cover" sizes="48px" />
              </div>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-[1.1] text-black tracking-tight">
            <AnimatedCounter target={100} suffix="+" /> <span className="text-[#FD5800]">Happy Clients</span>
          </h2>
          
          {/* Subtext */}
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Trusted by thousands of people
          </p>
        </div>
      </div>

      {/* Testimonials Slider/Grid */}
      <div className="w-full border-t-[0.5px] border-b-[0.5px] md:border-t md:border-b border-black bg-white overflow-hidden group">
        <div className="flex animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '50s' }}>
          {[...testimonials, ...testimonials].map((client, idx) => (
            <div key={idx} className="min-w-[250px] sm:min-w-[340px] max-w-[250px] sm:max-w-[340px] flex flex-col border-r-[0.5px] md:border-r border-black shrink-0 bg-white">
              
              {/* Logo Section */}
              <div className="h-[84px] flex items-center justify-center p-4 border-b border-black">
                {client.logo}
              </div>

              {/* Content Section */}
              <div className="flex-1 px-4 sm:px-6 py-5 sm:py-7 flex flex-col items-center text-center">
                
                {/* Stars */}
                <div className="flex gap-[3px] mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="#FD5800" stroke="#FD5800" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-[13px] sm:text-[15px] md:text-[17px] font-medium text-[#111] mb-6 sm:mb-8 leading-[1.55]">
                  "{client.text}"
                </p>

                {/* Author Info */}
                <div className="mt-auto flex flex-col items-center">
                  <h4 className="font-bold text-black text-[15px]">{client.author}</h4>
                  <p className="text-[13px] text-gray-500 mt-0.5">{client.title}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Orange Straight Ticker Banner */}
      <div className="relative z-50 w-full bg-[#FD5800] overflow-hidden whitespace-nowrap py-3 mt-10 shadow-md">
        <div className="animate-marquee-reverse flex gap-8 items-center" style={{ animationDuration: '80s' }}>
          {/* Double the items to create seamless loop effect */}
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <div className="flex items-center gap-3 font-mono text-xs sm:text-sm lg:text-lg font-bold tracking-wider">
                <span className="text-black uppercase">{item.name}</span>
                <span className="text-white/80 text-lg leading-none mt-[-2px]">•</span>
                <span className="text-white uppercase">{item.stat}</span>
              </div>
              <span className="text-black/20 text-lg">|</span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HappyClients;
