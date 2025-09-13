"use client"

import { ProjectForm } from "../../project-form";
import { notFound } from 'next/navigation';
import { useProjects } from "../../project-context";

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { projects } = useProjects();
  const projectId = parseInt(id, 10);
  
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto py-8">
      <ProjectForm project={project} />
    </div>
  );
}
