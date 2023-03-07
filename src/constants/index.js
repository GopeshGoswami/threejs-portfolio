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
  divya,
  dirums,
  imumz,
  nishant,
  linkedin,
  youtube_clone,
  resume_builder,
  mern_todo,
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
    title: "MERN Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
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
    title: "MERN Stack Intern",
    company_name: "Dirums Collective Pvt. Ltd.",
    icon: dirums,
    iconBg: "#383E56",
    date: "March 2023 -  Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Graphic Designing Intern",
    company_name: "iMumz",
    icon: imumz,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Aug 2022",
    points: [
      "Assisted in the creation of graphic materials for the use of the marketing department, Website and App Thumbnails and Designs.",
      "Assisted the lead designer with day-to-day tasks to ensure organization and productivity.",
      "Delivered visually compelling illustrations and graphic elements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Whether it's UI design, coding or illustration, Gopesh does it all. I worked with him on several social media campaigns and the growth I saw was incredible. His positive attitude and attention to detail make him a welcome addition to any team.",
    name: "Nishant Patyal",
    designation: "Marketing Manager",
    company: "iMumz",
    image: nishant,
  },
  {
    testimonial:
      "Gopesh is a very talented, sincere and hardworking person. He has passionately worked on many projects and given great ideas to implement. He is an asset to any organisation he works with.",
    name: "Divya Srinivasan",
    designation: "Product Designer",
    company: "iMumz",
    image: divya,
  },
];

const projects = [
  {
    name: "Resume Builder OpenAI",
    description:
      "A resume builder with feedback, chatbot, and auto-generation features powered by OpenAI API for efficient resume creation. Contact me for the API Key.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "OpenAI-API",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: resume_builder,
    source_code_link: "https://github.com/GopeshGoswami/openai-resumeBuilder",
  },
  {
    name: "Youtbe Clone",
    description:
      "Responsive YouTube-clone, search & play any video/channel using public API. Will be adding login, comments & more with MERN stack.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restfulApi",
        color: "green-text-gradient",
      },
      {
        name: "materialUI",
        color: "pink-text-gradient",
      },
    ],
    image: youtube_clone,
    source_code_link: "https://youtube-clone-three-zeta.vercel.app",
  },
  {
    name: "MERN Todo",
    description:
      "A fully responsive, full-stack to-do list with CRUD operations - Create, Read, Update, and Delete - functionalities for efficient task management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mern_todo,
    source_code_link: "https://github.com/GopeshGoswami/mern-todo",
  },
];

export { services, technologies, experiences, testimonials, projects };
