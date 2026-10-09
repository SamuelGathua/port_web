import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero({ navigateTo }) {
  const scrollToWork = () => {
    const el = document.getElementById('portfolio');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 sm:pt-24 pb-20 md:pb-28 px-4 sm:px-8 bg-[#F6F2EC] bg-grain overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Hero Content: Centered/Expansive Editorial Impact */}
        <div className="flex flex-col items-start max-w-4xl">
          {/* The Signature Image 2 Typography Styling: Heavy Sans + Editorial Italic Serif */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-[#111113] uppercase leading-[0.95] mb-8">
            <span className="block font-sans font-black">
              BUILDING
            </span>
            <span className="block font-serif-italic normal-case text-[#FF5500] font-normal tracking-normal my-1 sm:my-2">
              digital systems
            </span>
            <span className="block font-sans font-black">
              THAT SCALE<span className="text-[#FF5500]">.</span>
            </span>
          </h1>

          {/* Subheadline (1-2 sentences as requested) */}
          <p className="text-lg sm:text-2xl text-[#52504C] font-normal max-w-2xl leading-relaxed mb-10">
            We engineer robust web applications, data-driven backends, and cloud infrastructure designed for growth and performance.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="bg-[#FF5500] hover:bg-[#E64A00] text-white font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full flex items-center gap-2.5 transition-all duration-200 shadow-xl shadow-[#FF5500]/25 hover:shadow-[#FF5500]/40 hover:-translate-y-1 cursor-pointer group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={scrollToWork}
              className="bg-transparent hover:bg-[#EAE4DC] text-[#111113] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded-full border-2 border-[#111113] flex items-center gap-2.5 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>View Our Work</span>
              <ArrowDown className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
