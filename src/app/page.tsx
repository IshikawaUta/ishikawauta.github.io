
"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase, Code2, MapPin, Award, Users, FolderKanban } from 'lucide-react';
import { projectsData, skillsData } from '@/lib/data';
import { TypeAnimation } from 'react-type-animation';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const featuredProjects = projectsData.slice(0, 3);
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-me');

  const stats = [
    { value: 4, suffix: "+", label: "Years of Experience", icon: Award },
    { value: 15, suffix: "+", label: "Happy Clients", icon: Users },
    { value: 20, suffix: "+", label: "Projects Completed", icon: FolderKanban },
  ];

  const { ref: statsRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const skillCategories = ['Frontend', 'Backend', 'Tools'];

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
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
             {aboutImage && (
              <div className="relative w-4/5 mx-auto aspect-square rounded-full shadow-lg overflow-hidden group border-4 border-primary p-2">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src={aboutImage.imageUrl}
                      alt={aboutImage.description}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={aboutImage.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-full"></div>
                </div>
              </div>
            )}
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-headline text-primary mb-4">About Me</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              A passionate web developer focused on creating elegant and efficient digital solutions. I specialize in <span className="font-semibold text-primary">full-stack development</span> with expertise in modern web technologies and frameworks, always aiming to build intuitive and high-performance applications.
            </p>
            <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map(stat => (
                <div key={stat.label} className="bg-primary/10 p-4 rounded-lg text-center group transform transition-transform hover:-translate-y-1">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2"/>
                  <p className="text-2xl font-bold text-foreground transition-all duration-300 group-hover:text-primary group-hover:scale-110">
                    {inView && <CountUp end={stat.value} duration={2.5} />}
                    {stat.suffix}
                  </p>
                  <p className="text-sm text-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
             <Button asChild size="lg" variant="link" className="p-0 text-primary">
                  <Link href="/contact">
                    Let's work together <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="animate__animated animate__fadeInUp">
        <h2 className="text-3xl font-headline text-primary text-center mb-12">My Skills</h2>
        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillsData
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <Card key={skill.name} className="bg-card/80 border-t-4 border-t-primary shadow-sm hover:shadow-primary/20 hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <skill.icon className="w-10 h-10 text-primary" />
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`h-2 w-2 rounded-full ${i < skill.levelValue ? 'bg-primary' : 'bg-muted'}`}
                              ></span>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground">{skill.name}</h4>
                          <p className="text-sm text-foreground/70">{skill.level}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
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
