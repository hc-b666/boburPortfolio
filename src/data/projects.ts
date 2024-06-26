import { TbBrandHtml5, TbBrandCss3, TbBrandSass, TbBrandJavascript, TbBrandTypescript, TbBrandReact, TbBrandTailwind, TbBrandNextjs, TbBrandNodejs, TbBrandMongodb } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

// ToDo
//  Correct the icons type

export interface ProjectInterface {
  title: string;
  description: string;
  langs: { lang: string; icon: any }[];
  image?: string;
  type: "Work" | "Side Hustle" | "University Course Works";
  link: string;
  date: string;
}

const projects: ProjectInterface[] = [
  {
    title: "Profi24.uz - UI Layout",
    description: "A UI layout for Profi24.uz",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "SASS", icon: TbBrandSass },
      { lang: "JavaScript", icon: TbBrandJavascript },
    ],
    image: "/images/profi24-uz.jpg",
    type: "Work",
    link: "/profi24.uz-verstka",
    date: "June, 2024",
  },
  {
    title: "Pomodoro App",
    description: "A simple Pomodoro App. I learned how to use basics of JavaScript.",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "CSS", icon: TbBrandCss3 },
      { lang: "JavaScript", icon: TbBrandJavascript },
    ],
    type: "Side Hustle",
    link: "/pomodoro-app",
    date: "January, 2024",
  },
  {
    title: "Task Management - Backend",
    description: "A simple backend using ExpressJS for my Kanban frontend task management app.",
    langs: [
      { lang: "TypeScript", icon: TbBrandTypescript },
      { lang: "NodeJS", icon: TbBrandNodejs },
      { lang: "ExpressJS", icon: SiExpress },
      { lang: "MongoDB", icon: TbBrandMongodb },
    ],
    type: "Side Hustle",
    link: "/kanban-back",
    date: "May, 2024",
  },
  {
    title: "Web Technology - Course Work 2",
    description: "This is coursework from Web Technology module for semester 2. I learned how to create simple CRUD backend using NodeJS and ExpressJS.",
    langs: [
      { lang: "JavaScript", icon: TbBrandJavascript },
      { lang: "NodeJS", icon: TbBrandNodejs },
      { lang: "ExpressJS", icon: SiExpress },
    ],
    type: "University Course Works",
    link: "/WT_CW2_00015589",
    date: "March, 2024",
  }, 
  {
    title: "Web Technology - Course Work 1",
    description: "This is coursework from Web Technology module for semester 1. I learned how to create simple frontend using HTML5, CSS3 and JavaScript.",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "CSS", icon: TbBrandCss3 },
      { lang: "JavaScript", icon: TbBrandJavascript },
    ],
    type: "University Course Works",
    link: "/WT-CW1-00015589.github.io",
    date: "Novermber, 2023",
  },
  {
    title: "My Portfolio",
    description: "This is my portfolio. I used my creativity to design and develop this portfolio.",
    langs: [
      { lang: "TypeScript", icon: TbBrandTypescript },
      { lang: "ReactJS", icon: TbBrandReact },
      { lang: "Tailwind", icon: TbBrandTailwind },
    ],
    type: "Side Hustle",
    link: "/hc-b666.me",
    date: "June, 2024",
  },
  {
    title: "Next Practice for the first time",
    description: "I read the tutorial of official Next documentation and created this dashboard app. I learned how to use basics of NextJS, Zod, and PostgreSQL.",
    langs: [
      { lang: "TypeScript", icon: TbBrandTypescript },
      { lang: "NextJS", icon: TbBrandNextjs },
      { lang: "Tailwind", icon: TbBrandTailwind },
      { lang: "PostgreSQL", icon: BiLogoPostgresql },
    ],
    type: "Side Hustle",
    link: "/next-practice",
    date: "April, 2024",
  },
  {
    title: "Illuminous - Movie App UI Layout",
    description: "A UI layout for Illuminous - Movie App. Design was from the Figma",
    langs: [
      { lang: "JavaScript", icon: TbBrandJavascript },
      { lang: "ReactJS", icon: TbBrandReact },
      { lang: "Tailwind", icon: TbBrandTailwind },
    ],
    type: "Side Hustle",
    link: "/illumious",
    date: "April, 2024",
  },
  {
    title: "MyTeam Figma - UI Layout",
    description: "A UI layout for MyTeam. Design was from the Figma",
    langs: [
      { lang: "HTML5", icon: TbBrandHtml5 },
      { lang: "CSS", icon: TbBrandCss3 },
    ],
    type: "Side Hustle",
    link: "/myteam",
    date: "December, 2023",
  }
];

export default projects;
