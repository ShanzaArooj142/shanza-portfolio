import React from "react";
import { IoMdDownload } from "react-icons/io";
import GhostFibers from './GhostFibers';

const Navbar = () => {
  return (
    <div className="min-h-screen bg-[#05050A] text-white overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top glow */}
        <div   className="    absolute  top-[-200px]  left-1/2  -translate-x-1/2  w-[700px] h-[400px] bg-[#9333EA]/20 rounded-full blur-[130px] " />

        {/* Left glow */}
        <div
          className="
            absolute
            top-[300px]
            left-[-200px]
            w-[450px]
            h-[450px]
            bg-[#9333EA]/10
            rounded-full
            blur-[120px]
          "
        />

        {/* Right glow */}
        <div
          className="
            absolute
            top-[250px]
            right-[-200px]
            w-[450px]
            h-[450px]
            bg-[#06B6D4]/10
            rounded-full
            blur-[120px]
          "
        />

      </div>


      {/* ================= NAVBAR ================= */}
      <nav
        className="
          relative
          z-50
          mx-auto
          mt-5
          w-[92%]
          max-w-6xl
          min-h-[70px]
          px-4
          sm:px-5
          md:px-7

          rounded-full

          bg-[#0a0a0f]/80
          backdrop-blur-xl

          border
          border-purple-500/20

          shadow-[0_0_25px_rgba(147,51,234,0.18)]

          flex
          items-center
          justify-between
          gap-3
        "
      >

        {/* ================= LOGO + NAME ================= */}
       {/* <div className="flex items-center gap-3 sm:gap-4 shrink-0">

          
          <div>
            <div>
              
            </div>

            <span
              className="
                text-base
                sm:text-lg
                font-serif
                tracking-tight
                text-purple-300
              "
            >
              
            </span>
          </div>


         
          <span
            className="
              hidden
              sm:block

              text-xs
              md:text-sm

              font-medium
              tracking-wide
              text-gray-200

              whitespace-nowrap
            "
          >
            SHANZA AROOJ
          </span>

        </div>*/}


        <div className="flex items-center gap-3 sm:gap-4 shrink-0">

  {/* Logo */}
  <div
    className="
      relative
      w-12
      h-12
      rounded-full
      overflow-hidden
      shrink-0

      border
      border-purple-400/30

      bg-[#05050A]

      shadow-[0_0_12px_rgba(147,51,234,0.35)]
    "
  >

    <img
      src="/logo5.jpeg"
      alt="ShaNza ArOoJ Logo"
      className="
        absolute
        w-full
        h-full
        object-cover
        scale-[1.8]
      "
    />

    {/* Logo Glow */}
    <div
      className="
        absolute
        inset-0
        rounded-full
        pointer-events-none

        bg-gradient-to-br
        from-purple-500/10
        via-transparent
        to-cyan-500/15
      "
    />

  </div>


  {/* Name */}
  <div
    className="
      hidden
      sm:block

      text-lg
      font-extrabold
      tracking-widest

      bg-gradient-to-r
      from-white
      via-purple-300
      to-cyan-400

      bg-clip-text
      text-transparent

      font-serif

      whitespace-nowrap
    "
  >
    ShaNza ArOoJ
  </div>

</div>


        {/* ================= DESKTOP NAVIGATION ================= */}
        <div
          className="
            hidden
            lg:flex
            items-center
            gap-2
          "
        >

          <a
            href="#home"
            className="
              px-4
              py-2.5
              rounded-full

              text-sm
              text-gray-300

              transition-all
              duration-300

              hover:text-white
              hover:bg-purple-500/20
            "
          >
            Home
          </a>


          <a
            href="#about"
            className="
              px-4
              py-2.5
              rounded-full

              text-sm
              text-gray-300

              transition-all
              duration-300

              hover:text-white
              hover:bg-purple-500/20
            "
          >
            About
          </a>


          <a
            href="#projects"
            className="
              px-4
              py-2.5
              rounded-full

              text-sm
              text-gray-300

              transition-all
              duration-300

              hover:text-white
              hover:bg-purple-500/20
            "
          >
            Projects
          </a>


          <a
            href="#tech stack"
            className="
              px-4
              py-2.5
              rounded-full

              text-sm
              text-gray-300

              transition-all
              duration-300

              hover:text-white
              hover:bg-purple-500/20
            "
          >
            Tech Stack
          </a>


          <a
            href="#contact"
            className="
              px-4
              py-2.5
              rounded-full

              text-sm
              text-gray-300

              transition-all
              duration-300

              hover:text-white
              hover:bg-purple-500/20
            "
          >
            Contact
          </a>

        </div>


        {/* ================= DOWNLOAD CV ================= */}
        <a
          href="#contact"
          className="
            hidden
            sm:flex

            shrink-0

            relative
            group
            overflow-hidden

            items-center
            justify-center
            gap-2

            px-4
            sm:px-5
            md:px-6

            py-2.5
            sm:py-3

            rounded-full

            bg-gradient-to-r
            from-purple-600
            to-cyan-500

            text-white
            text-xs
            sm:text-sm
            font-medium

            whitespace-nowrap

            transition-all
            duration-300

            shadow-[0_0_20px_rgba(147,51,234,0.25)]
          "
        >

          {/* Hover gradient */}
          <span
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-cyan-500
              via-purple-600
              to-fuchsia-500

              translate-x-[-100%]

              group-hover:translate-x-0

              transition-transform
              duration-500
              ease-out
            "
          />


          {/* TEXT + ICON */}
          <span
            className="
              relative
              z-10

              flex
              items-center
              justify-center
              gap-2
            "
          >

            <span>
              Download CV
            </span>

            <IoMdDownload
              className="
                w-4
                h-4

                shrink-0

                transition-transform
                duration-300

                group-hover:translate-y-0.5
              "
            />

          </span>

        </a>


        {/* ================= MOBILE MENU ================= */}
        <button
          className="
            lg:hidden

            w-10
            h-10

            shrink-0

            rounded-full

            border
            border-white/10

            bg-white/5

            flex
            items-center
            justify-center

            text-gray-300

            transition-all
            duration-300

            hover:bg-purple-500/20
            hover:text-white
          "
        >
          ☰
        </button>

      </nav>


     <GhostFibers/>

    </div>
  );
};

export default Navbar;