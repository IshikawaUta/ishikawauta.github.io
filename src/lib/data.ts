import { Award, Users, FolderKanban, Database, Code, Server, GitBranch, Monitor, Wind, ExternalLink } from 'lucide-react';

export type Project = {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageHint: string;
  category: 'Web' | 'Mobile' | 'Design';
  liveUrl?: string;
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
    title: "Benartwork",
    description: "Website yang dibuat dengan menggunakan flask sebagai backend dan bootstrap sebagai frontend juga mongodb dan Cloudinary sebagai penyimpanan manajemen konten",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI"],
    imageUrl: "https://res.cloudinary.com/dzsqaauqn/image/upload/v1754583125/ldzfch8sknfb5hfaekte.jpg",
    imageHint: "funding platform",
    category: "Web",
    liveUrl: "https://www.benartwork07.com/"
  },
  {
    id: 2,
    title: "Eksa Shop",
    description: "Website yang dibuat dengan menggunakan Flask sebagai backend dan Bootstrap sebagai frontend juga MongoDB Atlas serta Imgur sebagai penyimpanan manajemen konten",
    technologies: ["React", "Node.js", "MongoDB", "Charts"],
    imageUrl: "https://res.cloudinary.com/dzsqaauqn/image/upload/v1754582928/hb5dzf63uhaft4huyukr.jpg",
    imageHint: "financial dashboard",
    category: "Web",
    liveUrl: "https://store.ekasaputra.my.id/"
  },
  {
    id: 3,
    title: "Ekspost",
    description: "Web ini dibuat dengan menggunakan Flask sebagai backend dan Bootstrap sebagai frontend juga MongoDB Atlas dan cloudinary sebagai penyimpanan manajemen konten",
    technologies: ["Gatsby", "GraphQL", "Stripe"],
    imageUrl: "https://res.cloudinary.com/dzsqaauqn/image/upload/v1754582540/h9emir3cpruwoyghlehi.jpg",
    imageHint: "online shopping",
    category: "Web",
    liveUrl: "https://ekspost.vercel.app/index"
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
