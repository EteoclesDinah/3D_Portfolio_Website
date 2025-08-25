import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className='mx-auto flex flex-col items-center w-full max-w-xl'>
    
    {/* Blue Card */}
    <div className='w-full text-black/70 text-center rounded-lg font-worksans font-semibold -mt-16'>
      <p className='sm:text-xl sm:leading-snug'>
        {text}
      </p>
    </div>

    {/* White Button */}
    <Link
      to={link}
      className='neo-brutalism-white rounded-lg text-center font-semibold flex items-center gap-2 button-overlap px-3 py-0.5'
    >
      {btnText}
      <img src={arrow} alt="arrow" className='w-4 h-4 object-contain' />
    </Link>

  </div>
);



const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center py-4 px-8 text-black mx-5 -mt-10 font-serif'>
            Hi, I am <span className='font-bold'>Kamala </span> 👋
            <br />
            A Computer Science Student from Nepal.
        </h1>
    ),
    2: (
        <InfoBox 
            text="Building projects and growing my skills along the way."
            link='/about'
            btnText="Learn More"
        />
    ),
    3: (
         <InfoBox 
            text="Each project tells a story of learning; take a look."
            link='/projects'
            btnText="Visit my Portfolio."
        />
    ),
    4: (
         <InfoBox 
            text="Got an idea or feedback? I’d love to hear from you."
            link='/contact'
            btnText="Let's talk."
        />
    )
};


const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;