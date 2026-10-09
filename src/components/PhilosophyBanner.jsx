import React from 'react';
import { ArrowUpRight, Terminal } from 'lucide-react';

export default function PhilosophyBanner({ navigateTo }) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-8 bg-[#F0EAE0] border-y border-[#E2DCD1]">
      <div className="max-w-5xl mx-auto text-center sm:text-left space-y-12">
        {/* Section 1: The Iconic Quote in Image 2 Lettering Style */}
        <div className="border-b border-[#DDD5C7] pb-12">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#111113] leading-[1.08] tracking-tight">
            IT IS ABOUT <span className="font-serif-italic normal-case text-[#FF5500] font-normal tracking-normal">engineering velocity,</span>{' '}
            NOT <span className="font-serif-italic normal-case text-[#FF5500] font-normal tracking-normal">cutting</span> STANDARDS.
          </p>
        </div>

        {/* Section 2: Secondary Statement in Image 2 Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase text-[#111113] leading-[1.1] tracking-tight">
              A ROBUST SYSTEM IS THE{' '}
              <span className="font-serif-italic normal-case text-[#FF5500] font-normal">starting</span>{' '}
              POINT. HOW <span className="font-serif-italic normal-case text-[#FF5500] font-normal">you scale</span>{' '}
              DEFINES YOUR FUTURE.
            </h3>
            <p className="text-base sm:text-lg text-[#2E2C28] mt-6 max-w-xl leading-relaxed">
              We design software architectures built to withstand real-world chaos, millions of concurrent queries, and rapid business pivots without accumulating debilitating technical debt.
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end pt-4">
            <div className="bg-[#E4DDCF] p-6 rounded-3xl border border-[#D5CDBC] w-full text-left space-y-4">
              <div className="text-xs font-mono-code font-bold uppercase tracking-wider text-[#FF5500]">
                OUR ARCHITECTURAL CREED
              </div>
              <ul className="text-xs text-[#282724] space-y-2 font-mono-code font-medium">
                <li>• Zero Single Points of Failure</li>
                <li>• Automated Observable Telemetry</li>
                <li>• Deterministic Infrastructure (IaC)</li>
                <li>• Sub-100ms API Latency Budgets</li>
              </ul>
              <button
                onClick={() => navigateTo('contact')}
                aria-label="Partner with Teller Solutions"
                className="w-full mt-2 py-3 px-4 rounded-full bg-[#111113] hover:bg-[#FF5500] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
