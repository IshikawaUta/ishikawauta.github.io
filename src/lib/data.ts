import { Award, Users, FolderKanban, Database, Code, Server, GitBranch, Monitor, Wind } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
};

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: string;
  levelValue: number;
  category: 'Frontend' | 'Backend' | 'Tools';
};


export const projectsData: Project[] = [
  {
    id: 1,
    title: "Patungin - Splitting the cost Platform",
    description: "Modern Pooling platform that enables users to create and contribute to various funding campaigns.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    imageUrl: "https://picsum.photos/seed/patungin/600/400",
    imageHint: "funding platform"
  },
  {
    id: 2,
    title: "PLN Financial Management Portal",
    description: "A comprehensive platform for managing electricity bills, payments, and customer financial transactions.",
    technologies: ["React", "Node.js", "MongoDB", "Charts"],
    imageUrl: "https://picsum.photos/seed/pln/600/400",
    imageHint: "financial dashboard"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Fully-featured online shopping platform with product management and order processing.",
    technologies: ["Gatsby", "GraphQL", "Stripe"],
    imageUrl: "https://picsum.photos/seed/ecommerce/600/400",
    imageHint: "online shopping"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "An analytics dashboard to monitor social media engagement and performance across multiple platforms.",
    technologies: ["Vue.js", "Chart.js", "Firebase"],
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    imageHint: "social media"
  },
  {
    id: 5,
    title: "Weather Forecast App",
    description: "A simple and elegant weather app that provides real-time weather data and forecasts for any location.",
    technologies: ["React", "OpenWeatherMap API"],
    imageUrl: "https://picsum.photos/seed/project5/600/400",
    imageHint: "weather map"
  },
  {
    id: 6,
    title: "Recipe Finder",
    description: "A web application to discover new recipes based on available ingredients, with filters and a favorites list.",
    technologies: ["Angular", "TypeScript", "Spoonacular API"],
    imageUrl: "https://picsum.photos/seed/project6/600/400",
    imageHint: "food cooking"
  },
];

export const skillsData: Skill[] = [
    { name: "React", icon: Code, level: "Advanced", levelValue: 4, category: "Frontend" },
    { name: "Next.js", icon: Code, level: "Advanced", levelValue: 4, category: "Frontend" },
    { name: "JavaScript", icon: Code, level: "Expert", levelValue: 5, category: "Frontend" },
    { name: "TypeScript", icon: Code, level: "Advanced", levelValue: 4, category: "Frontend" },
    { name: "HTML5", icon: Code, level: "Expert", levelValue: 5, category: "Frontend" },
    { name: "CSS3", icon: Code, level: "Expert", levelValue: 5, category: "Frontend" },
    { name: "Tailwind CSS", icon: Wind, level: "Expert", levelValue: 5, category: "Frontend" },
    { name: "Node.js", icon: Server, level: "Intermediate", levelValue: 3, category: "Backend" },
    { name: "MongoDB", icon: Database, level: "Intermediate", levelValue: 3, category: "Backend" },
    { name: "PostgreSQL", icon: Database, level: "Intermediate", levelValue: 3, category: "Backend" },
    { name: "Docker", icon: Monitor, level: "Intermediate", levelValue: 3, category: "Tools" },
    { name: "Git", icon: GitBranch, level: "Advanced", levelValue: 4, category: "Tools" },
];


export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
];
