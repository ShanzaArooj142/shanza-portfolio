import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Mouse position track karne ke liye state (Spotlight effect ke liye)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[90vh] bg-[#05050A] text-white overflow-hidden flex flex-col justify-center font-sans selection:bg-purple-500 selection:text-white px-6">
      
      {/* 1. Dynamic Mouse Follower Spotlight */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 80%)`
        }}
      />

      {/* 2. Ambient Background Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse duration-1000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse duration-700"></div>
        
        {/* Subtle Grid Lines Background Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d12_1px,transparent_1px),linear-gradient(to_bottom,#1f293d12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* 3. Hero Content Section */}
      <div className="relative z-10 max-w-6xl mx-auto w-full py-20">
        <div className="max-w-3xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs tracking-wider mb-6 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping"></span>
            FRONTEND DEVELOPER & UI DESIGNER
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            HI, I'M SHANZA AROOJ <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              BUILDING WEB MAGIC
            </span>
          </h1>
          
          {/* Description */}
          <p className="text-gray-400 text-lg md:text-xl mb-10 font-light leading-relaxed">
            Specializing in modern React, Tailwind CSS, and crafting pixel-perfect, highly responsive user interfaces with smooth interactions.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects" 
              className="relative group px-8 py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(168,85,247,0.6)] hover:bg-gray-100 transition-all duration-300 text-center"
            >
              <span className="relative z-10">VIEW PROJECTS</span>
            </a>

            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white font-bold text-sm tracking-wide hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 text-center backdrop-blur-md"
            >
              GET IN TOUCH
            </a>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;