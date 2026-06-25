import {
  Code2,
  Globe,
  LayoutDashboard,
  MonitorSmartphone,
  Server,
} from "lucide-react";

import sigma from "./assets/sigma.png";
import cansily from "./assets/cansily.png";
import poliversia from "./assets/poliversia.png";

export const navLinks = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Services",
  "Contact",
];

export const heroRoles = [
  "Full Stack Developer",
  "React Developer",
  "Node.js Developer",
  "Problem Solver",
];

export const heroTech = [
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "JavaScript",
  "HTML",
  "CSS",
];

export const stats = [
  { label: "Projects Completed", value: 8 },
  { label: "Technologies Learned", value: 15 },
  { label: "Hours of Coding", value: 1000 },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 92 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 90 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 86 },
      { name: "Express.js", level: 84 },
      { name: "REST APIs", level: 87 },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 78 },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: 86 },
      { name: "GitHub", level: 84 },
      { name: "VS Code", level: 95 },
      { name: "Postman", level: 82 },
      { name: "Figma", level: 72 },
    ],
  },
];

export const projects = [
  {
    title: "Cansily",
    category: "Full Stack",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://cansily.com",
    github: "#",
    image: cansily,
    short:
      "Cansily is used for farmers, agribusinesses, and consumer markets to buy, and place their products",
    full: "on the platform which will help consumers purchase items locally and globally.",
  },
  {
    title: "Poliversia",
    category: "Full Stack",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://poliversia.com",
    github: "#",
    image: poliversia,
    short:
      "Poliversia unifies webinar infrastructure, streaming, full interactive digital presence",
    full: "and monetization into a single, secure operating system",
  },
  {
    title: "Sigma Classes",
    category: "Full Stack",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    live: "https://sigma-classes.vercel.app",
    github: "#",
    image: sigma,
    short:
      "A full-stack educational platform for course management, note sharing, student registration, and admin operations.",
    full: "Sigma Classes is a full-stack educational platform designed to streamline digital learning and administrative management. The application enables course management, note sharing, student registration, and admin operations through a centralized dashboard. Built using React, Node.js, Express, and MongoDB Atlas, it offers secure authentication, efficient data management, and a seamless user experience for both students and administrators.",
  },
];

export const timeline = [
  {
    year: "2023 - Present",
    title: "BS Software Engineering",
    subtitle: "University of Gujrat",
    text: "Studying software engineering fundamentals, development, databases, and project design.",
  },
  {
    year: "Learning Journey",
    title: "Web Development",
    subtitle: "Frontend to Full Stack",
    text: "Built practical projects while learning responsive UI, React, backend APIs, and MongoDB.",
  },
  {
    year: "Specialization",
    title: "MERN Stack",
    subtitle: "React • Node • Express • MongoDB",
    text: "Focused on scalable web apps with modern UI and clean backend architecture.",
  },
];

export const services = [
  {
    title: "Frontend Development",
    icon: MonitorSmartphone,
    text: "Responsive and modern React interfaces with clean UX.",
  },
  {
    title: "Full Stack Development",
    icon: Code2,
    text: "Complete MERN applications with frontend, backend, and database integration.",
  },
  {
    title: "Responsive Website Design",
    icon: Globe,
    text: "Mobile-friendly and polished websites with premium layouts.",
  },
  {
    title: "Admin Dashboard Development",
    icon: LayoutDashboard,
    text: "Dashboards for management, analytics, and workflow operations.",
  },
  {
    title: "REST API Development",
    icon: Server,
    text: "Structured API design with secure routes and scalable architecture.",
  },
];

export const socials = [
  { name: "Instagram", href: "https://instagram.com/hire.web.developer" },
  // { name: "GitHub", href: "" },
  { name: "LinkedIn", href: "https://linkedin.com/in/emn-dev-3033b7262" },
  { name: "Email", href: "mailto:emanajmal187@gmail.com" },
];
