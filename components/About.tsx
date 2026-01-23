
import React from 'react';

export const About: React.FC = () => {
  const stats = [
    { label: 'CGPA', value: '8.5', icon: 'fa-graduation-cap' },
    { label: 'Internships', value: '1', icon: 'fa-briefcase' },
    { label: 'Projects', value: '2', icon: 'fa-code-branch' },
    { label: 'Certifications', value: '4', icon: 'fa-award' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <div className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm font-bold rounded animate-pulse">ABOUT ME</div>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Focusing on Clean, Scalable <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Backend Systems</span></h2>
        <p className="text-gray-400 leading-relaxed text-lg transition-colors hover:text-gray-200">
          Motivated Computer Science undergraduate with a strong grounding in Python programming and core computer science concepts. 
          I focus on building efficient, scalable applications using clean, readable code.
        </p>
        <p className="text-gray-400 leading-relaxed text-lg transition-colors hover:text-gray-200">
          With hands-on experience in security assessments and vulnerability evaluations, I am eager to contribute to collaborative 
          teams and solve real-world problems through practical learning and technical mentorship.
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all duration-500 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <i className={`fas ${stat.icon} text-cyan-400 mb-2 text-xl group-hover:-translate-y-1 transition-transform`}></i>
              <div className="text-3xl font-black group-hover:scale-110 transition-transform origin-left text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium group-hover:text-gray-300 transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="relative flex justify-center perspective-1000">
        <div className="relative w-full max-w-sm aspect-square glass rounded-[3rem] overflow-hidden border-2 border-white/10 group hover:rotate-y-6 hover:rotate-x-2 transition-transform duration-700">
           <img 
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" 
            alt="Polamreddy Mahesh Reddy Portfolio" 
            className="w-full h-full object-cover opacity-80 grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
        
        {/* Floating elements with enhanced "Float" animation */}
        <div className="absolute -top-6 -right-6 glass p-5 rounded-2xl shadow-2xl animate-[bounce_4s_infinite_ease-in-out] hover:scale-110 transition-transform">
          <i className="fab fa-python text-4xl text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.5)]"></i>
        </div>
        <div className="absolute -bottom-6 -left-6 glass p-5 rounded-2xl shadow-2xl animate-[bounce_5s_infinite_ease-in-out_1s] hover:scale-110 transition-transform">
          <i className="fas fa-shield-halved text-4xl text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"></i>
        </div>
      </div>
    </div>
  );
};
