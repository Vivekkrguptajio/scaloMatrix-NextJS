import Link from 'next/link';

export const metadata = {
  title: 'Terms & Conditions | scaloMATRIX',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <Link href="/" className="text-sm text-[#FD5800] font-medium hover:underline mb-8 inline-block">&larr; Back to Home</Link>

        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Terms & Conditions</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: October 2026</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-3">1. Agreement to Terms</h2>
            <p>By accessing or using scaloMATRIX services, you agree to be bound by these Terms & Conditions. If you do not agree, you may not use our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">2. Services</h2>
            <p>scaloMATRIX provides Shopify store design, development, conversion rate optimization (CRO), and related digital services. The specific scope of work for each project is defined in individual project agreements or proposals.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">3. Intellectual Property</h2>
            <p>All content, designs, code, and materials created by scaloMATRIX remain our intellectual property until full payment is received. Upon complete payment, ownership of deliverables transfers to the client as specified in the project agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">4. Payment Terms</h2>
            <p>Payment terms are specified in individual project proposals. Late payments may result in project delays or suspension of services. All fees are non-refundable unless otherwise stated in writing.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">5. Client Responsibilities</h2>
            <p>Clients are responsible for providing accurate information, timely feedback, and necessary access to platforms and accounts required for project completion.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">6. Limitation of Liability</h2>
            <p>scaloMATRIX shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">7. Termination</h2>
            <p>Either party may terminate services with written notice as specified in the project agreement. Upon termination, the client is responsible for payment of all work completed up to the termination date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">8. Governing Law</h2>
            <p>These terms are governed by the laws of India. Any disputes shall be resolved through arbitration in accordance with applicable Indian law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">9. Contact</h2>
            <p>For questions regarding these terms, please reach out to us through our <Link href="/#contact" className="text-[#FD5800] hover:underline">contact page</Link>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
