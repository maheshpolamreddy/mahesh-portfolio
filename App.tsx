
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#050505] min-h-screen text-white selection:bg-cyan-500/30">
      {/* Background Cinematic Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] animate-blob animation-delay-2000"></div>
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-cyan-900/10 blur-[120px] animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      <Navbar scrollY={scrollY} />
      
      <main className="relative z-10 pt-20">
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <About />
        </section>

        <section id="skills" className="py-24 px-6 md:px-12 bg-black/40 scroll-mt-20">
          <Skills />
        </section>

        <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <Experience />
        </section>

        <section id="projects" className="py-24 px-6 md:px-12 bg-black/40 scroll-mt-20">
          <Projects />
        </section>

        <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto scroll-mt-20">
          <Education />
        </section>

        <section id="certifications" className="py-24 px-6 md:px-12 bg-black/40 scroll-mt-20">
          <Certifications />
        </section>

        <section id="contact" className="py-24 px-6 md:px-12 max-w-4xl mx-auto scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
