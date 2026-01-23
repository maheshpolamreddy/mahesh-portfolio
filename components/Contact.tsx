
import React from 'react';

export const Contact: React.FC = () => {
  const contactInfo = [
    { 
      label: 'Email', 
      value: 'polamreddymahesh623@gmail.com', 
      icon: 'fa-envelope', 
      href: 'mailto:polamreddymahesh623@gmail.com',
      aria: 'Send an email',
      delay: '0ms'
    },
    { 
      label: 'Phone', 
      value: '+91 70134 41009', 
      icon: 'fa-phone', 
      href: 'tel:+917013441009',
      aria: 'Call me',
      delay: '150ms'
    },
    { 
      label: 'Location', 
      value: 'Nellore, AP, India', 
      icon: 'fa-location-dot', 
      href: 'https://www.google.com/maps/place/East+St,+Manubolu,+Andhra+Pradesh+524405/@14.1984877,79.8694186,18.39z/data=!4m15!1m8!3m7!1s0x3a4c8cca0e958771:0xd3036c2025161f55!2sNellore,+Andhra+Pradesh!3b1!8m2!3d14.4425987!4d79.986456!16zL20vMDF0Y2Rr!3m5!1s0x3a4ce45786cf4847:0x8989c62473c0eac8!8m2!3d14.1980866!4d79.8710829!16s%2Fg%2F11c6sz0j34?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D',
      aria: 'Open specific location in Google Maps',
      delay: '300ms'
    }
  ];

  return (
    <div className="space-y-16 max-w-7xl mx-auto px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center space-y-6 max-w-2xl mx-auto animate-[fade-up-blur_0.8s_ease-out_forwards]">
        <div className="inline-block px-4 py-1.5 bg-pink-500/10 text-pink-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-pink-500/20">
          Connect
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          Get In <span className="text-pink-400 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">Touch</span>
        </h2>
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          Let’s build secure, scalable, and impactful software together. I'm always open to discussing new opportunities or technical challenges.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-12 items-stretch">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6 flex flex-col">
          {contactInfo.map((info, i) => (
            <a 
              key={i} 
              href={info.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={info.aria}
              className="group glass p-7 rounded-[2.5rem] flex items-center space-x-6 border border-white/5 hover:border-pink-500/40 hover:bg-white/[0.08] transition-all duration-700 hover:-translate-y-2 flex-1 cursor-pointer animate-[fade-up-blur_0.8s_ease-out_forwards]"
              style={{ animationDelay: info.delay }}
            >
              <div className="w-16 h-16 bg-white/5 flex items-center justify-center rounded-2xl group-hover:bg-pink-500 group-hover:text-black group-hover:rotate-12 transition-all duration-500 shadow-xl shrink-0">
                <i className={`fas ${info.icon} text-pink-400 text-2xl group-hover:text-inherit`}></i>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-gray-500 uppercase tracking-[0.25em] font-black mb-1">
                  {info.label}
                </p>
                <p className="font-bold text-base md:text-lg text-gray-200 group-hover:text-white transition-colors truncate">
                  {info.value}
                </p>
              </div>
            </a>
          ))}
          
          {/* Availability Card */}
          <div className="glass p-8 rounded-[2.5rem] bg-gradient-to-br from-pink-500/10 to-transparent border border-pink-500/20 flex flex-col justify-center items-center text-center space-y-2 animate-[fade-up-blur_0.8s_ease-out_forwards]" style={{ animationDelay: '450ms' }}>
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
            <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">Available for Hire</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 animate-[fade-up-blur_1s_ease-out_forwards]" style={{ animationDelay: '200ms' }}>
          <form 
            className="glass h-full p-8 md:p-10 rounded-[3.5rem] border border-white/10 space-y-8 relative overflow-hidden flex flex-col justify-between" 
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 blur-[120px] rounded-full -mr-20 -mt-20 pointer-events-none"></div>
            
            <div className="space-y-8 relative z-10 flex-1">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3 group/field">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 group-focus-within/field:text-pink-400 transition-colors">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Mahesh Reddy" 
                    className="w-full bg-white/5 p-5 rounded-2xl border border-white/10 focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all placeholder:text-gray-800 text-white font-medium"
                  />
                </div>
                <div className="space-y-3 group/field">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 group-focus-within/field:text-pink-400 transition-colors">Your Email</label>
                  <input 
                    type="email" 
                    placeholder="hello@domain.com" 
                    className="w-full bg-white/5 p-5 rounded-2xl border border-white/10 focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all placeholder:text-gray-800 text-white font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3 group/field">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 group-focus-within/field:text-pink-400 transition-colors">Subject</label>
                <input 
                  type="text" 
                  placeholder="Software Development Enquiry" 
                  className="w-full bg-white/5 p-5 rounded-2xl border border-white/10 focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all placeholder:text-gray-800 text-white font-medium"
                />
              </div>

              <div className="space-y-3 group/field">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 ml-1 group-focus-within/field:text-pink-400 transition-colors">Message</label>
                <textarea 
                  placeholder="I'd like to talk about a project..." 
                  rows={4} 
                  className="w-full bg-white/5 p-6 rounded-[2rem] border border-white/10 focus:border-pink-500/50 focus:ring-4 focus:ring-pink-500/5 outline-none transition-all placeholder:text-gray-800 text-white font-medium resize-none"
                ></textarea>
              </div>
            </div>

            <button className="group/btn relative w-full mt-8 py-5 bg-gradient-to-r from-pink-500 via-purple-600 to-pink-500 bg-[length:200%_auto] hover:bg-right text-white font-black rounded-[2.5rem] hover:scale-[1.02] active:scale-[0.98] transition-all duration-500 shadow-2xl shadow-pink-500/20 flex items-center justify-center space-x-4 z-10">
              <span className="tracking-widest uppercase text-xs">Transmit Securely</span>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:translate-x-2 group-hover/btn:-translate-y-1 transition-transform group-hover/btn:bg-white/30">
                <i className="fas fa-paper-plane text-[12px]"></i>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
