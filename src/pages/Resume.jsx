import React from "react";
import { motion } from "framer-motion";
import Kamala_Rai_Resume from "../assets/files/Kamala_Rai_Resume.pdf";

const Resume = () => {
  return (
    <section className="max-container">

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A data enthusiast passionate about <b>machine learning, analytics, and automation</b>.
          <br />
          The resume highlights my technical skills, research projects, and professional experience.
        </p>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center text-center space-y-8 md:space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <button
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          onClick={() => window.open(Kamala_Rai_Resume, "_blank")}
        >
          VIEW RÉSUMÉ
        </button>
      </motion.div>

    </section>
  );
};

export default Resume;