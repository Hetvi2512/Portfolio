import iss from "./asserts/expert.svg";
import chat from "./asserts/chat.PNG";
import tshirt from "./asserts/tshirt.PNG";
import ReactJS from "./asserts/ReactJS.png";
import NodeJS from "./asserts/NodeJS.png";
import SocketIO from "./asserts/SocketIO.png";
import MongoDB from "./asserts/MongoDB.png";
import PostgreSQL from "./asserts/PostgreSQL.png";
import JWT from "./asserts/JWT.png";
import Express from "./asserts/Express.png";

export const HeaderSection = {
  title: "Hi all I'm Hetvi",
  description: " I am a Full Stack Web Developer working with",
  skills: ["Javascript", 1000, "NodeJS", 1000, "ReactJS", 1000],
};
export const skillsSection = {
  title: "Skills",
  skills: [
    "⚡ Web Applications with MERN Stack",
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Progressive Web Applications ( PWA )",
  ],
  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "AiFillHtml5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },

    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const ExpereinceEducation = {
  title: "Experience and Education",
  content: [
    {
      date: "January 2021 - present",
      place: "Gateway Group Of Companies",
      city: "Ahmedabad, India",
      details: "Working as a full stack developer with Javascript technologies",
      icon: "work",
    },
    {
      date: "Febraury 2019 - July 2019",
      place: "Lodz University Of Technology",
      city: "Poland, Europe",
      details: "Studied in poland under ERASMUS+ (Semester exchange programme)",
      icon: "education",
    },
    {
      date: "June 2017 - June 2021",
      place: "Marwadi University",
      city: "Rajkot, India",
      details: "Bachelor of Technology",
      icon: "education",
    },
  ],
};

export const Projects = [
  {
    imageUrl: iss,
    imageAlt: "Intelligent Support System",
    title: "Intelligent Support System",
    shortdescription:
      "Intelligent Support System is an online platform for query resolution.",
    longDescription:
      " It provides support to customer queries for their products/services from the subject domain experts in their respective areas. It also provides graph and report for analysis of pending and solved queries.",
    technology: [
      { tech: "ReactJS", image: ReactJS },
      { tech: "NodeJS", image: NodeJS },
      { tech: "PostgreSQL", image: PostgreSQL },
      { tech: "SocketIO", image: SocketIO },
      { tech: "JWT", image: JWT },
      { tech: "Express", image: Express },
    ],
  },
  {
    imageUrl: chat,
    imageAlt: "Tiny Talks Chat Application",
    title: "Tiny Talks Chat Application",
    shortdescription:
      "This Chat Application was developed for study project which had features of single and group chat.",
    longDescription:
      "It consists of features for adding or removing group members or changing group name.It also uses Socket-io for real time messaging.",
    technology: [
      { tech: "ReactJS", image: ReactJS },
      { tech: "NodeJS", image: NodeJS },
      { tech: "MongoDB", image: MongoDB },
      { tech: "SocketIO", image: SocketIO },
      { tech: "JWT", image: JWT },
      { tech: "Express", image: Express },
    ],
  },
  {
    imageUrl: tshirt,
    imageAlt: "T-shirt Designing App",
    title: "T-shirt Designing App",
    shortdescription:
      "Thi application allows user to design apparels using pre-defined themes.",
    longDescription:
      "It has some pre-defined themes and different colors you can choose from.",
    technology: [{ tech: "ReactJS", image: ReactJS }],
  },
];
