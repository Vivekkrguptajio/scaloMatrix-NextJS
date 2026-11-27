"use client";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { whatsappUrl } from './WhatsAppButton';
import HeroLeadForm from './HeroLeadForm';

// Bottom of the page: the SAME 2-step form as the hero (same fields, same email), so every lead
// looks identical. Buttons across the page still scroll to the hero form; this one catches the
// visitors who read all the way down.
export default function ContactUs() {
  const rows = [
    { icon: FaPhoneAlt, label: 'Call / WhatsApp', node: <a href="tel:+919217728977" className="text-base sm:text-lg font-semibold text-ink hover:text-[#FD5800] transition-colors">+91 92177 28977</a> },
    { icon: FaEnvelope, label: 'Email Support', node: <a href="mailto:info@krafficgroup.com" className="text-base sm:text-lg font-semibold text-ink hover:text-[#FD5800] transition-colors">info@krafficgroup.com</a> },
    { icon: FaMapMarkerAlt, label: 'Headquarters', node: <p className="text-sm font-semibold text-ink">Kraffic Enterprises · Patel Nagar, Delhi 110008, India</p> },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative w-full py-16 md:py-24 bg-cream font-sans overflow-hidden border-b border-line">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[580px] h-[580px] bg-[radial-gradient(circle,rgba(253,88,0,0.08)_0%,transparent_70%)] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(253,88,0,0.04)_0%,transparent_70%)] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container-x relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: header + contact details */}
          <div>
            <p className="mb-2 font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-ink">
              Get in touch
            </p>
            <h2
              id="contact-title"
              className="h-display !font-semibold text-[clamp(24px,2.4vw,36px)] leading-[1.08] tracking-tight text-ink"
            >
              Let&apos;s build your <span className="text-brand">own brand.</span>
            </h2>
            <p className="mt-3 mb-8 max-w-md text-[15px] sm:text-[17px] text-muted">
              Tell us about your product or factory. We call you within 1 hour during working hours to schedule a 1-on-1 call with a growth expert.
            </p>

            <div className="flex flex-col gap-5">
              {rows.map(({ icon: Icon, label, node }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 shrink-0 bg-paper border border-line rounded-[10px] flex items-center justify-center text-ink group-hover:bg-[#FD5800] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-mono text-[10.5px] text-muted uppercase tracking-[0.14em] mb-0.5">{label}</p>
                    {node}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-line/60">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 bg-[#25D366] text-white font-semibold text-[14px] shadow-sm hover:brightness-105 transition-all"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: same form as the hero */}
          <div className="flex justify-center lg:justify-end">
            <HeroLeadForm id="contact-lead-form" source="Bottom 2-Step Lead Form" />
          </div>
        </div>
      </div>
    </section>
  );
}
