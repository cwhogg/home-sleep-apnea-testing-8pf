'use client';

import { useState, FormEvent } from 'react';
import JsonLd from '../components/content/JsonLd';

export default function Home() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again');
    }
  }

  return (
    <>
      <JsonLd data={{"@context":"https://schema.org","@type":"Organization","name":"SleepBridge","url":"https://sleepbridge.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"WebSite","name":"SleepBridge","url":"https://sleepbridge.vercel.app"}} />
      <JsonLd data={{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How accurate is the Apple Watch sleep apnea test?","acceptedAnswer":{"@type":"Answer","text":"Apple Watch detects moderate to severe sleep apnea with 85% accuracy, but it's a screening tool, not a diagnosis. Our clinical-grade home testing provides the definitive diagnosis your doctor needs for treatment."}},{"@type":"Question","name":"Do I need a prescription for an at-home sleep apnea test?","acceptedAnswer":{"@type":"Answer","text":"No prescription required. Our platform connects you directly with sleep physicians who can order testing based on your Apple Watch data and health screening."}},{"@type":"Question","name":"Can you get a false positive on a sleep apnea test?","acceptedAnswer":{"@type":"Answer","text":"Apple Watch can show false positives due to movement or irregular sleep. Our comprehensive home testing eliminates false positives through multiple data points and physician review."}},{"@type":"Question","name":"Are at-home sleep studies covered by insurance?","acceptedAnswer":{"@type":"Answer","text":"Many insurance plans cover home sleep tests, but pre-approval can take months. We offer transparent cash pricing starting at $189 for immediate testing without insurance delays."}},{"@type":"Question","name":"How does the Apple Watch know if you have sleep apnea?","acceptedAnswer":{"@type":"Answer","text":"Apple Watch monitors breathing patterns, heart rate, and blood oxygen during sleep. When it detects repeated disruptions consistent with sleep apnea, it alerts you to seek medical evaluation."}},{"@type":"Question","name":"What is the 3% rule for sleep apnea?","acceptedAnswer":{"@type":"Answer","text":"The 3% rule refers to oxygen level drops during sleep breathing events. Our home testing measures these oxygen desaturations along with airflow and effort to provide comprehensive sleep apnea diagnosis."}}]}} />

      <header className="border-b border-border bg-background-elevated">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-bold text-primary" style={{ fontFamily: "'Inter', sans-serif" }}>
            SleepBridge
          </a>
          <div className="flex items-center gap-6 text-sm">
            <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
            <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
            <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section aria-label="Hero" className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4 leading-tight">
            Apple Watch Sleep Apnea Alert? Get Home Sleep Test Without Doctor Referral
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Bridge wearable detection to clinical diagnosis in 24 hours. No insurance hassles, no months-long waits—just accurate home sleep apnea testing with direct treatment pathway.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {status === 'success' ? (
              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                <p className="text-primary font-medium">Thanks for signing up! We&apos;ll be in touch.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-background-elevated border border-border text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : `Start Sleep Test Today`}
                </button>
              </form>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mt-2">{errorMsg}</p>
            )}
          </div>
        </section>

        {/* Value Props */}
        <section aria-label="Features" className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Why SleepBridge?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <section aria-label="Clinical-Grade Home Sleep Test Accuracy" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Clinical-Grade Home Sleep Test Accuracy</h3>
            <p className="text-text-secondary text-sm leading-relaxed">FDA-cleared devices deliver lab-quality results at home. Our testing matches sleep clinic accuracy while you sleep in your own bed.</p>
          </section>
          <section aria-label="24-Hour Results Without Insurance" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">24-Hour Results Without Insurance</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Skip months-long clinic waits and insurance pre-approvals. Get physician-reviewed sleep apnea diagnosis in one day with transparent cash pricing.</p>
          </section>
          <section aria-label="Direct Treatment Pathway" className="bg-background-elevated border border-border rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text mb-2">Direct Treatment Pathway</h3>
            <p className="text-text-secondary text-sm leading-relaxed">Diagnosed patients get immediate access to CPAP equipment, oral appliances, and ongoing support—no separate vendors or lengthy approval processes.</p>
          </section>
          </div>
        </section>

        {/* FAQ */}
        <section aria-label="Frequently Asked Questions" className="mx-auto max-w-3xl px-6 py-12">
          <h2 className="text-2xl font-bold text-text text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How accurate is the Apple Watch sleep apnea test?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Apple Watch detects moderate to severe sleep apnea with 85% accuracy, but it's a screening tool, not a diagnosis. Our clinical-grade home testing provides the definitive diagnosis your doctor needs for treatment.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Do I need a prescription for an at-home sleep apnea test?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">No prescription required. Our platform connects you directly with sleep physicians who can order testing based on your Apple Watch data and health screening.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Can you get a false positive on a sleep apnea test?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Apple Watch can show false positives due to movement or irregular sleep. Our comprehensive home testing eliminates false positives through multiple data points and physician review.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">Are at-home sleep studies covered by insurance?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Many insurance plans cover home sleep tests, but pre-approval can take months. We offer transparent cash pricing starting at \$189 for immediate testing without insurance delays.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">How does the Apple Watch know if you have sleep apnea?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">Apple Watch monitors breathing patterns, heart rate, and blood oxygen during sleep. When it detects repeated disruptions consistent with sleep apnea, it alerts you to seek medical evaluation.</p>
            </div>
            <div className="border-b border-border pb-4">
              <h3 className="text-text font-medium mb-2">What is the 3% rule for sleep apnea?</h3>
              <p className="text-text-secondary text-sm leading-relaxed">The 3% rule refers to oxygen level drops during sleep breathing events. Our home testing measures these oxygen desaturations along with airflow and effort to provide comprehensive sleep apnea diagnosis.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="border-t border-border bg-background-elevated mt-auto">
        <div className="mx-auto max-w-5xl px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-text-muted text-sm">&copy; 2026 SleepBridge. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-text-muted hover:text-text transition-colors">Home</a>
              <a href="/blog" className="text-text-muted hover:text-text transition-colors">Blog</a>
              <a href="/compare" className="text-text-muted hover:text-text transition-colors">Comparisons</a>
              <a href="/faq" className="text-text-muted hover:text-text transition-colors">FAQ</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
