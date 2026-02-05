
import React from 'react';

const projects = [
  {
    title: 'CCR Compliance Agent',
    description: 'Developed a complete AI-powered compliance system for the California Code of Regulations. Features web crawling with Crawl4AI, vector database integration using Supabase + pgvector, RAG implementation with OpenAI, and a futuristic web interface with voice-enabled queries and real-time AI responses.',
    tags: ['Python', 'AI/ML', 'RAG', 'Crawl4AI', 'Supabase', 'pgvector', 'OpenAI', 'Web Scraping'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200', // AI/compliance/legal tech visual
    link: 'https://california-code-of-regulations.onrender.com',
    github: 'https://github.com/maheshpolamreddy/california-code-of-regulations'
  },
  {
    title: 'CHAT VERSE',
    description: 'Developed a secure chat platform supporting real-time group and private messaging with strong user authentication and data encryption. Focused on privacy and scalability.',
    tags: ['Python', 'Django/Flask', 'WebSockets', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200', // High-tech security/code visual
    link: 'https://chatverse3o.lovable.app/',
    github: 'https://github.com/maheshpolamreddy/chatverse3o'
  },
  {
    title: 'Professional Milk Dairy Ledger',
    description: 'Developed a specialized dairy management system for recording daily milk collection, managing farmer accounts, and maintaining accurate ledger logs with secure date-based storage.',
    tags: ['Python', 'Django/Flask', 'HTML', 'CSS', 'SQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', // Modern data ledger/dashboard visual
    link: 'https://vijayadairyledger.lovable.app',
    github: 'https://github.com/maheshpolamreddy/vijayadairyledger'
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div className="space-y-4">
          <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-bold rounded uppercase tracking-wider">Works</div>
          <h2 className="text-4xl md:text-5xl font-black">Featured <span className="text-cyan-400">Projects</span></h2>
        </div>
        <p className="text-gray-400 max-w-sm border-l-2 border-cyan-500/30 pl-4 italic">
          A collection of secure and scalable solutions focused on solving real-world challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {projects.map((project, i) => (
          <div 
            key={i} 
            className="group relative glass rounded-[40px] overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.03] hover:-translate-y-4 hover:shadow-[0_40px_80px_-20px_rgba(34,211,238,0.35)] border border-white/5 hover:border-cyan-500/50 hover:bg-white/5"
          >
            {/* Project Image Container */}
            <div className="aspect-video overflow-hidden relative">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1"
              />
              {/* Cinematic Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-cyan-500/5 mix-blend-overlay group-hover:bg-cyan-500/20 transition-all duration-500"></div>
              
              {/* Action Hint Indicator */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="bg-cyan-500/20 backdrop-blur-md border border-cyan-400/30 p-5 rounded-full scale-50 group-hover:scale-100 transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.4)]">
                  <i className="fas fa-eye text-cyan-400 text-2xl"></i>
                </div>
              </div>

              {/* Top Right Label */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                <div className="bg-cyan-500 text-black px-5 py-2 rounded-full shadow-lg shadow-cyan-500/50 font-bold text-[11px] uppercase tracking-tighter">
                   View Project
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 space-y-5 relative">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-3xl font-bold group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-gray-400 hover:text-black hover:bg-cyan-500 hover:border-cyan-400 hover:scale-110 hover:rotate-12 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 ease-out"
                    title="View Source"
                  >
                    <i className="fab fa-github text-lg"></i>
                  </a>
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/10 text-gray-400 hover:text-black hover:bg-cyan-500 hover:border-cyan-400 hover:scale-110 hover:-translate-y-1 hover:translate-x-1 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 ease-out"
                    title="Live Demo"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                </div>
              </div>

              <p className="text-gray-400 leading-relaxed text-sm h-auto md:h-20 overflow-hidden group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2 transition-transform duration-500 group-hover:translate-x-1">
                {project.tags.map((tag, j) => (
                  <span 
                    key={j} 
                    className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-3 py-1.5 rounded-full bg-cyan-400/5 border border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Bottom Decorative Animated Bar */}
              <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
