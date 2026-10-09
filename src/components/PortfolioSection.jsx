import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Code2, Layers, Cpu, Server, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function PortfolioSection({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'bitx-fintech',
      title: 'Bitx - Crypto & Asset Dashboard',
      client: 'Bitx Liquidity Exchange',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Development',
      techStack: 'Next.js, PostgreSQL, FastAPI, Tailwind CSS',
      tags: ['Next.js', 'PostgreSQL', 'FastAPI', 'Tailwind CSS', 'WebSockets'],
      image: '/assets/project_fintech.jpg',
      metric: '$48.7M 24h Volume',
      latency: '28ms Telemetry',
      summary: 'Institutional-grade digital assets trading terminal and telemetry engine engineered for real-time market data streaming and low-latency order matching.',
      details: {
        problem: 'Client needed to replace an aging monolithic application that suffered from 800ms UI lags during volatile trading hours and could not reliably sync websocket streams.',
        solution: 'Engineered a modern Next.js client paired with an asynchronous FastAPI backend and optimized PostgreSQL connection pooling with Redis caching.',
        outcome: 'Reduced average end-to-end telemetry latency to 28ms while sustaining peak spikes of 65,000 active concurrent WebSocket subscribers.'
      }
    },
    {
      id: 'apex-cloud',
      title: 'Apex - Multi-Region K8s Orchestrator',
      client: 'CloudScale Global',
      category: 'cloud',
      categoryLabel: 'Scalable Architecture',
      techStack: 'Go, Docker, Kubernetes, AWS, Terraform',
      tags: ['Go', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Prometheus'],
      image: null, // Custom rendered interactive tech visual
      mockupType: 'cloud-topology',
      metric: '450+ Pods Managed',
      latency: '99.999% SLA Uptime',
      summary: 'Autonomous infrastructure control plane automating multi-cluster Kubernetes deployments, canary traffic switching, and cross-region failover.',
      details: {
        problem: 'Manual cluster rollouts led to intermittent deployment errors and slow multi-region failovers exceeding 15 minutes during outages.',
        solution: 'Built a custom Go controller running in Kubernetes that orchestrates automated canary analysis and provisions infrastructure via Terraform state automations.',
        outcome: 'Achieved sub-60 second automated multi-region failover with zero manual developer intervention.'
      }
    },
    {
      id: 'synthai-data',
      title: 'SynthAI - Real-Time Neural Inference Pipeline',
      client: 'Cognitive Data Corp',
      category: 'ai',
      categoryLabel: 'Data & AI Integration',
      techStack: 'FastAPI, PyTorch, pgvector, Redis, Triton',
      tags: ['FastAPI', 'PyTorch', 'pgvector', 'Redis', 'Docker', 'Python'],
      image: null, // Custom rendered neural visual
      mockupType: 'ai-pipeline',
      metric: '12,000 QPS Throughput',
      latency: '34ms Vector Search',
      summary: 'Distributed embedding and vector similarity query pipeline designed for sub-50ms enterprise document indexing and semantic retrieval.',
      details: {
        problem: 'Legacy keyword search failed on complex regulatory documents and took over 2.4 seconds per query across 10 million archived contracts.',
        solution: 'Implemented hybrid vector indexing using PostgreSQL pgvector with Redis tiered caching and batched PyTorch inference on Triton servers.',
        outcome: 'Semantic query times dropped from 2,400ms to 34ms, while indexing throughput scaled to 12,000 documents per minute.'
      }
    },
    {
      id: 'omni-retail',
      title: 'OmniScale - High-Concurrency Commerce Engine',
      client: 'Aura Lifestyle Brands',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Development',
      techStack: 'React, Node.js, GraphQL, Redis, Stripe',
      tags: ['React', 'Node.js', 'GraphQL', 'Redis', 'Stripe', 'PostgreSQL'],
      image: null,
      mockupType: 'commerce-engine',
      metric: '80K Carts/Min Spike',
      latency: '0 Dropped Checkouts',
      summary: 'Headless commerce backend and customer checkout experience architected to eliminate race conditions and deadlocks during viral product flash drops.',
      details: {
        problem: 'Severe database locking caused shopping carts to fail during flash-sales, resulting in estimated $300k+ in abandoned checkout transactions.',
        solution: 'Redesigned the checkout queue using Redis distributed locks and asynchronous payment reconciliation microservices with GraphQL.',
        outcome: 'Handled Black Friday peak load of 80,000 checkouts per minute with zero lockups and 100% inventory accuracy.'
      }
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#F6F2EC] bg-grain">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#FF5500] uppercase tracking-widest mb-3">
              <span>// PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111113] leading-[1.05]">
              <span className="block font-sans">FEATURED WORK &</span>
              <span className="block font-serif-italic normal-case text-[#FF5500] font-normal my-1">
                engineered systems
              </span>
              <span className="block font-sans">
                PROVEN IN PRODUCTION<span className="text-[#FF5500]">.</span>
              </span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#EDE7DD] p-1.5 rounded-full border border-[#DFD8CC]">
            {[
              { id: 'all', label: 'All Systems' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'cloud', label: 'Cloud & DevOps' },
              { id: 'ai', label: 'Data & AI' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#111113] text-white shadow-sm'
                    : 'text-[#6C6760] hover:text-[#111113]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2x2 Showcase Grid as specified in directives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group relative bg-[#EDE7DD] hover:bg-white rounded-3xl overflow-hidden border border-[#DFD8CC] hover:border-[#FF5500]/50 transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 cursor-pointer flex flex-col"
            >
              {/* Media Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#18191E] border-b border-[#DFD8CC]/80">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                ) : project.mockupType === 'cloud-topology' ? (
                  /* Custom Cloud Topology Graphic */
                  <div className="w-full h-full bg-[#0D0E12] p-6 flex flex-col justify-between font-mono-code relative overflow-hidden">
                    <div className="absolute inset-0 bg-grain-dark opacity-30"></div>
                    {/* Glowing nodes */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF5500]/10 rounded-full blur-2xl"></div>

                    <div className="flex items-center justify-between text-xs text-gray-400 relative z-10">
                      <span className="flex items-center gap-1.5 text-emerald-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                        3 REGIONS HEALTHY
                      </span>
                      <span className="text-gray-400">us-east • eu-west • ap-southeast</span>
                    </div>

                    <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
                      <div className="bg-[#181A22] border border-white/10 p-3 rounded-xl">
                        <div className="text-[10px] text-gray-400">PRIMARY EKS</div>
                        <div className="text-base font-bold text-white mt-1">160 Pods</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">CPU 34%</div>
                      </div>
                      <div className="bg-[#181A22] border border-[#FF5500]/40 p-3 rounded-xl shadow-lg shadow-[#FF5500]/10">
                        <div className="text-[10px] text-[#FF5500]">CANARY RUNNER</div>
                        <div className="text-base font-bold text-white mt-1">v2.14.0</div>
                        <div className="text-[10px] text-emerald-400 mt-0.5">0.00% Err</div>
                      </div>
                      <div className="bg-[#181A22] border border-white/10 p-3 rounded-xl">
                        <div className="text-[10px] text-gray-400">TERRAFORM</div>
                        <div className="text-base font-bold text-white mt-1">Synced</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">Hash 8f3a9e</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 relative z-10 border-t border-white/10 pt-3">
                      <span>AUTO-SCALING: ENABLED</span>
                      <span className="text-[#FF5500] font-bold">LATENCY: 12ms</span>
                    </div>
                  </div>
                ) : project.mockupType === 'ai-pipeline' ? (
                  /* Custom AI Pipeline Graphic */
                  <div className="w-full h-full bg-[#0A0C10] p-6 flex flex-col justify-between font-mono-code relative overflow-hidden">
                    <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-purple-600/15 rounded-full blur-2xl"></div>

                    <div className="flex items-center justify-between text-xs text-gray-400 relative z-10">
                      <span className="flex items-center gap-1.5 text-purple-400">
                        <Cpu className="w-3.5 h-3.5" />
                        VECTOR ENGINE ONLINE
                      </span>
                      <span className="text-gray-400">BATCH SIZE: 512</span>
                    </div>

                    <div className="relative z-10 my-auto space-y-2.5">
                      <div className="bg-[#141720] border border-white/10 p-3 rounded-xl flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-gray-400">INGESTION STREAM</div>
                          <div className="text-sm font-bold text-white">Kafka Topic :: doc-embeddings</div>
                        </div>
                        <span className="text-xs text-emerald-400 font-bold">12.4k msg/s</span>
                      </div>
                      <div className="bg-[#141720] border border-white/10 p-3 rounded-xl flex items-center justify-between">
                        <div>
                          <div className="text-[10px] text-gray-400">PGVECTOR RETRIEVAL</div>
                          <div className="text-sm font-bold text-white">Cosine Similarity Top-K</div>
                        </div>
                        <span className="text-xs text-[#FF5500] font-bold">34ms</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 relative z-10 border-t border-white/10 pt-3">
                      <span>DIMENSIONS: 1536</span>
                      <span className="text-emerald-400">CACHE HIT RATE: 94.2%</span>
                    </div>
                  </div>
                ) : (
                  /* Custom Commerce Engine Graphic */
                  <div className="w-full h-full bg-[#111218] p-6 flex flex-col justify-between font-mono-code relative overflow-hidden">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="text-emerald-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" /> FLASH DROP ACTIVE
                      </span>
                      <span>QUEUE: ZERO DELAY</span>
                    </div>

                    <div className="my-auto grid grid-cols-2 gap-3">
                      <div className="bg-[#1A1C24] p-3.5 rounded-xl border border-white/10">
                        <div className="text-[10px] text-gray-400">CHECKOUT VELOCITY</div>
                        <div className="text-lg font-black text-white mt-1">1,334 / sec</div>
                        <div className="text-[10px] text-emerald-400 mt-1">100% Success</div>
                      </div>
                      <div className="bg-[#1A1C24] p-3.5 rounded-xl border border-white/10">
                        <div className="text-[10px] text-gray-400">REDIS INVENTORY LOCK</div>
                        <div className="text-lg font-black text-white mt-1">0 Deadlocks</div>
                        <div className="text-[10px] text-emerald-400 mt-1">ACID Guaranteed</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-gray-400 border-t border-white/10 pt-3">
                      <span>INTEGRATED: STRIPE & GRAPHQL</span>
                      <span className="text-white font-bold">$0 OVERSELL</span>
                    </div>
                  </div>
                )}

                {/* Hover overlay with Tech Stack Summary (as requested in prompt) */}
                <div className="absolute inset-0 bg-[#111113]/90 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white z-20">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-code text-[#FF5500] font-bold uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono-code bg-white/10 px-2.5 py-1 rounded-full">
                      {project.metric}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-black uppercase tracking-tight mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs text-gray-300 line-clamp-2 mb-4 leading-relaxed">
                      {project.summary}
                    </p>
                    
                    {/* Tech Stack Summary tag list */}
                    <div className="text-xs font-mono-code text-[#FF5500] font-bold">
                      Stack: <span className="text-white font-medium">{project.techStack}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/20 pt-3">
                    <span className="text-xs font-mono-code text-gray-400">Click to inspect case study</span>
                    <span className="w-8 h-8 rounded-full bg-[#FF5500] flex items-center justify-center text-white">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta & Bottom Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono-code font-bold text-[#FF5500] uppercase tracking-wider">
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs font-mono-code text-[#7A756D]">
                      {project.metric}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#111113] uppercase tracking-tight group-hover:text-[#FF5500] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#52504C] line-clamp-2 leading-relaxed mb-4">
                    {project.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#DFD8CC] flex items-center justify-between text-xs font-mono-code">
                  <span className="text-[#6D6860] truncate max-w-[70%]">
                    {project.techStack}
                  </span>
                  <span className="font-bold text-[#111113] group-hover:text-[#FF5500] flex items-center gap-1 transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
