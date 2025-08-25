import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'> 
      <h1 className='head-text'>
        Hello, I am <span className='blue-gradient_text font-semibold drop-shadow'>Kamala Rai Danuwar.</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          A Computer Engineering Student from Nepal, with practical experience in web development 
          and data science. <br></br>
          With a passion for building things that live on the web, I enjoy turning ideas into interactive projects using 
          React, React Native, Python, and other technologies.
          Over the past few years, I’ve worked on projects in web development, mobile apps, and Python scripting, 
          which have strengthened both my technical and problem-solving skills.<br></br>
          For me, coding is not just about syntax; it’s about creating meaningful solutions and learning with every challenge.<br></br>
          In addition to my projects, I have a keen interest in data analysis and research, which led me to publish a paper in IEEE.<br></br>
          I’m eager to grow further, collaborate with others, and bring creative ideas to life.

        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img 
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>
            I have worked with all sorts of technologies, leveling up my skills, and teaming up with smart people. 
            <br />Here's the rundown:
          </p>
         </div>

         <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }

                iconStyle={{
                  background: experience.iconBg,
                }}

                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>

                  <p className='text-black-500 font-medium font-base'
                  style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='timeline-points list-disc my-5 ml-5 space-y-2'>
                  {experience.points.map(( point, index ) => (
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

export default About;