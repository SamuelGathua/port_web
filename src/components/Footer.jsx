import React from 'react';
import { ArrowUp, Mail, MapPin, Terminal, ArrowUpRight } from 'lucide-react';

export default function Footer({ navigateTo }) {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0D10] text-[#E0E2EC] pt-20 pb-12 px-4 sm:px-8 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#FF5500] text-white flex items-center justify-center font-black text-lg">
                T
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Teller Solutions<span className="text-[#FF5500]">.</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Building Digital Systems That Scale. We engineer high-performance web applications, resilient backend architectures, and modern cloud environments.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono-code text-gray-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>Nairobi, Kenya • East Africa & Global Remote</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#FF5500]">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  onClick={() => {
                    navigateTo('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo('home');
                    setTimeout(() => {
                      const el = document.getElementById('services');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services & Capabilities
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo('home');
                    setTimeout(() => {
                      const el = document.getElementById('portfolio');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Featured Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo('home');
                    setTimeout(() => {
                      const el = document.getElementById('about');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigateTo('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#FF5500] hover:underline font-bold transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#FF5500]">
              Connect With Us
            </div>
            <p className="text-xs text-gray-400">
              Follow our engineering open-source releases, cloud architectural benchmarks, and tech insights.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF5500] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="Teller Solutions on GitHub"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF5500] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="Teller Solutions on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.76v8.37H6.46v-8.37M7.84 6.2a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF5500] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="Teller Solutions on Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@tellersolutions.com"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-[#FF5500] text-gray-300 hover:text-white flex items-center justify-center transition-all duration-200 border border-white/10"
                aria-label="Email Teller Solutions"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={() => navigateTo('contact')}
                className="inline-flex items-center gap-2 text-xs font-mono-code text-white bg-white/10 hover:bg-[#FF5500] px-4 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                <span>hello@tellersolutions.com</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-gray-400">
          <div>
            Copyright © {currentYear} Teller Solutions. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Engineering Excellence</span>
            <span>•</span>
            <span>Scalable Systems</span>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Pill/Circle (as seen in Image 2 bottom-right) */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#111113] hover:bg-[#FF5500] text-white flex items-center justify-center shadow-xl border border-white/20 transition-all duration-200 hover:-translate-y-1 cursor-pointer"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
}
