
import React, { useState, useEffect } from 'react';

export const BackToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const trackLength = documentHeight - windowHeight;
            const progress = (scrolled / trackLength) * 100;

            setScrollProgress(Math.min(progress, 100));
            setIsVisible(scrolled > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        toggleVisibility();

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full glass border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
            aria-label="Back to Top"
        >
            {/* Circular Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 56 56">
                <circle
                    cx="28"
                    cy="28"
                    r="26"
                    fill="none"
                    stroke="rgba(34, 211, 238, 0.2)"
                    strokeWidth="2"
                />
                <circle
                    cx="28"
                    cy="28"
                    r="26"
                    fill="none"
                    stroke="rgb(34, 211, 238)"
                    strokeWidth="2"
                    strokeDasharray={`${2 * Math.PI * 26}`}
                    strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
                    className="transition-all duration-300"
                    strokeLinecap="round"
                />
            </svg>

            {/* Arrow Icon */}
            <i className="fas fa-arrow-up text-cyan-400 text-lg group-hover:scale-110 group-hover:-translate-y-1 transition-all relative z-10"></i>
        </button>
    );
};
