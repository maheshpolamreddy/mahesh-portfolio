
import React from 'react';

const educations = [
  {
    institution: 'NBKR INSTITUTE OF SCIENCE AND TECHNOLOGY',
    degree: 'B.Tech - Computer Science & Engineering',
    period: '2022 – 2026',
    score: 'CGPA: 8.5 (Till 6th Sem)',
    color: 'border-cyan-500',
    glow: 'rgba(34,211,238,0.2)',
    delay: '0ms'
  },
  {
    institution: 'Sri Chaitanya Jr College',
    degree: 'Intermediate (MPC)',
    period: '2020 – 2022',
    score: 'CGPA: 8.0',
    color: 'border-blue-500',
    glow: 'rgba(59,130,246,0.2)',
    delay: '200ms'
  },
  {
    institution: 'SUSHRUTA EM HIGH SCHOOL',
    degree: 'Secondary Education',
    period: '2020',
    score: 'Marks: 527 / 600 (89%)',
    color: 'border-purple-500',
    glow: 'rgba(168,85,247,0.2)',
    delay: '400ms'
  }
];

export const Education: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4">
        <div className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-sm font-bold rounded uppercase tracking-widest">Foundation</div>
        <h2 className="text-4xl md:text-5xl font-black">Academic <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.3)]">Background</span></h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 px-4">
        {educations.map((edu, i) => (
          <div
            key={i}
            className={`group glass p-8 rounded-[2.5rem] border-t-[6px] ${edu.color} relative overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_30px_60px_-15px_${edu.glow}] animate-[fade-up-blur_0.8s_ease-out_forwards]`}
            style={{ animationDelay: edu.delay }}
          >
            {/* Dynamic Reflection Layer */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>

            <div className="space-y-6 relative z-10">
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full group-hover:bg-green-500/10 group-hover:text-green-400 transition-all">
                {edu.period}
              </span>

              <div className="min-h-[80px]">
                <h3 className="text-xl font-black text-white leading-tight group-hover:text-green-400 transition-colors duration-300">
                  {edu.institution}
                </h3>
                <p className="text-gray-400 text-sm mt-2 font-medium">{edu.degree}</p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Performance</p>
                  <div className="text-2xl font-black text-white group-hover:scale-110 transition-transform origin-left">
                    {edu.score.split(':')[0]}<span className="text-green-400">:</span>{edu.score.split(':')[1]}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-green-500 group-hover:text-black group-hover:rotate-[15deg] transition-all duration-500">
                  <i className="fas fa-graduation-cap text-lg"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
