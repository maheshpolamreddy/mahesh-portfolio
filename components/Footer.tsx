
import React from 'react';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/60 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start space-y-2">
          <div className="text-2xl font-black tracking-tighter">
            PMR<span className="text-cyan-400">.</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Polamreddy Mahesh Reddy. All rights reserved.</p>
        </div>

        <div className="flex space-x-6 text-xl">
          <a href="https://github.com/maheshpolamreddy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-github"></i></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><i className="fas fa-envelope"></i></a>
        </div>

        <div className="text-sm font-medium tracking-widest text-gray-500 uppercase flex space-x-8">
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="hover:text-white transition-colors">About</a>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
