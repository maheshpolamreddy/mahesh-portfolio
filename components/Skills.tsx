
import React, { useState, useEffect, useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages & Frameworks',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 85 },
      { name: 'Flask', level: 80 },
      { name: 'JavaScript', level: 75 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'SQL', level: 80 }
    ],
    icon: 'fa-code',
    accent: 'from-cyan-500 to-blue-500'
  },
  {
    title: 'AI/ML & Technologies',
    skills: [
      { name: 'AI/ML', level: 85 },
      { name: 'RAG Systems', level: 80 },
      { name: 'Vector Databases', level: 75 },
      { name: 'Web Scraping', level: 85 },
      { name: 'Cognitive Crafting', level: 70 }
    ],
    icon: 'fa-brain',
    accent: 'from-violet-500 to-purple-500'
  },
  {
    title: 'Cyber Security & Tools',
    skills: [
      { name: 'Nessus', level: 75 },
      { name: 'BurpSuite', level: 70 },
      { name: 'WireShark', level: 75 },
      { name: 'Network Security', level: 80 },
      { name: 'Threat Analysis', level: 75 }
    ],
    icon: 'fa-user-secret',
    accent: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Core & DevOps',
    skills: [
      { name: 'Data Structures', level: 85 },
      { name: 'DBMS', level: 80 },
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'System Architecture', level: 75 }
    ],
    icon: 'fa-gears',
    accent: 'from-green-500 to-emerald-500'
  }
];

const getProficiencyLabel = (level: number) => {
  if (level >= 90) return 'Expert';
  if (level >= 75) return 'Advanced';
  if (level >= 60) return 'Intermediate';
  return 'Beginner';
};

export const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12" ref={sectionRef}>
      <div className="text-center mb-16 space-y-4">
        <div className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-sm font-bold rounded uppercase tracking-tighter animate-pulse">Expertise</div>
        <h2 className="text-4xl md:text-5xl font-black">Technical <span className="gradient-text">Skillset</span></h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            className="group glass p-8 rounded-[2.5rem] transition-all duration-500 border border-white/5 hover:border-cyan-500/30 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(34,211,238,0.15)] relative overflow-hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: `all 0.6s ease-out ${i * 150}ms`
            }}
          >
            {/* Background Glow */}
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${cat.accent} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}></div>

            <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
              <i className={`fas ${cat.icon} text-cyan-400 text-3xl group-hover:text-white transition-colors`}></i>
            </div>

            <h3 className="text-2xl font-bold mb-6 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>

            <div className="space-y-4">
              {cat.skills.map((skill, j) => (
                <div key={j} className="group/skill">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-300 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-xs font-bold text-cyan-400">
                      {getProficiencyLabel(skill.level)}
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${cat.accent} rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${(i * 150) + (j * 100)}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
