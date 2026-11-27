"use client";
import { FaWhatsapp } from 'react-icons/fa';

const NUMBER = '919217728977';
const MESSAGE = "Hi scaloMATRIX, I want to build my own D2C brand. Let's connect.";

export const whatsappUrl = `https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

// Floating "chat on WhatsApp" button (bottom-right; scroll-to-top sits below it)
export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      data-track-location="floating-button"
      className="hidden sm:flex fixed sm:bottom-[5.25rem] sm:right-6 md:bottom-[6.5rem] md:right-8 z-[100] sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#25D366] text-white items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300 rounded-[10px]"
    >
      <span className="absolute inset-0 bg-[#25D366] opacity-40 animate-ping rounded-[10px]" aria-hidden="true" />
      <FaWhatsapp className="relative w-6 h-6 md:w-7 md:h-7" />
    </a>
  );
}
