
import React, { useState, useRef } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const isScrolled = scrollY > 50;
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

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
        
        <div className="hidden md:flex space-x-4 lg:space-x-8 text-[10px] lg:text-xs font-bold uppercase tracking-widest text-gray-400">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className="hover:text-white transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
           <a 
            href="https://github.com/maheshpolamreddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://linkedin.com/in/maheshpolamreddy" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full glass hover:bg-white/10 transition-colors"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};
