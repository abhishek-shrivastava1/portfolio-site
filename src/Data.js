//Import Images
import ignite1 from "./img/ignite-1.png";
import ignite2 from "./img/ignite-2.png";
import payNow from "./img/paynow-1.png";
import musicPlayer1 from "./img/music-player-1.png";
import musicPlayer2 from "./img/music-player-2.png";
import googleKeeper1 from "./img/google-keeper.png";
import googleKeeper2 from "./img/google-keeper-2.png";
import tinDog1 from "./img/tindog-1.png";
import tinDog2 from "./img/tindog-2.png";
import simonGame1 from "./img/simon-game-1.png";
import simonGame2 from "./img/simon-game-2.png";

// Testimonials images
import vasanti from "./img/vasanti.jfif";
import rashmi from "./img/rashmi.jfif";
import gulfam from "./img/gulfam.jfif";
import samira from "./img/samira.jfif";

export const projectData = [
  {
    id: 1,
    title: "Ignite - IMDB clone for games",
    mainImg: ignite1,
    secondaryImg: ignite2,
    url: "/work/ignite",
    githubUrl: "https://github.com/abhishek-shrivastava1/ignite-imdb-clone",
    awards: [
      {
        id: 1,
        title: "About",
        description: "“A clone of IMDB made for games.”",
      },
      {
        id: 2,
        title: "Technologies used",
        description:
          "“ReactJS, Redux, Framer Motion, Styled components, Axios, React Router, Bootstrap”",
      },
      {
        id: 3,
        title: "Inspiration",
        description:
          "“The reason to make this project was to have good understanding of redux.”",
      },
    ],
  },
  {
    id: 2,
    title: "PayNow! - Payment management dashboard",
    mainImg: payNow,
    url: "/work/pay-now",
    // secondaryImg: goodtimes2,
    githubUrl:
      "https://github.com/abhishek-shrivastava1/payment-dashboard-react",
    awards: [
      {
        id: 1,
        title: "About",
        description: "“Payment dashboard to manage your payments.”",
      },
      {
        id: 2,
        title: "Technologies used",
        description: "“ReactJS, React Router, Bootstrap”",
      },
      {
        id: 3,
        title: "Inspiration",
        description:
          "“The reason to make this project was to create large scale project kind of application”",
      },
    ],
  },
  {
    id: 3,
    title: "Waves - Music player",
    mainImg: musicPlayer1,
    url: "/work/waves",
    githubUrl: "https://github.com/abhishek-shrivastava1/music-player",
    secondaryImg: musicPlayer2,
    awards: [
      {
        id: 1,
        title: "About",
        description: "“Music player with all major functionality”",
      },
      {
        id: 2,
        title: "Technologies used",
        description: "“ReactJS, Sass”",
      },
      {
        id: 3,
        title: "Inspiration",
        description:
          "“The reason to make this project was to managem complex components in core react”",
      },
    ],
  },
  {
    id: 4,
    title: "Keeper - Google keeper clone",
    mainImg: googleKeeper1,
    url: "/work/keeper",
    githubUrl: "https://github.com/abhishek-shrivastava1/react-google-keeper",
    secondaryImg: googleKeeper2,
    awards: [
      {
        id: 1,
        title: "About",
        description: "“Google keeper clone to maintain notes”",
      },
      {
        id: 2,
        title: "Technologies used",
        description: "“ReactJS”",
      },
      {
        id: 3,
        title: "Inspiration",
        description: "“A basic react project to understand concepts of react.”",
      },
    ],
  },
  {
    id: 5,
    title: "TinDog - Tinder clone for dogs",
    mainImg: tinDog1,
    url: "/work/tindog",
    githubUrl: "https://github.com/abhishek-shrivastava1/tin-dog",
    secondaryImg: tinDog2,
    awards: [
      {
        id: 1,
        title: "About",
        description: "“Clone of tinder website”",
      },
      {
        id: 2,
        title: "Technologies used",
        description: "“HTML, CSS, Bootstrap”",
      },
      {
        id: 3,
        title: "Inspiration",
        description:
          "“A basic project to have understanding of basic html, css”",
      },
    ],
  },
  {
    id: 6,
    title: "Simon says - Game",
    mainImg: simonGame1,
    url: "/work/simonsays",
    githubUrl: "https://github.com/abhishek-shrivastava1/simon-game",
    secondaryImg: simonGame2,
    awards: [
      {
        id: 1,
        title: "About",
        description: "“Simon says game.”",
      },
      {
        id: 2,
        title: "Technologies used",
        description: "“HTML, CSS, JS, JQuery”",
      },
      {
        id: 3,
        title: "Inspiration",
        description: "“A simple project made to have understanding of pure JS”",
      },
    ],
  },
];

export const FaqData = [
  {
    id: 1,
    question: "What kind of projects do I want to work on?",
    answer:
      "I would want to work on scalable projects which would give me an opportunity to enhance my core skills and exhibite the best of my ablitites.",
  },
  {
    id: 2,
    question: "What kind of technologies interests me?",
    answer:
      "I am currently very interested in working on technologies like SpringBoot, ReactJS. I prefer to work on projects that use microservices architecture. My preference would be projects, where I can apply my fullstack skills.",
  },
  {
    id: 3,
    question: "What kind of opportunities am I open to?",
    answer:
      "I would want a deep learning curve and I am pretty open to all kinds of opportunities, be it full-time, part-time, freelance or consultation based projects. Work coming my way should satisfy my hunger to learn and should offer challenging and fun filled exposure.",
  },
  {
    id: 4,
    question: "What are the other things that I am interested in?",
    answer:
      "Other than work, I believe in physical fitness and I love all sorts of sports. I am interested in playing volleyball, skating, gaming and binge watching. I also love to eat and hangout with loved ones.",
  },
];

export const socialDetails = [
  {
    id: 1,
    icon: "fab fa-linkedin fa-2x",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-shrivastava-2b092615b/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  {
    id: 2,
    icon: "fa fa-code fa-2x",
    name: "Leetcode",
    link: "https://leetcode.com/u/abhis1497/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  {
    id: 3,
    icon: "fab fa-github fa-2x",
    name: "GitHub",
    link: "https://github.com/abhishek-shrivastava1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  {
    id: 4,
    icon: "fab fa-stack-overflow fa-2x",
    name: "StackOverFlow",
    link: "https://stackoverflow.com/users/11946317/abhishek-shrivastava",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  // {
  //   id: 6,
  //   icon: "fas fa-code fa-2x",
  //   name: "Code Chef",
  //   link: "https://www.codechef.com/users/abhis1497",
  //   description:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  // },

  {
    id: 5,
    icon: "fas fa-envelope fa-2x",
    name: "Email",
    link: "mailto:abhis1497@gmail.com",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  {
    id: 6,
    icon: "fab fa-facebook fa-2x",
    name: "Facebook",
    link: "https://www.facebook.com/abhishek.shrivastava.188478",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  {
    id: 7,
    icon: "fab fa-instagram fa-2x",
    name: "Instagram",
    link: "https://www.instagram.com/abhishek__s/",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
  {
    id: 8,
    icon: "fab fa-hackerrank fa-2x",
    name: "HackerRank",
    link: "https://www.hackerrank.com/abhis1497",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, repellendus.",
  },
];

export const skillsDetails = [
  {
    id: 1,
    icon: "fab fa-java fa-3x ",
    name: "Java",
    percentage: "85%",
  },
  {
    id: 2,
    icon: "fab fa-js-square fa-3x",
    name: "JavaScript",
    percentage: "70%",
  },
  {
    id: 3,
    icon: "fas fa-database fa-3x",
    name: "Database",
    percentage: "80%",
  },
  {
    id: 4,
    icon: "fab fa-react fa-3x",
    name: "React",
    percentage: "75%",
  },
  {
    id: 5,
    icon: "fas fa-cubes fa-3x",
    name: "Data Structures",
    percentage: "75%",
  },
  {
    id: 6,
    icon: "fas fa-leaf fa-3x",
    name: "Problem solving",
    percentage: "90%",
  },
  {
    id: 7,
    icon: "fas fa-leaf fa-3x",
    name: "Spring Boot",
    percentage: "85%",
  },
];

export const contactInformation = [
  {
    id: 1,
    title: "Address",
    information: "Pune, Maharashtra, India",
  },
  {
    id: 2,
    title: "Contact",
    information: "+91-8975171434",
  },
  {
    id: 3,
    title: "Email",
    information: "abhis1497@gmail.com",
  },

  {
    id: 4,
    title: "Age",
    information: "abhis1497@gmail.com",
  },
  {
    id: 5,
    title: "DOB",
    information: "14/09/1997",
  },
];

export const experienceData = [
  {
    id: 1,
    designation: "Senior Software Development Engineer",
    company: "Assurekit Technology and Services Private Limited (Series A)",
    from: "April 2021",
    to: "Current",
    companyWebsite: "https://assurekit.com/",
    timelineDate: "April 2021",
    description: [
      "- Developed products that serve as underlying layers for various product lines for clients like Paytm, Lazypay, Jobsurance and Refyne.",
      "- Led a team of 7 people and delivered health insurance vertical within a short period maintaining quality which involved working closely with stakeholders, designing the system and delivering frontend, backend and supporting infrastructure.",
      "- Contributed significantly to the design and development of income protection by creating 12 microservices, serving over 1 million users.",
      "- Architected services end-to-end from API design, entity-relation modelling, optimizations and documentation and had ownership of 6 microservices.",
      "- Optimised API thereby decreasing the response time by 90% with the help of Redis for caching and by using indexing and optimising query which has more than 2M+ records",
      "- Designed, developed and tested scalable and maintainable API that can handle up to 1000+ requests per second.",
      "- Created separate queues for lower runtime clients which led to reduction in Amazon SQS waiting time by 60%.",
      "- Mentored junior developers, conducting code reviews and providing guidance on best practices, resulting in a 20% decrease in the team's overall bugs in sprint.",
      "- Reduced deployment time and effort from 1 day to 2 hours by implementing CI/CD pipelines and automating changelog and versioning processes",
      "- Tech Stack: SpringBoot, ReactJS, MongoDB, MySQL, NodeJS, Express, AWS, Lambda, CICD, Amazon SQS, S3, EC2, Java, Javascript, Typescript, Redis."
    ]
  },
  {
    id: 3,
    designation: "Web Development Consultant",
    company: "Digital Media Hub",
    from: "March 2020",
    to: "September 2020",
    companyWebsite: "https://www.digitalmediahub.xyz/",
    timelineDate: "March 2020",
    description: [
      "- Delivered successful launch of 6+ websites, managing the entire lifecycle from production and test environment setup to database integration and live deployment helping generate $5000+ in revenue",
      "- Provided comprehensive support and training to clients post-delivery, ensuring seamless transition and empowering users with the necessary skills for effective application utilization.",
      "- Improved project success by implementing Agile methodologies, ensuring on-time delivery through iterative development, continuous improvement, transparent communication and team coordination.",
      "- Tech Stack: HTML, CSS, WordPress, Javascript, MySQL, JIRA, Figma.",
      "- Link: https://stylesters.com | https://www.ajmotors.in | https://www.encubay.com",
    ],
  },
  {
    id: 2,
    designation: "Software Development Engineer (Backend)",
    company: "Proctur - Eduspace Technologies Pvt. Ltd.",
    from: "September 2019",
    to: "April 2021",
    companyWebsite: "https://proctur.com",
    timelineDate: "September 2019",
    description: [
      "- Contributed towards designing, developing and optimizing a system that handled 300K users.",
      "- Initiated and independently crafted the Super Admin product, overseeing its entire development lifecycle",
      "- Implemented CRON jobs to process attendance of students that could process 1M+ records every day",
      "- Optimized query time by identifying query bottlenecks, adding relevant indexes, and performing load tests.",
      "- Developed RESTful APIs using SpringBoot REST Framework for seamless integration with external services and third-party applications.",
      "- Tech Stack: SpringBoot, ReactJS, MySQL, S3, AWS."
    ],
  }
];

export const testimonialData = [
  {
    id: 1,
    name: "Vasanti Derkar",
    image: vasanti,
    testimonial:
      "Abhishek is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person & a great employee with a very strong problem solving skills, inspite of being a fresher. Desire for proficiency and education makes Abhishek a valuable asset to the team & any company.",
    date: "28th November 2019",
    profileLink:
      "https://www.linkedin.com/in/vasanti-derkar-0a3540143/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BksN3tRdOQGWg8t69InWJ%2BA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile",
  },
  {
    id: 2,
    name: "Rashmi Shrivastava",
    image: rashmi,
    testimonial:
      "Abhishek is very easy to work with and positive be it in a team or as an individual. He is proactive, has desire to learn new stacks/ technologies and help others. He has excellent understanding of client/project requirements, timelines and has always new ideas for the team as well as projects. I am always satisfied with the quality of work that he has provided. Would love to work with him again in future.",
    date: "11th December 2020",
    profileLink:
      "https://www.linkedin.com/in/rashmi-shrivastava-3280b983/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSmnL%2FK9MQx20jdDY0UZzrA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile",
  },
  // {
  //   id: 3,
  //   name: "Gulfam Ali",
  //   image: gulfam,
  //   testimonial:
  //     "Abhishek is a fantastic person to work with, and is not only a multi-skilled and insightful colleague, but also an inspiring strategist. Very good person & a great employee with a very strong problem solving skills, inspite of being a fresher. Desire for proficiency and education makes Abhishek a valuable asset to the team & any company.",
  //   date: "28/11/2019",
  //   profileLink:
  //     "https://www.linkedin.com/in/vasanti-derkar-0a3540143/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BksN3tRdOQGWg8t69InWJ%2BA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile",
  // },
  {
    id: 4,
    name: "Samira Nikharge",
    image: samira,
    testimonial:
      "We have been hands on various projects together and Abhishek is one of the best people I had as a patner, He has strong problem solving skills and his ability for tackling problems is remarkable! His dedication to work on various projects and desire to learn various technologies has always inspired me, as a team member Abhishek earns my highest recommendation.",
    date: "5th January 2021",
    profileLink:
      "https://www.linkedin.com/in/rashmi-shrivastava-3280b983/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BSmnL%2FK9MQx20jdDY0UZzrA%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_profile_view_base-recommendation_details_profile",
  },
];
