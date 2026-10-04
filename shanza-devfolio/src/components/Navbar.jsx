import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative  bg-[#05050A] text-white overflow-hidden flex flex-col font-sans selection:bg-purple-500 selection:text-white">

      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.15), transparent 80%)`
        }}
      />

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">

        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] animate-pulse duration-1000"></div>

        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse duration-700"></div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293d12_1px,transparent_1px),linear-gradient(to_bottom,#1f293d12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <header className="relative z-50 w-full px-6 py-4 flex justify-center">

        <nav className="w-full max-w-6xl bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:border-purple-500/40 transition-colors duration-500">

          <div className="flex items-center gap-3">

            <img
              src="/portfoliologo.jpeg"
              alt="ShaNza ArOoJ Logo"
              className="w-10 h-10 object-contain rounded-full"
            />

            <div className="text-lg font-extrabold tracking-widest bg-gradient-to-r from-white via-purple-300 to-cyan-400 bg-clip-text text-transparent font-serif">
              ShaNza ArOoJ
            </div>

          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">

            <a
              href="#home"
              className="hover:text-white hover:scale-105 transition-all"
            >
              Home
            </a>

            <a
              href="#about"
              className="hover:text-white hover:scale-105 transition-all"
            >
              About
            </a>

            <a
              href="#projects"
              className="hover:text-white hover:scale-105 transition-all"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-white hover:scale-105 transition-all"
            >
              Contact
            </a>

          </div>

          <a
            href="https://github.com/ShanzaArooj142"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-full p-[1px]"
          >

            <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></span>

            <div className="relative flex items-center gap-2 bg-[#0a0a0f] px-5 py-2 rounded-full text-sm font-semibold text-white group-hover:bg-opacity-80 transition">

              <FaGithub className="w-4 h-4" />

              <span>GITHUB</span>

            </div>

          </a>

        </nav>

      </header>

    </div>
  );
};

export default Navbar;