"use client";

import Image from 'next/image';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { clients } from '../data/work';

export default function ResultsWork() {
  // Show 6 curated real client stores from data/work.js
  const displayClients = clients.slice(0, 6);

  return (
    <section id="results" className="relative w-full py-16 md:py-24 bg-cream font-sans border-b border-line">
      <div className="container-x">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">Proven Execution</span>
            <h2 className="h-display h-section">
              Real stores. <span className="accent">Real brands.</span>
            </h2>
          </div>
          <p className="lead max-w-md">
            Stores built and optimized on Shopify for Indian entrepreneurs. Every metric verified with clients [VERIFY].
          </p>
        </div>

        {/* 6 Store Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayClients.map((client, idx) => (
            <div
              key={idx}
              className="group bg-paper border border-line overflow-hidden flex flex-col justify-between hover:border-brand/50 transition-all duration-300 shadow-sm"
            >
              <div>
                {/* Store image preview */}
                <div className="relative w-full h-52 sm:h-56 bg-cream overflow-hidden">
                  <Image
                    src={client.img}
                    alt={client.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-paper/90 backdrop-blur-sm border border-line px-2.5 py-1 text-[11px] font-mono font-medium text-ink">
                    {client.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="h-display text-[20px] font-semibold text-ink group-hover:text-brand transition-colors">
                      {client.name}
                    </h3>
                    {client.url && (
                      <a
                        href={client.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-brand transition-colors"
                        aria-label={`Visit ${client.name}`}
                      >
                        <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                  {/* Verified Metrics with [VERIFY] tag */}
                  <div className="flex items-center gap-4 pt-3 border-t border-line/60">
                    <div>
                      <p className="font-mono text-[10px] uppercase text-muted tracking-wider">
                        Revenue Growth [VERIFY]
                      </p>
                      <p className="font-display text-[17px] font-bold text-brand">
                        {client.revenue}
                      </p>
                    </div>
                    {client.aov && (
                      <div>
                        <p className="font-mono text-[10px] uppercase text-muted tracking-wider">
                          AOV Lift [VERIFY]
                        </p>
                        <p className="font-display text-[17px] font-bold text-ink">
                          {client.aov}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="px-5 sm:px-6 pb-5 pt-1">
                <span className="text-[11px] font-mono text-muted/70">
                  Custom Shopify Theme + CRO Ops
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-[14px] text-muted mb-4">
            Want to see how your product category would look as a standalone brand?
          </p>
          <a href="#lead-form" className="btn-primary py-3 px-8 text-[14px] font-semibold">
            Get a Call Back to Discuss
          </a>
        </div>
      </div>
    </section>
  );
}
