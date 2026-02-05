
import React, { useState, useEffect } from 'react';

export const Hero: React.FC = () => {
  const [isPowerfulAnimating, setIsPowerfulAnimating] = useState(false);

  useEffect(() => {
    const triggerAnim = () => {
      setIsPowerfulAnimating(false);
      requestAnimationFrame(() => {
        setIsPowerfulAnimating(true);
        setTimeout(() => setIsPowerfulAnimating(false), 5000);
      });
    };

    window.addEventListener('triggerHeroAnimation', triggerAnim);
    return () => window.removeEventListener('triggerHeroAnimation', triggerAnim);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const resumeUrl = "https://drive.google.com/file/d/1xtAfmr6rEBxsmCoG3OsAxaTBQjRk5yhU/view?usp=sharing";

  return (
    <div className="min-h-[90vh] flex flex-col items-center justify-center text-center px-6 md:px-12 relative overflow-hidden">
      {/* Dynamic Background Glow synchronized with animation */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none transition-all duration-700 ease-out ${isPowerfulAnimating ? 'opacity-100 scale-110' : 'opacity-0 scale-90'}`}
      ></div>

      <div className="inline-block mb-4 px-4 py-1.5 glass rounded-full text-[10px] font-black tracking-[0.2em] text-cyan-400 uppercase border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
        Available for Internships & Full-time Roles
      </div>

      <div className={`relative mb-6 z-10 ${isPowerfulAnimating ? 'power-glow' : ''}`}>
        <h1 className={`text-5xl md:text-8xl font-black tracking-tighter leading-tight ${isPowerfulAnimating ? 'power-animate' : ''}`}>
          POLAMREDDY <br />
          <span className={`gradient-text uppercase transition-all duration-1000 ${isPowerfulAnimating ? 'brightness-150 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]' : ''}`}>
            Mahesh Reddy
          </span>
        </h1>
      </div>

      <p className={`text-lg md:text-2xl text-gray-400 max-w-3xl mb-12 font-light leading-relaxed transition-all duration-1000 ${isPowerfulAnimating ? 'opacity-0 scale-95 blur-sm' : 'opacity-100 blur-0'}`}>
        Computer Science Undergraduate <span className="text-cyan-400 mx-2">|</span>
        Python Developer <span className="text-cyan-400 mx-2">|</span>
        Cyber Security Enthusiast
      </p>

      <div className={`flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 md:space-x-8 items-center transition-all duration-1000 delay-150 ${isPowerfulAnimating ? 'opacity-0 scale-95 translate-y-8' : 'opacity-100'}`}>
        {/* View Projects - Glossy Liquid Button */}
        <a
          href="#projects"
          onClick={(e) => handleScroll(e, 'projects')}
          className="group relative px-8 py-4 min-w-[180px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 transition-transform duration-500 group-hover:scale-110"></div>
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
          <div className="absolute inset-0 border border-white/20 rounded-2xl"></div>
          <span className="relative z-10 text-white font-black uppercase tracking-widest text-xs flex items-center justify-center">
            View Projects <i className="fas fa-arrow-right ml-2 text-[10px] group-hover:translate-x-1 transition-transform"></i>
          </span>
        </a>

        {/* Contact Me - Frosted Glass Button */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, 'contact')}
          className="group relative px-8 py-4 min-w-[180px] overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 glass border border-white/10 hover:border-white/30"
        >
          <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/10 to-transparent transition-opacity"></div>
          <span className="relative z-10 text-white font-black uppercase tracking-widest text-xs">
            Contact Me
          </span>
        </a>

        {/* Resume - Cyber Glow Button */}
        <div className="relative group/resume">
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-8 py-4 min-w-[180px] flex items-center justify-center rounded-2xl transition-all duration-500 hover:scale-105 active:scale-95 glass border border-cyan-500/30 group-hover/resume:border-cyan-400 group-hover/resume:shadow-[0_0_25px_rgba(34,211,238,0.3)]"
          >
            <div className="absolute inset-0 bg-cyan-500/5 group-hover/resume:bg-cyan-500/10 transition-colors rounded-2xl"></div>
            <span className="relative z-10 text-white font-black uppercase tracking-widest text-xs flex items-center">
              <i className="fas fa-file-pdf mr-2 text-cyan-400 group-hover/resume:scale-110 transition-transform"></i> Resume
            </span>
          </a>

          <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 px-5 py-3 glass border border-white/10 rounded-2xl opacity-0 group-hover/resume:opacity-100 transition-all pointer-events-none w-64 text-center shadow-2xl z-50 transform translate-y-2 group-hover/resume:translate-y-0">
            <p className="font-black text-[10px] text-cyan-400 uppercase tracking-widest mb-1">Secure Download</p>
            <p className="text-[10px] text-gray-400 font-medium leading-relaxed">View professional dossier from Google Cloud Storage.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce text-gray-500/50">
        <i className="fas fa-chevron-down text-xl"></i>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};
