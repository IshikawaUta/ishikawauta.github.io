
"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Metadata } from 'next';

// This metadata will be static for this page
export const metadata: Metadata = {
  title: "My Portfolio | Eka Saputra",
  description: "A collection of web development, mobile, and design projects by Eka Saputra.",
};

type Category = "All" | "Web" | "Mobile" | "Design";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<Category>("All");

  const categories: Category[] = ["All", "Web", "Mobile", "Design"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4">
          My Portfolio
        </h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Here is a collection of projects I've worked on. Each one represents a unique challenge and a learning opportunity.
        </p>
      </div>

      <div className="flex justify-center gap-2 md:gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={filter === category ? "default" : "outline"}
            onClick={() => setFilter(category)}
            className="rounded-full transition-all"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => {
          const hasEffect = ![1, 2, 3].includes(project.id);
          return (
            <div key={project.id} className="animate__animated animate__fadeInUp">
              <Card className="overflow-hidden group flex flex-col h-full">
                <div className="overflow-hidden relative h-56">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className={cn(
                      "object-cover w-full h-full",
                      hasEffect && "transition-transform duration-500 group-hover:scale-105"
                    )}
                    data-ai-hint={project.imageHint}
                  />
                  {hasEffect && (
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-2xl font-bold">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <Badge key={`${project.id}-${tech}-${index}`} variant="secondary">{tech}</Badge>
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
            </div>
          )
        })}
      </div>
    </div>
  );
}
