import React from 'react';
import { ExternalLink, ArrowUpRight, Check, Globe, Sparkles } from 'lucide-react';

export default function FeaturedProjects() {
  const projects = [
    {
      id: 'urim-trader',
      number: '01',
      title: 'Urim Trader',
      category: 'AI Stock Simulator & Fintech',
      tagline: 'Predictive Financial Intelligence for Nairobi Securities Exchange',
      description: 'An AI-powered stock market simulator and learning platform for the Nairobi Securities Exchange, featuring machine learning forecasting and probability simulations.',
      url: 'https://urimtrader.me/',
      image: '/assets/urimtrader.jpg',
      metrics: ['NSE Real-Time Feeds', 'ML Probability Engine', 'Zero Financial Risk'],
      tags: ['Next.js', 'FastAPI', 'Machine Learning', 'Tailwind CSS', 'WebSockets', 'NSE API']
    },
    {
      id: 'hekimika',
      number: '02',
      title: 'Hekimika',
      category: 'Knowledge Ecosystem & Digital Platform',
      tagline: 'Democratizing African Wisdom, Research & Thought Leadership',
      description: 'An innovative digital wisdom and knowledge platform designed to preserve and amplify critical research, transformative essays, and African intellectual heritage through modern, ultra-responsive digital architecture.',
      url: 'https://hekimika.org/',
      image: '/assets/hekimika.jpg',
      metrics: ['Curated Insights', 'Sub-Second Read Times', 'Global Reader Community'],
      tags: ['React', 'Headless CMS', 'Search Indexing', 'TypeScript', 'Responsive UI']
    },
    {
      id: 'youth-spark-summit',
      number: '03',
      title: 'Youth Spark Summit',
      category: 'Event Platform & Community Hub',
      tagline: 'Empowering Africa’s Next Generation of Innovators & Builders',
      description: 'The high-capacity digital portal for the Youth Spark Summit, uniting emerging African technology leaders, keynote sessions, hackathon registrations, and real-time interactive agenda management.',
      url: 'https://www.youthsparksummit.org/',
      image: '/assets/youthspark.jpg',
      metrics: ['Live Event Telemetry', 'Instant Ticket Pass Flow', 'Interactive Schedules'],
      tags: ['Next.js', 'Cloud Infrastructure', 'Event API', 'Mobile-First', 'GraphQL']
    },
    {
      id: 'abis',
      number: '04',
      title: 'Adaptive Blood Infrastructure System',
      category: 'HealthTech & Cold-Chain Telemetry',
      tagline: 'Every Unit of Blood, Exactly Where It’s Needed',
      description: 'An adaptive healthcare infrastructure platform engineering real-time blood inventory tracking, cold-chain telemetry, and emergency supply distribution across health networks.',
      url: 'https://terumoweb-production.up.railway.app/',
      image: '/assets/abis.jpg',
      metrics: ['Real-Time Blood Telemetry', 'Cold-Chain Monitoring', 'Facility Command Center'],
      tags: ['Next.js', 'Railway', 'Healthcare Telemetry', 'FastAPI', 'Tailwind CSS']
    },
    {
      id: 'blessed-annsey',
      number: '05',
      title: 'Blessed Annsey Academy',
      category: 'EdTech & Digital Campus Ecosystem',
      tagline: 'Shaping Kenya’s Brightest Minds Through Modern Digital Campus Experiences',
      description: 'A comprehensive digital campus and institutional web platform for Blessed Annsey Academy in Nairobi, streamlining admissions inquiries, curriculum showcases, and community engagement.',
      url: 'https://blessedannseyacademy.vercel.app/',
      image: '/assets/blessedannsey.jpg',
      metrics: ['Admissions Pipeline', 'Interactive Campus Tour', 'Parent Communication Hub'],
      tags: ['Next.js', 'Vercel', 'Tailwind CSS', 'Responsive Architecture', 'SEO Engine']
    }
  ];

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 px-4 sm:px-8 bg-[#0C0D11] text-[#F5F2EB] overflow-hidden">
      {/* Background High-Contrast Ambience & Grain */}
      <div className="absolute inset-0 bg-grain-dark opacity-40 pointer-events-none"></div>
      
      {/* Subtle Vibrant Ambient Glows */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 border-b border-white/10 pb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#FF5500] uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-ping"></span>
              <span>// FEATURED PROJECTS SHOWCASE</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-[1.05]">
              <span className="block font-sans">PROVEN SYSTEMS &</span>
              <span className="block font-serif-italic normal-case text-[#FF5500] font-normal my-1">
                digital products
              </span>
              <span className="block font-sans">
                DEPLOYED AT SCALE<span className="text-[#FF5500]">.</span>
              </span>
            </h2>
          </div>

          <p className="text-base text-gray-400 max-w-md">
            Explore live digital platforms engineered by Teller Solutions. Each project balances robust backend architecture with intuitive, modern human experiences.
          </p>
        </div>

        {/* Stacked Alternating Showcase Layout (as requested) */}
        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#14151C] border border-white/10 hover:border-[#FF5500]/40 rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-2xl hover:shadow-[#FF5500]/5`}
              >
                {/* Visual Column: Browser Frame with Real Project Image */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit live website for ${project.title}`}
                    className="block relative rounded-2xl overflow-hidden bg-[#1A1C24] border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 group shadow-xl"
                  >
                    {/* Browser Mockup Top Header */}
                    <div className="bg-[#101117] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></div>
                      </div>
                      <div className="flex items-center gap-1 text-[11px] font-mono-code text-gray-300 bg-white/5 px-3 py-1 rounded-md max-w-xs truncate">
                        <Globe className="w-3 h-3 text-[#FF5500] shrink-0" />
                        <span className="truncate">{project.url.replace('https://', '')}</span>
                      </div>
                      <div className="w-8"></div>
                    </div>

                    {/* Actual Project Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0B0E]">
                      <img
                        src={project.image}
                        alt={`${project.title} live interface preview`}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="500"
                      />
                      
                      {/* Subtle hover gradient overlay with view site badge */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-6">
                        <span className="text-xs font-mono-code text-white bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5">
                          <span>Click to launch site</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#FF5500]" />
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Project Number & Category Pill */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-xs font-bold text-[#FF5500] tracking-widest">
                      {project.number} // PROJECT
                    </span>
                    <span className="text-[11px] font-mono-code px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono-code text-[#FF5500] font-semibold mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Metric highlights */}
                  <ul className="space-y-2">
                    {project.metrics.map((m, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-gray-300">
                        <span className="w-4 h-4 rounded-full bg-[#FF5500] text-white flex items-center justify-center shrink-0">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Applied Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-white/5 text-gray-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* The Clear "Visit Site" Primary-Colored Button */}
                  <div className="pt-4 border-t border-white/10">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit live website for ${project.title}`}
                      className="inline-flex items-center gap-3 bg-[#FF5500] hover:bg-[#E64A00] active:scale-95 text-white font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-200 shadow-xl shadow-[#FF5500]/25 hover:shadow-[#FF5500]/40 hover:-translate-y-0.5 cursor-pointer group"
                    >
                      <span>Visit Site</span>
                      <ExternalLink className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
