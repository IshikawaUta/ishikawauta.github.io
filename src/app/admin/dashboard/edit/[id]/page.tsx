
"use client"

import { projectsData } from "@/lib/data";
import { ProjectForm } from "../../project-form";
import { notFound } from 'next/navigation';

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const projectId = parseInt(params.id, 10);
  
  // In a real app, you would fetch this from a database.
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    // If the project doesn't exist, show a 404 page.
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <ProjectForm project={project} />
    </div>
  );
}
