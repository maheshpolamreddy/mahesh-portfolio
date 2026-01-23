
import React from 'react';

const certs = [
  { 
    title: 'Wipro Talent Next Program', 
    issuer: 'AI, Cyber Security, Cloud Computing', 
    icon: 'fa-microchip',
    id: '01',
    glow: 'group-hover:shadow-cyan-500/20'
  },
  { 
    title: 'Social Networks', 
    issuer: 'NPTEL', 
    icon: 'fa-users',
    id: '02',
    glow: 'group-hover:shadow-blue-500/20'
  },
  { 
    title: 'Critical Thinking & Problem Solving', 
    issuer: 'edX', 
    icon: 'fa-brain',
    id: '03',
    glow: 'group-hover:shadow-purple-500/20'
  },
  { 
    title: 'AI Fundamentals', 
    issuer: 'IBM', 
    icon: 'fa-robot',
    id: '04',
    glow: 'group-hover:shadow-yellow-500/20'
  },
];

export const Certifications: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20 space-y-4">
        <div className="inline-block px-4 py-1.5 bg-yellow-500/10 text-yellow-400 text-xs font-black rounded-full uppercase tracking-[0.2em] border border-yellow-500/20">
          Validation
        </div>
        <h2 className="text-4xl md:text-6xl font-black">
          Professional <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.3)]">Certifications</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mt-4 opacity-50"></div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {certs.map((cert, i) => (
          <div 
            key={i} 
            className="group relative perspective-1000 animate-[fade-up-blur_0.8s_ease-out_forwards]"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div className={`relative glass p-10 rounded-[3rem] flex flex-col items-center text-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] border border-white/5 hover:border-yellow-500/30 hover:bg-white/[0.08] hover:-translate-y-4 hover:rotate-x-3 hover:rotate-y-3 ${cert.glow} shadow-2xl`}>
              
              {/* Floating ID Badge */}
              <div className="absolute top-8 left-8 text-[12px] font-black text-white/5 group-hover:text-yellow-500/20 transition-colors tracking-tighter">
                CERT // {cert.id}
              </div>

              {/* Status Indicator */}
              <div className="absolute top-8 right-8">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
              </div>

              {/* Enhanced Icon Container */}
              <div className="relative w-24 h-24 flex items-center justify-center rounded-[2rem] mb-10 group-hover:rotate-[360deg] transition-all duration-1000 ease-out overflow-hidden shadow-inner bg-black/20">
                <div className="absolute inset-0 bg-yellow-400/5 group-hover:bg-yellow-400/20 transition-colors"></div>
                <i className={`fas ${cert.icon} text-4xl text-yellow-400/60 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-500 z-10`}></i>
              </div>

              {/* Text Content */}
              <div className="space-y-4">
                <h3 className="font-bold text-xl leading-tight group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.25em] group-hover:text-yellow-400/80 transition-colors">
                  {cert.issuer}
                </p>
              </div>

              {/* Reactive Bottom Bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent group-hover:w-1/2 transition-all duration-700 opacity-60"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
