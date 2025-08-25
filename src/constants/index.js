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
        doi: "DOI: 10.1109/ISACC65211.2025.10969200",
        doi_link: "https://doi.org/10.1109/ISACC65211.2025.10969200", 
        points: [
            "Published in IEEE Xplore.",
            "Applied advanced machine learning methods including XGBoost, SMOTE, Permutation Test, and Partial Dependence Analysis to examine the possible factors influencing Internet adoption in Nepal.",
            "Provided emperical insights into the digital divide and implications for ICT policy planning.",
            "Key Finding: ICT use is still a mostlly urban phenomenon, with mobile phones being the de facto medium of internet use.",
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

export const projectExperiences = [
    {
        title: "Data Analysis",
        project_name: "A Classification Analysis-based Approach to Internet Adoption in Nepal.",
        icon: database,
        iconBg: "#AFBC88",
        date: "2025",
        points: [
            "Applied advanced machine learning methods including XGBoost, SMOTE, Permutation Test, and Partial Dependence Analysis to examine the possible factors influencing Internet adoption in Nepal.",
            "Provided emperical insights into the digital divide and implications for ICT policy planning.",
            "Key Finding: ICT use is still a mostlly urban phenomenon, with mobile phones being the de facto medium of internet use.",
            "Presented at ISACC 2025, an international IEEE conference.",
        ]
    },

    {
        title: "Frontend Developer",
        project_name: "Web Scraping using Selenium",
        icon: webscraping,
        iconBg: "#accbe1",
        date: "2024",
        points: [
            "Developed an interactive web application using React, Flask, and Python.",
            "Implemented responsive design with HTML, CSS, and JavaScript, ensuring cross-browser compatibility",
            "Integrated backend functionality with Flask, and Python.",
            "Scraped organic contents from Google.",
            "Saved data n html_dumps, output.csv, url_list.csv",

        ]
    },

    {
        title: "Full Stack Developer",
        project_name: "Ringroad Bus Fare Calculator",
        icon: bus,
        iconBg: "#fbc3bc",
        date: "Jan 2024 - Present",
        points: [
            "Built full-stack application, using ReactNative.",
            "Designed database schemas and managed data storage using MongoDB and MySQL.",
            "Created interactive dashboards and reports.",
            "Designed mockups and prototypes using Figma to visualize UI components.",
        ],
  },

  {
    title: "Full Stack",
    project_name:"E-Notes",
    icon: notebook,
    iconBg: "#EDDEA4",
    date: "2022",
    points: [
        "Built full-stack web-application, connecting HTML frontend interfaces with PHP",
        "Designed database schemas and managed data storage using MySQL, and XAMPP.",
        "Users can access the notes, view, and download of different semesters of Engineering Fields namely Computer, IT, and Civil, under Pokhara University.",
        "Only the registered users, teachers, or admin can upload, delete, modify the notes.",
        "Designed mockups and prototypes using Figma to visualize UI components.",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];