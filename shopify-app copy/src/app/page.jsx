"use client";
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import { ScrollProgressBar } from '../components/ScrollReveal';
import ScrollReveal from '../components/ScrollReveal';
import CustomCursor from '../components/CustomCursor';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SmoothScroll from '../components/SmoothScroll';
import Loader from '../components/Loader';
import StickyAudit from '../components/StickyAudit';

// Dynamic imports for below-the-fold components for fast LCP & light bundle
const ProblemSection = dynamic(() => import('../components/ProblemSection'));
const IsThisForYou = dynamic(() => import('../components/IsThisForYou'));
const WhatWeDo = dynamic(() => import('../components/WhatWeDo'));
const YouVsUs = dynamic(() => import('../components/YouVsUs'));
const Roadmap90Days = dynamic(() => import('../components/Roadmap90Days'));
const ComparisonTable = dynamic(() => import('../components/ComparisonTable'));
const Calculator = dynamic(() => import('../components/Calculator'));
const ResultsWork = dynamic(() => import('../components/ResultsWork'));
const HowYouPay = dynamic(() => import('../components/HowYouPay'));
const Faq = dynamic(() => import('../components/Faq'));
const FounderSection = dynamic(() => import('../components/FounderSection'));
const ContactUs = dynamic(() => import('../components/ContactUs'));
const Contact = dynamic(() => import('../components/Contact'));

function App() {
  return (
    <SmoothScroll>
      <Loader />
      <div className="relative min-h-screen bg-[#0a0a0a] font-sans overflow-x-clip">
        <ScrollProgressBar />
        <CustomCursor />
        <ScrollToTop />
        <WhatsAppButton />
        <StickyAudit />
        <Navbar />

        <main className="page-frame main-curve relative z-20 bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Section 2: Hero + 2-step Form */}
          <Hero />

          {/* Section 3: Trust Bar */}
          <TrustBar />

          {/* Section 4: Problem Section */}
          <ScrollReveal>
            <ProblemSection />
          </ScrollReveal>

          {/* Section 5: Is This For You? */}
          <ScrollReveal variant="scaleUp">
            <IsThisForYou />
          </ScrollReveal>

          {/* Section 6: What We Do For You (6 Pillars) */}
          <ScrollReveal>
            <WhatWeDo />
          </ScrollReveal>

          {/* Section 7: You vs Us */}
          <ScrollReveal variant="scaleUp">
            <YouVsUs />
          </ScrollReveal>

          {/* Section 8: First 90 Days Roadmap */}
          <ScrollReveal>
            <Roadmap90Days />
          </ScrollReveal>

          {/* Section 9: Comparison Table */}
          <ScrollReveal variant="scaleUp">
            <ComparisonTable />
          </ScrollReveal>

          {/* Section 10: Marketplace Fees vs Own Store Calculator */}
          <ScrollReveal>
            <Calculator />
          </ScrollReveal>

          {/* Section 11: Results & Verified Work */}
          <ScrollReveal variant="scaleUp">
            <ResultsWork />
          </ScrollReveal>

          {/* Section 12: How You Pay */}
          <ScrollReveal>
            <HowYouPay />
          </ScrollReveal>

          {/* Section 13: FAQ */}
          <ScrollReveal>
            <Faq />
          </ScrollReveal>

          {/* Section 14: Founder Section */}
          <ScrollReveal variant="scaleUp">
            <FounderSection />
          </ScrollReveal>

          {/* Section 15: Contact Block */}
          <ContactUs />
        </main>

        {/* Section 16: Footer */}
        <Contact reveal={true} />
      </div>
    </SmoothScroll>
  );
}

export default function Page() {
  return <App />;
}
