import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    bus,
    car,
    contact,
    css,
    database,
    documentation,
    estate,
    excel,
    express,
    figma,
    gbd,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    mysql,
    nextjs,
    nodejs,
    notebook,
    powerpoint,
    pricewise,
    python,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    webscraping,
    word
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    /*{
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },*/
    /*{
       imageUrl: mui,
       name: "Material-UI",
        type: "Frontend",
    },*/
   /* {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },*/
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    /*{
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },*/
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Data Science, Backend",
    },
    {
        imageUrl: excel,
        name: "Excel",
        type: "Productivity",
    },
    {
        imageUrl: word,
        name: "Word",
        type: "Productivity",
    },
    {
        imageUrl: powerpoint,
        name: "Powerpoint",
        type: "Productivity",
    },
    {
        imageUrl: figma,
        name: "Figma",
        type: "Productivity",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Productivity",
    }
];

export const publications = [
    {
        title: 'A Classification Analysis-based Approach to Internet Adoption in Nepal.',
        conference_name: '2025 3rd International Conference on Intelligent Systems, Advanced Computing and Communication (ISACC)',
        icon: documentation,
        iconBg: "#7bbcf0",
        date: "February 2025",
        doi: "10.1109/ISACC65211.2025.10969200",
        doi_link: "https://doi.org/10.1109/ISACC65211.2025.10969200", 
        points: [
            "Published in IEEE Xplore.",
            "Applied advanced machine learning methods including XGBoost, SMOTE, Permutation Test, and Partial Dependence Analysis to examine the possible factors influencing Internet adoption in Nepal.",
            "Provided empirical insights into the digital divide and implications for ICT policy planning.",
            "Key Finding: ICT use is still a mostly urban phenomenon, with mobile phones being the de facto medium of internet use.",
            "Presented at ISACC 2025, an international IEEE conference.",
        ],
    },
];

export const experiences = [
   {
    title: "Cloud Analyst",
    company_name: "GrowByData",
    icon: gbd, 
    iconBg: "#e0f2fe",
    date: "August 2024 – Present", 
    points: [
      "Monitored and optimized cloud infrastructure performance, ensuring cost-effectiveness and scalability.",
      "Worked with cloud platforms to deploy, configure, and manage resources efficiently.",
      "Collaborated with cross-functional teams to analyze large datasets and generate insights.",
      "Documented workflows and prepared reports using Excel, Word, and PowerPoint for internal and client use.",
    ],
  },
];

export const practicalExperiences = [
  {
    title: "Data Analysis & Research",
    icon: database,
    iconBg: "#AFBC88",
    date: "2025",
    points: [
      "Conducted empirical data analysis and research using advanced machine learning methods such as XGBoost, Random Forest, SMOTE, Permutation Tests, and many more.",
      "Applied statistical tools and visualization techniques to explore social, behavioral, and policy-related datasets.",
      "Gained experience in publishing and presenting at international IEEE conferences."
    ]
  },

  {
    title: "Frontend Development",
    icon: webscraping,
    iconBg: "#accbe1",
    date: "2024",
    points: [
      "Built responsive and interactive web applications with React, HTML, CSS, and JavaScript.",
      "Integrated APIs and backend services to deliver dynamic, data-driven features.",
      "Worked with automation and web scraping tools like Selenium and Python for data extraction."
    ]
  },

  {
    title: "Full-Stack Development",
    icon: bus,
    iconBg: "#fbc3bc",
    date: "2023 – Present",
    points: [
      "Designed and implemented full-stack applications using React Native, Node.js, Express, MongoDB, and MySQL.",
      "Developed solutions for real-world use cases such as transportation fare calculators and academic note-sharing platforms.",
      "Created and managed database schemas, authentication systems, and user access controls."
    ]
  },

  {
    title: "UI/UX & Prototyping",
    icon: notebook,
    iconBg: "#EDDEA4",
    date: "2022 – Present",
    points: [
      "Designed user-friendly mockups and prototypes using Figma to visualize UI components.",
      "Collaborated on projects requiring both functional and aesthetic design balance.",
      "Improved usability and accessibility across web and mobile platforms."
    ]
  }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/EteoclesDinah',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kamala-rai-danuwar-54b07a294/',
    }
];

export const projects = [
    {
        iconUrl: database,
        theme: 'btn-back-green',
        name: 'Data Analysis of Internet Adoption of Nepal',
        description: 'Explored factors influencing Internet adoption in Nepal using advanced machine learning methods like XGBoost, SMOTE, PT, PDPS, with insights published in IEEE Xplore.',
        link: 'https://github.com/EteoclesDinah',
    },

    {
        iconUrl: webscraping,
        theme: 'btn-back-blue',
        name: 'Web Scraping using Selenium',
        description: 'Automated organic data scrapping from Google, and exported results to CSV files for research analysis; building full-stack web application using React, Flask, and Python.',
        link: 'https://github.com/EteoclesDinah/WebScraping_Selenium',
    },

    {
        iconUrl: bus,
        theme: 'btn-back-red',
        name: 'Ringroad Bus Fare Calculator',
        description: 'Developed a mobile app to calculate and display fares for bus stops along Kathmandu’s Ring Road using React Native.',
        link: 'https://github.com/EteoclesDinah/RingRoadBusFareCalculator',
    },

    {
        iconUrl: notebook,
        theme: 'btn-back-yellow',
        name: 'E-Notes Platform',
        description: 'Built a full-stack notes sharing platform with PHP and MySQL, enabling students and teachers to upload, access, and manage academic resources.',
        link: 'https://github.com/EteoclesDinah/E-NOTES',
    },
];