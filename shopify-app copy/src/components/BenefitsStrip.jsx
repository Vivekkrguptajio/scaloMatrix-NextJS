const highlights = [
  { value: '₹0', label: 'Marketing fee', detail: 'We never take a cut of your ad budget' },
  { value: '₹0', label: 'Monthly retainer', detail: 'No fixed monthly bills' },
  { value: 'Setup fee', label: 'One-time small setup fee', detail: "Paid once, that's it" },
  { value: "No sale, don't pay", label: "If you don't get any orders", detail: 'Pay only when you receive an order' },
];

export default function BenefitsStrip() {
  return (
    <section id="pricing" className="w-full border-y border-line bg-paper py-8 md:py-10">
      <div className="container-x">
        <h2 className="h-display text-[clamp(24px,2.4vw,36px)] mb-6 sm:mb-8 text-ink lg:whitespace-nowrap">
          Simple pricing. We earn only when you sell.
        </h2>
        <div className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {highlights.map((item) => (
            <div
              key={item.value + item.detail}
              className="group flex flex-col items-start rounded-[12px] border border-[#FF5D00] bg-cream p-3.5 sm:p-5 text-ink transition-colors duration-300 hover:bg-[#FF5D00] hover:text-white"
            >
              <span className="font-display text-[20px] sm:text-[26px] font-medium leading-tight tracking-tight">
                {item.value}
              </span>
              <span className="mt-1.5 sm:mt-2 text-[13px] sm:text-[15px] leading-snug font-semibold">
                {item.label}
              </span>
              <span className="mt-1 text-[11.5px] sm:text-[13px] leading-snug text-muted transition-colors duration-300 group-hover:text-white/85">
                {item.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
