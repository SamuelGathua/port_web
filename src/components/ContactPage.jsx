import React, { useState, useEffect } from 'react';
import { Mail, MapPin, Clock, Copy, Check, Send, Sparkles, ArrowLeft, ArrowUpRight, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ navigateTo }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [currentTimeEAT, setCurrentTimeEAT] = useState('');

  // Live Nairobi, Kenya Clock (UTC+3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Africa/Nairobi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setCurrentTimeEAT(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('tellersolution@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const form = e.target;
    const data = new FormData(form);
    data.set('form-name', 'contact');

    // Convert FormData to URL-encoded string for Netlify Forms
    const urlEncodedData = new URLSearchParams(data).toString();

    try {
      let response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: urlEncodedData,
      });

      // If root submission didn't succeed, fallback to /__forms.html
      if (!response.ok) {
        response = await fetch('/__forms.html', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: urlEncodedData,
        });
      }

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);

        try {
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#FF5500', '#111113', '#22C55E', '#F6F2EC']
          });
        } catch (err) {
          // ignore if canvas-confetti is not loaded
        }
      } else {
        setIsSubmitting(false);
        setErrorMessage('Failed to send message. Please try again or chat with us on WhatsApp.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setErrorMessage('An error occurred. Please try again or chat with us on WhatsApp.');
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 px-4 sm:px-8 bg-[#F6F2EC] bg-grain min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-wider text-[#64615B] hover:text-[#111113] transition-colors cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Main Page</span>
          </button>
        </div>

        {/* 1. Page Header (Styled after Image 2 typography) */}
        <div className="border-b border-[#E0D9CE] pb-12 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#FF5500] uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
            <span>GET IN TOUCH // INITIATE COLLABORATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#111113] leading-[0.95] mb-6">
            <span className="block font-sans">LET'S BUILD</span>
            <span className="block font-serif-italic normal-case text-[#FF5500] font-normal my-1 sm:my-2">
              something great
            </span>
            <span className="block font-sans">
              TOGETHER<span className="text-[#FF5500]">.</span>
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#52504C] max-w-2xl leading-relaxed">
            Reach out to discuss your next scalable system. Whether you have an existing application in need of re-architecture or an ambitious product launch, our engineers are ready.
          </p>
        </div>

        {/* 2. Split Layout (Desktop) / Stacked (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Contact Info) */}
          <div className="lg:col-span-5 space-y-6">

            {/* Contact Information Cards */}
            <div className="bg-[#EDE7DD] rounded-3xl p-8 border border-[#DFD8CC] shadow-sm space-y-6">
              <h2 className="text-xs font-mono-code font-bold uppercase tracking-widest text-[#FF5500]">
                Direct Contact
              </h2>

              {/* Email Address with Copy Button */}
              <div className="space-y-2">
                <div className="text-xs font-mono-code text-[#7A756D] uppercase">Direct Inquiries</div>
                <div className="flex items-center justify-between gap-2 p-3 bg-white rounded-2xl border border-[#DFD8CC]">
                  <a
                    href="mailto:tellersolution@gmail.com"
                    className="text-sm sm:text-base font-bold text-[#111113] hover:text-[#FF5500] transition-colors truncate"
                  >
                    tellersolution@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-[#F6F2EC] hover:bg-[#111113] hover:text-white text-[#111113] transition-colors shrink-0 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <span className="text-[11px] font-mono-code text-emerald-600 block pl-1">
                    ✓ Copied to clipboard
                  </span>
                )}
              </div>

              {/* Location */}
              <div className="space-y-1 pt-2">
                <div className="text-xs font-mono-code text-[#7A756D] uppercase">Headquarters</div>
                <div className="flex items-center gap-2 text-base font-bold text-[#111113]">
                  <MapPin className="w-4 h-4 text-[#FF5500]" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>

              {/* Operating Hours & Live Time */}
              <div className="space-y-2 pt-2 border-t border-[#DFD8CC]">
                <div className="text-xs font-mono-code text-[#7A756D] uppercase">Operating Hours & Timezone</div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#111113]">East Africa Time (EAT):</span>
                  <span className="font-mono-code font-bold text-[#FF5500] bg-white px-2.5 py-1 rounded-md border border-[#DFD8CC]">
                    {currentTimeEAT || 'UTC+3'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#52504C] pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#7A756D]" />
                  <span>Monday – Friday: 08:30 – 18:00 EAT</span>
                </div>
                <div className="text-xs font-bold text-[#111113] bg-[#FF5500] p-2.5 rounded-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#111113]"></span>
                  <span>Guaranteed response within &lt;24 hours</span>
                </div>
              </div>
            </div>

            {/* Architecture Consultation Advisory Guarantee */}
            <div className="bg-[#111113] text-white rounded-3xl p-8 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#FF5500] font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>WHAT TO EXPECT</span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">
                Engineering-First Advisory
              </h3>
              <ul className="space-y-3 text-xs text-gray-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold">1.</span>
                  <span>Direct conversation with a Senior Solutions Architect, not an account manager.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold">2.</span>
                  <span>Preliminary architectural assessment and technology compatibility review.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[#FF5500] font-bold">3.</span>
                  <span>Transparent milestone-based timeline with fixed or retainer scope.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column (Netlify-Enabled Contact Form & WhatsApp) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-[#EDE7DD] rounded-3xl p-8 sm:p-10 border border-[#DFD8CC] shadow-sm">
              {submitted ? (
                /* Interactive Success State */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/25">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#111113]">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#52504C] mt-2 max-w-md mx-auto">
                      Thank you for reaching out, <span className="font-bold text-[#111113]">{formData.name}</span>. Our lead systems architect will review your project brief and get back to you at <span className="font-bold text-[#111113]">{formData.email}</span> within 24 hours.
                    </p>
                  </div>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-3 rounded-full bg-[#111113] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF5500] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={() => navigateTo('home')}
                      className="px-6 py-3 rounded-full bg-white border border-[#DFD8CC] text-[#111113] text-xs font-bold uppercase tracking-wider hover:bg-[#EDE7DD] transition-colors cursor-pointer"
                    >
                      Return Home
                    </button>
                  </div>
                </div>
              ) : (
                /* The Netlify-Integrated Contact Form */
                <form
                  name="contact"
                  method="POST"
                  action="/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* CRITICAL: Hidden inputs for Netlify routing and bot filtering */}
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="hidden" name="bot-field" />

                  <div className="flex items-center justify-between border-b border-[#DFD8CC] pb-4">
                    <h2 className="text-xl font-black uppercase tracking-tight text-[#111113]">
                      Project Brief
                    </h2>
                    <span className="text-xs font-mono-code text-[#7A756D]">
                      All fields confidential
                    </span>
                  </div>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-mono-code font-bold uppercase tracking-wider text-[#33312D]">
                      Your Name <span className="text-[#FF5500]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="e.g. Alex Kamau"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#DFD8CC] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 text-[#111113] text-sm outline-none transition-all placeholder:text-[#9A958C]"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-mono-code font-bold uppercase tracking-wider text-[#33312D]">
                      Work Email <span className="text-[#FF5500]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#DFD8CC] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 text-[#111113] text-sm outline-none transition-all placeholder:text-[#9A958C]"
                    />
                  </div>

                  {/* Project Details / Message Textarea (at least 4 rows deep) */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label htmlFor="message" className="block text-xs font-mono-code font-bold uppercase tracking-wider text-[#33312D]">
                        Project Details / Message <span className="text-[#FF5500]">*</span>
                      </label>
                      <span className="text-[11px] font-mono-code text-[#7A756D]">
                        Min 4 rows
                      </span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about the challenges you are facing, existing stack, scalability requirements, and desired timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#DFD8CC] focus:border-[#FF5500] focus:ring-2 focus:ring-[#FF5500]/20 text-[#111113] text-sm outline-none transition-all placeholder:text-[#9A958C] resize-y"
                    ></textarea>
                  </div>

                  {/* Error Notification if Netlify fails */}
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Submit Button (Full-width, distinct color with hover effect and active state) */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-2xl bg-[#FF5500] hover:bg-[#E64A00] active:scale-[0.99] text-white font-black text-sm uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-200 shadow-xl shadow-[#FF5500]/25 hover:shadow-[#FF5500]/40 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Transmitting Brief...
                      </span>
                    ) : (
                      <>
                        <span>Submit Project Brief</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp Integration Direct Contact Option */}
            <div className="p-6 bg-emerald-500/10 rounded-3xl border border-emerald-500/20 shadow-xs">
              <h3 className="text-base font-bold text-[#111113] mb-1.5 flex items-center gap-2">
                <span>Need a faster response?</span>
              </h3>
              <p className="text-xs text-[#52504C] mb-4 leading-relaxed">
                Chat directly with our engineering team on WhatsApp. We typically reply within a few hours.
              </p>
              <a 
                href="https://wa.link/x7093x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-xl shadow-md text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors duration-300"
              >
                {/* Simple SVG icon for WhatsApp */}
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.012c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
