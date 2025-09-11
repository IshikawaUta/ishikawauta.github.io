
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code2, MapPin } from 'lucide-react';
import { projectsData, skillsData } from '@/lib/data';
import { Icons } from '@/components/icons';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const stats = [
    { value: "4+", label: "Years Exp." },
    { value: "20+", label: "Projects" },
    { value: "15+", label: "Clients" },
    { value: "5+", label: "Tech Stack" },
  ];

  return (
    <div className="space-y-24">
      <section id="hero" className="relative bg-muted -mx-4 -mt-8 sm:-mx-6 sm:-mt-12 lg:-mx-8 p-8 sm:p-12 lg:p-16 rounded-b-2xl shadow-md overflow-hidden">
        <div className="text-center relative z-10">
          <p className="text-lg md:text-xl text-foreground/80 mb-2">
            My Name Eka Saputra 👋
          </p>
          <h1 className="text-4xl md:text-7xl font-extrabold text-foreground mb-4 leading-tight">
            I'm a{' '}
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'System Analyst',
                1000,
                'Fullstack Dev',
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary"
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
            Based in Tangerang, Indonesia.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="btn-shine-effect">
                <Link href="/contact">LET'S START</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="btn-shine-effect btn-outline-primary">
                <Link href="/portfolio">My Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="animate__animated animate__fadeInUp">
        <div className="bg-card p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-headline text-foreground mb-4">Web Developer & AI Enthusiast</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              A passionate web developer focused on creating elegant and efficient digital solutions. I specialize in <span className="text-primary font-semibold">full-stack development</span> with expertise in modern web technologies and frameworks.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground/90">Based in Kudus, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="text-foreground/90">Full Stack Web Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="text-foreground/90">Freelancer & Content Creator Technology</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {stats.map(stat => (
                <div key={stat.label} className="bg-muted p-4 rounded-lg">
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
        </div>
      </section>

      <section id="skills" className="animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-headline text-primary text-center mb-8">My Skills</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skillsData.map((skill) => (
              <Card key={skill.name} className="bg-card/80 hover:bg-card transition-all duration-300 transform hover:-translate-y-1 text-center group">
                <CardContent className="p-4 flex flex-col items-center justify-center gap-3">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-all duration-300">
                    <skill.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-all duration-300" />
                  </div>
                  <span className="font-medium text-sm mt-2">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-projects" className="animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-headline text-primary text-center mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <CardContent className="p-4">
                <h3 className="font-headline text-xl mb-2">{project.title}</h3>
                <p className="text-foreground/80 text-sm mb-4 h-16">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                <Button asChild variant="link" className="p-0 text-primary">
                  <Link href="/portfolio">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
