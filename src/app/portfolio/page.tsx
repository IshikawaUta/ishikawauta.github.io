
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PortfolioPage() {
  return (
    <div className="space-y-12 animate__animated animate__fadeIn">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          My Portfolio
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Here is a collection of projects I've worked on. Each one represents a unique challenge and a learning opportunity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <Card key={project.id} className="overflow-hidden group flex flex-col">
            {project.id === 1 || project.id === 2 ? (
              <div className="relative w-full h-56">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                  data-ai-hint={project.imageHint}
                />
              </div>
            ) : (
              <div className="overflow-hidden relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={project.imageHint}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>
            )}
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
              {project.liveUrl && (
                <Button asChild variant="outline" className="mt-auto w-fit">
                  <Link href={project.liveUrl} target="_blank">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
