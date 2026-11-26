"use client";

import { useState } from 'react';

// Small "ask us anything" box under the FAQ. Sends through the same /api/contact
// endpoint as the hero form, so the question lands in the same inbox.
export default function FaqAskBox() {
  const [question, setQuestion] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | sent | error
  const [error, setError] = useState('');

  const submit = async (e) => {
    e.preventDefault();
    if (question.trim().length < 5) return setError('Please type your question.');

    setError('');
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: question.trim(),
          businessType: 'FAQ question',
          source: 'FAQ Ask a Question box',
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('sent');
    } catch {
      setStatus('error');
      setError('Could not send. Please try again or message us on WhatsApp.');
    }
  };

  if (status === 'sent') {
    return (
      <div className="mt-8 p-5 sm:p-6 bg-cream border border-line rounded-[14px] text-center">
        <p className="text-[15px] font-semibold text-ink">Thanks! We got your question.</p>
        <p className="mt-1 text-[13.5px] text-muted">For a faster reply, book a free call or message us on WhatsApp.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="mt-8 p-5 sm:p-6 bg-cream border border-line rounded-[14px]">
      <label htmlFor="faq-question" className="block text-[13.5px] text-muted mb-2.5">
        Have a specific question about your product category? Ask us here.
      </label>
      <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
        <input
          id="faq-question"
          type="text"
          maxLength={1000}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question…"
          className="w-full flex-1 bg-paper border border-line rounded-[10px] px-4 py-3 text-[14px] text-ink placeholder:text-muted/70 focus:outline-none focus:border-brand focus:bg-paper transition-colors"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary inline-flex w-full sm:w-auto shrink-0 items-center justify-center gap-2 rounded-full px-6 py-3 text-[13px] font-semibold text-white disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : <>Send question <span aria-hidden="true">→</span></>}
        </button>
      </div>
      {error && <p role="alert" className="mt-2.5 text-[13px] text-red-600">{error}</p>}
    </form>
  );
}
