import { FaMoneyBillWave, FaRedoAlt, FaBan } from 'react-icons/fa';

// Short version: the numbers are in "The brand launch bill" above, so this only names the three
// risks in one line each and hands over to the model.
const risks = [
  { icon: FaMoneyBillWave, title: 'Lakhs spent before testing' },
  { icon: FaRedoAlt, title: 'Fees run, sales or not' },
  { icon: FaBan, title: 'No sales, no refund' },
];

export default function LaunchRiskSection() {
  return (
    <section
      id="launch-risk"
      aria-labelledby="launch-risk-title"
      className="relative w-full border-b border-line bg-cream py-12 font-sans md:py-16"
    >
      <div className="container-x">
        <h2
          id="launch-risk-title"
          className="h-display !text-[clamp(20px,1.8vw,26px)] !leading-[1.25] tracking-tight text-ink"
        >
          Most brands don&apos;t fail because of the product.{' '}
          <span className="text-brand">They fail because the money runs out first.</span>
        </h2>

        <ul className="mt-5 grid grid-cols-3 gap-2 sm:gap-3 lg:gap-5">
          {risks.map(({ icon: Icon, title }) => (
            <li
              key={title}
              className="flex flex-col items-start gap-2 rounded-[12px] border border-line bg-paper p-2.5 sm:flex-row sm:items-center sm:gap-3 sm:rounded-[14px] sm:px-4 sm:py-3 transition-colors duration-300 hover:border-ink"
            >
              <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand-soft">
                <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
              </span>
              <span className="text-[12.5px] sm:text-[15px] font-semibold leading-tight sm:leading-snug text-ink">{title}</span>
            </li>
          ))}
        </ul>

        <div className="mt-3 flex flex-row items-center justify-between gap-3 rounded-[12px] bg-panel px-3.5 py-3 text-white sm:gap-4 sm:rounded-[14px] sm:px-6 sm:py-4 lg:mt-4">
          <p className="text-[12.5px] font-medium leading-snug sm:text-[17px]">
            We built scaloMATRIX to <span className="text-brand">take that risk off your shoulders.</span>
          </p>
          <a
            href="#our-model"
            className="btn-primary inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full px-3.5 py-2 text-[12px] font-semibold text-white sm:gap-2 sm:px-5 sm:py-3 sm:text-[13px]"
          >
            See how it works <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
