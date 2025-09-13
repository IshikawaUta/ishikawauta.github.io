
"use client"

import { ProjectForm } from "../../project-form";
import { notFound } from 'next/navigation';
import { useProjects } from "../../project-context";
import { useMemo } from "react";

export default function EditProjectPage({ params }: { params: { id: string } }) {
  const { projects } = useProjects();
  
  const projectId = useMemo(() => parseInt(params.id, 10), [params.id]);
  
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
