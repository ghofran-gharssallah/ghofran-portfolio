import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import { FaJava } from "react-icons/fa6";

import {
  SiSymfony,
  SiTailwindcss,
  SiPython,
  SiJavascript,
  SiMysql,
} from "react-icons/si";

import { BsCpu } from "react-icons/bs";

export const skills = [
  {
    title: "React",
    icon: FaReact,
    color: "text-cyan-400",
    description: "Building modern and interactive user interfaces.",
    category: "Frontend",
  },

  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
    description: "Dynamic web development with ES6+.",
    category: "Frontend",
  },

  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
    description: "Fast and responsive UI development.",
    category: "Frontend",
  },

  {
    title: "Node.js",
    icon: FaNodeJs,
    color: "text-green-500",
    description: "REST APIs and backend development.",
    category: "Backend",
  },

  {
    title: "Symfony",
    icon: SiSymfony,
    color: "text-white",
    description: "Robust PHP backend framework.",
    category: "Backend",
  },

  {
    title: "Java",
    icon: FaJava,
    color: "text-red-500",
    description: "Object-Oriented Programming fundamentals.",
    category: "Backend",
  },

  {
    title: "MySQL",
    icon: SiMysql,
    color: "text-blue-400",
    description: "Relational database management.",
    category: "Backend",
  },

  {
    title: "Python",
    icon: SiPython,
    color: "text-yellow-300",
    description: "Automation, AI and scripting.",
    category: "AI",
  },

  {
    title: "Artificial Intelligence",
    icon: BsCpu,
    color: "text-violet-400",
    description: "Building intelligent applications.",
    category: "AI",
  },

  {
    title: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
    description: "Version control and collaboration.",
    category: "Tools",
  },
];