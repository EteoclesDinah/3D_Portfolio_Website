import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Kamala_Rai_Resume from "../assets/files/Kamala_Rai_Resume.pdf";
import { certifications, educations } from "../constants";
import CTA from "../components/CTA";

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

      <hr className='border-slate-200 mt-10'/>

      <div className="py-16">
        <h3 className="subhead-text">Certifications</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Beyond my academic research and technical projects, I have also pursued professional certifications 
            to strengthen my expertise. These certifications demonstrate my commitment to continuous learning and 
            staying up to date with industry standards and emerging technologies.
            <br />Here's the rundown:
          </p>
        </div>

        <div className='mt-5 flex flex-col'>
          {certifications.map((certificate) => (
            <div className="w-full" key={certificate.title}>
              <div className='block-container'>

                <div className='mt-5 flex flex-col'>
                  <h4 className='text-2xl font-semibold font-poppins'>
                    {certificate.title}
                  </h4>

                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {certificate.company_name}
                  </p>

                  <p className='text-black-400 font-medium font-base' style={{margin:0}}>
                    {certificate.date}
                  </p>
                  <div className='mt-2 flex flex-col gap-3 text-slate-500'>
                    <p>
                      {certificate.description}
                    </p>
                  </div>
                  

                </div>

                <div className='flex justify-center items-center mt-5 mb-5'>
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <hr className='border-slate-200'/>

      <div className="py-16">
        <h3 className="subhead-text">Education</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            My academic journey has laid the foundation for my technical expertise and professional growth. 
            Through each stage of my education, I have developed strong analytical, problem-solving, 
            and practical skills while continuously expanding my knowledge. The institutions and programs 
            below represent the milestones that have shaped my learning and prepared me for future challenges.
            <br />
            Explore My Educational Journey:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {educations.map((education, index) => (
              <VerticalTimelineElement
                key={education.name}
                date={education.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={education.icon}
                      alt={education.name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }

                iconStyle={{
                  background: education.iconBg,
                }}

                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: education.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>

                  <h3 className='text-black text-xl font-poppins font-bold'>
                    {education.title0}
                  </h3>

                  <h3 className='text-black text-l font-poppins'>
                    {education.title1}
                  </h3>

                  <p className='text-black-500 font-medium font-base'
                  style={{margin:0}}>
                    {education.name}
                  </p>

                  <p className='text-black-300 font-medium font-base'
                  style={{margin:0}}>
                    {education.grade}
                  </p>
                </div>

                <ul className='timeline-points list-disc my-5 ml-5 space-y-2'>
                  {education.points.map(( point, index ) => (
                    <li 
                      key={`experience-point-${index}`}
                      className='text-black/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>

              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

      </div>

      <hr className='border-slate-200'/>

      <CTA />
    </section>
  );
};

export default Resume;

