import Image from 'next/image'
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

export default function Partners() {
  return (
    <section id="partners" className="relative bg-cream font-sans">
      {/* Orange tab pinned to the section's top-left corner (flush with the margin line) */}
      <span className="absolute top-0 left-[var(--m)] bg-brand text-white font-mono text-[11px] font-medium tracking-[0.16em] uppercase px-4 py-2">
        Partners
      </span>

      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-16 items-center pt-20 pb-14 md:pt-24 md:pb-20">
          <h2 className="h-display h-section !text-[clamp(1.4rem,2.3vw,33px)] max-w-[460px]">
            Official partners of the platforms{' '}
            <span className="accent">your store already runs on.</span>
          </h2>

          {/* Logo grid: 1px gaps over a line-coloured background draw the cell borders */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-line border border-line">
            {partners.map((p) => (
              <li key={p.name} className="partner-cell flex flex-col items-center justify-center gap-5 px-2 py-10 md:py-[34px] text-center">
                <span className="flex items-center justify-center gap-2 h-[36px]">
                  <Image src={p.logo} alt={p.showName ? '' : `${p.name} logo`} unoptimized className={`${p.className} object-contain`} />
                  {p.showName && <span className="font-display font-bold text-[21px] leading-none tracking-tight text-[#141210]">{p.name}</span>}
                </span>
                <span className="font-mono text-[10.5px] tracking-[0.12em] uppercase whitespace-nowrap text-[#6B655C]">{p.role}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
