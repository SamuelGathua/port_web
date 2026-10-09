import React from 'react';
import { Layers, Cloud, Cpu, ArrowUpRight, Check, Code, Database, Sparkles } from 'lucide-react';

export default function ServicesSection({ navigateTo }) {
  const services = [
    {
      id: 'fullstack',
      number: '01',
      title: 'Full-Stack Development',
      subtitle: 'Web & Mobile Applications',
      description: 'End-to-end digital experiences crafted with extreme precision. From responsive desktop dashboards to snappy cross-platform mobile apps.',
      icon: Layers,
      technologies: ['Next.js / React', 'TypeScript', 'React Native', 'Tailwind CSS', 'Node.js / Express', 'GraphQL & REST'],
      features: [
        'Sub-second page loads & optimized core web vitals',
        'Offline-first synchronization & PWAs',
        'Accessible, design-system-driven component libraries',
        'Clean, test-driven TypeScript architecture'
      ]
    },
    {
      id: 'cloud',
      number: '02',
      title: 'Scalable Architecture',
      subtitle: 'Cloud Deployment & DevOps',
      description: 'Fault-tolerant cloud foundations engineered to handle rapid scale, automatic failover, and predictable cost efficiency.',
      icon: Cloud,
      technologies: ['AWS / GCP', 'Kubernetes / EKS', 'Docker Containers', 'Terraform (IaC)', 'CI/CD Pipelines', 'Prometheus & Grafana'],
      features: [
        'Multi-region high availability & auto-scaling',
        'Infrastructure as Code with reproducible states',
        'Zero-downtime blue/green & canary deployments',
        'Real-time automated alerting and observability'
      ]
    },
    {
      id: 'ai-data',
      number: '03',
      title: 'Data Processing & AI',
      subtitle: 'Intelligent Systems & Pipelines',
      description: 'High-throughput data ingestion, vector search engines, and production-grade LLM integrations that automate complex business workflows.',
      icon: Cpu,
      technologies: ['FastAPI / Python', 'Apache Kafka', 'PostgreSQL / pgvector', 'PyTorch & LangChain', 'Redis Cache', 'Distributed Workers'],
      features: [
        'Event-driven asynchronous stream processing',
        'Custom domain-specific AI agents & RAG pipelines',
        'Ultra-low-latency vector similarity retrieval',
        'Data security, encryption at rest, & SOC-2 compliance'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 px-4 sm:px-8 bg-[#F6F2EC] bg-grain border-b border-[#E3DDD4]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Image 2 Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code font-bold text-[#FF5500] uppercase tracking-widest mb-3">
              <span>// CORE CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#111113] leading-[1.05]">
              <span className="block font-sans">WHAT OUR PARTNERS</span>
              <span className="block font-serif-italic normal-case text-[#FF5500] font-normal my-1">
                can expect from us
              </span>
              <span className="block font-sans">
                EVERY SPRINT<span className="text-[#FF5500]">.</span>
              </span>
            </h2>
          </div>

          <p className="text-base text-[#5A5852] max-w-md">
            We don't do cookie-cutter solutions. We deliver battle-tested software engineering designed to support your enterprise growth from day one.
          </p>
        </div>

        {/* 3-Column Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#EDE7DD] hover:bg-white rounded-3xl p-8 border border-[#DFD8CC] hover:border-[#FF5500]/40 transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Row: Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono-code text-sm font-black text-[#4D4840] group-hover:text-[#FF5500] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white group-hover:bg-[#FF5500] text-[#111113] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-black text-[#111113] uppercase tracking-tight mb-1">
                    {service.title}
                  </h3>
                  <div className="text-xs font-mono-code text-[#FF5500] font-bold uppercase tracking-wider mb-4">
                    {service.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#383733] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#282725] font-medium">
                        <span className="w-4 h-4 rounded-full bg-[#111113] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Tech Tags & Action */}
                <div className="pt-6 border-t border-[#DFD8CC]/80 group-hover:border-[#E8E2D8]">
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-[#DFD8CC]/70 group-hover:bg-[#F3EFE9] text-[#33322E] font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => navigateTo('contact')}
                    className="w-full py-3 px-4 rounded-xl bg-transparent hover:bg-[#111113] text-[#111113] hover:text-white border border-[#111113]/20 hover:border-[#111113] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                  >
                    <span>Request Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
