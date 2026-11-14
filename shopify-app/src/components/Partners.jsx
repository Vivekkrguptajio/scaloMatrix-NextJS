import Image from 'next/image'
import AutoMarquee from './AutoMarquee'
import meta from '../assets/parters/meta.svg'
import shopify from '../assets/parters/shopify.svg'
import shiprocket from '../assets/parters/shiprocket.svg'
import gokwik from '../assets/parters/gokwik.svg'
import aisensy from '../assets/parters/aisensy.png'

// Logos live in src/assets/parters. Meta and Shopify are icon-only files, so their name is
// written next to the icon (showName); the other three already contain their wordmark.
const partners = [
  { name: 'Meta', role: 'Advertising', logo: meta, className: 'h-[26px] w-[26px]', showName: true },
  { name: 'Shopify', role: 'Commerce', logo: shopify, className: 'h-[26px] w-[26px]', showName: true },
  { name: 'Shiprocket', role: 'Logistics', logo: shiprocket, className: 'h-[28px] w-auto' },
  { name: 'GoKwik', role: 'Checkout & RTO', logo: gokwik, className: 'h-[31px] w-auto' },
  { name: 'AiSensy', role: 'WhatsApp', logo: aisensy, className: 'h-[25px] w-auto' },
]

function PartnerCell({ p, card = false }) {
  return (
    <li className={`partner-cell flex flex-col items-center justify-center text-center ${card ? 'shrink-0 w-[168px] gap-4 px-3 py-7 border border-line' : 'gap-5 px-2 py-[34px]'}`}>
      <span className="flex items-center justify-center gap-2 h-[36px]">
        <Image src={p.logo} alt={`${p.name} logo, ${p.role.toLowerCase()} partner`} unoptimized className={`${p.className} object-contain`} />
        {p.showName && <span className="font-display font-bold text-[21px] leading-none tracking-tight text-[#141210]">{p.name}</span>}
      </span>
      <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase whitespace-nowrap text-[#6B655C]">{p.role}</span>
    </li>
  )
}

export default function Partners() {
  return (
    <section id="partners" className="relative bg-cream font-sans">
      {/* Orange tab pinned to the section's top-left corner (flush with the margin line) */}
      <span className="absolute top-0 left-[var(--m)] bg-brand text-white font-mono text-[10px] font-medium tracking-[0.16em] uppercase px-[0.9rem] py-[0.45rem]">
        Partners
      </span>

      <div className="container-x">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-16 items-center pt-20 pb-14 md:pt-24 md:pb-20">
          <h2 className="h-display h-section !text-[clamp(1.4rem,2.3vw,33px)] max-w-[460px]">
            Official partners of the platforms{' '}
            <span className="accent">your store already runs on.</span>
          </h2>

          {/* Desktop (1024px+): the 5-cell grid, unchanged */}
          <ul className="hidden lg:grid grid-cols-5 gap-px bg-line border border-line">
            {partners.map((p) => <PartnerCell key={p.name} p={p} />)}
          </ul>

          {/* Phone / tablet: a carousel that drifts left to right; drag or swipe it either way */}
          <div className="lg:hidden -mx-[var(--gap)]">
            <AutoMarquee speed={30} direction="right">
              <ul className="flex w-max gap-3 ps-[var(--gap)] pe-[var(--gap)]">
                {[...partners, ...partners].map((p, i) => (
                  <PartnerCell key={`${p.name}-${i}`} p={p} card />
                ))}
              </ul>
            </AutoMarquee>
          </div>
        </div>
      </div>
    </section>
  )
}
