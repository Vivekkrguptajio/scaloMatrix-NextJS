"use client";

import { FaCheck, FaTimes, FaMinus } from 'react-icons/fa';

export default function ComparisonTable() {
  const rows = [
    {
      feature: "Upfront Setup Cost",
      agency: "₹50,000 – ₹1,00,000+",
      marketplace: "₹0 (but takes 15–35% forever)",
      scaloMatrix: "Small one-time setup fee",
      highlight: true,
    },
    {
      feature: "Monthly Retainer",
      agency: "₹40,000 – ₹75,000 / month",
      marketplace: "₹0",
      scaloMatrix: "₹0 — No monthly retainers",
      highlight: true,
    },
    {
      feature: "Ongoing Commission / Fee",
      agency: "Fixed fee even if ₹0 sales made",
      marketplace: "15% to 35% cut on every item",
      scaloMatrix: "We earn only when you get orders",
      highlight: true,
    },
    {
      feature: "Customer Data Ownership",
      agency: "Often restricted / shared",
      marketplace: "Marketplace keeps 100% of data",
      scaloMatrix: "100% Yours (Phone, Email, Addresses)",
      highlight: false,
    },
    {
      feature: "Store, Domain & Code Ownership",
      agency: "Held hostage or complex transfer",
      marketplace: "None (You only rent listing space)",
      scaloMatrix: "100% Yours from Day 1",
      highlight: false,
    },
    {
      feature: "Ad Account & Meta Pixel Ownership",
      agency: "Managed in agency's master BM",
      marketplace: "N/A (Compete in marketplace bids)",
      scaloMatrix: "100% Yours (Runs in your Ad Account)",
      highlight: false,
    },
    {
      feature: "Logistics, COD & RTO Protection",
      agency: "Not included (Marketing only)",
      marketplace: "High RTO and fake return losses",
      scaloMatrix: "Integrated with WhatsApp OTP verification",
      highlight: false,
    },
    {
      feature: "Contract Freedom & Exit Terms",
      agency: "3 to 6-month lock-in contracts",
      marketplace: "Can suspend your account anytime",
      scaloMatrix: "Leave anytime with everything intact",
      highlight: true,
    },
  ];

  return (
    <section id="comparison" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl mb-12 md:mb-16">
          <span className="eyebrow mb-4">Honest Comparison</span>
          <h2 className="h-display h-section mb-4">
            How scaloMATRIX <span className="accent">compares.</span>
          </h2>
          <p className="lead">
            Traditional agencies lock you in with fees. Marketplaces squeeze your profits. Here is why our model stands apart:
          </p>
        </div>

        {/* Responsive Table */}
        <div className="w-full overflow-x-auto border border-line bg-paper shadow-sm">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-line bg-cream">
                <th className="p-4 sm:p-5 text-[13px] font-mono uppercase tracking-wider text-muted font-semibold w-[28%]">
                  Features &amp; Terms
                </th>
                <th className="p-4 sm:p-5 text-[13px] font-mono uppercase tracking-wider text-muted font-semibold w-[24%]">
                  Typical Digital Agency
                </th>
                <th className="p-4 sm:p-5 text-[13px] font-mono uppercase tracking-wider text-muted font-semibold w-[24%]">
                  Marketplace Only (Amazon/Flipkart)
                </th>
                <th className="p-4 sm:p-5 text-[13px] font-mono uppercase tracking-wider text-brand font-bold w-[24%] bg-brand-soft">
                  ⭐ D2C scaloMATRIX
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-line/70 hover:bg-cream/40 transition-colors ${
                    row.highlight ? 'bg-cream/20' : ''
                  }`}
                >
                  <td className="p-4 sm:p-5 text-[13.5px] font-semibold text-ink">
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 text-[13px] text-muted">
                    {row.agency}
                  </td>
                  <td className="p-4 sm:p-5 text-[13px] text-muted">
                    {row.marketplace}
                  </td>
                  <td className="p-4 sm:p-5 text-[13.5px] font-semibold text-ink bg-brand-soft/40">
                    <span className="text-brand font-bold">✓</span> {row.scaloMatrix}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Small Print / Disclosure Note */}
        <div className="mt-4 text-center">
          <p className="text-[11.5px] text-muted">
            * Note: Ad budget and Shopify plan are paid directly by you to Meta and Shopify.
          </p>
        </div>
      </div>
    </section>
  );
}
