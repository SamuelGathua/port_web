import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AboutSection({ navigateTo }) {
  return (
    <section id="about" className="relative bg-[#101114] text-[#F5F2EB] py-28 sm:py-36 px-4 sm:px-8 overflow-hidden">
      {/* Subtle Geometric Tech Grid Background */}
      <div className="absolute inset-0 bg-grain-dark opacity-40 pointer-events-none"></div>

      {/* Decorative Orange Light Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="max-w-3xl">
          {/* Subtitle / Kicker */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#FF5500] font-mono-code text-xs uppercase tracking-widest font-bold">
              // ABOUT TELLER SOLUTIONS
            </span>
          </div>

          {/* Editorial Heading combining heavy bold sans + italic serif */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05] mb-8">
            <span className="block font-sans">WE ARE TELLER.</span>
            <span className="block font-serif-italic normal-case text-[#FF5500] font-normal my-1 sm:my-2">
              engineering systems
            </span>
            <span className="block font-sans">
              FOR UNCOMPROMISING SPEED<span className="text-[#FF5500]">.</span>
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10">
            At Teller Solutions, we bridge high-level product design with deep, resilient infrastructure. Whether you are bootstrapping an ambitious venture or refactoring legacy monoliths, we build distributed architectures that never buckle under pressure.
          </p>

          {/* Consultation CTA */}
          <div>
            <button
              onClick={() => navigateTo('contact')}
              aria-label="Speak directly with our Lead Architect"
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-[#FF5500] text-white font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-full transition-all duration-200 cursor-pointer group"
            >
              <span>Speak directly with our Lead Architect</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
