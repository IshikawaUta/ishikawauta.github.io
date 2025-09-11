
"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { projectsData, skillsData } from '@/lib/data';
import { Icons } from '@/components/icons';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

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
            <Button asChild size="lg" className="btn-slide-effect">
                <Link href="/contact">LET'S START</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">My Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="grid md:grid-cols-2 gap-12 items-center animate__animated animate__fadeInUp">
        <div>
          <h2 className="text-3xl font-headline text-primary mb-4">About Me</h2>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            Hello! I'm Eka, a full-stack developer with a passion for building beautiful and functional web applications. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            I thrive on solving complex problems and am constantly learning to keep up with the fast-paced world of web development. My goal is to create seamless, intuitive, and engaging user experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {skillsData.slice(0, 5).map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={skill.name} className="flex flex-col items-center gap-2">
                <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center shadow-md hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
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
