
import React from 'react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: ['Python', 'Django', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
    icon: 'fa-code',
    accent: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'Cyber Security & Tools',
    skills: ['Nessus', 'Burp Suite', 'Wireshark', 'Network Security', 'Pentesting'],
    icon: 'fa-user-secret',
    accent: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Core & DevOps',
    skills: ['Data Structures', 'DBMS', 'Git', 'GitHub', 'System Architecture'],
    icon: 'fa-gears',
    accent: 'from-green-500 to-emerald-500'
  }
];

export const Skills: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-bold rounded uppercase tracking-tighter animate-pulse">Expertise</div>
        <h2 className="text-4xl md:text-5xl font-black">Technical <span className="gradient-text">Skillset</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div 
            key={i} 
            className="group glass p-8 rounded-[2.5rem] transition-all duration-500 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(34,211,238,0.15)] relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>
            
            <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <i className={`fas ${cat.icon} text-cyan-400 text-3xl group-hover:text-white transition-colors`}></i>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
            
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill, j) => (
                <span 
                  key={j} 
                  className="px-4 py-2 bg-white/5 rounded-xl text-sm font-medium text-gray-400 border border-white/5 hover:border-cyan-500/50 hover:text-white hover:bg-cyan-500/5 transition-all duration-300 hover:scale-105"
                  style={{ transitionDelay: `${j * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
