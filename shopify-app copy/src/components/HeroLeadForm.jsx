"use client";

import { useRef, useState } from 'react';
import Link from 'next/link';
import { track } from '../utils/track';
import { FaWhatsapp, FaCheckCircle, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const BUSINESS_TYPES = [
  'Manufacturer',
  'Marketplace seller',
  'Offline shop / wholesaler',
  'Instagram / WhatsApp seller',
  'Other',
];

const GST_OPTIONS = ['Yes', 'No', 'Already applied'];

const REVENUE_BANDS = [
  '< ₹1 lakh',
  '₹1-5 lakhs',
  '₹5-10 lakh',
  '₹10 lakh+',
];

// `id` and `source` let the same form be used twice on the page (hero + bottom) without clashing ids,
// and the email says which one the lead came from.
export default function HeroLeadForm({ id = 'lead-form', source = 'Hero 2-Step Lead Form' }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessType: '',
    gstStatus: '',
    monthlyRevenue: '',
    productCategory: '',
    city: '',
    consent: false,
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const leadFired = useRef(false); // fire the Lead event once per visit, even if they go Back and Continue again
  const [whatsappSent, setWhatsappSent] = useState(false); // true only if the server really sent the confirmation

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
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return false;
    }
    if (!formData.businessType) {
      setErrorMessage('Please select what best describes you.');
      return false;
    }
    if (!formData.gstStatus) {
      setErrorMessage('Please tell us if you have an active GST.');
      return false;
    }
    if (!formData.consent) {
      setErrorMessage('Please agree to the Terms & Conditions and Privacy Policy.');
      return false;
    }
    setErrorMessage('');
    return true;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validateStep1()) {
      // Name + phone are in: that is the lead. Counted here so drop-offs on step 2 still show up.
      if (!leadFired.current) {
        leadFired.current = true;
        track('generate_lead', {
          event_category: 'form',
          event_label: formData.businessType,
          form_source: source,
          meta: { event: 'Lead', data: { content_name: 'D2C Brand Consultation', content_category: formData.businessType, currency: 'INR' } },
        });
      }
      setStep(2);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.monthlyRevenue) {
      setErrorMessage('Please select your current monthly business revenue.');
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
          source,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit. Please try again or chat via WhatsApp.');
      }

      // Step 2 done. This is not a second Lead (that fired on step 1), so ad reports don't double count.
      track('lead_form_complete', {
        event_category: 'form',
        event_label: formData.businessType,
        form_source: source,
        meta: { event: 'LeadFormComplete', custom: true, data: { revenue: formData.monthlyRevenue, gst: formData.gstStatus } },
      });

      let result = null;
      try { result = await response.json(); } catch { /* success page works without it */ }
      setWhatsappSent(Boolean(result?.whatsappSent));
      setStatus('success');
    } catch (err) {
      console.error('Lead form submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please reach out via WhatsApp.');
    }
  };

  const whatsappDeepLink = `https://wa.me/919217728977?text=${encodeURIComponent(
    `Hi scaloMATRIX, I just booked a free call for my brand. Name: ${formData.name || 'Owner'}, Business: ${formData.businessType}. Let's discuss!`
  )}`;

  return (
    <div
      id={id}
      className="w-full max-w-[480px] bg-paper border border-ink px-6 pt-3 pb-3 sm:px-8 sm:pt-4 sm:pb-4 rounded-[24px] shadow-none relative flex flex-col"
    >
      {/* Top Accent Bar & Step Counter */}
      <div className="mb-3">
        <div className="flex gap-3 mb-3" aria-label={status === 'success' ? 'Completed' : `Step ${step} of 2`}>
          <span className={`h-2 flex-1 rounded-full ${step >= 1 ? 'bg-brand' : 'bg-line'}`} />
          <span className={`h-2 flex-1 rounded-full ${step >= 2 ? 'bg-brand' : 'bg-line'}`} />
        </div>
        {status !== 'success' && (
          <>
        <div className="text-[15px] text-muted mb-2 font-medium">
          {step === 1 ? 'Step 1 of 2 · Your details' : 'Step 2 of 2 · Business details'}
        </div>
        <h2 className="text-[20px] sm:text-[21px] font-bold text-ink leading-tight tracking-tight">
          {step === 1 ? 'Book a free 30-min brand call' : 'Almost there! Tell us about your brand'}
        </h2>
          </>
        )}
        {status === 'success' && (
          <div className="text-[15px] text-brand-text mb-1 font-semibold">Request received</div>
        )}
        {status !== 'success' && step !== 1 && (
          <p className="text-[14px] text-muted mt-1">
            Helps our growth team prepare before your call
          </p>
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
            We have received your details. Our growth expert will call you within 1 hour during working hours to review your brand launch plan.{whatsappSent && ' We have also sent a confirmation to your WhatsApp.'}
          </p>

          <ol className="mb-6 w-full max-w-sm space-y-2 text-left text-[13.5px] text-ink">
            <li className="flex gap-2.5"><span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">1</span>We review your brand and launch plan with you.</li>
            <li className="flex gap-2.5"><span className="mt-[1px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft text-[11px] font-bold text-brand">2</span>It is a free call, with no pitch on call one.</li>
          </ol>

          <a
            href={whatsappDeepLink}
            data-track-location="thank-you"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 bg-[#25D366] text-white font-semibold text-[15px] rounded-[10px] shadow-[0_8px_20px_rgba(37,211,102,0.3)] hover:brightness-105 transition-all"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>Chat on WhatsApp now</span>
          </a>

          <p className="text-[11.5px] text-muted mt-3">
            Want immediate answers? Click above to connect directly on WhatsApp.
          </p>
        </div>
      ) : (
        <form onSubmit={step === 1 ? handleNext : handleSubmit} className="flex flex-1 flex-col gap-3 pb-1">
          {errorMessage && (
            <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 text-[13px] rounded-[10px] leading-snug">
              {errorMessage}
            </div>
          )}

          {step === 1 ? (
            <>
              {/* Field 1: Your name */}
              <div>
                <label className="block text-[14px] font-medium text-ink mb-1">
                  Your name <span className="text-brand">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-cream border border-line rounded-[12px] px-4 py-[10px] text-[15px] text-ink placeholder:text-muted focus:outline-none focus:border-brand transition-colors"
                />
              </div>

              {/* Field 2: Phone number */}
              <div>
                <label className="block text-[14px] font-medium text-ink mb-1">
                  Phone number <span className="text-brand">*</span>
                </label>
                <div className="flex gap-2.5">
                  <div className="w-[72px] shrink-0 flex items-center justify-center bg-cream border border-line rounded-[12px] text-[15px] font-semibold text-ink select-none">
                    +91
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="flex-1 bg-cream border border-line rounded-[12px] px-4 py-[10px] text-[15px] text-ink placeholder:text-muted focus:outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              {/* Business type */}
              <div>
                <label className="block text-[14px] font-medium text-ink mb-1">
                  What best describes you? <span className="text-brand">*</span>
                </label>
                <div className="relative">
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full appearance-none bg-cream border border-line rounded-[12px] px-4 py-[10px] pr-10 text-[15px] focus:outline-none focus:border-brand ${formData.businessType ? 'text-ink' : 'text-muted'}`}
                  >
                    <option value="" disabled>Select</option>
                    {BUSINESS_TYPES.map((type) => <option key={type} value={type}>{type}</option>)}
                  </select>
                  <svg className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Field 3: Do you have an active GST? */}
              <div>
                <label className="block text-[14px] font-medium text-ink mb-1.5">
                  Do you have an active GST? <span className="text-brand">*</span>
                </label>
                <div className="flex flex-wrap gap-3">
                  {GST_OPTIONS.map((opt) => {
                    const isSelected = formData.gstStatus === opt;
                    return (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => handleSelect('gstStatus', opt)}
                        className={`py-2 px-5 text-[14px] text-center rounded-full border transition-all ${
                          isSelected
                            ? 'bg-ink text-paper border-ink font-semibold'
                            : 'bg-paper text-ink border-line hover:border-ink'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Field 5: Consent Checkbox */}
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id={`${id}-consent`}
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 accent-[#FD5800] rounded cursor-pointer shrink-0"
                />
                <label htmlFor={`${id}-consent`} className="text-[12px] text-muted leading-tight cursor-pointer">
                  I agree to the{' '}
                  <Link href="/terms" target="_blank" className="underline hover:text-brand">
                    Terms &amp; Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy-policy" target="_blank" className="underline hover:text-brand">
                    Privacy Policy
                  </Link>
                  , and I&apos;m happy to be contacted by scaloMATRIX by phone, WhatsApp, SMS or email about my enquiry.
                </label>
              </div>

              {/* Submit / Continue Button */}
              <button
                type="submit"
                className="w-full py-3.5 flex items-center justify-center gap-2 text-[15px] font-semibold text-[#141210] bg-brand rounded-full hover:brightness-105 transition-all"
              >
                <span>Continue</span>
                <FaArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Footer Trust Guarantees */}
              <div className="mt-1 flex flex-wrap items-center justify-center gap-2 text-[13px] text-muted font-medium">
                <span className="inline-flex items-center gap-1.5">
                  <FaCheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Small one-time setup</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FaCheckCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>₹0 marketing fee</span>
                </span>
              </div>
            </>
          ) : (
            <>
              {/* Monthly business revenue (step 2 keeps step 1 short) */}
              <div>
                <label className="block text-[13px] font-medium text-ink mb-1">
                  What&apos;s your current monthly business revenue? <span className="text-brand">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {REVENUE_BANDS.map((band) => {
                    const isSelected = formData.monthlyRevenue === band;
                    return (
                      <button
                        type="button"
                        key={band}
                        onClick={() => handleSelect('monthlyRevenue', band)}
                        className={`py-1.5 px-1 text-[13px] text-center rounded-[10px] border transition-all ${
                          isSelected
                            ? 'bg-brand text-white border-brand font-semibold shadow-[0_2px_8px_rgba(253,88,0,0.25)]'
                            : 'bg-cream text-ink border-line hover:border-brand/40 hover:bg-paper'
                        }`}
                      >
                        {band}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2 Fields */}
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
                    className="w-full bg-cream border border-line rounded-[10px] px-4 py-2.5 text-[13.5px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-brand focus:bg-paper transition-colors"
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
                    className="w-full bg-cream border border-line rounded-[10px] px-4 py-2.5 text-[13.5px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-brand focus:bg-paper transition-colors"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-3.5 border border-line bg-cream rounded-[10px] text-ink text-[13px] font-medium hover:bg-paper transition-colors flex items-center justify-center gap-1.5"
                >
                  <FaArrowLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary flex-1 py-3.5 flex items-center justify-center gap-2 text-[14px] font-semibold text-white bg-brand rounded-[10px] disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Book my free call</span>
                      <FaArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

              {/* Strict small print disclosure */}
              <div className="pt-2 text-center">
                <p className="text-[10.5px] text-muted/80 leading-normal">
                  🔒 No spam. We earn only when you sell. Meta ad budget &amp; Shopify plan are paid directly by you to Meta &amp; Shopify.
                </p>
              </div>
            </>
          )}
        </form>
      )}
    </div>
  );
}
