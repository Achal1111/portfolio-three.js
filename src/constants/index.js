import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  genisys,
  drip,
  physicswallah,
  twitterclone,
  cryptohunter,
  fitnessapp,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Genisys Group",
    icon: genisys,
    iconBg: "#383E56",
    date: "Apr 2019 - Nov 2021",
    points: [
      "Developed Chat-bot for self-generating ticket resolution system using Vanilla Javascript.",
      "Translated designs to frontend code along with streamlining existing code to improve site performance.",
      "Collaborated with UX designers and Back End Developers to ensure coherence between all parties.",
    ],
  },
  {
    title: "Software Engineer 2",
    company_name: "Drip Capital",
    icon: drip,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Apr 2023",
    points: [
      "Developed Supply Chain Finance Dashboard for Buyers.",
      "Integration of third-party libraries like Plaid, Mix-panel, etc.",
      "Redesigned entire website by translating designs into totally new branding (www.dripcapital.com).",
      "Developed platform where Sellers and Buyers can connect.",
      "Developed platform for container tracking of shipments using Next JS",
      "Contributed to in house UI library in Material UI.",
      "Actively participated in code reviews, design iterations, QA workflows and PRD discussions.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company_name: "PhysicsWallah",
    icon: physicswallah,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Led the development and enhancement of various education-focused products, including:-",
      "PW-Infnite-Practice: Designed and implemented a platform where students can practice tests endlessly, fostering continuous learning and improvement.",
      "PW-Mentorship: Developed a chat system enabling seamless communication between teachers and students, facilitating personalized mentorship and support.",
      "PW-Battle-Ground: Spearheaded the creation of a unique learning environment where teachers guide students through tests via audio, enhancing engagement and comprehension.",
      "PW-Community: Contributed to the development of a collaborative platform where teachers and students can share posts, comment, and interact, fostering a sense of community and knowledge exchange.",
      "PW-Reels: Played a key role in building a video-centric learning platform, allowing students to access educational content through engaging video reels, promoting active learning and retention.",
      "Collaborated with cross-functional teams to conceptualize, implement, and deliver high-quality features and enhancements.",
      "Architected efficient and scalable front-end solutions prioritizing performance, usability, and maintainability.",
      "Mentored junior frontend engineers, providing guidance and support to foster their growth and development.",
      "articipated in code reviews, discussions, and brainstorming sessions to drive continuous improvement and innovation within the team.",
    ],
  },
  
];

const projects = [
  {
    name: "Twitter Clone",
    description:
      " A sleek, fast, and secure app for real-time conversations and trend updates.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "GraphQL",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
      {
        name: "Postgres",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma ORM",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: twitterclone,
    source_code_link: "https://github.com/Achal1111",
  },
  {
    name: "Crypto Hunter",
    description:
      "Cryptocurrency Tracker App in React JS, Material UI and Chart JS with full responsive fuctionality. I have used Context API to manage the state of our app and Coin Gecko API for backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "MatertialUI",
        color: "green-text-gradient",
      },
      {
        name: "ChartJs",
        color: "pink-text-gradient",
      },
    ],
    image: cryptohunter,
    source_code_link: "https://github.com/Achal1111",
  },
  {
    name: "Fitness Workouts",
    description:
      "With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much more.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: fitnessapp,
    source_code_link: "https://github.com/Achal1111",
  },
];

export { services, technologies, experiences, projects };
