import React from "react";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Kamala_Rai_Resume from "../assets/files/Kamala_Rai_Resume.pdf";
import { certifications, educations, publications, workExperiences } from "../constants";
import CTA from "../components/CTA";

const MotionDiv = motion.div;

const Resume = () => {
  return (
    <section className='max-container'>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Passionate about transforming data into meaningful insights through <b>Machine Learning, Analytics, and Automation</b>.
          <br />
          This page showcases my education, certifications, technical skills, projects,
          and experiences that demonstrate my continuous learning and professional growth.        </p>
      </div>

      <MotionDiv
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
      </MotionDiv>

      <hr className='border-slate-200 mt-10'/>

      <div className="py-16">
        <h3 className="subhead-text">Publications</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Beyond my technical projects, I have also contributed to academic research and shared my findings with the wider community. 
            My research has been presented at an international IEEE conference and published in IEEE Xplore, contributing to the broader research community.
            <br /><br />
          </p>
        </div>

        <div className='mt-5 flex flex-col gap-12'>
          {publications.map((publication) => (
            <div className="w-full" key={publication.conference_name}>
              <div className="block-container flex flex-col items-center gap-8 md:flex-row md:gap-12">

                <div className='mt-5 flex flex-1 flex-col'>
                  <h4 className='text-2xl font-semibold font-poppins'>
                    {publication.conference_name}
                  </h4>

                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    <a
                      href={publication.doi_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-800"
                    >
                      {publication.doi}
                    </a>
                  </p>

                  <p className='text-black-400 font-medium font-base' style={{margin:0}}>
                    {publication.date}
                  </p>

                  <div className='mt-2 flex flex-col gap-3 text-slate-500'>
                    <p>
                      {publication.description}
                    </p>
                  </div>

                </div>

                <div className='flex flex-1 justify-center items-center mt-5 mb-5'>
                  <img
                  src={publication.imageUrl}
                  alt={publication.title}
                  className='w-full max-w-md object-contain'
                  />
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

      <hr className='border-slate-200 mt-10'/>

      <div className="py-16">
        <h3 className="subhead-text">Experience</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My professional journey involves working in dynamic team environments, applying technical knowledge to solve real-world challenges. This experience allowed me to collaborate with industry professionals, strengthen my technical skills, and gain valuable insights into workflows and best practices.
            <br /><br />Below is an overview of my professional experience and the skills I developed along the way:
          </p>
        </div>

        <div className='mt-5 flex flex-col gap-12'>
          {workExperiences.map((experience) => (
            <div className="w-full" key={experience.title}>
              <div className="block-container flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">

                <div className='mt-5 flex flex-1 flex-col'>
                  <h4 className='text-2xl font-semibold font-poppins'>
                    {experience.title}
                  </h4>

                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>

                  <p className='text-black-400 font-medium font-base' style={{margin:0}}>
                    {experience.date}
                  </p>
                  <div className='mt-2 flex flex-col gap-3 text-slate-500'>
                    <p>
                      {experience.description}
                    </p>
                  </div>
                  

                </div>

                <div className='flex flex-1 justify-center items-center mt-5 mb-5'>
                  <img
                    src={experience.imageUrl}
                    alt={experience.title}
                    className='w-full max-w-md object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <hr className='border-slate-200'/>

      <div className="py-16">
        <h3 className="subhead-text">Certifications</h3>

        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Alongside my academic journey, I have completed workshops and professional training programs to strengthen my technical skills. 
            These experiences provided hands-on exposure to data analytics, business intelligence, cybersecurity, and industry best practices while reinforcing my commitment to continuous learning.
            <br /><br />Explore the certifications that have contributed to my professional journey:
          </p>
        </div>

        <div className='mt-5 flex flex-col gap-12'>
          {certifications.map((certificate) => (
            <div className="w-full" key={certificate.title}>
              <div className="block-container flex flex-col items-center gap-8 md:flex-row md:gap-12">

                <div className='mt-5 flex flex-1 flex-col'>
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

                <div className='flex flex-1 justify-center items-center mt-5 mb-5'>
                  <img
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    className='w-full max-w-md object-contain'
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
            My educational journey has provided a strong foundation in computer science, mathematics, data analytics, and research methodology. Throughout my academic career, 
            I have developed critical thinking, problem-solving, and analytical skills while working on projects, research, and collaborative learning experiences.
            <br /><br />
            Beyond coursework, my education has encouraged me to explore emerging technologies such as machine learning, artificial intelligence, data visualization, and automation. 
            These experiences have strengthened my ability to transform theoretical concepts into practical solutions and prepared me to tackle real-world challenges with confidence.
            <br /><br />
            Below are the key milestones that have shaped my academic and professional development:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {educations.map((education) => (
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
