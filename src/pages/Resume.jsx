import React from "react";
import { motion } from "framer-motion";
import Kamala_Rai_Resume from "../assets/files/Kamala_Rai_Resume.pdf";

const Resume = () => {
  return (
    <section className='max-container'>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A data enthusiast passionate about <b>machine learning, analytics, and automation</b>.
          <br />
          The resume highlights my technical skills, research projects, and professional experience.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center space-y-8 md:space-y-14"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href={Kamala_Rai_Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mt-7 inline-flex items-center justify-center border-2 border-slate-950 bg-cyan-300 px-8 py-4 font-poppins text-sm font-black uppercase tracking-[0.18em] text-slate-950 shadow-[6px_6px_0_#0f172a] transition-all duration-200 before:absolute before:inset-1 before:border before:border-white/70 before:content-[''] hover:-translate-y-1 hover:bg-lime-300 hover:shadow-[10px_10px_0_#0f172a] focus:outline-none focus:ring-4 focus:ring-cyan-200 active:translate-x-1 active:translate-y-1 active:shadow-[3px_3px_0_#0f172a]"
        >
          <span className="absolute -left-2 -top-2 h-3 w-3 bg-pink-500 shadow-[calc(100%+0.25rem)_0_0_#22d3ee,0_calc(100%+0.25rem)_0_#bef264]" />
          <span className="relative">View Resume</span>
          <span className="ml-3 h-2 w-2 bg-slate-950 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>

      </div>

      <div className="py-16">
        <h3 className="subhead-text">Certifications</h3>

      </div>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>

      </div>
    </section>
  );
};

export default Resume;
