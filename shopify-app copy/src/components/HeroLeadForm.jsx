"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FaWhatsapp, FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const BUSINESS_TYPES = [
  'Manufacturer',
  'Marketplace seller',
  'Offline shop / wholesaler',
  'Instagram / WhatsApp seller',
  'Other',
];

const GST_OPTIONS = ['Yes', 'No', 'Applied'];

const REVENUE_BANDS = [
  '< ₹1L / month',
  '₹1L – ₹5L / month',
  '₹5L – ₹10L / month',
  '₹10L+ / month',
];

export default function HeroLeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: 'Manufacturer',
    gstStatus: 'Yes',
    monthlyRevenue: '₹1L – ₹5L / month',
    productCategory: '',
    city: '',
    consent: true,
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateStep1 = () => {
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.');
      return false;
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit WhatsApp/mobile number.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setErrorMessage('Please accept the Terms & Conditions and Privacy Policy.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Hero 2-Step Lead Form',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit. Please try again or chat via WhatsApp.');
      }

      // Safe trigger of client analytics events
      if (typeof window !== 'undefined') {
        if (typeof window.fbq === 'function') {
          window.fbq('track', 'Lead', {
            content_name: 'D2C Brand Consultation',
            currency: 'INR',
          });
        }
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'generate_lead', {
            event_category: 'form',
            event_label: formData.businessType,
          });
        }
      }

      setStatus('success');
    } catch (err) {
      console.error('Lead form submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please reach out via WhatsApp.');
    }
  };

  const whatsappDeepLink = `https://wa.me/919217728977?text=${encodeURIComponent(
    `Hi scaloMATRIX, I just requested a call back for my brand. Name: ${formData.name || 'Owner'}, Business: ${formData.businessType}. Let's discuss!`
  )}`;

  return (
    <div
      id="lead-form"
      className="w-full max-w-lg bg-paper border border-[#FD5800]/40 p-6 sm:p-7 shadow-[0_12px_40px_rgba(253,88,0,0.06)] relative"
    >
      {/* Header Badge */}
      <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-line">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0" />
          <span className="font-display text-[14.5px] sm:text-[15.5px] font-semibold text-ink">
            {status === 'success' ? 'Request Confirmed' : 'Get a free 30-minute brand call'}
          </span>
        </div>
        {status !== 'success' && (
          <span className="text-[11px] font-mono text-muted bg-cream px-2 py-0.5 border border-line shrink-0">
            Step {step} of 2
          </span>
        )}
      </div>

      {status === 'success' ? (
        <div className="flex flex-col items-center text-center py-6 animate-fadeIn">
          <div className="w-16 h-16 rounded-full bg-brand-soft text-brand flex items-center justify-center mb-4">
            <FaCheckCircle className="w-8 h-8 text-brand" />
          </div>
          <h3 className="h-display text-[22px] sm:text-[26px] font-semibold text-ink mb-2">
            Thank you, {formData.name.split(' ')[0]}!
          </h3>
          <p className="text-[14px] text-muted leading-relaxed mb-6 max-w-sm">
            We have received your details. Our founder or senior growth specialist will call you within 24 hours to review your brand launch plan.
          </p>

          <a
            href={whatsappDeepLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] text-white font-semibold text-[15px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:brightness-105 transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Chat on WhatsApp now</span>
          </a>

          <p className="text-[11.5px] text-muted mt-3">
            Want immediate answers? Click above to connect directly on WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="flex flex-col gap-4">
          {errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-[13px] leading-snug">
              {errorMessage}
            </div>
          )}

          {step === 1 ? (
            <>
              {/* Step 1 Fields */}
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">
                  Your Full Name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rajesh Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-cream border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">
                  WhatsApp Phone Number <span className="text-brand">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3.5 bg-line/40 border border-r-0 border-line text-[13px] font-mono text-muted">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-cream border border-line px-4 py-3 text-[14px] text-ink placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-1.5">
                  What best describes your business? <span className="text-brand">*</span>
                </label>
                <div className="relative">
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className="w-full bg-cream border border-line px-4 py-3 text-[14px] text-ink focus:outline-none focus:border-brand transition-colors appearance-none cursor-pointer pr-10"
                  >
                    {BUSINESS_TYPES.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-medium text-ink mb-2">
                  Do you have an active GST? <span className="text-brand">*</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {GST_OPTIONS.map((opt) => {
                    const isSelected = formData.gstStatus === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleSelect('gstStatus', opt)}
                        className={`py-2 text-[12.5px] font-mono uppercase tracking-wider text-center border transition-all ${
                          isSelected
                            ? 'bg-brand text-white border-brand font-semibold'
                            : 'bg-cream text-ink border-line hover:border-brand/40'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-muted mt-1.5">
                  Required for courier logistics &amp; Indian payment gateway settlements.
                </p>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 mt-2 flex items-center justify-center gap-2 text-[14.5px] font-semibold"
              >
                <span>Continue to Step 2</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </button>
            </>
          ) : (
            <>
              {/* Step 2 Fields */}
              <div>
                <label className="block text-[13px] font-medium text-ink mb-2">
                  Current Monthly Revenue / Sales <span className="text-brand">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {REVENUE_BANDS.map((band) => {
                    const isSelected = formData.monthlyRevenue === band;
                    return (
                      <button
                        type="button"
                        key={band}
                        onClick={() => handleSelect('monthlyRevenue', band)}
                        className={`py-2 px-2 text-[12px] text-center border transition-all ${
                          isSelected
                            ? 'bg-brand text-white border-brand font-semibold'
                            : 'bg-cream text-ink border-line hover:border-brand/40'
                        }`}
                      >
                        {band}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[13px] font-medium text-ink mb-1.5">
                    Product Category
                  </label>
                  <input
                    type="text"
                    name="productCategory"
                    placeholder="e.g. Apparel, Home Decor"
                    value={formData.productCategory}
                    onChange={handleChange}
                    className="w-full bg-cream border border-line px-4 py-2.5 text-[13.5px] text-ink placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-medium text-ink mb-1.5">
                    City / Factory Location
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="e.g. Surat, Delhi, Jaipur"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full bg-cream border border-line px-4 py-2.5 text-[13.5px] text-ink placeholder:text-muted/60 focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-[#FD5800] rounded cursor-pointer"
                />
                <label htmlFor="consent" className="text-[11.5px] text-muted leading-tight cursor-pointer">
                  I agree to be contacted via WhatsApp/Phone and agree to the{' '}
                  <Link href="/terms" target="_blank" className="underline hover:text-brand">
                    Terms
                  </Link>{' '}
                  &amp;{' '}
                  <Link href="/privacy" target="_blank" className="underline hover:text-brand">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3.5 border border-line bg-cream text-ink text-[13px] font-medium hover:bg-paper transition-colors flex items-center justify-center gap-1.5"
                >
                  <FaArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex-1 py-3.5 flex items-center justify-center gap-2 text-[14px] font-semibold disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Get a Call Back</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          {/* Strict small print disclosure */}
          <div className="pt-2 text-center">
            <p className="text-[10.5px] text-muted/80 leading-normal">
              🔒 No spam. We earn only when you sell. Meta ad budget &amp; Shopify plan are paid directly by you to Meta &amp; Shopify.
            </p>
          </div>
        </form>
      )}
    </div>
  );
}
