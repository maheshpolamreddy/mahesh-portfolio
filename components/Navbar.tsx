
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Calculate scroll progress
  React.useEffect(() => {
    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', calculateScrollProgress);
    calculateScrollProgress();
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);

  // Track active section
  React.useEffect(() => {
    const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'certifications', 'contact'];

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

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

  const decodeBase64 = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (
    data: Uint8Array,
    ctx: AudioContext,
    sampleRate: number,
    numChannels: number,
  ): Promise<AudioBuffer> => {
    const dataInt16 = new Int16Array(data.buffer);
    const frameCount = dataInt16.length / numChannels;
    const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

    for (let channel = 0; channel < numChannels; channel++) {
      const channelData = buffer.getChannelData(channel);
      for (let i = 0; i < frameCount; i++) {
        channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
      }
    }
    return buffer;
  };

  const playBrandingAudio = async () => {
    // Trigger Hero Animation Event
    window.dispatchEvent(new CustomEvent('triggerHeroAnimation'));

    if (isPlaying) return;
    setIsPlaying(true);

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        await ctx.resume();
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      const [musicResponse, greetingResponse] = await Promise.all([
        ai.models.generateContent({
          model: "gemini-2.5-flash-preview-tts",
          contents: [{ parts: [{ text: "Compose a 6-second professional, clean technology-themed ambient electronic background melody. No voices." }] }],
          config: { responseModalities: [Modality.AUDIO] },
        }),
        ai.models.generateContent({
          model: "gemini-2.5-flash-preview-tts",
          contents: [{ parts: [{ text: "Say 'Hello Mahesh' in a friendly, high-quality professional voice." }] }],
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: {
              voiceConfig: {
                prebuiltVoiceConfig: { voiceName: 'Kore' },
              },
            },
          },
        })
      ]);

      const musicBase64 = musicResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
      const greetingBase64 = greetingResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

      if (musicBase64 && greetingBase64) {
        const musicBuf = await decodeAudioData(decodeBase64(musicBase64), ctx, 24000, 1);
        const greetingBuf = await decodeAudioData(decodeBase64(greetingBase64), ctx, 24000, 1);

        const musicSource = ctx.createBufferSource();
        musicSource.buffer = musicBuf;

        const greetingSource = ctx.createBufferSource();
        greetingSource.buffer = greetingBuf;

        const gainNode = ctx.createGain();
        gainNode.connect(ctx.destination);

        musicSource.connect(gainNode);
        greetingSource.connect(gainNode);

        const startTime = ctx.currentTime + 0.1;
        musicSource.start(startTime);

        const greetingStartTime = startTime + musicBuf.duration - 0.5;
        greetingSource.start(Math.max(startTime, greetingStartTime));

        greetingSource.onended = () => {
          setIsPlaying(false);
        };
      } else {
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio branding failed:", error);
      setIsPlaying(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/5 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4 glass shadow-lg' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={(e) => {
              handleScroll(e as any, '#hero');
              playBrandingAudio();
            }}
            className="text-xl font-extrabold tracking-tighter hover:opacity-80 transition-opacity flex items-center group"
            aria-label="Play Intro Audio"
            disabled={isPlaying}
          >
            PMR<span className="text-cyan-400">.</span>
            <div className={`ml-2 w-7 h-7 flex items-center justify-center rounded-full bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-all ${isPlaying ? 'scale-110 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : ''}`}>
              {isPlaying ? (
                <div className="flex items-center justify-center gap-[2px]">
                  <div className="w-[2px] h-3 bg-cyan-400 animate-[bounce_0.6s_infinite]"></div>
                  <div className="w-[2px] h-4 bg-cyan-400 animate-[bounce_0.8s_infinite]"></div>
                  <div className="w-[2px] h-3 bg-cyan-400 animate-[bounce_1s_infinite]"></div>
                </div>
              ) : (
                <i className="fas fa-play text-[10px] text-cyan-400 ml-0.5"></i>
              )}
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={`hover:text-white transition-colors duration-200 relative ${activeSection === item.href.replace('#', '') ? 'text-cyan-400' : ''
                  }`}
              >
                {item.name}
                {activeSection === item.href.replace('#', '') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-cyan-400 rounded-full"></span>
                )}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/maheshpolamreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="GitHub Profile"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://linkedin.com/in/maheshpolamreddy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center rounded-full glass hover:bg-white/10 transition-all relative"
              aria-label="Toggle Mobile Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : 'mb-1'}`}></span>
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
              <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm glass border-l border-white/10 transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col h-full p-8 pt-24">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    handleScroll(e, item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-2xl font-bold tracking-tight transition-all duration-300 hover:text-cyan-400 hover:translate-x-2 ${activeSection === item.href.replace('#', '') ? 'text-cyan-400' : 'text-white'
                    }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Social Links in Mobile Menu */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Connect</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/maheshpolamreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-cyan-500 hover:text-black transition-all"
                  aria-label="GitHub Profile"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://linkedin.com/in/maheshpolamreddy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full glass hover:bg-cyan-500 hover:text-black transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
