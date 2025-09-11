import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download } from 'lucide-react';
import { projectsData, skillsData } from '@/lib/data';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="space-y-24">
      <section id="hero" className="grid md:grid-cols-2 gap-12 items-center animate__animated animate__fadeIn">
        <div>
          <p className="text-lg md:text-xl text-foreground/80 mb-2">
            My Name Robith Yusuf Al Fahsa 👋
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-foreground mb-4 leading-tight">
            I'm a <span className="text-primary">Web Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
            Based in Kota Kudus, Indonesia.
          </p>
          <div className="flex gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Let's Start
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[420px]">
            <div className="absolute bg-orange-200/50 blur-3xl rounded-full w-full h-full -z-10"></div>
            <div className="absolute w-[420px] h-[420px] bg-gray-800 rounded-full flex items-center justify-center">
                 <Image
                    src="https://picsum.photos/seed/aboutme/400/400"
                    alt="Robith Yusuf Al Fahsa"
                    width={400}
                    height={400}
                    className="rounded-full object-cover"
                    data-ai-hint="developer portrait"
                />
            </div>
        </div>
      </section>

      <section id="about" className="grid md:grid-cols-3 gap-12 items-center animate__animated animate__fadeInUp">
        <div className="md:col-span-1 flex justify-center">
          <Image
            src="https://picsum.photos/seed/aboutme2/400/400"
            alt="Eka Saputra"
            width={400}
            height={400}
            className="rounded-lg border-4 border-primary/20 shadow-lg object-cover"
            data-ai-hint="developer working"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="text-3xl font-headline text-primary mb-4">About Me</h2>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            Hello! I'm Eka, a full-stack developer with a passion for building beautiful and functional web applications. With a strong foundation in both front-end and back-end technologies, I specialize in bringing ideas to life from concept to deployment.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            I thrive on solving complex problems and am constantly learning to keep up with the fast-paced world of web development. My goal is to create seamless, intuitive, and engaging user experiences.
          </p>
        </div>
      </section>

      <section id="skills" className="animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-headline text-primary text-center mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skillsData.map((skill) => (
            <Card key={skill.name} className="bg-card/80 hover:bg-card transition-all duration-300 transform hover:-translate-y-1 text-center">
              <CardContent className="p-4 flex flex-col items-center justify-center gap-2">
                <skill.icon className="w-10 h-10 text-primary" />
                <span className="font-medium text-sm">{skill.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="featured-projects" className="animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-headline text-primary text-center mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4 h-20">{project.description}</p>
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
