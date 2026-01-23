
import React from 'react';

export const Experience: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 text-sm font-bold rounded uppercase tracking-widest">Journey</div>
        <h2 className="text-4xl md:text-5xl font-black">Professional <span className="text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">Experience</span></h2>
      </div>

      <div className="relative max-w-4xl mx-auto px-4">
        {/* Animated Timeline Path */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-transparent animate-[timeline-flow_6s_linear_infinite]"></div>
        </div>

        <div className="relative flex flex-col items-start md:items-center space-y-12">
          {/* Card Container */}
          <div className="relative w-full md:w-1/2 md:pr-12 md:ml-auto group animate-[fade-up-blur_1s_ease-out_forwards]">
            {/* Timeline Dot */}
            <div className="absolute left-[-31px] md:left-[-11px] md:right-auto top-10 w-6 h-6 bg-[#050505] border-2 border-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)] z-20 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-500">
               <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-20"></div>
            </div>
            
            <div className="glass p-8 rounded-[2rem] border border-white/5 hover:border-blue-500/40 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.2)] transform hover:-translate-y-2">
              <div className="flex flex-col mb-6">
                <span className="inline-block w-fit px-3 py-1 bg-blue-500/20 text-blue-400 font-black rounded-lg text-[10px] uppercase tracking-widest mb-3 border border-blue-500/30">
                  Jun 2025 – Aug 2025
                </span>
                <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors">Cyber Security Internship</h3>
                <p className="text-gray-400 font-bold text-sm">Supraja Technologies, Vijayawada</p>
              </div>
              
              <ul className="space-y-4 text-gray-400 text-sm leading-relaxed">
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
        @keyframes timeline-flow {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes fade-up-blur {
          0% { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
      `}</style>
    </div>
  );
};
