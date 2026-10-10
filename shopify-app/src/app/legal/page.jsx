import Link from 'next/link';

export const metadata = {
  title: 'Legal & Policies | scaloMATRIX',
};

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <Link href="/" className="text-sm text-[#FD5800] font-medium hover:underline mb-8 inline-block">&larr; Back to Home</Link>

        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Legal & Policies</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: October 2026</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-3">Company Information</h2>
            <p>scaloMATRIX is a Shopify design and CRO agency operated under Krafton Enterprises. We specialize in building high-converting Shopify stores and optimizing existing ones for maximum revenue.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Disclaimer</h2>
            <p>The results and statistics displayed on our website are based on real client projects. However, individual results may vary depending on factors such as industry, product, traffic, and market conditions. We do not guarantee specific outcomes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Copyright Notice</h2>
            <p>&copy; {new Date().getFullYear()} scaloMATRIX. All rights reserved. All content, graphics, designs, and code on this website are the property of scaloMATRIX and may not be reproduced without written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Refund Policy</h2>
            <p>All payments made for our services are <strong>strictly non-refundable</strong>. Once a project is initiated and payment is received, no refunds will be issued under any circumstances. By engaging our services, you acknowledge and agree to this no-refund policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Confidentiality</h2>
            <p>All client data, business strategies, and project details shared with scaloMATRIX are treated as confidential. We do not disclose client information without explicit consent, except as required by law.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Dispute Resolution</h2>
            <p>Any disputes arising from our services shall be resolved through good-faith negotiation first. If unresolved, disputes will be submitted to binding arbitration under the laws of India.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">Related Policies</h2>
            <div className="flex flex-col gap-2">
              <Link href="/terms" className="text-[#FD5800] hover:underline font-medium">Terms & Conditions</Link>
              <Link href="/privacy" className="text-[#FD5800] hover:underline font-medium">Privacy Policy</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
