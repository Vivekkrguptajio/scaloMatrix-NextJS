"use client";
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import BenefitsStrip from '../components/BenefitsStrip';
import BrandLaunchBill from '../components/BrandLaunchBill';
import LaunchRiskSection from '../components/LaunchRiskSection';
import OurModel from '../components/OurModel';
import { ScrollProgressBar } from '../components/ScrollReveal';
import ScrollReveal from '../components/ScrollReveal';
import ScrollToTop from '../components/ScrollToTop';
import WhatsAppButton from '../components/WhatsAppButton';
import SmoothScroll from '../components/SmoothScroll';
import Loader from '../components/Loader';
import StickyAudit from '../components/StickyAudit';

// Dynamic imports for below-the-fold components for fast LCP & light bundle
const ProblemSection = dynamic(() => import('../components/ProblemSection'));
const IsThisForYou = dynamic(() => import('../components/IsThisForYou'));
const WhatsIncluded = dynamic(() => import('../components/WhatsIncluded'));
const WhatsIncludedTabs = dynamic(() => import('../components/WhatsIncludedTabs'));
const FirstNinetyDays = dynamic(() => import('../components/FirstNinetyDays'));

// A/B test: "What's included" section. Set one to false to hide it.
const SHOW_INCLUDED_CARDS = false; // 6-card grid (hidden: the tabs version is kept)
const SHOW_INCLUDED_TABS = true;  // tabs + phone mockup

// Hidden sections: set to true to show again.
const SHOW_PROBLEM_SECTION = false; // "Why selling only on marketplaces or hiring agencies is broken"
const SHOW_CALCULATOR = false;      // "Marketplace fees vs your own store"
const SHOW_WHAT_WE_DO = false;      // "Everything your brand needs to launch and scale."
const SHOW_YOU_VS_US = false;       // "You vs Us: Zero Confusion."
const SHOW_COMPARISON = false;      // "How scaloMATRIX compares."
const SHOW_HOW_YOU_PAY = false;     // "How you pay: Zero surprises."
const SHOW_OLD_ROADMAP = false;     // "Your first 90 days roadmap." (old version)
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
        <ScrollToTop />
        <WhatsAppButton />
        <StickyAudit />
        <Navbar />

        <main className="page-frame main-curve relative z-20 bg-cream shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {/* Section 2: Hero + 2-step Form */}
          <Hero />

          {/* Quick pricing and model highlights */}
          <BenefitsStrip />

          {/* What the brand launch costs before the first order */}
          <BrandLaunchBill />

          {/* Verified Infrastructure partners */}
          <TrustBar />

          {/* The upfront cash-flow risk for new brands */}
          <LaunchRiskSection />

          {/* Our model: pay once to start, we earn when you sell */}
          <OurModel />

          {/* Is This For You? */}
          <ScrollReveal variant="scaleUp">
            <IsThisForYou />
          </ScrollReveal>

          {/* What's included: everything a big brand has, done for you (A/B — see flags at top) */}
          {SHOW_INCLUDED_CARDS && (
            <ScrollReveal>
              <WhatsIncluded />
            </ScrollReveal>
          )}
          {SHOW_INCLUDED_TABS && (
            <ScrollReveal>
              <WhatsIncludedTabs />
            </ScrollReveal>
          )}

          {/* Proof: real stores we built, right after what's included */}
          <ResultsWork />

          {/* Your first 90 days: we do / you do timeline */}
          <ScrollReveal>
            <FirstNinetyDays />
          </ScrollReveal>

          {/* Section 4: Problem Section */}
          {SHOW_PROBLEM_SECTION && (
            <ScrollReveal>
              <ProblemSection />
            </ScrollReveal>
          )}

          {/* Section 6: What We Do For You (6 Pillars) */}
          {SHOW_WHAT_WE_DO && (
            <ScrollReveal>
              <WhatWeDo />
            </ScrollReveal>
          )}

          {/* Section 7: You vs Us */}
          {SHOW_YOU_VS_US && (
            <ScrollReveal variant="scaleUp">
              <YouVsUs />
            </ScrollReveal>
          )}

          {/* Section 8: First 90 Days Roadmap */}
          {SHOW_OLD_ROADMAP && (
            <ScrollReveal>
              <Roadmap90Days />
            </ScrollReveal>
          )}

          {/* Section 9: Comparison Table */}
          {SHOW_COMPARISON && (
            <ScrollReveal variant="scaleUp">
              <ComparisonTable />
            </ScrollReveal>
          )}

          {/* Section 10: Marketplace Fees vs Own Store Calculator */}
          {SHOW_CALCULATOR && (
            <ScrollReveal>
              <Calculator />
            </ScrollReveal>
          )}

          {/* Section 12: How You Pay */}
          {SHOW_HOW_YOU_PAY && (
            <ScrollReveal>
              <HowYouPay />
            </ScrollReveal>
          )}

          {/* Section 14: Founder Section */}
          <ScrollReveal variant="scaleUp">
            <FounderSection />
          </ScrollReveal>

          {/* FAQs: last answers before the form */}
          <ScrollReveal>
            <Faq />
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
