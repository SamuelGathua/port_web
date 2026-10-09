import React, { useEffect } from 'react';
import { X, CheckCircle2, ArrowUpRight, Cpu, Layers, Server } from 'lucide-react';

export default function ProjectModal({ project, onClose, navigateTo }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#F6F2EC] text-[#111113] rounded-3xl shadow-2xl border border-[#DDD6CC] overflow-y-auto flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#F6F2EC]/90 backdrop-blur-md px-6 py-4 border-b border-[#DDD6CC] flex items-center justify-between z-10">
          <div>
            <span className="text-xs font-mono-code text-[#FF5500] font-bold uppercase tracking-wider">
              CASE STUDY // {project.categoryLabel}
            </span>
            <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#111113]">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#111113] text-white hover:bg-[#FF5500] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Tech Stack Banner */}
          <div className="bg-[#EAE4D9] p-4 rounded-2xl border border-[#DDD6CC] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[11px] font-mono-code text-[#7A756D] uppercase">Architecture & Tech Stack</div>
              <div className="text-sm font-bold text-[#111113] mt-0.5">{project.techStack}</div>
            </div>
            <div className="flex gap-2">
              <span className="text-xs font-mono-code px-3 py-1 rounded-full bg-[#111113] text-white font-bold">
                {project.metric}
              </span>
              <span className="text-xs font-mono-code px-3 py-1 rounded-full bg-[#FF5500] text-white font-bold">
                {project.latency}
              </span>
            </div>
          </div>

          {/* Project Summary */}
          <div>
            <h4 className="text-xs font-mono-code text-[#7A756D] uppercase mb-2">Executive Summary</h4>
            <p className="text-base text-[#403E3A] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Problem, Solution, Outcome Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-[#EDE7DD] p-5 rounded-2xl border border-[#DFD8CC]">
              <div className="text-xs font-mono-code font-bold text-[#FF5500] uppercase mb-2">01. The Challenge</div>
              <p className="text-xs text-[#52504C] leading-relaxed">
                {project.details.problem}
              </p>
            </div>

            <div className="bg-[#EDE7DD] p-5 rounded-2xl border border-[#DFD8CC]">
              <div className="text-xs font-mono-code font-bold text-[#111113] uppercase mb-2">02. Our Engineering</div>
              <p className="text-xs text-[#52504C] leading-relaxed">
                {project.details.solution}
              </p>
            </div>

            <div className="bg-[#EDE7DD] p-5 rounded-2xl border border-[#DFD8CC]">
              <div className="text-xs font-mono-code font-bold text-emerald-600 uppercase mb-2">03. The Metric Outcome</div>
              <p className="text-xs text-[#52504C] leading-relaxed">
                {project.details.outcome}
              </p>
            </div>
          </div>

          {/* Tags list */}
          <div>
            <div className="text-xs font-mono-code text-[#7A756D] uppercase mb-2">Applied Technologies</div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white rounded-lg border border-[#DDD6CC] text-xs font-mono-code text-[#111113]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action */}
          <div className="pt-4 border-t border-[#DDD6CC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#6C6760]">
              Interested in building a similar scalable architecture for your product?
            </div>
            <button
              onClick={() => {
                onClose();
                navigateTo('contact');
              }}
              className="w-full sm:w-auto bg-[#FF5500] hover:bg-[#E64A00] text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-[#FF5500]/25"
            >
              <span>Discuss Your Architecture</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
