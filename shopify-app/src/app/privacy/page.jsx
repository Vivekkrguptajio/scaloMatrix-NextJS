import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | scaloMATRIX',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <Link href="/" className="text-sm text-[#FD5800] font-medium hover:underline mb-8 inline-block">&larr; Back to Home</Link>

        <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: October 2026</p>

        <div className="space-y-10 text-[15px] leading-relaxed text-gray-700">
          <section>
            <h2 className="text-xl font-bold text-black mb-3">1. Information We Collect</h2>
            <p>We collect information you provide directly, such as your name, email address, phone number, and business details when you contact us or use our services. We may also collect usage data through cookies and analytics tools.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>To provide, maintain, and improve our services</li>
              <li>To communicate with you about projects, updates, and offers</li>
              <li>To analyze website usage and improve user experience</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">3. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with trusted third-party tools (such as analytics, email, or hosting providers) solely for the purpose of delivering our services.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">4. Cookies</h2>
            <p>Our website uses cookies to enhance your browsing experience and gather analytics. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">5. Data Security</h2>
            <p>We implement reasonable security measures to protect your personal data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">6. Your Rights</h2>
            <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us through our <Link href="/#contact" className="text-[#FD5800] hover:underline">contact page</Link>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">7. Third-Party Links</h2>
            <p>Our website may contain links to external sites. We are not responsible for the privacy practices of those websites.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-black mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
