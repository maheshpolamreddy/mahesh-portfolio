
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-bold rounded uppercase tracking-widest">Journey</div>
        <h2 className="text-4xl md:text-5xl font-black">Professional <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Experience</span></h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {/* Eedas Analytics — AI / ML Internship */}
          <div className="group h-full animate-[fade-up-blur_1s_ease-out_forwards]">
            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] transform hover:-translate-y-2 h-full flex flex-col">
              <div className="flex flex-col mb-6">
                <span className="inline-block w-fit px-3 py-1 bg-blue-500/20 text-blue-400 font-black rounded-lg text-[10px] uppercase tracking-widest mb-3 border border-blue-500/30">
                  Dec 2025 – Mar 2026
                </span>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">AI &amp; Machine Learning Internship</h3>
                <p className="text-gray-400 font-bold text-sm">Eedas Analytics Private Limited</p>
                <p className="text-gray-500 text-xs mt-2 italic">Internship completion certified April 15, 2026</p>
              </div>

              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed flex-1">
                {[
                  'Completed a structured internship in Artificial Intelligence and Machine Learning across AI- and ML-focused initiatives.',
                  'Contributed to multiple projects spanning data-driven analysis, modeling workflows, and applied ML problem solving.',
                  'Built strong analytical and debugging habits with a consistent focus on learning new tools and methods.',
                  'Recognized by the team for dedication, discipline, and reliability throughout the program.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 shrink-0 group-hover/item:scale-150 group-hover/item:bg-cyan-400 transition-all"></span>
                    <span className="group-hover/item:text-gray-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Supraja Technologies — Cyber Security */}
          <div className="group h-full animate-[fade-up-blur_1s_ease-out_0.12s_forwards]">
            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] transform hover:-translate-y-2 h-full flex flex-col">
              <div className="flex flex-col mb-6">
                <span className="inline-block w-fit px-3 py-1 bg-blue-500/20 text-blue-400 font-black rounded-lg text-[10px] uppercase tracking-widest mb-3 border border-blue-500/30">
                  Jun 2025 – Aug 2025
                </span>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">Cyber Security Internship</h3>
                <p className="text-gray-400 font-bold text-sm">Supraja Technologies, Vijayawada</p>
              </div>

              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed flex-1">
                {[
                  'Participated in real-world security assessments and threat analysis.',
                  'Conducted vulnerability evaluations using Nessus and Burp Suite.',
                  'Gained hands-on experience with network protection and incident response.',
                  'Completed expert-guided practical project assignments.'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-3 shrink-0 group-hover/item:scale-150 group-hover/item:bg-cyan-400 transition-all"></span>
                    <span className="group-hover/item:text-gray-200 transition-colors">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-up-blur {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </div>
  );
};
